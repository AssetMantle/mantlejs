import { fromBech32, toBech32, fromHex, toHex, toUtf8 } from "@cosmjs/encoding";
import { chains } from "chain-registry";
import {
  bech32AddressSeperator,
  defaultChainName,
  defautPlaceholderAddress,
  getPlaceholderAddress,
  shortenAddressSize,
} from "../config";
import base64url from "base64url";
import { sha256 as jsSha256 } from "js-sha256";

export const shortenAddress = (address, chainName = defaultChainName) => {
  if (address && address != defautPlaceholderAddress) {
    const splitArrays = address
      ?.toString()
      .trim()
      .split(bech32AddressSeperator);
    const hrp = splitArrays?.[0];
    const frontSection = hrp + bech32AddressSeperator;
    const middleSection =
      splitArrays?.[1]?.length >= shortenAddressSize * 2
        ? splitArrays?.[1]?.substr(0, shortenAddressSize)
        : "";
    const endSection =
      splitArrays?.[1]?.length >= shortenAddressSize
        ? splitArrays?.[1]?.substr(0 - shortenAddressSize)
        : splitArrays?.[1];
    return frontSection + middleSection + "..." + endSection;
  }
  // get the hrp of the chain
  const hrpValue = chains.find(
    (_chain) => _chain?.chain_name === chainName
  )?.bech32_prefix;
  return getPlaceholderAddress(hrpValue);
};

export const convertBech32Address = (address, chainName = defaultChainName) => {
  if (address) {
    try {
      // convert address to hex
      const { data } = fromBech32(address);

      // get the hrp of the chain
      const hrpValue = chains.find(
        (_chain) => _chain?.chain_name === chainName
      )?.bech32_prefix;

      // convert hex address to chain address
      const destinationChainAddress = toBech32(hrpValue, data);
      return destinationChainAddress;
    } catch (error) {
      console.error("Error in lib function: ", error);
      throw error;
    }
  }
  return address;
};

// BASIC CRYPTOGRAPHIC PRIMITIVES

const generateHashID = (...args) => {
  // console.log('inside generateHashID, args: ', args)
  const hexArrayList = [];
  // append all arrays (as hex values) into the empty array
  args.forEach((arg) => {
    if (arg?.length > 0) hexArrayList.push(toHex(arg));
  });

  // if hexAraryList is empty, return an empty array
  if (hexArrayList.length == 0) return hexArrayList;

  // sort the array in ascending order
  const sortedHexArrayList = hexArrayList.sort();
  // join it back to a single array
  const sortedUint8ArrayList = sortedHexArrayList.map((hexArray) =>
    fromHex(hexArray)
  );
  const joinedUint8Array = sortedUint8ArrayList.reduce(
    (finalArray, valueArray) => [...finalArray, ...valueArray],
    []
  );
  const hexOfJoinedArray = jsSha256(joinedUint8Array);
  return fromHex(hexOfJoinedArray);
};

const toBase64Url = (uint8Array) => base64url(uint8Array) + "=";

const getKeyUint8ArrayList = (propertiesArray) => {
  const filteredPropertiesArray = propertiesArray?.filter(
    (property) =>
      (property?.key ?? property?.key) && (property?.type ?? property?.type)
  );
  const keyByteList = filteredPropertiesArray?.map((property) => {
    const keyUint8Array = toUtf8(property?.key);
    const valueUint8Array = toUtf8(property?.type);
    const keyValueUint8Array = new Uint8Array([
      ...keyUint8Array,
      ...valueUint8Array,
    ]);
    return keyValueUint8Array;
  });
  return keyByteList;
};

const getValueUint8ArrayList = (propertiesArray) => {
  // console.log('inside getValueUint8ArrayList, propertiesArray: ', propertiesArray)
  const filteredPropertiesArray = propertiesArray?.filter(
    (property) => property?.value ?? property?.value
  );

  // console.log('filteredPropertiesArray: ', filteredPropertiesArray)

  if (filteredPropertiesArray.length == 0) return filteredPropertiesArray;

  // console.log('filteredArray: ', filteredPropertiesArray)
  const defaultValueUint8ArrayList = filteredPropertiesArray?.map((property) =>
    generateHashID(toUtf8(property?.value))
  );

  // console.log('defaultValueUint8ArrayList: ', defaultValueUint8ArrayList)
  return generateHashID(...defaultValueUint8ArrayList);
};

