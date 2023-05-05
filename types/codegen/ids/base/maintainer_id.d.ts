import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface MaintainerID {
    hashID?: HashID;
}
export interface MaintainerIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.MaintainerID";
    value: Uint8Array;
}
export interface MaintainerIDAmino {
    hash_i_d?: HashIDAmino;
}
export interface MaintainerIDAminoMsg {
    type: "/assetmantle.schema.ids.base.MaintainerID";
    value: MaintainerIDAmino;
}
export interface MaintainerIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const MaintainerID: {
    encode(message: MaintainerID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MaintainerID;
    fromJSON(object: any): MaintainerID;
    toJSON(message: MaintainerID): unknown;
    fromPartial(object: Partial<MaintainerID>): MaintainerID;
    fromAmino(object: MaintainerIDAmino): MaintainerID;
    toAmino(message: MaintainerID): MaintainerIDAmino;
    fromAminoMsg(object: MaintainerIDAminoMsg): MaintainerID;
    fromProtoMsg(message: MaintainerIDProtoMsg): MaintainerID;
    toProto(message: MaintainerID): Uint8Array;
    toProtoMsg(message: MaintainerID): MaintainerIDProtoMsg;
};
