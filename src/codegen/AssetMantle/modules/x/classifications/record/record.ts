//@ts-nocheck
import { Key, KeyAmino, KeySDKType } from "../key/key";
import { Mappable, MappableAmino, MappableSDKType } from "../mappable/mappable";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Record {
  key?: Key;
  mappable?: Mappable;
}
export interface RecordProtoMsg {
  typeUrl: "/AssetMantle.modules.classifications.record.Record";
  value: Uint8Array;
}
export interface RecordAmino {
  key?: KeyAmino;
  mappable?: MappableAmino;
}
export interface RecordAminoMsg {
  type: "/AssetMantle.modules.classifications.record.Record";
  value: RecordAmino;
}
export interface RecordSDKType {
  key?: KeySDKType;
  mappable?: MappableSDKType;
}
function createBaseRecord(): Record {
  return {
    key: undefined,
    mappable: undefined
  };
}
export const Record = {
  typeUrl: "/AssetMantle.modules.classifications.record.Record",
  encode(message: Record, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mappable !== undefined) {
      Mappable.encode(message.mappable, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Record {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = Key.decode(reader, reader.uint32());
          break;
        case 2:
          message.mappable = Mappable.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.mappable = object.mappable !== undefined && object.mappable !== null ? Mappable.fromPartial(object.mappable) : undefined;
    return message;
  },
  fromAmino(object: RecordAmino): Record {
    const message = createBaseRecord();
    if (object.key !== undefined && object.key !== null) {
      message.key = Key.fromAmino(object.key);
    }
    if (object.mappable !== undefined && object.mappable !== null) {
      message.mappable = Mappable.fromAmino(object.mappable);
    }
    return message;
  },
  toAmino(message: Record): RecordAmino {
    const obj: any = {};
    obj.key = message.key ? Key.toAmino(message.key) : undefined;
    obj.mappable = message.mappable ? Mappable.toAmino(message.mappable) : undefined;
    return obj;
  },
  fromAminoMsg(object: RecordAminoMsg): Record {
    return Record.fromAmino(object.value);
  },
  fromProtoMsg(message: RecordProtoMsg): Record {
    return Record.decode(message.value);
  },
  toProto(message: Record): Uint8Array {
    return Record.encode(message).finish();
  },
  toProtoMsg(message: Record): RecordProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.classifications.record.Record",
      value: Record.encode(message).finish()
    };
  }
};