const stringToProperties = (strValue) => {
  const strPropertiesArray = strValue?.toString()?.split(",");
  const propertyArray = strPropertiesArray?.map((strProperty) => {
    const strPropertyBits = strProperty?.toString()?.split(":");
    const valuePropertyBits = strPropertyBits?.[1]?.toString()?.split("|");
    const property = {
      key: strPropertyBits?.[0],
      type: valuePropertyBits?.[0],
      value: valuePropertyBits?.[1],
    };
    return property;
  });
  return propertyArray;
};

const propertiesToString = (propertiesArray) => {
  const propertiesStr = propertiesArray?.reduce(
    (aggregate, currentValue, currentIndex, array) => {
      const aggregateStr =
        aggregate +
        currentValue?.key +
        ":" +
        currentValue?.type +
        "|" +
        currentValue?.value;
      return currentIndex < array.length - 1
        ? aggregateStr + ","
        : aggregateStr;
    },
    ""
  );
  return propertiesStr;
};

export const getClassificationID = (definitionObject) => {
  // get the byte array of the key list of immutable properties
  const immutableMesaPropertyList =
    stringToProperties(definitionObject?.value?.immutableProperties) || [];
  const immutableMetaPropertyList =
    stringToProperties(definitionObject?.value?.immutableMetaProperties) || [];
  const immutablePropertyList = [
    ...immutableMesaPropertyList,
    ...immutableMetaPropertyList,
  ];

  const immutableKeyArrayList = getKeyUint8ArrayList(immutablePropertyList);

  // get the byte array of the key list of mutable properties
  const mutableMesaPropertyList =
    stringToProperties(definitionObject?.value?.mutableProperties) || [];
  const mutableMetaPropertyList =
    stringToProperties(definitionObject?.value?.mutableMetaProperties) || [];
  const mutablePropertyList = [
    ...mutableMesaPropertyList,
    ...mutableMetaPropertyList,
  ];
  const mutableKeyArrayList = getKeyUint8ArrayList(mutablePropertyList);

  // get the byte array of the default value list of immutable properties

  const immutableValueArrayList = getValueUint8ArrayList(immutablePropertyList);

  const hashImmutableKeyArrayList = generateHashID(...immutableKeyArrayList);
  const hashMutableKeyArrayList = generateHashID(...mutableKeyArrayList);
  // use generateHashID function to calculate the classification ID in Uint8Array Format
  const classificationID = generateHashID(
    hashImmutableKeyArrayList,
    hashMutableKeyArrayList,
    immutableValueArrayList
  );

  // return the base64 encoded format of classificationID
  return toBase64Url(classificationID);
};

export const getEntityID = (issueObject) => {
  // get the classification ID from the issueObject and convert it to Uint8Array
  const classificationIDUint8Array = new Uint8Array(
    base64url.toBuffer(issueObject?.value?.classificationID)
  );

  // get the byte array of the key list of immutable properties
  const immutableMesaPropertyList =
    stringToProperties(issueObject?.value?.immutableProperties) || [];
  const immutableMetaPropertyList =
    stringToProperties(issueObject?.value?.immutableMetaProperties) || [];
  const immutablePropertyList = [
    ...immutableMesaPropertyList,
    ...immutableMetaPropertyList,
  ];

  const immutableValueArrayList = getValueUint8ArrayList(immutablePropertyList);

  // use generateHashID function to calculate the entity ID in Uint8Array Format
  const entityID = generateHashID(
    classificationIDUint8Array,
    immutableValueArrayList
  );

  // return the base64 encoded format of entityID
  return toBase64Url(entityID);
};

export const getNubIdentityID = (nubID) => {
  const classificationIDUint8Array = base64url.toBuffer(
    "Tw96hXEJjSw/aQ9rNh0c/72wQUL5gzEdODohcVY4l6I="
  );
  const nubIDHashUintArray = generateHashID(generateHashID(toUtf8(nubID)));
  const nubIdentityID = generateHashID(
    nubIDHashUintArray,
    classificationIDUint8Array
  );
  return toBase64Url(nubIdentityID);
};
