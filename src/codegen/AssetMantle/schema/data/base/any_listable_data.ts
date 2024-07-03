//@ts-nocheck
import { AccAddressData, AccAddressDataAmino, AccAddressDataSDKType } from "./acc_address_data";
import { BooleanData, BooleanDataAmino, BooleanDataSDKType } from "./boolean_data";
import { DecData, DecDataAmino, DecDataSDKType } from "./dec_data";
import { HeightData, HeightDataAmino, HeightDataSDKType } from "./height_data";
import { IDData, IDDataAmino, IDDataSDKType } from "./id_data";
import { LinkedData, LinkedDataAmino, LinkedDataSDKType } from "./linked_data";
import { NumberData, NumberDataAmino, NumberDataSDKType } from "./number_data";
import { StringData, StringDataAmino, StringDataSDKType } from "./string_data";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface AnyListableData {
  accAddressData?: AccAddressData;
  booleanData?: BooleanData;
  decData?: DecData;
  heightData?: HeightData;
  iDData?: IDData;
  linkedData?: LinkedData;
  numberData?: NumberData;
  stringData?: StringData;
}
export interface AnyListableDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.AnyListableData";
  value: Uint8Array;
}
export interface AnyListableDataAmino {
  acc_address_data?: AccAddressDataAmino;
  boolean_data?: BooleanDataAmino;
  dec_data?: DecDataAmino;
  height_data?: HeightDataAmino;
  i_d_data?: IDDataAmino;
  linked_data?: LinkedDataAmino;
  number_data?: NumberDataAmino;
  string_data?: StringDataAmino;
}
export interface AnyListableDataAminoMsg {
  type: "/AssetMantle.schema.data.base.AnyListableData";
  value: AnyListableDataAmino;
}
export interface AnyListableDataSDKType {
  acc_address_data?: AccAddressDataSDKType;
  boolean_data?: BooleanDataSDKType;
  dec_data?: DecDataSDKType;
  height_data?: HeightDataSDKType;
  i_d_data?: IDDataSDKType;
  linked_data?: LinkedDataSDKType;
  number_data?: NumberDataSDKType;
  string_data?: StringDataSDKType;
}
function createBaseAnyListableData(): AnyListableData {
  return {
    accAddressData: undefined,
    booleanData: undefined,
    decData: undefined,
    heightData: undefined,
    iDData: undefined,
    linkedData: undefined,
    numberData: undefined,
    stringData: undefined
  };
}
export const AnyListableData = {
  typeUrl: "/AssetMantle.schema.data.base.AnyListableData",
  encode(message: AnyListableData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.accAddressData !== undefined) {
      AccAddressData.encode(message.accAddressData, writer.uint32(10).fork()).ldelim();
    }
    if (message.booleanData !== undefined) {
      BooleanData.encode(message.booleanData, writer.uint32(18).fork()).ldelim();
    }
    if (message.decData !== undefined) {
      DecData.encode(message.decData, writer.uint32(26).fork()).ldelim();
    }
    if (message.heightData !== undefined) {
      HeightData.encode(message.heightData, writer.uint32(34).fork()).ldelim();
    }
    if (message.iDData !== undefined) {
      IDData.encode(message.iDData, writer.uint32(42).fork()).ldelim();
    }
    if (message.linkedData !== undefined) {
      LinkedData.encode(message.linkedData, writer.uint32(50).fork()).ldelim();
    }
    if (message.numberData !== undefined) {
      NumberData.encode(message.numberData, writer.uint32(58).fork()).ldelim();
    }
    if (message.stringData !== undefined) {
      StringData.encode(message.stringData, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnyListableData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyListableData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accAddressData = AccAddressData.decode(reader, reader.uint32());
          break;
        case 2:
          message.booleanData = BooleanData.decode(reader, reader.uint32());
          break;
        case 3:
          message.decData = DecData.decode(reader, reader.uint32());
          break;
        case 4:
          message.heightData = HeightData.decode(reader, reader.uint32());
          break;
        case 5:
          message.iDData = IDData.decode(reader, reader.uint32());
          break;
        case 6:
          message.linkedData = LinkedData.decode(reader, reader.uint32());
          break;
        case 7:
          message.numberData = NumberData.decode(reader, reader.uint32());
          break;
        case 8:
          message.stringData = StringData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AnyListableData>): AnyListableData {
    const message = createBaseAnyListableData();
    message.accAddressData = object.accAddressData !== undefined && object.accAddressData !== null ? AccAddressData.fromPartial(object.accAddressData) : undefined;
    message.booleanData = object.booleanData !== undefined && object.booleanData !== null ? BooleanData.fromPartial(object.booleanData) : undefined;
    message.decData = object.decData !== undefined && object.decData !== null ? DecData.fromPartial(object.decData) : undefined;
    message.heightData = object.heightData !== undefined && object.heightData !== null ? HeightData.fromPartial(object.heightData) : undefined;
    message.iDData = object.iDData !== undefined && object.iDData !== null ? IDData.fromPartial(object.iDData) : undefined;
    message.linkedData = object.linkedData !== undefined && object.linkedData !== null ? LinkedData.fromPartial(object.linkedData) : undefined;
    message.numberData = object.numberData !== undefined && object.numberData !== null ? NumberData.fromPartial(object.numberData) : undefined;
    message.stringData = object.stringData !== undefined && object.stringData !== null ? StringData.fromPartial(object.stringData) : undefined;
    return message;
  },
  fromAmino(object: AnyListableDataAmino): AnyListableData {
    const message = createBaseAnyListableData();
    if (object.acc_address_data !== undefined && object.acc_address_data !== null) {
      message.accAddressData = AccAddressData.fromAmino(object.acc_address_data);
    }
    if (object.boolean_data !== undefined && object.boolean_data !== null) {
      message.booleanData = BooleanData.fromAmino(object.boolean_data);
    }
    if (object.dec_data !== undefined && object.dec_data !== null) {
      message.decData = DecData.fromAmino(object.dec_data);
    }
    if (object.height_data !== undefined && object.height_data !== null) {
      message.heightData = HeightData.fromAmino(object.height_data);
    }
    if (object.i_d_data !== undefined && object.i_d_data !== null) {
      message.iDData = IDData.fromAmino(object.i_d_data);
    }
    if (object.linked_data !== undefined && object.linked_data !== null) {
      message.linkedData = LinkedData.fromAmino(object.linked_data);
    }
    if (object.number_data !== undefined && object.number_data !== null) {
      message.numberData = NumberData.fromAmino(object.number_data);
    }
    if (object.string_data !== undefined && object.string_data !== null) {
      message.stringData = StringData.fromAmino(object.string_data);
    }
    return message;
  },
  toAmino(message: AnyListableData): AnyListableDataAmino {
    const obj: any = {};
    obj.acc_address_data = message.accAddressData ? AccAddressData.toAmino(message.accAddressData) : undefined;
    obj.boolean_data = message.booleanData ? BooleanData.toAmino(message.booleanData) : undefined;
    obj.dec_data = message.decData ? DecData.toAmino(message.decData) : undefined;
    obj.height_data = message.heightData ? HeightData.toAmino(message.heightData) : undefined;
    obj.i_d_data = message.iDData ? IDData.toAmino(message.iDData) : undefined;
    obj.linked_data = message.linkedData ? LinkedData.toAmino(message.linkedData) : undefined;
    obj.number_data = message.numberData ? NumberData.toAmino(message.numberData) : undefined;
    obj.string_data = message.stringData ? StringData.toAmino(message.stringData) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnyListableDataAminoMsg): AnyListableData {
    return AnyListableData.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyListableDataProtoMsg): AnyListableData {
    return AnyListableData.decode(message.value);
  },
  toProto(message: AnyListableData): Uint8Array {
    return AnyListableData.encode(message).finish();
  },
  toProtoMsg(message: AnyListableData): AnyListableDataProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.data.base.AnyListableData",
      value: AnyListableData.encode(message).finish()
    };
  }
};