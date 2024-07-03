//@ts-nocheck
import { DataID, DataIDAmino, DataIDSDKType } from "../../../../schema/ids/base/data_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  dataID?: DataID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.metas.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  data_i_d?: DataIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.metas.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  data_i_d?: DataIDSDKType;
}
function createBaseKey(): Key {
  return {
    dataID: undefined
  };
}
export const Key = {
  typeUrl: "/AssetMantle.modules.metas.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(10).fork()).ldelim();
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
          message.dataID = DataID.decode(reader, reader.uint32());
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
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.data_i_d !== undefined && object.data_i_d !== null) {
      message.dataID = DataID.fromAmino(object.data_i_d);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.data_i_d = message.dataID ? DataID.toAmino(message.dataID) : undefined;
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
      typeUrl: "/AssetMantle.modules.metas.key.Key",
      value: Key.encode(message).finish()
    };
  }
};