import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  identityID?: IdentityID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.identities.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  identity_i_d?: IdentityIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.identities.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  identity_i_d?: IdentityIDSDKType;
}
function createBaseKey(): Key {
  return {
    identityID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identityID = IdentityID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Key {
    return {
      identityID: isSet(object.identityID) ? IdentityID.fromJSON(object.identityID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.identityID !== undefined && (obj.identityID = message.identityID ? IdentityID.toJSON(message.identityID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      identityID: object?.identity_i_d ? IdentityID.fromAmino(object.identity_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.identity_i_d = message.identityID ? IdentityID.toAmino(message.identityID) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.identities.key.Key",
      value: Key.encode(message).finish()
    };
  }
};