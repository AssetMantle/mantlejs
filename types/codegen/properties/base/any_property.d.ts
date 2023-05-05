import { MesaProperty, MesaPropertyAmino, MesaPropertySDKType } from "./mesa_property";
import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "./meta_property";
import * as _m0 from "protobufjs/minimal";
export interface AnyProperty {
    mesaProperty?: MesaProperty;
    metaProperty?: MetaProperty;
}
export interface AnyPropertyProtoMsg {
    typeUrl: "/assetmantle.schema.properties.base.AnyProperty";
    value: Uint8Array;
}
export interface AnyPropertyAmino {
    mesa_property?: MesaPropertyAmino;
    meta_property?: MetaPropertyAmino;
}
export interface AnyPropertyAminoMsg {
    type: "/assetmantle.schema.properties.base.AnyProperty";
    value: AnyPropertyAmino;
}
export interface AnyPropertySDKType {
    mesa_property?: MesaPropertySDKType;
    meta_property?: MetaPropertySDKType;
}
export declare const AnyProperty: {
    encode(message: AnyProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyProperty;
    fromJSON(object: any): AnyProperty;
    toJSON(message: AnyProperty): unknown;
    fromPartial(object: Partial<AnyProperty>): AnyProperty;
    fromAmino(object: AnyPropertyAmino): AnyProperty;
    toAmino(message: AnyProperty): AnyPropertyAmino;
    fromAminoMsg(object: AnyPropertyAminoMsg): AnyProperty;
    fromProtoMsg(message: AnyPropertyProtoMsg): AnyProperty;
    toProto(message: AnyProperty): Uint8Array;
    toProtoMsg(message: AnyProperty): AnyPropertyProtoMsg;
};
