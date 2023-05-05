import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
export interface Immutables {
    propertyList?: PropertyList;
}
export interface ImmutablesProtoMsg {
    typeUrl: "/assetmantle.schema.qualified.base.Immutables";
    value: Uint8Array;
}
export interface ImmutablesAmino {
    property_list?: PropertyListAmino;
}
export interface ImmutablesAminoMsg {
    type: "/assetmantle.schema.qualified.base.Immutables";
    value: ImmutablesAmino;
}
export interface ImmutablesSDKType {
    property_list?: PropertyListSDKType;
}
export declare const Immutables: {
    encode(message: Immutables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Immutables;
    fromJSON(object: any): Immutables;
    toJSON(message: Immutables): unknown;
    fromPartial(object: Partial<Immutables>): Immutables;
    fromAmino(object: ImmutablesAmino): Immutables;
    toAmino(message: Immutables): ImmutablesAmino;
    fromAminoMsg(object: ImmutablesAminoMsg): Immutables;
    fromProtoMsg(message: ImmutablesProtoMsg): Immutables;
    toProto(message: Immutables): Uint8Array;
    toProtoMsg(message: Immutables): ImmutablesProtoMsg;
};
