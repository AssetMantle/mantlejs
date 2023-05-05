import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface ClassificationID {
    hashID?: HashID;
}
export interface ClassificationIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.ClassificationID";
    value: Uint8Array;
}
export interface ClassificationIDAmino {
    hash_i_d?: HashIDAmino;
}
export interface ClassificationIDAminoMsg {
    type: "/assetmantle.schema.ids.base.ClassificationID";
    value: ClassificationIDAmino;
}
export interface ClassificationIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const ClassificationID: {
    encode(message: ClassificationID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClassificationID;
    fromJSON(object: any): ClassificationID;
    toJSON(message: ClassificationID): unknown;
    fromPartial(object: Partial<ClassificationID>): ClassificationID;
    fromAmino(object: ClassificationIDAmino): ClassificationID;
    toAmino(message: ClassificationID): ClassificationIDAmino;
    fromAminoMsg(object: ClassificationIDAminoMsg): ClassificationID;
    fromProtoMsg(message: ClassificationIDProtoMsg): ClassificationID;
    toProto(message: ClassificationID): Uint8Array;
    toProtoMsg(message: ClassificationID): ClassificationIDProtoMsg;
};
