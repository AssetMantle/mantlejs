import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface ClassificationID {
  hashID?: HashID;
}
export interface ClassificationIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.ClassificationID";
  value: Uint8Array;
}
export interface ClassificationIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface ClassificationIDAminoMsg {
  type: "/assetmantle.schema.ids.base.ClassificationID";
  value: ClassificationIDAmino;
}
export interface ClassificationIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseClassificationID(): ClassificationID {
  return {
    hashID: undefined
  };
}
export const ClassificationID = {
  encode(message: ClassificationID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClassificationID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClassificationID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: ClassificationID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ClassificationID>): ClassificationID {
    const message = createBaseClassificationID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: ClassificationIDAmino): ClassificationID {
    return {
      hashID: object?.hash_i_d ? HashID.fromAmino(object.hash_i_d) : undefined
    };
  },
  toAmino(message: ClassificationID): ClassificationIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClassificationIDAminoMsg): ClassificationID {
    return ClassificationID.fromAmino(object.value);
  },
  fromProtoMsg(message: ClassificationIDProtoMsg): ClassificationID {
    return ClassificationID.decode(message.value);
  },
  toProto(message: ClassificationID): Uint8Array {
    return ClassificationID.encode(message).finish();
  },
  toProtoMsg(message: ClassificationID): ClassificationIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.ClassificationID",
      value: ClassificationID.encode(message).finish()
    };
  }
};