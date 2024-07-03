//@ts-nocheck
import { SplitID, SplitIDAmino, SplitIDSDKType } from "../../../../schema/ids/base/split_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  splitID?: SplitID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.splits.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  split_i_d?: SplitIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.splits.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  split_i_d?: SplitIDSDKType;
}
function createBaseKey(): Key {
  return {
    splitID: undefined
  };
}
export const Key = {
  typeUrl: "/AssetMantle.modules.splits.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(10).fork()).ldelim();
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
          message.splitID = SplitID.decode(reader, reader.uint32());
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
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.split_i_d !== undefined && object.split_i_d !== null) {
      message.splitID = SplitID.fromAmino(object.split_i_d);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.split_i_d = message.splitID ? SplitID.toAmino(message.splitID) : undefined;
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
      typeUrl: "/AssetMantle.modules.splits.key.Key",
      value: Key.encode(message).finish()
    };
  }
};