import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import * as _m0 from "protobufjs/minimal";
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: Any;
}
export interface MsgGrantAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowance";
    value: Uint8Array;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
    /** allowance can be any of basic, periodic, allowed fee allowance. */
    allowance?: AnyAmino;
}
export interface MsgGrantAllowanceAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowance";
    value: MsgGrantAllowanceAmino;
}
/**
 * MsgGrantAllowance adds permission for Grantee to spend up to Allowance
 * of fees from the account of Granter.
 */
export interface MsgGrantAllowanceSDKType {
    granter: string;
    grantee: string;
    allowance?: AnySDKType;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponse {
}
export interface MsgGrantAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgGrantAllowanceResponse";
    value: Uint8Array;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseAmino {
}
export interface MsgGrantAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgGrantAllowanceResponse";
    value: MsgGrantAllowanceResponseAmino;
}
/** MsgGrantAllowanceResponse defines the Msg/GrantAllowanceResponse response type. */
export interface MsgGrantAllowanceResponseSDKType {
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowance {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowance";
    value: Uint8Array;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceAmino {
    /** granter is the address of the user granting an allowance of their funds. */
    granter: string;
    /** grantee is the address of the user being granted an allowance of another user's funds. */
    grantee: string;
}
export interface MsgRevokeAllowanceAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowance";
    value: MsgRevokeAllowanceAmino;
}
/** MsgRevokeAllowance removes any existing Allowance from Granter to Grantee. */
export interface MsgRevokeAllowanceSDKType {
    granter: string;
    grantee: string;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponse {
}
export interface MsgRevokeAllowanceResponseProtoMsg {
    typeUrl: "/cosmos.feegrant.v1beta1.MsgRevokeAllowanceResponse";
    value: Uint8Array;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseAmino {
}
export interface MsgRevokeAllowanceResponseAminoMsg {
    type: "cosmos-sdk/MsgRevokeAllowanceResponse";
    value: MsgRevokeAllowanceResponseAmino;
}
/** MsgRevokeAllowanceResponse defines the Msg/RevokeAllowanceResponse response type. */
export interface MsgRevokeAllowanceResponseSDKType {
}
export declare const MsgGrantAllowance: {
    encode(message: MsgGrantAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowance;
    fromJSON(object: any): MsgGrantAllowance;
    toJSON(message: MsgGrantAllowance): unknown;
    fromPartial(object: Partial<MsgGrantAllowance>): MsgGrantAllowance;
    fromAmino(object: MsgGrantAllowanceAmino): MsgGrantAllowance;
    toAmino(message: MsgGrantAllowance): MsgGrantAllowanceAmino;
    fromAminoMsg(object: MsgGrantAllowanceAminoMsg): MsgGrantAllowance;
    toAminoMsg(message: MsgGrantAllowance): MsgGrantAllowanceAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceProtoMsg): MsgGrantAllowance;
    toProto(message: MsgGrantAllowance): Uint8Array;
    toProtoMsg(message: MsgGrantAllowance): MsgGrantAllowanceProtoMsg;
};
export declare const MsgGrantAllowanceResponse: {
    encode(_: MsgGrantAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgGrantAllowanceResponse;
    fromJSON(_: any): MsgGrantAllowanceResponse;
    toJSON(_: MsgGrantAllowanceResponse): unknown;
    fromPartial(_: Partial<MsgGrantAllowanceResponse>): MsgGrantAllowanceResponse;
    fromAmino(_: MsgGrantAllowanceResponseAmino): MsgGrantAllowanceResponse;
    toAmino(_: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAmino;
    fromAminoMsg(object: MsgGrantAllowanceResponseAminoMsg): MsgGrantAllowanceResponse;
    toAminoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgGrantAllowanceResponseProtoMsg): MsgGrantAllowanceResponse;
    toProto(message: MsgGrantAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgGrantAllowanceResponse): MsgGrantAllowanceResponseProtoMsg;
};
export declare const MsgRevokeAllowance: {
    encode(message: MsgRevokeAllowance, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowance;
    fromJSON(object: any): MsgRevokeAllowance;
    toJSON(message: MsgRevokeAllowance): unknown;
    fromPartial(object: Partial<MsgRevokeAllowance>): MsgRevokeAllowance;
    fromAmino(object: MsgRevokeAllowanceAmino): MsgRevokeAllowance;
    toAmino(message: MsgRevokeAllowance): MsgRevokeAllowanceAmino;
    fromAminoMsg(object: MsgRevokeAllowanceAminoMsg): MsgRevokeAllowance;
    toAminoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceProtoMsg): MsgRevokeAllowance;
    toProto(message: MsgRevokeAllowance): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowance): MsgRevokeAllowanceProtoMsg;
};
export declare const MsgRevokeAllowanceResponse: {
    encode(_: MsgRevokeAllowanceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRevokeAllowanceResponse;
    fromJSON(_: any): MsgRevokeAllowanceResponse;
    toJSON(_: MsgRevokeAllowanceResponse): unknown;
    fromPartial(_: Partial<MsgRevokeAllowanceResponse>): MsgRevokeAllowanceResponse;
    fromAmino(_: MsgRevokeAllowanceResponseAmino): MsgRevokeAllowanceResponse;
    toAmino(_: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAmino;
    fromAminoMsg(object: MsgRevokeAllowanceResponseAminoMsg): MsgRevokeAllowanceResponse;
    toAminoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseAminoMsg;
    fromProtoMsg(message: MsgRevokeAllowanceResponseProtoMsg): MsgRevokeAllowanceResponse;
    toProto(message: MsgRevokeAllowanceResponse): Uint8Array;
    toProtoMsg(message: MsgRevokeAllowanceResponse): MsgRevokeAllowanceResponseProtoMsg;
};
