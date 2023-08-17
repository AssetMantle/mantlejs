import * as _202 from "./app/v1alpha1/config";
import * as _203 from "./app/v1alpha1/module";
import * as _204 from "./app/v1alpha1/query";
import * as _205 from "./auth/v1beta1/auth";
import * as _206 from "./auth/v1beta1/genesis";
import * as _207 from "./auth/v1beta1/query";
import * as _208 from "./authz/v1beta1/authz";
import * as _209 from "./authz/v1beta1/event";
import * as _210 from "./authz/v1beta1/genesis";
import * as _211 from "./authz/v1beta1/query";
import * as _212 from "./authz/v1beta1/tx";
import * as _213 from "./bank/v1beta1/authz";
import * as _214 from "./bank/v1beta1/bank";
import * as _215 from "./bank/v1beta1/genesis";
import * as _216 from "./bank/v1beta1/query";
import * as _217 from "./bank/v1beta1/tx";
import * as _218 from "./base/abci/v1beta1/abci";
import * as _219 from "./base/kv/v1beta1/kv";
import * as _220 from "./base/query/v1beta1/pagination";
import * as _221 from "./base/reflection/v1beta1/reflection";
import * as _222 from "./base/reflection/v2alpha1/reflection";
import * as _223 from "./base/snapshots/v1beta1/snapshot";
import * as _224 from "./base/store/v1beta1/commit_info";
import * as _225 from "./base/store/v1beta1/listening";
import * as _226 from "./base/tendermint/v1beta1/query";
import * as _227 from "./base/v1beta1/coin";
import * as _228 from "./capability/v1beta1/capability";
import * as _229 from "./capability/v1beta1/genesis";
import * as _230 from "./crisis/v1beta1/genesis";
import * as _231 from "./crisis/v1beta1/tx";
import * as _232 from "./crypto/ed25519/keys";
import * as _233 from "./crypto/hd/v1/hd";
import * as _234 from "./crypto/keyring/v1/record";
import * as _235 from "./crypto/multisig/keys";
import * as _236 from "./crypto/secp256k1/keys";
import * as _237 from "./crypto/secp256r1/keys";
import * as _238 from "./distribution/v1beta1/distribution";
import * as _239 from "./distribution/v1beta1/genesis";
import * as _240 from "./distribution/v1beta1/query";
import * as _241 from "./distribution/v1beta1/tx";
import * as _242 from "./evidence/v1beta1/evidence";
import * as _243 from "./evidence/v1beta1/genesis";
import * as _244 from "./evidence/v1beta1/query";
import * as _245 from "./evidence/v1beta1/tx";
import * as _246 from "./feegrant/v1beta1/feegrant";
import * as _247 from "./feegrant/v1beta1/genesis";
import * as _248 from "./feegrant/v1beta1/query";
import * as _249 from "./feegrant/v1beta1/tx";
import * as _250 from "./genutil/v1beta1/genesis";
import * as _251 from "./gov/v1/genesis";
import * as _252 from "./gov/v1/gov";
import * as _253 from "./gov/v1/query";
import * as _254 from "./gov/v1/tx";
import * as _255 from "./gov/v1beta1/genesis";
import * as _256 from "./gov/v1beta1/gov";
import * as _257 from "./gov/v1beta1/query";
import * as _258 from "./gov/v1beta1/tx";
import * as _259 from "./group/v1/events";
import * as _260 from "./group/v1/genesis";
import * as _261 from "./group/v1/query";
import * as _262 from "./group/v1/tx";
import * as _263 from "./group/v1/types";
import * as _264 from "./mint/v1beta1/genesis";
import * as _265 from "./mint/v1beta1/mint";
import * as _266 from "./mint/v1beta1/query";
import * as _268 from "./nft/v1beta1/event";
import * as _269 from "./nft/v1beta1/genesis";
import * as _270 from "./nft/v1beta1/nft";
import * as _271 from "./nft/v1beta1/query";
import * as _272 from "./nft/v1beta1/tx";
import * as _273 from "./orm/v1/orm";
import * as _274 from "./orm/v1alpha1/schema";
import * as _275 from "./params/v1beta1/params";
import * as _276 from "./params/v1beta1/query";
import * as _277 from "./slashing/v1beta1/genesis";
import * as _278 from "./slashing/v1beta1/query";
import * as _279 from "./slashing/v1beta1/slashing";
import * as _280 from "./slashing/v1beta1/tx";
import * as _281 from "./staking/v1beta1/authz";
import * as _282 from "./staking/v1beta1/genesis";
import * as _283 from "./staking/v1beta1/query";
import * as _284 from "./staking/v1beta1/staking";
import * as _285 from "./staking/v1beta1/tx";
import * as _286 from "./tx/signing/v1beta1/signing";
import * as _287 from "./tx/v1beta1/service";
import * as _288 from "./tx/v1beta1/tx";
import * as _289 from "./upgrade/v1beta1/query";
import * as _290 from "./upgrade/v1beta1/tx";
import * as _291 from "./upgrade/v1beta1/upgrade";
import * as _292 from "./vesting/v1beta1/tx";
import * as _293 from "./vesting/v1beta1/vesting";
import * as _447 from "./app/v1alpha1/query.rpc.Query";
import * as _448 from "./auth/v1beta1/query.rpc.Query";
import * as _449 from "./authz/v1beta1/query.rpc.Query";
import * as _450 from "./bank/v1beta1/query.rpc.Query";
import * as _451 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _452 from "./distribution/v1beta1/query.rpc.Query";
import * as _453 from "./evidence/v1beta1/query.rpc.Query";
import * as _454 from "./feegrant/v1beta1/query.rpc.Query";
import * as _455 from "./gov/v1/query.rpc.Query";
import * as _456 from "./gov/v1beta1/query.rpc.Query";
import * as _457 from "./group/v1/query.rpc.Query";
import * as _458 from "./mint/v1beta1/query.rpc.Query";
import * as _459 from "./nft/v1beta1/query.rpc.Query";
import * as _460 from "./params/v1beta1/query.rpc.Query";
import * as _461 from "./slashing/v1beta1/query.rpc.Query";
import * as _462 from "./staking/v1beta1/query.rpc.Query";
import * as _463 from "./tx/v1beta1/service.rpc.Service";
import * as _464 from "./upgrade/v1beta1/query.rpc.Query";
import * as _465 from "./authz/v1beta1/tx.rpc.msg";
import * as _466 from "./bank/v1beta1/tx.rpc.msg";
import * as _467 from "./crisis/v1beta1/tx.rpc.msg";
import * as _468 from "./distribution/v1beta1/tx.rpc.msg";
import * as _469 from "./evidence/v1beta1/tx.rpc.msg";
import * as _470 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _471 from "./gov/v1/tx.rpc.msg";
import * as _472 from "./gov/v1beta1/tx.rpc.msg";
import * as _473 from "./group/v1/tx.rpc.msg";
import * as _474 from "./nft/v1beta1/tx.rpc.msg";
import * as _475 from "./slashing/v1beta1/tx.rpc.msg";
import * as _476 from "./staking/v1beta1/tx.rpc.msg";
import * as _477 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _478 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _447.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _204.QueryConfigRequest): Promise<_204.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _204.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryConfigRequest;
                fromJSON(_: any): _204.QueryConfigRequest;
                toJSON(_: _204.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_204.QueryConfigRequest>): _204.QueryConfigRequest;
                fromAmino(_: _204.QueryConfigRequestAmino): _204.QueryConfigRequest;
                toAmino(_: _204.QueryConfigRequest): _204.QueryConfigRequestAmino;
                fromAminoMsg(object: _204.QueryConfigRequestAminoMsg): _204.QueryConfigRequest;
                toAminoMsg(message: _204.QueryConfigRequest): _204.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _204.QueryConfigRequestProtoMsg): _204.QueryConfigRequest;
                toProto(message: _204.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _204.QueryConfigRequest): _204.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _204.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.QueryConfigResponse;
                fromJSON(object: any): _204.QueryConfigResponse;
                toJSON(message: _204.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_204.QueryConfigResponse>): _204.QueryConfigResponse;
                fromAmino(object: _204.QueryConfigResponseAmino): _204.QueryConfigResponse;
                toAmino(message: _204.QueryConfigResponse): _204.QueryConfigResponseAmino;
                fromAminoMsg(object: _204.QueryConfigResponseAminoMsg): _204.QueryConfigResponse;
                toAminoMsg(message: _204.QueryConfigResponse): _204.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _204.QueryConfigResponseProtoMsg): _204.QueryConfigResponse;
                toProto(message: _204.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _204.QueryConfigResponse): _204.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _203.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.ModuleDescriptor;
                fromJSON(object: any): _203.ModuleDescriptor;
                toJSON(message: _203.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_203.ModuleDescriptor>): _203.ModuleDescriptor;
                fromAmino(object: _203.ModuleDescriptorAmino): _203.ModuleDescriptor;
                toAmino(message: _203.ModuleDescriptor): _203.ModuleDescriptorAmino;
                fromAminoMsg(object: _203.ModuleDescriptorAminoMsg): _203.ModuleDescriptor;
                toAminoMsg(message: _203.ModuleDescriptor): _203.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _203.ModuleDescriptorProtoMsg): _203.ModuleDescriptor;
                toProto(message: _203.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _203.ModuleDescriptor): _203.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _203.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PackageReference;
                fromJSON(object: any): _203.PackageReference;
                toJSON(message: _203.PackageReference): unknown;
                fromPartial(object: Partial<_203.PackageReference>): _203.PackageReference;
                fromAmino(object: _203.PackageReferenceAmino): _203.PackageReference;
                toAmino(message: _203.PackageReference): _203.PackageReferenceAmino;
                fromAminoMsg(object: _203.PackageReferenceAminoMsg): _203.PackageReference;
                toAminoMsg(message: _203.PackageReference): _203.PackageReferenceAminoMsg;
                fromProtoMsg(message: _203.PackageReferenceProtoMsg): _203.PackageReference;
                toProto(message: _203.PackageReference): Uint8Array;
                toProtoMsg(message: _203.PackageReference): _203.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _203.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.MigrateFromInfo;
                fromJSON(object: any): _203.MigrateFromInfo;
                toJSON(message: _203.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_203.MigrateFromInfo>): _203.MigrateFromInfo;
                fromAmino(object: _203.MigrateFromInfoAmino): _203.MigrateFromInfo;
                toAmino(message: _203.MigrateFromInfo): _203.MigrateFromInfoAmino;
                fromAminoMsg(object: _203.MigrateFromInfoAminoMsg): _203.MigrateFromInfo;
                toAminoMsg(message: _203.MigrateFromInfo): _203.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _203.MigrateFromInfoProtoMsg): _203.MigrateFromInfo;
                toProto(message: _203.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _203.MigrateFromInfo): _203.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _202.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Config;
                fromJSON(object: any): _202.Config;
                toJSON(message: _202.Config): unknown;
                fromPartial(object: Partial<_202.Config>): _202.Config;
                fromAmino(object: _202.ConfigAmino): _202.Config;
                toAmino(message: _202.Config): _202.ConfigAmino;
                fromAminoMsg(object: _202.ConfigAminoMsg): _202.Config;
                toAminoMsg(message: _202.Config): _202.ConfigAminoMsg;
                fromProtoMsg(message: _202.ConfigProtoMsg): _202.Config;
                toProto(message: _202.Config): Uint8Array;
                toProtoMsg(message: _202.Config): _202.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _202.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.ModuleConfig;
                fromJSON(object: any): _202.ModuleConfig;
                toJSON(message: _202.ModuleConfig): unknown;
                fromPartial(object: Partial<_202.ModuleConfig>): _202.ModuleConfig;
                fromAmino(object: _202.ModuleConfigAmino): _202.ModuleConfig;
                toAmino(message: _202.ModuleConfig): _202.ModuleConfigAmino;
                fromAminoMsg(object: _202.ModuleConfigAminoMsg): _202.ModuleConfig;
                toAminoMsg(message: _202.ModuleConfig): _202.ModuleConfigAminoMsg;
                fromProtoMsg(message: _202.ModuleConfigProtoMsg): _202.ModuleConfig;
                toProto(message: _202.ModuleConfig): Uint8Array;
                toProtoMsg(message: _202.ModuleConfig): _202.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _448.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _207.QueryAccountsRequest): Promise<_207.QueryAccountsResponse>;
                account(request: _207.QueryAccountRequest): Promise<_207.QueryAccountResponse>;
                params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                moduleAccounts(request?: _207.QueryModuleAccountsRequest): Promise<_207.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _207.Bech32PrefixRequest): Promise<_207.Bech32PrefixResponse>;
                addressBytesToString(request: _207.AddressBytesToStringRequest): Promise<_207.AddressBytesToStringResponse>;
                addressStringToBytes(request: _207.AddressStringToBytesRequest): Promise<_207.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _207.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryAccountsRequest;
                fromJSON(object: any): _207.QueryAccountsRequest;
                toJSON(message: _207.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_207.QueryAccountsRequest>): _207.QueryAccountsRequest;
                fromAmino(object: _207.QueryAccountsRequestAmino): _207.QueryAccountsRequest;
                toAmino(message: _207.QueryAccountsRequest): _207.QueryAccountsRequestAmino;
                fromAminoMsg(object: _207.QueryAccountsRequestAminoMsg): _207.QueryAccountsRequest;
                toAminoMsg(message: _207.QueryAccountsRequest): _207.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _207.QueryAccountsRequestProtoMsg): _207.QueryAccountsRequest;
                toProto(message: _207.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _207.QueryAccountsRequest): _207.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _207.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryAccountsResponse;
                fromJSON(object: any): _207.QueryAccountsResponse;
                toJSON(message: _207.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_207.QueryAccountsResponse>): _207.QueryAccountsResponse;
                fromAmino(object: _207.QueryAccountsResponseAmino): _207.QueryAccountsResponse;
                toAmino(message: _207.QueryAccountsResponse): _207.QueryAccountsResponseAmino;
                fromAminoMsg(object: _207.QueryAccountsResponseAminoMsg): _207.QueryAccountsResponse;
                toAminoMsg(message: _207.QueryAccountsResponse): _207.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _207.QueryAccountsResponseProtoMsg): _207.QueryAccountsResponse;
                toProto(message: _207.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _207.QueryAccountsResponse): _207.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _207.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryAccountRequest;
                fromJSON(object: any): _207.QueryAccountRequest;
                toJSON(message: _207.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_207.QueryAccountRequest>): _207.QueryAccountRequest;
                fromAmino(object: _207.QueryAccountRequestAmino): _207.QueryAccountRequest;
                toAmino(message: _207.QueryAccountRequest): _207.QueryAccountRequestAmino;
                fromAminoMsg(object: _207.QueryAccountRequestAminoMsg): _207.QueryAccountRequest;
                toAminoMsg(message: _207.QueryAccountRequest): _207.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _207.QueryAccountRequestProtoMsg): _207.QueryAccountRequest;
                toProto(message: _207.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _207.QueryAccountRequest): _207.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _207.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryModuleAccountsRequest;
                fromJSON(_: any): _207.QueryModuleAccountsRequest;
                toJSON(_: _207.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_207.QueryModuleAccountsRequest>): _207.QueryModuleAccountsRequest;
                fromAmino(_: _207.QueryModuleAccountsRequestAmino): _207.QueryModuleAccountsRequest;
                toAmino(_: _207.QueryModuleAccountsRequest): _207.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _207.QueryModuleAccountsRequestAminoMsg): _207.QueryModuleAccountsRequest;
                toAminoMsg(message: _207.QueryModuleAccountsRequest): _207.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _207.QueryModuleAccountsRequestProtoMsg): _207.QueryModuleAccountsRequest;
                toProto(message: _207.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _207.QueryModuleAccountsRequest): _207.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _207.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsResponse;
                fromJSON(object: any): _207.QueryParamsResponse;
                toJSON(message: _207.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_207.QueryParamsResponse>): _207.QueryParamsResponse;
                fromAmino(object: _207.QueryParamsResponseAmino): _207.QueryParamsResponse;
                toAmino(message: _207.QueryParamsResponse): _207.QueryParamsResponseAmino;
                fromAminoMsg(object: _207.QueryParamsResponseAminoMsg): _207.QueryParamsResponse;
                toAminoMsg(message: _207.QueryParamsResponse): _207.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _207.QueryParamsResponseProtoMsg): _207.QueryParamsResponse;
                toProto(message: _207.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _207.QueryParamsResponse): _207.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _207.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryAccountResponse;
                fromJSON(object: any): _207.QueryAccountResponse;
                toJSON(message: _207.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_207.QueryAccountResponse>): _207.QueryAccountResponse;
                fromAmino(object: _207.QueryAccountResponseAmino): _207.QueryAccountResponse;
                toAmino(message: _207.QueryAccountResponse): _207.QueryAccountResponseAmino;
                fromAminoMsg(object: _207.QueryAccountResponseAminoMsg): _207.QueryAccountResponse;
                toAminoMsg(message: _207.QueryAccountResponse): _207.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _207.QueryAccountResponseProtoMsg): _207.QueryAccountResponse;
                toProto(message: _207.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _207.QueryAccountResponse): _207.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _207.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryParamsRequest;
                fromJSON(_: any): _207.QueryParamsRequest;
                toJSON(_: _207.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_207.QueryParamsRequest>): _207.QueryParamsRequest;
                fromAmino(_: _207.QueryParamsRequestAmino): _207.QueryParamsRequest;
                toAmino(_: _207.QueryParamsRequest): _207.QueryParamsRequestAmino;
                fromAminoMsg(object: _207.QueryParamsRequestAminoMsg): _207.QueryParamsRequest;
                toAminoMsg(message: _207.QueryParamsRequest): _207.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _207.QueryParamsRequestProtoMsg): _207.QueryParamsRequest;
                toProto(message: _207.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _207.QueryParamsRequest): _207.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _207.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.QueryModuleAccountsResponse;
                fromJSON(object: any): _207.QueryModuleAccountsResponse;
                toJSON(message: _207.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_207.QueryModuleAccountsResponse>): _207.QueryModuleAccountsResponse;
                fromAmino(object: _207.QueryModuleAccountsResponseAmino): _207.QueryModuleAccountsResponse;
                toAmino(message: _207.QueryModuleAccountsResponse): _207.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _207.QueryModuleAccountsResponseAminoMsg): _207.QueryModuleAccountsResponse;
                toAminoMsg(message: _207.QueryModuleAccountsResponse): _207.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _207.QueryModuleAccountsResponseProtoMsg): _207.QueryModuleAccountsResponse;
                toProto(message: _207.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _207.QueryModuleAccountsResponse): _207.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _207.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Bech32PrefixRequest;
                fromJSON(_: any): _207.Bech32PrefixRequest;
                toJSON(_: _207.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_207.Bech32PrefixRequest>): _207.Bech32PrefixRequest;
                fromAmino(_: _207.Bech32PrefixRequestAmino): _207.Bech32PrefixRequest;
                toAmino(_: _207.Bech32PrefixRequest): _207.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _207.Bech32PrefixRequestAminoMsg): _207.Bech32PrefixRequest;
                toAminoMsg(message: _207.Bech32PrefixRequest): _207.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _207.Bech32PrefixRequestProtoMsg): _207.Bech32PrefixRequest;
                toProto(message: _207.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _207.Bech32PrefixRequest): _207.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _207.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Bech32PrefixResponse;
                fromJSON(object: any): _207.Bech32PrefixResponse;
                toJSON(message: _207.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_207.Bech32PrefixResponse>): _207.Bech32PrefixResponse;
                fromAmino(object: _207.Bech32PrefixResponseAmino): _207.Bech32PrefixResponse;
                toAmino(message: _207.Bech32PrefixResponse): _207.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _207.Bech32PrefixResponseAminoMsg): _207.Bech32PrefixResponse;
                toAminoMsg(message: _207.Bech32PrefixResponse): _207.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _207.Bech32PrefixResponseProtoMsg): _207.Bech32PrefixResponse;
                toProto(message: _207.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _207.Bech32PrefixResponse): _207.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _207.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AddressBytesToStringRequest;
                fromJSON(object: any): _207.AddressBytesToStringRequest;
                toJSON(message: _207.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_207.AddressBytesToStringRequest>): _207.AddressBytesToStringRequest;
                fromAmino(object: _207.AddressBytesToStringRequestAmino): _207.AddressBytesToStringRequest;
                toAmino(message: _207.AddressBytesToStringRequest): _207.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _207.AddressBytesToStringRequestAminoMsg): _207.AddressBytesToStringRequest;
                toAminoMsg(message: _207.AddressBytesToStringRequest): _207.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _207.AddressBytesToStringRequestProtoMsg): _207.AddressBytesToStringRequest;
                toProto(message: _207.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _207.AddressBytesToStringRequest): _207.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _207.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AddressBytesToStringResponse;
                fromJSON(object: any): _207.AddressBytesToStringResponse;
                toJSON(message: _207.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_207.AddressBytesToStringResponse>): _207.AddressBytesToStringResponse;
                fromAmino(object: _207.AddressBytesToStringResponseAmino): _207.AddressBytesToStringResponse;
                toAmino(message: _207.AddressBytesToStringResponse): _207.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _207.AddressBytesToStringResponseAminoMsg): _207.AddressBytesToStringResponse;
                toAminoMsg(message: _207.AddressBytesToStringResponse): _207.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _207.AddressBytesToStringResponseProtoMsg): _207.AddressBytesToStringResponse;
                toProto(message: _207.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _207.AddressBytesToStringResponse): _207.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _207.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AddressStringToBytesRequest;
                fromJSON(object: any): _207.AddressStringToBytesRequest;
                toJSON(message: _207.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_207.AddressStringToBytesRequest>): _207.AddressStringToBytesRequest;
                fromAmino(object: _207.AddressStringToBytesRequestAmino): _207.AddressStringToBytesRequest;
                toAmino(message: _207.AddressStringToBytesRequest): _207.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _207.AddressStringToBytesRequestAminoMsg): _207.AddressStringToBytesRequest;
                toAminoMsg(message: _207.AddressStringToBytesRequest): _207.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _207.AddressStringToBytesRequestProtoMsg): _207.AddressStringToBytesRequest;
                toProto(message: _207.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _207.AddressStringToBytesRequest): _207.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _207.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.AddressStringToBytesResponse;
                fromJSON(object: any): _207.AddressStringToBytesResponse;
                toJSON(message: _207.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_207.AddressStringToBytesResponse>): _207.AddressStringToBytesResponse;
                fromAmino(object: _207.AddressStringToBytesResponseAmino): _207.AddressStringToBytesResponse;
                toAmino(message: _207.AddressStringToBytesResponse): _207.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _207.AddressStringToBytesResponseAminoMsg): _207.AddressStringToBytesResponse;
                toAminoMsg(message: _207.AddressStringToBytesResponse): _207.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _207.AddressStringToBytesResponseProtoMsg): _207.AddressStringToBytesResponse;
                toProto(message: _207.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _207.AddressStringToBytesResponse): _207.AddressStringToBytesResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _206.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.GenesisState;
                fromJSON(object: any): _206.GenesisState;
                toJSON(message: _206.GenesisState): unknown;
                fromPartial(object: Partial<_206.GenesisState>): _206.GenesisState;
                fromAmino(object: _206.GenesisStateAmino): _206.GenesisState;
                toAmino(message: _206.GenesisState): _206.GenesisStateAmino;
                fromAminoMsg(object: _206.GenesisStateAminoMsg): _206.GenesisState;
                toAminoMsg(message: _206.GenesisState): _206.GenesisStateAminoMsg;
                fromProtoMsg(message: _206.GenesisStateProtoMsg): _206.GenesisState;
                toProto(message: _206.GenesisState): Uint8Array;
                toProtoMsg(message: _206.GenesisState): _206.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _205.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.BaseAccount;
                fromJSON(object: any): _205.BaseAccount;
                toJSON(message: _205.BaseAccount): unknown;
                fromPartial(object: Partial<_205.BaseAccount>): _205.BaseAccount;
                fromAmino(object: _205.BaseAccountAmino): _205.BaseAccount;
                toAmino(message: _205.BaseAccount): _205.BaseAccountAmino;
                fromAminoMsg(object: _205.BaseAccountAminoMsg): _205.BaseAccount;
                toAminoMsg(message: _205.BaseAccount): _205.BaseAccountAminoMsg;
                fromProtoMsg(message: _205.BaseAccountProtoMsg): _205.BaseAccount;
                toProto(message: _205.BaseAccount): Uint8Array;
                toProtoMsg(message: _205.BaseAccount): _205.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _205.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ModuleAccount;
                fromJSON(object: any): _205.ModuleAccount;
                toJSON(message: _205.ModuleAccount): unknown;
                fromPartial(object: Partial<_205.ModuleAccount>): _205.ModuleAccount;
                fromAmino(object: _205.ModuleAccountAmino): _205.ModuleAccount;
                toAmino(message: _205.ModuleAccount): _205.ModuleAccountAmino;
                fromAminoMsg(object: _205.ModuleAccountAminoMsg): _205.ModuleAccount;
                toAminoMsg(message: _205.ModuleAccount): _205.ModuleAccountAminoMsg;
                fromProtoMsg(message: _205.ModuleAccountProtoMsg): _205.ModuleAccount;
                toProto(message: _205.ModuleAccount): Uint8Array;
                toProtoMsg(message: _205.ModuleAccount): _205.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _205.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.Params;
                fromJSON(object: any): _205.Params;
                toJSON(message: _205.Params): unknown;
                fromPartial(object: Partial<_205.Params>): _205.Params;
                fromAmino(object: _205.ParamsAmino): _205.Params;
                toAmino(message: _205.Params): _205.ParamsAmino;
                fromAminoMsg(object: _205.ParamsAminoMsg): _205.Params;
                toAminoMsg(message: _205.Params): _205.ParamsAminoMsg;
                fromProtoMsg(message: _205.ParamsProtoMsg): _205.Params;
                toProto(message: _205.Params): Uint8Array;
                toProtoMsg(message: _205.Params): _205.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _465.MsgClientImpl;
            QueryClientImpl: typeof _449.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _211.QueryGrantsRequest): Promise<_211.QueryGrantsResponse>;
                granterGrants(request: _211.QueryGranterGrantsRequest): Promise<_211.QueryGranterGrantsResponse>;
                granteeGrants(request: _211.QueryGranteeGrantsRequest): Promise<_211.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _212.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _212.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _212.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _212.MsgGrant): {
                        typeUrl: string;
                        value: _212.MsgGrant;
                    };
                    exec(value: _212.MsgExec): {
                        typeUrl: string;
                        value: _212.MsgExec;
                    };
                    revoke(value: _212.MsgRevoke): {
                        typeUrl: string;
                        value: _212.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _212.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _212.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _212.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _212.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _212.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _212.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _212.MsgGrant): {
                        typeUrl: string;
                        value: _212.MsgGrant;
                    };
                    exec(value: _212.MsgExec): {
                        typeUrl: string;
                        value: _212.MsgExec;
                    };
                    revoke(value: _212.MsgRevoke): {
                        typeUrl: string;
                        value: _212.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _212.MsgGrant) => _212.MsgGrantAmino;
                    fromAmino: (object: _212.MsgGrantAmino) => _212.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _212.MsgExec) => _212.MsgExecAmino;
                    fromAmino: (object: _212.MsgExecAmino) => _212.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _212.MsgRevoke) => _212.MsgRevokeAmino;
                    fromAmino: (object: _212.MsgRevokeAmino) => _212.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _212.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgGrant;
                fromJSON(object: any): _212.MsgGrant;
                toJSON(message: _212.MsgGrant): unknown;
                fromPartial(object: Partial<_212.MsgGrant>): _212.MsgGrant;
                fromAmino(object: _212.MsgGrantAmino): _212.MsgGrant;
                toAmino(message: _212.MsgGrant): _212.MsgGrantAmino;
                fromAminoMsg(object: _212.MsgGrantAminoMsg): _212.MsgGrant;
                toAminoMsg(message: _212.MsgGrant): _212.MsgGrantAminoMsg;
                fromProtoMsg(message: _212.MsgGrantProtoMsg): _212.MsgGrant;
                toProto(message: _212.MsgGrant): Uint8Array;
                toProtoMsg(message: _212.MsgGrant): _212.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _212.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgExecResponse;
                fromJSON(object: any): _212.MsgExecResponse;
                toJSON(message: _212.MsgExecResponse): unknown;
                fromPartial(object: Partial<_212.MsgExecResponse>): _212.MsgExecResponse;
                fromAmino(object: _212.MsgExecResponseAmino): _212.MsgExecResponse;
                toAmino(message: _212.MsgExecResponse): _212.MsgExecResponseAmino;
                fromAminoMsg(object: _212.MsgExecResponseAminoMsg): _212.MsgExecResponse;
                toAminoMsg(message: _212.MsgExecResponse): _212.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _212.MsgExecResponseProtoMsg): _212.MsgExecResponse;
                toProto(message: _212.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _212.MsgExecResponse): _212.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _212.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgExec;
                fromJSON(object: any): _212.MsgExec;
                toJSON(message: _212.MsgExec): unknown;
                fromPartial(object: Partial<_212.MsgExec>): _212.MsgExec;
                fromAmino(object: _212.MsgExecAmino): _212.MsgExec;
                toAmino(message: _212.MsgExec): _212.MsgExecAmino;
                fromAminoMsg(object: _212.MsgExecAminoMsg): _212.MsgExec;
                toAminoMsg(message: _212.MsgExec): _212.MsgExecAminoMsg;
                fromProtoMsg(message: _212.MsgExecProtoMsg): _212.MsgExec;
                toProto(message: _212.MsgExec): Uint8Array;
                toProtoMsg(message: _212.MsgExec): _212.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _212.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgGrantResponse;
                fromJSON(_: any): _212.MsgGrantResponse;
                toJSON(_: _212.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_212.MsgGrantResponse>): _212.MsgGrantResponse;
                fromAmino(_: _212.MsgGrantResponseAmino): _212.MsgGrantResponse;
                toAmino(_: _212.MsgGrantResponse): _212.MsgGrantResponseAmino;
                fromAminoMsg(object: _212.MsgGrantResponseAminoMsg): _212.MsgGrantResponse;
                toAminoMsg(message: _212.MsgGrantResponse): _212.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _212.MsgGrantResponseProtoMsg): _212.MsgGrantResponse;
                toProto(message: _212.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _212.MsgGrantResponse): _212.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _212.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgRevoke;
                fromJSON(object: any): _212.MsgRevoke;
                toJSON(message: _212.MsgRevoke): unknown;
                fromPartial(object: Partial<_212.MsgRevoke>): _212.MsgRevoke;
                fromAmino(object: _212.MsgRevokeAmino): _212.MsgRevoke;
                toAmino(message: _212.MsgRevoke): _212.MsgRevokeAmino;
                fromAminoMsg(object: _212.MsgRevokeAminoMsg): _212.MsgRevoke;
                toAminoMsg(message: _212.MsgRevoke): _212.MsgRevokeAminoMsg;
                fromProtoMsg(message: _212.MsgRevokeProtoMsg): _212.MsgRevoke;
                toProto(message: _212.MsgRevoke): Uint8Array;
                toProtoMsg(message: _212.MsgRevoke): _212.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _212.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.MsgRevokeResponse;
                fromJSON(_: any): _212.MsgRevokeResponse;
                toJSON(_: _212.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_212.MsgRevokeResponse>): _212.MsgRevokeResponse;
                fromAmino(_: _212.MsgRevokeResponseAmino): _212.MsgRevokeResponse;
                toAmino(_: _212.MsgRevokeResponse): _212.MsgRevokeResponseAmino;
                fromAminoMsg(object: _212.MsgRevokeResponseAminoMsg): _212.MsgRevokeResponse;
                toAminoMsg(message: _212.MsgRevokeResponse): _212.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _212.MsgRevokeResponseProtoMsg): _212.MsgRevokeResponse;
                toProto(message: _212.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _212.MsgRevokeResponse): _212.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                encode(message: _211.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGrantsRequest;
                fromJSON(object: any): _211.QueryGrantsRequest;
                toJSON(message: _211.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_211.QueryGrantsRequest>): _211.QueryGrantsRequest;
                fromAmino(object: _211.QueryGrantsRequestAmino): _211.QueryGrantsRequest;
                toAmino(message: _211.QueryGrantsRequest): _211.QueryGrantsRequestAmino;
                fromAminoMsg(object: _211.QueryGrantsRequestAminoMsg): _211.QueryGrantsRequest;
                toAminoMsg(message: _211.QueryGrantsRequest): _211.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _211.QueryGrantsRequestProtoMsg): _211.QueryGrantsRequest;
                toProto(message: _211.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryGrantsRequest): _211.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _211.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGrantsResponse;
                fromJSON(object: any): _211.QueryGrantsResponse;
                toJSON(message: _211.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_211.QueryGrantsResponse>): _211.QueryGrantsResponse;
                fromAmino(object: _211.QueryGrantsResponseAmino): _211.QueryGrantsResponse;
                toAmino(message: _211.QueryGrantsResponse): _211.QueryGrantsResponseAmino;
                fromAminoMsg(object: _211.QueryGrantsResponseAminoMsg): _211.QueryGrantsResponse;
                toAminoMsg(message: _211.QueryGrantsResponse): _211.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _211.QueryGrantsResponseProtoMsg): _211.QueryGrantsResponse;
                toProto(message: _211.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryGrantsResponse): _211.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _211.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGranterGrantsRequest;
                fromJSON(object: any): _211.QueryGranterGrantsRequest;
                toJSON(message: _211.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_211.QueryGranterGrantsRequest>): _211.QueryGranterGrantsRequest;
                fromAmino(object: _211.QueryGranterGrantsRequestAmino): _211.QueryGranterGrantsRequest;
                toAmino(message: _211.QueryGranterGrantsRequest): _211.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _211.QueryGranterGrantsRequestAminoMsg): _211.QueryGranterGrantsRequest;
                toAminoMsg(message: _211.QueryGranterGrantsRequest): _211.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _211.QueryGranterGrantsRequestProtoMsg): _211.QueryGranterGrantsRequest;
                toProto(message: _211.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryGranterGrantsRequest): _211.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _211.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGranterGrantsResponse;
                fromJSON(object: any): _211.QueryGranterGrantsResponse;
                toJSON(message: _211.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_211.QueryGranterGrantsResponse>): _211.QueryGranterGrantsResponse;
                fromAmino(object: _211.QueryGranterGrantsResponseAmino): _211.QueryGranterGrantsResponse;
                toAmino(message: _211.QueryGranterGrantsResponse): _211.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _211.QueryGranterGrantsResponseAminoMsg): _211.QueryGranterGrantsResponse;
                toAminoMsg(message: _211.QueryGranterGrantsResponse): _211.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _211.QueryGranterGrantsResponseProtoMsg): _211.QueryGranterGrantsResponse;
                toProto(message: _211.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryGranterGrantsResponse): _211.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _211.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGranteeGrantsRequest;
                fromJSON(object: any): _211.QueryGranteeGrantsRequest;
                toJSON(message: _211.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_211.QueryGranteeGrantsRequest>): _211.QueryGranteeGrantsRequest;
                fromAmino(object: _211.QueryGranteeGrantsRequestAmino): _211.QueryGranteeGrantsRequest;
                toAmino(message: _211.QueryGranteeGrantsRequest): _211.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _211.QueryGranteeGrantsRequestAminoMsg): _211.QueryGranteeGrantsRequest;
                toAminoMsg(message: _211.QueryGranteeGrantsRequest): _211.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _211.QueryGranteeGrantsRequestProtoMsg): _211.QueryGranteeGrantsRequest;
                toProto(message: _211.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _211.QueryGranteeGrantsRequest): _211.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _211.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.QueryGranteeGrantsResponse;
                fromJSON(object: any): _211.QueryGranteeGrantsResponse;
                toJSON(message: _211.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_211.QueryGranteeGrantsResponse>): _211.QueryGranteeGrantsResponse;
                fromAmino(object: _211.QueryGranteeGrantsResponseAmino): _211.QueryGranteeGrantsResponse;
                toAmino(message: _211.QueryGranteeGrantsResponse): _211.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _211.QueryGranteeGrantsResponseAminoMsg): _211.QueryGranteeGrantsResponse;
                toAminoMsg(message: _211.QueryGranteeGrantsResponse): _211.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _211.QueryGranteeGrantsResponseProtoMsg): _211.QueryGranteeGrantsResponse;
                toProto(message: _211.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _211.QueryGranteeGrantsResponse): _211.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _210.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GenesisState;
                fromJSON(object: any): _210.GenesisState;
                toJSON(message: _210.GenesisState): unknown;
                fromPartial(object: Partial<_210.GenesisState>): _210.GenesisState;
                fromAmino(object: _210.GenesisStateAmino): _210.GenesisState;
                toAmino(message: _210.GenesisState): _210.GenesisStateAmino;
                fromAminoMsg(object: _210.GenesisStateAminoMsg): _210.GenesisState;
                toAminoMsg(message: _210.GenesisState): _210.GenesisStateAminoMsg;
                fromProtoMsg(message: _210.GenesisStateProtoMsg): _210.GenesisState;
                toProto(message: _210.GenesisState): Uint8Array;
                toProtoMsg(message: _210.GenesisState): _210.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _209.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.EventGrant;
                fromJSON(object: any): _209.EventGrant;
                toJSON(message: _209.EventGrant): unknown;
                fromPartial(object: Partial<_209.EventGrant>): _209.EventGrant;
                fromAmino(object: _209.EventGrantAmino): _209.EventGrant;
                toAmino(message: _209.EventGrant): _209.EventGrantAmino;
                fromAminoMsg(object: _209.EventGrantAminoMsg): _209.EventGrant;
                toAminoMsg(message: _209.EventGrant): _209.EventGrantAminoMsg;
                fromProtoMsg(message: _209.EventGrantProtoMsg): _209.EventGrant;
                toProto(message: _209.EventGrant): Uint8Array;
                toProtoMsg(message: _209.EventGrant): _209.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _209.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.EventRevoke;
                fromJSON(object: any): _209.EventRevoke;
                toJSON(message: _209.EventRevoke): unknown;
                fromPartial(object: Partial<_209.EventRevoke>): _209.EventRevoke;
                fromAmino(object: _209.EventRevokeAmino): _209.EventRevoke;
                toAmino(message: _209.EventRevoke): _209.EventRevokeAmino;
                fromAminoMsg(object: _209.EventRevokeAminoMsg): _209.EventRevoke;
                toAminoMsg(message: _209.EventRevoke): _209.EventRevokeAminoMsg;
                fromProtoMsg(message: _209.EventRevokeProtoMsg): _209.EventRevoke;
                toProto(message: _209.EventRevoke): Uint8Array;
                toProtoMsg(message: _209.EventRevoke): _209.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _208.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.GenericAuthorization;
                fromJSON(object: any): _208.GenericAuthorization;
                toJSON(message: _208.GenericAuthorization): unknown;
                fromPartial(object: Partial<_208.GenericAuthorization>): _208.GenericAuthorization;
                fromAmino(object: _208.GenericAuthorizationAmino): _208.GenericAuthorization;
                toAmino(message: _208.GenericAuthorization): _208.GenericAuthorizationAmino;
                fromAminoMsg(object: _208.GenericAuthorizationAminoMsg): _208.GenericAuthorization;
                toAminoMsg(message: _208.GenericAuthorization): _208.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _208.GenericAuthorizationProtoMsg): _208.GenericAuthorization;
                toProto(message: _208.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _208.GenericAuthorization): _208.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _208.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.Grant;
                fromJSON(object: any): _208.Grant;
                toJSON(message: _208.Grant): unknown;
                fromPartial(object: Partial<_208.Grant>): _208.Grant;
                fromAmino(object: _208.GrantAmino): _208.Grant;
                toAmino(message: _208.Grant): _208.GrantAmino;
                fromAminoMsg(object: _208.GrantAminoMsg): _208.Grant;
                toAminoMsg(message: _208.Grant): _208.GrantAminoMsg;
                fromProtoMsg(message: _208.GrantProtoMsg): _208.Grant;
                toProto(message: _208.Grant): Uint8Array;
                toProtoMsg(message: _208.Grant): _208.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _208.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.GrantAuthorization;
                fromJSON(object: any): _208.GrantAuthorization;
                toJSON(message: _208.GrantAuthorization): unknown;
                fromPartial(object: Partial<_208.GrantAuthorization>): _208.GrantAuthorization;
                fromAmino(object: _208.GrantAuthorizationAmino): _208.GrantAuthorization;
                toAmino(message: _208.GrantAuthorization): _208.GrantAuthorizationAmino;
                fromAminoMsg(object: _208.GrantAuthorizationAminoMsg): _208.GrantAuthorization;
                toAminoMsg(message: _208.GrantAuthorization): _208.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _208.GrantAuthorizationProtoMsg): _208.GrantAuthorization;
                toProto(message: _208.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _208.GrantAuthorization): _208.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _208.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.GrantQueueItem;
                fromJSON(object: any): _208.GrantQueueItem;
                toJSON(message: _208.GrantQueueItem): unknown;
                fromPartial(object: Partial<_208.GrantQueueItem>): _208.GrantQueueItem;
                fromAmino(object: _208.GrantQueueItemAmino): _208.GrantQueueItem;
                toAmino(message: _208.GrantQueueItem): _208.GrantQueueItemAmino;
                fromAminoMsg(object: _208.GrantQueueItemAminoMsg): _208.GrantQueueItem;
                toAminoMsg(message: _208.GrantQueueItem): _208.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _208.GrantQueueItemProtoMsg): _208.GrantQueueItem;
                toProto(message: _208.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _208.GrantQueueItem): _208.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _466.MsgClientImpl;
            QueryClientImpl: typeof _450.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _216.QueryBalanceRequest): Promise<_216.QueryBalanceResponse>;
                allBalances(request: _216.QueryAllBalancesRequest): Promise<_216.QueryAllBalancesResponse>;
                spendableBalances(request: _216.QuerySpendableBalancesRequest): Promise<_216.QuerySpendableBalancesResponse>;
                totalSupply(request?: _216.QueryTotalSupplyRequest): Promise<_216.QueryTotalSupplyResponse>;
                supplyOf(request: _216.QuerySupplyOfRequest): Promise<_216.QuerySupplyOfResponse>;
                params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
                denomMetadata(request: _216.QueryDenomMetadataRequest): Promise<_216.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _216.QueryDenomsMetadataRequest): Promise<_216.QueryDenomsMetadataResponse>;
                denomOwners(request: _216.QueryDenomOwnersRequest): Promise<_216.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _217.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _217.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _217.MsgSend): {
                        typeUrl: string;
                        value: _217.MsgSend;
                    };
                    multiSend(value: _217.MsgMultiSend): {
                        typeUrl: string;
                        value: _217.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _217.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _217.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _217.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _217.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _217.MsgSend): {
                        typeUrl: string;
                        value: _217.MsgSend;
                    };
                    multiSend(value: _217.MsgMultiSend): {
                        typeUrl: string;
                        value: _217.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _217.MsgSend) => _217.MsgSendAmino;
                    fromAmino: (object: _217.MsgSendAmino) => _217.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _217.MsgMultiSend) => _217.MsgMultiSendAmino;
                    fromAmino: (object: _217.MsgMultiSendAmino) => _217.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _217.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgSend;
                fromJSON(object: any): _217.MsgSend;
                toJSON(message: _217.MsgSend): unknown;
                fromPartial(object: Partial<_217.MsgSend>): _217.MsgSend;
                fromAmino(object: _217.MsgSendAmino): _217.MsgSend;
                toAmino(message: _217.MsgSend): _217.MsgSendAmino;
                fromAminoMsg(object: _217.MsgSendAminoMsg): _217.MsgSend;
                toAminoMsg(message: _217.MsgSend): _217.MsgSendAminoMsg;
                fromProtoMsg(message: _217.MsgSendProtoMsg): _217.MsgSend;
                toProto(message: _217.MsgSend): Uint8Array;
                toProtoMsg(message: _217.MsgSend): _217.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _217.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgSendResponse;
                fromJSON(_: any): _217.MsgSendResponse;
                toJSON(_: _217.MsgSendResponse): unknown;
                fromPartial(_: Partial<_217.MsgSendResponse>): _217.MsgSendResponse;
                fromAmino(_: _217.MsgSendResponseAmino): _217.MsgSendResponse;
                toAmino(_: _217.MsgSendResponse): _217.MsgSendResponseAmino;
                fromAminoMsg(object: _217.MsgSendResponseAminoMsg): _217.MsgSendResponse;
                toAminoMsg(message: _217.MsgSendResponse): _217.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _217.MsgSendResponseProtoMsg): _217.MsgSendResponse;
                toProto(message: _217.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _217.MsgSendResponse): _217.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _217.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgMultiSend;
                fromJSON(object: any): _217.MsgMultiSend;
                toJSON(message: _217.MsgMultiSend): unknown;
                fromPartial(object: Partial<_217.MsgMultiSend>): _217.MsgMultiSend;
                fromAmino(object: _217.MsgMultiSendAmino): _217.MsgMultiSend;
                toAmino(message: _217.MsgMultiSend): _217.MsgMultiSendAmino;
                fromAminoMsg(object: _217.MsgMultiSendAminoMsg): _217.MsgMultiSend;
                toAminoMsg(message: _217.MsgMultiSend): _217.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _217.MsgMultiSendProtoMsg): _217.MsgMultiSend;
                toProto(message: _217.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _217.MsgMultiSend): _217.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _217.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.MsgMultiSendResponse;
                fromJSON(_: any): _217.MsgMultiSendResponse;
                toJSON(_: _217.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_217.MsgMultiSendResponse>): _217.MsgMultiSendResponse;
                fromAmino(_: _217.MsgMultiSendResponseAmino): _217.MsgMultiSendResponse;
                toAmino(_: _217.MsgMultiSendResponse): _217.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _217.MsgMultiSendResponseAminoMsg): _217.MsgMultiSendResponse;
                toAminoMsg(message: _217.MsgMultiSendResponse): _217.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _217.MsgMultiSendResponseProtoMsg): _217.MsgMultiSendResponse;
                toProto(message: _217.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _217.MsgMultiSendResponse): _217.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _216.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryBalanceRequest;
                fromJSON(object: any): _216.QueryBalanceRequest;
                toJSON(message: _216.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_216.QueryBalanceRequest>): _216.QueryBalanceRequest;
                fromAmino(object: _216.QueryBalanceRequestAmino): _216.QueryBalanceRequest;
                toAmino(message: _216.QueryBalanceRequest): _216.QueryBalanceRequestAmino;
                fromAminoMsg(object: _216.QueryBalanceRequestAminoMsg): _216.QueryBalanceRequest;
                toAminoMsg(message: _216.QueryBalanceRequest): _216.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _216.QueryBalanceRequestProtoMsg): _216.QueryBalanceRequest;
                toProto(message: _216.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _216.QueryBalanceRequest): _216.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _216.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryBalanceResponse;
                fromJSON(object: any): _216.QueryBalanceResponse;
                toJSON(message: _216.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_216.QueryBalanceResponse>): _216.QueryBalanceResponse;
                fromAmino(object: _216.QueryBalanceResponseAmino): _216.QueryBalanceResponse;
                toAmino(message: _216.QueryBalanceResponse): _216.QueryBalanceResponseAmino;
                fromAminoMsg(object: _216.QueryBalanceResponseAminoMsg): _216.QueryBalanceResponse;
                toAminoMsg(message: _216.QueryBalanceResponse): _216.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _216.QueryBalanceResponseProtoMsg): _216.QueryBalanceResponse;
                toProto(message: _216.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _216.QueryBalanceResponse): _216.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _216.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryAllBalancesRequest;
                fromJSON(object: any): _216.QueryAllBalancesRequest;
                toJSON(message: _216.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_216.QueryAllBalancesRequest>): _216.QueryAllBalancesRequest;
                fromAmino(object: _216.QueryAllBalancesRequestAmino): _216.QueryAllBalancesRequest;
                toAmino(message: _216.QueryAllBalancesRequest): _216.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _216.QueryAllBalancesRequestAminoMsg): _216.QueryAllBalancesRequest;
                toAminoMsg(message: _216.QueryAllBalancesRequest): _216.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _216.QueryAllBalancesRequestProtoMsg): _216.QueryAllBalancesRequest;
                toProto(message: _216.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _216.QueryAllBalancesRequest): _216.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _216.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryAllBalancesResponse;
                fromJSON(object: any): _216.QueryAllBalancesResponse;
                toJSON(message: _216.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_216.QueryAllBalancesResponse>): _216.QueryAllBalancesResponse;
                fromAmino(object: _216.QueryAllBalancesResponseAmino): _216.QueryAllBalancesResponse;
                toAmino(message: _216.QueryAllBalancesResponse): _216.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _216.QueryAllBalancesResponseAminoMsg): _216.QueryAllBalancesResponse;
                toAminoMsg(message: _216.QueryAllBalancesResponse): _216.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _216.QueryAllBalancesResponseProtoMsg): _216.QueryAllBalancesResponse;
                toProto(message: _216.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _216.QueryAllBalancesResponse): _216.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _216.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySpendableBalancesRequest;
                fromJSON(object: any): _216.QuerySpendableBalancesRequest;
                toJSON(message: _216.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_216.QuerySpendableBalancesRequest>): _216.QuerySpendableBalancesRequest;
                fromAmino(object: _216.QuerySpendableBalancesRequestAmino): _216.QuerySpendableBalancesRequest;
                toAmino(message: _216.QuerySpendableBalancesRequest): _216.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _216.QuerySpendableBalancesRequestAminoMsg): _216.QuerySpendableBalancesRequest;
                toAminoMsg(message: _216.QuerySpendableBalancesRequest): _216.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _216.QuerySpendableBalancesRequestProtoMsg): _216.QuerySpendableBalancesRequest;
                toProto(message: _216.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _216.QuerySpendableBalancesRequest): _216.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _216.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySpendableBalancesResponse;
                fromJSON(object: any): _216.QuerySpendableBalancesResponse;
                toJSON(message: _216.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_216.QuerySpendableBalancesResponse>): _216.QuerySpendableBalancesResponse;
                fromAmino(object: _216.QuerySpendableBalancesResponseAmino): _216.QuerySpendableBalancesResponse;
                toAmino(message: _216.QuerySpendableBalancesResponse): _216.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _216.QuerySpendableBalancesResponseAminoMsg): _216.QuerySpendableBalancesResponse;
                toAminoMsg(message: _216.QuerySpendableBalancesResponse): _216.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _216.QuerySpendableBalancesResponseProtoMsg): _216.QuerySpendableBalancesResponse;
                toProto(message: _216.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _216.QuerySpendableBalancesResponse): _216.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _216.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryTotalSupplyRequest;
                fromJSON(object: any): _216.QueryTotalSupplyRequest;
                toJSON(message: _216.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_216.QueryTotalSupplyRequest>): _216.QueryTotalSupplyRequest;
                fromAmino(object: _216.QueryTotalSupplyRequestAmino): _216.QueryTotalSupplyRequest;
                toAmino(message: _216.QueryTotalSupplyRequest): _216.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _216.QueryTotalSupplyRequestAminoMsg): _216.QueryTotalSupplyRequest;
                toAminoMsg(message: _216.QueryTotalSupplyRequest): _216.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _216.QueryTotalSupplyRequestProtoMsg): _216.QueryTotalSupplyRequest;
                toProto(message: _216.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _216.QueryTotalSupplyRequest): _216.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _216.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryTotalSupplyResponse;
                fromJSON(object: any): _216.QueryTotalSupplyResponse;
                toJSON(message: _216.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_216.QueryTotalSupplyResponse>): _216.QueryTotalSupplyResponse;
                fromAmino(object: _216.QueryTotalSupplyResponseAmino): _216.QueryTotalSupplyResponse;
                toAmino(message: _216.QueryTotalSupplyResponse): _216.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _216.QueryTotalSupplyResponseAminoMsg): _216.QueryTotalSupplyResponse;
                toAminoMsg(message: _216.QueryTotalSupplyResponse): _216.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _216.QueryTotalSupplyResponseProtoMsg): _216.QueryTotalSupplyResponse;
                toProto(message: _216.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _216.QueryTotalSupplyResponse): _216.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _216.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySupplyOfRequest;
                fromJSON(object: any): _216.QuerySupplyOfRequest;
                toJSON(message: _216.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_216.QuerySupplyOfRequest>): _216.QuerySupplyOfRequest;
                fromAmino(object: _216.QuerySupplyOfRequestAmino): _216.QuerySupplyOfRequest;
                toAmino(message: _216.QuerySupplyOfRequest): _216.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _216.QuerySupplyOfRequestAminoMsg): _216.QuerySupplyOfRequest;
                toAminoMsg(message: _216.QuerySupplyOfRequest): _216.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _216.QuerySupplyOfRequestProtoMsg): _216.QuerySupplyOfRequest;
                toProto(message: _216.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _216.QuerySupplyOfRequest): _216.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _216.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QuerySupplyOfResponse;
                fromJSON(object: any): _216.QuerySupplyOfResponse;
                toJSON(message: _216.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_216.QuerySupplyOfResponse>): _216.QuerySupplyOfResponse;
                fromAmino(object: _216.QuerySupplyOfResponseAmino): _216.QuerySupplyOfResponse;
                toAmino(message: _216.QuerySupplyOfResponse): _216.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _216.QuerySupplyOfResponseAminoMsg): _216.QuerySupplyOfResponse;
                toAminoMsg(message: _216.QuerySupplyOfResponse): _216.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _216.QuerySupplyOfResponseProtoMsg): _216.QuerySupplyOfResponse;
                toProto(message: _216.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _216.QuerySupplyOfResponse): _216.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _216.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryParamsRequest;
                fromJSON(_: any): _216.QueryParamsRequest;
                toJSON(_: _216.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_216.QueryParamsRequest>): _216.QueryParamsRequest;
                fromAmino(_: _216.QueryParamsRequestAmino): _216.QueryParamsRequest;
                toAmino(_: _216.QueryParamsRequest): _216.QueryParamsRequestAmino;
                fromAminoMsg(object: _216.QueryParamsRequestAminoMsg): _216.QueryParamsRequest;
                toAminoMsg(message: _216.QueryParamsRequest): _216.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _216.QueryParamsRequestProtoMsg): _216.QueryParamsRequest;
                toProto(message: _216.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _216.QueryParamsRequest): _216.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _216.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryParamsResponse;
                fromJSON(object: any): _216.QueryParamsResponse;
                toJSON(message: _216.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_216.QueryParamsResponse>): _216.QueryParamsResponse;
                fromAmino(object: _216.QueryParamsResponseAmino): _216.QueryParamsResponse;
                toAmino(message: _216.QueryParamsResponse): _216.QueryParamsResponseAmino;
                fromAminoMsg(object: _216.QueryParamsResponseAminoMsg): _216.QueryParamsResponse;
                toAminoMsg(message: _216.QueryParamsResponse): _216.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _216.QueryParamsResponseProtoMsg): _216.QueryParamsResponse;
                toProto(message: _216.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _216.QueryParamsResponse): _216.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _216.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomsMetadataRequest;
                fromJSON(object: any): _216.QueryDenomsMetadataRequest;
                toJSON(message: _216.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_216.QueryDenomsMetadataRequest>): _216.QueryDenomsMetadataRequest;
                fromAmino(object: _216.QueryDenomsMetadataRequestAmino): _216.QueryDenomsMetadataRequest;
                toAmino(message: _216.QueryDenomsMetadataRequest): _216.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _216.QueryDenomsMetadataRequestAminoMsg): _216.QueryDenomsMetadataRequest;
                toAminoMsg(message: _216.QueryDenomsMetadataRequest): _216.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _216.QueryDenomsMetadataRequestProtoMsg): _216.QueryDenomsMetadataRequest;
                toProto(message: _216.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _216.QueryDenomsMetadataRequest): _216.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _216.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomsMetadataResponse;
                fromJSON(object: any): _216.QueryDenomsMetadataResponse;
                toJSON(message: _216.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_216.QueryDenomsMetadataResponse>): _216.QueryDenomsMetadataResponse;
                fromAmino(object: _216.QueryDenomsMetadataResponseAmino): _216.QueryDenomsMetadataResponse;
                toAmino(message: _216.QueryDenomsMetadataResponse): _216.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _216.QueryDenomsMetadataResponseAminoMsg): _216.QueryDenomsMetadataResponse;
                toAminoMsg(message: _216.QueryDenomsMetadataResponse): _216.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _216.QueryDenomsMetadataResponseProtoMsg): _216.QueryDenomsMetadataResponse;
                toProto(message: _216.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _216.QueryDenomsMetadataResponse): _216.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _216.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomMetadataRequest;
                fromJSON(object: any): _216.QueryDenomMetadataRequest;
                toJSON(message: _216.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_216.QueryDenomMetadataRequest>): _216.QueryDenomMetadataRequest;
                fromAmino(object: _216.QueryDenomMetadataRequestAmino): _216.QueryDenomMetadataRequest;
                toAmino(message: _216.QueryDenomMetadataRequest): _216.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _216.QueryDenomMetadataRequestAminoMsg): _216.QueryDenomMetadataRequest;
                toAminoMsg(message: _216.QueryDenomMetadataRequest): _216.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _216.QueryDenomMetadataRequestProtoMsg): _216.QueryDenomMetadataRequest;
                toProto(message: _216.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _216.QueryDenomMetadataRequest): _216.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _216.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomMetadataResponse;
                fromJSON(object: any): _216.QueryDenomMetadataResponse;
                toJSON(message: _216.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_216.QueryDenomMetadataResponse>): _216.QueryDenomMetadataResponse;
                fromAmino(object: _216.QueryDenomMetadataResponseAmino): _216.QueryDenomMetadataResponse;
                toAmino(message: _216.QueryDenomMetadataResponse): _216.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _216.QueryDenomMetadataResponseAminoMsg): _216.QueryDenomMetadataResponse;
                toAminoMsg(message: _216.QueryDenomMetadataResponse): _216.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _216.QueryDenomMetadataResponseProtoMsg): _216.QueryDenomMetadataResponse;
                toProto(message: _216.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _216.QueryDenomMetadataResponse): _216.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _216.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomOwnersRequest;
                fromJSON(object: any): _216.QueryDenomOwnersRequest;
                toJSON(message: _216.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_216.QueryDenomOwnersRequest>): _216.QueryDenomOwnersRequest;
                fromAmino(object: _216.QueryDenomOwnersRequestAmino): _216.QueryDenomOwnersRequest;
                toAmino(message: _216.QueryDenomOwnersRequest): _216.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _216.QueryDenomOwnersRequestAminoMsg): _216.QueryDenomOwnersRequest;
                toAminoMsg(message: _216.QueryDenomOwnersRequest): _216.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _216.QueryDenomOwnersRequestProtoMsg): _216.QueryDenomOwnersRequest;
                toProto(message: _216.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _216.QueryDenomOwnersRequest): _216.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _216.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.DenomOwner;
                fromJSON(object: any): _216.DenomOwner;
                toJSON(message: _216.DenomOwner): unknown;
                fromPartial(object: Partial<_216.DenomOwner>): _216.DenomOwner;
                fromAmino(object: _216.DenomOwnerAmino): _216.DenomOwner;
                toAmino(message: _216.DenomOwner): _216.DenomOwnerAmino;
                fromAminoMsg(object: _216.DenomOwnerAminoMsg): _216.DenomOwner;
                toAminoMsg(message: _216.DenomOwner): _216.DenomOwnerAminoMsg;
                fromProtoMsg(message: _216.DenomOwnerProtoMsg): _216.DenomOwner;
                toProto(message: _216.DenomOwner): Uint8Array;
                toProtoMsg(message: _216.DenomOwner): _216.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _216.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.QueryDenomOwnersResponse;
                fromJSON(object: any): _216.QueryDenomOwnersResponse;
                toJSON(message: _216.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_216.QueryDenomOwnersResponse>): _216.QueryDenomOwnersResponse;
                fromAmino(object: _216.QueryDenomOwnersResponseAmino): _216.QueryDenomOwnersResponse;
                toAmino(message: _216.QueryDenomOwnersResponse): _216.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _216.QueryDenomOwnersResponseAminoMsg): _216.QueryDenomOwnersResponse;
                toAminoMsg(message: _216.QueryDenomOwnersResponse): _216.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _216.QueryDenomOwnersResponseProtoMsg): _216.QueryDenomOwnersResponse;
                toProto(message: _216.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _216.QueryDenomOwnersResponse): _216.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _215.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.GenesisState;
                fromJSON(object: any): _215.GenesisState;
                toJSON(message: _215.GenesisState): unknown;
                fromPartial(object: Partial<_215.GenesisState>): _215.GenesisState;
                fromAmino(object: _215.GenesisStateAmino): _215.GenesisState;
                toAmino(message: _215.GenesisState): _215.GenesisStateAmino;
                fromAminoMsg(object: _215.GenesisStateAminoMsg): _215.GenesisState;
                toAminoMsg(message: _215.GenesisState): _215.GenesisStateAminoMsg;
                fromProtoMsg(message: _215.GenesisStateProtoMsg): _215.GenesisState;
                toProto(message: _215.GenesisState): Uint8Array;
                toProtoMsg(message: _215.GenesisState): _215.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _215.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Balance;
                fromJSON(object: any): _215.Balance;
                toJSON(message: _215.Balance): unknown;
                fromPartial(object: Partial<_215.Balance>): _215.Balance;
                fromAmino(object: _215.BalanceAmino): _215.Balance;
                toAmino(message: _215.Balance): _215.BalanceAmino;
                fromAminoMsg(object: _215.BalanceAminoMsg): _215.Balance;
                toAminoMsg(message: _215.Balance): _215.BalanceAminoMsg;
                fromProtoMsg(message: _215.BalanceProtoMsg): _215.Balance;
                toProto(message: _215.Balance): Uint8Array;
                toProtoMsg(message: _215.Balance): _215.BalanceProtoMsg;
            };
            Params: {
                encode(message: _214.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Params;
                fromJSON(object: any): _214.Params;
                toJSON(message: _214.Params): unknown;
                fromPartial(object: Partial<_214.Params>): _214.Params;
                fromAmino(object: _214.ParamsAmino): _214.Params;
                toAmino(message: _214.Params): _214.ParamsAmino;
                fromAminoMsg(object: _214.ParamsAminoMsg): _214.Params;
                toAminoMsg(message: _214.Params): _214.ParamsAminoMsg;
                fromProtoMsg(message: _214.ParamsProtoMsg): _214.Params;
                toProto(message: _214.Params): Uint8Array;
                toProtoMsg(message: _214.Params): _214.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _214.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.SendEnabled;
                fromJSON(object: any): _214.SendEnabled;
                toJSON(message: _214.SendEnabled): unknown;
                fromPartial(object: Partial<_214.SendEnabled>): _214.SendEnabled;
                fromAmino(object: _214.SendEnabledAmino): _214.SendEnabled;
                toAmino(message: _214.SendEnabled): _214.SendEnabledAmino;
                fromAminoMsg(object: _214.SendEnabledAminoMsg): _214.SendEnabled;
                toAminoMsg(message: _214.SendEnabled): _214.SendEnabledAminoMsg;
                fromProtoMsg(message: _214.SendEnabledProtoMsg): _214.SendEnabled;
                toProto(message: _214.SendEnabled): Uint8Array;
                toProtoMsg(message: _214.SendEnabled): _214.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _214.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Input;
                fromJSON(object: any): _214.Input;
                toJSON(message: _214.Input): unknown;
                fromPartial(object: Partial<_214.Input>): _214.Input;
                fromAmino(object: _214.InputAmino): _214.Input;
                toAmino(message: _214.Input): _214.InputAmino;
                fromAminoMsg(object: _214.InputAminoMsg): _214.Input;
                toAminoMsg(message: _214.Input): _214.InputAminoMsg;
                fromProtoMsg(message: _214.InputProtoMsg): _214.Input;
                toProto(message: _214.Input): Uint8Array;
                toProtoMsg(message: _214.Input): _214.InputProtoMsg;
            };
            Output: {
                encode(message: _214.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Output;
                fromJSON(object: any): _214.Output;
                toJSON(message: _214.Output): unknown;
                fromPartial(object: Partial<_214.Output>): _214.Output;
                fromAmino(object: _214.OutputAmino): _214.Output;
                toAmino(message: _214.Output): _214.OutputAmino;
                fromAminoMsg(object: _214.OutputAminoMsg): _214.Output;
                toAminoMsg(message: _214.Output): _214.OutputAminoMsg;
                fromProtoMsg(message: _214.OutputProtoMsg): _214.Output;
                toProto(message: _214.Output): Uint8Array;
                toProtoMsg(message: _214.Output): _214.OutputProtoMsg;
            };
            Supply: {
                encode(message: _214.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Supply;
                fromJSON(object: any): _214.Supply;
                toJSON(message: _214.Supply): unknown;
                fromPartial(object: Partial<_214.Supply>): _214.Supply;
                fromAmino(object: _214.SupplyAmino): _214.Supply;
                toAmino(message: _214.Supply): _214.SupplyAmino;
                fromAminoMsg(object: _214.SupplyAminoMsg): _214.Supply;
                toAminoMsg(message: _214.Supply): _214.SupplyAminoMsg;
                fromProtoMsg(message: _214.SupplyProtoMsg): _214.Supply;
                toProto(message: _214.Supply): Uint8Array;
                toProtoMsg(message: _214.Supply): _214.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _214.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.DenomUnit;
                fromJSON(object: any): _214.DenomUnit;
                toJSON(message: _214.DenomUnit): unknown;
                fromPartial(object: Partial<_214.DenomUnit>): _214.DenomUnit;
                fromAmino(object: _214.DenomUnitAmino): _214.DenomUnit;
                toAmino(message: _214.DenomUnit): _214.DenomUnitAmino;
                fromAminoMsg(object: _214.DenomUnitAminoMsg): _214.DenomUnit;
                toAminoMsg(message: _214.DenomUnit): _214.DenomUnitAminoMsg;
                fromProtoMsg(message: _214.DenomUnitProtoMsg): _214.DenomUnit;
                toProto(message: _214.DenomUnit): Uint8Array;
                toProtoMsg(message: _214.DenomUnit): _214.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _214.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.Metadata;
                fromJSON(object: any): _214.Metadata;
                toJSON(message: _214.Metadata): unknown;
                fromPartial(object: Partial<_214.Metadata>): _214.Metadata;
                fromAmino(object: _214.MetadataAmino): _214.Metadata;
                toAmino(message: _214.Metadata): _214.MetadataAmino;
                fromAminoMsg(object: _214.MetadataAminoMsg): _214.Metadata;
                toAminoMsg(message: _214.Metadata): _214.MetadataAminoMsg;
                fromProtoMsg(message: _214.MetadataProtoMsg): _214.Metadata;
                toProto(message: _214.Metadata): Uint8Array;
                toProtoMsg(message: _214.Metadata): _214.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _213.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.SendAuthorization;
                fromJSON(object: any): _213.SendAuthorization;
                toJSON(message: _213.SendAuthorization): unknown;
                fromPartial(object: Partial<_213.SendAuthorization>): _213.SendAuthorization;
                fromAmino(object: _213.SendAuthorizationAmino): _213.SendAuthorization;
                toAmino(message: _213.SendAuthorization): _213.SendAuthorizationAmino;
                fromAminoMsg(object: _213.SendAuthorizationAminoMsg): _213.SendAuthorization;
                toAminoMsg(message: _213.SendAuthorization): _213.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _213.SendAuthorizationProtoMsg): _213.SendAuthorization;
                toProto(message: _213.SendAuthorization): Uint8Array;
                toProtoMsg(message: _213.SendAuthorization): _213.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _218.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.TxResponse;
                    fromJSON(object: any): _218.TxResponse;
                    toJSON(message: _218.TxResponse): unknown;
                    fromPartial(object: Partial<_218.TxResponse>): _218.TxResponse;
                    fromAmino(object: _218.TxResponseAmino): _218.TxResponse;
                    toAmino(message: _218.TxResponse): _218.TxResponseAmino;
                    fromAminoMsg(object: _218.TxResponseAminoMsg): _218.TxResponse;
                    toAminoMsg(message: _218.TxResponse): _218.TxResponseAminoMsg;
                    fromProtoMsg(message: _218.TxResponseProtoMsg): _218.TxResponse;
                    toProto(message: _218.TxResponse): Uint8Array;
                    toProtoMsg(message: _218.TxResponse): _218.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _218.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.ABCIMessageLog;
                    fromJSON(object: any): _218.ABCIMessageLog;
                    toJSON(message: _218.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_218.ABCIMessageLog>): _218.ABCIMessageLog;
                    fromAmino(object: _218.ABCIMessageLogAmino): _218.ABCIMessageLog;
                    toAmino(message: _218.ABCIMessageLog): _218.ABCIMessageLogAmino;
                    fromAminoMsg(object: _218.ABCIMessageLogAminoMsg): _218.ABCIMessageLog;
                    toAminoMsg(message: _218.ABCIMessageLog): _218.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _218.ABCIMessageLogProtoMsg): _218.ABCIMessageLog;
                    toProto(message: _218.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _218.ABCIMessageLog): _218.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _218.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.StringEvent;
                    fromJSON(object: any): _218.StringEvent;
                    toJSON(message: _218.StringEvent): unknown;
                    fromPartial(object: Partial<_218.StringEvent>): _218.StringEvent;
                    fromAmino(object: _218.StringEventAmino): _218.StringEvent;
                    toAmino(message: _218.StringEvent): _218.StringEventAmino;
                    fromAminoMsg(object: _218.StringEventAminoMsg): _218.StringEvent;
                    toAminoMsg(message: _218.StringEvent): _218.StringEventAminoMsg;
                    fromProtoMsg(message: _218.StringEventProtoMsg): _218.StringEvent;
                    toProto(message: _218.StringEvent): Uint8Array;
                    toProtoMsg(message: _218.StringEvent): _218.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _218.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Attribute;
                    fromJSON(object: any): _218.Attribute;
                    toJSON(message: _218.Attribute): unknown;
                    fromPartial(object: Partial<_218.Attribute>): _218.Attribute;
                    fromAmino(object: _218.AttributeAmino): _218.Attribute;
                    toAmino(message: _218.Attribute): _218.AttributeAmino;
                    fromAminoMsg(object: _218.AttributeAminoMsg): _218.Attribute;
                    toAminoMsg(message: _218.Attribute): _218.AttributeAminoMsg;
                    fromProtoMsg(message: _218.AttributeProtoMsg): _218.Attribute;
                    toProto(message: _218.Attribute): Uint8Array;
                    toProtoMsg(message: _218.Attribute): _218.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _218.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GasInfo;
                    fromJSON(object: any): _218.GasInfo;
                    toJSON(message: _218.GasInfo): unknown;
                    fromPartial(object: Partial<_218.GasInfo>): _218.GasInfo;
                    fromAmino(object: _218.GasInfoAmino): _218.GasInfo;
                    toAmino(message: _218.GasInfo): _218.GasInfoAmino;
                    fromAminoMsg(object: _218.GasInfoAminoMsg): _218.GasInfo;
                    toAminoMsg(message: _218.GasInfo): _218.GasInfoAminoMsg;
                    fromProtoMsg(message: _218.GasInfoProtoMsg): _218.GasInfo;
                    toProto(message: _218.GasInfo): Uint8Array;
                    toProtoMsg(message: _218.GasInfo): _218.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _218.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Result;
                    fromJSON(object: any): _218.Result;
                    toJSON(message: _218.Result): unknown;
                    fromPartial(object: Partial<_218.Result>): _218.Result;
                    fromAmino(object: _218.ResultAmino): _218.Result;
                    toAmino(message: _218.Result): _218.ResultAmino;
                    fromAminoMsg(object: _218.ResultAminoMsg): _218.Result;
                    toAminoMsg(message: _218.Result): _218.ResultAminoMsg;
                    fromProtoMsg(message: _218.ResultProtoMsg): _218.Result;
                    toProto(message: _218.Result): Uint8Array;
                    toProtoMsg(message: _218.Result): _218.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _218.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.SimulationResponse;
                    fromJSON(object: any): _218.SimulationResponse;
                    toJSON(message: _218.SimulationResponse): unknown;
                    fromPartial(object: Partial<_218.SimulationResponse>): _218.SimulationResponse;
                    fromAmino(object: _218.SimulationResponseAmino): _218.SimulationResponse;
                    toAmino(message: _218.SimulationResponse): _218.SimulationResponseAmino;
                    fromAminoMsg(object: _218.SimulationResponseAminoMsg): _218.SimulationResponse;
                    toAminoMsg(message: _218.SimulationResponse): _218.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _218.SimulationResponseProtoMsg): _218.SimulationResponse;
                    toProto(message: _218.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _218.SimulationResponse): _218.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _218.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.MsgData;
                    fromJSON(object: any): _218.MsgData;
                    toJSON(message: _218.MsgData): unknown;
                    fromPartial(object: Partial<_218.MsgData>): _218.MsgData;
                    fromAmino(object: _218.MsgDataAmino): _218.MsgData;
                    toAmino(message: _218.MsgData): _218.MsgDataAmino;
                    fromAminoMsg(object: _218.MsgDataAminoMsg): _218.MsgData;
                    toAminoMsg(message: _218.MsgData): _218.MsgDataAminoMsg;
                    fromProtoMsg(message: _218.MsgDataProtoMsg): _218.MsgData;
                    toProto(message: _218.MsgData): Uint8Array;
                    toProtoMsg(message: _218.MsgData): _218.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _218.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.TxMsgData;
                    fromJSON(object: any): _218.TxMsgData;
                    toJSON(message: _218.TxMsgData): unknown;
                    fromPartial(object: Partial<_218.TxMsgData>): _218.TxMsgData;
                    fromAmino(object: _218.TxMsgDataAmino): _218.TxMsgData;
                    toAmino(message: _218.TxMsgData): _218.TxMsgDataAmino;
                    fromAminoMsg(object: _218.TxMsgDataAminoMsg): _218.TxMsgData;
                    toAminoMsg(message: _218.TxMsgData): _218.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _218.TxMsgDataProtoMsg): _218.TxMsgData;
                    toProto(message: _218.TxMsgData): Uint8Array;
                    toProtoMsg(message: _218.TxMsgData): _218.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _218.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.SearchTxsResult;
                    fromJSON(object: any): _218.SearchTxsResult;
                    toJSON(message: _218.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_218.SearchTxsResult>): _218.SearchTxsResult;
                    fromAmino(object: _218.SearchTxsResultAmino): _218.SearchTxsResult;
                    toAmino(message: _218.SearchTxsResult): _218.SearchTxsResultAmino;
                    fromAminoMsg(object: _218.SearchTxsResultAminoMsg): _218.SearchTxsResult;
                    toAminoMsg(message: _218.SearchTxsResult): _218.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _218.SearchTxsResultProtoMsg): _218.SearchTxsResult;
                    toProto(message: _218.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _218.SearchTxsResult): _218.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _219.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Pairs;
                    fromJSON(object: any): _219.Pairs;
                    toJSON(message: _219.Pairs): unknown;
                    fromPartial(object: Partial<_219.Pairs>): _219.Pairs;
                    fromAmino(object: _219.PairsAmino): _219.Pairs;
                    toAmino(message: _219.Pairs): _219.PairsAmino;
                    fromAminoMsg(object: _219.PairsAminoMsg): _219.Pairs;
                    toAminoMsg(message: _219.Pairs): _219.PairsAminoMsg;
                    fromProtoMsg(message: _219.PairsProtoMsg): _219.Pairs;
                    toProto(message: _219.Pairs): Uint8Array;
                    toProtoMsg(message: _219.Pairs): _219.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _219.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Pair;
                    fromJSON(object: any): _219.Pair;
                    toJSON(message: _219.Pair): unknown;
                    fromPartial(object: Partial<_219.Pair>): _219.Pair;
                    fromAmino(object: _219.PairAmino): _219.Pair;
                    toAmino(message: _219.Pair): _219.PairAmino;
                    fromAminoMsg(object: _219.PairAminoMsg): _219.Pair;
                    toAminoMsg(message: _219.Pair): _219.PairAminoMsg;
                    fromProtoMsg(message: _219.PairProtoMsg): _219.Pair;
                    toProto(message: _219.Pair): Uint8Array;
                    toProtoMsg(message: _219.Pair): _219.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _220.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.PageRequest;
                    fromJSON(object: any): _220.PageRequest;
                    toJSON(message: _220.PageRequest): unknown;
                    fromPartial(object: Partial<_220.PageRequest>): _220.PageRequest;
                    fromAmino(object: _220.PageRequestAmino): _220.PageRequest;
                    toAmino(message: _220.PageRequest): _220.PageRequestAmino;
                    fromAminoMsg(object: _220.PageRequestAminoMsg): _220.PageRequest;
                    toAminoMsg(message: _220.PageRequest): _220.PageRequestAminoMsg;
                    fromProtoMsg(message: _220.PageRequestProtoMsg): _220.PageRequest;
                    toProto(message: _220.PageRequest): Uint8Array;
                    toProtoMsg(message: _220.PageRequest): _220.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _220.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.PageResponse;
                    fromJSON(object: any): _220.PageResponse;
                    toJSON(message: _220.PageResponse): unknown;
                    fromPartial(object: Partial<_220.PageResponse>): _220.PageResponse;
                    fromAmino(object: _220.PageResponseAmino): _220.PageResponse;
                    toAmino(message: _220.PageResponse): _220.PageResponseAmino;
                    fromAminoMsg(object: _220.PageResponseAminoMsg): _220.PageResponse;
                    toAminoMsg(message: _220.PageResponse): _220.PageResponseAminoMsg;
                    fromProtoMsg(message: _220.PageResponseProtoMsg): _220.PageResponse;
                    toProto(message: _220.PageResponse): Uint8Array;
                    toProtoMsg(message: _220.PageResponse): _220.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _221.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ListAllInterfacesRequest;
                    fromJSON(_: any): _221.ListAllInterfacesRequest;
                    toJSON(_: _221.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_221.ListAllInterfacesRequest>): _221.ListAllInterfacesRequest;
                    fromAmino(_: _221.ListAllInterfacesRequestAmino): _221.ListAllInterfacesRequest;
                    toAmino(_: _221.ListAllInterfacesRequest): _221.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _221.ListAllInterfacesRequestAminoMsg): _221.ListAllInterfacesRequest;
                    toAminoMsg(message: _221.ListAllInterfacesRequest): _221.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _221.ListAllInterfacesRequestProtoMsg): _221.ListAllInterfacesRequest;
                    toProto(message: _221.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _221.ListAllInterfacesRequest): _221.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _221.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ListAllInterfacesResponse;
                    fromJSON(object: any): _221.ListAllInterfacesResponse;
                    toJSON(message: _221.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_221.ListAllInterfacesResponse>): _221.ListAllInterfacesResponse;
                    fromAmino(object: _221.ListAllInterfacesResponseAmino): _221.ListAllInterfacesResponse;
                    toAmino(message: _221.ListAllInterfacesResponse): _221.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _221.ListAllInterfacesResponseAminoMsg): _221.ListAllInterfacesResponse;
                    toAminoMsg(message: _221.ListAllInterfacesResponse): _221.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _221.ListAllInterfacesResponseProtoMsg): _221.ListAllInterfacesResponse;
                    toProto(message: _221.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _221.ListAllInterfacesResponse): _221.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _221.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ListImplementationsRequest;
                    fromJSON(object: any): _221.ListImplementationsRequest;
                    toJSON(message: _221.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_221.ListImplementationsRequest>): _221.ListImplementationsRequest;
                    fromAmino(object: _221.ListImplementationsRequestAmino): _221.ListImplementationsRequest;
                    toAmino(message: _221.ListImplementationsRequest): _221.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _221.ListImplementationsRequestAminoMsg): _221.ListImplementationsRequest;
                    toAminoMsg(message: _221.ListImplementationsRequest): _221.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _221.ListImplementationsRequestProtoMsg): _221.ListImplementationsRequest;
                    toProto(message: _221.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _221.ListImplementationsRequest): _221.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _221.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ListImplementationsResponse;
                    fromJSON(object: any): _221.ListImplementationsResponse;
                    toJSON(message: _221.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_221.ListImplementationsResponse>): _221.ListImplementationsResponse;
                    fromAmino(object: _221.ListImplementationsResponseAmino): _221.ListImplementationsResponse;
                    toAmino(message: _221.ListImplementationsResponse): _221.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _221.ListImplementationsResponseAminoMsg): _221.ListImplementationsResponse;
                    toAminoMsg(message: _221.ListImplementationsResponse): _221.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _221.ListImplementationsResponseProtoMsg): _221.ListImplementationsResponse;
                    toProto(message: _221.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _221.ListImplementationsResponse): _221.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _222.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.AppDescriptor;
                    fromJSON(object: any): _222.AppDescriptor;
                    toJSON(message: _222.AppDescriptor): unknown;
                    fromPartial(object: Partial<_222.AppDescriptor>): _222.AppDescriptor;
                    fromAmino(object: _222.AppDescriptorAmino): _222.AppDescriptor;
                    toAmino(message: _222.AppDescriptor): _222.AppDescriptorAmino;
                    fromAminoMsg(object: _222.AppDescriptorAminoMsg): _222.AppDescriptor;
                    toAminoMsg(message: _222.AppDescriptor): _222.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _222.AppDescriptorProtoMsg): _222.AppDescriptor;
                    toProto(message: _222.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _222.AppDescriptor): _222.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _222.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.TxDescriptor;
                    fromJSON(object: any): _222.TxDescriptor;
                    toJSON(message: _222.TxDescriptor): unknown;
                    fromPartial(object: Partial<_222.TxDescriptor>): _222.TxDescriptor;
                    fromAmino(object: _222.TxDescriptorAmino): _222.TxDescriptor;
                    toAmino(message: _222.TxDescriptor): _222.TxDescriptorAmino;
                    fromAminoMsg(object: _222.TxDescriptorAminoMsg): _222.TxDescriptor;
                    toAminoMsg(message: _222.TxDescriptor): _222.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _222.TxDescriptorProtoMsg): _222.TxDescriptor;
                    toProto(message: _222.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _222.TxDescriptor): _222.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _222.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.AuthnDescriptor;
                    fromJSON(object: any): _222.AuthnDescriptor;
                    toJSON(message: _222.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_222.AuthnDescriptor>): _222.AuthnDescriptor;
                    fromAmino(object: _222.AuthnDescriptorAmino): _222.AuthnDescriptor;
                    toAmino(message: _222.AuthnDescriptor): _222.AuthnDescriptorAmino;
                    fromAminoMsg(object: _222.AuthnDescriptorAminoMsg): _222.AuthnDescriptor;
                    toAminoMsg(message: _222.AuthnDescriptor): _222.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _222.AuthnDescriptorProtoMsg): _222.AuthnDescriptor;
                    toProto(message: _222.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _222.AuthnDescriptor): _222.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _222.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.SigningModeDescriptor;
                    fromJSON(object: any): _222.SigningModeDescriptor;
                    toJSON(message: _222.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_222.SigningModeDescriptor>): _222.SigningModeDescriptor;
                    fromAmino(object: _222.SigningModeDescriptorAmino): _222.SigningModeDescriptor;
                    toAmino(message: _222.SigningModeDescriptor): _222.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _222.SigningModeDescriptorAminoMsg): _222.SigningModeDescriptor;
                    toAminoMsg(message: _222.SigningModeDescriptor): _222.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _222.SigningModeDescriptorProtoMsg): _222.SigningModeDescriptor;
                    toProto(message: _222.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _222.SigningModeDescriptor): _222.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _222.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ChainDescriptor;
                    fromJSON(object: any): _222.ChainDescriptor;
                    toJSON(message: _222.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_222.ChainDescriptor>): _222.ChainDescriptor;
                    fromAmino(object: _222.ChainDescriptorAmino): _222.ChainDescriptor;
                    toAmino(message: _222.ChainDescriptor): _222.ChainDescriptorAmino;
                    fromAminoMsg(object: _222.ChainDescriptorAminoMsg): _222.ChainDescriptor;
                    toAminoMsg(message: _222.ChainDescriptor): _222.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _222.ChainDescriptorProtoMsg): _222.ChainDescriptor;
                    toProto(message: _222.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _222.ChainDescriptor): _222.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _222.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.CodecDescriptor;
                    fromJSON(object: any): _222.CodecDescriptor;
                    toJSON(message: _222.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_222.CodecDescriptor>): _222.CodecDescriptor;
                    fromAmino(object: _222.CodecDescriptorAmino): _222.CodecDescriptor;
                    toAmino(message: _222.CodecDescriptor): _222.CodecDescriptorAmino;
                    fromAminoMsg(object: _222.CodecDescriptorAminoMsg): _222.CodecDescriptor;
                    toAminoMsg(message: _222.CodecDescriptor): _222.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _222.CodecDescriptorProtoMsg): _222.CodecDescriptor;
                    toProto(message: _222.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _222.CodecDescriptor): _222.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _222.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.InterfaceDescriptor;
                    fromJSON(object: any): _222.InterfaceDescriptor;
                    toJSON(message: _222.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_222.InterfaceDescriptor>): _222.InterfaceDescriptor;
                    fromAmino(object: _222.InterfaceDescriptorAmino): _222.InterfaceDescriptor;
                    toAmino(message: _222.InterfaceDescriptor): _222.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _222.InterfaceDescriptorAminoMsg): _222.InterfaceDescriptor;
                    toAminoMsg(message: _222.InterfaceDescriptor): _222.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _222.InterfaceDescriptorProtoMsg): _222.InterfaceDescriptor;
                    toProto(message: _222.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _222.InterfaceDescriptor): _222.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _222.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _222.InterfaceImplementerDescriptor;
                    toJSON(message: _222.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_222.InterfaceImplementerDescriptor>): _222.InterfaceImplementerDescriptor;
                    fromAmino(object: _222.InterfaceImplementerDescriptorAmino): _222.InterfaceImplementerDescriptor;
                    toAmino(message: _222.InterfaceImplementerDescriptor): _222.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _222.InterfaceImplementerDescriptorAminoMsg): _222.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _222.InterfaceImplementerDescriptor): _222.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _222.InterfaceImplementerDescriptorProtoMsg): _222.InterfaceImplementerDescriptor;
                    toProto(message: _222.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _222.InterfaceImplementerDescriptor): _222.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _222.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _222.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _222.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_222.InterfaceAcceptingMessageDescriptor>): _222.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _222.InterfaceAcceptingMessageDescriptorAmino): _222.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _222.InterfaceAcceptingMessageDescriptor): _222.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _222.InterfaceAcceptingMessageDescriptorAminoMsg): _222.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _222.InterfaceAcceptingMessageDescriptor): _222.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _222.InterfaceAcceptingMessageDescriptorProtoMsg): _222.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _222.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _222.InterfaceAcceptingMessageDescriptor): _222.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _222.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ConfigurationDescriptor;
                    fromJSON(object: any): _222.ConfigurationDescriptor;
                    toJSON(message: _222.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_222.ConfigurationDescriptor>): _222.ConfigurationDescriptor;
                    fromAmino(object: _222.ConfigurationDescriptorAmino): _222.ConfigurationDescriptor;
                    toAmino(message: _222.ConfigurationDescriptor): _222.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _222.ConfigurationDescriptorAminoMsg): _222.ConfigurationDescriptor;
                    toAminoMsg(message: _222.ConfigurationDescriptor): _222.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _222.ConfigurationDescriptorProtoMsg): _222.ConfigurationDescriptor;
                    toProto(message: _222.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _222.ConfigurationDescriptor): _222.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _222.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.MsgDescriptor;
                    fromJSON(object: any): _222.MsgDescriptor;
                    toJSON(message: _222.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_222.MsgDescriptor>): _222.MsgDescriptor;
                    fromAmino(object: _222.MsgDescriptorAmino): _222.MsgDescriptor;
                    toAmino(message: _222.MsgDescriptor): _222.MsgDescriptorAmino;
                    fromAminoMsg(object: _222.MsgDescriptorAminoMsg): _222.MsgDescriptor;
                    toAminoMsg(message: _222.MsgDescriptor): _222.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _222.MsgDescriptorProtoMsg): _222.MsgDescriptor;
                    toProto(message: _222.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _222.MsgDescriptor): _222.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _222.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _222.GetAuthnDescriptorRequest;
                    toJSON(_: _222.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetAuthnDescriptorRequest>): _222.GetAuthnDescriptorRequest;
                    fromAmino(_: _222.GetAuthnDescriptorRequestAmino): _222.GetAuthnDescriptorRequest;
                    toAmino(_: _222.GetAuthnDescriptorRequest): _222.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetAuthnDescriptorRequestAminoMsg): _222.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _222.GetAuthnDescriptorRequest): _222.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetAuthnDescriptorRequestProtoMsg): _222.GetAuthnDescriptorRequest;
                    toProto(message: _222.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetAuthnDescriptorRequest): _222.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _222.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _222.GetAuthnDescriptorResponse;
                    toJSON(message: _222.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetAuthnDescriptorResponse>): _222.GetAuthnDescriptorResponse;
                    fromAmino(object: _222.GetAuthnDescriptorResponseAmino): _222.GetAuthnDescriptorResponse;
                    toAmino(message: _222.GetAuthnDescriptorResponse): _222.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetAuthnDescriptorResponseAminoMsg): _222.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _222.GetAuthnDescriptorResponse): _222.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetAuthnDescriptorResponseProtoMsg): _222.GetAuthnDescriptorResponse;
                    toProto(message: _222.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetAuthnDescriptorResponse): _222.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _222.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetChainDescriptorRequest;
                    fromJSON(_: any): _222.GetChainDescriptorRequest;
                    toJSON(_: _222.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetChainDescriptorRequest>): _222.GetChainDescriptorRequest;
                    fromAmino(_: _222.GetChainDescriptorRequestAmino): _222.GetChainDescriptorRequest;
                    toAmino(_: _222.GetChainDescriptorRequest): _222.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetChainDescriptorRequestAminoMsg): _222.GetChainDescriptorRequest;
                    toAminoMsg(message: _222.GetChainDescriptorRequest): _222.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetChainDescriptorRequestProtoMsg): _222.GetChainDescriptorRequest;
                    toProto(message: _222.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetChainDescriptorRequest): _222.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _222.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetChainDescriptorResponse;
                    fromJSON(object: any): _222.GetChainDescriptorResponse;
                    toJSON(message: _222.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetChainDescriptorResponse>): _222.GetChainDescriptorResponse;
                    fromAmino(object: _222.GetChainDescriptorResponseAmino): _222.GetChainDescriptorResponse;
                    toAmino(message: _222.GetChainDescriptorResponse): _222.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetChainDescriptorResponseAminoMsg): _222.GetChainDescriptorResponse;
                    toAminoMsg(message: _222.GetChainDescriptorResponse): _222.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetChainDescriptorResponseProtoMsg): _222.GetChainDescriptorResponse;
                    toProto(message: _222.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetChainDescriptorResponse): _222.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _222.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetCodecDescriptorRequest;
                    fromJSON(_: any): _222.GetCodecDescriptorRequest;
                    toJSON(_: _222.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetCodecDescriptorRequest>): _222.GetCodecDescriptorRequest;
                    fromAmino(_: _222.GetCodecDescriptorRequestAmino): _222.GetCodecDescriptorRequest;
                    toAmino(_: _222.GetCodecDescriptorRequest): _222.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetCodecDescriptorRequestAminoMsg): _222.GetCodecDescriptorRequest;
                    toAminoMsg(message: _222.GetCodecDescriptorRequest): _222.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetCodecDescriptorRequestProtoMsg): _222.GetCodecDescriptorRequest;
                    toProto(message: _222.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetCodecDescriptorRequest): _222.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _222.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetCodecDescriptorResponse;
                    fromJSON(object: any): _222.GetCodecDescriptorResponse;
                    toJSON(message: _222.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetCodecDescriptorResponse>): _222.GetCodecDescriptorResponse;
                    fromAmino(object: _222.GetCodecDescriptorResponseAmino): _222.GetCodecDescriptorResponse;
                    toAmino(message: _222.GetCodecDescriptorResponse): _222.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetCodecDescriptorResponseAminoMsg): _222.GetCodecDescriptorResponse;
                    toAminoMsg(message: _222.GetCodecDescriptorResponse): _222.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetCodecDescriptorResponseProtoMsg): _222.GetCodecDescriptorResponse;
                    toProto(message: _222.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetCodecDescriptorResponse): _222.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _222.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _222.GetConfigurationDescriptorRequest;
                    toJSON(_: _222.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetConfigurationDescriptorRequest>): _222.GetConfigurationDescriptorRequest;
                    fromAmino(_: _222.GetConfigurationDescriptorRequestAmino): _222.GetConfigurationDescriptorRequest;
                    toAmino(_: _222.GetConfigurationDescriptorRequest): _222.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetConfigurationDescriptorRequestAminoMsg): _222.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _222.GetConfigurationDescriptorRequest): _222.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetConfigurationDescriptorRequestProtoMsg): _222.GetConfigurationDescriptorRequest;
                    toProto(message: _222.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetConfigurationDescriptorRequest): _222.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _222.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _222.GetConfigurationDescriptorResponse;
                    toJSON(message: _222.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetConfigurationDescriptorResponse>): _222.GetConfigurationDescriptorResponse;
                    fromAmino(object: _222.GetConfigurationDescriptorResponseAmino): _222.GetConfigurationDescriptorResponse;
                    toAmino(message: _222.GetConfigurationDescriptorResponse): _222.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetConfigurationDescriptorResponseAminoMsg): _222.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _222.GetConfigurationDescriptorResponse): _222.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetConfigurationDescriptorResponseProtoMsg): _222.GetConfigurationDescriptorResponse;
                    toProto(message: _222.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetConfigurationDescriptorResponse): _222.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _222.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _222.GetQueryServicesDescriptorRequest;
                    toJSON(_: _222.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetQueryServicesDescriptorRequest>): _222.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _222.GetQueryServicesDescriptorRequestAmino): _222.GetQueryServicesDescriptorRequest;
                    toAmino(_: _222.GetQueryServicesDescriptorRequest): _222.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetQueryServicesDescriptorRequestAminoMsg): _222.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _222.GetQueryServicesDescriptorRequest): _222.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetQueryServicesDescriptorRequestProtoMsg): _222.GetQueryServicesDescriptorRequest;
                    toProto(message: _222.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetQueryServicesDescriptorRequest): _222.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _222.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _222.GetQueryServicesDescriptorResponse;
                    toJSON(message: _222.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetQueryServicesDescriptorResponse>): _222.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _222.GetQueryServicesDescriptorResponseAmino): _222.GetQueryServicesDescriptorResponse;
                    toAmino(message: _222.GetQueryServicesDescriptorResponse): _222.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetQueryServicesDescriptorResponseAminoMsg): _222.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _222.GetQueryServicesDescriptorResponse): _222.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetQueryServicesDescriptorResponseProtoMsg): _222.GetQueryServicesDescriptorResponse;
                    toProto(message: _222.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetQueryServicesDescriptorResponse): _222.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _222.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetTxDescriptorRequest;
                    fromJSON(_: any): _222.GetTxDescriptorRequest;
                    toJSON(_: _222.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_222.GetTxDescriptorRequest>): _222.GetTxDescriptorRequest;
                    fromAmino(_: _222.GetTxDescriptorRequestAmino): _222.GetTxDescriptorRequest;
                    toAmino(_: _222.GetTxDescriptorRequest): _222.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _222.GetTxDescriptorRequestAminoMsg): _222.GetTxDescriptorRequest;
                    toAminoMsg(message: _222.GetTxDescriptorRequest): _222.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _222.GetTxDescriptorRequestProtoMsg): _222.GetTxDescriptorRequest;
                    toProto(message: _222.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _222.GetTxDescriptorRequest): _222.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _222.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GetTxDescriptorResponse;
                    fromJSON(object: any): _222.GetTxDescriptorResponse;
                    toJSON(message: _222.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_222.GetTxDescriptorResponse>): _222.GetTxDescriptorResponse;
                    fromAmino(object: _222.GetTxDescriptorResponseAmino): _222.GetTxDescriptorResponse;
                    toAmino(message: _222.GetTxDescriptorResponse): _222.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _222.GetTxDescriptorResponseAminoMsg): _222.GetTxDescriptorResponse;
                    toAminoMsg(message: _222.GetTxDescriptorResponse): _222.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _222.GetTxDescriptorResponseProtoMsg): _222.GetTxDescriptorResponse;
                    toProto(message: _222.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _222.GetTxDescriptorResponse): _222.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _222.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryServicesDescriptor;
                    fromJSON(object: any): _222.QueryServicesDescriptor;
                    toJSON(message: _222.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_222.QueryServicesDescriptor>): _222.QueryServicesDescriptor;
                    fromAmino(object: _222.QueryServicesDescriptorAmino): _222.QueryServicesDescriptor;
                    toAmino(message: _222.QueryServicesDescriptor): _222.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _222.QueryServicesDescriptorAminoMsg): _222.QueryServicesDescriptor;
                    toAminoMsg(message: _222.QueryServicesDescriptor): _222.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _222.QueryServicesDescriptorProtoMsg): _222.QueryServicesDescriptor;
                    toProto(message: _222.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _222.QueryServicesDescriptor): _222.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _222.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryServiceDescriptor;
                    fromJSON(object: any): _222.QueryServiceDescriptor;
                    toJSON(message: _222.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_222.QueryServiceDescriptor>): _222.QueryServiceDescriptor;
                    fromAmino(object: _222.QueryServiceDescriptorAmino): _222.QueryServiceDescriptor;
                    toAmino(message: _222.QueryServiceDescriptor): _222.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _222.QueryServiceDescriptorAminoMsg): _222.QueryServiceDescriptor;
                    toAminoMsg(message: _222.QueryServiceDescriptor): _222.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _222.QueryServiceDescriptorProtoMsg): _222.QueryServiceDescriptor;
                    toProto(message: _222.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _222.QueryServiceDescriptor): _222.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _222.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.QueryMethodDescriptor;
                    fromJSON(object: any): _222.QueryMethodDescriptor;
                    toJSON(message: _222.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_222.QueryMethodDescriptor>): _222.QueryMethodDescriptor;
                    fromAmino(object: _222.QueryMethodDescriptorAmino): _222.QueryMethodDescriptor;
                    toAmino(message: _222.QueryMethodDescriptor): _222.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _222.QueryMethodDescriptorAminoMsg): _222.QueryMethodDescriptor;
                    toAminoMsg(message: _222.QueryMethodDescriptor): _222.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _222.QueryMethodDescriptorProtoMsg): _222.QueryMethodDescriptor;
                    toProto(message: _222.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _222.QueryMethodDescriptor): _222.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _223.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Snapshot;
                    fromJSON(object: any): _223.Snapshot;
                    toJSON(message: _223.Snapshot): unknown;
                    fromPartial(object: Partial<_223.Snapshot>): _223.Snapshot;
                    fromAmino(object: _223.SnapshotAmino): _223.Snapshot;
                    toAmino(message: _223.Snapshot): _223.SnapshotAmino;
                    fromAminoMsg(object: _223.SnapshotAminoMsg): _223.Snapshot;
                    toAminoMsg(message: _223.Snapshot): _223.SnapshotAminoMsg;
                    fromProtoMsg(message: _223.SnapshotProtoMsg): _223.Snapshot;
                    toProto(message: _223.Snapshot): Uint8Array;
                    toProtoMsg(message: _223.Snapshot): _223.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _223.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.Metadata;
                    fromJSON(object: any): _223.Metadata;
                    toJSON(message: _223.Metadata): unknown;
                    fromPartial(object: Partial<_223.Metadata>): _223.Metadata;
                    fromAmino(object: _223.MetadataAmino): _223.Metadata;
                    toAmino(message: _223.Metadata): _223.MetadataAmino;
                    fromAminoMsg(object: _223.MetadataAminoMsg): _223.Metadata;
                    toAminoMsg(message: _223.Metadata): _223.MetadataAminoMsg;
                    fromProtoMsg(message: _223.MetadataProtoMsg): _223.Metadata;
                    toProto(message: _223.Metadata): Uint8Array;
                    toProtoMsg(message: _223.Metadata): _223.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _223.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotItem;
                    fromJSON(object: any): _223.SnapshotItem;
                    toJSON(message: _223.SnapshotItem): unknown;
                    fromPartial(object: Partial<_223.SnapshotItem>): _223.SnapshotItem;
                    fromAmino(object: _223.SnapshotItemAmino): _223.SnapshotItem;
                    toAmino(message: _223.SnapshotItem): _223.SnapshotItemAmino;
                    fromAminoMsg(object: _223.SnapshotItemAminoMsg): _223.SnapshotItem;
                    toAminoMsg(message: _223.SnapshotItem): _223.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _223.SnapshotItemProtoMsg): _223.SnapshotItem;
                    toProto(message: _223.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _223.SnapshotItem): _223.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _223.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotStoreItem;
                    fromJSON(object: any): _223.SnapshotStoreItem;
                    toJSON(message: _223.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_223.SnapshotStoreItem>): _223.SnapshotStoreItem;
                    fromAmino(object: _223.SnapshotStoreItemAmino): _223.SnapshotStoreItem;
                    toAmino(message: _223.SnapshotStoreItem): _223.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _223.SnapshotStoreItemAminoMsg): _223.SnapshotStoreItem;
                    toAminoMsg(message: _223.SnapshotStoreItem): _223.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _223.SnapshotStoreItemProtoMsg): _223.SnapshotStoreItem;
                    toProto(message: _223.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _223.SnapshotStoreItem): _223.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _223.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotIAVLItem;
                    fromJSON(object: any): _223.SnapshotIAVLItem;
                    toJSON(message: _223.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_223.SnapshotIAVLItem>): _223.SnapshotIAVLItem;
                    fromAmino(object: _223.SnapshotIAVLItemAmino): _223.SnapshotIAVLItem;
                    toAmino(message: _223.SnapshotIAVLItem): _223.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _223.SnapshotIAVLItemAminoMsg): _223.SnapshotIAVLItem;
                    toAminoMsg(message: _223.SnapshotIAVLItem): _223.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _223.SnapshotIAVLItemProtoMsg): _223.SnapshotIAVLItem;
                    toProto(message: _223.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _223.SnapshotIAVLItem): _223.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _223.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotExtensionMeta;
                    fromJSON(object: any): _223.SnapshotExtensionMeta;
                    toJSON(message: _223.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_223.SnapshotExtensionMeta>): _223.SnapshotExtensionMeta;
                    fromAmino(object: _223.SnapshotExtensionMetaAmino): _223.SnapshotExtensionMeta;
                    toAmino(message: _223.SnapshotExtensionMeta): _223.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _223.SnapshotExtensionMetaAminoMsg): _223.SnapshotExtensionMeta;
                    toAminoMsg(message: _223.SnapshotExtensionMeta): _223.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _223.SnapshotExtensionMetaProtoMsg): _223.SnapshotExtensionMeta;
                    toProto(message: _223.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _223.SnapshotExtensionMeta): _223.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _223.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotExtensionPayload;
                    fromJSON(object: any): _223.SnapshotExtensionPayload;
                    toJSON(message: _223.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_223.SnapshotExtensionPayload>): _223.SnapshotExtensionPayload;
                    fromAmino(object: _223.SnapshotExtensionPayloadAmino): _223.SnapshotExtensionPayload;
                    toAmino(message: _223.SnapshotExtensionPayload): _223.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _223.SnapshotExtensionPayloadAminoMsg): _223.SnapshotExtensionPayload;
                    toAminoMsg(message: _223.SnapshotExtensionPayload): _223.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _223.SnapshotExtensionPayloadProtoMsg): _223.SnapshotExtensionPayload;
                    toProto(message: _223.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _223.SnapshotExtensionPayload): _223.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _223.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotKVItem;
                    fromJSON(object: any): _223.SnapshotKVItem;
                    toJSON(message: _223.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_223.SnapshotKVItem>): _223.SnapshotKVItem;
                    fromAmino(object: _223.SnapshotKVItemAmino): _223.SnapshotKVItem;
                    toAmino(message: _223.SnapshotKVItem): _223.SnapshotKVItemAmino;
                    fromAminoMsg(object: _223.SnapshotKVItemAminoMsg): _223.SnapshotKVItem;
                    toAminoMsg(message: _223.SnapshotKVItem): _223.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _223.SnapshotKVItemProtoMsg): _223.SnapshotKVItem;
                    toProto(message: _223.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _223.SnapshotKVItem): _223.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _223.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.SnapshotSchema;
                    fromJSON(object: any): _223.SnapshotSchema;
                    toJSON(message: _223.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_223.SnapshotSchema>): _223.SnapshotSchema;
                    fromAmino(object: _223.SnapshotSchemaAmino): _223.SnapshotSchema;
                    toAmino(message: _223.SnapshotSchema): _223.SnapshotSchemaAmino;
                    fromAminoMsg(object: _223.SnapshotSchemaAminoMsg): _223.SnapshotSchema;
                    toAminoMsg(message: _223.SnapshotSchema): _223.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _223.SnapshotSchemaProtoMsg): _223.SnapshotSchema;
                    toProto(message: _223.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _223.SnapshotSchema): _223.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _225.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.StoreKVPair;
                    fromJSON(object: any): _225.StoreKVPair;
                    toJSON(message: _225.StoreKVPair): unknown;
                    fromPartial(object: Partial<_225.StoreKVPair>): _225.StoreKVPair;
                    fromAmino(object: _225.StoreKVPairAmino): _225.StoreKVPair;
                    toAmino(message: _225.StoreKVPair): _225.StoreKVPairAmino;
                    fromAminoMsg(object: _225.StoreKVPairAminoMsg): _225.StoreKVPair;
                    toAminoMsg(message: _225.StoreKVPair): _225.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _225.StoreKVPairProtoMsg): _225.StoreKVPair;
                    toProto(message: _225.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _225.StoreKVPair): _225.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    encode(message: _224.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.CommitInfo;
                    fromJSON(object: any): _224.CommitInfo;
                    toJSON(message: _224.CommitInfo): unknown;
                    fromPartial(object: Partial<_224.CommitInfo>): _224.CommitInfo;
                    fromAmino(object: _224.CommitInfoAmino): _224.CommitInfo;
                    toAmino(message: _224.CommitInfo): _224.CommitInfoAmino;
                    fromAminoMsg(object: _224.CommitInfoAminoMsg): _224.CommitInfo;
                    toAminoMsg(message: _224.CommitInfo): _224.CommitInfoAminoMsg;
                    fromProtoMsg(message: _224.CommitInfoProtoMsg): _224.CommitInfo;
                    toProto(message: _224.CommitInfo): Uint8Array;
                    toProtoMsg(message: _224.CommitInfo): _224.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _224.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.StoreInfo;
                    fromJSON(object: any): _224.StoreInfo;
                    toJSON(message: _224.StoreInfo): unknown;
                    fromPartial(object: Partial<_224.StoreInfo>): _224.StoreInfo;
                    fromAmino(object: _224.StoreInfoAmino): _224.StoreInfo;
                    toAmino(message: _224.StoreInfo): _224.StoreInfoAmino;
                    fromAminoMsg(object: _224.StoreInfoAminoMsg): _224.StoreInfo;
                    toAminoMsg(message: _224.StoreInfo): _224.StoreInfoAminoMsg;
                    fromProtoMsg(message: _224.StoreInfoProtoMsg): _224.StoreInfo;
                    toProto(message: _224.StoreInfo): Uint8Array;
                    toProtoMsg(message: _224.StoreInfo): _224.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _224.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.CommitID;
                    fromJSON(object: any): _224.CommitID;
                    toJSON(message: _224.CommitID): unknown;
                    fromPartial(object: Partial<_224.CommitID>): _224.CommitID;
                    fromAmino(object: _224.CommitIDAmino): _224.CommitID;
                    toAmino(message: _224.CommitID): _224.CommitIDAmino;
                    fromAminoMsg(object: _224.CommitIDAminoMsg): _224.CommitID;
                    toAminoMsg(message: _224.CommitID): _224.CommitIDAminoMsg;
                    fromProtoMsg(message: _224.CommitIDProtoMsg): _224.CommitID;
                    toProto(message: _224.CommitID): Uint8Array;
                    toProtoMsg(message: _224.CommitID): _224.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _451.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _226.GetNodeInfoRequest): Promise<_226.GetNodeInfoResponse>;
                    getSyncing(request?: _226.GetSyncingRequest): Promise<_226.GetSyncingResponse>;
                    getLatestBlock(request?: _226.GetLatestBlockRequest): Promise<_226.GetLatestBlockResponse>;
                    getBlockByHeight(request: _226.GetBlockByHeightRequest): Promise<_226.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _226.GetLatestValidatorSetRequest): Promise<_226.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _226.GetValidatorSetByHeightRequest): Promise<_226.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _226.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _226.GetValidatorSetByHeightRequest;
                    toJSON(message: _226.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_226.GetValidatorSetByHeightRequest>): _226.GetValidatorSetByHeightRequest;
                    fromAmino(object: _226.GetValidatorSetByHeightRequestAmino): _226.GetValidatorSetByHeightRequest;
                    toAmino(message: _226.GetValidatorSetByHeightRequest): _226.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _226.GetValidatorSetByHeightRequestAminoMsg): _226.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _226.GetValidatorSetByHeightRequest): _226.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _226.GetValidatorSetByHeightRequestProtoMsg): _226.GetValidatorSetByHeightRequest;
                    toProto(message: _226.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _226.GetValidatorSetByHeightRequest): _226.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _226.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _226.GetValidatorSetByHeightResponse;
                    toJSON(message: _226.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_226.GetValidatorSetByHeightResponse>): _226.GetValidatorSetByHeightResponse;
                    fromAmino(object: _226.GetValidatorSetByHeightResponseAmino): _226.GetValidatorSetByHeightResponse;
                    toAmino(message: _226.GetValidatorSetByHeightResponse): _226.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _226.GetValidatorSetByHeightResponseAminoMsg): _226.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _226.GetValidatorSetByHeightResponse): _226.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _226.GetValidatorSetByHeightResponseProtoMsg): _226.GetValidatorSetByHeightResponse;
                    toProto(message: _226.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _226.GetValidatorSetByHeightResponse): _226.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _226.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _226.GetLatestValidatorSetRequest;
                    toJSON(message: _226.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_226.GetLatestValidatorSetRequest>): _226.GetLatestValidatorSetRequest;
                    fromAmino(object: _226.GetLatestValidatorSetRequestAmino): _226.GetLatestValidatorSetRequest;
                    toAmino(message: _226.GetLatestValidatorSetRequest): _226.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _226.GetLatestValidatorSetRequestAminoMsg): _226.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _226.GetLatestValidatorSetRequest): _226.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _226.GetLatestValidatorSetRequestProtoMsg): _226.GetLatestValidatorSetRequest;
                    toProto(message: _226.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _226.GetLatestValidatorSetRequest): _226.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _226.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _226.GetLatestValidatorSetResponse;
                    toJSON(message: _226.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_226.GetLatestValidatorSetResponse>): _226.GetLatestValidatorSetResponse;
                    fromAmino(object: _226.GetLatestValidatorSetResponseAmino): _226.GetLatestValidatorSetResponse;
                    toAmino(message: _226.GetLatestValidatorSetResponse): _226.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _226.GetLatestValidatorSetResponseAminoMsg): _226.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _226.GetLatestValidatorSetResponse): _226.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _226.GetLatestValidatorSetResponseProtoMsg): _226.GetLatestValidatorSetResponse;
                    toProto(message: _226.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _226.GetLatestValidatorSetResponse): _226.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _226.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Validator;
                    fromJSON(object: any): _226.Validator;
                    toJSON(message: _226.Validator): unknown;
                    fromPartial(object: Partial<_226.Validator>): _226.Validator;
                    fromAmino(object: _226.ValidatorAmino): _226.Validator;
                    toAmino(message: _226.Validator): _226.ValidatorAmino;
                    fromAminoMsg(object: _226.ValidatorAminoMsg): _226.Validator;
                    toAminoMsg(message: _226.Validator): _226.ValidatorAminoMsg;
                    fromProtoMsg(message: _226.ValidatorProtoMsg): _226.Validator;
                    toProto(message: _226.Validator): Uint8Array;
                    toProtoMsg(message: _226.Validator): _226.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _226.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetBlockByHeightRequest;
                    fromJSON(object: any): _226.GetBlockByHeightRequest;
                    toJSON(message: _226.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_226.GetBlockByHeightRequest>): _226.GetBlockByHeightRequest;
                    fromAmino(object: _226.GetBlockByHeightRequestAmino): _226.GetBlockByHeightRequest;
                    toAmino(message: _226.GetBlockByHeightRequest): _226.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _226.GetBlockByHeightRequestAminoMsg): _226.GetBlockByHeightRequest;
                    toAminoMsg(message: _226.GetBlockByHeightRequest): _226.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _226.GetBlockByHeightRequestProtoMsg): _226.GetBlockByHeightRequest;
                    toProto(message: _226.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _226.GetBlockByHeightRequest): _226.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _226.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetBlockByHeightResponse;
                    fromJSON(object: any): _226.GetBlockByHeightResponse;
                    toJSON(message: _226.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_226.GetBlockByHeightResponse>): _226.GetBlockByHeightResponse;
                    fromAmino(object: _226.GetBlockByHeightResponseAmino): _226.GetBlockByHeightResponse;
                    toAmino(message: _226.GetBlockByHeightResponse): _226.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _226.GetBlockByHeightResponseAminoMsg): _226.GetBlockByHeightResponse;
                    toAminoMsg(message: _226.GetBlockByHeightResponse): _226.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _226.GetBlockByHeightResponseProtoMsg): _226.GetBlockByHeightResponse;
                    toProto(message: _226.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _226.GetBlockByHeightResponse): _226.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _226.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetLatestBlockRequest;
                    fromJSON(_: any): _226.GetLatestBlockRequest;
                    toJSON(_: _226.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_226.GetLatestBlockRequest>): _226.GetLatestBlockRequest;
                    fromAmino(_: _226.GetLatestBlockRequestAmino): _226.GetLatestBlockRequest;
                    toAmino(_: _226.GetLatestBlockRequest): _226.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _226.GetLatestBlockRequestAminoMsg): _226.GetLatestBlockRequest;
                    toAminoMsg(message: _226.GetLatestBlockRequest): _226.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _226.GetLatestBlockRequestProtoMsg): _226.GetLatestBlockRequest;
                    toProto(message: _226.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _226.GetLatestBlockRequest): _226.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _226.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetLatestBlockResponse;
                    fromJSON(object: any): _226.GetLatestBlockResponse;
                    toJSON(message: _226.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_226.GetLatestBlockResponse>): _226.GetLatestBlockResponse;
                    fromAmino(object: _226.GetLatestBlockResponseAmino): _226.GetLatestBlockResponse;
                    toAmino(message: _226.GetLatestBlockResponse): _226.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _226.GetLatestBlockResponseAminoMsg): _226.GetLatestBlockResponse;
                    toAminoMsg(message: _226.GetLatestBlockResponse): _226.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _226.GetLatestBlockResponseProtoMsg): _226.GetLatestBlockResponse;
                    toProto(message: _226.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _226.GetLatestBlockResponse): _226.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _226.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetSyncingRequest;
                    fromJSON(_: any): _226.GetSyncingRequest;
                    toJSON(_: _226.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_226.GetSyncingRequest>): _226.GetSyncingRequest;
                    fromAmino(_: _226.GetSyncingRequestAmino): _226.GetSyncingRequest;
                    toAmino(_: _226.GetSyncingRequest): _226.GetSyncingRequestAmino;
                    fromAminoMsg(object: _226.GetSyncingRequestAminoMsg): _226.GetSyncingRequest;
                    toAminoMsg(message: _226.GetSyncingRequest): _226.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _226.GetSyncingRequestProtoMsg): _226.GetSyncingRequest;
                    toProto(message: _226.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _226.GetSyncingRequest): _226.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _226.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetSyncingResponse;
                    fromJSON(object: any): _226.GetSyncingResponse;
                    toJSON(message: _226.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_226.GetSyncingResponse>): _226.GetSyncingResponse;
                    fromAmino(object: _226.GetSyncingResponseAmino): _226.GetSyncingResponse;
                    toAmino(message: _226.GetSyncingResponse): _226.GetSyncingResponseAmino;
                    fromAminoMsg(object: _226.GetSyncingResponseAminoMsg): _226.GetSyncingResponse;
                    toAminoMsg(message: _226.GetSyncingResponse): _226.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _226.GetSyncingResponseProtoMsg): _226.GetSyncingResponse;
                    toProto(message: _226.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _226.GetSyncingResponse): _226.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _226.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetNodeInfoRequest;
                    fromJSON(_: any): _226.GetNodeInfoRequest;
                    toJSON(_: _226.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_226.GetNodeInfoRequest>): _226.GetNodeInfoRequest;
                    fromAmino(_: _226.GetNodeInfoRequestAmino): _226.GetNodeInfoRequest;
                    toAmino(_: _226.GetNodeInfoRequest): _226.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _226.GetNodeInfoRequestAminoMsg): _226.GetNodeInfoRequest;
                    toAminoMsg(message: _226.GetNodeInfoRequest): _226.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _226.GetNodeInfoRequestProtoMsg): _226.GetNodeInfoRequest;
                    toProto(message: _226.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _226.GetNodeInfoRequest): _226.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _226.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GetNodeInfoResponse;
                    fromJSON(object: any): _226.GetNodeInfoResponse;
                    toJSON(message: _226.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_226.GetNodeInfoResponse>): _226.GetNodeInfoResponse;
                    fromAmino(object: _226.GetNodeInfoResponseAmino): _226.GetNodeInfoResponse;
                    toAmino(message: _226.GetNodeInfoResponse): _226.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _226.GetNodeInfoResponseAminoMsg): _226.GetNodeInfoResponse;
                    toAminoMsg(message: _226.GetNodeInfoResponse): _226.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _226.GetNodeInfoResponseProtoMsg): _226.GetNodeInfoResponse;
                    toProto(message: _226.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _226.GetNodeInfoResponse): _226.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _226.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.VersionInfo;
                    fromJSON(object: any): _226.VersionInfo;
                    toJSON(message: _226.VersionInfo): unknown;
                    fromPartial(object: Partial<_226.VersionInfo>): _226.VersionInfo;
                    fromAmino(object: _226.VersionInfoAmino): _226.VersionInfo;
                    toAmino(message: _226.VersionInfo): _226.VersionInfoAmino;
                    fromAminoMsg(object: _226.VersionInfoAminoMsg): _226.VersionInfo;
                    toAminoMsg(message: _226.VersionInfo): _226.VersionInfoAminoMsg;
                    fromProtoMsg(message: _226.VersionInfoProtoMsg): _226.VersionInfo;
                    toProto(message: _226.VersionInfo): Uint8Array;
                    toProtoMsg(message: _226.VersionInfo): _226.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _226.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Module;
                    fromJSON(object: any): _226.Module;
                    toJSON(message: _226.Module): unknown;
                    fromPartial(object: Partial<_226.Module>): _226.Module;
                    fromAmino(object: _226.ModuleAmino): _226.Module;
                    toAmino(message: _226.Module): _226.ModuleAmino;
                    fromAminoMsg(object: _226.ModuleAminoMsg): _226.Module;
                    toAminoMsg(message: _226.Module): _226.ModuleAminoMsg;
                    fromProtoMsg(message: _226.ModuleProtoMsg): _226.Module;
                    toProto(message: _226.Module): Uint8Array;
                    toProtoMsg(message: _226.Module): _226.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _227.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.Coin;
                fromJSON(object: any): _227.Coin;
                toJSON(message: _227.Coin): unknown;
                fromPartial(object: Partial<_227.Coin>): _227.Coin;
                fromAmino(object: _227.CoinAmino): _227.Coin;
                toAmino(message: _227.Coin): _227.CoinAmino;
                fromAminoMsg(object: _227.CoinAminoMsg): _227.Coin;
                toAminoMsg(message: _227.Coin): _227.CoinAminoMsg;
                fromProtoMsg(message: _227.CoinProtoMsg): _227.Coin;
                toProto(message: _227.Coin): Uint8Array;
                toProtoMsg(message: _227.Coin): _227.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _227.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.DecCoin;
                fromJSON(object: any): _227.DecCoin;
                toJSON(message: _227.DecCoin): unknown;
                fromPartial(object: Partial<_227.DecCoin>): _227.DecCoin;
                fromAmino(object: _227.DecCoinAmino): _227.DecCoin;
                toAmino(message: _227.DecCoin): _227.DecCoinAmino;
                fromAminoMsg(object: _227.DecCoinAminoMsg): _227.DecCoin;
                toAminoMsg(message: _227.DecCoin): _227.DecCoinAminoMsg;
                fromProtoMsg(message: _227.DecCoinProtoMsg): _227.DecCoin;
                toProto(message: _227.DecCoin): Uint8Array;
                toProtoMsg(message: _227.DecCoin): _227.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _227.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.IntProto;
                fromJSON(object: any): _227.IntProto;
                toJSON(message: _227.IntProto): unknown;
                fromPartial(object: Partial<_227.IntProto>): _227.IntProto;
                fromAmino(object: _227.IntProtoAmino): _227.IntProto;
                toAmino(message: _227.IntProto): _227.IntProtoAmino;
                fromAminoMsg(object: _227.IntProtoAminoMsg): _227.IntProto;
                toAminoMsg(message: _227.IntProto): _227.IntProtoAminoMsg;
                fromProtoMsg(message: _227.IntProtoProtoMsg): _227.IntProto;
                toProto(message: _227.IntProto): Uint8Array;
                toProtoMsg(message: _227.IntProto): _227.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _227.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.DecProto;
                fromJSON(object: any): _227.DecProto;
                toJSON(message: _227.DecProto): unknown;
                fromPartial(object: Partial<_227.DecProto>): _227.DecProto;
                fromAmino(object: _227.DecProtoAmino): _227.DecProto;
                toAmino(message: _227.DecProto): _227.DecProtoAmino;
                fromAminoMsg(object: _227.DecProtoAminoMsg): _227.DecProto;
                toAminoMsg(message: _227.DecProto): _227.DecProtoAminoMsg;
                fromProtoMsg(message: _227.DecProtoProtoMsg): _227.DecProto;
                toProto(message: _227.DecProto): Uint8Array;
                toProtoMsg(message: _227.DecProto): _227.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _229.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.GenesisOwners;
                fromJSON(object: any): _229.GenesisOwners;
                toJSON(message: _229.GenesisOwners): unknown;
                fromPartial(object: Partial<_229.GenesisOwners>): _229.GenesisOwners;
                fromAmino(object: _229.GenesisOwnersAmino): _229.GenesisOwners;
                toAmino(message: _229.GenesisOwners): _229.GenesisOwnersAmino;
                fromAminoMsg(object: _229.GenesisOwnersAminoMsg): _229.GenesisOwners;
                toAminoMsg(message: _229.GenesisOwners): _229.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _229.GenesisOwnersProtoMsg): _229.GenesisOwners;
                toProto(message: _229.GenesisOwners): Uint8Array;
                toProtoMsg(message: _229.GenesisOwners): _229.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _229.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.GenesisState;
                fromJSON(object: any): _229.GenesisState;
                toJSON(message: _229.GenesisState): unknown;
                fromPartial(object: Partial<_229.GenesisState>): _229.GenesisState;
                fromAmino(object: _229.GenesisStateAmino): _229.GenesisState;
                toAmino(message: _229.GenesisState): _229.GenesisStateAmino;
                fromAminoMsg(object: _229.GenesisStateAminoMsg): _229.GenesisState;
                toAminoMsg(message: _229.GenesisState): _229.GenesisStateAminoMsg;
                fromProtoMsg(message: _229.GenesisStateProtoMsg): _229.GenesisState;
                toProto(message: _229.GenesisState): Uint8Array;
                toProtoMsg(message: _229.GenesisState): _229.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _228.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Capability;
                fromJSON(object: any): _228.Capability;
                toJSON(message: _228.Capability): unknown;
                fromPartial(object: Partial<_228.Capability>): _228.Capability;
                fromAmino(object: _228.CapabilityAmino): _228.Capability;
                toAmino(message: _228.Capability): _228.CapabilityAmino;
                fromAminoMsg(object: _228.CapabilityAminoMsg): _228.Capability;
                toAminoMsg(message: _228.Capability): _228.CapabilityAminoMsg;
                fromProtoMsg(message: _228.CapabilityProtoMsg): _228.Capability;
                toProto(message: _228.Capability): Uint8Array;
                toProtoMsg(message: _228.Capability): _228.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _228.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.Owner;
                fromJSON(object: any): _228.Owner;
                toJSON(message: _228.Owner): unknown;
                fromPartial(object: Partial<_228.Owner>): _228.Owner;
                fromAmino(object: _228.OwnerAmino): _228.Owner;
                toAmino(message: _228.Owner): _228.OwnerAmino;
                fromAminoMsg(object: _228.OwnerAminoMsg): _228.Owner;
                toAminoMsg(message: _228.Owner): _228.OwnerAminoMsg;
                fromProtoMsg(message: _228.OwnerProtoMsg): _228.Owner;
                toProto(message: _228.Owner): Uint8Array;
                toProtoMsg(message: _228.Owner): _228.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _228.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.CapabilityOwners;
                fromJSON(object: any): _228.CapabilityOwners;
                toJSON(message: _228.CapabilityOwners): unknown;
                fromPartial(object: Partial<_228.CapabilityOwners>): _228.CapabilityOwners;
                fromAmino(object: _228.CapabilityOwnersAmino): _228.CapabilityOwners;
                toAmino(message: _228.CapabilityOwners): _228.CapabilityOwnersAmino;
                fromAminoMsg(object: _228.CapabilityOwnersAminoMsg): _228.CapabilityOwners;
                toAminoMsg(message: _228.CapabilityOwners): _228.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _228.CapabilityOwnersProtoMsg): _228.CapabilityOwners;
                toProto(message: _228.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _228.CapabilityOwners): _228.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _467.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _231.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _231.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _231.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _231.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _231.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _231.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _231.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _231.MsgVerifyInvariant) => _231.MsgVerifyInvariantAmino;
                    fromAmino: (object: _231.MsgVerifyInvariantAmino) => _231.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _231.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.MsgVerifyInvariant;
                fromJSON(object: any): _231.MsgVerifyInvariant;
                toJSON(message: _231.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_231.MsgVerifyInvariant>): _231.MsgVerifyInvariant;
                fromAmino(object: _231.MsgVerifyInvariantAmino): _231.MsgVerifyInvariant;
                toAmino(message: _231.MsgVerifyInvariant): _231.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _231.MsgVerifyInvariantAminoMsg): _231.MsgVerifyInvariant;
                toAminoMsg(message: _231.MsgVerifyInvariant): _231.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _231.MsgVerifyInvariantProtoMsg): _231.MsgVerifyInvariant;
                toProto(message: _231.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _231.MsgVerifyInvariant): _231.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _231.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.MsgVerifyInvariantResponse;
                fromJSON(_: any): _231.MsgVerifyInvariantResponse;
                toJSON(_: _231.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_231.MsgVerifyInvariantResponse>): _231.MsgVerifyInvariantResponse;
                fromAmino(_: _231.MsgVerifyInvariantResponseAmino): _231.MsgVerifyInvariantResponse;
                toAmino(_: _231.MsgVerifyInvariantResponse): _231.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _231.MsgVerifyInvariantResponseAminoMsg): _231.MsgVerifyInvariantResponse;
                toAminoMsg(message: _231.MsgVerifyInvariantResponse): _231.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _231.MsgVerifyInvariantResponseProtoMsg): _231.MsgVerifyInvariantResponse;
                toProto(message: _231.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _231.MsgVerifyInvariantResponse): _231.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _230.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.GenesisState;
                fromJSON(object: any): _230.GenesisState;
                toJSON(message: _230.GenesisState): unknown;
                fromPartial(object: Partial<_230.GenesisState>): _230.GenesisState;
                fromAmino(object: _230.GenesisStateAmino): _230.GenesisState;
                toAmino(message: _230.GenesisState): _230.GenesisStateAmino;
                fromAminoMsg(object: _230.GenesisStateAminoMsg): _230.GenesisState;
                toAminoMsg(message: _230.GenesisState): _230.GenesisStateAminoMsg;
                fromProtoMsg(message: _230.GenesisStateProtoMsg): _230.GenesisState;
                toProto(message: _230.GenesisState): Uint8Array;
                toProtoMsg(message: _230.GenesisState): _230.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _232.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.PubKey;
                fromJSON(object: any): _232.PubKey;
                toJSON(message: _232.PubKey): unknown;
                fromPartial(object: Partial<_232.PubKey>): _232.PubKey;
                fromAmino(object: _232.PubKeyAmino): _232.PubKey;
                toAmino(message: _232.PubKey): _232.PubKeyAmino;
                fromAminoMsg(object: _232.PubKeyAminoMsg): _232.PubKey;
                toAminoMsg(message: _232.PubKey): _232.PubKeyAminoMsg;
                fromProtoMsg(message: _232.PubKeyProtoMsg): _232.PubKey;
                toProto(message: _232.PubKey): Uint8Array;
                toProtoMsg(message: _232.PubKey): _232.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _232.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.PrivKey;
                fromJSON(object: any): _232.PrivKey;
                toJSON(message: _232.PrivKey): unknown;
                fromPartial(object: Partial<_232.PrivKey>): _232.PrivKey;
                fromAmino(object: _232.PrivKeyAmino): _232.PrivKey;
                toAmino(message: _232.PrivKey): _232.PrivKeyAmino;
                fromAminoMsg(object: _232.PrivKeyAminoMsg): _232.PrivKey;
                toAminoMsg(message: _232.PrivKey): _232.PrivKeyAminoMsg;
                fromProtoMsg(message: _232.PrivKeyProtoMsg): _232.PrivKey;
                toProto(message: _232.PrivKey): Uint8Array;
                toProtoMsg(message: _232.PrivKey): _232.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _233.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.BIP44Params;
                    fromJSON(object: any): _233.BIP44Params;
                    toJSON(message: _233.BIP44Params): unknown;
                    fromPartial(object: Partial<_233.BIP44Params>): _233.BIP44Params;
                    fromAmino(object: _233.BIP44ParamsAmino): _233.BIP44Params;
                    toAmino(message: _233.BIP44Params): _233.BIP44ParamsAmino;
                    fromAminoMsg(object: _233.BIP44ParamsAminoMsg): _233.BIP44Params;
                    toAminoMsg(message: _233.BIP44Params): _233.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _233.BIP44ParamsProtoMsg): _233.BIP44Params;
                    toProto(message: _233.BIP44Params): Uint8Array;
                    toProtoMsg(message: _233.BIP44Params): _233.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _234.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Record;
                    fromJSON(object: any): _234.Record;
                    toJSON(message: _234.Record): unknown;
                    fromPartial(object: Partial<_234.Record>): _234.Record;
                    fromAmino(object: _234.RecordAmino): _234.Record;
                    toAmino(message: _234.Record): _234.RecordAmino;
                    fromAminoMsg(object: _234.RecordAminoMsg): _234.Record;
                    toAminoMsg(message: _234.Record): _234.RecordAminoMsg;
                    fromProtoMsg(message: _234.RecordProtoMsg): _234.Record;
                    toProto(message: _234.Record): Uint8Array;
                    toProtoMsg(message: _234.Record): _234.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _234.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Record_Local;
                    fromJSON(object: any): _234.Record_Local;
                    toJSON(message: _234.Record_Local): unknown;
                    fromPartial(object: Partial<_234.Record_Local>): _234.Record_Local;
                    fromAmino(object: _234.Record_LocalAmino): _234.Record_Local;
                    toAmino(message: _234.Record_Local): _234.Record_LocalAmino;
                    fromAminoMsg(object: _234.Record_LocalAminoMsg): _234.Record_Local;
                    toAminoMsg(message: _234.Record_Local): _234.Record_LocalAminoMsg;
                    fromProtoMsg(message: _234.Record_LocalProtoMsg): _234.Record_Local;
                    toProto(message: _234.Record_Local): Uint8Array;
                    toProtoMsg(message: _234.Record_Local): _234.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _234.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Record_Ledger;
                    fromJSON(object: any): _234.Record_Ledger;
                    toJSON(message: _234.Record_Ledger): unknown;
                    fromPartial(object: Partial<_234.Record_Ledger>): _234.Record_Ledger;
                    fromAmino(object: _234.Record_LedgerAmino): _234.Record_Ledger;
                    toAmino(message: _234.Record_Ledger): _234.Record_LedgerAmino;
                    fromAminoMsg(object: _234.Record_LedgerAminoMsg): _234.Record_Ledger;
                    toAminoMsg(message: _234.Record_Ledger): _234.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _234.Record_LedgerProtoMsg): _234.Record_Ledger;
                    toProto(message: _234.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _234.Record_Ledger): _234.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _234.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Record_Multi;
                    fromJSON(_: any): _234.Record_Multi;
                    toJSON(_: _234.Record_Multi): unknown;
                    fromPartial(_: Partial<_234.Record_Multi>): _234.Record_Multi;
                    fromAmino(_: _234.Record_MultiAmino): _234.Record_Multi;
                    toAmino(_: _234.Record_Multi): _234.Record_MultiAmino;
                    fromAminoMsg(object: _234.Record_MultiAminoMsg): _234.Record_Multi;
                    toAminoMsg(message: _234.Record_Multi): _234.Record_MultiAminoMsg;
                    fromProtoMsg(message: _234.Record_MultiProtoMsg): _234.Record_Multi;
                    toProto(message: _234.Record_Multi): Uint8Array;
                    toProtoMsg(message: _234.Record_Multi): _234.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _234.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Record_Offline;
                    fromJSON(_: any): _234.Record_Offline;
                    toJSON(_: _234.Record_Offline): unknown;
                    fromPartial(_: Partial<_234.Record_Offline>): _234.Record_Offline;
                    fromAmino(_: _234.Record_OfflineAmino): _234.Record_Offline;
                    toAmino(_: _234.Record_Offline): _234.Record_OfflineAmino;
                    fromAminoMsg(object: _234.Record_OfflineAminoMsg): _234.Record_Offline;
                    toAminoMsg(message: _234.Record_Offline): _234.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _234.Record_OfflineProtoMsg): _234.Record_Offline;
                    toProto(message: _234.Record_Offline): Uint8Array;
                    toProtoMsg(message: _234.Record_Offline): _234.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _235.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.LegacyAminoPubKey;
                fromJSON(object: any): _235.LegacyAminoPubKey;
                toJSON(message: _235.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_235.LegacyAminoPubKey>): _235.LegacyAminoPubKey;
                fromAmino(object: _235.LegacyAminoPubKeyAmino): _235.LegacyAminoPubKey;
                toAmino(message: _235.LegacyAminoPubKey): _235.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _235.LegacyAminoPubKeyAminoMsg): _235.LegacyAminoPubKey;
                toAminoMsg(message: _235.LegacyAminoPubKey): _235.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _235.LegacyAminoPubKeyProtoMsg): _235.LegacyAminoPubKey;
                toProto(message: _235.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _235.LegacyAminoPubKey): _235.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _236.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.PubKey;
                fromJSON(object: any): _236.PubKey;
                toJSON(message: _236.PubKey): unknown;
                fromPartial(object: Partial<_236.PubKey>): _236.PubKey;
                fromAmino(object: _236.PubKeyAmino): _236.PubKey;
                toAmino(message: _236.PubKey): _236.PubKeyAmino;
                fromAminoMsg(object: _236.PubKeyAminoMsg): _236.PubKey;
                toAminoMsg(message: _236.PubKey): _236.PubKeyAminoMsg;
                fromProtoMsg(message: _236.PubKeyProtoMsg): _236.PubKey;
                toProto(message: _236.PubKey): Uint8Array;
                toProtoMsg(message: _236.PubKey): _236.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _236.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.PrivKey;
                fromJSON(object: any): _236.PrivKey;
                toJSON(message: _236.PrivKey): unknown;
                fromPartial(object: Partial<_236.PrivKey>): _236.PrivKey;
                fromAmino(object: _236.PrivKeyAmino): _236.PrivKey;
                toAmino(message: _236.PrivKey): _236.PrivKeyAmino;
                fromAminoMsg(object: _236.PrivKeyAminoMsg): _236.PrivKey;
                toAminoMsg(message: _236.PrivKey): _236.PrivKeyAminoMsg;
                fromProtoMsg(message: _236.PrivKeyProtoMsg): _236.PrivKey;
                toProto(message: _236.PrivKey): Uint8Array;
                toProtoMsg(message: _236.PrivKey): _236.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _237.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.PubKey;
                fromJSON(object: any): _237.PubKey;
                toJSON(message: _237.PubKey): unknown;
                fromPartial(object: Partial<_237.PubKey>): _237.PubKey;
                fromAmino(object: _237.PubKeyAmino): _237.PubKey;
                toAmino(message: _237.PubKey): _237.PubKeyAmino;
                fromAminoMsg(object: _237.PubKeyAminoMsg): _237.PubKey;
                toAminoMsg(message: _237.PubKey): _237.PubKeyAminoMsg;
                fromProtoMsg(message: _237.PubKeyProtoMsg): _237.PubKey;
                toProto(message: _237.PubKey): Uint8Array;
                toProtoMsg(message: _237.PubKey): _237.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _237.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.PrivKey;
                fromJSON(object: any): _237.PrivKey;
                toJSON(message: _237.PrivKey): unknown;
                fromPartial(object: Partial<_237.PrivKey>): _237.PrivKey;
                fromAmino(object: _237.PrivKeyAmino): _237.PrivKey;
                toAmino(message: _237.PrivKey): _237.PrivKeyAmino;
                fromAminoMsg(object: _237.PrivKeyAminoMsg): _237.PrivKey;
                toAminoMsg(message: _237.PrivKey): _237.PrivKeyAminoMsg;
                fromProtoMsg(message: _237.PrivKeyProtoMsg): _237.PrivKey;
                toProto(message: _237.PrivKey): Uint8Array;
                toProtoMsg(message: _237.PrivKey): _237.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _468.MsgClientImpl;
            QueryClientImpl: typeof _452.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                validatorOutstandingRewards(request: _240.QueryValidatorOutstandingRewardsRequest): Promise<_240.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _240.QueryValidatorCommissionRequest): Promise<_240.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _240.QueryValidatorSlashesRequest): Promise<_240.QueryValidatorSlashesResponse>;
                delegationRewards(request: _240.QueryDelegationRewardsRequest): Promise<_240.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _240.QueryDelegationTotalRewardsRequest): Promise<_240.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _240.QueryDelegatorValidatorsRequest): Promise<_240.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _240.QueryDelegatorWithdrawAddressRequest): Promise<_240.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _240.QueryCommunityPoolRequest): Promise<_240.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _241.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _241.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _241.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _241.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _241.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _241.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _241.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _241.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _241.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _241.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _241.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _241.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _241.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _241.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _241.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _241.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _241.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _241.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _241.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _241.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _241.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _241.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _241.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _241.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _241.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _241.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _241.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _241.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _241.MsgSetWithdrawAddress) => _241.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _241.MsgSetWithdrawAddressAmino) => _241.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _241.MsgWithdrawDelegatorReward) => _241.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _241.MsgWithdrawDelegatorRewardAmino) => _241.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _241.MsgWithdrawValidatorCommission) => _241.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _241.MsgWithdrawValidatorCommissionAmino) => _241.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _241.MsgFundCommunityPool) => _241.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _241.MsgFundCommunityPoolAmino) => _241.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _241.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgSetWithdrawAddress;
                fromJSON(object: any): _241.MsgSetWithdrawAddress;
                toJSON(message: _241.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_241.MsgSetWithdrawAddress>): _241.MsgSetWithdrawAddress;
                fromAmino(object: _241.MsgSetWithdrawAddressAmino): _241.MsgSetWithdrawAddress;
                toAmino(message: _241.MsgSetWithdrawAddress): _241.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _241.MsgSetWithdrawAddressAminoMsg): _241.MsgSetWithdrawAddress;
                toAminoMsg(message: _241.MsgSetWithdrawAddress): _241.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _241.MsgSetWithdrawAddressProtoMsg): _241.MsgSetWithdrawAddress;
                toProto(message: _241.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _241.MsgSetWithdrawAddress): _241.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _241.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _241.MsgSetWithdrawAddressResponse;
                toJSON(_: _241.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_241.MsgSetWithdrawAddressResponse>): _241.MsgSetWithdrawAddressResponse;
                fromAmino(_: _241.MsgSetWithdrawAddressResponseAmino): _241.MsgSetWithdrawAddressResponse;
                toAmino(_: _241.MsgSetWithdrawAddressResponse): _241.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _241.MsgSetWithdrawAddressResponseAminoMsg): _241.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _241.MsgSetWithdrawAddressResponse): _241.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _241.MsgSetWithdrawAddressResponseProtoMsg): _241.MsgSetWithdrawAddressResponse;
                toProto(message: _241.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _241.MsgSetWithdrawAddressResponse): _241.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _241.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _241.MsgWithdrawDelegatorReward;
                toJSON(message: _241.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_241.MsgWithdrawDelegatorReward>): _241.MsgWithdrawDelegatorReward;
                fromAmino(object: _241.MsgWithdrawDelegatorRewardAmino): _241.MsgWithdrawDelegatorReward;
                toAmino(message: _241.MsgWithdrawDelegatorReward): _241.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _241.MsgWithdrawDelegatorRewardAminoMsg): _241.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _241.MsgWithdrawDelegatorReward): _241.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _241.MsgWithdrawDelegatorRewardProtoMsg): _241.MsgWithdrawDelegatorReward;
                toProto(message: _241.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _241.MsgWithdrawDelegatorReward): _241.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _241.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _241.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _241.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_241.MsgWithdrawDelegatorRewardResponse>): _241.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _241.MsgWithdrawDelegatorRewardResponseAmino): _241.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _241.MsgWithdrawDelegatorRewardResponse): _241.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _241.MsgWithdrawDelegatorRewardResponseAminoMsg): _241.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _241.MsgWithdrawDelegatorRewardResponse): _241.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _241.MsgWithdrawDelegatorRewardResponseProtoMsg): _241.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _241.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _241.MsgWithdrawDelegatorRewardResponse): _241.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _241.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _241.MsgWithdrawValidatorCommission;
                toJSON(message: _241.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_241.MsgWithdrawValidatorCommission>): _241.MsgWithdrawValidatorCommission;
                fromAmino(object: _241.MsgWithdrawValidatorCommissionAmino): _241.MsgWithdrawValidatorCommission;
                toAmino(message: _241.MsgWithdrawValidatorCommission): _241.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _241.MsgWithdrawValidatorCommissionAminoMsg): _241.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _241.MsgWithdrawValidatorCommission): _241.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _241.MsgWithdrawValidatorCommissionProtoMsg): _241.MsgWithdrawValidatorCommission;
                toProto(message: _241.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _241.MsgWithdrawValidatorCommission): _241.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _241.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _241.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _241.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_241.MsgWithdrawValidatorCommissionResponse>): _241.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _241.MsgWithdrawValidatorCommissionResponseAmino): _241.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _241.MsgWithdrawValidatorCommissionResponse): _241.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _241.MsgWithdrawValidatorCommissionResponseAminoMsg): _241.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _241.MsgWithdrawValidatorCommissionResponse): _241.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _241.MsgWithdrawValidatorCommissionResponseProtoMsg): _241.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _241.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _241.MsgWithdrawValidatorCommissionResponse): _241.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _241.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgFundCommunityPool;
                fromJSON(object: any): _241.MsgFundCommunityPool;
                toJSON(message: _241.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_241.MsgFundCommunityPool>): _241.MsgFundCommunityPool;
                fromAmino(object: _241.MsgFundCommunityPoolAmino): _241.MsgFundCommunityPool;
                toAmino(message: _241.MsgFundCommunityPool): _241.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _241.MsgFundCommunityPoolAminoMsg): _241.MsgFundCommunityPool;
                toAminoMsg(message: _241.MsgFundCommunityPool): _241.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _241.MsgFundCommunityPoolProtoMsg): _241.MsgFundCommunityPool;
                toProto(message: _241.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _241.MsgFundCommunityPool): _241.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _241.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _241.MsgFundCommunityPoolResponse;
                toJSON(_: _241.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_241.MsgFundCommunityPoolResponse>): _241.MsgFundCommunityPoolResponse;
                fromAmino(_: _241.MsgFundCommunityPoolResponseAmino): _241.MsgFundCommunityPoolResponse;
                toAmino(_: _241.MsgFundCommunityPoolResponse): _241.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _241.MsgFundCommunityPoolResponseAminoMsg): _241.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _241.MsgFundCommunityPoolResponse): _241.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _241.MsgFundCommunityPoolResponseProtoMsg): _241.MsgFundCommunityPoolResponse;
                toProto(message: _241.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _241.MsgFundCommunityPoolResponse): _241.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _240.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryParamsRequest;
                fromJSON(_: any): _240.QueryParamsRequest;
                toJSON(_: _240.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_240.QueryParamsRequest>): _240.QueryParamsRequest;
                fromAmino(_: _240.QueryParamsRequestAmino): _240.QueryParamsRequest;
                toAmino(_: _240.QueryParamsRequest): _240.QueryParamsRequestAmino;
                fromAminoMsg(object: _240.QueryParamsRequestAminoMsg): _240.QueryParamsRequest;
                toAminoMsg(message: _240.QueryParamsRequest): _240.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryParamsRequestProtoMsg): _240.QueryParamsRequest;
                toProto(message: _240.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryParamsRequest): _240.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _240.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryParamsResponse;
                fromJSON(object: any): _240.QueryParamsResponse;
                toJSON(message: _240.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_240.QueryParamsResponse>): _240.QueryParamsResponse;
                fromAmino(object: _240.QueryParamsResponseAmino): _240.QueryParamsResponse;
                toAmino(message: _240.QueryParamsResponse): _240.QueryParamsResponseAmino;
                fromAminoMsg(object: _240.QueryParamsResponseAminoMsg): _240.QueryParamsResponse;
                toAminoMsg(message: _240.QueryParamsResponse): _240.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryParamsResponseProtoMsg): _240.QueryParamsResponse;
                toProto(message: _240.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryParamsResponse): _240.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _240.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _240.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _240.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_240.QueryValidatorOutstandingRewardsRequest>): _240.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _240.QueryValidatorOutstandingRewardsRequestAmino): _240.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _240.QueryValidatorOutstandingRewardsRequest): _240.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _240.QueryValidatorOutstandingRewardsRequestAminoMsg): _240.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _240.QueryValidatorOutstandingRewardsRequest): _240.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorOutstandingRewardsRequestProtoMsg): _240.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _240.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorOutstandingRewardsRequest): _240.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _240.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _240.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _240.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_240.QueryValidatorOutstandingRewardsResponse>): _240.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _240.QueryValidatorOutstandingRewardsResponseAmino): _240.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _240.QueryValidatorOutstandingRewardsResponse): _240.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _240.QueryValidatorOutstandingRewardsResponseAminoMsg): _240.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _240.QueryValidatorOutstandingRewardsResponse): _240.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorOutstandingRewardsResponseProtoMsg): _240.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _240.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorOutstandingRewardsResponse): _240.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _240.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorCommissionRequest;
                fromJSON(object: any): _240.QueryValidatorCommissionRequest;
                toJSON(message: _240.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_240.QueryValidatorCommissionRequest>): _240.QueryValidatorCommissionRequest;
                fromAmino(object: _240.QueryValidatorCommissionRequestAmino): _240.QueryValidatorCommissionRequest;
                toAmino(message: _240.QueryValidatorCommissionRequest): _240.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _240.QueryValidatorCommissionRequestAminoMsg): _240.QueryValidatorCommissionRequest;
                toAminoMsg(message: _240.QueryValidatorCommissionRequest): _240.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorCommissionRequestProtoMsg): _240.QueryValidatorCommissionRequest;
                toProto(message: _240.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorCommissionRequest): _240.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _240.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorCommissionResponse;
                fromJSON(object: any): _240.QueryValidatorCommissionResponse;
                toJSON(message: _240.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_240.QueryValidatorCommissionResponse>): _240.QueryValidatorCommissionResponse;
                fromAmino(object: _240.QueryValidatorCommissionResponseAmino): _240.QueryValidatorCommissionResponse;
                toAmino(message: _240.QueryValidatorCommissionResponse): _240.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _240.QueryValidatorCommissionResponseAminoMsg): _240.QueryValidatorCommissionResponse;
                toAminoMsg(message: _240.QueryValidatorCommissionResponse): _240.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorCommissionResponseProtoMsg): _240.QueryValidatorCommissionResponse;
                toProto(message: _240.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorCommissionResponse): _240.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _240.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorSlashesRequest;
                fromJSON(object: any): _240.QueryValidatorSlashesRequest;
                toJSON(message: _240.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_240.QueryValidatorSlashesRequest>): _240.QueryValidatorSlashesRequest;
                fromAmino(object: _240.QueryValidatorSlashesRequestAmino): _240.QueryValidatorSlashesRequest;
                toAmino(message: _240.QueryValidatorSlashesRequest): _240.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _240.QueryValidatorSlashesRequestAminoMsg): _240.QueryValidatorSlashesRequest;
                toAminoMsg(message: _240.QueryValidatorSlashesRequest): _240.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorSlashesRequestProtoMsg): _240.QueryValidatorSlashesRequest;
                toProto(message: _240.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorSlashesRequest): _240.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _240.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryValidatorSlashesResponse;
                fromJSON(object: any): _240.QueryValidatorSlashesResponse;
                toJSON(message: _240.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_240.QueryValidatorSlashesResponse>): _240.QueryValidatorSlashesResponse;
                fromAmino(object: _240.QueryValidatorSlashesResponseAmino): _240.QueryValidatorSlashesResponse;
                toAmino(message: _240.QueryValidatorSlashesResponse): _240.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _240.QueryValidatorSlashesResponseAminoMsg): _240.QueryValidatorSlashesResponse;
                toAminoMsg(message: _240.QueryValidatorSlashesResponse): _240.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _240.QueryValidatorSlashesResponseProtoMsg): _240.QueryValidatorSlashesResponse;
                toProto(message: _240.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _240.QueryValidatorSlashesResponse): _240.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _240.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegationRewardsRequest;
                fromJSON(object: any): _240.QueryDelegationRewardsRequest;
                toJSON(message: _240.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_240.QueryDelegationRewardsRequest>): _240.QueryDelegationRewardsRequest;
                fromAmino(object: _240.QueryDelegationRewardsRequestAmino): _240.QueryDelegationRewardsRequest;
                toAmino(message: _240.QueryDelegationRewardsRequest): _240.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _240.QueryDelegationRewardsRequestAminoMsg): _240.QueryDelegationRewardsRequest;
                toAminoMsg(message: _240.QueryDelegationRewardsRequest): _240.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDelegationRewardsRequestProtoMsg): _240.QueryDelegationRewardsRequest;
                toProto(message: _240.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDelegationRewardsRequest): _240.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _240.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegationRewardsResponse;
                fromJSON(object: any): _240.QueryDelegationRewardsResponse;
                toJSON(message: _240.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_240.QueryDelegationRewardsResponse>): _240.QueryDelegationRewardsResponse;
                fromAmino(object: _240.QueryDelegationRewardsResponseAmino): _240.QueryDelegationRewardsResponse;
                toAmino(message: _240.QueryDelegationRewardsResponse): _240.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _240.QueryDelegationRewardsResponseAminoMsg): _240.QueryDelegationRewardsResponse;
                toAminoMsg(message: _240.QueryDelegationRewardsResponse): _240.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDelegationRewardsResponseProtoMsg): _240.QueryDelegationRewardsResponse;
                toProto(message: _240.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDelegationRewardsResponse): _240.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _240.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _240.QueryDelegationTotalRewardsRequest;
                toJSON(message: _240.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_240.QueryDelegationTotalRewardsRequest>): _240.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _240.QueryDelegationTotalRewardsRequestAmino): _240.QueryDelegationTotalRewardsRequest;
                toAmino(message: _240.QueryDelegationTotalRewardsRequest): _240.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _240.QueryDelegationTotalRewardsRequestAminoMsg): _240.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _240.QueryDelegationTotalRewardsRequest): _240.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDelegationTotalRewardsRequestProtoMsg): _240.QueryDelegationTotalRewardsRequest;
                toProto(message: _240.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDelegationTotalRewardsRequest): _240.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _240.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _240.QueryDelegationTotalRewardsResponse;
                toJSON(message: _240.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_240.QueryDelegationTotalRewardsResponse>): _240.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _240.QueryDelegationTotalRewardsResponseAmino): _240.QueryDelegationTotalRewardsResponse;
                toAmino(message: _240.QueryDelegationTotalRewardsResponse): _240.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _240.QueryDelegationTotalRewardsResponseAminoMsg): _240.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _240.QueryDelegationTotalRewardsResponse): _240.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDelegationTotalRewardsResponseProtoMsg): _240.QueryDelegationTotalRewardsResponse;
                toProto(message: _240.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDelegationTotalRewardsResponse): _240.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _240.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _240.QueryDelegatorValidatorsRequest;
                toJSON(message: _240.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_240.QueryDelegatorValidatorsRequest>): _240.QueryDelegatorValidatorsRequest;
                fromAmino(object: _240.QueryDelegatorValidatorsRequestAmino): _240.QueryDelegatorValidatorsRequest;
                toAmino(message: _240.QueryDelegatorValidatorsRequest): _240.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _240.QueryDelegatorValidatorsRequestAminoMsg): _240.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _240.QueryDelegatorValidatorsRequest): _240.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDelegatorValidatorsRequestProtoMsg): _240.QueryDelegatorValidatorsRequest;
                toProto(message: _240.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDelegatorValidatorsRequest): _240.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _240.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _240.QueryDelegatorValidatorsResponse;
                toJSON(message: _240.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_240.QueryDelegatorValidatorsResponse>): _240.QueryDelegatorValidatorsResponse;
                fromAmino(object: _240.QueryDelegatorValidatorsResponseAmino): _240.QueryDelegatorValidatorsResponse;
                toAmino(message: _240.QueryDelegatorValidatorsResponse): _240.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _240.QueryDelegatorValidatorsResponseAminoMsg): _240.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _240.QueryDelegatorValidatorsResponse): _240.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDelegatorValidatorsResponseProtoMsg): _240.QueryDelegatorValidatorsResponse;
                toProto(message: _240.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDelegatorValidatorsResponse): _240.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _240.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _240.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _240.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_240.QueryDelegatorWithdrawAddressRequest>): _240.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _240.QueryDelegatorWithdrawAddressRequestAmino): _240.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _240.QueryDelegatorWithdrawAddressRequest): _240.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _240.QueryDelegatorWithdrawAddressRequestAminoMsg): _240.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _240.QueryDelegatorWithdrawAddressRequest): _240.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDelegatorWithdrawAddressRequestProtoMsg): _240.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _240.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDelegatorWithdrawAddressRequest): _240.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _240.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _240.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _240.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_240.QueryDelegatorWithdrawAddressResponse>): _240.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _240.QueryDelegatorWithdrawAddressResponseAmino): _240.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _240.QueryDelegatorWithdrawAddressResponse): _240.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _240.QueryDelegatorWithdrawAddressResponseAminoMsg): _240.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _240.QueryDelegatorWithdrawAddressResponse): _240.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDelegatorWithdrawAddressResponseProtoMsg): _240.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _240.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDelegatorWithdrawAddressResponse): _240.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _240.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryCommunityPoolRequest;
                fromJSON(_: any): _240.QueryCommunityPoolRequest;
                toJSON(_: _240.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_240.QueryCommunityPoolRequest>): _240.QueryCommunityPoolRequest;
                fromAmino(_: _240.QueryCommunityPoolRequestAmino): _240.QueryCommunityPoolRequest;
                toAmino(_: _240.QueryCommunityPoolRequest): _240.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _240.QueryCommunityPoolRequestAminoMsg): _240.QueryCommunityPoolRequest;
                toAminoMsg(message: _240.QueryCommunityPoolRequest): _240.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _240.QueryCommunityPoolRequestProtoMsg): _240.QueryCommunityPoolRequest;
                toProto(message: _240.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _240.QueryCommunityPoolRequest): _240.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _240.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryCommunityPoolResponse;
                fromJSON(object: any): _240.QueryCommunityPoolResponse;
                toJSON(message: _240.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_240.QueryCommunityPoolResponse>): _240.QueryCommunityPoolResponse;
                fromAmino(object: _240.QueryCommunityPoolResponseAmino): _240.QueryCommunityPoolResponse;
                toAmino(message: _240.QueryCommunityPoolResponse): _240.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _240.QueryCommunityPoolResponseAminoMsg): _240.QueryCommunityPoolResponse;
                toAminoMsg(message: _240.QueryCommunityPoolResponse): _240.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _240.QueryCommunityPoolResponseProtoMsg): _240.QueryCommunityPoolResponse;
                toProto(message: _240.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _240.QueryCommunityPoolResponse): _240.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _239.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DelegatorWithdrawInfo;
                fromJSON(object: any): _239.DelegatorWithdrawInfo;
                toJSON(message: _239.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_239.DelegatorWithdrawInfo>): _239.DelegatorWithdrawInfo;
                fromAmino(object: _239.DelegatorWithdrawInfoAmino): _239.DelegatorWithdrawInfo;
                toAmino(message: _239.DelegatorWithdrawInfo): _239.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _239.DelegatorWithdrawInfoAminoMsg): _239.DelegatorWithdrawInfo;
                toAminoMsg(message: _239.DelegatorWithdrawInfo): _239.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _239.DelegatorWithdrawInfoProtoMsg): _239.DelegatorWithdrawInfo;
                toProto(message: _239.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _239.DelegatorWithdrawInfo): _239.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _239.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _239.ValidatorOutstandingRewardsRecord;
                toJSON(message: _239.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_239.ValidatorOutstandingRewardsRecord>): _239.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _239.ValidatorOutstandingRewardsRecordAmino): _239.ValidatorOutstandingRewardsRecord;
                toAmino(message: _239.ValidatorOutstandingRewardsRecord): _239.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _239.ValidatorOutstandingRewardsRecordAminoMsg): _239.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _239.ValidatorOutstandingRewardsRecord): _239.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _239.ValidatorOutstandingRewardsRecordProtoMsg): _239.ValidatorOutstandingRewardsRecord;
                toProto(message: _239.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _239.ValidatorOutstandingRewardsRecord): _239.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _239.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _239.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _239.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_239.ValidatorAccumulatedCommissionRecord>): _239.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _239.ValidatorAccumulatedCommissionRecordAmino): _239.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _239.ValidatorAccumulatedCommissionRecord): _239.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _239.ValidatorAccumulatedCommissionRecordAminoMsg): _239.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _239.ValidatorAccumulatedCommissionRecord): _239.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _239.ValidatorAccumulatedCommissionRecordProtoMsg): _239.ValidatorAccumulatedCommissionRecord;
                toProto(message: _239.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _239.ValidatorAccumulatedCommissionRecord): _239.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _239.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _239.ValidatorHistoricalRewardsRecord;
                toJSON(message: _239.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_239.ValidatorHistoricalRewardsRecord>): _239.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _239.ValidatorHistoricalRewardsRecordAmino): _239.ValidatorHistoricalRewardsRecord;
                toAmino(message: _239.ValidatorHistoricalRewardsRecord): _239.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _239.ValidatorHistoricalRewardsRecordAminoMsg): _239.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _239.ValidatorHistoricalRewardsRecord): _239.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _239.ValidatorHistoricalRewardsRecordProtoMsg): _239.ValidatorHistoricalRewardsRecord;
                toProto(message: _239.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _239.ValidatorHistoricalRewardsRecord): _239.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _239.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _239.ValidatorCurrentRewardsRecord;
                toJSON(message: _239.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_239.ValidatorCurrentRewardsRecord>): _239.ValidatorCurrentRewardsRecord;
                fromAmino(object: _239.ValidatorCurrentRewardsRecordAmino): _239.ValidatorCurrentRewardsRecord;
                toAmino(message: _239.ValidatorCurrentRewardsRecord): _239.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _239.ValidatorCurrentRewardsRecordAminoMsg): _239.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _239.ValidatorCurrentRewardsRecord): _239.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _239.ValidatorCurrentRewardsRecordProtoMsg): _239.ValidatorCurrentRewardsRecord;
                toProto(message: _239.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _239.ValidatorCurrentRewardsRecord): _239.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _239.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DelegatorStartingInfoRecord;
                fromJSON(object: any): _239.DelegatorStartingInfoRecord;
                toJSON(message: _239.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_239.DelegatorStartingInfoRecord>): _239.DelegatorStartingInfoRecord;
                fromAmino(object: _239.DelegatorStartingInfoRecordAmino): _239.DelegatorStartingInfoRecord;
                toAmino(message: _239.DelegatorStartingInfoRecord): _239.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _239.DelegatorStartingInfoRecordAminoMsg): _239.DelegatorStartingInfoRecord;
                toAminoMsg(message: _239.DelegatorStartingInfoRecord): _239.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _239.DelegatorStartingInfoRecordProtoMsg): _239.DelegatorStartingInfoRecord;
                toProto(message: _239.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _239.DelegatorStartingInfoRecord): _239.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _239.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.ValidatorSlashEventRecord;
                fromJSON(object: any): _239.ValidatorSlashEventRecord;
                toJSON(message: _239.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_239.ValidatorSlashEventRecord>): _239.ValidatorSlashEventRecord;
                fromAmino(object: _239.ValidatorSlashEventRecordAmino): _239.ValidatorSlashEventRecord;
                toAmino(message: _239.ValidatorSlashEventRecord): _239.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _239.ValidatorSlashEventRecordAminoMsg): _239.ValidatorSlashEventRecord;
                toAminoMsg(message: _239.ValidatorSlashEventRecord): _239.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _239.ValidatorSlashEventRecordProtoMsg): _239.ValidatorSlashEventRecord;
                toProto(message: _239.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _239.ValidatorSlashEventRecord): _239.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _239.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.GenesisState;
                fromJSON(object: any): _239.GenesisState;
                toJSON(message: _239.GenesisState): unknown;
                fromPartial(object: Partial<_239.GenesisState>): _239.GenesisState;
                fromAmino(object: _239.GenesisStateAmino): _239.GenesisState;
                toAmino(message: _239.GenesisState): _239.GenesisStateAmino;
                fromAminoMsg(object: _239.GenesisStateAminoMsg): _239.GenesisState;
                toAminoMsg(message: _239.GenesisState): _239.GenesisStateAminoMsg;
                fromProtoMsg(message: _239.GenesisStateProtoMsg): _239.GenesisState;
                toProto(message: _239.GenesisState): Uint8Array;
                toProtoMsg(message: _239.GenesisState): _239.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _238.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Params;
                fromJSON(object: any): _238.Params;
                toJSON(message: _238.Params): unknown;
                fromPartial(object: Partial<_238.Params>): _238.Params;
                fromAmino(object: _238.ParamsAmino): _238.Params;
                toAmino(message: _238.Params): _238.ParamsAmino;
                fromAminoMsg(object: _238.ParamsAminoMsg): _238.Params;
                toAminoMsg(message: _238.Params): _238.ParamsAminoMsg;
                fromProtoMsg(message: _238.ParamsProtoMsg): _238.Params;
                toProto(message: _238.Params): Uint8Array;
                toProtoMsg(message: _238.Params): _238.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _238.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorHistoricalRewards;
                fromJSON(object: any): _238.ValidatorHistoricalRewards;
                toJSON(message: _238.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_238.ValidatorHistoricalRewards>): _238.ValidatorHistoricalRewards;
                fromAmino(object: _238.ValidatorHistoricalRewardsAmino): _238.ValidatorHistoricalRewards;
                toAmino(message: _238.ValidatorHistoricalRewards): _238.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _238.ValidatorHistoricalRewardsAminoMsg): _238.ValidatorHistoricalRewards;
                toAminoMsg(message: _238.ValidatorHistoricalRewards): _238.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _238.ValidatorHistoricalRewardsProtoMsg): _238.ValidatorHistoricalRewards;
                toProto(message: _238.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _238.ValidatorHistoricalRewards): _238.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _238.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorCurrentRewards;
                fromJSON(object: any): _238.ValidatorCurrentRewards;
                toJSON(message: _238.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_238.ValidatorCurrentRewards>): _238.ValidatorCurrentRewards;
                fromAmino(object: _238.ValidatorCurrentRewardsAmino): _238.ValidatorCurrentRewards;
                toAmino(message: _238.ValidatorCurrentRewards): _238.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _238.ValidatorCurrentRewardsAminoMsg): _238.ValidatorCurrentRewards;
                toAminoMsg(message: _238.ValidatorCurrentRewards): _238.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _238.ValidatorCurrentRewardsProtoMsg): _238.ValidatorCurrentRewards;
                toProto(message: _238.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _238.ValidatorCurrentRewards): _238.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _238.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorAccumulatedCommission;
                fromJSON(object: any): _238.ValidatorAccumulatedCommission;
                toJSON(message: _238.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_238.ValidatorAccumulatedCommission>): _238.ValidatorAccumulatedCommission;
                fromAmino(object: _238.ValidatorAccumulatedCommissionAmino): _238.ValidatorAccumulatedCommission;
                toAmino(message: _238.ValidatorAccumulatedCommission): _238.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _238.ValidatorAccumulatedCommissionAminoMsg): _238.ValidatorAccumulatedCommission;
                toAminoMsg(message: _238.ValidatorAccumulatedCommission): _238.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _238.ValidatorAccumulatedCommissionProtoMsg): _238.ValidatorAccumulatedCommission;
                toProto(message: _238.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _238.ValidatorAccumulatedCommission): _238.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _238.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorOutstandingRewards;
                fromJSON(object: any): _238.ValidatorOutstandingRewards;
                toJSON(message: _238.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_238.ValidatorOutstandingRewards>): _238.ValidatorOutstandingRewards;
                fromAmino(object: _238.ValidatorOutstandingRewardsAmino): _238.ValidatorOutstandingRewards;
                toAmino(message: _238.ValidatorOutstandingRewards): _238.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _238.ValidatorOutstandingRewardsAminoMsg): _238.ValidatorOutstandingRewards;
                toAminoMsg(message: _238.ValidatorOutstandingRewards): _238.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _238.ValidatorOutstandingRewardsProtoMsg): _238.ValidatorOutstandingRewards;
                toProto(message: _238.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _238.ValidatorOutstandingRewards): _238.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _238.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorSlashEvent;
                fromJSON(object: any): _238.ValidatorSlashEvent;
                toJSON(message: _238.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_238.ValidatorSlashEvent>): _238.ValidatorSlashEvent;
                fromAmino(object: _238.ValidatorSlashEventAmino): _238.ValidatorSlashEvent;
                toAmino(message: _238.ValidatorSlashEvent): _238.ValidatorSlashEventAmino;
                fromAminoMsg(object: _238.ValidatorSlashEventAminoMsg): _238.ValidatorSlashEvent;
                toAminoMsg(message: _238.ValidatorSlashEvent): _238.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _238.ValidatorSlashEventProtoMsg): _238.ValidatorSlashEvent;
                toProto(message: _238.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _238.ValidatorSlashEvent): _238.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _238.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.ValidatorSlashEvents;
                fromJSON(object: any): _238.ValidatorSlashEvents;
                toJSON(message: _238.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_238.ValidatorSlashEvents>): _238.ValidatorSlashEvents;
                fromAmino(object: _238.ValidatorSlashEventsAmino): _238.ValidatorSlashEvents;
                toAmino(message: _238.ValidatorSlashEvents): _238.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _238.ValidatorSlashEventsAminoMsg): _238.ValidatorSlashEvents;
                toAminoMsg(message: _238.ValidatorSlashEvents): _238.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _238.ValidatorSlashEventsProtoMsg): _238.ValidatorSlashEvents;
                toProto(message: _238.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _238.ValidatorSlashEvents): _238.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _238.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.FeePool;
                fromJSON(object: any): _238.FeePool;
                toJSON(message: _238.FeePool): unknown;
                fromPartial(object: Partial<_238.FeePool>): _238.FeePool;
                fromAmino(object: _238.FeePoolAmino): _238.FeePool;
                toAmino(message: _238.FeePool): _238.FeePoolAmino;
                fromAminoMsg(object: _238.FeePoolAminoMsg): _238.FeePool;
                toAminoMsg(message: _238.FeePool): _238.FeePoolAminoMsg;
                fromProtoMsg(message: _238.FeePoolProtoMsg): _238.FeePool;
                toProto(message: _238.FeePool): Uint8Array;
                toProtoMsg(message: _238.FeePool): _238.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _238.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.CommunityPoolSpendProposal;
                fromJSON(object: any): _238.CommunityPoolSpendProposal;
                toJSON(message: _238.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_238.CommunityPoolSpendProposal>): _238.CommunityPoolSpendProposal;
                fromAmino(object: _238.CommunityPoolSpendProposalAmino): _238.CommunityPoolSpendProposal;
                toAmino(message: _238.CommunityPoolSpendProposal): _238.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _238.CommunityPoolSpendProposalAminoMsg): _238.CommunityPoolSpendProposal;
                toAminoMsg(message: _238.CommunityPoolSpendProposal): _238.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _238.CommunityPoolSpendProposalProtoMsg): _238.CommunityPoolSpendProposal;
                toProto(message: _238.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _238.CommunityPoolSpendProposal): _238.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _238.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DelegatorStartingInfo;
                fromJSON(object: any): _238.DelegatorStartingInfo;
                toJSON(message: _238.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_238.DelegatorStartingInfo>): _238.DelegatorStartingInfo;
                fromAmino(object: _238.DelegatorStartingInfoAmino): _238.DelegatorStartingInfo;
                toAmino(message: _238.DelegatorStartingInfo): _238.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _238.DelegatorStartingInfoAminoMsg): _238.DelegatorStartingInfo;
                toAminoMsg(message: _238.DelegatorStartingInfo): _238.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _238.DelegatorStartingInfoProtoMsg): _238.DelegatorStartingInfo;
                toProto(message: _238.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _238.DelegatorStartingInfo): _238.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _238.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.DelegationDelegatorReward;
                fromJSON(object: any): _238.DelegationDelegatorReward;
                toJSON(message: _238.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_238.DelegationDelegatorReward>): _238.DelegationDelegatorReward;
                fromAmino(object: _238.DelegationDelegatorRewardAmino): _238.DelegationDelegatorReward;
                toAmino(message: _238.DelegationDelegatorReward): _238.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _238.DelegationDelegatorRewardAminoMsg): _238.DelegationDelegatorReward;
                toAminoMsg(message: _238.DelegationDelegatorReward): _238.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _238.DelegationDelegatorRewardProtoMsg): _238.DelegationDelegatorReward;
                toProto(message: _238.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _238.DelegationDelegatorReward): _238.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _238.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _238.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _238.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_238.CommunityPoolSpendProposalWithDeposit>): _238.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _238.CommunityPoolSpendProposalWithDepositAmino): _238.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _238.CommunityPoolSpendProposalWithDeposit): _238.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _238.CommunityPoolSpendProposalWithDepositAminoMsg): _238.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _238.CommunityPoolSpendProposalWithDeposit): _238.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _238.CommunityPoolSpendProposalWithDepositProtoMsg): _238.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _238.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _238.CommunityPoolSpendProposalWithDeposit): _238.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _469.MsgClientImpl;
            QueryClientImpl: typeof _453.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _244.QueryEvidenceRequest): Promise<_244.QueryEvidenceResponse>;
                allEvidence(request?: _244.QueryAllEvidenceRequest): Promise<_244.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _245.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _245.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _245.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _245.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _245.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _245.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _245.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _245.MsgSubmitEvidence) => _245.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _245.MsgSubmitEvidenceAmino) => _245.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _245.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgSubmitEvidence;
                fromJSON(object: any): _245.MsgSubmitEvidence;
                toJSON(message: _245.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_245.MsgSubmitEvidence>): _245.MsgSubmitEvidence;
                fromAmino(object: _245.MsgSubmitEvidenceAmino): _245.MsgSubmitEvidence;
                toAmino(message: _245.MsgSubmitEvidence): _245.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _245.MsgSubmitEvidenceAminoMsg): _245.MsgSubmitEvidence;
                toAminoMsg(message: _245.MsgSubmitEvidence): _245.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _245.MsgSubmitEvidenceProtoMsg): _245.MsgSubmitEvidence;
                toProto(message: _245.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _245.MsgSubmitEvidence): _245.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _245.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _245.MsgSubmitEvidenceResponse;
                toJSON(message: _245.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_245.MsgSubmitEvidenceResponse>): _245.MsgSubmitEvidenceResponse;
                fromAmino(object: _245.MsgSubmitEvidenceResponseAmino): _245.MsgSubmitEvidenceResponse;
                toAmino(message: _245.MsgSubmitEvidenceResponse): _245.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _245.MsgSubmitEvidenceResponseAminoMsg): _245.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _245.MsgSubmitEvidenceResponse): _245.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _245.MsgSubmitEvidenceResponseProtoMsg): _245.MsgSubmitEvidenceResponse;
                toProto(message: _245.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _245.MsgSubmitEvidenceResponse): _245.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                encode(message: _244.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryEvidenceRequest;
                fromJSON(object: any): _244.QueryEvidenceRequest;
                toJSON(message: _244.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_244.QueryEvidenceRequest>): _244.QueryEvidenceRequest;
                fromAmino(object: _244.QueryEvidenceRequestAmino): _244.QueryEvidenceRequest;
                toAmino(message: _244.QueryEvidenceRequest): _244.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _244.QueryEvidenceRequestAminoMsg): _244.QueryEvidenceRequest;
                toAminoMsg(message: _244.QueryEvidenceRequest): _244.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _244.QueryEvidenceRequestProtoMsg): _244.QueryEvidenceRequest;
                toProto(message: _244.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _244.QueryEvidenceRequest): _244.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _244.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryEvidenceResponse;
                fromJSON(object: any): _244.QueryEvidenceResponse;
                toJSON(message: _244.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_244.QueryEvidenceResponse>): _244.QueryEvidenceResponse;
                fromAmino(object: _244.QueryEvidenceResponseAmino): _244.QueryEvidenceResponse;
                toAmino(message: _244.QueryEvidenceResponse): _244.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _244.QueryEvidenceResponseAminoMsg): _244.QueryEvidenceResponse;
                toAminoMsg(message: _244.QueryEvidenceResponse): _244.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _244.QueryEvidenceResponseProtoMsg): _244.QueryEvidenceResponse;
                toProto(message: _244.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _244.QueryEvidenceResponse): _244.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _244.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryAllEvidenceRequest;
                fromJSON(object: any): _244.QueryAllEvidenceRequest;
                toJSON(message: _244.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_244.QueryAllEvidenceRequest>): _244.QueryAllEvidenceRequest;
                fromAmino(object: _244.QueryAllEvidenceRequestAmino): _244.QueryAllEvidenceRequest;
                toAmino(message: _244.QueryAllEvidenceRequest): _244.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _244.QueryAllEvidenceRequestAminoMsg): _244.QueryAllEvidenceRequest;
                toAminoMsg(message: _244.QueryAllEvidenceRequest): _244.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _244.QueryAllEvidenceRequestProtoMsg): _244.QueryAllEvidenceRequest;
                toProto(message: _244.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _244.QueryAllEvidenceRequest): _244.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _244.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryAllEvidenceResponse;
                fromJSON(object: any): _244.QueryAllEvidenceResponse;
                toJSON(message: _244.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_244.QueryAllEvidenceResponse>): _244.QueryAllEvidenceResponse;
                fromAmino(object: _244.QueryAllEvidenceResponseAmino): _244.QueryAllEvidenceResponse;
                toAmino(message: _244.QueryAllEvidenceResponse): _244.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _244.QueryAllEvidenceResponseAminoMsg): _244.QueryAllEvidenceResponse;
                toAminoMsg(message: _244.QueryAllEvidenceResponse): _244.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _244.QueryAllEvidenceResponseProtoMsg): _244.QueryAllEvidenceResponse;
                toProto(message: _244.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _244.QueryAllEvidenceResponse): _244.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _243.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _243.GenesisState;
                fromJSON(object: any): _243.GenesisState;
                toJSON(message: _243.GenesisState): unknown;
                fromPartial(object: Partial<_243.GenesisState>): _243.GenesisState;
                fromAmino(object: _243.GenesisStateAmino): _243.GenesisState;
                toAmino(message: _243.GenesisState): _243.GenesisStateAmino;
                fromAminoMsg(object: _243.GenesisStateAminoMsg): _243.GenesisState;
                toAminoMsg(message: _243.GenesisState): _243.GenesisStateAminoMsg;
                fromProtoMsg(message: _243.GenesisStateProtoMsg): _243.GenesisState;
                toProto(message: _243.GenesisState): Uint8Array;
                toProtoMsg(message: _243.GenesisState): _243.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _242.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.Equivocation;
                fromJSON(object: any): _242.Equivocation;
                toJSON(message: _242.Equivocation): unknown;
                fromPartial(object: Partial<_242.Equivocation>): _242.Equivocation;
                fromAmino(object: _242.EquivocationAmino): _242.Equivocation;
                toAmino(message: _242.Equivocation): _242.EquivocationAmino;
                fromAminoMsg(object: _242.EquivocationAminoMsg): _242.Equivocation;
                toAminoMsg(message: _242.Equivocation): _242.EquivocationAminoMsg;
                fromProtoMsg(message: _242.EquivocationProtoMsg): _242.Equivocation;
                toProto(message: _242.Equivocation): Uint8Array;
                toProtoMsg(message: _242.Equivocation): _242.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _470.MsgClientImpl;
            QueryClientImpl: typeof _454.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _248.QueryAllowanceRequest): Promise<_248.QueryAllowanceResponse>;
                allowances(request: _248.QueryAllowancesRequest): Promise<_248.QueryAllowancesResponse>;
                allowancesByGranter(request: _248.QueryAllowancesByGranterRequest): Promise<_248.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _249.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _249.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _249.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _249.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _249.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _249.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _249.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _249.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _249.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _249.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _249.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _249.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _249.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _249.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _249.MsgGrantAllowance) => _249.MsgGrantAllowanceAmino;
                    fromAmino: (object: _249.MsgGrantAllowanceAmino) => _249.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _249.MsgRevokeAllowance) => _249.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _249.MsgRevokeAllowanceAmino) => _249.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _249.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgGrantAllowance;
                fromJSON(object: any): _249.MsgGrantAllowance;
                toJSON(message: _249.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_249.MsgGrantAllowance>): _249.MsgGrantAllowance;
                fromAmino(object: _249.MsgGrantAllowanceAmino): _249.MsgGrantAllowance;
                toAmino(message: _249.MsgGrantAllowance): _249.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _249.MsgGrantAllowanceAminoMsg): _249.MsgGrantAllowance;
                toAminoMsg(message: _249.MsgGrantAllowance): _249.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _249.MsgGrantAllowanceProtoMsg): _249.MsgGrantAllowance;
                toProto(message: _249.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _249.MsgGrantAllowance): _249.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _249.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgGrantAllowanceResponse;
                fromJSON(_: any): _249.MsgGrantAllowanceResponse;
                toJSON(_: _249.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_249.MsgGrantAllowanceResponse>): _249.MsgGrantAllowanceResponse;
                fromAmino(_: _249.MsgGrantAllowanceResponseAmino): _249.MsgGrantAllowanceResponse;
                toAmino(_: _249.MsgGrantAllowanceResponse): _249.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _249.MsgGrantAllowanceResponseAminoMsg): _249.MsgGrantAllowanceResponse;
                toAminoMsg(message: _249.MsgGrantAllowanceResponse): _249.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _249.MsgGrantAllowanceResponseProtoMsg): _249.MsgGrantAllowanceResponse;
                toProto(message: _249.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _249.MsgGrantAllowanceResponse): _249.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _249.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgRevokeAllowance;
                fromJSON(object: any): _249.MsgRevokeAllowance;
                toJSON(message: _249.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_249.MsgRevokeAllowance>): _249.MsgRevokeAllowance;
                fromAmino(object: _249.MsgRevokeAllowanceAmino): _249.MsgRevokeAllowance;
                toAmino(message: _249.MsgRevokeAllowance): _249.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _249.MsgRevokeAllowanceAminoMsg): _249.MsgRevokeAllowance;
                toAminoMsg(message: _249.MsgRevokeAllowance): _249.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _249.MsgRevokeAllowanceProtoMsg): _249.MsgRevokeAllowance;
                toProto(message: _249.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _249.MsgRevokeAllowance): _249.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _249.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _249.MsgRevokeAllowanceResponse;
                toJSON(_: _249.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_249.MsgRevokeAllowanceResponse>): _249.MsgRevokeAllowanceResponse;
                fromAmino(_: _249.MsgRevokeAllowanceResponseAmino): _249.MsgRevokeAllowanceResponse;
                toAmino(_: _249.MsgRevokeAllowanceResponse): _249.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _249.MsgRevokeAllowanceResponseAminoMsg): _249.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _249.MsgRevokeAllowanceResponse): _249.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _249.MsgRevokeAllowanceResponseProtoMsg): _249.MsgRevokeAllowanceResponse;
                toProto(message: _249.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _249.MsgRevokeAllowanceResponse): _249.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                encode(message: _248.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowanceRequest;
                fromJSON(object: any): _248.QueryAllowanceRequest;
                toJSON(message: _248.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_248.QueryAllowanceRequest>): _248.QueryAllowanceRequest;
                fromAmino(object: _248.QueryAllowanceRequestAmino): _248.QueryAllowanceRequest;
                toAmino(message: _248.QueryAllowanceRequest): _248.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _248.QueryAllowanceRequestAminoMsg): _248.QueryAllowanceRequest;
                toAminoMsg(message: _248.QueryAllowanceRequest): _248.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _248.QueryAllowanceRequestProtoMsg): _248.QueryAllowanceRequest;
                toProto(message: _248.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _248.QueryAllowanceRequest): _248.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _248.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowanceResponse;
                fromJSON(object: any): _248.QueryAllowanceResponse;
                toJSON(message: _248.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_248.QueryAllowanceResponse>): _248.QueryAllowanceResponse;
                fromAmino(object: _248.QueryAllowanceResponseAmino): _248.QueryAllowanceResponse;
                toAmino(message: _248.QueryAllowanceResponse): _248.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _248.QueryAllowanceResponseAminoMsg): _248.QueryAllowanceResponse;
                toAminoMsg(message: _248.QueryAllowanceResponse): _248.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _248.QueryAllowanceResponseProtoMsg): _248.QueryAllowanceResponse;
                toProto(message: _248.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _248.QueryAllowanceResponse): _248.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _248.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowancesRequest;
                fromJSON(object: any): _248.QueryAllowancesRequest;
                toJSON(message: _248.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_248.QueryAllowancesRequest>): _248.QueryAllowancesRequest;
                fromAmino(object: _248.QueryAllowancesRequestAmino): _248.QueryAllowancesRequest;
                toAmino(message: _248.QueryAllowancesRequest): _248.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _248.QueryAllowancesRequestAminoMsg): _248.QueryAllowancesRequest;
                toAminoMsg(message: _248.QueryAllowancesRequest): _248.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _248.QueryAllowancesRequestProtoMsg): _248.QueryAllowancesRequest;
                toProto(message: _248.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _248.QueryAllowancesRequest): _248.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _248.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowancesResponse;
                fromJSON(object: any): _248.QueryAllowancesResponse;
                toJSON(message: _248.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_248.QueryAllowancesResponse>): _248.QueryAllowancesResponse;
                fromAmino(object: _248.QueryAllowancesResponseAmino): _248.QueryAllowancesResponse;
                toAmino(message: _248.QueryAllowancesResponse): _248.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _248.QueryAllowancesResponseAminoMsg): _248.QueryAllowancesResponse;
                toAminoMsg(message: _248.QueryAllowancesResponse): _248.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _248.QueryAllowancesResponseProtoMsg): _248.QueryAllowancesResponse;
                toProto(message: _248.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _248.QueryAllowancesResponse): _248.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _248.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _248.QueryAllowancesByGranterRequest;
                toJSON(message: _248.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_248.QueryAllowancesByGranterRequest>): _248.QueryAllowancesByGranterRequest;
                fromAmino(object: _248.QueryAllowancesByGranterRequestAmino): _248.QueryAllowancesByGranterRequest;
                toAmino(message: _248.QueryAllowancesByGranterRequest): _248.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _248.QueryAllowancesByGranterRequestAminoMsg): _248.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _248.QueryAllowancesByGranterRequest): _248.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _248.QueryAllowancesByGranterRequestProtoMsg): _248.QueryAllowancesByGranterRequest;
                toProto(message: _248.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _248.QueryAllowancesByGranterRequest): _248.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _248.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _248.QueryAllowancesByGranterResponse;
                toJSON(message: _248.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_248.QueryAllowancesByGranterResponse>): _248.QueryAllowancesByGranterResponse;
                fromAmino(object: _248.QueryAllowancesByGranterResponseAmino): _248.QueryAllowancesByGranterResponse;
                toAmino(message: _248.QueryAllowancesByGranterResponse): _248.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _248.QueryAllowancesByGranterResponseAminoMsg): _248.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _248.QueryAllowancesByGranterResponse): _248.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _248.QueryAllowancesByGranterResponseProtoMsg): _248.QueryAllowancesByGranterResponse;
                toProto(message: _248.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _248.QueryAllowancesByGranterResponse): _248.QueryAllowancesByGranterResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _247.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _247.GenesisState;
                fromJSON(object: any): _247.GenesisState;
                toJSON(message: _247.GenesisState): unknown;
                fromPartial(object: Partial<_247.GenesisState>): _247.GenesisState;
                fromAmino(object: _247.GenesisStateAmino): _247.GenesisState;
                toAmino(message: _247.GenesisState): _247.GenesisStateAmino;
                fromAminoMsg(object: _247.GenesisStateAminoMsg): _247.GenesisState;
                toAminoMsg(message: _247.GenesisState): _247.GenesisStateAminoMsg;
                fromProtoMsg(message: _247.GenesisStateProtoMsg): _247.GenesisState;
                toProto(message: _247.GenesisState): Uint8Array;
                toProtoMsg(message: _247.GenesisState): _247.GenesisStateProtoMsg;
            };
            BasicAllowance: {
                encode(message: _246.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.BasicAllowance;
                fromJSON(object: any): _246.BasicAllowance;
                toJSON(message: _246.BasicAllowance): unknown;
                fromPartial(object: Partial<_246.BasicAllowance>): _246.BasicAllowance;
                fromAmino(object: _246.BasicAllowanceAmino): _246.BasicAllowance;
                toAmino(message: _246.BasicAllowance): _246.BasicAllowanceAmino;
                fromAminoMsg(object: _246.BasicAllowanceAminoMsg): _246.BasicAllowance;
                toAminoMsg(message: _246.BasicAllowance): _246.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _246.BasicAllowanceProtoMsg): _246.BasicAllowance;
                toProto(message: _246.BasicAllowance): Uint8Array;
                toProtoMsg(message: _246.BasicAllowance): _246.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _246.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.PeriodicAllowance;
                fromJSON(object: any): _246.PeriodicAllowance;
                toJSON(message: _246.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_246.PeriodicAllowance>): _246.PeriodicAllowance;
                fromAmino(object: _246.PeriodicAllowanceAmino): _246.PeriodicAllowance;
                toAmino(message: _246.PeriodicAllowance): _246.PeriodicAllowanceAmino;
                fromAminoMsg(object: _246.PeriodicAllowanceAminoMsg): _246.PeriodicAllowance;
                toAminoMsg(message: _246.PeriodicAllowance): _246.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _246.PeriodicAllowanceProtoMsg): _246.PeriodicAllowance;
                toProto(message: _246.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _246.PeriodicAllowance): _246.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _246.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.AllowedMsgAllowance;
                fromJSON(object: any): _246.AllowedMsgAllowance;
                toJSON(message: _246.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_246.AllowedMsgAllowance>): _246.AllowedMsgAllowance;
                fromAmino(object: _246.AllowedMsgAllowanceAmino): _246.AllowedMsgAllowance;
                toAmino(message: _246.AllowedMsgAllowance): _246.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _246.AllowedMsgAllowanceAminoMsg): _246.AllowedMsgAllowance;
                toAminoMsg(message: _246.AllowedMsgAllowance): _246.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _246.AllowedMsgAllowanceProtoMsg): _246.AllowedMsgAllowance;
                toProto(message: _246.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _246.AllowedMsgAllowance): _246.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _246.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Grant;
                fromJSON(object: any): _246.Grant;
                toJSON(message: _246.Grant): unknown;
                fromPartial(object: Partial<_246.Grant>): _246.Grant;
                fromAmino(object: _246.GrantAmino): _246.Grant;
                toAmino(message: _246.Grant): _246.GrantAmino;
                fromAminoMsg(object: _246.GrantAminoMsg): _246.Grant;
                toAminoMsg(message: _246.Grant): _246.GrantAminoMsg;
                fromProtoMsg(message: _246.GrantProtoMsg): _246.Grant;
                toProto(message: _246.Grant): Uint8Array;
                toProtoMsg(message: _246.Grant): _246.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _250.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.GenesisState;
                fromJSON(object: any): _250.GenesisState;
                toJSON(message: _250.GenesisState): unknown;
                fromPartial(object: Partial<_250.GenesisState>): _250.GenesisState;
                fromAmino(object: _250.GenesisStateAmino): _250.GenesisState;
                toAmino(message: _250.GenesisState): _250.GenesisStateAmino;
                fromAminoMsg(object: _250.GenesisStateAminoMsg): _250.GenesisState;
                toAminoMsg(message: _250.GenesisState): _250.GenesisStateAminoMsg;
                fromProtoMsg(message: _250.GenesisStateProtoMsg): _250.GenesisState;
                toProto(message: _250.GenesisState): Uint8Array;
                toProtoMsg(message: _250.GenesisState): _250.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _471.MsgClientImpl;
            QueryClientImpl: typeof _455.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _253.QueryProposalRequest): Promise<_253.QueryProposalResponse>;
                proposals(request: _253.QueryProposalsRequest): Promise<_253.QueryProposalsResponse>;
                vote(request: _253.QueryVoteRequest): Promise<_253.QueryVoteResponse>;
                votes(request: _253.QueryVotesRequest): Promise<_253.QueryVotesResponse>;
                params(request: _253.QueryParamsRequest): Promise<_253.QueryParamsResponse>;
                deposit(request: _253.QueryDepositRequest): Promise<_253.QueryDepositResponse>;
                deposits(request: _253.QueryDepositsRequest): Promise<_253.QueryDepositsResponse>;
                tallyResult(request: _253.QueryTallyResultRequest): Promise<_253.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _254.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _254.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _254.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _254.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _254.MsgExecLegacyContent;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    voteWeighted(value: _254.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _254.MsgVoteWeighted;
                    };
                    deposit(value: _254.MsgDeposit): {
                        typeUrl: string;
                        value: _254.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _254.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _254.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _254.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _254.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _254.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _254.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _254.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _254.MsgExecLegacyContent;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    voteWeighted(value: _254.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _254.MsgVoteWeighted;
                    };
                    deposit(value: _254.MsgDeposit): {
                        typeUrl: string;
                        value: _254.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _254.MsgSubmitProposal) => _254.MsgSubmitProposalAmino;
                    fromAmino: (object: _254.MsgSubmitProposalAmino) => _254.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _254.MsgExecLegacyContent) => _254.MsgExecLegacyContentAmino;
                    fromAmino: (object: _254.MsgExecLegacyContentAmino) => _254.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _254.MsgVote) => _254.MsgVoteAmino;
                    fromAmino: (object: _254.MsgVoteAmino) => _254.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _254.MsgVoteWeighted) => _254.MsgVoteWeightedAmino;
                    fromAmino: (object: _254.MsgVoteWeightedAmino) => _254.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _254.MsgDeposit) => _254.MsgDepositAmino;
                    fromAmino: (object: _254.MsgDepositAmino) => _254.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _254.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgSubmitProposal;
                fromJSON(object: any): _254.MsgSubmitProposal;
                toJSON(message: _254.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_254.MsgSubmitProposal>): _254.MsgSubmitProposal;
                fromAmino(object: _254.MsgSubmitProposalAmino): _254.MsgSubmitProposal;
                toAmino(message: _254.MsgSubmitProposal): _254.MsgSubmitProposalAmino;
                fromAminoMsg(object: _254.MsgSubmitProposalAminoMsg): _254.MsgSubmitProposal;
                toAminoMsg(message: _254.MsgSubmitProposal): _254.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _254.MsgSubmitProposalProtoMsg): _254.MsgSubmitProposal;
                toProto(message: _254.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _254.MsgSubmitProposal): _254.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _254.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgSubmitProposalResponse;
                fromJSON(object: any): _254.MsgSubmitProposalResponse;
                toJSON(message: _254.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_254.MsgSubmitProposalResponse>): _254.MsgSubmitProposalResponse;
                fromAmino(object: _254.MsgSubmitProposalResponseAmino): _254.MsgSubmitProposalResponse;
                toAmino(message: _254.MsgSubmitProposalResponse): _254.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _254.MsgSubmitProposalResponseAminoMsg): _254.MsgSubmitProposalResponse;
                toAminoMsg(message: _254.MsgSubmitProposalResponse): _254.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _254.MsgSubmitProposalResponseProtoMsg): _254.MsgSubmitProposalResponse;
                toProto(message: _254.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _254.MsgSubmitProposalResponse): _254.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _254.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgExecLegacyContent;
                fromJSON(object: any): _254.MsgExecLegacyContent;
                toJSON(message: _254.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_254.MsgExecLegacyContent>): _254.MsgExecLegacyContent;
                fromAmino(object: _254.MsgExecLegacyContentAmino): _254.MsgExecLegacyContent;
                toAmino(message: _254.MsgExecLegacyContent): _254.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _254.MsgExecLegacyContentAminoMsg): _254.MsgExecLegacyContent;
                toAminoMsg(message: _254.MsgExecLegacyContent): _254.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _254.MsgExecLegacyContentProtoMsg): _254.MsgExecLegacyContent;
                toProto(message: _254.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _254.MsgExecLegacyContent): _254.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _254.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgExecLegacyContentResponse;
                fromJSON(_: any): _254.MsgExecLegacyContentResponse;
                toJSON(_: _254.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_254.MsgExecLegacyContentResponse>): _254.MsgExecLegacyContentResponse;
                fromAmino(_: _254.MsgExecLegacyContentResponseAmino): _254.MsgExecLegacyContentResponse;
                toAmino(_: _254.MsgExecLegacyContentResponse): _254.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _254.MsgExecLegacyContentResponseAminoMsg): _254.MsgExecLegacyContentResponse;
                toAminoMsg(message: _254.MsgExecLegacyContentResponse): _254.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _254.MsgExecLegacyContentResponseProtoMsg): _254.MsgExecLegacyContentResponse;
                toProto(message: _254.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _254.MsgExecLegacyContentResponse): _254.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _254.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgVote;
                fromJSON(object: any): _254.MsgVote;
                toJSON(message: _254.MsgVote): unknown;
                fromPartial(object: Partial<_254.MsgVote>): _254.MsgVote;
                fromAmino(object: _254.MsgVoteAmino): _254.MsgVote;
                toAmino(message: _254.MsgVote): _254.MsgVoteAmino;
                fromAminoMsg(object: _254.MsgVoteAminoMsg): _254.MsgVote;
                toAminoMsg(message: _254.MsgVote): _254.MsgVoteAminoMsg;
                fromProtoMsg(message: _254.MsgVoteProtoMsg): _254.MsgVote;
                toProto(message: _254.MsgVote): Uint8Array;
                toProtoMsg(message: _254.MsgVote): _254.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _254.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgVoteResponse;
                fromJSON(_: any): _254.MsgVoteResponse;
                toJSON(_: _254.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_254.MsgVoteResponse>): _254.MsgVoteResponse;
                fromAmino(_: _254.MsgVoteResponseAmino): _254.MsgVoteResponse;
                toAmino(_: _254.MsgVoteResponse): _254.MsgVoteResponseAmino;
                fromAminoMsg(object: _254.MsgVoteResponseAminoMsg): _254.MsgVoteResponse;
                toAminoMsg(message: _254.MsgVoteResponse): _254.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _254.MsgVoteResponseProtoMsg): _254.MsgVoteResponse;
                toProto(message: _254.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _254.MsgVoteResponse): _254.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _254.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgVoteWeighted;
                fromJSON(object: any): _254.MsgVoteWeighted;
                toJSON(message: _254.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_254.MsgVoteWeighted>): _254.MsgVoteWeighted;
                fromAmino(object: _254.MsgVoteWeightedAmino): _254.MsgVoteWeighted;
                toAmino(message: _254.MsgVoteWeighted): _254.MsgVoteWeightedAmino;
                fromAminoMsg(object: _254.MsgVoteWeightedAminoMsg): _254.MsgVoteWeighted;
                toAminoMsg(message: _254.MsgVoteWeighted): _254.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _254.MsgVoteWeightedProtoMsg): _254.MsgVoteWeighted;
                toProto(message: _254.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _254.MsgVoteWeighted): _254.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _254.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgVoteWeightedResponse;
                fromJSON(_: any): _254.MsgVoteWeightedResponse;
                toJSON(_: _254.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_254.MsgVoteWeightedResponse>): _254.MsgVoteWeightedResponse;
                fromAmino(_: _254.MsgVoteWeightedResponseAmino): _254.MsgVoteWeightedResponse;
                toAmino(_: _254.MsgVoteWeightedResponse): _254.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _254.MsgVoteWeightedResponseAminoMsg): _254.MsgVoteWeightedResponse;
                toAminoMsg(message: _254.MsgVoteWeightedResponse): _254.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _254.MsgVoteWeightedResponseProtoMsg): _254.MsgVoteWeightedResponse;
                toProto(message: _254.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _254.MsgVoteWeightedResponse): _254.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _254.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgDeposit;
                fromJSON(object: any): _254.MsgDeposit;
                toJSON(message: _254.MsgDeposit): unknown;
                fromPartial(object: Partial<_254.MsgDeposit>): _254.MsgDeposit;
                fromAmino(object: _254.MsgDepositAmino): _254.MsgDeposit;
                toAmino(message: _254.MsgDeposit): _254.MsgDepositAmino;
                fromAminoMsg(object: _254.MsgDepositAminoMsg): _254.MsgDeposit;
                toAminoMsg(message: _254.MsgDeposit): _254.MsgDepositAminoMsg;
                fromProtoMsg(message: _254.MsgDepositProtoMsg): _254.MsgDeposit;
                toProto(message: _254.MsgDeposit): Uint8Array;
                toProtoMsg(message: _254.MsgDeposit): _254.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _254.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgDepositResponse;
                fromJSON(_: any): _254.MsgDepositResponse;
                toJSON(_: _254.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_254.MsgDepositResponse>): _254.MsgDepositResponse;
                fromAmino(_: _254.MsgDepositResponseAmino): _254.MsgDepositResponse;
                toAmino(_: _254.MsgDepositResponse): _254.MsgDepositResponseAmino;
                fromAminoMsg(object: _254.MsgDepositResponseAminoMsg): _254.MsgDepositResponse;
                toAminoMsg(message: _254.MsgDepositResponse): _254.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _254.MsgDepositResponseProtoMsg): _254.MsgDepositResponse;
                toProto(message: _254.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _254.MsgDepositResponse): _254.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _253.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalRequest;
                fromJSON(object: any): _253.QueryProposalRequest;
                toJSON(message: _253.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_253.QueryProposalRequest>): _253.QueryProposalRequest;
                fromAmino(object: _253.QueryProposalRequestAmino): _253.QueryProposalRequest;
                toAmino(message: _253.QueryProposalRequest): _253.QueryProposalRequestAmino;
                fromAminoMsg(object: _253.QueryProposalRequestAminoMsg): _253.QueryProposalRequest;
                toAminoMsg(message: _253.QueryProposalRequest): _253.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _253.QueryProposalRequestProtoMsg): _253.QueryProposalRequest;
                toProto(message: _253.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _253.QueryProposalRequest): _253.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _253.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalResponse;
                fromJSON(object: any): _253.QueryProposalResponse;
                toJSON(message: _253.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_253.QueryProposalResponse>): _253.QueryProposalResponse;
                fromAmino(object: _253.QueryProposalResponseAmino): _253.QueryProposalResponse;
                toAmino(message: _253.QueryProposalResponse): _253.QueryProposalResponseAmino;
                fromAminoMsg(object: _253.QueryProposalResponseAminoMsg): _253.QueryProposalResponse;
                toAminoMsg(message: _253.QueryProposalResponse): _253.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _253.QueryProposalResponseProtoMsg): _253.QueryProposalResponse;
                toProto(message: _253.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _253.QueryProposalResponse): _253.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _253.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalsRequest;
                fromJSON(object: any): _253.QueryProposalsRequest;
                toJSON(message: _253.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_253.QueryProposalsRequest>): _253.QueryProposalsRequest;
                fromAmino(object: _253.QueryProposalsRequestAmino): _253.QueryProposalsRequest;
                toAmino(message: _253.QueryProposalsRequest): _253.QueryProposalsRequestAmino;
                fromAminoMsg(object: _253.QueryProposalsRequestAminoMsg): _253.QueryProposalsRequest;
                toAminoMsg(message: _253.QueryProposalsRequest): _253.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _253.QueryProposalsRequestProtoMsg): _253.QueryProposalsRequest;
                toProto(message: _253.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _253.QueryProposalsRequest): _253.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _253.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalsResponse;
                fromJSON(object: any): _253.QueryProposalsResponse;
                toJSON(message: _253.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_253.QueryProposalsResponse>): _253.QueryProposalsResponse;
                fromAmino(object: _253.QueryProposalsResponseAmino): _253.QueryProposalsResponse;
                toAmino(message: _253.QueryProposalsResponse): _253.QueryProposalsResponseAmino;
                fromAminoMsg(object: _253.QueryProposalsResponseAminoMsg): _253.QueryProposalsResponse;
                toAminoMsg(message: _253.QueryProposalsResponse): _253.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _253.QueryProposalsResponseProtoMsg): _253.QueryProposalsResponse;
                toProto(message: _253.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _253.QueryProposalsResponse): _253.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _253.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVoteRequest;
                fromJSON(object: any): _253.QueryVoteRequest;
                toJSON(message: _253.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_253.QueryVoteRequest>): _253.QueryVoteRequest;
                fromAmino(object: _253.QueryVoteRequestAmino): _253.QueryVoteRequest;
                toAmino(message: _253.QueryVoteRequest): _253.QueryVoteRequestAmino;
                fromAminoMsg(object: _253.QueryVoteRequestAminoMsg): _253.QueryVoteRequest;
                toAminoMsg(message: _253.QueryVoteRequest): _253.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _253.QueryVoteRequestProtoMsg): _253.QueryVoteRequest;
                toProto(message: _253.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _253.QueryVoteRequest): _253.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _253.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVoteResponse;
                fromJSON(object: any): _253.QueryVoteResponse;
                toJSON(message: _253.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_253.QueryVoteResponse>): _253.QueryVoteResponse;
                fromAmino(object: _253.QueryVoteResponseAmino): _253.QueryVoteResponse;
                toAmino(message: _253.QueryVoteResponse): _253.QueryVoteResponseAmino;
                fromAminoMsg(object: _253.QueryVoteResponseAminoMsg): _253.QueryVoteResponse;
                toAminoMsg(message: _253.QueryVoteResponse): _253.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _253.QueryVoteResponseProtoMsg): _253.QueryVoteResponse;
                toProto(message: _253.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _253.QueryVoteResponse): _253.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _253.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesRequest;
                fromJSON(object: any): _253.QueryVotesRequest;
                toJSON(message: _253.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_253.QueryVotesRequest>): _253.QueryVotesRequest;
                fromAmino(object: _253.QueryVotesRequestAmino): _253.QueryVotesRequest;
                toAmino(message: _253.QueryVotesRequest): _253.QueryVotesRequestAmino;
                fromAminoMsg(object: _253.QueryVotesRequestAminoMsg): _253.QueryVotesRequest;
                toAminoMsg(message: _253.QueryVotesRequest): _253.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _253.QueryVotesRequestProtoMsg): _253.QueryVotesRequest;
                toProto(message: _253.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _253.QueryVotesRequest): _253.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _253.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesResponse;
                fromJSON(object: any): _253.QueryVotesResponse;
                toJSON(message: _253.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_253.QueryVotesResponse>): _253.QueryVotesResponse;
                fromAmino(object: _253.QueryVotesResponseAmino): _253.QueryVotesResponse;
                toAmino(message: _253.QueryVotesResponse): _253.QueryVotesResponseAmino;
                fromAminoMsg(object: _253.QueryVotesResponseAminoMsg): _253.QueryVotesResponse;
                toAminoMsg(message: _253.QueryVotesResponse): _253.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _253.QueryVotesResponseProtoMsg): _253.QueryVotesResponse;
                toProto(message: _253.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _253.QueryVotesResponse): _253.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _253.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryParamsRequest;
                fromJSON(object: any): _253.QueryParamsRequest;
                toJSON(message: _253.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_253.QueryParamsRequest>): _253.QueryParamsRequest;
                fromAmino(object: _253.QueryParamsRequestAmino): _253.QueryParamsRequest;
                toAmino(message: _253.QueryParamsRequest): _253.QueryParamsRequestAmino;
                fromAminoMsg(object: _253.QueryParamsRequestAminoMsg): _253.QueryParamsRequest;
                toAminoMsg(message: _253.QueryParamsRequest): _253.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _253.QueryParamsRequestProtoMsg): _253.QueryParamsRequest;
                toProto(message: _253.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _253.QueryParamsRequest): _253.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _253.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryParamsResponse;
                fromJSON(object: any): _253.QueryParamsResponse;
                toJSON(message: _253.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_253.QueryParamsResponse>): _253.QueryParamsResponse;
                fromAmino(object: _253.QueryParamsResponseAmino): _253.QueryParamsResponse;
                toAmino(message: _253.QueryParamsResponse): _253.QueryParamsResponseAmino;
                fromAminoMsg(object: _253.QueryParamsResponseAminoMsg): _253.QueryParamsResponse;
                toAminoMsg(message: _253.QueryParamsResponse): _253.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _253.QueryParamsResponseProtoMsg): _253.QueryParamsResponse;
                toProto(message: _253.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _253.QueryParamsResponse): _253.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _253.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryDepositRequest;
                fromJSON(object: any): _253.QueryDepositRequest;
                toJSON(message: _253.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_253.QueryDepositRequest>): _253.QueryDepositRequest;
                fromAmino(object: _253.QueryDepositRequestAmino): _253.QueryDepositRequest;
                toAmino(message: _253.QueryDepositRequest): _253.QueryDepositRequestAmino;
                fromAminoMsg(object: _253.QueryDepositRequestAminoMsg): _253.QueryDepositRequest;
                toAminoMsg(message: _253.QueryDepositRequest): _253.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _253.QueryDepositRequestProtoMsg): _253.QueryDepositRequest;
                toProto(message: _253.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _253.QueryDepositRequest): _253.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _253.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryDepositResponse;
                fromJSON(object: any): _253.QueryDepositResponse;
                toJSON(message: _253.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_253.QueryDepositResponse>): _253.QueryDepositResponse;
                fromAmino(object: _253.QueryDepositResponseAmino): _253.QueryDepositResponse;
                toAmino(message: _253.QueryDepositResponse): _253.QueryDepositResponseAmino;
                fromAminoMsg(object: _253.QueryDepositResponseAminoMsg): _253.QueryDepositResponse;
                toAminoMsg(message: _253.QueryDepositResponse): _253.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _253.QueryDepositResponseProtoMsg): _253.QueryDepositResponse;
                toProto(message: _253.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _253.QueryDepositResponse): _253.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _253.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryDepositsRequest;
                fromJSON(object: any): _253.QueryDepositsRequest;
                toJSON(message: _253.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_253.QueryDepositsRequest>): _253.QueryDepositsRequest;
                fromAmino(object: _253.QueryDepositsRequestAmino): _253.QueryDepositsRequest;
                toAmino(message: _253.QueryDepositsRequest): _253.QueryDepositsRequestAmino;
                fromAminoMsg(object: _253.QueryDepositsRequestAminoMsg): _253.QueryDepositsRequest;
                toAminoMsg(message: _253.QueryDepositsRequest): _253.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _253.QueryDepositsRequestProtoMsg): _253.QueryDepositsRequest;
                toProto(message: _253.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _253.QueryDepositsRequest): _253.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _253.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryDepositsResponse;
                fromJSON(object: any): _253.QueryDepositsResponse;
                toJSON(message: _253.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_253.QueryDepositsResponse>): _253.QueryDepositsResponse;
                fromAmino(object: _253.QueryDepositsResponseAmino): _253.QueryDepositsResponse;
                toAmino(message: _253.QueryDepositsResponse): _253.QueryDepositsResponseAmino;
                fromAminoMsg(object: _253.QueryDepositsResponseAminoMsg): _253.QueryDepositsResponse;
                toAminoMsg(message: _253.QueryDepositsResponse): _253.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _253.QueryDepositsResponseProtoMsg): _253.QueryDepositsResponse;
                toProto(message: _253.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _253.QueryDepositsResponse): _253.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _253.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryTallyResultRequest;
                fromJSON(object: any): _253.QueryTallyResultRequest;
                toJSON(message: _253.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_253.QueryTallyResultRequest>): _253.QueryTallyResultRequest;
                fromAmino(object: _253.QueryTallyResultRequestAmino): _253.QueryTallyResultRequest;
                toAmino(message: _253.QueryTallyResultRequest): _253.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _253.QueryTallyResultRequestAminoMsg): _253.QueryTallyResultRequest;
                toAminoMsg(message: _253.QueryTallyResultRequest): _253.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _253.QueryTallyResultRequestProtoMsg): _253.QueryTallyResultRequest;
                toProto(message: _253.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _253.QueryTallyResultRequest): _253.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _253.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryTallyResultResponse;
                fromJSON(object: any): _253.QueryTallyResultResponse;
                toJSON(message: _253.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_253.QueryTallyResultResponse>): _253.QueryTallyResultResponse;
                fromAmino(object: _253.QueryTallyResultResponseAmino): _253.QueryTallyResultResponse;
                toAmino(message: _253.QueryTallyResultResponse): _253.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _253.QueryTallyResultResponseAminoMsg): _253.QueryTallyResultResponse;
                toAminoMsg(message: _253.QueryTallyResultResponse): _253.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _253.QueryTallyResultResponseProtoMsg): _253.QueryTallyResultResponse;
                toProto(message: _253.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _253.QueryTallyResultResponse): _253.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _252.VoteOption;
            voteOptionToJSON(object: _252.VoteOption): string;
            proposalStatusFromJSON(object: any): _252.ProposalStatus;
            proposalStatusToJSON(object: _252.ProposalStatus): string;
            VoteOption: typeof _252.VoteOption;
            VoteOptionSDKType: typeof _252.VoteOption;
            VoteOptionAmino: typeof _252.VoteOption;
            ProposalStatus: typeof _252.ProposalStatus;
            ProposalStatusSDKType: typeof _252.ProposalStatus;
            ProposalStatusAmino: typeof _252.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _252.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.WeightedVoteOption;
                fromJSON(object: any): _252.WeightedVoteOption;
                toJSON(message: _252.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_252.WeightedVoteOption>): _252.WeightedVoteOption;
                fromAmino(object: _252.WeightedVoteOptionAmino): _252.WeightedVoteOption;
                toAmino(message: _252.WeightedVoteOption): _252.WeightedVoteOptionAmino;
                fromAminoMsg(object: _252.WeightedVoteOptionAminoMsg): _252.WeightedVoteOption;
                toAminoMsg(message: _252.WeightedVoteOption): _252.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _252.WeightedVoteOptionProtoMsg): _252.WeightedVoteOption;
                toProto(message: _252.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _252.WeightedVoteOption): _252.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _252.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.Deposit;
                fromJSON(object: any): _252.Deposit;
                toJSON(message: _252.Deposit): unknown;
                fromPartial(object: Partial<_252.Deposit>): _252.Deposit;
                fromAmino(object: _252.DepositAmino): _252.Deposit;
                toAmino(message: _252.Deposit): _252.DepositAmino;
                fromAminoMsg(object: _252.DepositAminoMsg): _252.Deposit;
                toAminoMsg(message: _252.Deposit): _252.DepositAminoMsg;
                fromProtoMsg(message: _252.DepositProtoMsg): _252.Deposit;
                toProto(message: _252.Deposit): Uint8Array;
                toProtoMsg(message: _252.Deposit): _252.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _252.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.Proposal;
                fromJSON(object: any): _252.Proposal;
                toJSON(message: _252.Proposal): unknown;
                fromPartial(object: Partial<_252.Proposal>): _252.Proposal;
                fromAmino(object: _252.ProposalAmino): _252.Proposal;
                toAmino(message: _252.Proposal): _252.ProposalAmino;
                fromAminoMsg(object: _252.ProposalAminoMsg): _252.Proposal;
                toAminoMsg(message: _252.Proposal): _252.ProposalAminoMsg;
                fromProtoMsg(message: _252.ProposalProtoMsg): _252.Proposal;
                toProto(message: _252.Proposal): Uint8Array;
                toProtoMsg(message: _252.Proposal): _252.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _252.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.TallyResult;
                fromJSON(object: any): _252.TallyResult;
                toJSON(message: _252.TallyResult): unknown;
                fromPartial(object: Partial<_252.TallyResult>): _252.TallyResult;
                fromAmino(object: _252.TallyResultAmino): _252.TallyResult;
                toAmino(message: _252.TallyResult): _252.TallyResultAmino;
                fromAminoMsg(object: _252.TallyResultAminoMsg): _252.TallyResult;
                toAminoMsg(message: _252.TallyResult): _252.TallyResultAminoMsg;
                fromProtoMsg(message: _252.TallyResultProtoMsg): _252.TallyResult;
                toProto(message: _252.TallyResult): Uint8Array;
                toProtoMsg(message: _252.TallyResult): _252.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _252.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.Vote;
                fromJSON(object: any): _252.Vote;
                toJSON(message: _252.Vote): unknown;
                fromPartial(object: Partial<_252.Vote>): _252.Vote;
                fromAmino(object: _252.VoteAmino): _252.Vote;
                toAmino(message: _252.Vote): _252.VoteAmino;
                fromAminoMsg(object: _252.VoteAminoMsg): _252.Vote;
                toAminoMsg(message: _252.Vote): _252.VoteAminoMsg;
                fromProtoMsg(message: _252.VoteProtoMsg): _252.Vote;
                toProto(message: _252.Vote): Uint8Array;
                toProtoMsg(message: _252.Vote): _252.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _252.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.DepositParams;
                fromJSON(object: any): _252.DepositParams;
                toJSON(message: _252.DepositParams): unknown;
                fromPartial(object: Partial<_252.DepositParams>): _252.DepositParams;
                fromAmino(object: _252.DepositParamsAmino): _252.DepositParams;
                toAmino(message: _252.DepositParams): _252.DepositParamsAmino;
                fromAminoMsg(object: _252.DepositParamsAminoMsg): _252.DepositParams;
                toAminoMsg(message: _252.DepositParams): _252.DepositParamsAminoMsg;
                fromProtoMsg(message: _252.DepositParamsProtoMsg): _252.DepositParams;
                toProto(message: _252.DepositParams): Uint8Array;
                toProtoMsg(message: _252.DepositParams): _252.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _252.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.VotingParams;
                fromJSON(object: any): _252.VotingParams;
                toJSON(message: _252.VotingParams): unknown;
                fromPartial(object: Partial<_252.VotingParams>): _252.VotingParams;
                fromAmino(object: _252.VotingParamsAmino): _252.VotingParams;
                toAmino(message: _252.VotingParams): _252.VotingParamsAmino;
                fromAminoMsg(object: _252.VotingParamsAminoMsg): _252.VotingParams;
                toAminoMsg(message: _252.VotingParams): _252.VotingParamsAminoMsg;
                fromProtoMsg(message: _252.VotingParamsProtoMsg): _252.VotingParams;
                toProto(message: _252.VotingParams): Uint8Array;
                toProtoMsg(message: _252.VotingParams): _252.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _252.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.TallyParams;
                fromJSON(object: any): _252.TallyParams;
                toJSON(message: _252.TallyParams): unknown;
                fromPartial(object: Partial<_252.TallyParams>): _252.TallyParams;
                fromAmino(object: _252.TallyParamsAmino): _252.TallyParams;
                toAmino(message: _252.TallyParams): _252.TallyParamsAmino;
                fromAminoMsg(object: _252.TallyParamsAminoMsg): _252.TallyParams;
                toAminoMsg(message: _252.TallyParams): _252.TallyParamsAminoMsg;
                fromProtoMsg(message: _252.TallyParamsProtoMsg): _252.TallyParams;
                toProto(message: _252.TallyParams): Uint8Array;
                toProtoMsg(message: _252.TallyParams): _252.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _251.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.GenesisState;
                fromJSON(object: any): _251.GenesisState;
                toJSON(message: _251.GenesisState): unknown;
                fromPartial(object: Partial<_251.GenesisState>): _251.GenesisState;
                fromAmino(object: _251.GenesisStateAmino): _251.GenesisState;
                toAmino(message: _251.GenesisState): _251.GenesisStateAmino;
                fromAminoMsg(object: _251.GenesisStateAminoMsg): _251.GenesisState;
                toAminoMsg(message: _251.GenesisState): _251.GenesisStateAminoMsg;
                fromProtoMsg(message: _251.GenesisStateProtoMsg): _251.GenesisState;
                toProto(message: _251.GenesisState): Uint8Array;
                toProtoMsg(message: _251.GenesisState): _251.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _472.MsgClientImpl;
            QueryClientImpl: typeof _456.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _257.QueryProposalRequest): Promise<_257.QueryProposalResponse>;
                proposals(request: _257.QueryProposalsRequest): Promise<_257.QueryProposalsResponse>;
                vote(request: _257.QueryVoteRequest): Promise<_257.QueryVoteResponse>;
                votes(request: _257.QueryVotesRequest): Promise<_257.QueryVotesResponse>;
                params(request: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                deposit(request: _257.QueryDepositRequest): Promise<_257.QueryDepositResponse>;
                deposits(request: _257.QueryDepositsRequest): Promise<_257.QueryDepositsResponse>;
                tallyResult(request: _257.QueryTallyResultRequest): Promise<_257.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _258.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _258.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _258.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _258.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _258.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _258.MsgSubmitProposal;
                    };
                    vote(value: _258.MsgVote): {
                        typeUrl: string;
                        value: _258.MsgVote;
                    };
                    voteWeighted(value: _258.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _258.MsgVoteWeighted;
                    };
                    deposit(value: _258.MsgDeposit): {
                        typeUrl: string;
                        value: _258.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _258.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _258.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _258.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _258.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _258.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _258.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _258.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _258.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _258.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _258.MsgSubmitProposal;
                    };
                    vote(value: _258.MsgVote): {
                        typeUrl: string;
                        value: _258.MsgVote;
                    };
                    voteWeighted(value: _258.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _258.MsgVoteWeighted;
                    };
                    deposit(value: _258.MsgDeposit): {
                        typeUrl: string;
                        value: _258.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _258.MsgSubmitProposal) => _258.MsgSubmitProposalAmino;
                    fromAmino: (object: _258.MsgSubmitProposalAmino) => _258.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _258.MsgVote) => _258.MsgVoteAmino;
                    fromAmino: (object: _258.MsgVoteAmino) => _258.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _258.MsgVoteWeighted) => _258.MsgVoteWeightedAmino;
                    fromAmino: (object: _258.MsgVoteWeightedAmino) => _258.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _258.MsgDeposit) => _258.MsgDepositAmino;
                    fromAmino: (object: _258.MsgDepositAmino) => _258.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _258.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgSubmitProposal;
                fromJSON(object: any): _258.MsgSubmitProposal;
                toJSON(message: _258.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_258.MsgSubmitProposal>): _258.MsgSubmitProposal;
                fromAmino(object: _258.MsgSubmitProposalAmino): _258.MsgSubmitProposal;
                toAmino(message: _258.MsgSubmitProposal): _258.MsgSubmitProposalAmino;
                fromAminoMsg(object: _258.MsgSubmitProposalAminoMsg): _258.MsgSubmitProposal;
                toAminoMsg(message: _258.MsgSubmitProposal): _258.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _258.MsgSubmitProposalProtoMsg): _258.MsgSubmitProposal;
                toProto(message: _258.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _258.MsgSubmitProposal): _258.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _258.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgSubmitProposalResponse;
                fromJSON(object: any): _258.MsgSubmitProposalResponse;
                toJSON(message: _258.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_258.MsgSubmitProposalResponse>): _258.MsgSubmitProposalResponse;
                fromAmino(object: _258.MsgSubmitProposalResponseAmino): _258.MsgSubmitProposalResponse;
                toAmino(message: _258.MsgSubmitProposalResponse): _258.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _258.MsgSubmitProposalResponseAminoMsg): _258.MsgSubmitProposalResponse;
                toAminoMsg(message: _258.MsgSubmitProposalResponse): _258.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _258.MsgSubmitProposalResponseProtoMsg): _258.MsgSubmitProposalResponse;
                toProto(message: _258.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _258.MsgSubmitProposalResponse): _258.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _258.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgVote;
                fromJSON(object: any): _258.MsgVote;
                toJSON(message: _258.MsgVote): unknown;
                fromPartial(object: Partial<_258.MsgVote>): _258.MsgVote;
                fromAmino(object: _258.MsgVoteAmino): _258.MsgVote;
                toAmino(message: _258.MsgVote): _258.MsgVoteAmino;
                fromAminoMsg(object: _258.MsgVoteAminoMsg): _258.MsgVote;
                toAminoMsg(message: _258.MsgVote): _258.MsgVoteAminoMsg;
                fromProtoMsg(message: _258.MsgVoteProtoMsg): _258.MsgVote;
                toProto(message: _258.MsgVote): Uint8Array;
                toProtoMsg(message: _258.MsgVote): _258.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _258.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgVoteResponse;
                fromJSON(_: any): _258.MsgVoteResponse;
                toJSON(_: _258.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_258.MsgVoteResponse>): _258.MsgVoteResponse;
                fromAmino(_: _258.MsgVoteResponseAmino): _258.MsgVoteResponse;
                toAmino(_: _258.MsgVoteResponse): _258.MsgVoteResponseAmino;
                fromAminoMsg(object: _258.MsgVoteResponseAminoMsg): _258.MsgVoteResponse;
                toAminoMsg(message: _258.MsgVoteResponse): _258.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _258.MsgVoteResponseProtoMsg): _258.MsgVoteResponse;
                toProto(message: _258.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _258.MsgVoteResponse): _258.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _258.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgVoteWeighted;
                fromJSON(object: any): _258.MsgVoteWeighted;
                toJSON(message: _258.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_258.MsgVoteWeighted>): _258.MsgVoteWeighted;
                fromAmino(object: _258.MsgVoteWeightedAmino): _258.MsgVoteWeighted;
                toAmino(message: _258.MsgVoteWeighted): _258.MsgVoteWeightedAmino;
                fromAminoMsg(object: _258.MsgVoteWeightedAminoMsg): _258.MsgVoteWeighted;
                toAminoMsg(message: _258.MsgVoteWeighted): _258.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _258.MsgVoteWeightedProtoMsg): _258.MsgVoteWeighted;
                toProto(message: _258.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _258.MsgVoteWeighted): _258.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _258.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgVoteWeightedResponse;
                fromJSON(_: any): _258.MsgVoteWeightedResponse;
                toJSON(_: _258.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_258.MsgVoteWeightedResponse>): _258.MsgVoteWeightedResponse;
                fromAmino(_: _258.MsgVoteWeightedResponseAmino): _258.MsgVoteWeightedResponse;
                toAmino(_: _258.MsgVoteWeightedResponse): _258.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _258.MsgVoteWeightedResponseAminoMsg): _258.MsgVoteWeightedResponse;
                toAminoMsg(message: _258.MsgVoteWeightedResponse): _258.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _258.MsgVoteWeightedResponseProtoMsg): _258.MsgVoteWeightedResponse;
                toProto(message: _258.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _258.MsgVoteWeightedResponse): _258.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _258.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgDeposit;
                fromJSON(object: any): _258.MsgDeposit;
                toJSON(message: _258.MsgDeposit): unknown;
                fromPartial(object: Partial<_258.MsgDeposit>): _258.MsgDeposit;
                fromAmino(object: _258.MsgDepositAmino): _258.MsgDeposit;
                toAmino(message: _258.MsgDeposit): _258.MsgDepositAmino;
                fromAminoMsg(object: _258.MsgDepositAminoMsg): _258.MsgDeposit;
                toAminoMsg(message: _258.MsgDeposit): _258.MsgDepositAminoMsg;
                fromProtoMsg(message: _258.MsgDepositProtoMsg): _258.MsgDeposit;
                toProto(message: _258.MsgDeposit): Uint8Array;
                toProtoMsg(message: _258.MsgDeposit): _258.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _258.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.MsgDepositResponse;
                fromJSON(_: any): _258.MsgDepositResponse;
                toJSON(_: _258.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_258.MsgDepositResponse>): _258.MsgDepositResponse;
                fromAmino(_: _258.MsgDepositResponseAmino): _258.MsgDepositResponse;
                toAmino(_: _258.MsgDepositResponse): _258.MsgDepositResponseAmino;
                fromAminoMsg(object: _258.MsgDepositResponseAminoMsg): _258.MsgDepositResponse;
                toAminoMsg(message: _258.MsgDepositResponse): _258.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _258.MsgDepositResponseProtoMsg): _258.MsgDepositResponse;
                toProto(message: _258.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _258.MsgDepositResponse): _258.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _257.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryProposalRequest;
                fromJSON(object: any): _257.QueryProposalRequest;
                toJSON(message: _257.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_257.QueryProposalRequest>): _257.QueryProposalRequest;
                fromAmino(object: _257.QueryProposalRequestAmino): _257.QueryProposalRequest;
                toAmino(message: _257.QueryProposalRequest): _257.QueryProposalRequestAmino;
                fromAminoMsg(object: _257.QueryProposalRequestAminoMsg): _257.QueryProposalRequest;
                toAminoMsg(message: _257.QueryProposalRequest): _257.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _257.QueryProposalRequestProtoMsg): _257.QueryProposalRequest;
                toProto(message: _257.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _257.QueryProposalRequest): _257.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _257.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryProposalResponse;
                fromJSON(object: any): _257.QueryProposalResponse;
                toJSON(message: _257.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_257.QueryProposalResponse>): _257.QueryProposalResponse;
                fromAmino(object: _257.QueryProposalResponseAmino): _257.QueryProposalResponse;
                toAmino(message: _257.QueryProposalResponse): _257.QueryProposalResponseAmino;
                fromAminoMsg(object: _257.QueryProposalResponseAminoMsg): _257.QueryProposalResponse;
                toAminoMsg(message: _257.QueryProposalResponse): _257.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _257.QueryProposalResponseProtoMsg): _257.QueryProposalResponse;
                toProto(message: _257.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _257.QueryProposalResponse): _257.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _257.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryProposalsRequest;
                fromJSON(object: any): _257.QueryProposalsRequest;
                toJSON(message: _257.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_257.QueryProposalsRequest>): _257.QueryProposalsRequest;
                fromAmino(object: _257.QueryProposalsRequestAmino): _257.QueryProposalsRequest;
                toAmino(message: _257.QueryProposalsRequest): _257.QueryProposalsRequestAmino;
                fromAminoMsg(object: _257.QueryProposalsRequestAminoMsg): _257.QueryProposalsRequest;
                toAminoMsg(message: _257.QueryProposalsRequest): _257.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _257.QueryProposalsRequestProtoMsg): _257.QueryProposalsRequest;
                toProto(message: _257.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _257.QueryProposalsRequest): _257.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _257.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryProposalsResponse;
                fromJSON(object: any): _257.QueryProposalsResponse;
                toJSON(message: _257.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_257.QueryProposalsResponse>): _257.QueryProposalsResponse;
                fromAmino(object: _257.QueryProposalsResponseAmino): _257.QueryProposalsResponse;
                toAmino(message: _257.QueryProposalsResponse): _257.QueryProposalsResponseAmino;
                fromAminoMsg(object: _257.QueryProposalsResponseAminoMsg): _257.QueryProposalsResponse;
                toAminoMsg(message: _257.QueryProposalsResponse): _257.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _257.QueryProposalsResponseProtoMsg): _257.QueryProposalsResponse;
                toProto(message: _257.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _257.QueryProposalsResponse): _257.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _257.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryVoteRequest;
                fromJSON(object: any): _257.QueryVoteRequest;
                toJSON(message: _257.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_257.QueryVoteRequest>): _257.QueryVoteRequest;
                fromAmino(object: _257.QueryVoteRequestAmino): _257.QueryVoteRequest;
                toAmino(message: _257.QueryVoteRequest): _257.QueryVoteRequestAmino;
                fromAminoMsg(object: _257.QueryVoteRequestAminoMsg): _257.QueryVoteRequest;
                toAminoMsg(message: _257.QueryVoteRequest): _257.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _257.QueryVoteRequestProtoMsg): _257.QueryVoteRequest;
                toProto(message: _257.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _257.QueryVoteRequest): _257.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _257.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryVoteResponse;
                fromJSON(object: any): _257.QueryVoteResponse;
                toJSON(message: _257.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_257.QueryVoteResponse>): _257.QueryVoteResponse;
                fromAmino(object: _257.QueryVoteResponseAmino): _257.QueryVoteResponse;
                toAmino(message: _257.QueryVoteResponse): _257.QueryVoteResponseAmino;
                fromAminoMsg(object: _257.QueryVoteResponseAminoMsg): _257.QueryVoteResponse;
                toAminoMsg(message: _257.QueryVoteResponse): _257.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _257.QueryVoteResponseProtoMsg): _257.QueryVoteResponse;
                toProto(message: _257.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _257.QueryVoteResponse): _257.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _257.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryVotesRequest;
                fromJSON(object: any): _257.QueryVotesRequest;
                toJSON(message: _257.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_257.QueryVotesRequest>): _257.QueryVotesRequest;
                fromAmino(object: _257.QueryVotesRequestAmino): _257.QueryVotesRequest;
                toAmino(message: _257.QueryVotesRequest): _257.QueryVotesRequestAmino;
                fromAminoMsg(object: _257.QueryVotesRequestAminoMsg): _257.QueryVotesRequest;
                toAminoMsg(message: _257.QueryVotesRequest): _257.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _257.QueryVotesRequestProtoMsg): _257.QueryVotesRequest;
                toProto(message: _257.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _257.QueryVotesRequest): _257.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _257.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryVotesResponse;
                fromJSON(object: any): _257.QueryVotesResponse;
                toJSON(message: _257.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_257.QueryVotesResponse>): _257.QueryVotesResponse;
                fromAmino(object: _257.QueryVotesResponseAmino): _257.QueryVotesResponse;
                toAmino(message: _257.QueryVotesResponse): _257.QueryVotesResponseAmino;
                fromAminoMsg(object: _257.QueryVotesResponseAminoMsg): _257.QueryVotesResponse;
                toAminoMsg(message: _257.QueryVotesResponse): _257.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _257.QueryVotesResponseProtoMsg): _257.QueryVotesResponse;
                toProto(message: _257.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _257.QueryVotesResponse): _257.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _257.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsRequest;
                fromJSON(object: any): _257.QueryParamsRequest;
                toJSON(message: _257.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_257.QueryParamsRequest>): _257.QueryParamsRequest;
                fromAmino(object: _257.QueryParamsRequestAmino): _257.QueryParamsRequest;
                toAmino(message: _257.QueryParamsRequest): _257.QueryParamsRequestAmino;
                fromAminoMsg(object: _257.QueryParamsRequestAminoMsg): _257.QueryParamsRequest;
                toAminoMsg(message: _257.QueryParamsRequest): _257.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _257.QueryParamsRequestProtoMsg): _257.QueryParamsRequest;
                toProto(message: _257.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _257.QueryParamsRequest): _257.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _257.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryParamsResponse;
                fromJSON(object: any): _257.QueryParamsResponse;
                toJSON(message: _257.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_257.QueryParamsResponse>): _257.QueryParamsResponse;
                fromAmino(object: _257.QueryParamsResponseAmino): _257.QueryParamsResponse;
                toAmino(message: _257.QueryParamsResponse): _257.QueryParamsResponseAmino;
                fromAminoMsg(object: _257.QueryParamsResponseAminoMsg): _257.QueryParamsResponse;
                toAminoMsg(message: _257.QueryParamsResponse): _257.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _257.QueryParamsResponseProtoMsg): _257.QueryParamsResponse;
                toProto(message: _257.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _257.QueryParamsResponse): _257.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _257.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDepositRequest;
                fromJSON(object: any): _257.QueryDepositRequest;
                toJSON(message: _257.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_257.QueryDepositRequest>): _257.QueryDepositRequest;
                fromAmino(object: _257.QueryDepositRequestAmino): _257.QueryDepositRequest;
                toAmino(message: _257.QueryDepositRequest): _257.QueryDepositRequestAmino;
                fromAminoMsg(object: _257.QueryDepositRequestAminoMsg): _257.QueryDepositRequest;
                toAminoMsg(message: _257.QueryDepositRequest): _257.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _257.QueryDepositRequestProtoMsg): _257.QueryDepositRequest;
                toProto(message: _257.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _257.QueryDepositRequest): _257.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _257.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDepositResponse;
                fromJSON(object: any): _257.QueryDepositResponse;
                toJSON(message: _257.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_257.QueryDepositResponse>): _257.QueryDepositResponse;
                fromAmino(object: _257.QueryDepositResponseAmino): _257.QueryDepositResponse;
                toAmino(message: _257.QueryDepositResponse): _257.QueryDepositResponseAmino;
                fromAminoMsg(object: _257.QueryDepositResponseAminoMsg): _257.QueryDepositResponse;
                toAminoMsg(message: _257.QueryDepositResponse): _257.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _257.QueryDepositResponseProtoMsg): _257.QueryDepositResponse;
                toProto(message: _257.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _257.QueryDepositResponse): _257.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _257.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDepositsRequest;
                fromJSON(object: any): _257.QueryDepositsRequest;
                toJSON(message: _257.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_257.QueryDepositsRequest>): _257.QueryDepositsRequest;
                fromAmino(object: _257.QueryDepositsRequestAmino): _257.QueryDepositsRequest;
                toAmino(message: _257.QueryDepositsRequest): _257.QueryDepositsRequestAmino;
                fromAminoMsg(object: _257.QueryDepositsRequestAminoMsg): _257.QueryDepositsRequest;
                toAminoMsg(message: _257.QueryDepositsRequest): _257.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _257.QueryDepositsRequestProtoMsg): _257.QueryDepositsRequest;
                toProto(message: _257.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _257.QueryDepositsRequest): _257.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _257.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryDepositsResponse;
                fromJSON(object: any): _257.QueryDepositsResponse;
                toJSON(message: _257.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_257.QueryDepositsResponse>): _257.QueryDepositsResponse;
                fromAmino(object: _257.QueryDepositsResponseAmino): _257.QueryDepositsResponse;
                toAmino(message: _257.QueryDepositsResponse): _257.QueryDepositsResponseAmino;
                fromAminoMsg(object: _257.QueryDepositsResponseAminoMsg): _257.QueryDepositsResponse;
                toAminoMsg(message: _257.QueryDepositsResponse): _257.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _257.QueryDepositsResponseProtoMsg): _257.QueryDepositsResponse;
                toProto(message: _257.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _257.QueryDepositsResponse): _257.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _257.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryTallyResultRequest;
                fromJSON(object: any): _257.QueryTallyResultRequest;
                toJSON(message: _257.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_257.QueryTallyResultRequest>): _257.QueryTallyResultRequest;
                fromAmino(object: _257.QueryTallyResultRequestAmino): _257.QueryTallyResultRequest;
                toAmino(message: _257.QueryTallyResultRequest): _257.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _257.QueryTallyResultRequestAminoMsg): _257.QueryTallyResultRequest;
                toAminoMsg(message: _257.QueryTallyResultRequest): _257.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _257.QueryTallyResultRequestProtoMsg): _257.QueryTallyResultRequest;
                toProto(message: _257.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _257.QueryTallyResultRequest): _257.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _257.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.QueryTallyResultResponse;
                fromJSON(object: any): _257.QueryTallyResultResponse;
                toJSON(message: _257.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_257.QueryTallyResultResponse>): _257.QueryTallyResultResponse;
                fromAmino(object: _257.QueryTallyResultResponseAmino): _257.QueryTallyResultResponse;
                toAmino(message: _257.QueryTallyResultResponse): _257.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _257.QueryTallyResultResponseAminoMsg): _257.QueryTallyResultResponse;
                toAminoMsg(message: _257.QueryTallyResultResponse): _257.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _257.QueryTallyResultResponseProtoMsg): _257.QueryTallyResultResponse;
                toProto(message: _257.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _257.QueryTallyResultResponse): _257.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _256.VoteOption;
            voteOptionToJSON(object: _256.VoteOption): string;
            proposalStatusFromJSON(object: any): _256.ProposalStatus;
            proposalStatusToJSON(object: _256.ProposalStatus): string;
            VoteOption: typeof _256.VoteOption;
            VoteOptionSDKType: typeof _256.VoteOption;
            VoteOptionAmino: typeof _256.VoteOption;
            ProposalStatus: typeof _256.ProposalStatus;
            ProposalStatusSDKType: typeof _256.ProposalStatus;
            ProposalStatusAmino: typeof _256.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _256.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.WeightedVoteOption;
                fromJSON(object: any): _256.WeightedVoteOption;
                toJSON(message: _256.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_256.WeightedVoteOption>): _256.WeightedVoteOption;
                fromAmino(object: _256.WeightedVoteOptionAmino): _256.WeightedVoteOption;
                toAmino(message: _256.WeightedVoteOption): _256.WeightedVoteOptionAmino;
                fromAminoMsg(object: _256.WeightedVoteOptionAminoMsg): _256.WeightedVoteOption;
                toAminoMsg(message: _256.WeightedVoteOption): _256.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _256.WeightedVoteOptionProtoMsg): _256.WeightedVoteOption;
                toProto(message: _256.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _256.WeightedVoteOption): _256.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _256.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.TextProposal;
                fromJSON(object: any): _256.TextProposal;
                toJSON(message: _256.TextProposal): unknown;
                fromPartial(object: Partial<_256.TextProposal>): _256.TextProposal;
                fromAmino(object: _256.TextProposalAmino): _256.TextProposal;
                toAmino(message: _256.TextProposal): _256.TextProposalAmino;
                fromAminoMsg(object: _256.TextProposalAminoMsg): _256.TextProposal;
                toAminoMsg(message: _256.TextProposal): _256.TextProposalAminoMsg;
                fromProtoMsg(message: _256.TextProposalProtoMsg): _256.TextProposal;
                toProto(message: _256.TextProposal): Uint8Array;
                toProtoMsg(message: _256.TextProposal): _256.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _256.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Deposit;
                fromJSON(object: any): _256.Deposit;
                toJSON(message: _256.Deposit): unknown;
                fromPartial(object: Partial<_256.Deposit>): _256.Deposit;
                fromAmino(object: _256.DepositAmino): _256.Deposit;
                toAmino(message: _256.Deposit): _256.DepositAmino;
                fromAminoMsg(object: _256.DepositAminoMsg): _256.Deposit;
                toAminoMsg(message: _256.Deposit): _256.DepositAminoMsg;
                fromProtoMsg(message: _256.DepositProtoMsg): _256.Deposit;
                toProto(message: _256.Deposit): Uint8Array;
                toProtoMsg(message: _256.Deposit): _256.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _256.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Proposal;
                fromJSON(object: any): _256.Proposal;
                toJSON(message: _256.Proposal): unknown;
                fromPartial(object: Partial<_256.Proposal>): _256.Proposal;
                fromAmino(object: _256.ProposalAmino): _256.Proposal;
                toAmino(message: _256.Proposal): _256.ProposalAmino;
                fromAminoMsg(object: _256.ProposalAminoMsg): _256.Proposal;
                toAminoMsg(message: _256.Proposal): _256.ProposalAminoMsg;
                fromProtoMsg(message: _256.ProposalProtoMsg): _256.Proposal;
                toProto(message: _256.Proposal): Uint8Array;
                toProtoMsg(message: _256.Proposal): _256.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _256.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.TallyResult;
                fromJSON(object: any): _256.TallyResult;
                toJSON(message: _256.TallyResult): unknown;
                fromPartial(object: Partial<_256.TallyResult>): _256.TallyResult;
                fromAmino(object: _256.TallyResultAmino): _256.TallyResult;
                toAmino(message: _256.TallyResult): _256.TallyResultAmino;
                fromAminoMsg(object: _256.TallyResultAminoMsg): _256.TallyResult;
                toAminoMsg(message: _256.TallyResult): _256.TallyResultAminoMsg;
                fromProtoMsg(message: _256.TallyResultProtoMsg): _256.TallyResult;
                toProto(message: _256.TallyResult): Uint8Array;
                toProtoMsg(message: _256.TallyResult): _256.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _256.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.Vote;
                fromJSON(object: any): _256.Vote;
                toJSON(message: _256.Vote): unknown;
                fromPartial(object: Partial<_256.Vote>): _256.Vote;
                fromAmino(object: _256.VoteAmino): _256.Vote;
                toAmino(message: _256.Vote): _256.VoteAmino;
                fromAminoMsg(object: _256.VoteAminoMsg): _256.Vote;
                toAminoMsg(message: _256.Vote): _256.VoteAminoMsg;
                fromProtoMsg(message: _256.VoteProtoMsg): _256.Vote;
                toProto(message: _256.Vote): Uint8Array;
                toProtoMsg(message: _256.Vote): _256.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _256.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.DepositParams;
                fromJSON(object: any): _256.DepositParams;
                toJSON(message: _256.DepositParams): unknown;
                fromPartial(object: Partial<_256.DepositParams>): _256.DepositParams;
                fromAmino(object: _256.DepositParamsAmino): _256.DepositParams;
                toAmino(message: _256.DepositParams): _256.DepositParamsAmino;
                fromAminoMsg(object: _256.DepositParamsAminoMsg): _256.DepositParams;
                toAminoMsg(message: _256.DepositParams): _256.DepositParamsAminoMsg;
                fromProtoMsg(message: _256.DepositParamsProtoMsg): _256.DepositParams;
                toProto(message: _256.DepositParams): Uint8Array;
                toProtoMsg(message: _256.DepositParams): _256.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _256.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.VotingParams;
                fromJSON(object: any): _256.VotingParams;
                toJSON(message: _256.VotingParams): unknown;
                fromPartial(object: Partial<_256.VotingParams>): _256.VotingParams;
                fromAmino(object: _256.VotingParamsAmino): _256.VotingParams;
                toAmino(message: _256.VotingParams): _256.VotingParamsAmino;
                fromAminoMsg(object: _256.VotingParamsAminoMsg): _256.VotingParams;
                toAminoMsg(message: _256.VotingParams): _256.VotingParamsAminoMsg;
                fromProtoMsg(message: _256.VotingParamsProtoMsg): _256.VotingParams;
                toProto(message: _256.VotingParams): Uint8Array;
                toProtoMsg(message: _256.VotingParams): _256.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _256.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.TallyParams;
                fromJSON(object: any): _256.TallyParams;
                toJSON(message: _256.TallyParams): unknown;
                fromPartial(object: Partial<_256.TallyParams>): _256.TallyParams;
                fromAmino(object: _256.TallyParamsAmino): _256.TallyParams;
                toAmino(message: _256.TallyParams): _256.TallyParamsAmino;
                fromAminoMsg(object: _256.TallyParamsAminoMsg): _256.TallyParams;
                toAminoMsg(message: _256.TallyParams): _256.TallyParamsAminoMsg;
                fromProtoMsg(message: _256.TallyParamsProtoMsg): _256.TallyParams;
                toProto(message: _256.TallyParams): Uint8Array;
                toProtoMsg(message: _256.TallyParams): _256.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _255.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GenesisState;
                fromJSON(object: any): _255.GenesisState;
                toJSON(message: _255.GenesisState): unknown;
                fromPartial(object: Partial<_255.GenesisState>): _255.GenesisState;
                fromAmino(object: _255.GenesisStateAmino): _255.GenesisState;
                toAmino(message: _255.GenesisState): _255.GenesisStateAmino;
                fromAminoMsg(object: _255.GenesisStateAminoMsg): _255.GenesisState;
                toAminoMsg(message: _255.GenesisState): _255.GenesisStateAminoMsg;
                fromProtoMsg(message: _255.GenesisStateProtoMsg): _255.GenesisState;
                toProto(message: _255.GenesisState): Uint8Array;
                toProtoMsg(message: _255.GenesisState): _255.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _473.MsgClientImpl;
            QueryClientImpl: typeof _457.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _261.QueryGroupInfoRequest): Promise<_261.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _261.QueryGroupPolicyInfoRequest): Promise<_261.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _261.QueryGroupMembersRequest): Promise<_261.QueryGroupMembersResponse>;
                groupsByAdmin(request: _261.QueryGroupsByAdminRequest): Promise<_261.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _261.QueryGroupPoliciesByGroupRequest): Promise<_261.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _261.QueryGroupPoliciesByAdminRequest): Promise<_261.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _261.QueryProposalRequest): Promise<_261.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _261.QueryProposalsByGroupPolicyRequest): Promise<_261.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _261.QueryVoteByProposalVoterRequest): Promise<_261.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _261.QueryVotesByProposalRequest): Promise<_261.QueryVotesByProposalResponse>;
                votesByVoter(request: _261.QueryVotesByVoterRequest): Promise<_261.QueryVotesByVoterResponse>;
                groupsByMember(request: _261.QueryGroupsByMemberRequest): Promise<_261.QueryGroupsByMemberResponse>;
                tallyResult(request: _261.QueryTallyResultRequest): Promise<_261.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _262.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _262.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _262.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _262.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _262.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _262.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _262.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _262.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _262.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _262.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _262.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _262.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _262.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _262.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _262.MsgCreateGroup): {
                        typeUrl: string;
                        value: _262.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _262.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _262.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _262.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _262.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _262.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _262.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _262.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _262.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _262.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _262.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _262.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _262.MsgWithdrawProposal;
                    };
                    vote(value: _262.MsgVote): {
                        typeUrl: string;
                        value: _262.MsgVote;
                    };
                    exec(value: _262.MsgExec): {
                        typeUrl: string;
                        value: _262.MsgExec;
                    };
                    leaveGroup(value: _262.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _262.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _262.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _262.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _262.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _262.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _262.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _262.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _262.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _262.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _262.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _262.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _262.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _262.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _262.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _262.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _262.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _262.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _262.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _262.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _262.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _262.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _262.MsgCreateGroup): {
                        typeUrl: string;
                        value: _262.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _262.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _262.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _262.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _262.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _262.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _262.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _262.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _262.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _262.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _262.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _262.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _262.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _262.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _262.MsgWithdrawProposal;
                    };
                    vote(value: _262.MsgVote): {
                        typeUrl: string;
                        value: _262.MsgVote;
                    };
                    exec(value: _262.MsgExec): {
                        typeUrl: string;
                        value: _262.MsgExec;
                    };
                    leaveGroup(value: _262.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _262.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _262.MsgCreateGroup) => _262.MsgCreateGroupAmino;
                    fromAmino: (object: _262.MsgCreateGroupAmino) => _262.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupMembers) => _262.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _262.MsgUpdateGroupMembersAmino) => _262.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupAdmin) => _262.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _262.MsgUpdateGroupAdminAmino) => _262.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupMetadata) => _262.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _262.MsgUpdateGroupMetadataAmino) => _262.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _262.MsgCreateGroupPolicy) => _262.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _262.MsgCreateGroupPolicyAmino) => _262.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _262.MsgCreateGroupWithPolicy) => _262.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _262.MsgCreateGroupWithPolicyAmino) => _262.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupPolicyAdmin) => _262.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _262.MsgUpdateGroupPolicyAdminAmino) => _262.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupPolicyDecisionPolicy) => _262.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _262.MsgUpdateGroupPolicyDecisionPolicyAmino) => _262.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _262.MsgUpdateGroupPolicyMetadata) => _262.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _262.MsgUpdateGroupPolicyMetadataAmino) => _262.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _262.MsgSubmitProposal) => _262.MsgSubmitProposalAmino;
                    fromAmino: (object: _262.MsgSubmitProposalAmino) => _262.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _262.MsgWithdrawProposal) => _262.MsgWithdrawProposalAmino;
                    fromAmino: (object: _262.MsgWithdrawProposalAmino) => _262.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _262.MsgVote) => _262.MsgVoteAmino;
                    fromAmino: (object: _262.MsgVoteAmino) => _262.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _262.MsgExec) => _262.MsgExecAmino;
                    fromAmino: (object: _262.MsgExecAmino) => _262.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _262.MsgLeaveGroup) => _262.MsgLeaveGroupAmino;
                    fromAmino: (object: _262.MsgLeaveGroupAmino) => _262.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _263.VoteOption;
            voteOptionToJSON(object: _263.VoteOption): string;
            proposalStatusFromJSON(object: any): _263.ProposalStatus;
            proposalStatusToJSON(object: _263.ProposalStatus): string;
            proposalResultFromJSON(object: any): _263.ProposalResult;
            proposalResultToJSON(object: _263.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _263.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _263.ProposalExecutorResult): string;
            VoteOption: typeof _263.VoteOption;
            VoteOptionSDKType: typeof _263.VoteOption;
            VoteOptionAmino: typeof _263.VoteOption;
            ProposalStatus: typeof _263.ProposalStatus;
            ProposalStatusSDKType: typeof _263.ProposalStatus;
            ProposalStatusAmino: typeof _263.ProposalStatus;
            ProposalResult: typeof _263.ProposalResult;
            ProposalResultSDKType: typeof _263.ProposalResult;
            ProposalResultAmino: typeof _263.ProposalResult;
            ProposalExecutorResult: typeof _263.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _263.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _263.ProposalExecutorResult;
            Member: {
                encode(message: _263.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Member;
                fromJSON(object: any): _263.Member;
                toJSON(message: _263.Member): unknown;
                fromPartial(object: Partial<_263.Member>): _263.Member;
                fromAmino(object: _263.MemberAmino): _263.Member;
                toAmino(message: _263.Member): _263.MemberAmino;
                fromAminoMsg(object: _263.MemberAminoMsg): _263.Member;
                toAminoMsg(message: _263.Member): _263.MemberAminoMsg;
                fromProtoMsg(message: _263.MemberProtoMsg): _263.Member;
                toProto(message: _263.Member): Uint8Array;
                toProtoMsg(message: _263.Member): _263.MemberProtoMsg;
            };
            Members: {
                encode(message: _263.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Members;
                fromJSON(object: any): _263.Members;
                toJSON(message: _263.Members): unknown;
                fromPartial(object: Partial<_263.Members>): _263.Members;
                fromAmino(object: _263.MembersAmino): _263.Members;
                toAmino(message: _263.Members): _263.MembersAmino;
                fromAminoMsg(object: _263.MembersAminoMsg): _263.Members;
                toAminoMsg(message: _263.Members): _263.MembersAminoMsg;
                fromProtoMsg(message: _263.MembersProtoMsg): _263.Members;
                toProto(message: _263.Members): Uint8Array;
                toProtoMsg(message: _263.Members): _263.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _263.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.ThresholdDecisionPolicy;
                fromJSON(object: any): _263.ThresholdDecisionPolicy;
                toJSON(message: _263.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_263.ThresholdDecisionPolicy>): _263.ThresholdDecisionPolicy;
                fromAmino(object: _263.ThresholdDecisionPolicyAmino): _263.ThresholdDecisionPolicy;
                toAmino(message: _263.ThresholdDecisionPolicy): _263.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _263.ThresholdDecisionPolicyAminoMsg): _263.ThresholdDecisionPolicy;
                toAminoMsg(message: _263.ThresholdDecisionPolicy): _263.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _263.ThresholdDecisionPolicyProtoMsg): _263.ThresholdDecisionPolicy;
                toProto(message: _263.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _263.ThresholdDecisionPolicy): _263.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _263.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.PercentageDecisionPolicy;
                fromJSON(object: any): _263.PercentageDecisionPolicy;
                toJSON(message: _263.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_263.PercentageDecisionPolicy>): _263.PercentageDecisionPolicy;
                fromAmino(object: _263.PercentageDecisionPolicyAmino): _263.PercentageDecisionPolicy;
                toAmino(message: _263.PercentageDecisionPolicy): _263.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _263.PercentageDecisionPolicyAminoMsg): _263.PercentageDecisionPolicy;
                toAminoMsg(message: _263.PercentageDecisionPolicy): _263.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _263.PercentageDecisionPolicyProtoMsg): _263.PercentageDecisionPolicy;
                toProto(message: _263.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _263.PercentageDecisionPolicy): _263.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _263.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.DecisionPolicyWindows;
                fromJSON(object: any): _263.DecisionPolicyWindows;
                toJSON(message: _263.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_263.DecisionPolicyWindows>): _263.DecisionPolicyWindows;
                fromAmino(object: _263.DecisionPolicyWindowsAmino): _263.DecisionPolicyWindows;
                toAmino(message: _263.DecisionPolicyWindows): _263.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _263.DecisionPolicyWindowsAminoMsg): _263.DecisionPolicyWindows;
                toAminoMsg(message: _263.DecisionPolicyWindows): _263.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _263.DecisionPolicyWindowsProtoMsg): _263.DecisionPolicyWindows;
                toProto(message: _263.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _263.DecisionPolicyWindows): _263.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _263.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.GroupInfo;
                fromJSON(object: any): _263.GroupInfo;
                toJSON(message: _263.GroupInfo): unknown;
                fromPartial(object: Partial<_263.GroupInfo>): _263.GroupInfo;
                fromAmino(object: _263.GroupInfoAmino): _263.GroupInfo;
                toAmino(message: _263.GroupInfo): _263.GroupInfoAmino;
                fromAminoMsg(object: _263.GroupInfoAminoMsg): _263.GroupInfo;
                toAminoMsg(message: _263.GroupInfo): _263.GroupInfoAminoMsg;
                fromProtoMsg(message: _263.GroupInfoProtoMsg): _263.GroupInfo;
                toProto(message: _263.GroupInfo): Uint8Array;
                toProtoMsg(message: _263.GroupInfo): _263.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _263.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.GroupMember;
                fromJSON(object: any): _263.GroupMember;
                toJSON(message: _263.GroupMember): unknown;
                fromPartial(object: Partial<_263.GroupMember>): _263.GroupMember;
                fromAmino(object: _263.GroupMemberAmino): _263.GroupMember;
                toAmino(message: _263.GroupMember): _263.GroupMemberAmino;
                fromAminoMsg(object: _263.GroupMemberAminoMsg): _263.GroupMember;
                toAminoMsg(message: _263.GroupMember): _263.GroupMemberAminoMsg;
                fromProtoMsg(message: _263.GroupMemberProtoMsg): _263.GroupMember;
                toProto(message: _263.GroupMember): Uint8Array;
                toProtoMsg(message: _263.GroupMember): _263.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _263.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.GroupPolicyInfo;
                fromJSON(object: any): _263.GroupPolicyInfo;
                toJSON(message: _263.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_263.GroupPolicyInfo>): _263.GroupPolicyInfo;
                fromAmino(object: _263.GroupPolicyInfoAmino): _263.GroupPolicyInfo;
                toAmino(message: _263.GroupPolicyInfo): _263.GroupPolicyInfoAmino;
                fromAminoMsg(object: _263.GroupPolicyInfoAminoMsg): _263.GroupPolicyInfo;
                toAminoMsg(message: _263.GroupPolicyInfo): _263.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _263.GroupPolicyInfoProtoMsg): _263.GroupPolicyInfo;
                toProto(message: _263.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _263.GroupPolicyInfo): _263.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _263.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Proposal;
                fromJSON(object: any): _263.Proposal;
                toJSON(message: _263.Proposal): unknown;
                fromPartial(object: Partial<_263.Proposal>): _263.Proposal;
                fromAmino(object: _263.ProposalAmino): _263.Proposal;
                toAmino(message: _263.Proposal): _263.ProposalAmino;
                fromAminoMsg(object: _263.ProposalAminoMsg): _263.Proposal;
                toAminoMsg(message: _263.Proposal): _263.ProposalAminoMsg;
                fromProtoMsg(message: _263.ProposalProtoMsg): _263.Proposal;
                toProto(message: _263.Proposal): Uint8Array;
                toProtoMsg(message: _263.Proposal): _263.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _263.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.TallyResult;
                fromJSON(object: any): _263.TallyResult;
                toJSON(message: _263.TallyResult): unknown;
                fromPartial(object: Partial<_263.TallyResult>): _263.TallyResult;
                fromAmino(object: _263.TallyResultAmino): _263.TallyResult;
                toAmino(message: _263.TallyResult): _263.TallyResultAmino;
                fromAminoMsg(object: _263.TallyResultAminoMsg): _263.TallyResult;
                toAminoMsg(message: _263.TallyResult): _263.TallyResultAminoMsg;
                fromProtoMsg(message: _263.TallyResultProtoMsg): _263.TallyResult;
                toProto(message: _263.TallyResult): Uint8Array;
                toProtoMsg(message: _263.TallyResult): _263.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _263.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.Vote;
                fromJSON(object: any): _263.Vote;
                toJSON(message: _263.Vote): unknown;
                fromPartial(object: Partial<_263.Vote>): _263.Vote;
                fromAmino(object: _263.VoteAmino): _263.Vote;
                toAmino(message: _263.Vote): _263.VoteAmino;
                fromAminoMsg(object: _263.VoteAminoMsg): _263.Vote;
                toAminoMsg(message: _263.Vote): _263.VoteAminoMsg;
                fromProtoMsg(message: _263.VoteProtoMsg): _263.Vote;
                toProto(message: _263.Vote): Uint8Array;
                toProtoMsg(message: _263.Vote): _263.VoteProtoMsg;
            };
            execFromJSON(object: any): _262.Exec;
            execToJSON(object: _262.Exec): string;
            Exec: typeof _262.Exec;
            ExecSDKType: typeof _262.Exec;
            ExecAmino: typeof _262.Exec;
            MsgCreateGroup: {
                encode(message: _262.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroup;
                fromJSON(object: any): _262.MsgCreateGroup;
                toJSON(message: _262.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroup>): _262.MsgCreateGroup;
                fromAmino(object: _262.MsgCreateGroupAmino): _262.MsgCreateGroup;
                toAmino(message: _262.MsgCreateGroup): _262.MsgCreateGroupAmino;
                fromAminoMsg(object: _262.MsgCreateGroupAminoMsg): _262.MsgCreateGroup;
                toAminoMsg(message: _262.MsgCreateGroup): _262.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupProtoMsg): _262.MsgCreateGroup;
                toProto(message: _262.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroup): _262.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _262.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroupResponse;
                fromJSON(object: any): _262.MsgCreateGroupResponse;
                toJSON(message: _262.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroupResponse>): _262.MsgCreateGroupResponse;
                fromAmino(object: _262.MsgCreateGroupResponseAmino): _262.MsgCreateGroupResponse;
                toAmino(message: _262.MsgCreateGroupResponse): _262.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _262.MsgCreateGroupResponseAminoMsg): _262.MsgCreateGroupResponse;
                toAminoMsg(message: _262.MsgCreateGroupResponse): _262.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupResponseProtoMsg): _262.MsgCreateGroupResponse;
                toProto(message: _262.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroupResponse): _262.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _262.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupMembers;
                fromJSON(object: any): _262.MsgUpdateGroupMembers;
                toJSON(message: _262.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupMembers>): _262.MsgUpdateGroupMembers;
                fromAmino(object: _262.MsgUpdateGroupMembersAmino): _262.MsgUpdateGroupMembers;
                toAmino(message: _262.MsgUpdateGroupMembers): _262.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupMembersAminoMsg): _262.MsgUpdateGroupMembers;
                toAminoMsg(message: _262.MsgUpdateGroupMembers): _262.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupMembersProtoMsg): _262.MsgUpdateGroupMembers;
                toProto(message: _262.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupMembers): _262.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _262.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _262.MsgUpdateGroupMembersResponse;
                toJSON(_: _262.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupMembersResponse>): _262.MsgUpdateGroupMembersResponse;
                fromAmino(_: _262.MsgUpdateGroupMembersResponseAmino): _262.MsgUpdateGroupMembersResponse;
                toAmino(_: _262.MsgUpdateGroupMembersResponse): _262.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupMembersResponseAminoMsg): _262.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _262.MsgUpdateGroupMembersResponse): _262.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupMembersResponseProtoMsg): _262.MsgUpdateGroupMembersResponse;
                toProto(message: _262.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupMembersResponse): _262.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _262.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupAdmin;
                fromJSON(object: any): _262.MsgUpdateGroupAdmin;
                toJSON(message: _262.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupAdmin>): _262.MsgUpdateGroupAdmin;
                fromAmino(object: _262.MsgUpdateGroupAdminAmino): _262.MsgUpdateGroupAdmin;
                toAmino(message: _262.MsgUpdateGroupAdmin): _262.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupAdminAminoMsg): _262.MsgUpdateGroupAdmin;
                toAminoMsg(message: _262.MsgUpdateGroupAdmin): _262.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupAdminProtoMsg): _262.MsgUpdateGroupAdmin;
                toProto(message: _262.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupAdmin): _262.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _262.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _262.MsgUpdateGroupAdminResponse;
                toJSON(_: _262.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupAdminResponse>): _262.MsgUpdateGroupAdminResponse;
                fromAmino(_: _262.MsgUpdateGroupAdminResponseAmino): _262.MsgUpdateGroupAdminResponse;
                toAmino(_: _262.MsgUpdateGroupAdminResponse): _262.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupAdminResponseAminoMsg): _262.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _262.MsgUpdateGroupAdminResponse): _262.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupAdminResponseProtoMsg): _262.MsgUpdateGroupAdminResponse;
                toProto(message: _262.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupAdminResponse): _262.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _262.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupMetadata;
                fromJSON(object: any): _262.MsgUpdateGroupMetadata;
                toJSON(message: _262.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupMetadata>): _262.MsgUpdateGroupMetadata;
                fromAmino(object: _262.MsgUpdateGroupMetadataAmino): _262.MsgUpdateGroupMetadata;
                toAmino(message: _262.MsgUpdateGroupMetadata): _262.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupMetadataAminoMsg): _262.MsgUpdateGroupMetadata;
                toAminoMsg(message: _262.MsgUpdateGroupMetadata): _262.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupMetadataProtoMsg): _262.MsgUpdateGroupMetadata;
                toProto(message: _262.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupMetadata): _262.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _262.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _262.MsgUpdateGroupMetadataResponse;
                toJSON(_: _262.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupMetadataResponse>): _262.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _262.MsgUpdateGroupMetadataResponseAmino): _262.MsgUpdateGroupMetadataResponse;
                toAmino(_: _262.MsgUpdateGroupMetadataResponse): _262.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupMetadataResponseAminoMsg): _262.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _262.MsgUpdateGroupMetadataResponse): _262.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupMetadataResponseProtoMsg): _262.MsgUpdateGroupMetadataResponse;
                toProto(message: _262.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupMetadataResponse): _262.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _262.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroupPolicy;
                fromJSON(object: any): _262.MsgCreateGroupPolicy;
                toJSON(message: _262.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroupPolicy>): _262.MsgCreateGroupPolicy;
                fromAmino(object: _262.MsgCreateGroupPolicyAmino): _262.MsgCreateGroupPolicy;
                toAmino(message: _262.MsgCreateGroupPolicy): _262.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _262.MsgCreateGroupPolicyAminoMsg): _262.MsgCreateGroupPolicy;
                toAminoMsg(message: _262.MsgCreateGroupPolicy): _262.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupPolicyProtoMsg): _262.MsgCreateGroupPolicy;
                toProto(message: _262.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroupPolicy): _262.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _262.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _262.MsgCreateGroupPolicyResponse;
                toJSON(message: _262.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroupPolicyResponse>): _262.MsgCreateGroupPolicyResponse;
                fromAmino(object: _262.MsgCreateGroupPolicyResponseAmino): _262.MsgCreateGroupPolicyResponse;
                toAmino(message: _262.MsgCreateGroupPolicyResponse): _262.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _262.MsgCreateGroupPolicyResponseAminoMsg): _262.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _262.MsgCreateGroupPolicyResponse): _262.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupPolicyResponseProtoMsg): _262.MsgCreateGroupPolicyResponse;
                toProto(message: _262.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroupPolicyResponse): _262.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _262.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _262.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _262.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupPolicyAdmin>): _262.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _262.MsgUpdateGroupPolicyAdminAmino): _262.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _262.MsgUpdateGroupPolicyAdmin): _262.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyAdminAminoMsg): _262.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyAdmin): _262.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyAdminProtoMsg): _262.MsgUpdateGroupPolicyAdmin;
                toProto(message: _262.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyAdmin): _262.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _262.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _262.MsgCreateGroupWithPolicy;
                toJSON(message: _262.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroupWithPolicy>): _262.MsgCreateGroupWithPolicy;
                fromAmino(object: _262.MsgCreateGroupWithPolicyAmino): _262.MsgCreateGroupWithPolicy;
                toAmino(message: _262.MsgCreateGroupWithPolicy): _262.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _262.MsgCreateGroupWithPolicyAminoMsg): _262.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _262.MsgCreateGroupWithPolicy): _262.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupWithPolicyProtoMsg): _262.MsgCreateGroupWithPolicy;
                toProto(message: _262.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroupWithPolicy): _262.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _262.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _262.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _262.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_262.MsgCreateGroupWithPolicyResponse>): _262.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _262.MsgCreateGroupWithPolicyResponseAmino): _262.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _262.MsgCreateGroupWithPolicyResponse): _262.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _262.MsgCreateGroupWithPolicyResponseAminoMsg): _262.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _262.MsgCreateGroupWithPolicyResponse): _262.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _262.MsgCreateGroupWithPolicyResponseProtoMsg): _262.MsgCreateGroupWithPolicyResponse;
                toProto(message: _262.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _262.MsgCreateGroupWithPolicyResponse): _262.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _262.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _262.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _262.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupPolicyAdminResponse>): _262.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _262.MsgUpdateGroupPolicyAdminResponseAmino): _262.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _262.MsgUpdateGroupPolicyAdminResponse): _262.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyAdminResponseAminoMsg): _262.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyAdminResponse): _262.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyAdminResponseProtoMsg): _262.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _262.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyAdminResponse): _262.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _262.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _262.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _262.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupPolicyDecisionPolicy>): _262.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _262.MsgUpdateGroupPolicyDecisionPolicyAmino): _262.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _262.MsgUpdateGroupPolicyDecisionPolicy): _262.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _262.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicy): _262.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _262.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _262.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicy): _262.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _262.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _262.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupPolicyDecisionPolicyResponse>): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _262.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _262.MsgUpdateGroupPolicyDecisionPolicyResponse): _262.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicyResponse): _262.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _262.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _262.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyDecisionPolicyResponse): _262.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _262.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _262.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _262.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_262.MsgUpdateGroupPolicyMetadata>): _262.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _262.MsgUpdateGroupPolicyMetadataAmino): _262.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _262.MsgUpdateGroupPolicyMetadata): _262.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyMetadataAminoMsg): _262.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyMetadata): _262.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyMetadataProtoMsg): _262.MsgUpdateGroupPolicyMetadata;
                toProto(message: _262.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyMetadata): _262.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _262.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _262.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _262.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_262.MsgUpdateGroupPolicyMetadataResponse>): _262.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _262.MsgUpdateGroupPolicyMetadataResponseAmino): _262.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _262.MsgUpdateGroupPolicyMetadataResponse): _262.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _262.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _262.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _262.MsgUpdateGroupPolicyMetadataResponse): _262.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _262.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _262.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _262.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _262.MsgUpdateGroupPolicyMetadataResponse): _262.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                encode(message: _262.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgSubmitProposal;
                fromJSON(object: any): _262.MsgSubmitProposal;
                toJSON(message: _262.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_262.MsgSubmitProposal>): _262.MsgSubmitProposal;
                fromAmino(object: _262.MsgSubmitProposalAmino): _262.MsgSubmitProposal;
                toAmino(message: _262.MsgSubmitProposal): _262.MsgSubmitProposalAmino;
                fromAminoMsg(object: _262.MsgSubmitProposalAminoMsg): _262.MsgSubmitProposal;
                toAminoMsg(message: _262.MsgSubmitProposal): _262.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _262.MsgSubmitProposalProtoMsg): _262.MsgSubmitProposal;
                toProto(message: _262.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _262.MsgSubmitProposal): _262.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _262.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgSubmitProposalResponse;
                fromJSON(object: any): _262.MsgSubmitProposalResponse;
                toJSON(message: _262.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_262.MsgSubmitProposalResponse>): _262.MsgSubmitProposalResponse;
                fromAmino(object: _262.MsgSubmitProposalResponseAmino): _262.MsgSubmitProposalResponse;
                toAmino(message: _262.MsgSubmitProposalResponse): _262.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _262.MsgSubmitProposalResponseAminoMsg): _262.MsgSubmitProposalResponse;
                toAminoMsg(message: _262.MsgSubmitProposalResponse): _262.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _262.MsgSubmitProposalResponseProtoMsg): _262.MsgSubmitProposalResponse;
                toProto(message: _262.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _262.MsgSubmitProposalResponse): _262.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                encode(message: _262.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgWithdrawProposal;
                fromJSON(object: any): _262.MsgWithdrawProposal;
                toJSON(message: _262.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_262.MsgWithdrawProposal>): _262.MsgWithdrawProposal;
                fromAmino(object: _262.MsgWithdrawProposalAmino): _262.MsgWithdrawProposal;
                toAmino(message: _262.MsgWithdrawProposal): _262.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _262.MsgWithdrawProposalAminoMsg): _262.MsgWithdrawProposal;
                toAminoMsg(message: _262.MsgWithdrawProposal): _262.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _262.MsgWithdrawProposalProtoMsg): _262.MsgWithdrawProposal;
                toProto(message: _262.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _262.MsgWithdrawProposal): _262.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _262.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgWithdrawProposalResponse;
                fromJSON(_: any): _262.MsgWithdrawProposalResponse;
                toJSON(_: _262.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_262.MsgWithdrawProposalResponse>): _262.MsgWithdrawProposalResponse;
                fromAmino(_: _262.MsgWithdrawProposalResponseAmino): _262.MsgWithdrawProposalResponse;
                toAmino(_: _262.MsgWithdrawProposalResponse): _262.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _262.MsgWithdrawProposalResponseAminoMsg): _262.MsgWithdrawProposalResponse;
                toAminoMsg(message: _262.MsgWithdrawProposalResponse): _262.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _262.MsgWithdrawProposalResponseProtoMsg): _262.MsgWithdrawProposalResponse;
                toProto(message: _262.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _262.MsgWithdrawProposalResponse): _262.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _262.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgVote;
                fromJSON(object: any): _262.MsgVote;
                toJSON(message: _262.MsgVote): unknown;
                fromPartial(object: Partial<_262.MsgVote>): _262.MsgVote;
                fromAmino(object: _262.MsgVoteAmino): _262.MsgVote;
                toAmino(message: _262.MsgVote): _262.MsgVoteAmino;
                fromAminoMsg(object: _262.MsgVoteAminoMsg): _262.MsgVote;
                toAminoMsg(message: _262.MsgVote): _262.MsgVoteAminoMsg;
                fromProtoMsg(message: _262.MsgVoteProtoMsg): _262.MsgVote;
                toProto(message: _262.MsgVote): Uint8Array;
                toProtoMsg(message: _262.MsgVote): _262.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _262.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgVoteResponse;
                fromJSON(_: any): _262.MsgVoteResponse;
                toJSON(_: _262.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_262.MsgVoteResponse>): _262.MsgVoteResponse;
                fromAmino(_: _262.MsgVoteResponseAmino): _262.MsgVoteResponse;
                toAmino(_: _262.MsgVoteResponse): _262.MsgVoteResponseAmino;
                fromAminoMsg(object: _262.MsgVoteResponseAminoMsg): _262.MsgVoteResponse;
                toAminoMsg(message: _262.MsgVoteResponse): _262.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _262.MsgVoteResponseProtoMsg): _262.MsgVoteResponse;
                toProto(message: _262.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _262.MsgVoteResponse): _262.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _262.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgExec;
                fromJSON(object: any): _262.MsgExec;
                toJSON(message: _262.MsgExec): unknown;
                fromPartial(object: Partial<_262.MsgExec>): _262.MsgExec;
                fromAmino(object: _262.MsgExecAmino): _262.MsgExec;
                toAmino(message: _262.MsgExec): _262.MsgExecAmino;
                fromAminoMsg(object: _262.MsgExecAminoMsg): _262.MsgExec;
                toAminoMsg(message: _262.MsgExec): _262.MsgExecAminoMsg;
                fromProtoMsg(message: _262.MsgExecProtoMsg): _262.MsgExec;
                toProto(message: _262.MsgExec): Uint8Array;
                toProtoMsg(message: _262.MsgExec): _262.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(_: _262.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgExecResponse;
                fromJSON(_: any): _262.MsgExecResponse;
                toJSON(_: _262.MsgExecResponse): unknown;
                fromPartial(_: Partial<_262.MsgExecResponse>): _262.MsgExecResponse;
                fromAmino(_: _262.MsgExecResponseAmino): _262.MsgExecResponse;
                toAmino(_: _262.MsgExecResponse): _262.MsgExecResponseAmino;
                fromAminoMsg(object: _262.MsgExecResponseAminoMsg): _262.MsgExecResponse;
                toAminoMsg(message: _262.MsgExecResponse): _262.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _262.MsgExecResponseProtoMsg): _262.MsgExecResponse;
                toProto(message: _262.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _262.MsgExecResponse): _262.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _262.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgLeaveGroup;
                fromJSON(object: any): _262.MsgLeaveGroup;
                toJSON(message: _262.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_262.MsgLeaveGroup>): _262.MsgLeaveGroup;
                fromAmino(object: _262.MsgLeaveGroupAmino): _262.MsgLeaveGroup;
                toAmino(message: _262.MsgLeaveGroup): _262.MsgLeaveGroupAmino;
                fromAminoMsg(object: _262.MsgLeaveGroupAminoMsg): _262.MsgLeaveGroup;
                toAminoMsg(message: _262.MsgLeaveGroup): _262.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _262.MsgLeaveGroupProtoMsg): _262.MsgLeaveGroup;
                toProto(message: _262.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _262.MsgLeaveGroup): _262.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _262.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.MsgLeaveGroupResponse;
                fromJSON(_: any): _262.MsgLeaveGroupResponse;
                toJSON(_: _262.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_262.MsgLeaveGroupResponse>): _262.MsgLeaveGroupResponse;
                fromAmino(_: _262.MsgLeaveGroupResponseAmino): _262.MsgLeaveGroupResponse;
                toAmino(_: _262.MsgLeaveGroupResponse): _262.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _262.MsgLeaveGroupResponseAminoMsg): _262.MsgLeaveGroupResponse;
                toAminoMsg(message: _262.MsgLeaveGroupResponse): _262.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _262.MsgLeaveGroupResponseProtoMsg): _262.MsgLeaveGroupResponse;
                toProto(message: _262.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _262.MsgLeaveGroupResponse): _262.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _261.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupInfoRequest;
                fromJSON(object: any): _261.QueryGroupInfoRequest;
                toJSON(message: _261.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupInfoRequest>): _261.QueryGroupInfoRequest;
                fromAmino(object: _261.QueryGroupInfoRequestAmino): _261.QueryGroupInfoRequest;
                toAmino(message: _261.QueryGroupInfoRequest): _261.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _261.QueryGroupInfoRequestAminoMsg): _261.QueryGroupInfoRequest;
                toAminoMsg(message: _261.QueryGroupInfoRequest): _261.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupInfoRequestProtoMsg): _261.QueryGroupInfoRequest;
                toProto(message: _261.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupInfoRequest): _261.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _261.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupInfoResponse;
                fromJSON(object: any): _261.QueryGroupInfoResponse;
                toJSON(message: _261.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupInfoResponse>): _261.QueryGroupInfoResponse;
                fromAmino(object: _261.QueryGroupInfoResponseAmino): _261.QueryGroupInfoResponse;
                toAmino(message: _261.QueryGroupInfoResponse): _261.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _261.QueryGroupInfoResponseAminoMsg): _261.QueryGroupInfoResponse;
                toAminoMsg(message: _261.QueryGroupInfoResponse): _261.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupInfoResponseProtoMsg): _261.QueryGroupInfoResponse;
                toProto(message: _261.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupInfoResponse): _261.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _261.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _261.QueryGroupPolicyInfoRequest;
                toJSON(message: _261.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupPolicyInfoRequest>): _261.QueryGroupPolicyInfoRequest;
                fromAmino(object: _261.QueryGroupPolicyInfoRequestAmino): _261.QueryGroupPolicyInfoRequest;
                toAmino(message: _261.QueryGroupPolicyInfoRequest): _261.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _261.QueryGroupPolicyInfoRequestAminoMsg): _261.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _261.QueryGroupPolicyInfoRequest): _261.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPolicyInfoRequestProtoMsg): _261.QueryGroupPolicyInfoRequest;
                toProto(message: _261.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPolicyInfoRequest): _261.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _261.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _261.QueryGroupPolicyInfoResponse;
                toJSON(message: _261.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupPolicyInfoResponse>): _261.QueryGroupPolicyInfoResponse;
                fromAmino(object: _261.QueryGroupPolicyInfoResponseAmino): _261.QueryGroupPolicyInfoResponse;
                toAmino(message: _261.QueryGroupPolicyInfoResponse): _261.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _261.QueryGroupPolicyInfoResponseAminoMsg): _261.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _261.QueryGroupPolicyInfoResponse): _261.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPolicyInfoResponseProtoMsg): _261.QueryGroupPolicyInfoResponse;
                toProto(message: _261.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPolicyInfoResponse): _261.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _261.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupMembersRequest;
                fromJSON(object: any): _261.QueryGroupMembersRequest;
                toJSON(message: _261.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupMembersRequest>): _261.QueryGroupMembersRequest;
                fromAmino(object: _261.QueryGroupMembersRequestAmino): _261.QueryGroupMembersRequest;
                toAmino(message: _261.QueryGroupMembersRequest): _261.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _261.QueryGroupMembersRequestAminoMsg): _261.QueryGroupMembersRequest;
                toAminoMsg(message: _261.QueryGroupMembersRequest): _261.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupMembersRequestProtoMsg): _261.QueryGroupMembersRequest;
                toProto(message: _261.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupMembersRequest): _261.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _261.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupMembersResponse;
                fromJSON(object: any): _261.QueryGroupMembersResponse;
                toJSON(message: _261.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupMembersResponse>): _261.QueryGroupMembersResponse;
                fromAmino(object: _261.QueryGroupMembersResponseAmino): _261.QueryGroupMembersResponse;
                toAmino(message: _261.QueryGroupMembersResponse): _261.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _261.QueryGroupMembersResponseAminoMsg): _261.QueryGroupMembersResponse;
                toAminoMsg(message: _261.QueryGroupMembersResponse): _261.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupMembersResponseProtoMsg): _261.QueryGroupMembersResponse;
                toProto(message: _261.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupMembersResponse): _261.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _261.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupsByAdminRequest;
                fromJSON(object: any): _261.QueryGroupsByAdminRequest;
                toJSON(message: _261.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupsByAdminRequest>): _261.QueryGroupsByAdminRequest;
                fromAmino(object: _261.QueryGroupsByAdminRequestAmino): _261.QueryGroupsByAdminRequest;
                toAmino(message: _261.QueryGroupsByAdminRequest): _261.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _261.QueryGroupsByAdminRequestAminoMsg): _261.QueryGroupsByAdminRequest;
                toAminoMsg(message: _261.QueryGroupsByAdminRequest): _261.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupsByAdminRequestProtoMsg): _261.QueryGroupsByAdminRequest;
                toProto(message: _261.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupsByAdminRequest): _261.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _261.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupsByAdminResponse;
                fromJSON(object: any): _261.QueryGroupsByAdminResponse;
                toJSON(message: _261.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupsByAdminResponse>): _261.QueryGroupsByAdminResponse;
                fromAmino(object: _261.QueryGroupsByAdminResponseAmino): _261.QueryGroupsByAdminResponse;
                toAmino(message: _261.QueryGroupsByAdminResponse): _261.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _261.QueryGroupsByAdminResponseAminoMsg): _261.QueryGroupsByAdminResponse;
                toAminoMsg(message: _261.QueryGroupsByAdminResponse): _261.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupsByAdminResponseProtoMsg): _261.QueryGroupsByAdminResponse;
                toProto(message: _261.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupsByAdminResponse): _261.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _261.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _261.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _261.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupPoliciesByGroupRequest>): _261.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _261.QueryGroupPoliciesByGroupRequestAmino): _261.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _261.QueryGroupPoliciesByGroupRequest): _261.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _261.QueryGroupPoliciesByGroupRequestAminoMsg): _261.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _261.QueryGroupPoliciesByGroupRequest): _261.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPoliciesByGroupRequestProtoMsg): _261.QueryGroupPoliciesByGroupRequest;
                toProto(message: _261.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPoliciesByGroupRequest): _261.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _261.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _261.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _261.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupPoliciesByGroupResponse>): _261.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _261.QueryGroupPoliciesByGroupResponseAmino): _261.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _261.QueryGroupPoliciesByGroupResponse): _261.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _261.QueryGroupPoliciesByGroupResponseAminoMsg): _261.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _261.QueryGroupPoliciesByGroupResponse): _261.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPoliciesByGroupResponseProtoMsg): _261.QueryGroupPoliciesByGroupResponse;
                toProto(message: _261.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPoliciesByGroupResponse): _261.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _261.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _261.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _261.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupPoliciesByAdminRequest>): _261.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _261.QueryGroupPoliciesByAdminRequestAmino): _261.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _261.QueryGroupPoliciesByAdminRequest): _261.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _261.QueryGroupPoliciesByAdminRequestAminoMsg): _261.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _261.QueryGroupPoliciesByAdminRequest): _261.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPoliciesByAdminRequestProtoMsg): _261.QueryGroupPoliciesByAdminRequest;
                toProto(message: _261.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPoliciesByAdminRequest): _261.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _261.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _261.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _261.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupPoliciesByAdminResponse>): _261.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _261.QueryGroupPoliciesByAdminResponseAmino): _261.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _261.QueryGroupPoliciesByAdminResponse): _261.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _261.QueryGroupPoliciesByAdminResponseAminoMsg): _261.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _261.QueryGroupPoliciesByAdminResponse): _261.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupPoliciesByAdminResponseProtoMsg): _261.QueryGroupPoliciesByAdminResponse;
                toProto(message: _261.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupPoliciesByAdminResponse): _261.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _261.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryProposalRequest;
                fromJSON(object: any): _261.QueryProposalRequest;
                toJSON(message: _261.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_261.QueryProposalRequest>): _261.QueryProposalRequest;
                fromAmino(object: _261.QueryProposalRequestAmino): _261.QueryProposalRequest;
                toAmino(message: _261.QueryProposalRequest): _261.QueryProposalRequestAmino;
                fromAminoMsg(object: _261.QueryProposalRequestAminoMsg): _261.QueryProposalRequest;
                toAminoMsg(message: _261.QueryProposalRequest): _261.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _261.QueryProposalRequestProtoMsg): _261.QueryProposalRequest;
                toProto(message: _261.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _261.QueryProposalRequest): _261.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _261.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryProposalResponse;
                fromJSON(object: any): _261.QueryProposalResponse;
                toJSON(message: _261.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_261.QueryProposalResponse>): _261.QueryProposalResponse;
                fromAmino(object: _261.QueryProposalResponseAmino): _261.QueryProposalResponse;
                toAmino(message: _261.QueryProposalResponse): _261.QueryProposalResponseAmino;
                fromAminoMsg(object: _261.QueryProposalResponseAminoMsg): _261.QueryProposalResponse;
                toAminoMsg(message: _261.QueryProposalResponse): _261.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _261.QueryProposalResponseProtoMsg): _261.QueryProposalResponse;
                toProto(message: _261.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _261.QueryProposalResponse): _261.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _261.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _261.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _261.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_261.QueryProposalsByGroupPolicyRequest>): _261.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _261.QueryProposalsByGroupPolicyRequestAmino): _261.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _261.QueryProposalsByGroupPolicyRequest): _261.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _261.QueryProposalsByGroupPolicyRequestAminoMsg): _261.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _261.QueryProposalsByGroupPolicyRequest): _261.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _261.QueryProposalsByGroupPolicyRequestProtoMsg): _261.QueryProposalsByGroupPolicyRequest;
                toProto(message: _261.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _261.QueryProposalsByGroupPolicyRequest): _261.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _261.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _261.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _261.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_261.QueryProposalsByGroupPolicyResponse>): _261.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _261.QueryProposalsByGroupPolicyResponseAmino): _261.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _261.QueryProposalsByGroupPolicyResponse): _261.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _261.QueryProposalsByGroupPolicyResponseAminoMsg): _261.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _261.QueryProposalsByGroupPolicyResponse): _261.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _261.QueryProposalsByGroupPolicyResponseProtoMsg): _261.QueryProposalsByGroupPolicyResponse;
                toProto(message: _261.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _261.QueryProposalsByGroupPolicyResponse): _261.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _261.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _261.QueryVoteByProposalVoterRequest;
                toJSON(message: _261.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_261.QueryVoteByProposalVoterRequest>): _261.QueryVoteByProposalVoterRequest;
                fromAmino(object: _261.QueryVoteByProposalVoterRequestAmino): _261.QueryVoteByProposalVoterRequest;
                toAmino(message: _261.QueryVoteByProposalVoterRequest): _261.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _261.QueryVoteByProposalVoterRequestAminoMsg): _261.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _261.QueryVoteByProposalVoterRequest): _261.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _261.QueryVoteByProposalVoterRequestProtoMsg): _261.QueryVoteByProposalVoterRequest;
                toProto(message: _261.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _261.QueryVoteByProposalVoterRequest): _261.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _261.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _261.QueryVoteByProposalVoterResponse;
                toJSON(message: _261.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_261.QueryVoteByProposalVoterResponse>): _261.QueryVoteByProposalVoterResponse;
                fromAmino(object: _261.QueryVoteByProposalVoterResponseAmino): _261.QueryVoteByProposalVoterResponse;
                toAmino(message: _261.QueryVoteByProposalVoterResponse): _261.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _261.QueryVoteByProposalVoterResponseAminoMsg): _261.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _261.QueryVoteByProposalVoterResponse): _261.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _261.QueryVoteByProposalVoterResponseProtoMsg): _261.QueryVoteByProposalVoterResponse;
                toProto(message: _261.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _261.QueryVoteByProposalVoterResponse): _261.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _261.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVotesByProposalRequest;
                fromJSON(object: any): _261.QueryVotesByProposalRequest;
                toJSON(message: _261.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_261.QueryVotesByProposalRequest>): _261.QueryVotesByProposalRequest;
                fromAmino(object: _261.QueryVotesByProposalRequestAmino): _261.QueryVotesByProposalRequest;
                toAmino(message: _261.QueryVotesByProposalRequest): _261.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _261.QueryVotesByProposalRequestAminoMsg): _261.QueryVotesByProposalRequest;
                toAminoMsg(message: _261.QueryVotesByProposalRequest): _261.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _261.QueryVotesByProposalRequestProtoMsg): _261.QueryVotesByProposalRequest;
                toProto(message: _261.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _261.QueryVotesByProposalRequest): _261.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _261.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVotesByProposalResponse;
                fromJSON(object: any): _261.QueryVotesByProposalResponse;
                toJSON(message: _261.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_261.QueryVotesByProposalResponse>): _261.QueryVotesByProposalResponse;
                fromAmino(object: _261.QueryVotesByProposalResponseAmino): _261.QueryVotesByProposalResponse;
                toAmino(message: _261.QueryVotesByProposalResponse): _261.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _261.QueryVotesByProposalResponseAminoMsg): _261.QueryVotesByProposalResponse;
                toAminoMsg(message: _261.QueryVotesByProposalResponse): _261.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _261.QueryVotesByProposalResponseProtoMsg): _261.QueryVotesByProposalResponse;
                toProto(message: _261.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _261.QueryVotesByProposalResponse): _261.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _261.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVotesByVoterRequest;
                fromJSON(object: any): _261.QueryVotesByVoterRequest;
                toJSON(message: _261.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_261.QueryVotesByVoterRequest>): _261.QueryVotesByVoterRequest;
                fromAmino(object: _261.QueryVotesByVoterRequestAmino): _261.QueryVotesByVoterRequest;
                toAmino(message: _261.QueryVotesByVoterRequest): _261.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _261.QueryVotesByVoterRequestAminoMsg): _261.QueryVotesByVoterRequest;
                toAminoMsg(message: _261.QueryVotesByVoterRequest): _261.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _261.QueryVotesByVoterRequestProtoMsg): _261.QueryVotesByVoterRequest;
                toProto(message: _261.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _261.QueryVotesByVoterRequest): _261.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _261.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryVotesByVoterResponse;
                fromJSON(object: any): _261.QueryVotesByVoterResponse;
                toJSON(message: _261.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_261.QueryVotesByVoterResponse>): _261.QueryVotesByVoterResponse;
                fromAmino(object: _261.QueryVotesByVoterResponseAmino): _261.QueryVotesByVoterResponse;
                toAmino(message: _261.QueryVotesByVoterResponse): _261.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _261.QueryVotesByVoterResponseAminoMsg): _261.QueryVotesByVoterResponse;
                toAminoMsg(message: _261.QueryVotesByVoterResponse): _261.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _261.QueryVotesByVoterResponseProtoMsg): _261.QueryVotesByVoterResponse;
                toProto(message: _261.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _261.QueryVotesByVoterResponse): _261.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _261.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupsByMemberRequest;
                fromJSON(object: any): _261.QueryGroupsByMemberRequest;
                toJSON(message: _261.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_261.QueryGroupsByMemberRequest>): _261.QueryGroupsByMemberRequest;
                fromAmino(object: _261.QueryGroupsByMemberRequestAmino): _261.QueryGroupsByMemberRequest;
                toAmino(message: _261.QueryGroupsByMemberRequest): _261.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _261.QueryGroupsByMemberRequestAminoMsg): _261.QueryGroupsByMemberRequest;
                toAminoMsg(message: _261.QueryGroupsByMemberRequest): _261.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _261.QueryGroupsByMemberRequestProtoMsg): _261.QueryGroupsByMemberRequest;
                toProto(message: _261.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _261.QueryGroupsByMemberRequest): _261.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _261.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryGroupsByMemberResponse;
                fromJSON(object: any): _261.QueryGroupsByMemberResponse;
                toJSON(message: _261.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_261.QueryGroupsByMemberResponse>): _261.QueryGroupsByMemberResponse;
                fromAmino(object: _261.QueryGroupsByMemberResponseAmino): _261.QueryGroupsByMemberResponse;
                toAmino(message: _261.QueryGroupsByMemberResponse): _261.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _261.QueryGroupsByMemberResponseAminoMsg): _261.QueryGroupsByMemberResponse;
                toAminoMsg(message: _261.QueryGroupsByMemberResponse): _261.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _261.QueryGroupsByMemberResponseProtoMsg): _261.QueryGroupsByMemberResponse;
                toProto(message: _261.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _261.QueryGroupsByMemberResponse): _261.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _261.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryTallyResultRequest;
                fromJSON(object: any): _261.QueryTallyResultRequest;
                toJSON(message: _261.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_261.QueryTallyResultRequest>): _261.QueryTallyResultRequest;
                fromAmino(object: _261.QueryTallyResultRequestAmino): _261.QueryTallyResultRequest;
                toAmino(message: _261.QueryTallyResultRequest): _261.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _261.QueryTallyResultRequestAminoMsg): _261.QueryTallyResultRequest;
                toAminoMsg(message: _261.QueryTallyResultRequest): _261.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _261.QueryTallyResultRequestProtoMsg): _261.QueryTallyResultRequest;
                toProto(message: _261.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _261.QueryTallyResultRequest): _261.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _261.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryTallyResultResponse;
                fromJSON(object: any): _261.QueryTallyResultResponse;
                toJSON(message: _261.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_261.QueryTallyResultResponse>): _261.QueryTallyResultResponse;
                fromAmino(object: _261.QueryTallyResultResponseAmino): _261.QueryTallyResultResponse;
                toAmino(message: _261.QueryTallyResultResponse): _261.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _261.QueryTallyResultResponseAminoMsg): _261.QueryTallyResultResponse;
                toAminoMsg(message: _261.QueryTallyResultResponse): _261.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _261.QueryTallyResultResponseProtoMsg): _261.QueryTallyResultResponse;
                toProto(message: _261.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _261.QueryTallyResultResponse): _261.QueryTallyResultResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _260.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.GenesisState;
                fromJSON(object: any): _260.GenesisState;
                toJSON(message: _260.GenesisState): unknown;
                fromPartial(object: Partial<_260.GenesisState>): _260.GenesisState;
                fromAmino(object: _260.GenesisStateAmino): _260.GenesisState;
                toAmino(message: _260.GenesisState): _260.GenesisStateAmino;
                fromAminoMsg(object: _260.GenesisStateAminoMsg): _260.GenesisState;
                toAminoMsg(message: _260.GenesisState): _260.GenesisStateAminoMsg;
                fromProtoMsg(message: _260.GenesisStateProtoMsg): _260.GenesisState;
                toProto(message: _260.GenesisState): Uint8Array;
                toProtoMsg(message: _260.GenesisState): _260.GenesisStateProtoMsg;
            };
            EventCreateGroup: {
                encode(message: _259.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventCreateGroup;
                fromJSON(object: any): _259.EventCreateGroup;
                toJSON(message: _259.EventCreateGroup): unknown;
                fromPartial(object: Partial<_259.EventCreateGroup>): _259.EventCreateGroup;
                fromAmino(object: _259.EventCreateGroupAmino): _259.EventCreateGroup;
                toAmino(message: _259.EventCreateGroup): _259.EventCreateGroupAmino;
                fromAminoMsg(object: _259.EventCreateGroupAminoMsg): _259.EventCreateGroup;
                toAminoMsg(message: _259.EventCreateGroup): _259.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _259.EventCreateGroupProtoMsg): _259.EventCreateGroup;
                toProto(message: _259.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _259.EventCreateGroup): _259.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _259.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventUpdateGroup;
                fromJSON(object: any): _259.EventUpdateGroup;
                toJSON(message: _259.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_259.EventUpdateGroup>): _259.EventUpdateGroup;
                fromAmino(object: _259.EventUpdateGroupAmino): _259.EventUpdateGroup;
                toAmino(message: _259.EventUpdateGroup): _259.EventUpdateGroupAmino;
                fromAminoMsg(object: _259.EventUpdateGroupAminoMsg): _259.EventUpdateGroup;
                toAminoMsg(message: _259.EventUpdateGroup): _259.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _259.EventUpdateGroupProtoMsg): _259.EventUpdateGroup;
                toProto(message: _259.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _259.EventUpdateGroup): _259.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _259.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventCreateGroupPolicy;
                fromJSON(object: any): _259.EventCreateGroupPolicy;
                toJSON(message: _259.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_259.EventCreateGroupPolicy>): _259.EventCreateGroupPolicy;
                fromAmino(object: _259.EventCreateGroupPolicyAmino): _259.EventCreateGroupPolicy;
                toAmino(message: _259.EventCreateGroupPolicy): _259.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _259.EventCreateGroupPolicyAminoMsg): _259.EventCreateGroupPolicy;
                toAminoMsg(message: _259.EventCreateGroupPolicy): _259.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _259.EventCreateGroupPolicyProtoMsg): _259.EventCreateGroupPolicy;
                toProto(message: _259.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _259.EventCreateGroupPolicy): _259.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _259.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventUpdateGroupPolicy;
                fromJSON(object: any): _259.EventUpdateGroupPolicy;
                toJSON(message: _259.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_259.EventUpdateGroupPolicy>): _259.EventUpdateGroupPolicy;
                fromAmino(object: _259.EventUpdateGroupPolicyAmino): _259.EventUpdateGroupPolicy;
                toAmino(message: _259.EventUpdateGroupPolicy): _259.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _259.EventUpdateGroupPolicyAminoMsg): _259.EventUpdateGroupPolicy;
                toAminoMsg(message: _259.EventUpdateGroupPolicy): _259.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _259.EventUpdateGroupPolicyProtoMsg): _259.EventUpdateGroupPolicy;
                toProto(message: _259.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _259.EventUpdateGroupPolicy): _259.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _259.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventSubmitProposal;
                fromJSON(object: any): _259.EventSubmitProposal;
                toJSON(message: _259.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_259.EventSubmitProposal>): _259.EventSubmitProposal;
                fromAmino(object: _259.EventSubmitProposalAmino): _259.EventSubmitProposal;
                toAmino(message: _259.EventSubmitProposal): _259.EventSubmitProposalAmino;
                fromAminoMsg(object: _259.EventSubmitProposalAminoMsg): _259.EventSubmitProposal;
                toAminoMsg(message: _259.EventSubmitProposal): _259.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _259.EventSubmitProposalProtoMsg): _259.EventSubmitProposal;
                toProto(message: _259.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _259.EventSubmitProposal): _259.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _259.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventWithdrawProposal;
                fromJSON(object: any): _259.EventWithdrawProposal;
                toJSON(message: _259.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_259.EventWithdrawProposal>): _259.EventWithdrawProposal;
                fromAmino(object: _259.EventWithdrawProposalAmino): _259.EventWithdrawProposal;
                toAmino(message: _259.EventWithdrawProposal): _259.EventWithdrawProposalAmino;
                fromAminoMsg(object: _259.EventWithdrawProposalAminoMsg): _259.EventWithdrawProposal;
                toAminoMsg(message: _259.EventWithdrawProposal): _259.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _259.EventWithdrawProposalProtoMsg): _259.EventWithdrawProposal;
                toProto(message: _259.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _259.EventWithdrawProposal): _259.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _259.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventVote;
                fromJSON(object: any): _259.EventVote;
                toJSON(message: _259.EventVote): unknown;
                fromPartial(object: Partial<_259.EventVote>): _259.EventVote;
                fromAmino(object: _259.EventVoteAmino): _259.EventVote;
                toAmino(message: _259.EventVote): _259.EventVoteAmino;
                fromAminoMsg(object: _259.EventVoteAminoMsg): _259.EventVote;
                toAminoMsg(message: _259.EventVote): _259.EventVoteAminoMsg;
                fromProtoMsg(message: _259.EventVoteProtoMsg): _259.EventVote;
                toProto(message: _259.EventVote): Uint8Array;
                toProtoMsg(message: _259.EventVote): _259.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _259.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventExec;
                fromJSON(object: any): _259.EventExec;
                toJSON(message: _259.EventExec): unknown;
                fromPartial(object: Partial<_259.EventExec>): _259.EventExec;
                fromAmino(object: _259.EventExecAmino): _259.EventExec;
                toAmino(message: _259.EventExec): _259.EventExecAmino;
                fromAminoMsg(object: _259.EventExecAminoMsg): _259.EventExec;
                toAminoMsg(message: _259.EventExec): _259.EventExecAminoMsg;
                fromProtoMsg(message: _259.EventExecProtoMsg): _259.EventExec;
                toProto(message: _259.EventExec): Uint8Array;
                toProtoMsg(message: _259.EventExec): _259.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _259.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.EventLeaveGroup;
                fromJSON(object: any): _259.EventLeaveGroup;
                toJSON(message: _259.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_259.EventLeaveGroup>): _259.EventLeaveGroup;
                fromAmino(object: _259.EventLeaveGroupAmino): _259.EventLeaveGroup;
                toAmino(message: _259.EventLeaveGroup): _259.EventLeaveGroupAmino;
                fromAminoMsg(object: _259.EventLeaveGroupAminoMsg): _259.EventLeaveGroup;
                toAminoMsg(message: _259.EventLeaveGroup): _259.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _259.EventLeaveGroupProtoMsg): _259.EventLeaveGroup;
                toProto(message: _259.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _259.EventLeaveGroup): _259.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _458.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _266.QueryParamsRequest): Promise<_266.QueryParamsResponse>;
                inflation(request?: _266.QueryInflationRequest): Promise<_266.QueryInflationResponse>;
                annualProvisions(request?: _266.QueryAnnualProvisionsRequest): Promise<_266.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _266.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsRequest;
                fromJSON(_: any): _266.QueryParamsRequest;
                toJSON(_: _266.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_266.QueryParamsRequest>): _266.QueryParamsRequest;
                fromAmino(_: _266.QueryParamsRequestAmino): _266.QueryParamsRequest;
                toAmino(_: _266.QueryParamsRequest): _266.QueryParamsRequestAmino;
                fromAminoMsg(object: _266.QueryParamsRequestAminoMsg): _266.QueryParamsRequest;
                toAminoMsg(message: _266.QueryParamsRequest): _266.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryParamsRequestProtoMsg): _266.QueryParamsRequest;
                toProto(message: _266.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryParamsRequest): _266.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _266.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryParamsResponse;
                fromJSON(object: any): _266.QueryParamsResponse;
                toJSON(message: _266.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_266.QueryParamsResponse>): _266.QueryParamsResponse;
                fromAmino(object: _266.QueryParamsResponseAmino): _266.QueryParamsResponse;
                toAmino(message: _266.QueryParamsResponse): _266.QueryParamsResponseAmino;
                fromAminoMsg(object: _266.QueryParamsResponseAminoMsg): _266.QueryParamsResponse;
                toAminoMsg(message: _266.QueryParamsResponse): _266.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryParamsResponseProtoMsg): _266.QueryParamsResponse;
                toProto(message: _266.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryParamsResponse): _266.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _266.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryInflationRequest;
                fromJSON(_: any): _266.QueryInflationRequest;
                toJSON(_: _266.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_266.QueryInflationRequest>): _266.QueryInflationRequest;
                fromAmino(_: _266.QueryInflationRequestAmino): _266.QueryInflationRequest;
                toAmino(_: _266.QueryInflationRequest): _266.QueryInflationRequestAmino;
                fromAminoMsg(object: _266.QueryInflationRequestAminoMsg): _266.QueryInflationRequest;
                toAminoMsg(message: _266.QueryInflationRequest): _266.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _266.QueryInflationRequestProtoMsg): _266.QueryInflationRequest;
                toProto(message: _266.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _266.QueryInflationRequest): _266.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _266.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryInflationResponse;
                fromJSON(object: any): _266.QueryInflationResponse;
                toJSON(message: _266.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_266.QueryInflationResponse>): _266.QueryInflationResponse;
                fromAmino(object: _266.QueryInflationResponseAmino): _266.QueryInflationResponse;
                toAmino(message: _266.QueryInflationResponse): _266.QueryInflationResponseAmino;
                fromAminoMsg(object: _266.QueryInflationResponseAminoMsg): _266.QueryInflationResponse;
                toAminoMsg(message: _266.QueryInflationResponse): _266.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _266.QueryInflationResponseProtoMsg): _266.QueryInflationResponse;
                toProto(message: _266.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _266.QueryInflationResponse): _266.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _266.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _266.QueryAnnualProvisionsRequest;
                toJSON(_: _266.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_266.QueryAnnualProvisionsRequest>): _266.QueryAnnualProvisionsRequest;
                fromAmino(_: _266.QueryAnnualProvisionsRequestAmino): _266.QueryAnnualProvisionsRequest;
                toAmino(_: _266.QueryAnnualProvisionsRequest): _266.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _266.QueryAnnualProvisionsRequestAminoMsg): _266.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _266.QueryAnnualProvisionsRequest): _266.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryAnnualProvisionsRequestProtoMsg): _266.QueryAnnualProvisionsRequest;
                toProto(message: _266.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryAnnualProvisionsRequest): _266.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _266.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _266.QueryAnnualProvisionsResponse;
                toJSON(message: _266.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_266.QueryAnnualProvisionsResponse>): _266.QueryAnnualProvisionsResponse;
                fromAmino(object: _266.QueryAnnualProvisionsResponseAmino): _266.QueryAnnualProvisionsResponse;
                toAmino(message: _266.QueryAnnualProvisionsResponse): _266.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _266.QueryAnnualProvisionsResponseAminoMsg): _266.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _266.QueryAnnualProvisionsResponse): _266.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryAnnualProvisionsResponseProtoMsg): _266.QueryAnnualProvisionsResponse;
                toProto(message: _266.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryAnnualProvisionsResponse): _266.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _265.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Minter;
                fromJSON(object: any): _265.Minter;
                toJSON(message: _265.Minter): unknown;
                fromPartial(object: Partial<_265.Minter>): _265.Minter;
                fromAmino(object: _265.MinterAmino): _265.Minter;
                toAmino(message: _265.Minter): _265.MinterAmino;
                fromAminoMsg(object: _265.MinterAminoMsg): _265.Minter;
                toAminoMsg(message: _265.Minter): _265.MinterAminoMsg;
                fromProtoMsg(message: _265.MinterProtoMsg): _265.Minter;
                toProto(message: _265.Minter): Uint8Array;
                toProtoMsg(message: _265.Minter): _265.MinterProtoMsg;
            };
            Params: {
                encode(message: _265.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.Params;
                fromJSON(object: any): _265.Params;
                toJSON(message: _265.Params): unknown;
                fromPartial(object: Partial<_265.Params>): _265.Params;
                fromAmino(object: _265.ParamsAmino): _265.Params;
                toAmino(message: _265.Params): _265.ParamsAmino;
                fromAminoMsg(object: _265.ParamsAminoMsg): _265.Params;
                toAminoMsg(message: _265.Params): _265.ParamsAminoMsg;
                fromProtoMsg(message: _265.ParamsProtoMsg): _265.Params;
                toProto(message: _265.Params): Uint8Array;
                toProtoMsg(message: _265.Params): _265.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _264.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.GenesisState;
                fromJSON(object: any): _264.GenesisState;
                toJSON(message: _264.GenesisState): unknown;
                fromPartial(object: Partial<_264.GenesisState>): _264.GenesisState;
                fromAmino(object: _264.GenesisStateAmino): _264.GenesisState;
                toAmino(message: _264.GenesisState): _264.GenesisStateAmino;
                fromAminoMsg(object: _264.GenesisStateAminoMsg): _264.GenesisState;
                toAminoMsg(message: _264.GenesisState): _264.GenesisStateAminoMsg;
                fromProtoMsg(message: _264.GenesisStateProtoMsg): _264.GenesisState;
                toProto(message: _264.GenesisState): Uint8Array;
                toProtoMsg(message: _264.GenesisState): _264.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _474.MsgClientImpl;
            QueryClientImpl: typeof _459.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _271.QueryBalanceRequest): Promise<_271.QueryBalanceResponse>;
                owner(request: _271.QueryOwnerRequest): Promise<_271.QueryOwnerResponse>;
                supply(request: _271.QuerySupplyRequest): Promise<_271.QuerySupplyResponse>;
                nFTs(request: _271.QueryNFTsRequest): Promise<_271.QueryNFTsResponse>;
                nFT(request: _271.QueryNFTRequest): Promise<_271.QueryNFTResponse>;
                class(request: _271.QueryClassRequest): Promise<_271.QueryClassResponse>;
                classes(request?: _271.QueryClassesRequest): Promise<_271.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _272.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _272.MsgSend): {
                        typeUrl: string;
                        value: _272.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _272.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _272.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _272.MsgSend): {
                        typeUrl: string;
                        value: _272.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _272.MsgSend) => _272.MsgSendAmino;
                    fromAmino: (object: _272.MsgSendAmino) => _272.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _272.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.MsgSend;
                fromJSON(object: any): _272.MsgSend;
                toJSON(message: _272.MsgSend): unknown;
                fromPartial(object: Partial<_272.MsgSend>): _272.MsgSend;
                fromAmino(object: _272.MsgSendAmino): _272.MsgSend;
                toAmino(message: _272.MsgSend): _272.MsgSendAmino;
                fromAminoMsg(object: _272.MsgSendAminoMsg): _272.MsgSend;
                toAminoMsg(message: _272.MsgSend): _272.MsgSendAminoMsg;
                fromProtoMsg(message: _272.MsgSendProtoMsg): _272.MsgSend;
                toProto(message: _272.MsgSend): Uint8Array;
                toProtoMsg(message: _272.MsgSend): _272.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _272.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.MsgSendResponse;
                fromJSON(_: any): _272.MsgSendResponse;
                toJSON(_: _272.MsgSendResponse): unknown;
                fromPartial(_: Partial<_272.MsgSendResponse>): _272.MsgSendResponse;
                fromAmino(_: _272.MsgSendResponseAmino): _272.MsgSendResponse;
                toAmino(_: _272.MsgSendResponse): _272.MsgSendResponseAmino;
                fromAminoMsg(object: _272.MsgSendResponseAminoMsg): _272.MsgSendResponse;
                toAminoMsg(message: _272.MsgSendResponse): _272.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _272.MsgSendResponseProtoMsg): _272.MsgSendResponse;
                toProto(message: _272.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _272.MsgSendResponse): _272.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _271.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryBalanceRequest;
                fromJSON(object: any): _271.QueryBalanceRequest;
                toJSON(message: _271.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_271.QueryBalanceRequest>): _271.QueryBalanceRequest;
                fromAmino(object: _271.QueryBalanceRequestAmino): _271.QueryBalanceRequest;
                toAmino(message: _271.QueryBalanceRequest): _271.QueryBalanceRequestAmino;
                fromAminoMsg(object: _271.QueryBalanceRequestAminoMsg): _271.QueryBalanceRequest;
                toAminoMsg(message: _271.QueryBalanceRequest): _271.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _271.QueryBalanceRequestProtoMsg): _271.QueryBalanceRequest;
                toProto(message: _271.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _271.QueryBalanceRequest): _271.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _271.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryBalanceResponse;
                fromJSON(object: any): _271.QueryBalanceResponse;
                toJSON(message: _271.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_271.QueryBalanceResponse>): _271.QueryBalanceResponse;
                fromAmino(object: _271.QueryBalanceResponseAmino): _271.QueryBalanceResponse;
                toAmino(message: _271.QueryBalanceResponse): _271.QueryBalanceResponseAmino;
                fromAminoMsg(object: _271.QueryBalanceResponseAminoMsg): _271.QueryBalanceResponse;
                toAminoMsg(message: _271.QueryBalanceResponse): _271.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _271.QueryBalanceResponseProtoMsg): _271.QueryBalanceResponse;
                toProto(message: _271.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _271.QueryBalanceResponse): _271.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _271.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryOwnerRequest;
                fromJSON(object: any): _271.QueryOwnerRequest;
                toJSON(message: _271.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_271.QueryOwnerRequest>): _271.QueryOwnerRequest;
                fromAmino(object: _271.QueryOwnerRequestAmino): _271.QueryOwnerRequest;
                toAmino(message: _271.QueryOwnerRequest): _271.QueryOwnerRequestAmino;
                fromAminoMsg(object: _271.QueryOwnerRequestAminoMsg): _271.QueryOwnerRequest;
                toAminoMsg(message: _271.QueryOwnerRequest): _271.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _271.QueryOwnerRequestProtoMsg): _271.QueryOwnerRequest;
                toProto(message: _271.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _271.QueryOwnerRequest): _271.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _271.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryOwnerResponse;
                fromJSON(object: any): _271.QueryOwnerResponse;
                toJSON(message: _271.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_271.QueryOwnerResponse>): _271.QueryOwnerResponse;
                fromAmino(object: _271.QueryOwnerResponseAmino): _271.QueryOwnerResponse;
                toAmino(message: _271.QueryOwnerResponse): _271.QueryOwnerResponseAmino;
                fromAminoMsg(object: _271.QueryOwnerResponseAminoMsg): _271.QueryOwnerResponse;
                toAminoMsg(message: _271.QueryOwnerResponse): _271.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _271.QueryOwnerResponseProtoMsg): _271.QueryOwnerResponse;
                toProto(message: _271.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _271.QueryOwnerResponse): _271.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _271.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QuerySupplyRequest;
                fromJSON(object: any): _271.QuerySupplyRequest;
                toJSON(message: _271.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_271.QuerySupplyRequest>): _271.QuerySupplyRequest;
                fromAmino(object: _271.QuerySupplyRequestAmino): _271.QuerySupplyRequest;
                toAmino(message: _271.QuerySupplyRequest): _271.QuerySupplyRequestAmino;
                fromAminoMsg(object: _271.QuerySupplyRequestAminoMsg): _271.QuerySupplyRequest;
                toAminoMsg(message: _271.QuerySupplyRequest): _271.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _271.QuerySupplyRequestProtoMsg): _271.QuerySupplyRequest;
                toProto(message: _271.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _271.QuerySupplyRequest): _271.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _271.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QuerySupplyResponse;
                fromJSON(object: any): _271.QuerySupplyResponse;
                toJSON(message: _271.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_271.QuerySupplyResponse>): _271.QuerySupplyResponse;
                fromAmino(object: _271.QuerySupplyResponseAmino): _271.QuerySupplyResponse;
                toAmino(message: _271.QuerySupplyResponse): _271.QuerySupplyResponseAmino;
                fromAminoMsg(object: _271.QuerySupplyResponseAminoMsg): _271.QuerySupplyResponse;
                toAminoMsg(message: _271.QuerySupplyResponse): _271.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _271.QuerySupplyResponseProtoMsg): _271.QuerySupplyResponse;
                toProto(message: _271.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _271.QuerySupplyResponse): _271.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _271.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryNFTsRequest;
                fromJSON(object: any): _271.QueryNFTsRequest;
                toJSON(message: _271.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_271.QueryNFTsRequest>): _271.QueryNFTsRequest;
                fromAmino(object: _271.QueryNFTsRequestAmino): _271.QueryNFTsRequest;
                toAmino(message: _271.QueryNFTsRequest): _271.QueryNFTsRequestAmino;
                fromAminoMsg(object: _271.QueryNFTsRequestAminoMsg): _271.QueryNFTsRequest;
                toAminoMsg(message: _271.QueryNFTsRequest): _271.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _271.QueryNFTsRequestProtoMsg): _271.QueryNFTsRequest;
                toProto(message: _271.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _271.QueryNFTsRequest): _271.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _271.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryNFTsResponse;
                fromJSON(object: any): _271.QueryNFTsResponse;
                toJSON(message: _271.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_271.QueryNFTsResponse>): _271.QueryNFTsResponse;
                fromAmino(object: _271.QueryNFTsResponseAmino): _271.QueryNFTsResponse;
                toAmino(message: _271.QueryNFTsResponse): _271.QueryNFTsResponseAmino;
                fromAminoMsg(object: _271.QueryNFTsResponseAminoMsg): _271.QueryNFTsResponse;
                toAminoMsg(message: _271.QueryNFTsResponse): _271.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _271.QueryNFTsResponseProtoMsg): _271.QueryNFTsResponse;
                toProto(message: _271.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _271.QueryNFTsResponse): _271.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _271.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryNFTRequest;
                fromJSON(object: any): _271.QueryNFTRequest;
                toJSON(message: _271.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_271.QueryNFTRequest>): _271.QueryNFTRequest;
                fromAmino(object: _271.QueryNFTRequestAmino): _271.QueryNFTRequest;
                toAmino(message: _271.QueryNFTRequest): _271.QueryNFTRequestAmino;
                fromAminoMsg(object: _271.QueryNFTRequestAminoMsg): _271.QueryNFTRequest;
                toAminoMsg(message: _271.QueryNFTRequest): _271.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _271.QueryNFTRequestProtoMsg): _271.QueryNFTRequest;
                toProto(message: _271.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _271.QueryNFTRequest): _271.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _271.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryNFTResponse;
                fromJSON(object: any): _271.QueryNFTResponse;
                toJSON(message: _271.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_271.QueryNFTResponse>): _271.QueryNFTResponse;
                fromAmino(object: _271.QueryNFTResponseAmino): _271.QueryNFTResponse;
                toAmino(message: _271.QueryNFTResponse): _271.QueryNFTResponseAmino;
                fromAminoMsg(object: _271.QueryNFTResponseAminoMsg): _271.QueryNFTResponse;
                toAminoMsg(message: _271.QueryNFTResponse): _271.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _271.QueryNFTResponseProtoMsg): _271.QueryNFTResponse;
                toProto(message: _271.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _271.QueryNFTResponse): _271.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _271.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryClassRequest;
                fromJSON(object: any): _271.QueryClassRequest;
                toJSON(message: _271.QueryClassRequest): unknown;
                fromPartial(object: Partial<_271.QueryClassRequest>): _271.QueryClassRequest;
                fromAmino(object: _271.QueryClassRequestAmino): _271.QueryClassRequest;
                toAmino(message: _271.QueryClassRequest): _271.QueryClassRequestAmino;
                fromAminoMsg(object: _271.QueryClassRequestAminoMsg): _271.QueryClassRequest;
                toAminoMsg(message: _271.QueryClassRequest): _271.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _271.QueryClassRequestProtoMsg): _271.QueryClassRequest;
                toProto(message: _271.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _271.QueryClassRequest): _271.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _271.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryClassResponse;
                fromJSON(object: any): _271.QueryClassResponse;
                toJSON(message: _271.QueryClassResponse): unknown;
                fromPartial(object: Partial<_271.QueryClassResponse>): _271.QueryClassResponse;
                fromAmino(object: _271.QueryClassResponseAmino): _271.QueryClassResponse;
                toAmino(message: _271.QueryClassResponse): _271.QueryClassResponseAmino;
                fromAminoMsg(object: _271.QueryClassResponseAminoMsg): _271.QueryClassResponse;
                toAminoMsg(message: _271.QueryClassResponse): _271.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _271.QueryClassResponseProtoMsg): _271.QueryClassResponse;
                toProto(message: _271.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _271.QueryClassResponse): _271.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _271.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryClassesRequest;
                fromJSON(object: any): _271.QueryClassesRequest;
                toJSON(message: _271.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_271.QueryClassesRequest>): _271.QueryClassesRequest;
                fromAmino(object: _271.QueryClassesRequestAmino): _271.QueryClassesRequest;
                toAmino(message: _271.QueryClassesRequest): _271.QueryClassesRequestAmino;
                fromAminoMsg(object: _271.QueryClassesRequestAminoMsg): _271.QueryClassesRequest;
                toAminoMsg(message: _271.QueryClassesRequest): _271.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _271.QueryClassesRequestProtoMsg): _271.QueryClassesRequest;
                toProto(message: _271.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _271.QueryClassesRequest): _271.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _271.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.QueryClassesResponse;
                fromJSON(object: any): _271.QueryClassesResponse;
                toJSON(message: _271.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_271.QueryClassesResponse>): _271.QueryClassesResponse;
                fromAmino(object: _271.QueryClassesResponseAmino): _271.QueryClassesResponse;
                toAmino(message: _271.QueryClassesResponse): _271.QueryClassesResponseAmino;
                fromAminoMsg(object: _271.QueryClassesResponseAminoMsg): _271.QueryClassesResponse;
                toAminoMsg(message: _271.QueryClassesResponse): _271.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _271.QueryClassesResponseProtoMsg): _271.QueryClassesResponse;
                toProto(message: _271.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _271.QueryClassesResponse): _271.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _270.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.Class;
                fromJSON(object: any): _270.Class;
                toJSON(message: _270.Class): unknown;
                fromPartial(object: Partial<_270.Class>): _270.Class;
                fromAmino(object: _270.ClassAmino): _270.Class;
                toAmino(message: _270.Class): _270.ClassAmino;
                fromAminoMsg(object: _270.ClassAminoMsg): _270.Class;
                toAminoMsg(message: _270.Class): _270.ClassAminoMsg;
                fromProtoMsg(message: _270.ClassProtoMsg): _270.Class;
                toProto(message: _270.Class): Uint8Array;
                toProtoMsg(message: _270.Class): _270.ClassProtoMsg;
            };
            NFT: {
                encode(message: _270.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.NFT;
                fromJSON(object: any): _270.NFT;
                toJSON(message: _270.NFT): unknown;
                fromPartial(object: Partial<_270.NFT>): _270.NFT;
                fromAmino(object: _270.NFTAmino): _270.NFT;
                toAmino(message: _270.NFT): _270.NFTAmino;
                fromAminoMsg(object: _270.NFTAminoMsg): _270.NFT;
                toAminoMsg(message: _270.NFT): _270.NFTAminoMsg;
                fromProtoMsg(message: _270.NFTProtoMsg): _270.NFT;
                toProto(message: _270.NFT): Uint8Array;
                toProtoMsg(message: _270.NFT): _270.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _269.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.GenesisState;
                fromJSON(object: any): _269.GenesisState;
                toJSON(message: _269.GenesisState): unknown;
                fromPartial(object: Partial<_269.GenesisState>): _269.GenesisState;
                fromAmino(object: _269.GenesisStateAmino): _269.GenesisState;
                toAmino(message: _269.GenesisState): _269.GenesisStateAmino;
                fromAminoMsg(object: _269.GenesisStateAminoMsg): _269.GenesisState;
                toAminoMsg(message: _269.GenesisState): _269.GenesisStateAminoMsg;
                fromProtoMsg(message: _269.GenesisStateProtoMsg): _269.GenesisState;
                toProto(message: _269.GenesisState): Uint8Array;
                toProtoMsg(message: _269.GenesisState): _269.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _269.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.Entry;
                fromJSON(object: any): _269.Entry;
                toJSON(message: _269.Entry): unknown;
                fromPartial(object: Partial<_269.Entry>): _269.Entry;
                fromAmino(object: _269.EntryAmino): _269.Entry;
                toAmino(message: _269.Entry): _269.EntryAmino;
                fromAminoMsg(object: _269.EntryAminoMsg): _269.Entry;
                toAminoMsg(message: _269.Entry): _269.EntryAminoMsg;
                fromProtoMsg(message: _269.EntryProtoMsg): _269.Entry;
                toProto(message: _269.Entry): Uint8Array;
                toProtoMsg(message: _269.Entry): _269.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _268.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.EventSend;
                fromJSON(object: any): _268.EventSend;
                toJSON(message: _268.EventSend): unknown;
                fromPartial(object: Partial<_268.EventSend>): _268.EventSend;
                fromAmino(object: _268.EventSendAmino): _268.EventSend;
                toAmino(message: _268.EventSend): _268.EventSendAmino;
                fromAminoMsg(object: _268.EventSendAminoMsg): _268.EventSend;
                toAminoMsg(message: _268.EventSend): _268.EventSendAminoMsg;
                fromProtoMsg(message: _268.EventSendProtoMsg): _268.EventSend;
                toProto(message: _268.EventSend): Uint8Array;
                toProtoMsg(message: _268.EventSend): _268.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _268.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.EventMint;
                fromJSON(object: any): _268.EventMint;
                toJSON(message: _268.EventMint): unknown;
                fromPartial(object: Partial<_268.EventMint>): _268.EventMint;
                fromAmino(object: _268.EventMintAmino): _268.EventMint;
                toAmino(message: _268.EventMint): _268.EventMintAmino;
                fromAminoMsg(object: _268.EventMintAminoMsg): _268.EventMint;
                toAminoMsg(message: _268.EventMint): _268.EventMintAminoMsg;
                fromProtoMsg(message: _268.EventMintProtoMsg): _268.EventMint;
                toProto(message: _268.EventMint): Uint8Array;
                toProtoMsg(message: _268.EventMint): _268.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _268.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.EventBurn;
                fromJSON(object: any): _268.EventBurn;
                toJSON(message: _268.EventBurn): unknown;
                fromPartial(object: Partial<_268.EventBurn>): _268.EventBurn;
                fromAmino(object: _268.EventBurnAmino): _268.EventBurn;
                toAmino(message: _268.EventBurn): _268.EventBurnAmino;
                fromAminoMsg(object: _268.EventBurnAminoMsg): _268.EventBurn;
                toAminoMsg(message: _268.EventBurn): _268.EventBurnAminoMsg;
                fromProtoMsg(message: _268.EventBurnProtoMsg): _268.EventBurn;
                toProto(message: _268.EventBurn): Uint8Array;
                toProtoMsg(message: _268.EventBurn): _268.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _273.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.TableDescriptor;
                fromJSON(object: any): _273.TableDescriptor;
                toJSON(message: _273.TableDescriptor): unknown;
                fromPartial(object: Partial<_273.TableDescriptor>): _273.TableDescriptor;
                fromAmino(object: _273.TableDescriptorAmino): _273.TableDescriptor;
                toAmino(message: _273.TableDescriptor): _273.TableDescriptorAmino;
                fromAminoMsg(object: _273.TableDescriptorAminoMsg): _273.TableDescriptor;
                toAminoMsg(message: _273.TableDescriptor): _273.TableDescriptorAminoMsg;
                fromProtoMsg(message: _273.TableDescriptorProtoMsg): _273.TableDescriptor;
                toProto(message: _273.TableDescriptor): Uint8Array;
                toProtoMsg(message: _273.TableDescriptor): _273.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _273.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.PrimaryKeyDescriptor;
                fromJSON(object: any): _273.PrimaryKeyDescriptor;
                toJSON(message: _273.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_273.PrimaryKeyDescriptor>): _273.PrimaryKeyDescriptor;
                fromAmino(object: _273.PrimaryKeyDescriptorAmino): _273.PrimaryKeyDescriptor;
                toAmino(message: _273.PrimaryKeyDescriptor): _273.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _273.PrimaryKeyDescriptorAminoMsg): _273.PrimaryKeyDescriptor;
                toAminoMsg(message: _273.PrimaryKeyDescriptor): _273.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _273.PrimaryKeyDescriptorProtoMsg): _273.PrimaryKeyDescriptor;
                toProto(message: _273.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _273.PrimaryKeyDescriptor): _273.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _273.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.SecondaryIndexDescriptor;
                fromJSON(object: any): _273.SecondaryIndexDescriptor;
                toJSON(message: _273.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_273.SecondaryIndexDescriptor>): _273.SecondaryIndexDescriptor;
                fromAmino(object: _273.SecondaryIndexDescriptorAmino): _273.SecondaryIndexDescriptor;
                toAmino(message: _273.SecondaryIndexDescriptor): _273.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _273.SecondaryIndexDescriptorAminoMsg): _273.SecondaryIndexDescriptor;
                toAminoMsg(message: _273.SecondaryIndexDescriptor): _273.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _273.SecondaryIndexDescriptorProtoMsg): _273.SecondaryIndexDescriptor;
                toProto(message: _273.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _273.SecondaryIndexDescriptor): _273.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _273.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.SingletonDescriptor;
                fromJSON(object: any): _273.SingletonDescriptor;
                toJSON(message: _273.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_273.SingletonDescriptor>): _273.SingletonDescriptor;
                fromAmino(object: _273.SingletonDescriptorAmino): _273.SingletonDescriptor;
                toAmino(message: _273.SingletonDescriptor): _273.SingletonDescriptorAmino;
                fromAminoMsg(object: _273.SingletonDescriptorAminoMsg): _273.SingletonDescriptor;
                toAminoMsg(message: _273.SingletonDescriptor): _273.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _273.SingletonDescriptorProtoMsg): _273.SingletonDescriptor;
                toProto(message: _273.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _273.SingletonDescriptor): _273.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _274.StorageType;
            storageTypeToJSON(object: _274.StorageType): string;
            StorageType: typeof _274.StorageType;
            StorageTypeSDKType: typeof _274.StorageType;
            StorageTypeAmino: typeof _274.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _274.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.ModuleSchemaDescriptor;
                fromJSON(object: any): _274.ModuleSchemaDescriptor;
                toJSON(message: _274.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_274.ModuleSchemaDescriptor>): _274.ModuleSchemaDescriptor;
                fromAmino(object: _274.ModuleSchemaDescriptorAmino): _274.ModuleSchemaDescriptor;
                toAmino(message: _274.ModuleSchemaDescriptor): _274.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _274.ModuleSchemaDescriptorAminoMsg): _274.ModuleSchemaDescriptor;
                toAminoMsg(message: _274.ModuleSchemaDescriptor): _274.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _274.ModuleSchemaDescriptorProtoMsg): _274.ModuleSchemaDescriptor;
                toProto(message: _274.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _274.ModuleSchemaDescriptor): _274.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _274.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _274.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _274.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_274.ModuleSchemaDescriptor_FileEntry>): _274.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _274.ModuleSchemaDescriptor_FileEntryAmino): _274.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _274.ModuleSchemaDescriptor_FileEntry): _274.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _274.ModuleSchemaDescriptor_FileEntryAminoMsg): _274.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _274.ModuleSchemaDescriptor_FileEntry): _274.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _274.ModuleSchemaDescriptor_FileEntryProtoMsg): _274.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _274.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _274.ModuleSchemaDescriptor_FileEntry): _274.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _460.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _276.QueryParamsRequest): Promise<_276.QueryParamsResponse>;
                subspaces(request?: _276.QuerySubspacesRequest): Promise<_276.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _276.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryParamsRequest;
                fromJSON(object: any): _276.QueryParamsRequest;
                toJSON(message: _276.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_276.QueryParamsRequest>): _276.QueryParamsRequest;
                fromAmino(object: _276.QueryParamsRequestAmino): _276.QueryParamsRequest;
                toAmino(message: _276.QueryParamsRequest): _276.QueryParamsRequestAmino;
                fromAminoMsg(object: _276.QueryParamsRequestAminoMsg): _276.QueryParamsRequest;
                toAminoMsg(message: _276.QueryParamsRequest): _276.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _276.QueryParamsRequestProtoMsg): _276.QueryParamsRequest;
                toProto(message: _276.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _276.QueryParamsRequest): _276.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _276.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QueryParamsResponse;
                fromJSON(object: any): _276.QueryParamsResponse;
                toJSON(message: _276.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_276.QueryParamsResponse>): _276.QueryParamsResponse;
                fromAmino(object: _276.QueryParamsResponseAmino): _276.QueryParamsResponse;
                toAmino(message: _276.QueryParamsResponse): _276.QueryParamsResponseAmino;
                fromAminoMsg(object: _276.QueryParamsResponseAminoMsg): _276.QueryParamsResponse;
                toAminoMsg(message: _276.QueryParamsResponse): _276.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _276.QueryParamsResponseProtoMsg): _276.QueryParamsResponse;
                toProto(message: _276.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _276.QueryParamsResponse): _276.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _276.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QuerySubspacesRequest;
                fromJSON(_: any): _276.QuerySubspacesRequest;
                toJSON(_: _276.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_276.QuerySubspacesRequest>): _276.QuerySubspacesRequest;
                fromAmino(_: _276.QuerySubspacesRequestAmino): _276.QuerySubspacesRequest;
                toAmino(_: _276.QuerySubspacesRequest): _276.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _276.QuerySubspacesRequestAminoMsg): _276.QuerySubspacesRequest;
                toAminoMsg(message: _276.QuerySubspacesRequest): _276.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _276.QuerySubspacesRequestProtoMsg): _276.QuerySubspacesRequest;
                toProto(message: _276.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _276.QuerySubspacesRequest): _276.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _276.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.QuerySubspacesResponse;
                fromJSON(object: any): _276.QuerySubspacesResponse;
                toJSON(message: _276.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_276.QuerySubspacesResponse>): _276.QuerySubspacesResponse;
                fromAmino(object: _276.QuerySubspacesResponseAmino): _276.QuerySubspacesResponse;
                toAmino(message: _276.QuerySubspacesResponse): _276.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _276.QuerySubspacesResponseAminoMsg): _276.QuerySubspacesResponse;
                toAminoMsg(message: _276.QuerySubspacesResponse): _276.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _276.QuerySubspacesResponseProtoMsg): _276.QuerySubspacesResponse;
                toProto(message: _276.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _276.QuerySubspacesResponse): _276.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _276.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Subspace;
                fromJSON(object: any): _276.Subspace;
                toJSON(message: _276.Subspace): unknown;
                fromPartial(object: Partial<_276.Subspace>): _276.Subspace;
                fromAmino(object: _276.SubspaceAmino): _276.Subspace;
                toAmino(message: _276.Subspace): _276.SubspaceAmino;
                fromAminoMsg(object: _276.SubspaceAminoMsg): _276.Subspace;
                toAminoMsg(message: _276.Subspace): _276.SubspaceAminoMsg;
                fromProtoMsg(message: _276.SubspaceProtoMsg): _276.Subspace;
                toProto(message: _276.Subspace): Uint8Array;
                toProtoMsg(message: _276.Subspace): _276.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _275.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.ParameterChangeProposal;
                fromJSON(object: any): _275.ParameterChangeProposal;
                toJSON(message: _275.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_275.ParameterChangeProposal>): _275.ParameterChangeProposal;
                fromAmino(object: _275.ParameterChangeProposalAmino): _275.ParameterChangeProposal;
                toAmino(message: _275.ParameterChangeProposal): _275.ParameterChangeProposalAmino;
                fromAminoMsg(object: _275.ParameterChangeProposalAminoMsg): _275.ParameterChangeProposal;
                toAminoMsg(message: _275.ParameterChangeProposal): _275.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _275.ParameterChangeProposalProtoMsg): _275.ParameterChangeProposal;
                toProto(message: _275.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _275.ParameterChangeProposal): _275.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _275.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.ParamChange;
                fromJSON(object: any): _275.ParamChange;
                toJSON(message: _275.ParamChange): unknown;
                fromPartial(object: Partial<_275.ParamChange>): _275.ParamChange;
                fromAmino(object: _275.ParamChangeAmino): _275.ParamChange;
                toAmino(message: _275.ParamChange): _275.ParamChangeAmino;
                fromAminoMsg(object: _275.ParamChangeAminoMsg): _275.ParamChange;
                toAminoMsg(message: _275.ParamChange): _275.ParamChangeAminoMsg;
                fromProtoMsg(message: _275.ParamChangeProtoMsg): _275.ParamChange;
                toProto(message: _275.ParamChange): Uint8Array;
                toProtoMsg(message: _275.ParamChange): _275.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _475.MsgClientImpl;
            QueryClientImpl: typeof _461.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _278.QueryParamsRequest): Promise<_278.QueryParamsResponse>;
                signingInfo(request: _278.QuerySigningInfoRequest): Promise<_278.QuerySigningInfoResponse>;
                signingInfos(request?: _278.QuerySigningInfosRequest): Promise<_278.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _280.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _280.MsgUnjail): {
                        typeUrl: string;
                        value: _280.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _280.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _280.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _280.MsgUnjail): {
                        typeUrl: string;
                        value: _280.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _280.MsgUnjail) => _280.MsgUnjailAmino;
                    fromAmino: (object: _280.MsgUnjailAmino) => _280.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _280.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgUnjail;
                fromJSON(object: any): _280.MsgUnjail;
                toJSON(message: _280.MsgUnjail): unknown;
                fromPartial(object: Partial<_280.MsgUnjail>): _280.MsgUnjail;
                fromAmino(object: _280.MsgUnjailAmino): _280.MsgUnjail;
                toAmino(message: _280.MsgUnjail): _280.MsgUnjailAmino;
                fromAminoMsg(object: _280.MsgUnjailAminoMsg): _280.MsgUnjail;
                toAminoMsg(message: _280.MsgUnjail): _280.MsgUnjailAminoMsg;
                fromProtoMsg(message: _280.MsgUnjailProtoMsg): _280.MsgUnjail;
                toProto(message: _280.MsgUnjail): Uint8Array;
                toProtoMsg(message: _280.MsgUnjail): _280.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _280.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.MsgUnjailResponse;
                fromJSON(_: any): _280.MsgUnjailResponse;
                toJSON(_: _280.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_280.MsgUnjailResponse>): _280.MsgUnjailResponse;
                fromAmino(_: _280.MsgUnjailResponseAmino): _280.MsgUnjailResponse;
                toAmino(_: _280.MsgUnjailResponse): _280.MsgUnjailResponseAmino;
                fromAminoMsg(object: _280.MsgUnjailResponseAminoMsg): _280.MsgUnjailResponse;
                toAminoMsg(message: _280.MsgUnjailResponse): _280.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _280.MsgUnjailResponseProtoMsg): _280.MsgUnjailResponse;
                toProto(message: _280.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _280.MsgUnjailResponse): _280.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _279.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.ValidatorSigningInfo;
                fromJSON(object: any): _279.ValidatorSigningInfo;
                toJSON(message: _279.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_279.ValidatorSigningInfo>): _279.ValidatorSigningInfo;
                fromAmino(object: _279.ValidatorSigningInfoAmino): _279.ValidatorSigningInfo;
                toAmino(message: _279.ValidatorSigningInfo): _279.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _279.ValidatorSigningInfoAminoMsg): _279.ValidatorSigningInfo;
                toAminoMsg(message: _279.ValidatorSigningInfo): _279.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _279.ValidatorSigningInfoProtoMsg): _279.ValidatorSigningInfo;
                toProto(message: _279.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _279.ValidatorSigningInfo): _279.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _279.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.Params;
                fromJSON(object: any): _279.Params;
                toJSON(message: _279.Params): unknown;
                fromPartial(object: Partial<_279.Params>): _279.Params;
                fromAmino(object: _279.ParamsAmino): _279.Params;
                toAmino(message: _279.Params): _279.ParamsAmino;
                fromAminoMsg(object: _279.ParamsAminoMsg): _279.Params;
                toAminoMsg(message: _279.Params): _279.ParamsAminoMsg;
                fromProtoMsg(message: _279.ParamsProtoMsg): _279.Params;
                toProto(message: _279.Params): Uint8Array;
                toProtoMsg(message: _279.Params): _279.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _278.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsRequest;
                fromJSON(_: any): _278.QueryParamsRequest;
                toJSON(_: _278.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_278.QueryParamsRequest>): _278.QueryParamsRequest;
                fromAmino(_: _278.QueryParamsRequestAmino): _278.QueryParamsRequest;
                toAmino(_: _278.QueryParamsRequest): _278.QueryParamsRequestAmino;
                fromAminoMsg(object: _278.QueryParamsRequestAminoMsg): _278.QueryParamsRequest;
                toAminoMsg(message: _278.QueryParamsRequest): _278.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _278.QueryParamsRequestProtoMsg): _278.QueryParamsRequest;
                toProto(message: _278.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _278.QueryParamsRequest): _278.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _278.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QueryParamsResponse;
                fromJSON(object: any): _278.QueryParamsResponse;
                toJSON(message: _278.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_278.QueryParamsResponse>): _278.QueryParamsResponse;
                fromAmino(object: _278.QueryParamsResponseAmino): _278.QueryParamsResponse;
                toAmino(message: _278.QueryParamsResponse): _278.QueryParamsResponseAmino;
                fromAminoMsg(object: _278.QueryParamsResponseAminoMsg): _278.QueryParamsResponse;
                toAminoMsg(message: _278.QueryParamsResponse): _278.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _278.QueryParamsResponseProtoMsg): _278.QueryParamsResponse;
                toProto(message: _278.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _278.QueryParamsResponse): _278.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _278.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySigningInfoRequest;
                fromJSON(object: any): _278.QuerySigningInfoRequest;
                toJSON(message: _278.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_278.QuerySigningInfoRequest>): _278.QuerySigningInfoRequest;
                fromAmino(object: _278.QuerySigningInfoRequestAmino): _278.QuerySigningInfoRequest;
                toAmino(message: _278.QuerySigningInfoRequest): _278.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _278.QuerySigningInfoRequestAminoMsg): _278.QuerySigningInfoRequest;
                toAminoMsg(message: _278.QuerySigningInfoRequest): _278.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _278.QuerySigningInfoRequestProtoMsg): _278.QuerySigningInfoRequest;
                toProto(message: _278.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _278.QuerySigningInfoRequest): _278.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _278.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySigningInfoResponse;
                fromJSON(object: any): _278.QuerySigningInfoResponse;
                toJSON(message: _278.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_278.QuerySigningInfoResponse>): _278.QuerySigningInfoResponse;
                fromAmino(object: _278.QuerySigningInfoResponseAmino): _278.QuerySigningInfoResponse;
                toAmino(message: _278.QuerySigningInfoResponse): _278.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _278.QuerySigningInfoResponseAminoMsg): _278.QuerySigningInfoResponse;
                toAminoMsg(message: _278.QuerySigningInfoResponse): _278.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _278.QuerySigningInfoResponseProtoMsg): _278.QuerySigningInfoResponse;
                toProto(message: _278.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _278.QuerySigningInfoResponse): _278.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _278.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySigningInfosRequest;
                fromJSON(object: any): _278.QuerySigningInfosRequest;
                toJSON(message: _278.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_278.QuerySigningInfosRequest>): _278.QuerySigningInfosRequest;
                fromAmino(object: _278.QuerySigningInfosRequestAmino): _278.QuerySigningInfosRequest;
                toAmino(message: _278.QuerySigningInfosRequest): _278.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _278.QuerySigningInfosRequestAminoMsg): _278.QuerySigningInfosRequest;
                toAminoMsg(message: _278.QuerySigningInfosRequest): _278.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _278.QuerySigningInfosRequestProtoMsg): _278.QuerySigningInfosRequest;
                toProto(message: _278.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _278.QuerySigningInfosRequest): _278.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _278.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.QuerySigningInfosResponse;
                fromJSON(object: any): _278.QuerySigningInfosResponse;
                toJSON(message: _278.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_278.QuerySigningInfosResponse>): _278.QuerySigningInfosResponse;
                fromAmino(object: _278.QuerySigningInfosResponseAmino): _278.QuerySigningInfosResponse;
                toAmino(message: _278.QuerySigningInfosResponse): _278.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _278.QuerySigningInfosResponseAminoMsg): _278.QuerySigningInfosResponse;
                toAminoMsg(message: _278.QuerySigningInfosResponse): _278.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _278.QuerySigningInfosResponseProtoMsg): _278.QuerySigningInfosResponse;
                toProto(message: _278.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _278.QuerySigningInfosResponse): _278.QuerySigningInfosResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _277.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.GenesisState;
                fromJSON(object: any): _277.GenesisState;
                toJSON(message: _277.GenesisState): unknown;
                fromPartial(object: Partial<_277.GenesisState>): _277.GenesisState;
                fromAmino(object: _277.GenesisStateAmino): _277.GenesisState;
                toAmino(message: _277.GenesisState): _277.GenesisStateAmino;
                fromAminoMsg(object: _277.GenesisStateAminoMsg): _277.GenesisState;
                toAminoMsg(message: _277.GenesisState): _277.GenesisStateAminoMsg;
                fromProtoMsg(message: _277.GenesisStateProtoMsg): _277.GenesisState;
                toProto(message: _277.GenesisState): Uint8Array;
                toProtoMsg(message: _277.GenesisState): _277.GenesisStateProtoMsg;
            };
            SigningInfo: {
                encode(message: _277.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.SigningInfo;
                fromJSON(object: any): _277.SigningInfo;
                toJSON(message: _277.SigningInfo): unknown;
                fromPartial(object: Partial<_277.SigningInfo>): _277.SigningInfo;
                fromAmino(object: _277.SigningInfoAmino): _277.SigningInfo;
                toAmino(message: _277.SigningInfo): _277.SigningInfoAmino;
                fromAminoMsg(object: _277.SigningInfoAminoMsg): _277.SigningInfo;
                toAminoMsg(message: _277.SigningInfo): _277.SigningInfoAminoMsg;
                fromProtoMsg(message: _277.SigningInfoProtoMsg): _277.SigningInfo;
                toProto(message: _277.SigningInfo): Uint8Array;
                toProtoMsg(message: _277.SigningInfo): _277.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _277.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.ValidatorMissedBlocks;
                fromJSON(object: any): _277.ValidatorMissedBlocks;
                toJSON(message: _277.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_277.ValidatorMissedBlocks>): _277.ValidatorMissedBlocks;
                fromAmino(object: _277.ValidatorMissedBlocksAmino): _277.ValidatorMissedBlocks;
                toAmino(message: _277.ValidatorMissedBlocks): _277.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _277.ValidatorMissedBlocksAminoMsg): _277.ValidatorMissedBlocks;
                toAminoMsg(message: _277.ValidatorMissedBlocks): _277.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _277.ValidatorMissedBlocksProtoMsg): _277.ValidatorMissedBlocks;
                toProto(message: _277.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _277.ValidatorMissedBlocks): _277.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _277.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MissedBlock;
                fromJSON(object: any): _277.MissedBlock;
                toJSON(message: _277.MissedBlock): unknown;
                fromPartial(object: Partial<_277.MissedBlock>): _277.MissedBlock;
                fromAmino(object: _277.MissedBlockAmino): _277.MissedBlock;
                toAmino(message: _277.MissedBlock): _277.MissedBlockAmino;
                fromAminoMsg(object: _277.MissedBlockAminoMsg): _277.MissedBlock;
                toAminoMsg(message: _277.MissedBlock): _277.MissedBlockAminoMsg;
                fromProtoMsg(message: _277.MissedBlockProtoMsg): _277.MissedBlock;
                toProto(message: _277.MissedBlock): Uint8Array;
                toProtoMsg(message: _277.MissedBlock): _277.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _476.MsgClientImpl;
            QueryClientImpl: typeof _462.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _283.QueryValidatorsRequest): Promise<_283.QueryValidatorsResponse>;
                validator(request: _283.QueryValidatorRequest): Promise<_283.QueryValidatorResponse>;
                validatorDelegations(request: _283.QueryValidatorDelegationsRequest): Promise<_283.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _283.QueryValidatorUnbondingDelegationsRequest): Promise<_283.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _283.QueryDelegationRequest): Promise<_283.QueryDelegationResponse>;
                unbondingDelegation(request: _283.QueryUnbondingDelegationRequest): Promise<_283.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _283.QueryDelegatorDelegationsRequest): Promise<_283.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _283.QueryDelegatorUnbondingDelegationsRequest): Promise<_283.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _283.QueryRedelegationsRequest): Promise<_283.QueryRedelegationsResponse>;
                delegatorValidators(request: _283.QueryDelegatorValidatorsRequest): Promise<_283.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _283.QueryDelegatorValidatorRequest): Promise<_283.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _283.QueryHistoricalInfoRequest): Promise<_283.QueryHistoricalInfoResponse>;
                pool(request?: _283.QueryPoolRequest): Promise<_283.QueryPoolResponse>;
                params(request?: _283.QueryParamsRequest): Promise<_283.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _285.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _285.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _285.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _285.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _285.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _285.MsgCreateValidator): {
                        typeUrl: string;
                        value: _285.MsgCreateValidator;
                    };
                    editValidator(value: _285.MsgEditValidator): {
                        typeUrl: string;
                        value: _285.MsgEditValidator;
                    };
                    delegate(value: _285.MsgDelegate): {
                        typeUrl: string;
                        value: _285.MsgDelegate;
                    };
                    beginRedelegate(value: _285.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _285.MsgBeginRedelegate;
                    };
                    undelegate(value: _285.MsgUndelegate): {
                        typeUrl: string;
                        value: _285.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _285.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _285.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _285.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _285.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _285.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _285.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _285.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _285.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _285.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _285.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _285.MsgCreateValidator): {
                        typeUrl: string;
                        value: _285.MsgCreateValidator;
                    };
                    editValidator(value: _285.MsgEditValidator): {
                        typeUrl: string;
                        value: _285.MsgEditValidator;
                    };
                    delegate(value: _285.MsgDelegate): {
                        typeUrl: string;
                        value: _285.MsgDelegate;
                    };
                    beginRedelegate(value: _285.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _285.MsgBeginRedelegate;
                    };
                    undelegate(value: _285.MsgUndelegate): {
                        typeUrl: string;
                        value: _285.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _285.MsgCreateValidator) => _285.MsgCreateValidatorAmino;
                    fromAmino: (object: _285.MsgCreateValidatorAmino) => _285.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _285.MsgEditValidator) => _285.MsgEditValidatorAmino;
                    fromAmino: (object: _285.MsgEditValidatorAmino) => _285.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _285.MsgDelegate) => _285.MsgDelegateAmino;
                    fromAmino: (object: _285.MsgDelegateAmino) => _285.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _285.MsgBeginRedelegate) => _285.MsgBeginRedelegateAmino;
                    fromAmino: (object: _285.MsgBeginRedelegateAmino) => _285.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _285.MsgUndelegate) => _285.MsgUndelegateAmino;
                    fromAmino: (object: _285.MsgUndelegateAmino) => _285.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _285.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgCreateValidator;
                fromJSON(object: any): _285.MsgCreateValidator;
                toJSON(message: _285.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_285.MsgCreateValidator>): _285.MsgCreateValidator;
                fromAmino(object: _285.MsgCreateValidatorAmino): _285.MsgCreateValidator;
                toAmino(message: _285.MsgCreateValidator): _285.MsgCreateValidatorAmino;
                fromAminoMsg(object: _285.MsgCreateValidatorAminoMsg): _285.MsgCreateValidator;
                toAminoMsg(message: _285.MsgCreateValidator): _285.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _285.MsgCreateValidatorProtoMsg): _285.MsgCreateValidator;
                toProto(message: _285.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _285.MsgCreateValidator): _285.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _285.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgCreateValidatorResponse;
                fromJSON(_: any): _285.MsgCreateValidatorResponse;
                toJSON(_: _285.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_285.MsgCreateValidatorResponse>): _285.MsgCreateValidatorResponse;
                fromAmino(_: _285.MsgCreateValidatorResponseAmino): _285.MsgCreateValidatorResponse;
                toAmino(_: _285.MsgCreateValidatorResponse): _285.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _285.MsgCreateValidatorResponseAminoMsg): _285.MsgCreateValidatorResponse;
                toAminoMsg(message: _285.MsgCreateValidatorResponse): _285.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _285.MsgCreateValidatorResponseProtoMsg): _285.MsgCreateValidatorResponse;
                toProto(message: _285.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _285.MsgCreateValidatorResponse): _285.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _285.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgEditValidator;
                fromJSON(object: any): _285.MsgEditValidator;
                toJSON(message: _285.MsgEditValidator): unknown;
                fromPartial(object: Partial<_285.MsgEditValidator>): _285.MsgEditValidator;
                fromAmino(object: _285.MsgEditValidatorAmino): _285.MsgEditValidator;
                toAmino(message: _285.MsgEditValidator): _285.MsgEditValidatorAmino;
                fromAminoMsg(object: _285.MsgEditValidatorAminoMsg): _285.MsgEditValidator;
                toAminoMsg(message: _285.MsgEditValidator): _285.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _285.MsgEditValidatorProtoMsg): _285.MsgEditValidator;
                toProto(message: _285.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _285.MsgEditValidator): _285.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _285.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgEditValidatorResponse;
                fromJSON(_: any): _285.MsgEditValidatorResponse;
                toJSON(_: _285.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_285.MsgEditValidatorResponse>): _285.MsgEditValidatorResponse;
                fromAmino(_: _285.MsgEditValidatorResponseAmino): _285.MsgEditValidatorResponse;
                toAmino(_: _285.MsgEditValidatorResponse): _285.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _285.MsgEditValidatorResponseAminoMsg): _285.MsgEditValidatorResponse;
                toAminoMsg(message: _285.MsgEditValidatorResponse): _285.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _285.MsgEditValidatorResponseProtoMsg): _285.MsgEditValidatorResponse;
                toProto(message: _285.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _285.MsgEditValidatorResponse): _285.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _285.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgDelegate;
                fromJSON(object: any): _285.MsgDelegate;
                toJSON(message: _285.MsgDelegate): unknown;
                fromPartial(object: Partial<_285.MsgDelegate>): _285.MsgDelegate;
                fromAmino(object: _285.MsgDelegateAmino): _285.MsgDelegate;
                toAmino(message: _285.MsgDelegate): _285.MsgDelegateAmino;
                fromAminoMsg(object: _285.MsgDelegateAminoMsg): _285.MsgDelegate;
                toAminoMsg(message: _285.MsgDelegate): _285.MsgDelegateAminoMsg;
                fromProtoMsg(message: _285.MsgDelegateProtoMsg): _285.MsgDelegate;
                toProto(message: _285.MsgDelegate): Uint8Array;
                toProtoMsg(message: _285.MsgDelegate): _285.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _285.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgDelegateResponse;
                fromJSON(_: any): _285.MsgDelegateResponse;
                toJSON(_: _285.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_285.MsgDelegateResponse>): _285.MsgDelegateResponse;
                fromAmino(_: _285.MsgDelegateResponseAmino): _285.MsgDelegateResponse;
                toAmino(_: _285.MsgDelegateResponse): _285.MsgDelegateResponseAmino;
                fromAminoMsg(object: _285.MsgDelegateResponseAminoMsg): _285.MsgDelegateResponse;
                toAminoMsg(message: _285.MsgDelegateResponse): _285.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _285.MsgDelegateResponseProtoMsg): _285.MsgDelegateResponse;
                toProto(message: _285.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _285.MsgDelegateResponse): _285.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _285.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgBeginRedelegate;
                fromJSON(object: any): _285.MsgBeginRedelegate;
                toJSON(message: _285.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_285.MsgBeginRedelegate>): _285.MsgBeginRedelegate;
                fromAmino(object: _285.MsgBeginRedelegateAmino): _285.MsgBeginRedelegate;
                toAmino(message: _285.MsgBeginRedelegate): _285.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _285.MsgBeginRedelegateAminoMsg): _285.MsgBeginRedelegate;
                toAminoMsg(message: _285.MsgBeginRedelegate): _285.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _285.MsgBeginRedelegateProtoMsg): _285.MsgBeginRedelegate;
                toProto(message: _285.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _285.MsgBeginRedelegate): _285.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _285.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgBeginRedelegateResponse;
                fromJSON(object: any): _285.MsgBeginRedelegateResponse;
                toJSON(message: _285.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_285.MsgBeginRedelegateResponse>): _285.MsgBeginRedelegateResponse;
                fromAmino(object: _285.MsgBeginRedelegateResponseAmino): _285.MsgBeginRedelegateResponse;
                toAmino(message: _285.MsgBeginRedelegateResponse): _285.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _285.MsgBeginRedelegateResponseAminoMsg): _285.MsgBeginRedelegateResponse;
                toAminoMsg(message: _285.MsgBeginRedelegateResponse): _285.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _285.MsgBeginRedelegateResponseProtoMsg): _285.MsgBeginRedelegateResponse;
                toProto(message: _285.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _285.MsgBeginRedelegateResponse): _285.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _285.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgUndelegate;
                fromJSON(object: any): _285.MsgUndelegate;
                toJSON(message: _285.MsgUndelegate): unknown;
                fromPartial(object: Partial<_285.MsgUndelegate>): _285.MsgUndelegate;
                fromAmino(object: _285.MsgUndelegateAmino): _285.MsgUndelegate;
                toAmino(message: _285.MsgUndelegate): _285.MsgUndelegateAmino;
                fromAminoMsg(object: _285.MsgUndelegateAminoMsg): _285.MsgUndelegate;
                toAminoMsg(message: _285.MsgUndelegate): _285.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _285.MsgUndelegateProtoMsg): _285.MsgUndelegate;
                toProto(message: _285.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _285.MsgUndelegate): _285.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _285.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.MsgUndelegateResponse;
                fromJSON(object: any): _285.MsgUndelegateResponse;
                toJSON(message: _285.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_285.MsgUndelegateResponse>): _285.MsgUndelegateResponse;
                fromAmino(object: _285.MsgUndelegateResponseAmino): _285.MsgUndelegateResponse;
                toAmino(message: _285.MsgUndelegateResponse): _285.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _285.MsgUndelegateResponseAminoMsg): _285.MsgUndelegateResponse;
                toAminoMsg(message: _285.MsgUndelegateResponse): _285.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _285.MsgUndelegateResponseProtoMsg): _285.MsgUndelegateResponse;
                toProto(message: _285.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _285.MsgUndelegateResponse): _285.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _284.BondStatus;
            bondStatusToJSON(object: _284.BondStatus): string;
            BondStatus: typeof _284.BondStatus;
            BondStatusSDKType: typeof _284.BondStatus;
            BondStatusAmino: typeof _284.BondStatus;
            HistoricalInfo: {
                encode(message: _284.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.HistoricalInfo;
                fromJSON(object: any): _284.HistoricalInfo;
                toJSON(message: _284.HistoricalInfo): unknown;
                fromPartial(object: Partial<_284.HistoricalInfo>): _284.HistoricalInfo;
                fromAmino(object: _284.HistoricalInfoAmino): _284.HistoricalInfo;
                toAmino(message: _284.HistoricalInfo): _284.HistoricalInfoAmino;
                fromAminoMsg(object: _284.HistoricalInfoAminoMsg): _284.HistoricalInfo;
                toAminoMsg(message: _284.HistoricalInfo): _284.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _284.HistoricalInfoProtoMsg): _284.HistoricalInfo;
                toProto(message: _284.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _284.HistoricalInfo): _284.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _284.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.CommissionRates;
                fromJSON(object: any): _284.CommissionRates;
                toJSON(message: _284.CommissionRates): unknown;
                fromPartial(object: Partial<_284.CommissionRates>): _284.CommissionRates;
                fromAmino(object: _284.CommissionRatesAmino): _284.CommissionRates;
                toAmino(message: _284.CommissionRates): _284.CommissionRatesAmino;
                fromAminoMsg(object: _284.CommissionRatesAminoMsg): _284.CommissionRates;
                toAminoMsg(message: _284.CommissionRates): _284.CommissionRatesAminoMsg;
                fromProtoMsg(message: _284.CommissionRatesProtoMsg): _284.CommissionRates;
                toProto(message: _284.CommissionRates): Uint8Array;
                toProtoMsg(message: _284.CommissionRates): _284.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _284.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Commission;
                fromJSON(object: any): _284.Commission;
                toJSON(message: _284.Commission): unknown;
                fromPartial(object: Partial<_284.Commission>): _284.Commission;
                fromAmino(object: _284.CommissionAmino): _284.Commission;
                toAmino(message: _284.Commission): _284.CommissionAmino;
                fromAminoMsg(object: _284.CommissionAminoMsg): _284.Commission;
                toAminoMsg(message: _284.Commission): _284.CommissionAminoMsg;
                fromProtoMsg(message: _284.CommissionProtoMsg): _284.Commission;
                toProto(message: _284.Commission): Uint8Array;
                toProtoMsg(message: _284.Commission): _284.CommissionProtoMsg;
            };
            Description: {
                encode(message: _284.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Description;
                fromJSON(object: any): _284.Description;
                toJSON(message: _284.Description): unknown;
                fromPartial(object: Partial<_284.Description>): _284.Description;
                fromAmino(object: _284.DescriptionAmino): _284.Description;
                toAmino(message: _284.Description): _284.DescriptionAmino;
                fromAminoMsg(object: _284.DescriptionAminoMsg): _284.Description;
                toAminoMsg(message: _284.Description): _284.DescriptionAminoMsg;
                fromProtoMsg(message: _284.DescriptionProtoMsg): _284.Description;
                toProto(message: _284.Description): Uint8Array;
                toProtoMsg(message: _284.Description): _284.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _284.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Validator;
                fromJSON(object: any): _284.Validator;
                toJSON(message: _284.Validator): unknown;
                fromPartial(object: Partial<_284.Validator>): _284.Validator;
                fromAmino(object: _284.ValidatorAmino): _284.Validator;
                toAmino(message: _284.Validator): _284.ValidatorAmino;
                fromAminoMsg(object: _284.ValidatorAminoMsg): _284.Validator;
                toAminoMsg(message: _284.Validator): _284.ValidatorAminoMsg;
                fromProtoMsg(message: _284.ValidatorProtoMsg): _284.Validator;
                toProto(message: _284.Validator): Uint8Array;
                toProtoMsg(message: _284.Validator): _284.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _284.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.ValAddresses;
                fromJSON(object: any): _284.ValAddresses;
                toJSON(message: _284.ValAddresses): unknown;
                fromPartial(object: Partial<_284.ValAddresses>): _284.ValAddresses;
                fromAmino(object: _284.ValAddressesAmino): _284.ValAddresses;
                toAmino(message: _284.ValAddresses): _284.ValAddressesAmino;
                fromAminoMsg(object: _284.ValAddressesAminoMsg): _284.ValAddresses;
                toAminoMsg(message: _284.ValAddresses): _284.ValAddressesAminoMsg;
                fromProtoMsg(message: _284.ValAddressesProtoMsg): _284.ValAddresses;
                toProto(message: _284.ValAddresses): Uint8Array;
                toProtoMsg(message: _284.ValAddresses): _284.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _284.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DVPair;
                fromJSON(object: any): _284.DVPair;
                toJSON(message: _284.DVPair): unknown;
                fromPartial(object: Partial<_284.DVPair>): _284.DVPair;
                fromAmino(object: _284.DVPairAmino): _284.DVPair;
                toAmino(message: _284.DVPair): _284.DVPairAmino;
                fromAminoMsg(object: _284.DVPairAminoMsg): _284.DVPair;
                toAminoMsg(message: _284.DVPair): _284.DVPairAminoMsg;
                fromProtoMsg(message: _284.DVPairProtoMsg): _284.DVPair;
                toProto(message: _284.DVPair): Uint8Array;
                toProtoMsg(message: _284.DVPair): _284.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _284.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DVPairs;
                fromJSON(object: any): _284.DVPairs;
                toJSON(message: _284.DVPairs): unknown;
                fromPartial(object: Partial<_284.DVPairs>): _284.DVPairs;
                fromAmino(object: _284.DVPairsAmino): _284.DVPairs;
                toAmino(message: _284.DVPairs): _284.DVPairsAmino;
                fromAminoMsg(object: _284.DVPairsAminoMsg): _284.DVPairs;
                toAminoMsg(message: _284.DVPairs): _284.DVPairsAminoMsg;
                fromProtoMsg(message: _284.DVPairsProtoMsg): _284.DVPairs;
                toProto(message: _284.DVPairs): Uint8Array;
                toProtoMsg(message: _284.DVPairs): _284.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _284.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DVVTriplet;
                fromJSON(object: any): _284.DVVTriplet;
                toJSON(message: _284.DVVTriplet): unknown;
                fromPartial(object: Partial<_284.DVVTriplet>): _284.DVVTriplet;
                fromAmino(object: _284.DVVTripletAmino): _284.DVVTriplet;
                toAmino(message: _284.DVVTriplet): _284.DVVTripletAmino;
                fromAminoMsg(object: _284.DVVTripletAminoMsg): _284.DVVTriplet;
                toAminoMsg(message: _284.DVVTriplet): _284.DVVTripletAminoMsg;
                fromProtoMsg(message: _284.DVVTripletProtoMsg): _284.DVVTriplet;
                toProto(message: _284.DVVTriplet): Uint8Array;
                toProtoMsg(message: _284.DVVTriplet): _284.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _284.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DVVTriplets;
                fromJSON(object: any): _284.DVVTriplets;
                toJSON(message: _284.DVVTriplets): unknown;
                fromPartial(object: Partial<_284.DVVTriplets>): _284.DVVTriplets;
                fromAmino(object: _284.DVVTripletsAmino): _284.DVVTriplets;
                toAmino(message: _284.DVVTriplets): _284.DVVTripletsAmino;
                fromAminoMsg(object: _284.DVVTripletsAminoMsg): _284.DVVTriplets;
                toAminoMsg(message: _284.DVVTriplets): _284.DVVTripletsAminoMsg;
                fromProtoMsg(message: _284.DVVTripletsProtoMsg): _284.DVVTriplets;
                toProto(message: _284.DVVTriplets): Uint8Array;
                toProtoMsg(message: _284.DVVTriplets): _284.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _284.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Delegation;
                fromJSON(object: any): _284.Delegation;
                toJSON(message: _284.Delegation): unknown;
                fromPartial(object: Partial<_284.Delegation>): _284.Delegation;
                fromAmino(object: _284.DelegationAmino): _284.Delegation;
                toAmino(message: _284.Delegation): _284.DelegationAmino;
                fromAminoMsg(object: _284.DelegationAminoMsg): _284.Delegation;
                toAminoMsg(message: _284.Delegation): _284.DelegationAminoMsg;
                fromProtoMsg(message: _284.DelegationProtoMsg): _284.Delegation;
                toProto(message: _284.Delegation): Uint8Array;
                toProtoMsg(message: _284.Delegation): _284.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _284.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.UnbondingDelegation;
                fromJSON(object: any): _284.UnbondingDelegation;
                toJSON(message: _284.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_284.UnbondingDelegation>): _284.UnbondingDelegation;
                fromAmino(object: _284.UnbondingDelegationAmino): _284.UnbondingDelegation;
                toAmino(message: _284.UnbondingDelegation): _284.UnbondingDelegationAmino;
                fromAminoMsg(object: _284.UnbondingDelegationAminoMsg): _284.UnbondingDelegation;
                toAminoMsg(message: _284.UnbondingDelegation): _284.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _284.UnbondingDelegationProtoMsg): _284.UnbondingDelegation;
                toProto(message: _284.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _284.UnbondingDelegation): _284.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _284.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.UnbondingDelegationEntry;
                fromJSON(object: any): _284.UnbondingDelegationEntry;
                toJSON(message: _284.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_284.UnbondingDelegationEntry>): _284.UnbondingDelegationEntry;
                fromAmino(object: _284.UnbondingDelegationEntryAmino): _284.UnbondingDelegationEntry;
                toAmino(message: _284.UnbondingDelegationEntry): _284.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _284.UnbondingDelegationEntryAminoMsg): _284.UnbondingDelegationEntry;
                toAminoMsg(message: _284.UnbondingDelegationEntry): _284.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _284.UnbondingDelegationEntryProtoMsg): _284.UnbondingDelegationEntry;
                toProto(message: _284.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _284.UnbondingDelegationEntry): _284.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _284.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.RedelegationEntry;
                fromJSON(object: any): _284.RedelegationEntry;
                toJSON(message: _284.RedelegationEntry): unknown;
                fromPartial(object: Partial<_284.RedelegationEntry>): _284.RedelegationEntry;
                fromAmino(object: _284.RedelegationEntryAmino): _284.RedelegationEntry;
                toAmino(message: _284.RedelegationEntry): _284.RedelegationEntryAmino;
                fromAminoMsg(object: _284.RedelegationEntryAminoMsg): _284.RedelegationEntry;
                toAminoMsg(message: _284.RedelegationEntry): _284.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _284.RedelegationEntryProtoMsg): _284.RedelegationEntry;
                toProto(message: _284.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _284.RedelegationEntry): _284.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _284.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Redelegation;
                fromJSON(object: any): _284.Redelegation;
                toJSON(message: _284.Redelegation): unknown;
                fromPartial(object: Partial<_284.Redelegation>): _284.Redelegation;
                fromAmino(object: _284.RedelegationAmino): _284.Redelegation;
                toAmino(message: _284.Redelegation): _284.RedelegationAmino;
                fromAminoMsg(object: _284.RedelegationAminoMsg): _284.Redelegation;
                toAminoMsg(message: _284.Redelegation): _284.RedelegationAminoMsg;
                fromProtoMsg(message: _284.RedelegationProtoMsg): _284.Redelegation;
                toProto(message: _284.Redelegation): Uint8Array;
                toProtoMsg(message: _284.Redelegation): _284.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _284.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Params;
                fromJSON(object: any): _284.Params;
                toJSON(message: _284.Params): unknown;
                fromPartial(object: Partial<_284.Params>): _284.Params;
                fromAmino(object: _284.ParamsAmino): _284.Params;
                toAmino(message: _284.Params): _284.ParamsAmino;
                fromAminoMsg(object: _284.ParamsAminoMsg): _284.Params;
                toAminoMsg(message: _284.Params): _284.ParamsAminoMsg;
                fromProtoMsg(message: _284.ParamsProtoMsg): _284.Params;
                toProto(message: _284.Params): Uint8Array;
                toProtoMsg(message: _284.Params): _284.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _284.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.DelegationResponse;
                fromJSON(object: any): _284.DelegationResponse;
                toJSON(message: _284.DelegationResponse): unknown;
                fromPartial(object: Partial<_284.DelegationResponse>): _284.DelegationResponse;
                fromAmino(object: _284.DelegationResponseAmino): _284.DelegationResponse;
                toAmino(message: _284.DelegationResponse): _284.DelegationResponseAmino;
                fromAminoMsg(object: _284.DelegationResponseAminoMsg): _284.DelegationResponse;
                toAminoMsg(message: _284.DelegationResponse): _284.DelegationResponseAminoMsg;
                fromProtoMsg(message: _284.DelegationResponseProtoMsg): _284.DelegationResponse;
                toProto(message: _284.DelegationResponse): Uint8Array;
                toProtoMsg(message: _284.DelegationResponse): _284.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _284.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.RedelegationEntryResponse;
                fromJSON(object: any): _284.RedelegationEntryResponse;
                toJSON(message: _284.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_284.RedelegationEntryResponse>): _284.RedelegationEntryResponse;
                fromAmino(object: _284.RedelegationEntryResponseAmino): _284.RedelegationEntryResponse;
                toAmino(message: _284.RedelegationEntryResponse): _284.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _284.RedelegationEntryResponseAminoMsg): _284.RedelegationEntryResponse;
                toAminoMsg(message: _284.RedelegationEntryResponse): _284.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _284.RedelegationEntryResponseProtoMsg): _284.RedelegationEntryResponse;
                toProto(message: _284.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _284.RedelegationEntryResponse): _284.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _284.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.RedelegationResponse;
                fromJSON(object: any): _284.RedelegationResponse;
                toJSON(message: _284.RedelegationResponse): unknown;
                fromPartial(object: Partial<_284.RedelegationResponse>): _284.RedelegationResponse;
                fromAmino(object: _284.RedelegationResponseAmino): _284.RedelegationResponse;
                toAmino(message: _284.RedelegationResponse): _284.RedelegationResponseAmino;
                fromAminoMsg(object: _284.RedelegationResponseAminoMsg): _284.RedelegationResponse;
                toAminoMsg(message: _284.RedelegationResponse): _284.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _284.RedelegationResponseProtoMsg): _284.RedelegationResponse;
                toProto(message: _284.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _284.RedelegationResponse): _284.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _284.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.Pool;
                fromJSON(object: any): _284.Pool;
                toJSON(message: _284.Pool): unknown;
                fromPartial(object: Partial<_284.Pool>): _284.Pool;
                fromAmino(object: _284.PoolAmino): _284.Pool;
                toAmino(message: _284.Pool): _284.PoolAmino;
                fromAminoMsg(object: _284.PoolAminoMsg): _284.Pool;
                toAminoMsg(message: _284.Pool): _284.PoolAminoMsg;
                fromProtoMsg(message: _284.PoolProtoMsg): _284.Pool;
                toProto(message: _284.Pool): Uint8Array;
                toProtoMsg(message: _284.Pool): _284.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _283.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorsRequest;
                fromJSON(object: any): _283.QueryValidatorsRequest;
                toJSON(message: _283.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_283.QueryValidatorsRequest>): _283.QueryValidatorsRequest;
                fromAmino(object: _283.QueryValidatorsRequestAmino): _283.QueryValidatorsRequest;
                toAmino(message: _283.QueryValidatorsRequest): _283.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _283.QueryValidatorsRequestAminoMsg): _283.QueryValidatorsRequest;
                toAminoMsg(message: _283.QueryValidatorsRequest): _283.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorsRequestProtoMsg): _283.QueryValidatorsRequest;
                toProto(message: _283.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorsRequest): _283.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _283.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorsResponse;
                fromJSON(object: any): _283.QueryValidatorsResponse;
                toJSON(message: _283.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_283.QueryValidatorsResponse>): _283.QueryValidatorsResponse;
                fromAmino(object: _283.QueryValidatorsResponseAmino): _283.QueryValidatorsResponse;
                toAmino(message: _283.QueryValidatorsResponse): _283.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _283.QueryValidatorsResponseAminoMsg): _283.QueryValidatorsResponse;
                toAminoMsg(message: _283.QueryValidatorsResponse): _283.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorsResponseProtoMsg): _283.QueryValidatorsResponse;
                toProto(message: _283.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorsResponse): _283.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _283.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorRequest;
                fromJSON(object: any): _283.QueryValidatorRequest;
                toJSON(message: _283.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_283.QueryValidatorRequest>): _283.QueryValidatorRequest;
                fromAmino(object: _283.QueryValidatorRequestAmino): _283.QueryValidatorRequest;
                toAmino(message: _283.QueryValidatorRequest): _283.QueryValidatorRequestAmino;
                fromAminoMsg(object: _283.QueryValidatorRequestAminoMsg): _283.QueryValidatorRequest;
                toAminoMsg(message: _283.QueryValidatorRequest): _283.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorRequestProtoMsg): _283.QueryValidatorRequest;
                toProto(message: _283.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorRequest): _283.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _283.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorResponse;
                fromJSON(object: any): _283.QueryValidatorResponse;
                toJSON(message: _283.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_283.QueryValidatorResponse>): _283.QueryValidatorResponse;
                fromAmino(object: _283.QueryValidatorResponseAmino): _283.QueryValidatorResponse;
                toAmino(message: _283.QueryValidatorResponse): _283.QueryValidatorResponseAmino;
                fromAminoMsg(object: _283.QueryValidatorResponseAminoMsg): _283.QueryValidatorResponse;
                toAminoMsg(message: _283.QueryValidatorResponse): _283.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorResponseProtoMsg): _283.QueryValidatorResponse;
                toProto(message: _283.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorResponse): _283.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _283.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _283.QueryValidatorDelegationsRequest;
                toJSON(message: _283.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_283.QueryValidatorDelegationsRequest>): _283.QueryValidatorDelegationsRequest;
                fromAmino(object: _283.QueryValidatorDelegationsRequestAmino): _283.QueryValidatorDelegationsRequest;
                toAmino(message: _283.QueryValidatorDelegationsRequest): _283.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _283.QueryValidatorDelegationsRequestAminoMsg): _283.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _283.QueryValidatorDelegationsRequest): _283.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorDelegationsRequestProtoMsg): _283.QueryValidatorDelegationsRequest;
                toProto(message: _283.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorDelegationsRequest): _283.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _283.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _283.QueryValidatorDelegationsResponse;
                toJSON(message: _283.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_283.QueryValidatorDelegationsResponse>): _283.QueryValidatorDelegationsResponse;
                fromAmino(object: _283.QueryValidatorDelegationsResponseAmino): _283.QueryValidatorDelegationsResponse;
                toAmino(message: _283.QueryValidatorDelegationsResponse): _283.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _283.QueryValidatorDelegationsResponseAminoMsg): _283.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _283.QueryValidatorDelegationsResponse): _283.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorDelegationsResponseProtoMsg): _283.QueryValidatorDelegationsResponse;
                toProto(message: _283.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorDelegationsResponse): _283.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _283.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _283.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _283.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_283.QueryValidatorUnbondingDelegationsRequest>): _283.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _283.QueryValidatorUnbondingDelegationsRequestAmino): _283.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _283.QueryValidatorUnbondingDelegationsRequest): _283.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _283.QueryValidatorUnbondingDelegationsRequestAminoMsg): _283.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _283.QueryValidatorUnbondingDelegationsRequest): _283.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorUnbondingDelegationsRequestProtoMsg): _283.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _283.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorUnbondingDelegationsRequest): _283.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _283.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _283.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _283.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_283.QueryValidatorUnbondingDelegationsResponse>): _283.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _283.QueryValidatorUnbondingDelegationsResponseAmino): _283.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _283.QueryValidatorUnbondingDelegationsResponse): _283.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _283.QueryValidatorUnbondingDelegationsResponseAminoMsg): _283.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _283.QueryValidatorUnbondingDelegationsResponse): _283.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryValidatorUnbondingDelegationsResponseProtoMsg): _283.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _283.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryValidatorUnbondingDelegationsResponse): _283.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _283.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegationRequest;
                fromJSON(object: any): _283.QueryDelegationRequest;
                toJSON(message: _283.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_283.QueryDelegationRequest>): _283.QueryDelegationRequest;
                fromAmino(object: _283.QueryDelegationRequestAmino): _283.QueryDelegationRequest;
                toAmino(message: _283.QueryDelegationRequest): _283.QueryDelegationRequestAmino;
                fromAminoMsg(object: _283.QueryDelegationRequestAminoMsg): _283.QueryDelegationRequest;
                toAminoMsg(message: _283.QueryDelegationRequest): _283.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDelegationRequestProtoMsg): _283.QueryDelegationRequest;
                toProto(message: _283.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDelegationRequest): _283.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _283.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegationResponse;
                fromJSON(object: any): _283.QueryDelegationResponse;
                toJSON(message: _283.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_283.QueryDelegationResponse>): _283.QueryDelegationResponse;
                fromAmino(object: _283.QueryDelegationResponseAmino): _283.QueryDelegationResponse;
                toAmino(message: _283.QueryDelegationResponse): _283.QueryDelegationResponseAmino;
                fromAminoMsg(object: _283.QueryDelegationResponseAminoMsg): _283.QueryDelegationResponse;
                toAminoMsg(message: _283.QueryDelegationResponse): _283.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDelegationResponseProtoMsg): _283.QueryDelegationResponse;
                toProto(message: _283.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDelegationResponse): _283.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _283.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _283.QueryUnbondingDelegationRequest;
                toJSON(message: _283.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_283.QueryUnbondingDelegationRequest>): _283.QueryUnbondingDelegationRequest;
                fromAmino(object: _283.QueryUnbondingDelegationRequestAmino): _283.QueryUnbondingDelegationRequest;
                toAmino(message: _283.QueryUnbondingDelegationRequest): _283.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _283.QueryUnbondingDelegationRequestAminoMsg): _283.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _283.QueryUnbondingDelegationRequest): _283.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _283.QueryUnbondingDelegationRequestProtoMsg): _283.QueryUnbondingDelegationRequest;
                toProto(message: _283.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _283.QueryUnbondingDelegationRequest): _283.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _283.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _283.QueryUnbondingDelegationResponse;
                toJSON(message: _283.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_283.QueryUnbondingDelegationResponse>): _283.QueryUnbondingDelegationResponse;
                fromAmino(object: _283.QueryUnbondingDelegationResponseAmino): _283.QueryUnbondingDelegationResponse;
                toAmino(message: _283.QueryUnbondingDelegationResponse): _283.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _283.QueryUnbondingDelegationResponseAminoMsg): _283.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _283.QueryUnbondingDelegationResponse): _283.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _283.QueryUnbondingDelegationResponseProtoMsg): _283.QueryUnbondingDelegationResponse;
                toProto(message: _283.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _283.QueryUnbondingDelegationResponse): _283.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _283.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _283.QueryDelegatorDelegationsRequest;
                toJSON(message: _283.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorDelegationsRequest>): _283.QueryDelegatorDelegationsRequest;
                fromAmino(object: _283.QueryDelegatorDelegationsRequestAmino): _283.QueryDelegatorDelegationsRequest;
                toAmino(message: _283.QueryDelegatorDelegationsRequest): _283.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _283.QueryDelegatorDelegationsRequestAminoMsg): _283.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _283.QueryDelegatorDelegationsRequest): _283.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorDelegationsRequestProtoMsg): _283.QueryDelegatorDelegationsRequest;
                toProto(message: _283.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorDelegationsRequest): _283.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _283.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _283.QueryDelegatorDelegationsResponse;
                toJSON(message: _283.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorDelegationsResponse>): _283.QueryDelegatorDelegationsResponse;
                fromAmino(object: _283.QueryDelegatorDelegationsResponseAmino): _283.QueryDelegatorDelegationsResponse;
                toAmino(message: _283.QueryDelegatorDelegationsResponse): _283.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _283.QueryDelegatorDelegationsResponseAminoMsg): _283.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _283.QueryDelegatorDelegationsResponse): _283.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorDelegationsResponseProtoMsg): _283.QueryDelegatorDelegationsResponse;
                toProto(message: _283.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorDelegationsResponse): _283.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _283.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _283.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _283.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorUnbondingDelegationsRequest>): _283.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _283.QueryDelegatorUnbondingDelegationsRequestAmino): _283.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _283.QueryDelegatorUnbondingDelegationsRequest): _283.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _283.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _283.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _283.QueryDelegatorUnbondingDelegationsRequest): _283.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _283.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _283.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorUnbondingDelegationsRequest): _283.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _283.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _283.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _283.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorUnbondingDelegationsResponse>): _283.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _283.QueryDelegatorUnbondingDelegationsResponseAmino): _283.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _283.QueryDelegatorUnbondingDelegationsResponse): _283.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _283.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _283.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _283.QueryDelegatorUnbondingDelegationsResponse): _283.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _283.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _283.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorUnbondingDelegationsResponse): _283.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _283.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryRedelegationsRequest;
                fromJSON(object: any): _283.QueryRedelegationsRequest;
                toJSON(message: _283.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_283.QueryRedelegationsRequest>): _283.QueryRedelegationsRequest;
                fromAmino(object: _283.QueryRedelegationsRequestAmino): _283.QueryRedelegationsRequest;
                toAmino(message: _283.QueryRedelegationsRequest): _283.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _283.QueryRedelegationsRequestAminoMsg): _283.QueryRedelegationsRequest;
                toAminoMsg(message: _283.QueryRedelegationsRequest): _283.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryRedelegationsRequestProtoMsg): _283.QueryRedelegationsRequest;
                toProto(message: _283.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryRedelegationsRequest): _283.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _283.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryRedelegationsResponse;
                fromJSON(object: any): _283.QueryRedelegationsResponse;
                toJSON(message: _283.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_283.QueryRedelegationsResponse>): _283.QueryRedelegationsResponse;
                fromAmino(object: _283.QueryRedelegationsResponseAmino): _283.QueryRedelegationsResponse;
                toAmino(message: _283.QueryRedelegationsResponse): _283.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _283.QueryRedelegationsResponseAminoMsg): _283.QueryRedelegationsResponse;
                toAminoMsg(message: _283.QueryRedelegationsResponse): _283.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryRedelegationsResponseProtoMsg): _283.QueryRedelegationsResponse;
                toProto(message: _283.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryRedelegationsResponse): _283.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _283.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _283.QueryDelegatorValidatorsRequest;
                toJSON(message: _283.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorValidatorsRequest>): _283.QueryDelegatorValidatorsRequest;
                fromAmino(object: _283.QueryDelegatorValidatorsRequestAmino): _283.QueryDelegatorValidatorsRequest;
                toAmino(message: _283.QueryDelegatorValidatorsRequest): _283.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _283.QueryDelegatorValidatorsRequestAminoMsg): _283.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _283.QueryDelegatorValidatorsRequest): _283.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorValidatorsRequestProtoMsg): _283.QueryDelegatorValidatorsRequest;
                toProto(message: _283.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorValidatorsRequest): _283.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _283.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _283.QueryDelegatorValidatorsResponse;
                toJSON(message: _283.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorValidatorsResponse>): _283.QueryDelegatorValidatorsResponse;
                fromAmino(object: _283.QueryDelegatorValidatorsResponseAmino): _283.QueryDelegatorValidatorsResponse;
                toAmino(message: _283.QueryDelegatorValidatorsResponse): _283.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _283.QueryDelegatorValidatorsResponseAminoMsg): _283.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _283.QueryDelegatorValidatorsResponse): _283.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorValidatorsResponseProtoMsg): _283.QueryDelegatorValidatorsResponse;
                toProto(message: _283.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorValidatorsResponse): _283.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _283.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _283.QueryDelegatorValidatorRequest;
                toJSON(message: _283.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorValidatorRequest>): _283.QueryDelegatorValidatorRequest;
                fromAmino(object: _283.QueryDelegatorValidatorRequestAmino): _283.QueryDelegatorValidatorRequest;
                toAmino(message: _283.QueryDelegatorValidatorRequest): _283.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _283.QueryDelegatorValidatorRequestAminoMsg): _283.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _283.QueryDelegatorValidatorRequest): _283.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorValidatorRequestProtoMsg): _283.QueryDelegatorValidatorRequest;
                toProto(message: _283.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorValidatorRequest): _283.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _283.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _283.QueryDelegatorValidatorResponse;
                toJSON(message: _283.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_283.QueryDelegatorValidatorResponse>): _283.QueryDelegatorValidatorResponse;
                fromAmino(object: _283.QueryDelegatorValidatorResponseAmino): _283.QueryDelegatorValidatorResponse;
                toAmino(message: _283.QueryDelegatorValidatorResponse): _283.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _283.QueryDelegatorValidatorResponseAminoMsg): _283.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _283.QueryDelegatorValidatorResponse): _283.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _283.QueryDelegatorValidatorResponseProtoMsg): _283.QueryDelegatorValidatorResponse;
                toProto(message: _283.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _283.QueryDelegatorValidatorResponse): _283.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _283.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryHistoricalInfoRequest;
                fromJSON(object: any): _283.QueryHistoricalInfoRequest;
                toJSON(message: _283.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_283.QueryHistoricalInfoRequest>): _283.QueryHistoricalInfoRequest;
                fromAmino(object: _283.QueryHistoricalInfoRequestAmino): _283.QueryHistoricalInfoRequest;
                toAmino(message: _283.QueryHistoricalInfoRequest): _283.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _283.QueryHistoricalInfoRequestAminoMsg): _283.QueryHistoricalInfoRequest;
                toAminoMsg(message: _283.QueryHistoricalInfoRequest): _283.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _283.QueryHistoricalInfoRequestProtoMsg): _283.QueryHistoricalInfoRequest;
                toProto(message: _283.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _283.QueryHistoricalInfoRequest): _283.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _283.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryHistoricalInfoResponse;
                fromJSON(object: any): _283.QueryHistoricalInfoResponse;
                toJSON(message: _283.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_283.QueryHistoricalInfoResponse>): _283.QueryHistoricalInfoResponse;
                fromAmino(object: _283.QueryHistoricalInfoResponseAmino): _283.QueryHistoricalInfoResponse;
                toAmino(message: _283.QueryHistoricalInfoResponse): _283.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _283.QueryHistoricalInfoResponseAminoMsg): _283.QueryHistoricalInfoResponse;
                toAminoMsg(message: _283.QueryHistoricalInfoResponse): _283.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _283.QueryHistoricalInfoResponseProtoMsg): _283.QueryHistoricalInfoResponse;
                toProto(message: _283.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _283.QueryHistoricalInfoResponse): _283.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _283.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryPoolRequest;
                fromJSON(_: any): _283.QueryPoolRequest;
                toJSON(_: _283.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_283.QueryPoolRequest>): _283.QueryPoolRequest;
                fromAmino(_: _283.QueryPoolRequestAmino): _283.QueryPoolRequest;
                toAmino(_: _283.QueryPoolRequest): _283.QueryPoolRequestAmino;
                fromAminoMsg(object: _283.QueryPoolRequestAminoMsg): _283.QueryPoolRequest;
                toAminoMsg(message: _283.QueryPoolRequest): _283.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _283.QueryPoolRequestProtoMsg): _283.QueryPoolRequest;
                toProto(message: _283.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _283.QueryPoolRequest): _283.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _283.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryPoolResponse;
                fromJSON(object: any): _283.QueryPoolResponse;
                toJSON(message: _283.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_283.QueryPoolResponse>): _283.QueryPoolResponse;
                fromAmino(object: _283.QueryPoolResponseAmino): _283.QueryPoolResponse;
                toAmino(message: _283.QueryPoolResponse): _283.QueryPoolResponseAmino;
                fromAminoMsg(object: _283.QueryPoolResponseAminoMsg): _283.QueryPoolResponse;
                toAminoMsg(message: _283.QueryPoolResponse): _283.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _283.QueryPoolResponseProtoMsg): _283.QueryPoolResponse;
                toProto(message: _283.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _283.QueryPoolResponse): _283.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _283.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryParamsRequest;
                fromJSON(_: any): _283.QueryParamsRequest;
                toJSON(_: _283.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_283.QueryParamsRequest>): _283.QueryParamsRequest;
                fromAmino(_: _283.QueryParamsRequestAmino): _283.QueryParamsRequest;
                toAmino(_: _283.QueryParamsRequest): _283.QueryParamsRequestAmino;
                fromAminoMsg(object: _283.QueryParamsRequestAminoMsg): _283.QueryParamsRequest;
                toAminoMsg(message: _283.QueryParamsRequest): _283.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _283.QueryParamsRequestProtoMsg): _283.QueryParamsRequest;
                toProto(message: _283.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _283.QueryParamsRequest): _283.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _283.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.QueryParamsResponse;
                fromJSON(object: any): _283.QueryParamsResponse;
                toJSON(message: _283.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_283.QueryParamsResponse>): _283.QueryParamsResponse;
                fromAmino(object: _283.QueryParamsResponseAmino): _283.QueryParamsResponse;
                toAmino(message: _283.QueryParamsResponse): _283.QueryParamsResponseAmino;
                fromAminoMsg(object: _283.QueryParamsResponseAminoMsg): _283.QueryParamsResponse;
                toAminoMsg(message: _283.QueryParamsResponse): _283.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _283.QueryParamsResponseProtoMsg): _283.QueryParamsResponse;
                toProto(message: _283.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _283.QueryParamsResponse): _283.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _282.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.GenesisState;
                fromJSON(object: any): _282.GenesisState;
                toJSON(message: _282.GenesisState): unknown;
                fromPartial(object: Partial<_282.GenesisState>): _282.GenesisState;
                fromAmino(object: _282.GenesisStateAmino): _282.GenesisState;
                toAmino(message: _282.GenesisState): _282.GenesisStateAmino;
                fromAminoMsg(object: _282.GenesisStateAminoMsg): _282.GenesisState;
                toAminoMsg(message: _282.GenesisState): _282.GenesisStateAminoMsg;
                fromProtoMsg(message: _282.GenesisStateProtoMsg): _282.GenesisState;
                toProto(message: _282.GenesisState): Uint8Array;
                toProtoMsg(message: _282.GenesisState): _282.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _282.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.LastValidatorPower;
                fromJSON(object: any): _282.LastValidatorPower;
                toJSON(message: _282.LastValidatorPower): unknown;
                fromPartial(object: Partial<_282.LastValidatorPower>): _282.LastValidatorPower;
                fromAmino(object: _282.LastValidatorPowerAmino): _282.LastValidatorPower;
                toAmino(message: _282.LastValidatorPower): _282.LastValidatorPowerAmino;
                fromAminoMsg(object: _282.LastValidatorPowerAminoMsg): _282.LastValidatorPower;
                toAminoMsg(message: _282.LastValidatorPower): _282.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _282.LastValidatorPowerProtoMsg): _282.LastValidatorPower;
                toProto(message: _282.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _282.LastValidatorPower): _282.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _281.AuthorizationType;
            authorizationTypeToJSON(object: _281.AuthorizationType): string;
            AuthorizationType: typeof _281.AuthorizationType;
            AuthorizationTypeSDKType: typeof _281.AuthorizationType;
            AuthorizationTypeAmino: typeof _281.AuthorizationType;
            StakeAuthorization: {
                encode(message: _281.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.StakeAuthorization;
                fromJSON(object: any): _281.StakeAuthorization;
                toJSON(message: _281.StakeAuthorization): unknown;
                fromPartial(object: Partial<_281.StakeAuthorization>): _281.StakeAuthorization;
                fromAmino(object: _281.StakeAuthorizationAmino): _281.StakeAuthorization;
                toAmino(message: _281.StakeAuthorization): _281.StakeAuthorizationAmino;
                fromAminoMsg(object: _281.StakeAuthorizationAminoMsg): _281.StakeAuthorization;
                toAminoMsg(message: _281.StakeAuthorization): _281.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _281.StakeAuthorizationProtoMsg): _281.StakeAuthorization;
                toProto(message: _281.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _281.StakeAuthorization): _281.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _281.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.StakeAuthorization_Validators;
                fromJSON(object: any): _281.StakeAuthorization_Validators;
                toJSON(message: _281.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_281.StakeAuthorization_Validators>): _281.StakeAuthorization_Validators;
                fromAmino(object: _281.StakeAuthorization_ValidatorsAmino): _281.StakeAuthorization_Validators;
                toAmino(message: _281.StakeAuthorization_Validators): _281.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _281.StakeAuthorization_ValidatorsAminoMsg): _281.StakeAuthorization_Validators;
                toAminoMsg(message: _281.StakeAuthorization_Validators): _281.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _281.StakeAuthorization_ValidatorsProtoMsg): _281.StakeAuthorization_Validators;
                toProto(message: _281.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _281.StakeAuthorization_Validators): _281.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _286.SignMode;
                signModeToJSON(object: _286.SignMode): string;
                SignMode: typeof _286.SignMode;
                SignModeSDKType: typeof _286.SignMode;
                SignModeAmino: typeof _286.SignMode;
                SignatureDescriptors: {
                    encode(message: _286.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.SignatureDescriptors;
                    fromJSON(object: any): _286.SignatureDescriptors;
                    toJSON(message: _286.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_286.SignatureDescriptors>): _286.SignatureDescriptors;
                    fromAmino(object: _286.SignatureDescriptorsAmino): _286.SignatureDescriptors;
                    toAmino(message: _286.SignatureDescriptors): _286.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _286.SignatureDescriptorsAminoMsg): _286.SignatureDescriptors;
                    toAminoMsg(message: _286.SignatureDescriptors): _286.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _286.SignatureDescriptorsProtoMsg): _286.SignatureDescriptors;
                    toProto(message: _286.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _286.SignatureDescriptors): _286.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _286.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.SignatureDescriptor;
                    fromJSON(object: any): _286.SignatureDescriptor;
                    toJSON(message: _286.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_286.SignatureDescriptor>): _286.SignatureDescriptor;
                    fromAmino(object: _286.SignatureDescriptorAmino): _286.SignatureDescriptor;
                    toAmino(message: _286.SignatureDescriptor): _286.SignatureDescriptorAmino;
                    fromAminoMsg(object: _286.SignatureDescriptorAminoMsg): _286.SignatureDescriptor;
                    toAminoMsg(message: _286.SignatureDescriptor): _286.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _286.SignatureDescriptorProtoMsg): _286.SignatureDescriptor;
                    toProto(message: _286.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _286.SignatureDescriptor): _286.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _286.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.SignatureDescriptor_Data;
                    fromJSON(object: any): _286.SignatureDescriptor_Data;
                    toJSON(message: _286.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_286.SignatureDescriptor_Data>): _286.SignatureDescriptor_Data;
                    fromAmino(object: _286.SignatureDescriptor_DataAmino): _286.SignatureDescriptor_Data;
                    toAmino(message: _286.SignatureDescriptor_Data): _286.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _286.SignatureDescriptor_DataAminoMsg): _286.SignatureDescriptor_Data;
                    toAminoMsg(message: _286.SignatureDescriptor_Data): _286.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _286.SignatureDescriptor_DataProtoMsg): _286.SignatureDescriptor_Data;
                    toProto(message: _286.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _286.SignatureDescriptor_Data): _286.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _286.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _286.SignatureDescriptor_Data_Single;
                    toJSON(message: _286.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_286.SignatureDescriptor_Data_Single>): _286.SignatureDescriptor_Data_Single;
                    fromAmino(object: _286.SignatureDescriptor_Data_SingleAmino): _286.SignatureDescriptor_Data_Single;
                    toAmino(message: _286.SignatureDescriptor_Data_Single): _286.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _286.SignatureDescriptor_Data_SingleAminoMsg): _286.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _286.SignatureDescriptor_Data_Single): _286.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _286.SignatureDescriptor_Data_SingleProtoMsg): _286.SignatureDescriptor_Data_Single;
                    toProto(message: _286.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _286.SignatureDescriptor_Data_Single): _286.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _286.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _286.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _286.SignatureDescriptor_Data_Multi;
                    toJSON(message: _286.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_286.SignatureDescriptor_Data_Multi>): _286.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _286.SignatureDescriptor_Data_MultiAmino): _286.SignatureDescriptor_Data_Multi;
                    toAmino(message: _286.SignatureDescriptor_Data_Multi): _286.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _286.SignatureDescriptor_Data_MultiAminoMsg): _286.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _286.SignatureDescriptor_Data_Multi): _286.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _286.SignatureDescriptor_Data_MultiProtoMsg): _286.SignatureDescriptor_Data_Multi;
                    toProto(message: _286.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _286.SignatureDescriptor_Data_Multi): _286.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _463.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _287.SimulateRequest): Promise<_287.SimulateResponse>;
                getTx(request: _287.GetTxRequest): Promise<_287.GetTxResponse>;
                broadcastTx(request: _287.BroadcastTxRequest): Promise<_287.BroadcastTxResponse>;
                getTxsEvent(request: _287.GetTxsEventRequest): Promise<_287.GetTxsEventResponse>;
                getBlockWithTxs(request: _287.GetBlockWithTxsRequest): Promise<_287.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _288.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Tx;
                fromJSON(object: any): _288.Tx;
                toJSON(message: _288.Tx): unknown;
                fromPartial(object: Partial<_288.Tx>): _288.Tx;
                fromAmino(object: _288.TxAmino): _288.Tx;
                toAmino(message: _288.Tx): _288.TxAmino;
                fromAminoMsg(object: _288.TxAminoMsg): _288.Tx;
                toAminoMsg(message: _288.Tx): _288.TxAminoMsg;
                fromProtoMsg(message: _288.TxProtoMsg): _288.Tx;
                toProto(message: _288.Tx): Uint8Array;
                toProtoMsg(message: _288.Tx): _288.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _288.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.TxRaw;
                fromJSON(object: any): _288.TxRaw;
                toJSON(message: _288.TxRaw): unknown;
                fromPartial(object: Partial<_288.TxRaw>): _288.TxRaw;
                fromAmino(object: _288.TxRawAmino): _288.TxRaw;
                toAmino(message: _288.TxRaw): _288.TxRawAmino;
                fromAminoMsg(object: _288.TxRawAminoMsg): _288.TxRaw;
                toAminoMsg(message: _288.TxRaw): _288.TxRawAminoMsg;
                fromProtoMsg(message: _288.TxRawProtoMsg): _288.TxRaw;
                toProto(message: _288.TxRaw): Uint8Array;
                toProtoMsg(message: _288.TxRaw): _288.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _288.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.SignDoc;
                fromJSON(object: any): _288.SignDoc;
                toJSON(message: _288.SignDoc): unknown;
                fromPartial(object: Partial<_288.SignDoc>): _288.SignDoc;
                fromAmino(object: _288.SignDocAmino): _288.SignDoc;
                toAmino(message: _288.SignDoc): _288.SignDocAmino;
                fromAminoMsg(object: _288.SignDocAminoMsg): _288.SignDoc;
                toAminoMsg(message: _288.SignDoc): _288.SignDocAminoMsg;
                fromProtoMsg(message: _288.SignDocProtoMsg): _288.SignDoc;
                toProto(message: _288.SignDoc): Uint8Array;
                toProtoMsg(message: _288.SignDoc): _288.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _288.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.SignDocDirectAux;
                fromJSON(object: any): _288.SignDocDirectAux;
                toJSON(message: _288.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_288.SignDocDirectAux>): _288.SignDocDirectAux;
                fromAmino(object: _288.SignDocDirectAuxAmino): _288.SignDocDirectAux;
                toAmino(message: _288.SignDocDirectAux): _288.SignDocDirectAuxAmino;
                fromAminoMsg(object: _288.SignDocDirectAuxAminoMsg): _288.SignDocDirectAux;
                toAminoMsg(message: _288.SignDocDirectAux): _288.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _288.SignDocDirectAuxProtoMsg): _288.SignDocDirectAux;
                toProto(message: _288.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _288.SignDocDirectAux): _288.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _288.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.TxBody;
                fromJSON(object: any): _288.TxBody;
                toJSON(message: _288.TxBody): unknown;
                fromPartial(object: Partial<_288.TxBody>): _288.TxBody;
                fromAmino(object: _288.TxBodyAmino): _288.TxBody;
                toAmino(message: _288.TxBody): _288.TxBodyAmino;
                fromAminoMsg(object: _288.TxBodyAminoMsg): _288.TxBody;
                toAminoMsg(message: _288.TxBody): _288.TxBodyAminoMsg;
                fromProtoMsg(message: _288.TxBodyProtoMsg): _288.TxBody;
                toProto(message: _288.TxBody): Uint8Array;
                toProtoMsg(message: _288.TxBody): _288.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _288.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.AuthInfo;
                fromJSON(object: any): _288.AuthInfo;
                toJSON(message: _288.AuthInfo): unknown;
                fromPartial(object: Partial<_288.AuthInfo>): _288.AuthInfo;
                fromAmino(object: _288.AuthInfoAmino): _288.AuthInfo;
                toAmino(message: _288.AuthInfo): _288.AuthInfoAmino;
                fromAminoMsg(object: _288.AuthInfoAminoMsg): _288.AuthInfo;
                toAminoMsg(message: _288.AuthInfo): _288.AuthInfoAminoMsg;
                fromProtoMsg(message: _288.AuthInfoProtoMsg): _288.AuthInfo;
                toProto(message: _288.AuthInfo): Uint8Array;
                toProtoMsg(message: _288.AuthInfo): _288.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _288.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.SignerInfo;
                fromJSON(object: any): _288.SignerInfo;
                toJSON(message: _288.SignerInfo): unknown;
                fromPartial(object: Partial<_288.SignerInfo>): _288.SignerInfo;
                fromAmino(object: _288.SignerInfoAmino): _288.SignerInfo;
                toAmino(message: _288.SignerInfo): _288.SignerInfoAmino;
                fromAminoMsg(object: _288.SignerInfoAminoMsg): _288.SignerInfo;
                toAminoMsg(message: _288.SignerInfo): _288.SignerInfoAminoMsg;
                fromProtoMsg(message: _288.SignerInfoProtoMsg): _288.SignerInfo;
                toProto(message: _288.SignerInfo): Uint8Array;
                toProtoMsg(message: _288.SignerInfo): _288.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _288.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.ModeInfo;
                fromJSON(object: any): _288.ModeInfo;
                toJSON(message: _288.ModeInfo): unknown;
                fromPartial(object: Partial<_288.ModeInfo>): _288.ModeInfo;
                fromAmino(object: _288.ModeInfoAmino): _288.ModeInfo;
                toAmino(message: _288.ModeInfo): _288.ModeInfoAmino;
                fromAminoMsg(object: _288.ModeInfoAminoMsg): _288.ModeInfo;
                toAminoMsg(message: _288.ModeInfo): _288.ModeInfoAminoMsg;
                fromProtoMsg(message: _288.ModeInfoProtoMsg): _288.ModeInfo;
                toProto(message: _288.ModeInfo): Uint8Array;
                toProtoMsg(message: _288.ModeInfo): _288.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _288.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.ModeInfo_Single;
                fromJSON(object: any): _288.ModeInfo_Single;
                toJSON(message: _288.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_288.ModeInfo_Single>): _288.ModeInfo_Single;
                fromAmino(object: _288.ModeInfo_SingleAmino): _288.ModeInfo_Single;
                toAmino(message: _288.ModeInfo_Single): _288.ModeInfo_SingleAmino;
                fromAminoMsg(object: _288.ModeInfo_SingleAminoMsg): _288.ModeInfo_Single;
                toAminoMsg(message: _288.ModeInfo_Single): _288.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _288.ModeInfo_SingleProtoMsg): _288.ModeInfo_Single;
                toProto(message: _288.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _288.ModeInfo_Single): _288.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _288.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.ModeInfo_Multi;
                fromJSON(object: any): _288.ModeInfo_Multi;
                toJSON(message: _288.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_288.ModeInfo_Multi>): _288.ModeInfo_Multi;
                fromAmino(object: _288.ModeInfo_MultiAmino): _288.ModeInfo_Multi;
                toAmino(message: _288.ModeInfo_Multi): _288.ModeInfo_MultiAmino;
                fromAminoMsg(object: _288.ModeInfo_MultiAminoMsg): _288.ModeInfo_Multi;
                toAminoMsg(message: _288.ModeInfo_Multi): _288.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _288.ModeInfo_MultiProtoMsg): _288.ModeInfo_Multi;
                toProto(message: _288.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _288.ModeInfo_Multi): _288.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _288.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Fee;
                fromJSON(object: any): _288.Fee;
                toJSON(message: _288.Fee): unknown;
                fromPartial(object: Partial<_288.Fee>): _288.Fee;
                fromAmino(object: _288.FeeAmino): _288.Fee;
                toAmino(message: _288.Fee): _288.FeeAmino;
                fromAminoMsg(object: _288.FeeAminoMsg): _288.Fee;
                toAminoMsg(message: _288.Fee): _288.FeeAminoMsg;
                fromProtoMsg(message: _288.FeeProtoMsg): _288.Fee;
                toProto(message: _288.Fee): Uint8Array;
                toProtoMsg(message: _288.Fee): _288.FeeProtoMsg;
            };
            Tip: {
                encode(message: _288.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.Tip;
                fromJSON(object: any): _288.Tip;
                toJSON(message: _288.Tip): unknown;
                fromPartial(object: Partial<_288.Tip>): _288.Tip;
                fromAmino(object: _288.TipAmino): _288.Tip;
                toAmino(message: _288.Tip): _288.TipAmino;
                fromAminoMsg(object: _288.TipAminoMsg): _288.Tip;
                toAminoMsg(message: _288.Tip): _288.TipAminoMsg;
                fromProtoMsg(message: _288.TipProtoMsg): _288.Tip;
                toProto(message: _288.Tip): Uint8Array;
                toProtoMsg(message: _288.Tip): _288.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _288.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _288.AuxSignerData;
                fromJSON(object: any): _288.AuxSignerData;
                toJSON(message: _288.AuxSignerData): unknown;
                fromPartial(object: Partial<_288.AuxSignerData>): _288.AuxSignerData;
                fromAmino(object: _288.AuxSignerDataAmino): _288.AuxSignerData;
                toAmino(message: _288.AuxSignerData): _288.AuxSignerDataAmino;
                fromAminoMsg(object: _288.AuxSignerDataAminoMsg): _288.AuxSignerData;
                toAminoMsg(message: _288.AuxSignerData): _288.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _288.AuxSignerDataProtoMsg): _288.AuxSignerData;
                toProto(message: _288.AuxSignerData): Uint8Array;
                toProtoMsg(message: _288.AuxSignerData): _288.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _287.OrderBy;
            orderByToJSON(object: _287.OrderBy): string;
            broadcastModeFromJSON(object: any): _287.BroadcastMode;
            broadcastModeToJSON(object: _287.BroadcastMode): string;
            OrderBy: typeof _287.OrderBy;
            OrderBySDKType: typeof _287.OrderBy;
            OrderByAmino: typeof _287.OrderBy;
            BroadcastMode: typeof _287.BroadcastMode;
            BroadcastModeSDKType: typeof _287.BroadcastMode;
            BroadcastModeAmino: typeof _287.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _287.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetTxsEventRequest;
                fromJSON(object: any): _287.GetTxsEventRequest;
                toJSON(message: _287.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_287.GetTxsEventRequest>): _287.GetTxsEventRequest;
                fromAmino(object: _287.GetTxsEventRequestAmino): _287.GetTxsEventRequest;
                toAmino(message: _287.GetTxsEventRequest): _287.GetTxsEventRequestAmino;
                fromAminoMsg(object: _287.GetTxsEventRequestAminoMsg): _287.GetTxsEventRequest;
                toAminoMsg(message: _287.GetTxsEventRequest): _287.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _287.GetTxsEventRequestProtoMsg): _287.GetTxsEventRequest;
                toProto(message: _287.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _287.GetTxsEventRequest): _287.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _287.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetTxsEventResponse;
                fromJSON(object: any): _287.GetTxsEventResponse;
                toJSON(message: _287.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_287.GetTxsEventResponse>): _287.GetTxsEventResponse;
                fromAmino(object: _287.GetTxsEventResponseAmino): _287.GetTxsEventResponse;
                toAmino(message: _287.GetTxsEventResponse): _287.GetTxsEventResponseAmino;
                fromAminoMsg(object: _287.GetTxsEventResponseAminoMsg): _287.GetTxsEventResponse;
                toAminoMsg(message: _287.GetTxsEventResponse): _287.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _287.GetTxsEventResponseProtoMsg): _287.GetTxsEventResponse;
                toProto(message: _287.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _287.GetTxsEventResponse): _287.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _287.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.BroadcastTxRequest;
                fromJSON(object: any): _287.BroadcastTxRequest;
                toJSON(message: _287.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_287.BroadcastTxRequest>): _287.BroadcastTxRequest;
                fromAmino(object: _287.BroadcastTxRequestAmino): _287.BroadcastTxRequest;
                toAmino(message: _287.BroadcastTxRequest): _287.BroadcastTxRequestAmino;
                fromAminoMsg(object: _287.BroadcastTxRequestAminoMsg): _287.BroadcastTxRequest;
                toAminoMsg(message: _287.BroadcastTxRequest): _287.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _287.BroadcastTxRequestProtoMsg): _287.BroadcastTxRequest;
                toProto(message: _287.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _287.BroadcastTxRequest): _287.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _287.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.BroadcastTxResponse;
                fromJSON(object: any): _287.BroadcastTxResponse;
                toJSON(message: _287.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_287.BroadcastTxResponse>): _287.BroadcastTxResponse;
                fromAmino(object: _287.BroadcastTxResponseAmino): _287.BroadcastTxResponse;
                toAmino(message: _287.BroadcastTxResponse): _287.BroadcastTxResponseAmino;
                fromAminoMsg(object: _287.BroadcastTxResponseAminoMsg): _287.BroadcastTxResponse;
                toAminoMsg(message: _287.BroadcastTxResponse): _287.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _287.BroadcastTxResponseProtoMsg): _287.BroadcastTxResponse;
                toProto(message: _287.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _287.BroadcastTxResponse): _287.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _287.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.SimulateRequest;
                fromJSON(object: any): _287.SimulateRequest;
                toJSON(message: _287.SimulateRequest): unknown;
                fromPartial(object: Partial<_287.SimulateRequest>): _287.SimulateRequest;
                fromAmino(object: _287.SimulateRequestAmino): _287.SimulateRequest;
                toAmino(message: _287.SimulateRequest): _287.SimulateRequestAmino;
                fromAminoMsg(object: _287.SimulateRequestAminoMsg): _287.SimulateRequest;
                toAminoMsg(message: _287.SimulateRequest): _287.SimulateRequestAminoMsg;
                fromProtoMsg(message: _287.SimulateRequestProtoMsg): _287.SimulateRequest;
                toProto(message: _287.SimulateRequest): Uint8Array;
                toProtoMsg(message: _287.SimulateRequest): _287.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _287.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.SimulateResponse;
                fromJSON(object: any): _287.SimulateResponse;
                toJSON(message: _287.SimulateResponse): unknown;
                fromPartial(object: Partial<_287.SimulateResponse>): _287.SimulateResponse;
                fromAmino(object: _287.SimulateResponseAmino): _287.SimulateResponse;
                toAmino(message: _287.SimulateResponse): _287.SimulateResponseAmino;
                fromAminoMsg(object: _287.SimulateResponseAminoMsg): _287.SimulateResponse;
                toAminoMsg(message: _287.SimulateResponse): _287.SimulateResponseAminoMsg;
                fromProtoMsg(message: _287.SimulateResponseProtoMsg): _287.SimulateResponse;
                toProto(message: _287.SimulateResponse): Uint8Array;
                toProtoMsg(message: _287.SimulateResponse): _287.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _287.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetTxRequest;
                fromJSON(object: any): _287.GetTxRequest;
                toJSON(message: _287.GetTxRequest): unknown;
                fromPartial(object: Partial<_287.GetTxRequest>): _287.GetTxRequest;
                fromAmino(object: _287.GetTxRequestAmino): _287.GetTxRequest;
                toAmino(message: _287.GetTxRequest): _287.GetTxRequestAmino;
                fromAminoMsg(object: _287.GetTxRequestAminoMsg): _287.GetTxRequest;
                toAminoMsg(message: _287.GetTxRequest): _287.GetTxRequestAminoMsg;
                fromProtoMsg(message: _287.GetTxRequestProtoMsg): _287.GetTxRequest;
                toProto(message: _287.GetTxRequest): Uint8Array;
                toProtoMsg(message: _287.GetTxRequest): _287.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _287.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetTxResponse;
                fromJSON(object: any): _287.GetTxResponse;
                toJSON(message: _287.GetTxResponse): unknown;
                fromPartial(object: Partial<_287.GetTxResponse>): _287.GetTxResponse;
                fromAmino(object: _287.GetTxResponseAmino): _287.GetTxResponse;
                toAmino(message: _287.GetTxResponse): _287.GetTxResponseAmino;
                fromAminoMsg(object: _287.GetTxResponseAminoMsg): _287.GetTxResponse;
                toAminoMsg(message: _287.GetTxResponse): _287.GetTxResponseAminoMsg;
                fromProtoMsg(message: _287.GetTxResponseProtoMsg): _287.GetTxResponse;
                toProto(message: _287.GetTxResponse): Uint8Array;
                toProtoMsg(message: _287.GetTxResponse): _287.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _287.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetBlockWithTxsRequest;
                fromJSON(object: any): _287.GetBlockWithTxsRequest;
                toJSON(message: _287.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_287.GetBlockWithTxsRequest>): _287.GetBlockWithTxsRequest;
                fromAmino(object: _287.GetBlockWithTxsRequestAmino): _287.GetBlockWithTxsRequest;
                toAmino(message: _287.GetBlockWithTxsRequest): _287.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _287.GetBlockWithTxsRequestAminoMsg): _287.GetBlockWithTxsRequest;
                toAminoMsg(message: _287.GetBlockWithTxsRequest): _287.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _287.GetBlockWithTxsRequestProtoMsg): _287.GetBlockWithTxsRequest;
                toProto(message: _287.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _287.GetBlockWithTxsRequest): _287.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _287.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _287.GetBlockWithTxsResponse;
                fromJSON(object: any): _287.GetBlockWithTxsResponse;
                toJSON(message: _287.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_287.GetBlockWithTxsResponse>): _287.GetBlockWithTxsResponse;
                fromAmino(object: _287.GetBlockWithTxsResponseAmino): _287.GetBlockWithTxsResponse;
                toAmino(message: _287.GetBlockWithTxsResponse): _287.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _287.GetBlockWithTxsResponseAminoMsg): _287.GetBlockWithTxsResponse;
                toAminoMsg(message: _287.GetBlockWithTxsResponse): _287.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _287.GetBlockWithTxsResponseProtoMsg): _287.GetBlockWithTxsResponse;
                toProto(message: _287.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _287.GetBlockWithTxsResponse): _287.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _477.MsgClientImpl;
            QueryClientImpl: typeof _464.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _289.QueryCurrentPlanRequest): Promise<_289.QueryCurrentPlanResponse>;
                appliedPlan(request: _289.QueryAppliedPlanRequest): Promise<_289.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _289.QueryUpgradedConsensusStateRequest): Promise<_289.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _289.QueryModuleVersionsRequest): Promise<_289.QueryModuleVersionsResponse>;
                authority(request?: _289.QueryAuthorityRequest): Promise<_289.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _290.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _290.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _290.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _290.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _290.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _290.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _290.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _290.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _290.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _290.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _290.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _290.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _290.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _290.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _290.MsgSoftwareUpgrade) => _290.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _290.MsgSoftwareUpgradeAmino) => _290.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _290.MsgCancelUpgrade) => _290.MsgCancelUpgradeAmino;
                    fromAmino: (object: _290.MsgCancelUpgradeAmino) => _290.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _291.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.Plan;
                fromJSON(object: any): _291.Plan;
                toJSON(message: _291.Plan): unknown;
                fromPartial(object: Partial<_291.Plan>): _291.Plan;
                fromAmino(object: _291.PlanAmino): _291.Plan;
                toAmino(message: _291.Plan): _291.PlanAmino;
                fromAminoMsg(object: _291.PlanAminoMsg): _291.Plan;
                toAminoMsg(message: _291.Plan): _291.PlanAminoMsg;
                fromProtoMsg(message: _291.PlanProtoMsg): _291.Plan;
                toProto(message: _291.Plan): Uint8Array;
                toProtoMsg(message: _291.Plan): _291.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _291.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.SoftwareUpgradeProposal;
                fromJSON(object: any): _291.SoftwareUpgradeProposal;
                toJSON(message: _291.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_291.SoftwareUpgradeProposal>): _291.SoftwareUpgradeProposal;
                fromAmino(object: _291.SoftwareUpgradeProposalAmino): _291.SoftwareUpgradeProposal;
                toAmino(message: _291.SoftwareUpgradeProposal): _291.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _291.SoftwareUpgradeProposalAminoMsg): _291.SoftwareUpgradeProposal;
                toAminoMsg(message: _291.SoftwareUpgradeProposal): _291.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _291.SoftwareUpgradeProposalProtoMsg): _291.SoftwareUpgradeProposal;
                toProto(message: _291.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _291.SoftwareUpgradeProposal): _291.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _291.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _291.CancelSoftwareUpgradeProposal;
                toJSON(message: _291.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_291.CancelSoftwareUpgradeProposal>): _291.CancelSoftwareUpgradeProposal;
                fromAmino(object: _291.CancelSoftwareUpgradeProposalAmino): _291.CancelSoftwareUpgradeProposal;
                toAmino(message: _291.CancelSoftwareUpgradeProposal): _291.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _291.CancelSoftwareUpgradeProposalAminoMsg): _291.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _291.CancelSoftwareUpgradeProposal): _291.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _291.CancelSoftwareUpgradeProposalProtoMsg): _291.CancelSoftwareUpgradeProposal;
                toProto(message: _291.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _291.CancelSoftwareUpgradeProposal): _291.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _291.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _291.ModuleVersion;
                fromJSON(object: any): _291.ModuleVersion;
                toJSON(message: _291.ModuleVersion): unknown;
                fromPartial(object: Partial<_291.ModuleVersion>): _291.ModuleVersion;
                fromAmino(object: _291.ModuleVersionAmino): _291.ModuleVersion;
                toAmino(message: _291.ModuleVersion): _291.ModuleVersionAmino;
                fromAminoMsg(object: _291.ModuleVersionAminoMsg): _291.ModuleVersion;
                toAminoMsg(message: _291.ModuleVersion): _291.ModuleVersionAminoMsg;
                fromProtoMsg(message: _291.ModuleVersionProtoMsg): _291.ModuleVersion;
                toProto(message: _291.ModuleVersion): Uint8Array;
                toProtoMsg(message: _291.ModuleVersion): _291.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _290.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSoftwareUpgrade;
                fromJSON(object: any): _290.MsgSoftwareUpgrade;
                toJSON(message: _290.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_290.MsgSoftwareUpgrade>): _290.MsgSoftwareUpgrade;
                fromAmino(object: _290.MsgSoftwareUpgradeAmino): _290.MsgSoftwareUpgrade;
                toAmino(message: _290.MsgSoftwareUpgrade): _290.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _290.MsgSoftwareUpgradeAminoMsg): _290.MsgSoftwareUpgrade;
                toAminoMsg(message: _290.MsgSoftwareUpgrade): _290.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _290.MsgSoftwareUpgradeProtoMsg): _290.MsgSoftwareUpgrade;
                toProto(message: _290.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _290.MsgSoftwareUpgrade): _290.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _290.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _290.MsgSoftwareUpgradeResponse;
                toJSON(_: _290.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_290.MsgSoftwareUpgradeResponse>): _290.MsgSoftwareUpgradeResponse;
                fromAmino(_: _290.MsgSoftwareUpgradeResponseAmino): _290.MsgSoftwareUpgradeResponse;
                toAmino(_: _290.MsgSoftwareUpgradeResponse): _290.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _290.MsgSoftwareUpgradeResponseAminoMsg): _290.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _290.MsgSoftwareUpgradeResponse): _290.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _290.MsgSoftwareUpgradeResponseProtoMsg): _290.MsgSoftwareUpgradeResponse;
                toProto(message: _290.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _290.MsgSoftwareUpgradeResponse): _290.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _290.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgCancelUpgrade;
                fromJSON(object: any): _290.MsgCancelUpgrade;
                toJSON(message: _290.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_290.MsgCancelUpgrade>): _290.MsgCancelUpgrade;
                fromAmino(object: _290.MsgCancelUpgradeAmino): _290.MsgCancelUpgrade;
                toAmino(message: _290.MsgCancelUpgrade): _290.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _290.MsgCancelUpgradeAminoMsg): _290.MsgCancelUpgrade;
                toAminoMsg(message: _290.MsgCancelUpgrade): _290.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _290.MsgCancelUpgradeProtoMsg): _290.MsgCancelUpgrade;
                toProto(message: _290.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _290.MsgCancelUpgrade): _290.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _290.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _290.MsgCancelUpgradeResponse;
                fromJSON(_: any): _290.MsgCancelUpgradeResponse;
                toJSON(_: _290.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_290.MsgCancelUpgradeResponse>): _290.MsgCancelUpgradeResponse;
                fromAmino(_: _290.MsgCancelUpgradeResponseAmino): _290.MsgCancelUpgradeResponse;
                toAmino(_: _290.MsgCancelUpgradeResponse): _290.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _290.MsgCancelUpgradeResponseAminoMsg): _290.MsgCancelUpgradeResponse;
                toAminoMsg(message: _290.MsgCancelUpgradeResponse): _290.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _290.MsgCancelUpgradeResponseProtoMsg): _290.MsgCancelUpgradeResponse;
                toProto(message: _290.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _290.MsgCancelUpgradeResponse): _290.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _289.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryCurrentPlanRequest;
                fromJSON(_: any): _289.QueryCurrentPlanRequest;
                toJSON(_: _289.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_289.QueryCurrentPlanRequest>): _289.QueryCurrentPlanRequest;
                fromAmino(_: _289.QueryCurrentPlanRequestAmino): _289.QueryCurrentPlanRequest;
                toAmino(_: _289.QueryCurrentPlanRequest): _289.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _289.QueryCurrentPlanRequestAminoMsg): _289.QueryCurrentPlanRequest;
                toAminoMsg(message: _289.QueryCurrentPlanRequest): _289.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _289.QueryCurrentPlanRequestProtoMsg): _289.QueryCurrentPlanRequest;
                toProto(message: _289.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _289.QueryCurrentPlanRequest): _289.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _289.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryCurrentPlanResponse;
                fromJSON(object: any): _289.QueryCurrentPlanResponse;
                toJSON(message: _289.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_289.QueryCurrentPlanResponse>): _289.QueryCurrentPlanResponse;
                fromAmino(object: _289.QueryCurrentPlanResponseAmino): _289.QueryCurrentPlanResponse;
                toAmino(message: _289.QueryCurrentPlanResponse): _289.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _289.QueryCurrentPlanResponseAminoMsg): _289.QueryCurrentPlanResponse;
                toAminoMsg(message: _289.QueryCurrentPlanResponse): _289.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _289.QueryCurrentPlanResponseProtoMsg): _289.QueryCurrentPlanResponse;
                toProto(message: _289.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _289.QueryCurrentPlanResponse): _289.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _289.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAppliedPlanRequest;
                fromJSON(object: any): _289.QueryAppliedPlanRequest;
                toJSON(message: _289.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_289.QueryAppliedPlanRequest>): _289.QueryAppliedPlanRequest;
                fromAmino(object: _289.QueryAppliedPlanRequestAmino): _289.QueryAppliedPlanRequest;
                toAmino(message: _289.QueryAppliedPlanRequest): _289.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _289.QueryAppliedPlanRequestAminoMsg): _289.QueryAppliedPlanRequest;
                toAminoMsg(message: _289.QueryAppliedPlanRequest): _289.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _289.QueryAppliedPlanRequestProtoMsg): _289.QueryAppliedPlanRequest;
                toProto(message: _289.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _289.QueryAppliedPlanRequest): _289.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _289.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAppliedPlanResponse;
                fromJSON(object: any): _289.QueryAppliedPlanResponse;
                toJSON(message: _289.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_289.QueryAppliedPlanResponse>): _289.QueryAppliedPlanResponse;
                fromAmino(object: _289.QueryAppliedPlanResponseAmino): _289.QueryAppliedPlanResponse;
                toAmino(message: _289.QueryAppliedPlanResponse): _289.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _289.QueryAppliedPlanResponseAminoMsg): _289.QueryAppliedPlanResponse;
                toAminoMsg(message: _289.QueryAppliedPlanResponse): _289.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _289.QueryAppliedPlanResponseProtoMsg): _289.QueryAppliedPlanResponse;
                toProto(message: _289.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _289.QueryAppliedPlanResponse): _289.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _289.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _289.QueryUpgradedConsensusStateRequest;
                toJSON(message: _289.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_289.QueryUpgradedConsensusStateRequest>): _289.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _289.QueryUpgradedConsensusStateRequestAmino): _289.QueryUpgradedConsensusStateRequest;
                toAmino(message: _289.QueryUpgradedConsensusStateRequest): _289.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _289.QueryUpgradedConsensusStateRequestAminoMsg): _289.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _289.QueryUpgradedConsensusStateRequest): _289.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _289.QueryUpgradedConsensusStateRequestProtoMsg): _289.QueryUpgradedConsensusStateRequest;
                toProto(message: _289.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _289.QueryUpgradedConsensusStateRequest): _289.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _289.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _289.QueryUpgradedConsensusStateResponse;
                toJSON(message: _289.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_289.QueryUpgradedConsensusStateResponse>): _289.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _289.QueryUpgradedConsensusStateResponseAmino): _289.QueryUpgradedConsensusStateResponse;
                toAmino(message: _289.QueryUpgradedConsensusStateResponse): _289.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _289.QueryUpgradedConsensusStateResponseAminoMsg): _289.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _289.QueryUpgradedConsensusStateResponse): _289.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _289.QueryUpgradedConsensusStateResponseProtoMsg): _289.QueryUpgradedConsensusStateResponse;
                toProto(message: _289.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _289.QueryUpgradedConsensusStateResponse): _289.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _289.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryModuleVersionsRequest;
                fromJSON(object: any): _289.QueryModuleVersionsRequest;
                toJSON(message: _289.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_289.QueryModuleVersionsRequest>): _289.QueryModuleVersionsRequest;
                fromAmino(object: _289.QueryModuleVersionsRequestAmino): _289.QueryModuleVersionsRequest;
                toAmino(message: _289.QueryModuleVersionsRequest): _289.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _289.QueryModuleVersionsRequestAminoMsg): _289.QueryModuleVersionsRequest;
                toAminoMsg(message: _289.QueryModuleVersionsRequest): _289.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _289.QueryModuleVersionsRequestProtoMsg): _289.QueryModuleVersionsRequest;
                toProto(message: _289.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _289.QueryModuleVersionsRequest): _289.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _289.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryModuleVersionsResponse;
                fromJSON(object: any): _289.QueryModuleVersionsResponse;
                toJSON(message: _289.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_289.QueryModuleVersionsResponse>): _289.QueryModuleVersionsResponse;
                fromAmino(object: _289.QueryModuleVersionsResponseAmino): _289.QueryModuleVersionsResponse;
                toAmino(message: _289.QueryModuleVersionsResponse): _289.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _289.QueryModuleVersionsResponseAminoMsg): _289.QueryModuleVersionsResponse;
                toAminoMsg(message: _289.QueryModuleVersionsResponse): _289.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _289.QueryModuleVersionsResponseProtoMsg): _289.QueryModuleVersionsResponse;
                toProto(message: _289.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _289.QueryModuleVersionsResponse): _289.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _289.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAuthorityRequest;
                fromJSON(_: any): _289.QueryAuthorityRequest;
                toJSON(_: _289.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_289.QueryAuthorityRequest>): _289.QueryAuthorityRequest;
                fromAmino(_: _289.QueryAuthorityRequestAmino): _289.QueryAuthorityRequest;
                toAmino(_: _289.QueryAuthorityRequest): _289.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _289.QueryAuthorityRequestAminoMsg): _289.QueryAuthorityRequest;
                toAminoMsg(message: _289.QueryAuthorityRequest): _289.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _289.QueryAuthorityRequestProtoMsg): _289.QueryAuthorityRequest;
                toProto(message: _289.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _289.QueryAuthorityRequest): _289.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _289.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _289.QueryAuthorityResponse;
                fromJSON(object: any): _289.QueryAuthorityResponse;
                toJSON(message: _289.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_289.QueryAuthorityResponse>): _289.QueryAuthorityResponse;
                fromAmino(object: _289.QueryAuthorityResponseAmino): _289.QueryAuthorityResponse;
                toAmino(message: _289.QueryAuthorityResponse): _289.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _289.QueryAuthorityResponseAminoMsg): _289.QueryAuthorityResponse;
                toAminoMsg(message: _289.QueryAuthorityResponse): _289.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _289.QueryAuthorityResponseProtoMsg): _289.QueryAuthorityResponse;
                toProto(message: _289.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _289.QueryAuthorityResponse): _289.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _478.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _292.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _292.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _292.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _292.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _292.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _292.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _292.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _292.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _292.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _292.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _292.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _292.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _292.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _292.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _292.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _292.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _292.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _292.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _292.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _292.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _292.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _292.MsgCreateVestingAccount) => _292.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _292.MsgCreateVestingAccountAmino) => _292.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _292.MsgCreatePermanentLockedAccount) => _292.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _292.MsgCreatePermanentLockedAccountAmino) => _292.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _292.MsgCreatePeriodicVestingAccount) => _292.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _292.MsgCreatePeriodicVestingAccountAmino) => _292.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _293.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.BaseVestingAccount;
                fromJSON(object: any): _293.BaseVestingAccount;
                toJSON(message: _293.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_293.BaseVestingAccount>): _293.BaseVestingAccount;
                fromAmino(object: _293.BaseVestingAccountAmino): _293.BaseVestingAccount;
                toAmino(message: _293.BaseVestingAccount): _293.BaseVestingAccountAmino;
                fromAminoMsg(object: _293.BaseVestingAccountAminoMsg): _293.BaseVestingAccount;
                toAminoMsg(message: _293.BaseVestingAccount): _293.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _293.BaseVestingAccountProtoMsg): _293.BaseVestingAccount;
                toProto(message: _293.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _293.BaseVestingAccount): _293.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _293.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.ContinuousVestingAccount;
                fromJSON(object: any): _293.ContinuousVestingAccount;
                toJSON(message: _293.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_293.ContinuousVestingAccount>): _293.ContinuousVestingAccount;
                fromAmino(object: _293.ContinuousVestingAccountAmino): _293.ContinuousVestingAccount;
                toAmino(message: _293.ContinuousVestingAccount): _293.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _293.ContinuousVestingAccountAminoMsg): _293.ContinuousVestingAccount;
                toAminoMsg(message: _293.ContinuousVestingAccount): _293.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _293.ContinuousVestingAccountProtoMsg): _293.ContinuousVestingAccount;
                toProto(message: _293.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _293.ContinuousVestingAccount): _293.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _293.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.DelayedVestingAccount;
                fromJSON(object: any): _293.DelayedVestingAccount;
                toJSON(message: _293.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_293.DelayedVestingAccount>): _293.DelayedVestingAccount;
                fromAmino(object: _293.DelayedVestingAccountAmino): _293.DelayedVestingAccount;
                toAmino(message: _293.DelayedVestingAccount): _293.DelayedVestingAccountAmino;
                fromAminoMsg(object: _293.DelayedVestingAccountAminoMsg): _293.DelayedVestingAccount;
                toAminoMsg(message: _293.DelayedVestingAccount): _293.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _293.DelayedVestingAccountProtoMsg): _293.DelayedVestingAccount;
                toProto(message: _293.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _293.DelayedVestingAccount): _293.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _293.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.Period;
                fromJSON(object: any): _293.Period;
                toJSON(message: _293.Period): unknown;
                fromPartial(object: Partial<_293.Period>): _293.Period;
                fromAmino(object: _293.PeriodAmino): _293.Period;
                toAmino(message: _293.Period): _293.PeriodAmino;
                fromAminoMsg(object: _293.PeriodAminoMsg): _293.Period;
                toAminoMsg(message: _293.Period): _293.PeriodAminoMsg;
                fromProtoMsg(message: _293.PeriodProtoMsg): _293.Period;
                toProto(message: _293.Period): Uint8Array;
                toProtoMsg(message: _293.Period): _293.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _293.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.PeriodicVestingAccount;
                fromJSON(object: any): _293.PeriodicVestingAccount;
                toJSON(message: _293.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_293.PeriodicVestingAccount>): _293.PeriodicVestingAccount;
                fromAmino(object: _293.PeriodicVestingAccountAmino): _293.PeriodicVestingAccount;
                toAmino(message: _293.PeriodicVestingAccount): _293.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _293.PeriodicVestingAccountAminoMsg): _293.PeriodicVestingAccount;
                toAminoMsg(message: _293.PeriodicVestingAccount): _293.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _293.PeriodicVestingAccountProtoMsg): _293.PeriodicVestingAccount;
                toProto(message: _293.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _293.PeriodicVestingAccount): _293.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _293.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _293.PermanentLockedAccount;
                fromJSON(object: any): _293.PermanentLockedAccount;
                toJSON(message: _293.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_293.PermanentLockedAccount>): _293.PermanentLockedAccount;
                fromAmino(object: _293.PermanentLockedAccountAmino): _293.PermanentLockedAccount;
                toAmino(message: _293.PermanentLockedAccount): _293.PermanentLockedAccountAmino;
                fromAminoMsg(object: _293.PermanentLockedAccountAminoMsg): _293.PermanentLockedAccount;
                toAminoMsg(message: _293.PermanentLockedAccount): _293.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _293.PermanentLockedAccountProtoMsg): _293.PermanentLockedAccount;
                toProto(message: _293.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _293.PermanentLockedAccount): _293.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _292.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreateVestingAccount;
                fromJSON(object: any): _292.MsgCreateVestingAccount;
                toJSON(message: _292.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_292.MsgCreateVestingAccount>): _292.MsgCreateVestingAccount;
                fromAmino(object: _292.MsgCreateVestingAccountAmino): _292.MsgCreateVestingAccount;
                toAmino(message: _292.MsgCreateVestingAccount): _292.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _292.MsgCreateVestingAccountAminoMsg): _292.MsgCreateVestingAccount;
                toAminoMsg(message: _292.MsgCreateVestingAccount): _292.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _292.MsgCreateVestingAccountProtoMsg): _292.MsgCreateVestingAccount;
                toProto(message: _292.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _292.MsgCreateVestingAccount): _292.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _292.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _292.MsgCreateVestingAccountResponse;
                toJSON(_: _292.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_292.MsgCreateVestingAccountResponse>): _292.MsgCreateVestingAccountResponse;
                fromAmino(_: _292.MsgCreateVestingAccountResponseAmino): _292.MsgCreateVestingAccountResponse;
                toAmino(_: _292.MsgCreateVestingAccountResponse): _292.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _292.MsgCreateVestingAccountResponseAminoMsg): _292.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _292.MsgCreateVestingAccountResponse): _292.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _292.MsgCreateVestingAccountResponseProtoMsg): _292.MsgCreateVestingAccountResponse;
                toProto(message: _292.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _292.MsgCreateVestingAccountResponse): _292.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _292.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _292.MsgCreatePermanentLockedAccount;
                toJSON(message: _292.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_292.MsgCreatePermanentLockedAccount>): _292.MsgCreatePermanentLockedAccount;
                fromAmino(object: _292.MsgCreatePermanentLockedAccountAmino): _292.MsgCreatePermanentLockedAccount;
                toAmino(message: _292.MsgCreatePermanentLockedAccount): _292.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _292.MsgCreatePermanentLockedAccountAminoMsg): _292.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _292.MsgCreatePermanentLockedAccount): _292.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _292.MsgCreatePermanentLockedAccountProtoMsg): _292.MsgCreatePermanentLockedAccount;
                toProto(message: _292.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _292.MsgCreatePermanentLockedAccount): _292.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _292.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _292.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _292.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_292.MsgCreatePermanentLockedAccountResponse>): _292.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _292.MsgCreatePermanentLockedAccountResponseAmino): _292.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _292.MsgCreatePermanentLockedAccountResponse): _292.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _292.MsgCreatePermanentLockedAccountResponseAminoMsg): _292.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _292.MsgCreatePermanentLockedAccountResponse): _292.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _292.MsgCreatePermanentLockedAccountResponseProtoMsg): _292.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _292.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _292.MsgCreatePermanentLockedAccountResponse): _292.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _292.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _292.MsgCreatePeriodicVestingAccount;
                toJSON(message: _292.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_292.MsgCreatePeriodicVestingAccount>): _292.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _292.MsgCreatePeriodicVestingAccountAmino): _292.MsgCreatePeriodicVestingAccount;
                toAmino(message: _292.MsgCreatePeriodicVestingAccount): _292.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _292.MsgCreatePeriodicVestingAccountAminoMsg): _292.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _292.MsgCreatePeriodicVestingAccount): _292.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _292.MsgCreatePeriodicVestingAccountProtoMsg): _292.MsgCreatePeriodicVestingAccount;
                toProto(message: _292.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _292.MsgCreatePeriodicVestingAccount): _292.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _292.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _292.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _292.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _292.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_292.MsgCreatePeriodicVestingAccountResponse>): _292.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _292.MsgCreatePeriodicVestingAccountResponseAmino): _292.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _292.MsgCreatePeriodicVestingAccountResponse): _292.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _292.MsgCreatePeriodicVestingAccountResponseAminoMsg): _292.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _292.MsgCreatePeriodicVestingAccountResponse): _292.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _292.MsgCreatePeriodicVestingAccountResponseProtoMsg): _292.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _292.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _292.MsgCreatePeriodicVestingAccountResponse): _292.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _465.MsgClientImpl;
                };
                bank: {
                    v1beta1: _466.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _467.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _468.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _469.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _470.MsgClientImpl;
                };
                gov: {
                    v1: _471.MsgClientImpl;
                    v1beta1: _472.MsgClientImpl;
                };
                group: {
                    v1: _473.MsgClientImpl;
                };
                nft: {
                    v1beta1: _474.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _475.MsgClientImpl;
                };
                staking: {
                    v1beta1: _476.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _477.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _478.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _204.QueryConfigRequest): Promise<_204.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _207.QueryAccountsRequest): Promise<_207.QueryAccountsResponse>;
                        account(request: _207.QueryAccountRequest): Promise<_207.QueryAccountResponse>;
                        params(request?: _207.QueryParamsRequest): Promise<_207.QueryParamsResponse>;
                        moduleAccounts(request?: _207.QueryModuleAccountsRequest): Promise<_207.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _207.Bech32PrefixRequest): Promise<_207.Bech32PrefixResponse>;
                        addressBytesToString(request: _207.AddressBytesToStringRequest): Promise<_207.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _207.AddressStringToBytesRequest): Promise<_207.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _211.QueryGrantsRequest): Promise<_211.QueryGrantsResponse>;
                        granterGrants(request: _211.QueryGranterGrantsRequest): Promise<_211.QueryGranterGrantsResponse>;
                        granteeGrants(request: _211.QueryGranteeGrantsRequest): Promise<_211.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _216.QueryBalanceRequest): Promise<_216.QueryBalanceResponse>;
                        allBalances(request: _216.QueryAllBalancesRequest): Promise<_216.QueryAllBalancesResponse>;
                        spendableBalances(request: _216.QuerySpendableBalancesRequest): Promise<_216.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _216.QueryTotalSupplyRequest): Promise<_216.QueryTotalSupplyResponse>;
                        supplyOf(request: _216.QuerySupplyOfRequest): Promise<_216.QuerySupplyOfResponse>;
                        params(request?: _216.QueryParamsRequest): Promise<_216.QueryParamsResponse>;
                        denomMetadata(request: _216.QueryDenomMetadataRequest): Promise<_216.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _216.QueryDenomsMetadataRequest): Promise<_216.QueryDenomsMetadataResponse>;
                        denomOwners(request: _216.QueryDenomOwnersRequest): Promise<_216.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _226.GetNodeInfoRequest): Promise<_226.GetNodeInfoResponse>;
                            getSyncing(request?: _226.GetSyncingRequest): Promise<_226.GetSyncingResponse>;
                            getLatestBlock(request?: _226.GetLatestBlockRequest): Promise<_226.GetLatestBlockResponse>;
                            getBlockByHeight(request: _226.GetBlockByHeightRequest): Promise<_226.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _226.GetLatestValidatorSetRequest): Promise<_226.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _226.GetValidatorSetByHeightRequest): Promise<_226.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _240.QueryValidatorOutstandingRewardsRequest): Promise<_240.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _240.QueryValidatorCommissionRequest): Promise<_240.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _240.QueryValidatorSlashesRequest): Promise<_240.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _240.QueryDelegationRewardsRequest): Promise<_240.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _240.QueryDelegationTotalRewardsRequest): Promise<_240.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _240.QueryDelegatorValidatorsRequest): Promise<_240.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _240.QueryDelegatorWithdrawAddressRequest): Promise<_240.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _240.QueryCommunityPoolRequest): Promise<_240.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _244.QueryEvidenceRequest): Promise<_244.QueryEvidenceResponse>;
                        allEvidence(request?: _244.QueryAllEvidenceRequest): Promise<_244.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _248.QueryAllowanceRequest): Promise<_248.QueryAllowanceResponse>;
                        allowances(request: _248.QueryAllowancesRequest): Promise<_248.QueryAllowancesResponse>;
                        allowancesByGranter(request: _248.QueryAllowancesByGranterRequest): Promise<_248.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _253.QueryProposalRequest): Promise<_253.QueryProposalResponse>;
                        proposals(request: _253.QueryProposalsRequest): Promise<_253.QueryProposalsResponse>;
                        vote(request: _253.QueryVoteRequest): Promise<_253.QueryVoteResponse>;
                        votes(request: _253.QueryVotesRequest): Promise<_253.QueryVotesResponse>;
                        params(request: _253.QueryParamsRequest): Promise<_253.QueryParamsResponse>;
                        deposit(request: _253.QueryDepositRequest): Promise<_253.QueryDepositResponse>;
                        deposits(request: _253.QueryDepositsRequest): Promise<_253.QueryDepositsResponse>;
                        tallyResult(request: _253.QueryTallyResultRequest): Promise<_253.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _257.QueryProposalRequest): Promise<_257.QueryProposalResponse>;
                        proposals(request: _257.QueryProposalsRequest): Promise<_257.QueryProposalsResponse>;
                        vote(request: _257.QueryVoteRequest): Promise<_257.QueryVoteResponse>;
                        votes(request: _257.QueryVotesRequest): Promise<_257.QueryVotesResponse>;
                        params(request: _257.QueryParamsRequest): Promise<_257.QueryParamsResponse>;
                        deposit(request: _257.QueryDepositRequest): Promise<_257.QueryDepositResponse>;
                        deposits(request: _257.QueryDepositsRequest): Promise<_257.QueryDepositsResponse>;
                        tallyResult(request: _257.QueryTallyResultRequest): Promise<_257.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _261.QueryGroupInfoRequest): Promise<_261.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _261.QueryGroupPolicyInfoRequest): Promise<_261.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _261.QueryGroupMembersRequest): Promise<_261.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _261.QueryGroupsByAdminRequest): Promise<_261.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _261.QueryGroupPoliciesByGroupRequest): Promise<_261.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _261.QueryGroupPoliciesByAdminRequest): Promise<_261.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _261.QueryProposalRequest): Promise<_261.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _261.QueryProposalsByGroupPolicyRequest): Promise<_261.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _261.QueryVoteByProposalVoterRequest): Promise<_261.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _261.QueryVotesByProposalRequest): Promise<_261.QueryVotesByProposalResponse>;
                        votesByVoter(request: _261.QueryVotesByVoterRequest): Promise<_261.QueryVotesByVoterResponse>;
                        groupsByMember(request: _261.QueryGroupsByMemberRequest): Promise<_261.QueryGroupsByMemberResponse>;
                        tallyResult(request: _261.QueryTallyResultRequest): Promise<_261.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _266.QueryParamsRequest): Promise<_266.QueryParamsResponse>;
                        inflation(request?: _266.QueryInflationRequest): Promise<_266.QueryInflationResponse>;
                        annualProvisions(request?: _266.QueryAnnualProvisionsRequest): Promise<_266.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _271.QueryBalanceRequest): Promise<_271.QueryBalanceResponse>;
                        owner(request: _271.QueryOwnerRequest): Promise<_271.QueryOwnerResponse>;
                        supply(request: _271.QuerySupplyRequest): Promise<_271.QuerySupplyResponse>;
                        nFTs(request: _271.QueryNFTsRequest): Promise<_271.QueryNFTsResponse>;
                        nFT(request: _271.QueryNFTRequest): Promise<_271.QueryNFTResponse>;
                        class(request: _271.QueryClassRequest): Promise<_271.QueryClassResponse>;
                        classes(request?: _271.QueryClassesRequest): Promise<_271.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _276.QueryParamsRequest): Promise<_276.QueryParamsResponse>;
                        subspaces(request?: _276.QuerySubspacesRequest): Promise<_276.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _278.QueryParamsRequest): Promise<_278.QueryParamsResponse>;
                        signingInfo(request: _278.QuerySigningInfoRequest): Promise<_278.QuerySigningInfoResponse>;
                        signingInfos(request?: _278.QuerySigningInfosRequest): Promise<_278.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _283.QueryValidatorsRequest): Promise<_283.QueryValidatorsResponse>;
                        validator(request: _283.QueryValidatorRequest): Promise<_283.QueryValidatorResponse>;
                        validatorDelegations(request: _283.QueryValidatorDelegationsRequest): Promise<_283.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _283.QueryValidatorUnbondingDelegationsRequest): Promise<_283.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _283.QueryDelegationRequest): Promise<_283.QueryDelegationResponse>;
                        unbondingDelegation(request: _283.QueryUnbondingDelegationRequest): Promise<_283.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _283.QueryDelegatorDelegationsRequest): Promise<_283.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _283.QueryDelegatorUnbondingDelegationsRequest): Promise<_283.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _283.QueryRedelegationsRequest): Promise<_283.QueryRedelegationsResponse>;
                        delegatorValidators(request: _283.QueryDelegatorValidatorsRequest): Promise<_283.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _283.QueryDelegatorValidatorRequest): Promise<_283.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _283.QueryHistoricalInfoRequest): Promise<_283.QueryHistoricalInfoResponse>;
                        pool(request?: _283.QueryPoolRequest): Promise<_283.QueryPoolResponse>;
                        params(request?: _283.QueryParamsRequest): Promise<_283.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _287.SimulateRequest): Promise<_287.SimulateResponse>;
                        getTx(request: _287.GetTxRequest): Promise<_287.GetTxResponse>;
                        broadcastTx(request: _287.BroadcastTxRequest): Promise<_287.BroadcastTxResponse>;
                        getTxsEvent(request: _287.GetTxsEventRequest): Promise<_287.GetTxsEventResponse>;
                        getBlockWithTxs(request: _287.GetBlockWithTxsRequest): Promise<_287.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _289.QueryCurrentPlanRequest): Promise<_289.QueryCurrentPlanResponse>;
                        appliedPlan(request: _289.QueryAppliedPlanRequest): Promise<_289.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _289.QueryUpgradedConsensusStateRequest): Promise<_289.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _289.QueryModuleVersionsRequest): Promise<_289.QueryModuleVersionsResponse>;
                        authority(request?: _289.QueryAuthorityRequest): Promise<_289.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
