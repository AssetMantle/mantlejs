import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../ids/base/classification_id";
import * as _m0 from "protobufjs/minimal";
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
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    fromPartial(object: Partial<Key>): Key;
    fromAmino(object: KeyAmino): Key;
    toAmino(message: Key): KeyAmino;
    fromAminoMsg(object: KeyAminoMsg): Key;
    fromProtoMsg(message: KeyProtoMsg): Key;
    toProto(message: Key): Uint8Array;
    toProtoMsg(message: Key): KeyProtoMsg;
};
