import * as _185 from "./app/v1alpha1/config";
import * as _186 from "./app/v1alpha1/module";
import * as _187 from "./app/v1alpha1/query";
import * as _188 from "./auth/v1beta1/auth";
import * as _189 from "./auth/v1beta1/genesis";
import * as _190 from "./auth/v1beta1/query";
import * as _191 from "./authz/v1beta1/authz";
import * as _192 from "./authz/v1beta1/event";
import * as _193 from "./authz/v1beta1/genesis";
import * as _194 from "./authz/v1beta1/query";
import * as _195 from "./authz/v1beta1/tx";
import * as _196 from "./bank/v1beta1/authz";
import * as _197 from "./bank/v1beta1/bank";
import * as _198 from "./bank/v1beta1/genesis";
import * as _199 from "./bank/v1beta1/query";
import * as _200 from "./bank/v1beta1/tx";
import * as _201 from "./base/abci/v1beta1/abci";
import * as _202 from "./base/kv/v1beta1/kv";
import * as _203 from "./base/query/v1beta1/pagination";
import * as _204 from "./base/reflection/v1beta1/reflection";
import * as _205 from "./base/reflection/v2alpha1/reflection";
import * as _206 from "./base/snapshots/v1beta1/snapshot";
import * as _207 from "./base/store/v1beta1/commit_info";
import * as _208 from "./base/store/v1beta1/listening";
import * as _209 from "./base/tendermint/v1beta1/query";
import * as _210 from "./base/v1beta1/coin";
import * as _211 from "./capability/v1beta1/capability";
import * as _212 from "./capability/v1beta1/genesis";
import * as _213 from "./crisis/v1beta1/genesis";
import * as _214 from "./crisis/v1beta1/tx";
import * as _215 from "./crypto/ed25519/keys";
import * as _216 from "./crypto/hd/v1/hd";
import * as _217 from "./crypto/keyring/v1/record";
import * as _218 from "./crypto/multisig/keys";
import * as _219 from "./crypto/secp256k1/keys";
import * as _220 from "./crypto/secp256r1/keys";
import * as _221 from "./distribution/v1beta1/distribution";
import * as _222 from "./distribution/v1beta1/genesis";
import * as _223 from "./distribution/v1beta1/query";
import * as _224 from "./distribution/v1beta1/tx";
import * as _225 from "./evidence/v1beta1/evidence";
import * as _226 from "./evidence/v1beta1/genesis";
import * as _227 from "./evidence/v1beta1/query";
import * as _228 from "./evidence/v1beta1/tx";
import * as _229 from "./feegrant/v1beta1/feegrant";
import * as _230 from "./feegrant/v1beta1/genesis";
import * as _231 from "./feegrant/v1beta1/query";
import * as _232 from "./feegrant/v1beta1/tx";
import * as _233 from "./genutil/v1beta1/genesis";
import * as _234 from "./gov/v1/genesis";
import * as _235 from "./gov/v1/gov";
import * as _236 from "./gov/v1/query";
import * as _237 from "./gov/v1/tx";
import * as _238 from "./gov/v1beta1/genesis";
import * as _239 from "./gov/v1beta1/gov";
import * as _240 from "./gov/v1beta1/query";
import * as _241 from "./gov/v1beta1/tx";
import * as _242 from "./group/v1/events";
import * as _243 from "./group/v1/genesis";
import * as _244 from "./group/v1/query";
import * as _245 from "./group/v1/tx";
import * as _246 from "./group/v1/types";
import * as _247 from "./mint/v1beta1/genesis";
import * as _248 from "./mint/v1beta1/mint";
import * as _249 from "./mint/v1beta1/query";
import * as _251 from "./nft/v1beta1/event";
import * as _252 from "./nft/v1beta1/genesis";
import * as _253 from "./nft/v1beta1/nft";
import * as _254 from "./nft/v1beta1/query";
import * as _255 from "./nft/v1beta1/tx";
import * as _256 from "./orm/v1/orm";
import * as _257 from "./orm/v1alpha1/schema";
import * as _258 from "./params/v1beta1/params";
import * as _259 from "./params/v1beta1/query";
import * as _260 from "./slashing/v1beta1/genesis";
import * as _261 from "./slashing/v1beta1/query";
import * as _262 from "./slashing/v1beta1/slashing";
import * as _263 from "./slashing/v1beta1/tx";
import * as _264 from "./staking/v1beta1/authz";
import * as _265 from "./staking/v1beta1/genesis";
import * as _266 from "./staking/v1beta1/query";
import * as _267 from "./staking/v1beta1/staking";
import * as _268 from "./staking/v1beta1/tx";
import * as _269 from "./tx/signing/v1beta1/signing";
import * as _270 from "./tx/v1beta1/service";
import * as _271 from "./tx/v1beta1/tx";
import * as _272 from "./upgrade/v1beta1/query";
import * as _273 from "./upgrade/v1beta1/tx";
import * as _274 from "./upgrade/v1beta1/upgrade";
import * as _275 from "./vesting/v1beta1/tx";
import * as _276 from "./vesting/v1beta1/vesting";
import * as _423 from "./app/v1alpha1/query.rpc.Query";
import * as _424 from "./auth/v1beta1/query.rpc.Query";
import * as _425 from "./authz/v1beta1/query.rpc.Query";
import * as _426 from "./bank/v1beta1/query.rpc.Query";
import * as _427 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _428 from "./distribution/v1beta1/query.rpc.Query";
import * as _429 from "./evidence/v1beta1/query.rpc.Query";
import * as _430 from "./feegrant/v1beta1/query.rpc.Query";
import * as _431 from "./gov/v1/query.rpc.Query";
import * as _432 from "./gov/v1beta1/query.rpc.Query";
import * as _433 from "./group/v1/query.rpc.Query";
import * as _434 from "./mint/v1beta1/query.rpc.Query";
import * as _435 from "./nft/v1beta1/query.rpc.Query";
import * as _436 from "./params/v1beta1/query.rpc.Query";
import * as _437 from "./slashing/v1beta1/query.rpc.Query";
import * as _438 from "./staking/v1beta1/query.rpc.Query";
import * as _439 from "./tx/v1beta1/service.rpc.Service";
import * as _440 from "./upgrade/v1beta1/query.rpc.Query";
import * as _441 from "./authz/v1beta1/tx.rpc.msg";
import * as _442 from "./bank/v1beta1/tx.rpc.msg";
import * as _443 from "./crisis/v1beta1/tx.rpc.msg";
import * as _444 from "./distribution/v1beta1/tx.rpc.msg";
import * as _445 from "./evidence/v1beta1/tx.rpc.msg";
import * as _446 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _447 from "./gov/v1/tx.rpc.msg";
import * as _448 from "./gov/v1beta1/tx.rpc.msg";
import * as _449 from "./group/v1/tx.rpc.msg";
import * as _450 from "./nft/v1beta1/tx.rpc.msg";
import * as _451 from "./slashing/v1beta1/tx.rpc.msg";
import * as _452 from "./staking/v1beta1/tx.rpc.msg";
import * as _453 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _454 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _423.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _187.QueryConfigRequest): Promise<_187.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _187.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConfigRequest;
                fromJSON(_: any): _187.QueryConfigRequest;
                toJSON(_: _187.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_187.QueryConfigRequest>): _187.QueryConfigRequest;
                fromAmino(_: _187.QueryConfigRequestAmino): _187.QueryConfigRequest;
                toAmino(_: _187.QueryConfigRequest): _187.QueryConfigRequestAmino;
                fromAminoMsg(object: _187.QueryConfigRequestAminoMsg): _187.QueryConfigRequest;
                toAminoMsg(message: _187.QueryConfigRequest): _187.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _187.QueryConfigRequestProtoMsg): _187.QueryConfigRequest;
                toProto(message: _187.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _187.QueryConfigRequest): _187.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _187.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.QueryConfigResponse;
                fromJSON(object: any): _187.QueryConfigResponse;
                toJSON(message: _187.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_187.QueryConfigResponse>): _187.QueryConfigResponse;
                fromAmino(object: _187.QueryConfigResponseAmino): _187.QueryConfigResponse;
                toAmino(message: _187.QueryConfigResponse): _187.QueryConfigResponseAmino;
                fromAminoMsg(object: _187.QueryConfigResponseAminoMsg): _187.QueryConfigResponse;
                toAminoMsg(message: _187.QueryConfigResponse): _187.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _187.QueryConfigResponseProtoMsg): _187.QueryConfigResponse;
                toProto(message: _187.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _187.QueryConfigResponse): _187.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _186.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.ModuleDescriptor;
                fromJSON(object: any): _186.ModuleDescriptor;
                toJSON(message: _186.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_186.ModuleDescriptor>): _186.ModuleDescriptor;
                fromAmino(object: _186.ModuleDescriptorAmino): _186.ModuleDescriptor;
                toAmino(message: _186.ModuleDescriptor): _186.ModuleDescriptorAmino;
                fromAminoMsg(object: _186.ModuleDescriptorAminoMsg): _186.ModuleDescriptor;
                toAminoMsg(message: _186.ModuleDescriptor): _186.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _186.ModuleDescriptorProtoMsg): _186.ModuleDescriptor;
                toProto(message: _186.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _186.ModuleDescriptor): _186.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _186.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.PackageReference;
                fromJSON(object: any): _186.PackageReference;
                toJSON(message: _186.PackageReference): unknown;
                fromPartial(object: Partial<_186.PackageReference>): _186.PackageReference;
                fromAmino(object: _186.PackageReferenceAmino): _186.PackageReference;
                toAmino(message: _186.PackageReference): _186.PackageReferenceAmino;
                fromAminoMsg(object: _186.PackageReferenceAminoMsg): _186.PackageReference;
                toAminoMsg(message: _186.PackageReference): _186.PackageReferenceAminoMsg;
                fromProtoMsg(message: _186.PackageReferenceProtoMsg): _186.PackageReference;
                toProto(message: _186.PackageReference): Uint8Array;
                toProtoMsg(message: _186.PackageReference): _186.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _186.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.MigrateFromInfo;
                fromJSON(object: any): _186.MigrateFromInfo;
                toJSON(message: _186.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_186.MigrateFromInfo>): _186.MigrateFromInfo;
                fromAmino(object: _186.MigrateFromInfoAmino): _186.MigrateFromInfo;
                toAmino(message: _186.MigrateFromInfo): _186.MigrateFromInfoAmino;
                fromAminoMsg(object: _186.MigrateFromInfoAminoMsg): _186.MigrateFromInfo;
                toAminoMsg(message: _186.MigrateFromInfo): _186.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _186.MigrateFromInfoProtoMsg): _186.MigrateFromInfo;
                toProto(message: _186.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _186.MigrateFromInfo): _186.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _185.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Config;
                fromJSON(object: any): _185.Config;
                toJSON(message: _185.Config): unknown;
                fromPartial(object: Partial<_185.Config>): _185.Config;
                fromAmino(object: _185.ConfigAmino): _185.Config;
                toAmino(message: _185.Config): _185.ConfigAmino;
                fromAminoMsg(object: _185.ConfigAminoMsg): _185.Config;
                toAminoMsg(message: _185.Config): _185.ConfigAminoMsg;
                fromProtoMsg(message: _185.ConfigProtoMsg): _185.Config;
                toProto(message: _185.Config): Uint8Array;
                toProtoMsg(message: _185.Config): _185.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _185.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.ModuleConfig;
                fromJSON(object: any): _185.ModuleConfig;
                toJSON(message: _185.ModuleConfig): unknown;
                fromPartial(object: Partial<_185.ModuleConfig>): _185.ModuleConfig;
                fromAmino(object: _185.ModuleConfigAmino): _185.ModuleConfig;
                toAmino(message: _185.ModuleConfig): _185.ModuleConfigAmino;
                fromAminoMsg(object: _185.ModuleConfigAminoMsg): _185.ModuleConfig;
                toAminoMsg(message: _185.ModuleConfig): _185.ModuleConfigAminoMsg;
                fromProtoMsg(message: _185.ModuleConfigProtoMsg): _185.ModuleConfig;
                toProto(message: _185.ModuleConfig): Uint8Array;
                toProtoMsg(message: _185.ModuleConfig): _185.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _424.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _190.QueryAccountsRequest): Promise<_190.QueryAccountsResponse>;
                account(request: _190.QueryAccountRequest): Promise<_190.QueryAccountResponse>;
                params(request?: _190.QueryParamsRequest): Promise<_190.QueryParamsResponse>;
                moduleAccounts(request?: _190.QueryModuleAccountsRequest): Promise<_190.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _190.Bech32PrefixRequest): Promise<_190.Bech32PrefixResponse>;
                addressBytesToString(request: _190.AddressBytesToStringRequest): Promise<_190.AddressBytesToStringResponse>;
                addressStringToBytes(request: _190.AddressStringToBytesRequest): Promise<_190.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _190.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAccountsRequest;
                fromJSON(object: any): _190.QueryAccountsRequest;
                toJSON(message: _190.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_190.QueryAccountsRequest>): _190.QueryAccountsRequest;
                fromAmino(object: _190.QueryAccountsRequestAmino): _190.QueryAccountsRequest;
                toAmino(message: _190.QueryAccountsRequest): _190.QueryAccountsRequestAmino;
                fromAminoMsg(object: _190.QueryAccountsRequestAminoMsg): _190.QueryAccountsRequest;
                toAminoMsg(message: _190.QueryAccountsRequest): _190.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _190.QueryAccountsRequestProtoMsg): _190.QueryAccountsRequest;
                toProto(message: _190.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _190.QueryAccountsRequest): _190.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _190.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAccountsResponse;
                fromJSON(object: any): _190.QueryAccountsResponse;
                toJSON(message: _190.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_190.QueryAccountsResponse>): _190.QueryAccountsResponse;
                fromAmino(object: _190.QueryAccountsResponseAmino): _190.QueryAccountsResponse;
                toAmino(message: _190.QueryAccountsResponse): _190.QueryAccountsResponseAmino;
                fromAminoMsg(object: _190.QueryAccountsResponseAminoMsg): _190.QueryAccountsResponse;
                toAminoMsg(message: _190.QueryAccountsResponse): _190.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _190.QueryAccountsResponseProtoMsg): _190.QueryAccountsResponse;
                toProto(message: _190.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _190.QueryAccountsResponse): _190.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _190.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAccountRequest;
                fromJSON(object: any): _190.QueryAccountRequest;
                toJSON(message: _190.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_190.QueryAccountRequest>): _190.QueryAccountRequest;
                fromAmino(object: _190.QueryAccountRequestAmino): _190.QueryAccountRequest;
                toAmino(message: _190.QueryAccountRequest): _190.QueryAccountRequestAmino;
                fromAminoMsg(object: _190.QueryAccountRequestAminoMsg): _190.QueryAccountRequest;
                toAminoMsg(message: _190.QueryAccountRequest): _190.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _190.QueryAccountRequestProtoMsg): _190.QueryAccountRequest;
                toProto(message: _190.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _190.QueryAccountRequest): _190.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _190.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryModuleAccountsRequest;
                fromJSON(_: any): _190.QueryModuleAccountsRequest;
                toJSON(_: _190.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_190.QueryModuleAccountsRequest>): _190.QueryModuleAccountsRequest;
                fromAmino(_: _190.QueryModuleAccountsRequestAmino): _190.QueryModuleAccountsRequest;
                toAmino(_: _190.QueryModuleAccountsRequest): _190.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _190.QueryModuleAccountsRequestAminoMsg): _190.QueryModuleAccountsRequest;
                toAminoMsg(message: _190.QueryModuleAccountsRequest): _190.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _190.QueryModuleAccountsRequestProtoMsg): _190.QueryModuleAccountsRequest;
                toProto(message: _190.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _190.QueryModuleAccountsRequest): _190.QueryModuleAccountsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _190.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryParamsResponse;
                fromJSON(object: any): _190.QueryParamsResponse;
                toJSON(message: _190.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_190.QueryParamsResponse>): _190.QueryParamsResponse;
                fromAmino(object: _190.QueryParamsResponseAmino): _190.QueryParamsResponse;
                toAmino(message: _190.QueryParamsResponse): _190.QueryParamsResponseAmino;
                fromAminoMsg(object: _190.QueryParamsResponseAminoMsg): _190.QueryParamsResponse;
                toAminoMsg(message: _190.QueryParamsResponse): _190.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _190.QueryParamsResponseProtoMsg): _190.QueryParamsResponse;
                toProto(message: _190.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _190.QueryParamsResponse): _190.QueryParamsResponseProtoMsg;
            };
            QueryAccountResponse: {
                encode(message: _190.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryAccountResponse;
                fromJSON(object: any): _190.QueryAccountResponse;
                toJSON(message: _190.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_190.QueryAccountResponse>): _190.QueryAccountResponse;
                fromAmino(object: _190.QueryAccountResponseAmino): _190.QueryAccountResponse;
                toAmino(message: _190.QueryAccountResponse): _190.QueryAccountResponseAmino;
                fromAminoMsg(object: _190.QueryAccountResponseAminoMsg): _190.QueryAccountResponse;
                toAminoMsg(message: _190.QueryAccountResponse): _190.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _190.QueryAccountResponseProtoMsg): _190.QueryAccountResponse;
                toProto(message: _190.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _190.QueryAccountResponse): _190.QueryAccountResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _190.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryParamsRequest;
                fromJSON(_: any): _190.QueryParamsRequest;
                toJSON(_: _190.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_190.QueryParamsRequest>): _190.QueryParamsRequest;
                fromAmino(_: _190.QueryParamsRequestAmino): _190.QueryParamsRequest;
                toAmino(_: _190.QueryParamsRequest): _190.QueryParamsRequestAmino;
                fromAminoMsg(object: _190.QueryParamsRequestAminoMsg): _190.QueryParamsRequest;
                toAminoMsg(message: _190.QueryParamsRequest): _190.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _190.QueryParamsRequestProtoMsg): _190.QueryParamsRequest;
                toProto(message: _190.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _190.QueryParamsRequest): _190.QueryParamsRequestProtoMsg;
            };
            QueryModuleAccountsResponse: {
                encode(message: _190.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.QueryModuleAccountsResponse;
                fromJSON(object: any): _190.QueryModuleAccountsResponse;
                toJSON(message: _190.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_190.QueryModuleAccountsResponse>): _190.QueryModuleAccountsResponse;
                fromAmino(object: _190.QueryModuleAccountsResponseAmino): _190.QueryModuleAccountsResponse;
                toAmino(message: _190.QueryModuleAccountsResponse): _190.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _190.QueryModuleAccountsResponseAminoMsg): _190.QueryModuleAccountsResponse;
                toAminoMsg(message: _190.QueryModuleAccountsResponse): _190.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _190.QueryModuleAccountsResponseProtoMsg): _190.QueryModuleAccountsResponse;
                toProto(message: _190.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _190.QueryModuleAccountsResponse): _190.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _190.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Bech32PrefixRequest;
                fromJSON(_: any): _190.Bech32PrefixRequest;
                toJSON(_: _190.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_190.Bech32PrefixRequest>): _190.Bech32PrefixRequest;
                fromAmino(_: _190.Bech32PrefixRequestAmino): _190.Bech32PrefixRequest;
                toAmino(_: _190.Bech32PrefixRequest): _190.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _190.Bech32PrefixRequestAminoMsg): _190.Bech32PrefixRequest;
                toAminoMsg(message: _190.Bech32PrefixRequest): _190.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _190.Bech32PrefixRequestProtoMsg): _190.Bech32PrefixRequest;
                toProto(message: _190.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _190.Bech32PrefixRequest): _190.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _190.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Bech32PrefixResponse;
                fromJSON(object: any): _190.Bech32PrefixResponse;
                toJSON(message: _190.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_190.Bech32PrefixResponse>): _190.Bech32PrefixResponse;
                fromAmino(object: _190.Bech32PrefixResponseAmino): _190.Bech32PrefixResponse;
                toAmino(message: _190.Bech32PrefixResponse): _190.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _190.Bech32PrefixResponseAminoMsg): _190.Bech32PrefixResponse;
                toAminoMsg(message: _190.Bech32PrefixResponse): _190.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _190.Bech32PrefixResponseProtoMsg): _190.Bech32PrefixResponse;
                toProto(message: _190.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _190.Bech32PrefixResponse): _190.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _190.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.AddressBytesToStringRequest;
                fromJSON(object: any): _190.AddressBytesToStringRequest;
                toJSON(message: _190.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_190.AddressBytesToStringRequest>): _190.AddressBytesToStringRequest;
                fromAmino(object: _190.AddressBytesToStringRequestAmino): _190.AddressBytesToStringRequest;
                toAmino(message: _190.AddressBytesToStringRequest): _190.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _190.AddressBytesToStringRequestAminoMsg): _190.AddressBytesToStringRequest;
                toAminoMsg(message: _190.AddressBytesToStringRequest): _190.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _190.AddressBytesToStringRequestProtoMsg): _190.AddressBytesToStringRequest;
                toProto(message: _190.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _190.AddressBytesToStringRequest): _190.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _190.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.AddressBytesToStringResponse;
                fromJSON(object: any): _190.AddressBytesToStringResponse;
                toJSON(message: _190.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_190.AddressBytesToStringResponse>): _190.AddressBytesToStringResponse;
                fromAmino(object: _190.AddressBytesToStringResponseAmino): _190.AddressBytesToStringResponse;
                toAmino(message: _190.AddressBytesToStringResponse): _190.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _190.AddressBytesToStringResponseAminoMsg): _190.AddressBytesToStringResponse;
                toAminoMsg(message: _190.AddressBytesToStringResponse): _190.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _190.AddressBytesToStringResponseProtoMsg): _190.AddressBytesToStringResponse;
                toProto(message: _190.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _190.AddressBytesToStringResponse): _190.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _190.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.AddressStringToBytesRequest;
                fromJSON(object: any): _190.AddressStringToBytesRequest;
                toJSON(message: _190.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_190.AddressStringToBytesRequest>): _190.AddressStringToBytesRequest;
                fromAmino(object: _190.AddressStringToBytesRequestAmino): _190.AddressStringToBytesRequest;
                toAmino(message: _190.AddressStringToBytesRequest): _190.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _190.AddressStringToBytesRequestAminoMsg): _190.AddressStringToBytesRequest;
                toAminoMsg(message: _190.AddressStringToBytesRequest): _190.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _190.AddressStringToBytesRequestProtoMsg): _190.AddressStringToBytesRequest;
                toProto(message: _190.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _190.AddressStringToBytesRequest): _190.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _190.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.AddressStringToBytesResponse;
                fromJSON(object: any): _190.AddressStringToBytesResponse;
                toJSON(message: _190.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_190.AddressStringToBytesResponse>): _190.AddressStringToBytesResponse;
                fromAmino(object: _190.AddressStringToBytesResponseAmino): _190.AddressStringToBytesResponse;
                toAmino(message: _190.AddressStringToBytesResponse): _190.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _190.AddressStringToBytesResponseAminoMsg): _190.AddressStringToBytesResponse;
                toAminoMsg(message: _190.AddressStringToBytesResponse): _190.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _190.AddressStringToBytesResponseProtoMsg): _190.AddressStringToBytesResponse;
                toProto(message: _190.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _190.AddressStringToBytesResponse): _190.AddressStringToBytesResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _189.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.GenesisState;
                fromJSON(object: any): _189.GenesisState;
                toJSON(message: _189.GenesisState): unknown;
                fromPartial(object: Partial<_189.GenesisState>): _189.GenesisState;
                fromAmino(object: _189.GenesisStateAmino): _189.GenesisState;
                toAmino(message: _189.GenesisState): _189.GenesisStateAmino;
                fromAminoMsg(object: _189.GenesisStateAminoMsg): _189.GenesisState;
                toAminoMsg(message: _189.GenesisState): _189.GenesisStateAminoMsg;
                fromProtoMsg(message: _189.GenesisStateProtoMsg): _189.GenesisState;
                toProto(message: _189.GenesisState): Uint8Array;
                toProtoMsg(message: _189.GenesisState): _189.GenesisStateProtoMsg;
            };
            BaseAccount: {
                encode(message: _188.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.BaseAccount;
                fromJSON(object: any): _188.BaseAccount;
                toJSON(message: _188.BaseAccount): unknown;
                fromPartial(object: Partial<_188.BaseAccount>): _188.BaseAccount;
                fromAmino(object: _188.BaseAccountAmino): _188.BaseAccount;
                toAmino(message: _188.BaseAccount): _188.BaseAccountAmino;
                fromAminoMsg(object: _188.BaseAccountAminoMsg): _188.BaseAccount;
                toAminoMsg(message: _188.BaseAccount): _188.BaseAccountAminoMsg;
                fromProtoMsg(message: _188.BaseAccountProtoMsg): _188.BaseAccount;
                toProto(message: _188.BaseAccount): Uint8Array;
                toProtoMsg(message: _188.BaseAccount): _188.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _188.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.ModuleAccount;
                fromJSON(object: any): _188.ModuleAccount;
                toJSON(message: _188.ModuleAccount): unknown;
                fromPartial(object: Partial<_188.ModuleAccount>): _188.ModuleAccount;
                fromAmino(object: _188.ModuleAccountAmino): _188.ModuleAccount;
                toAmino(message: _188.ModuleAccount): _188.ModuleAccountAmino;
                fromAminoMsg(object: _188.ModuleAccountAminoMsg): _188.ModuleAccount;
                toAminoMsg(message: _188.ModuleAccount): _188.ModuleAccountAminoMsg;
                fromProtoMsg(message: _188.ModuleAccountProtoMsg): _188.ModuleAccount;
                toProto(message: _188.ModuleAccount): Uint8Array;
                toProtoMsg(message: _188.ModuleAccount): _188.ModuleAccountProtoMsg;
            };
            Params: {
                encode(message: _188.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.Params;
                fromJSON(object: any): _188.Params;
                toJSON(message: _188.Params): unknown;
                fromPartial(object: Partial<_188.Params>): _188.Params;
                fromAmino(object: _188.ParamsAmino): _188.Params;
                toAmino(message: _188.Params): _188.ParamsAmino;
                fromAminoMsg(object: _188.ParamsAminoMsg): _188.Params;
                toAminoMsg(message: _188.Params): _188.ParamsAminoMsg;
                fromProtoMsg(message: _188.ParamsProtoMsg): _188.Params;
                toProto(message: _188.Params): Uint8Array;
                toProtoMsg(message: _188.Params): _188.ParamsProtoMsg;
            };
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _441.MsgClientImpl;
            QueryClientImpl: typeof _425.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _194.QueryGrantsRequest): Promise<_194.QueryGrantsResponse>;
                granterGrants(request: _194.QueryGranterGrantsRequest): Promise<_194.QueryGranterGrantsResponse>;
                granteeGrants(request: _194.QueryGranteeGrantsRequest): Promise<_194.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _195.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _195.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _195.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _195.MsgGrant): {
                        typeUrl: string;
                        value: _195.MsgGrant;
                    };
                    exec(value: _195.MsgExec): {
                        typeUrl: string;
                        value: _195.MsgExec;
                    };
                    revoke(value: _195.MsgRevoke): {
                        typeUrl: string;
                        value: _195.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _195.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _195.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _195.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _195.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _195.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _195.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _195.MsgGrant): {
                        typeUrl: string;
                        value: _195.MsgGrant;
                    };
                    exec(value: _195.MsgExec): {
                        typeUrl: string;
                        value: _195.MsgExec;
                    };
                    revoke(value: _195.MsgRevoke): {
                        typeUrl: string;
                        value: _195.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _195.MsgGrant) => _195.MsgGrantAmino;
                    fromAmino: (object: _195.MsgGrantAmino) => _195.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _195.MsgExec) => _195.MsgExecAmino;
                    fromAmino: (object: _195.MsgExecAmino) => _195.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _195.MsgRevoke) => _195.MsgRevokeAmino;
                    fromAmino: (object: _195.MsgRevokeAmino) => _195.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _195.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgGrant;
                fromJSON(object: any): _195.MsgGrant;
                toJSON(message: _195.MsgGrant): unknown;
                fromPartial(object: Partial<_195.MsgGrant>): _195.MsgGrant;
                fromAmino(object: _195.MsgGrantAmino): _195.MsgGrant;
                toAmino(message: _195.MsgGrant): _195.MsgGrantAmino;
                fromAminoMsg(object: _195.MsgGrantAminoMsg): _195.MsgGrant;
                toAminoMsg(message: _195.MsgGrant): _195.MsgGrantAminoMsg;
                fromProtoMsg(message: _195.MsgGrantProtoMsg): _195.MsgGrant;
                toProto(message: _195.MsgGrant): Uint8Array;
                toProtoMsg(message: _195.MsgGrant): _195.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _195.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgExecResponse;
                fromJSON(object: any): _195.MsgExecResponse;
                toJSON(message: _195.MsgExecResponse): unknown;
                fromPartial(object: Partial<_195.MsgExecResponse>): _195.MsgExecResponse;
                fromAmino(object: _195.MsgExecResponseAmino): _195.MsgExecResponse;
                toAmino(message: _195.MsgExecResponse): _195.MsgExecResponseAmino;
                fromAminoMsg(object: _195.MsgExecResponseAminoMsg): _195.MsgExecResponse;
                toAminoMsg(message: _195.MsgExecResponse): _195.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _195.MsgExecResponseProtoMsg): _195.MsgExecResponse;
                toProto(message: _195.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _195.MsgExecResponse): _195.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _195.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgExec;
                fromJSON(object: any): _195.MsgExec;
                toJSON(message: _195.MsgExec): unknown;
                fromPartial(object: Partial<_195.MsgExec>): _195.MsgExec;
                fromAmino(object: _195.MsgExecAmino): _195.MsgExec;
                toAmino(message: _195.MsgExec): _195.MsgExecAmino;
                fromAminoMsg(object: _195.MsgExecAminoMsg): _195.MsgExec;
                toAminoMsg(message: _195.MsgExec): _195.MsgExecAminoMsg;
                fromProtoMsg(message: _195.MsgExecProtoMsg): _195.MsgExec;
                toProto(message: _195.MsgExec): Uint8Array;
                toProtoMsg(message: _195.MsgExec): _195.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _195.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgGrantResponse;
                fromJSON(_: any): _195.MsgGrantResponse;
                toJSON(_: _195.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_195.MsgGrantResponse>): _195.MsgGrantResponse;
                fromAmino(_: _195.MsgGrantResponseAmino): _195.MsgGrantResponse;
                toAmino(_: _195.MsgGrantResponse): _195.MsgGrantResponseAmino;
                fromAminoMsg(object: _195.MsgGrantResponseAminoMsg): _195.MsgGrantResponse;
                toAminoMsg(message: _195.MsgGrantResponse): _195.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _195.MsgGrantResponseProtoMsg): _195.MsgGrantResponse;
                toProto(message: _195.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _195.MsgGrantResponse): _195.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _195.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgRevoke;
                fromJSON(object: any): _195.MsgRevoke;
                toJSON(message: _195.MsgRevoke): unknown;
                fromPartial(object: Partial<_195.MsgRevoke>): _195.MsgRevoke;
                fromAmino(object: _195.MsgRevokeAmino): _195.MsgRevoke;
                toAmino(message: _195.MsgRevoke): _195.MsgRevokeAmino;
                fromAminoMsg(object: _195.MsgRevokeAminoMsg): _195.MsgRevoke;
                toAminoMsg(message: _195.MsgRevoke): _195.MsgRevokeAminoMsg;
                fromProtoMsg(message: _195.MsgRevokeProtoMsg): _195.MsgRevoke;
                toProto(message: _195.MsgRevoke): Uint8Array;
                toProtoMsg(message: _195.MsgRevoke): _195.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _195.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MsgRevokeResponse;
                fromJSON(_: any): _195.MsgRevokeResponse;
                toJSON(_: _195.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_195.MsgRevokeResponse>): _195.MsgRevokeResponse;
                fromAmino(_: _195.MsgRevokeResponseAmino): _195.MsgRevokeResponse;
                toAmino(_: _195.MsgRevokeResponse): _195.MsgRevokeResponseAmino;
                fromAminoMsg(object: _195.MsgRevokeResponseAminoMsg): _195.MsgRevokeResponse;
                toAminoMsg(message: _195.MsgRevokeResponse): _195.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _195.MsgRevokeResponseProtoMsg): _195.MsgRevokeResponse;
                toProto(message: _195.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _195.MsgRevokeResponse): _195.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                encode(message: _194.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGrantsRequest;
                fromJSON(object: any): _194.QueryGrantsRequest;
                toJSON(message: _194.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_194.QueryGrantsRequest>): _194.QueryGrantsRequest;
                fromAmino(object: _194.QueryGrantsRequestAmino): _194.QueryGrantsRequest;
                toAmino(message: _194.QueryGrantsRequest): _194.QueryGrantsRequestAmino;
                fromAminoMsg(object: _194.QueryGrantsRequestAminoMsg): _194.QueryGrantsRequest;
                toAminoMsg(message: _194.QueryGrantsRequest): _194.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _194.QueryGrantsRequestProtoMsg): _194.QueryGrantsRequest;
                toProto(message: _194.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _194.QueryGrantsRequest): _194.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _194.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGrantsResponse;
                fromJSON(object: any): _194.QueryGrantsResponse;
                toJSON(message: _194.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_194.QueryGrantsResponse>): _194.QueryGrantsResponse;
                fromAmino(object: _194.QueryGrantsResponseAmino): _194.QueryGrantsResponse;
                toAmino(message: _194.QueryGrantsResponse): _194.QueryGrantsResponseAmino;
                fromAminoMsg(object: _194.QueryGrantsResponseAminoMsg): _194.QueryGrantsResponse;
                toAminoMsg(message: _194.QueryGrantsResponse): _194.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _194.QueryGrantsResponseProtoMsg): _194.QueryGrantsResponse;
                toProto(message: _194.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _194.QueryGrantsResponse): _194.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _194.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGranterGrantsRequest;
                fromJSON(object: any): _194.QueryGranterGrantsRequest;
                toJSON(message: _194.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_194.QueryGranterGrantsRequest>): _194.QueryGranterGrantsRequest;
                fromAmino(object: _194.QueryGranterGrantsRequestAmino): _194.QueryGranterGrantsRequest;
                toAmino(message: _194.QueryGranterGrantsRequest): _194.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _194.QueryGranterGrantsRequestAminoMsg): _194.QueryGranterGrantsRequest;
                toAminoMsg(message: _194.QueryGranterGrantsRequest): _194.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _194.QueryGranterGrantsRequestProtoMsg): _194.QueryGranterGrantsRequest;
                toProto(message: _194.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _194.QueryGranterGrantsRequest): _194.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _194.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGranterGrantsResponse;
                fromJSON(object: any): _194.QueryGranterGrantsResponse;
                toJSON(message: _194.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_194.QueryGranterGrantsResponse>): _194.QueryGranterGrantsResponse;
                fromAmino(object: _194.QueryGranterGrantsResponseAmino): _194.QueryGranterGrantsResponse;
                toAmino(message: _194.QueryGranterGrantsResponse): _194.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _194.QueryGranterGrantsResponseAminoMsg): _194.QueryGranterGrantsResponse;
                toAminoMsg(message: _194.QueryGranterGrantsResponse): _194.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _194.QueryGranterGrantsResponseProtoMsg): _194.QueryGranterGrantsResponse;
                toProto(message: _194.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _194.QueryGranterGrantsResponse): _194.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _194.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGranteeGrantsRequest;
                fromJSON(object: any): _194.QueryGranteeGrantsRequest;
                toJSON(message: _194.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_194.QueryGranteeGrantsRequest>): _194.QueryGranteeGrantsRequest;
                fromAmino(object: _194.QueryGranteeGrantsRequestAmino): _194.QueryGranteeGrantsRequest;
                toAmino(message: _194.QueryGranteeGrantsRequest): _194.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _194.QueryGranteeGrantsRequestAminoMsg): _194.QueryGranteeGrantsRequest;
                toAminoMsg(message: _194.QueryGranteeGrantsRequest): _194.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _194.QueryGranteeGrantsRequestProtoMsg): _194.QueryGranteeGrantsRequest;
                toProto(message: _194.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _194.QueryGranteeGrantsRequest): _194.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _194.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.QueryGranteeGrantsResponse;
                fromJSON(object: any): _194.QueryGranteeGrantsResponse;
                toJSON(message: _194.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_194.QueryGranteeGrantsResponse>): _194.QueryGranteeGrantsResponse;
                fromAmino(object: _194.QueryGranteeGrantsResponseAmino): _194.QueryGranteeGrantsResponse;
                toAmino(message: _194.QueryGranteeGrantsResponse): _194.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _194.QueryGranteeGrantsResponseAminoMsg): _194.QueryGranteeGrantsResponse;
                toAminoMsg(message: _194.QueryGranteeGrantsResponse): _194.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _194.QueryGranteeGrantsResponseProtoMsg): _194.QueryGranteeGrantsResponse;
                toProto(message: _194.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _194.QueryGranteeGrantsResponse): _194.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _193.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.GenesisState;
                fromJSON(object: any): _193.GenesisState;
                toJSON(message: _193.GenesisState): unknown;
                fromPartial(object: Partial<_193.GenesisState>): _193.GenesisState;
                fromAmino(object: _193.GenesisStateAmino): _193.GenesisState;
                toAmino(message: _193.GenesisState): _193.GenesisStateAmino;
                fromAminoMsg(object: _193.GenesisStateAminoMsg): _193.GenesisState;
                toAminoMsg(message: _193.GenesisState): _193.GenesisStateAminoMsg;
                fromProtoMsg(message: _193.GenesisStateProtoMsg): _193.GenesisState;
                toProto(message: _193.GenesisState): Uint8Array;
                toProtoMsg(message: _193.GenesisState): _193.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _192.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.EventGrant;
                fromJSON(object: any): _192.EventGrant;
                toJSON(message: _192.EventGrant): unknown;
                fromPartial(object: Partial<_192.EventGrant>): _192.EventGrant;
                fromAmino(object: _192.EventGrantAmino): _192.EventGrant;
                toAmino(message: _192.EventGrant): _192.EventGrantAmino;
                fromAminoMsg(object: _192.EventGrantAminoMsg): _192.EventGrant;
                toAminoMsg(message: _192.EventGrant): _192.EventGrantAminoMsg;
                fromProtoMsg(message: _192.EventGrantProtoMsg): _192.EventGrant;
                toProto(message: _192.EventGrant): Uint8Array;
                toProtoMsg(message: _192.EventGrant): _192.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _192.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.EventRevoke;
                fromJSON(object: any): _192.EventRevoke;
                toJSON(message: _192.EventRevoke): unknown;
                fromPartial(object: Partial<_192.EventRevoke>): _192.EventRevoke;
                fromAmino(object: _192.EventRevokeAmino): _192.EventRevoke;
                toAmino(message: _192.EventRevoke): _192.EventRevokeAmino;
                fromAminoMsg(object: _192.EventRevokeAminoMsg): _192.EventRevoke;
                toAminoMsg(message: _192.EventRevoke): _192.EventRevokeAminoMsg;
                fromProtoMsg(message: _192.EventRevokeProtoMsg): _192.EventRevoke;
                toProto(message: _192.EventRevoke): Uint8Array;
                toProtoMsg(message: _192.EventRevoke): _192.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _191.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GenericAuthorization;
                fromJSON(object: any): _191.GenericAuthorization;
                toJSON(message: _191.GenericAuthorization): unknown;
                fromPartial(object: Partial<_191.GenericAuthorization>): _191.GenericAuthorization;
                fromAmino(object: _191.GenericAuthorizationAmino): _191.GenericAuthorization;
                toAmino(message: _191.GenericAuthorization): _191.GenericAuthorizationAmino;
                fromAminoMsg(object: _191.GenericAuthorizationAminoMsg): _191.GenericAuthorization;
                toAminoMsg(message: _191.GenericAuthorization): _191.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _191.GenericAuthorizationProtoMsg): _191.GenericAuthorization;
                toProto(message: _191.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _191.GenericAuthorization): _191.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _191.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Grant;
                fromJSON(object: any): _191.Grant;
                toJSON(message: _191.Grant): unknown;
                fromPartial(object: Partial<_191.Grant>): _191.Grant;
                fromAmino(object: _191.GrantAmino): _191.Grant;
                toAmino(message: _191.Grant): _191.GrantAmino;
                fromAminoMsg(object: _191.GrantAminoMsg): _191.Grant;
                toAminoMsg(message: _191.Grant): _191.GrantAminoMsg;
                fromProtoMsg(message: _191.GrantProtoMsg): _191.Grant;
                toProto(message: _191.Grant): Uint8Array;
                toProtoMsg(message: _191.Grant): _191.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _191.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GrantAuthorization;
                fromJSON(object: any): _191.GrantAuthorization;
                toJSON(message: _191.GrantAuthorization): unknown;
                fromPartial(object: Partial<_191.GrantAuthorization>): _191.GrantAuthorization;
                fromAmino(object: _191.GrantAuthorizationAmino): _191.GrantAuthorization;
                toAmino(message: _191.GrantAuthorization): _191.GrantAuthorizationAmino;
                fromAminoMsg(object: _191.GrantAuthorizationAminoMsg): _191.GrantAuthorization;
                toAminoMsg(message: _191.GrantAuthorization): _191.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _191.GrantAuthorizationProtoMsg): _191.GrantAuthorization;
                toProto(message: _191.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _191.GrantAuthorization): _191.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _191.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.GrantQueueItem;
                fromJSON(object: any): _191.GrantQueueItem;
                toJSON(message: _191.GrantQueueItem): unknown;
                fromPartial(object: Partial<_191.GrantQueueItem>): _191.GrantQueueItem;
                fromAmino(object: _191.GrantQueueItemAmino): _191.GrantQueueItem;
                toAmino(message: _191.GrantQueueItem): _191.GrantQueueItemAmino;
                fromAminoMsg(object: _191.GrantQueueItemAminoMsg): _191.GrantQueueItem;
                toAminoMsg(message: _191.GrantQueueItem): _191.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _191.GrantQueueItemProtoMsg): _191.GrantQueueItem;
                toProto(message: _191.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _191.GrantQueueItem): _191.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _442.MsgClientImpl;
            QueryClientImpl: typeof _426.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _199.QueryBalanceRequest): Promise<_199.QueryBalanceResponse>;
                allBalances(request: _199.QueryAllBalancesRequest): Promise<_199.QueryAllBalancesResponse>;
                spendableBalances(request: _199.QuerySpendableBalancesRequest): Promise<_199.QuerySpendableBalancesResponse>;
                totalSupply(request?: _199.QueryTotalSupplyRequest): Promise<_199.QueryTotalSupplyResponse>;
                supplyOf(request: _199.QuerySupplyOfRequest): Promise<_199.QuerySupplyOfResponse>;
                params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                denomMetadata(request: _199.QueryDenomMetadataRequest): Promise<_199.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _199.QueryDenomsMetadataRequest): Promise<_199.QueryDenomsMetadataResponse>;
                denomOwners(request: _199.QueryDenomOwnersRequest): Promise<_199.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _200.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _200.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _200.MsgSend): {
                        typeUrl: string;
                        value: _200.MsgSend;
                    };
                    multiSend(value: _200.MsgMultiSend): {
                        typeUrl: string;
                        value: _200.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _200.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _200.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _200.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _200.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _200.MsgSend): {
                        typeUrl: string;
                        value: _200.MsgSend;
                    };
                    multiSend(value: _200.MsgMultiSend): {
                        typeUrl: string;
                        value: _200.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _200.MsgSend) => _200.MsgSendAmino;
                    fromAmino: (object: _200.MsgSendAmino) => _200.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _200.MsgMultiSend) => _200.MsgMultiSendAmino;
                    fromAmino: (object: _200.MsgMultiSendAmino) => _200.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _200.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgSend;
                fromJSON(object: any): _200.MsgSend;
                toJSON(message: _200.MsgSend): unknown;
                fromPartial(object: Partial<_200.MsgSend>): _200.MsgSend;
                fromAmino(object: _200.MsgSendAmino): _200.MsgSend;
                toAmino(message: _200.MsgSend): _200.MsgSendAmino;
                fromAminoMsg(object: _200.MsgSendAminoMsg): _200.MsgSend;
                toAminoMsg(message: _200.MsgSend): _200.MsgSendAminoMsg;
                fromProtoMsg(message: _200.MsgSendProtoMsg): _200.MsgSend;
                toProto(message: _200.MsgSend): Uint8Array;
                toProtoMsg(message: _200.MsgSend): _200.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _200.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgSendResponse;
                fromJSON(_: any): _200.MsgSendResponse;
                toJSON(_: _200.MsgSendResponse): unknown;
                fromPartial(_: Partial<_200.MsgSendResponse>): _200.MsgSendResponse;
                fromAmino(_: _200.MsgSendResponseAmino): _200.MsgSendResponse;
                toAmino(_: _200.MsgSendResponse): _200.MsgSendResponseAmino;
                fromAminoMsg(object: _200.MsgSendResponseAminoMsg): _200.MsgSendResponse;
                toAminoMsg(message: _200.MsgSendResponse): _200.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _200.MsgSendResponseProtoMsg): _200.MsgSendResponse;
                toProto(message: _200.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _200.MsgSendResponse): _200.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _200.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgMultiSend;
                fromJSON(object: any): _200.MsgMultiSend;
                toJSON(message: _200.MsgMultiSend): unknown;
                fromPartial(object: Partial<_200.MsgMultiSend>): _200.MsgMultiSend;
                fromAmino(object: _200.MsgMultiSendAmino): _200.MsgMultiSend;
                toAmino(message: _200.MsgMultiSend): _200.MsgMultiSendAmino;
                fromAminoMsg(object: _200.MsgMultiSendAminoMsg): _200.MsgMultiSend;
                toAminoMsg(message: _200.MsgMultiSend): _200.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _200.MsgMultiSendProtoMsg): _200.MsgMultiSend;
                toProto(message: _200.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _200.MsgMultiSend): _200.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _200.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.MsgMultiSendResponse;
                fromJSON(_: any): _200.MsgMultiSendResponse;
                toJSON(_: _200.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_200.MsgMultiSendResponse>): _200.MsgMultiSendResponse;
                fromAmino(_: _200.MsgMultiSendResponseAmino): _200.MsgMultiSendResponse;
                toAmino(_: _200.MsgMultiSendResponse): _200.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _200.MsgMultiSendResponseAminoMsg): _200.MsgMultiSendResponse;
                toAminoMsg(message: _200.MsgMultiSendResponse): _200.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _200.MsgMultiSendResponseProtoMsg): _200.MsgMultiSendResponse;
                toProto(message: _200.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _200.MsgMultiSendResponse): _200.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _199.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryBalanceRequest;
                fromJSON(object: any): _199.QueryBalanceRequest;
                toJSON(message: _199.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_199.QueryBalanceRequest>): _199.QueryBalanceRequest;
                fromAmino(object: _199.QueryBalanceRequestAmino): _199.QueryBalanceRequest;
                toAmino(message: _199.QueryBalanceRequest): _199.QueryBalanceRequestAmino;
                fromAminoMsg(object: _199.QueryBalanceRequestAminoMsg): _199.QueryBalanceRequest;
                toAminoMsg(message: _199.QueryBalanceRequest): _199.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _199.QueryBalanceRequestProtoMsg): _199.QueryBalanceRequest;
                toProto(message: _199.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _199.QueryBalanceRequest): _199.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _199.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryBalanceResponse;
                fromJSON(object: any): _199.QueryBalanceResponse;
                toJSON(message: _199.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_199.QueryBalanceResponse>): _199.QueryBalanceResponse;
                fromAmino(object: _199.QueryBalanceResponseAmino): _199.QueryBalanceResponse;
                toAmino(message: _199.QueryBalanceResponse): _199.QueryBalanceResponseAmino;
                fromAminoMsg(object: _199.QueryBalanceResponseAminoMsg): _199.QueryBalanceResponse;
                toAminoMsg(message: _199.QueryBalanceResponse): _199.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _199.QueryBalanceResponseProtoMsg): _199.QueryBalanceResponse;
                toProto(message: _199.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _199.QueryBalanceResponse): _199.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _199.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAllBalancesRequest;
                fromJSON(object: any): _199.QueryAllBalancesRequest;
                toJSON(message: _199.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_199.QueryAllBalancesRequest>): _199.QueryAllBalancesRequest;
                fromAmino(object: _199.QueryAllBalancesRequestAmino): _199.QueryAllBalancesRequest;
                toAmino(message: _199.QueryAllBalancesRequest): _199.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _199.QueryAllBalancesRequestAminoMsg): _199.QueryAllBalancesRequest;
                toAminoMsg(message: _199.QueryAllBalancesRequest): _199.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _199.QueryAllBalancesRequestProtoMsg): _199.QueryAllBalancesRequest;
                toProto(message: _199.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _199.QueryAllBalancesRequest): _199.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _199.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAllBalancesResponse;
                fromJSON(object: any): _199.QueryAllBalancesResponse;
                toJSON(message: _199.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_199.QueryAllBalancesResponse>): _199.QueryAllBalancesResponse;
                fromAmino(object: _199.QueryAllBalancesResponseAmino): _199.QueryAllBalancesResponse;
                toAmino(message: _199.QueryAllBalancesResponse): _199.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _199.QueryAllBalancesResponseAminoMsg): _199.QueryAllBalancesResponse;
                toAminoMsg(message: _199.QueryAllBalancesResponse): _199.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _199.QueryAllBalancesResponseProtoMsg): _199.QueryAllBalancesResponse;
                toProto(message: _199.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _199.QueryAllBalancesResponse): _199.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _199.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QuerySpendableBalancesRequest;
                fromJSON(object: any): _199.QuerySpendableBalancesRequest;
                toJSON(message: _199.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_199.QuerySpendableBalancesRequest>): _199.QuerySpendableBalancesRequest;
                fromAmino(object: _199.QuerySpendableBalancesRequestAmino): _199.QuerySpendableBalancesRequest;
                toAmino(message: _199.QuerySpendableBalancesRequest): _199.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _199.QuerySpendableBalancesRequestAminoMsg): _199.QuerySpendableBalancesRequest;
                toAminoMsg(message: _199.QuerySpendableBalancesRequest): _199.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _199.QuerySpendableBalancesRequestProtoMsg): _199.QuerySpendableBalancesRequest;
                toProto(message: _199.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _199.QuerySpendableBalancesRequest): _199.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _199.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QuerySpendableBalancesResponse;
                fromJSON(object: any): _199.QuerySpendableBalancesResponse;
                toJSON(message: _199.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_199.QuerySpendableBalancesResponse>): _199.QuerySpendableBalancesResponse;
                fromAmino(object: _199.QuerySpendableBalancesResponseAmino): _199.QuerySpendableBalancesResponse;
                toAmino(message: _199.QuerySpendableBalancesResponse): _199.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _199.QuerySpendableBalancesResponseAminoMsg): _199.QuerySpendableBalancesResponse;
                toAminoMsg(message: _199.QuerySpendableBalancesResponse): _199.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _199.QuerySpendableBalancesResponseProtoMsg): _199.QuerySpendableBalancesResponse;
                toProto(message: _199.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _199.QuerySpendableBalancesResponse): _199.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _199.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryTotalSupplyRequest;
                fromJSON(object: any): _199.QueryTotalSupplyRequest;
                toJSON(message: _199.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_199.QueryTotalSupplyRequest>): _199.QueryTotalSupplyRequest;
                fromAmino(object: _199.QueryTotalSupplyRequestAmino): _199.QueryTotalSupplyRequest;
                toAmino(message: _199.QueryTotalSupplyRequest): _199.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _199.QueryTotalSupplyRequestAminoMsg): _199.QueryTotalSupplyRequest;
                toAminoMsg(message: _199.QueryTotalSupplyRequest): _199.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _199.QueryTotalSupplyRequestProtoMsg): _199.QueryTotalSupplyRequest;
                toProto(message: _199.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _199.QueryTotalSupplyRequest): _199.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _199.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryTotalSupplyResponse;
                fromJSON(object: any): _199.QueryTotalSupplyResponse;
                toJSON(message: _199.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_199.QueryTotalSupplyResponse>): _199.QueryTotalSupplyResponse;
                fromAmino(object: _199.QueryTotalSupplyResponseAmino): _199.QueryTotalSupplyResponse;
                toAmino(message: _199.QueryTotalSupplyResponse): _199.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _199.QueryTotalSupplyResponseAminoMsg): _199.QueryTotalSupplyResponse;
                toAminoMsg(message: _199.QueryTotalSupplyResponse): _199.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _199.QueryTotalSupplyResponseProtoMsg): _199.QueryTotalSupplyResponse;
                toProto(message: _199.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _199.QueryTotalSupplyResponse): _199.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _199.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QuerySupplyOfRequest;
                fromJSON(object: any): _199.QuerySupplyOfRequest;
                toJSON(message: _199.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_199.QuerySupplyOfRequest>): _199.QuerySupplyOfRequest;
                fromAmino(object: _199.QuerySupplyOfRequestAmino): _199.QuerySupplyOfRequest;
                toAmino(message: _199.QuerySupplyOfRequest): _199.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _199.QuerySupplyOfRequestAminoMsg): _199.QuerySupplyOfRequest;
                toAminoMsg(message: _199.QuerySupplyOfRequest): _199.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _199.QuerySupplyOfRequestProtoMsg): _199.QuerySupplyOfRequest;
                toProto(message: _199.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _199.QuerySupplyOfRequest): _199.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _199.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QuerySupplyOfResponse;
                fromJSON(object: any): _199.QuerySupplyOfResponse;
                toJSON(message: _199.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_199.QuerySupplyOfResponse>): _199.QuerySupplyOfResponse;
                fromAmino(object: _199.QuerySupplyOfResponseAmino): _199.QuerySupplyOfResponse;
                toAmino(message: _199.QuerySupplyOfResponse): _199.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _199.QuerySupplyOfResponseAminoMsg): _199.QuerySupplyOfResponse;
                toAminoMsg(message: _199.QuerySupplyOfResponse): _199.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _199.QuerySupplyOfResponseProtoMsg): _199.QuerySupplyOfResponse;
                toProto(message: _199.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _199.QuerySupplyOfResponse): _199.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _199.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsRequest;
                fromJSON(_: any): _199.QueryParamsRequest;
                toJSON(_: _199.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_199.QueryParamsRequest>): _199.QueryParamsRequest;
                fromAmino(_: _199.QueryParamsRequestAmino): _199.QueryParamsRequest;
                toAmino(_: _199.QueryParamsRequest): _199.QueryParamsRequestAmino;
                fromAminoMsg(object: _199.QueryParamsRequestAminoMsg): _199.QueryParamsRequest;
                toAminoMsg(message: _199.QueryParamsRequest): _199.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _199.QueryParamsRequestProtoMsg): _199.QueryParamsRequest;
                toProto(message: _199.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _199.QueryParamsRequest): _199.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _199.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryParamsResponse;
                fromJSON(object: any): _199.QueryParamsResponse;
                toJSON(message: _199.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_199.QueryParamsResponse>): _199.QueryParamsResponse;
                fromAmino(object: _199.QueryParamsResponseAmino): _199.QueryParamsResponse;
                toAmino(message: _199.QueryParamsResponse): _199.QueryParamsResponseAmino;
                fromAminoMsg(object: _199.QueryParamsResponseAminoMsg): _199.QueryParamsResponse;
                toAminoMsg(message: _199.QueryParamsResponse): _199.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _199.QueryParamsResponseProtoMsg): _199.QueryParamsResponse;
                toProto(message: _199.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _199.QueryParamsResponse): _199.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _199.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomsMetadataRequest;
                fromJSON(object: any): _199.QueryDenomsMetadataRequest;
                toJSON(message: _199.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_199.QueryDenomsMetadataRequest>): _199.QueryDenomsMetadataRequest;
                fromAmino(object: _199.QueryDenomsMetadataRequestAmino): _199.QueryDenomsMetadataRequest;
                toAmino(message: _199.QueryDenomsMetadataRequest): _199.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _199.QueryDenomsMetadataRequestAminoMsg): _199.QueryDenomsMetadataRequest;
                toAminoMsg(message: _199.QueryDenomsMetadataRequest): _199.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _199.QueryDenomsMetadataRequestProtoMsg): _199.QueryDenomsMetadataRequest;
                toProto(message: _199.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _199.QueryDenomsMetadataRequest): _199.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _199.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomsMetadataResponse;
                fromJSON(object: any): _199.QueryDenomsMetadataResponse;
                toJSON(message: _199.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_199.QueryDenomsMetadataResponse>): _199.QueryDenomsMetadataResponse;
                fromAmino(object: _199.QueryDenomsMetadataResponseAmino): _199.QueryDenomsMetadataResponse;
                toAmino(message: _199.QueryDenomsMetadataResponse): _199.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _199.QueryDenomsMetadataResponseAminoMsg): _199.QueryDenomsMetadataResponse;
                toAminoMsg(message: _199.QueryDenomsMetadataResponse): _199.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _199.QueryDenomsMetadataResponseProtoMsg): _199.QueryDenomsMetadataResponse;
                toProto(message: _199.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _199.QueryDenomsMetadataResponse): _199.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _199.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomMetadataRequest;
                fromJSON(object: any): _199.QueryDenomMetadataRequest;
                toJSON(message: _199.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_199.QueryDenomMetadataRequest>): _199.QueryDenomMetadataRequest;
                fromAmino(object: _199.QueryDenomMetadataRequestAmino): _199.QueryDenomMetadataRequest;
                toAmino(message: _199.QueryDenomMetadataRequest): _199.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _199.QueryDenomMetadataRequestAminoMsg): _199.QueryDenomMetadataRequest;
                toAminoMsg(message: _199.QueryDenomMetadataRequest): _199.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _199.QueryDenomMetadataRequestProtoMsg): _199.QueryDenomMetadataRequest;
                toProto(message: _199.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _199.QueryDenomMetadataRequest): _199.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _199.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomMetadataResponse;
                fromJSON(object: any): _199.QueryDenomMetadataResponse;
                toJSON(message: _199.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_199.QueryDenomMetadataResponse>): _199.QueryDenomMetadataResponse;
                fromAmino(object: _199.QueryDenomMetadataResponseAmino): _199.QueryDenomMetadataResponse;
                toAmino(message: _199.QueryDenomMetadataResponse): _199.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _199.QueryDenomMetadataResponseAminoMsg): _199.QueryDenomMetadataResponse;
                toAminoMsg(message: _199.QueryDenomMetadataResponse): _199.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _199.QueryDenomMetadataResponseProtoMsg): _199.QueryDenomMetadataResponse;
                toProto(message: _199.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _199.QueryDenomMetadataResponse): _199.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _199.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomOwnersRequest;
                fromJSON(object: any): _199.QueryDenomOwnersRequest;
                toJSON(message: _199.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_199.QueryDenomOwnersRequest>): _199.QueryDenomOwnersRequest;
                fromAmino(object: _199.QueryDenomOwnersRequestAmino): _199.QueryDenomOwnersRequest;
                toAmino(message: _199.QueryDenomOwnersRequest): _199.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _199.QueryDenomOwnersRequestAminoMsg): _199.QueryDenomOwnersRequest;
                toAminoMsg(message: _199.QueryDenomOwnersRequest): _199.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _199.QueryDenomOwnersRequestProtoMsg): _199.QueryDenomOwnersRequest;
                toProto(message: _199.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _199.QueryDenomOwnersRequest): _199.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _199.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.DenomOwner;
                fromJSON(object: any): _199.DenomOwner;
                toJSON(message: _199.DenomOwner): unknown;
                fromPartial(object: Partial<_199.DenomOwner>): _199.DenomOwner;
                fromAmino(object: _199.DenomOwnerAmino): _199.DenomOwner;
                toAmino(message: _199.DenomOwner): _199.DenomOwnerAmino;
                fromAminoMsg(object: _199.DenomOwnerAminoMsg): _199.DenomOwner;
                toAminoMsg(message: _199.DenomOwner): _199.DenomOwnerAminoMsg;
                fromProtoMsg(message: _199.DenomOwnerProtoMsg): _199.DenomOwner;
                toProto(message: _199.DenomOwner): Uint8Array;
                toProtoMsg(message: _199.DenomOwner): _199.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _199.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryDenomOwnersResponse;
                fromJSON(object: any): _199.QueryDenomOwnersResponse;
                toJSON(message: _199.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_199.QueryDenomOwnersResponse>): _199.QueryDenomOwnersResponse;
                fromAmino(object: _199.QueryDenomOwnersResponseAmino): _199.QueryDenomOwnersResponse;
                toAmino(message: _199.QueryDenomOwnersResponse): _199.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _199.QueryDenomOwnersResponseAminoMsg): _199.QueryDenomOwnersResponse;
                toAminoMsg(message: _199.QueryDenomOwnersResponse): _199.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _199.QueryDenomOwnersResponseProtoMsg): _199.QueryDenomOwnersResponse;
                toProto(message: _199.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _199.QueryDenomOwnersResponse): _199.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _198.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.GenesisState;
                fromJSON(object: any): _198.GenesisState;
                toJSON(message: _198.GenesisState): unknown;
                fromPartial(object: Partial<_198.GenesisState>): _198.GenesisState;
                fromAmino(object: _198.GenesisStateAmino): _198.GenesisState;
                toAmino(message: _198.GenesisState): _198.GenesisStateAmino;
                fromAminoMsg(object: _198.GenesisStateAminoMsg): _198.GenesisState;
                toAminoMsg(message: _198.GenesisState): _198.GenesisStateAminoMsg;
                fromProtoMsg(message: _198.GenesisStateProtoMsg): _198.GenesisState;
                toProto(message: _198.GenesisState): Uint8Array;
                toProtoMsg(message: _198.GenesisState): _198.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _198.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Balance;
                fromJSON(object: any): _198.Balance;
                toJSON(message: _198.Balance): unknown;
                fromPartial(object: Partial<_198.Balance>): _198.Balance;
                fromAmino(object: _198.BalanceAmino): _198.Balance;
                toAmino(message: _198.Balance): _198.BalanceAmino;
                fromAminoMsg(object: _198.BalanceAminoMsg): _198.Balance;
                toAminoMsg(message: _198.Balance): _198.BalanceAminoMsg;
                fromProtoMsg(message: _198.BalanceProtoMsg): _198.Balance;
                toProto(message: _198.Balance): Uint8Array;
                toProtoMsg(message: _198.Balance): _198.BalanceProtoMsg;
            };
            Params: {
                encode(message: _197.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Params;
                fromJSON(object: any): _197.Params;
                toJSON(message: _197.Params): unknown;
                fromPartial(object: Partial<_197.Params>): _197.Params;
                fromAmino(object: _197.ParamsAmino): _197.Params;
                toAmino(message: _197.Params): _197.ParamsAmino;
                fromAminoMsg(object: _197.ParamsAminoMsg): _197.Params;
                toAminoMsg(message: _197.Params): _197.ParamsAminoMsg;
                fromProtoMsg(message: _197.ParamsProtoMsg): _197.Params;
                toProto(message: _197.Params): Uint8Array;
                toProtoMsg(message: _197.Params): _197.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _197.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.SendEnabled;
                fromJSON(object: any): _197.SendEnabled;
                toJSON(message: _197.SendEnabled): unknown;
                fromPartial(object: Partial<_197.SendEnabled>): _197.SendEnabled;
                fromAmino(object: _197.SendEnabledAmino): _197.SendEnabled;
                toAmino(message: _197.SendEnabled): _197.SendEnabledAmino;
                fromAminoMsg(object: _197.SendEnabledAminoMsg): _197.SendEnabled;
                toAminoMsg(message: _197.SendEnabled): _197.SendEnabledAminoMsg;
                fromProtoMsg(message: _197.SendEnabledProtoMsg): _197.SendEnabled;
                toProto(message: _197.SendEnabled): Uint8Array;
                toProtoMsg(message: _197.SendEnabled): _197.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _197.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Input;
                fromJSON(object: any): _197.Input;
                toJSON(message: _197.Input): unknown;
                fromPartial(object: Partial<_197.Input>): _197.Input;
                fromAmino(object: _197.InputAmino): _197.Input;
                toAmino(message: _197.Input): _197.InputAmino;
                fromAminoMsg(object: _197.InputAminoMsg): _197.Input;
                toAminoMsg(message: _197.Input): _197.InputAminoMsg;
                fromProtoMsg(message: _197.InputProtoMsg): _197.Input;
                toProto(message: _197.Input): Uint8Array;
                toProtoMsg(message: _197.Input): _197.InputProtoMsg;
            };
            Output: {
                encode(message: _197.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Output;
                fromJSON(object: any): _197.Output;
                toJSON(message: _197.Output): unknown;
                fromPartial(object: Partial<_197.Output>): _197.Output;
                fromAmino(object: _197.OutputAmino): _197.Output;
                toAmino(message: _197.Output): _197.OutputAmino;
                fromAminoMsg(object: _197.OutputAminoMsg): _197.Output;
                toAminoMsg(message: _197.Output): _197.OutputAminoMsg;
                fromProtoMsg(message: _197.OutputProtoMsg): _197.Output;
                toProto(message: _197.Output): Uint8Array;
                toProtoMsg(message: _197.Output): _197.OutputProtoMsg;
            };
            Supply: {
                encode(message: _197.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Supply;
                fromJSON(object: any): _197.Supply;
                toJSON(message: _197.Supply): unknown;
                fromPartial(object: Partial<_197.Supply>): _197.Supply;
                fromAmino(object: _197.SupplyAmino): _197.Supply;
                toAmino(message: _197.Supply): _197.SupplyAmino;
                fromAminoMsg(object: _197.SupplyAminoMsg): _197.Supply;
                toAminoMsg(message: _197.Supply): _197.SupplyAminoMsg;
                fromProtoMsg(message: _197.SupplyProtoMsg): _197.Supply;
                toProto(message: _197.Supply): Uint8Array;
                toProtoMsg(message: _197.Supply): _197.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _197.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.DenomUnit;
                fromJSON(object: any): _197.DenomUnit;
                toJSON(message: _197.DenomUnit): unknown;
                fromPartial(object: Partial<_197.DenomUnit>): _197.DenomUnit;
                fromAmino(object: _197.DenomUnitAmino): _197.DenomUnit;
                toAmino(message: _197.DenomUnit): _197.DenomUnitAmino;
                fromAminoMsg(object: _197.DenomUnitAminoMsg): _197.DenomUnit;
                toAminoMsg(message: _197.DenomUnit): _197.DenomUnitAminoMsg;
                fromProtoMsg(message: _197.DenomUnitProtoMsg): _197.DenomUnit;
                toProto(message: _197.DenomUnit): Uint8Array;
                toProtoMsg(message: _197.DenomUnit): _197.DenomUnitProtoMsg;
            };
            Metadata: {
                encode(message: _197.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Metadata;
                fromJSON(object: any): _197.Metadata;
                toJSON(message: _197.Metadata): unknown;
                fromPartial(object: Partial<_197.Metadata>): _197.Metadata;
                fromAmino(object: _197.MetadataAmino): _197.Metadata;
                toAmino(message: _197.Metadata): _197.MetadataAmino;
                fromAminoMsg(object: _197.MetadataAminoMsg): _197.Metadata;
                toAminoMsg(message: _197.Metadata): _197.MetadataAminoMsg;
                fromProtoMsg(message: _197.MetadataProtoMsg): _197.Metadata;
                toProto(message: _197.Metadata): Uint8Array;
                toProtoMsg(message: _197.Metadata): _197.MetadataProtoMsg;
            };
            SendAuthorization: {
                encode(message: _196.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.SendAuthorization;
                fromJSON(object: any): _196.SendAuthorization;
                toJSON(message: _196.SendAuthorization): unknown;
                fromPartial(object: Partial<_196.SendAuthorization>): _196.SendAuthorization;
                fromAmino(object: _196.SendAuthorizationAmino): _196.SendAuthorization;
                toAmino(message: _196.SendAuthorization): _196.SendAuthorizationAmino;
                fromAminoMsg(object: _196.SendAuthorizationAminoMsg): _196.SendAuthorization;
                toAminoMsg(message: _196.SendAuthorization): _196.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _196.SendAuthorizationProtoMsg): _196.SendAuthorization;
                toProto(message: _196.SendAuthorization): Uint8Array;
                toProtoMsg(message: _196.SendAuthorization): _196.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _201.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.TxResponse;
                    fromJSON(object: any): _201.TxResponse;
                    toJSON(message: _201.TxResponse): unknown;
                    fromPartial(object: Partial<_201.TxResponse>): _201.TxResponse;
                    fromAmino(object: _201.TxResponseAmino): _201.TxResponse;
                    toAmino(message: _201.TxResponse): _201.TxResponseAmino;
                    fromAminoMsg(object: _201.TxResponseAminoMsg): _201.TxResponse;
                    toAminoMsg(message: _201.TxResponse): _201.TxResponseAminoMsg;
                    fromProtoMsg(message: _201.TxResponseProtoMsg): _201.TxResponse;
                    toProto(message: _201.TxResponse): Uint8Array;
                    toProtoMsg(message: _201.TxResponse): _201.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _201.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.ABCIMessageLog;
                    fromJSON(object: any): _201.ABCIMessageLog;
                    toJSON(message: _201.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_201.ABCIMessageLog>): _201.ABCIMessageLog;
                    fromAmino(object: _201.ABCIMessageLogAmino): _201.ABCIMessageLog;
                    toAmino(message: _201.ABCIMessageLog): _201.ABCIMessageLogAmino;
                    fromAminoMsg(object: _201.ABCIMessageLogAminoMsg): _201.ABCIMessageLog;
                    toAminoMsg(message: _201.ABCIMessageLog): _201.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _201.ABCIMessageLogProtoMsg): _201.ABCIMessageLog;
                    toProto(message: _201.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _201.ABCIMessageLog): _201.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _201.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.StringEvent;
                    fromJSON(object: any): _201.StringEvent;
                    toJSON(message: _201.StringEvent): unknown;
                    fromPartial(object: Partial<_201.StringEvent>): _201.StringEvent;
                    fromAmino(object: _201.StringEventAmino): _201.StringEvent;
                    toAmino(message: _201.StringEvent): _201.StringEventAmino;
                    fromAminoMsg(object: _201.StringEventAminoMsg): _201.StringEvent;
                    toAminoMsg(message: _201.StringEvent): _201.StringEventAminoMsg;
                    fromProtoMsg(message: _201.StringEventProtoMsg): _201.StringEvent;
                    toProto(message: _201.StringEvent): Uint8Array;
                    toProtoMsg(message: _201.StringEvent): _201.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _201.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Attribute;
                    fromJSON(object: any): _201.Attribute;
                    toJSON(message: _201.Attribute): unknown;
                    fromPartial(object: Partial<_201.Attribute>): _201.Attribute;
                    fromAmino(object: _201.AttributeAmino): _201.Attribute;
                    toAmino(message: _201.Attribute): _201.AttributeAmino;
                    fromAminoMsg(object: _201.AttributeAminoMsg): _201.Attribute;
                    toAminoMsg(message: _201.Attribute): _201.AttributeAminoMsg;
                    fromProtoMsg(message: _201.AttributeProtoMsg): _201.Attribute;
                    toProto(message: _201.Attribute): Uint8Array;
                    toProtoMsg(message: _201.Attribute): _201.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _201.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.GasInfo;
                    fromJSON(object: any): _201.GasInfo;
                    toJSON(message: _201.GasInfo): unknown;
                    fromPartial(object: Partial<_201.GasInfo>): _201.GasInfo;
                    fromAmino(object: _201.GasInfoAmino): _201.GasInfo;
                    toAmino(message: _201.GasInfo): _201.GasInfoAmino;
                    fromAminoMsg(object: _201.GasInfoAminoMsg): _201.GasInfo;
                    toAminoMsg(message: _201.GasInfo): _201.GasInfoAminoMsg;
                    fromProtoMsg(message: _201.GasInfoProtoMsg): _201.GasInfo;
                    toProto(message: _201.GasInfo): Uint8Array;
                    toProtoMsg(message: _201.GasInfo): _201.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _201.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.Result;
                    fromJSON(object: any): _201.Result;
                    toJSON(message: _201.Result): unknown;
                    fromPartial(object: Partial<_201.Result>): _201.Result;
                    fromAmino(object: _201.ResultAmino): _201.Result;
                    toAmino(message: _201.Result): _201.ResultAmino;
                    fromAminoMsg(object: _201.ResultAminoMsg): _201.Result;
                    toAminoMsg(message: _201.Result): _201.ResultAminoMsg;
                    fromProtoMsg(message: _201.ResultProtoMsg): _201.Result;
                    toProto(message: _201.Result): Uint8Array;
                    toProtoMsg(message: _201.Result): _201.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _201.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.SimulationResponse;
                    fromJSON(object: any): _201.SimulationResponse;
                    toJSON(message: _201.SimulationResponse): unknown;
                    fromPartial(object: Partial<_201.SimulationResponse>): _201.SimulationResponse;
                    fromAmino(object: _201.SimulationResponseAmino): _201.SimulationResponse;
                    toAmino(message: _201.SimulationResponse): _201.SimulationResponseAmino;
                    fromAminoMsg(object: _201.SimulationResponseAminoMsg): _201.SimulationResponse;
                    toAminoMsg(message: _201.SimulationResponse): _201.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _201.SimulationResponseProtoMsg): _201.SimulationResponse;
                    toProto(message: _201.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _201.SimulationResponse): _201.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _201.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.MsgData;
                    fromJSON(object: any): _201.MsgData;
                    toJSON(message: _201.MsgData): unknown;
                    fromPartial(object: Partial<_201.MsgData>): _201.MsgData;
                    fromAmino(object: _201.MsgDataAmino): _201.MsgData;
                    toAmino(message: _201.MsgData): _201.MsgDataAmino;
                    fromAminoMsg(object: _201.MsgDataAminoMsg): _201.MsgData;
                    toAminoMsg(message: _201.MsgData): _201.MsgDataAminoMsg;
                    fromProtoMsg(message: _201.MsgDataProtoMsg): _201.MsgData;
                    toProto(message: _201.MsgData): Uint8Array;
                    toProtoMsg(message: _201.MsgData): _201.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _201.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.TxMsgData;
                    fromJSON(object: any): _201.TxMsgData;
                    toJSON(message: _201.TxMsgData): unknown;
                    fromPartial(object: Partial<_201.TxMsgData>): _201.TxMsgData;
                    fromAmino(object: _201.TxMsgDataAmino): _201.TxMsgData;
                    toAmino(message: _201.TxMsgData): _201.TxMsgDataAmino;
                    fromAminoMsg(object: _201.TxMsgDataAminoMsg): _201.TxMsgData;
                    toAminoMsg(message: _201.TxMsgData): _201.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _201.TxMsgDataProtoMsg): _201.TxMsgData;
                    toProto(message: _201.TxMsgData): Uint8Array;
                    toProtoMsg(message: _201.TxMsgData): _201.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _201.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.SearchTxsResult;
                    fromJSON(object: any): _201.SearchTxsResult;
                    toJSON(message: _201.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_201.SearchTxsResult>): _201.SearchTxsResult;
                    fromAmino(object: _201.SearchTxsResultAmino): _201.SearchTxsResult;
                    toAmino(message: _201.SearchTxsResult): _201.SearchTxsResultAmino;
                    fromAminoMsg(object: _201.SearchTxsResultAminoMsg): _201.SearchTxsResult;
                    toAminoMsg(message: _201.SearchTxsResult): _201.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _201.SearchTxsResultProtoMsg): _201.SearchTxsResult;
                    toProto(message: _201.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _201.SearchTxsResult): _201.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _202.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Pairs;
                    fromJSON(object: any): _202.Pairs;
                    toJSON(message: _202.Pairs): unknown;
                    fromPartial(object: Partial<_202.Pairs>): _202.Pairs;
                    fromAmino(object: _202.PairsAmino): _202.Pairs;
                    toAmino(message: _202.Pairs): _202.PairsAmino;
                    fromAminoMsg(object: _202.PairsAminoMsg): _202.Pairs;
                    toAminoMsg(message: _202.Pairs): _202.PairsAminoMsg;
                    fromProtoMsg(message: _202.PairsProtoMsg): _202.Pairs;
                    toProto(message: _202.Pairs): Uint8Array;
                    toProtoMsg(message: _202.Pairs): _202.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _202.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.Pair;
                    fromJSON(object: any): _202.Pair;
                    toJSON(message: _202.Pair): unknown;
                    fromPartial(object: Partial<_202.Pair>): _202.Pair;
                    fromAmino(object: _202.PairAmino): _202.Pair;
                    toAmino(message: _202.Pair): _202.PairAmino;
                    fromAminoMsg(object: _202.PairAminoMsg): _202.Pair;
                    toAminoMsg(message: _202.Pair): _202.PairAminoMsg;
                    fromProtoMsg(message: _202.PairProtoMsg): _202.Pair;
                    toProto(message: _202.Pair): Uint8Array;
                    toProtoMsg(message: _202.Pair): _202.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _203.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PageRequest;
                    fromJSON(object: any): _203.PageRequest;
                    toJSON(message: _203.PageRequest): unknown;
                    fromPartial(object: Partial<_203.PageRequest>): _203.PageRequest;
                    fromAmino(object: _203.PageRequestAmino): _203.PageRequest;
                    toAmino(message: _203.PageRequest): _203.PageRequestAmino;
                    fromAminoMsg(object: _203.PageRequestAminoMsg): _203.PageRequest;
                    toAminoMsg(message: _203.PageRequest): _203.PageRequestAminoMsg;
                    fromProtoMsg(message: _203.PageRequestProtoMsg): _203.PageRequest;
                    toProto(message: _203.PageRequest): Uint8Array;
                    toProtoMsg(message: _203.PageRequest): _203.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _203.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.PageResponse;
                    fromJSON(object: any): _203.PageResponse;
                    toJSON(message: _203.PageResponse): unknown;
                    fromPartial(object: Partial<_203.PageResponse>): _203.PageResponse;
                    fromAmino(object: _203.PageResponseAmino): _203.PageResponse;
                    toAmino(message: _203.PageResponse): _203.PageResponseAmino;
                    fromAminoMsg(object: _203.PageResponseAminoMsg): _203.PageResponse;
                    toAminoMsg(message: _203.PageResponse): _203.PageResponseAminoMsg;
                    fromProtoMsg(message: _203.PageResponseProtoMsg): _203.PageResponse;
                    toProto(message: _203.PageResponse): Uint8Array;
                    toProtoMsg(message: _203.PageResponse): _203.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _204.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ListAllInterfacesRequest;
                    fromJSON(_: any): _204.ListAllInterfacesRequest;
                    toJSON(_: _204.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_204.ListAllInterfacesRequest>): _204.ListAllInterfacesRequest;
                    fromAmino(_: _204.ListAllInterfacesRequestAmino): _204.ListAllInterfacesRequest;
                    toAmino(_: _204.ListAllInterfacesRequest): _204.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _204.ListAllInterfacesRequestAminoMsg): _204.ListAllInterfacesRequest;
                    toAminoMsg(message: _204.ListAllInterfacesRequest): _204.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _204.ListAllInterfacesRequestProtoMsg): _204.ListAllInterfacesRequest;
                    toProto(message: _204.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _204.ListAllInterfacesRequest): _204.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _204.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ListAllInterfacesResponse;
                    fromJSON(object: any): _204.ListAllInterfacesResponse;
                    toJSON(message: _204.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_204.ListAllInterfacesResponse>): _204.ListAllInterfacesResponse;
                    fromAmino(object: _204.ListAllInterfacesResponseAmino): _204.ListAllInterfacesResponse;
                    toAmino(message: _204.ListAllInterfacesResponse): _204.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _204.ListAllInterfacesResponseAminoMsg): _204.ListAllInterfacesResponse;
                    toAminoMsg(message: _204.ListAllInterfacesResponse): _204.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _204.ListAllInterfacesResponseProtoMsg): _204.ListAllInterfacesResponse;
                    toProto(message: _204.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _204.ListAllInterfacesResponse): _204.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _204.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ListImplementationsRequest;
                    fromJSON(object: any): _204.ListImplementationsRequest;
                    toJSON(message: _204.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_204.ListImplementationsRequest>): _204.ListImplementationsRequest;
                    fromAmino(object: _204.ListImplementationsRequestAmino): _204.ListImplementationsRequest;
                    toAmino(message: _204.ListImplementationsRequest): _204.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _204.ListImplementationsRequestAminoMsg): _204.ListImplementationsRequest;
                    toAminoMsg(message: _204.ListImplementationsRequest): _204.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _204.ListImplementationsRequestProtoMsg): _204.ListImplementationsRequest;
                    toProto(message: _204.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _204.ListImplementationsRequest): _204.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _204.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.ListImplementationsResponse;
                    fromJSON(object: any): _204.ListImplementationsResponse;
                    toJSON(message: _204.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_204.ListImplementationsResponse>): _204.ListImplementationsResponse;
                    fromAmino(object: _204.ListImplementationsResponseAmino): _204.ListImplementationsResponse;
                    toAmino(message: _204.ListImplementationsResponse): _204.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _204.ListImplementationsResponseAminoMsg): _204.ListImplementationsResponse;
                    toAminoMsg(message: _204.ListImplementationsResponse): _204.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _204.ListImplementationsResponseProtoMsg): _204.ListImplementationsResponse;
                    toProto(message: _204.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _204.ListImplementationsResponse): _204.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _205.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.AppDescriptor;
                    fromJSON(object: any): _205.AppDescriptor;
                    toJSON(message: _205.AppDescriptor): unknown;
                    fromPartial(object: Partial<_205.AppDescriptor>): _205.AppDescriptor;
                    fromAmino(object: _205.AppDescriptorAmino): _205.AppDescriptor;
                    toAmino(message: _205.AppDescriptor): _205.AppDescriptorAmino;
                    fromAminoMsg(object: _205.AppDescriptorAminoMsg): _205.AppDescriptor;
                    toAminoMsg(message: _205.AppDescriptor): _205.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _205.AppDescriptorProtoMsg): _205.AppDescriptor;
                    toProto(message: _205.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _205.AppDescriptor): _205.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _205.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.TxDescriptor;
                    fromJSON(object: any): _205.TxDescriptor;
                    toJSON(message: _205.TxDescriptor): unknown;
                    fromPartial(object: Partial<_205.TxDescriptor>): _205.TxDescriptor;
                    fromAmino(object: _205.TxDescriptorAmino): _205.TxDescriptor;
                    toAmino(message: _205.TxDescriptor): _205.TxDescriptorAmino;
                    fromAminoMsg(object: _205.TxDescriptorAminoMsg): _205.TxDescriptor;
                    toAminoMsg(message: _205.TxDescriptor): _205.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _205.TxDescriptorProtoMsg): _205.TxDescriptor;
                    toProto(message: _205.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _205.TxDescriptor): _205.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _205.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.AuthnDescriptor;
                    fromJSON(object: any): _205.AuthnDescriptor;
                    toJSON(message: _205.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_205.AuthnDescriptor>): _205.AuthnDescriptor;
                    fromAmino(object: _205.AuthnDescriptorAmino): _205.AuthnDescriptor;
                    toAmino(message: _205.AuthnDescriptor): _205.AuthnDescriptorAmino;
                    fromAminoMsg(object: _205.AuthnDescriptorAminoMsg): _205.AuthnDescriptor;
                    toAminoMsg(message: _205.AuthnDescriptor): _205.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _205.AuthnDescriptorProtoMsg): _205.AuthnDescriptor;
                    toProto(message: _205.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _205.AuthnDescriptor): _205.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _205.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.SigningModeDescriptor;
                    fromJSON(object: any): _205.SigningModeDescriptor;
                    toJSON(message: _205.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_205.SigningModeDescriptor>): _205.SigningModeDescriptor;
                    fromAmino(object: _205.SigningModeDescriptorAmino): _205.SigningModeDescriptor;
                    toAmino(message: _205.SigningModeDescriptor): _205.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _205.SigningModeDescriptorAminoMsg): _205.SigningModeDescriptor;
                    toAminoMsg(message: _205.SigningModeDescriptor): _205.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _205.SigningModeDescriptorProtoMsg): _205.SigningModeDescriptor;
                    toProto(message: _205.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _205.SigningModeDescriptor): _205.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _205.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ChainDescriptor;
                    fromJSON(object: any): _205.ChainDescriptor;
                    toJSON(message: _205.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_205.ChainDescriptor>): _205.ChainDescriptor;
                    fromAmino(object: _205.ChainDescriptorAmino): _205.ChainDescriptor;
                    toAmino(message: _205.ChainDescriptor): _205.ChainDescriptorAmino;
                    fromAminoMsg(object: _205.ChainDescriptorAminoMsg): _205.ChainDescriptor;
                    toAminoMsg(message: _205.ChainDescriptor): _205.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _205.ChainDescriptorProtoMsg): _205.ChainDescriptor;
                    toProto(message: _205.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _205.ChainDescriptor): _205.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _205.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.CodecDescriptor;
                    fromJSON(object: any): _205.CodecDescriptor;
                    toJSON(message: _205.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_205.CodecDescriptor>): _205.CodecDescriptor;
                    fromAmino(object: _205.CodecDescriptorAmino): _205.CodecDescriptor;
                    toAmino(message: _205.CodecDescriptor): _205.CodecDescriptorAmino;
                    fromAminoMsg(object: _205.CodecDescriptorAminoMsg): _205.CodecDescriptor;
                    toAminoMsg(message: _205.CodecDescriptor): _205.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _205.CodecDescriptorProtoMsg): _205.CodecDescriptor;
                    toProto(message: _205.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _205.CodecDescriptor): _205.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _205.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.InterfaceDescriptor;
                    fromJSON(object: any): _205.InterfaceDescriptor;
                    toJSON(message: _205.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_205.InterfaceDescriptor>): _205.InterfaceDescriptor;
                    fromAmino(object: _205.InterfaceDescriptorAmino): _205.InterfaceDescriptor;
                    toAmino(message: _205.InterfaceDescriptor): _205.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _205.InterfaceDescriptorAminoMsg): _205.InterfaceDescriptor;
                    toAminoMsg(message: _205.InterfaceDescriptor): _205.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _205.InterfaceDescriptorProtoMsg): _205.InterfaceDescriptor;
                    toProto(message: _205.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _205.InterfaceDescriptor): _205.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _205.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _205.InterfaceImplementerDescriptor;
                    toJSON(message: _205.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_205.InterfaceImplementerDescriptor>): _205.InterfaceImplementerDescriptor;
                    fromAmino(object: _205.InterfaceImplementerDescriptorAmino): _205.InterfaceImplementerDescriptor;
                    toAmino(message: _205.InterfaceImplementerDescriptor): _205.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _205.InterfaceImplementerDescriptorAminoMsg): _205.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _205.InterfaceImplementerDescriptor): _205.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _205.InterfaceImplementerDescriptorProtoMsg): _205.InterfaceImplementerDescriptor;
                    toProto(message: _205.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _205.InterfaceImplementerDescriptor): _205.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _205.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _205.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _205.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_205.InterfaceAcceptingMessageDescriptor>): _205.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _205.InterfaceAcceptingMessageDescriptorAmino): _205.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _205.InterfaceAcceptingMessageDescriptor): _205.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _205.InterfaceAcceptingMessageDescriptorAminoMsg): _205.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _205.InterfaceAcceptingMessageDescriptor): _205.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _205.InterfaceAcceptingMessageDescriptorProtoMsg): _205.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _205.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _205.InterfaceAcceptingMessageDescriptor): _205.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _205.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.ConfigurationDescriptor;
                    fromJSON(object: any): _205.ConfigurationDescriptor;
                    toJSON(message: _205.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_205.ConfigurationDescriptor>): _205.ConfigurationDescriptor;
                    fromAmino(object: _205.ConfigurationDescriptorAmino): _205.ConfigurationDescriptor;
                    toAmino(message: _205.ConfigurationDescriptor): _205.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _205.ConfigurationDescriptorAminoMsg): _205.ConfigurationDescriptor;
                    toAminoMsg(message: _205.ConfigurationDescriptor): _205.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _205.ConfigurationDescriptorProtoMsg): _205.ConfigurationDescriptor;
                    toProto(message: _205.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _205.ConfigurationDescriptor): _205.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _205.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.MsgDescriptor;
                    fromJSON(object: any): _205.MsgDescriptor;
                    toJSON(message: _205.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_205.MsgDescriptor>): _205.MsgDescriptor;
                    fromAmino(object: _205.MsgDescriptorAmino): _205.MsgDescriptor;
                    toAmino(message: _205.MsgDescriptor): _205.MsgDescriptorAmino;
                    fromAminoMsg(object: _205.MsgDescriptorAminoMsg): _205.MsgDescriptor;
                    toAminoMsg(message: _205.MsgDescriptor): _205.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _205.MsgDescriptorProtoMsg): _205.MsgDescriptor;
                    toProto(message: _205.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _205.MsgDescriptor): _205.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _205.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _205.GetAuthnDescriptorRequest;
                    toJSON(_: _205.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetAuthnDescriptorRequest>): _205.GetAuthnDescriptorRequest;
                    fromAmino(_: _205.GetAuthnDescriptorRequestAmino): _205.GetAuthnDescriptorRequest;
                    toAmino(_: _205.GetAuthnDescriptorRequest): _205.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetAuthnDescriptorRequestAminoMsg): _205.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _205.GetAuthnDescriptorRequest): _205.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetAuthnDescriptorRequestProtoMsg): _205.GetAuthnDescriptorRequest;
                    toProto(message: _205.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetAuthnDescriptorRequest): _205.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _205.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _205.GetAuthnDescriptorResponse;
                    toJSON(message: _205.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetAuthnDescriptorResponse>): _205.GetAuthnDescriptorResponse;
                    fromAmino(object: _205.GetAuthnDescriptorResponseAmino): _205.GetAuthnDescriptorResponse;
                    toAmino(message: _205.GetAuthnDescriptorResponse): _205.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetAuthnDescriptorResponseAminoMsg): _205.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _205.GetAuthnDescriptorResponse): _205.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetAuthnDescriptorResponseProtoMsg): _205.GetAuthnDescriptorResponse;
                    toProto(message: _205.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetAuthnDescriptorResponse): _205.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _205.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetChainDescriptorRequest;
                    fromJSON(_: any): _205.GetChainDescriptorRequest;
                    toJSON(_: _205.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetChainDescriptorRequest>): _205.GetChainDescriptorRequest;
                    fromAmino(_: _205.GetChainDescriptorRequestAmino): _205.GetChainDescriptorRequest;
                    toAmino(_: _205.GetChainDescriptorRequest): _205.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetChainDescriptorRequestAminoMsg): _205.GetChainDescriptorRequest;
                    toAminoMsg(message: _205.GetChainDescriptorRequest): _205.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetChainDescriptorRequestProtoMsg): _205.GetChainDescriptorRequest;
                    toProto(message: _205.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetChainDescriptorRequest): _205.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _205.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetChainDescriptorResponse;
                    fromJSON(object: any): _205.GetChainDescriptorResponse;
                    toJSON(message: _205.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetChainDescriptorResponse>): _205.GetChainDescriptorResponse;
                    fromAmino(object: _205.GetChainDescriptorResponseAmino): _205.GetChainDescriptorResponse;
                    toAmino(message: _205.GetChainDescriptorResponse): _205.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetChainDescriptorResponseAminoMsg): _205.GetChainDescriptorResponse;
                    toAminoMsg(message: _205.GetChainDescriptorResponse): _205.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetChainDescriptorResponseProtoMsg): _205.GetChainDescriptorResponse;
                    toProto(message: _205.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetChainDescriptorResponse): _205.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _205.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetCodecDescriptorRequest;
                    fromJSON(_: any): _205.GetCodecDescriptorRequest;
                    toJSON(_: _205.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetCodecDescriptorRequest>): _205.GetCodecDescriptorRequest;
                    fromAmino(_: _205.GetCodecDescriptorRequestAmino): _205.GetCodecDescriptorRequest;
                    toAmino(_: _205.GetCodecDescriptorRequest): _205.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetCodecDescriptorRequestAminoMsg): _205.GetCodecDescriptorRequest;
                    toAminoMsg(message: _205.GetCodecDescriptorRequest): _205.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetCodecDescriptorRequestProtoMsg): _205.GetCodecDescriptorRequest;
                    toProto(message: _205.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetCodecDescriptorRequest): _205.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _205.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetCodecDescriptorResponse;
                    fromJSON(object: any): _205.GetCodecDescriptorResponse;
                    toJSON(message: _205.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetCodecDescriptorResponse>): _205.GetCodecDescriptorResponse;
                    fromAmino(object: _205.GetCodecDescriptorResponseAmino): _205.GetCodecDescriptorResponse;
                    toAmino(message: _205.GetCodecDescriptorResponse): _205.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetCodecDescriptorResponseAminoMsg): _205.GetCodecDescriptorResponse;
                    toAminoMsg(message: _205.GetCodecDescriptorResponse): _205.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetCodecDescriptorResponseProtoMsg): _205.GetCodecDescriptorResponse;
                    toProto(message: _205.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetCodecDescriptorResponse): _205.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _205.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _205.GetConfigurationDescriptorRequest;
                    toJSON(_: _205.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetConfigurationDescriptorRequest>): _205.GetConfigurationDescriptorRequest;
                    fromAmino(_: _205.GetConfigurationDescriptorRequestAmino): _205.GetConfigurationDescriptorRequest;
                    toAmino(_: _205.GetConfigurationDescriptorRequest): _205.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetConfigurationDescriptorRequestAminoMsg): _205.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _205.GetConfigurationDescriptorRequest): _205.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetConfigurationDescriptorRequestProtoMsg): _205.GetConfigurationDescriptorRequest;
                    toProto(message: _205.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetConfigurationDescriptorRequest): _205.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _205.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _205.GetConfigurationDescriptorResponse;
                    toJSON(message: _205.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetConfigurationDescriptorResponse>): _205.GetConfigurationDescriptorResponse;
                    fromAmino(object: _205.GetConfigurationDescriptorResponseAmino): _205.GetConfigurationDescriptorResponse;
                    toAmino(message: _205.GetConfigurationDescriptorResponse): _205.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetConfigurationDescriptorResponseAminoMsg): _205.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _205.GetConfigurationDescriptorResponse): _205.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetConfigurationDescriptorResponseProtoMsg): _205.GetConfigurationDescriptorResponse;
                    toProto(message: _205.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetConfigurationDescriptorResponse): _205.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _205.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _205.GetQueryServicesDescriptorRequest;
                    toJSON(_: _205.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetQueryServicesDescriptorRequest>): _205.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _205.GetQueryServicesDescriptorRequestAmino): _205.GetQueryServicesDescriptorRequest;
                    toAmino(_: _205.GetQueryServicesDescriptorRequest): _205.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetQueryServicesDescriptorRequestAminoMsg): _205.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _205.GetQueryServicesDescriptorRequest): _205.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetQueryServicesDescriptorRequestProtoMsg): _205.GetQueryServicesDescriptorRequest;
                    toProto(message: _205.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetQueryServicesDescriptorRequest): _205.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _205.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _205.GetQueryServicesDescriptorResponse;
                    toJSON(message: _205.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetQueryServicesDescriptorResponse>): _205.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _205.GetQueryServicesDescriptorResponseAmino): _205.GetQueryServicesDescriptorResponse;
                    toAmino(message: _205.GetQueryServicesDescriptorResponse): _205.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetQueryServicesDescriptorResponseAminoMsg): _205.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _205.GetQueryServicesDescriptorResponse): _205.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetQueryServicesDescriptorResponseProtoMsg): _205.GetQueryServicesDescriptorResponse;
                    toProto(message: _205.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetQueryServicesDescriptorResponse): _205.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _205.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetTxDescriptorRequest;
                    fromJSON(_: any): _205.GetTxDescriptorRequest;
                    toJSON(_: _205.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_205.GetTxDescriptorRequest>): _205.GetTxDescriptorRequest;
                    fromAmino(_: _205.GetTxDescriptorRequestAmino): _205.GetTxDescriptorRequest;
                    toAmino(_: _205.GetTxDescriptorRequest): _205.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _205.GetTxDescriptorRequestAminoMsg): _205.GetTxDescriptorRequest;
                    toAminoMsg(message: _205.GetTxDescriptorRequest): _205.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _205.GetTxDescriptorRequestProtoMsg): _205.GetTxDescriptorRequest;
                    toProto(message: _205.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _205.GetTxDescriptorRequest): _205.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _205.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.GetTxDescriptorResponse;
                    fromJSON(object: any): _205.GetTxDescriptorResponse;
                    toJSON(message: _205.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_205.GetTxDescriptorResponse>): _205.GetTxDescriptorResponse;
                    fromAmino(object: _205.GetTxDescriptorResponseAmino): _205.GetTxDescriptorResponse;
                    toAmino(message: _205.GetTxDescriptorResponse): _205.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _205.GetTxDescriptorResponseAminoMsg): _205.GetTxDescriptorResponse;
                    toAminoMsg(message: _205.GetTxDescriptorResponse): _205.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _205.GetTxDescriptorResponseProtoMsg): _205.GetTxDescriptorResponse;
                    toProto(message: _205.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _205.GetTxDescriptorResponse): _205.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _205.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryServicesDescriptor;
                    fromJSON(object: any): _205.QueryServicesDescriptor;
                    toJSON(message: _205.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_205.QueryServicesDescriptor>): _205.QueryServicesDescriptor;
                    fromAmino(object: _205.QueryServicesDescriptorAmino): _205.QueryServicesDescriptor;
                    toAmino(message: _205.QueryServicesDescriptor): _205.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _205.QueryServicesDescriptorAminoMsg): _205.QueryServicesDescriptor;
                    toAminoMsg(message: _205.QueryServicesDescriptor): _205.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _205.QueryServicesDescriptorProtoMsg): _205.QueryServicesDescriptor;
                    toProto(message: _205.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _205.QueryServicesDescriptor): _205.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _205.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryServiceDescriptor;
                    fromJSON(object: any): _205.QueryServiceDescriptor;
                    toJSON(message: _205.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_205.QueryServiceDescriptor>): _205.QueryServiceDescriptor;
                    fromAmino(object: _205.QueryServiceDescriptorAmino): _205.QueryServiceDescriptor;
                    toAmino(message: _205.QueryServiceDescriptor): _205.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _205.QueryServiceDescriptorAminoMsg): _205.QueryServiceDescriptor;
                    toAminoMsg(message: _205.QueryServiceDescriptor): _205.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _205.QueryServiceDescriptorProtoMsg): _205.QueryServiceDescriptor;
                    toProto(message: _205.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _205.QueryServiceDescriptor): _205.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _205.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.QueryMethodDescriptor;
                    fromJSON(object: any): _205.QueryMethodDescriptor;
                    toJSON(message: _205.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_205.QueryMethodDescriptor>): _205.QueryMethodDescriptor;
                    fromAmino(object: _205.QueryMethodDescriptorAmino): _205.QueryMethodDescriptor;
                    toAmino(message: _205.QueryMethodDescriptor): _205.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _205.QueryMethodDescriptorAminoMsg): _205.QueryMethodDescriptor;
                    toAminoMsg(message: _205.QueryMethodDescriptor): _205.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _205.QueryMethodDescriptorProtoMsg): _205.QueryMethodDescriptor;
                    toProto(message: _205.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _205.QueryMethodDescriptor): _205.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _206.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Snapshot;
                    fromJSON(object: any): _206.Snapshot;
                    toJSON(message: _206.Snapshot): unknown;
                    fromPartial(object: Partial<_206.Snapshot>): _206.Snapshot;
                    fromAmino(object: _206.SnapshotAmino): _206.Snapshot;
                    toAmino(message: _206.Snapshot): _206.SnapshotAmino;
                    fromAminoMsg(object: _206.SnapshotAminoMsg): _206.Snapshot;
                    toAminoMsg(message: _206.Snapshot): _206.SnapshotAminoMsg;
                    fromProtoMsg(message: _206.SnapshotProtoMsg): _206.Snapshot;
                    toProto(message: _206.Snapshot): Uint8Array;
                    toProtoMsg(message: _206.Snapshot): _206.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _206.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Metadata;
                    fromJSON(object: any): _206.Metadata;
                    toJSON(message: _206.Metadata): unknown;
                    fromPartial(object: Partial<_206.Metadata>): _206.Metadata;
                    fromAmino(object: _206.MetadataAmino): _206.Metadata;
                    toAmino(message: _206.Metadata): _206.MetadataAmino;
                    fromAminoMsg(object: _206.MetadataAminoMsg): _206.Metadata;
                    toAminoMsg(message: _206.Metadata): _206.MetadataAminoMsg;
                    fromProtoMsg(message: _206.MetadataProtoMsg): _206.Metadata;
                    toProto(message: _206.Metadata): Uint8Array;
                    toProtoMsg(message: _206.Metadata): _206.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _206.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotItem;
                    fromJSON(object: any): _206.SnapshotItem;
                    toJSON(message: _206.SnapshotItem): unknown;
                    fromPartial(object: Partial<_206.SnapshotItem>): _206.SnapshotItem;
                    fromAmino(object: _206.SnapshotItemAmino): _206.SnapshotItem;
                    toAmino(message: _206.SnapshotItem): _206.SnapshotItemAmino;
                    fromAminoMsg(object: _206.SnapshotItemAminoMsg): _206.SnapshotItem;
                    toAminoMsg(message: _206.SnapshotItem): _206.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _206.SnapshotItemProtoMsg): _206.SnapshotItem;
                    toProto(message: _206.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _206.SnapshotItem): _206.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _206.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotStoreItem;
                    fromJSON(object: any): _206.SnapshotStoreItem;
                    toJSON(message: _206.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_206.SnapshotStoreItem>): _206.SnapshotStoreItem;
                    fromAmino(object: _206.SnapshotStoreItemAmino): _206.SnapshotStoreItem;
                    toAmino(message: _206.SnapshotStoreItem): _206.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _206.SnapshotStoreItemAminoMsg): _206.SnapshotStoreItem;
                    toAminoMsg(message: _206.SnapshotStoreItem): _206.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _206.SnapshotStoreItemProtoMsg): _206.SnapshotStoreItem;
                    toProto(message: _206.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _206.SnapshotStoreItem): _206.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _206.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotIAVLItem;
                    fromJSON(object: any): _206.SnapshotIAVLItem;
                    toJSON(message: _206.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_206.SnapshotIAVLItem>): _206.SnapshotIAVLItem;
                    fromAmino(object: _206.SnapshotIAVLItemAmino): _206.SnapshotIAVLItem;
                    toAmino(message: _206.SnapshotIAVLItem): _206.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _206.SnapshotIAVLItemAminoMsg): _206.SnapshotIAVLItem;
                    toAminoMsg(message: _206.SnapshotIAVLItem): _206.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _206.SnapshotIAVLItemProtoMsg): _206.SnapshotIAVLItem;
                    toProto(message: _206.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _206.SnapshotIAVLItem): _206.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _206.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotExtensionMeta;
                    fromJSON(object: any): _206.SnapshotExtensionMeta;
                    toJSON(message: _206.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_206.SnapshotExtensionMeta>): _206.SnapshotExtensionMeta;
                    fromAmino(object: _206.SnapshotExtensionMetaAmino): _206.SnapshotExtensionMeta;
                    toAmino(message: _206.SnapshotExtensionMeta): _206.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _206.SnapshotExtensionMetaAminoMsg): _206.SnapshotExtensionMeta;
                    toAminoMsg(message: _206.SnapshotExtensionMeta): _206.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _206.SnapshotExtensionMetaProtoMsg): _206.SnapshotExtensionMeta;
                    toProto(message: _206.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _206.SnapshotExtensionMeta): _206.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _206.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotExtensionPayload;
                    fromJSON(object: any): _206.SnapshotExtensionPayload;
                    toJSON(message: _206.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_206.SnapshotExtensionPayload>): _206.SnapshotExtensionPayload;
                    fromAmino(object: _206.SnapshotExtensionPayloadAmino): _206.SnapshotExtensionPayload;
                    toAmino(message: _206.SnapshotExtensionPayload): _206.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _206.SnapshotExtensionPayloadAminoMsg): _206.SnapshotExtensionPayload;
                    toAminoMsg(message: _206.SnapshotExtensionPayload): _206.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _206.SnapshotExtensionPayloadProtoMsg): _206.SnapshotExtensionPayload;
                    toProto(message: _206.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _206.SnapshotExtensionPayload): _206.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _206.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotKVItem;
                    fromJSON(object: any): _206.SnapshotKVItem;
                    toJSON(message: _206.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_206.SnapshotKVItem>): _206.SnapshotKVItem;
                    fromAmino(object: _206.SnapshotKVItemAmino): _206.SnapshotKVItem;
                    toAmino(message: _206.SnapshotKVItem): _206.SnapshotKVItemAmino;
                    fromAminoMsg(object: _206.SnapshotKVItemAminoMsg): _206.SnapshotKVItem;
                    toAminoMsg(message: _206.SnapshotKVItem): _206.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _206.SnapshotKVItemProtoMsg): _206.SnapshotKVItem;
                    toProto(message: _206.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _206.SnapshotKVItem): _206.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _206.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SnapshotSchema;
                    fromJSON(object: any): _206.SnapshotSchema;
                    toJSON(message: _206.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_206.SnapshotSchema>): _206.SnapshotSchema;
                    fromAmino(object: _206.SnapshotSchemaAmino): _206.SnapshotSchema;
                    toAmino(message: _206.SnapshotSchema): _206.SnapshotSchemaAmino;
                    fromAminoMsg(object: _206.SnapshotSchemaAminoMsg): _206.SnapshotSchema;
                    toAminoMsg(message: _206.SnapshotSchema): _206.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _206.SnapshotSchemaProtoMsg): _206.SnapshotSchema;
                    toProto(message: _206.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _206.SnapshotSchema): _206.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _208.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.StoreKVPair;
                    fromJSON(object: any): _208.StoreKVPair;
                    toJSON(message: _208.StoreKVPair): unknown;
                    fromPartial(object: Partial<_208.StoreKVPair>): _208.StoreKVPair;
                    fromAmino(object: _208.StoreKVPairAmino): _208.StoreKVPair;
                    toAmino(message: _208.StoreKVPair): _208.StoreKVPairAmino;
                    fromAminoMsg(object: _208.StoreKVPairAminoMsg): _208.StoreKVPair;
                    toAminoMsg(message: _208.StoreKVPair): _208.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _208.StoreKVPairProtoMsg): _208.StoreKVPair;
                    toProto(message: _208.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _208.StoreKVPair): _208.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    encode(message: _207.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.CommitInfo;
                    fromJSON(object: any): _207.CommitInfo;
                    toJSON(message: _207.CommitInfo): unknown;
                    fromPartial(object: Partial<_207.CommitInfo>): _207.CommitInfo;
                    fromAmino(object: _207.CommitInfoAmino): _207.CommitInfo;
                    toAmino(message: _207.CommitInfo): _207.CommitInfoAmino;
                    fromAminoMsg(object: _207.CommitInfoAminoMsg): _207.CommitInfo;
                    toAminoMsg(message: _207.CommitInfo): _207.CommitInfoAminoMsg;
                    fromProtoMsg(message: _207.CommitInfoProtoMsg): _207.CommitInfo;
                    toProto(message: _207.CommitInfo): Uint8Array;
                    toProtoMsg(message: _207.CommitInfo): _207.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _207.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.StoreInfo;
                    fromJSON(object: any): _207.StoreInfo;
                    toJSON(message: _207.StoreInfo): unknown;
                    fromPartial(object: Partial<_207.StoreInfo>): _207.StoreInfo;
                    fromAmino(object: _207.StoreInfoAmino): _207.StoreInfo;
                    toAmino(message: _207.StoreInfo): _207.StoreInfoAmino;
                    fromAminoMsg(object: _207.StoreInfoAminoMsg): _207.StoreInfo;
                    toAminoMsg(message: _207.StoreInfo): _207.StoreInfoAminoMsg;
                    fromProtoMsg(message: _207.StoreInfoProtoMsg): _207.StoreInfo;
                    toProto(message: _207.StoreInfo): Uint8Array;
                    toProtoMsg(message: _207.StoreInfo): _207.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _207.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.CommitID;
                    fromJSON(object: any): _207.CommitID;
                    toJSON(message: _207.CommitID): unknown;
                    fromPartial(object: Partial<_207.CommitID>): _207.CommitID;
                    fromAmino(object: _207.CommitIDAmino): _207.CommitID;
                    toAmino(message: _207.CommitID): _207.CommitIDAmino;
                    fromAminoMsg(object: _207.CommitIDAminoMsg): _207.CommitID;
                    toAminoMsg(message: _207.CommitID): _207.CommitIDAminoMsg;
                    fromProtoMsg(message: _207.CommitIDProtoMsg): _207.CommitID;
                    toProto(message: _207.CommitID): Uint8Array;
                    toProtoMsg(message: _207.CommitID): _207.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _427.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _209.GetNodeInfoRequest): Promise<_209.GetNodeInfoResponse>;
                    getSyncing(request?: _209.GetSyncingRequest): Promise<_209.GetSyncingResponse>;
                    getLatestBlock(request?: _209.GetLatestBlockRequest): Promise<_209.GetLatestBlockResponse>;
                    getBlockByHeight(request: _209.GetBlockByHeightRequest): Promise<_209.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _209.GetLatestValidatorSetRequest): Promise<_209.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _209.GetValidatorSetByHeightRequest): Promise<_209.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _209.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _209.GetValidatorSetByHeightRequest;
                    toJSON(message: _209.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_209.GetValidatorSetByHeightRequest>): _209.GetValidatorSetByHeightRequest;
                    fromAmino(object: _209.GetValidatorSetByHeightRequestAmino): _209.GetValidatorSetByHeightRequest;
                    toAmino(message: _209.GetValidatorSetByHeightRequest): _209.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _209.GetValidatorSetByHeightRequestAminoMsg): _209.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _209.GetValidatorSetByHeightRequest): _209.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _209.GetValidatorSetByHeightRequestProtoMsg): _209.GetValidatorSetByHeightRequest;
                    toProto(message: _209.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _209.GetValidatorSetByHeightRequest): _209.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _209.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _209.GetValidatorSetByHeightResponse;
                    toJSON(message: _209.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_209.GetValidatorSetByHeightResponse>): _209.GetValidatorSetByHeightResponse;
                    fromAmino(object: _209.GetValidatorSetByHeightResponseAmino): _209.GetValidatorSetByHeightResponse;
                    toAmino(message: _209.GetValidatorSetByHeightResponse): _209.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _209.GetValidatorSetByHeightResponseAminoMsg): _209.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _209.GetValidatorSetByHeightResponse): _209.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _209.GetValidatorSetByHeightResponseProtoMsg): _209.GetValidatorSetByHeightResponse;
                    toProto(message: _209.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _209.GetValidatorSetByHeightResponse): _209.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _209.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _209.GetLatestValidatorSetRequest;
                    toJSON(message: _209.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_209.GetLatestValidatorSetRequest>): _209.GetLatestValidatorSetRequest;
                    fromAmino(object: _209.GetLatestValidatorSetRequestAmino): _209.GetLatestValidatorSetRequest;
                    toAmino(message: _209.GetLatestValidatorSetRequest): _209.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _209.GetLatestValidatorSetRequestAminoMsg): _209.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _209.GetLatestValidatorSetRequest): _209.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _209.GetLatestValidatorSetRequestProtoMsg): _209.GetLatestValidatorSetRequest;
                    toProto(message: _209.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _209.GetLatestValidatorSetRequest): _209.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _209.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _209.GetLatestValidatorSetResponse;
                    toJSON(message: _209.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_209.GetLatestValidatorSetResponse>): _209.GetLatestValidatorSetResponse;
                    fromAmino(object: _209.GetLatestValidatorSetResponseAmino): _209.GetLatestValidatorSetResponse;
                    toAmino(message: _209.GetLatestValidatorSetResponse): _209.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _209.GetLatestValidatorSetResponseAminoMsg): _209.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _209.GetLatestValidatorSetResponse): _209.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _209.GetLatestValidatorSetResponseProtoMsg): _209.GetLatestValidatorSetResponse;
                    toProto(message: _209.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _209.GetLatestValidatorSetResponse): _209.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _209.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Validator;
                    fromJSON(object: any): _209.Validator;
                    toJSON(message: _209.Validator): unknown;
                    fromPartial(object: Partial<_209.Validator>): _209.Validator;
                    fromAmino(object: _209.ValidatorAmino): _209.Validator;
                    toAmino(message: _209.Validator): _209.ValidatorAmino;
                    fromAminoMsg(object: _209.ValidatorAminoMsg): _209.Validator;
                    toAminoMsg(message: _209.Validator): _209.ValidatorAminoMsg;
                    fromProtoMsg(message: _209.ValidatorProtoMsg): _209.Validator;
                    toProto(message: _209.Validator): Uint8Array;
                    toProtoMsg(message: _209.Validator): _209.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _209.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetBlockByHeightRequest;
                    fromJSON(object: any): _209.GetBlockByHeightRequest;
                    toJSON(message: _209.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_209.GetBlockByHeightRequest>): _209.GetBlockByHeightRequest;
                    fromAmino(object: _209.GetBlockByHeightRequestAmino): _209.GetBlockByHeightRequest;
                    toAmino(message: _209.GetBlockByHeightRequest): _209.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _209.GetBlockByHeightRequestAminoMsg): _209.GetBlockByHeightRequest;
                    toAminoMsg(message: _209.GetBlockByHeightRequest): _209.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _209.GetBlockByHeightRequestProtoMsg): _209.GetBlockByHeightRequest;
                    toProto(message: _209.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _209.GetBlockByHeightRequest): _209.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _209.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetBlockByHeightResponse;
                    fromJSON(object: any): _209.GetBlockByHeightResponse;
                    toJSON(message: _209.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_209.GetBlockByHeightResponse>): _209.GetBlockByHeightResponse;
                    fromAmino(object: _209.GetBlockByHeightResponseAmino): _209.GetBlockByHeightResponse;
                    toAmino(message: _209.GetBlockByHeightResponse): _209.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _209.GetBlockByHeightResponseAminoMsg): _209.GetBlockByHeightResponse;
                    toAminoMsg(message: _209.GetBlockByHeightResponse): _209.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _209.GetBlockByHeightResponseProtoMsg): _209.GetBlockByHeightResponse;
                    toProto(message: _209.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _209.GetBlockByHeightResponse): _209.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _209.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetLatestBlockRequest;
                    fromJSON(_: any): _209.GetLatestBlockRequest;
                    toJSON(_: _209.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_209.GetLatestBlockRequest>): _209.GetLatestBlockRequest;
                    fromAmino(_: _209.GetLatestBlockRequestAmino): _209.GetLatestBlockRequest;
                    toAmino(_: _209.GetLatestBlockRequest): _209.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _209.GetLatestBlockRequestAminoMsg): _209.GetLatestBlockRequest;
                    toAminoMsg(message: _209.GetLatestBlockRequest): _209.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _209.GetLatestBlockRequestProtoMsg): _209.GetLatestBlockRequest;
                    toProto(message: _209.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _209.GetLatestBlockRequest): _209.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _209.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetLatestBlockResponse;
                    fromJSON(object: any): _209.GetLatestBlockResponse;
                    toJSON(message: _209.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_209.GetLatestBlockResponse>): _209.GetLatestBlockResponse;
                    fromAmino(object: _209.GetLatestBlockResponseAmino): _209.GetLatestBlockResponse;
                    toAmino(message: _209.GetLatestBlockResponse): _209.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _209.GetLatestBlockResponseAminoMsg): _209.GetLatestBlockResponse;
                    toAminoMsg(message: _209.GetLatestBlockResponse): _209.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _209.GetLatestBlockResponseProtoMsg): _209.GetLatestBlockResponse;
                    toProto(message: _209.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _209.GetLatestBlockResponse): _209.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _209.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetSyncingRequest;
                    fromJSON(_: any): _209.GetSyncingRequest;
                    toJSON(_: _209.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_209.GetSyncingRequest>): _209.GetSyncingRequest;
                    fromAmino(_: _209.GetSyncingRequestAmino): _209.GetSyncingRequest;
                    toAmino(_: _209.GetSyncingRequest): _209.GetSyncingRequestAmino;
                    fromAminoMsg(object: _209.GetSyncingRequestAminoMsg): _209.GetSyncingRequest;
                    toAminoMsg(message: _209.GetSyncingRequest): _209.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _209.GetSyncingRequestProtoMsg): _209.GetSyncingRequest;
                    toProto(message: _209.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _209.GetSyncingRequest): _209.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _209.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetSyncingResponse;
                    fromJSON(object: any): _209.GetSyncingResponse;
                    toJSON(message: _209.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_209.GetSyncingResponse>): _209.GetSyncingResponse;
                    fromAmino(object: _209.GetSyncingResponseAmino): _209.GetSyncingResponse;
                    toAmino(message: _209.GetSyncingResponse): _209.GetSyncingResponseAmino;
                    fromAminoMsg(object: _209.GetSyncingResponseAminoMsg): _209.GetSyncingResponse;
                    toAminoMsg(message: _209.GetSyncingResponse): _209.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _209.GetSyncingResponseProtoMsg): _209.GetSyncingResponse;
                    toProto(message: _209.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _209.GetSyncingResponse): _209.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _209.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetNodeInfoRequest;
                    fromJSON(_: any): _209.GetNodeInfoRequest;
                    toJSON(_: _209.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_209.GetNodeInfoRequest>): _209.GetNodeInfoRequest;
                    fromAmino(_: _209.GetNodeInfoRequestAmino): _209.GetNodeInfoRequest;
                    toAmino(_: _209.GetNodeInfoRequest): _209.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _209.GetNodeInfoRequestAminoMsg): _209.GetNodeInfoRequest;
                    toAminoMsg(message: _209.GetNodeInfoRequest): _209.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _209.GetNodeInfoRequestProtoMsg): _209.GetNodeInfoRequest;
                    toProto(message: _209.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _209.GetNodeInfoRequest): _209.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _209.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.GetNodeInfoResponse;
                    fromJSON(object: any): _209.GetNodeInfoResponse;
                    toJSON(message: _209.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_209.GetNodeInfoResponse>): _209.GetNodeInfoResponse;
                    fromAmino(object: _209.GetNodeInfoResponseAmino): _209.GetNodeInfoResponse;
                    toAmino(message: _209.GetNodeInfoResponse): _209.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _209.GetNodeInfoResponseAminoMsg): _209.GetNodeInfoResponse;
                    toAminoMsg(message: _209.GetNodeInfoResponse): _209.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _209.GetNodeInfoResponseProtoMsg): _209.GetNodeInfoResponse;
                    toProto(message: _209.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _209.GetNodeInfoResponse): _209.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _209.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.VersionInfo;
                    fromJSON(object: any): _209.VersionInfo;
                    toJSON(message: _209.VersionInfo): unknown;
                    fromPartial(object: Partial<_209.VersionInfo>): _209.VersionInfo;
                    fromAmino(object: _209.VersionInfoAmino): _209.VersionInfo;
                    toAmino(message: _209.VersionInfo): _209.VersionInfoAmino;
                    fromAminoMsg(object: _209.VersionInfoAminoMsg): _209.VersionInfo;
                    toAminoMsg(message: _209.VersionInfo): _209.VersionInfoAminoMsg;
                    fromProtoMsg(message: _209.VersionInfoProtoMsg): _209.VersionInfo;
                    toProto(message: _209.VersionInfo): Uint8Array;
                    toProtoMsg(message: _209.VersionInfo): _209.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _209.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.Module;
                    fromJSON(object: any): _209.Module;
                    toJSON(message: _209.Module): unknown;
                    fromPartial(object: Partial<_209.Module>): _209.Module;
                    fromAmino(object: _209.ModuleAmino): _209.Module;
                    toAmino(message: _209.Module): _209.ModuleAmino;
                    fromAminoMsg(object: _209.ModuleAminoMsg): _209.Module;
                    toAminoMsg(message: _209.Module): _209.ModuleAminoMsg;
                    fromProtoMsg(message: _209.ModuleProtoMsg): _209.Module;
                    toProto(message: _209.Module): Uint8Array;
                    toProtoMsg(message: _209.Module): _209.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _210.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Coin;
                fromJSON(object: any): _210.Coin;
                toJSON(message: _210.Coin): unknown;
                fromPartial(object: Partial<_210.Coin>): _210.Coin;
                fromAmino(object: _210.CoinAmino): _210.Coin;
                toAmino(message: _210.Coin): _210.CoinAmino;
                fromAminoMsg(object: _210.CoinAminoMsg): _210.Coin;
                toAminoMsg(message: _210.Coin): _210.CoinAminoMsg;
                fromProtoMsg(message: _210.CoinProtoMsg): _210.Coin;
                toProto(message: _210.Coin): Uint8Array;
                toProtoMsg(message: _210.Coin): _210.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _210.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.DecCoin;
                fromJSON(object: any): _210.DecCoin;
                toJSON(message: _210.DecCoin): unknown;
                fromPartial(object: Partial<_210.DecCoin>): _210.DecCoin;
                fromAmino(object: _210.DecCoinAmino): _210.DecCoin;
                toAmino(message: _210.DecCoin): _210.DecCoinAmino;
                fromAminoMsg(object: _210.DecCoinAminoMsg): _210.DecCoin;
                toAminoMsg(message: _210.DecCoin): _210.DecCoinAminoMsg;
                fromProtoMsg(message: _210.DecCoinProtoMsg): _210.DecCoin;
                toProto(message: _210.DecCoin): Uint8Array;
                toProtoMsg(message: _210.DecCoin): _210.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _210.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.IntProto;
                fromJSON(object: any): _210.IntProto;
                toJSON(message: _210.IntProto): unknown;
                fromPartial(object: Partial<_210.IntProto>): _210.IntProto;
                fromAmino(object: _210.IntProtoAmino): _210.IntProto;
                toAmino(message: _210.IntProto): _210.IntProtoAmino;
                fromAminoMsg(object: _210.IntProtoAminoMsg): _210.IntProto;
                toAminoMsg(message: _210.IntProto): _210.IntProtoAminoMsg;
                fromProtoMsg(message: _210.IntProtoProtoMsg): _210.IntProto;
                toProto(message: _210.IntProto): Uint8Array;
                toProtoMsg(message: _210.IntProto): _210.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _210.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.DecProto;
                fromJSON(object: any): _210.DecProto;
                toJSON(message: _210.DecProto): unknown;
                fromPartial(object: Partial<_210.DecProto>): _210.DecProto;
                fromAmino(object: _210.DecProtoAmino): _210.DecProto;
                toAmino(message: _210.DecProto): _210.DecProtoAmino;
                fromAminoMsg(object: _210.DecProtoAminoMsg): _210.DecProto;
                toAminoMsg(message: _210.DecProto): _210.DecProtoAminoMsg;
                fromProtoMsg(message: _210.DecProtoProtoMsg): _210.DecProto;
                toProto(message: _210.DecProto): Uint8Array;
                toProtoMsg(message: _210.DecProto): _210.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _212.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GenesisOwners;
                fromJSON(object: any): _212.GenesisOwners;
                toJSON(message: _212.GenesisOwners): unknown;
                fromPartial(object: Partial<_212.GenesisOwners>): _212.GenesisOwners;
                fromAmino(object: _212.GenesisOwnersAmino): _212.GenesisOwners;
                toAmino(message: _212.GenesisOwners): _212.GenesisOwnersAmino;
                fromAminoMsg(object: _212.GenesisOwnersAminoMsg): _212.GenesisOwners;
                toAminoMsg(message: _212.GenesisOwners): _212.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _212.GenesisOwnersProtoMsg): _212.GenesisOwners;
                toProto(message: _212.GenesisOwners): Uint8Array;
                toProtoMsg(message: _212.GenesisOwners): _212.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _212.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.GenesisState;
                fromJSON(object: any): _212.GenesisState;
                toJSON(message: _212.GenesisState): unknown;
                fromPartial(object: Partial<_212.GenesisState>): _212.GenesisState;
                fromAmino(object: _212.GenesisStateAmino): _212.GenesisState;
                toAmino(message: _212.GenesisState): _212.GenesisStateAmino;
                fromAminoMsg(object: _212.GenesisStateAminoMsg): _212.GenesisState;
                toAminoMsg(message: _212.GenesisState): _212.GenesisStateAminoMsg;
                fromProtoMsg(message: _212.GenesisStateProtoMsg): _212.GenesisState;
                toProto(message: _212.GenesisState): Uint8Array;
                toProtoMsg(message: _212.GenesisState): _212.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _211.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Capability;
                fromJSON(object: any): _211.Capability;
                toJSON(message: _211.Capability): unknown;
                fromPartial(object: Partial<_211.Capability>): _211.Capability;
                fromAmino(object: _211.CapabilityAmino): _211.Capability;
                toAmino(message: _211.Capability): _211.CapabilityAmino;
                fromAminoMsg(object: _211.CapabilityAminoMsg): _211.Capability;
                toAminoMsg(message: _211.Capability): _211.CapabilityAminoMsg;
                fromProtoMsg(message: _211.CapabilityProtoMsg): _211.Capability;
                toProto(message: _211.Capability): Uint8Array;
                toProtoMsg(message: _211.Capability): _211.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _211.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Owner;
                fromJSON(object: any): _211.Owner;
                toJSON(message: _211.Owner): unknown;
                fromPartial(object: Partial<_211.Owner>): _211.Owner;
                fromAmino(object: _211.OwnerAmino): _211.Owner;
                toAmino(message: _211.Owner): _211.OwnerAmino;
                fromAminoMsg(object: _211.OwnerAminoMsg): _211.Owner;
                toAminoMsg(message: _211.Owner): _211.OwnerAminoMsg;
                fromProtoMsg(message: _211.OwnerProtoMsg): _211.Owner;
                toProto(message: _211.Owner): Uint8Array;
                toProtoMsg(message: _211.Owner): _211.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _211.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.CapabilityOwners;
                fromJSON(object: any): _211.CapabilityOwners;
                toJSON(message: _211.CapabilityOwners): unknown;
                fromPartial(object: Partial<_211.CapabilityOwners>): _211.CapabilityOwners;
                fromAmino(object: _211.CapabilityOwnersAmino): _211.CapabilityOwners;
                toAmino(message: _211.CapabilityOwners): _211.CapabilityOwnersAmino;
                fromAminoMsg(object: _211.CapabilityOwnersAminoMsg): _211.CapabilityOwners;
                toAminoMsg(message: _211.CapabilityOwners): _211.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _211.CapabilityOwnersProtoMsg): _211.CapabilityOwners;
                toProto(message: _211.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _211.CapabilityOwners): _211.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _443.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _214.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _214.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _214.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _214.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _214.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _214.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _214.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _214.MsgVerifyInvariant) => _214.MsgVerifyInvariantAmino;
                    fromAmino: (object: _214.MsgVerifyInvariantAmino) => _214.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _214.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MsgVerifyInvariant;
                fromJSON(object: any): _214.MsgVerifyInvariant;
                toJSON(message: _214.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_214.MsgVerifyInvariant>): _214.MsgVerifyInvariant;
                fromAmino(object: _214.MsgVerifyInvariantAmino): _214.MsgVerifyInvariant;
                toAmino(message: _214.MsgVerifyInvariant): _214.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _214.MsgVerifyInvariantAminoMsg): _214.MsgVerifyInvariant;
                toAminoMsg(message: _214.MsgVerifyInvariant): _214.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _214.MsgVerifyInvariantProtoMsg): _214.MsgVerifyInvariant;
                toProto(message: _214.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _214.MsgVerifyInvariant): _214.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _214.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MsgVerifyInvariantResponse;
                fromJSON(_: any): _214.MsgVerifyInvariantResponse;
                toJSON(_: _214.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_214.MsgVerifyInvariantResponse>): _214.MsgVerifyInvariantResponse;
                fromAmino(_: _214.MsgVerifyInvariantResponseAmino): _214.MsgVerifyInvariantResponse;
                toAmino(_: _214.MsgVerifyInvariantResponse): _214.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _214.MsgVerifyInvariantResponseAminoMsg): _214.MsgVerifyInvariantResponse;
                toAminoMsg(message: _214.MsgVerifyInvariantResponse): _214.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _214.MsgVerifyInvariantResponseProtoMsg): _214.MsgVerifyInvariantResponse;
                toProto(message: _214.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _214.MsgVerifyInvariantResponse): _214.MsgVerifyInvariantResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _213.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.GenesisState;
                fromJSON(object: any): _213.GenesisState;
                toJSON(message: _213.GenesisState): unknown;
                fromPartial(object: Partial<_213.GenesisState>): _213.GenesisState;
                fromAmino(object: _213.GenesisStateAmino): _213.GenesisState;
                toAmino(message: _213.GenesisState): _213.GenesisStateAmino;
                fromAminoMsg(object: _213.GenesisStateAminoMsg): _213.GenesisState;
                toAminoMsg(message: _213.GenesisState): _213.GenesisStateAminoMsg;
                fromProtoMsg(message: _213.GenesisStateProtoMsg): _213.GenesisState;
                toProto(message: _213.GenesisState): Uint8Array;
                toProtoMsg(message: _213.GenesisState): _213.GenesisStateProtoMsg;
            };
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _215.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.PubKey;
                fromJSON(object: any): _215.PubKey;
                toJSON(message: _215.PubKey): unknown;
                fromPartial(object: Partial<_215.PubKey>): _215.PubKey;
                fromAmino(object: _215.PubKeyAmino): _215.PubKey;
                toAmino(message: _215.PubKey): _215.PubKeyAmino;
                fromAminoMsg(object: _215.PubKeyAminoMsg): _215.PubKey;
                toAminoMsg(message: _215.PubKey): _215.PubKeyAminoMsg;
                fromProtoMsg(message: _215.PubKeyProtoMsg): _215.PubKey;
                toProto(message: _215.PubKey): Uint8Array;
                toProtoMsg(message: _215.PubKey): _215.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _215.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.PrivKey;
                fromJSON(object: any): _215.PrivKey;
                toJSON(message: _215.PrivKey): unknown;
                fromPartial(object: Partial<_215.PrivKey>): _215.PrivKey;
                fromAmino(object: _215.PrivKeyAmino): _215.PrivKey;
                toAmino(message: _215.PrivKey): _215.PrivKeyAmino;
                fromAminoMsg(object: _215.PrivKeyAminoMsg): _215.PrivKey;
                toAminoMsg(message: _215.PrivKey): _215.PrivKeyAminoMsg;
                fromProtoMsg(message: _215.PrivKeyProtoMsg): _215.PrivKey;
                toProto(message: _215.PrivKey): Uint8Array;
                toProtoMsg(message: _215.PrivKey): _215.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _216.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.BIP44Params;
                    fromJSON(object: any): _216.BIP44Params;
                    toJSON(message: _216.BIP44Params): unknown;
                    fromPartial(object: Partial<_216.BIP44Params>): _216.BIP44Params;
                    fromAmino(object: _216.BIP44ParamsAmino): _216.BIP44Params;
                    toAmino(message: _216.BIP44Params): _216.BIP44ParamsAmino;
                    fromAminoMsg(object: _216.BIP44ParamsAminoMsg): _216.BIP44Params;
                    toAminoMsg(message: _216.BIP44Params): _216.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _216.BIP44ParamsProtoMsg): _216.BIP44Params;
                    toProto(message: _216.BIP44Params): Uint8Array;
                    toProtoMsg(message: _216.BIP44Params): _216.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _217.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Record;
                    fromJSON(object: any): _217.Record;
                    toJSON(message: _217.Record): unknown;
                    fromPartial(object: Partial<_217.Record>): _217.Record;
                    fromAmino(object: _217.RecordAmino): _217.Record;
                    toAmino(message: _217.Record): _217.RecordAmino;
                    fromAminoMsg(object: _217.RecordAminoMsg): _217.Record;
                    toAminoMsg(message: _217.Record): _217.RecordAminoMsg;
                    fromProtoMsg(message: _217.RecordProtoMsg): _217.Record;
                    toProto(message: _217.Record): Uint8Array;
                    toProtoMsg(message: _217.Record): _217.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _217.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Record_Local;
                    fromJSON(object: any): _217.Record_Local;
                    toJSON(message: _217.Record_Local): unknown;
                    fromPartial(object: Partial<_217.Record_Local>): _217.Record_Local;
                    fromAmino(object: _217.Record_LocalAmino): _217.Record_Local;
                    toAmino(message: _217.Record_Local): _217.Record_LocalAmino;
                    fromAminoMsg(object: _217.Record_LocalAminoMsg): _217.Record_Local;
                    toAminoMsg(message: _217.Record_Local): _217.Record_LocalAminoMsg;
                    fromProtoMsg(message: _217.Record_LocalProtoMsg): _217.Record_Local;
                    toProto(message: _217.Record_Local): Uint8Array;
                    toProtoMsg(message: _217.Record_Local): _217.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _217.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Record_Ledger;
                    fromJSON(object: any): _217.Record_Ledger;
                    toJSON(message: _217.Record_Ledger): unknown;
                    fromPartial(object: Partial<_217.Record_Ledger>): _217.Record_Ledger;
                    fromAmino(object: _217.Record_LedgerAmino): _217.Record_Ledger;
                    toAmino(message: _217.Record_Ledger): _217.Record_LedgerAmino;
                    fromAminoMsg(object: _217.Record_LedgerAminoMsg): _217.Record_Ledger;
                    toAminoMsg(message: _217.Record_Ledger): _217.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _217.Record_LedgerProtoMsg): _217.Record_Ledger;
                    toProto(message: _217.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _217.Record_Ledger): _217.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _217.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Record_Multi;
                    fromJSON(_: any): _217.Record_Multi;
                    toJSON(_: _217.Record_Multi): unknown;
                    fromPartial(_: Partial<_217.Record_Multi>): _217.Record_Multi;
                    fromAmino(_: _217.Record_MultiAmino): _217.Record_Multi;
                    toAmino(_: _217.Record_Multi): _217.Record_MultiAmino;
                    fromAminoMsg(object: _217.Record_MultiAminoMsg): _217.Record_Multi;
                    toAminoMsg(message: _217.Record_Multi): _217.Record_MultiAminoMsg;
                    fromProtoMsg(message: _217.Record_MultiProtoMsg): _217.Record_Multi;
                    toProto(message: _217.Record_Multi): Uint8Array;
                    toProtoMsg(message: _217.Record_Multi): _217.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _217.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.Record_Offline;
                    fromJSON(_: any): _217.Record_Offline;
                    toJSON(_: _217.Record_Offline): unknown;
                    fromPartial(_: Partial<_217.Record_Offline>): _217.Record_Offline;
                    fromAmino(_: _217.Record_OfflineAmino): _217.Record_Offline;
                    toAmino(_: _217.Record_Offline): _217.Record_OfflineAmino;
                    fromAminoMsg(object: _217.Record_OfflineAminoMsg): _217.Record_Offline;
                    toAminoMsg(message: _217.Record_Offline): _217.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _217.Record_OfflineProtoMsg): _217.Record_Offline;
                    toProto(message: _217.Record_Offline): Uint8Array;
                    toProtoMsg(message: _217.Record_Offline): _217.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _218.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.LegacyAminoPubKey;
                fromJSON(object: any): _218.LegacyAminoPubKey;
                toJSON(message: _218.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_218.LegacyAminoPubKey>): _218.LegacyAminoPubKey;
                fromAmino(object: _218.LegacyAminoPubKeyAmino): _218.LegacyAminoPubKey;
                toAmino(message: _218.LegacyAminoPubKey): _218.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _218.LegacyAminoPubKeyAminoMsg): _218.LegacyAminoPubKey;
                toAminoMsg(message: _218.LegacyAminoPubKey): _218.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _218.LegacyAminoPubKeyProtoMsg): _218.LegacyAminoPubKey;
                toProto(message: _218.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _218.LegacyAminoPubKey): _218.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _219.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.PubKey;
                fromJSON(object: any): _219.PubKey;
                toJSON(message: _219.PubKey): unknown;
                fromPartial(object: Partial<_219.PubKey>): _219.PubKey;
                fromAmino(object: _219.PubKeyAmino): _219.PubKey;
                toAmino(message: _219.PubKey): _219.PubKeyAmino;
                fromAminoMsg(object: _219.PubKeyAminoMsg): _219.PubKey;
                toAminoMsg(message: _219.PubKey): _219.PubKeyAminoMsg;
                fromProtoMsg(message: _219.PubKeyProtoMsg): _219.PubKey;
                toProto(message: _219.PubKey): Uint8Array;
                toProtoMsg(message: _219.PubKey): _219.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _219.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.PrivKey;
                fromJSON(object: any): _219.PrivKey;
                toJSON(message: _219.PrivKey): unknown;
                fromPartial(object: Partial<_219.PrivKey>): _219.PrivKey;
                fromAmino(object: _219.PrivKeyAmino): _219.PrivKey;
                toAmino(message: _219.PrivKey): _219.PrivKeyAmino;
                fromAminoMsg(object: _219.PrivKeyAminoMsg): _219.PrivKey;
                toAminoMsg(message: _219.PrivKey): _219.PrivKeyAminoMsg;
                fromProtoMsg(message: _219.PrivKeyProtoMsg): _219.PrivKey;
                toProto(message: _219.PrivKey): Uint8Array;
                toProtoMsg(message: _219.PrivKey): _219.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _220.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.PubKey;
                fromJSON(object: any): _220.PubKey;
                toJSON(message: _220.PubKey): unknown;
                fromPartial(object: Partial<_220.PubKey>): _220.PubKey;
                fromAmino(object: _220.PubKeyAmino): _220.PubKey;
                toAmino(message: _220.PubKey): _220.PubKeyAmino;
                fromAminoMsg(object: _220.PubKeyAminoMsg): _220.PubKey;
                toAminoMsg(message: _220.PubKey): _220.PubKeyAminoMsg;
                fromProtoMsg(message: _220.PubKeyProtoMsg): _220.PubKey;
                toProto(message: _220.PubKey): Uint8Array;
                toProtoMsg(message: _220.PubKey): _220.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _220.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.PrivKey;
                fromJSON(object: any): _220.PrivKey;
                toJSON(message: _220.PrivKey): unknown;
                fromPartial(object: Partial<_220.PrivKey>): _220.PrivKey;
                fromAmino(object: _220.PrivKeyAmino): _220.PrivKey;
                toAmino(message: _220.PrivKey): _220.PrivKeyAmino;
                fromAminoMsg(object: _220.PrivKeyAminoMsg): _220.PrivKey;
                toAminoMsg(message: _220.PrivKey): _220.PrivKeyAminoMsg;
                fromProtoMsg(message: _220.PrivKeyProtoMsg): _220.PrivKey;
                toProto(message: _220.PrivKey): Uint8Array;
                toProtoMsg(message: _220.PrivKey): _220.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _444.MsgClientImpl;
            QueryClientImpl: typeof _428.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _223.QueryParamsRequest): Promise<_223.QueryParamsResponse>;
                validatorOutstandingRewards(request: _223.QueryValidatorOutstandingRewardsRequest): Promise<_223.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _223.QueryValidatorCommissionRequest): Promise<_223.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _223.QueryValidatorSlashesRequest): Promise<_223.QueryValidatorSlashesResponse>;
                delegationRewards(request: _223.QueryDelegationRewardsRequest): Promise<_223.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _223.QueryDelegationTotalRewardsRequest): Promise<_223.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _223.QueryDelegatorValidatorsRequest): Promise<_223.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _223.QueryDelegatorWithdrawAddressRequest): Promise<_223.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _223.QueryCommunityPoolRequest): Promise<_223.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _224.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _224.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _224.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _224.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _224.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _224.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _224.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _224.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _224.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _224.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _224.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _224.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _224.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _224.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _224.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _224.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _224.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _224.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _224.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _224.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _224.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _224.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _224.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _224.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _224.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _224.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _224.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _224.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _224.MsgSetWithdrawAddress) => _224.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _224.MsgSetWithdrawAddressAmino) => _224.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _224.MsgWithdrawDelegatorReward) => _224.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _224.MsgWithdrawDelegatorRewardAmino) => _224.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _224.MsgWithdrawValidatorCommission) => _224.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _224.MsgWithdrawValidatorCommissionAmino) => _224.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _224.MsgFundCommunityPool) => _224.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _224.MsgFundCommunityPoolAmino) => _224.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _224.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgSetWithdrawAddress;
                fromJSON(object: any): _224.MsgSetWithdrawAddress;
                toJSON(message: _224.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_224.MsgSetWithdrawAddress>): _224.MsgSetWithdrawAddress;
                fromAmino(object: _224.MsgSetWithdrawAddressAmino): _224.MsgSetWithdrawAddress;
                toAmino(message: _224.MsgSetWithdrawAddress): _224.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _224.MsgSetWithdrawAddressAminoMsg): _224.MsgSetWithdrawAddress;
                toAminoMsg(message: _224.MsgSetWithdrawAddress): _224.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _224.MsgSetWithdrawAddressProtoMsg): _224.MsgSetWithdrawAddress;
                toProto(message: _224.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _224.MsgSetWithdrawAddress): _224.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _224.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _224.MsgSetWithdrawAddressResponse;
                toJSON(_: _224.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_224.MsgSetWithdrawAddressResponse>): _224.MsgSetWithdrawAddressResponse;
                fromAmino(_: _224.MsgSetWithdrawAddressResponseAmino): _224.MsgSetWithdrawAddressResponse;
                toAmino(_: _224.MsgSetWithdrawAddressResponse): _224.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _224.MsgSetWithdrawAddressResponseAminoMsg): _224.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _224.MsgSetWithdrawAddressResponse): _224.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _224.MsgSetWithdrawAddressResponseProtoMsg): _224.MsgSetWithdrawAddressResponse;
                toProto(message: _224.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _224.MsgSetWithdrawAddressResponse): _224.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _224.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _224.MsgWithdrawDelegatorReward;
                toJSON(message: _224.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_224.MsgWithdrawDelegatorReward>): _224.MsgWithdrawDelegatorReward;
                fromAmino(object: _224.MsgWithdrawDelegatorRewardAmino): _224.MsgWithdrawDelegatorReward;
                toAmino(message: _224.MsgWithdrawDelegatorReward): _224.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _224.MsgWithdrawDelegatorRewardAminoMsg): _224.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _224.MsgWithdrawDelegatorReward): _224.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _224.MsgWithdrawDelegatorRewardProtoMsg): _224.MsgWithdrawDelegatorReward;
                toProto(message: _224.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _224.MsgWithdrawDelegatorReward): _224.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _224.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _224.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _224.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_224.MsgWithdrawDelegatorRewardResponse>): _224.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _224.MsgWithdrawDelegatorRewardResponseAmino): _224.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _224.MsgWithdrawDelegatorRewardResponse): _224.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _224.MsgWithdrawDelegatorRewardResponseAminoMsg): _224.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _224.MsgWithdrawDelegatorRewardResponse): _224.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _224.MsgWithdrawDelegatorRewardResponseProtoMsg): _224.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _224.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _224.MsgWithdrawDelegatorRewardResponse): _224.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _224.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _224.MsgWithdrawValidatorCommission;
                toJSON(message: _224.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_224.MsgWithdrawValidatorCommission>): _224.MsgWithdrawValidatorCommission;
                fromAmino(object: _224.MsgWithdrawValidatorCommissionAmino): _224.MsgWithdrawValidatorCommission;
                toAmino(message: _224.MsgWithdrawValidatorCommission): _224.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _224.MsgWithdrawValidatorCommissionAminoMsg): _224.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _224.MsgWithdrawValidatorCommission): _224.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _224.MsgWithdrawValidatorCommissionProtoMsg): _224.MsgWithdrawValidatorCommission;
                toProto(message: _224.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _224.MsgWithdrawValidatorCommission): _224.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _224.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _224.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _224.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_224.MsgWithdrawValidatorCommissionResponse>): _224.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _224.MsgWithdrawValidatorCommissionResponseAmino): _224.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _224.MsgWithdrawValidatorCommissionResponse): _224.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _224.MsgWithdrawValidatorCommissionResponseAminoMsg): _224.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _224.MsgWithdrawValidatorCommissionResponse): _224.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _224.MsgWithdrawValidatorCommissionResponseProtoMsg): _224.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _224.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _224.MsgWithdrawValidatorCommissionResponse): _224.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _224.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgFundCommunityPool;
                fromJSON(object: any): _224.MsgFundCommunityPool;
                toJSON(message: _224.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_224.MsgFundCommunityPool>): _224.MsgFundCommunityPool;
                fromAmino(object: _224.MsgFundCommunityPoolAmino): _224.MsgFundCommunityPool;
                toAmino(message: _224.MsgFundCommunityPool): _224.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _224.MsgFundCommunityPoolAminoMsg): _224.MsgFundCommunityPool;
                toAminoMsg(message: _224.MsgFundCommunityPool): _224.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _224.MsgFundCommunityPoolProtoMsg): _224.MsgFundCommunityPool;
                toProto(message: _224.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _224.MsgFundCommunityPool): _224.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _224.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _224.MsgFundCommunityPoolResponse;
                toJSON(_: _224.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_224.MsgFundCommunityPoolResponse>): _224.MsgFundCommunityPoolResponse;
                fromAmino(_: _224.MsgFundCommunityPoolResponseAmino): _224.MsgFundCommunityPoolResponse;
                toAmino(_: _224.MsgFundCommunityPoolResponse): _224.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _224.MsgFundCommunityPoolResponseAminoMsg): _224.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _224.MsgFundCommunityPoolResponse): _224.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _224.MsgFundCommunityPoolResponseProtoMsg): _224.MsgFundCommunityPoolResponse;
                toProto(message: _224.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _224.MsgFundCommunityPoolResponse): _224.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _223.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryParamsRequest;
                fromJSON(_: any): _223.QueryParamsRequest;
                toJSON(_: _223.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_223.QueryParamsRequest>): _223.QueryParamsRequest;
                fromAmino(_: _223.QueryParamsRequestAmino): _223.QueryParamsRequest;
                toAmino(_: _223.QueryParamsRequest): _223.QueryParamsRequestAmino;
                fromAminoMsg(object: _223.QueryParamsRequestAminoMsg): _223.QueryParamsRequest;
                toAminoMsg(message: _223.QueryParamsRequest): _223.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _223.QueryParamsRequestProtoMsg): _223.QueryParamsRequest;
                toProto(message: _223.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryParamsRequest): _223.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _223.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryParamsResponse;
                fromJSON(object: any): _223.QueryParamsResponse;
                toJSON(message: _223.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_223.QueryParamsResponse>): _223.QueryParamsResponse;
                fromAmino(object: _223.QueryParamsResponseAmino): _223.QueryParamsResponse;
                toAmino(message: _223.QueryParamsResponse): _223.QueryParamsResponseAmino;
                fromAminoMsg(object: _223.QueryParamsResponseAminoMsg): _223.QueryParamsResponse;
                toAminoMsg(message: _223.QueryParamsResponse): _223.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _223.QueryParamsResponseProtoMsg): _223.QueryParamsResponse;
                toProto(message: _223.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryParamsResponse): _223.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _223.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _223.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _223.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_223.QueryValidatorOutstandingRewardsRequest>): _223.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _223.QueryValidatorOutstandingRewardsRequestAmino): _223.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _223.QueryValidatorOutstandingRewardsRequest): _223.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _223.QueryValidatorOutstandingRewardsRequestAminoMsg): _223.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _223.QueryValidatorOutstandingRewardsRequest): _223.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorOutstandingRewardsRequestProtoMsg): _223.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _223.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorOutstandingRewardsRequest): _223.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _223.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _223.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _223.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_223.QueryValidatorOutstandingRewardsResponse>): _223.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _223.QueryValidatorOutstandingRewardsResponseAmino): _223.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _223.QueryValidatorOutstandingRewardsResponse): _223.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _223.QueryValidatorOutstandingRewardsResponseAminoMsg): _223.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _223.QueryValidatorOutstandingRewardsResponse): _223.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorOutstandingRewardsResponseProtoMsg): _223.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _223.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorOutstandingRewardsResponse): _223.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _223.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorCommissionRequest;
                fromJSON(object: any): _223.QueryValidatorCommissionRequest;
                toJSON(message: _223.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_223.QueryValidatorCommissionRequest>): _223.QueryValidatorCommissionRequest;
                fromAmino(object: _223.QueryValidatorCommissionRequestAmino): _223.QueryValidatorCommissionRequest;
                toAmino(message: _223.QueryValidatorCommissionRequest): _223.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _223.QueryValidatorCommissionRequestAminoMsg): _223.QueryValidatorCommissionRequest;
                toAminoMsg(message: _223.QueryValidatorCommissionRequest): _223.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorCommissionRequestProtoMsg): _223.QueryValidatorCommissionRequest;
                toProto(message: _223.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorCommissionRequest): _223.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _223.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorCommissionResponse;
                fromJSON(object: any): _223.QueryValidatorCommissionResponse;
                toJSON(message: _223.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_223.QueryValidatorCommissionResponse>): _223.QueryValidatorCommissionResponse;
                fromAmino(object: _223.QueryValidatorCommissionResponseAmino): _223.QueryValidatorCommissionResponse;
                toAmino(message: _223.QueryValidatorCommissionResponse): _223.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _223.QueryValidatorCommissionResponseAminoMsg): _223.QueryValidatorCommissionResponse;
                toAminoMsg(message: _223.QueryValidatorCommissionResponse): _223.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorCommissionResponseProtoMsg): _223.QueryValidatorCommissionResponse;
                toProto(message: _223.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorCommissionResponse): _223.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _223.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorSlashesRequest;
                fromJSON(object: any): _223.QueryValidatorSlashesRequest;
                toJSON(message: _223.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_223.QueryValidatorSlashesRequest>): _223.QueryValidatorSlashesRequest;
                fromAmino(object: _223.QueryValidatorSlashesRequestAmino): _223.QueryValidatorSlashesRequest;
                toAmino(message: _223.QueryValidatorSlashesRequest): _223.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _223.QueryValidatorSlashesRequestAminoMsg): _223.QueryValidatorSlashesRequest;
                toAminoMsg(message: _223.QueryValidatorSlashesRequest): _223.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorSlashesRequestProtoMsg): _223.QueryValidatorSlashesRequest;
                toProto(message: _223.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorSlashesRequest): _223.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _223.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryValidatorSlashesResponse;
                fromJSON(object: any): _223.QueryValidatorSlashesResponse;
                toJSON(message: _223.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_223.QueryValidatorSlashesResponse>): _223.QueryValidatorSlashesResponse;
                fromAmino(object: _223.QueryValidatorSlashesResponseAmino): _223.QueryValidatorSlashesResponse;
                toAmino(message: _223.QueryValidatorSlashesResponse): _223.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _223.QueryValidatorSlashesResponseAminoMsg): _223.QueryValidatorSlashesResponse;
                toAminoMsg(message: _223.QueryValidatorSlashesResponse): _223.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _223.QueryValidatorSlashesResponseProtoMsg): _223.QueryValidatorSlashesResponse;
                toProto(message: _223.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _223.QueryValidatorSlashesResponse): _223.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _223.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegationRewardsRequest;
                fromJSON(object: any): _223.QueryDelegationRewardsRequest;
                toJSON(message: _223.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_223.QueryDelegationRewardsRequest>): _223.QueryDelegationRewardsRequest;
                fromAmino(object: _223.QueryDelegationRewardsRequestAmino): _223.QueryDelegationRewardsRequest;
                toAmino(message: _223.QueryDelegationRewardsRequest): _223.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _223.QueryDelegationRewardsRequestAminoMsg): _223.QueryDelegationRewardsRequest;
                toAminoMsg(message: _223.QueryDelegationRewardsRequest): _223.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _223.QueryDelegationRewardsRequestProtoMsg): _223.QueryDelegationRewardsRequest;
                toProto(message: _223.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryDelegationRewardsRequest): _223.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _223.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegationRewardsResponse;
                fromJSON(object: any): _223.QueryDelegationRewardsResponse;
                toJSON(message: _223.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_223.QueryDelegationRewardsResponse>): _223.QueryDelegationRewardsResponse;
                fromAmino(object: _223.QueryDelegationRewardsResponseAmino): _223.QueryDelegationRewardsResponse;
                toAmino(message: _223.QueryDelegationRewardsResponse): _223.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _223.QueryDelegationRewardsResponseAminoMsg): _223.QueryDelegationRewardsResponse;
                toAminoMsg(message: _223.QueryDelegationRewardsResponse): _223.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _223.QueryDelegationRewardsResponseProtoMsg): _223.QueryDelegationRewardsResponse;
                toProto(message: _223.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryDelegationRewardsResponse): _223.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _223.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _223.QueryDelegationTotalRewardsRequest;
                toJSON(message: _223.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_223.QueryDelegationTotalRewardsRequest>): _223.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _223.QueryDelegationTotalRewardsRequestAmino): _223.QueryDelegationTotalRewardsRequest;
                toAmino(message: _223.QueryDelegationTotalRewardsRequest): _223.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _223.QueryDelegationTotalRewardsRequestAminoMsg): _223.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _223.QueryDelegationTotalRewardsRequest): _223.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _223.QueryDelegationTotalRewardsRequestProtoMsg): _223.QueryDelegationTotalRewardsRequest;
                toProto(message: _223.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryDelegationTotalRewardsRequest): _223.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _223.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _223.QueryDelegationTotalRewardsResponse;
                toJSON(message: _223.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_223.QueryDelegationTotalRewardsResponse>): _223.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _223.QueryDelegationTotalRewardsResponseAmino): _223.QueryDelegationTotalRewardsResponse;
                toAmino(message: _223.QueryDelegationTotalRewardsResponse): _223.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _223.QueryDelegationTotalRewardsResponseAminoMsg): _223.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _223.QueryDelegationTotalRewardsResponse): _223.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _223.QueryDelegationTotalRewardsResponseProtoMsg): _223.QueryDelegationTotalRewardsResponse;
                toProto(message: _223.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryDelegationTotalRewardsResponse): _223.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _223.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _223.QueryDelegatorValidatorsRequest;
                toJSON(message: _223.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_223.QueryDelegatorValidatorsRequest>): _223.QueryDelegatorValidatorsRequest;
                fromAmino(object: _223.QueryDelegatorValidatorsRequestAmino): _223.QueryDelegatorValidatorsRequest;
                toAmino(message: _223.QueryDelegatorValidatorsRequest): _223.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _223.QueryDelegatorValidatorsRequestAminoMsg): _223.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _223.QueryDelegatorValidatorsRequest): _223.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _223.QueryDelegatorValidatorsRequestProtoMsg): _223.QueryDelegatorValidatorsRequest;
                toProto(message: _223.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _223.QueryDelegatorValidatorsRequest): _223.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _223.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _223.QueryDelegatorValidatorsResponse;
                toJSON(message: _223.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_223.QueryDelegatorValidatorsResponse>): _223.QueryDelegatorValidatorsResponse;
                fromAmino(object: _223.QueryDelegatorValidatorsResponseAmino): _223.QueryDelegatorValidatorsResponse;
                toAmino(message: _223.QueryDelegatorValidatorsResponse): _223.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _223.QueryDelegatorValidatorsResponseAminoMsg): _223.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _223.QueryDelegatorValidatorsResponse): _223.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _223.QueryDelegatorValidatorsResponseProtoMsg): _223.QueryDelegatorValidatorsResponse;
                toProto(message: _223.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _223.QueryDelegatorValidatorsResponse): _223.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _223.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _223.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _223.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_223.QueryDelegatorWithdrawAddressRequest>): _223.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _223.QueryDelegatorWithdrawAddressRequestAmino): _223.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _223.QueryDelegatorWithdrawAddressRequest): _223.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _223.QueryDelegatorWithdrawAddressRequestAminoMsg): _223.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _223.QueryDelegatorWithdrawAddressRequest): _223.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _223.QueryDelegatorWithdrawAddressRequestProtoMsg): _223.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _223.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _223.QueryDelegatorWithdrawAddressRequest): _223.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _223.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _223.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _223.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_223.QueryDelegatorWithdrawAddressResponse>): _223.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _223.QueryDelegatorWithdrawAddressResponseAmino): _223.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _223.QueryDelegatorWithdrawAddressResponse): _223.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _223.QueryDelegatorWithdrawAddressResponseAminoMsg): _223.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _223.QueryDelegatorWithdrawAddressResponse): _223.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _223.QueryDelegatorWithdrawAddressResponseProtoMsg): _223.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _223.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _223.QueryDelegatorWithdrawAddressResponse): _223.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _223.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryCommunityPoolRequest;
                fromJSON(_: any): _223.QueryCommunityPoolRequest;
                toJSON(_: _223.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_223.QueryCommunityPoolRequest>): _223.QueryCommunityPoolRequest;
                fromAmino(_: _223.QueryCommunityPoolRequestAmino): _223.QueryCommunityPoolRequest;
                toAmino(_: _223.QueryCommunityPoolRequest): _223.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _223.QueryCommunityPoolRequestAminoMsg): _223.QueryCommunityPoolRequest;
                toAminoMsg(message: _223.QueryCommunityPoolRequest): _223.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _223.QueryCommunityPoolRequestProtoMsg): _223.QueryCommunityPoolRequest;
                toProto(message: _223.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _223.QueryCommunityPoolRequest): _223.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _223.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.QueryCommunityPoolResponse;
                fromJSON(object: any): _223.QueryCommunityPoolResponse;
                toJSON(message: _223.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_223.QueryCommunityPoolResponse>): _223.QueryCommunityPoolResponse;
                fromAmino(object: _223.QueryCommunityPoolResponseAmino): _223.QueryCommunityPoolResponse;
                toAmino(message: _223.QueryCommunityPoolResponse): _223.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _223.QueryCommunityPoolResponseAminoMsg): _223.QueryCommunityPoolResponse;
                toAminoMsg(message: _223.QueryCommunityPoolResponse): _223.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _223.QueryCommunityPoolResponseProtoMsg): _223.QueryCommunityPoolResponse;
                toProto(message: _223.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _223.QueryCommunityPoolResponse): _223.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _222.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.DelegatorWithdrawInfo;
                fromJSON(object: any): _222.DelegatorWithdrawInfo;
                toJSON(message: _222.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_222.DelegatorWithdrawInfo>): _222.DelegatorWithdrawInfo;
                fromAmino(object: _222.DelegatorWithdrawInfoAmino): _222.DelegatorWithdrawInfo;
                toAmino(message: _222.DelegatorWithdrawInfo): _222.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _222.DelegatorWithdrawInfoAminoMsg): _222.DelegatorWithdrawInfo;
                toAminoMsg(message: _222.DelegatorWithdrawInfo): _222.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _222.DelegatorWithdrawInfoProtoMsg): _222.DelegatorWithdrawInfo;
                toProto(message: _222.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _222.DelegatorWithdrawInfo): _222.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _222.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _222.ValidatorOutstandingRewardsRecord;
                toJSON(message: _222.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_222.ValidatorOutstandingRewardsRecord>): _222.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _222.ValidatorOutstandingRewardsRecordAmino): _222.ValidatorOutstandingRewardsRecord;
                toAmino(message: _222.ValidatorOutstandingRewardsRecord): _222.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _222.ValidatorOutstandingRewardsRecordAminoMsg): _222.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _222.ValidatorOutstandingRewardsRecord): _222.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _222.ValidatorOutstandingRewardsRecordProtoMsg): _222.ValidatorOutstandingRewardsRecord;
                toProto(message: _222.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _222.ValidatorOutstandingRewardsRecord): _222.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _222.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _222.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _222.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_222.ValidatorAccumulatedCommissionRecord>): _222.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _222.ValidatorAccumulatedCommissionRecordAmino): _222.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _222.ValidatorAccumulatedCommissionRecord): _222.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _222.ValidatorAccumulatedCommissionRecordAminoMsg): _222.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _222.ValidatorAccumulatedCommissionRecord): _222.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _222.ValidatorAccumulatedCommissionRecordProtoMsg): _222.ValidatorAccumulatedCommissionRecord;
                toProto(message: _222.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _222.ValidatorAccumulatedCommissionRecord): _222.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _222.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _222.ValidatorHistoricalRewardsRecord;
                toJSON(message: _222.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_222.ValidatorHistoricalRewardsRecord>): _222.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _222.ValidatorHistoricalRewardsRecordAmino): _222.ValidatorHistoricalRewardsRecord;
                toAmino(message: _222.ValidatorHistoricalRewardsRecord): _222.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _222.ValidatorHistoricalRewardsRecordAminoMsg): _222.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _222.ValidatorHistoricalRewardsRecord): _222.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _222.ValidatorHistoricalRewardsRecordProtoMsg): _222.ValidatorHistoricalRewardsRecord;
                toProto(message: _222.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _222.ValidatorHistoricalRewardsRecord): _222.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _222.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _222.ValidatorCurrentRewardsRecord;
                toJSON(message: _222.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_222.ValidatorCurrentRewardsRecord>): _222.ValidatorCurrentRewardsRecord;
                fromAmino(object: _222.ValidatorCurrentRewardsRecordAmino): _222.ValidatorCurrentRewardsRecord;
                toAmino(message: _222.ValidatorCurrentRewardsRecord): _222.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _222.ValidatorCurrentRewardsRecordAminoMsg): _222.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _222.ValidatorCurrentRewardsRecord): _222.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _222.ValidatorCurrentRewardsRecordProtoMsg): _222.ValidatorCurrentRewardsRecord;
                toProto(message: _222.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _222.ValidatorCurrentRewardsRecord): _222.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _222.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.DelegatorStartingInfoRecord;
                fromJSON(object: any): _222.DelegatorStartingInfoRecord;
                toJSON(message: _222.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_222.DelegatorStartingInfoRecord>): _222.DelegatorStartingInfoRecord;
                fromAmino(object: _222.DelegatorStartingInfoRecordAmino): _222.DelegatorStartingInfoRecord;
                toAmino(message: _222.DelegatorStartingInfoRecord): _222.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _222.DelegatorStartingInfoRecordAminoMsg): _222.DelegatorStartingInfoRecord;
                toAminoMsg(message: _222.DelegatorStartingInfoRecord): _222.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _222.DelegatorStartingInfoRecordProtoMsg): _222.DelegatorStartingInfoRecord;
                toProto(message: _222.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _222.DelegatorStartingInfoRecord): _222.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _222.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.ValidatorSlashEventRecord;
                fromJSON(object: any): _222.ValidatorSlashEventRecord;
                toJSON(message: _222.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_222.ValidatorSlashEventRecord>): _222.ValidatorSlashEventRecord;
                fromAmino(object: _222.ValidatorSlashEventRecordAmino): _222.ValidatorSlashEventRecord;
                toAmino(message: _222.ValidatorSlashEventRecord): _222.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _222.ValidatorSlashEventRecordAminoMsg): _222.ValidatorSlashEventRecord;
                toAminoMsg(message: _222.ValidatorSlashEventRecord): _222.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _222.ValidatorSlashEventRecordProtoMsg): _222.ValidatorSlashEventRecord;
                toProto(message: _222.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _222.ValidatorSlashEventRecord): _222.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _222.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _222.GenesisState;
                fromJSON(object: any): _222.GenesisState;
                toJSON(message: _222.GenesisState): unknown;
                fromPartial(object: Partial<_222.GenesisState>): _222.GenesisState;
                fromAmino(object: _222.GenesisStateAmino): _222.GenesisState;
                toAmino(message: _222.GenesisState): _222.GenesisStateAmino;
                fromAminoMsg(object: _222.GenesisStateAminoMsg): _222.GenesisState;
                toAminoMsg(message: _222.GenesisState): _222.GenesisStateAminoMsg;
                fromProtoMsg(message: _222.GenesisStateProtoMsg): _222.GenesisState;
                toProto(message: _222.GenesisState): Uint8Array;
                toProtoMsg(message: _222.GenesisState): _222.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _221.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.Params;
                fromJSON(object: any): _221.Params;
                toJSON(message: _221.Params): unknown;
                fromPartial(object: Partial<_221.Params>): _221.Params;
                fromAmino(object: _221.ParamsAmino): _221.Params;
                toAmino(message: _221.Params): _221.ParamsAmino;
                fromAminoMsg(object: _221.ParamsAminoMsg): _221.Params;
                toAminoMsg(message: _221.Params): _221.ParamsAminoMsg;
                fromProtoMsg(message: _221.ParamsProtoMsg): _221.Params;
                toProto(message: _221.Params): Uint8Array;
                toProtoMsg(message: _221.Params): _221.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _221.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorHistoricalRewards;
                fromJSON(object: any): _221.ValidatorHistoricalRewards;
                toJSON(message: _221.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_221.ValidatorHistoricalRewards>): _221.ValidatorHistoricalRewards;
                fromAmino(object: _221.ValidatorHistoricalRewardsAmino): _221.ValidatorHistoricalRewards;
                toAmino(message: _221.ValidatorHistoricalRewards): _221.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _221.ValidatorHistoricalRewardsAminoMsg): _221.ValidatorHistoricalRewards;
                toAminoMsg(message: _221.ValidatorHistoricalRewards): _221.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _221.ValidatorHistoricalRewardsProtoMsg): _221.ValidatorHistoricalRewards;
                toProto(message: _221.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _221.ValidatorHistoricalRewards): _221.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _221.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorCurrentRewards;
                fromJSON(object: any): _221.ValidatorCurrentRewards;
                toJSON(message: _221.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_221.ValidatorCurrentRewards>): _221.ValidatorCurrentRewards;
                fromAmino(object: _221.ValidatorCurrentRewardsAmino): _221.ValidatorCurrentRewards;
                toAmino(message: _221.ValidatorCurrentRewards): _221.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _221.ValidatorCurrentRewardsAminoMsg): _221.ValidatorCurrentRewards;
                toAminoMsg(message: _221.ValidatorCurrentRewards): _221.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _221.ValidatorCurrentRewardsProtoMsg): _221.ValidatorCurrentRewards;
                toProto(message: _221.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _221.ValidatorCurrentRewards): _221.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _221.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorAccumulatedCommission;
                fromJSON(object: any): _221.ValidatorAccumulatedCommission;
                toJSON(message: _221.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_221.ValidatorAccumulatedCommission>): _221.ValidatorAccumulatedCommission;
                fromAmino(object: _221.ValidatorAccumulatedCommissionAmino): _221.ValidatorAccumulatedCommission;
                toAmino(message: _221.ValidatorAccumulatedCommission): _221.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _221.ValidatorAccumulatedCommissionAminoMsg): _221.ValidatorAccumulatedCommission;
                toAminoMsg(message: _221.ValidatorAccumulatedCommission): _221.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _221.ValidatorAccumulatedCommissionProtoMsg): _221.ValidatorAccumulatedCommission;
                toProto(message: _221.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _221.ValidatorAccumulatedCommission): _221.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _221.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorOutstandingRewards;
                fromJSON(object: any): _221.ValidatorOutstandingRewards;
                toJSON(message: _221.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_221.ValidatorOutstandingRewards>): _221.ValidatorOutstandingRewards;
                fromAmino(object: _221.ValidatorOutstandingRewardsAmino): _221.ValidatorOutstandingRewards;
                toAmino(message: _221.ValidatorOutstandingRewards): _221.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _221.ValidatorOutstandingRewardsAminoMsg): _221.ValidatorOutstandingRewards;
                toAminoMsg(message: _221.ValidatorOutstandingRewards): _221.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _221.ValidatorOutstandingRewardsProtoMsg): _221.ValidatorOutstandingRewards;
                toProto(message: _221.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _221.ValidatorOutstandingRewards): _221.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _221.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorSlashEvent;
                fromJSON(object: any): _221.ValidatorSlashEvent;
                toJSON(message: _221.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_221.ValidatorSlashEvent>): _221.ValidatorSlashEvent;
                fromAmino(object: _221.ValidatorSlashEventAmino): _221.ValidatorSlashEvent;
                toAmino(message: _221.ValidatorSlashEvent): _221.ValidatorSlashEventAmino;
                fromAminoMsg(object: _221.ValidatorSlashEventAminoMsg): _221.ValidatorSlashEvent;
                toAminoMsg(message: _221.ValidatorSlashEvent): _221.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _221.ValidatorSlashEventProtoMsg): _221.ValidatorSlashEvent;
                toProto(message: _221.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _221.ValidatorSlashEvent): _221.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _221.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.ValidatorSlashEvents;
                fromJSON(object: any): _221.ValidatorSlashEvents;
                toJSON(message: _221.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_221.ValidatorSlashEvents>): _221.ValidatorSlashEvents;
                fromAmino(object: _221.ValidatorSlashEventsAmino): _221.ValidatorSlashEvents;
                toAmino(message: _221.ValidatorSlashEvents): _221.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _221.ValidatorSlashEventsAminoMsg): _221.ValidatorSlashEvents;
                toAminoMsg(message: _221.ValidatorSlashEvents): _221.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _221.ValidatorSlashEventsProtoMsg): _221.ValidatorSlashEvents;
                toProto(message: _221.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _221.ValidatorSlashEvents): _221.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _221.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.FeePool;
                fromJSON(object: any): _221.FeePool;
                toJSON(message: _221.FeePool): unknown;
                fromPartial(object: Partial<_221.FeePool>): _221.FeePool;
                fromAmino(object: _221.FeePoolAmino): _221.FeePool;
                toAmino(message: _221.FeePool): _221.FeePoolAmino;
                fromAminoMsg(object: _221.FeePoolAminoMsg): _221.FeePool;
                toAminoMsg(message: _221.FeePool): _221.FeePoolAminoMsg;
                fromProtoMsg(message: _221.FeePoolProtoMsg): _221.FeePool;
                toProto(message: _221.FeePool): Uint8Array;
                toProtoMsg(message: _221.FeePool): _221.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _221.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.CommunityPoolSpendProposal;
                fromJSON(object: any): _221.CommunityPoolSpendProposal;
                toJSON(message: _221.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_221.CommunityPoolSpendProposal>): _221.CommunityPoolSpendProposal;
                fromAmino(object: _221.CommunityPoolSpendProposalAmino): _221.CommunityPoolSpendProposal;
                toAmino(message: _221.CommunityPoolSpendProposal): _221.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _221.CommunityPoolSpendProposalAminoMsg): _221.CommunityPoolSpendProposal;
                toAminoMsg(message: _221.CommunityPoolSpendProposal): _221.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _221.CommunityPoolSpendProposalProtoMsg): _221.CommunityPoolSpendProposal;
                toProto(message: _221.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _221.CommunityPoolSpendProposal): _221.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _221.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.DelegatorStartingInfo;
                fromJSON(object: any): _221.DelegatorStartingInfo;
                toJSON(message: _221.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_221.DelegatorStartingInfo>): _221.DelegatorStartingInfo;
                fromAmino(object: _221.DelegatorStartingInfoAmino): _221.DelegatorStartingInfo;
                toAmino(message: _221.DelegatorStartingInfo): _221.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _221.DelegatorStartingInfoAminoMsg): _221.DelegatorStartingInfo;
                toAminoMsg(message: _221.DelegatorStartingInfo): _221.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _221.DelegatorStartingInfoProtoMsg): _221.DelegatorStartingInfo;
                toProto(message: _221.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _221.DelegatorStartingInfo): _221.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _221.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.DelegationDelegatorReward;
                fromJSON(object: any): _221.DelegationDelegatorReward;
                toJSON(message: _221.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_221.DelegationDelegatorReward>): _221.DelegationDelegatorReward;
                fromAmino(object: _221.DelegationDelegatorRewardAmino): _221.DelegationDelegatorReward;
                toAmino(message: _221.DelegationDelegatorReward): _221.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _221.DelegationDelegatorRewardAminoMsg): _221.DelegationDelegatorReward;
                toAminoMsg(message: _221.DelegationDelegatorReward): _221.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _221.DelegationDelegatorRewardProtoMsg): _221.DelegationDelegatorReward;
                toProto(message: _221.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _221.DelegationDelegatorReward): _221.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _221.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _221.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _221.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_221.CommunityPoolSpendProposalWithDeposit>): _221.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _221.CommunityPoolSpendProposalWithDepositAmino): _221.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _221.CommunityPoolSpendProposalWithDeposit): _221.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _221.CommunityPoolSpendProposalWithDepositAminoMsg): _221.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _221.CommunityPoolSpendProposalWithDeposit): _221.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _221.CommunityPoolSpendProposalWithDepositProtoMsg): _221.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _221.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _221.CommunityPoolSpendProposalWithDeposit): _221.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _445.MsgClientImpl;
            QueryClientImpl: typeof _429.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _227.QueryEvidenceRequest): Promise<_227.QueryEvidenceResponse>;
                allEvidence(request?: _227.QueryAllEvidenceRequest): Promise<_227.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _228.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _228.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _228.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _228.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _228.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _228.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _228.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _228.MsgSubmitEvidence) => _228.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _228.MsgSubmitEvidenceAmino) => _228.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _228.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.MsgSubmitEvidence;
                fromJSON(object: any): _228.MsgSubmitEvidence;
                toJSON(message: _228.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_228.MsgSubmitEvidence>): _228.MsgSubmitEvidence;
                fromAmino(object: _228.MsgSubmitEvidenceAmino): _228.MsgSubmitEvidence;
                toAmino(message: _228.MsgSubmitEvidence): _228.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _228.MsgSubmitEvidenceAminoMsg): _228.MsgSubmitEvidence;
                toAminoMsg(message: _228.MsgSubmitEvidence): _228.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _228.MsgSubmitEvidenceProtoMsg): _228.MsgSubmitEvidence;
                toProto(message: _228.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _228.MsgSubmitEvidence): _228.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _228.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _228.MsgSubmitEvidenceResponse;
                toJSON(message: _228.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_228.MsgSubmitEvidenceResponse>): _228.MsgSubmitEvidenceResponse;
                fromAmino(object: _228.MsgSubmitEvidenceResponseAmino): _228.MsgSubmitEvidenceResponse;
                toAmino(message: _228.MsgSubmitEvidenceResponse): _228.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _228.MsgSubmitEvidenceResponseAminoMsg): _228.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _228.MsgSubmitEvidenceResponse): _228.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _228.MsgSubmitEvidenceResponseProtoMsg): _228.MsgSubmitEvidenceResponse;
                toProto(message: _228.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _228.MsgSubmitEvidenceResponse): _228.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                encode(message: _227.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryEvidenceRequest;
                fromJSON(object: any): _227.QueryEvidenceRequest;
                toJSON(message: _227.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_227.QueryEvidenceRequest>): _227.QueryEvidenceRequest;
                fromAmino(object: _227.QueryEvidenceRequestAmino): _227.QueryEvidenceRequest;
                toAmino(message: _227.QueryEvidenceRequest): _227.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _227.QueryEvidenceRequestAminoMsg): _227.QueryEvidenceRequest;
                toAminoMsg(message: _227.QueryEvidenceRequest): _227.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _227.QueryEvidenceRequestProtoMsg): _227.QueryEvidenceRequest;
                toProto(message: _227.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _227.QueryEvidenceRequest): _227.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _227.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryEvidenceResponse;
                fromJSON(object: any): _227.QueryEvidenceResponse;
                toJSON(message: _227.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_227.QueryEvidenceResponse>): _227.QueryEvidenceResponse;
                fromAmino(object: _227.QueryEvidenceResponseAmino): _227.QueryEvidenceResponse;
                toAmino(message: _227.QueryEvidenceResponse): _227.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _227.QueryEvidenceResponseAminoMsg): _227.QueryEvidenceResponse;
                toAminoMsg(message: _227.QueryEvidenceResponse): _227.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _227.QueryEvidenceResponseProtoMsg): _227.QueryEvidenceResponse;
                toProto(message: _227.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _227.QueryEvidenceResponse): _227.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _227.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryAllEvidenceRequest;
                fromJSON(object: any): _227.QueryAllEvidenceRequest;
                toJSON(message: _227.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_227.QueryAllEvidenceRequest>): _227.QueryAllEvidenceRequest;
                fromAmino(object: _227.QueryAllEvidenceRequestAmino): _227.QueryAllEvidenceRequest;
                toAmino(message: _227.QueryAllEvidenceRequest): _227.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _227.QueryAllEvidenceRequestAminoMsg): _227.QueryAllEvidenceRequest;
                toAminoMsg(message: _227.QueryAllEvidenceRequest): _227.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _227.QueryAllEvidenceRequestProtoMsg): _227.QueryAllEvidenceRequest;
                toProto(message: _227.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _227.QueryAllEvidenceRequest): _227.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _227.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.QueryAllEvidenceResponse;
                fromJSON(object: any): _227.QueryAllEvidenceResponse;
                toJSON(message: _227.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_227.QueryAllEvidenceResponse>): _227.QueryAllEvidenceResponse;
                fromAmino(object: _227.QueryAllEvidenceResponseAmino): _227.QueryAllEvidenceResponse;
                toAmino(message: _227.QueryAllEvidenceResponse): _227.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _227.QueryAllEvidenceResponseAminoMsg): _227.QueryAllEvidenceResponse;
                toAminoMsg(message: _227.QueryAllEvidenceResponse): _227.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _227.QueryAllEvidenceResponseProtoMsg): _227.QueryAllEvidenceResponse;
                toProto(message: _227.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _227.QueryAllEvidenceResponse): _227.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _226.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.GenesisState;
                fromJSON(object: any): _226.GenesisState;
                toJSON(message: _226.GenesisState): unknown;
                fromPartial(object: Partial<_226.GenesisState>): _226.GenesisState;
                fromAmino(object: _226.GenesisStateAmino): _226.GenesisState;
                toAmino(message: _226.GenesisState): _226.GenesisStateAmino;
                fromAminoMsg(object: _226.GenesisStateAminoMsg): _226.GenesisState;
                toAminoMsg(message: _226.GenesisState): _226.GenesisStateAminoMsg;
                fromProtoMsg(message: _226.GenesisStateProtoMsg): _226.GenesisState;
                toProto(message: _226.GenesisState): Uint8Array;
                toProtoMsg(message: _226.GenesisState): _226.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _225.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.Equivocation;
                fromJSON(object: any): _225.Equivocation;
                toJSON(message: _225.Equivocation): unknown;
                fromPartial(object: Partial<_225.Equivocation>): _225.Equivocation;
                fromAmino(object: _225.EquivocationAmino): _225.Equivocation;
                toAmino(message: _225.Equivocation): _225.EquivocationAmino;
                fromAminoMsg(object: _225.EquivocationAminoMsg): _225.Equivocation;
                toAminoMsg(message: _225.Equivocation): _225.EquivocationAminoMsg;
                fromProtoMsg(message: _225.EquivocationProtoMsg): _225.Equivocation;
                toProto(message: _225.Equivocation): Uint8Array;
                toProtoMsg(message: _225.Equivocation): _225.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _446.MsgClientImpl;
            QueryClientImpl: typeof _430.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _231.QueryAllowanceRequest): Promise<_231.QueryAllowanceResponse>;
                allowances(request: _231.QueryAllowancesRequest): Promise<_231.QueryAllowancesResponse>;
                allowancesByGranter(request: _231.QueryAllowancesByGranterRequest): Promise<_231.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _232.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _232.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _232.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _232.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _232.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _232.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _232.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _232.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _232.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _232.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _232.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _232.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _232.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _232.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _232.MsgGrantAllowance) => _232.MsgGrantAllowanceAmino;
                    fromAmino: (object: _232.MsgGrantAllowanceAmino) => _232.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _232.MsgRevokeAllowance) => _232.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _232.MsgRevokeAllowanceAmino) => _232.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _232.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgGrantAllowance;
                fromJSON(object: any): _232.MsgGrantAllowance;
                toJSON(message: _232.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_232.MsgGrantAllowance>): _232.MsgGrantAllowance;
                fromAmino(object: _232.MsgGrantAllowanceAmino): _232.MsgGrantAllowance;
                toAmino(message: _232.MsgGrantAllowance): _232.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _232.MsgGrantAllowanceAminoMsg): _232.MsgGrantAllowance;
                toAminoMsg(message: _232.MsgGrantAllowance): _232.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _232.MsgGrantAllowanceProtoMsg): _232.MsgGrantAllowance;
                toProto(message: _232.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _232.MsgGrantAllowance): _232.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _232.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgGrantAllowanceResponse;
                fromJSON(_: any): _232.MsgGrantAllowanceResponse;
                toJSON(_: _232.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_232.MsgGrantAllowanceResponse>): _232.MsgGrantAllowanceResponse;
                fromAmino(_: _232.MsgGrantAllowanceResponseAmino): _232.MsgGrantAllowanceResponse;
                toAmino(_: _232.MsgGrantAllowanceResponse): _232.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _232.MsgGrantAllowanceResponseAminoMsg): _232.MsgGrantAllowanceResponse;
                toAminoMsg(message: _232.MsgGrantAllowanceResponse): _232.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _232.MsgGrantAllowanceResponseProtoMsg): _232.MsgGrantAllowanceResponse;
                toProto(message: _232.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _232.MsgGrantAllowanceResponse): _232.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _232.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRevokeAllowance;
                fromJSON(object: any): _232.MsgRevokeAllowance;
                toJSON(message: _232.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_232.MsgRevokeAllowance>): _232.MsgRevokeAllowance;
                fromAmino(object: _232.MsgRevokeAllowanceAmino): _232.MsgRevokeAllowance;
                toAmino(message: _232.MsgRevokeAllowance): _232.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _232.MsgRevokeAllowanceAminoMsg): _232.MsgRevokeAllowance;
                toAminoMsg(message: _232.MsgRevokeAllowance): _232.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _232.MsgRevokeAllowanceProtoMsg): _232.MsgRevokeAllowance;
                toProto(message: _232.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _232.MsgRevokeAllowance): _232.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _232.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _232.MsgRevokeAllowanceResponse;
                toJSON(_: _232.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_232.MsgRevokeAllowanceResponse>): _232.MsgRevokeAllowanceResponse;
                fromAmino(_: _232.MsgRevokeAllowanceResponseAmino): _232.MsgRevokeAllowanceResponse;
                toAmino(_: _232.MsgRevokeAllowanceResponse): _232.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _232.MsgRevokeAllowanceResponseAminoMsg): _232.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _232.MsgRevokeAllowanceResponse): _232.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _232.MsgRevokeAllowanceResponseProtoMsg): _232.MsgRevokeAllowanceResponse;
                toProto(message: _232.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _232.MsgRevokeAllowanceResponse): _232.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                encode(message: _231.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowanceRequest;
                fromJSON(object: any): _231.QueryAllowanceRequest;
                toJSON(message: _231.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_231.QueryAllowanceRequest>): _231.QueryAllowanceRequest;
                fromAmino(object: _231.QueryAllowanceRequestAmino): _231.QueryAllowanceRequest;
                toAmino(message: _231.QueryAllowanceRequest): _231.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _231.QueryAllowanceRequestAminoMsg): _231.QueryAllowanceRequest;
                toAminoMsg(message: _231.QueryAllowanceRequest): _231.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _231.QueryAllowanceRequestProtoMsg): _231.QueryAllowanceRequest;
                toProto(message: _231.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _231.QueryAllowanceRequest): _231.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _231.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowanceResponse;
                fromJSON(object: any): _231.QueryAllowanceResponse;
                toJSON(message: _231.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_231.QueryAllowanceResponse>): _231.QueryAllowanceResponse;
                fromAmino(object: _231.QueryAllowanceResponseAmino): _231.QueryAllowanceResponse;
                toAmino(message: _231.QueryAllowanceResponse): _231.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _231.QueryAllowanceResponseAminoMsg): _231.QueryAllowanceResponse;
                toAminoMsg(message: _231.QueryAllowanceResponse): _231.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _231.QueryAllowanceResponseProtoMsg): _231.QueryAllowanceResponse;
                toProto(message: _231.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _231.QueryAllowanceResponse): _231.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _231.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowancesRequest;
                fromJSON(object: any): _231.QueryAllowancesRequest;
                toJSON(message: _231.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_231.QueryAllowancesRequest>): _231.QueryAllowancesRequest;
                fromAmino(object: _231.QueryAllowancesRequestAmino): _231.QueryAllowancesRequest;
                toAmino(message: _231.QueryAllowancesRequest): _231.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _231.QueryAllowancesRequestAminoMsg): _231.QueryAllowancesRequest;
                toAminoMsg(message: _231.QueryAllowancesRequest): _231.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _231.QueryAllowancesRequestProtoMsg): _231.QueryAllowancesRequest;
                toProto(message: _231.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _231.QueryAllowancesRequest): _231.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _231.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowancesResponse;
                fromJSON(object: any): _231.QueryAllowancesResponse;
                toJSON(message: _231.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_231.QueryAllowancesResponse>): _231.QueryAllowancesResponse;
                fromAmino(object: _231.QueryAllowancesResponseAmino): _231.QueryAllowancesResponse;
                toAmino(message: _231.QueryAllowancesResponse): _231.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _231.QueryAllowancesResponseAminoMsg): _231.QueryAllowancesResponse;
                toAminoMsg(message: _231.QueryAllowancesResponse): _231.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _231.QueryAllowancesResponseProtoMsg): _231.QueryAllowancesResponse;
                toProto(message: _231.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _231.QueryAllowancesResponse): _231.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _231.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _231.QueryAllowancesByGranterRequest;
                toJSON(message: _231.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_231.QueryAllowancesByGranterRequest>): _231.QueryAllowancesByGranterRequest;
                fromAmino(object: _231.QueryAllowancesByGranterRequestAmino): _231.QueryAllowancesByGranterRequest;
                toAmino(message: _231.QueryAllowancesByGranterRequest): _231.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _231.QueryAllowancesByGranterRequestAminoMsg): _231.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _231.QueryAllowancesByGranterRequest): _231.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _231.QueryAllowancesByGranterRequestProtoMsg): _231.QueryAllowancesByGranterRequest;
                toProto(message: _231.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _231.QueryAllowancesByGranterRequest): _231.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _231.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _231.QueryAllowancesByGranterResponse;
                toJSON(message: _231.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_231.QueryAllowancesByGranterResponse>): _231.QueryAllowancesByGranterResponse;
                fromAmino(object: _231.QueryAllowancesByGranterResponseAmino): _231.QueryAllowancesByGranterResponse;
                toAmino(message: _231.QueryAllowancesByGranterResponse): _231.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _231.QueryAllowancesByGranterResponseAminoMsg): _231.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _231.QueryAllowancesByGranterResponse): _231.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _231.QueryAllowancesByGranterResponseProtoMsg): _231.QueryAllowancesByGranterResponse;
                toProto(message: _231.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _231.QueryAllowancesByGranterResponse): _231.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                encode(message: _229.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.BasicAllowance;
                fromJSON(object: any): _229.BasicAllowance;
                toJSON(message: _229.BasicAllowance): unknown;
                fromPartial(object: Partial<_229.BasicAllowance>): _229.BasicAllowance;
                fromAmino(object: _229.BasicAllowanceAmino): _229.BasicAllowance;
                toAmino(message: _229.BasicAllowance): _229.BasicAllowanceAmino;
                fromAminoMsg(object: _229.BasicAllowanceAminoMsg): _229.BasicAllowance;
                toAminoMsg(message: _229.BasicAllowance): _229.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _229.BasicAllowanceProtoMsg): _229.BasicAllowance;
                toProto(message: _229.BasicAllowance): Uint8Array;
                toProtoMsg(message: _229.BasicAllowance): _229.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _229.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.PeriodicAllowance;
                fromJSON(object: any): _229.PeriodicAllowance;
                toJSON(message: _229.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_229.PeriodicAllowance>): _229.PeriodicAllowance;
                fromAmino(object: _229.PeriodicAllowanceAmino): _229.PeriodicAllowance;
                toAmino(message: _229.PeriodicAllowance): _229.PeriodicAllowanceAmino;
                fromAminoMsg(object: _229.PeriodicAllowanceAminoMsg): _229.PeriodicAllowance;
                toAminoMsg(message: _229.PeriodicAllowance): _229.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _229.PeriodicAllowanceProtoMsg): _229.PeriodicAllowance;
                toProto(message: _229.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _229.PeriodicAllowance): _229.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _229.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.AllowedMsgAllowance;
                fromJSON(object: any): _229.AllowedMsgAllowance;
                toJSON(message: _229.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_229.AllowedMsgAllowance>): _229.AllowedMsgAllowance;
                fromAmino(object: _229.AllowedMsgAllowanceAmino): _229.AllowedMsgAllowance;
                toAmino(message: _229.AllowedMsgAllowance): _229.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _229.AllowedMsgAllowanceAminoMsg): _229.AllowedMsgAllowance;
                toAminoMsg(message: _229.AllowedMsgAllowance): _229.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _229.AllowedMsgAllowanceProtoMsg): _229.AllowedMsgAllowance;
                toProto(message: _229.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _229.AllowedMsgAllowance): _229.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _229.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.Grant;
                fromJSON(object: any): _229.Grant;
                toJSON(message: _229.Grant): unknown;
                fromPartial(object: Partial<_229.Grant>): _229.Grant;
                fromAmino(object: _229.GrantAmino): _229.Grant;
                toAmino(message: _229.Grant): _229.GrantAmino;
                fromAminoMsg(object: _229.GrantAminoMsg): _229.Grant;
                toAminoMsg(message: _229.Grant): _229.GrantAminoMsg;
                fromProtoMsg(message: _229.GrantProtoMsg): _229.Grant;
                toProto(message: _229.Grant): Uint8Array;
                toProtoMsg(message: _229.Grant): _229.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _233.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.GenesisState;
                fromJSON(object: any): _233.GenesisState;
                toJSON(message: _233.GenesisState): unknown;
                fromPartial(object: Partial<_233.GenesisState>): _233.GenesisState;
                fromAmino(object: _233.GenesisStateAmino): _233.GenesisState;
                toAmino(message: _233.GenesisState): _233.GenesisStateAmino;
                fromAminoMsg(object: _233.GenesisStateAminoMsg): _233.GenesisState;
                toAminoMsg(message: _233.GenesisState): _233.GenesisStateAminoMsg;
                fromProtoMsg(message: _233.GenesisStateProtoMsg): _233.GenesisState;
                toProto(message: _233.GenesisState): Uint8Array;
                toProtoMsg(message: _233.GenesisState): _233.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _447.MsgClientImpl;
            QueryClientImpl: typeof _431.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _236.QueryProposalRequest): Promise<_236.QueryProposalResponse>;
                proposals(request: _236.QueryProposalsRequest): Promise<_236.QueryProposalsResponse>;
                vote(request: _236.QueryVoteRequest): Promise<_236.QueryVoteResponse>;
                votes(request: _236.QueryVotesRequest): Promise<_236.QueryVotesResponse>;
                params(request: _236.QueryParamsRequest): Promise<_236.QueryParamsResponse>;
                deposit(request: _236.QueryDepositRequest): Promise<_236.QueryDepositResponse>;
                deposits(request: _236.QueryDepositsRequest): Promise<_236.QueryDepositsResponse>;
                tallyResult(request: _236.QueryTallyResultRequest): Promise<_236.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _237.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _237.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _237.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _237.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _237.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _237.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _237.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _237.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _237.MsgExecLegacyContent;
                    };
                    vote(value: _237.MsgVote): {
                        typeUrl: string;
                        value: _237.MsgVote;
                    };
                    voteWeighted(value: _237.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _237.MsgVoteWeighted;
                    };
                    deposit(value: _237.MsgDeposit): {
                        typeUrl: string;
                        value: _237.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _237.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _237.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _237.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _237.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _237.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _237.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _237.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _237.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _237.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _237.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _237.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _237.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _237.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _237.MsgExecLegacyContent;
                    };
                    vote(value: _237.MsgVote): {
                        typeUrl: string;
                        value: _237.MsgVote;
                    };
                    voteWeighted(value: _237.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _237.MsgVoteWeighted;
                    };
                    deposit(value: _237.MsgDeposit): {
                        typeUrl: string;
                        value: _237.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _237.MsgSubmitProposal) => _237.MsgSubmitProposalAmino;
                    fromAmino: (object: _237.MsgSubmitProposalAmino) => _237.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _237.MsgExecLegacyContent) => _237.MsgExecLegacyContentAmino;
                    fromAmino: (object: _237.MsgExecLegacyContentAmino) => _237.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _237.MsgVote) => _237.MsgVoteAmino;
                    fromAmino: (object: _237.MsgVoteAmino) => _237.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _237.MsgVoteWeighted) => _237.MsgVoteWeightedAmino;
                    fromAmino: (object: _237.MsgVoteWeightedAmino) => _237.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _237.MsgDeposit) => _237.MsgDepositAmino;
                    fromAmino: (object: _237.MsgDepositAmino) => _237.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _237.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgSubmitProposal;
                fromJSON(object: any): _237.MsgSubmitProposal;
                toJSON(message: _237.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_237.MsgSubmitProposal>): _237.MsgSubmitProposal;
                fromAmino(object: _237.MsgSubmitProposalAmino): _237.MsgSubmitProposal;
                toAmino(message: _237.MsgSubmitProposal): _237.MsgSubmitProposalAmino;
                fromAminoMsg(object: _237.MsgSubmitProposalAminoMsg): _237.MsgSubmitProposal;
                toAminoMsg(message: _237.MsgSubmitProposal): _237.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _237.MsgSubmitProposalProtoMsg): _237.MsgSubmitProposal;
                toProto(message: _237.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _237.MsgSubmitProposal): _237.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _237.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgSubmitProposalResponse;
                fromJSON(object: any): _237.MsgSubmitProposalResponse;
                toJSON(message: _237.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_237.MsgSubmitProposalResponse>): _237.MsgSubmitProposalResponse;
                fromAmino(object: _237.MsgSubmitProposalResponseAmino): _237.MsgSubmitProposalResponse;
                toAmino(message: _237.MsgSubmitProposalResponse): _237.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _237.MsgSubmitProposalResponseAminoMsg): _237.MsgSubmitProposalResponse;
                toAminoMsg(message: _237.MsgSubmitProposalResponse): _237.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _237.MsgSubmitProposalResponseProtoMsg): _237.MsgSubmitProposalResponse;
                toProto(message: _237.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _237.MsgSubmitProposalResponse): _237.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _237.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgExecLegacyContent;
                fromJSON(object: any): _237.MsgExecLegacyContent;
                toJSON(message: _237.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_237.MsgExecLegacyContent>): _237.MsgExecLegacyContent;
                fromAmino(object: _237.MsgExecLegacyContentAmino): _237.MsgExecLegacyContent;
                toAmino(message: _237.MsgExecLegacyContent): _237.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _237.MsgExecLegacyContentAminoMsg): _237.MsgExecLegacyContent;
                toAminoMsg(message: _237.MsgExecLegacyContent): _237.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _237.MsgExecLegacyContentProtoMsg): _237.MsgExecLegacyContent;
                toProto(message: _237.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _237.MsgExecLegacyContent): _237.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _237.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgExecLegacyContentResponse;
                fromJSON(_: any): _237.MsgExecLegacyContentResponse;
                toJSON(_: _237.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_237.MsgExecLegacyContentResponse>): _237.MsgExecLegacyContentResponse;
                fromAmino(_: _237.MsgExecLegacyContentResponseAmino): _237.MsgExecLegacyContentResponse;
                toAmino(_: _237.MsgExecLegacyContentResponse): _237.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _237.MsgExecLegacyContentResponseAminoMsg): _237.MsgExecLegacyContentResponse;
                toAminoMsg(message: _237.MsgExecLegacyContentResponse): _237.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _237.MsgExecLegacyContentResponseProtoMsg): _237.MsgExecLegacyContentResponse;
                toProto(message: _237.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _237.MsgExecLegacyContentResponse): _237.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _237.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgVote;
                fromJSON(object: any): _237.MsgVote;
                toJSON(message: _237.MsgVote): unknown;
                fromPartial(object: Partial<_237.MsgVote>): _237.MsgVote;
                fromAmino(object: _237.MsgVoteAmino): _237.MsgVote;
                toAmino(message: _237.MsgVote): _237.MsgVoteAmino;
                fromAminoMsg(object: _237.MsgVoteAminoMsg): _237.MsgVote;
                toAminoMsg(message: _237.MsgVote): _237.MsgVoteAminoMsg;
                fromProtoMsg(message: _237.MsgVoteProtoMsg): _237.MsgVote;
                toProto(message: _237.MsgVote): Uint8Array;
                toProtoMsg(message: _237.MsgVote): _237.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _237.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgVoteResponse;
                fromJSON(_: any): _237.MsgVoteResponse;
                toJSON(_: _237.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_237.MsgVoteResponse>): _237.MsgVoteResponse;
                fromAmino(_: _237.MsgVoteResponseAmino): _237.MsgVoteResponse;
                toAmino(_: _237.MsgVoteResponse): _237.MsgVoteResponseAmino;
                fromAminoMsg(object: _237.MsgVoteResponseAminoMsg): _237.MsgVoteResponse;
                toAminoMsg(message: _237.MsgVoteResponse): _237.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _237.MsgVoteResponseProtoMsg): _237.MsgVoteResponse;
                toProto(message: _237.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _237.MsgVoteResponse): _237.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _237.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgVoteWeighted;
                fromJSON(object: any): _237.MsgVoteWeighted;
                toJSON(message: _237.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_237.MsgVoteWeighted>): _237.MsgVoteWeighted;
                fromAmino(object: _237.MsgVoteWeightedAmino): _237.MsgVoteWeighted;
                toAmino(message: _237.MsgVoteWeighted): _237.MsgVoteWeightedAmino;
                fromAminoMsg(object: _237.MsgVoteWeightedAminoMsg): _237.MsgVoteWeighted;
                toAminoMsg(message: _237.MsgVoteWeighted): _237.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _237.MsgVoteWeightedProtoMsg): _237.MsgVoteWeighted;
                toProto(message: _237.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _237.MsgVoteWeighted): _237.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _237.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgVoteWeightedResponse;
                fromJSON(_: any): _237.MsgVoteWeightedResponse;
                toJSON(_: _237.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_237.MsgVoteWeightedResponse>): _237.MsgVoteWeightedResponse;
                fromAmino(_: _237.MsgVoteWeightedResponseAmino): _237.MsgVoteWeightedResponse;
                toAmino(_: _237.MsgVoteWeightedResponse): _237.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _237.MsgVoteWeightedResponseAminoMsg): _237.MsgVoteWeightedResponse;
                toAminoMsg(message: _237.MsgVoteWeightedResponse): _237.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _237.MsgVoteWeightedResponseProtoMsg): _237.MsgVoteWeightedResponse;
                toProto(message: _237.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _237.MsgVoteWeightedResponse): _237.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _237.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgDeposit;
                fromJSON(object: any): _237.MsgDeposit;
                toJSON(message: _237.MsgDeposit): unknown;
                fromPartial(object: Partial<_237.MsgDeposit>): _237.MsgDeposit;
                fromAmino(object: _237.MsgDepositAmino): _237.MsgDeposit;
                toAmino(message: _237.MsgDeposit): _237.MsgDepositAmino;
                fromAminoMsg(object: _237.MsgDepositAminoMsg): _237.MsgDeposit;
                toAminoMsg(message: _237.MsgDeposit): _237.MsgDepositAminoMsg;
                fromProtoMsg(message: _237.MsgDepositProtoMsg): _237.MsgDeposit;
                toProto(message: _237.MsgDeposit): Uint8Array;
                toProtoMsg(message: _237.MsgDeposit): _237.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _237.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgDepositResponse;
                fromJSON(_: any): _237.MsgDepositResponse;
                toJSON(_: _237.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_237.MsgDepositResponse>): _237.MsgDepositResponse;
                fromAmino(_: _237.MsgDepositResponseAmino): _237.MsgDepositResponse;
                toAmino(_: _237.MsgDepositResponse): _237.MsgDepositResponseAmino;
                fromAminoMsg(object: _237.MsgDepositResponseAminoMsg): _237.MsgDepositResponse;
                toAminoMsg(message: _237.MsgDepositResponse): _237.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _237.MsgDepositResponseProtoMsg): _237.MsgDepositResponse;
                toProto(message: _237.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _237.MsgDepositResponse): _237.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _236.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryProposalRequest;
                fromJSON(object: any): _236.QueryProposalRequest;
                toJSON(message: _236.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_236.QueryProposalRequest>): _236.QueryProposalRequest;
                fromAmino(object: _236.QueryProposalRequestAmino): _236.QueryProposalRequest;
                toAmino(message: _236.QueryProposalRequest): _236.QueryProposalRequestAmino;
                fromAminoMsg(object: _236.QueryProposalRequestAminoMsg): _236.QueryProposalRequest;
                toAminoMsg(message: _236.QueryProposalRequest): _236.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _236.QueryProposalRequestProtoMsg): _236.QueryProposalRequest;
                toProto(message: _236.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _236.QueryProposalRequest): _236.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _236.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryProposalResponse;
                fromJSON(object: any): _236.QueryProposalResponse;
                toJSON(message: _236.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_236.QueryProposalResponse>): _236.QueryProposalResponse;
                fromAmino(object: _236.QueryProposalResponseAmino): _236.QueryProposalResponse;
                toAmino(message: _236.QueryProposalResponse): _236.QueryProposalResponseAmino;
                fromAminoMsg(object: _236.QueryProposalResponseAminoMsg): _236.QueryProposalResponse;
                toAminoMsg(message: _236.QueryProposalResponse): _236.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _236.QueryProposalResponseProtoMsg): _236.QueryProposalResponse;
                toProto(message: _236.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _236.QueryProposalResponse): _236.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _236.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryProposalsRequest;
                fromJSON(object: any): _236.QueryProposalsRequest;
                toJSON(message: _236.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_236.QueryProposalsRequest>): _236.QueryProposalsRequest;
                fromAmino(object: _236.QueryProposalsRequestAmino): _236.QueryProposalsRequest;
                toAmino(message: _236.QueryProposalsRequest): _236.QueryProposalsRequestAmino;
                fromAminoMsg(object: _236.QueryProposalsRequestAminoMsg): _236.QueryProposalsRequest;
                toAminoMsg(message: _236.QueryProposalsRequest): _236.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _236.QueryProposalsRequestProtoMsg): _236.QueryProposalsRequest;
                toProto(message: _236.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _236.QueryProposalsRequest): _236.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _236.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryProposalsResponse;
                fromJSON(object: any): _236.QueryProposalsResponse;
                toJSON(message: _236.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_236.QueryProposalsResponse>): _236.QueryProposalsResponse;
                fromAmino(object: _236.QueryProposalsResponseAmino): _236.QueryProposalsResponse;
                toAmino(message: _236.QueryProposalsResponse): _236.QueryProposalsResponseAmino;
                fromAminoMsg(object: _236.QueryProposalsResponseAminoMsg): _236.QueryProposalsResponse;
                toAminoMsg(message: _236.QueryProposalsResponse): _236.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _236.QueryProposalsResponseProtoMsg): _236.QueryProposalsResponse;
                toProto(message: _236.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _236.QueryProposalsResponse): _236.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _236.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryVoteRequest;
                fromJSON(object: any): _236.QueryVoteRequest;
                toJSON(message: _236.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_236.QueryVoteRequest>): _236.QueryVoteRequest;
                fromAmino(object: _236.QueryVoteRequestAmino): _236.QueryVoteRequest;
                toAmino(message: _236.QueryVoteRequest): _236.QueryVoteRequestAmino;
                fromAminoMsg(object: _236.QueryVoteRequestAminoMsg): _236.QueryVoteRequest;
                toAminoMsg(message: _236.QueryVoteRequest): _236.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _236.QueryVoteRequestProtoMsg): _236.QueryVoteRequest;
                toProto(message: _236.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _236.QueryVoteRequest): _236.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _236.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryVoteResponse;
                fromJSON(object: any): _236.QueryVoteResponse;
                toJSON(message: _236.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_236.QueryVoteResponse>): _236.QueryVoteResponse;
                fromAmino(object: _236.QueryVoteResponseAmino): _236.QueryVoteResponse;
                toAmino(message: _236.QueryVoteResponse): _236.QueryVoteResponseAmino;
                fromAminoMsg(object: _236.QueryVoteResponseAminoMsg): _236.QueryVoteResponse;
                toAminoMsg(message: _236.QueryVoteResponse): _236.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _236.QueryVoteResponseProtoMsg): _236.QueryVoteResponse;
                toProto(message: _236.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _236.QueryVoteResponse): _236.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _236.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryVotesRequest;
                fromJSON(object: any): _236.QueryVotesRequest;
                toJSON(message: _236.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_236.QueryVotesRequest>): _236.QueryVotesRequest;
                fromAmino(object: _236.QueryVotesRequestAmino): _236.QueryVotesRequest;
                toAmino(message: _236.QueryVotesRequest): _236.QueryVotesRequestAmino;
                fromAminoMsg(object: _236.QueryVotesRequestAminoMsg): _236.QueryVotesRequest;
                toAminoMsg(message: _236.QueryVotesRequest): _236.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _236.QueryVotesRequestProtoMsg): _236.QueryVotesRequest;
                toProto(message: _236.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _236.QueryVotesRequest): _236.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _236.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryVotesResponse;
                fromJSON(object: any): _236.QueryVotesResponse;
                toJSON(message: _236.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_236.QueryVotesResponse>): _236.QueryVotesResponse;
                fromAmino(object: _236.QueryVotesResponseAmino): _236.QueryVotesResponse;
                toAmino(message: _236.QueryVotesResponse): _236.QueryVotesResponseAmino;
                fromAminoMsg(object: _236.QueryVotesResponseAminoMsg): _236.QueryVotesResponse;
                toAminoMsg(message: _236.QueryVotesResponse): _236.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _236.QueryVotesResponseProtoMsg): _236.QueryVotesResponse;
                toProto(message: _236.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _236.QueryVotesResponse): _236.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _236.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryParamsRequest;
                fromJSON(object: any): _236.QueryParamsRequest;
                toJSON(message: _236.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_236.QueryParamsRequest>): _236.QueryParamsRequest;
                fromAmino(object: _236.QueryParamsRequestAmino): _236.QueryParamsRequest;
                toAmino(message: _236.QueryParamsRequest): _236.QueryParamsRequestAmino;
                fromAminoMsg(object: _236.QueryParamsRequestAminoMsg): _236.QueryParamsRequest;
                toAminoMsg(message: _236.QueryParamsRequest): _236.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _236.QueryParamsRequestProtoMsg): _236.QueryParamsRequest;
                toProto(message: _236.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _236.QueryParamsRequest): _236.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _236.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryParamsResponse;
                fromJSON(object: any): _236.QueryParamsResponse;
                toJSON(message: _236.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_236.QueryParamsResponse>): _236.QueryParamsResponse;
                fromAmino(object: _236.QueryParamsResponseAmino): _236.QueryParamsResponse;
                toAmino(message: _236.QueryParamsResponse): _236.QueryParamsResponseAmino;
                fromAminoMsg(object: _236.QueryParamsResponseAminoMsg): _236.QueryParamsResponse;
                toAminoMsg(message: _236.QueryParamsResponse): _236.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _236.QueryParamsResponseProtoMsg): _236.QueryParamsResponse;
                toProto(message: _236.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _236.QueryParamsResponse): _236.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _236.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryDepositRequest;
                fromJSON(object: any): _236.QueryDepositRequest;
                toJSON(message: _236.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_236.QueryDepositRequest>): _236.QueryDepositRequest;
                fromAmino(object: _236.QueryDepositRequestAmino): _236.QueryDepositRequest;
                toAmino(message: _236.QueryDepositRequest): _236.QueryDepositRequestAmino;
                fromAminoMsg(object: _236.QueryDepositRequestAminoMsg): _236.QueryDepositRequest;
                toAminoMsg(message: _236.QueryDepositRequest): _236.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _236.QueryDepositRequestProtoMsg): _236.QueryDepositRequest;
                toProto(message: _236.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _236.QueryDepositRequest): _236.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _236.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryDepositResponse;
                fromJSON(object: any): _236.QueryDepositResponse;
                toJSON(message: _236.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_236.QueryDepositResponse>): _236.QueryDepositResponse;
                fromAmino(object: _236.QueryDepositResponseAmino): _236.QueryDepositResponse;
                toAmino(message: _236.QueryDepositResponse): _236.QueryDepositResponseAmino;
                fromAminoMsg(object: _236.QueryDepositResponseAminoMsg): _236.QueryDepositResponse;
                toAminoMsg(message: _236.QueryDepositResponse): _236.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _236.QueryDepositResponseProtoMsg): _236.QueryDepositResponse;
                toProto(message: _236.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _236.QueryDepositResponse): _236.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _236.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryDepositsRequest;
                fromJSON(object: any): _236.QueryDepositsRequest;
                toJSON(message: _236.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_236.QueryDepositsRequest>): _236.QueryDepositsRequest;
                fromAmino(object: _236.QueryDepositsRequestAmino): _236.QueryDepositsRequest;
                toAmino(message: _236.QueryDepositsRequest): _236.QueryDepositsRequestAmino;
                fromAminoMsg(object: _236.QueryDepositsRequestAminoMsg): _236.QueryDepositsRequest;
                toAminoMsg(message: _236.QueryDepositsRequest): _236.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _236.QueryDepositsRequestProtoMsg): _236.QueryDepositsRequest;
                toProto(message: _236.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _236.QueryDepositsRequest): _236.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _236.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryDepositsResponse;
                fromJSON(object: any): _236.QueryDepositsResponse;
                toJSON(message: _236.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_236.QueryDepositsResponse>): _236.QueryDepositsResponse;
                fromAmino(object: _236.QueryDepositsResponseAmino): _236.QueryDepositsResponse;
                toAmino(message: _236.QueryDepositsResponse): _236.QueryDepositsResponseAmino;
                fromAminoMsg(object: _236.QueryDepositsResponseAminoMsg): _236.QueryDepositsResponse;
                toAminoMsg(message: _236.QueryDepositsResponse): _236.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _236.QueryDepositsResponseProtoMsg): _236.QueryDepositsResponse;
                toProto(message: _236.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _236.QueryDepositsResponse): _236.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _236.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryTallyResultRequest;
                fromJSON(object: any): _236.QueryTallyResultRequest;
                toJSON(message: _236.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_236.QueryTallyResultRequest>): _236.QueryTallyResultRequest;
                fromAmino(object: _236.QueryTallyResultRequestAmino): _236.QueryTallyResultRequest;
                toAmino(message: _236.QueryTallyResultRequest): _236.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _236.QueryTallyResultRequestAminoMsg): _236.QueryTallyResultRequest;
                toAminoMsg(message: _236.QueryTallyResultRequest): _236.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _236.QueryTallyResultRequestProtoMsg): _236.QueryTallyResultRequest;
                toProto(message: _236.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _236.QueryTallyResultRequest): _236.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _236.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryTallyResultResponse;
                fromJSON(object: any): _236.QueryTallyResultResponse;
                toJSON(message: _236.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_236.QueryTallyResultResponse>): _236.QueryTallyResultResponse;
                fromAmino(object: _236.QueryTallyResultResponseAmino): _236.QueryTallyResultResponse;
                toAmino(message: _236.QueryTallyResultResponse): _236.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _236.QueryTallyResultResponseAminoMsg): _236.QueryTallyResultResponse;
                toAminoMsg(message: _236.QueryTallyResultResponse): _236.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _236.QueryTallyResultResponseProtoMsg): _236.QueryTallyResultResponse;
                toProto(message: _236.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _236.QueryTallyResultResponse): _236.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _235.VoteOption;
            voteOptionToJSON(object: _235.VoteOption): string;
            proposalStatusFromJSON(object: any): _235.ProposalStatus;
            proposalStatusToJSON(object: _235.ProposalStatus): string;
            VoteOption: typeof _235.VoteOption;
            VoteOptionSDKType: typeof _235.VoteOption;
            VoteOptionAmino: typeof _235.VoteOption;
            ProposalStatus: typeof _235.ProposalStatus;
            ProposalStatusSDKType: typeof _235.ProposalStatus;
            ProposalStatusAmino: typeof _235.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _235.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.WeightedVoteOption;
                fromJSON(object: any): _235.WeightedVoteOption;
                toJSON(message: _235.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_235.WeightedVoteOption>): _235.WeightedVoteOption;
                fromAmino(object: _235.WeightedVoteOptionAmino): _235.WeightedVoteOption;
                toAmino(message: _235.WeightedVoteOption): _235.WeightedVoteOptionAmino;
                fromAminoMsg(object: _235.WeightedVoteOptionAminoMsg): _235.WeightedVoteOption;
                toAminoMsg(message: _235.WeightedVoteOption): _235.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _235.WeightedVoteOptionProtoMsg): _235.WeightedVoteOption;
                toProto(message: _235.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _235.WeightedVoteOption): _235.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _235.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Deposit;
                fromJSON(object: any): _235.Deposit;
                toJSON(message: _235.Deposit): unknown;
                fromPartial(object: Partial<_235.Deposit>): _235.Deposit;
                fromAmino(object: _235.DepositAmino): _235.Deposit;
                toAmino(message: _235.Deposit): _235.DepositAmino;
                fromAminoMsg(object: _235.DepositAminoMsg): _235.Deposit;
                toAminoMsg(message: _235.Deposit): _235.DepositAminoMsg;
                fromProtoMsg(message: _235.DepositProtoMsg): _235.Deposit;
                toProto(message: _235.Deposit): Uint8Array;
                toProtoMsg(message: _235.Deposit): _235.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _235.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Proposal;
                fromJSON(object: any): _235.Proposal;
                toJSON(message: _235.Proposal): unknown;
                fromPartial(object: Partial<_235.Proposal>): _235.Proposal;
                fromAmino(object: _235.ProposalAmino): _235.Proposal;
                toAmino(message: _235.Proposal): _235.ProposalAmino;
                fromAminoMsg(object: _235.ProposalAminoMsg): _235.Proposal;
                toAminoMsg(message: _235.Proposal): _235.ProposalAminoMsg;
                fromProtoMsg(message: _235.ProposalProtoMsg): _235.Proposal;
                toProto(message: _235.Proposal): Uint8Array;
                toProtoMsg(message: _235.Proposal): _235.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _235.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.TallyResult;
                fromJSON(object: any): _235.TallyResult;
                toJSON(message: _235.TallyResult): unknown;
                fromPartial(object: Partial<_235.TallyResult>): _235.TallyResult;
                fromAmino(object: _235.TallyResultAmino): _235.TallyResult;
                toAmino(message: _235.TallyResult): _235.TallyResultAmino;
                fromAminoMsg(object: _235.TallyResultAminoMsg): _235.TallyResult;
                toAminoMsg(message: _235.TallyResult): _235.TallyResultAminoMsg;
                fromProtoMsg(message: _235.TallyResultProtoMsg): _235.TallyResult;
                toProto(message: _235.TallyResult): Uint8Array;
                toProtoMsg(message: _235.TallyResult): _235.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _235.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.Vote;
                fromJSON(object: any): _235.Vote;
                toJSON(message: _235.Vote): unknown;
                fromPartial(object: Partial<_235.Vote>): _235.Vote;
                fromAmino(object: _235.VoteAmino): _235.Vote;
                toAmino(message: _235.Vote): _235.VoteAmino;
                fromAminoMsg(object: _235.VoteAminoMsg): _235.Vote;
                toAminoMsg(message: _235.Vote): _235.VoteAminoMsg;
                fromProtoMsg(message: _235.VoteProtoMsg): _235.Vote;
                toProto(message: _235.Vote): Uint8Array;
                toProtoMsg(message: _235.Vote): _235.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _235.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.DepositParams;
                fromJSON(object: any): _235.DepositParams;
                toJSON(message: _235.DepositParams): unknown;
                fromPartial(object: Partial<_235.DepositParams>): _235.DepositParams;
                fromAmino(object: _235.DepositParamsAmino): _235.DepositParams;
                toAmino(message: _235.DepositParams): _235.DepositParamsAmino;
                fromAminoMsg(object: _235.DepositParamsAminoMsg): _235.DepositParams;
                toAminoMsg(message: _235.DepositParams): _235.DepositParamsAminoMsg;
                fromProtoMsg(message: _235.DepositParamsProtoMsg): _235.DepositParams;
                toProto(message: _235.DepositParams): Uint8Array;
                toProtoMsg(message: _235.DepositParams): _235.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _235.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.VotingParams;
                fromJSON(object: any): _235.VotingParams;
                toJSON(message: _235.VotingParams): unknown;
                fromPartial(object: Partial<_235.VotingParams>): _235.VotingParams;
                fromAmino(object: _235.VotingParamsAmino): _235.VotingParams;
                toAmino(message: _235.VotingParams): _235.VotingParamsAmino;
                fromAminoMsg(object: _235.VotingParamsAminoMsg): _235.VotingParams;
                toAminoMsg(message: _235.VotingParams): _235.VotingParamsAminoMsg;
                fromProtoMsg(message: _235.VotingParamsProtoMsg): _235.VotingParams;
                toProto(message: _235.VotingParams): Uint8Array;
                toProtoMsg(message: _235.VotingParams): _235.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _235.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.TallyParams;
                fromJSON(object: any): _235.TallyParams;
                toJSON(message: _235.TallyParams): unknown;
                fromPartial(object: Partial<_235.TallyParams>): _235.TallyParams;
                fromAmino(object: _235.TallyParamsAmino): _235.TallyParams;
                toAmino(message: _235.TallyParams): _235.TallyParamsAmino;
                fromAminoMsg(object: _235.TallyParamsAminoMsg): _235.TallyParams;
                toAminoMsg(message: _235.TallyParams): _235.TallyParamsAminoMsg;
                fromProtoMsg(message: _235.TallyParamsProtoMsg): _235.TallyParams;
                toProto(message: _235.TallyParams): Uint8Array;
                toProtoMsg(message: _235.TallyParams): _235.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _234.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.GenesisState;
                fromJSON(object: any): _234.GenesisState;
                toJSON(message: _234.GenesisState): unknown;
                fromPartial(object: Partial<_234.GenesisState>): _234.GenesisState;
                fromAmino(object: _234.GenesisStateAmino): _234.GenesisState;
                toAmino(message: _234.GenesisState): _234.GenesisStateAmino;
                fromAminoMsg(object: _234.GenesisStateAminoMsg): _234.GenesisState;
                toAminoMsg(message: _234.GenesisState): _234.GenesisStateAminoMsg;
                fromProtoMsg(message: _234.GenesisStateProtoMsg): _234.GenesisState;
                toProto(message: _234.GenesisState): Uint8Array;
                toProtoMsg(message: _234.GenesisState): _234.GenesisStateProtoMsg;
            };
        };
        const v1beta1: {
            MsgClientImpl: typeof _448.MsgClientImpl;
            QueryClientImpl: typeof _432.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _240.QueryProposalRequest): Promise<_240.QueryProposalResponse>;
                proposals(request: _240.QueryProposalsRequest): Promise<_240.QueryProposalsResponse>;
                vote(request: _240.QueryVoteRequest): Promise<_240.QueryVoteResponse>;
                votes(request: _240.QueryVotesRequest): Promise<_240.QueryVotesResponse>;
                params(request: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                deposit(request: _240.QueryDepositRequest): Promise<_240.QueryDepositResponse>;
                deposits(request: _240.QueryDepositsRequest): Promise<_240.QueryDepositsResponse>;
                tallyResult(request: _240.QueryTallyResultRequest): Promise<_240.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _241.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _241.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _241.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _241.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _241.MsgSubmitProposal;
                    };
                    vote(value: _241.MsgVote): {
                        typeUrl: string;
                        value: _241.MsgVote;
                    };
                    voteWeighted(value: _241.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _241.MsgVoteWeighted;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: _241.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _241.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _241.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _241.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _241.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _241.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _241.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _241.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _241.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _241.MsgSubmitProposal;
                    };
                    vote(value: _241.MsgVote): {
                        typeUrl: string;
                        value: _241.MsgVote;
                    };
                    voteWeighted(value: _241.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _241.MsgVoteWeighted;
                    };
                    deposit(value: _241.MsgDeposit): {
                        typeUrl: string;
                        value: _241.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _241.MsgSubmitProposal) => _241.MsgSubmitProposalAmino;
                    fromAmino: (object: _241.MsgSubmitProposalAmino) => _241.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _241.MsgVote) => _241.MsgVoteAmino;
                    fromAmino: (object: _241.MsgVoteAmino) => _241.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _241.MsgVoteWeighted) => _241.MsgVoteWeightedAmino;
                    fromAmino: (object: _241.MsgVoteWeightedAmino) => _241.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _241.MsgDeposit) => _241.MsgDepositAmino;
                    fromAmino: (object: _241.MsgDepositAmino) => _241.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _241.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgSubmitProposal;
                fromJSON(object: any): _241.MsgSubmitProposal;
                toJSON(message: _241.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_241.MsgSubmitProposal>): _241.MsgSubmitProposal;
                fromAmino(object: _241.MsgSubmitProposalAmino): _241.MsgSubmitProposal;
                toAmino(message: _241.MsgSubmitProposal): _241.MsgSubmitProposalAmino;
                fromAminoMsg(object: _241.MsgSubmitProposalAminoMsg): _241.MsgSubmitProposal;
                toAminoMsg(message: _241.MsgSubmitProposal): _241.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _241.MsgSubmitProposalProtoMsg): _241.MsgSubmitProposal;
                toProto(message: _241.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _241.MsgSubmitProposal): _241.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _241.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgSubmitProposalResponse;
                fromJSON(object: any): _241.MsgSubmitProposalResponse;
                toJSON(message: _241.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_241.MsgSubmitProposalResponse>): _241.MsgSubmitProposalResponse;
                fromAmino(object: _241.MsgSubmitProposalResponseAmino): _241.MsgSubmitProposalResponse;
                toAmino(message: _241.MsgSubmitProposalResponse): _241.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _241.MsgSubmitProposalResponseAminoMsg): _241.MsgSubmitProposalResponse;
                toAminoMsg(message: _241.MsgSubmitProposalResponse): _241.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _241.MsgSubmitProposalResponseProtoMsg): _241.MsgSubmitProposalResponse;
                toProto(message: _241.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _241.MsgSubmitProposalResponse): _241.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _241.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgVote;
                fromJSON(object: any): _241.MsgVote;
                toJSON(message: _241.MsgVote): unknown;
                fromPartial(object: Partial<_241.MsgVote>): _241.MsgVote;
                fromAmino(object: _241.MsgVoteAmino): _241.MsgVote;
                toAmino(message: _241.MsgVote): _241.MsgVoteAmino;
                fromAminoMsg(object: _241.MsgVoteAminoMsg): _241.MsgVote;
                toAminoMsg(message: _241.MsgVote): _241.MsgVoteAminoMsg;
                fromProtoMsg(message: _241.MsgVoteProtoMsg): _241.MsgVote;
                toProto(message: _241.MsgVote): Uint8Array;
                toProtoMsg(message: _241.MsgVote): _241.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _241.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgVoteResponse;
                fromJSON(_: any): _241.MsgVoteResponse;
                toJSON(_: _241.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_241.MsgVoteResponse>): _241.MsgVoteResponse;
                fromAmino(_: _241.MsgVoteResponseAmino): _241.MsgVoteResponse;
                toAmino(_: _241.MsgVoteResponse): _241.MsgVoteResponseAmino;
                fromAminoMsg(object: _241.MsgVoteResponseAminoMsg): _241.MsgVoteResponse;
                toAminoMsg(message: _241.MsgVoteResponse): _241.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _241.MsgVoteResponseProtoMsg): _241.MsgVoteResponse;
                toProto(message: _241.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _241.MsgVoteResponse): _241.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _241.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgVoteWeighted;
                fromJSON(object: any): _241.MsgVoteWeighted;
                toJSON(message: _241.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_241.MsgVoteWeighted>): _241.MsgVoteWeighted;
                fromAmino(object: _241.MsgVoteWeightedAmino): _241.MsgVoteWeighted;
                toAmino(message: _241.MsgVoteWeighted): _241.MsgVoteWeightedAmino;
                fromAminoMsg(object: _241.MsgVoteWeightedAminoMsg): _241.MsgVoteWeighted;
                toAminoMsg(message: _241.MsgVoteWeighted): _241.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _241.MsgVoteWeightedProtoMsg): _241.MsgVoteWeighted;
                toProto(message: _241.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _241.MsgVoteWeighted): _241.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _241.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgVoteWeightedResponse;
                fromJSON(_: any): _241.MsgVoteWeightedResponse;
                toJSON(_: _241.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_241.MsgVoteWeightedResponse>): _241.MsgVoteWeightedResponse;
                fromAmino(_: _241.MsgVoteWeightedResponseAmino): _241.MsgVoteWeightedResponse;
                toAmino(_: _241.MsgVoteWeightedResponse): _241.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _241.MsgVoteWeightedResponseAminoMsg): _241.MsgVoteWeightedResponse;
                toAminoMsg(message: _241.MsgVoteWeightedResponse): _241.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _241.MsgVoteWeightedResponseProtoMsg): _241.MsgVoteWeightedResponse;
                toProto(message: _241.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _241.MsgVoteWeightedResponse): _241.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _241.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgDeposit;
                fromJSON(object: any): _241.MsgDeposit;
                toJSON(message: _241.MsgDeposit): unknown;
                fromPartial(object: Partial<_241.MsgDeposit>): _241.MsgDeposit;
                fromAmino(object: _241.MsgDepositAmino): _241.MsgDeposit;
                toAmino(message: _241.MsgDeposit): _241.MsgDepositAmino;
                fromAminoMsg(object: _241.MsgDepositAminoMsg): _241.MsgDeposit;
                toAminoMsg(message: _241.MsgDeposit): _241.MsgDepositAminoMsg;
                fromProtoMsg(message: _241.MsgDepositProtoMsg): _241.MsgDeposit;
                toProto(message: _241.MsgDeposit): Uint8Array;
                toProtoMsg(message: _241.MsgDeposit): _241.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _241.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgDepositResponse;
                fromJSON(_: any): _241.MsgDepositResponse;
                toJSON(_: _241.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_241.MsgDepositResponse>): _241.MsgDepositResponse;
                fromAmino(_: _241.MsgDepositResponseAmino): _241.MsgDepositResponse;
                toAmino(_: _241.MsgDepositResponse): _241.MsgDepositResponseAmino;
                fromAminoMsg(object: _241.MsgDepositResponseAminoMsg): _241.MsgDepositResponse;
                toAminoMsg(message: _241.MsgDepositResponse): _241.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _241.MsgDepositResponseProtoMsg): _241.MsgDepositResponse;
                toProto(message: _241.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _241.MsgDepositResponse): _241.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _240.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryProposalRequest;
                fromJSON(object: any): _240.QueryProposalRequest;
                toJSON(message: _240.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_240.QueryProposalRequest>): _240.QueryProposalRequest;
                fromAmino(object: _240.QueryProposalRequestAmino): _240.QueryProposalRequest;
                toAmino(message: _240.QueryProposalRequest): _240.QueryProposalRequestAmino;
                fromAminoMsg(object: _240.QueryProposalRequestAminoMsg): _240.QueryProposalRequest;
                toAminoMsg(message: _240.QueryProposalRequest): _240.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _240.QueryProposalRequestProtoMsg): _240.QueryProposalRequest;
                toProto(message: _240.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _240.QueryProposalRequest): _240.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _240.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryProposalResponse;
                fromJSON(object: any): _240.QueryProposalResponse;
                toJSON(message: _240.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_240.QueryProposalResponse>): _240.QueryProposalResponse;
                fromAmino(object: _240.QueryProposalResponseAmino): _240.QueryProposalResponse;
                toAmino(message: _240.QueryProposalResponse): _240.QueryProposalResponseAmino;
                fromAminoMsg(object: _240.QueryProposalResponseAminoMsg): _240.QueryProposalResponse;
                toAminoMsg(message: _240.QueryProposalResponse): _240.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _240.QueryProposalResponseProtoMsg): _240.QueryProposalResponse;
                toProto(message: _240.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _240.QueryProposalResponse): _240.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _240.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryProposalsRequest;
                fromJSON(object: any): _240.QueryProposalsRequest;
                toJSON(message: _240.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_240.QueryProposalsRequest>): _240.QueryProposalsRequest;
                fromAmino(object: _240.QueryProposalsRequestAmino): _240.QueryProposalsRequest;
                toAmino(message: _240.QueryProposalsRequest): _240.QueryProposalsRequestAmino;
                fromAminoMsg(object: _240.QueryProposalsRequestAminoMsg): _240.QueryProposalsRequest;
                toAminoMsg(message: _240.QueryProposalsRequest): _240.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryProposalsRequestProtoMsg): _240.QueryProposalsRequest;
                toProto(message: _240.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryProposalsRequest): _240.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _240.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryProposalsResponse;
                fromJSON(object: any): _240.QueryProposalsResponse;
                toJSON(message: _240.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_240.QueryProposalsResponse>): _240.QueryProposalsResponse;
                fromAmino(object: _240.QueryProposalsResponseAmino): _240.QueryProposalsResponse;
                toAmino(message: _240.QueryProposalsResponse): _240.QueryProposalsResponseAmino;
                fromAminoMsg(object: _240.QueryProposalsResponseAminoMsg): _240.QueryProposalsResponse;
                toAminoMsg(message: _240.QueryProposalsResponse): _240.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryProposalsResponseProtoMsg): _240.QueryProposalsResponse;
                toProto(message: _240.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryProposalsResponse): _240.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _240.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryVoteRequest;
                fromJSON(object: any): _240.QueryVoteRequest;
                toJSON(message: _240.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_240.QueryVoteRequest>): _240.QueryVoteRequest;
                fromAmino(object: _240.QueryVoteRequestAmino): _240.QueryVoteRequest;
                toAmino(message: _240.QueryVoteRequest): _240.QueryVoteRequestAmino;
                fromAminoMsg(object: _240.QueryVoteRequestAminoMsg): _240.QueryVoteRequest;
                toAminoMsg(message: _240.QueryVoteRequest): _240.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _240.QueryVoteRequestProtoMsg): _240.QueryVoteRequest;
                toProto(message: _240.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _240.QueryVoteRequest): _240.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _240.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryVoteResponse;
                fromJSON(object: any): _240.QueryVoteResponse;
                toJSON(message: _240.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_240.QueryVoteResponse>): _240.QueryVoteResponse;
                fromAmino(object: _240.QueryVoteResponseAmino): _240.QueryVoteResponse;
                toAmino(message: _240.QueryVoteResponse): _240.QueryVoteResponseAmino;
                fromAminoMsg(object: _240.QueryVoteResponseAminoMsg): _240.QueryVoteResponse;
                toAminoMsg(message: _240.QueryVoteResponse): _240.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _240.QueryVoteResponseProtoMsg): _240.QueryVoteResponse;
                toProto(message: _240.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _240.QueryVoteResponse): _240.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _240.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryVotesRequest;
                fromJSON(object: any): _240.QueryVotesRequest;
                toJSON(message: _240.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_240.QueryVotesRequest>): _240.QueryVotesRequest;
                fromAmino(object: _240.QueryVotesRequestAmino): _240.QueryVotesRequest;
                toAmino(message: _240.QueryVotesRequest): _240.QueryVotesRequestAmino;
                fromAminoMsg(object: _240.QueryVotesRequestAminoMsg): _240.QueryVotesRequest;
                toAminoMsg(message: _240.QueryVotesRequest): _240.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _240.QueryVotesRequestProtoMsg): _240.QueryVotesRequest;
                toProto(message: _240.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _240.QueryVotesRequest): _240.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _240.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryVotesResponse;
                fromJSON(object: any): _240.QueryVotesResponse;
                toJSON(message: _240.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_240.QueryVotesResponse>): _240.QueryVotesResponse;
                fromAmino(object: _240.QueryVotesResponseAmino): _240.QueryVotesResponse;
                toAmino(message: _240.QueryVotesResponse): _240.QueryVotesResponseAmino;
                fromAminoMsg(object: _240.QueryVotesResponseAminoMsg): _240.QueryVotesResponse;
                toAminoMsg(message: _240.QueryVotesResponse): _240.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _240.QueryVotesResponseProtoMsg): _240.QueryVotesResponse;
                toProto(message: _240.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _240.QueryVotesResponse): _240.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _240.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryParamsRequest;
                fromJSON(object: any): _240.QueryParamsRequest;
                toJSON(message: _240.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_240.QueryParamsRequest>): _240.QueryParamsRequest;
                fromAmino(object: _240.QueryParamsRequestAmino): _240.QueryParamsRequest;
                toAmino(message: _240.QueryParamsRequest): _240.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                encode(message: _240.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDepositRequest;
                fromJSON(object: any): _240.QueryDepositRequest;
                toJSON(message: _240.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_240.QueryDepositRequest>): _240.QueryDepositRequest;
                fromAmino(object: _240.QueryDepositRequestAmino): _240.QueryDepositRequest;
                toAmino(message: _240.QueryDepositRequest): _240.QueryDepositRequestAmino;
                fromAminoMsg(object: _240.QueryDepositRequestAminoMsg): _240.QueryDepositRequest;
                toAminoMsg(message: _240.QueryDepositRequest): _240.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDepositRequestProtoMsg): _240.QueryDepositRequest;
                toProto(message: _240.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDepositRequest): _240.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _240.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDepositResponse;
                fromJSON(object: any): _240.QueryDepositResponse;
                toJSON(message: _240.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_240.QueryDepositResponse>): _240.QueryDepositResponse;
                fromAmino(object: _240.QueryDepositResponseAmino): _240.QueryDepositResponse;
                toAmino(message: _240.QueryDepositResponse): _240.QueryDepositResponseAmino;
                fromAminoMsg(object: _240.QueryDepositResponseAminoMsg): _240.QueryDepositResponse;
                toAminoMsg(message: _240.QueryDepositResponse): _240.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDepositResponseProtoMsg): _240.QueryDepositResponse;
                toProto(message: _240.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDepositResponse): _240.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _240.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDepositsRequest;
                fromJSON(object: any): _240.QueryDepositsRequest;
                toJSON(message: _240.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_240.QueryDepositsRequest>): _240.QueryDepositsRequest;
                fromAmino(object: _240.QueryDepositsRequestAmino): _240.QueryDepositsRequest;
                toAmino(message: _240.QueryDepositsRequest): _240.QueryDepositsRequestAmino;
                fromAminoMsg(object: _240.QueryDepositsRequestAminoMsg): _240.QueryDepositsRequest;
                toAminoMsg(message: _240.QueryDepositsRequest): _240.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _240.QueryDepositsRequestProtoMsg): _240.QueryDepositsRequest;
                toProto(message: _240.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _240.QueryDepositsRequest): _240.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _240.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryDepositsResponse;
                fromJSON(object: any): _240.QueryDepositsResponse;
                toJSON(message: _240.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_240.QueryDepositsResponse>): _240.QueryDepositsResponse;
                fromAmino(object: _240.QueryDepositsResponseAmino): _240.QueryDepositsResponse;
                toAmino(message: _240.QueryDepositsResponse): _240.QueryDepositsResponseAmino;
                fromAminoMsg(object: _240.QueryDepositsResponseAminoMsg): _240.QueryDepositsResponse;
                toAminoMsg(message: _240.QueryDepositsResponse): _240.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _240.QueryDepositsResponseProtoMsg): _240.QueryDepositsResponse;
                toProto(message: _240.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _240.QueryDepositsResponse): _240.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _240.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryTallyResultRequest;
                fromJSON(object: any): _240.QueryTallyResultRequest;
                toJSON(message: _240.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_240.QueryTallyResultRequest>): _240.QueryTallyResultRequest;
                fromAmino(object: _240.QueryTallyResultRequestAmino): _240.QueryTallyResultRequest;
                toAmino(message: _240.QueryTallyResultRequest): _240.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _240.QueryTallyResultRequestAminoMsg): _240.QueryTallyResultRequest;
                toAminoMsg(message: _240.QueryTallyResultRequest): _240.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _240.QueryTallyResultRequestProtoMsg): _240.QueryTallyResultRequest;
                toProto(message: _240.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _240.QueryTallyResultRequest): _240.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _240.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryTallyResultResponse;
                fromJSON(object: any): _240.QueryTallyResultResponse;
                toJSON(message: _240.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_240.QueryTallyResultResponse>): _240.QueryTallyResultResponse;
                fromAmino(object: _240.QueryTallyResultResponseAmino): _240.QueryTallyResultResponse;
                toAmino(message: _240.QueryTallyResultResponse): _240.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _240.QueryTallyResultResponseAminoMsg): _240.QueryTallyResultResponse;
                toAminoMsg(message: _240.QueryTallyResultResponse): _240.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _240.QueryTallyResultResponseProtoMsg): _240.QueryTallyResultResponse;
                toProto(message: _240.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _240.QueryTallyResultResponse): _240.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _239.VoteOption;
            voteOptionToJSON(object: _239.VoteOption): string;
            proposalStatusFromJSON(object: any): _239.ProposalStatus;
            proposalStatusToJSON(object: _239.ProposalStatus): string;
            VoteOption: typeof _239.VoteOption;
            VoteOptionSDKType: typeof _239.VoteOption;
            VoteOptionAmino: typeof _239.VoteOption;
            ProposalStatus: typeof _239.ProposalStatus;
            ProposalStatusSDKType: typeof _239.ProposalStatus;
            ProposalStatusAmino: typeof _239.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _239.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.WeightedVoteOption;
                fromJSON(object: any): _239.WeightedVoteOption;
                toJSON(message: _239.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_239.WeightedVoteOption>): _239.WeightedVoteOption;
                fromAmino(object: _239.WeightedVoteOptionAmino): _239.WeightedVoteOption;
                toAmino(message: _239.WeightedVoteOption): _239.WeightedVoteOptionAmino;
                fromAminoMsg(object: _239.WeightedVoteOptionAminoMsg): _239.WeightedVoteOption;
                toAminoMsg(message: _239.WeightedVoteOption): _239.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _239.WeightedVoteOptionProtoMsg): _239.WeightedVoteOption;
                toProto(message: _239.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _239.WeightedVoteOption): _239.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _239.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.TextProposal;
                fromJSON(object: any): _239.TextProposal;
                toJSON(message: _239.TextProposal): unknown;
                fromPartial(object: Partial<_239.TextProposal>): _239.TextProposal;
                fromAmino(object: _239.TextProposalAmino): _239.TextProposal;
                toAmino(message: _239.TextProposal): _239.TextProposalAmino;
                fromAminoMsg(object: _239.TextProposalAminoMsg): _239.TextProposal;
                toAminoMsg(message: _239.TextProposal): _239.TextProposalAminoMsg;
                fromProtoMsg(message: _239.TextProposalProtoMsg): _239.TextProposal;
                toProto(message: _239.TextProposal): Uint8Array;
                toProtoMsg(message: _239.TextProposal): _239.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _239.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Deposit;
                fromJSON(object: any): _239.Deposit;
                toJSON(message: _239.Deposit): unknown;
                fromPartial(object: Partial<_239.Deposit>): _239.Deposit;
                fromAmino(object: _239.DepositAmino): _239.Deposit;
                toAmino(message: _239.Deposit): _239.DepositAmino;
                fromAminoMsg(object: _239.DepositAminoMsg): _239.Deposit;
                toAminoMsg(message: _239.Deposit): _239.DepositAminoMsg;
                fromProtoMsg(message: _239.DepositProtoMsg): _239.Deposit;
                toProto(message: _239.Deposit): Uint8Array;
                toProtoMsg(message: _239.Deposit): _239.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _239.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Proposal;
                fromJSON(object: any): _239.Proposal;
                toJSON(message: _239.Proposal): unknown;
                fromPartial(object: Partial<_239.Proposal>): _239.Proposal;
                fromAmino(object: _239.ProposalAmino): _239.Proposal;
                toAmino(message: _239.Proposal): _239.ProposalAmino;
                fromAminoMsg(object: _239.ProposalAminoMsg): _239.Proposal;
                toAminoMsg(message: _239.Proposal): _239.ProposalAminoMsg;
                fromProtoMsg(message: _239.ProposalProtoMsg): _239.Proposal;
                toProto(message: _239.Proposal): Uint8Array;
                toProtoMsg(message: _239.Proposal): _239.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _239.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.TallyResult;
                fromJSON(object: any): _239.TallyResult;
                toJSON(message: _239.TallyResult): unknown;
                fromPartial(object: Partial<_239.TallyResult>): _239.TallyResult;
                fromAmino(object: _239.TallyResultAmino): _239.TallyResult;
                toAmino(message: _239.TallyResult): _239.TallyResultAmino;
                fromAminoMsg(object: _239.TallyResultAminoMsg): _239.TallyResult;
                toAminoMsg(message: _239.TallyResult): _239.TallyResultAminoMsg;
                fromProtoMsg(message: _239.TallyResultProtoMsg): _239.TallyResult;
                toProto(message: _239.TallyResult): Uint8Array;
                toProtoMsg(message: _239.TallyResult): _239.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _239.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.Vote;
                fromJSON(object: any): _239.Vote;
                toJSON(message: _239.Vote): unknown;
                fromPartial(object: Partial<_239.Vote>): _239.Vote;
                fromAmino(object: _239.VoteAmino): _239.Vote;
                toAmino(message: _239.Vote): _239.VoteAmino;
                fromAminoMsg(object: _239.VoteAminoMsg): _239.Vote;
                toAminoMsg(message: _239.Vote): _239.VoteAminoMsg;
                fromProtoMsg(message: _239.VoteProtoMsg): _239.Vote;
                toProto(message: _239.Vote): Uint8Array;
                toProtoMsg(message: _239.Vote): _239.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _239.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.DepositParams;
                fromJSON(object: any): _239.DepositParams;
                toJSON(message: _239.DepositParams): unknown;
                fromPartial(object: Partial<_239.DepositParams>): _239.DepositParams;
                fromAmino(object: _239.DepositParamsAmino): _239.DepositParams;
                toAmino(message: _239.DepositParams): _239.DepositParamsAmino;
                fromAminoMsg(object: _239.DepositParamsAminoMsg): _239.DepositParams;
                toAminoMsg(message: _239.DepositParams): _239.DepositParamsAminoMsg;
                fromProtoMsg(message: _239.DepositParamsProtoMsg): _239.DepositParams;
                toProto(message: _239.DepositParams): Uint8Array;
                toProtoMsg(message: _239.DepositParams): _239.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _239.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.VotingParams;
                fromJSON(object: any): _239.VotingParams;
                toJSON(message: _239.VotingParams): unknown;
                fromPartial(object: Partial<_239.VotingParams>): _239.VotingParams;
                fromAmino(object: _239.VotingParamsAmino): _239.VotingParams;
                toAmino(message: _239.VotingParams): _239.VotingParamsAmino;
                fromAminoMsg(object: _239.VotingParamsAminoMsg): _239.VotingParams;
                toAminoMsg(message: _239.VotingParams): _239.VotingParamsAminoMsg;
                fromProtoMsg(message: _239.VotingParamsProtoMsg): _239.VotingParams;
                toProto(message: _239.VotingParams): Uint8Array;
                toProtoMsg(message: _239.VotingParams): _239.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _239.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _239.TallyParams;
                fromJSON(object: any): _239.TallyParams;
                toJSON(message: _239.TallyParams): unknown;
                fromPartial(object: Partial<_239.TallyParams>): _239.TallyParams;
                fromAmino(object: _239.TallyParamsAmino): _239.TallyParams;
                toAmino(message: _239.TallyParams): _239.TallyParamsAmino;
                fromAminoMsg(object: _239.TallyParamsAminoMsg): _239.TallyParams;
                toAminoMsg(message: _239.TallyParams): _239.TallyParamsAminoMsg;
                fromProtoMsg(message: _239.TallyParamsProtoMsg): _239.TallyParams;
                toProto(message: _239.TallyParams): Uint8Array;
                toProtoMsg(message: _239.TallyParams): _239.TallyParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _238.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.GenesisState;
                fromJSON(object: any): _238.GenesisState;
                toJSON(message: _238.GenesisState): unknown;
                fromPartial(object: Partial<_238.GenesisState>): _238.GenesisState;
                fromAmino(object: _238.GenesisStateAmino): _238.GenesisState;
                toAmino(message: _238.GenesisState): _238.GenesisStateAmino;
                fromAminoMsg(object: _238.GenesisStateAminoMsg): _238.GenesisState;
                toAminoMsg(message: _238.GenesisState): _238.GenesisStateAminoMsg;
                fromProtoMsg(message: _238.GenesisStateProtoMsg): _238.GenesisState;
                toProto(message: _238.GenesisState): Uint8Array;
                toProtoMsg(message: _238.GenesisState): _238.GenesisStateProtoMsg;
            };
        };
    }
    namespace group {
        const v1: {
            MsgClientImpl: typeof _449.MsgClientImpl;
            QueryClientImpl: typeof _433.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _244.QueryGroupInfoRequest): Promise<_244.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _244.QueryGroupPolicyInfoRequest): Promise<_244.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _244.QueryGroupMembersRequest): Promise<_244.QueryGroupMembersResponse>;
                groupsByAdmin(request: _244.QueryGroupsByAdminRequest): Promise<_244.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _244.QueryGroupPoliciesByGroupRequest): Promise<_244.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _244.QueryGroupPoliciesByAdminRequest): Promise<_244.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _244.QueryProposalRequest): Promise<_244.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _244.QueryProposalsByGroupPolicyRequest): Promise<_244.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _244.QueryVoteByProposalVoterRequest): Promise<_244.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _244.QueryVotesByProposalRequest): Promise<_244.QueryVotesByProposalResponse>;
                votesByVoter(request: _244.QueryVotesByVoterRequest): Promise<_244.QueryVotesByVoterResponse>;
                groupsByMember(request: _244.QueryGroupsByMemberRequest): Promise<_244.QueryGroupsByMemberResponse>;
                tallyResult(request: _244.QueryTallyResultRequest): Promise<_244.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _245.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _245.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _245.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _245.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _245.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _245.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _245.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _245.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _245.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _245.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _245.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _245.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _245.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _245.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _245.MsgCreateGroup): {
                        typeUrl: string;
                        value: _245.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _245.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _245.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _245.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _245.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _245.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _245.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _245.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _245.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _245.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _245.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _245.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _245.MsgWithdrawProposal;
                    };
                    vote(value: _245.MsgVote): {
                        typeUrl: string;
                        value: _245.MsgVote;
                    };
                    exec(value: _245.MsgExec): {
                        typeUrl: string;
                        value: _245.MsgExec;
                    };
                    leaveGroup(value: _245.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _245.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _245.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _245.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _245.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _245.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _245.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _245.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _245.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _245.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _245.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _245.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _245.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _245.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _245.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _245.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _245.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _245.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _245.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _245.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _245.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _245.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _245.MsgCreateGroup): {
                        typeUrl: string;
                        value: _245.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _245.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _245.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _245.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _245.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _245.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _245.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _245.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _245.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _245.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _245.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _245.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _245.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _245.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _245.MsgWithdrawProposal;
                    };
                    vote(value: _245.MsgVote): {
                        typeUrl: string;
                        value: _245.MsgVote;
                    };
                    exec(value: _245.MsgExec): {
                        typeUrl: string;
                        value: _245.MsgExec;
                    };
                    leaveGroup(value: _245.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _245.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _245.MsgCreateGroup) => _245.MsgCreateGroupAmino;
                    fromAmino: (object: _245.MsgCreateGroupAmino) => _245.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupMembers) => _245.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _245.MsgUpdateGroupMembersAmino) => _245.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupAdmin) => _245.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _245.MsgUpdateGroupAdminAmino) => _245.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupMetadata) => _245.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _245.MsgUpdateGroupMetadataAmino) => _245.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _245.MsgCreateGroupPolicy) => _245.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _245.MsgCreateGroupPolicyAmino) => _245.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _245.MsgCreateGroupWithPolicy) => _245.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _245.MsgCreateGroupWithPolicyAmino) => _245.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupPolicyAdmin) => _245.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _245.MsgUpdateGroupPolicyAdminAmino) => _245.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupPolicyDecisionPolicy) => _245.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _245.MsgUpdateGroupPolicyDecisionPolicyAmino) => _245.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _245.MsgUpdateGroupPolicyMetadata) => _245.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _245.MsgUpdateGroupPolicyMetadataAmino) => _245.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _245.MsgSubmitProposal) => _245.MsgSubmitProposalAmino;
                    fromAmino: (object: _245.MsgSubmitProposalAmino) => _245.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _245.MsgWithdrawProposal) => _245.MsgWithdrawProposalAmino;
                    fromAmino: (object: _245.MsgWithdrawProposalAmino) => _245.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _245.MsgVote) => _245.MsgVoteAmino;
                    fromAmino: (object: _245.MsgVoteAmino) => _245.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _245.MsgExec) => _245.MsgExecAmino;
                    fromAmino: (object: _245.MsgExecAmino) => _245.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _245.MsgLeaveGroup) => _245.MsgLeaveGroupAmino;
                    fromAmino: (object: _245.MsgLeaveGroupAmino) => _245.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _246.VoteOption;
            voteOptionToJSON(object: _246.VoteOption): string;
            proposalStatusFromJSON(object: any): _246.ProposalStatus;
            proposalStatusToJSON(object: _246.ProposalStatus): string;
            proposalResultFromJSON(object: any): _246.ProposalResult;
            proposalResultToJSON(object: _246.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _246.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _246.ProposalExecutorResult): string;
            VoteOption: typeof _246.VoteOption;
            VoteOptionSDKType: typeof _246.VoteOption;
            VoteOptionAmino: typeof _246.VoteOption;
            ProposalStatus: typeof _246.ProposalStatus;
            ProposalStatusSDKType: typeof _246.ProposalStatus;
            ProposalStatusAmino: typeof _246.ProposalStatus;
            ProposalResult: typeof _246.ProposalResult;
            ProposalResultSDKType: typeof _246.ProposalResult;
            ProposalResultAmino: typeof _246.ProposalResult;
            ProposalExecutorResult: typeof _246.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _246.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _246.ProposalExecutorResult;
            Member: {
                encode(message: _246.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Member;
                fromJSON(object: any): _246.Member;
                toJSON(message: _246.Member): unknown;
                fromPartial(object: Partial<_246.Member>): _246.Member;
                fromAmino(object: _246.MemberAmino): _246.Member;
                toAmino(message: _246.Member): _246.MemberAmino;
                fromAminoMsg(object: _246.MemberAminoMsg): _246.Member;
                toAminoMsg(message: _246.Member): _246.MemberAminoMsg;
                fromProtoMsg(message: _246.MemberProtoMsg): _246.Member;
                toProto(message: _246.Member): Uint8Array;
                toProtoMsg(message: _246.Member): _246.MemberProtoMsg;
            };
            Members: {
                encode(message: _246.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Members;
                fromJSON(object: any): _246.Members;
                toJSON(message: _246.Members): unknown;
                fromPartial(object: Partial<_246.Members>): _246.Members;
                fromAmino(object: _246.MembersAmino): _246.Members;
                toAmino(message: _246.Members): _246.MembersAmino;
                fromAminoMsg(object: _246.MembersAminoMsg): _246.Members;
                toAminoMsg(message: _246.Members): _246.MembersAminoMsg;
                fromProtoMsg(message: _246.MembersProtoMsg): _246.Members;
                toProto(message: _246.Members): Uint8Array;
                toProtoMsg(message: _246.Members): _246.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _246.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.ThresholdDecisionPolicy;
                fromJSON(object: any): _246.ThresholdDecisionPolicy;
                toJSON(message: _246.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_246.ThresholdDecisionPolicy>): _246.ThresholdDecisionPolicy;
                fromAmino(object: _246.ThresholdDecisionPolicyAmino): _246.ThresholdDecisionPolicy;
                toAmino(message: _246.ThresholdDecisionPolicy): _246.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _246.ThresholdDecisionPolicyAminoMsg): _246.ThresholdDecisionPolicy;
                toAminoMsg(message: _246.ThresholdDecisionPolicy): _246.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _246.ThresholdDecisionPolicyProtoMsg): _246.ThresholdDecisionPolicy;
                toProto(message: _246.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _246.ThresholdDecisionPolicy): _246.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _246.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.PercentageDecisionPolicy;
                fromJSON(object: any): _246.PercentageDecisionPolicy;
                toJSON(message: _246.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_246.PercentageDecisionPolicy>): _246.PercentageDecisionPolicy;
                fromAmino(object: _246.PercentageDecisionPolicyAmino): _246.PercentageDecisionPolicy;
                toAmino(message: _246.PercentageDecisionPolicy): _246.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _246.PercentageDecisionPolicyAminoMsg): _246.PercentageDecisionPolicy;
                toAminoMsg(message: _246.PercentageDecisionPolicy): _246.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _246.PercentageDecisionPolicyProtoMsg): _246.PercentageDecisionPolicy;
                toProto(message: _246.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _246.PercentageDecisionPolicy): _246.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _246.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.DecisionPolicyWindows;
                fromJSON(object: any): _246.DecisionPolicyWindows;
                toJSON(message: _246.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_246.DecisionPolicyWindows>): _246.DecisionPolicyWindows;
                fromAmino(object: _246.DecisionPolicyWindowsAmino): _246.DecisionPolicyWindows;
                toAmino(message: _246.DecisionPolicyWindows): _246.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _246.DecisionPolicyWindowsAminoMsg): _246.DecisionPolicyWindows;
                toAminoMsg(message: _246.DecisionPolicyWindows): _246.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _246.DecisionPolicyWindowsProtoMsg): _246.DecisionPolicyWindows;
                toProto(message: _246.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _246.DecisionPolicyWindows): _246.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _246.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GroupInfo;
                fromJSON(object: any): _246.GroupInfo;
                toJSON(message: _246.GroupInfo): unknown;
                fromPartial(object: Partial<_246.GroupInfo>): _246.GroupInfo;
                fromAmino(object: _246.GroupInfoAmino): _246.GroupInfo;
                toAmino(message: _246.GroupInfo): _246.GroupInfoAmino;
                fromAminoMsg(object: _246.GroupInfoAminoMsg): _246.GroupInfo;
                toAminoMsg(message: _246.GroupInfo): _246.GroupInfoAminoMsg;
                fromProtoMsg(message: _246.GroupInfoProtoMsg): _246.GroupInfo;
                toProto(message: _246.GroupInfo): Uint8Array;
                toProtoMsg(message: _246.GroupInfo): _246.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _246.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GroupMember;
                fromJSON(object: any): _246.GroupMember;
                toJSON(message: _246.GroupMember): unknown;
                fromPartial(object: Partial<_246.GroupMember>): _246.GroupMember;
                fromAmino(object: _246.GroupMemberAmino): _246.GroupMember;
                toAmino(message: _246.GroupMember): _246.GroupMemberAmino;
                fromAminoMsg(object: _246.GroupMemberAminoMsg): _246.GroupMember;
                toAminoMsg(message: _246.GroupMember): _246.GroupMemberAminoMsg;
                fromProtoMsg(message: _246.GroupMemberProtoMsg): _246.GroupMember;
                toProto(message: _246.GroupMember): Uint8Array;
                toProtoMsg(message: _246.GroupMember): _246.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _246.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.GroupPolicyInfo;
                fromJSON(object: any): _246.GroupPolicyInfo;
                toJSON(message: _246.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_246.GroupPolicyInfo>): _246.GroupPolicyInfo;
                fromAmino(object: _246.GroupPolicyInfoAmino): _246.GroupPolicyInfo;
                toAmino(message: _246.GroupPolicyInfo): _246.GroupPolicyInfoAmino;
                fromAminoMsg(object: _246.GroupPolicyInfoAminoMsg): _246.GroupPolicyInfo;
                toAminoMsg(message: _246.GroupPolicyInfo): _246.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _246.GroupPolicyInfoProtoMsg): _246.GroupPolicyInfo;
                toProto(message: _246.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _246.GroupPolicyInfo): _246.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _246.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Proposal;
                fromJSON(object: any): _246.Proposal;
                toJSON(message: _246.Proposal): unknown;
                fromPartial(object: Partial<_246.Proposal>): _246.Proposal;
                fromAmino(object: _246.ProposalAmino): _246.Proposal;
                toAmino(message: _246.Proposal): _246.ProposalAmino;
                fromAminoMsg(object: _246.ProposalAminoMsg): _246.Proposal;
                toAminoMsg(message: _246.Proposal): _246.ProposalAminoMsg;
                fromProtoMsg(message: _246.ProposalProtoMsg): _246.Proposal;
                toProto(message: _246.Proposal): Uint8Array;
                toProtoMsg(message: _246.Proposal): _246.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _246.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.TallyResult;
                fromJSON(object: any): _246.TallyResult;
                toJSON(message: _246.TallyResult): unknown;
                fromPartial(object: Partial<_246.TallyResult>): _246.TallyResult;
                fromAmino(object: _246.TallyResultAmino): _246.TallyResult;
                toAmino(message: _246.TallyResult): _246.TallyResultAmino;
                fromAminoMsg(object: _246.TallyResultAminoMsg): _246.TallyResult;
                toAminoMsg(message: _246.TallyResult): _246.TallyResultAminoMsg;
                fromProtoMsg(message: _246.TallyResultProtoMsg): _246.TallyResult;
                toProto(message: _246.TallyResult): Uint8Array;
                toProtoMsg(message: _246.TallyResult): _246.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _246.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.Vote;
                fromJSON(object: any): _246.Vote;
                toJSON(message: _246.Vote): unknown;
                fromPartial(object: Partial<_246.Vote>): _246.Vote;
                fromAmino(object: _246.VoteAmino): _246.Vote;
                toAmino(message: _246.Vote): _246.VoteAmino;
                fromAminoMsg(object: _246.VoteAminoMsg): _246.Vote;
                toAminoMsg(message: _246.Vote): _246.VoteAminoMsg;
                fromProtoMsg(message: _246.VoteProtoMsg): _246.Vote;
                toProto(message: _246.Vote): Uint8Array;
                toProtoMsg(message: _246.Vote): _246.VoteProtoMsg;
            };
            execFromJSON(object: any): _245.Exec;
            execToJSON(object: _245.Exec): string;
            Exec: typeof _245.Exec;
            ExecSDKType: typeof _245.Exec;
            ExecAmino: typeof _245.Exec;
            MsgCreateGroup: {
                encode(message: _245.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroup;
                fromJSON(object: any): _245.MsgCreateGroup;
                toJSON(message: _245.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroup>): _245.MsgCreateGroup;
                fromAmino(object: _245.MsgCreateGroupAmino): _245.MsgCreateGroup;
                toAmino(message: _245.MsgCreateGroup): _245.MsgCreateGroupAmino;
                fromAminoMsg(object: _245.MsgCreateGroupAminoMsg): _245.MsgCreateGroup;
                toAminoMsg(message: _245.MsgCreateGroup): _245.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupProtoMsg): _245.MsgCreateGroup;
                toProto(message: _245.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroup): _245.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _245.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroupResponse;
                fromJSON(object: any): _245.MsgCreateGroupResponse;
                toJSON(message: _245.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroupResponse>): _245.MsgCreateGroupResponse;
                fromAmino(object: _245.MsgCreateGroupResponseAmino): _245.MsgCreateGroupResponse;
                toAmino(message: _245.MsgCreateGroupResponse): _245.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _245.MsgCreateGroupResponseAminoMsg): _245.MsgCreateGroupResponse;
                toAminoMsg(message: _245.MsgCreateGroupResponse): _245.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupResponseProtoMsg): _245.MsgCreateGroupResponse;
                toProto(message: _245.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroupResponse): _245.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _245.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupMembers;
                fromJSON(object: any): _245.MsgUpdateGroupMembers;
                toJSON(message: _245.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupMembers>): _245.MsgUpdateGroupMembers;
                fromAmino(object: _245.MsgUpdateGroupMembersAmino): _245.MsgUpdateGroupMembers;
                toAmino(message: _245.MsgUpdateGroupMembers): _245.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupMembersAminoMsg): _245.MsgUpdateGroupMembers;
                toAminoMsg(message: _245.MsgUpdateGroupMembers): _245.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupMembersProtoMsg): _245.MsgUpdateGroupMembers;
                toProto(message: _245.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupMembers): _245.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _245.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _245.MsgUpdateGroupMembersResponse;
                toJSON(_: _245.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupMembersResponse>): _245.MsgUpdateGroupMembersResponse;
                fromAmino(_: _245.MsgUpdateGroupMembersResponseAmino): _245.MsgUpdateGroupMembersResponse;
                toAmino(_: _245.MsgUpdateGroupMembersResponse): _245.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupMembersResponseAminoMsg): _245.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _245.MsgUpdateGroupMembersResponse): _245.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupMembersResponseProtoMsg): _245.MsgUpdateGroupMembersResponse;
                toProto(message: _245.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupMembersResponse): _245.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _245.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupAdmin;
                fromJSON(object: any): _245.MsgUpdateGroupAdmin;
                toJSON(message: _245.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupAdmin>): _245.MsgUpdateGroupAdmin;
                fromAmino(object: _245.MsgUpdateGroupAdminAmino): _245.MsgUpdateGroupAdmin;
                toAmino(message: _245.MsgUpdateGroupAdmin): _245.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupAdminAminoMsg): _245.MsgUpdateGroupAdmin;
                toAminoMsg(message: _245.MsgUpdateGroupAdmin): _245.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupAdminProtoMsg): _245.MsgUpdateGroupAdmin;
                toProto(message: _245.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupAdmin): _245.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _245.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _245.MsgUpdateGroupAdminResponse;
                toJSON(_: _245.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupAdminResponse>): _245.MsgUpdateGroupAdminResponse;
                fromAmino(_: _245.MsgUpdateGroupAdminResponseAmino): _245.MsgUpdateGroupAdminResponse;
                toAmino(_: _245.MsgUpdateGroupAdminResponse): _245.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupAdminResponseAminoMsg): _245.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _245.MsgUpdateGroupAdminResponse): _245.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupAdminResponseProtoMsg): _245.MsgUpdateGroupAdminResponse;
                toProto(message: _245.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupAdminResponse): _245.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _245.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupMetadata;
                fromJSON(object: any): _245.MsgUpdateGroupMetadata;
                toJSON(message: _245.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupMetadata>): _245.MsgUpdateGroupMetadata;
                fromAmino(object: _245.MsgUpdateGroupMetadataAmino): _245.MsgUpdateGroupMetadata;
                toAmino(message: _245.MsgUpdateGroupMetadata): _245.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupMetadataAminoMsg): _245.MsgUpdateGroupMetadata;
                toAminoMsg(message: _245.MsgUpdateGroupMetadata): _245.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupMetadataProtoMsg): _245.MsgUpdateGroupMetadata;
                toProto(message: _245.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupMetadata): _245.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _245.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _245.MsgUpdateGroupMetadataResponse;
                toJSON(_: _245.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupMetadataResponse>): _245.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _245.MsgUpdateGroupMetadataResponseAmino): _245.MsgUpdateGroupMetadataResponse;
                toAmino(_: _245.MsgUpdateGroupMetadataResponse): _245.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupMetadataResponseAminoMsg): _245.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _245.MsgUpdateGroupMetadataResponse): _245.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupMetadataResponseProtoMsg): _245.MsgUpdateGroupMetadataResponse;
                toProto(message: _245.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupMetadataResponse): _245.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _245.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroupPolicy;
                fromJSON(object: any): _245.MsgCreateGroupPolicy;
                toJSON(message: _245.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroupPolicy>): _245.MsgCreateGroupPolicy;
                fromAmino(object: _245.MsgCreateGroupPolicyAmino): _245.MsgCreateGroupPolicy;
                toAmino(message: _245.MsgCreateGroupPolicy): _245.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _245.MsgCreateGroupPolicyAminoMsg): _245.MsgCreateGroupPolicy;
                toAminoMsg(message: _245.MsgCreateGroupPolicy): _245.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupPolicyProtoMsg): _245.MsgCreateGroupPolicy;
                toProto(message: _245.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroupPolicy): _245.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _245.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _245.MsgCreateGroupPolicyResponse;
                toJSON(message: _245.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroupPolicyResponse>): _245.MsgCreateGroupPolicyResponse;
                fromAmino(object: _245.MsgCreateGroupPolicyResponseAmino): _245.MsgCreateGroupPolicyResponse;
                toAmino(message: _245.MsgCreateGroupPolicyResponse): _245.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _245.MsgCreateGroupPolicyResponseAminoMsg): _245.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _245.MsgCreateGroupPolicyResponse): _245.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupPolicyResponseProtoMsg): _245.MsgCreateGroupPolicyResponse;
                toProto(message: _245.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroupPolicyResponse): _245.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _245.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _245.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _245.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupPolicyAdmin>): _245.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _245.MsgUpdateGroupPolicyAdminAmino): _245.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _245.MsgUpdateGroupPolicyAdmin): _245.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyAdminAminoMsg): _245.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyAdmin): _245.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyAdminProtoMsg): _245.MsgUpdateGroupPolicyAdmin;
                toProto(message: _245.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyAdmin): _245.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _245.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _245.MsgCreateGroupWithPolicy;
                toJSON(message: _245.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroupWithPolicy>): _245.MsgCreateGroupWithPolicy;
                fromAmino(object: _245.MsgCreateGroupWithPolicyAmino): _245.MsgCreateGroupWithPolicy;
                toAmino(message: _245.MsgCreateGroupWithPolicy): _245.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _245.MsgCreateGroupWithPolicyAminoMsg): _245.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _245.MsgCreateGroupWithPolicy): _245.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupWithPolicyProtoMsg): _245.MsgCreateGroupWithPolicy;
                toProto(message: _245.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroupWithPolicy): _245.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _245.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _245.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _245.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_245.MsgCreateGroupWithPolicyResponse>): _245.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _245.MsgCreateGroupWithPolicyResponseAmino): _245.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _245.MsgCreateGroupWithPolicyResponse): _245.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _245.MsgCreateGroupWithPolicyResponseAminoMsg): _245.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _245.MsgCreateGroupWithPolicyResponse): _245.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _245.MsgCreateGroupWithPolicyResponseProtoMsg): _245.MsgCreateGroupWithPolicyResponse;
                toProto(message: _245.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _245.MsgCreateGroupWithPolicyResponse): _245.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _245.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _245.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _245.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupPolicyAdminResponse>): _245.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _245.MsgUpdateGroupPolicyAdminResponseAmino): _245.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _245.MsgUpdateGroupPolicyAdminResponse): _245.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyAdminResponseAminoMsg): _245.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyAdminResponse): _245.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyAdminResponseProtoMsg): _245.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _245.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyAdminResponse): _245.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _245.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _245.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _245.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupPolicyDecisionPolicy>): _245.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _245.MsgUpdateGroupPolicyDecisionPolicyAmino): _245.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _245.MsgUpdateGroupPolicyDecisionPolicy): _245.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _245.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicy): _245.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _245.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _245.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicy): _245.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _245.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _245.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupPolicyDecisionPolicyResponse>): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _245.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _245.MsgUpdateGroupPolicyDecisionPolicyResponse): _245.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicyResponse): _245.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _245.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _245.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyDecisionPolicyResponse): _245.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _245.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _245.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _245.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_245.MsgUpdateGroupPolicyMetadata>): _245.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _245.MsgUpdateGroupPolicyMetadataAmino): _245.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _245.MsgUpdateGroupPolicyMetadata): _245.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyMetadataAminoMsg): _245.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyMetadata): _245.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyMetadataProtoMsg): _245.MsgUpdateGroupPolicyMetadata;
                toProto(message: _245.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyMetadata): _245.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _245.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _245.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _245.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_245.MsgUpdateGroupPolicyMetadataResponse>): _245.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _245.MsgUpdateGroupPolicyMetadataResponseAmino): _245.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _245.MsgUpdateGroupPolicyMetadataResponse): _245.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _245.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _245.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _245.MsgUpdateGroupPolicyMetadataResponse): _245.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _245.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _245.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _245.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _245.MsgUpdateGroupPolicyMetadataResponse): _245.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
            };
            MsgSubmitProposal: {
                encode(message: _245.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgSubmitProposal;
                fromJSON(object: any): _245.MsgSubmitProposal;
                toJSON(message: _245.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_245.MsgSubmitProposal>): _245.MsgSubmitProposal;
                fromAmino(object: _245.MsgSubmitProposalAmino): _245.MsgSubmitProposal;
                toAmino(message: _245.MsgSubmitProposal): _245.MsgSubmitProposalAmino;
                fromAminoMsg(object: _245.MsgSubmitProposalAminoMsg): _245.MsgSubmitProposal;
                toAminoMsg(message: _245.MsgSubmitProposal): _245.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _245.MsgSubmitProposalProtoMsg): _245.MsgSubmitProposal;
                toProto(message: _245.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _245.MsgSubmitProposal): _245.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _245.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgSubmitProposalResponse;
                fromJSON(object: any): _245.MsgSubmitProposalResponse;
                toJSON(message: _245.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_245.MsgSubmitProposalResponse>): _245.MsgSubmitProposalResponse;
                fromAmino(object: _245.MsgSubmitProposalResponseAmino): _245.MsgSubmitProposalResponse;
                toAmino(message: _245.MsgSubmitProposalResponse): _245.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _245.MsgSubmitProposalResponseAminoMsg): _245.MsgSubmitProposalResponse;
                toAminoMsg(message: _245.MsgSubmitProposalResponse): _245.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _245.MsgSubmitProposalResponseProtoMsg): _245.MsgSubmitProposalResponse;
                toProto(message: _245.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _245.MsgSubmitProposalResponse): _245.MsgSubmitProposalResponseProtoMsg;
            };
            MsgWithdrawProposal: {
                encode(message: _245.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgWithdrawProposal;
                fromJSON(object: any): _245.MsgWithdrawProposal;
                toJSON(message: _245.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_245.MsgWithdrawProposal>): _245.MsgWithdrawProposal;
                fromAmino(object: _245.MsgWithdrawProposalAmino): _245.MsgWithdrawProposal;
                toAmino(message: _245.MsgWithdrawProposal): _245.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _245.MsgWithdrawProposalAminoMsg): _245.MsgWithdrawProposal;
                toAminoMsg(message: _245.MsgWithdrawProposal): _245.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _245.MsgWithdrawProposalProtoMsg): _245.MsgWithdrawProposal;
                toProto(message: _245.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _245.MsgWithdrawProposal): _245.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _245.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgWithdrawProposalResponse;
                fromJSON(_: any): _245.MsgWithdrawProposalResponse;
                toJSON(_: _245.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_245.MsgWithdrawProposalResponse>): _245.MsgWithdrawProposalResponse;
                fromAmino(_: _245.MsgWithdrawProposalResponseAmino): _245.MsgWithdrawProposalResponse;
                toAmino(_: _245.MsgWithdrawProposalResponse): _245.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _245.MsgWithdrawProposalResponseAminoMsg): _245.MsgWithdrawProposalResponse;
                toAminoMsg(message: _245.MsgWithdrawProposalResponse): _245.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _245.MsgWithdrawProposalResponseProtoMsg): _245.MsgWithdrawProposalResponse;
                toProto(message: _245.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _245.MsgWithdrawProposalResponse): _245.MsgWithdrawProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _245.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgVote;
                fromJSON(object: any): _245.MsgVote;
                toJSON(message: _245.MsgVote): unknown;
                fromPartial(object: Partial<_245.MsgVote>): _245.MsgVote;
                fromAmino(object: _245.MsgVoteAmino): _245.MsgVote;
                toAmino(message: _245.MsgVote): _245.MsgVoteAmino;
                fromAminoMsg(object: _245.MsgVoteAminoMsg): _245.MsgVote;
                toAminoMsg(message: _245.MsgVote): _245.MsgVoteAminoMsg;
                fromProtoMsg(message: _245.MsgVoteProtoMsg): _245.MsgVote;
                toProto(message: _245.MsgVote): Uint8Array;
                toProtoMsg(message: _245.MsgVote): _245.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _245.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgVoteResponse;
                fromJSON(_: any): _245.MsgVoteResponse;
                toJSON(_: _245.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_245.MsgVoteResponse>): _245.MsgVoteResponse;
                fromAmino(_: _245.MsgVoteResponseAmino): _245.MsgVoteResponse;
                toAmino(_: _245.MsgVoteResponse): _245.MsgVoteResponseAmino;
                fromAminoMsg(object: _245.MsgVoteResponseAminoMsg): _245.MsgVoteResponse;
                toAminoMsg(message: _245.MsgVoteResponse): _245.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _245.MsgVoteResponseProtoMsg): _245.MsgVoteResponse;
                toProto(message: _245.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _245.MsgVoteResponse): _245.MsgVoteResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _245.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgExec;
                fromJSON(object: any): _245.MsgExec;
                toJSON(message: _245.MsgExec): unknown;
                fromPartial(object: Partial<_245.MsgExec>): _245.MsgExec;
                fromAmino(object: _245.MsgExecAmino): _245.MsgExec;
                toAmino(message: _245.MsgExec): _245.MsgExecAmino;
                fromAminoMsg(object: _245.MsgExecAminoMsg): _245.MsgExec;
                toAminoMsg(message: _245.MsgExec): _245.MsgExecAminoMsg;
                fromProtoMsg(message: _245.MsgExecProtoMsg): _245.MsgExec;
                toProto(message: _245.MsgExec): Uint8Array;
                toProtoMsg(message: _245.MsgExec): _245.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(_: _245.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgExecResponse;
                fromJSON(_: any): _245.MsgExecResponse;
                toJSON(_: _245.MsgExecResponse): unknown;
                fromPartial(_: Partial<_245.MsgExecResponse>): _245.MsgExecResponse;
                fromAmino(_: _245.MsgExecResponseAmino): _245.MsgExecResponse;
                toAmino(_: _245.MsgExecResponse): _245.MsgExecResponseAmino;
                fromAminoMsg(object: _245.MsgExecResponseAminoMsg): _245.MsgExecResponse;
                toAminoMsg(message: _245.MsgExecResponse): _245.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _245.MsgExecResponseProtoMsg): _245.MsgExecResponse;
                toProto(message: _245.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _245.MsgExecResponse): _245.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _245.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgLeaveGroup;
                fromJSON(object: any): _245.MsgLeaveGroup;
                toJSON(message: _245.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_245.MsgLeaveGroup>): _245.MsgLeaveGroup;
                fromAmino(object: _245.MsgLeaveGroupAmino): _245.MsgLeaveGroup;
                toAmino(message: _245.MsgLeaveGroup): _245.MsgLeaveGroupAmino;
                fromAminoMsg(object: _245.MsgLeaveGroupAminoMsg): _245.MsgLeaveGroup;
                toAminoMsg(message: _245.MsgLeaveGroup): _245.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _245.MsgLeaveGroupProtoMsg): _245.MsgLeaveGroup;
                toProto(message: _245.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _245.MsgLeaveGroup): _245.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _245.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.MsgLeaveGroupResponse;
                fromJSON(_: any): _245.MsgLeaveGroupResponse;
                toJSON(_: _245.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_245.MsgLeaveGroupResponse>): _245.MsgLeaveGroupResponse;
                fromAmino(_: _245.MsgLeaveGroupResponseAmino): _245.MsgLeaveGroupResponse;
                toAmino(_: _245.MsgLeaveGroupResponse): _245.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _245.MsgLeaveGroupResponseAminoMsg): _245.MsgLeaveGroupResponse;
                toAminoMsg(message: _245.MsgLeaveGroupResponse): _245.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _245.MsgLeaveGroupResponseProtoMsg): _245.MsgLeaveGroupResponse;
                toProto(message: _245.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _245.MsgLeaveGroupResponse): _245.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _244.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupInfoRequest;
                fromJSON(object: any): _244.QueryGroupInfoRequest;
                toJSON(message: _244.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupInfoRequest>): _244.QueryGroupInfoRequest;
                fromAmino(object: _244.QueryGroupInfoRequestAmino): _244.QueryGroupInfoRequest;
                toAmino(message: _244.QueryGroupInfoRequest): _244.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _244.QueryGroupInfoRequestAminoMsg): _244.QueryGroupInfoRequest;
                toAminoMsg(message: _244.QueryGroupInfoRequest): _244.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupInfoRequestProtoMsg): _244.QueryGroupInfoRequest;
                toProto(message: _244.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupInfoRequest): _244.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _244.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupInfoResponse;
                fromJSON(object: any): _244.QueryGroupInfoResponse;
                toJSON(message: _244.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupInfoResponse>): _244.QueryGroupInfoResponse;
                fromAmino(object: _244.QueryGroupInfoResponseAmino): _244.QueryGroupInfoResponse;
                toAmino(message: _244.QueryGroupInfoResponse): _244.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _244.QueryGroupInfoResponseAminoMsg): _244.QueryGroupInfoResponse;
                toAminoMsg(message: _244.QueryGroupInfoResponse): _244.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupInfoResponseProtoMsg): _244.QueryGroupInfoResponse;
                toProto(message: _244.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupInfoResponse): _244.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _244.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _244.QueryGroupPolicyInfoRequest;
                toJSON(message: _244.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupPolicyInfoRequest>): _244.QueryGroupPolicyInfoRequest;
                fromAmino(object: _244.QueryGroupPolicyInfoRequestAmino): _244.QueryGroupPolicyInfoRequest;
                toAmino(message: _244.QueryGroupPolicyInfoRequest): _244.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _244.QueryGroupPolicyInfoRequestAminoMsg): _244.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _244.QueryGroupPolicyInfoRequest): _244.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPolicyInfoRequestProtoMsg): _244.QueryGroupPolicyInfoRequest;
                toProto(message: _244.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPolicyInfoRequest): _244.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _244.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _244.QueryGroupPolicyInfoResponse;
                toJSON(message: _244.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupPolicyInfoResponse>): _244.QueryGroupPolicyInfoResponse;
                fromAmino(object: _244.QueryGroupPolicyInfoResponseAmino): _244.QueryGroupPolicyInfoResponse;
                toAmino(message: _244.QueryGroupPolicyInfoResponse): _244.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _244.QueryGroupPolicyInfoResponseAminoMsg): _244.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _244.QueryGroupPolicyInfoResponse): _244.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPolicyInfoResponseProtoMsg): _244.QueryGroupPolicyInfoResponse;
                toProto(message: _244.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPolicyInfoResponse): _244.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _244.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupMembersRequest;
                fromJSON(object: any): _244.QueryGroupMembersRequest;
                toJSON(message: _244.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupMembersRequest>): _244.QueryGroupMembersRequest;
                fromAmino(object: _244.QueryGroupMembersRequestAmino): _244.QueryGroupMembersRequest;
                toAmino(message: _244.QueryGroupMembersRequest): _244.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _244.QueryGroupMembersRequestAminoMsg): _244.QueryGroupMembersRequest;
                toAminoMsg(message: _244.QueryGroupMembersRequest): _244.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupMembersRequestProtoMsg): _244.QueryGroupMembersRequest;
                toProto(message: _244.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupMembersRequest): _244.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _244.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupMembersResponse;
                fromJSON(object: any): _244.QueryGroupMembersResponse;
                toJSON(message: _244.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupMembersResponse>): _244.QueryGroupMembersResponse;
                fromAmino(object: _244.QueryGroupMembersResponseAmino): _244.QueryGroupMembersResponse;
                toAmino(message: _244.QueryGroupMembersResponse): _244.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _244.QueryGroupMembersResponseAminoMsg): _244.QueryGroupMembersResponse;
                toAminoMsg(message: _244.QueryGroupMembersResponse): _244.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupMembersResponseProtoMsg): _244.QueryGroupMembersResponse;
                toProto(message: _244.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupMembersResponse): _244.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _244.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupsByAdminRequest;
                fromJSON(object: any): _244.QueryGroupsByAdminRequest;
                toJSON(message: _244.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupsByAdminRequest>): _244.QueryGroupsByAdminRequest;
                fromAmino(object: _244.QueryGroupsByAdminRequestAmino): _244.QueryGroupsByAdminRequest;
                toAmino(message: _244.QueryGroupsByAdminRequest): _244.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _244.QueryGroupsByAdminRequestAminoMsg): _244.QueryGroupsByAdminRequest;
                toAminoMsg(message: _244.QueryGroupsByAdminRequest): _244.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupsByAdminRequestProtoMsg): _244.QueryGroupsByAdminRequest;
                toProto(message: _244.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupsByAdminRequest): _244.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _244.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupsByAdminResponse;
                fromJSON(object: any): _244.QueryGroupsByAdminResponse;
                toJSON(message: _244.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupsByAdminResponse>): _244.QueryGroupsByAdminResponse;
                fromAmino(object: _244.QueryGroupsByAdminResponseAmino): _244.QueryGroupsByAdminResponse;
                toAmino(message: _244.QueryGroupsByAdminResponse): _244.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _244.QueryGroupsByAdminResponseAminoMsg): _244.QueryGroupsByAdminResponse;
                toAminoMsg(message: _244.QueryGroupsByAdminResponse): _244.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupsByAdminResponseProtoMsg): _244.QueryGroupsByAdminResponse;
                toProto(message: _244.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupsByAdminResponse): _244.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _244.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _244.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _244.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupPoliciesByGroupRequest>): _244.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _244.QueryGroupPoliciesByGroupRequestAmino): _244.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _244.QueryGroupPoliciesByGroupRequest): _244.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _244.QueryGroupPoliciesByGroupRequestAminoMsg): _244.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _244.QueryGroupPoliciesByGroupRequest): _244.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPoliciesByGroupRequestProtoMsg): _244.QueryGroupPoliciesByGroupRequest;
                toProto(message: _244.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPoliciesByGroupRequest): _244.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _244.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _244.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _244.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupPoliciesByGroupResponse>): _244.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _244.QueryGroupPoliciesByGroupResponseAmino): _244.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _244.QueryGroupPoliciesByGroupResponse): _244.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _244.QueryGroupPoliciesByGroupResponseAminoMsg): _244.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _244.QueryGroupPoliciesByGroupResponse): _244.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPoliciesByGroupResponseProtoMsg): _244.QueryGroupPoliciesByGroupResponse;
                toProto(message: _244.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPoliciesByGroupResponse): _244.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _244.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _244.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _244.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupPoliciesByAdminRequest>): _244.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _244.QueryGroupPoliciesByAdminRequestAmino): _244.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _244.QueryGroupPoliciesByAdminRequest): _244.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _244.QueryGroupPoliciesByAdminRequestAminoMsg): _244.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _244.QueryGroupPoliciesByAdminRequest): _244.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPoliciesByAdminRequestProtoMsg): _244.QueryGroupPoliciesByAdminRequest;
                toProto(message: _244.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPoliciesByAdminRequest): _244.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _244.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _244.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _244.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupPoliciesByAdminResponse>): _244.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _244.QueryGroupPoliciesByAdminResponseAmino): _244.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _244.QueryGroupPoliciesByAdminResponse): _244.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _244.QueryGroupPoliciesByAdminResponseAminoMsg): _244.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _244.QueryGroupPoliciesByAdminResponse): _244.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupPoliciesByAdminResponseProtoMsg): _244.QueryGroupPoliciesByAdminResponse;
                toProto(message: _244.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupPoliciesByAdminResponse): _244.QueryGroupPoliciesByAdminResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _244.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryProposalRequest;
                fromJSON(object: any): _244.QueryProposalRequest;
                toJSON(message: _244.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_244.QueryProposalRequest>): _244.QueryProposalRequest;
                fromAmino(object: _244.QueryProposalRequestAmino): _244.QueryProposalRequest;
                toAmino(message: _244.QueryProposalRequest): _244.QueryProposalRequestAmino;
                fromAminoMsg(object: _244.QueryProposalRequestAminoMsg): _244.QueryProposalRequest;
                toAminoMsg(message: _244.QueryProposalRequest): _244.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _244.QueryProposalRequestProtoMsg): _244.QueryProposalRequest;
                toProto(message: _244.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _244.QueryProposalRequest): _244.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _244.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryProposalResponse;
                fromJSON(object: any): _244.QueryProposalResponse;
                toJSON(message: _244.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_244.QueryProposalResponse>): _244.QueryProposalResponse;
                fromAmino(object: _244.QueryProposalResponseAmino): _244.QueryProposalResponse;
                toAmino(message: _244.QueryProposalResponse): _244.QueryProposalResponseAmino;
                fromAminoMsg(object: _244.QueryProposalResponseAminoMsg): _244.QueryProposalResponse;
                toAminoMsg(message: _244.QueryProposalResponse): _244.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _244.QueryProposalResponseProtoMsg): _244.QueryProposalResponse;
                toProto(message: _244.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _244.QueryProposalResponse): _244.QueryProposalResponseProtoMsg;
            };
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _244.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _244.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _244.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_244.QueryProposalsByGroupPolicyRequest>): _244.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _244.QueryProposalsByGroupPolicyRequestAmino): _244.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _244.QueryProposalsByGroupPolicyRequest): _244.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _244.QueryProposalsByGroupPolicyRequestAminoMsg): _244.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _244.QueryProposalsByGroupPolicyRequest): _244.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _244.QueryProposalsByGroupPolicyRequestProtoMsg): _244.QueryProposalsByGroupPolicyRequest;
                toProto(message: _244.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _244.QueryProposalsByGroupPolicyRequest): _244.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _244.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _244.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _244.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_244.QueryProposalsByGroupPolicyResponse>): _244.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _244.QueryProposalsByGroupPolicyResponseAmino): _244.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _244.QueryProposalsByGroupPolicyResponse): _244.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _244.QueryProposalsByGroupPolicyResponseAminoMsg): _244.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _244.QueryProposalsByGroupPolicyResponse): _244.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _244.QueryProposalsByGroupPolicyResponseProtoMsg): _244.QueryProposalsByGroupPolicyResponse;
                toProto(message: _244.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _244.QueryProposalsByGroupPolicyResponse): _244.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _244.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _244.QueryVoteByProposalVoterRequest;
                toJSON(message: _244.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_244.QueryVoteByProposalVoterRequest>): _244.QueryVoteByProposalVoterRequest;
                fromAmino(object: _244.QueryVoteByProposalVoterRequestAmino): _244.QueryVoteByProposalVoterRequest;
                toAmino(message: _244.QueryVoteByProposalVoterRequest): _244.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _244.QueryVoteByProposalVoterRequestAminoMsg): _244.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _244.QueryVoteByProposalVoterRequest): _244.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _244.QueryVoteByProposalVoterRequestProtoMsg): _244.QueryVoteByProposalVoterRequest;
                toProto(message: _244.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _244.QueryVoteByProposalVoterRequest): _244.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _244.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _244.QueryVoteByProposalVoterResponse;
                toJSON(message: _244.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_244.QueryVoteByProposalVoterResponse>): _244.QueryVoteByProposalVoterResponse;
                fromAmino(object: _244.QueryVoteByProposalVoterResponseAmino): _244.QueryVoteByProposalVoterResponse;
                toAmino(message: _244.QueryVoteByProposalVoterResponse): _244.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _244.QueryVoteByProposalVoterResponseAminoMsg): _244.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _244.QueryVoteByProposalVoterResponse): _244.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _244.QueryVoteByProposalVoterResponseProtoMsg): _244.QueryVoteByProposalVoterResponse;
                toProto(message: _244.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _244.QueryVoteByProposalVoterResponse): _244.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _244.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVotesByProposalRequest;
                fromJSON(object: any): _244.QueryVotesByProposalRequest;
                toJSON(message: _244.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_244.QueryVotesByProposalRequest>): _244.QueryVotesByProposalRequest;
                fromAmino(object: _244.QueryVotesByProposalRequestAmino): _244.QueryVotesByProposalRequest;
                toAmino(message: _244.QueryVotesByProposalRequest): _244.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _244.QueryVotesByProposalRequestAminoMsg): _244.QueryVotesByProposalRequest;
                toAminoMsg(message: _244.QueryVotesByProposalRequest): _244.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _244.QueryVotesByProposalRequestProtoMsg): _244.QueryVotesByProposalRequest;
                toProto(message: _244.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _244.QueryVotesByProposalRequest): _244.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _244.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVotesByProposalResponse;
                fromJSON(object: any): _244.QueryVotesByProposalResponse;
                toJSON(message: _244.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_244.QueryVotesByProposalResponse>): _244.QueryVotesByProposalResponse;
                fromAmino(object: _244.QueryVotesByProposalResponseAmino): _244.QueryVotesByProposalResponse;
                toAmino(message: _244.QueryVotesByProposalResponse): _244.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _244.QueryVotesByProposalResponseAminoMsg): _244.QueryVotesByProposalResponse;
                toAminoMsg(message: _244.QueryVotesByProposalResponse): _244.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _244.QueryVotesByProposalResponseProtoMsg): _244.QueryVotesByProposalResponse;
                toProto(message: _244.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _244.QueryVotesByProposalResponse): _244.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _244.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVotesByVoterRequest;
                fromJSON(object: any): _244.QueryVotesByVoterRequest;
                toJSON(message: _244.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_244.QueryVotesByVoterRequest>): _244.QueryVotesByVoterRequest;
                fromAmino(object: _244.QueryVotesByVoterRequestAmino): _244.QueryVotesByVoterRequest;
                toAmino(message: _244.QueryVotesByVoterRequest): _244.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _244.QueryVotesByVoterRequestAminoMsg): _244.QueryVotesByVoterRequest;
                toAminoMsg(message: _244.QueryVotesByVoterRequest): _244.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _244.QueryVotesByVoterRequestProtoMsg): _244.QueryVotesByVoterRequest;
                toProto(message: _244.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _244.QueryVotesByVoterRequest): _244.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _244.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryVotesByVoterResponse;
                fromJSON(object: any): _244.QueryVotesByVoterResponse;
                toJSON(message: _244.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_244.QueryVotesByVoterResponse>): _244.QueryVotesByVoterResponse;
                fromAmino(object: _244.QueryVotesByVoterResponseAmino): _244.QueryVotesByVoterResponse;
                toAmino(message: _244.QueryVotesByVoterResponse): _244.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _244.QueryVotesByVoterResponseAminoMsg): _244.QueryVotesByVoterResponse;
                toAminoMsg(message: _244.QueryVotesByVoterResponse): _244.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _244.QueryVotesByVoterResponseProtoMsg): _244.QueryVotesByVoterResponse;
                toProto(message: _244.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _244.QueryVotesByVoterResponse): _244.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _244.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupsByMemberRequest;
                fromJSON(object: any): _244.QueryGroupsByMemberRequest;
                toJSON(message: _244.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_244.QueryGroupsByMemberRequest>): _244.QueryGroupsByMemberRequest;
                fromAmino(object: _244.QueryGroupsByMemberRequestAmino): _244.QueryGroupsByMemberRequest;
                toAmino(message: _244.QueryGroupsByMemberRequest): _244.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _244.QueryGroupsByMemberRequestAminoMsg): _244.QueryGroupsByMemberRequest;
                toAminoMsg(message: _244.QueryGroupsByMemberRequest): _244.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _244.QueryGroupsByMemberRequestProtoMsg): _244.QueryGroupsByMemberRequest;
                toProto(message: _244.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _244.QueryGroupsByMemberRequest): _244.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _244.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryGroupsByMemberResponse;
                fromJSON(object: any): _244.QueryGroupsByMemberResponse;
                toJSON(message: _244.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_244.QueryGroupsByMemberResponse>): _244.QueryGroupsByMemberResponse;
                fromAmino(object: _244.QueryGroupsByMemberResponseAmino): _244.QueryGroupsByMemberResponse;
                toAmino(message: _244.QueryGroupsByMemberResponse): _244.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _244.QueryGroupsByMemberResponseAminoMsg): _244.QueryGroupsByMemberResponse;
                toAminoMsg(message: _244.QueryGroupsByMemberResponse): _244.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _244.QueryGroupsByMemberResponseProtoMsg): _244.QueryGroupsByMemberResponse;
                toProto(message: _244.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _244.QueryGroupsByMemberResponse): _244.QueryGroupsByMemberResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _244.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTallyResultRequest;
                fromJSON(object: any): _244.QueryTallyResultRequest;
                toJSON(message: _244.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_244.QueryTallyResultRequest>): _244.QueryTallyResultRequest;
                fromAmino(object: _244.QueryTallyResultRequestAmino): _244.QueryTallyResultRequest;
                toAmino(message: _244.QueryTallyResultRequest): _244.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _244.QueryTallyResultRequestAminoMsg): _244.QueryTallyResultRequest;
                toAminoMsg(message: _244.QueryTallyResultRequest): _244.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _244.QueryTallyResultRequestProtoMsg): _244.QueryTallyResultRequest;
                toProto(message: _244.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _244.QueryTallyResultRequest): _244.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _244.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.QueryTallyResultResponse;
                fromJSON(object: any): _244.QueryTallyResultResponse;
                toJSON(message: _244.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_244.QueryTallyResultResponse>): _244.QueryTallyResultResponse;
                fromAmino(object: _244.QueryTallyResultResponseAmino): _244.QueryTallyResultResponse;
                toAmino(message: _244.QueryTallyResultResponse): _244.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _244.QueryTallyResultResponseAminoMsg): _244.QueryTallyResultResponse;
                toAminoMsg(message: _244.QueryTallyResultResponse): _244.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _244.QueryTallyResultResponseProtoMsg): _244.QueryTallyResultResponse;
                toProto(message: _244.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _244.QueryTallyResultResponse): _244.QueryTallyResultResponseProtoMsg;
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
            EventCreateGroup: {
                encode(message: _242.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventCreateGroup;
                fromJSON(object: any): _242.EventCreateGroup;
                toJSON(message: _242.EventCreateGroup): unknown;
                fromPartial(object: Partial<_242.EventCreateGroup>): _242.EventCreateGroup;
                fromAmino(object: _242.EventCreateGroupAmino): _242.EventCreateGroup;
                toAmino(message: _242.EventCreateGroup): _242.EventCreateGroupAmino;
                fromAminoMsg(object: _242.EventCreateGroupAminoMsg): _242.EventCreateGroup;
                toAminoMsg(message: _242.EventCreateGroup): _242.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _242.EventCreateGroupProtoMsg): _242.EventCreateGroup;
                toProto(message: _242.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _242.EventCreateGroup): _242.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _242.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventUpdateGroup;
                fromJSON(object: any): _242.EventUpdateGroup;
                toJSON(message: _242.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_242.EventUpdateGroup>): _242.EventUpdateGroup;
                fromAmino(object: _242.EventUpdateGroupAmino): _242.EventUpdateGroup;
                toAmino(message: _242.EventUpdateGroup): _242.EventUpdateGroupAmino;
                fromAminoMsg(object: _242.EventUpdateGroupAminoMsg): _242.EventUpdateGroup;
                toAminoMsg(message: _242.EventUpdateGroup): _242.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _242.EventUpdateGroupProtoMsg): _242.EventUpdateGroup;
                toProto(message: _242.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _242.EventUpdateGroup): _242.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _242.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventCreateGroupPolicy;
                fromJSON(object: any): _242.EventCreateGroupPolicy;
                toJSON(message: _242.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_242.EventCreateGroupPolicy>): _242.EventCreateGroupPolicy;
                fromAmino(object: _242.EventCreateGroupPolicyAmino): _242.EventCreateGroupPolicy;
                toAmino(message: _242.EventCreateGroupPolicy): _242.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _242.EventCreateGroupPolicyAminoMsg): _242.EventCreateGroupPolicy;
                toAminoMsg(message: _242.EventCreateGroupPolicy): _242.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _242.EventCreateGroupPolicyProtoMsg): _242.EventCreateGroupPolicy;
                toProto(message: _242.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _242.EventCreateGroupPolicy): _242.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _242.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventUpdateGroupPolicy;
                fromJSON(object: any): _242.EventUpdateGroupPolicy;
                toJSON(message: _242.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_242.EventUpdateGroupPolicy>): _242.EventUpdateGroupPolicy;
                fromAmino(object: _242.EventUpdateGroupPolicyAmino): _242.EventUpdateGroupPolicy;
                toAmino(message: _242.EventUpdateGroupPolicy): _242.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _242.EventUpdateGroupPolicyAminoMsg): _242.EventUpdateGroupPolicy;
                toAminoMsg(message: _242.EventUpdateGroupPolicy): _242.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _242.EventUpdateGroupPolicyProtoMsg): _242.EventUpdateGroupPolicy;
                toProto(message: _242.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _242.EventUpdateGroupPolicy): _242.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _242.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventSubmitProposal;
                fromJSON(object: any): _242.EventSubmitProposal;
                toJSON(message: _242.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_242.EventSubmitProposal>): _242.EventSubmitProposal;
                fromAmino(object: _242.EventSubmitProposalAmino): _242.EventSubmitProposal;
                toAmino(message: _242.EventSubmitProposal): _242.EventSubmitProposalAmino;
                fromAminoMsg(object: _242.EventSubmitProposalAminoMsg): _242.EventSubmitProposal;
                toAminoMsg(message: _242.EventSubmitProposal): _242.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _242.EventSubmitProposalProtoMsg): _242.EventSubmitProposal;
                toProto(message: _242.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _242.EventSubmitProposal): _242.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _242.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventWithdrawProposal;
                fromJSON(object: any): _242.EventWithdrawProposal;
                toJSON(message: _242.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_242.EventWithdrawProposal>): _242.EventWithdrawProposal;
                fromAmino(object: _242.EventWithdrawProposalAmino): _242.EventWithdrawProposal;
                toAmino(message: _242.EventWithdrawProposal): _242.EventWithdrawProposalAmino;
                fromAminoMsg(object: _242.EventWithdrawProposalAminoMsg): _242.EventWithdrawProposal;
                toAminoMsg(message: _242.EventWithdrawProposal): _242.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _242.EventWithdrawProposalProtoMsg): _242.EventWithdrawProposal;
                toProto(message: _242.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _242.EventWithdrawProposal): _242.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _242.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventVote;
                fromJSON(object: any): _242.EventVote;
                toJSON(message: _242.EventVote): unknown;
                fromPartial(object: Partial<_242.EventVote>): _242.EventVote;
                fromAmino(object: _242.EventVoteAmino): _242.EventVote;
                toAmino(message: _242.EventVote): _242.EventVoteAmino;
                fromAminoMsg(object: _242.EventVoteAminoMsg): _242.EventVote;
                toAminoMsg(message: _242.EventVote): _242.EventVoteAminoMsg;
                fromProtoMsg(message: _242.EventVoteProtoMsg): _242.EventVote;
                toProto(message: _242.EventVote): Uint8Array;
                toProtoMsg(message: _242.EventVote): _242.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _242.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventExec;
                fromJSON(object: any): _242.EventExec;
                toJSON(message: _242.EventExec): unknown;
                fromPartial(object: Partial<_242.EventExec>): _242.EventExec;
                fromAmino(object: _242.EventExecAmino): _242.EventExec;
                toAmino(message: _242.EventExec): _242.EventExecAmino;
                fromAminoMsg(object: _242.EventExecAminoMsg): _242.EventExec;
                toAminoMsg(message: _242.EventExec): _242.EventExecAminoMsg;
                fromProtoMsg(message: _242.EventExecProtoMsg): _242.EventExec;
                toProto(message: _242.EventExec): Uint8Array;
                toProtoMsg(message: _242.EventExec): _242.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _242.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.EventLeaveGroup;
                fromJSON(object: any): _242.EventLeaveGroup;
                toJSON(message: _242.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_242.EventLeaveGroup>): _242.EventLeaveGroup;
                fromAmino(object: _242.EventLeaveGroupAmino): _242.EventLeaveGroup;
                toAmino(message: _242.EventLeaveGroup): _242.EventLeaveGroupAmino;
                fromAminoMsg(object: _242.EventLeaveGroupAminoMsg): _242.EventLeaveGroup;
                toAminoMsg(message: _242.EventLeaveGroup): _242.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _242.EventLeaveGroupProtoMsg): _242.EventLeaveGroup;
                toProto(message: _242.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _242.EventLeaveGroup): _242.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _434.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _249.QueryParamsRequest): Promise<_249.QueryParamsResponse>;
                inflation(request?: _249.QueryInflationRequest): Promise<_249.QueryInflationResponse>;
                annualProvisions(request?: _249.QueryAnnualProvisionsRequest): Promise<_249.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _249.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryParamsRequest;
                fromJSON(_: any): _249.QueryParamsRequest;
                toJSON(_: _249.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_249.QueryParamsRequest>): _249.QueryParamsRequest;
                fromAmino(_: _249.QueryParamsRequestAmino): _249.QueryParamsRequest;
                toAmino(_: _249.QueryParamsRequest): _249.QueryParamsRequestAmino;
                fromAminoMsg(object: _249.QueryParamsRequestAminoMsg): _249.QueryParamsRequest;
                toAminoMsg(message: _249.QueryParamsRequest): _249.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _249.QueryParamsRequestProtoMsg): _249.QueryParamsRequest;
                toProto(message: _249.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _249.QueryParamsRequest): _249.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _249.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryParamsResponse;
                fromJSON(object: any): _249.QueryParamsResponse;
                toJSON(message: _249.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_249.QueryParamsResponse>): _249.QueryParamsResponse;
                fromAmino(object: _249.QueryParamsResponseAmino): _249.QueryParamsResponse;
                toAmino(message: _249.QueryParamsResponse): _249.QueryParamsResponseAmino;
                fromAminoMsg(object: _249.QueryParamsResponseAminoMsg): _249.QueryParamsResponse;
                toAminoMsg(message: _249.QueryParamsResponse): _249.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _249.QueryParamsResponseProtoMsg): _249.QueryParamsResponse;
                toProto(message: _249.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _249.QueryParamsResponse): _249.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _249.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryInflationRequest;
                fromJSON(_: any): _249.QueryInflationRequest;
                toJSON(_: _249.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_249.QueryInflationRequest>): _249.QueryInflationRequest;
                fromAmino(_: _249.QueryInflationRequestAmino): _249.QueryInflationRequest;
                toAmino(_: _249.QueryInflationRequest): _249.QueryInflationRequestAmino;
                fromAminoMsg(object: _249.QueryInflationRequestAminoMsg): _249.QueryInflationRequest;
                toAminoMsg(message: _249.QueryInflationRequest): _249.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _249.QueryInflationRequestProtoMsg): _249.QueryInflationRequest;
                toProto(message: _249.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _249.QueryInflationRequest): _249.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _249.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryInflationResponse;
                fromJSON(object: any): _249.QueryInflationResponse;
                toJSON(message: _249.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_249.QueryInflationResponse>): _249.QueryInflationResponse;
                fromAmino(object: _249.QueryInflationResponseAmino): _249.QueryInflationResponse;
                toAmino(message: _249.QueryInflationResponse): _249.QueryInflationResponseAmino;
                fromAminoMsg(object: _249.QueryInflationResponseAminoMsg): _249.QueryInflationResponse;
                toAminoMsg(message: _249.QueryInflationResponse): _249.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _249.QueryInflationResponseProtoMsg): _249.QueryInflationResponse;
                toProto(message: _249.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _249.QueryInflationResponse): _249.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _249.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _249.QueryAnnualProvisionsRequest;
                toJSON(_: _249.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_249.QueryAnnualProvisionsRequest>): _249.QueryAnnualProvisionsRequest;
                fromAmino(_: _249.QueryAnnualProvisionsRequestAmino): _249.QueryAnnualProvisionsRequest;
                toAmino(_: _249.QueryAnnualProvisionsRequest): _249.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _249.QueryAnnualProvisionsRequestAminoMsg): _249.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _249.QueryAnnualProvisionsRequest): _249.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _249.QueryAnnualProvisionsRequestProtoMsg): _249.QueryAnnualProvisionsRequest;
                toProto(message: _249.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _249.QueryAnnualProvisionsRequest): _249.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _249.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _249.QueryAnnualProvisionsResponse;
                toJSON(message: _249.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_249.QueryAnnualProvisionsResponse>): _249.QueryAnnualProvisionsResponse;
                fromAmino(object: _249.QueryAnnualProvisionsResponseAmino): _249.QueryAnnualProvisionsResponse;
                toAmino(message: _249.QueryAnnualProvisionsResponse): _249.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _249.QueryAnnualProvisionsResponseAminoMsg): _249.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _249.QueryAnnualProvisionsResponse): _249.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _249.QueryAnnualProvisionsResponseProtoMsg): _249.QueryAnnualProvisionsResponse;
                toProto(message: _249.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _249.QueryAnnualProvisionsResponse): _249.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _248.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Minter;
                fromJSON(object: any): _248.Minter;
                toJSON(message: _248.Minter): unknown;
                fromPartial(object: Partial<_248.Minter>): _248.Minter;
                fromAmino(object: _248.MinterAmino): _248.Minter;
                toAmino(message: _248.Minter): _248.MinterAmino;
                fromAminoMsg(object: _248.MinterAminoMsg): _248.Minter;
                toAminoMsg(message: _248.Minter): _248.MinterAminoMsg;
                fromProtoMsg(message: _248.MinterProtoMsg): _248.Minter;
                toProto(message: _248.Minter): Uint8Array;
                toProtoMsg(message: _248.Minter): _248.MinterProtoMsg;
            };
            Params: {
                encode(message: _248.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Params;
                fromJSON(object: any): _248.Params;
                toJSON(message: _248.Params): unknown;
                fromPartial(object: Partial<_248.Params>): _248.Params;
                fromAmino(object: _248.ParamsAmino): _248.Params;
                toAmino(message: _248.Params): _248.ParamsAmino;
                fromAminoMsg(object: _248.ParamsAminoMsg): _248.Params;
                toAminoMsg(message: _248.Params): _248.ParamsAminoMsg;
                fromProtoMsg(message: _248.ParamsProtoMsg): _248.Params;
                toProto(message: _248.Params): Uint8Array;
                toProtoMsg(message: _248.Params): _248.ParamsProtoMsg;
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
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _450.MsgClientImpl;
            QueryClientImpl: typeof _435.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _254.QueryBalanceRequest): Promise<_254.QueryBalanceResponse>;
                owner(request: _254.QueryOwnerRequest): Promise<_254.QueryOwnerResponse>;
                supply(request: _254.QuerySupplyRequest): Promise<_254.QuerySupplyResponse>;
                nFTs(request: _254.QueryNFTsRequest): Promise<_254.QueryNFTsResponse>;
                nFT(request: _254.QueryNFTRequest): Promise<_254.QueryNFTResponse>;
                class(request: _254.QueryClassRequest): Promise<_254.QueryClassResponse>;
                classes(request?: _254.QueryClassesRequest): Promise<_254.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _255.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _255.MsgSend): {
                        typeUrl: string;
                        value: _255.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _255.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _255.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _255.MsgSend): {
                        typeUrl: string;
                        value: _255.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _255.MsgSend) => _255.MsgSendAmino;
                    fromAmino: (object: _255.MsgSendAmino) => _255.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _255.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.MsgSend;
                fromJSON(object: any): _255.MsgSend;
                toJSON(message: _255.MsgSend): unknown;
                fromPartial(object: Partial<_255.MsgSend>): _255.MsgSend;
                fromAmino(object: _255.MsgSendAmino): _255.MsgSend;
                toAmino(message: _255.MsgSend): _255.MsgSendAmino;
                fromAminoMsg(object: _255.MsgSendAminoMsg): _255.MsgSend;
                toAminoMsg(message: _255.MsgSend): _255.MsgSendAminoMsg;
                fromProtoMsg(message: _255.MsgSendProtoMsg): _255.MsgSend;
                toProto(message: _255.MsgSend): Uint8Array;
                toProtoMsg(message: _255.MsgSend): _255.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _255.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.MsgSendResponse;
                fromJSON(_: any): _255.MsgSendResponse;
                toJSON(_: _255.MsgSendResponse): unknown;
                fromPartial(_: Partial<_255.MsgSendResponse>): _255.MsgSendResponse;
                fromAmino(_: _255.MsgSendResponseAmino): _255.MsgSendResponse;
                toAmino(_: _255.MsgSendResponse): _255.MsgSendResponseAmino;
                fromAminoMsg(object: _255.MsgSendResponseAminoMsg): _255.MsgSendResponse;
                toAminoMsg(message: _255.MsgSendResponse): _255.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _255.MsgSendResponseProtoMsg): _255.MsgSendResponse;
                toProto(message: _255.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _255.MsgSendResponse): _255.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _254.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryBalanceRequest;
                fromJSON(object: any): _254.QueryBalanceRequest;
                toJSON(message: _254.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_254.QueryBalanceRequest>): _254.QueryBalanceRequest;
                fromAmino(object: _254.QueryBalanceRequestAmino): _254.QueryBalanceRequest;
                toAmino(message: _254.QueryBalanceRequest): _254.QueryBalanceRequestAmino;
                fromAminoMsg(object: _254.QueryBalanceRequestAminoMsg): _254.QueryBalanceRequest;
                toAminoMsg(message: _254.QueryBalanceRequest): _254.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _254.QueryBalanceRequestProtoMsg): _254.QueryBalanceRequest;
                toProto(message: _254.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _254.QueryBalanceRequest): _254.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _254.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryBalanceResponse;
                fromJSON(object: any): _254.QueryBalanceResponse;
                toJSON(message: _254.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_254.QueryBalanceResponse>): _254.QueryBalanceResponse;
                fromAmino(object: _254.QueryBalanceResponseAmino): _254.QueryBalanceResponse;
                toAmino(message: _254.QueryBalanceResponse): _254.QueryBalanceResponseAmino;
                fromAminoMsg(object: _254.QueryBalanceResponseAminoMsg): _254.QueryBalanceResponse;
                toAminoMsg(message: _254.QueryBalanceResponse): _254.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _254.QueryBalanceResponseProtoMsg): _254.QueryBalanceResponse;
                toProto(message: _254.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _254.QueryBalanceResponse): _254.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _254.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryOwnerRequest;
                fromJSON(object: any): _254.QueryOwnerRequest;
                toJSON(message: _254.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_254.QueryOwnerRequest>): _254.QueryOwnerRequest;
                fromAmino(object: _254.QueryOwnerRequestAmino): _254.QueryOwnerRequest;
                toAmino(message: _254.QueryOwnerRequest): _254.QueryOwnerRequestAmino;
                fromAminoMsg(object: _254.QueryOwnerRequestAminoMsg): _254.QueryOwnerRequest;
                toAminoMsg(message: _254.QueryOwnerRequest): _254.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _254.QueryOwnerRequestProtoMsg): _254.QueryOwnerRequest;
                toProto(message: _254.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _254.QueryOwnerRequest): _254.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _254.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryOwnerResponse;
                fromJSON(object: any): _254.QueryOwnerResponse;
                toJSON(message: _254.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_254.QueryOwnerResponse>): _254.QueryOwnerResponse;
                fromAmino(object: _254.QueryOwnerResponseAmino): _254.QueryOwnerResponse;
                toAmino(message: _254.QueryOwnerResponse): _254.QueryOwnerResponseAmino;
                fromAminoMsg(object: _254.QueryOwnerResponseAminoMsg): _254.QueryOwnerResponse;
                toAminoMsg(message: _254.QueryOwnerResponse): _254.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _254.QueryOwnerResponseProtoMsg): _254.QueryOwnerResponse;
                toProto(message: _254.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _254.QueryOwnerResponse): _254.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _254.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QuerySupplyRequest;
                fromJSON(object: any): _254.QuerySupplyRequest;
                toJSON(message: _254.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_254.QuerySupplyRequest>): _254.QuerySupplyRequest;
                fromAmino(object: _254.QuerySupplyRequestAmino): _254.QuerySupplyRequest;
                toAmino(message: _254.QuerySupplyRequest): _254.QuerySupplyRequestAmino;
                fromAminoMsg(object: _254.QuerySupplyRequestAminoMsg): _254.QuerySupplyRequest;
                toAminoMsg(message: _254.QuerySupplyRequest): _254.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _254.QuerySupplyRequestProtoMsg): _254.QuerySupplyRequest;
                toProto(message: _254.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _254.QuerySupplyRequest): _254.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _254.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QuerySupplyResponse;
                fromJSON(object: any): _254.QuerySupplyResponse;
                toJSON(message: _254.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_254.QuerySupplyResponse>): _254.QuerySupplyResponse;
                fromAmino(object: _254.QuerySupplyResponseAmino): _254.QuerySupplyResponse;
                toAmino(message: _254.QuerySupplyResponse): _254.QuerySupplyResponseAmino;
                fromAminoMsg(object: _254.QuerySupplyResponseAminoMsg): _254.QuerySupplyResponse;
                toAminoMsg(message: _254.QuerySupplyResponse): _254.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _254.QuerySupplyResponseProtoMsg): _254.QuerySupplyResponse;
                toProto(message: _254.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _254.QuerySupplyResponse): _254.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _254.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryNFTsRequest;
                fromJSON(object: any): _254.QueryNFTsRequest;
                toJSON(message: _254.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_254.QueryNFTsRequest>): _254.QueryNFTsRequest;
                fromAmino(object: _254.QueryNFTsRequestAmino): _254.QueryNFTsRequest;
                toAmino(message: _254.QueryNFTsRequest): _254.QueryNFTsRequestAmino;
                fromAminoMsg(object: _254.QueryNFTsRequestAminoMsg): _254.QueryNFTsRequest;
                toAminoMsg(message: _254.QueryNFTsRequest): _254.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _254.QueryNFTsRequestProtoMsg): _254.QueryNFTsRequest;
                toProto(message: _254.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _254.QueryNFTsRequest): _254.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _254.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryNFTsResponse;
                fromJSON(object: any): _254.QueryNFTsResponse;
                toJSON(message: _254.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_254.QueryNFTsResponse>): _254.QueryNFTsResponse;
                fromAmino(object: _254.QueryNFTsResponseAmino): _254.QueryNFTsResponse;
                toAmino(message: _254.QueryNFTsResponse): _254.QueryNFTsResponseAmino;
                fromAminoMsg(object: _254.QueryNFTsResponseAminoMsg): _254.QueryNFTsResponse;
                toAminoMsg(message: _254.QueryNFTsResponse): _254.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _254.QueryNFTsResponseProtoMsg): _254.QueryNFTsResponse;
                toProto(message: _254.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _254.QueryNFTsResponse): _254.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _254.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryNFTRequest;
                fromJSON(object: any): _254.QueryNFTRequest;
                toJSON(message: _254.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_254.QueryNFTRequest>): _254.QueryNFTRequest;
                fromAmino(object: _254.QueryNFTRequestAmino): _254.QueryNFTRequest;
                toAmino(message: _254.QueryNFTRequest): _254.QueryNFTRequestAmino;
                fromAminoMsg(object: _254.QueryNFTRequestAminoMsg): _254.QueryNFTRequest;
                toAminoMsg(message: _254.QueryNFTRequest): _254.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _254.QueryNFTRequestProtoMsg): _254.QueryNFTRequest;
                toProto(message: _254.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _254.QueryNFTRequest): _254.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _254.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryNFTResponse;
                fromJSON(object: any): _254.QueryNFTResponse;
                toJSON(message: _254.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_254.QueryNFTResponse>): _254.QueryNFTResponse;
                fromAmino(object: _254.QueryNFTResponseAmino): _254.QueryNFTResponse;
                toAmino(message: _254.QueryNFTResponse): _254.QueryNFTResponseAmino;
                fromAminoMsg(object: _254.QueryNFTResponseAminoMsg): _254.QueryNFTResponse;
                toAminoMsg(message: _254.QueryNFTResponse): _254.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _254.QueryNFTResponseProtoMsg): _254.QueryNFTResponse;
                toProto(message: _254.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _254.QueryNFTResponse): _254.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _254.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryClassRequest;
                fromJSON(object: any): _254.QueryClassRequest;
                toJSON(message: _254.QueryClassRequest): unknown;
                fromPartial(object: Partial<_254.QueryClassRequest>): _254.QueryClassRequest;
                fromAmino(object: _254.QueryClassRequestAmino): _254.QueryClassRequest;
                toAmino(message: _254.QueryClassRequest): _254.QueryClassRequestAmino;
                fromAminoMsg(object: _254.QueryClassRequestAminoMsg): _254.QueryClassRequest;
                toAminoMsg(message: _254.QueryClassRequest): _254.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _254.QueryClassRequestProtoMsg): _254.QueryClassRequest;
                toProto(message: _254.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _254.QueryClassRequest): _254.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _254.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryClassResponse;
                fromJSON(object: any): _254.QueryClassResponse;
                toJSON(message: _254.QueryClassResponse): unknown;
                fromPartial(object: Partial<_254.QueryClassResponse>): _254.QueryClassResponse;
                fromAmino(object: _254.QueryClassResponseAmino): _254.QueryClassResponse;
                toAmino(message: _254.QueryClassResponse): _254.QueryClassResponseAmino;
                fromAminoMsg(object: _254.QueryClassResponseAminoMsg): _254.QueryClassResponse;
                toAminoMsg(message: _254.QueryClassResponse): _254.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _254.QueryClassResponseProtoMsg): _254.QueryClassResponse;
                toProto(message: _254.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _254.QueryClassResponse): _254.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _254.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryClassesRequest;
                fromJSON(object: any): _254.QueryClassesRequest;
                toJSON(message: _254.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_254.QueryClassesRequest>): _254.QueryClassesRequest;
                fromAmino(object: _254.QueryClassesRequestAmino): _254.QueryClassesRequest;
                toAmino(message: _254.QueryClassesRequest): _254.QueryClassesRequestAmino;
                fromAminoMsg(object: _254.QueryClassesRequestAminoMsg): _254.QueryClassesRequest;
                toAminoMsg(message: _254.QueryClassesRequest): _254.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _254.QueryClassesRequestProtoMsg): _254.QueryClassesRequest;
                toProto(message: _254.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _254.QueryClassesRequest): _254.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _254.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.QueryClassesResponse;
                fromJSON(object: any): _254.QueryClassesResponse;
                toJSON(message: _254.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_254.QueryClassesResponse>): _254.QueryClassesResponse;
                fromAmino(object: _254.QueryClassesResponseAmino): _254.QueryClassesResponse;
                toAmino(message: _254.QueryClassesResponse): _254.QueryClassesResponseAmino;
                fromAminoMsg(object: _254.QueryClassesResponseAminoMsg): _254.QueryClassesResponse;
                toAminoMsg(message: _254.QueryClassesResponse): _254.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _254.QueryClassesResponseProtoMsg): _254.QueryClassesResponse;
                toProto(message: _254.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _254.QueryClassesResponse): _254.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _253.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.Class;
                fromJSON(object: any): _253.Class;
                toJSON(message: _253.Class): unknown;
                fromPartial(object: Partial<_253.Class>): _253.Class;
                fromAmino(object: _253.ClassAmino): _253.Class;
                toAmino(message: _253.Class): _253.ClassAmino;
                fromAminoMsg(object: _253.ClassAminoMsg): _253.Class;
                toAminoMsg(message: _253.Class): _253.ClassAminoMsg;
                fromProtoMsg(message: _253.ClassProtoMsg): _253.Class;
                toProto(message: _253.Class): Uint8Array;
                toProtoMsg(message: _253.Class): _253.ClassProtoMsg;
            };
            NFT: {
                encode(message: _253.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.NFT;
                fromJSON(object: any): _253.NFT;
                toJSON(message: _253.NFT): unknown;
                fromPartial(object: Partial<_253.NFT>): _253.NFT;
                fromAmino(object: _253.NFTAmino): _253.NFT;
                toAmino(message: _253.NFT): _253.NFTAmino;
                fromAminoMsg(object: _253.NFTAminoMsg): _253.NFT;
                toAminoMsg(message: _253.NFT): _253.NFTAminoMsg;
                fromProtoMsg(message: _253.NFTProtoMsg): _253.NFT;
                toProto(message: _253.NFT): Uint8Array;
                toProtoMsg(message: _253.NFT): _253.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _252.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.GenesisState;
                fromJSON(object: any): _252.GenesisState;
                toJSON(message: _252.GenesisState): unknown;
                fromPartial(object: Partial<_252.GenesisState>): _252.GenesisState;
                fromAmino(object: _252.GenesisStateAmino): _252.GenesisState;
                toAmino(message: _252.GenesisState): _252.GenesisStateAmino;
                fromAminoMsg(object: _252.GenesisStateAminoMsg): _252.GenesisState;
                toAminoMsg(message: _252.GenesisState): _252.GenesisStateAminoMsg;
                fromProtoMsg(message: _252.GenesisStateProtoMsg): _252.GenesisState;
                toProto(message: _252.GenesisState): Uint8Array;
                toProtoMsg(message: _252.GenesisState): _252.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _252.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _252.Entry;
                fromJSON(object: any): _252.Entry;
                toJSON(message: _252.Entry): unknown;
                fromPartial(object: Partial<_252.Entry>): _252.Entry;
                fromAmino(object: _252.EntryAmino): _252.Entry;
                toAmino(message: _252.Entry): _252.EntryAmino;
                fromAminoMsg(object: _252.EntryAminoMsg): _252.Entry;
                toAminoMsg(message: _252.Entry): _252.EntryAminoMsg;
                fromProtoMsg(message: _252.EntryProtoMsg): _252.Entry;
                toProto(message: _252.Entry): Uint8Array;
                toProtoMsg(message: _252.Entry): _252.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _251.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventSend;
                fromJSON(object: any): _251.EventSend;
                toJSON(message: _251.EventSend): unknown;
                fromPartial(object: Partial<_251.EventSend>): _251.EventSend;
                fromAmino(object: _251.EventSendAmino): _251.EventSend;
                toAmino(message: _251.EventSend): _251.EventSendAmino;
                fromAminoMsg(object: _251.EventSendAminoMsg): _251.EventSend;
                toAminoMsg(message: _251.EventSend): _251.EventSendAminoMsg;
                fromProtoMsg(message: _251.EventSendProtoMsg): _251.EventSend;
                toProto(message: _251.EventSend): Uint8Array;
                toProtoMsg(message: _251.EventSend): _251.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _251.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventMint;
                fromJSON(object: any): _251.EventMint;
                toJSON(message: _251.EventMint): unknown;
                fromPartial(object: Partial<_251.EventMint>): _251.EventMint;
                fromAmino(object: _251.EventMintAmino): _251.EventMint;
                toAmino(message: _251.EventMint): _251.EventMintAmino;
                fromAminoMsg(object: _251.EventMintAminoMsg): _251.EventMint;
                toAminoMsg(message: _251.EventMint): _251.EventMintAminoMsg;
                fromProtoMsg(message: _251.EventMintProtoMsg): _251.EventMint;
                toProto(message: _251.EventMint): Uint8Array;
                toProtoMsg(message: _251.EventMint): _251.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _251.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventBurn;
                fromJSON(object: any): _251.EventBurn;
                toJSON(message: _251.EventBurn): unknown;
                fromPartial(object: Partial<_251.EventBurn>): _251.EventBurn;
                fromAmino(object: _251.EventBurnAmino): _251.EventBurn;
                toAmino(message: _251.EventBurn): _251.EventBurnAmino;
                fromAminoMsg(object: _251.EventBurnAminoMsg): _251.EventBurn;
                toAminoMsg(message: _251.EventBurn): _251.EventBurnAminoMsg;
                fromProtoMsg(message: _251.EventBurnProtoMsg): _251.EventBurn;
                toProto(message: _251.EventBurn): Uint8Array;
                toProtoMsg(message: _251.EventBurn): _251.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _256.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.TableDescriptor;
                fromJSON(object: any): _256.TableDescriptor;
                toJSON(message: _256.TableDescriptor): unknown;
                fromPartial(object: Partial<_256.TableDescriptor>): _256.TableDescriptor;
                fromAmino(object: _256.TableDescriptorAmino): _256.TableDescriptor;
                toAmino(message: _256.TableDescriptor): _256.TableDescriptorAmino;
                fromAminoMsg(object: _256.TableDescriptorAminoMsg): _256.TableDescriptor;
                toAminoMsg(message: _256.TableDescriptor): _256.TableDescriptorAminoMsg;
                fromProtoMsg(message: _256.TableDescriptorProtoMsg): _256.TableDescriptor;
                toProto(message: _256.TableDescriptor): Uint8Array;
                toProtoMsg(message: _256.TableDescriptor): _256.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _256.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.PrimaryKeyDescriptor;
                fromJSON(object: any): _256.PrimaryKeyDescriptor;
                toJSON(message: _256.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_256.PrimaryKeyDescriptor>): _256.PrimaryKeyDescriptor;
                fromAmino(object: _256.PrimaryKeyDescriptorAmino): _256.PrimaryKeyDescriptor;
                toAmino(message: _256.PrimaryKeyDescriptor): _256.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _256.PrimaryKeyDescriptorAminoMsg): _256.PrimaryKeyDescriptor;
                toAminoMsg(message: _256.PrimaryKeyDescriptor): _256.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _256.PrimaryKeyDescriptorProtoMsg): _256.PrimaryKeyDescriptor;
                toProto(message: _256.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _256.PrimaryKeyDescriptor): _256.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _256.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.SecondaryIndexDescriptor;
                fromJSON(object: any): _256.SecondaryIndexDescriptor;
                toJSON(message: _256.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_256.SecondaryIndexDescriptor>): _256.SecondaryIndexDescriptor;
                fromAmino(object: _256.SecondaryIndexDescriptorAmino): _256.SecondaryIndexDescriptor;
                toAmino(message: _256.SecondaryIndexDescriptor): _256.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _256.SecondaryIndexDescriptorAminoMsg): _256.SecondaryIndexDescriptor;
                toAminoMsg(message: _256.SecondaryIndexDescriptor): _256.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _256.SecondaryIndexDescriptorProtoMsg): _256.SecondaryIndexDescriptor;
                toProto(message: _256.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _256.SecondaryIndexDescriptor): _256.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _256.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.SingletonDescriptor;
                fromJSON(object: any): _256.SingletonDescriptor;
                toJSON(message: _256.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_256.SingletonDescriptor>): _256.SingletonDescriptor;
                fromAmino(object: _256.SingletonDescriptorAmino): _256.SingletonDescriptor;
                toAmino(message: _256.SingletonDescriptor): _256.SingletonDescriptorAmino;
                fromAminoMsg(object: _256.SingletonDescriptorAminoMsg): _256.SingletonDescriptor;
                toAminoMsg(message: _256.SingletonDescriptor): _256.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _256.SingletonDescriptorProtoMsg): _256.SingletonDescriptor;
                toProto(message: _256.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _256.SingletonDescriptor): _256.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _257.StorageType;
            storageTypeToJSON(object: _257.StorageType): string;
            StorageType: typeof _257.StorageType;
            StorageTypeSDKType: typeof _257.StorageType;
            StorageTypeAmino: typeof _257.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _257.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ModuleSchemaDescriptor;
                fromJSON(object: any): _257.ModuleSchemaDescriptor;
                toJSON(message: _257.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_257.ModuleSchemaDescriptor>): _257.ModuleSchemaDescriptor;
                fromAmino(object: _257.ModuleSchemaDescriptorAmino): _257.ModuleSchemaDescriptor;
                toAmino(message: _257.ModuleSchemaDescriptor): _257.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _257.ModuleSchemaDescriptorAminoMsg): _257.ModuleSchemaDescriptor;
                toAminoMsg(message: _257.ModuleSchemaDescriptor): _257.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _257.ModuleSchemaDescriptorProtoMsg): _257.ModuleSchemaDescriptor;
                toProto(message: _257.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _257.ModuleSchemaDescriptor): _257.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _257.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _257.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _257.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_257.ModuleSchemaDescriptor_FileEntry>): _257.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _257.ModuleSchemaDescriptor_FileEntryAmino): _257.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _257.ModuleSchemaDescriptor_FileEntry): _257.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _257.ModuleSchemaDescriptor_FileEntryAminoMsg): _257.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _257.ModuleSchemaDescriptor_FileEntry): _257.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _257.ModuleSchemaDescriptor_FileEntryProtoMsg): _257.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _257.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _257.ModuleSchemaDescriptor_FileEntry): _257.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _436.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _259.QueryParamsRequest): Promise<_259.QueryParamsResponse>;
                subspaces(request?: _259.QuerySubspacesRequest): Promise<_259.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _259.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryParamsRequest;
                fromJSON(object: any): _259.QueryParamsRequest;
                toJSON(message: _259.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_259.QueryParamsRequest>): _259.QueryParamsRequest;
                fromAmino(object: _259.QueryParamsRequestAmino): _259.QueryParamsRequest;
                toAmino(message: _259.QueryParamsRequest): _259.QueryParamsRequestAmino;
                fromAminoMsg(object: _259.QueryParamsRequestAminoMsg): _259.QueryParamsRequest;
                toAminoMsg(message: _259.QueryParamsRequest): _259.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _259.QueryParamsRequestProtoMsg): _259.QueryParamsRequest;
                toProto(message: _259.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _259.QueryParamsRequest): _259.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _259.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QueryParamsResponse;
                fromJSON(object: any): _259.QueryParamsResponse;
                toJSON(message: _259.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_259.QueryParamsResponse>): _259.QueryParamsResponse;
                fromAmino(object: _259.QueryParamsResponseAmino): _259.QueryParamsResponse;
                toAmino(message: _259.QueryParamsResponse): _259.QueryParamsResponseAmino;
                fromAminoMsg(object: _259.QueryParamsResponseAminoMsg): _259.QueryParamsResponse;
                toAminoMsg(message: _259.QueryParamsResponse): _259.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _259.QueryParamsResponseProtoMsg): _259.QueryParamsResponse;
                toProto(message: _259.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _259.QueryParamsResponse): _259.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _259.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QuerySubspacesRequest;
                fromJSON(_: any): _259.QuerySubspacesRequest;
                toJSON(_: _259.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_259.QuerySubspacesRequest>): _259.QuerySubspacesRequest;
                fromAmino(_: _259.QuerySubspacesRequestAmino): _259.QuerySubspacesRequest;
                toAmino(_: _259.QuerySubspacesRequest): _259.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _259.QuerySubspacesRequestAminoMsg): _259.QuerySubspacesRequest;
                toAminoMsg(message: _259.QuerySubspacesRequest): _259.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _259.QuerySubspacesRequestProtoMsg): _259.QuerySubspacesRequest;
                toProto(message: _259.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _259.QuerySubspacesRequest): _259.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _259.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.QuerySubspacesResponse;
                fromJSON(object: any): _259.QuerySubspacesResponse;
                toJSON(message: _259.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_259.QuerySubspacesResponse>): _259.QuerySubspacesResponse;
                fromAmino(object: _259.QuerySubspacesResponseAmino): _259.QuerySubspacesResponse;
                toAmino(message: _259.QuerySubspacesResponse): _259.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _259.QuerySubspacesResponseAminoMsg): _259.QuerySubspacesResponse;
                toAminoMsg(message: _259.QuerySubspacesResponse): _259.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _259.QuerySubspacesResponseProtoMsg): _259.QuerySubspacesResponse;
                toProto(message: _259.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _259.QuerySubspacesResponse): _259.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _259.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _259.Subspace;
                fromJSON(object: any): _259.Subspace;
                toJSON(message: _259.Subspace): unknown;
                fromPartial(object: Partial<_259.Subspace>): _259.Subspace;
                fromAmino(object: _259.SubspaceAmino): _259.Subspace;
                toAmino(message: _259.Subspace): _259.SubspaceAmino;
                fromAminoMsg(object: _259.SubspaceAminoMsg): _259.Subspace;
                toAminoMsg(message: _259.Subspace): _259.SubspaceAminoMsg;
                fromProtoMsg(message: _259.SubspaceProtoMsg): _259.Subspace;
                toProto(message: _259.Subspace): Uint8Array;
                toProtoMsg(message: _259.Subspace): _259.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _258.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.ParameterChangeProposal;
                fromJSON(object: any): _258.ParameterChangeProposal;
                toJSON(message: _258.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_258.ParameterChangeProposal>): _258.ParameterChangeProposal;
                fromAmino(object: _258.ParameterChangeProposalAmino): _258.ParameterChangeProposal;
                toAmino(message: _258.ParameterChangeProposal): _258.ParameterChangeProposalAmino;
                fromAminoMsg(object: _258.ParameterChangeProposalAminoMsg): _258.ParameterChangeProposal;
                toAminoMsg(message: _258.ParameterChangeProposal): _258.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _258.ParameterChangeProposalProtoMsg): _258.ParameterChangeProposal;
                toProto(message: _258.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _258.ParameterChangeProposal): _258.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _258.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.ParamChange;
                fromJSON(object: any): _258.ParamChange;
                toJSON(message: _258.ParamChange): unknown;
                fromPartial(object: Partial<_258.ParamChange>): _258.ParamChange;
                fromAmino(object: _258.ParamChangeAmino): _258.ParamChange;
                toAmino(message: _258.ParamChange): _258.ParamChangeAmino;
                fromAminoMsg(object: _258.ParamChangeAminoMsg): _258.ParamChange;
                toAminoMsg(message: _258.ParamChange): _258.ParamChangeAminoMsg;
                fromProtoMsg(message: _258.ParamChangeProtoMsg): _258.ParamChange;
                toProto(message: _258.ParamChange): Uint8Array;
                toProtoMsg(message: _258.ParamChange): _258.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _451.MsgClientImpl;
            QueryClientImpl: typeof _437.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _261.QueryParamsRequest): Promise<_261.QueryParamsResponse>;
                signingInfo(request: _261.QuerySigningInfoRequest): Promise<_261.QuerySigningInfoResponse>;
                signingInfos(request?: _261.QuerySigningInfosRequest): Promise<_261.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _263.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _263.MsgUnjail): {
                        typeUrl: string;
                        value: _263.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _263.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _263.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _263.MsgUnjail): {
                        typeUrl: string;
                        value: _263.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _263.MsgUnjail) => _263.MsgUnjailAmino;
                    fromAmino: (object: _263.MsgUnjailAmino) => _263.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _263.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgUnjail;
                fromJSON(object: any): _263.MsgUnjail;
                toJSON(message: _263.MsgUnjail): unknown;
                fromPartial(object: Partial<_263.MsgUnjail>): _263.MsgUnjail;
                fromAmino(object: _263.MsgUnjailAmino): _263.MsgUnjail;
                toAmino(message: _263.MsgUnjail): _263.MsgUnjailAmino;
                fromAminoMsg(object: _263.MsgUnjailAminoMsg): _263.MsgUnjail;
                toAminoMsg(message: _263.MsgUnjail): _263.MsgUnjailAminoMsg;
                fromProtoMsg(message: _263.MsgUnjailProtoMsg): _263.MsgUnjail;
                toProto(message: _263.MsgUnjail): Uint8Array;
                toProtoMsg(message: _263.MsgUnjail): _263.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _263.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.MsgUnjailResponse;
                fromJSON(_: any): _263.MsgUnjailResponse;
                toJSON(_: _263.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_263.MsgUnjailResponse>): _263.MsgUnjailResponse;
                fromAmino(_: _263.MsgUnjailResponseAmino): _263.MsgUnjailResponse;
                toAmino(_: _263.MsgUnjailResponse): _263.MsgUnjailResponseAmino;
                fromAminoMsg(object: _263.MsgUnjailResponseAminoMsg): _263.MsgUnjailResponse;
                toAminoMsg(message: _263.MsgUnjailResponse): _263.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _263.MsgUnjailResponseProtoMsg): _263.MsgUnjailResponse;
                toProto(message: _263.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _263.MsgUnjailResponse): _263.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _262.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.ValidatorSigningInfo;
                fromJSON(object: any): _262.ValidatorSigningInfo;
                toJSON(message: _262.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_262.ValidatorSigningInfo>): _262.ValidatorSigningInfo;
                fromAmino(object: _262.ValidatorSigningInfoAmino): _262.ValidatorSigningInfo;
                toAmino(message: _262.ValidatorSigningInfo): _262.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _262.ValidatorSigningInfoAminoMsg): _262.ValidatorSigningInfo;
                toAminoMsg(message: _262.ValidatorSigningInfo): _262.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _262.ValidatorSigningInfoProtoMsg): _262.ValidatorSigningInfo;
                toProto(message: _262.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _262.ValidatorSigningInfo): _262.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _262.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.Params;
                fromJSON(object: any): _262.Params;
                toJSON(message: _262.Params): unknown;
                fromPartial(object: Partial<_262.Params>): _262.Params;
                fromAmino(object: _262.ParamsAmino): _262.Params;
                toAmino(message: _262.Params): _262.ParamsAmino;
                fromAminoMsg(object: _262.ParamsAminoMsg): _262.Params;
                toAminoMsg(message: _262.Params): _262.ParamsAminoMsg;
                fromProtoMsg(message: _262.ParamsProtoMsg): _262.Params;
                toProto(message: _262.Params): Uint8Array;
                toProtoMsg(message: _262.Params): _262.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _261.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryParamsRequest;
                fromJSON(_: any): _261.QueryParamsRequest;
                toJSON(_: _261.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_261.QueryParamsRequest>): _261.QueryParamsRequest;
                fromAmino(_: _261.QueryParamsRequestAmino): _261.QueryParamsRequest;
                toAmino(_: _261.QueryParamsRequest): _261.QueryParamsRequestAmino;
                fromAminoMsg(object: _261.QueryParamsRequestAminoMsg): _261.QueryParamsRequest;
                toAminoMsg(message: _261.QueryParamsRequest): _261.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _261.QueryParamsRequestProtoMsg): _261.QueryParamsRequest;
                toProto(message: _261.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _261.QueryParamsRequest): _261.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _261.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QueryParamsResponse;
                fromJSON(object: any): _261.QueryParamsResponse;
                toJSON(message: _261.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_261.QueryParamsResponse>): _261.QueryParamsResponse;
                fromAmino(object: _261.QueryParamsResponseAmino): _261.QueryParamsResponse;
                toAmino(message: _261.QueryParamsResponse): _261.QueryParamsResponseAmino;
                fromAminoMsg(object: _261.QueryParamsResponseAminoMsg): _261.QueryParamsResponse;
                toAminoMsg(message: _261.QueryParamsResponse): _261.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _261.QueryParamsResponseProtoMsg): _261.QueryParamsResponse;
                toProto(message: _261.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _261.QueryParamsResponse): _261.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _261.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QuerySigningInfoRequest;
                fromJSON(object: any): _261.QuerySigningInfoRequest;
                toJSON(message: _261.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_261.QuerySigningInfoRequest>): _261.QuerySigningInfoRequest;
                fromAmino(object: _261.QuerySigningInfoRequestAmino): _261.QuerySigningInfoRequest;
                toAmino(message: _261.QuerySigningInfoRequest): _261.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _261.QuerySigningInfoRequestAminoMsg): _261.QuerySigningInfoRequest;
                toAminoMsg(message: _261.QuerySigningInfoRequest): _261.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _261.QuerySigningInfoRequestProtoMsg): _261.QuerySigningInfoRequest;
                toProto(message: _261.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _261.QuerySigningInfoRequest): _261.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _261.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QuerySigningInfoResponse;
                fromJSON(object: any): _261.QuerySigningInfoResponse;
                toJSON(message: _261.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_261.QuerySigningInfoResponse>): _261.QuerySigningInfoResponse;
                fromAmino(object: _261.QuerySigningInfoResponseAmino): _261.QuerySigningInfoResponse;
                toAmino(message: _261.QuerySigningInfoResponse): _261.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _261.QuerySigningInfoResponseAminoMsg): _261.QuerySigningInfoResponse;
                toAminoMsg(message: _261.QuerySigningInfoResponse): _261.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _261.QuerySigningInfoResponseProtoMsg): _261.QuerySigningInfoResponse;
                toProto(message: _261.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _261.QuerySigningInfoResponse): _261.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _261.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QuerySigningInfosRequest;
                fromJSON(object: any): _261.QuerySigningInfosRequest;
                toJSON(message: _261.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_261.QuerySigningInfosRequest>): _261.QuerySigningInfosRequest;
                fromAmino(object: _261.QuerySigningInfosRequestAmino): _261.QuerySigningInfosRequest;
                toAmino(message: _261.QuerySigningInfosRequest): _261.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _261.QuerySigningInfosRequestAminoMsg): _261.QuerySigningInfosRequest;
                toAminoMsg(message: _261.QuerySigningInfosRequest): _261.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _261.QuerySigningInfosRequestProtoMsg): _261.QuerySigningInfosRequest;
                toProto(message: _261.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _261.QuerySigningInfosRequest): _261.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _261.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.QuerySigningInfosResponse;
                fromJSON(object: any): _261.QuerySigningInfosResponse;
                toJSON(message: _261.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_261.QuerySigningInfosResponse>): _261.QuerySigningInfosResponse;
                fromAmino(object: _261.QuerySigningInfosResponseAmino): _261.QuerySigningInfosResponse;
                toAmino(message: _261.QuerySigningInfosResponse): _261.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _261.QuerySigningInfosResponseAminoMsg): _261.QuerySigningInfosResponse;
                toAminoMsg(message: _261.QuerySigningInfosResponse): _261.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _261.QuerySigningInfosResponseProtoMsg): _261.QuerySigningInfosResponse;
                toProto(message: _261.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _261.QuerySigningInfosResponse): _261.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                encode(message: _260.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.SigningInfo;
                fromJSON(object: any): _260.SigningInfo;
                toJSON(message: _260.SigningInfo): unknown;
                fromPartial(object: Partial<_260.SigningInfo>): _260.SigningInfo;
                fromAmino(object: _260.SigningInfoAmino): _260.SigningInfo;
                toAmino(message: _260.SigningInfo): _260.SigningInfoAmino;
                fromAminoMsg(object: _260.SigningInfoAminoMsg): _260.SigningInfo;
                toAminoMsg(message: _260.SigningInfo): _260.SigningInfoAminoMsg;
                fromProtoMsg(message: _260.SigningInfoProtoMsg): _260.SigningInfo;
                toProto(message: _260.SigningInfo): Uint8Array;
                toProtoMsg(message: _260.SigningInfo): _260.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _260.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.ValidatorMissedBlocks;
                fromJSON(object: any): _260.ValidatorMissedBlocks;
                toJSON(message: _260.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_260.ValidatorMissedBlocks>): _260.ValidatorMissedBlocks;
                fromAmino(object: _260.ValidatorMissedBlocksAmino): _260.ValidatorMissedBlocks;
                toAmino(message: _260.ValidatorMissedBlocks): _260.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _260.ValidatorMissedBlocksAminoMsg): _260.ValidatorMissedBlocks;
                toAminoMsg(message: _260.ValidatorMissedBlocks): _260.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _260.ValidatorMissedBlocksProtoMsg): _260.ValidatorMissedBlocks;
                toProto(message: _260.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _260.ValidatorMissedBlocks): _260.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _260.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.MissedBlock;
                fromJSON(object: any): _260.MissedBlock;
                toJSON(message: _260.MissedBlock): unknown;
                fromPartial(object: Partial<_260.MissedBlock>): _260.MissedBlock;
                fromAmino(object: _260.MissedBlockAmino): _260.MissedBlock;
                toAmino(message: _260.MissedBlock): _260.MissedBlockAmino;
                fromAminoMsg(object: _260.MissedBlockAminoMsg): _260.MissedBlock;
                toAminoMsg(message: _260.MissedBlock): _260.MissedBlockAminoMsg;
                fromProtoMsg(message: _260.MissedBlockProtoMsg): _260.MissedBlock;
                toProto(message: _260.MissedBlock): Uint8Array;
                toProtoMsg(message: _260.MissedBlock): _260.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _452.MsgClientImpl;
            QueryClientImpl: typeof _438.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _266.QueryValidatorsRequest): Promise<_266.QueryValidatorsResponse>;
                validator(request: _266.QueryValidatorRequest): Promise<_266.QueryValidatorResponse>;
                validatorDelegations(request: _266.QueryValidatorDelegationsRequest): Promise<_266.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _266.QueryValidatorUnbondingDelegationsRequest): Promise<_266.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _266.QueryDelegationRequest): Promise<_266.QueryDelegationResponse>;
                unbondingDelegation(request: _266.QueryUnbondingDelegationRequest): Promise<_266.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _266.QueryDelegatorDelegationsRequest): Promise<_266.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _266.QueryDelegatorUnbondingDelegationsRequest): Promise<_266.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _266.QueryRedelegationsRequest): Promise<_266.QueryRedelegationsResponse>;
                delegatorValidators(request: _266.QueryDelegatorValidatorsRequest): Promise<_266.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _266.QueryDelegatorValidatorRequest): Promise<_266.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _266.QueryHistoricalInfoRequest): Promise<_266.QueryHistoricalInfoResponse>;
                pool(request?: _266.QueryPoolRequest): Promise<_266.QueryPoolResponse>;
                params(request?: _266.QueryParamsRequest): Promise<_266.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _268.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _268.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _268.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _268.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _268.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _268.MsgCreateValidator): {
                        typeUrl: string;
                        value: _268.MsgCreateValidator;
                    };
                    editValidator(value: _268.MsgEditValidator): {
                        typeUrl: string;
                        value: _268.MsgEditValidator;
                    };
                    delegate(value: _268.MsgDelegate): {
                        typeUrl: string;
                        value: _268.MsgDelegate;
                    };
                    beginRedelegate(value: _268.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _268.MsgBeginRedelegate;
                    };
                    undelegate(value: _268.MsgUndelegate): {
                        typeUrl: string;
                        value: _268.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _268.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _268.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _268.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _268.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _268.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _268.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _268.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _268.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _268.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _268.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _268.MsgCreateValidator): {
                        typeUrl: string;
                        value: _268.MsgCreateValidator;
                    };
                    editValidator(value: _268.MsgEditValidator): {
                        typeUrl: string;
                        value: _268.MsgEditValidator;
                    };
                    delegate(value: _268.MsgDelegate): {
                        typeUrl: string;
                        value: _268.MsgDelegate;
                    };
                    beginRedelegate(value: _268.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _268.MsgBeginRedelegate;
                    };
                    undelegate(value: _268.MsgUndelegate): {
                        typeUrl: string;
                        value: _268.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _268.MsgCreateValidator) => _268.MsgCreateValidatorAmino;
                    fromAmino: (object: _268.MsgCreateValidatorAmino) => _268.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _268.MsgEditValidator) => _268.MsgEditValidatorAmino;
                    fromAmino: (object: _268.MsgEditValidatorAmino) => _268.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _268.MsgDelegate) => _268.MsgDelegateAmino;
                    fromAmino: (object: _268.MsgDelegateAmino) => _268.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _268.MsgBeginRedelegate) => _268.MsgBeginRedelegateAmino;
                    fromAmino: (object: _268.MsgBeginRedelegateAmino) => _268.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _268.MsgUndelegate) => _268.MsgUndelegateAmino;
                    fromAmino: (object: _268.MsgUndelegateAmino) => _268.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _268.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgCreateValidator;
                fromJSON(object: any): _268.MsgCreateValidator;
                toJSON(message: _268.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_268.MsgCreateValidator>): _268.MsgCreateValidator;
                fromAmino(object: _268.MsgCreateValidatorAmino): _268.MsgCreateValidator;
                toAmino(message: _268.MsgCreateValidator): _268.MsgCreateValidatorAmino;
                fromAminoMsg(object: _268.MsgCreateValidatorAminoMsg): _268.MsgCreateValidator;
                toAminoMsg(message: _268.MsgCreateValidator): _268.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _268.MsgCreateValidatorProtoMsg): _268.MsgCreateValidator;
                toProto(message: _268.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _268.MsgCreateValidator): _268.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _268.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgCreateValidatorResponse;
                fromJSON(_: any): _268.MsgCreateValidatorResponse;
                toJSON(_: _268.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_268.MsgCreateValidatorResponse>): _268.MsgCreateValidatorResponse;
                fromAmino(_: _268.MsgCreateValidatorResponseAmino): _268.MsgCreateValidatorResponse;
                toAmino(_: _268.MsgCreateValidatorResponse): _268.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _268.MsgCreateValidatorResponseAminoMsg): _268.MsgCreateValidatorResponse;
                toAminoMsg(message: _268.MsgCreateValidatorResponse): _268.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _268.MsgCreateValidatorResponseProtoMsg): _268.MsgCreateValidatorResponse;
                toProto(message: _268.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _268.MsgCreateValidatorResponse): _268.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _268.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgEditValidator;
                fromJSON(object: any): _268.MsgEditValidator;
                toJSON(message: _268.MsgEditValidator): unknown;
                fromPartial(object: Partial<_268.MsgEditValidator>): _268.MsgEditValidator;
                fromAmino(object: _268.MsgEditValidatorAmino): _268.MsgEditValidator;
                toAmino(message: _268.MsgEditValidator): _268.MsgEditValidatorAmino;
                fromAminoMsg(object: _268.MsgEditValidatorAminoMsg): _268.MsgEditValidator;
                toAminoMsg(message: _268.MsgEditValidator): _268.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _268.MsgEditValidatorProtoMsg): _268.MsgEditValidator;
                toProto(message: _268.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _268.MsgEditValidator): _268.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _268.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgEditValidatorResponse;
                fromJSON(_: any): _268.MsgEditValidatorResponse;
                toJSON(_: _268.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_268.MsgEditValidatorResponse>): _268.MsgEditValidatorResponse;
                fromAmino(_: _268.MsgEditValidatorResponseAmino): _268.MsgEditValidatorResponse;
                toAmino(_: _268.MsgEditValidatorResponse): _268.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _268.MsgEditValidatorResponseAminoMsg): _268.MsgEditValidatorResponse;
                toAminoMsg(message: _268.MsgEditValidatorResponse): _268.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _268.MsgEditValidatorResponseProtoMsg): _268.MsgEditValidatorResponse;
                toProto(message: _268.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _268.MsgEditValidatorResponse): _268.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _268.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDelegate;
                fromJSON(object: any): _268.MsgDelegate;
                toJSON(message: _268.MsgDelegate): unknown;
                fromPartial(object: Partial<_268.MsgDelegate>): _268.MsgDelegate;
                fromAmino(object: _268.MsgDelegateAmino): _268.MsgDelegate;
                toAmino(message: _268.MsgDelegate): _268.MsgDelegateAmino;
                fromAminoMsg(object: _268.MsgDelegateAminoMsg): _268.MsgDelegate;
                toAminoMsg(message: _268.MsgDelegate): _268.MsgDelegateAminoMsg;
                fromProtoMsg(message: _268.MsgDelegateProtoMsg): _268.MsgDelegate;
                toProto(message: _268.MsgDelegate): Uint8Array;
                toProtoMsg(message: _268.MsgDelegate): _268.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _268.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgDelegateResponse;
                fromJSON(_: any): _268.MsgDelegateResponse;
                toJSON(_: _268.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_268.MsgDelegateResponse>): _268.MsgDelegateResponse;
                fromAmino(_: _268.MsgDelegateResponseAmino): _268.MsgDelegateResponse;
                toAmino(_: _268.MsgDelegateResponse): _268.MsgDelegateResponseAmino;
                fromAminoMsg(object: _268.MsgDelegateResponseAminoMsg): _268.MsgDelegateResponse;
                toAminoMsg(message: _268.MsgDelegateResponse): _268.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _268.MsgDelegateResponseProtoMsg): _268.MsgDelegateResponse;
                toProto(message: _268.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _268.MsgDelegateResponse): _268.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _268.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgBeginRedelegate;
                fromJSON(object: any): _268.MsgBeginRedelegate;
                toJSON(message: _268.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_268.MsgBeginRedelegate>): _268.MsgBeginRedelegate;
                fromAmino(object: _268.MsgBeginRedelegateAmino): _268.MsgBeginRedelegate;
                toAmino(message: _268.MsgBeginRedelegate): _268.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _268.MsgBeginRedelegateAminoMsg): _268.MsgBeginRedelegate;
                toAminoMsg(message: _268.MsgBeginRedelegate): _268.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _268.MsgBeginRedelegateProtoMsg): _268.MsgBeginRedelegate;
                toProto(message: _268.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _268.MsgBeginRedelegate): _268.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _268.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgBeginRedelegateResponse;
                fromJSON(object: any): _268.MsgBeginRedelegateResponse;
                toJSON(message: _268.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_268.MsgBeginRedelegateResponse>): _268.MsgBeginRedelegateResponse;
                fromAmino(object: _268.MsgBeginRedelegateResponseAmino): _268.MsgBeginRedelegateResponse;
                toAmino(message: _268.MsgBeginRedelegateResponse): _268.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _268.MsgBeginRedelegateResponseAminoMsg): _268.MsgBeginRedelegateResponse;
                toAminoMsg(message: _268.MsgBeginRedelegateResponse): _268.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _268.MsgBeginRedelegateResponseProtoMsg): _268.MsgBeginRedelegateResponse;
                toProto(message: _268.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _268.MsgBeginRedelegateResponse): _268.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _268.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgUndelegate;
                fromJSON(object: any): _268.MsgUndelegate;
                toJSON(message: _268.MsgUndelegate): unknown;
                fromPartial(object: Partial<_268.MsgUndelegate>): _268.MsgUndelegate;
                fromAmino(object: _268.MsgUndelegateAmino): _268.MsgUndelegate;
                toAmino(message: _268.MsgUndelegate): _268.MsgUndelegateAmino;
                fromAminoMsg(object: _268.MsgUndelegateAminoMsg): _268.MsgUndelegate;
                toAminoMsg(message: _268.MsgUndelegate): _268.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _268.MsgUndelegateProtoMsg): _268.MsgUndelegate;
                toProto(message: _268.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _268.MsgUndelegate): _268.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _268.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.MsgUndelegateResponse;
                fromJSON(object: any): _268.MsgUndelegateResponse;
                toJSON(message: _268.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_268.MsgUndelegateResponse>): _268.MsgUndelegateResponse;
                fromAmino(object: _268.MsgUndelegateResponseAmino): _268.MsgUndelegateResponse;
                toAmino(message: _268.MsgUndelegateResponse): _268.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _268.MsgUndelegateResponseAminoMsg): _268.MsgUndelegateResponse;
                toAminoMsg(message: _268.MsgUndelegateResponse): _268.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _268.MsgUndelegateResponseProtoMsg): _268.MsgUndelegateResponse;
                toProto(message: _268.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _268.MsgUndelegateResponse): _268.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _267.BondStatus;
            bondStatusToJSON(object: _267.BondStatus): string;
            BondStatus: typeof _267.BondStatus;
            BondStatusSDKType: typeof _267.BondStatus;
            BondStatusAmino: typeof _267.BondStatus;
            HistoricalInfo: {
                encode(message: _267.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.HistoricalInfo;
                fromJSON(object: any): _267.HistoricalInfo;
                toJSON(message: _267.HistoricalInfo): unknown;
                fromPartial(object: Partial<_267.HistoricalInfo>): _267.HistoricalInfo;
                fromAmino(object: _267.HistoricalInfoAmino): _267.HistoricalInfo;
                toAmino(message: _267.HistoricalInfo): _267.HistoricalInfoAmino;
                fromAminoMsg(object: _267.HistoricalInfoAminoMsg): _267.HistoricalInfo;
                toAminoMsg(message: _267.HistoricalInfo): _267.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _267.HistoricalInfoProtoMsg): _267.HistoricalInfo;
                toProto(message: _267.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _267.HistoricalInfo): _267.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _267.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.CommissionRates;
                fromJSON(object: any): _267.CommissionRates;
                toJSON(message: _267.CommissionRates): unknown;
                fromPartial(object: Partial<_267.CommissionRates>): _267.CommissionRates;
                fromAmino(object: _267.CommissionRatesAmino): _267.CommissionRates;
                toAmino(message: _267.CommissionRates): _267.CommissionRatesAmino;
                fromAminoMsg(object: _267.CommissionRatesAminoMsg): _267.CommissionRates;
                toAminoMsg(message: _267.CommissionRates): _267.CommissionRatesAminoMsg;
                fromProtoMsg(message: _267.CommissionRatesProtoMsg): _267.CommissionRates;
                toProto(message: _267.CommissionRates): Uint8Array;
                toProtoMsg(message: _267.CommissionRates): _267.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _267.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Commission;
                fromJSON(object: any): _267.Commission;
                toJSON(message: _267.Commission): unknown;
                fromPartial(object: Partial<_267.Commission>): _267.Commission;
                fromAmino(object: _267.CommissionAmino): _267.Commission;
                toAmino(message: _267.Commission): _267.CommissionAmino;
                fromAminoMsg(object: _267.CommissionAminoMsg): _267.Commission;
                toAminoMsg(message: _267.Commission): _267.CommissionAminoMsg;
                fromProtoMsg(message: _267.CommissionProtoMsg): _267.Commission;
                toProto(message: _267.Commission): Uint8Array;
                toProtoMsg(message: _267.Commission): _267.CommissionProtoMsg;
            };
            Description: {
                encode(message: _267.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Description;
                fromJSON(object: any): _267.Description;
                toJSON(message: _267.Description): unknown;
                fromPartial(object: Partial<_267.Description>): _267.Description;
                fromAmino(object: _267.DescriptionAmino): _267.Description;
                toAmino(message: _267.Description): _267.DescriptionAmino;
                fromAminoMsg(object: _267.DescriptionAminoMsg): _267.Description;
                toAminoMsg(message: _267.Description): _267.DescriptionAminoMsg;
                fromProtoMsg(message: _267.DescriptionProtoMsg): _267.Description;
                toProto(message: _267.Description): Uint8Array;
                toProtoMsg(message: _267.Description): _267.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _267.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Validator;
                fromJSON(object: any): _267.Validator;
                toJSON(message: _267.Validator): unknown;
                fromPartial(object: Partial<_267.Validator>): _267.Validator;
                fromAmino(object: _267.ValidatorAmino): _267.Validator;
                toAmino(message: _267.Validator): _267.ValidatorAmino;
                fromAminoMsg(object: _267.ValidatorAminoMsg): _267.Validator;
                toAminoMsg(message: _267.Validator): _267.ValidatorAminoMsg;
                fromProtoMsg(message: _267.ValidatorProtoMsg): _267.Validator;
                toProto(message: _267.Validator): Uint8Array;
                toProtoMsg(message: _267.Validator): _267.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _267.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.ValAddresses;
                fromJSON(object: any): _267.ValAddresses;
                toJSON(message: _267.ValAddresses): unknown;
                fromPartial(object: Partial<_267.ValAddresses>): _267.ValAddresses;
                fromAmino(object: _267.ValAddressesAmino): _267.ValAddresses;
                toAmino(message: _267.ValAddresses): _267.ValAddressesAmino;
                fromAminoMsg(object: _267.ValAddressesAminoMsg): _267.ValAddresses;
                toAminoMsg(message: _267.ValAddresses): _267.ValAddressesAminoMsg;
                fromProtoMsg(message: _267.ValAddressesProtoMsg): _267.ValAddresses;
                toProto(message: _267.ValAddresses): Uint8Array;
                toProtoMsg(message: _267.ValAddresses): _267.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _267.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DVPair;
                fromJSON(object: any): _267.DVPair;
                toJSON(message: _267.DVPair): unknown;
                fromPartial(object: Partial<_267.DVPair>): _267.DVPair;
                fromAmino(object: _267.DVPairAmino): _267.DVPair;
                toAmino(message: _267.DVPair): _267.DVPairAmino;
                fromAminoMsg(object: _267.DVPairAminoMsg): _267.DVPair;
                toAminoMsg(message: _267.DVPair): _267.DVPairAminoMsg;
                fromProtoMsg(message: _267.DVPairProtoMsg): _267.DVPair;
                toProto(message: _267.DVPair): Uint8Array;
                toProtoMsg(message: _267.DVPair): _267.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _267.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DVPairs;
                fromJSON(object: any): _267.DVPairs;
                toJSON(message: _267.DVPairs): unknown;
                fromPartial(object: Partial<_267.DVPairs>): _267.DVPairs;
                fromAmino(object: _267.DVPairsAmino): _267.DVPairs;
                toAmino(message: _267.DVPairs): _267.DVPairsAmino;
                fromAminoMsg(object: _267.DVPairsAminoMsg): _267.DVPairs;
                toAminoMsg(message: _267.DVPairs): _267.DVPairsAminoMsg;
                fromProtoMsg(message: _267.DVPairsProtoMsg): _267.DVPairs;
                toProto(message: _267.DVPairs): Uint8Array;
                toProtoMsg(message: _267.DVPairs): _267.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _267.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DVVTriplet;
                fromJSON(object: any): _267.DVVTriplet;
                toJSON(message: _267.DVVTriplet): unknown;
                fromPartial(object: Partial<_267.DVVTriplet>): _267.DVVTriplet;
                fromAmino(object: _267.DVVTripletAmino): _267.DVVTriplet;
                toAmino(message: _267.DVVTriplet): _267.DVVTripletAmino;
                fromAminoMsg(object: _267.DVVTripletAminoMsg): _267.DVVTriplet;
                toAminoMsg(message: _267.DVVTriplet): _267.DVVTripletAminoMsg;
                fromProtoMsg(message: _267.DVVTripletProtoMsg): _267.DVVTriplet;
                toProto(message: _267.DVVTriplet): Uint8Array;
                toProtoMsg(message: _267.DVVTriplet): _267.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _267.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DVVTriplets;
                fromJSON(object: any): _267.DVVTriplets;
                toJSON(message: _267.DVVTriplets): unknown;
                fromPartial(object: Partial<_267.DVVTriplets>): _267.DVVTriplets;
                fromAmino(object: _267.DVVTripletsAmino): _267.DVVTriplets;
                toAmino(message: _267.DVVTriplets): _267.DVVTripletsAmino;
                fromAminoMsg(object: _267.DVVTripletsAminoMsg): _267.DVVTriplets;
                toAminoMsg(message: _267.DVVTriplets): _267.DVVTripletsAminoMsg;
                fromProtoMsg(message: _267.DVVTripletsProtoMsg): _267.DVVTriplets;
                toProto(message: _267.DVVTriplets): Uint8Array;
                toProtoMsg(message: _267.DVVTriplets): _267.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _267.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Delegation;
                fromJSON(object: any): _267.Delegation;
                toJSON(message: _267.Delegation): unknown;
                fromPartial(object: Partial<_267.Delegation>): _267.Delegation;
                fromAmino(object: _267.DelegationAmino): _267.Delegation;
                toAmino(message: _267.Delegation): _267.DelegationAmino;
                fromAminoMsg(object: _267.DelegationAminoMsg): _267.Delegation;
                toAminoMsg(message: _267.Delegation): _267.DelegationAminoMsg;
                fromProtoMsg(message: _267.DelegationProtoMsg): _267.Delegation;
                toProto(message: _267.Delegation): Uint8Array;
                toProtoMsg(message: _267.Delegation): _267.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _267.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.UnbondingDelegation;
                fromJSON(object: any): _267.UnbondingDelegation;
                toJSON(message: _267.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_267.UnbondingDelegation>): _267.UnbondingDelegation;
                fromAmino(object: _267.UnbondingDelegationAmino): _267.UnbondingDelegation;
                toAmino(message: _267.UnbondingDelegation): _267.UnbondingDelegationAmino;
                fromAminoMsg(object: _267.UnbondingDelegationAminoMsg): _267.UnbondingDelegation;
                toAminoMsg(message: _267.UnbondingDelegation): _267.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _267.UnbondingDelegationProtoMsg): _267.UnbondingDelegation;
                toProto(message: _267.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _267.UnbondingDelegation): _267.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _267.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.UnbondingDelegationEntry;
                fromJSON(object: any): _267.UnbondingDelegationEntry;
                toJSON(message: _267.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_267.UnbondingDelegationEntry>): _267.UnbondingDelegationEntry;
                fromAmino(object: _267.UnbondingDelegationEntryAmino): _267.UnbondingDelegationEntry;
                toAmino(message: _267.UnbondingDelegationEntry): _267.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _267.UnbondingDelegationEntryAminoMsg): _267.UnbondingDelegationEntry;
                toAminoMsg(message: _267.UnbondingDelegationEntry): _267.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _267.UnbondingDelegationEntryProtoMsg): _267.UnbondingDelegationEntry;
                toProto(message: _267.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _267.UnbondingDelegationEntry): _267.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _267.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.RedelegationEntry;
                fromJSON(object: any): _267.RedelegationEntry;
                toJSON(message: _267.RedelegationEntry): unknown;
                fromPartial(object: Partial<_267.RedelegationEntry>): _267.RedelegationEntry;
                fromAmino(object: _267.RedelegationEntryAmino): _267.RedelegationEntry;
                toAmino(message: _267.RedelegationEntry): _267.RedelegationEntryAmino;
                fromAminoMsg(object: _267.RedelegationEntryAminoMsg): _267.RedelegationEntry;
                toAminoMsg(message: _267.RedelegationEntry): _267.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _267.RedelegationEntryProtoMsg): _267.RedelegationEntry;
                toProto(message: _267.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _267.RedelegationEntry): _267.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _267.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Redelegation;
                fromJSON(object: any): _267.Redelegation;
                toJSON(message: _267.Redelegation): unknown;
                fromPartial(object: Partial<_267.Redelegation>): _267.Redelegation;
                fromAmino(object: _267.RedelegationAmino): _267.Redelegation;
                toAmino(message: _267.Redelegation): _267.RedelegationAmino;
                fromAminoMsg(object: _267.RedelegationAminoMsg): _267.Redelegation;
                toAminoMsg(message: _267.Redelegation): _267.RedelegationAminoMsg;
                fromProtoMsg(message: _267.RedelegationProtoMsg): _267.Redelegation;
                toProto(message: _267.Redelegation): Uint8Array;
                toProtoMsg(message: _267.Redelegation): _267.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _267.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Params;
                fromJSON(object: any): _267.Params;
                toJSON(message: _267.Params): unknown;
                fromPartial(object: Partial<_267.Params>): _267.Params;
                fromAmino(object: _267.ParamsAmino): _267.Params;
                toAmino(message: _267.Params): _267.ParamsAmino;
                fromAminoMsg(object: _267.ParamsAminoMsg): _267.Params;
                toAminoMsg(message: _267.Params): _267.ParamsAminoMsg;
                fromProtoMsg(message: _267.ParamsProtoMsg): _267.Params;
                toProto(message: _267.Params): Uint8Array;
                toProtoMsg(message: _267.Params): _267.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _267.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.DelegationResponse;
                fromJSON(object: any): _267.DelegationResponse;
                toJSON(message: _267.DelegationResponse): unknown;
                fromPartial(object: Partial<_267.DelegationResponse>): _267.DelegationResponse;
                fromAmino(object: _267.DelegationResponseAmino): _267.DelegationResponse;
                toAmino(message: _267.DelegationResponse): _267.DelegationResponseAmino;
                fromAminoMsg(object: _267.DelegationResponseAminoMsg): _267.DelegationResponse;
                toAminoMsg(message: _267.DelegationResponse): _267.DelegationResponseAminoMsg;
                fromProtoMsg(message: _267.DelegationResponseProtoMsg): _267.DelegationResponse;
                toProto(message: _267.DelegationResponse): Uint8Array;
                toProtoMsg(message: _267.DelegationResponse): _267.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _267.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.RedelegationEntryResponse;
                fromJSON(object: any): _267.RedelegationEntryResponse;
                toJSON(message: _267.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_267.RedelegationEntryResponse>): _267.RedelegationEntryResponse;
                fromAmino(object: _267.RedelegationEntryResponseAmino): _267.RedelegationEntryResponse;
                toAmino(message: _267.RedelegationEntryResponse): _267.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _267.RedelegationEntryResponseAminoMsg): _267.RedelegationEntryResponse;
                toAminoMsg(message: _267.RedelegationEntryResponse): _267.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _267.RedelegationEntryResponseProtoMsg): _267.RedelegationEntryResponse;
                toProto(message: _267.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _267.RedelegationEntryResponse): _267.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _267.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.RedelegationResponse;
                fromJSON(object: any): _267.RedelegationResponse;
                toJSON(message: _267.RedelegationResponse): unknown;
                fromPartial(object: Partial<_267.RedelegationResponse>): _267.RedelegationResponse;
                fromAmino(object: _267.RedelegationResponseAmino): _267.RedelegationResponse;
                toAmino(message: _267.RedelegationResponse): _267.RedelegationResponseAmino;
                fromAminoMsg(object: _267.RedelegationResponseAminoMsg): _267.RedelegationResponse;
                toAminoMsg(message: _267.RedelegationResponse): _267.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _267.RedelegationResponseProtoMsg): _267.RedelegationResponse;
                toProto(message: _267.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _267.RedelegationResponse): _267.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _267.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.Pool;
                fromJSON(object: any): _267.Pool;
                toJSON(message: _267.Pool): unknown;
                fromPartial(object: Partial<_267.Pool>): _267.Pool;
                fromAmino(object: _267.PoolAmino): _267.Pool;
                toAmino(message: _267.Pool): _267.PoolAmino;
                fromAminoMsg(object: _267.PoolAminoMsg): _267.Pool;
                toAminoMsg(message: _267.Pool): _267.PoolAminoMsg;
                fromProtoMsg(message: _267.PoolProtoMsg): _267.Pool;
                toProto(message: _267.Pool): Uint8Array;
                toProtoMsg(message: _267.Pool): _267.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _266.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorsRequest;
                fromJSON(object: any): _266.QueryValidatorsRequest;
                toJSON(message: _266.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_266.QueryValidatorsRequest>): _266.QueryValidatorsRequest;
                fromAmino(object: _266.QueryValidatorsRequestAmino): _266.QueryValidatorsRequest;
                toAmino(message: _266.QueryValidatorsRequest): _266.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _266.QueryValidatorsRequestAminoMsg): _266.QueryValidatorsRequest;
                toAminoMsg(message: _266.QueryValidatorsRequest): _266.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorsRequestProtoMsg): _266.QueryValidatorsRequest;
                toProto(message: _266.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorsRequest): _266.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _266.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorsResponse;
                fromJSON(object: any): _266.QueryValidatorsResponse;
                toJSON(message: _266.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_266.QueryValidatorsResponse>): _266.QueryValidatorsResponse;
                fromAmino(object: _266.QueryValidatorsResponseAmino): _266.QueryValidatorsResponse;
                toAmino(message: _266.QueryValidatorsResponse): _266.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _266.QueryValidatorsResponseAminoMsg): _266.QueryValidatorsResponse;
                toAminoMsg(message: _266.QueryValidatorsResponse): _266.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorsResponseProtoMsg): _266.QueryValidatorsResponse;
                toProto(message: _266.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorsResponse): _266.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _266.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorRequest;
                fromJSON(object: any): _266.QueryValidatorRequest;
                toJSON(message: _266.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_266.QueryValidatorRequest>): _266.QueryValidatorRequest;
                fromAmino(object: _266.QueryValidatorRequestAmino): _266.QueryValidatorRequest;
                toAmino(message: _266.QueryValidatorRequest): _266.QueryValidatorRequestAmino;
                fromAminoMsg(object: _266.QueryValidatorRequestAminoMsg): _266.QueryValidatorRequest;
                toAminoMsg(message: _266.QueryValidatorRequest): _266.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorRequestProtoMsg): _266.QueryValidatorRequest;
                toProto(message: _266.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorRequest): _266.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _266.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorResponse;
                fromJSON(object: any): _266.QueryValidatorResponse;
                toJSON(message: _266.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_266.QueryValidatorResponse>): _266.QueryValidatorResponse;
                fromAmino(object: _266.QueryValidatorResponseAmino): _266.QueryValidatorResponse;
                toAmino(message: _266.QueryValidatorResponse): _266.QueryValidatorResponseAmino;
                fromAminoMsg(object: _266.QueryValidatorResponseAminoMsg): _266.QueryValidatorResponse;
                toAminoMsg(message: _266.QueryValidatorResponse): _266.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorResponseProtoMsg): _266.QueryValidatorResponse;
                toProto(message: _266.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorResponse): _266.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _266.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _266.QueryValidatorDelegationsRequest;
                toJSON(message: _266.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_266.QueryValidatorDelegationsRequest>): _266.QueryValidatorDelegationsRequest;
                fromAmino(object: _266.QueryValidatorDelegationsRequestAmino): _266.QueryValidatorDelegationsRequest;
                toAmino(message: _266.QueryValidatorDelegationsRequest): _266.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _266.QueryValidatorDelegationsRequestAminoMsg): _266.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _266.QueryValidatorDelegationsRequest): _266.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorDelegationsRequestProtoMsg): _266.QueryValidatorDelegationsRequest;
                toProto(message: _266.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorDelegationsRequest): _266.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _266.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _266.QueryValidatorDelegationsResponse;
                toJSON(message: _266.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_266.QueryValidatorDelegationsResponse>): _266.QueryValidatorDelegationsResponse;
                fromAmino(object: _266.QueryValidatorDelegationsResponseAmino): _266.QueryValidatorDelegationsResponse;
                toAmino(message: _266.QueryValidatorDelegationsResponse): _266.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _266.QueryValidatorDelegationsResponseAminoMsg): _266.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _266.QueryValidatorDelegationsResponse): _266.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorDelegationsResponseProtoMsg): _266.QueryValidatorDelegationsResponse;
                toProto(message: _266.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorDelegationsResponse): _266.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _266.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _266.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _266.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_266.QueryValidatorUnbondingDelegationsRequest>): _266.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _266.QueryValidatorUnbondingDelegationsRequestAmino): _266.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _266.QueryValidatorUnbondingDelegationsRequest): _266.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _266.QueryValidatorUnbondingDelegationsRequestAminoMsg): _266.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _266.QueryValidatorUnbondingDelegationsRequest): _266.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorUnbondingDelegationsRequestProtoMsg): _266.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _266.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorUnbondingDelegationsRequest): _266.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _266.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _266.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _266.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_266.QueryValidatorUnbondingDelegationsResponse>): _266.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _266.QueryValidatorUnbondingDelegationsResponseAmino): _266.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _266.QueryValidatorUnbondingDelegationsResponse): _266.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _266.QueryValidatorUnbondingDelegationsResponseAminoMsg): _266.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _266.QueryValidatorUnbondingDelegationsResponse): _266.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryValidatorUnbondingDelegationsResponseProtoMsg): _266.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _266.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryValidatorUnbondingDelegationsResponse): _266.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _266.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegationRequest;
                fromJSON(object: any): _266.QueryDelegationRequest;
                toJSON(message: _266.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_266.QueryDelegationRequest>): _266.QueryDelegationRequest;
                fromAmino(object: _266.QueryDelegationRequestAmino): _266.QueryDelegationRequest;
                toAmino(message: _266.QueryDelegationRequest): _266.QueryDelegationRequestAmino;
                fromAminoMsg(object: _266.QueryDelegationRequestAminoMsg): _266.QueryDelegationRequest;
                toAminoMsg(message: _266.QueryDelegationRequest): _266.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _266.QueryDelegationRequestProtoMsg): _266.QueryDelegationRequest;
                toProto(message: _266.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _266.QueryDelegationRequest): _266.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _266.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegationResponse;
                fromJSON(object: any): _266.QueryDelegationResponse;
                toJSON(message: _266.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_266.QueryDelegationResponse>): _266.QueryDelegationResponse;
                fromAmino(object: _266.QueryDelegationResponseAmino): _266.QueryDelegationResponse;
                toAmino(message: _266.QueryDelegationResponse): _266.QueryDelegationResponseAmino;
                fromAminoMsg(object: _266.QueryDelegationResponseAminoMsg): _266.QueryDelegationResponse;
                toAminoMsg(message: _266.QueryDelegationResponse): _266.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _266.QueryDelegationResponseProtoMsg): _266.QueryDelegationResponse;
                toProto(message: _266.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _266.QueryDelegationResponse): _266.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _266.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _266.QueryUnbondingDelegationRequest;
                toJSON(message: _266.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_266.QueryUnbondingDelegationRequest>): _266.QueryUnbondingDelegationRequest;
                fromAmino(object: _266.QueryUnbondingDelegationRequestAmino): _266.QueryUnbondingDelegationRequest;
                toAmino(message: _266.QueryUnbondingDelegationRequest): _266.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _266.QueryUnbondingDelegationRequestAminoMsg): _266.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _266.QueryUnbondingDelegationRequest): _266.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _266.QueryUnbondingDelegationRequestProtoMsg): _266.QueryUnbondingDelegationRequest;
                toProto(message: _266.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _266.QueryUnbondingDelegationRequest): _266.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _266.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _266.QueryUnbondingDelegationResponse;
                toJSON(message: _266.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_266.QueryUnbondingDelegationResponse>): _266.QueryUnbondingDelegationResponse;
                fromAmino(object: _266.QueryUnbondingDelegationResponseAmino): _266.QueryUnbondingDelegationResponse;
                toAmino(message: _266.QueryUnbondingDelegationResponse): _266.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _266.QueryUnbondingDelegationResponseAminoMsg): _266.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _266.QueryUnbondingDelegationResponse): _266.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _266.QueryUnbondingDelegationResponseProtoMsg): _266.QueryUnbondingDelegationResponse;
                toProto(message: _266.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _266.QueryUnbondingDelegationResponse): _266.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _266.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _266.QueryDelegatorDelegationsRequest;
                toJSON(message: _266.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorDelegationsRequest>): _266.QueryDelegatorDelegationsRequest;
                fromAmino(object: _266.QueryDelegatorDelegationsRequestAmino): _266.QueryDelegatorDelegationsRequest;
                toAmino(message: _266.QueryDelegatorDelegationsRequest): _266.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _266.QueryDelegatorDelegationsRequestAminoMsg): _266.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _266.QueryDelegatorDelegationsRequest): _266.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorDelegationsRequestProtoMsg): _266.QueryDelegatorDelegationsRequest;
                toProto(message: _266.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorDelegationsRequest): _266.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _266.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _266.QueryDelegatorDelegationsResponse;
                toJSON(message: _266.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorDelegationsResponse>): _266.QueryDelegatorDelegationsResponse;
                fromAmino(object: _266.QueryDelegatorDelegationsResponseAmino): _266.QueryDelegatorDelegationsResponse;
                toAmino(message: _266.QueryDelegatorDelegationsResponse): _266.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _266.QueryDelegatorDelegationsResponseAminoMsg): _266.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _266.QueryDelegatorDelegationsResponse): _266.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorDelegationsResponseProtoMsg): _266.QueryDelegatorDelegationsResponse;
                toProto(message: _266.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorDelegationsResponse): _266.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _266.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _266.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _266.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorUnbondingDelegationsRequest>): _266.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _266.QueryDelegatorUnbondingDelegationsRequestAmino): _266.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _266.QueryDelegatorUnbondingDelegationsRequest): _266.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _266.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _266.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _266.QueryDelegatorUnbondingDelegationsRequest): _266.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _266.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _266.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorUnbondingDelegationsRequest): _266.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _266.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _266.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _266.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorUnbondingDelegationsResponse>): _266.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _266.QueryDelegatorUnbondingDelegationsResponseAmino): _266.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _266.QueryDelegatorUnbondingDelegationsResponse): _266.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _266.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _266.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _266.QueryDelegatorUnbondingDelegationsResponse): _266.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _266.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _266.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorUnbondingDelegationsResponse): _266.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _266.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRedelegationsRequest;
                fromJSON(object: any): _266.QueryRedelegationsRequest;
                toJSON(message: _266.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_266.QueryRedelegationsRequest>): _266.QueryRedelegationsRequest;
                fromAmino(object: _266.QueryRedelegationsRequestAmino): _266.QueryRedelegationsRequest;
                toAmino(message: _266.QueryRedelegationsRequest): _266.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _266.QueryRedelegationsRequestAminoMsg): _266.QueryRedelegationsRequest;
                toAminoMsg(message: _266.QueryRedelegationsRequest): _266.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryRedelegationsRequestProtoMsg): _266.QueryRedelegationsRequest;
                toProto(message: _266.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryRedelegationsRequest): _266.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _266.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryRedelegationsResponse;
                fromJSON(object: any): _266.QueryRedelegationsResponse;
                toJSON(message: _266.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_266.QueryRedelegationsResponse>): _266.QueryRedelegationsResponse;
                fromAmino(object: _266.QueryRedelegationsResponseAmino): _266.QueryRedelegationsResponse;
                toAmino(message: _266.QueryRedelegationsResponse): _266.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _266.QueryRedelegationsResponseAminoMsg): _266.QueryRedelegationsResponse;
                toAminoMsg(message: _266.QueryRedelegationsResponse): _266.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryRedelegationsResponseProtoMsg): _266.QueryRedelegationsResponse;
                toProto(message: _266.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryRedelegationsResponse): _266.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _266.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _266.QueryDelegatorValidatorsRequest;
                toJSON(message: _266.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorValidatorsRequest>): _266.QueryDelegatorValidatorsRequest;
                fromAmino(object: _266.QueryDelegatorValidatorsRequestAmino): _266.QueryDelegatorValidatorsRequest;
                toAmino(message: _266.QueryDelegatorValidatorsRequest): _266.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _266.QueryDelegatorValidatorsRequestAminoMsg): _266.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _266.QueryDelegatorValidatorsRequest): _266.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorValidatorsRequestProtoMsg): _266.QueryDelegatorValidatorsRequest;
                toProto(message: _266.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorValidatorsRequest): _266.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _266.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _266.QueryDelegatorValidatorsResponse;
                toJSON(message: _266.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorValidatorsResponse>): _266.QueryDelegatorValidatorsResponse;
                fromAmino(object: _266.QueryDelegatorValidatorsResponseAmino): _266.QueryDelegatorValidatorsResponse;
                toAmino(message: _266.QueryDelegatorValidatorsResponse): _266.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _266.QueryDelegatorValidatorsResponseAminoMsg): _266.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _266.QueryDelegatorValidatorsResponse): _266.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorValidatorsResponseProtoMsg): _266.QueryDelegatorValidatorsResponse;
                toProto(message: _266.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorValidatorsResponse): _266.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _266.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _266.QueryDelegatorValidatorRequest;
                toJSON(message: _266.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorValidatorRequest>): _266.QueryDelegatorValidatorRequest;
                fromAmino(object: _266.QueryDelegatorValidatorRequestAmino): _266.QueryDelegatorValidatorRequest;
                toAmino(message: _266.QueryDelegatorValidatorRequest): _266.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _266.QueryDelegatorValidatorRequestAminoMsg): _266.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _266.QueryDelegatorValidatorRequest): _266.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorValidatorRequestProtoMsg): _266.QueryDelegatorValidatorRequest;
                toProto(message: _266.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorValidatorRequest): _266.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _266.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _266.QueryDelegatorValidatorResponse;
                toJSON(message: _266.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_266.QueryDelegatorValidatorResponse>): _266.QueryDelegatorValidatorResponse;
                fromAmino(object: _266.QueryDelegatorValidatorResponseAmino): _266.QueryDelegatorValidatorResponse;
                toAmino(message: _266.QueryDelegatorValidatorResponse): _266.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _266.QueryDelegatorValidatorResponseAminoMsg): _266.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _266.QueryDelegatorValidatorResponse): _266.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _266.QueryDelegatorValidatorResponseProtoMsg): _266.QueryDelegatorValidatorResponse;
                toProto(message: _266.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _266.QueryDelegatorValidatorResponse): _266.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _266.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryHistoricalInfoRequest;
                fromJSON(object: any): _266.QueryHistoricalInfoRequest;
                toJSON(message: _266.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_266.QueryHistoricalInfoRequest>): _266.QueryHistoricalInfoRequest;
                fromAmino(object: _266.QueryHistoricalInfoRequestAmino): _266.QueryHistoricalInfoRequest;
                toAmino(message: _266.QueryHistoricalInfoRequest): _266.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _266.QueryHistoricalInfoRequestAminoMsg): _266.QueryHistoricalInfoRequest;
                toAminoMsg(message: _266.QueryHistoricalInfoRequest): _266.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _266.QueryHistoricalInfoRequestProtoMsg): _266.QueryHistoricalInfoRequest;
                toProto(message: _266.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _266.QueryHistoricalInfoRequest): _266.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _266.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryHistoricalInfoResponse;
                fromJSON(object: any): _266.QueryHistoricalInfoResponse;
                toJSON(message: _266.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_266.QueryHistoricalInfoResponse>): _266.QueryHistoricalInfoResponse;
                fromAmino(object: _266.QueryHistoricalInfoResponseAmino): _266.QueryHistoricalInfoResponse;
                toAmino(message: _266.QueryHistoricalInfoResponse): _266.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _266.QueryHistoricalInfoResponseAminoMsg): _266.QueryHistoricalInfoResponse;
                toAminoMsg(message: _266.QueryHistoricalInfoResponse): _266.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _266.QueryHistoricalInfoResponseProtoMsg): _266.QueryHistoricalInfoResponse;
                toProto(message: _266.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _266.QueryHistoricalInfoResponse): _266.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _266.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryPoolRequest;
                fromJSON(_: any): _266.QueryPoolRequest;
                toJSON(_: _266.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_266.QueryPoolRequest>): _266.QueryPoolRequest;
                fromAmino(_: _266.QueryPoolRequestAmino): _266.QueryPoolRequest;
                toAmino(_: _266.QueryPoolRequest): _266.QueryPoolRequestAmino;
                fromAminoMsg(object: _266.QueryPoolRequestAminoMsg): _266.QueryPoolRequest;
                toAminoMsg(message: _266.QueryPoolRequest): _266.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _266.QueryPoolRequestProtoMsg): _266.QueryPoolRequest;
                toProto(message: _266.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _266.QueryPoolRequest): _266.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _266.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.QueryPoolResponse;
                fromJSON(object: any): _266.QueryPoolResponse;
                toJSON(message: _266.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_266.QueryPoolResponse>): _266.QueryPoolResponse;
                fromAmino(object: _266.QueryPoolResponseAmino): _266.QueryPoolResponse;
                toAmino(message: _266.QueryPoolResponse): _266.QueryPoolResponseAmino;
                fromAminoMsg(object: _266.QueryPoolResponseAminoMsg): _266.QueryPoolResponse;
                toAminoMsg(message: _266.QueryPoolResponse): _266.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _266.QueryPoolResponseProtoMsg): _266.QueryPoolResponse;
                toProto(message: _266.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _266.QueryPoolResponse): _266.QueryPoolResponseProtoMsg;
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
            GenesisState: {
                encode(message: _265.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.GenesisState;
                fromJSON(object: any): _265.GenesisState;
                toJSON(message: _265.GenesisState): unknown;
                fromPartial(object: Partial<_265.GenesisState>): _265.GenesisState;
                fromAmino(object: _265.GenesisStateAmino): _265.GenesisState;
                toAmino(message: _265.GenesisState): _265.GenesisStateAmino;
                fromAminoMsg(object: _265.GenesisStateAminoMsg): _265.GenesisState;
                toAminoMsg(message: _265.GenesisState): _265.GenesisStateAminoMsg;
                fromProtoMsg(message: _265.GenesisStateProtoMsg): _265.GenesisState;
                toProto(message: _265.GenesisState): Uint8Array;
                toProtoMsg(message: _265.GenesisState): _265.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _265.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.LastValidatorPower;
                fromJSON(object: any): _265.LastValidatorPower;
                toJSON(message: _265.LastValidatorPower): unknown;
                fromPartial(object: Partial<_265.LastValidatorPower>): _265.LastValidatorPower;
                fromAmino(object: _265.LastValidatorPowerAmino): _265.LastValidatorPower;
                toAmino(message: _265.LastValidatorPower): _265.LastValidatorPowerAmino;
                fromAminoMsg(object: _265.LastValidatorPowerAminoMsg): _265.LastValidatorPower;
                toAminoMsg(message: _265.LastValidatorPower): _265.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _265.LastValidatorPowerProtoMsg): _265.LastValidatorPower;
                toProto(message: _265.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _265.LastValidatorPower): _265.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _264.AuthorizationType;
            authorizationTypeToJSON(object: _264.AuthorizationType): string;
            AuthorizationType: typeof _264.AuthorizationType;
            AuthorizationTypeSDKType: typeof _264.AuthorizationType;
            AuthorizationTypeAmino: typeof _264.AuthorizationType;
            StakeAuthorization: {
                encode(message: _264.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.StakeAuthorization;
                fromJSON(object: any): _264.StakeAuthorization;
                toJSON(message: _264.StakeAuthorization): unknown;
                fromPartial(object: Partial<_264.StakeAuthorization>): _264.StakeAuthorization;
                fromAmino(object: _264.StakeAuthorizationAmino): _264.StakeAuthorization;
                toAmino(message: _264.StakeAuthorization): _264.StakeAuthorizationAmino;
                fromAminoMsg(object: _264.StakeAuthorizationAminoMsg): _264.StakeAuthorization;
                toAminoMsg(message: _264.StakeAuthorization): _264.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _264.StakeAuthorizationProtoMsg): _264.StakeAuthorization;
                toProto(message: _264.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _264.StakeAuthorization): _264.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _264.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.StakeAuthorization_Validators;
                fromJSON(object: any): _264.StakeAuthorization_Validators;
                toJSON(message: _264.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_264.StakeAuthorization_Validators>): _264.StakeAuthorization_Validators;
                fromAmino(object: _264.StakeAuthorization_ValidatorsAmino): _264.StakeAuthorization_Validators;
                toAmino(message: _264.StakeAuthorization_Validators): _264.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _264.StakeAuthorization_ValidatorsAminoMsg): _264.StakeAuthorization_Validators;
                toAminoMsg(message: _264.StakeAuthorization_Validators): _264.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _264.StakeAuthorization_ValidatorsProtoMsg): _264.StakeAuthorization_Validators;
                toProto(message: _264.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _264.StakeAuthorization_Validators): _264.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _269.SignMode;
                signModeToJSON(object: _269.SignMode): string;
                SignMode: typeof _269.SignMode;
                SignModeSDKType: typeof _269.SignMode;
                SignModeAmino: typeof _269.SignMode;
                SignatureDescriptors: {
                    encode(message: _269.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SignatureDescriptors;
                    fromJSON(object: any): _269.SignatureDescriptors;
                    toJSON(message: _269.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_269.SignatureDescriptors>): _269.SignatureDescriptors;
                    fromAmino(object: _269.SignatureDescriptorsAmino): _269.SignatureDescriptors;
                    toAmino(message: _269.SignatureDescriptors): _269.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _269.SignatureDescriptorsAminoMsg): _269.SignatureDescriptors;
                    toAminoMsg(message: _269.SignatureDescriptors): _269.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _269.SignatureDescriptorsProtoMsg): _269.SignatureDescriptors;
                    toProto(message: _269.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _269.SignatureDescriptors): _269.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _269.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SignatureDescriptor;
                    fromJSON(object: any): _269.SignatureDescriptor;
                    toJSON(message: _269.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_269.SignatureDescriptor>): _269.SignatureDescriptor;
                    fromAmino(object: _269.SignatureDescriptorAmino): _269.SignatureDescriptor;
                    toAmino(message: _269.SignatureDescriptor): _269.SignatureDescriptorAmino;
                    fromAminoMsg(object: _269.SignatureDescriptorAminoMsg): _269.SignatureDescriptor;
                    toAminoMsg(message: _269.SignatureDescriptor): _269.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _269.SignatureDescriptorProtoMsg): _269.SignatureDescriptor;
                    toProto(message: _269.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _269.SignatureDescriptor): _269.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _269.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SignatureDescriptor_Data;
                    fromJSON(object: any): _269.SignatureDescriptor_Data;
                    toJSON(message: _269.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_269.SignatureDescriptor_Data>): _269.SignatureDescriptor_Data;
                    fromAmino(object: _269.SignatureDescriptor_DataAmino): _269.SignatureDescriptor_Data;
                    toAmino(message: _269.SignatureDescriptor_Data): _269.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _269.SignatureDescriptor_DataAminoMsg): _269.SignatureDescriptor_Data;
                    toAminoMsg(message: _269.SignatureDescriptor_Data): _269.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _269.SignatureDescriptor_DataProtoMsg): _269.SignatureDescriptor_Data;
                    toProto(message: _269.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _269.SignatureDescriptor_Data): _269.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _269.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _269.SignatureDescriptor_Data_Single;
                    toJSON(message: _269.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_269.SignatureDescriptor_Data_Single>): _269.SignatureDescriptor_Data_Single;
                    fromAmino(object: _269.SignatureDescriptor_Data_SingleAmino): _269.SignatureDescriptor_Data_Single;
                    toAmino(message: _269.SignatureDescriptor_Data_Single): _269.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _269.SignatureDescriptor_Data_SingleAminoMsg): _269.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _269.SignatureDescriptor_Data_Single): _269.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _269.SignatureDescriptor_Data_SingleProtoMsg): _269.SignatureDescriptor_Data_Single;
                    toProto(message: _269.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _269.SignatureDescriptor_Data_Single): _269.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _269.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _269.SignatureDescriptor_Data_Multi;
                    toJSON(message: _269.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_269.SignatureDescriptor_Data_Multi>): _269.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _269.SignatureDescriptor_Data_MultiAmino): _269.SignatureDescriptor_Data_Multi;
                    toAmino(message: _269.SignatureDescriptor_Data_Multi): _269.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _269.SignatureDescriptor_Data_MultiAminoMsg): _269.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _269.SignatureDescriptor_Data_Multi): _269.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _269.SignatureDescriptor_Data_MultiProtoMsg): _269.SignatureDescriptor_Data_Multi;
                    toProto(message: _269.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _269.SignatureDescriptor_Data_Multi): _269.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _439.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _270.SimulateRequest): Promise<_270.SimulateResponse>;
                getTx(request: _270.GetTxRequest): Promise<_270.GetTxResponse>;
                broadcastTx(request: _270.BroadcastTxRequest): Promise<_270.BroadcastTxResponse>;
                getTxsEvent(request: _270.GetTxsEventRequest): Promise<_270.GetTxsEventResponse>;
                getBlockWithTxs(request: _270.GetBlockWithTxsRequest): Promise<_270.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _271.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Tx;
                fromJSON(object: any): _271.Tx;
                toJSON(message: _271.Tx): unknown;
                fromPartial(object: Partial<_271.Tx>): _271.Tx;
                fromAmino(object: _271.TxAmino): _271.Tx;
                toAmino(message: _271.Tx): _271.TxAmino;
                fromAminoMsg(object: _271.TxAminoMsg): _271.Tx;
                toAminoMsg(message: _271.Tx): _271.TxAminoMsg;
                fromProtoMsg(message: _271.TxProtoMsg): _271.Tx;
                toProto(message: _271.Tx): Uint8Array;
                toProtoMsg(message: _271.Tx): _271.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _271.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.TxRaw;
                fromJSON(object: any): _271.TxRaw;
                toJSON(message: _271.TxRaw): unknown;
                fromPartial(object: Partial<_271.TxRaw>): _271.TxRaw;
                fromAmino(object: _271.TxRawAmino): _271.TxRaw;
                toAmino(message: _271.TxRaw): _271.TxRawAmino;
                fromAminoMsg(object: _271.TxRawAminoMsg): _271.TxRaw;
                toAminoMsg(message: _271.TxRaw): _271.TxRawAminoMsg;
                fromProtoMsg(message: _271.TxRawProtoMsg): _271.TxRaw;
                toProto(message: _271.TxRaw): Uint8Array;
                toProtoMsg(message: _271.TxRaw): _271.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _271.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.SignDoc;
                fromJSON(object: any): _271.SignDoc;
                toJSON(message: _271.SignDoc): unknown;
                fromPartial(object: Partial<_271.SignDoc>): _271.SignDoc;
                fromAmino(object: _271.SignDocAmino): _271.SignDoc;
                toAmino(message: _271.SignDoc): _271.SignDocAmino;
                fromAminoMsg(object: _271.SignDocAminoMsg): _271.SignDoc;
                toAminoMsg(message: _271.SignDoc): _271.SignDocAminoMsg;
                fromProtoMsg(message: _271.SignDocProtoMsg): _271.SignDoc;
                toProto(message: _271.SignDoc): Uint8Array;
                toProtoMsg(message: _271.SignDoc): _271.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _271.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.SignDocDirectAux;
                fromJSON(object: any): _271.SignDocDirectAux;
                toJSON(message: _271.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_271.SignDocDirectAux>): _271.SignDocDirectAux;
                fromAmino(object: _271.SignDocDirectAuxAmino): _271.SignDocDirectAux;
                toAmino(message: _271.SignDocDirectAux): _271.SignDocDirectAuxAmino;
                fromAminoMsg(object: _271.SignDocDirectAuxAminoMsg): _271.SignDocDirectAux;
                toAminoMsg(message: _271.SignDocDirectAux): _271.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _271.SignDocDirectAuxProtoMsg): _271.SignDocDirectAux;
                toProto(message: _271.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _271.SignDocDirectAux): _271.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _271.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.TxBody;
                fromJSON(object: any): _271.TxBody;
                toJSON(message: _271.TxBody): unknown;
                fromPartial(object: Partial<_271.TxBody>): _271.TxBody;
                fromAmino(object: _271.TxBodyAmino): _271.TxBody;
                toAmino(message: _271.TxBody): _271.TxBodyAmino;
                fromAminoMsg(object: _271.TxBodyAminoMsg): _271.TxBody;
                toAminoMsg(message: _271.TxBody): _271.TxBodyAminoMsg;
                fromProtoMsg(message: _271.TxBodyProtoMsg): _271.TxBody;
                toProto(message: _271.TxBody): Uint8Array;
                toProtoMsg(message: _271.TxBody): _271.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _271.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.AuthInfo;
                fromJSON(object: any): _271.AuthInfo;
                toJSON(message: _271.AuthInfo): unknown;
                fromPartial(object: Partial<_271.AuthInfo>): _271.AuthInfo;
                fromAmino(object: _271.AuthInfoAmino): _271.AuthInfo;
                toAmino(message: _271.AuthInfo): _271.AuthInfoAmino;
                fromAminoMsg(object: _271.AuthInfoAminoMsg): _271.AuthInfo;
                toAminoMsg(message: _271.AuthInfo): _271.AuthInfoAminoMsg;
                fromProtoMsg(message: _271.AuthInfoProtoMsg): _271.AuthInfo;
                toProto(message: _271.AuthInfo): Uint8Array;
                toProtoMsg(message: _271.AuthInfo): _271.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _271.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.SignerInfo;
                fromJSON(object: any): _271.SignerInfo;
                toJSON(message: _271.SignerInfo): unknown;
                fromPartial(object: Partial<_271.SignerInfo>): _271.SignerInfo;
                fromAmino(object: _271.SignerInfoAmino): _271.SignerInfo;
                toAmino(message: _271.SignerInfo): _271.SignerInfoAmino;
                fromAminoMsg(object: _271.SignerInfoAminoMsg): _271.SignerInfo;
                toAminoMsg(message: _271.SignerInfo): _271.SignerInfoAminoMsg;
                fromProtoMsg(message: _271.SignerInfoProtoMsg): _271.SignerInfo;
                toProto(message: _271.SignerInfo): Uint8Array;
                toProtoMsg(message: _271.SignerInfo): _271.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _271.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ModeInfo;
                fromJSON(object: any): _271.ModeInfo;
                toJSON(message: _271.ModeInfo): unknown;
                fromPartial(object: Partial<_271.ModeInfo>): _271.ModeInfo;
                fromAmino(object: _271.ModeInfoAmino): _271.ModeInfo;
                toAmino(message: _271.ModeInfo): _271.ModeInfoAmino;
                fromAminoMsg(object: _271.ModeInfoAminoMsg): _271.ModeInfo;
                toAminoMsg(message: _271.ModeInfo): _271.ModeInfoAminoMsg;
                fromProtoMsg(message: _271.ModeInfoProtoMsg): _271.ModeInfo;
                toProto(message: _271.ModeInfo): Uint8Array;
                toProtoMsg(message: _271.ModeInfo): _271.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _271.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ModeInfo_Single;
                fromJSON(object: any): _271.ModeInfo_Single;
                toJSON(message: _271.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_271.ModeInfo_Single>): _271.ModeInfo_Single;
                fromAmino(object: _271.ModeInfo_SingleAmino): _271.ModeInfo_Single;
                toAmino(message: _271.ModeInfo_Single): _271.ModeInfo_SingleAmino;
                fromAminoMsg(object: _271.ModeInfo_SingleAminoMsg): _271.ModeInfo_Single;
                toAminoMsg(message: _271.ModeInfo_Single): _271.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _271.ModeInfo_SingleProtoMsg): _271.ModeInfo_Single;
                toProto(message: _271.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _271.ModeInfo_Single): _271.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _271.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ModeInfo_Multi;
                fromJSON(object: any): _271.ModeInfo_Multi;
                toJSON(message: _271.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_271.ModeInfo_Multi>): _271.ModeInfo_Multi;
                fromAmino(object: _271.ModeInfo_MultiAmino): _271.ModeInfo_Multi;
                toAmino(message: _271.ModeInfo_Multi): _271.ModeInfo_MultiAmino;
                fromAminoMsg(object: _271.ModeInfo_MultiAminoMsg): _271.ModeInfo_Multi;
                toAminoMsg(message: _271.ModeInfo_Multi): _271.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _271.ModeInfo_MultiProtoMsg): _271.ModeInfo_Multi;
                toProto(message: _271.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _271.ModeInfo_Multi): _271.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _271.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Fee;
                fromJSON(object: any): _271.Fee;
                toJSON(message: _271.Fee): unknown;
                fromPartial(object: Partial<_271.Fee>): _271.Fee;
                fromAmino(object: _271.FeeAmino): _271.Fee;
                toAmino(message: _271.Fee): _271.FeeAmino;
                fromAminoMsg(object: _271.FeeAminoMsg): _271.Fee;
                toAminoMsg(message: _271.Fee): _271.FeeAminoMsg;
                fromProtoMsg(message: _271.FeeProtoMsg): _271.Fee;
                toProto(message: _271.Fee): Uint8Array;
                toProtoMsg(message: _271.Fee): _271.FeeProtoMsg;
            };
            Tip: {
                encode(message: _271.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Tip;
                fromJSON(object: any): _271.Tip;
                toJSON(message: _271.Tip): unknown;
                fromPartial(object: Partial<_271.Tip>): _271.Tip;
                fromAmino(object: _271.TipAmino): _271.Tip;
                toAmino(message: _271.Tip): _271.TipAmino;
                fromAminoMsg(object: _271.TipAminoMsg): _271.Tip;
                toAminoMsg(message: _271.Tip): _271.TipAminoMsg;
                fromProtoMsg(message: _271.TipProtoMsg): _271.Tip;
                toProto(message: _271.Tip): Uint8Array;
                toProtoMsg(message: _271.Tip): _271.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _271.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.AuxSignerData;
                fromJSON(object: any): _271.AuxSignerData;
                toJSON(message: _271.AuxSignerData): unknown;
                fromPartial(object: Partial<_271.AuxSignerData>): _271.AuxSignerData;
                fromAmino(object: _271.AuxSignerDataAmino): _271.AuxSignerData;
                toAmino(message: _271.AuxSignerData): _271.AuxSignerDataAmino;
                fromAminoMsg(object: _271.AuxSignerDataAminoMsg): _271.AuxSignerData;
                toAminoMsg(message: _271.AuxSignerData): _271.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _271.AuxSignerDataProtoMsg): _271.AuxSignerData;
                toProto(message: _271.AuxSignerData): Uint8Array;
                toProtoMsg(message: _271.AuxSignerData): _271.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _270.OrderBy;
            orderByToJSON(object: _270.OrderBy): string;
            broadcastModeFromJSON(object: any): _270.BroadcastMode;
            broadcastModeToJSON(object: _270.BroadcastMode): string;
            OrderBy: typeof _270.OrderBy;
            OrderBySDKType: typeof _270.OrderBy;
            OrderByAmino: typeof _270.OrderBy;
            BroadcastMode: typeof _270.BroadcastMode;
            BroadcastModeSDKType: typeof _270.BroadcastMode;
            BroadcastModeAmino: typeof _270.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _270.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetTxsEventRequest;
                fromJSON(object: any): _270.GetTxsEventRequest;
                toJSON(message: _270.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_270.GetTxsEventRequest>): _270.GetTxsEventRequest;
                fromAmino(object: _270.GetTxsEventRequestAmino): _270.GetTxsEventRequest;
                toAmino(message: _270.GetTxsEventRequest): _270.GetTxsEventRequestAmino;
                fromAminoMsg(object: _270.GetTxsEventRequestAminoMsg): _270.GetTxsEventRequest;
                toAminoMsg(message: _270.GetTxsEventRequest): _270.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _270.GetTxsEventRequestProtoMsg): _270.GetTxsEventRequest;
                toProto(message: _270.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _270.GetTxsEventRequest): _270.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _270.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetTxsEventResponse;
                fromJSON(object: any): _270.GetTxsEventResponse;
                toJSON(message: _270.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_270.GetTxsEventResponse>): _270.GetTxsEventResponse;
                fromAmino(object: _270.GetTxsEventResponseAmino): _270.GetTxsEventResponse;
                toAmino(message: _270.GetTxsEventResponse): _270.GetTxsEventResponseAmino;
                fromAminoMsg(object: _270.GetTxsEventResponseAminoMsg): _270.GetTxsEventResponse;
                toAminoMsg(message: _270.GetTxsEventResponse): _270.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _270.GetTxsEventResponseProtoMsg): _270.GetTxsEventResponse;
                toProto(message: _270.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _270.GetTxsEventResponse): _270.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _270.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.BroadcastTxRequest;
                fromJSON(object: any): _270.BroadcastTxRequest;
                toJSON(message: _270.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_270.BroadcastTxRequest>): _270.BroadcastTxRequest;
                fromAmino(object: _270.BroadcastTxRequestAmino): _270.BroadcastTxRequest;
                toAmino(message: _270.BroadcastTxRequest): _270.BroadcastTxRequestAmino;
                fromAminoMsg(object: _270.BroadcastTxRequestAminoMsg): _270.BroadcastTxRequest;
                toAminoMsg(message: _270.BroadcastTxRequest): _270.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _270.BroadcastTxRequestProtoMsg): _270.BroadcastTxRequest;
                toProto(message: _270.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _270.BroadcastTxRequest): _270.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _270.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.BroadcastTxResponse;
                fromJSON(object: any): _270.BroadcastTxResponse;
                toJSON(message: _270.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_270.BroadcastTxResponse>): _270.BroadcastTxResponse;
                fromAmino(object: _270.BroadcastTxResponseAmino): _270.BroadcastTxResponse;
                toAmino(message: _270.BroadcastTxResponse): _270.BroadcastTxResponseAmino;
                fromAminoMsg(object: _270.BroadcastTxResponseAminoMsg): _270.BroadcastTxResponse;
                toAminoMsg(message: _270.BroadcastTxResponse): _270.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _270.BroadcastTxResponseProtoMsg): _270.BroadcastTxResponse;
                toProto(message: _270.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _270.BroadcastTxResponse): _270.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _270.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.SimulateRequest;
                fromJSON(object: any): _270.SimulateRequest;
                toJSON(message: _270.SimulateRequest): unknown;
                fromPartial(object: Partial<_270.SimulateRequest>): _270.SimulateRequest;
                fromAmino(object: _270.SimulateRequestAmino): _270.SimulateRequest;
                toAmino(message: _270.SimulateRequest): _270.SimulateRequestAmino;
                fromAminoMsg(object: _270.SimulateRequestAminoMsg): _270.SimulateRequest;
                toAminoMsg(message: _270.SimulateRequest): _270.SimulateRequestAminoMsg;
                fromProtoMsg(message: _270.SimulateRequestProtoMsg): _270.SimulateRequest;
                toProto(message: _270.SimulateRequest): Uint8Array;
                toProtoMsg(message: _270.SimulateRequest): _270.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _270.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.SimulateResponse;
                fromJSON(object: any): _270.SimulateResponse;
                toJSON(message: _270.SimulateResponse): unknown;
                fromPartial(object: Partial<_270.SimulateResponse>): _270.SimulateResponse;
                fromAmino(object: _270.SimulateResponseAmino): _270.SimulateResponse;
                toAmino(message: _270.SimulateResponse): _270.SimulateResponseAmino;
                fromAminoMsg(object: _270.SimulateResponseAminoMsg): _270.SimulateResponse;
                toAminoMsg(message: _270.SimulateResponse): _270.SimulateResponseAminoMsg;
                fromProtoMsg(message: _270.SimulateResponseProtoMsg): _270.SimulateResponse;
                toProto(message: _270.SimulateResponse): Uint8Array;
                toProtoMsg(message: _270.SimulateResponse): _270.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _270.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetTxRequest;
                fromJSON(object: any): _270.GetTxRequest;
                toJSON(message: _270.GetTxRequest): unknown;
                fromPartial(object: Partial<_270.GetTxRequest>): _270.GetTxRequest;
                fromAmino(object: _270.GetTxRequestAmino): _270.GetTxRequest;
                toAmino(message: _270.GetTxRequest): _270.GetTxRequestAmino;
                fromAminoMsg(object: _270.GetTxRequestAminoMsg): _270.GetTxRequest;
                toAminoMsg(message: _270.GetTxRequest): _270.GetTxRequestAminoMsg;
                fromProtoMsg(message: _270.GetTxRequestProtoMsg): _270.GetTxRequest;
                toProto(message: _270.GetTxRequest): Uint8Array;
                toProtoMsg(message: _270.GetTxRequest): _270.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _270.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetTxResponse;
                fromJSON(object: any): _270.GetTxResponse;
                toJSON(message: _270.GetTxResponse): unknown;
                fromPartial(object: Partial<_270.GetTxResponse>): _270.GetTxResponse;
                fromAmino(object: _270.GetTxResponseAmino): _270.GetTxResponse;
                toAmino(message: _270.GetTxResponse): _270.GetTxResponseAmino;
                fromAminoMsg(object: _270.GetTxResponseAminoMsg): _270.GetTxResponse;
                toAminoMsg(message: _270.GetTxResponse): _270.GetTxResponseAminoMsg;
                fromProtoMsg(message: _270.GetTxResponseProtoMsg): _270.GetTxResponse;
                toProto(message: _270.GetTxResponse): Uint8Array;
                toProtoMsg(message: _270.GetTxResponse): _270.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _270.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetBlockWithTxsRequest;
                fromJSON(object: any): _270.GetBlockWithTxsRequest;
                toJSON(message: _270.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_270.GetBlockWithTxsRequest>): _270.GetBlockWithTxsRequest;
                fromAmino(object: _270.GetBlockWithTxsRequestAmino): _270.GetBlockWithTxsRequest;
                toAmino(message: _270.GetBlockWithTxsRequest): _270.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _270.GetBlockWithTxsRequestAminoMsg): _270.GetBlockWithTxsRequest;
                toAminoMsg(message: _270.GetBlockWithTxsRequest): _270.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _270.GetBlockWithTxsRequestProtoMsg): _270.GetBlockWithTxsRequest;
                toProto(message: _270.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _270.GetBlockWithTxsRequest): _270.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _270.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.GetBlockWithTxsResponse;
                fromJSON(object: any): _270.GetBlockWithTxsResponse;
                toJSON(message: _270.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_270.GetBlockWithTxsResponse>): _270.GetBlockWithTxsResponse;
                fromAmino(object: _270.GetBlockWithTxsResponseAmino): _270.GetBlockWithTxsResponse;
                toAmino(message: _270.GetBlockWithTxsResponse): _270.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _270.GetBlockWithTxsResponseAminoMsg): _270.GetBlockWithTxsResponse;
                toAminoMsg(message: _270.GetBlockWithTxsResponse): _270.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _270.GetBlockWithTxsResponseProtoMsg): _270.GetBlockWithTxsResponse;
                toProto(message: _270.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _270.GetBlockWithTxsResponse): _270.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _453.MsgClientImpl;
            QueryClientImpl: typeof _440.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _272.QueryCurrentPlanRequest): Promise<_272.QueryCurrentPlanResponse>;
                appliedPlan(request: _272.QueryAppliedPlanRequest): Promise<_272.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _272.QueryUpgradedConsensusStateRequest): Promise<_272.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _272.QueryModuleVersionsRequest): Promise<_272.QueryModuleVersionsResponse>;
                authority(request?: _272.QueryAuthorityRequest): Promise<_272.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _273.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _273.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _273.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _273.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _273.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _273.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _273.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _273.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _273.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _273.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _273.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _273.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _273.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _273.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _273.MsgSoftwareUpgrade) => _273.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _273.MsgSoftwareUpgradeAmino) => _273.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _273.MsgCancelUpgrade) => _273.MsgCancelUpgradeAmino;
                    fromAmino: (object: _273.MsgCancelUpgradeAmino) => _273.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _274.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.Plan;
                fromJSON(object: any): _274.Plan;
                toJSON(message: _274.Plan): unknown;
                fromPartial(object: Partial<_274.Plan>): _274.Plan;
                fromAmino(object: _274.PlanAmino): _274.Plan;
                toAmino(message: _274.Plan): _274.PlanAmino;
                fromAminoMsg(object: _274.PlanAminoMsg): _274.Plan;
                toAminoMsg(message: _274.Plan): _274.PlanAminoMsg;
                fromProtoMsg(message: _274.PlanProtoMsg): _274.Plan;
                toProto(message: _274.Plan): Uint8Array;
                toProtoMsg(message: _274.Plan): _274.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _274.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.SoftwareUpgradeProposal;
                fromJSON(object: any): _274.SoftwareUpgradeProposal;
                toJSON(message: _274.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_274.SoftwareUpgradeProposal>): _274.SoftwareUpgradeProposal;
                fromAmino(object: _274.SoftwareUpgradeProposalAmino): _274.SoftwareUpgradeProposal;
                toAmino(message: _274.SoftwareUpgradeProposal): _274.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _274.SoftwareUpgradeProposalAminoMsg): _274.SoftwareUpgradeProposal;
                toAminoMsg(message: _274.SoftwareUpgradeProposal): _274.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _274.SoftwareUpgradeProposalProtoMsg): _274.SoftwareUpgradeProposal;
                toProto(message: _274.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _274.SoftwareUpgradeProposal): _274.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _274.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _274.CancelSoftwareUpgradeProposal;
                toJSON(message: _274.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_274.CancelSoftwareUpgradeProposal>): _274.CancelSoftwareUpgradeProposal;
                fromAmino(object: _274.CancelSoftwareUpgradeProposalAmino): _274.CancelSoftwareUpgradeProposal;
                toAmino(message: _274.CancelSoftwareUpgradeProposal): _274.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _274.CancelSoftwareUpgradeProposalAminoMsg): _274.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _274.CancelSoftwareUpgradeProposal): _274.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _274.CancelSoftwareUpgradeProposalProtoMsg): _274.CancelSoftwareUpgradeProposal;
                toProto(message: _274.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _274.CancelSoftwareUpgradeProposal): _274.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _274.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.ModuleVersion;
                fromJSON(object: any): _274.ModuleVersion;
                toJSON(message: _274.ModuleVersion): unknown;
                fromPartial(object: Partial<_274.ModuleVersion>): _274.ModuleVersion;
                fromAmino(object: _274.ModuleVersionAmino): _274.ModuleVersion;
                toAmino(message: _274.ModuleVersion): _274.ModuleVersionAmino;
                fromAminoMsg(object: _274.ModuleVersionAminoMsg): _274.ModuleVersion;
                toAminoMsg(message: _274.ModuleVersion): _274.ModuleVersionAminoMsg;
                fromProtoMsg(message: _274.ModuleVersionProtoMsg): _274.ModuleVersion;
                toProto(message: _274.ModuleVersion): Uint8Array;
                toProtoMsg(message: _274.ModuleVersion): _274.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _273.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.MsgSoftwareUpgrade;
                fromJSON(object: any): _273.MsgSoftwareUpgrade;
                toJSON(message: _273.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_273.MsgSoftwareUpgrade>): _273.MsgSoftwareUpgrade;
                fromAmino(object: _273.MsgSoftwareUpgradeAmino): _273.MsgSoftwareUpgrade;
                toAmino(message: _273.MsgSoftwareUpgrade): _273.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _273.MsgSoftwareUpgradeAminoMsg): _273.MsgSoftwareUpgrade;
                toAminoMsg(message: _273.MsgSoftwareUpgrade): _273.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _273.MsgSoftwareUpgradeProtoMsg): _273.MsgSoftwareUpgrade;
                toProto(message: _273.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _273.MsgSoftwareUpgrade): _273.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _273.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _273.MsgSoftwareUpgradeResponse;
                toJSON(_: _273.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_273.MsgSoftwareUpgradeResponse>): _273.MsgSoftwareUpgradeResponse;
                fromAmino(_: _273.MsgSoftwareUpgradeResponseAmino): _273.MsgSoftwareUpgradeResponse;
                toAmino(_: _273.MsgSoftwareUpgradeResponse): _273.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _273.MsgSoftwareUpgradeResponseAminoMsg): _273.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _273.MsgSoftwareUpgradeResponse): _273.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _273.MsgSoftwareUpgradeResponseProtoMsg): _273.MsgSoftwareUpgradeResponse;
                toProto(message: _273.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _273.MsgSoftwareUpgradeResponse): _273.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _273.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.MsgCancelUpgrade;
                fromJSON(object: any): _273.MsgCancelUpgrade;
                toJSON(message: _273.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_273.MsgCancelUpgrade>): _273.MsgCancelUpgrade;
                fromAmino(object: _273.MsgCancelUpgradeAmino): _273.MsgCancelUpgrade;
                toAmino(message: _273.MsgCancelUpgrade): _273.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _273.MsgCancelUpgradeAminoMsg): _273.MsgCancelUpgrade;
                toAminoMsg(message: _273.MsgCancelUpgrade): _273.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _273.MsgCancelUpgradeProtoMsg): _273.MsgCancelUpgrade;
                toProto(message: _273.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _273.MsgCancelUpgrade): _273.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _273.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.MsgCancelUpgradeResponse;
                fromJSON(_: any): _273.MsgCancelUpgradeResponse;
                toJSON(_: _273.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_273.MsgCancelUpgradeResponse>): _273.MsgCancelUpgradeResponse;
                fromAmino(_: _273.MsgCancelUpgradeResponseAmino): _273.MsgCancelUpgradeResponse;
                toAmino(_: _273.MsgCancelUpgradeResponse): _273.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _273.MsgCancelUpgradeResponseAminoMsg): _273.MsgCancelUpgradeResponse;
                toAminoMsg(message: _273.MsgCancelUpgradeResponse): _273.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _273.MsgCancelUpgradeResponseProtoMsg): _273.MsgCancelUpgradeResponse;
                toProto(message: _273.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _273.MsgCancelUpgradeResponse): _273.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _272.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryCurrentPlanRequest;
                fromJSON(_: any): _272.QueryCurrentPlanRequest;
                toJSON(_: _272.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_272.QueryCurrentPlanRequest>): _272.QueryCurrentPlanRequest;
                fromAmino(_: _272.QueryCurrentPlanRequestAmino): _272.QueryCurrentPlanRequest;
                toAmino(_: _272.QueryCurrentPlanRequest): _272.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _272.QueryCurrentPlanRequestAminoMsg): _272.QueryCurrentPlanRequest;
                toAminoMsg(message: _272.QueryCurrentPlanRequest): _272.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _272.QueryCurrentPlanRequestProtoMsg): _272.QueryCurrentPlanRequest;
                toProto(message: _272.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _272.QueryCurrentPlanRequest): _272.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _272.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryCurrentPlanResponse;
                fromJSON(object: any): _272.QueryCurrentPlanResponse;
                toJSON(message: _272.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_272.QueryCurrentPlanResponse>): _272.QueryCurrentPlanResponse;
                fromAmino(object: _272.QueryCurrentPlanResponseAmino): _272.QueryCurrentPlanResponse;
                toAmino(message: _272.QueryCurrentPlanResponse): _272.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _272.QueryCurrentPlanResponseAminoMsg): _272.QueryCurrentPlanResponse;
                toAminoMsg(message: _272.QueryCurrentPlanResponse): _272.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _272.QueryCurrentPlanResponseProtoMsg): _272.QueryCurrentPlanResponse;
                toProto(message: _272.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _272.QueryCurrentPlanResponse): _272.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _272.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryAppliedPlanRequest;
                fromJSON(object: any): _272.QueryAppliedPlanRequest;
                toJSON(message: _272.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_272.QueryAppliedPlanRequest>): _272.QueryAppliedPlanRequest;
                fromAmino(object: _272.QueryAppliedPlanRequestAmino): _272.QueryAppliedPlanRequest;
                toAmino(message: _272.QueryAppliedPlanRequest): _272.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _272.QueryAppliedPlanRequestAminoMsg): _272.QueryAppliedPlanRequest;
                toAminoMsg(message: _272.QueryAppliedPlanRequest): _272.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _272.QueryAppliedPlanRequestProtoMsg): _272.QueryAppliedPlanRequest;
                toProto(message: _272.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _272.QueryAppliedPlanRequest): _272.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _272.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryAppliedPlanResponse;
                fromJSON(object: any): _272.QueryAppliedPlanResponse;
                toJSON(message: _272.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_272.QueryAppliedPlanResponse>): _272.QueryAppliedPlanResponse;
                fromAmino(object: _272.QueryAppliedPlanResponseAmino): _272.QueryAppliedPlanResponse;
                toAmino(message: _272.QueryAppliedPlanResponse): _272.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _272.QueryAppliedPlanResponseAminoMsg): _272.QueryAppliedPlanResponse;
                toAminoMsg(message: _272.QueryAppliedPlanResponse): _272.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _272.QueryAppliedPlanResponseProtoMsg): _272.QueryAppliedPlanResponse;
                toProto(message: _272.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _272.QueryAppliedPlanResponse): _272.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _272.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _272.QueryUpgradedConsensusStateRequest;
                toJSON(message: _272.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_272.QueryUpgradedConsensusStateRequest>): _272.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _272.QueryUpgradedConsensusStateRequestAmino): _272.QueryUpgradedConsensusStateRequest;
                toAmino(message: _272.QueryUpgradedConsensusStateRequest): _272.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _272.QueryUpgradedConsensusStateRequestAminoMsg): _272.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _272.QueryUpgradedConsensusStateRequest): _272.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _272.QueryUpgradedConsensusStateRequestProtoMsg): _272.QueryUpgradedConsensusStateRequest;
                toProto(message: _272.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _272.QueryUpgradedConsensusStateRequest): _272.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _272.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _272.QueryUpgradedConsensusStateResponse;
                toJSON(message: _272.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_272.QueryUpgradedConsensusStateResponse>): _272.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _272.QueryUpgradedConsensusStateResponseAmino): _272.QueryUpgradedConsensusStateResponse;
                toAmino(message: _272.QueryUpgradedConsensusStateResponse): _272.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _272.QueryUpgradedConsensusStateResponseAminoMsg): _272.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _272.QueryUpgradedConsensusStateResponse): _272.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _272.QueryUpgradedConsensusStateResponseProtoMsg): _272.QueryUpgradedConsensusStateResponse;
                toProto(message: _272.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _272.QueryUpgradedConsensusStateResponse): _272.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _272.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryModuleVersionsRequest;
                fromJSON(object: any): _272.QueryModuleVersionsRequest;
                toJSON(message: _272.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_272.QueryModuleVersionsRequest>): _272.QueryModuleVersionsRequest;
                fromAmino(object: _272.QueryModuleVersionsRequestAmino): _272.QueryModuleVersionsRequest;
                toAmino(message: _272.QueryModuleVersionsRequest): _272.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _272.QueryModuleVersionsRequestAminoMsg): _272.QueryModuleVersionsRequest;
                toAminoMsg(message: _272.QueryModuleVersionsRequest): _272.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _272.QueryModuleVersionsRequestProtoMsg): _272.QueryModuleVersionsRequest;
                toProto(message: _272.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _272.QueryModuleVersionsRequest): _272.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _272.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryModuleVersionsResponse;
                fromJSON(object: any): _272.QueryModuleVersionsResponse;
                toJSON(message: _272.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_272.QueryModuleVersionsResponse>): _272.QueryModuleVersionsResponse;
                fromAmino(object: _272.QueryModuleVersionsResponseAmino): _272.QueryModuleVersionsResponse;
                toAmino(message: _272.QueryModuleVersionsResponse): _272.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _272.QueryModuleVersionsResponseAminoMsg): _272.QueryModuleVersionsResponse;
                toAminoMsg(message: _272.QueryModuleVersionsResponse): _272.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _272.QueryModuleVersionsResponseProtoMsg): _272.QueryModuleVersionsResponse;
                toProto(message: _272.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _272.QueryModuleVersionsResponse): _272.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _272.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryAuthorityRequest;
                fromJSON(_: any): _272.QueryAuthorityRequest;
                toJSON(_: _272.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_272.QueryAuthorityRequest>): _272.QueryAuthorityRequest;
                fromAmino(_: _272.QueryAuthorityRequestAmino): _272.QueryAuthorityRequest;
                toAmino(_: _272.QueryAuthorityRequest): _272.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _272.QueryAuthorityRequestAminoMsg): _272.QueryAuthorityRequest;
                toAminoMsg(message: _272.QueryAuthorityRequest): _272.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _272.QueryAuthorityRequestProtoMsg): _272.QueryAuthorityRequest;
                toProto(message: _272.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _272.QueryAuthorityRequest): _272.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _272.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.QueryAuthorityResponse;
                fromJSON(object: any): _272.QueryAuthorityResponse;
                toJSON(message: _272.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_272.QueryAuthorityResponse>): _272.QueryAuthorityResponse;
                fromAmino(object: _272.QueryAuthorityResponseAmino): _272.QueryAuthorityResponse;
                toAmino(message: _272.QueryAuthorityResponse): _272.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _272.QueryAuthorityResponseAminoMsg): _272.QueryAuthorityResponse;
                toAminoMsg(message: _272.QueryAuthorityResponse): _272.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _272.QueryAuthorityResponseProtoMsg): _272.QueryAuthorityResponse;
                toProto(message: _272.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _272.QueryAuthorityResponse): _272.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _454.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _275.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _275.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _275.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _275.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _275.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _275.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _275.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _275.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _275.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _275.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _275.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _275.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _275.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _275.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _275.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _275.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _275.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _275.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _275.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _275.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _275.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _275.MsgCreateVestingAccount) => _275.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _275.MsgCreateVestingAccountAmino) => _275.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _275.MsgCreatePermanentLockedAccount) => _275.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _275.MsgCreatePermanentLockedAccountAmino) => _275.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _275.MsgCreatePeriodicVestingAccount) => _275.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _275.MsgCreatePeriodicVestingAccountAmino) => _275.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _276.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.BaseVestingAccount;
                fromJSON(object: any): _276.BaseVestingAccount;
                toJSON(message: _276.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_276.BaseVestingAccount>): _276.BaseVestingAccount;
                fromAmino(object: _276.BaseVestingAccountAmino): _276.BaseVestingAccount;
                toAmino(message: _276.BaseVestingAccount): _276.BaseVestingAccountAmino;
                fromAminoMsg(object: _276.BaseVestingAccountAminoMsg): _276.BaseVestingAccount;
                toAminoMsg(message: _276.BaseVestingAccount): _276.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _276.BaseVestingAccountProtoMsg): _276.BaseVestingAccount;
                toProto(message: _276.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _276.BaseVestingAccount): _276.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _276.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ContinuousVestingAccount;
                fromJSON(object: any): _276.ContinuousVestingAccount;
                toJSON(message: _276.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_276.ContinuousVestingAccount>): _276.ContinuousVestingAccount;
                fromAmino(object: _276.ContinuousVestingAccountAmino): _276.ContinuousVestingAccount;
                toAmino(message: _276.ContinuousVestingAccount): _276.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _276.ContinuousVestingAccountAminoMsg): _276.ContinuousVestingAccount;
                toAminoMsg(message: _276.ContinuousVestingAccount): _276.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _276.ContinuousVestingAccountProtoMsg): _276.ContinuousVestingAccount;
                toProto(message: _276.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _276.ContinuousVestingAccount): _276.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _276.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DelayedVestingAccount;
                fromJSON(object: any): _276.DelayedVestingAccount;
                toJSON(message: _276.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_276.DelayedVestingAccount>): _276.DelayedVestingAccount;
                fromAmino(object: _276.DelayedVestingAccountAmino): _276.DelayedVestingAccount;
                toAmino(message: _276.DelayedVestingAccount): _276.DelayedVestingAccountAmino;
                fromAminoMsg(object: _276.DelayedVestingAccountAminoMsg): _276.DelayedVestingAccount;
                toAminoMsg(message: _276.DelayedVestingAccount): _276.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _276.DelayedVestingAccountProtoMsg): _276.DelayedVestingAccount;
                toProto(message: _276.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _276.DelayedVestingAccount): _276.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _276.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Period;
                fromJSON(object: any): _276.Period;
                toJSON(message: _276.Period): unknown;
                fromPartial(object: Partial<_276.Period>): _276.Period;
                fromAmino(object: _276.PeriodAmino): _276.Period;
                toAmino(message: _276.Period): _276.PeriodAmino;
                fromAminoMsg(object: _276.PeriodAminoMsg): _276.Period;
                toAminoMsg(message: _276.Period): _276.PeriodAminoMsg;
                fromProtoMsg(message: _276.PeriodProtoMsg): _276.Period;
                toProto(message: _276.Period): Uint8Array;
                toProtoMsg(message: _276.Period): _276.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _276.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.PeriodicVestingAccount;
                fromJSON(object: any): _276.PeriodicVestingAccount;
                toJSON(message: _276.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_276.PeriodicVestingAccount>): _276.PeriodicVestingAccount;
                fromAmino(object: _276.PeriodicVestingAccountAmino): _276.PeriodicVestingAccount;
                toAmino(message: _276.PeriodicVestingAccount): _276.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _276.PeriodicVestingAccountAminoMsg): _276.PeriodicVestingAccount;
                toAminoMsg(message: _276.PeriodicVestingAccount): _276.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _276.PeriodicVestingAccountProtoMsg): _276.PeriodicVestingAccount;
                toProto(message: _276.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _276.PeriodicVestingAccount): _276.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _276.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.PermanentLockedAccount;
                fromJSON(object: any): _276.PermanentLockedAccount;
                toJSON(message: _276.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_276.PermanentLockedAccount>): _276.PermanentLockedAccount;
                fromAmino(object: _276.PermanentLockedAccountAmino): _276.PermanentLockedAccount;
                toAmino(message: _276.PermanentLockedAccount): _276.PermanentLockedAccountAmino;
                fromAminoMsg(object: _276.PermanentLockedAccountAminoMsg): _276.PermanentLockedAccount;
                toAminoMsg(message: _276.PermanentLockedAccount): _276.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _276.PermanentLockedAccountProtoMsg): _276.PermanentLockedAccount;
                toProto(message: _276.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _276.PermanentLockedAccount): _276.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _275.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreateVestingAccount;
                fromJSON(object: any): _275.MsgCreateVestingAccount;
                toJSON(message: _275.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_275.MsgCreateVestingAccount>): _275.MsgCreateVestingAccount;
                fromAmino(object: _275.MsgCreateVestingAccountAmino): _275.MsgCreateVestingAccount;
                toAmino(message: _275.MsgCreateVestingAccount): _275.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _275.MsgCreateVestingAccountAminoMsg): _275.MsgCreateVestingAccount;
                toAminoMsg(message: _275.MsgCreateVestingAccount): _275.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _275.MsgCreateVestingAccountProtoMsg): _275.MsgCreateVestingAccount;
                toProto(message: _275.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _275.MsgCreateVestingAccount): _275.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _275.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _275.MsgCreateVestingAccountResponse;
                toJSON(_: _275.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_275.MsgCreateVestingAccountResponse>): _275.MsgCreateVestingAccountResponse;
                fromAmino(_: _275.MsgCreateVestingAccountResponseAmino): _275.MsgCreateVestingAccountResponse;
                toAmino(_: _275.MsgCreateVestingAccountResponse): _275.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _275.MsgCreateVestingAccountResponseAminoMsg): _275.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _275.MsgCreateVestingAccountResponse): _275.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _275.MsgCreateVestingAccountResponseProtoMsg): _275.MsgCreateVestingAccountResponse;
                toProto(message: _275.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _275.MsgCreateVestingAccountResponse): _275.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _275.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _275.MsgCreatePermanentLockedAccount;
                toJSON(message: _275.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_275.MsgCreatePermanentLockedAccount>): _275.MsgCreatePermanentLockedAccount;
                fromAmino(object: _275.MsgCreatePermanentLockedAccountAmino): _275.MsgCreatePermanentLockedAccount;
                toAmino(message: _275.MsgCreatePermanentLockedAccount): _275.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _275.MsgCreatePermanentLockedAccountAminoMsg): _275.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _275.MsgCreatePermanentLockedAccount): _275.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _275.MsgCreatePermanentLockedAccountProtoMsg): _275.MsgCreatePermanentLockedAccount;
                toProto(message: _275.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _275.MsgCreatePermanentLockedAccount): _275.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _275.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _275.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _275.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_275.MsgCreatePermanentLockedAccountResponse>): _275.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _275.MsgCreatePermanentLockedAccountResponseAmino): _275.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _275.MsgCreatePermanentLockedAccountResponse): _275.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _275.MsgCreatePermanentLockedAccountResponseAminoMsg): _275.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _275.MsgCreatePermanentLockedAccountResponse): _275.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _275.MsgCreatePermanentLockedAccountResponseProtoMsg): _275.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _275.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _275.MsgCreatePermanentLockedAccountResponse): _275.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _275.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _275.MsgCreatePeriodicVestingAccount;
                toJSON(message: _275.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_275.MsgCreatePeriodicVestingAccount>): _275.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _275.MsgCreatePeriodicVestingAccountAmino): _275.MsgCreatePeriodicVestingAccount;
                toAmino(message: _275.MsgCreatePeriodicVestingAccount): _275.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _275.MsgCreatePeriodicVestingAccountAminoMsg): _275.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _275.MsgCreatePeriodicVestingAccount): _275.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _275.MsgCreatePeriodicVestingAccountProtoMsg): _275.MsgCreatePeriodicVestingAccount;
                toProto(message: _275.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _275.MsgCreatePeriodicVestingAccount): _275.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _275.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _275.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _275.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_275.MsgCreatePeriodicVestingAccountResponse>): _275.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _275.MsgCreatePeriodicVestingAccountResponseAmino): _275.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _275.MsgCreatePeriodicVestingAccountResponse): _275.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _275.MsgCreatePeriodicVestingAccountResponseAminoMsg): _275.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _275.MsgCreatePeriodicVestingAccountResponse): _275.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _275.MsgCreatePeriodicVestingAccountResponseProtoMsg): _275.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _275.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _275.MsgCreatePeriodicVestingAccountResponse): _275.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _441.MsgClientImpl;
                };
                bank: {
                    v1beta1: _442.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _443.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _444.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _445.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _446.MsgClientImpl;
                };
                gov: {
                    v1: _447.MsgClientImpl;
                    v1beta1: _448.MsgClientImpl;
                };
                group: {
                    v1: _449.MsgClientImpl;
                };
                nft: {
                    v1beta1: _450.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _451.MsgClientImpl;
                };
                staking: {
                    v1beta1: _452.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _453.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _454.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _187.QueryConfigRequest): Promise<_187.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _190.QueryAccountsRequest): Promise<_190.QueryAccountsResponse>;
                        account(request: _190.QueryAccountRequest): Promise<_190.QueryAccountResponse>;
                        params(request?: _190.QueryParamsRequest): Promise<_190.QueryParamsResponse>;
                        moduleAccounts(request?: _190.QueryModuleAccountsRequest): Promise<_190.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _190.Bech32PrefixRequest): Promise<_190.Bech32PrefixResponse>;
                        addressBytesToString(request: _190.AddressBytesToStringRequest): Promise<_190.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _190.AddressStringToBytesRequest): Promise<_190.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _194.QueryGrantsRequest): Promise<_194.QueryGrantsResponse>;
                        granterGrants(request: _194.QueryGranterGrantsRequest): Promise<_194.QueryGranterGrantsResponse>;
                        granteeGrants(request: _194.QueryGranteeGrantsRequest): Promise<_194.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _199.QueryBalanceRequest): Promise<_199.QueryBalanceResponse>;
                        allBalances(request: _199.QueryAllBalancesRequest): Promise<_199.QueryAllBalancesResponse>;
                        spendableBalances(request: _199.QuerySpendableBalancesRequest): Promise<_199.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _199.QueryTotalSupplyRequest): Promise<_199.QueryTotalSupplyResponse>;
                        supplyOf(request: _199.QuerySupplyOfRequest): Promise<_199.QuerySupplyOfResponse>;
                        params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                        denomMetadata(request: _199.QueryDenomMetadataRequest): Promise<_199.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _199.QueryDenomsMetadataRequest): Promise<_199.QueryDenomsMetadataResponse>;
                        denomOwners(request: _199.QueryDenomOwnersRequest): Promise<_199.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _209.GetNodeInfoRequest): Promise<_209.GetNodeInfoResponse>;
                            getSyncing(request?: _209.GetSyncingRequest): Promise<_209.GetSyncingResponse>;
                            getLatestBlock(request?: _209.GetLatestBlockRequest): Promise<_209.GetLatestBlockResponse>;
                            getBlockByHeight(request: _209.GetBlockByHeightRequest): Promise<_209.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _209.GetLatestValidatorSetRequest): Promise<_209.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _209.GetValidatorSetByHeightRequest): Promise<_209.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _223.QueryParamsRequest): Promise<_223.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _223.QueryValidatorOutstandingRewardsRequest): Promise<_223.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _223.QueryValidatorCommissionRequest): Promise<_223.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _223.QueryValidatorSlashesRequest): Promise<_223.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _223.QueryDelegationRewardsRequest): Promise<_223.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _223.QueryDelegationTotalRewardsRequest): Promise<_223.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _223.QueryDelegatorValidatorsRequest): Promise<_223.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _223.QueryDelegatorWithdrawAddressRequest): Promise<_223.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _223.QueryCommunityPoolRequest): Promise<_223.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _227.QueryEvidenceRequest): Promise<_227.QueryEvidenceResponse>;
                        allEvidence(request?: _227.QueryAllEvidenceRequest): Promise<_227.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _231.QueryAllowanceRequest): Promise<_231.QueryAllowanceResponse>;
                        allowances(request: _231.QueryAllowancesRequest): Promise<_231.QueryAllowancesResponse>;
                        allowancesByGranter(request: _231.QueryAllowancesByGranterRequest): Promise<_231.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _236.QueryProposalRequest): Promise<_236.QueryProposalResponse>;
                        proposals(request: _236.QueryProposalsRequest): Promise<_236.QueryProposalsResponse>;
                        vote(request: _236.QueryVoteRequest): Promise<_236.QueryVoteResponse>;
                        votes(request: _236.QueryVotesRequest): Promise<_236.QueryVotesResponse>;
                        params(request: _236.QueryParamsRequest): Promise<_236.QueryParamsResponse>;
                        deposit(request: _236.QueryDepositRequest): Promise<_236.QueryDepositResponse>;
                        deposits(request: _236.QueryDepositsRequest): Promise<_236.QueryDepositsResponse>;
                        tallyResult(request: _236.QueryTallyResultRequest): Promise<_236.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _240.QueryProposalRequest): Promise<_240.QueryProposalResponse>;
                        proposals(request: _240.QueryProposalsRequest): Promise<_240.QueryProposalsResponse>;
                        vote(request: _240.QueryVoteRequest): Promise<_240.QueryVoteResponse>;
                        votes(request: _240.QueryVotesRequest): Promise<_240.QueryVotesResponse>;
                        params(request: _240.QueryParamsRequest): Promise<_240.QueryParamsResponse>;
                        deposit(request: _240.QueryDepositRequest): Promise<_240.QueryDepositResponse>;
                        deposits(request: _240.QueryDepositsRequest): Promise<_240.QueryDepositsResponse>;
                        tallyResult(request: _240.QueryTallyResultRequest): Promise<_240.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _244.QueryGroupInfoRequest): Promise<_244.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _244.QueryGroupPolicyInfoRequest): Promise<_244.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _244.QueryGroupMembersRequest): Promise<_244.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _244.QueryGroupsByAdminRequest): Promise<_244.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _244.QueryGroupPoliciesByGroupRequest): Promise<_244.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _244.QueryGroupPoliciesByAdminRequest): Promise<_244.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _244.QueryProposalRequest): Promise<_244.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _244.QueryProposalsByGroupPolicyRequest): Promise<_244.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _244.QueryVoteByProposalVoterRequest): Promise<_244.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _244.QueryVotesByProposalRequest): Promise<_244.QueryVotesByProposalResponse>;
                        votesByVoter(request: _244.QueryVotesByVoterRequest): Promise<_244.QueryVotesByVoterResponse>;
                        groupsByMember(request: _244.QueryGroupsByMemberRequest): Promise<_244.QueryGroupsByMemberResponse>;
                        tallyResult(request: _244.QueryTallyResultRequest): Promise<_244.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _249.QueryParamsRequest): Promise<_249.QueryParamsResponse>;
                        inflation(request?: _249.QueryInflationRequest): Promise<_249.QueryInflationResponse>;
                        annualProvisions(request?: _249.QueryAnnualProvisionsRequest): Promise<_249.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _254.QueryBalanceRequest): Promise<_254.QueryBalanceResponse>;
                        owner(request: _254.QueryOwnerRequest): Promise<_254.QueryOwnerResponse>;
                        supply(request: _254.QuerySupplyRequest): Promise<_254.QuerySupplyResponse>;
                        nFTs(request: _254.QueryNFTsRequest): Promise<_254.QueryNFTsResponse>;
                        nFT(request: _254.QueryNFTRequest): Promise<_254.QueryNFTResponse>;
                        class(request: _254.QueryClassRequest): Promise<_254.QueryClassResponse>;
                        classes(request?: _254.QueryClassesRequest): Promise<_254.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _259.QueryParamsRequest): Promise<_259.QueryParamsResponse>;
                        subspaces(request?: _259.QuerySubspacesRequest): Promise<_259.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _261.QueryParamsRequest): Promise<_261.QueryParamsResponse>;
                        signingInfo(request: _261.QuerySigningInfoRequest): Promise<_261.QuerySigningInfoResponse>;
                        signingInfos(request?: _261.QuerySigningInfosRequest): Promise<_261.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _266.QueryValidatorsRequest): Promise<_266.QueryValidatorsResponse>;
                        validator(request: _266.QueryValidatorRequest): Promise<_266.QueryValidatorResponse>;
                        validatorDelegations(request: _266.QueryValidatorDelegationsRequest): Promise<_266.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _266.QueryValidatorUnbondingDelegationsRequest): Promise<_266.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _266.QueryDelegationRequest): Promise<_266.QueryDelegationResponse>;
                        unbondingDelegation(request: _266.QueryUnbondingDelegationRequest): Promise<_266.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _266.QueryDelegatorDelegationsRequest): Promise<_266.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _266.QueryDelegatorUnbondingDelegationsRequest): Promise<_266.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _266.QueryRedelegationsRequest): Promise<_266.QueryRedelegationsResponse>;
                        delegatorValidators(request: _266.QueryDelegatorValidatorsRequest): Promise<_266.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _266.QueryDelegatorValidatorRequest): Promise<_266.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _266.QueryHistoricalInfoRequest): Promise<_266.QueryHistoricalInfoResponse>;
                        pool(request?: _266.QueryPoolRequest): Promise<_266.QueryPoolResponse>;
                        params(request?: _266.QueryParamsRequest): Promise<_266.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _270.SimulateRequest): Promise<_270.SimulateResponse>;
                        getTx(request: _270.GetTxRequest): Promise<_270.GetTxResponse>;
                        broadcastTx(request: _270.BroadcastTxRequest): Promise<_270.BroadcastTxResponse>;
                        getTxsEvent(request: _270.GetTxsEventRequest): Promise<_270.GetTxsEventResponse>;
                        getBlockWithTxs(request: _270.GetBlockWithTxsRequest): Promise<_270.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _272.QueryCurrentPlanRequest): Promise<_272.QueryCurrentPlanResponse>;
                        appliedPlan(request: _272.QueryAppliedPlanRequest): Promise<_272.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _272.QueryUpgradedConsensusStateRequest): Promise<_272.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _272.QueryModuleVersionsRequest): Promise<_272.QueryModuleVersionsResponse>;
                        authority(request?: _272.QueryAuthorityRequest): Promise<_272.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
