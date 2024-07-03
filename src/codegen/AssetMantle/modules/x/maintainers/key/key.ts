//@ts-nocheck
import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "../../../../schema/ids/base/maintainer_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  maintainerID?: MaintainerID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.maintainers.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  maintainer_i_d?: MaintainerIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.maintainers.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  maintainer_i_d?: MaintainerIDSDKType;
}
function createBaseKey(): Key {
  return {
    maintainerID: undefined
  };
}
export const Key = {
  typeUrl: "/AssetMantle.modules.maintainers.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(10).fork()).ldelim();
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
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
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
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.maintainer_i_d !== undefined && object.maintainer_i_d !== null) {
      message.maintainerID = MaintainerID.fromAmino(object.maintainer_i_d);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.maintainer_i_d = message.maintainerID ? MaintainerID.toAmino(message.maintainerID) : undefined;
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
      typeUrl: "/AssetMantle.modules.maintainers.key.Key",
      value: Key.encode(message).finish()
    };
  }
};