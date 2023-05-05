import { AnyProperty, AnyPropertyAmino, AnyPropertySDKType } from "../../properties/base/any_property";
import * as _m0 from "protobufjs/minimal";
export interface PropertyList {
    properties: AnyProperty[];
}
export interface PropertyListProtoMsg {
    typeUrl: "/assetmantle.schema.lists.base.PropertyList";
    value: Uint8Array;
}
export interface PropertyListAmino {
    properties: AnyPropertyAmino[];
}
export interface PropertyListAminoMsg {
    type: "/assetmantle.schema.lists.base.PropertyList";
    value: PropertyListAmino;
}
export interface PropertyListSDKType {
    properties: AnyPropertySDKType[];
}
export declare const PropertyList: {
    encode(message: PropertyList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyList;
    fromJSON(object: any): PropertyList;
    toJSON(message: PropertyList): unknown;
    fromPartial(object: Partial<PropertyList>): PropertyList;
    fromAmino(object: PropertyListAmino): PropertyList;
    toAmino(message: PropertyList): PropertyListAmino;
    fromAminoMsg(object: PropertyListAminoMsg): PropertyList;
    fromProtoMsg(message: PropertyListProtoMsg): PropertyList;
    toProto(message: PropertyList): Uint8Array;
    toProtoMsg(message: PropertyList): PropertyListProtoMsg;
};
