import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "../../ids/base/property_id";
import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../data/base/any_data";
import * as _m0 from "protobufjs/minimal";
export interface MetaProperty {
    iD?: PropertyID;
    data?: AnyData;
}
export interface MetaPropertyProtoMsg {
    typeUrl: "/assetmantle.schema.properties.base.MetaProperty";
    value: Uint8Array;
}
export interface MetaPropertyAmino {
    i_d?: PropertyIDAmino;
    data?: AnyDataAmino;
}
export interface MetaPropertyAminoMsg {
    type: "/assetmantle.schema.properties.base.MetaProperty";
    value: MetaPropertyAmino;
}
export interface MetaPropertySDKType {
    i_d?: PropertyIDSDKType;
    data?: AnyDataSDKType;
}
export declare const MetaProperty: {
    encode(message: MetaProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MetaProperty;
    fromJSON(object: any): MetaProperty;
    toJSON(message: MetaProperty): unknown;
    fromPartial(object: Partial<MetaProperty>): MetaProperty;
    fromAmino(object: MetaPropertyAmino): MetaProperty;
    toAmino(message: MetaProperty): MetaPropertyAmino;
    fromAminoMsg(object: MetaPropertyAminoMsg): MetaProperty;
    fromProtoMsg(message: MetaPropertyProtoMsg): MetaProperty;
    toProto(message: MetaProperty): Uint8Array;
    toProtoMsg(message: MetaProperty): MetaPropertyProtoMsg;
};
