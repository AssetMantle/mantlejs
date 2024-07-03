//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../schema/ids/base/identity_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  identityID?: IdentityID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  identity_i_d?: IdentityIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.identities.key.Key";
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
  typeUrl: "/AssetMantle.modules.identities.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Key {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.identity_i_d !== undefined && object.identity_i_d !== null) {
      message.identityID = IdentityID.fromAmino(object.identity_i_d);
    }
    return message;
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
      typeUrl: "/AssetMantle.modules.identities.key.Key",
      value: Key.encode(message).finish()
    };
  }
};