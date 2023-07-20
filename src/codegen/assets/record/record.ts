import { Key, KeyAmino, KeySDKType } from "../key/key";
import { Mappable, MappableAmino, MappableSDKType } from "../mappable/mappable";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Record {
  key?: Key;
  mappable?: Mappable;
}
export interface RecordProtoMsg {
  typeUrl: "/assetmantle.modules.assets.record.Record";
  value: Uint8Array;
}
export interface RecordAmino {
  key?: KeyAmino;
  mappable?: MappableAmino;
}
export interface RecordAminoMsg {
  type: "/assetmantle.modules.assets.record.Record";
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
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== undefined) {
      Key.encode(message.key, writer.uint32(10).fork()).ldelim();
    }
    if (message.mappable !== undefined) {
      Mappable.encode(message.mappable, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Record {
    return {
      key: isSet(object.key) ? Key.fromJSON(object.key) : undefined,
      mappable: isSet(object.mappable) ? Mappable.fromJSON(object.mappable) : undefined
    };
  },
  toJSON(message: Record): unknown {
    const obj: any = {};
    message.key !== undefined && (obj.key = message.key ? Key.toJSON(message.key) : undefined);
    message.mappable !== undefined && (obj.mappable = message.mappable ? Mappable.toJSON(message.mappable) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Record>): Record {
    const message = createBaseRecord();
    message.key = object.key !== undefined && object.key !== null ? Key.fromPartial(object.key) : undefined;
    message.mappable = object.mappable !== undefined && object.mappable !== null ? Mappable.fromPartial(object.mappable) : undefined;
    return message;
  },
  fromAmino(object: RecordAmino): Record {
    return {
      key: object?.key ? Key.fromAmino(object.key) : undefined,
      mappable: object?.mappable ? Mappable.fromAmino(object.mappable) : undefined
    };
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
      typeUrl: "/assetmantle.modules.assets.record.Record",
      value: Record.encode(message).finish()
    };
  }
};