import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "../../properties/base/meta_property";
import * as _m0 from "protobufjs/minimal";
export interface Parameter {
    metaProperty?: MetaProperty;
}
export interface ParameterProtoMsg {
    typeUrl: "/assetmantle.schema.parameters.base.Parameter";
    value: Uint8Array;
}
export interface ParameterAmino {
    meta_property?: MetaPropertyAmino;
}
export interface ParameterAminoMsg {
    type: "/assetmantle.schema.parameters.base.Parameter";
    value: ParameterAmino;
}
export interface ParameterSDKType {
    meta_property?: MetaPropertySDKType;
}
export declare const Parameter: {
    encode(message: Parameter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Parameter;
    fromJSON(object: any): Parameter;
    toJSON(message: Parameter): unknown;
    fromPartial(object: Partial<Parameter>): Parameter;
    fromAmino(object: ParameterAmino): Parameter;
    toAmino(message: Parameter): ParameterAmino;
    fromAminoMsg(object: ParameterAminoMsg): Parameter;
    fromProtoMsg(message: ParameterProtoMsg): Parameter;
    toProto(message: Parameter): Uint8Array;
    toProtoMsg(message: Parameter): ParameterProtoMsg;
};
