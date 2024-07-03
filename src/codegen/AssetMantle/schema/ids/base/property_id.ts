//@ts-nocheck
import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface PropertyID {
  keyID?: StringID;
  typeID?: StringID;
}
export interface PropertyIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.PropertyID";
  value: Uint8Array;
}
export interface PropertyIDAmino {
  key_i_d?: StringIDAmino;
  type_i_d?: StringIDAmino;
}
export interface PropertyIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.PropertyID";
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
  typeUrl: "/AssetMantle.schema.ids.base.PropertyID",
  encode(message: PropertyID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.keyID !== undefined) {
      StringID.encode(message.keyID, writer.uint32(10).fork()).ldelim();
    }
    if (message.typeID !== undefined) {
      StringID.encode(message.typeID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PropertyID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<PropertyID>): PropertyID {
    const message = createBasePropertyID();
    message.keyID = object.keyID !== undefined && object.keyID !== null ? StringID.fromPartial(object.keyID) : undefined;
    message.typeID = object.typeID !== undefined && object.typeID !== null ? StringID.fromPartial(object.typeID) : undefined;
    return message;
  },
  fromAmino(object: PropertyIDAmino): PropertyID {
    const message = createBasePropertyID();
    if (object.key_i_d !== undefined && object.key_i_d !== null) {
      message.keyID = StringID.fromAmino(object.key_i_d);
    }
    if (object.type_i_d !== undefined && object.type_i_d !== null) {
      message.typeID = StringID.fromAmino(object.type_i_d);
    }
    return message;
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
      typeUrl: "/AssetMantle.schema.ids.base.PropertyID",
      value: PropertyID.encode(message).finish()
    };
  }
};