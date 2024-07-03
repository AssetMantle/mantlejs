//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../../../schema/ids/base/classification_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../../schema/ids/base/asset_id";
import { Height, HeightAmino, HeightSDKType } from "../../../../../schema/types/base/height";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../../../schema/lists/base/property_list";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  fromID?: IdentityID;
  classificationID?: ClassificationID;
  takerID?: IdentityID;
  makerAssetID?: AssetID;
  takerAssetID?: AssetID;
  expiresIn?: Height;
  makerSplit: string;
  takerSplit: string;
  immutableMetaProperties?: PropertyList;
  immutableProperties?: PropertyList;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.transactions.make.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  classification_i_d?: ClassificationIDAmino;
  taker_i_d?: IdentityIDAmino;
  maker_asset_i_d?: AssetIDAmino;
  taker_asset_i_d?: AssetIDAmino;
  expires_in?: HeightAmino;
  maker_split?: string;
  taker_split?: string;
  immutable_meta_properties?: PropertyListAmino;
  immutable_properties?: PropertyListAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.orders.transactions.make.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  taker_i_d?: IdentityIDSDKType;
  maker_asset_i_d?: AssetIDSDKType;
  taker_asset_i_d?: AssetIDSDKType;
  expires_in?: HeightSDKType;
  maker_split: string;
  taker_split: string;
  immutable_meta_properties?: PropertyListSDKType;
  immutable_properties?: PropertyListSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    classificationID: undefined,
    takerID: undefined,
    makerAssetID: undefined,
    takerAssetID: undefined,
    expiresIn: undefined,
    makerSplit: "",
    takerSplit: "",
    immutableMetaProperties: undefined,
    immutableProperties: undefined,
    mutableMetaProperties: undefined,
    mutableProperties: undefined
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.orders.transactions.make.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerID !== undefined) {
      IdentityID.encode(message.takerID, writer.uint32(34).fork()).ldelim();
    }
    if (message.makerAssetID !== undefined) {
      AssetID.encode(message.makerAssetID, writer.uint32(42).fork()).ldelim();
    }
    if (message.takerAssetID !== undefined) {
      AssetID.encode(message.takerAssetID, writer.uint32(50).fork()).ldelim();
    }
    if (message.expiresIn !== undefined) {
      Height.encode(message.expiresIn, writer.uint32(58).fork()).ldelim();
    }
    if (message.makerSplit !== "") {
      writer.uint32(66).string(message.makerSplit);
    }
    if (message.takerSplit !== "") {
      writer.uint32(74).string(message.takerSplit);
    }
    if (message.immutableMetaProperties !== undefined) {
      PropertyList.encode(message.immutableMetaProperties, writer.uint32(82).fork()).ldelim();
    }
    if (message.immutableProperties !== undefined) {
      PropertyList.encode(message.immutableProperties, writer.uint32(90).fork()).ldelim();
    }
    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(98).fork()).ldelim();
    }
    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Message {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.fromID = IdentityID.decode(reader, reader.uint32());
          break;
        case 3:
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 4:
          message.takerID = IdentityID.decode(reader, reader.uint32());
          break;
        case 5:
          message.makerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 6:
          message.takerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 7:
          message.expiresIn = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.makerSplit = reader.string();
          break;
        case 9:
          message.takerSplit = reader.string();
          break;
        case 10:
          message.immutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 11:
          message.immutableProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 12:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 13:
          message.mutableProperties = PropertyList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.takerID = object.takerID !== undefined && object.takerID !== null ? IdentityID.fromPartial(object.takerID) : undefined;
    message.makerAssetID = object.makerAssetID !== undefined && object.makerAssetID !== null ? AssetID.fromPartial(object.makerAssetID) : undefined;
    message.takerAssetID = object.takerAssetID !== undefined && object.takerAssetID !== null ? AssetID.fromPartial(object.takerAssetID) : undefined;
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Height.fromPartial(object.expiresIn) : undefined;
    message.makerSplit = object.makerSplit ?? "";
    message.takerSplit = object.takerSplit ?? "";
    message.immutableMetaProperties = object.immutableMetaProperties !== undefined && object.immutableMetaProperties !== null ? PropertyList.fromPartial(object.immutableMetaProperties) : undefined;
    message.immutableProperties = object.immutableProperties !== undefined && object.immutableProperties !== null ? PropertyList.fromPartial(object.immutableProperties) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.from_i_d !== undefined && object.from_i_d !== null) {
      message.fromID = IdentityID.fromAmino(object.from_i_d);
    }
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    if (object.taker_i_d !== undefined && object.taker_i_d !== null) {
      message.takerID = IdentityID.fromAmino(object.taker_i_d);
    }
    if (object.maker_asset_i_d !== undefined && object.maker_asset_i_d !== null) {
      message.makerAssetID = AssetID.fromAmino(object.maker_asset_i_d);
    }
    if (object.taker_asset_i_d !== undefined && object.taker_asset_i_d !== null) {
      message.takerAssetID = AssetID.fromAmino(object.taker_asset_i_d);
    }
    if (object.expires_in !== undefined && object.expires_in !== null) {
      message.expiresIn = Height.fromAmino(object.expires_in);
    }
    if (object.maker_split !== undefined && object.maker_split !== null) {
      message.makerSplit = object.maker_split;
    }
    if (object.taker_split !== undefined && object.taker_split !== null) {
      message.takerSplit = object.taker_split;
    }
    if (object.immutable_meta_properties !== undefined && object.immutable_meta_properties !== null) {
      message.immutableMetaProperties = PropertyList.fromAmino(object.immutable_meta_properties);
    }
    if (object.immutable_properties !== undefined && object.immutable_properties !== null) {
      message.immutableProperties = PropertyList.fromAmino(object.immutable_properties);
    }
    if (object.mutable_meta_properties !== undefined && object.mutable_meta_properties !== null) {
      message.mutableMetaProperties = PropertyList.fromAmino(object.mutable_meta_properties);
    }
    if (object.mutable_properties !== undefined && object.mutable_properties !== null) {
      message.mutableProperties = PropertyList.fromAmino(object.mutable_properties);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.taker_i_d = message.takerID ? IdentityID.toAmino(message.takerID) : undefined;
    obj.maker_asset_i_d = message.makerAssetID ? AssetID.toAmino(message.makerAssetID) : undefined;
    obj.taker_asset_i_d = message.takerAssetID ? AssetID.toAmino(message.takerAssetID) : undefined;
    obj.expires_in = message.expiresIn ? Height.toAmino(message.expiresIn) : undefined;
    obj.maker_split = message.makerSplit === "" ? undefined : message.makerSplit;
    obj.taker_split = message.takerSplit === "" ? undefined : message.takerSplit;
    obj.immutable_meta_properties = message.immutableMetaProperties ? PropertyList.toAmino(message.immutableMetaProperties) : undefined;
    obj.immutable_properties = message.immutableProperties ? PropertyList.toAmino(message.immutableProperties) : undefined;
    obj.mutable_meta_properties = message.mutableMetaProperties ? PropertyList.toAmino(message.mutableMetaProperties) : undefined;
    obj.mutable_properties = message.mutableProperties ? PropertyList.toAmino(message.mutableProperties) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.orders.transactions.make.Message",
      value: Message.encode(message).finish()
    };
  }
};