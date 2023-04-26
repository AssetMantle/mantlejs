import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface MaintainerID {
  hashID?: HashID;
}
export interface MaintainerIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.MaintainerID";
  value: Uint8Array;
}
export interface MaintainerIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface MaintainerIDAminoMsg {
  type: "/assetmantle.schema.ids.base.MaintainerID";
  value: MaintainerIDAmino;
}
export interface MaintainerIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseMaintainerID(): MaintainerID {
  return {
    hashID: undefined
  };
}
export const MaintainerID = {
  encode(message: MaintainerID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMaintainerID();
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
  fromJSON(object: any): MaintainerID {
    return {
      hashID: isSet(object.hashID) ? HashID.fromJSON(object.hashID) : undefined
    };
  },
  toJSON(message: MaintainerID): unknown {
    const obj: any = {};
    message.hashID !== undefined && (obj.hashID = message.hashID ? HashID.toJSON(message.hashID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MaintainerID>): MaintainerID {
    const message = createBaseMaintainerID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: MaintainerIDAmino): MaintainerID {
    return {
      hashID: object?.hash_i_d ? HashID.fromAmino(object.hash_i_d) : undefined
    };
  },
  toAmino(message: MaintainerID): MaintainerIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: MaintainerIDAminoMsg): MaintainerID {
    return MaintainerID.fromAmino(object.value);
  },
  fromProtoMsg(message: MaintainerIDProtoMsg): MaintainerID {
    return MaintainerID.decode(message.value);
  },
  toProto(message: MaintainerID): Uint8Array {
    return MaintainerID.encode(message).finish();
  },
  toProtoMsg(message: MaintainerID): MaintainerIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.MaintainerID",
      value: MaintainerID.encode(message).finish()
    };
  }
};