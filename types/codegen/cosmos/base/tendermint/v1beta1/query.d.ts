import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDAmino, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockAmino, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoAmino, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequest {
    height: Long;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface GetValidatorSetByHeightRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightRequest";
    value: Uint8Array;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestAmino {
    height: string;
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface GetValidatorSetByHeightRequestAminoMsg {
    type: "cosmos-sdk/GetValidatorSetByHeightRequest";
    value: GetValidatorSetByHeightRequestAmino;
}
/** GetValidatorSetByHeightRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightRequestSDKType {
    height: Long;
    pagination?: PageRequestSDKType;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface GetValidatorSetByHeightResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetValidatorSetByHeightResponse";
    value: Uint8Array;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseAmino {
    block_height: string;
    validators: ValidatorAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface GetValidatorSetByHeightResponseAminoMsg {
    type: "cosmos-sdk/GetValidatorSetByHeightResponse";
    value: GetValidatorSetByHeightResponseAmino;
}
/** GetValidatorSetByHeightResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetValidatorSetByHeightResponseSDKType {
    block_height: Long;
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequest {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequest;
}
export interface GetLatestValidatorSetRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetRequest";
    value: Uint8Array;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestAmino {
    /** pagination defines an pagination for the request. */
    pagination?: PageRequestAmino;
}
export interface GetLatestValidatorSetRequestAminoMsg {
    type: "cosmos-sdk/GetLatestValidatorSetRequest";
    value: GetLatestValidatorSetRequestAmino;
}
/** GetLatestValidatorSetRequest is the request type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetRequestSDKType {
    pagination?: PageRequestSDKType;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponse {
    blockHeight: Long;
    validators: Validator[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponse;
}
export interface GetLatestValidatorSetResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestValidatorSetResponse";
    value: Uint8Array;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseAmino {
    block_height: string;
    validators: ValidatorAmino[];
    /** pagination defines an pagination for the response. */
    pagination?: PageResponseAmino;
}
export interface GetLatestValidatorSetResponseAminoMsg {
    type: "cosmos-sdk/GetLatestValidatorSetResponse";
    value: GetLatestValidatorSetResponseAmino;
}
/** GetLatestValidatorSetResponse is the response type for the Query/GetValidatorSetByHeight RPC method. */
export interface GetLatestValidatorSetResponseSDKType {
    block_height: Long;
    validators: ValidatorSDKType[];
    pagination?: PageResponseSDKType;
}
/** Validator is the type for the validator-set. */
export interface Validator {
    address: string;
    pubKey?: Any;
    votingPower: Long;
    proposerPriority: Long;
}
export interface ValidatorProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Validator";
    value: Uint8Array;
}
/** Validator is the type for the validator-set. */
export interface ValidatorAmino {
    address: string;
    pub_key?: AnyAmino;
    voting_power: string;
    proposer_priority: string;
}
export interface ValidatorAminoMsg {
    type: "cosmos-sdk/Validator";
    value: ValidatorAmino;
}
/** Validator is the type for the validator-set. */
export interface ValidatorSDKType {
    address: string;
    pub_key?: AnySDKType;
    voting_power: Long;
    proposer_priority: Long;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequest {
    height: Long;
}
export interface GetBlockByHeightRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightRequest";
    value: Uint8Array;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestAmino {
    height: string;
}
export interface GetBlockByHeightRequestAminoMsg {
    type: "cosmos-sdk/GetBlockByHeightRequest";
    value: GetBlockByHeightRequestAmino;
}
/** GetBlockByHeightRequest is the request type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightRequestSDKType {
    height: Long;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponse {
    blockId?: BlockID;
    block?: Block;
}
export interface GetBlockByHeightResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetBlockByHeightResponse";
    value: Uint8Array;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseAmino {
    block_id?: BlockIDAmino;
    block?: BlockAmino;
}
export interface GetBlockByHeightResponseAminoMsg {
    type: "cosmos-sdk/GetBlockByHeightResponse";
    value: GetBlockByHeightResponseAmino;
}
/** GetBlockByHeightResponse is the response type for the Query/GetBlockByHeight RPC method. */
export interface GetBlockByHeightResponseSDKType {
    block_id?: BlockIDSDKType;
    block?: BlockSDKType;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequest {
}
export interface GetLatestBlockRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockRequest";
    value: Uint8Array;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestAmino {
}
export interface GetLatestBlockRequestAminoMsg {
    type: "cosmos-sdk/GetLatestBlockRequest";
    value: GetLatestBlockRequestAmino;
}
/** GetLatestBlockRequest is the request type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockRequestSDKType {
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponse {
    blockId?: BlockID;
    block?: Block;
}
export interface GetLatestBlockResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetLatestBlockResponse";
    value: Uint8Array;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseAmino {
    block_id?: BlockIDAmino;
    block?: BlockAmino;
}
export interface GetLatestBlockResponseAminoMsg {
    type: "cosmos-sdk/GetLatestBlockResponse";
    value: GetLatestBlockResponseAmino;
}
/** GetLatestBlockResponse is the response type for the Query/GetLatestBlock RPC method. */
export interface GetLatestBlockResponseSDKType {
    block_id?: BlockIDSDKType;
    block?: BlockSDKType;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequest {
}
export interface GetSyncingRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingRequest";
    value: Uint8Array;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestAmino {
}
export interface GetSyncingRequestAminoMsg {
    type: "cosmos-sdk/GetSyncingRequest";
    value: GetSyncingRequestAmino;
}
/** GetSyncingRequest is the request type for the Query/GetSyncing RPC method. */
export interface GetSyncingRequestSDKType {
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponse {
    syncing: boolean;
}
export interface GetSyncingResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetSyncingResponse";
    value: Uint8Array;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseAmino {
    syncing: boolean;
}
export interface GetSyncingResponseAminoMsg {
    type: "cosmos-sdk/GetSyncingResponse";
    value: GetSyncingResponseAmino;
}
/** GetSyncingResponse is the response type for the Query/GetSyncing RPC method. */
export interface GetSyncingResponseSDKType {
    syncing: boolean;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequest {
}
export interface GetNodeInfoRequestProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoRequest";
    value: Uint8Array;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestAmino {
}
export interface GetNodeInfoRequestAminoMsg {
    type: "cosmos-sdk/GetNodeInfoRequest";
    value: GetNodeInfoRequestAmino;
}
/** GetNodeInfoRequest is the request type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoRequestSDKType {
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponse {
    nodeInfo?: NodeInfo;
    applicationVersion?: VersionInfo;
}
export interface GetNodeInfoResponseProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.GetNodeInfoResponse";
    value: Uint8Array;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseAmino {
    node_info?: NodeInfoAmino;
    application_version?: VersionInfoAmino;
}
export interface GetNodeInfoResponseAminoMsg {
    type: "cosmos-sdk/GetNodeInfoResponse";
    value: GetNodeInfoResponseAmino;
}
/** GetNodeInfoResponse is the response type for the Query/GetNodeInfo RPC method. */
export interface GetNodeInfoResponseSDKType {
    node_info?: NodeInfoSDKType;
    application_version?: VersionInfoSDKType;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfo {
    name: string;
    appName: string;
    version: string;
    gitCommit: string;
    buildTags: string;
    goVersion: string;
    buildDeps: Module[];
    /** Since: cosmos-sdk 0.43 */
    cosmosSdkVersion: string;
}
export interface VersionInfoProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.VersionInfo";
    value: Uint8Array;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoAmino {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: ModuleAmino[];
    /** Since: cosmos-sdk 0.43 */
    cosmos_sdk_version: string;
}
export interface VersionInfoAminoMsg {
    type: "cosmos-sdk/VersionInfo";
    value: VersionInfoAmino;
}
/** VersionInfo is the type for the GetNodeInfoResponse message. */
export interface VersionInfoSDKType {
    name: string;
    app_name: string;
    version: string;
    git_commit: string;
    build_tags: string;
    go_version: string;
    build_deps: ModuleSDKType[];
    cosmos_sdk_version: string;
}
/** Module is the type for VersionInfo */
export interface Module {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
export interface ModuleProtoMsg {
    typeUrl: "/cosmos.base.tendermint.v1beta1.Module";
    value: Uint8Array;
}
/** Module is the type for VersionInfo */
export interface ModuleAmino {
    /** module path */
    path: string;
    /** module version */
    version: string;
    /** checksum */
    sum: string;
}
export interface ModuleAminoMsg {
    type: "cosmos-sdk/Module";
    value: ModuleAmino;
}
/** Module is the type for VersionInfo */
export interface ModuleSDKType {
    path: string;
    version: string;
    sum: string;
}
export declare const GetValidatorSetByHeightRequest: {
    encode(message: GetValidatorSetByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightRequest;
    fromJSON(object: any): GetValidatorSetByHeightRequest;
    toJSON(message: GetValidatorSetByHeightRequest): unknown;
    fromPartial(object: Partial<GetValidatorSetByHeightRequest>): GetValidatorSetByHeightRequest;
    fromAmino(object: GetValidatorSetByHeightRequestAmino): GetValidatorSetByHeightRequest;
    toAmino(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAmino;
    fromAminoMsg(object: GetValidatorSetByHeightRequestAminoMsg): GetValidatorSetByHeightRequest;
    toAminoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestAminoMsg;
    fromProtoMsg(message: GetValidatorSetByHeightRequestProtoMsg): GetValidatorSetByHeightRequest;
    toProto(message: GetValidatorSetByHeightRequest): Uint8Array;
    toProtoMsg(message: GetValidatorSetByHeightRequest): GetValidatorSetByHeightRequestProtoMsg;
};
export declare const GetValidatorSetByHeightResponse: {
    encode(message: GetValidatorSetByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetValidatorSetByHeightResponse;
    fromJSON(object: any): GetValidatorSetByHeightResponse;
    toJSON(message: GetValidatorSetByHeightResponse): unknown;
    fromPartial(object: Partial<GetValidatorSetByHeightResponse>): GetValidatorSetByHeightResponse;
    fromAmino(object: GetValidatorSetByHeightResponseAmino): GetValidatorSetByHeightResponse;
    toAmino(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAmino;
    fromAminoMsg(object: GetValidatorSetByHeightResponseAminoMsg): GetValidatorSetByHeightResponse;
    toAminoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseAminoMsg;
    fromProtoMsg(message: GetValidatorSetByHeightResponseProtoMsg): GetValidatorSetByHeightResponse;
    toProto(message: GetValidatorSetByHeightResponse): Uint8Array;
    toProtoMsg(message: GetValidatorSetByHeightResponse): GetValidatorSetByHeightResponseProtoMsg;
};
export declare const GetLatestValidatorSetRequest: {
    encode(message: GetLatestValidatorSetRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetRequest;
    fromJSON(object: any): GetLatestValidatorSetRequest;
    toJSON(message: GetLatestValidatorSetRequest): unknown;
    fromPartial(object: Partial<GetLatestValidatorSetRequest>): GetLatestValidatorSetRequest;
    fromAmino(object: GetLatestValidatorSetRequestAmino): GetLatestValidatorSetRequest;
    toAmino(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAmino;
    fromAminoMsg(object: GetLatestValidatorSetRequestAminoMsg): GetLatestValidatorSetRequest;
    toAminoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestAminoMsg;
    fromProtoMsg(message: GetLatestValidatorSetRequestProtoMsg): GetLatestValidatorSetRequest;
    toProto(message: GetLatestValidatorSetRequest): Uint8Array;
    toProtoMsg(message: GetLatestValidatorSetRequest): GetLatestValidatorSetRequestProtoMsg;
};
export declare const GetLatestValidatorSetResponse: {
    encode(message: GetLatestValidatorSetResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestValidatorSetResponse;
    fromJSON(object: any): GetLatestValidatorSetResponse;
    toJSON(message: GetLatestValidatorSetResponse): unknown;
    fromPartial(object: Partial<GetLatestValidatorSetResponse>): GetLatestValidatorSetResponse;
    fromAmino(object: GetLatestValidatorSetResponseAmino): GetLatestValidatorSetResponse;
    toAmino(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAmino;
    fromAminoMsg(object: GetLatestValidatorSetResponseAminoMsg): GetLatestValidatorSetResponse;
    toAminoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseAminoMsg;
    fromProtoMsg(message: GetLatestValidatorSetResponseProtoMsg): GetLatestValidatorSetResponse;
    toProto(message: GetLatestValidatorSetResponse): Uint8Array;
    toProtoMsg(message: GetLatestValidatorSetResponse): GetLatestValidatorSetResponseProtoMsg;
};
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
    fromPartial(object: Partial<Validator>): Validator;
    fromAmino(object: ValidatorAmino): Validator;
    toAmino(message: Validator): ValidatorAmino;
    fromAminoMsg(object: ValidatorAminoMsg): Validator;
    toAminoMsg(message: Validator): ValidatorAminoMsg;
    fromProtoMsg(message: ValidatorProtoMsg): Validator;
    toProto(message: Validator): Uint8Array;
    toProtoMsg(message: Validator): ValidatorProtoMsg;
};
export declare const GetBlockByHeightRequest: {
    encode(message: GetBlockByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightRequest;
    fromJSON(object: any): GetBlockByHeightRequest;
    toJSON(message: GetBlockByHeightRequest): unknown;
    fromPartial(object: Partial<GetBlockByHeightRequest>): GetBlockByHeightRequest;
    fromAmino(object: GetBlockByHeightRequestAmino): GetBlockByHeightRequest;
    toAmino(message: GetBlockByHeightRequest): GetBlockByHeightRequestAmino;
    fromAminoMsg(object: GetBlockByHeightRequestAminoMsg): GetBlockByHeightRequest;
    toAminoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestAminoMsg;
    fromProtoMsg(message: GetBlockByHeightRequestProtoMsg): GetBlockByHeightRequest;
    toProto(message: GetBlockByHeightRequest): Uint8Array;
    toProtoMsg(message: GetBlockByHeightRequest): GetBlockByHeightRequestProtoMsg;
};
export declare const GetBlockByHeightResponse: {
    encode(message: GetBlockByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetBlockByHeightResponse;
    fromJSON(object: any): GetBlockByHeightResponse;
    toJSON(message: GetBlockByHeightResponse): unknown;
    fromPartial(object: Partial<GetBlockByHeightResponse>): GetBlockByHeightResponse;
    fromAmino(object: GetBlockByHeightResponseAmino): GetBlockByHeightResponse;
    toAmino(message: GetBlockByHeightResponse): GetBlockByHeightResponseAmino;
    fromAminoMsg(object: GetBlockByHeightResponseAminoMsg): GetBlockByHeightResponse;
    toAminoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseAminoMsg;
    fromProtoMsg(message: GetBlockByHeightResponseProtoMsg): GetBlockByHeightResponse;
    toProto(message: GetBlockByHeightResponse): Uint8Array;
    toProtoMsg(message: GetBlockByHeightResponse): GetBlockByHeightResponseProtoMsg;
};
export declare const GetLatestBlockRequest: {
    encode(_: GetLatestBlockRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockRequest;
    fromJSON(_: any): GetLatestBlockRequest;
    toJSON(_: GetLatestBlockRequest): unknown;
    fromPartial(_: Partial<GetLatestBlockRequest>): GetLatestBlockRequest;
    fromAmino(_: GetLatestBlockRequestAmino): GetLatestBlockRequest;
    toAmino(_: GetLatestBlockRequest): GetLatestBlockRequestAmino;
    fromAminoMsg(object: GetLatestBlockRequestAminoMsg): GetLatestBlockRequest;
    toAminoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestAminoMsg;
    fromProtoMsg(message: GetLatestBlockRequestProtoMsg): GetLatestBlockRequest;
    toProto(message: GetLatestBlockRequest): Uint8Array;
    toProtoMsg(message: GetLatestBlockRequest): GetLatestBlockRequestProtoMsg;
};
export declare const GetLatestBlockResponse: {
    encode(message: GetLatestBlockResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetLatestBlockResponse;
    fromJSON(object: any): GetLatestBlockResponse;
    toJSON(message: GetLatestBlockResponse): unknown;
    fromPartial(object: Partial<GetLatestBlockResponse>): GetLatestBlockResponse;
    fromAmino(object: GetLatestBlockResponseAmino): GetLatestBlockResponse;
    toAmino(message: GetLatestBlockResponse): GetLatestBlockResponseAmino;
    fromAminoMsg(object: GetLatestBlockResponseAminoMsg): GetLatestBlockResponse;
    toAminoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseAminoMsg;
    fromProtoMsg(message: GetLatestBlockResponseProtoMsg): GetLatestBlockResponse;
    toProto(message: GetLatestBlockResponse): Uint8Array;
    toProtoMsg(message: GetLatestBlockResponse): GetLatestBlockResponseProtoMsg;
};
export declare const GetSyncingRequest: {
    encode(_: GetSyncingRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingRequest;
    fromJSON(_: any): GetSyncingRequest;
    toJSON(_: GetSyncingRequest): unknown;
    fromPartial(_: Partial<GetSyncingRequest>): GetSyncingRequest;
    fromAmino(_: GetSyncingRequestAmino): GetSyncingRequest;
    toAmino(_: GetSyncingRequest): GetSyncingRequestAmino;
    fromAminoMsg(object: GetSyncingRequestAminoMsg): GetSyncingRequest;
    toAminoMsg(message: GetSyncingRequest): GetSyncingRequestAminoMsg;
    fromProtoMsg(message: GetSyncingRequestProtoMsg): GetSyncingRequest;
    toProto(message: GetSyncingRequest): Uint8Array;
    toProtoMsg(message: GetSyncingRequest): GetSyncingRequestProtoMsg;
};
export declare const GetSyncingResponse: {
    encode(message: GetSyncingResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetSyncingResponse;
    fromJSON(object: any): GetSyncingResponse;
    toJSON(message: GetSyncingResponse): unknown;
    fromPartial(object: Partial<GetSyncingResponse>): GetSyncingResponse;
    fromAmino(object: GetSyncingResponseAmino): GetSyncingResponse;
    toAmino(message: GetSyncingResponse): GetSyncingResponseAmino;
    fromAminoMsg(object: GetSyncingResponseAminoMsg): GetSyncingResponse;
    toAminoMsg(message: GetSyncingResponse): GetSyncingResponseAminoMsg;
    fromProtoMsg(message: GetSyncingResponseProtoMsg): GetSyncingResponse;
    toProto(message: GetSyncingResponse): Uint8Array;
    toProtoMsg(message: GetSyncingResponse): GetSyncingResponseProtoMsg;
};
export declare const GetNodeInfoRequest: {
    encode(_: GetNodeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoRequest;
    fromJSON(_: any): GetNodeInfoRequest;
    toJSON(_: GetNodeInfoRequest): unknown;
    fromPartial(_: Partial<GetNodeInfoRequest>): GetNodeInfoRequest;
    fromAmino(_: GetNodeInfoRequestAmino): GetNodeInfoRequest;
    toAmino(_: GetNodeInfoRequest): GetNodeInfoRequestAmino;
    fromAminoMsg(object: GetNodeInfoRequestAminoMsg): GetNodeInfoRequest;
    toAminoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestAminoMsg;
    fromProtoMsg(message: GetNodeInfoRequestProtoMsg): GetNodeInfoRequest;
    toProto(message: GetNodeInfoRequest): Uint8Array;
    toProtoMsg(message: GetNodeInfoRequest): GetNodeInfoRequestProtoMsg;
};
export declare const GetNodeInfoResponse: {
    encode(message: GetNodeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GetNodeInfoResponse;
    fromJSON(object: any): GetNodeInfoResponse;
    toJSON(message: GetNodeInfoResponse): unknown;
    fromPartial(object: Partial<GetNodeInfoResponse>): GetNodeInfoResponse;
    fromAmino(object: GetNodeInfoResponseAmino): GetNodeInfoResponse;
    toAmino(message: GetNodeInfoResponse): GetNodeInfoResponseAmino;
    fromAminoMsg(object: GetNodeInfoResponseAminoMsg): GetNodeInfoResponse;
    toAminoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseAminoMsg;
    fromProtoMsg(message: GetNodeInfoResponseProtoMsg): GetNodeInfoResponse;
    toProto(message: GetNodeInfoResponse): Uint8Array;
    toProtoMsg(message: GetNodeInfoResponse): GetNodeInfoResponseProtoMsg;
};
export declare const VersionInfo: {
    encode(message: VersionInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VersionInfo;
    fromJSON(object: any): VersionInfo;
    toJSON(message: VersionInfo): unknown;
    fromPartial(object: Partial<VersionInfo>): VersionInfo;
    fromAmino(object: VersionInfoAmino): VersionInfo;
    toAmino(message: VersionInfo): VersionInfoAmino;
    fromAminoMsg(object: VersionInfoAminoMsg): VersionInfo;
    toAminoMsg(message: VersionInfo): VersionInfoAminoMsg;
    fromProtoMsg(message: VersionInfoProtoMsg): VersionInfo;
    toProto(message: VersionInfo): Uint8Array;
    toProtoMsg(message: VersionInfo): VersionInfoProtoMsg;
};
export declare const Module: {
    encode(message: Module, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Module;
    fromJSON(object: any): Module;
    toJSON(message: Module): unknown;
    fromPartial(object: Partial<Module>): Module;
    fromAmino(object: ModuleAmino): Module;
    toAmino(message: Module): ModuleAmino;
    fromAminoMsg(object: ModuleAminoMsg): Module;
    toAminoMsg(message: Module): ModuleAminoMsg;
    fromProtoMsg(message: ModuleProtoMsg): Module;
    toProto(message: Module): Uint8Array;
    toProtoMsg(message: Module): ModuleProtoMsg;
};
