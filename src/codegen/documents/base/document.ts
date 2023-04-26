import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../ids/base/classification_id";
import { Immutables, ImmutablesAmino, ImmutablesSDKType } from "../../qualified/base/immutables";
import { Mutables, MutablesAmino, MutablesSDKType } from "../../qualified/base/mutables";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Document {
  classificationID?: ClassificationID;
  immutables?: Immutables;
  mutables?: Mutables;
}
export interface DocumentProtoMsg {
  typeUrl: "/assetmantle.schema.documents.base.Document";
  value: Uint8Array;
}
export interface DocumentAmino {
  classification_i_d?: ClassificationIDAmino;
  immutables?: ImmutablesAmino;
  mutables?: MutablesAmino;
}
export interface DocumentAminoMsg {
  type: "/assetmantle.schema.documents.base.Document";
  value: DocumentAmino;
}
export interface DocumentSDKType {
  classification_i_d?: ClassificationIDSDKType;
  immutables?: ImmutablesSDKType;
  mutables?: MutablesSDKType;
}
function createBaseDocument(): Document {
  return {
    classificationID: undefined,
    immutables: undefined,
    mutables: undefined
  };
}
export const Document = {
  encode(message: Document, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(10).fork()).ldelim();
    }
    if (message.immutables !== undefined) {
      Immutables.encode(message.immutables, writer.uint32(18).fork()).ldelim();
    }
    if (message.mutables !== undefined) {
      Mutables.encode(message.mutables, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Document {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDocument();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 2:
          message.immutables = Immutables.decode(reader, reader.uint32());
          break;
        case 3:
          message.mutables = Mutables.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Document {
    return {
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      immutables: isSet(object.immutables) ? Immutables.fromJSON(object.immutables) : undefined,
      mutables: isSet(object.mutables) ? Mutables.fromJSON(object.mutables) : undefined
    };
  },
  toJSON(message: Document): unknown {
    const obj: any = {};
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.immutables !== undefined && (obj.immutables = message.immutables ? Immutables.toJSON(message.immutables) : undefined);
    message.mutables !== undefined && (obj.mutables = message.mutables ? Mutables.toJSON(message.mutables) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Document>): Document {
    const message = createBaseDocument();
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.immutables = object.immutables !== undefined && object.immutables !== null ? Immutables.fromPartial(object.immutables) : undefined;
    message.mutables = object.mutables !== undefined && object.mutables !== null ? Mutables.fromPartial(object.mutables) : undefined;
    return message;
  },
  fromAmino(object: DocumentAmino): Document {
    return {
      classificationID: object?.classification_i_d ? ClassificationID.fromAmino(object.classification_i_d) : undefined,
      immutables: object?.immutables ? Immutables.fromAmino(object.immutables) : undefined,
      mutables: object?.mutables ? Mutables.fromAmino(object.mutables) : undefined
    };
  },
  toAmino(message: Document): DocumentAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.immutables = message.immutables ? Immutables.toAmino(message.immutables) : undefined;
    obj.mutables = message.mutables ? Mutables.toAmino(message.mutables) : undefined;
    return obj;
  },
  fromAminoMsg(object: DocumentAminoMsg): Document {
    return Document.fromAmino(object.value);
  },
  fromProtoMsg(message: DocumentProtoMsg): Document {
    return Document.decode(message.value);
  },
  toProto(message: Document): Uint8Array {
    return Document.encode(message).finish();
  },
  toProtoMsg(message: Document): DocumentProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.documents.base.Document",
      value: Document.encode(message).finish()
    };
  }
};