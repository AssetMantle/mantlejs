import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
export interface PropertyID {
    keyID?: StringID;
    typeID?: StringID;
}
export interface PropertyIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.PropertyID";
    value: Uint8Array;
}
export interface PropertyIDAmino {
    key_i_d?: StringIDAmino;
    type_i_d?: StringIDAmino;
}
export interface PropertyIDAminoMsg {
    type: "/assetmantle.schema.ids.base.PropertyID";
    value: PropertyIDAmino;
}
export interface PropertyIDSDKType {
    key_i_d?: StringIDSDKType;
    type_i_d?: StringIDSDKType;
}
export declare const PropertyID: {
    encode(message: PropertyID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PropertyID;
    fromJSON(object: any): PropertyID;
    toJSON(message: PropertyID): unknown;
    fromPartial(object: Partial<PropertyID>): PropertyID;
    fromAmino(object: PropertyIDAmino): PropertyID;
    toAmino(message: PropertyID): PropertyIDAmino;
    fromAminoMsg(object: PropertyIDAminoMsg): PropertyID;
    fromProtoMsg(message: PropertyIDProtoMsg): PropertyID;
    toProto(message: PropertyID): Uint8Array;
    toProtoMsg(message: PropertyID): PropertyIDProtoMsg;
};
