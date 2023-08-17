import { HashID, HashIDAmino, HashIDSDKType } from "../../ids/base/hash_id";
import { StringID, StringIDAmino, StringIDSDKType } from "../../ids/base/string_id";
import * as _m0 from "protobufjs/minimal";
export interface LinkedData {
    resourceID?: HashID;
    extensionID?: StringID;
    serviceEndpoint: string;
}
export interface LinkedDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.LinkedData";
    value: Uint8Array;
}
export interface LinkedDataAmino {
    resource_i_d?: HashIDAmino;
    extension_i_d?: StringIDAmino;
    service_endpoint: string;
}
export interface LinkedDataAminoMsg {
    type: "/assetmantle.schema.data.base.LinkedData";
    value: LinkedDataAmino;
}
export interface LinkedDataSDKType {
    resource_i_d?: HashIDSDKType;
    extension_i_d?: StringIDSDKType;
    service_endpoint: string;
}
export declare const LinkedData: {
    encode(message: LinkedData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LinkedData;
    fromJSON(object: any): LinkedData;
    toJSON(message: LinkedData): unknown;
    fromPartial(object: Partial<LinkedData>): LinkedData;
    fromAmino(object: LinkedDataAmino): LinkedData;
    toAmino(message: LinkedData): LinkedDataAmino;
    fromAminoMsg(object: LinkedDataAminoMsg): LinkedData;
    fromProtoMsg(message: LinkedDataProtoMsg): LinkedData;
    toProto(message: LinkedData): Uint8Array;
    toProtoMsg(message: LinkedData): LinkedDataProtoMsg;
};
