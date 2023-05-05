import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface AssetID {
    hashID?: HashID;
}
export interface AssetIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.AssetID";
    value: Uint8Array;
}
export interface AssetIDAmino {
    hash_i_d?: HashIDAmino;
}
export interface AssetIDAminoMsg {
    type: "/assetmantle.schema.ids.base.AssetID";
    value: AssetIDAmino;
}
export interface AssetIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const AssetID: {
    encode(message: AssetID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetID;
    fromJSON(object: any): AssetID;
    toJSON(message: AssetID): unknown;
    fromPartial(object: Partial<AssetID>): AssetID;
    fromAmino(object: AssetIDAmino): AssetID;
    toAmino(message: AssetID): AssetIDAmino;
    fromAminoMsg(object: AssetIDAminoMsg): AssetID;
    fromProtoMsg(message: AssetIDProtoMsg): AssetID;
    toProto(message: AssetID): Uint8Array;
    toProtoMsg(message: AssetID): AssetIDProtoMsg;
};
