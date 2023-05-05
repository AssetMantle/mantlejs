import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface IdentityID {
    hashID?: HashID;
}
export interface IdentityIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.IdentityID";
    value: Uint8Array;
}
export interface IdentityIDAmino {
    hash_i_d?: HashIDAmino;
}
export interface IdentityIDAminoMsg {
    type: "/assetmantle.schema.ids.base.IdentityID";
    value: IdentityIDAmino;
}
export interface IdentityIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const IdentityID: {
    encode(message: IdentityID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IdentityID;
    fromJSON(object: any): IdentityID;
    toJSON(message: IdentityID): unknown;
    fromPartial(object: Partial<IdentityID>): IdentityID;
    fromAmino(object: IdentityIDAmino): IdentityID;
    toAmino(message: IdentityID): IdentityIDAmino;
    fromAminoMsg(object: IdentityIDAminoMsg): IdentityID;
    fromProtoMsg(message: IdentityIDProtoMsg): IdentityID;
    toProto(message: IdentityID): Uint8Array;
    toProtoMsg(message: IdentityID): IdentityIDProtoMsg;
};
