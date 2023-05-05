import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../ids/base/classification_id";
import { Immutables, ImmutablesAmino, ImmutablesSDKType } from "../../qualified/base/immutables";
import { Mutables, MutablesAmino, MutablesSDKType } from "../../qualified/base/mutables";
import * as _m0 from "protobufjs/minimal";
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
export declare const Document: {
    encode(message: Document, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Document;
    fromJSON(object: any): Document;
    toJSON(message: Document): unknown;
    fromPartial(object: Partial<Document>): Document;
    fromAmino(object: DocumentAmino): Document;
    toAmino(message: Document): DocumentAmino;
    fromAminoMsg(object: DocumentAminoMsg): Document;
    fromProtoMsg(message: DocumentProtoMsg): Document;
    toProto(message: Document): Uint8Array;
    toProtoMsg(message: Document): DocumentProtoMsg;
};
