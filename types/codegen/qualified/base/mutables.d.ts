import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
export interface Mutables {
    propertyList?: PropertyList;
}
export interface MutablesProtoMsg {
    typeUrl: "/assetmantle.schema.qualified.base.Mutables";
    value: Uint8Array;
}
export interface MutablesAmino {
    property_list?: PropertyListAmino;
}
export interface MutablesAminoMsg {
    type: "/assetmantle.schema.qualified.base.Mutables";
    value: MutablesAmino;
}
export interface MutablesSDKType {
    property_list?: PropertyListSDKType;
}
export declare const Mutables: {
    encode(message: Mutables, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mutables;
    fromJSON(object: any): Mutables;
    toJSON(message: Mutables): unknown;
    fromPartial(object: Partial<Mutables>): Mutables;
    fromAmino(object: MutablesAmino): Mutables;
    toAmino(message: Mutables): MutablesAmino;
    fromAminoMsg(object: MutablesAminoMsg): Mutables;
    fromProtoMsg(message: MutablesProtoMsg): Mutables;
    toProto(message: Mutables): Uint8Array;
    toProtoMsg(message: Mutables): MutablesProtoMsg;
};
