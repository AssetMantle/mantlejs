import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface DataID {
    typeID?: StringID;
    hashID?: HashID;
}
export interface DataIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.DataID";
    value: Uint8Array;
}
export interface DataIDAmino {
    type_i_d?: StringIDAmino;
    hash_i_d?: HashIDAmino;
}
export interface DataIDAminoMsg {
    type: "/assetmantle.schema.ids.base.DataID";
    value: DataIDAmino;
}
export interface DataIDSDKType {
    type_i_d?: StringIDSDKType;
    hash_i_d?: HashIDSDKType;
}
export declare const DataID: {
    encode(message: DataID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DataID;
    fromJSON(object: any): DataID;
    toJSON(message: DataID): unknown;
    fromPartial(object: Partial<DataID>): DataID;
    fromAmino(object: DataIDAmino): DataID;
    toAmino(message: DataID): DataIDAmino;
    fromAminoMsg(object: DataIDAminoMsg): DataID;
    fromProtoMsg(message: DataIDProtoMsg): DataID;
    toProto(message: DataID): Uint8Array;
    toProtoMsg(message: DataID): DataIDProtoMsg;
};
