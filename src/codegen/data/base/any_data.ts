import { AccAddressData, AccAddressDataAmino, AccAddressDataSDKType } from "./acc_address_data";
import { BooleanData, BooleanDataAmino, BooleanDataSDKType } from "./boolean_data";
import { DecData, DecDataAmino, DecDataSDKType } from "./dec_data";
import { HeightData, HeightDataAmino, HeightDataSDKType } from "./height_data";
import { IDData, IDDataAmino, IDDataSDKType } from "./id_data";
import { ListData, ListDataAmino, ListDataSDKType } from "./list_data";
import { LinkedData, LinkedDataAmino, LinkedDataSDKType } from "./linked_data";
import { NumberData, NumberDataAmino, NumberDataSDKType } from "./number_data";
import { StringData, StringDataAmino, StringDataSDKType } from "./string_data";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AnyData {
  accAddressData?: AccAddressData;
  booleanData?: BooleanData;
  decData?: DecData;
  heightData?: HeightData;
  iDData?: IDData;
  listData?: ListData;
  linkedData?: LinkedData;
  numberData?: NumberData;
  stringData?: StringData;
}
export interface AnyDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.AnyData";
  value: Uint8Array;
}
export interface AnyDataAmino {
  acc_address_data?: AccAddressDataAmino;
  boolean_data?: BooleanDataAmino;
  dec_data?: DecDataAmino;
  height_data?: HeightDataAmino;
  i_d_data?: IDDataAmino;
  list_data?: ListDataAmino;
  linked_data?: LinkedDataAmino;
  number_data?: NumberDataAmino;
  string_data?: StringDataAmino;
}
export interface AnyDataAminoMsg {
  type: "/assetmantle.schema.data.base.AnyData";
  value: AnyDataAmino;
}
export interface AnyDataSDKType {
  acc_address_data?: AccAddressDataSDKType;
  boolean_data?: BooleanDataSDKType;
  dec_data?: DecDataSDKType;
  height_data?: HeightDataSDKType;
  i_d_data?: IDDataSDKType;
  list_data?: ListDataSDKType;
  linked_data?: LinkedDataSDKType;
  number_data?: NumberDataSDKType;
  string_data?: StringDataSDKType;
}
function createBaseAnyData(): AnyData {
  return {
    accAddressData: undefined,
    booleanData: undefined,
    decData: undefined,
    heightData: undefined,
    iDData: undefined,
    listData: undefined,
    linkedData: undefined,
    numberData: undefined,
    stringData: undefined
  };
}
export const AnyData = {
  encode(message: AnyData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.listData !== undefined) {
      ListData.encode(message.listData, writer.uint32(50).fork()).ldelim();
    }
    if (message.linkedData !== undefined) {
      LinkedData.encode(message.linkedData, writer.uint32(58).fork()).ldelim();
    }
    if (message.numberData !== undefined) {
      NumberData.encode(message.numberData, writer.uint32(66).fork()).ldelim();
    }
    if (message.stringData !== undefined) {
      StringData.encode(message.stringData, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AnyData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyData();
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
          message.listData = ListData.decode(reader, reader.uint32());
          break;
        case 7:
          message.linkedData = LinkedData.decode(reader, reader.uint32());
          break;
        case 8:
          message.numberData = NumberData.decode(reader, reader.uint32());
          break;
        case 9:
          message.stringData = StringData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AnyData {
    return {
      accAddressData: isSet(object.accAddressData) ? AccAddressData.fromJSON(object.accAddressData) : undefined,
      booleanData: isSet(object.booleanData) ? BooleanData.fromJSON(object.booleanData) : undefined,
      decData: isSet(object.decData) ? DecData.fromJSON(object.decData) : undefined,
      heightData: isSet(object.heightData) ? HeightData.fromJSON(object.heightData) : undefined,
      iDData: isSet(object.iDData) ? IDData.fromJSON(object.iDData) : undefined,
      listData: isSet(object.listData) ? ListData.fromJSON(object.listData) : undefined,
      linkedData: isSet(object.linkedData) ? LinkedData.fromJSON(object.linkedData) : undefined,
      numberData: isSet(object.numberData) ? NumberData.fromJSON(object.numberData) : undefined,
      stringData: isSet(object.stringData) ? StringData.fromJSON(object.stringData) : undefined
    };
  },
  toJSON(message: AnyData): unknown {
    const obj: any = {};
    message.accAddressData !== undefined && (obj.accAddressData = message.accAddressData ? AccAddressData.toJSON(message.accAddressData) : undefined);
    message.booleanData !== undefined && (obj.booleanData = message.booleanData ? BooleanData.toJSON(message.booleanData) : undefined);
    message.decData !== undefined && (obj.decData = message.decData ? DecData.toJSON(message.decData) : undefined);
    message.heightData !== undefined && (obj.heightData = message.heightData ? HeightData.toJSON(message.heightData) : undefined);
    message.iDData !== undefined && (obj.iDData = message.iDData ? IDData.toJSON(message.iDData) : undefined);
    message.listData !== undefined && (obj.listData = message.listData ? ListData.toJSON(message.listData) : undefined);
    message.linkedData !== undefined && (obj.linkedData = message.linkedData ? LinkedData.toJSON(message.linkedData) : undefined);
    message.numberData !== undefined && (obj.numberData = message.numberData ? NumberData.toJSON(message.numberData) : undefined);
    message.stringData !== undefined && (obj.stringData = message.stringData ? StringData.toJSON(message.stringData) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AnyData>): AnyData {
    const message = createBaseAnyData();
    message.accAddressData = object.accAddressData !== undefined && object.accAddressData !== null ? AccAddressData.fromPartial(object.accAddressData) : undefined;
    message.booleanData = object.booleanData !== undefined && object.booleanData !== null ? BooleanData.fromPartial(object.booleanData) : undefined;
    message.decData = object.decData !== undefined && object.decData !== null ? DecData.fromPartial(object.decData) : undefined;
    message.heightData = object.heightData !== undefined && object.heightData !== null ? HeightData.fromPartial(object.heightData) : undefined;
    message.iDData = object.iDData !== undefined && object.iDData !== null ? IDData.fromPartial(object.iDData) : undefined;
    message.listData = object.listData !== undefined && object.listData !== null ? ListData.fromPartial(object.listData) : undefined;
    message.linkedData = object.linkedData !== undefined && object.linkedData !== null ? LinkedData.fromPartial(object.linkedData) : undefined;
    message.numberData = object.numberData !== undefined && object.numberData !== null ? NumberData.fromPartial(object.numberData) : undefined;
    message.stringData = object.stringData !== undefined && object.stringData !== null ? StringData.fromPartial(object.stringData) : undefined;
    return message;
  },
  fromAmino(object: AnyDataAmino): AnyData {
    return {
      accAddressData: object?.acc_address_data ? AccAddressData.fromAmino(object.acc_address_data) : undefined,
      booleanData: object?.boolean_data ? BooleanData.fromAmino(object.boolean_data) : undefined,
      decData: object?.dec_data ? DecData.fromAmino(object.dec_data) : undefined,
      heightData: object?.height_data ? HeightData.fromAmino(object.height_data) : undefined,
      iDData: object?.i_d_data ? IDData.fromAmino(object.i_d_data) : undefined,
      listData: object?.list_data ? ListData.fromAmino(object.list_data) : undefined,
      linkedData: object?.linked_data ? LinkedData.fromAmino(object.linked_data) : undefined,
      numberData: object?.number_data ? NumberData.fromAmino(object.number_data) : undefined,
      stringData: object?.string_data ? StringData.fromAmino(object.string_data) : undefined
    };
  },
  toAmino(message: AnyData): AnyDataAmino {
    const obj: any = {};
    obj.acc_address_data = message.accAddressData ? AccAddressData.toAmino(message.accAddressData) : undefined;
    obj.boolean_data = message.booleanData ? BooleanData.toAmino(message.booleanData) : undefined;
    obj.dec_data = message.decData ? DecData.toAmino(message.decData) : undefined;
    obj.height_data = message.heightData ? HeightData.toAmino(message.heightData) : undefined;
    obj.i_d_data = message.iDData ? IDData.toAmino(message.iDData) : undefined;
    obj.list_data = message.listData ? ListData.toAmino(message.listData) : undefined;
    obj.linked_data = message.linkedData ? LinkedData.toAmino(message.linkedData) : undefined;
    obj.number_data = message.numberData ? NumberData.toAmino(message.numberData) : undefined;
    obj.string_data = message.stringData ? StringData.toAmino(message.stringData) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnyDataAminoMsg): AnyData {
    return AnyData.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyDataProtoMsg): AnyData {
    return AnyData.decode(message.value);
  },
  toProto(message: AnyData): Uint8Array {
    return AnyData.encode(message).finish();
  },
  toProtoMsg(message: AnyData): AnyDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.AnyData",
      value: AnyData.encode(message).finish()
    };
  }
};