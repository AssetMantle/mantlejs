import { Mappable, MappableAmino, MappableSDKType } from "../mappable/mappable";
import { ParameterList, ParameterListAmino, ParameterListSDKType } from "../../parameters/base/parameter_list";
import * as _m0 from "protobufjs/minimal";
export interface Genesis {
    mappables: Mappable[];
    parameterList?: ParameterList;
}
export interface GenesisProtoMsg {
    typeUrl: "/assetmantle.modules.orders.genesis.Genesis";
    value: Uint8Array;
}
export interface GenesisAmino {
    mappables: MappableAmino[];
    parameter_list?: ParameterListAmino;
}
export interface GenesisAminoMsg {
    type: "/assetmantle.modules.orders.genesis.Genesis";
    value: GenesisAmino;
}
export interface GenesisSDKType {
    mappables: MappableSDKType[];
    parameter_list?: ParameterListSDKType;
}
export declare const Genesis: {
    encode(message: Genesis, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Genesis;
    fromJSON(object: any): Genesis;
    toJSON(message: Genesis): unknown;
    fromPartial(object: Partial<Genesis>): Genesis;
    fromAmino(object: GenesisAmino): Genesis;
    toAmino(message: Genesis): GenesisAmino;
    fromAminoMsg(object: GenesisAminoMsg): Genesis;
    fromProtoMsg(message: GenesisProtoMsg): Genesis;
    toProto(message: Genesis): Uint8Array;
    toProtoMsg(message: Genesis): GenesisProtoMsg;
};
