import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "../../ids/base/property_id";
import { DataID, DataIDAmino, DataIDSDKType } from "../../ids/base/data_id";
import * as _m0 from "protobufjs/minimal";
export interface MesaProperty {
    iD?: PropertyID;
    dataID?: DataID;
}
export interface MesaPropertyProtoMsg {
    typeUrl: "/assetmantle.schema.properties.base.MesaProperty";
    value: Uint8Array;
}
export interface MesaPropertyAmino {
    i_d?: PropertyIDAmino;
    data_i_d?: DataIDAmino;
}
export interface MesaPropertyAminoMsg {
    type: "/assetmantle.schema.properties.base.MesaProperty";
    value: MesaPropertyAmino;
}
export interface MesaPropertySDKType {
    i_d?: PropertyIDSDKType;
    data_i_d?: DataIDSDKType;
}
export declare const MesaProperty: {
    encode(message: MesaProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MesaProperty;
    fromJSON(object: any): MesaProperty;
    toJSON(message: MesaProperty): unknown;
    fromPartial(object: Partial<MesaProperty>): MesaProperty;
    fromAmino(object: MesaPropertyAmino): MesaProperty;
    toAmino(message: MesaProperty): MesaPropertyAmino;
    fromAminoMsg(object: MesaPropertyAminoMsg): MesaProperty;
    fromProtoMsg(message: MesaPropertyProtoMsg): MesaProperty;
    toProto(message: MesaProperty): Uint8Array;
    toProtoMsg(message: MesaProperty): MesaPropertyProtoMsg;
};
