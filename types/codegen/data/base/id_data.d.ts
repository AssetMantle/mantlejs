import { AnyID, AnyIDAmino, AnyIDSDKType } from "../../ids/base/any_id";
import * as _m0 from "protobufjs/minimal";
export interface IDData {
    value?: AnyID;
}
export interface IDDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.IDData";
    value: Uint8Array;
}
export interface IDDataAmino {
    value?: AnyIDAmino;
}
export interface IDDataAminoMsg {
    type: "/assetmantle.schema.data.base.IDData";
    value: IDDataAmino;
}
export interface IDDataSDKType {
    value?: AnyIDSDKType;
}
export declare const IDData: {
    encode(message: IDData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDData;
    fromJSON(object: any): IDData;
    toJSON(message: IDData): unknown;
    fromPartial(object: Partial<IDData>): IDData;
    fromAmino(object: IDDataAmino): IDData;
    toAmino(message: IDData): IDDataAmino;
    fromAminoMsg(object: IDDataAminoMsg): IDData;
    fromProtoMsg(message: IDDataProtoMsg): IDData;
    toProto(message: IDData): Uint8Array;
    toProtoMsg(message: IDData): IDDataProtoMsg;
};
