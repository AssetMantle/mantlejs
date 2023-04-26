import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface AccAddressData {
  value: Uint8Array;
}
export interface AccAddressDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.AccAddressData";
  value: Uint8Array;
}
export interface AccAddressDataAmino {
  value: Uint8Array;
}
export interface AccAddressDataAminoMsg {
  type: "/assetmantle.schema.data.base.AccAddressData";
  value: AccAddressDataAmino;
}
export interface AccAddressDataSDKType {
  value: Uint8Array;
}
function createBaseAccAddressData(): AccAddressData {
  return {
    value: new Uint8Array()
  };
}
export const AccAddressData = {
  encode(message: AccAddressData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value.length !== 0) {
      writer.uint32(10).bytes(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AccAddressData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccAddressData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AccAddressData {
    return {
      value: isSet(object.value) ? bytesFromBase64(object.value) : new Uint8Array()
    };
  },
  toJSON(message: AccAddressData): unknown {
    const obj: any = {};
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<AccAddressData>): AccAddressData {
    const message = createBaseAccAddressData();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AccAddressDataAmino): AccAddressData {
    return {
      value: object.value
    };
  },
  toAmino(message: AccAddressData): AccAddressDataAmino {
    const obj: any = {};
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: AccAddressDataAminoMsg): AccAddressData {
    return AccAddressData.fromAmino(object.value);
  },
  fromProtoMsg(message: AccAddressDataProtoMsg): AccAddressData {
    return AccAddressData.decode(message.value);
  },
  toProto(message: AccAddressData): Uint8Array {
    return AccAddressData.encode(message).finish();
  },
  toProtoMsg(message: AccAddressData): AccAddressDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.AccAddressData",
      value: AccAddressData.encode(message).finish()
    };
  }
};