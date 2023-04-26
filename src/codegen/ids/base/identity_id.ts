import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface IdentityID {
  hashID?: HashID;
}
export interface IdentityIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.IdentityID";
  value: Uint8Array;
}
export interface IdentityIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface IdentityIDAminoMsg {
  type: "/assetmantle.schema.ids.base.IdentityID";
  value: IdentityIDAmino;
}
export interface IdentityIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseIdentityID(): IdentityID {
  return {
    hashID: undefined
  };
}
export const IdentityID = {
  encode(message: IdentityID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): IdentityID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentityID();
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
  fromJSON(object: any): IdentityID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: IdentityID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<IdentityID>): IdentityID {
    const message = createBaseIdentityID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: IdentityIDAmino): IdentityID {
    return {
      hashID: object?.hash_i_d ? HashID.fromAmino(object.hash_i_d) : undefined
    };
  },
  toAmino(message: IdentityID): IdentityIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: IdentityIDAminoMsg): IdentityID {
    return IdentityID.fromAmino(object.value);
  },
  fromProtoMsg(message: IdentityIDProtoMsg): IdentityID {
    return IdentityID.decode(message.value);
  },
  toProto(message: IdentityID): Uint8Array {
    return IdentityID.encode(message).finish();
  },
  toProtoMsg(message: IdentityID): IdentityIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.IdentityID",
      value: IdentityID.encode(message).finish()
    };
  }
};