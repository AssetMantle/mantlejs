import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface PropertyID {
  keyID?: StringID;
  typeID?: StringID;
}
export interface PropertyIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.PropertyID";
  value: Uint8Array;
}
export interface PropertyIDAmino {
  key_i_d?: StringIDAmino;
  type_i_d?: StringIDAmino;
}
export interface PropertyIDAminoMsg {
  type: "/assetmantle.schema.ids.base.PropertyID";
  value: PropertyIDAmino;
}
export interface PropertyIDSDKType {
  key_i_d?: StringIDSDKType;
  type_i_d?: StringIDSDKType;
}
function createBasePropertyID(): PropertyID {
  return {
    keyID: undefined,
    typeID: undefined
  };
}
export const PropertyID = {
  encode(message: PropertyID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.keyID !== undefined) {
      StringID.encode(message.keyID, writer.uint32(10).fork()).ldelim();
    }
    if (message.typeID !== undefined) {
      StringID.encode(message.typeID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PropertyID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePropertyID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.keyID = StringID.decode(reader, reader.uint32());
          break;
        case 2:
          message.typeID = StringID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PropertyID {
    return {
      keyID: isSet(object.keyID) ? StringID.fromJSON(object.keyID) : undefined,
      typeID: isSet(object.typeID) ? StringID.fromJSON(object.typeID) : undefined
    };
  },
  toJSON(message: PropertyID): unknown {
    const obj: any = {};
    message.keyID !== undefined && (obj.keyID = message.keyID ? StringID.toJSON(message.keyID) : undefined);
    message.typeID !== undefined && (obj.typeID = message.typeID ? StringID.toJSON(message.typeID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<PropertyID>): PropertyID {
    const message = createBasePropertyID();
    message.keyID = object.keyID !== undefined && object.keyID !== null ? StringID.fromPartial(object.keyID) : undefined;
    message.typeID = object.typeID !== undefined && object.typeID !== null ? StringID.fromPartial(object.typeID) : undefined;
    return message;
  },
  fromAmino(object: PropertyIDAmino): PropertyID {
    return {
      keyID: object?.key_i_d ? StringID.fromAmino(object.key_i_d) : undefined,
      typeID: object?.type_i_d ? StringID.fromAmino(object.type_i_d) : undefined
    };
  },
  toAmino(message: PropertyID): PropertyIDAmino {
    const obj: any = {};
    obj.key_i_d = message.keyID ? StringID.toAmino(message.keyID) : undefined;
    obj.type_i_d = message.typeID ? StringID.toAmino(message.typeID) : undefined;
    return obj;
  },
  fromAminoMsg(object: PropertyIDAminoMsg): PropertyID {
    return PropertyID.fromAmino(object.value);
  },
  fromProtoMsg(message: PropertyIDProtoMsg): PropertyID {
    return PropertyID.decode(message.value);
  },
  toProto(message: PropertyID): Uint8Array {
    return PropertyID.encode(message).finish();
  },
  toProtoMsg(message: PropertyID): PropertyIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.PropertyID",
      value: PropertyID.encode(message).finish()
    };
  }
};