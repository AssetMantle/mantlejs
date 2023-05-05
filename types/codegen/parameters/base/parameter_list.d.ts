import { Parameter, ParameterAmino, ParameterSDKType } from "./parameter";
import * as _m0 from "protobufjs/minimal";
export interface ParameterList {
    parameters: Parameter[];
}
export interface ParameterListProtoMsg {
    typeUrl: "/assetmantle.schema.parameters.base.ParameterList";
    value: Uint8Array;
}
export interface ParameterListAmino {
    parameters: ParameterAmino[];
}
export interface ParameterListAminoMsg {
    type: "/assetmantle.schema.parameters.base.ParameterList";
    value: ParameterListAmino;
}
export interface ParameterListSDKType {
    parameters: ParameterSDKType[];
}
export declare const ParameterList: {
    encode(message: ParameterList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ParameterList;
    fromJSON(object: any): ParameterList;
    toJSON(message: ParameterList): unknown;
    fromPartial(object: Partial<ParameterList>): ParameterList;
    fromAmino(object: ParameterListAmino): ParameterList;
    toAmino(message: ParameterList): ParameterListAmino;
    fromAminoMsg(object: ParameterListAminoMsg): ParameterList;
    fromProtoMsg(message: ParameterListProtoMsg): ParameterList;
    toProto(message: ParameterList): Uint8Array;
    toProtoMsg(message: ParameterList): ParameterListProtoMsg;
};
