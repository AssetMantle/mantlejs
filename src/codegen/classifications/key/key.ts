import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../ids/base/classification_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  classificationID?: ClassificationID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.classifications.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  classification_i_d?: ClassificationIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.classifications.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  classification_i_d?: ClassificationIDSDKType;
}
function createBaseKey(): Key {
  return {
    classificationID: undefined
  };
}
export const Key = {
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(10).fork()).ldelim();
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
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
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      classificationID: object?.classification_i_d ? ClassificationID.fromAmino(object.classification_i_d) : undefined
    };
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
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
      typeUrl: "/assetmantle.modules.classifications.key.Key",
      value: Key.encode(message).finish()
    };
  }
};