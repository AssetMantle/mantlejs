import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "./any_ownable_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import * as _m0 from "protobufjs/minimal";
export interface SplitID {
    ownableID?: AnyOwnableID;
    ownerID?: IdentityID;
}
export interface SplitIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.SplitID";
    value: Uint8Array;
}
export interface SplitIDAmino {
    ownable_i_d?: AnyOwnableIDAmino;
    owner_i_d?: IdentityIDAmino;
}
export interface SplitIDAminoMsg {
    type: "/assetmantle.schema.ids.base.SplitID";
    value: SplitIDAmino;
}
export interface SplitIDSDKType {
    ownable_i_d?: AnyOwnableIDSDKType;
    owner_i_d?: IdentityIDSDKType;
}
export declare const SplitID: {
    encode(message: SplitID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SplitID;
    fromJSON(object: any): SplitID;
    toJSON(message: SplitID): unknown;
    fromPartial(object: Partial<SplitID>): SplitID;
    fromAmino(object: SplitIDAmino): SplitID;
    toAmino(message: SplitID): SplitIDAmino;
    fromAminoMsg(object: SplitIDAminoMsg): SplitID;
    fromProtoMsg(message: SplitIDProtoMsg): SplitID;
    toProto(message: SplitID): Uint8Array;
    toProtoMsg(message: SplitID): SplitIDProtoMsg;
};
