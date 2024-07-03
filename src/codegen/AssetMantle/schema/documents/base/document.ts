//@ts-nocheck
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../ids/base/classification_id";
import { Immutables, ImmutablesAmino, ImmutablesSDKType } from "../../qualified/base/immutables";
import { Mutables, MutablesAmino, MutablesSDKType } from "../../qualified/base/mutables";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Document {
  classificationID?: ClassificationID;
  immutables?: Immutables;
  mutables?: Mutables;
}
export interface DocumentProtoMsg {
  typeUrl: "/AssetMantle.schema.documents.base.Document";
  value: Uint8Array;
}
export interface DocumentAmino {
  classification_i_d?: ClassificationIDAmino;
  immutables?: ImmutablesAmino;
  mutables?: MutablesAmino;
}
export interface DocumentAminoMsg {
  type: "/AssetMantle.schema.documents.base.Document";
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
  typeUrl: "/AssetMantle.schema.documents.base.Document",
  encode(message: Document, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Document {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<Document>): Document {
    const message = createBaseDocument();
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.immutables = object.immutables !== undefined && object.immutables !== null ? Immutables.fromPartial(object.immutables) : undefined;
    message.mutables = object.mutables !== undefined && object.mutables !== null ? Mutables.fromPartial(object.mutables) : undefined;
    return message;
  },
  fromAmino(object: DocumentAmino): Document {
    const message = createBaseDocument();
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    if (object.immutables !== undefined && object.immutables !== null) {
      message.immutables = Immutables.fromAmino(object.immutables);
    }
    if (object.mutables !== undefined && object.mutables !== null) {
      message.mutables = Mutables.fromAmino(object.mutables);
    }
    return message;
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
      typeUrl: "/AssetMantle.schema.documents.base.Document",
      value: Document.encode(message).finish()
    };
  }
};