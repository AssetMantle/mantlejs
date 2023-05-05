import { AnyID, AnyIDAmino, AnyIDSDKType } from "../../ids/base/any_id";
import * as _m0 from "protobufjs/minimal";
export interface IDList {
    iDList: AnyID[];
}
export interface IDListProtoMsg {
    typeUrl: "/assetmantle.schema.lists.base.IDList";
    value: Uint8Array;
}
export interface IDListAmino {
    i_d_list: AnyIDAmino[];
}
export interface IDListAminoMsg {
    type: "/assetmantle.schema.lists.base.IDList";
    value: IDListAmino;
}
export interface IDListSDKType {
    i_d_list: AnyIDSDKType[];
}
export declare const IDList: {
    encode(message: IDList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IDList;
    fromJSON(object: any): IDList;
    toJSON(message: IDList): unknown;
    fromPartial(object: Partial<IDList>): IDList;
    fromAmino(object: IDListAmino): IDList;
    toAmino(message: IDList): IDListAmino;
    fromAminoMsg(object: IDListAminoMsg): IDList;
    fromProtoMsg(message: IDListProtoMsg): IDList;
    toProto(message: IDList): Uint8Array;
    toProtoMsg(message: IDList): IDListProtoMsg;
};
