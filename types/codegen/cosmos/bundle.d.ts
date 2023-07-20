import * as _194 from "./app/v1alpha1/config";
import * as _195 from "./app/v1alpha1/module";
import * as _196 from "./app/v1alpha1/query";
import * as _197 from "./auth/v1beta1/auth";
import * as _198 from "./auth/v1beta1/genesis";
import * as _199 from "./auth/v1beta1/query";
import * as _200 from "./authz/v1beta1/authz";
import * as _201 from "./authz/v1beta1/event";
import * as _202 from "./authz/v1beta1/genesis";
import * as _203 from "./authz/v1beta1/query";
import * as _204 from "./authz/v1beta1/tx";
import * as _205 from "./bank/v1beta1/authz";
import * as _206 from "./bank/v1beta1/bank";
import * as _207 from "./bank/v1beta1/genesis";
import * as _208 from "./bank/v1beta1/query";
import * as _209 from "./bank/v1beta1/tx";
import * as _210 from "./base/abci/v1beta1/abci";
import * as _211 from "./base/kv/v1beta1/kv";
import * as _212 from "./base/query/v1beta1/pagination";
import * as _213 from "./base/reflection/v1beta1/reflection";
import * as _214 from "./base/reflection/v2alpha1/reflection";
import * as _215 from "./base/snapshots/v1beta1/snapshot";
import * as _216 from "./base/store/v1beta1/commit_info";
import * as _217 from "./base/store/v1beta1/listening";
import * as _218 from "./base/tendermint/v1beta1/query";
import * as _219 from "./base/v1beta1/coin";
import * as _220 from "./capability/v1beta1/capability";
import * as _221 from "./capability/v1beta1/genesis";
import * as _222 from "./crisis/v1beta1/genesis";
import * as _223 from "./crisis/v1beta1/tx";
import * as _224 from "./crypto/ed25519/keys";
import * as _225 from "./crypto/hd/v1/hd";
import * as _226 from "./crypto/keyring/v1/record";
import * as _227 from "./crypto/multisig/keys";
import * as _228 from "./crypto/secp256k1/keys";
import * as _229 from "./crypto/secp256r1/keys";
import * as _230 from "./distribution/v1beta1/distribution";
import * as _231 from "./distribution/v1beta1/genesis";
import * as _232 from "./distribution/v1beta1/query";
import * as _233 from "./distribution/v1beta1/tx";
import * as _234 from "./evidence/v1beta1/evidence";
import * as _235 from "./evidence/v1beta1/genesis";
import * as _236 from "./evidence/v1beta1/query";
import * as _237 from "./evidence/v1beta1/tx";
import * as _238 from "./feegrant/v1beta1/feegrant";
import * as _239 from "./feegrant/v1beta1/genesis";
import * as _240 from "./feegrant/v1beta1/query";
import * as _241 from "./feegrant/v1beta1/tx";
import * as _242 from "./genutil/v1beta1/genesis";
import * as _243 from "./gov/v1/genesis";
import * as _244 from "./gov/v1/gov";
import * as _245 from "./gov/v1/query";
import * as _246 from "./gov/v1/tx";
import * as _247 from "./gov/v1beta1/genesis";
import * as _248 from "./gov/v1beta1/gov";
import * as _249 from "./gov/v1beta1/query";
import * as _250 from "./gov/v1beta1/tx";
import * as _251 from "./group/v1/events";
import * as _252 from "./group/v1/genesis";
import * as _253 from "./group/v1/query";
import * as _254 from "./group/v1/tx";
import * as _255 from "./group/v1/types";
import * as _256 from "./mint/v1beta1/genesis";
import * as _257 from "./mint/v1beta1/mint";
import * as _258 from "./mint/v1beta1/query";
import * as _260 from "./nft/v1beta1/event";
import * as _261 from "./nft/v1beta1/genesis";
import * as _262 from "./nft/v1beta1/nft";
import * as _263 from "./nft/v1beta1/query";
import * as _264 from "./nft/v1beta1/tx";
import * as _265 from "./orm/v1/orm";
import * as _266 from "./orm/v1alpha1/schema";
import * as _267 from "./params/v1beta1/params";
import * as _268 from "./params/v1beta1/query";
import * as _269 from "./slashing/v1beta1/genesis";
import * as _270 from "./slashing/v1beta1/query";
import * as _271 from "./slashing/v1beta1/slashing";
import * as _272 from "./slashing/v1beta1/tx";
import * as _273 from "./staking/v1beta1/authz";
import * as _274 from "./staking/v1beta1/genesis";
import * as _275 from "./staking/v1beta1/query";
import * as _276 from "./staking/v1beta1/staking";
import * as _277 from "./staking/v1beta1/tx";
import * as _278 from "./tx/signing/v1beta1/signing";
import * as _279 from "./tx/v1beta1/service";
import * as _280 from "./tx/v1beta1/tx";
import * as _281 from "./upgrade/v1beta1/query";
import * as _282 from "./upgrade/v1beta1/tx";
import * as _283 from "./upgrade/v1beta1/upgrade";
import * as _284 from "./vesting/v1beta1/tx";
import * as _285 from "./vesting/v1beta1/vesting";
import * as _432 from "./app/v1alpha1/query.rpc.Query";
import * as _433 from "./auth/v1beta1/query.rpc.Query";
import * as _434 from "./authz/v1beta1/query.rpc.Query";
import * as _435 from "./bank/v1beta1/query.rpc.Query";
import * as _436 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _437 from "./distribution/v1beta1/query.rpc.Query";
import * as _438 from "./evidence/v1beta1/query.rpc.Query";
import * as _439 from "./feegrant/v1beta1/query.rpc.Query";
import * as _440 from "./gov/v1/query.rpc.Query";
import * as _441 from "./gov/v1beta1/query.rpc.Query";
import * as _442 from "./group/v1/query.rpc.Query";
import * as _443 from "./mint/v1beta1/query.rpc.Query";
import * as _444 from "./nft/v1beta1/query.rpc.Query";
import * as _445 from "./params/v1beta1/query.rpc.Query";
import * as _446 from "./slashing/v1beta1/query.rpc.Query";
import * as _447 from "./staking/v1beta1/query.rpc.Query";
import * as _448 from "./tx/v1beta1/service.rpc.Service";
import * as _449 from "./upgrade/v1beta1/query.rpc.Query";
import * as _450 from "./authz/v1beta1/tx.rpc.msg";
import * as _451 from "./bank/v1beta1/tx.rpc.msg";
import * as _452 from "./crisis/v1beta1/tx.rpc.msg";
import * as _453 from "./distribution/v1beta1/tx.rpc.msg";
import * as _454 from "./evidence/v1beta1/tx.rpc.msg";
import * as _455 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _456 from "./gov/v1/tx.rpc.msg";
import * as _457 from "./gov/v1beta1/tx.rpc.msg";
import * as _458 from "./group/v1/tx.rpc.msg";
import * as _459 from "./nft/v1beta1/tx.rpc.msg";
import * as _460 from "./slashing/v1beta1/tx.rpc.msg";
import * as _461 from "./staking/v1beta1/tx.rpc.msg";
import * as _462 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _463 from "./vesting/v1beta1/tx.rpc.msg";
export declare namespace cosmos {
    namespace app {
        const v1alpha1: {
            QueryClientImpl: typeof _432.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                config(request?: _196.QueryConfigRequest): Promise<_196.QueryConfigResponse>;
            };
            QueryConfigRequest: {
                encode(_: _196.QueryConfigRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryConfigRequest;
                fromJSON(_: any): _196.QueryConfigRequest;
                toJSON(_: _196.QueryConfigRequest): unknown;
                fromPartial(_: Partial<_196.QueryConfigRequest>): _196.QueryConfigRequest;
                fromAmino(_: _196.QueryConfigRequestAmino): _196.QueryConfigRequest;
                toAmino(_: _196.QueryConfigRequest): _196.QueryConfigRequestAmino;
                fromAminoMsg(object: _196.QueryConfigRequestAminoMsg): _196.QueryConfigRequest;
                toAminoMsg(message: _196.QueryConfigRequest): _196.QueryConfigRequestAminoMsg;
                fromProtoMsg(message: _196.QueryConfigRequestProtoMsg): _196.QueryConfigRequest;
                toProto(message: _196.QueryConfigRequest): Uint8Array;
                toProtoMsg(message: _196.QueryConfigRequest): _196.QueryConfigRequestProtoMsg;
            };
            QueryConfigResponse: {
                encode(message: _196.QueryConfigResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.QueryConfigResponse;
                fromJSON(object: any): _196.QueryConfigResponse;
                toJSON(message: _196.QueryConfigResponse): unknown;
                fromPartial(object: Partial<_196.QueryConfigResponse>): _196.QueryConfigResponse;
                fromAmino(object: _196.QueryConfigResponseAmino): _196.QueryConfigResponse;
                toAmino(message: _196.QueryConfigResponse): _196.QueryConfigResponseAmino;
                fromAminoMsg(object: _196.QueryConfigResponseAminoMsg): _196.QueryConfigResponse;
                toAminoMsg(message: _196.QueryConfigResponse): _196.QueryConfigResponseAminoMsg;
                fromProtoMsg(message: _196.QueryConfigResponseProtoMsg): _196.QueryConfigResponse;
                toProto(message: _196.QueryConfigResponse): Uint8Array;
                toProtoMsg(message: _196.QueryConfigResponse): _196.QueryConfigResponseProtoMsg;
            };
            ModuleDescriptor: {
                encode(message: _195.ModuleDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.ModuleDescriptor;
                fromJSON(object: any): _195.ModuleDescriptor;
                toJSON(message: _195.ModuleDescriptor): unknown;
                fromPartial(object: Partial<_195.ModuleDescriptor>): _195.ModuleDescriptor;
                fromAmino(object: _195.ModuleDescriptorAmino): _195.ModuleDescriptor;
                toAmino(message: _195.ModuleDescriptor): _195.ModuleDescriptorAmino;
                fromAminoMsg(object: _195.ModuleDescriptorAminoMsg): _195.ModuleDescriptor;
                toAminoMsg(message: _195.ModuleDescriptor): _195.ModuleDescriptorAminoMsg;
                fromProtoMsg(message: _195.ModuleDescriptorProtoMsg): _195.ModuleDescriptor;
                toProto(message: _195.ModuleDescriptor): Uint8Array;
                toProtoMsg(message: _195.ModuleDescriptor): _195.ModuleDescriptorProtoMsg;
            };
            PackageReference: {
                encode(message: _195.PackageReference, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.PackageReference;
                fromJSON(object: any): _195.PackageReference;
                toJSON(message: _195.PackageReference): unknown;
                fromPartial(object: Partial<_195.PackageReference>): _195.PackageReference;
                fromAmino(object: _195.PackageReferenceAmino): _195.PackageReference;
                toAmino(message: _195.PackageReference): _195.PackageReferenceAmino;
                fromAminoMsg(object: _195.PackageReferenceAminoMsg): _195.PackageReference;
                toAminoMsg(message: _195.PackageReference): _195.PackageReferenceAminoMsg;
                fromProtoMsg(message: _195.PackageReferenceProtoMsg): _195.PackageReference;
                toProto(message: _195.PackageReference): Uint8Array;
                toProtoMsg(message: _195.PackageReference): _195.PackageReferenceProtoMsg;
            };
            MigrateFromInfo: {
                encode(message: _195.MigrateFromInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MigrateFromInfo;
                fromJSON(object: any): _195.MigrateFromInfo;
                toJSON(message: _195.MigrateFromInfo): unknown;
                fromPartial(object: Partial<_195.MigrateFromInfo>): _195.MigrateFromInfo;
                fromAmino(object: _195.MigrateFromInfoAmino): _195.MigrateFromInfo;
                toAmino(message: _195.MigrateFromInfo): _195.MigrateFromInfoAmino;
                fromAminoMsg(object: _195.MigrateFromInfoAminoMsg): _195.MigrateFromInfo;
                toAminoMsg(message: _195.MigrateFromInfo): _195.MigrateFromInfoAminoMsg;
                fromProtoMsg(message: _195.MigrateFromInfoProtoMsg): _195.MigrateFromInfo;
                toProto(message: _195.MigrateFromInfo): Uint8Array;
                toProtoMsg(message: _195.MigrateFromInfo): _195.MigrateFromInfoProtoMsg;
            };
            Config: {
                encode(message: _194.Config, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.Config;
                fromJSON(object: any): _194.Config;
                toJSON(message: _194.Config): unknown;
                fromPartial(object: Partial<_194.Config>): _194.Config;
                fromAmino(object: _194.ConfigAmino): _194.Config;
                toAmino(message: _194.Config): _194.ConfigAmino;
                fromAminoMsg(object: _194.ConfigAminoMsg): _194.Config;
                toAminoMsg(message: _194.Config): _194.ConfigAminoMsg;
                fromProtoMsg(message: _194.ConfigProtoMsg): _194.Config;
                toProto(message: _194.Config): Uint8Array;
                toProtoMsg(message: _194.Config): _194.ConfigProtoMsg;
            };
            ModuleConfig: {
                encode(message: _194.ModuleConfig, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.ModuleConfig;
                fromJSON(object: any): _194.ModuleConfig;
                toJSON(message: _194.ModuleConfig): unknown;
                fromPartial(object: Partial<_194.ModuleConfig>): _194.ModuleConfig;
                fromAmino(object: _194.ModuleConfigAmino): _194.ModuleConfig;
                toAmino(message: _194.ModuleConfig): _194.ModuleConfigAmino;
                fromAminoMsg(object: _194.ModuleConfigAminoMsg): _194.ModuleConfig;
                toAminoMsg(message: _194.ModuleConfig): _194.ModuleConfigAminoMsg;
                fromProtoMsg(message: _194.ModuleConfigProtoMsg): _194.ModuleConfig;
                toProto(message: _194.ModuleConfig): Uint8Array;
                toProtoMsg(message: _194.ModuleConfig): _194.ModuleConfigProtoMsg;
            };
        };
    }
    namespace auth {
        const v1beta1: {
            QueryClientImpl: typeof _433.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                accounts(request?: _199.QueryAccountsRequest): Promise<_199.QueryAccountsResponse>;
                account(request: _199.QueryAccountRequest): Promise<_199.QueryAccountResponse>;
                params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                moduleAccounts(request?: _199.QueryModuleAccountsRequest): Promise<_199.QueryModuleAccountsResponse>;
                bech32Prefix(request?: _199.Bech32PrefixRequest): Promise<_199.Bech32PrefixResponse>;
                addressBytesToString(request: _199.AddressBytesToStringRequest): Promise<_199.AddressBytesToStringResponse>;
                addressStringToBytes(request: _199.AddressStringToBytesRequest): Promise<_199.AddressStringToBytesResponse>;
            };
            QueryAccountsRequest: {
                encode(message: _199.QueryAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAccountsRequest;
                fromJSON(object: any): _199.QueryAccountsRequest;
                toJSON(message: _199.QueryAccountsRequest): unknown;
                fromPartial(object: Partial<_199.QueryAccountsRequest>): _199.QueryAccountsRequest;
                fromAmino(object: _199.QueryAccountsRequestAmino): _199.QueryAccountsRequest;
                toAmino(message: _199.QueryAccountsRequest): _199.QueryAccountsRequestAmino;
                fromAminoMsg(object: _199.QueryAccountsRequestAminoMsg): _199.QueryAccountsRequest;
                toAminoMsg(message: _199.QueryAccountsRequest): _199.QueryAccountsRequestAminoMsg;
                fromProtoMsg(message: _199.QueryAccountsRequestProtoMsg): _199.QueryAccountsRequest;
                toProto(message: _199.QueryAccountsRequest): Uint8Array;
                toProtoMsg(message: _199.QueryAccountsRequest): _199.QueryAccountsRequestProtoMsg;
            };
            QueryAccountsResponse: {
                encode(message: _199.QueryAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAccountsResponse;
                fromJSON(object: any): _199.QueryAccountsResponse;
                toJSON(message: _199.QueryAccountsResponse): unknown;
                fromPartial(object: Partial<_199.QueryAccountsResponse>): _199.QueryAccountsResponse;
                fromAmino(object: _199.QueryAccountsResponseAmino): _199.QueryAccountsResponse;
                toAmino(message: _199.QueryAccountsResponse): _199.QueryAccountsResponseAmino;
                fromAminoMsg(object: _199.QueryAccountsResponseAminoMsg): _199.QueryAccountsResponse;
                toAminoMsg(message: _199.QueryAccountsResponse): _199.QueryAccountsResponseAminoMsg;
                fromProtoMsg(message: _199.QueryAccountsResponseProtoMsg): _199.QueryAccountsResponse;
                toProto(message: _199.QueryAccountsResponse): Uint8Array;
                toProtoMsg(message: _199.QueryAccountsResponse): _199.QueryAccountsResponseProtoMsg;
            };
            QueryAccountRequest: {
                encode(message: _199.QueryAccountRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAccountRequest;
                fromJSON(object: any): _199.QueryAccountRequest;
                toJSON(message: _199.QueryAccountRequest): unknown;
                fromPartial(object: Partial<_199.QueryAccountRequest>): _199.QueryAccountRequest;
                fromAmino(object: _199.QueryAccountRequestAmino): _199.QueryAccountRequest;
                toAmino(message: _199.QueryAccountRequest): _199.QueryAccountRequestAmino;
                fromAminoMsg(object: _199.QueryAccountRequestAminoMsg): _199.QueryAccountRequest;
                toAminoMsg(message: _199.QueryAccountRequest): _199.QueryAccountRequestAminoMsg;
                fromProtoMsg(message: _199.QueryAccountRequestProtoMsg): _199.QueryAccountRequest;
                toProto(message: _199.QueryAccountRequest): Uint8Array;
                toProtoMsg(message: _199.QueryAccountRequest): _199.QueryAccountRequestProtoMsg;
            };
            QueryModuleAccountsRequest: {
                encode(_: _199.QueryModuleAccountsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryModuleAccountsRequest;
                fromJSON(_: any): _199.QueryModuleAccountsRequest;
                toJSON(_: _199.QueryModuleAccountsRequest): unknown;
                fromPartial(_: Partial<_199.QueryModuleAccountsRequest>): _199.QueryModuleAccountsRequest;
                fromAmino(_: _199.QueryModuleAccountsRequestAmino): _199.QueryModuleAccountsRequest;
                toAmino(_: _199.QueryModuleAccountsRequest): _199.QueryModuleAccountsRequestAmino;
                fromAminoMsg(object: _199.QueryModuleAccountsRequestAminoMsg): _199.QueryModuleAccountsRequest;
                toAminoMsg(message: _199.QueryModuleAccountsRequest): _199.QueryModuleAccountsRequestAminoMsg;
                fromProtoMsg(message: _199.QueryModuleAccountsRequestProtoMsg): _199.QueryModuleAccountsRequest;
                toProto(message: _199.QueryModuleAccountsRequest): Uint8Array;
                toProtoMsg(message: _199.QueryModuleAccountsRequest): _199.QueryModuleAccountsRequestProtoMsg;
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
            QueryAccountResponse: {
                encode(message: _199.QueryAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryAccountResponse;
                fromJSON(object: any): _199.QueryAccountResponse;
                toJSON(message: _199.QueryAccountResponse): unknown;
                fromPartial(object: Partial<_199.QueryAccountResponse>): _199.QueryAccountResponse;
                fromAmino(object: _199.QueryAccountResponseAmino): _199.QueryAccountResponse;
                toAmino(message: _199.QueryAccountResponse): _199.QueryAccountResponseAmino;
                fromAminoMsg(object: _199.QueryAccountResponseAminoMsg): _199.QueryAccountResponse;
                toAminoMsg(message: _199.QueryAccountResponse): _199.QueryAccountResponseAminoMsg;
                fromProtoMsg(message: _199.QueryAccountResponseProtoMsg): _199.QueryAccountResponse;
                toProto(message: _199.QueryAccountResponse): Uint8Array;
                toProtoMsg(message: _199.QueryAccountResponse): _199.QueryAccountResponseProtoMsg;
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
            QueryModuleAccountsResponse: {
                encode(message: _199.QueryModuleAccountsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.QueryModuleAccountsResponse;
                fromJSON(object: any): _199.QueryModuleAccountsResponse;
                toJSON(message: _199.QueryModuleAccountsResponse): unknown;
                fromPartial(object: Partial<_199.QueryModuleAccountsResponse>): _199.QueryModuleAccountsResponse;
                fromAmino(object: _199.QueryModuleAccountsResponseAmino): _199.QueryModuleAccountsResponse;
                toAmino(message: _199.QueryModuleAccountsResponse): _199.QueryModuleAccountsResponseAmino;
                fromAminoMsg(object: _199.QueryModuleAccountsResponseAminoMsg): _199.QueryModuleAccountsResponse;
                toAminoMsg(message: _199.QueryModuleAccountsResponse): _199.QueryModuleAccountsResponseAminoMsg;
                fromProtoMsg(message: _199.QueryModuleAccountsResponseProtoMsg): _199.QueryModuleAccountsResponse;
                toProto(message: _199.QueryModuleAccountsResponse): Uint8Array;
                toProtoMsg(message: _199.QueryModuleAccountsResponse): _199.QueryModuleAccountsResponseProtoMsg;
            };
            Bech32PrefixRequest: {
                encode(_: _199.Bech32PrefixRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Bech32PrefixRequest;
                fromJSON(_: any): _199.Bech32PrefixRequest;
                toJSON(_: _199.Bech32PrefixRequest): unknown;
                fromPartial(_: Partial<_199.Bech32PrefixRequest>): _199.Bech32PrefixRequest;
                fromAmino(_: _199.Bech32PrefixRequestAmino): _199.Bech32PrefixRequest;
                toAmino(_: _199.Bech32PrefixRequest): _199.Bech32PrefixRequestAmino;
                fromAminoMsg(object: _199.Bech32PrefixRequestAminoMsg): _199.Bech32PrefixRequest;
                toAminoMsg(message: _199.Bech32PrefixRequest): _199.Bech32PrefixRequestAminoMsg;
                fromProtoMsg(message: _199.Bech32PrefixRequestProtoMsg): _199.Bech32PrefixRequest;
                toProto(message: _199.Bech32PrefixRequest): Uint8Array;
                toProtoMsg(message: _199.Bech32PrefixRequest): _199.Bech32PrefixRequestProtoMsg;
            };
            Bech32PrefixResponse: {
                encode(message: _199.Bech32PrefixResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Bech32PrefixResponse;
                fromJSON(object: any): _199.Bech32PrefixResponse;
                toJSON(message: _199.Bech32PrefixResponse): unknown;
                fromPartial(object: Partial<_199.Bech32PrefixResponse>): _199.Bech32PrefixResponse;
                fromAmino(object: _199.Bech32PrefixResponseAmino): _199.Bech32PrefixResponse;
                toAmino(message: _199.Bech32PrefixResponse): _199.Bech32PrefixResponseAmino;
                fromAminoMsg(object: _199.Bech32PrefixResponseAminoMsg): _199.Bech32PrefixResponse;
                toAminoMsg(message: _199.Bech32PrefixResponse): _199.Bech32PrefixResponseAminoMsg;
                fromProtoMsg(message: _199.Bech32PrefixResponseProtoMsg): _199.Bech32PrefixResponse;
                toProto(message: _199.Bech32PrefixResponse): Uint8Array;
                toProtoMsg(message: _199.Bech32PrefixResponse): _199.Bech32PrefixResponseProtoMsg;
            };
            AddressBytesToStringRequest: {
                encode(message: _199.AddressBytesToStringRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AddressBytesToStringRequest;
                fromJSON(object: any): _199.AddressBytesToStringRequest;
                toJSON(message: _199.AddressBytesToStringRequest): unknown;
                fromPartial(object: Partial<_199.AddressBytesToStringRequest>): _199.AddressBytesToStringRequest;
                fromAmino(object: _199.AddressBytesToStringRequestAmino): _199.AddressBytesToStringRequest;
                toAmino(message: _199.AddressBytesToStringRequest): _199.AddressBytesToStringRequestAmino;
                fromAminoMsg(object: _199.AddressBytesToStringRequestAminoMsg): _199.AddressBytesToStringRequest;
                toAminoMsg(message: _199.AddressBytesToStringRequest): _199.AddressBytesToStringRequestAminoMsg;
                fromProtoMsg(message: _199.AddressBytesToStringRequestProtoMsg): _199.AddressBytesToStringRequest;
                toProto(message: _199.AddressBytesToStringRequest): Uint8Array;
                toProtoMsg(message: _199.AddressBytesToStringRequest): _199.AddressBytesToStringRequestProtoMsg;
            };
            AddressBytesToStringResponse: {
                encode(message: _199.AddressBytesToStringResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AddressBytesToStringResponse;
                fromJSON(object: any): _199.AddressBytesToStringResponse;
                toJSON(message: _199.AddressBytesToStringResponse): unknown;
                fromPartial(object: Partial<_199.AddressBytesToStringResponse>): _199.AddressBytesToStringResponse;
                fromAmino(object: _199.AddressBytesToStringResponseAmino): _199.AddressBytesToStringResponse;
                toAmino(message: _199.AddressBytesToStringResponse): _199.AddressBytesToStringResponseAmino;
                fromAminoMsg(object: _199.AddressBytesToStringResponseAminoMsg): _199.AddressBytesToStringResponse;
                toAminoMsg(message: _199.AddressBytesToStringResponse): _199.AddressBytesToStringResponseAminoMsg;
                fromProtoMsg(message: _199.AddressBytesToStringResponseProtoMsg): _199.AddressBytesToStringResponse;
                toProto(message: _199.AddressBytesToStringResponse): Uint8Array;
                toProtoMsg(message: _199.AddressBytesToStringResponse): _199.AddressBytesToStringResponseProtoMsg;
            };
            AddressStringToBytesRequest: {
                encode(message: _199.AddressStringToBytesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AddressStringToBytesRequest;
                fromJSON(object: any): _199.AddressStringToBytesRequest;
                toJSON(message: _199.AddressStringToBytesRequest): unknown;
                fromPartial(object: Partial<_199.AddressStringToBytesRequest>): _199.AddressStringToBytesRequest;
                fromAmino(object: _199.AddressStringToBytesRequestAmino): _199.AddressStringToBytesRequest;
                toAmino(message: _199.AddressStringToBytesRequest): _199.AddressStringToBytesRequestAmino;
                fromAminoMsg(object: _199.AddressStringToBytesRequestAminoMsg): _199.AddressStringToBytesRequest;
                toAminoMsg(message: _199.AddressStringToBytesRequest): _199.AddressStringToBytesRequestAminoMsg;
                fromProtoMsg(message: _199.AddressStringToBytesRequestProtoMsg): _199.AddressStringToBytesRequest;
                toProto(message: _199.AddressStringToBytesRequest): Uint8Array;
                toProtoMsg(message: _199.AddressStringToBytesRequest): _199.AddressStringToBytesRequestProtoMsg;
            };
            AddressStringToBytesResponse: {
                encode(message: _199.AddressStringToBytesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.AddressStringToBytesResponse;
                fromJSON(object: any): _199.AddressStringToBytesResponse;
                toJSON(message: _199.AddressStringToBytesResponse): unknown;
                fromPartial(object: Partial<_199.AddressStringToBytesResponse>): _199.AddressStringToBytesResponse;
                fromAmino(object: _199.AddressStringToBytesResponseAmino): _199.AddressStringToBytesResponse;
                toAmino(message: _199.AddressStringToBytesResponse): _199.AddressStringToBytesResponseAmino;
                fromAminoMsg(object: _199.AddressStringToBytesResponseAminoMsg): _199.AddressStringToBytesResponse;
                toAminoMsg(message: _199.AddressStringToBytesResponse): _199.AddressStringToBytesResponseAminoMsg;
                fromProtoMsg(message: _199.AddressStringToBytesResponseProtoMsg): _199.AddressStringToBytesResponse;
                toProto(message: _199.AddressStringToBytesResponse): Uint8Array;
                toProtoMsg(message: _199.AddressStringToBytesResponse): _199.AddressStringToBytesResponseProtoMsg;
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
            BaseAccount: {
                encode(message: _197.BaseAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.BaseAccount;
                fromJSON(object: any): _197.BaseAccount;
                toJSON(message: _197.BaseAccount): unknown;
                fromPartial(object: Partial<_197.BaseAccount>): _197.BaseAccount;
                fromAmino(object: _197.BaseAccountAmino): _197.BaseAccount;
                toAmino(message: _197.BaseAccount): _197.BaseAccountAmino;
                fromAminoMsg(object: _197.BaseAccountAminoMsg): _197.BaseAccount;
                toAminoMsg(message: _197.BaseAccount): _197.BaseAccountAminoMsg;
                fromProtoMsg(message: _197.BaseAccountProtoMsg): _197.BaseAccount;
                toProto(message: _197.BaseAccount): Uint8Array;
                toProtoMsg(message: _197.BaseAccount): _197.BaseAccountProtoMsg;
            };
            ModuleAccount: {
                encode(message: _197.ModuleAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.ModuleAccount;
                fromJSON(object: any): _197.ModuleAccount;
                toJSON(message: _197.ModuleAccount): unknown;
                fromPartial(object: Partial<_197.ModuleAccount>): _197.ModuleAccount;
                fromAmino(object: _197.ModuleAccountAmino): _197.ModuleAccount;
                toAmino(message: _197.ModuleAccount): _197.ModuleAccountAmino;
                fromAminoMsg(object: _197.ModuleAccountAminoMsg): _197.ModuleAccount;
                toAminoMsg(message: _197.ModuleAccount): _197.ModuleAccountAminoMsg;
                fromProtoMsg(message: _197.ModuleAccountProtoMsg): _197.ModuleAccount;
                toProto(message: _197.ModuleAccount): Uint8Array;
                toProtoMsg(message: _197.ModuleAccount): _197.ModuleAccountProtoMsg;
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
        };
    }
    namespace authz {
        const v1beta1: {
            MsgClientImpl: typeof _450.MsgClientImpl;
            QueryClientImpl: typeof _434.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                grants(request: _203.QueryGrantsRequest): Promise<_203.QueryGrantsResponse>;
                granterGrants(request: _203.QueryGranterGrantsRequest): Promise<_203.QueryGranterGrantsResponse>;
                granteeGrants(request: _203.QueryGranteeGrantsRequest): Promise<_203.QueryGranteeGrantsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grant(value: _204.MsgGrant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _204.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revoke(value: _204.MsgRevoke): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grant(value: _204.MsgGrant): {
                        typeUrl: string;
                        value: _204.MsgGrant;
                    };
                    exec(value: _204.MsgExec): {
                        typeUrl: string;
                        value: _204.MsgExec;
                    };
                    revoke(value: _204.MsgRevoke): {
                        typeUrl: string;
                        value: _204.MsgRevoke;
                    };
                };
                toJSON: {
                    grant(value: _204.MsgGrant): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _204.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revoke(value: _204.MsgRevoke): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grant(value: any): {
                        typeUrl: string;
                        value: _204.MsgGrant;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _204.MsgExec;
                    };
                    revoke(value: any): {
                        typeUrl: string;
                        value: _204.MsgRevoke;
                    };
                };
                fromPartial: {
                    grant(value: _204.MsgGrant): {
                        typeUrl: string;
                        value: _204.MsgGrant;
                    };
                    exec(value: _204.MsgExec): {
                        typeUrl: string;
                        value: _204.MsgExec;
                    };
                    revoke(value: _204.MsgRevoke): {
                        typeUrl: string;
                        value: _204.MsgRevoke;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.authz.v1beta1.MsgGrant": {
                    aminoType: string;
                    toAmino: (message: _204.MsgGrant) => _204.MsgGrantAmino;
                    fromAmino: (object: _204.MsgGrantAmino) => _204.MsgGrant;
                };
                "/cosmos.authz.v1beta1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _204.MsgExec) => _204.MsgExecAmino;
                    fromAmino: (object: _204.MsgExecAmino) => _204.MsgExec;
                };
                "/cosmos.authz.v1beta1.MsgRevoke": {
                    aminoType: string;
                    toAmino: (message: _204.MsgRevoke) => _204.MsgRevokeAmino;
                    fromAmino: (object: _204.MsgRevokeAmino) => _204.MsgRevoke;
                };
            };
            MsgGrant: {
                encode(message: _204.MsgGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgGrant;
                fromJSON(object: any): _204.MsgGrant;
                toJSON(message: _204.MsgGrant): unknown;
                fromPartial(object: Partial<_204.MsgGrant>): _204.MsgGrant;
                fromAmino(object: _204.MsgGrantAmino): _204.MsgGrant;
                toAmino(message: _204.MsgGrant): _204.MsgGrantAmino;
                fromAminoMsg(object: _204.MsgGrantAminoMsg): _204.MsgGrant;
                toAminoMsg(message: _204.MsgGrant): _204.MsgGrantAminoMsg;
                fromProtoMsg(message: _204.MsgGrantProtoMsg): _204.MsgGrant;
                toProto(message: _204.MsgGrant): Uint8Array;
                toProtoMsg(message: _204.MsgGrant): _204.MsgGrantProtoMsg;
            };
            MsgExecResponse: {
                encode(message: _204.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgExecResponse;
                fromJSON(object: any): _204.MsgExecResponse;
                toJSON(message: _204.MsgExecResponse): unknown;
                fromPartial(object: Partial<_204.MsgExecResponse>): _204.MsgExecResponse;
                fromAmino(object: _204.MsgExecResponseAmino): _204.MsgExecResponse;
                toAmino(message: _204.MsgExecResponse): _204.MsgExecResponseAmino;
                fromAminoMsg(object: _204.MsgExecResponseAminoMsg): _204.MsgExecResponse;
                toAminoMsg(message: _204.MsgExecResponse): _204.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _204.MsgExecResponseProtoMsg): _204.MsgExecResponse;
                toProto(message: _204.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _204.MsgExecResponse): _204.MsgExecResponseProtoMsg;
            };
            MsgExec: {
                encode(message: _204.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgExec;
                fromJSON(object: any): _204.MsgExec;
                toJSON(message: _204.MsgExec): unknown;
                fromPartial(object: Partial<_204.MsgExec>): _204.MsgExec;
                fromAmino(object: _204.MsgExecAmino): _204.MsgExec;
                toAmino(message: _204.MsgExec): _204.MsgExecAmino;
                fromAminoMsg(object: _204.MsgExecAminoMsg): _204.MsgExec;
                toAminoMsg(message: _204.MsgExec): _204.MsgExecAminoMsg;
                fromProtoMsg(message: _204.MsgExecProtoMsg): _204.MsgExec;
                toProto(message: _204.MsgExec): Uint8Array;
                toProtoMsg(message: _204.MsgExec): _204.MsgExecProtoMsg;
            };
            MsgGrantResponse: {
                encode(_: _204.MsgGrantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgGrantResponse;
                fromJSON(_: any): _204.MsgGrantResponse;
                toJSON(_: _204.MsgGrantResponse): unknown;
                fromPartial(_: Partial<_204.MsgGrantResponse>): _204.MsgGrantResponse;
                fromAmino(_: _204.MsgGrantResponseAmino): _204.MsgGrantResponse;
                toAmino(_: _204.MsgGrantResponse): _204.MsgGrantResponseAmino;
                fromAminoMsg(object: _204.MsgGrantResponseAminoMsg): _204.MsgGrantResponse;
                toAminoMsg(message: _204.MsgGrantResponse): _204.MsgGrantResponseAminoMsg;
                fromProtoMsg(message: _204.MsgGrantResponseProtoMsg): _204.MsgGrantResponse;
                toProto(message: _204.MsgGrantResponse): Uint8Array;
                toProtoMsg(message: _204.MsgGrantResponse): _204.MsgGrantResponseProtoMsg;
            };
            MsgRevoke: {
                encode(message: _204.MsgRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgRevoke;
                fromJSON(object: any): _204.MsgRevoke;
                toJSON(message: _204.MsgRevoke): unknown;
                fromPartial(object: Partial<_204.MsgRevoke>): _204.MsgRevoke;
                fromAmino(object: _204.MsgRevokeAmino): _204.MsgRevoke;
                toAmino(message: _204.MsgRevoke): _204.MsgRevokeAmino;
                fromAminoMsg(object: _204.MsgRevokeAminoMsg): _204.MsgRevoke;
                toAminoMsg(message: _204.MsgRevoke): _204.MsgRevokeAminoMsg;
                fromProtoMsg(message: _204.MsgRevokeProtoMsg): _204.MsgRevoke;
                toProto(message: _204.MsgRevoke): Uint8Array;
                toProtoMsg(message: _204.MsgRevoke): _204.MsgRevokeProtoMsg;
            };
            MsgRevokeResponse: {
                encode(_: _204.MsgRevokeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _204.MsgRevokeResponse;
                fromJSON(_: any): _204.MsgRevokeResponse;
                toJSON(_: _204.MsgRevokeResponse): unknown;
                fromPartial(_: Partial<_204.MsgRevokeResponse>): _204.MsgRevokeResponse;
                fromAmino(_: _204.MsgRevokeResponseAmino): _204.MsgRevokeResponse;
                toAmino(_: _204.MsgRevokeResponse): _204.MsgRevokeResponseAmino;
                fromAminoMsg(object: _204.MsgRevokeResponseAminoMsg): _204.MsgRevokeResponse;
                toAminoMsg(message: _204.MsgRevokeResponse): _204.MsgRevokeResponseAminoMsg;
                fromProtoMsg(message: _204.MsgRevokeResponseProtoMsg): _204.MsgRevokeResponse;
                toProto(message: _204.MsgRevokeResponse): Uint8Array;
                toProtoMsg(message: _204.MsgRevokeResponse): _204.MsgRevokeResponseProtoMsg;
            };
            QueryGrantsRequest: {
                encode(message: _203.QueryGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGrantsRequest;
                fromJSON(object: any): _203.QueryGrantsRequest;
                toJSON(message: _203.QueryGrantsRequest): unknown;
                fromPartial(object: Partial<_203.QueryGrantsRequest>): _203.QueryGrantsRequest;
                fromAmino(object: _203.QueryGrantsRequestAmino): _203.QueryGrantsRequest;
                toAmino(message: _203.QueryGrantsRequest): _203.QueryGrantsRequestAmino;
                fromAminoMsg(object: _203.QueryGrantsRequestAminoMsg): _203.QueryGrantsRequest;
                toAminoMsg(message: _203.QueryGrantsRequest): _203.QueryGrantsRequestAminoMsg;
                fromProtoMsg(message: _203.QueryGrantsRequestProtoMsg): _203.QueryGrantsRequest;
                toProto(message: _203.QueryGrantsRequest): Uint8Array;
                toProtoMsg(message: _203.QueryGrantsRequest): _203.QueryGrantsRequestProtoMsg;
            };
            QueryGrantsResponse: {
                encode(message: _203.QueryGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGrantsResponse;
                fromJSON(object: any): _203.QueryGrantsResponse;
                toJSON(message: _203.QueryGrantsResponse): unknown;
                fromPartial(object: Partial<_203.QueryGrantsResponse>): _203.QueryGrantsResponse;
                fromAmino(object: _203.QueryGrantsResponseAmino): _203.QueryGrantsResponse;
                toAmino(message: _203.QueryGrantsResponse): _203.QueryGrantsResponseAmino;
                fromAminoMsg(object: _203.QueryGrantsResponseAminoMsg): _203.QueryGrantsResponse;
                toAminoMsg(message: _203.QueryGrantsResponse): _203.QueryGrantsResponseAminoMsg;
                fromProtoMsg(message: _203.QueryGrantsResponseProtoMsg): _203.QueryGrantsResponse;
                toProto(message: _203.QueryGrantsResponse): Uint8Array;
                toProtoMsg(message: _203.QueryGrantsResponse): _203.QueryGrantsResponseProtoMsg;
            };
            QueryGranterGrantsRequest: {
                encode(message: _203.QueryGranterGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGranterGrantsRequest;
                fromJSON(object: any): _203.QueryGranterGrantsRequest;
                toJSON(message: _203.QueryGranterGrantsRequest): unknown;
                fromPartial(object: Partial<_203.QueryGranterGrantsRequest>): _203.QueryGranterGrantsRequest;
                fromAmino(object: _203.QueryGranterGrantsRequestAmino): _203.QueryGranterGrantsRequest;
                toAmino(message: _203.QueryGranterGrantsRequest): _203.QueryGranterGrantsRequestAmino;
                fromAminoMsg(object: _203.QueryGranterGrantsRequestAminoMsg): _203.QueryGranterGrantsRequest;
                toAminoMsg(message: _203.QueryGranterGrantsRequest): _203.QueryGranterGrantsRequestAminoMsg;
                fromProtoMsg(message: _203.QueryGranterGrantsRequestProtoMsg): _203.QueryGranterGrantsRequest;
                toProto(message: _203.QueryGranterGrantsRequest): Uint8Array;
                toProtoMsg(message: _203.QueryGranterGrantsRequest): _203.QueryGranterGrantsRequestProtoMsg;
            };
            QueryGranterGrantsResponse: {
                encode(message: _203.QueryGranterGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGranterGrantsResponse;
                fromJSON(object: any): _203.QueryGranterGrantsResponse;
                toJSON(message: _203.QueryGranterGrantsResponse): unknown;
                fromPartial(object: Partial<_203.QueryGranterGrantsResponse>): _203.QueryGranterGrantsResponse;
                fromAmino(object: _203.QueryGranterGrantsResponseAmino): _203.QueryGranterGrantsResponse;
                toAmino(message: _203.QueryGranterGrantsResponse): _203.QueryGranterGrantsResponseAmino;
                fromAminoMsg(object: _203.QueryGranterGrantsResponseAminoMsg): _203.QueryGranterGrantsResponse;
                toAminoMsg(message: _203.QueryGranterGrantsResponse): _203.QueryGranterGrantsResponseAminoMsg;
                fromProtoMsg(message: _203.QueryGranterGrantsResponseProtoMsg): _203.QueryGranterGrantsResponse;
                toProto(message: _203.QueryGranterGrantsResponse): Uint8Array;
                toProtoMsg(message: _203.QueryGranterGrantsResponse): _203.QueryGranterGrantsResponseProtoMsg;
            };
            QueryGranteeGrantsRequest: {
                encode(message: _203.QueryGranteeGrantsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGranteeGrantsRequest;
                fromJSON(object: any): _203.QueryGranteeGrantsRequest;
                toJSON(message: _203.QueryGranteeGrantsRequest): unknown;
                fromPartial(object: Partial<_203.QueryGranteeGrantsRequest>): _203.QueryGranteeGrantsRequest;
                fromAmino(object: _203.QueryGranteeGrantsRequestAmino): _203.QueryGranteeGrantsRequest;
                toAmino(message: _203.QueryGranteeGrantsRequest): _203.QueryGranteeGrantsRequestAmino;
                fromAminoMsg(object: _203.QueryGranteeGrantsRequestAminoMsg): _203.QueryGranteeGrantsRequest;
                toAminoMsg(message: _203.QueryGranteeGrantsRequest): _203.QueryGranteeGrantsRequestAminoMsg;
                fromProtoMsg(message: _203.QueryGranteeGrantsRequestProtoMsg): _203.QueryGranteeGrantsRequest;
                toProto(message: _203.QueryGranteeGrantsRequest): Uint8Array;
                toProtoMsg(message: _203.QueryGranteeGrantsRequest): _203.QueryGranteeGrantsRequestProtoMsg;
            };
            QueryGranteeGrantsResponse: {
                encode(message: _203.QueryGranteeGrantsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _203.QueryGranteeGrantsResponse;
                fromJSON(object: any): _203.QueryGranteeGrantsResponse;
                toJSON(message: _203.QueryGranteeGrantsResponse): unknown;
                fromPartial(object: Partial<_203.QueryGranteeGrantsResponse>): _203.QueryGranteeGrantsResponse;
                fromAmino(object: _203.QueryGranteeGrantsResponseAmino): _203.QueryGranteeGrantsResponse;
                toAmino(message: _203.QueryGranteeGrantsResponse): _203.QueryGranteeGrantsResponseAmino;
                fromAminoMsg(object: _203.QueryGranteeGrantsResponseAminoMsg): _203.QueryGranteeGrantsResponse;
                toAminoMsg(message: _203.QueryGranteeGrantsResponse): _203.QueryGranteeGrantsResponseAminoMsg;
                fromProtoMsg(message: _203.QueryGranteeGrantsResponseProtoMsg): _203.QueryGranteeGrantsResponse;
                toProto(message: _203.QueryGranteeGrantsResponse): Uint8Array;
                toProtoMsg(message: _203.QueryGranteeGrantsResponse): _203.QueryGranteeGrantsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _202.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _202.GenesisState;
                fromJSON(object: any): _202.GenesisState;
                toJSON(message: _202.GenesisState): unknown;
                fromPartial(object: Partial<_202.GenesisState>): _202.GenesisState;
                fromAmino(object: _202.GenesisStateAmino): _202.GenesisState;
                toAmino(message: _202.GenesisState): _202.GenesisStateAmino;
                fromAminoMsg(object: _202.GenesisStateAminoMsg): _202.GenesisState;
                toAminoMsg(message: _202.GenesisState): _202.GenesisStateAminoMsg;
                fromProtoMsg(message: _202.GenesisStateProtoMsg): _202.GenesisState;
                toProto(message: _202.GenesisState): Uint8Array;
                toProtoMsg(message: _202.GenesisState): _202.GenesisStateProtoMsg;
            };
            EventGrant: {
                encode(message: _201.EventGrant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.EventGrant;
                fromJSON(object: any): _201.EventGrant;
                toJSON(message: _201.EventGrant): unknown;
                fromPartial(object: Partial<_201.EventGrant>): _201.EventGrant;
                fromAmino(object: _201.EventGrantAmino): _201.EventGrant;
                toAmino(message: _201.EventGrant): _201.EventGrantAmino;
                fromAminoMsg(object: _201.EventGrantAminoMsg): _201.EventGrant;
                toAminoMsg(message: _201.EventGrant): _201.EventGrantAminoMsg;
                fromProtoMsg(message: _201.EventGrantProtoMsg): _201.EventGrant;
                toProto(message: _201.EventGrant): Uint8Array;
                toProtoMsg(message: _201.EventGrant): _201.EventGrantProtoMsg;
            };
            EventRevoke: {
                encode(message: _201.EventRevoke, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.EventRevoke;
                fromJSON(object: any): _201.EventRevoke;
                toJSON(message: _201.EventRevoke): unknown;
                fromPartial(object: Partial<_201.EventRevoke>): _201.EventRevoke;
                fromAmino(object: _201.EventRevokeAmino): _201.EventRevoke;
                toAmino(message: _201.EventRevoke): _201.EventRevokeAmino;
                fromAminoMsg(object: _201.EventRevokeAminoMsg): _201.EventRevoke;
                toAminoMsg(message: _201.EventRevoke): _201.EventRevokeAminoMsg;
                fromProtoMsg(message: _201.EventRevokeProtoMsg): _201.EventRevoke;
                toProto(message: _201.EventRevoke): Uint8Array;
                toProtoMsg(message: _201.EventRevoke): _201.EventRevokeProtoMsg;
            };
            GenericAuthorization: {
                encode(message: _200.GenericAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GenericAuthorization;
                fromJSON(object: any): _200.GenericAuthorization;
                toJSON(message: _200.GenericAuthorization): unknown;
                fromPartial(object: Partial<_200.GenericAuthorization>): _200.GenericAuthorization;
                fromAmino(object: _200.GenericAuthorizationAmino): _200.GenericAuthorization;
                toAmino(message: _200.GenericAuthorization): _200.GenericAuthorizationAmino;
                fromAminoMsg(object: _200.GenericAuthorizationAminoMsg): _200.GenericAuthorization;
                toAminoMsg(message: _200.GenericAuthorization): _200.GenericAuthorizationAminoMsg;
                fromProtoMsg(message: _200.GenericAuthorizationProtoMsg): _200.GenericAuthorization;
                toProto(message: _200.GenericAuthorization): Uint8Array;
                toProtoMsg(message: _200.GenericAuthorization): _200.GenericAuthorizationProtoMsg;
            };
            Grant: {
                encode(message: _200.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Grant;
                fromJSON(object: any): _200.Grant;
                toJSON(message: _200.Grant): unknown;
                fromPartial(object: Partial<_200.Grant>): _200.Grant;
                fromAmino(object: _200.GrantAmino): _200.Grant;
                toAmino(message: _200.Grant): _200.GrantAmino;
                fromAminoMsg(object: _200.GrantAminoMsg): _200.Grant;
                toAminoMsg(message: _200.Grant): _200.GrantAminoMsg;
                fromProtoMsg(message: _200.GrantProtoMsg): _200.Grant;
                toProto(message: _200.Grant): Uint8Array;
                toProtoMsg(message: _200.Grant): _200.GrantProtoMsg;
            };
            GrantAuthorization: {
                encode(message: _200.GrantAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GrantAuthorization;
                fromJSON(object: any): _200.GrantAuthorization;
                toJSON(message: _200.GrantAuthorization): unknown;
                fromPartial(object: Partial<_200.GrantAuthorization>): _200.GrantAuthorization;
                fromAmino(object: _200.GrantAuthorizationAmino): _200.GrantAuthorization;
                toAmino(message: _200.GrantAuthorization): _200.GrantAuthorizationAmino;
                fromAminoMsg(object: _200.GrantAuthorizationAminoMsg): _200.GrantAuthorization;
                toAminoMsg(message: _200.GrantAuthorization): _200.GrantAuthorizationAminoMsg;
                fromProtoMsg(message: _200.GrantAuthorizationProtoMsg): _200.GrantAuthorization;
                toProto(message: _200.GrantAuthorization): Uint8Array;
                toProtoMsg(message: _200.GrantAuthorization): _200.GrantAuthorizationProtoMsg;
            };
            GrantQueueItem: {
                encode(message: _200.GrantQueueItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.GrantQueueItem;
                fromJSON(object: any): _200.GrantQueueItem;
                toJSON(message: _200.GrantQueueItem): unknown;
                fromPartial(object: Partial<_200.GrantQueueItem>): _200.GrantQueueItem;
                fromAmino(object: _200.GrantQueueItemAmino): _200.GrantQueueItem;
                toAmino(message: _200.GrantQueueItem): _200.GrantQueueItemAmino;
                fromAminoMsg(object: _200.GrantQueueItemAminoMsg): _200.GrantQueueItem;
                toAminoMsg(message: _200.GrantQueueItem): _200.GrantQueueItemAminoMsg;
                fromProtoMsg(message: _200.GrantQueueItemProtoMsg): _200.GrantQueueItem;
                toProto(message: _200.GrantQueueItem): Uint8Array;
                toProtoMsg(message: _200.GrantQueueItem): _200.GrantQueueItemProtoMsg;
            };
        };
    }
    namespace bank {
        const v1beta1: {
            MsgClientImpl: typeof _451.MsgClientImpl;
            QueryClientImpl: typeof _435.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _208.QueryBalanceRequest): Promise<_208.QueryBalanceResponse>;
                allBalances(request: _208.QueryAllBalancesRequest): Promise<_208.QueryAllBalancesResponse>;
                spendableBalances(request: _208.QuerySpendableBalancesRequest): Promise<_208.QuerySpendableBalancesResponse>;
                totalSupply(request?: _208.QueryTotalSupplyRequest): Promise<_208.QueryTotalSupplyResponse>;
                supplyOf(request: _208.QuerySupplyOfRequest): Promise<_208.QuerySupplyOfResponse>;
                params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
                denomMetadata(request: _208.QueryDenomMetadataRequest): Promise<_208.QueryDenomMetadataResponse>;
                denomsMetadata(request?: _208.QueryDenomsMetadataRequest): Promise<_208.QueryDenomsMetadataResponse>;
                denomOwners(request: _208.QueryDenomOwnersRequest): Promise<_208.QueryDenomOwnersResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _209.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    multiSend(value: _209.MsgMultiSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _209.MsgSend): {
                        typeUrl: string;
                        value: _209.MsgSend;
                    };
                    multiSend(value: _209.MsgMultiSend): {
                        typeUrl: string;
                        value: _209.MsgMultiSend;
                    };
                };
                toJSON: {
                    send(value: _209.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                    multiSend(value: _209.MsgMultiSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _209.MsgSend;
                    };
                    multiSend(value: any): {
                        typeUrl: string;
                        value: _209.MsgMultiSend;
                    };
                };
                fromPartial: {
                    send(value: _209.MsgSend): {
                        typeUrl: string;
                        value: _209.MsgSend;
                    };
                    multiSend(value: _209.MsgMultiSend): {
                        typeUrl: string;
                        value: _209.MsgMultiSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.bank.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _209.MsgSend) => _209.MsgSendAmino;
                    fromAmino: (object: _209.MsgSendAmino) => _209.MsgSend;
                };
                "/cosmos.bank.v1beta1.MsgMultiSend": {
                    aminoType: string;
                    toAmino: (message: _209.MsgMultiSend) => _209.MsgMultiSendAmino;
                    fromAmino: (object: _209.MsgMultiSendAmino) => _209.MsgMultiSend;
                };
            };
            MsgSend: {
                encode(message: _209.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSend;
                fromJSON(object: any): _209.MsgSend;
                toJSON(message: _209.MsgSend): unknown;
                fromPartial(object: Partial<_209.MsgSend>): _209.MsgSend;
                fromAmino(object: _209.MsgSendAmino): _209.MsgSend;
                toAmino(message: _209.MsgSend): _209.MsgSendAmino;
                fromAminoMsg(object: _209.MsgSendAminoMsg): _209.MsgSend;
                toAminoMsg(message: _209.MsgSend): _209.MsgSendAminoMsg;
                fromProtoMsg(message: _209.MsgSendProtoMsg): _209.MsgSend;
                toProto(message: _209.MsgSend): Uint8Array;
                toProtoMsg(message: _209.MsgSend): _209.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _209.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgSendResponse;
                fromJSON(_: any): _209.MsgSendResponse;
                toJSON(_: _209.MsgSendResponse): unknown;
                fromPartial(_: Partial<_209.MsgSendResponse>): _209.MsgSendResponse;
                fromAmino(_: _209.MsgSendResponseAmino): _209.MsgSendResponse;
                toAmino(_: _209.MsgSendResponse): _209.MsgSendResponseAmino;
                fromAminoMsg(object: _209.MsgSendResponseAminoMsg): _209.MsgSendResponse;
                toAminoMsg(message: _209.MsgSendResponse): _209.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _209.MsgSendResponseProtoMsg): _209.MsgSendResponse;
                toProto(message: _209.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _209.MsgSendResponse): _209.MsgSendResponseProtoMsg;
            };
            MsgMultiSend: {
                encode(message: _209.MsgMultiSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgMultiSend;
                fromJSON(object: any): _209.MsgMultiSend;
                toJSON(message: _209.MsgMultiSend): unknown;
                fromPartial(object: Partial<_209.MsgMultiSend>): _209.MsgMultiSend;
                fromAmino(object: _209.MsgMultiSendAmino): _209.MsgMultiSend;
                toAmino(message: _209.MsgMultiSend): _209.MsgMultiSendAmino;
                fromAminoMsg(object: _209.MsgMultiSendAminoMsg): _209.MsgMultiSend;
                toAminoMsg(message: _209.MsgMultiSend): _209.MsgMultiSendAminoMsg;
                fromProtoMsg(message: _209.MsgMultiSendProtoMsg): _209.MsgMultiSend;
                toProto(message: _209.MsgMultiSend): Uint8Array;
                toProtoMsg(message: _209.MsgMultiSend): _209.MsgMultiSendProtoMsg;
            };
            MsgMultiSendResponse: {
                encode(_: _209.MsgMultiSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _209.MsgMultiSendResponse;
                fromJSON(_: any): _209.MsgMultiSendResponse;
                toJSON(_: _209.MsgMultiSendResponse): unknown;
                fromPartial(_: Partial<_209.MsgMultiSendResponse>): _209.MsgMultiSendResponse;
                fromAmino(_: _209.MsgMultiSendResponseAmino): _209.MsgMultiSendResponse;
                toAmino(_: _209.MsgMultiSendResponse): _209.MsgMultiSendResponseAmino;
                fromAminoMsg(object: _209.MsgMultiSendResponseAminoMsg): _209.MsgMultiSendResponse;
                toAminoMsg(message: _209.MsgMultiSendResponse): _209.MsgMultiSendResponseAminoMsg;
                fromProtoMsg(message: _209.MsgMultiSendResponseProtoMsg): _209.MsgMultiSendResponse;
                toProto(message: _209.MsgMultiSendResponse): Uint8Array;
                toProtoMsg(message: _209.MsgMultiSendResponse): _209.MsgMultiSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _208.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryBalanceRequest;
                fromJSON(object: any): _208.QueryBalanceRequest;
                toJSON(message: _208.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_208.QueryBalanceRequest>): _208.QueryBalanceRequest;
                fromAmino(object: _208.QueryBalanceRequestAmino): _208.QueryBalanceRequest;
                toAmino(message: _208.QueryBalanceRequest): _208.QueryBalanceRequestAmino;
                fromAminoMsg(object: _208.QueryBalanceRequestAminoMsg): _208.QueryBalanceRequest;
                toAminoMsg(message: _208.QueryBalanceRequest): _208.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _208.QueryBalanceRequestProtoMsg): _208.QueryBalanceRequest;
                toProto(message: _208.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _208.QueryBalanceRequest): _208.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _208.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryBalanceResponse;
                fromJSON(object: any): _208.QueryBalanceResponse;
                toJSON(message: _208.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_208.QueryBalanceResponse>): _208.QueryBalanceResponse;
                fromAmino(object: _208.QueryBalanceResponseAmino): _208.QueryBalanceResponse;
                toAmino(message: _208.QueryBalanceResponse): _208.QueryBalanceResponseAmino;
                fromAminoMsg(object: _208.QueryBalanceResponseAminoMsg): _208.QueryBalanceResponse;
                toAminoMsg(message: _208.QueryBalanceResponse): _208.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _208.QueryBalanceResponseProtoMsg): _208.QueryBalanceResponse;
                toProto(message: _208.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _208.QueryBalanceResponse): _208.QueryBalanceResponseProtoMsg;
            };
            QueryAllBalancesRequest: {
                encode(message: _208.QueryAllBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryAllBalancesRequest;
                fromJSON(object: any): _208.QueryAllBalancesRequest;
                toJSON(message: _208.QueryAllBalancesRequest): unknown;
                fromPartial(object: Partial<_208.QueryAllBalancesRequest>): _208.QueryAllBalancesRequest;
                fromAmino(object: _208.QueryAllBalancesRequestAmino): _208.QueryAllBalancesRequest;
                toAmino(message: _208.QueryAllBalancesRequest): _208.QueryAllBalancesRequestAmino;
                fromAminoMsg(object: _208.QueryAllBalancesRequestAminoMsg): _208.QueryAllBalancesRequest;
                toAminoMsg(message: _208.QueryAllBalancesRequest): _208.QueryAllBalancesRequestAminoMsg;
                fromProtoMsg(message: _208.QueryAllBalancesRequestProtoMsg): _208.QueryAllBalancesRequest;
                toProto(message: _208.QueryAllBalancesRequest): Uint8Array;
                toProtoMsg(message: _208.QueryAllBalancesRequest): _208.QueryAllBalancesRequestProtoMsg;
            };
            QueryAllBalancesResponse: {
                encode(message: _208.QueryAllBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryAllBalancesResponse;
                fromJSON(object: any): _208.QueryAllBalancesResponse;
                toJSON(message: _208.QueryAllBalancesResponse): unknown;
                fromPartial(object: Partial<_208.QueryAllBalancesResponse>): _208.QueryAllBalancesResponse;
                fromAmino(object: _208.QueryAllBalancesResponseAmino): _208.QueryAllBalancesResponse;
                toAmino(message: _208.QueryAllBalancesResponse): _208.QueryAllBalancesResponseAmino;
                fromAminoMsg(object: _208.QueryAllBalancesResponseAminoMsg): _208.QueryAllBalancesResponse;
                toAminoMsg(message: _208.QueryAllBalancesResponse): _208.QueryAllBalancesResponseAminoMsg;
                fromProtoMsg(message: _208.QueryAllBalancesResponseProtoMsg): _208.QueryAllBalancesResponse;
                toProto(message: _208.QueryAllBalancesResponse): Uint8Array;
                toProtoMsg(message: _208.QueryAllBalancesResponse): _208.QueryAllBalancesResponseProtoMsg;
            };
            QuerySpendableBalancesRequest: {
                encode(message: _208.QuerySpendableBalancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QuerySpendableBalancesRequest;
                fromJSON(object: any): _208.QuerySpendableBalancesRequest;
                toJSON(message: _208.QuerySpendableBalancesRequest): unknown;
                fromPartial(object: Partial<_208.QuerySpendableBalancesRequest>): _208.QuerySpendableBalancesRequest;
                fromAmino(object: _208.QuerySpendableBalancesRequestAmino): _208.QuerySpendableBalancesRequest;
                toAmino(message: _208.QuerySpendableBalancesRequest): _208.QuerySpendableBalancesRequestAmino;
                fromAminoMsg(object: _208.QuerySpendableBalancesRequestAminoMsg): _208.QuerySpendableBalancesRequest;
                toAminoMsg(message: _208.QuerySpendableBalancesRequest): _208.QuerySpendableBalancesRequestAminoMsg;
                fromProtoMsg(message: _208.QuerySpendableBalancesRequestProtoMsg): _208.QuerySpendableBalancesRequest;
                toProto(message: _208.QuerySpendableBalancesRequest): Uint8Array;
                toProtoMsg(message: _208.QuerySpendableBalancesRequest): _208.QuerySpendableBalancesRequestProtoMsg;
            };
            QuerySpendableBalancesResponse: {
                encode(message: _208.QuerySpendableBalancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QuerySpendableBalancesResponse;
                fromJSON(object: any): _208.QuerySpendableBalancesResponse;
                toJSON(message: _208.QuerySpendableBalancesResponse): unknown;
                fromPartial(object: Partial<_208.QuerySpendableBalancesResponse>): _208.QuerySpendableBalancesResponse;
                fromAmino(object: _208.QuerySpendableBalancesResponseAmino): _208.QuerySpendableBalancesResponse;
                toAmino(message: _208.QuerySpendableBalancesResponse): _208.QuerySpendableBalancesResponseAmino;
                fromAminoMsg(object: _208.QuerySpendableBalancesResponseAminoMsg): _208.QuerySpendableBalancesResponse;
                toAminoMsg(message: _208.QuerySpendableBalancesResponse): _208.QuerySpendableBalancesResponseAminoMsg;
                fromProtoMsg(message: _208.QuerySpendableBalancesResponseProtoMsg): _208.QuerySpendableBalancesResponse;
                toProto(message: _208.QuerySpendableBalancesResponse): Uint8Array;
                toProtoMsg(message: _208.QuerySpendableBalancesResponse): _208.QuerySpendableBalancesResponseProtoMsg;
            };
            QueryTotalSupplyRequest: {
                encode(message: _208.QueryTotalSupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryTotalSupplyRequest;
                fromJSON(object: any): _208.QueryTotalSupplyRequest;
                toJSON(message: _208.QueryTotalSupplyRequest): unknown;
                fromPartial(object: Partial<_208.QueryTotalSupplyRequest>): _208.QueryTotalSupplyRequest;
                fromAmino(object: _208.QueryTotalSupplyRequestAmino): _208.QueryTotalSupplyRequest;
                toAmino(message: _208.QueryTotalSupplyRequest): _208.QueryTotalSupplyRequestAmino;
                fromAminoMsg(object: _208.QueryTotalSupplyRequestAminoMsg): _208.QueryTotalSupplyRequest;
                toAminoMsg(message: _208.QueryTotalSupplyRequest): _208.QueryTotalSupplyRequestAminoMsg;
                fromProtoMsg(message: _208.QueryTotalSupplyRequestProtoMsg): _208.QueryTotalSupplyRequest;
                toProto(message: _208.QueryTotalSupplyRequest): Uint8Array;
                toProtoMsg(message: _208.QueryTotalSupplyRequest): _208.QueryTotalSupplyRequestProtoMsg;
            };
            QueryTotalSupplyResponse: {
                encode(message: _208.QueryTotalSupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryTotalSupplyResponse;
                fromJSON(object: any): _208.QueryTotalSupplyResponse;
                toJSON(message: _208.QueryTotalSupplyResponse): unknown;
                fromPartial(object: Partial<_208.QueryTotalSupplyResponse>): _208.QueryTotalSupplyResponse;
                fromAmino(object: _208.QueryTotalSupplyResponseAmino): _208.QueryTotalSupplyResponse;
                toAmino(message: _208.QueryTotalSupplyResponse): _208.QueryTotalSupplyResponseAmino;
                fromAminoMsg(object: _208.QueryTotalSupplyResponseAminoMsg): _208.QueryTotalSupplyResponse;
                toAminoMsg(message: _208.QueryTotalSupplyResponse): _208.QueryTotalSupplyResponseAminoMsg;
                fromProtoMsg(message: _208.QueryTotalSupplyResponseProtoMsg): _208.QueryTotalSupplyResponse;
                toProto(message: _208.QueryTotalSupplyResponse): Uint8Array;
                toProtoMsg(message: _208.QueryTotalSupplyResponse): _208.QueryTotalSupplyResponseProtoMsg;
            };
            QuerySupplyOfRequest: {
                encode(message: _208.QuerySupplyOfRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QuerySupplyOfRequest;
                fromJSON(object: any): _208.QuerySupplyOfRequest;
                toJSON(message: _208.QuerySupplyOfRequest): unknown;
                fromPartial(object: Partial<_208.QuerySupplyOfRequest>): _208.QuerySupplyOfRequest;
                fromAmino(object: _208.QuerySupplyOfRequestAmino): _208.QuerySupplyOfRequest;
                toAmino(message: _208.QuerySupplyOfRequest): _208.QuerySupplyOfRequestAmino;
                fromAminoMsg(object: _208.QuerySupplyOfRequestAminoMsg): _208.QuerySupplyOfRequest;
                toAminoMsg(message: _208.QuerySupplyOfRequest): _208.QuerySupplyOfRequestAminoMsg;
                fromProtoMsg(message: _208.QuerySupplyOfRequestProtoMsg): _208.QuerySupplyOfRequest;
                toProto(message: _208.QuerySupplyOfRequest): Uint8Array;
                toProtoMsg(message: _208.QuerySupplyOfRequest): _208.QuerySupplyOfRequestProtoMsg;
            };
            QuerySupplyOfResponse: {
                encode(message: _208.QuerySupplyOfResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QuerySupplyOfResponse;
                fromJSON(object: any): _208.QuerySupplyOfResponse;
                toJSON(message: _208.QuerySupplyOfResponse): unknown;
                fromPartial(object: Partial<_208.QuerySupplyOfResponse>): _208.QuerySupplyOfResponse;
                fromAmino(object: _208.QuerySupplyOfResponseAmino): _208.QuerySupplyOfResponse;
                toAmino(message: _208.QuerySupplyOfResponse): _208.QuerySupplyOfResponseAmino;
                fromAminoMsg(object: _208.QuerySupplyOfResponseAminoMsg): _208.QuerySupplyOfResponse;
                toAminoMsg(message: _208.QuerySupplyOfResponse): _208.QuerySupplyOfResponseAminoMsg;
                fromProtoMsg(message: _208.QuerySupplyOfResponseProtoMsg): _208.QuerySupplyOfResponse;
                toProto(message: _208.QuerySupplyOfResponse): Uint8Array;
                toProtoMsg(message: _208.QuerySupplyOfResponse): _208.QuerySupplyOfResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _208.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryParamsRequest;
                fromJSON(_: any): _208.QueryParamsRequest;
                toJSON(_: _208.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_208.QueryParamsRequest>): _208.QueryParamsRequest;
                fromAmino(_: _208.QueryParamsRequestAmino): _208.QueryParamsRequest;
                toAmino(_: _208.QueryParamsRequest): _208.QueryParamsRequestAmino;
                fromAminoMsg(object: _208.QueryParamsRequestAminoMsg): _208.QueryParamsRequest;
                toAminoMsg(message: _208.QueryParamsRequest): _208.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _208.QueryParamsRequestProtoMsg): _208.QueryParamsRequest;
                toProto(message: _208.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _208.QueryParamsRequest): _208.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _208.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryParamsResponse;
                fromJSON(object: any): _208.QueryParamsResponse;
                toJSON(message: _208.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_208.QueryParamsResponse>): _208.QueryParamsResponse;
                fromAmino(object: _208.QueryParamsResponseAmino): _208.QueryParamsResponse;
                toAmino(message: _208.QueryParamsResponse): _208.QueryParamsResponseAmino;
                fromAminoMsg(object: _208.QueryParamsResponseAminoMsg): _208.QueryParamsResponse;
                toAminoMsg(message: _208.QueryParamsResponse): _208.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _208.QueryParamsResponseProtoMsg): _208.QueryParamsResponse;
                toProto(message: _208.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _208.QueryParamsResponse): _208.QueryParamsResponseProtoMsg;
            };
            QueryDenomsMetadataRequest: {
                encode(message: _208.QueryDenomsMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomsMetadataRequest;
                fromJSON(object: any): _208.QueryDenomsMetadataRequest;
                toJSON(message: _208.QueryDenomsMetadataRequest): unknown;
                fromPartial(object: Partial<_208.QueryDenomsMetadataRequest>): _208.QueryDenomsMetadataRequest;
                fromAmino(object: _208.QueryDenomsMetadataRequestAmino): _208.QueryDenomsMetadataRequest;
                toAmino(message: _208.QueryDenomsMetadataRequest): _208.QueryDenomsMetadataRequestAmino;
                fromAminoMsg(object: _208.QueryDenomsMetadataRequestAminoMsg): _208.QueryDenomsMetadataRequest;
                toAminoMsg(message: _208.QueryDenomsMetadataRequest): _208.QueryDenomsMetadataRequestAminoMsg;
                fromProtoMsg(message: _208.QueryDenomsMetadataRequestProtoMsg): _208.QueryDenomsMetadataRequest;
                toProto(message: _208.QueryDenomsMetadataRequest): Uint8Array;
                toProtoMsg(message: _208.QueryDenomsMetadataRequest): _208.QueryDenomsMetadataRequestProtoMsg;
            };
            QueryDenomsMetadataResponse: {
                encode(message: _208.QueryDenomsMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomsMetadataResponse;
                fromJSON(object: any): _208.QueryDenomsMetadataResponse;
                toJSON(message: _208.QueryDenomsMetadataResponse): unknown;
                fromPartial(object: Partial<_208.QueryDenomsMetadataResponse>): _208.QueryDenomsMetadataResponse;
                fromAmino(object: _208.QueryDenomsMetadataResponseAmino): _208.QueryDenomsMetadataResponse;
                toAmino(message: _208.QueryDenomsMetadataResponse): _208.QueryDenomsMetadataResponseAmino;
                fromAminoMsg(object: _208.QueryDenomsMetadataResponseAminoMsg): _208.QueryDenomsMetadataResponse;
                toAminoMsg(message: _208.QueryDenomsMetadataResponse): _208.QueryDenomsMetadataResponseAminoMsg;
                fromProtoMsg(message: _208.QueryDenomsMetadataResponseProtoMsg): _208.QueryDenomsMetadataResponse;
                toProto(message: _208.QueryDenomsMetadataResponse): Uint8Array;
                toProtoMsg(message: _208.QueryDenomsMetadataResponse): _208.QueryDenomsMetadataResponseProtoMsg;
            };
            QueryDenomMetadataRequest: {
                encode(message: _208.QueryDenomMetadataRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomMetadataRequest;
                fromJSON(object: any): _208.QueryDenomMetadataRequest;
                toJSON(message: _208.QueryDenomMetadataRequest): unknown;
                fromPartial(object: Partial<_208.QueryDenomMetadataRequest>): _208.QueryDenomMetadataRequest;
                fromAmino(object: _208.QueryDenomMetadataRequestAmino): _208.QueryDenomMetadataRequest;
                toAmino(message: _208.QueryDenomMetadataRequest): _208.QueryDenomMetadataRequestAmino;
                fromAminoMsg(object: _208.QueryDenomMetadataRequestAminoMsg): _208.QueryDenomMetadataRequest;
                toAminoMsg(message: _208.QueryDenomMetadataRequest): _208.QueryDenomMetadataRequestAminoMsg;
                fromProtoMsg(message: _208.QueryDenomMetadataRequestProtoMsg): _208.QueryDenomMetadataRequest;
                toProto(message: _208.QueryDenomMetadataRequest): Uint8Array;
                toProtoMsg(message: _208.QueryDenomMetadataRequest): _208.QueryDenomMetadataRequestProtoMsg;
            };
            QueryDenomMetadataResponse: {
                encode(message: _208.QueryDenomMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomMetadataResponse;
                fromJSON(object: any): _208.QueryDenomMetadataResponse;
                toJSON(message: _208.QueryDenomMetadataResponse): unknown;
                fromPartial(object: Partial<_208.QueryDenomMetadataResponse>): _208.QueryDenomMetadataResponse;
                fromAmino(object: _208.QueryDenomMetadataResponseAmino): _208.QueryDenomMetadataResponse;
                toAmino(message: _208.QueryDenomMetadataResponse): _208.QueryDenomMetadataResponseAmino;
                fromAminoMsg(object: _208.QueryDenomMetadataResponseAminoMsg): _208.QueryDenomMetadataResponse;
                toAminoMsg(message: _208.QueryDenomMetadataResponse): _208.QueryDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _208.QueryDenomMetadataResponseProtoMsg): _208.QueryDenomMetadataResponse;
                toProto(message: _208.QueryDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _208.QueryDenomMetadataResponse): _208.QueryDenomMetadataResponseProtoMsg;
            };
            QueryDenomOwnersRequest: {
                encode(message: _208.QueryDenomOwnersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomOwnersRequest;
                fromJSON(object: any): _208.QueryDenomOwnersRequest;
                toJSON(message: _208.QueryDenomOwnersRequest): unknown;
                fromPartial(object: Partial<_208.QueryDenomOwnersRequest>): _208.QueryDenomOwnersRequest;
                fromAmino(object: _208.QueryDenomOwnersRequestAmino): _208.QueryDenomOwnersRequest;
                toAmino(message: _208.QueryDenomOwnersRequest): _208.QueryDenomOwnersRequestAmino;
                fromAminoMsg(object: _208.QueryDenomOwnersRequestAminoMsg): _208.QueryDenomOwnersRequest;
                toAminoMsg(message: _208.QueryDenomOwnersRequest): _208.QueryDenomOwnersRequestAminoMsg;
                fromProtoMsg(message: _208.QueryDenomOwnersRequestProtoMsg): _208.QueryDenomOwnersRequest;
                toProto(message: _208.QueryDenomOwnersRequest): Uint8Array;
                toProtoMsg(message: _208.QueryDenomOwnersRequest): _208.QueryDenomOwnersRequestProtoMsg;
            };
            DenomOwner: {
                encode(message: _208.DenomOwner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.DenomOwner;
                fromJSON(object: any): _208.DenomOwner;
                toJSON(message: _208.DenomOwner): unknown;
                fromPartial(object: Partial<_208.DenomOwner>): _208.DenomOwner;
                fromAmino(object: _208.DenomOwnerAmino): _208.DenomOwner;
                toAmino(message: _208.DenomOwner): _208.DenomOwnerAmino;
                fromAminoMsg(object: _208.DenomOwnerAminoMsg): _208.DenomOwner;
                toAminoMsg(message: _208.DenomOwner): _208.DenomOwnerAminoMsg;
                fromProtoMsg(message: _208.DenomOwnerProtoMsg): _208.DenomOwner;
                toProto(message: _208.DenomOwner): Uint8Array;
                toProtoMsg(message: _208.DenomOwner): _208.DenomOwnerProtoMsg;
            };
            QueryDenomOwnersResponse: {
                encode(message: _208.QueryDenomOwnersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _208.QueryDenomOwnersResponse;
                fromJSON(object: any): _208.QueryDenomOwnersResponse;
                toJSON(message: _208.QueryDenomOwnersResponse): unknown;
                fromPartial(object: Partial<_208.QueryDenomOwnersResponse>): _208.QueryDenomOwnersResponse;
                fromAmino(object: _208.QueryDenomOwnersResponseAmino): _208.QueryDenomOwnersResponse;
                toAmino(message: _208.QueryDenomOwnersResponse): _208.QueryDenomOwnersResponseAmino;
                fromAminoMsg(object: _208.QueryDenomOwnersResponseAminoMsg): _208.QueryDenomOwnersResponse;
                toAminoMsg(message: _208.QueryDenomOwnersResponse): _208.QueryDenomOwnersResponseAminoMsg;
                fromProtoMsg(message: _208.QueryDenomOwnersResponseProtoMsg): _208.QueryDenomOwnersResponse;
                toProto(message: _208.QueryDenomOwnersResponse): Uint8Array;
                toProtoMsg(message: _208.QueryDenomOwnersResponse): _208.QueryDenomOwnersResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _207.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.GenesisState;
                fromJSON(object: any): _207.GenesisState;
                toJSON(message: _207.GenesisState): unknown;
                fromPartial(object: Partial<_207.GenesisState>): _207.GenesisState;
                fromAmino(object: _207.GenesisStateAmino): _207.GenesisState;
                toAmino(message: _207.GenesisState): _207.GenesisStateAmino;
                fromAminoMsg(object: _207.GenesisStateAminoMsg): _207.GenesisState;
                toAminoMsg(message: _207.GenesisState): _207.GenesisStateAminoMsg;
                fromProtoMsg(message: _207.GenesisStateProtoMsg): _207.GenesisState;
                toProto(message: _207.GenesisState): Uint8Array;
                toProtoMsg(message: _207.GenesisState): _207.GenesisStateProtoMsg;
            };
            Balance: {
                encode(message: _207.Balance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _207.Balance;
                fromJSON(object: any): _207.Balance;
                toJSON(message: _207.Balance): unknown;
                fromPartial(object: Partial<_207.Balance>): _207.Balance;
                fromAmino(object: _207.BalanceAmino): _207.Balance;
                toAmino(message: _207.Balance): _207.BalanceAmino;
                fromAminoMsg(object: _207.BalanceAminoMsg): _207.Balance;
                toAminoMsg(message: _207.Balance): _207.BalanceAminoMsg;
                fromProtoMsg(message: _207.BalanceProtoMsg): _207.Balance;
                toProto(message: _207.Balance): Uint8Array;
                toProtoMsg(message: _207.Balance): _207.BalanceProtoMsg;
            };
            Params: {
                encode(message: _206.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Params;
                fromJSON(object: any): _206.Params;
                toJSON(message: _206.Params): unknown;
                fromPartial(object: Partial<_206.Params>): _206.Params;
                fromAmino(object: _206.ParamsAmino): _206.Params;
                toAmino(message: _206.Params): _206.ParamsAmino;
                fromAminoMsg(object: _206.ParamsAminoMsg): _206.Params;
                toAminoMsg(message: _206.Params): _206.ParamsAminoMsg;
                fromProtoMsg(message: _206.ParamsProtoMsg): _206.Params;
                toProto(message: _206.Params): Uint8Array;
                toProtoMsg(message: _206.Params): _206.ParamsProtoMsg;
            };
            SendEnabled: {
                encode(message: _206.SendEnabled, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.SendEnabled;
                fromJSON(object: any): _206.SendEnabled;
                toJSON(message: _206.SendEnabled): unknown;
                fromPartial(object: Partial<_206.SendEnabled>): _206.SendEnabled;
                fromAmino(object: _206.SendEnabledAmino): _206.SendEnabled;
                toAmino(message: _206.SendEnabled): _206.SendEnabledAmino;
                fromAminoMsg(object: _206.SendEnabledAminoMsg): _206.SendEnabled;
                toAminoMsg(message: _206.SendEnabled): _206.SendEnabledAminoMsg;
                fromProtoMsg(message: _206.SendEnabledProtoMsg): _206.SendEnabled;
                toProto(message: _206.SendEnabled): Uint8Array;
                toProtoMsg(message: _206.SendEnabled): _206.SendEnabledProtoMsg;
            };
            Input: {
                encode(message: _206.Input, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Input;
                fromJSON(object: any): _206.Input;
                toJSON(message: _206.Input): unknown;
                fromPartial(object: Partial<_206.Input>): _206.Input;
                fromAmino(object: _206.InputAmino): _206.Input;
                toAmino(message: _206.Input): _206.InputAmino;
                fromAminoMsg(object: _206.InputAminoMsg): _206.Input;
                toAminoMsg(message: _206.Input): _206.InputAminoMsg;
                fromProtoMsg(message: _206.InputProtoMsg): _206.Input;
                toProto(message: _206.Input): Uint8Array;
                toProtoMsg(message: _206.Input): _206.InputProtoMsg;
            };
            Output: {
                encode(message: _206.Output, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Output;
                fromJSON(object: any): _206.Output;
                toJSON(message: _206.Output): unknown;
                fromPartial(object: Partial<_206.Output>): _206.Output;
                fromAmino(object: _206.OutputAmino): _206.Output;
                toAmino(message: _206.Output): _206.OutputAmino;
                fromAminoMsg(object: _206.OutputAminoMsg): _206.Output;
                toAminoMsg(message: _206.Output): _206.OutputAminoMsg;
                fromProtoMsg(message: _206.OutputProtoMsg): _206.Output;
                toProto(message: _206.Output): Uint8Array;
                toProtoMsg(message: _206.Output): _206.OutputProtoMsg;
            };
            Supply: {
                encode(message: _206.Supply, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.Supply;
                fromJSON(object: any): _206.Supply;
                toJSON(message: _206.Supply): unknown;
                fromPartial(object: Partial<_206.Supply>): _206.Supply;
                fromAmino(object: _206.SupplyAmino): _206.Supply;
                toAmino(message: _206.Supply): _206.SupplyAmino;
                fromAminoMsg(object: _206.SupplyAminoMsg): _206.Supply;
                toAminoMsg(message: _206.Supply): _206.SupplyAminoMsg;
                fromProtoMsg(message: _206.SupplyProtoMsg): _206.Supply;
                toProto(message: _206.Supply): Uint8Array;
                toProtoMsg(message: _206.Supply): _206.SupplyProtoMsg;
            };
            DenomUnit: {
                encode(message: _206.DenomUnit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _206.DenomUnit;
                fromJSON(object: any): _206.DenomUnit;
                toJSON(message: _206.DenomUnit): unknown;
                fromPartial(object: Partial<_206.DenomUnit>): _206.DenomUnit;
                fromAmino(object: _206.DenomUnitAmino): _206.DenomUnit;
                toAmino(message: _206.DenomUnit): _206.DenomUnitAmino;
                fromAminoMsg(object: _206.DenomUnitAminoMsg): _206.DenomUnit;
                toAminoMsg(message: _206.DenomUnit): _206.DenomUnitAminoMsg;
                fromProtoMsg(message: _206.DenomUnitProtoMsg): _206.DenomUnit;
                toProto(message: _206.DenomUnit): Uint8Array;
                toProtoMsg(message: _206.DenomUnit): _206.DenomUnitProtoMsg;
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
            SendAuthorization: {
                encode(message: _205.SendAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _205.SendAuthorization;
                fromJSON(object: any): _205.SendAuthorization;
                toJSON(message: _205.SendAuthorization): unknown;
                fromPartial(object: Partial<_205.SendAuthorization>): _205.SendAuthorization;
                fromAmino(object: _205.SendAuthorizationAmino): _205.SendAuthorization;
                toAmino(message: _205.SendAuthorization): _205.SendAuthorizationAmino;
                fromAminoMsg(object: _205.SendAuthorizationAminoMsg): _205.SendAuthorization;
                toAminoMsg(message: _205.SendAuthorization): _205.SendAuthorizationAminoMsg;
                fromProtoMsg(message: _205.SendAuthorizationProtoMsg): _205.SendAuthorization;
                toProto(message: _205.SendAuthorization): Uint8Array;
                toProtoMsg(message: _205.SendAuthorization): _205.SendAuthorizationProtoMsg;
            };
        };
    }
    namespace base {
        namespace abci {
            const v1beta1: {
                TxResponse: {
                    encode(message: _210.TxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TxResponse;
                    fromJSON(object: any): _210.TxResponse;
                    toJSON(message: _210.TxResponse): unknown;
                    fromPartial(object: Partial<_210.TxResponse>): _210.TxResponse;
                    fromAmino(object: _210.TxResponseAmino): _210.TxResponse;
                    toAmino(message: _210.TxResponse): _210.TxResponseAmino;
                    fromAminoMsg(object: _210.TxResponseAminoMsg): _210.TxResponse;
                    toAminoMsg(message: _210.TxResponse): _210.TxResponseAminoMsg;
                    fromProtoMsg(message: _210.TxResponseProtoMsg): _210.TxResponse;
                    toProto(message: _210.TxResponse): Uint8Array;
                    toProtoMsg(message: _210.TxResponse): _210.TxResponseProtoMsg;
                };
                ABCIMessageLog: {
                    encode(message: _210.ABCIMessageLog, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.ABCIMessageLog;
                    fromJSON(object: any): _210.ABCIMessageLog;
                    toJSON(message: _210.ABCIMessageLog): unknown;
                    fromPartial(object: Partial<_210.ABCIMessageLog>): _210.ABCIMessageLog;
                    fromAmino(object: _210.ABCIMessageLogAmino): _210.ABCIMessageLog;
                    toAmino(message: _210.ABCIMessageLog): _210.ABCIMessageLogAmino;
                    fromAminoMsg(object: _210.ABCIMessageLogAminoMsg): _210.ABCIMessageLog;
                    toAminoMsg(message: _210.ABCIMessageLog): _210.ABCIMessageLogAminoMsg;
                    fromProtoMsg(message: _210.ABCIMessageLogProtoMsg): _210.ABCIMessageLog;
                    toProto(message: _210.ABCIMessageLog): Uint8Array;
                    toProtoMsg(message: _210.ABCIMessageLog): _210.ABCIMessageLogProtoMsg;
                };
                StringEvent: {
                    encode(message: _210.StringEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.StringEvent;
                    fromJSON(object: any): _210.StringEvent;
                    toJSON(message: _210.StringEvent): unknown;
                    fromPartial(object: Partial<_210.StringEvent>): _210.StringEvent;
                    fromAmino(object: _210.StringEventAmino): _210.StringEvent;
                    toAmino(message: _210.StringEvent): _210.StringEventAmino;
                    fromAminoMsg(object: _210.StringEventAminoMsg): _210.StringEvent;
                    toAminoMsg(message: _210.StringEvent): _210.StringEventAminoMsg;
                    fromProtoMsg(message: _210.StringEventProtoMsg): _210.StringEvent;
                    toProto(message: _210.StringEvent): Uint8Array;
                    toProtoMsg(message: _210.StringEvent): _210.StringEventProtoMsg;
                };
                Attribute: {
                    encode(message: _210.Attribute, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Attribute;
                    fromJSON(object: any): _210.Attribute;
                    toJSON(message: _210.Attribute): unknown;
                    fromPartial(object: Partial<_210.Attribute>): _210.Attribute;
                    fromAmino(object: _210.AttributeAmino): _210.Attribute;
                    toAmino(message: _210.Attribute): _210.AttributeAmino;
                    fromAminoMsg(object: _210.AttributeAminoMsg): _210.Attribute;
                    toAminoMsg(message: _210.Attribute): _210.AttributeAminoMsg;
                    fromProtoMsg(message: _210.AttributeProtoMsg): _210.Attribute;
                    toProto(message: _210.Attribute): Uint8Array;
                    toProtoMsg(message: _210.Attribute): _210.AttributeProtoMsg;
                };
                GasInfo: {
                    encode(message: _210.GasInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.GasInfo;
                    fromJSON(object: any): _210.GasInfo;
                    toJSON(message: _210.GasInfo): unknown;
                    fromPartial(object: Partial<_210.GasInfo>): _210.GasInfo;
                    fromAmino(object: _210.GasInfoAmino): _210.GasInfo;
                    toAmino(message: _210.GasInfo): _210.GasInfoAmino;
                    fromAminoMsg(object: _210.GasInfoAminoMsg): _210.GasInfo;
                    toAminoMsg(message: _210.GasInfo): _210.GasInfoAminoMsg;
                    fromProtoMsg(message: _210.GasInfoProtoMsg): _210.GasInfo;
                    toProto(message: _210.GasInfo): Uint8Array;
                    toProtoMsg(message: _210.GasInfo): _210.GasInfoProtoMsg;
                };
                Result: {
                    encode(message: _210.Result, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.Result;
                    fromJSON(object: any): _210.Result;
                    toJSON(message: _210.Result): unknown;
                    fromPartial(object: Partial<_210.Result>): _210.Result;
                    fromAmino(object: _210.ResultAmino): _210.Result;
                    toAmino(message: _210.Result): _210.ResultAmino;
                    fromAminoMsg(object: _210.ResultAminoMsg): _210.Result;
                    toAminoMsg(message: _210.Result): _210.ResultAminoMsg;
                    fromProtoMsg(message: _210.ResultProtoMsg): _210.Result;
                    toProto(message: _210.Result): Uint8Array;
                    toProtoMsg(message: _210.Result): _210.ResultProtoMsg;
                };
                SimulationResponse: {
                    encode(message: _210.SimulationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.SimulationResponse;
                    fromJSON(object: any): _210.SimulationResponse;
                    toJSON(message: _210.SimulationResponse): unknown;
                    fromPartial(object: Partial<_210.SimulationResponse>): _210.SimulationResponse;
                    fromAmino(object: _210.SimulationResponseAmino): _210.SimulationResponse;
                    toAmino(message: _210.SimulationResponse): _210.SimulationResponseAmino;
                    fromAminoMsg(object: _210.SimulationResponseAminoMsg): _210.SimulationResponse;
                    toAminoMsg(message: _210.SimulationResponse): _210.SimulationResponseAminoMsg;
                    fromProtoMsg(message: _210.SimulationResponseProtoMsg): _210.SimulationResponse;
                    toProto(message: _210.SimulationResponse): Uint8Array;
                    toProtoMsg(message: _210.SimulationResponse): _210.SimulationResponseProtoMsg;
                };
                MsgData: {
                    encode(message: _210.MsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.MsgData;
                    fromJSON(object: any): _210.MsgData;
                    toJSON(message: _210.MsgData): unknown;
                    fromPartial(object: Partial<_210.MsgData>): _210.MsgData;
                    fromAmino(object: _210.MsgDataAmino): _210.MsgData;
                    toAmino(message: _210.MsgData): _210.MsgDataAmino;
                    fromAminoMsg(object: _210.MsgDataAminoMsg): _210.MsgData;
                    toAminoMsg(message: _210.MsgData): _210.MsgDataAminoMsg;
                    fromProtoMsg(message: _210.MsgDataProtoMsg): _210.MsgData;
                    toProto(message: _210.MsgData): Uint8Array;
                    toProtoMsg(message: _210.MsgData): _210.MsgDataProtoMsg;
                };
                TxMsgData: {
                    encode(message: _210.TxMsgData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.TxMsgData;
                    fromJSON(object: any): _210.TxMsgData;
                    toJSON(message: _210.TxMsgData): unknown;
                    fromPartial(object: Partial<_210.TxMsgData>): _210.TxMsgData;
                    fromAmino(object: _210.TxMsgDataAmino): _210.TxMsgData;
                    toAmino(message: _210.TxMsgData): _210.TxMsgDataAmino;
                    fromAminoMsg(object: _210.TxMsgDataAminoMsg): _210.TxMsgData;
                    toAminoMsg(message: _210.TxMsgData): _210.TxMsgDataAminoMsg;
                    fromProtoMsg(message: _210.TxMsgDataProtoMsg): _210.TxMsgData;
                    toProto(message: _210.TxMsgData): Uint8Array;
                    toProtoMsg(message: _210.TxMsgData): _210.TxMsgDataProtoMsg;
                };
                SearchTxsResult: {
                    encode(message: _210.SearchTxsResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _210.SearchTxsResult;
                    fromJSON(object: any): _210.SearchTxsResult;
                    toJSON(message: _210.SearchTxsResult): unknown;
                    fromPartial(object: Partial<_210.SearchTxsResult>): _210.SearchTxsResult;
                    fromAmino(object: _210.SearchTxsResultAmino): _210.SearchTxsResult;
                    toAmino(message: _210.SearchTxsResult): _210.SearchTxsResultAmino;
                    fromAminoMsg(object: _210.SearchTxsResultAminoMsg): _210.SearchTxsResult;
                    toAminoMsg(message: _210.SearchTxsResult): _210.SearchTxsResultAminoMsg;
                    fromProtoMsg(message: _210.SearchTxsResultProtoMsg): _210.SearchTxsResult;
                    toProto(message: _210.SearchTxsResult): Uint8Array;
                    toProtoMsg(message: _210.SearchTxsResult): _210.SearchTxsResultProtoMsg;
                };
            };
        }
        namespace kv {
            const v1beta1: {
                Pairs: {
                    encode(message: _211.Pairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Pairs;
                    fromJSON(object: any): _211.Pairs;
                    toJSON(message: _211.Pairs): unknown;
                    fromPartial(object: Partial<_211.Pairs>): _211.Pairs;
                    fromAmino(object: _211.PairsAmino): _211.Pairs;
                    toAmino(message: _211.Pairs): _211.PairsAmino;
                    fromAminoMsg(object: _211.PairsAminoMsg): _211.Pairs;
                    toAminoMsg(message: _211.Pairs): _211.PairsAminoMsg;
                    fromProtoMsg(message: _211.PairsProtoMsg): _211.Pairs;
                    toProto(message: _211.Pairs): Uint8Array;
                    toProtoMsg(message: _211.Pairs): _211.PairsProtoMsg;
                };
                Pair: {
                    encode(message: _211.Pair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _211.Pair;
                    fromJSON(object: any): _211.Pair;
                    toJSON(message: _211.Pair): unknown;
                    fromPartial(object: Partial<_211.Pair>): _211.Pair;
                    fromAmino(object: _211.PairAmino): _211.Pair;
                    toAmino(message: _211.Pair): _211.PairAmino;
                    fromAminoMsg(object: _211.PairAminoMsg): _211.Pair;
                    toAminoMsg(message: _211.Pair): _211.PairAminoMsg;
                    fromProtoMsg(message: _211.PairProtoMsg): _211.Pair;
                    toProto(message: _211.Pair): Uint8Array;
                    toProtoMsg(message: _211.Pair): _211.PairProtoMsg;
                };
            };
        }
        namespace query {
            const v1beta1: {
                PageRequest: {
                    encode(message: _212.PageRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.PageRequest;
                    fromJSON(object: any): _212.PageRequest;
                    toJSON(message: _212.PageRequest): unknown;
                    fromPartial(object: Partial<_212.PageRequest>): _212.PageRequest;
                    fromAmino(object: _212.PageRequestAmino): _212.PageRequest;
                    toAmino(message: _212.PageRequest): _212.PageRequestAmino;
                    fromAminoMsg(object: _212.PageRequestAminoMsg): _212.PageRequest;
                    toAminoMsg(message: _212.PageRequest): _212.PageRequestAminoMsg;
                    fromProtoMsg(message: _212.PageRequestProtoMsg): _212.PageRequest;
                    toProto(message: _212.PageRequest): Uint8Array;
                    toProtoMsg(message: _212.PageRequest): _212.PageRequestProtoMsg;
                };
                PageResponse: {
                    encode(message: _212.PageResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _212.PageResponse;
                    fromJSON(object: any): _212.PageResponse;
                    toJSON(message: _212.PageResponse): unknown;
                    fromPartial(object: Partial<_212.PageResponse>): _212.PageResponse;
                    fromAmino(object: _212.PageResponseAmino): _212.PageResponse;
                    toAmino(message: _212.PageResponse): _212.PageResponseAmino;
                    fromAminoMsg(object: _212.PageResponseAminoMsg): _212.PageResponse;
                    toAminoMsg(message: _212.PageResponse): _212.PageResponseAminoMsg;
                    fromProtoMsg(message: _212.PageResponseProtoMsg): _212.PageResponse;
                    toProto(message: _212.PageResponse): Uint8Array;
                    toProtoMsg(message: _212.PageResponse): _212.PageResponseProtoMsg;
                };
            };
        }
        namespace reflection {
            const v1beta1: {
                ListAllInterfacesRequest: {
                    encode(_: _213.ListAllInterfacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ListAllInterfacesRequest;
                    fromJSON(_: any): _213.ListAllInterfacesRequest;
                    toJSON(_: _213.ListAllInterfacesRequest): unknown;
                    fromPartial(_: Partial<_213.ListAllInterfacesRequest>): _213.ListAllInterfacesRequest;
                    fromAmino(_: _213.ListAllInterfacesRequestAmino): _213.ListAllInterfacesRequest;
                    toAmino(_: _213.ListAllInterfacesRequest): _213.ListAllInterfacesRequestAmino;
                    fromAminoMsg(object: _213.ListAllInterfacesRequestAminoMsg): _213.ListAllInterfacesRequest;
                    toAminoMsg(message: _213.ListAllInterfacesRequest): _213.ListAllInterfacesRequestAminoMsg;
                    fromProtoMsg(message: _213.ListAllInterfacesRequestProtoMsg): _213.ListAllInterfacesRequest;
                    toProto(message: _213.ListAllInterfacesRequest): Uint8Array;
                    toProtoMsg(message: _213.ListAllInterfacesRequest): _213.ListAllInterfacesRequestProtoMsg;
                };
                ListAllInterfacesResponse: {
                    encode(message: _213.ListAllInterfacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ListAllInterfacesResponse;
                    fromJSON(object: any): _213.ListAllInterfacesResponse;
                    toJSON(message: _213.ListAllInterfacesResponse): unknown;
                    fromPartial(object: Partial<_213.ListAllInterfacesResponse>): _213.ListAllInterfacesResponse;
                    fromAmino(object: _213.ListAllInterfacesResponseAmino): _213.ListAllInterfacesResponse;
                    toAmino(message: _213.ListAllInterfacesResponse): _213.ListAllInterfacesResponseAmino;
                    fromAminoMsg(object: _213.ListAllInterfacesResponseAminoMsg): _213.ListAllInterfacesResponse;
                    toAminoMsg(message: _213.ListAllInterfacesResponse): _213.ListAllInterfacesResponseAminoMsg;
                    fromProtoMsg(message: _213.ListAllInterfacesResponseProtoMsg): _213.ListAllInterfacesResponse;
                    toProto(message: _213.ListAllInterfacesResponse): Uint8Array;
                    toProtoMsg(message: _213.ListAllInterfacesResponse): _213.ListAllInterfacesResponseProtoMsg;
                };
                ListImplementationsRequest: {
                    encode(message: _213.ListImplementationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ListImplementationsRequest;
                    fromJSON(object: any): _213.ListImplementationsRequest;
                    toJSON(message: _213.ListImplementationsRequest): unknown;
                    fromPartial(object: Partial<_213.ListImplementationsRequest>): _213.ListImplementationsRequest;
                    fromAmino(object: _213.ListImplementationsRequestAmino): _213.ListImplementationsRequest;
                    toAmino(message: _213.ListImplementationsRequest): _213.ListImplementationsRequestAmino;
                    fromAminoMsg(object: _213.ListImplementationsRequestAminoMsg): _213.ListImplementationsRequest;
                    toAminoMsg(message: _213.ListImplementationsRequest): _213.ListImplementationsRequestAminoMsg;
                    fromProtoMsg(message: _213.ListImplementationsRequestProtoMsg): _213.ListImplementationsRequest;
                    toProto(message: _213.ListImplementationsRequest): Uint8Array;
                    toProtoMsg(message: _213.ListImplementationsRequest): _213.ListImplementationsRequestProtoMsg;
                };
                ListImplementationsResponse: {
                    encode(message: _213.ListImplementationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _213.ListImplementationsResponse;
                    fromJSON(object: any): _213.ListImplementationsResponse;
                    toJSON(message: _213.ListImplementationsResponse): unknown;
                    fromPartial(object: Partial<_213.ListImplementationsResponse>): _213.ListImplementationsResponse;
                    fromAmino(object: _213.ListImplementationsResponseAmino): _213.ListImplementationsResponse;
                    toAmino(message: _213.ListImplementationsResponse): _213.ListImplementationsResponseAmino;
                    fromAminoMsg(object: _213.ListImplementationsResponseAminoMsg): _213.ListImplementationsResponse;
                    toAminoMsg(message: _213.ListImplementationsResponse): _213.ListImplementationsResponseAminoMsg;
                    fromProtoMsg(message: _213.ListImplementationsResponseProtoMsg): _213.ListImplementationsResponse;
                    toProto(message: _213.ListImplementationsResponse): Uint8Array;
                    toProtoMsg(message: _213.ListImplementationsResponse): _213.ListImplementationsResponseProtoMsg;
                };
            };
            const v2alpha1: {
                AppDescriptor: {
                    encode(message: _214.AppDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AppDescriptor;
                    fromJSON(object: any): _214.AppDescriptor;
                    toJSON(message: _214.AppDescriptor): unknown;
                    fromPartial(object: Partial<_214.AppDescriptor>): _214.AppDescriptor;
                    fromAmino(object: _214.AppDescriptorAmino): _214.AppDescriptor;
                    toAmino(message: _214.AppDescriptor): _214.AppDescriptorAmino;
                    fromAminoMsg(object: _214.AppDescriptorAminoMsg): _214.AppDescriptor;
                    toAminoMsg(message: _214.AppDescriptor): _214.AppDescriptorAminoMsg;
                    fromProtoMsg(message: _214.AppDescriptorProtoMsg): _214.AppDescriptor;
                    toProto(message: _214.AppDescriptor): Uint8Array;
                    toProtoMsg(message: _214.AppDescriptor): _214.AppDescriptorProtoMsg;
                };
                TxDescriptor: {
                    encode(message: _214.TxDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.TxDescriptor;
                    fromJSON(object: any): _214.TxDescriptor;
                    toJSON(message: _214.TxDescriptor): unknown;
                    fromPartial(object: Partial<_214.TxDescriptor>): _214.TxDescriptor;
                    fromAmino(object: _214.TxDescriptorAmino): _214.TxDescriptor;
                    toAmino(message: _214.TxDescriptor): _214.TxDescriptorAmino;
                    fromAminoMsg(object: _214.TxDescriptorAminoMsg): _214.TxDescriptor;
                    toAminoMsg(message: _214.TxDescriptor): _214.TxDescriptorAminoMsg;
                    fromProtoMsg(message: _214.TxDescriptorProtoMsg): _214.TxDescriptor;
                    toProto(message: _214.TxDescriptor): Uint8Array;
                    toProtoMsg(message: _214.TxDescriptor): _214.TxDescriptorProtoMsg;
                };
                AuthnDescriptor: {
                    encode(message: _214.AuthnDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.AuthnDescriptor;
                    fromJSON(object: any): _214.AuthnDescriptor;
                    toJSON(message: _214.AuthnDescriptor): unknown;
                    fromPartial(object: Partial<_214.AuthnDescriptor>): _214.AuthnDescriptor;
                    fromAmino(object: _214.AuthnDescriptorAmino): _214.AuthnDescriptor;
                    toAmino(message: _214.AuthnDescriptor): _214.AuthnDescriptorAmino;
                    fromAminoMsg(object: _214.AuthnDescriptorAminoMsg): _214.AuthnDescriptor;
                    toAminoMsg(message: _214.AuthnDescriptor): _214.AuthnDescriptorAminoMsg;
                    fromProtoMsg(message: _214.AuthnDescriptorProtoMsg): _214.AuthnDescriptor;
                    toProto(message: _214.AuthnDescriptor): Uint8Array;
                    toProtoMsg(message: _214.AuthnDescriptor): _214.AuthnDescriptorProtoMsg;
                };
                SigningModeDescriptor: {
                    encode(message: _214.SigningModeDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.SigningModeDescriptor;
                    fromJSON(object: any): _214.SigningModeDescriptor;
                    toJSON(message: _214.SigningModeDescriptor): unknown;
                    fromPartial(object: Partial<_214.SigningModeDescriptor>): _214.SigningModeDescriptor;
                    fromAmino(object: _214.SigningModeDescriptorAmino): _214.SigningModeDescriptor;
                    toAmino(message: _214.SigningModeDescriptor): _214.SigningModeDescriptorAmino;
                    fromAminoMsg(object: _214.SigningModeDescriptorAminoMsg): _214.SigningModeDescriptor;
                    toAminoMsg(message: _214.SigningModeDescriptor): _214.SigningModeDescriptorAminoMsg;
                    fromProtoMsg(message: _214.SigningModeDescriptorProtoMsg): _214.SigningModeDescriptor;
                    toProto(message: _214.SigningModeDescriptor): Uint8Array;
                    toProtoMsg(message: _214.SigningModeDescriptor): _214.SigningModeDescriptorProtoMsg;
                };
                ChainDescriptor: {
                    encode(message: _214.ChainDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ChainDescriptor;
                    fromJSON(object: any): _214.ChainDescriptor;
                    toJSON(message: _214.ChainDescriptor): unknown;
                    fromPartial(object: Partial<_214.ChainDescriptor>): _214.ChainDescriptor;
                    fromAmino(object: _214.ChainDescriptorAmino): _214.ChainDescriptor;
                    toAmino(message: _214.ChainDescriptor): _214.ChainDescriptorAmino;
                    fromAminoMsg(object: _214.ChainDescriptorAminoMsg): _214.ChainDescriptor;
                    toAminoMsg(message: _214.ChainDescriptor): _214.ChainDescriptorAminoMsg;
                    fromProtoMsg(message: _214.ChainDescriptorProtoMsg): _214.ChainDescriptor;
                    toProto(message: _214.ChainDescriptor): Uint8Array;
                    toProtoMsg(message: _214.ChainDescriptor): _214.ChainDescriptorProtoMsg;
                };
                CodecDescriptor: {
                    encode(message: _214.CodecDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.CodecDescriptor;
                    fromJSON(object: any): _214.CodecDescriptor;
                    toJSON(message: _214.CodecDescriptor): unknown;
                    fromPartial(object: Partial<_214.CodecDescriptor>): _214.CodecDescriptor;
                    fromAmino(object: _214.CodecDescriptorAmino): _214.CodecDescriptor;
                    toAmino(message: _214.CodecDescriptor): _214.CodecDescriptorAmino;
                    fromAminoMsg(object: _214.CodecDescriptorAminoMsg): _214.CodecDescriptor;
                    toAminoMsg(message: _214.CodecDescriptor): _214.CodecDescriptorAminoMsg;
                    fromProtoMsg(message: _214.CodecDescriptorProtoMsg): _214.CodecDescriptor;
                    toProto(message: _214.CodecDescriptor): Uint8Array;
                    toProtoMsg(message: _214.CodecDescriptor): _214.CodecDescriptorProtoMsg;
                };
                InterfaceDescriptor: {
                    encode(message: _214.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.InterfaceDescriptor;
                    fromJSON(object: any): _214.InterfaceDescriptor;
                    toJSON(message: _214.InterfaceDescriptor): unknown;
                    fromPartial(object: Partial<_214.InterfaceDescriptor>): _214.InterfaceDescriptor;
                    fromAmino(object: _214.InterfaceDescriptorAmino): _214.InterfaceDescriptor;
                    toAmino(message: _214.InterfaceDescriptor): _214.InterfaceDescriptorAmino;
                    fromAminoMsg(object: _214.InterfaceDescriptorAminoMsg): _214.InterfaceDescriptor;
                    toAminoMsg(message: _214.InterfaceDescriptor): _214.InterfaceDescriptorAminoMsg;
                    fromProtoMsg(message: _214.InterfaceDescriptorProtoMsg): _214.InterfaceDescriptor;
                    toProto(message: _214.InterfaceDescriptor): Uint8Array;
                    toProtoMsg(message: _214.InterfaceDescriptor): _214.InterfaceDescriptorProtoMsg;
                };
                InterfaceImplementerDescriptor: {
                    encode(message: _214.InterfaceImplementerDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.InterfaceImplementerDescriptor;
                    fromJSON(object: any): _214.InterfaceImplementerDescriptor;
                    toJSON(message: _214.InterfaceImplementerDescriptor): unknown;
                    fromPartial(object: Partial<_214.InterfaceImplementerDescriptor>): _214.InterfaceImplementerDescriptor;
                    fromAmino(object: _214.InterfaceImplementerDescriptorAmino): _214.InterfaceImplementerDescriptor;
                    toAmino(message: _214.InterfaceImplementerDescriptor): _214.InterfaceImplementerDescriptorAmino;
                    fromAminoMsg(object: _214.InterfaceImplementerDescriptorAminoMsg): _214.InterfaceImplementerDescriptor;
                    toAminoMsg(message: _214.InterfaceImplementerDescriptor): _214.InterfaceImplementerDescriptorAminoMsg;
                    fromProtoMsg(message: _214.InterfaceImplementerDescriptorProtoMsg): _214.InterfaceImplementerDescriptor;
                    toProto(message: _214.InterfaceImplementerDescriptor): Uint8Array;
                    toProtoMsg(message: _214.InterfaceImplementerDescriptor): _214.InterfaceImplementerDescriptorProtoMsg;
                };
                InterfaceAcceptingMessageDescriptor: {
                    encode(message: _214.InterfaceAcceptingMessageDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.InterfaceAcceptingMessageDescriptor;
                    fromJSON(object: any): _214.InterfaceAcceptingMessageDescriptor;
                    toJSON(message: _214.InterfaceAcceptingMessageDescriptor): unknown;
                    fromPartial(object: Partial<_214.InterfaceAcceptingMessageDescriptor>): _214.InterfaceAcceptingMessageDescriptor;
                    fromAmino(object: _214.InterfaceAcceptingMessageDescriptorAmino): _214.InterfaceAcceptingMessageDescriptor;
                    toAmino(message: _214.InterfaceAcceptingMessageDescriptor): _214.InterfaceAcceptingMessageDescriptorAmino;
                    fromAminoMsg(object: _214.InterfaceAcceptingMessageDescriptorAminoMsg): _214.InterfaceAcceptingMessageDescriptor;
                    toAminoMsg(message: _214.InterfaceAcceptingMessageDescriptor): _214.InterfaceAcceptingMessageDescriptorAminoMsg;
                    fromProtoMsg(message: _214.InterfaceAcceptingMessageDescriptorProtoMsg): _214.InterfaceAcceptingMessageDescriptor;
                    toProto(message: _214.InterfaceAcceptingMessageDescriptor): Uint8Array;
                    toProtoMsg(message: _214.InterfaceAcceptingMessageDescriptor): _214.InterfaceAcceptingMessageDescriptorProtoMsg;
                };
                ConfigurationDescriptor: {
                    encode(message: _214.ConfigurationDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.ConfigurationDescriptor;
                    fromJSON(object: any): _214.ConfigurationDescriptor;
                    toJSON(message: _214.ConfigurationDescriptor): unknown;
                    fromPartial(object: Partial<_214.ConfigurationDescriptor>): _214.ConfigurationDescriptor;
                    fromAmino(object: _214.ConfigurationDescriptorAmino): _214.ConfigurationDescriptor;
                    toAmino(message: _214.ConfigurationDescriptor): _214.ConfigurationDescriptorAmino;
                    fromAminoMsg(object: _214.ConfigurationDescriptorAminoMsg): _214.ConfigurationDescriptor;
                    toAminoMsg(message: _214.ConfigurationDescriptor): _214.ConfigurationDescriptorAminoMsg;
                    fromProtoMsg(message: _214.ConfigurationDescriptorProtoMsg): _214.ConfigurationDescriptor;
                    toProto(message: _214.ConfigurationDescriptor): Uint8Array;
                    toProtoMsg(message: _214.ConfigurationDescriptor): _214.ConfigurationDescriptorProtoMsg;
                };
                MsgDescriptor: {
                    encode(message: _214.MsgDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.MsgDescriptor;
                    fromJSON(object: any): _214.MsgDescriptor;
                    toJSON(message: _214.MsgDescriptor): unknown;
                    fromPartial(object: Partial<_214.MsgDescriptor>): _214.MsgDescriptor;
                    fromAmino(object: _214.MsgDescriptorAmino): _214.MsgDescriptor;
                    toAmino(message: _214.MsgDescriptor): _214.MsgDescriptorAmino;
                    fromAminoMsg(object: _214.MsgDescriptorAminoMsg): _214.MsgDescriptor;
                    toAminoMsg(message: _214.MsgDescriptor): _214.MsgDescriptorAminoMsg;
                    fromProtoMsg(message: _214.MsgDescriptorProtoMsg): _214.MsgDescriptor;
                    toProto(message: _214.MsgDescriptor): Uint8Array;
                    toProtoMsg(message: _214.MsgDescriptor): _214.MsgDescriptorProtoMsg;
                };
                GetAuthnDescriptorRequest: {
                    encode(_: _214.GetAuthnDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetAuthnDescriptorRequest;
                    fromJSON(_: any): _214.GetAuthnDescriptorRequest;
                    toJSON(_: _214.GetAuthnDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetAuthnDescriptorRequest>): _214.GetAuthnDescriptorRequest;
                    fromAmino(_: _214.GetAuthnDescriptorRequestAmino): _214.GetAuthnDescriptorRequest;
                    toAmino(_: _214.GetAuthnDescriptorRequest): _214.GetAuthnDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetAuthnDescriptorRequestAminoMsg): _214.GetAuthnDescriptorRequest;
                    toAminoMsg(message: _214.GetAuthnDescriptorRequest): _214.GetAuthnDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetAuthnDescriptorRequestProtoMsg): _214.GetAuthnDescriptorRequest;
                    toProto(message: _214.GetAuthnDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetAuthnDescriptorRequest): _214.GetAuthnDescriptorRequestProtoMsg;
                };
                GetAuthnDescriptorResponse: {
                    encode(message: _214.GetAuthnDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetAuthnDescriptorResponse;
                    fromJSON(object: any): _214.GetAuthnDescriptorResponse;
                    toJSON(message: _214.GetAuthnDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetAuthnDescriptorResponse>): _214.GetAuthnDescriptorResponse;
                    fromAmino(object: _214.GetAuthnDescriptorResponseAmino): _214.GetAuthnDescriptorResponse;
                    toAmino(message: _214.GetAuthnDescriptorResponse): _214.GetAuthnDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetAuthnDescriptorResponseAminoMsg): _214.GetAuthnDescriptorResponse;
                    toAminoMsg(message: _214.GetAuthnDescriptorResponse): _214.GetAuthnDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetAuthnDescriptorResponseProtoMsg): _214.GetAuthnDescriptorResponse;
                    toProto(message: _214.GetAuthnDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetAuthnDescriptorResponse): _214.GetAuthnDescriptorResponseProtoMsg;
                };
                GetChainDescriptorRequest: {
                    encode(_: _214.GetChainDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetChainDescriptorRequest;
                    fromJSON(_: any): _214.GetChainDescriptorRequest;
                    toJSON(_: _214.GetChainDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetChainDescriptorRequest>): _214.GetChainDescriptorRequest;
                    fromAmino(_: _214.GetChainDescriptorRequestAmino): _214.GetChainDescriptorRequest;
                    toAmino(_: _214.GetChainDescriptorRequest): _214.GetChainDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetChainDescriptorRequestAminoMsg): _214.GetChainDescriptorRequest;
                    toAminoMsg(message: _214.GetChainDescriptorRequest): _214.GetChainDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetChainDescriptorRequestProtoMsg): _214.GetChainDescriptorRequest;
                    toProto(message: _214.GetChainDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetChainDescriptorRequest): _214.GetChainDescriptorRequestProtoMsg;
                };
                GetChainDescriptorResponse: {
                    encode(message: _214.GetChainDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetChainDescriptorResponse;
                    fromJSON(object: any): _214.GetChainDescriptorResponse;
                    toJSON(message: _214.GetChainDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetChainDescriptorResponse>): _214.GetChainDescriptorResponse;
                    fromAmino(object: _214.GetChainDescriptorResponseAmino): _214.GetChainDescriptorResponse;
                    toAmino(message: _214.GetChainDescriptorResponse): _214.GetChainDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetChainDescriptorResponseAminoMsg): _214.GetChainDescriptorResponse;
                    toAminoMsg(message: _214.GetChainDescriptorResponse): _214.GetChainDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetChainDescriptorResponseProtoMsg): _214.GetChainDescriptorResponse;
                    toProto(message: _214.GetChainDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetChainDescriptorResponse): _214.GetChainDescriptorResponseProtoMsg;
                };
                GetCodecDescriptorRequest: {
                    encode(_: _214.GetCodecDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetCodecDescriptorRequest;
                    fromJSON(_: any): _214.GetCodecDescriptorRequest;
                    toJSON(_: _214.GetCodecDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetCodecDescriptorRequest>): _214.GetCodecDescriptorRequest;
                    fromAmino(_: _214.GetCodecDescriptorRequestAmino): _214.GetCodecDescriptorRequest;
                    toAmino(_: _214.GetCodecDescriptorRequest): _214.GetCodecDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetCodecDescriptorRequestAminoMsg): _214.GetCodecDescriptorRequest;
                    toAminoMsg(message: _214.GetCodecDescriptorRequest): _214.GetCodecDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetCodecDescriptorRequestProtoMsg): _214.GetCodecDescriptorRequest;
                    toProto(message: _214.GetCodecDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetCodecDescriptorRequest): _214.GetCodecDescriptorRequestProtoMsg;
                };
                GetCodecDescriptorResponse: {
                    encode(message: _214.GetCodecDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetCodecDescriptorResponse;
                    fromJSON(object: any): _214.GetCodecDescriptorResponse;
                    toJSON(message: _214.GetCodecDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetCodecDescriptorResponse>): _214.GetCodecDescriptorResponse;
                    fromAmino(object: _214.GetCodecDescriptorResponseAmino): _214.GetCodecDescriptorResponse;
                    toAmino(message: _214.GetCodecDescriptorResponse): _214.GetCodecDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetCodecDescriptorResponseAminoMsg): _214.GetCodecDescriptorResponse;
                    toAminoMsg(message: _214.GetCodecDescriptorResponse): _214.GetCodecDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetCodecDescriptorResponseProtoMsg): _214.GetCodecDescriptorResponse;
                    toProto(message: _214.GetCodecDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetCodecDescriptorResponse): _214.GetCodecDescriptorResponseProtoMsg;
                };
                GetConfigurationDescriptorRequest: {
                    encode(_: _214.GetConfigurationDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetConfigurationDescriptorRequest;
                    fromJSON(_: any): _214.GetConfigurationDescriptorRequest;
                    toJSON(_: _214.GetConfigurationDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetConfigurationDescriptorRequest>): _214.GetConfigurationDescriptorRequest;
                    fromAmino(_: _214.GetConfigurationDescriptorRequestAmino): _214.GetConfigurationDescriptorRequest;
                    toAmino(_: _214.GetConfigurationDescriptorRequest): _214.GetConfigurationDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetConfigurationDescriptorRequestAminoMsg): _214.GetConfigurationDescriptorRequest;
                    toAminoMsg(message: _214.GetConfigurationDescriptorRequest): _214.GetConfigurationDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetConfigurationDescriptorRequestProtoMsg): _214.GetConfigurationDescriptorRequest;
                    toProto(message: _214.GetConfigurationDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetConfigurationDescriptorRequest): _214.GetConfigurationDescriptorRequestProtoMsg;
                };
                GetConfigurationDescriptorResponse: {
                    encode(message: _214.GetConfigurationDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetConfigurationDescriptorResponse;
                    fromJSON(object: any): _214.GetConfigurationDescriptorResponse;
                    toJSON(message: _214.GetConfigurationDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetConfigurationDescriptorResponse>): _214.GetConfigurationDescriptorResponse;
                    fromAmino(object: _214.GetConfigurationDescriptorResponseAmino): _214.GetConfigurationDescriptorResponse;
                    toAmino(message: _214.GetConfigurationDescriptorResponse): _214.GetConfigurationDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetConfigurationDescriptorResponseAminoMsg): _214.GetConfigurationDescriptorResponse;
                    toAminoMsg(message: _214.GetConfigurationDescriptorResponse): _214.GetConfigurationDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetConfigurationDescriptorResponseProtoMsg): _214.GetConfigurationDescriptorResponse;
                    toProto(message: _214.GetConfigurationDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetConfigurationDescriptorResponse): _214.GetConfigurationDescriptorResponseProtoMsg;
                };
                GetQueryServicesDescriptorRequest: {
                    encode(_: _214.GetQueryServicesDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetQueryServicesDescriptorRequest;
                    fromJSON(_: any): _214.GetQueryServicesDescriptorRequest;
                    toJSON(_: _214.GetQueryServicesDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetQueryServicesDescriptorRequest>): _214.GetQueryServicesDescriptorRequest;
                    fromAmino(_: _214.GetQueryServicesDescriptorRequestAmino): _214.GetQueryServicesDescriptorRequest;
                    toAmino(_: _214.GetQueryServicesDescriptorRequest): _214.GetQueryServicesDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetQueryServicesDescriptorRequestAminoMsg): _214.GetQueryServicesDescriptorRequest;
                    toAminoMsg(message: _214.GetQueryServicesDescriptorRequest): _214.GetQueryServicesDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetQueryServicesDescriptorRequestProtoMsg): _214.GetQueryServicesDescriptorRequest;
                    toProto(message: _214.GetQueryServicesDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetQueryServicesDescriptorRequest): _214.GetQueryServicesDescriptorRequestProtoMsg;
                };
                GetQueryServicesDescriptorResponse: {
                    encode(message: _214.GetQueryServicesDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetQueryServicesDescriptorResponse;
                    fromJSON(object: any): _214.GetQueryServicesDescriptorResponse;
                    toJSON(message: _214.GetQueryServicesDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetQueryServicesDescriptorResponse>): _214.GetQueryServicesDescriptorResponse;
                    fromAmino(object: _214.GetQueryServicesDescriptorResponseAmino): _214.GetQueryServicesDescriptorResponse;
                    toAmino(message: _214.GetQueryServicesDescriptorResponse): _214.GetQueryServicesDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetQueryServicesDescriptorResponseAminoMsg): _214.GetQueryServicesDescriptorResponse;
                    toAminoMsg(message: _214.GetQueryServicesDescriptorResponse): _214.GetQueryServicesDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetQueryServicesDescriptorResponseProtoMsg): _214.GetQueryServicesDescriptorResponse;
                    toProto(message: _214.GetQueryServicesDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetQueryServicesDescriptorResponse): _214.GetQueryServicesDescriptorResponseProtoMsg;
                };
                GetTxDescriptorRequest: {
                    encode(_: _214.GetTxDescriptorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetTxDescriptorRequest;
                    fromJSON(_: any): _214.GetTxDescriptorRequest;
                    toJSON(_: _214.GetTxDescriptorRequest): unknown;
                    fromPartial(_: Partial<_214.GetTxDescriptorRequest>): _214.GetTxDescriptorRequest;
                    fromAmino(_: _214.GetTxDescriptorRequestAmino): _214.GetTxDescriptorRequest;
                    toAmino(_: _214.GetTxDescriptorRequest): _214.GetTxDescriptorRequestAmino;
                    fromAminoMsg(object: _214.GetTxDescriptorRequestAminoMsg): _214.GetTxDescriptorRequest;
                    toAminoMsg(message: _214.GetTxDescriptorRequest): _214.GetTxDescriptorRequestAminoMsg;
                    fromProtoMsg(message: _214.GetTxDescriptorRequestProtoMsg): _214.GetTxDescriptorRequest;
                    toProto(message: _214.GetTxDescriptorRequest): Uint8Array;
                    toProtoMsg(message: _214.GetTxDescriptorRequest): _214.GetTxDescriptorRequestProtoMsg;
                };
                GetTxDescriptorResponse: {
                    encode(message: _214.GetTxDescriptorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.GetTxDescriptorResponse;
                    fromJSON(object: any): _214.GetTxDescriptorResponse;
                    toJSON(message: _214.GetTxDescriptorResponse): unknown;
                    fromPartial(object: Partial<_214.GetTxDescriptorResponse>): _214.GetTxDescriptorResponse;
                    fromAmino(object: _214.GetTxDescriptorResponseAmino): _214.GetTxDescriptorResponse;
                    toAmino(message: _214.GetTxDescriptorResponse): _214.GetTxDescriptorResponseAmino;
                    fromAminoMsg(object: _214.GetTxDescriptorResponseAminoMsg): _214.GetTxDescriptorResponse;
                    toAminoMsg(message: _214.GetTxDescriptorResponse): _214.GetTxDescriptorResponseAminoMsg;
                    fromProtoMsg(message: _214.GetTxDescriptorResponseProtoMsg): _214.GetTxDescriptorResponse;
                    toProto(message: _214.GetTxDescriptorResponse): Uint8Array;
                    toProtoMsg(message: _214.GetTxDescriptorResponse): _214.GetTxDescriptorResponseProtoMsg;
                };
                QueryServicesDescriptor: {
                    encode(message: _214.QueryServicesDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryServicesDescriptor;
                    fromJSON(object: any): _214.QueryServicesDescriptor;
                    toJSON(message: _214.QueryServicesDescriptor): unknown;
                    fromPartial(object: Partial<_214.QueryServicesDescriptor>): _214.QueryServicesDescriptor;
                    fromAmino(object: _214.QueryServicesDescriptorAmino): _214.QueryServicesDescriptor;
                    toAmino(message: _214.QueryServicesDescriptor): _214.QueryServicesDescriptorAmino;
                    fromAminoMsg(object: _214.QueryServicesDescriptorAminoMsg): _214.QueryServicesDescriptor;
                    toAminoMsg(message: _214.QueryServicesDescriptor): _214.QueryServicesDescriptorAminoMsg;
                    fromProtoMsg(message: _214.QueryServicesDescriptorProtoMsg): _214.QueryServicesDescriptor;
                    toProto(message: _214.QueryServicesDescriptor): Uint8Array;
                    toProtoMsg(message: _214.QueryServicesDescriptor): _214.QueryServicesDescriptorProtoMsg;
                };
                QueryServiceDescriptor: {
                    encode(message: _214.QueryServiceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryServiceDescriptor;
                    fromJSON(object: any): _214.QueryServiceDescriptor;
                    toJSON(message: _214.QueryServiceDescriptor): unknown;
                    fromPartial(object: Partial<_214.QueryServiceDescriptor>): _214.QueryServiceDescriptor;
                    fromAmino(object: _214.QueryServiceDescriptorAmino): _214.QueryServiceDescriptor;
                    toAmino(message: _214.QueryServiceDescriptor): _214.QueryServiceDescriptorAmino;
                    fromAminoMsg(object: _214.QueryServiceDescriptorAminoMsg): _214.QueryServiceDescriptor;
                    toAminoMsg(message: _214.QueryServiceDescriptor): _214.QueryServiceDescriptorAminoMsg;
                    fromProtoMsg(message: _214.QueryServiceDescriptorProtoMsg): _214.QueryServiceDescriptor;
                    toProto(message: _214.QueryServiceDescriptor): Uint8Array;
                    toProtoMsg(message: _214.QueryServiceDescriptor): _214.QueryServiceDescriptorProtoMsg;
                };
                QueryMethodDescriptor: {
                    encode(message: _214.QueryMethodDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _214.QueryMethodDescriptor;
                    fromJSON(object: any): _214.QueryMethodDescriptor;
                    toJSON(message: _214.QueryMethodDescriptor): unknown;
                    fromPartial(object: Partial<_214.QueryMethodDescriptor>): _214.QueryMethodDescriptor;
                    fromAmino(object: _214.QueryMethodDescriptorAmino): _214.QueryMethodDescriptor;
                    toAmino(message: _214.QueryMethodDescriptor): _214.QueryMethodDescriptorAmino;
                    fromAminoMsg(object: _214.QueryMethodDescriptorAminoMsg): _214.QueryMethodDescriptor;
                    toAminoMsg(message: _214.QueryMethodDescriptor): _214.QueryMethodDescriptorAminoMsg;
                    fromProtoMsg(message: _214.QueryMethodDescriptorProtoMsg): _214.QueryMethodDescriptor;
                    toProto(message: _214.QueryMethodDescriptor): Uint8Array;
                    toProtoMsg(message: _214.QueryMethodDescriptor): _214.QueryMethodDescriptorProtoMsg;
                };
            };
        }
        namespace snapshots {
            const v1beta1: {
                Snapshot: {
                    encode(message: _215.Snapshot, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Snapshot;
                    fromJSON(object: any): _215.Snapshot;
                    toJSON(message: _215.Snapshot): unknown;
                    fromPartial(object: Partial<_215.Snapshot>): _215.Snapshot;
                    fromAmino(object: _215.SnapshotAmino): _215.Snapshot;
                    toAmino(message: _215.Snapshot): _215.SnapshotAmino;
                    fromAminoMsg(object: _215.SnapshotAminoMsg): _215.Snapshot;
                    toAminoMsg(message: _215.Snapshot): _215.SnapshotAminoMsg;
                    fromProtoMsg(message: _215.SnapshotProtoMsg): _215.Snapshot;
                    toProto(message: _215.Snapshot): Uint8Array;
                    toProtoMsg(message: _215.Snapshot): _215.SnapshotProtoMsg;
                };
                Metadata: {
                    encode(message: _215.Metadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.Metadata;
                    fromJSON(object: any): _215.Metadata;
                    toJSON(message: _215.Metadata): unknown;
                    fromPartial(object: Partial<_215.Metadata>): _215.Metadata;
                    fromAmino(object: _215.MetadataAmino): _215.Metadata;
                    toAmino(message: _215.Metadata): _215.MetadataAmino;
                    fromAminoMsg(object: _215.MetadataAminoMsg): _215.Metadata;
                    toAminoMsg(message: _215.Metadata): _215.MetadataAminoMsg;
                    fromProtoMsg(message: _215.MetadataProtoMsg): _215.Metadata;
                    toProto(message: _215.Metadata): Uint8Array;
                    toProtoMsg(message: _215.Metadata): _215.MetadataProtoMsg;
                };
                SnapshotItem: {
                    encode(message: _215.SnapshotItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotItem;
                    fromJSON(object: any): _215.SnapshotItem;
                    toJSON(message: _215.SnapshotItem): unknown;
                    fromPartial(object: Partial<_215.SnapshotItem>): _215.SnapshotItem;
                    fromAmino(object: _215.SnapshotItemAmino): _215.SnapshotItem;
                    toAmino(message: _215.SnapshotItem): _215.SnapshotItemAmino;
                    fromAminoMsg(object: _215.SnapshotItemAminoMsg): _215.SnapshotItem;
                    toAminoMsg(message: _215.SnapshotItem): _215.SnapshotItemAminoMsg;
                    fromProtoMsg(message: _215.SnapshotItemProtoMsg): _215.SnapshotItem;
                    toProto(message: _215.SnapshotItem): Uint8Array;
                    toProtoMsg(message: _215.SnapshotItem): _215.SnapshotItemProtoMsg;
                };
                SnapshotStoreItem: {
                    encode(message: _215.SnapshotStoreItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotStoreItem;
                    fromJSON(object: any): _215.SnapshotStoreItem;
                    toJSON(message: _215.SnapshotStoreItem): unknown;
                    fromPartial(object: Partial<_215.SnapshotStoreItem>): _215.SnapshotStoreItem;
                    fromAmino(object: _215.SnapshotStoreItemAmino): _215.SnapshotStoreItem;
                    toAmino(message: _215.SnapshotStoreItem): _215.SnapshotStoreItemAmino;
                    fromAminoMsg(object: _215.SnapshotStoreItemAminoMsg): _215.SnapshotStoreItem;
                    toAminoMsg(message: _215.SnapshotStoreItem): _215.SnapshotStoreItemAminoMsg;
                    fromProtoMsg(message: _215.SnapshotStoreItemProtoMsg): _215.SnapshotStoreItem;
                    toProto(message: _215.SnapshotStoreItem): Uint8Array;
                    toProtoMsg(message: _215.SnapshotStoreItem): _215.SnapshotStoreItemProtoMsg;
                };
                SnapshotIAVLItem: {
                    encode(message: _215.SnapshotIAVLItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotIAVLItem;
                    fromJSON(object: any): _215.SnapshotIAVLItem;
                    toJSON(message: _215.SnapshotIAVLItem): unknown;
                    fromPartial(object: Partial<_215.SnapshotIAVLItem>): _215.SnapshotIAVLItem;
                    fromAmino(object: _215.SnapshotIAVLItemAmino): _215.SnapshotIAVLItem;
                    toAmino(message: _215.SnapshotIAVLItem): _215.SnapshotIAVLItemAmino;
                    fromAminoMsg(object: _215.SnapshotIAVLItemAminoMsg): _215.SnapshotIAVLItem;
                    toAminoMsg(message: _215.SnapshotIAVLItem): _215.SnapshotIAVLItemAminoMsg;
                    fromProtoMsg(message: _215.SnapshotIAVLItemProtoMsg): _215.SnapshotIAVLItem;
                    toProto(message: _215.SnapshotIAVLItem): Uint8Array;
                    toProtoMsg(message: _215.SnapshotIAVLItem): _215.SnapshotIAVLItemProtoMsg;
                };
                SnapshotExtensionMeta: {
                    encode(message: _215.SnapshotExtensionMeta, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotExtensionMeta;
                    fromJSON(object: any): _215.SnapshotExtensionMeta;
                    toJSON(message: _215.SnapshotExtensionMeta): unknown;
                    fromPartial(object: Partial<_215.SnapshotExtensionMeta>): _215.SnapshotExtensionMeta;
                    fromAmino(object: _215.SnapshotExtensionMetaAmino): _215.SnapshotExtensionMeta;
                    toAmino(message: _215.SnapshotExtensionMeta): _215.SnapshotExtensionMetaAmino;
                    fromAminoMsg(object: _215.SnapshotExtensionMetaAminoMsg): _215.SnapshotExtensionMeta;
                    toAminoMsg(message: _215.SnapshotExtensionMeta): _215.SnapshotExtensionMetaAminoMsg;
                    fromProtoMsg(message: _215.SnapshotExtensionMetaProtoMsg): _215.SnapshotExtensionMeta;
                    toProto(message: _215.SnapshotExtensionMeta): Uint8Array;
                    toProtoMsg(message: _215.SnapshotExtensionMeta): _215.SnapshotExtensionMetaProtoMsg;
                };
                SnapshotExtensionPayload: {
                    encode(message: _215.SnapshotExtensionPayload, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotExtensionPayload;
                    fromJSON(object: any): _215.SnapshotExtensionPayload;
                    toJSON(message: _215.SnapshotExtensionPayload): unknown;
                    fromPartial(object: Partial<_215.SnapshotExtensionPayload>): _215.SnapshotExtensionPayload;
                    fromAmino(object: _215.SnapshotExtensionPayloadAmino): _215.SnapshotExtensionPayload;
                    toAmino(message: _215.SnapshotExtensionPayload): _215.SnapshotExtensionPayloadAmino;
                    fromAminoMsg(object: _215.SnapshotExtensionPayloadAminoMsg): _215.SnapshotExtensionPayload;
                    toAminoMsg(message: _215.SnapshotExtensionPayload): _215.SnapshotExtensionPayloadAminoMsg;
                    fromProtoMsg(message: _215.SnapshotExtensionPayloadProtoMsg): _215.SnapshotExtensionPayload;
                    toProto(message: _215.SnapshotExtensionPayload): Uint8Array;
                    toProtoMsg(message: _215.SnapshotExtensionPayload): _215.SnapshotExtensionPayloadProtoMsg;
                };
                SnapshotKVItem: {
                    encode(message: _215.SnapshotKVItem, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotKVItem;
                    fromJSON(object: any): _215.SnapshotKVItem;
                    toJSON(message: _215.SnapshotKVItem): unknown;
                    fromPartial(object: Partial<_215.SnapshotKVItem>): _215.SnapshotKVItem;
                    fromAmino(object: _215.SnapshotKVItemAmino): _215.SnapshotKVItem;
                    toAmino(message: _215.SnapshotKVItem): _215.SnapshotKVItemAmino;
                    fromAminoMsg(object: _215.SnapshotKVItemAminoMsg): _215.SnapshotKVItem;
                    toAminoMsg(message: _215.SnapshotKVItem): _215.SnapshotKVItemAminoMsg;
                    fromProtoMsg(message: _215.SnapshotKVItemProtoMsg): _215.SnapshotKVItem;
                    toProto(message: _215.SnapshotKVItem): Uint8Array;
                    toProtoMsg(message: _215.SnapshotKVItem): _215.SnapshotKVItemProtoMsg;
                };
                SnapshotSchema: {
                    encode(message: _215.SnapshotSchema, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _215.SnapshotSchema;
                    fromJSON(object: any): _215.SnapshotSchema;
                    toJSON(message: _215.SnapshotSchema): unknown;
                    fromPartial(object: Partial<_215.SnapshotSchema>): _215.SnapshotSchema;
                    fromAmino(object: _215.SnapshotSchemaAmino): _215.SnapshotSchema;
                    toAmino(message: _215.SnapshotSchema): _215.SnapshotSchemaAmino;
                    fromAminoMsg(object: _215.SnapshotSchemaAminoMsg): _215.SnapshotSchema;
                    toAminoMsg(message: _215.SnapshotSchema): _215.SnapshotSchemaAminoMsg;
                    fromProtoMsg(message: _215.SnapshotSchemaProtoMsg): _215.SnapshotSchema;
                    toProto(message: _215.SnapshotSchema): Uint8Array;
                    toProtoMsg(message: _215.SnapshotSchema): _215.SnapshotSchemaProtoMsg;
                };
            };
        }
        namespace store {
            const v1beta1: {
                StoreKVPair: {
                    encode(message: _217.StoreKVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _217.StoreKVPair;
                    fromJSON(object: any): _217.StoreKVPair;
                    toJSON(message: _217.StoreKVPair): unknown;
                    fromPartial(object: Partial<_217.StoreKVPair>): _217.StoreKVPair;
                    fromAmino(object: _217.StoreKVPairAmino): _217.StoreKVPair;
                    toAmino(message: _217.StoreKVPair): _217.StoreKVPairAmino;
                    fromAminoMsg(object: _217.StoreKVPairAminoMsg): _217.StoreKVPair;
                    toAminoMsg(message: _217.StoreKVPair): _217.StoreKVPairAminoMsg;
                    fromProtoMsg(message: _217.StoreKVPairProtoMsg): _217.StoreKVPair;
                    toProto(message: _217.StoreKVPair): Uint8Array;
                    toProtoMsg(message: _217.StoreKVPair): _217.StoreKVPairProtoMsg;
                };
                CommitInfo: {
                    encode(message: _216.CommitInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.CommitInfo;
                    fromJSON(object: any): _216.CommitInfo;
                    toJSON(message: _216.CommitInfo): unknown;
                    fromPartial(object: Partial<_216.CommitInfo>): _216.CommitInfo;
                    fromAmino(object: _216.CommitInfoAmino): _216.CommitInfo;
                    toAmino(message: _216.CommitInfo): _216.CommitInfoAmino;
                    fromAminoMsg(object: _216.CommitInfoAminoMsg): _216.CommitInfo;
                    toAminoMsg(message: _216.CommitInfo): _216.CommitInfoAminoMsg;
                    fromProtoMsg(message: _216.CommitInfoProtoMsg): _216.CommitInfo;
                    toProto(message: _216.CommitInfo): Uint8Array;
                    toProtoMsg(message: _216.CommitInfo): _216.CommitInfoProtoMsg;
                };
                StoreInfo: {
                    encode(message: _216.StoreInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.StoreInfo;
                    fromJSON(object: any): _216.StoreInfo;
                    toJSON(message: _216.StoreInfo): unknown;
                    fromPartial(object: Partial<_216.StoreInfo>): _216.StoreInfo;
                    fromAmino(object: _216.StoreInfoAmino): _216.StoreInfo;
                    toAmino(message: _216.StoreInfo): _216.StoreInfoAmino;
                    fromAminoMsg(object: _216.StoreInfoAminoMsg): _216.StoreInfo;
                    toAminoMsg(message: _216.StoreInfo): _216.StoreInfoAminoMsg;
                    fromProtoMsg(message: _216.StoreInfoProtoMsg): _216.StoreInfo;
                    toProto(message: _216.StoreInfo): Uint8Array;
                    toProtoMsg(message: _216.StoreInfo): _216.StoreInfoProtoMsg;
                };
                CommitID: {
                    encode(message: _216.CommitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _216.CommitID;
                    fromJSON(object: any): _216.CommitID;
                    toJSON(message: _216.CommitID): unknown;
                    fromPartial(object: Partial<_216.CommitID>): _216.CommitID;
                    fromAmino(object: _216.CommitIDAmino): _216.CommitID;
                    toAmino(message: _216.CommitID): _216.CommitIDAmino;
                    fromAminoMsg(object: _216.CommitIDAminoMsg): _216.CommitID;
                    toAminoMsg(message: _216.CommitID): _216.CommitIDAminoMsg;
                    fromProtoMsg(message: _216.CommitIDProtoMsg): _216.CommitID;
                    toProto(message: _216.CommitID): Uint8Array;
                    toProtoMsg(message: _216.CommitID): _216.CommitIDProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1beta1: {
                ServiceClientImpl: typeof _436.ServiceClientImpl;
                createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                    getNodeInfo(request?: _218.GetNodeInfoRequest): Promise<_218.GetNodeInfoResponse>;
                    getSyncing(request?: _218.GetSyncingRequest): Promise<_218.GetSyncingResponse>;
                    getLatestBlock(request?: _218.GetLatestBlockRequest): Promise<_218.GetLatestBlockResponse>;
                    getBlockByHeight(request: _218.GetBlockByHeightRequest): Promise<_218.GetBlockByHeightResponse>;
                    getLatestValidatorSet(request?: _218.GetLatestValidatorSetRequest): Promise<_218.GetLatestValidatorSetResponse>;
                    getValidatorSetByHeight(request: _218.GetValidatorSetByHeightRequest): Promise<_218.GetValidatorSetByHeightResponse>;
                };
                GetValidatorSetByHeightRequest: {
                    encode(message: _218.GetValidatorSetByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetValidatorSetByHeightRequest;
                    fromJSON(object: any): _218.GetValidatorSetByHeightRequest;
                    toJSON(message: _218.GetValidatorSetByHeightRequest): unknown;
                    fromPartial(object: Partial<_218.GetValidatorSetByHeightRequest>): _218.GetValidatorSetByHeightRequest;
                    fromAmino(object: _218.GetValidatorSetByHeightRequestAmino): _218.GetValidatorSetByHeightRequest;
                    toAmino(message: _218.GetValidatorSetByHeightRequest): _218.GetValidatorSetByHeightRequestAmino;
                    fromAminoMsg(object: _218.GetValidatorSetByHeightRequestAminoMsg): _218.GetValidatorSetByHeightRequest;
                    toAminoMsg(message: _218.GetValidatorSetByHeightRequest): _218.GetValidatorSetByHeightRequestAminoMsg;
                    fromProtoMsg(message: _218.GetValidatorSetByHeightRequestProtoMsg): _218.GetValidatorSetByHeightRequest;
                    toProto(message: _218.GetValidatorSetByHeightRequest): Uint8Array;
                    toProtoMsg(message: _218.GetValidatorSetByHeightRequest): _218.GetValidatorSetByHeightRequestProtoMsg;
                };
                GetValidatorSetByHeightResponse: {
                    encode(message: _218.GetValidatorSetByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetValidatorSetByHeightResponse;
                    fromJSON(object: any): _218.GetValidatorSetByHeightResponse;
                    toJSON(message: _218.GetValidatorSetByHeightResponse): unknown;
                    fromPartial(object: Partial<_218.GetValidatorSetByHeightResponse>): _218.GetValidatorSetByHeightResponse;
                    fromAmino(object: _218.GetValidatorSetByHeightResponseAmino): _218.GetValidatorSetByHeightResponse;
                    toAmino(message: _218.GetValidatorSetByHeightResponse): _218.GetValidatorSetByHeightResponseAmino;
                    fromAminoMsg(object: _218.GetValidatorSetByHeightResponseAminoMsg): _218.GetValidatorSetByHeightResponse;
                    toAminoMsg(message: _218.GetValidatorSetByHeightResponse): _218.GetValidatorSetByHeightResponseAminoMsg;
                    fromProtoMsg(message: _218.GetValidatorSetByHeightResponseProtoMsg): _218.GetValidatorSetByHeightResponse;
                    toProto(message: _218.GetValidatorSetByHeightResponse): Uint8Array;
                    toProtoMsg(message: _218.GetValidatorSetByHeightResponse): _218.GetValidatorSetByHeightResponseProtoMsg;
                };
                GetLatestValidatorSetRequest: {
                    encode(message: _218.GetLatestValidatorSetRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetLatestValidatorSetRequest;
                    fromJSON(object: any): _218.GetLatestValidatorSetRequest;
                    toJSON(message: _218.GetLatestValidatorSetRequest): unknown;
                    fromPartial(object: Partial<_218.GetLatestValidatorSetRequest>): _218.GetLatestValidatorSetRequest;
                    fromAmino(object: _218.GetLatestValidatorSetRequestAmino): _218.GetLatestValidatorSetRequest;
                    toAmino(message: _218.GetLatestValidatorSetRequest): _218.GetLatestValidatorSetRequestAmino;
                    fromAminoMsg(object: _218.GetLatestValidatorSetRequestAminoMsg): _218.GetLatestValidatorSetRequest;
                    toAminoMsg(message: _218.GetLatestValidatorSetRequest): _218.GetLatestValidatorSetRequestAminoMsg;
                    fromProtoMsg(message: _218.GetLatestValidatorSetRequestProtoMsg): _218.GetLatestValidatorSetRequest;
                    toProto(message: _218.GetLatestValidatorSetRequest): Uint8Array;
                    toProtoMsg(message: _218.GetLatestValidatorSetRequest): _218.GetLatestValidatorSetRequestProtoMsg;
                };
                GetLatestValidatorSetResponse: {
                    encode(message: _218.GetLatestValidatorSetResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetLatestValidatorSetResponse;
                    fromJSON(object: any): _218.GetLatestValidatorSetResponse;
                    toJSON(message: _218.GetLatestValidatorSetResponse): unknown;
                    fromPartial(object: Partial<_218.GetLatestValidatorSetResponse>): _218.GetLatestValidatorSetResponse;
                    fromAmino(object: _218.GetLatestValidatorSetResponseAmino): _218.GetLatestValidatorSetResponse;
                    toAmino(message: _218.GetLatestValidatorSetResponse): _218.GetLatestValidatorSetResponseAmino;
                    fromAminoMsg(object: _218.GetLatestValidatorSetResponseAminoMsg): _218.GetLatestValidatorSetResponse;
                    toAminoMsg(message: _218.GetLatestValidatorSetResponse): _218.GetLatestValidatorSetResponseAminoMsg;
                    fromProtoMsg(message: _218.GetLatestValidatorSetResponseProtoMsg): _218.GetLatestValidatorSetResponse;
                    toProto(message: _218.GetLatestValidatorSetResponse): Uint8Array;
                    toProtoMsg(message: _218.GetLatestValidatorSetResponse): _218.GetLatestValidatorSetResponseProtoMsg;
                };
                Validator: {
                    encode(message: _218.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Validator;
                    fromJSON(object: any): _218.Validator;
                    toJSON(message: _218.Validator): unknown;
                    fromPartial(object: Partial<_218.Validator>): _218.Validator;
                    fromAmino(object: _218.ValidatorAmino): _218.Validator;
                    toAmino(message: _218.Validator): _218.ValidatorAmino;
                    fromAminoMsg(object: _218.ValidatorAminoMsg): _218.Validator;
                    toAminoMsg(message: _218.Validator): _218.ValidatorAminoMsg;
                    fromProtoMsg(message: _218.ValidatorProtoMsg): _218.Validator;
                    toProto(message: _218.Validator): Uint8Array;
                    toProtoMsg(message: _218.Validator): _218.ValidatorProtoMsg;
                };
                GetBlockByHeightRequest: {
                    encode(message: _218.GetBlockByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetBlockByHeightRequest;
                    fromJSON(object: any): _218.GetBlockByHeightRequest;
                    toJSON(message: _218.GetBlockByHeightRequest): unknown;
                    fromPartial(object: Partial<_218.GetBlockByHeightRequest>): _218.GetBlockByHeightRequest;
                    fromAmino(object: _218.GetBlockByHeightRequestAmino): _218.GetBlockByHeightRequest;
                    toAmino(message: _218.GetBlockByHeightRequest): _218.GetBlockByHeightRequestAmino;
                    fromAminoMsg(object: _218.GetBlockByHeightRequestAminoMsg): _218.GetBlockByHeightRequest;
                    toAminoMsg(message: _218.GetBlockByHeightRequest): _218.GetBlockByHeightRequestAminoMsg;
                    fromProtoMsg(message: _218.GetBlockByHeightRequestProtoMsg): _218.GetBlockByHeightRequest;
                    toProto(message: _218.GetBlockByHeightRequest): Uint8Array;
                    toProtoMsg(message: _218.GetBlockByHeightRequest): _218.GetBlockByHeightRequestProtoMsg;
                };
                GetBlockByHeightResponse: {
                    encode(message: _218.GetBlockByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetBlockByHeightResponse;
                    fromJSON(object: any): _218.GetBlockByHeightResponse;
                    toJSON(message: _218.GetBlockByHeightResponse): unknown;
                    fromPartial(object: Partial<_218.GetBlockByHeightResponse>): _218.GetBlockByHeightResponse;
                    fromAmino(object: _218.GetBlockByHeightResponseAmino): _218.GetBlockByHeightResponse;
                    toAmino(message: _218.GetBlockByHeightResponse): _218.GetBlockByHeightResponseAmino;
                    fromAminoMsg(object: _218.GetBlockByHeightResponseAminoMsg): _218.GetBlockByHeightResponse;
                    toAminoMsg(message: _218.GetBlockByHeightResponse): _218.GetBlockByHeightResponseAminoMsg;
                    fromProtoMsg(message: _218.GetBlockByHeightResponseProtoMsg): _218.GetBlockByHeightResponse;
                    toProto(message: _218.GetBlockByHeightResponse): Uint8Array;
                    toProtoMsg(message: _218.GetBlockByHeightResponse): _218.GetBlockByHeightResponseProtoMsg;
                };
                GetLatestBlockRequest: {
                    encode(_: _218.GetLatestBlockRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetLatestBlockRequest;
                    fromJSON(_: any): _218.GetLatestBlockRequest;
                    toJSON(_: _218.GetLatestBlockRequest): unknown;
                    fromPartial(_: Partial<_218.GetLatestBlockRequest>): _218.GetLatestBlockRequest;
                    fromAmino(_: _218.GetLatestBlockRequestAmino): _218.GetLatestBlockRequest;
                    toAmino(_: _218.GetLatestBlockRequest): _218.GetLatestBlockRequestAmino;
                    fromAminoMsg(object: _218.GetLatestBlockRequestAminoMsg): _218.GetLatestBlockRequest;
                    toAminoMsg(message: _218.GetLatestBlockRequest): _218.GetLatestBlockRequestAminoMsg;
                    fromProtoMsg(message: _218.GetLatestBlockRequestProtoMsg): _218.GetLatestBlockRequest;
                    toProto(message: _218.GetLatestBlockRequest): Uint8Array;
                    toProtoMsg(message: _218.GetLatestBlockRequest): _218.GetLatestBlockRequestProtoMsg;
                };
                GetLatestBlockResponse: {
                    encode(message: _218.GetLatestBlockResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetLatestBlockResponse;
                    fromJSON(object: any): _218.GetLatestBlockResponse;
                    toJSON(message: _218.GetLatestBlockResponse): unknown;
                    fromPartial(object: Partial<_218.GetLatestBlockResponse>): _218.GetLatestBlockResponse;
                    fromAmino(object: _218.GetLatestBlockResponseAmino): _218.GetLatestBlockResponse;
                    toAmino(message: _218.GetLatestBlockResponse): _218.GetLatestBlockResponseAmino;
                    fromAminoMsg(object: _218.GetLatestBlockResponseAminoMsg): _218.GetLatestBlockResponse;
                    toAminoMsg(message: _218.GetLatestBlockResponse): _218.GetLatestBlockResponseAminoMsg;
                    fromProtoMsg(message: _218.GetLatestBlockResponseProtoMsg): _218.GetLatestBlockResponse;
                    toProto(message: _218.GetLatestBlockResponse): Uint8Array;
                    toProtoMsg(message: _218.GetLatestBlockResponse): _218.GetLatestBlockResponseProtoMsg;
                };
                GetSyncingRequest: {
                    encode(_: _218.GetSyncingRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetSyncingRequest;
                    fromJSON(_: any): _218.GetSyncingRequest;
                    toJSON(_: _218.GetSyncingRequest): unknown;
                    fromPartial(_: Partial<_218.GetSyncingRequest>): _218.GetSyncingRequest;
                    fromAmino(_: _218.GetSyncingRequestAmino): _218.GetSyncingRequest;
                    toAmino(_: _218.GetSyncingRequest): _218.GetSyncingRequestAmino;
                    fromAminoMsg(object: _218.GetSyncingRequestAminoMsg): _218.GetSyncingRequest;
                    toAminoMsg(message: _218.GetSyncingRequest): _218.GetSyncingRequestAminoMsg;
                    fromProtoMsg(message: _218.GetSyncingRequestProtoMsg): _218.GetSyncingRequest;
                    toProto(message: _218.GetSyncingRequest): Uint8Array;
                    toProtoMsg(message: _218.GetSyncingRequest): _218.GetSyncingRequestProtoMsg;
                };
                GetSyncingResponse: {
                    encode(message: _218.GetSyncingResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetSyncingResponse;
                    fromJSON(object: any): _218.GetSyncingResponse;
                    toJSON(message: _218.GetSyncingResponse): unknown;
                    fromPartial(object: Partial<_218.GetSyncingResponse>): _218.GetSyncingResponse;
                    fromAmino(object: _218.GetSyncingResponseAmino): _218.GetSyncingResponse;
                    toAmino(message: _218.GetSyncingResponse): _218.GetSyncingResponseAmino;
                    fromAminoMsg(object: _218.GetSyncingResponseAminoMsg): _218.GetSyncingResponse;
                    toAminoMsg(message: _218.GetSyncingResponse): _218.GetSyncingResponseAminoMsg;
                    fromProtoMsg(message: _218.GetSyncingResponseProtoMsg): _218.GetSyncingResponse;
                    toProto(message: _218.GetSyncingResponse): Uint8Array;
                    toProtoMsg(message: _218.GetSyncingResponse): _218.GetSyncingResponseProtoMsg;
                };
                GetNodeInfoRequest: {
                    encode(_: _218.GetNodeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetNodeInfoRequest;
                    fromJSON(_: any): _218.GetNodeInfoRequest;
                    toJSON(_: _218.GetNodeInfoRequest): unknown;
                    fromPartial(_: Partial<_218.GetNodeInfoRequest>): _218.GetNodeInfoRequest;
                    fromAmino(_: _218.GetNodeInfoRequestAmino): _218.GetNodeInfoRequest;
                    toAmino(_: _218.GetNodeInfoRequest): _218.GetNodeInfoRequestAmino;
                    fromAminoMsg(object: _218.GetNodeInfoRequestAminoMsg): _218.GetNodeInfoRequest;
                    toAminoMsg(message: _218.GetNodeInfoRequest): _218.GetNodeInfoRequestAminoMsg;
                    fromProtoMsg(message: _218.GetNodeInfoRequestProtoMsg): _218.GetNodeInfoRequest;
                    toProto(message: _218.GetNodeInfoRequest): Uint8Array;
                    toProtoMsg(message: _218.GetNodeInfoRequest): _218.GetNodeInfoRequestProtoMsg;
                };
                GetNodeInfoResponse: {
                    encode(message: _218.GetNodeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.GetNodeInfoResponse;
                    fromJSON(object: any): _218.GetNodeInfoResponse;
                    toJSON(message: _218.GetNodeInfoResponse): unknown;
                    fromPartial(object: Partial<_218.GetNodeInfoResponse>): _218.GetNodeInfoResponse;
                    fromAmino(object: _218.GetNodeInfoResponseAmino): _218.GetNodeInfoResponse;
                    toAmino(message: _218.GetNodeInfoResponse): _218.GetNodeInfoResponseAmino;
                    fromAminoMsg(object: _218.GetNodeInfoResponseAminoMsg): _218.GetNodeInfoResponse;
                    toAminoMsg(message: _218.GetNodeInfoResponse): _218.GetNodeInfoResponseAminoMsg;
                    fromProtoMsg(message: _218.GetNodeInfoResponseProtoMsg): _218.GetNodeInfoResponse;
                    toProto(message: _218.GetNodeInfoResponse): Uint8Array;
                    toProtoMsg(message: _218.GetNodeInfoResponse): _218.GetNodeInfoResponseProtoMsg;
                };
                VersionInfo: {
                    encode(message: _218.VersionInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.VersionInfo;
                    fromJSON(object: any): _218.VersionInfo;
                    toJSON(message: _218.VersionInfo): unknown;
                    fromPartial(object: Partial<_218.VersionInfo>): _218.VersionInfo;
                    fromAmino(object: _218.VersionInfoAmino): _218.VersionInfo;
                    toAmino(message: _218.VersionInfo): _218.VersionInfoAmino;
                    fromAminoMsg(object: _218.VersionInfoAminoMsg): _218.VersionInfo;
                    toAminoMsg(message: _218.VersionInfo): _218.VersionInfoAminoMsg;
                    fromProtoMsg(message: _218.VersionInfoProtoMsg): _218.VersionInfo;
                    toProto(message: _218.VersionInfo): Uint8Array;
                    toProtoMsg(message: _218.VersionInfo): _218.VersionInfoProtoMsg;
                };
                Module: {
                    encode(message: _218.Module, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _218.Module;
                    fromJSON(object: any): _218.Module;
                    toJSON(message: _218.Module): unknown;
                    fromPartial(object: Partial<_218.Module>): _218.Module;
                    fromAmino(object: _218.ModuleAmino): _218.Module;
                    toAmino(message: _218.Module): _218.ModuleAmino;
                    fromAminoMsg(object: _218.ModuleAminoMsg): _218.Module;
                    toAminoMsg(message: _218.Module): _218.ModuleAminoMsg;
                    fromProtoMsg(message: _218.ModuleProtoMsg): _218.Module;
                    toProto(message: _218.Module): Uint8Array;
                    toProtoMsg(message: _218.Module): _218.ModuleProtoMsg;
                };
            };
        }
        const v1beta1: {
            Coin: {
                encode(message: _219.Coin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.Coin;
                fromJSON(object: any): _219.Coin;
                toJSON(message: _219.Coin): unknown;
                fromPartial(object: Partial<_219.Coin>): _219.Coin;
                fromAmino(object: _219.CoinAmino): _219.Coin;
                toAmino(message: _219.Coin): _219.CoinAmino;
                fromAminoMsg(object: _219.CoinAminoMsg): _219.Coin;
                toAminoMsg(message: _219.Coin): _219.CoinAminoMsg;
                fromProtoMsg(message: _219.CoinProtoMsg): _219.Coin;
                toProto(message: _219.Coin): Uint8Array;
                toProtoMsg(message: _219.Coin): _219.CoinProtoMsg;
            };
            DecCoin: {
                encode(message: _219.DecCoin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.DecCoin;
                fromJSON(object: any): _219.DecCoin;
                toJSON(message: _219.DecCoin): unknown;
                fromPartial(object: Partial<_219.DecCoin>): _219.DecCoin;
                fromAmino(object: _219.DecCoinAmino): _219.DecCoin;
                toAmino(message: _219.DecCoin): _219.DecCoinAmino;
                fromAminoMsg(object: _219.DecCoinAminoMsg): _219.DecCoin;
                toAminoMsg(message: _219.DecCoin): _219.DecCoinAminoMsg;
                fromProtoMsg(message: _219.DecCoinProtoMsg): _219.DecCoin;
                toProto(message: _219.DecCoin): Uint8Array;
                toProtoMsg(message: _219.DecCoin): _219.DecCoinProtoMsg;
            };
            IntProto: {
                encode(message: _219.IntProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.IntProto;
                fromJSON(object: any): _219.IntProto;
                toJSON(message: _219.IntProto): unknown;
                fromPartial(object: Partial<_219.IntProto>): _219.IntProto;
                fromAmino(object: _219.IntProtoAmino): _219.IntProto;
                toAmino(message: _219.IntProto): _219.IntProtoAmino;
                fromAminoMsg(object: _219.IntProtoAminoMsg): _219.IntProto;
                toAminoMsg(message: _219.IntProto): _219.IntProtoAminoMsg;
                fromProtoMsg(message: _219.IntProtoProtoMsg): _219.IntProto;
                toProto(message: _219.IntProto): Uint8Array;
                toProtoMsg(message: _219.IntProto): _219.IntProtoProtoMsg;
            };
            DecProto: {
                encode(message: _219.DecProto, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _219.DecProto;
                fromJSON(object: any): _219.DecProto;
                toJSON(message: _219.DecProto): unknown;
                fromPartial(object: Partial<_219.DecProto>): _219.DecProto;
                fromAmino(object: _219.DecProtoAmino): _219.DecProto;
                toAmino(message: _219.DecProto): _219.DecProtoAmino;
                fromAminoMsg(object: _219.DecProtoAminoMsg): _219.DecProto;
                toAminoMsg(message: _219.DecProto): _219.DecProtoAminoMsg;
                fromProtoMsg(message: _219.DecProtoProtoMsg): _219.DecProto;
                toProto(message: _219.DecProto): Uint8Array;
                toProtoMsg(message: _219.DecProto): _219.DecProtoProtoMsg;
            };
        };
    }
    namespace capability {
        const v1beta1: {
            GenesisOwners: {
                encode(message: _221.GenesisOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.GenesisOwners;
                fromJSON(object: any): _221.GenesisOwners;
                toJSON(message: _221.GenesisOwners): unknown;
                fromPartial(object: Partial<_221.GenesisOwners>): _221.GenesisOwners;
                fromAmino(object: _221.GenesisOwnersAmino): _221.GenesisOwners;
                toAmino(message: _221.GenesisOwners): _221.GenesisOwnersAmino;
                fromAminoMsg(object: _221.GenesisOwnersAminoMsg): _221.GenesisOwners;
                toAminoMsg(message: _221.GenesisOwners): _221.GenesisOwnersAminoMsg;
                fromProtoMsg(message: _221.GenesisOwnersProtoMsg): _221.GenesisOwners;
                toProto(message: _221.GenesisOwners): Uint8Array;
                toProtoMsg(message: _221.GenesisOwners): _221.GenesisOwnersProtoMsg;
            };
            GenesisState: {
                encode(message: _221.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _221.GenesisState;
                fromJSON(object: any): _221.GenesisState;
                toJSON(message: _221.GenesisState): unknown;
                fromPartial(object: Partial<_221.GenesisState>): _221.GenesisState;
                fromAmino(object: _221.GenesisStateAmino): _221.GenesisState;
                toAmino(message: _221.GenesisState): _221.GenesisStateAmino;
                fromAminoMsg(object: _221.GenesisStateAminoMsg): _221.GenesisState;
                toAminoMsg(message: _221.GenesisState): _221.GenesisStateAminoMsg;
                fromProtoMsg(message: _221.GenesisStateProtoMsg): _221.GenesisState;
                toProto(message: _221.GenesisState): Uint8Array;
                toProtoMsg(message: _221.GenesisState): _221.GenesisStateProtoMsg;
            };
            Capability: {
                encode(message: _220.Capability, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Capability;
                fromJSON(object: any): _220.Capability;
                toJSON(message: _220.Capability): unknown;
                fromPartial(object: Partial<_220.Capability>): _220.Capability;
                fromAmino(object: _220.CapabilityAmino): _220.Capability;
                toAmino(message: _220.Capability): _220.CapabilityAmino;
                fromAminoMsg(object: _220.CapabilityAminoMsg): _220.Capability;
                toAminoMsg(message: _220.Capability): _220.CapabilityAminoMsg;
                fromProtoMsg(message: _220.CapabilityProtoMsg): _220.Capability;
                toProto(message: _220.Capability): Uint8Array;
                toProtoMsg(message: _220.Capability): _220.CapabilityProtoMsg;
            };
            Owner: {
                encode(message: _220.Owner, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.Owner;
                fromJSON(object: any): _220.Owner;
                toJSON(message: _220.Owner): unknown;
                fromPartial(object: Partial<_220.Owner>): _220.Owner;
                fromAmino(object: _220.OwnerAmino): _220.Owner;
                toAmino(message: _220.Owner): _220.OwnerAmino;
                fromAminoMsg(object: _220.OwnerAminoMsg): _220.Owner;
                toAminoMsg(message: _220.Owner): _220.OwnerAminoMsg;
                fromProtoMsg(message: _220.OwnerProtoMsg): _220.Owner;
                toProto(message: _220.Owner): Uint8Array;
                toProtoMsg(message: _220.Owner): _220.OwnerProtoMsg;
            };
            CapabilityOwners: {
                encode(message: _220.CapabilityOwners, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _220.CapabilityOwners;
                fromJSON(object: any): _220.CapabilityOwners;
                toJSON(message: _220.CapabilityOwners): unknown;
                fromPartial(object: Partial<_220.CapabilityOwners>): _220.CapabilityOwners;
                fromAmino(object: _220.CapabilityOwnersAmino): _220.CapabilityOwners;
                toAmino(message: _220.CapabilityOwners): _220.CapabilityOwnersAmino;
                fromAminoMsg(object: _220.CapabilityOwnersAminoMsg): _220.CapabilityOwners;
                toAminoMsg(message: _220.CapabilityOwners): _220.CapabilityOwnersAminoMsg;
                fromProtoMsg(message: _220.CapabilityOwnersProtoMsg): _220.CapabilityOwners;
                toProto(message: _220.CapabilityOwners): Uint8Array;
                toProtoMsg(message: _220.CapabilityOwners): _220.CapabilityOwnersProtoMsg;
            };
        };
    }
    namespace crisis {
        const v1beta1: {
            MsgClientImpl: typeof _452.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    verifyInvariant(value: _223.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    verifyInvariant(value: _223.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _223.MsgVerifyInvariant;
                    };
                };
                toJSON: {
                    verifyInvariant(value: _223.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    verifyInvariant(value: any): {
                        typeUrl: string;
                        value: _223.MsgVerifyInvariant;
                    };
                };
                fromPartial: {
                    verifyInvariant(value: _223.MsgVerifyInvariant): {
                        typeUrl: string;
                        value: _223.MsgVerifyInvariant;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.crisis.v1beta1.MsgVerifyInvariant": {
                    aminoType: string;
                    toAmino: (message: _223.MsgVerifyInvariant) => _223.MsgVerifyInvariantAmino;
                    fromAmino: (object: _223.MsgVerifyInvariantAmino) => _223.MsgVerifyInvariant;
                };
            };
            MsgVerifyInvariant: {
                encode(message: _223.MsgVerifyInvariant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgVerifyInvariant;
                fromJSON(object: any): _223.MsgVerifyInvariant;
                toJSON(message: _223.MsgVerifyInvariant): unknown;
                fromPartial(object: Partial<_223.MsgVerifyInvariant>): _223.MsgVerifyInvariant;
                fromAmino(object: _223.MsgVerifyInvariantAmino): _223.MsgVerifyInvariant;
                toAmino(message: _223.MsgVerifyInvariant): _223.MsgVerifyInvariantAmino;
                fromAminoMsg(object: _223.MsgVerifyInvariantAminoMsg): _223.MsgVerifyInvariant;
                toAminoMsg(message: _223.MsgVerifyInvariant): _223.MsgVerifyInvariantAminoMsg;
                fromProtoMsg(message: _223.MsgVerifyInvariantProtoMsg): _223.MsgVerifyInvariant;
                toProto(message: _223.MsgVerifyInvariant): Uint8Array;
                toProtoMsg(message: _223.MsgVerifyInvariant): _223.MsgVerifyInvariantProtoMsg;
            };
            MsgVerifyInvariantResponse: {
                encode(_: _223.MsgVerifyInvariantResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _223.MsgVerifyInvariantResponse;
                fromJSON(_: any): _223.MsgVerifyInvariantResponse;
                toJSON(_: _223.MsgVerifyInvariantResponse): unknown;
                fromPartial(_: Partial<_223.MsgVerifyInvariantResponse>): _223.MsgVerifyInvariantResponse;
                fromAmino(_: _223.MsgVerifyInvariantResponseAmino): _223.MsgVerifyInvariantResponse;
                toAmino(_: _223.MsgVerifyInvariantResponse): _223.MsgVerifyInvariantResponseAmino;
                fromAminoMsg(object: _223.MsgVerifyInvariantResponseAminoMsg): _223.MsgVerifyInvariantResponse;
                toAminoMsg(message: _223.MsgVerifyInvariantResponse): _223.MsgVerifyInvariantResponseAminoMsg;
                fromProtoMsg(message: _223.MsgVerifyInvariantResponseProtoMsg): _223.MsgVerifyInvariantResponse;
                toProto(message: _223.MsgVerifyInvariantResponse): Uint8Array;
                toProtoMsg(message: _223.MsgVerifyInvariantResponse): _223.MsgVerifyInvariantResponseProtoMsg;
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
        };
    }
    namespace crypto {
        const ed25519: {
            PubKey: {
                encode(message: _224.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.PubKey;
                fromJSON(object: any): _224.PubKey;
                toJSON(message: _224.PubKey): unknown;
                fromPartial(object: Partial<_224.PubKey>): _224.PubKey;
                fromAmino(object: _224.PubKeyAmino): _224.PubKey;
                toAmino(message: _224.PubKey): _224.PubKeyAmino;
                fromAminoMsg(object: _224.PubKeyAminoMsg): _224.PubKey;
                toAminoMsg(message: _224.PubKey): _224.PubKeyAminoMsg;
                fromProtoMsg(message: _224.PubKeyProtoMsg): _224.PubKey;
                toProto(message: _224.PubKey): Uint8Array;
                toProtoMsg(message: _224.PubKey): _224.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _224.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _224.PrivKey;
                fromJSON(object: any): _224.PrivKey;
                toJSON(message: _224.PrivKey): unknown;
                fromPartial(object: Partial<_224.PrivKey>): _224.PrivKey;
                fromAmino(object: _224.PrivKeyAmino): _224.PrivKey;
                toAmino(message: _224.PrivKey): _224.PrivKeyAmino;
                fromAminoMsg(object: _224.PrivKeyAminoMsg): _224.PrivKey;
                toAminoMsg(message: _224.PrivKey): _224.PrivKeyAminoMsg;
                fromProtoMsg(message: _224.PrivKeyProtoMsg): _224.PrivKey;
                toProto(message: _224.PrivKey): Uint8Array;
                toProtoMsg(message: _224.PrivKey): _224.PrivKeyProtoMsg;
            };
        };
        namespace hd {
            const v1: {
                BIP44Params: {
                    encode(message: _225.BIP44Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _225.BIP44Params;
                    fromJSON(object: any): _225.BIP44Params;
                    toJSON(message: _225.BIP44Params): unknown;
                    fromPartial(object: Partial<_225.BIP44Params>): _225.BIP44Params;
                    fromAmino(object: _225.BIP44ParamsAmino): _225.BIP44Params;
                    toAmino(message: _225.BIP44Params): _225.BIP44ParamsAmino;
                    fromAminoMsg(object: _225.BIP44ParamsAminoMsg): _225.BIP44Params;
                    toAminoMsg(message: _225.BIP44Params): _225.BIP44ParamsAminoMsg;
                    fromProtoMsg(message: _225.BIP44ParamsProtoMsg): _225.BIP44Params;
                    toProto(message: _225.BIP44Params): Uint8Array;
                    toProtoMsg(message: _225.BIP44Params): _225.BIP44ParamsProtoMsg;
                };
            };
        }
        namespace keyring {
            const v1: {
                Record: {
                    encode(message: _226.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Record;
                    fromJSON(object: any): _226.Record;
                    toJSON(message: _226.Record): unknown;
                    fromPartial(object: Partial<_226.Record>): _226.Record;
                    fromAmino(object: _226.RecordAmino): _226.Record;
                    toAmino(message: _226.Record): _226.RecordAmino;
                    fromAminoMsg(object: _226.RecordAminoMsg): _226.Record;
                    toAminoMsg(message: _226.Record): _226.RecordAminoMsg;
                    fromProtoMsg(message: _226.RecordProtoMsg): _226.Record;
                    toProto(message: _226.Record): Uint8Array;
                    toProtoMsg(message: _226.Record): _226.RecordProtoMsg;
                };
                Record_Local: {
                    encode(message: _226.Record_Local, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Record_Local;
                    fromJSON(object: any): _226.Record_Local;
                    toJSON(message: _226.Record_Local): unknown;
                    fromPartial(object: Partial<_226.Record_Local>): _226.Record_Local;
                    fromAmino(object: _226.Record_LocalAmino): _226.Record_Local;
                    toAmino(message: _226.Record_Local): _226.Record_LocalAmino;
                    fromAminoMsg(object: _226.Record_LocalAminoMsg): _226.Record_Local;
                    toAminoMsg(message: _226.Record_Local): _226.Record_LocalAminoMsg;
                    fromProtoMsg(message: _226.Record_LocalProtoMsg): _226.Record_Local;
                    toProto(message: _226.Record_Local): Uint8Array;
                    toProtoMsg(message: _226.Record_Local): _226.Record_LocalProtoMsg;
                };
                Record_Ledger: {
                    encode(message: _226.Record_Ledger, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Record_Ledger;
                    fromJSON(object: any): _226.Record_Ledger;
                    toJSON(message: _226.Record_Ledger): unknown;
                    fromPartial(object: Partial<_226.Record_Ledger>): _226.Record_Ledger;
                    fromAmino(object: _226.Record_LedgerAmino): _226.Record_Ledger;
                    toAmino(message: _226.Record_Ledger): _226.Record_LedgerAmino;
                    fromAminoMsg(object: _226.Record_LedgerAminoMsg): _226.Record_Ledger;
                    toAminoMsg(message: _226.Record_Ledger): _226.Record_LedgerAminoMsg;
                    fromProtoMsg(message: _226.Record_LedgerProtoMsg): _226.Record_Ledger;
                    toProto(message: _226.Record_Ledger): Uint8Array;
                    toProtoMsg(message: _226.Record_Ledger): _226.Record_LedgerProtoMsg;
                };
                Record_Multi: {
                    encode(_: _226.Record_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Record_Multi;
                    fromJSON(_: any): _226.Record_Multi;
                    toJSON(_: _226.Record_Multi): unknown;
                    fromPartial(_: Partial<_226.Record_Multi>): _226.Record_Multi;
                    fromAmino(_: _226.Record_MultiAmino): _226.Record_Multi;
                    toAmino(_: _226.Record_Multi): _226.Record_MultiAmino;
                    fromAminoMsg(object: _226.Record_MultiAminoMsg): _226.Record_Multi;
                    toAminoMsg(message: _226.Record_Multi): _226.Record_MultiAminoMsg;
                    fromProtoMsg(message: _226.Record_MultiProtoMsg): _226.Record_Multi;
                    toProto(message: _226.Record_Multi): Uint8Array;
                    toProtoMsg(message: _226.Record_Multi): _226.Record_MultiProtoMsg;
                };
                Record_Offline: {
                    encode(_: _226.Record_Offline, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _226.Record_Offline;
                    fromJSON(_: any): _226.Record_Offline;
                    toJSON(_: _226.Record_Offline): unknown;
                    fromPartial(_: Partial<_226.Record_Offline>): _226.Record_Offline;
                    fromAmino(_: _226.Record_OfflineAmino): _226.Record_Offline;
                    toAmino(_: _226.Record_Offline): _226.Record_OfflineAmino;
                    fromAminoMsg(object: _226.Record_OfflineAminoMsg): _226.Record_Offline;
                    toAminoMsg(message: _226.Record_Offline): _226.Record_OfflineAminoMsg;
                    fromProtoMsg(message: _226.Record_OfflineProtoMsg): _226.Record_Offline;
                    toProto(message: _226.Record_Offline): Uint8Array;
                    toProtoMsg(message: _226.Record_Offline): _226.Record_OfflineProtoMsg;
                };
            };
        }
        const multisig: {
            LegacyAminoPubKey: {
                encode(message: _227.LegacyAminoPubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _227.LegacyAminoPubKey;
                fromJSON(object: any): _227.LegacyAminoPubKey;
                toJSON(message: _227.LegacyAminoPubKey): unknown;
                fromPartial(object: Partial<_227.LegacyAminoPubKey>): _227.LegacyAminoPubKey;
                fromAmino(object: _227.LegacyAminoPubKeyAmino): _227.LegacyAminoPubKey;
                toAmino(message: _227.LegacyAminoPubKey): _227.LegacyAminoPubKeyAmino;
                fromAminoMsg(object: _227.LegacyAminoPubKeyAminoMsg): _227.LegacyAminoPubKey;
                toAminoMsg(message: _227.LegacyAminoPubKey): _227.LegacyAminoPubKeyAminoMsg;
                fromProtoMsg(message: _227.LegacyAminoPubKeyProtoMsg): _227.LegacyAminoPubKey;
                toProto(message: _227.LegacyAminoPubKey): Uint8Array;
                toProtoMsg(message: _227.LegacyAminoPubKey): _227.LegacyAminoPubKeyProtoMsg;
            };
        };
        const secp256k1: {
            PubKey: {
                encode(message: _228.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.PubKey;
                fromJSON(object: any): _228.PubKey;
                toJSON(message: _228.PubKey): unknown;
                fromPartial(object: Partial<_228.PubKey>): _228.PubKey;
                fromAmino(object: _228.PubKeyAmino): _228.PubKey;
                toAmino(message: _228.PubKey): _228.PubKeyAmino;
                fromAminoMsg(object: _228.PubKeyAminoMsg): _228.PubKey;
                toAminoMsg(message: _228.PubKey): _228.PubKeyAminoMsg;
                fromProtoMsg(message: _228.PubKeyProtoMsg): _228.PubKey;
                toProto(message: _228.PubKey): Uint8Array;
                toProtoMsg(message: _228.PubKey): _228.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _228.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _228.PrivKey;
                fromJSON(object: any): _228.PrivKey;
                toJSON(message: _228.PrivKey): unknown;
                fromPartial(object: Partial<_228.PrivKey>): _228.PrivKey;
                fromAmino(object: _228.PrivKeyAmino): _228.PrivKey;
                toAmino(message: _228.PrivKey): _228.PrivKeyAmino;
                fromAminoMsg(object: _228.PrivKeyAminoMsg): _228.PrivKey;
                toAminoMsg(message: _228.PrivKey): _228.PrivKeyAminoMsg;
                fromProtoMsg(message: _228.PrivKeyProtoMsg): _228.PrivKey;
                toProto(message: _228.PrivKey): Uint8Array;
                toProtoMsg(message: _228.PrivKey): _228.PrivKeyProtoMsg;
            };
        };
        const secp256r1: {
            PubKey: {
                encode(message: _229.PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.PubKey;
                fromJSON(object: any): _229.PubKey;
                toJSON(message: _229.PubKey): unknown;
                fromPartial(object: Partial<_229.PubKey>): _229.PubKey;
                fromAmino(object: _229.PubKeyAmino): _229.PubKey;
                toAmino(message: _229.PubKey): _229.PubKeyAmino;
                fromAminoMsg(object: _229.PubKeyAminoMsg): _229.PubKey;
                toAminoMsg(message: _229.PubKey): _229.PubKeyAminoMsg;
                fromProtoMsg(message: _229.PubKeyProtoMsg): _229.PubKey;
                toProto(message: _229.PubKey): Uint8Array;
                toProtoMsg(message: _229.PubKey): _229.PubKeyProtoMsg;
            };
            PrivKey: {
                encode(message: _229.PrivKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _229.PrivKey;
                fromJSON(object: any): _229.PrivKey;
                toJSON(message: _229.PrivKey): unknown;
                fromPartial(object: Partial<_229.PrivKey>): _229.PrivKey;
                fromAmino(object: _229.PrivKeyAmino): _229.PrivKey;
                toAmino(message: _229.PrivKey): _229.PrivKeyAmino;
                fromAminoMsg(object: _229.PrivKeyAminoMsg): _229.PrivKey;
                toAminoMsg(message: _229.PrivKey): _229.PrivKeyAminoMsg;
                fromProtoMsg(message: _229.PrivKeyProtoMsg): _229.PrivKey;
                toProto(message: _229.PrivKey): Uint8Array;
                toProtoMsg(message: _229.PrivKey): _229.PrivKeyProtoMsg;
            };
        };
    }
    namespace distribution {
        const v1beta1: {
            MsgClientImpl: typeof _453.MsgClientImpl;
            QueryClientImpl: typeof _437.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _232.QueryParamsRequest): Promise<_232.QueryParamsResponse>;
                validatorOutstandingRewards(request: _232.QueryValidatorOutstandingRewardsRequest): Promise<_232.QueryValidatorOutstandingRewardsResponse>;
                validatorCommission(request: _232.QueryValidatorCommissionRequest): Promise<_232.QueryValidatorCommissionResponse>;
                validatorSlashes(request: _232.QueryValidatorSlashesRequest): Promise<_232.QueryValidatorSlashesResponse>;
                delegationRewards(request: _232.QueryDelegationRewardsRequest): Promise<_232.QueryDelegationRewardsResponse>;
                delegationTotalRewards(request: _232.QueryDelegationTotalRewardsRequest): Promise<_232.QueryDelegationTotalRewardsResponse>;
                delegatorValidators(request: _232.QueryDelegatorValidatorsRequest): Promise<_232.QueryDelegatorValidatorsResponse>;
                delegatorWithdrawAddress(request: _232.QueryDelegatorWithdrawAddressRequest): Promise<_232.QueryDelegatorWithdrawAddressResponse>;
                communityPool(request?: _232.QueryCommunityPoolRequest): Promise<_232.QueryCommunityPoolResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    setWithdrawAddress(value: _233.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawDelegatorReward(value: _233.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawValidatorCommission(value: _233.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    fundCommunityPool(value: _233.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    setWithdrawAddress(value: _233.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _233.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _233.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _233.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _233.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _233.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _233.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _233.MsgFundCommunityPool;
                    };
                };
                toJSON: {
                    setWithdrawAddress(value: _233.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawDelegatorReward(value: _233.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawValidatorCommission(value: _233.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: unknown;
                    };
                    fundCommunityPool(value: _233.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    setWithdrawAddress(value: any): {
                        typeUrl: string;
                        value: _233.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: any): {
                        typeUrl: string;
                        value: _233.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: any): {
                        typeUrl: string;
                        value: _233.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: any): {
                        typeUrl: string;
                        value: _233.MsgFundCommunityPool;
                    };
                };
                fromPartial: {
                    setWithdrawAddress(value: _233.MsgSetWithdrawAddress): {
                        typeUrl: string;
                        value: _233.MsgSetWithdrawAddress;
                    };
                    withdrawDelegatorReward(value: _233.MsgWithdrawDelegatorReward): {
                        typeUrl: string;
                        value: _233.MsgWithdrawDelegatorReward;
                    };
                    withdrawValidatorCommission(value: _233.MsgWithdrawValidatorCommission): {
                        typeUrl: string;
                        value: _233.MsgWithdrawValidatorCommission;
                    };
                    fundCommunityPool(value: _233.MsgFundCommunityPool): {
                        typeUrl: string;
                        value: _233.MsgFundCommunityPool;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress": {
                    aminoType: string;
                    toAmino: (message: _233.MsgSetWithdrawAddress) => _233.MsgSetWithdrawAddressAmino;
                    fromAmino: (object: _233.MsgSetWithdrawAddressAmino) => _233.MsgSetWithdrawAddress;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward": {
                    aminoType: string;
                    toAmino: (message: _233.MsgWithdrawDelegatorReward) => _233.MsgWithdrawDelegatorRewardAmino;
                    fromAmino: (object: _233.MsgWithdrawDelegatorRewardAmino) => _233.MsgWithdrawDelegatorReward;
                };
                "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission": {
                    aminoType: string;
                    toAmino: (message: _233.MsgWithdrawValidatorCommission) => _233.MsgWithdrawValidatorCommissionAmino;
                    fromAmino: (object: _233.MsgWithdrawValidatorCommissionAmino) => _233.MsgWithdrawValidatorCommission;
                };
                "/cosmos.distribution.v1beta1.MsgFundCommunityPool": {
                    aminoType: string;
                    toAmino: (message: _233.MsgFundCommunityPool) => _233.MsgFundCommunityPoolAmino;
                    fromAmino: (object: _233.MsgFundCommunityPoolAmino) => _233.MsgFundCommunityPool;
                };
            };
            MsgSetWithdrawAddress: {
                encode(message: _233.MsgSetWithdrawAddress, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgSetWithdrawAddress;
                fromJSON(object: any): _233.MsgSetWithdrawAddress;
                toJSON(message: _233.MsgSetWithdrawAddress): unknown;
                fromPartial(object: Partial<_233.MsgSetWithdrawAddress>): _233.MsgSetWithdrawAddress;
                fromAmino(object: _233.MsgSetWithdrawAddressAmino): _233.MsgSetWithdrawAddress;
                toAmino(message: _233.MsgSetWithdrawAddress): _233.MsgSetWithdrawAddressAmino;
                fromAminoMsg(object: _233.MsgSetWithdrawAddressAminoMsg): _233.MsgSetWithdrawAddress;
                toAminoMsg(message: _233.MsgSetWithdrawAddress): _233.MsgSetWithdrawAddressAminoMsg;
                fromProtoMsg(message: _233.MsgSetWithdrawAddressProtoMsg): _233.MsgSetWithdrawAddress;
                toProto(message: _233.MsgSetWithdrawAddress): Uint8Array;
                toProtoMsg(message: _233.MsgSetWithdrawAddress): _233.MsgSetWithdrawAddressProtoMsg;
            };
            MsgSetWithdrawAddressResponse: {
                encode(_: _233.MsgSetWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgSetWithdrawAddressResponse;
                fromJSON(_: any): _233.MsgSetWithdrawAddressResponse;
                toJSON(_: _233.MsgSetWithdrawAddressResponse): unknown;
                fromPartial(_: Partial<_233.MsgSetWithdrawAddressResponse>): _233.MsgSetWithdrawAddressResponse;
                fromAmino(_: _233.MsgSetWithdrawAddressResponseAmino): _233.MsgSetWithdrawAddressResponse;
                toAmino(_: _233.MsgSetWithdrawAddressResponse): _233.MsgSetWithdrawAddressResponseAmino;
                fromAminoMsg(object: _233.MsgSetWithdrawAddressResponseAminoMsg): _233.MsgSetWithdrawAddressResponse;
                toAminoMsg(message: _233.MsgSetWithdrawAddressResponse): _233.MsgSetWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _233.MsgSetWithdrawAddressResponseProtoMsg): _233.MsgSetWithdrawAddressResponse;
                toProto(message: _233.MsgSetWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _233.MsgSetWithdrawAddressResponse): _233.MsgSetWithdrawAddressResponseProtoMsg;
            };
            MsgWithdrawDelegatorReward: {
                encode(message: _233.MsgWithdrawDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgWithdrawDelegatorReward;
                fromJSON(object: any): _233.MsgWithdrawDelegatorReward;
                toJSON(message: _233.MsgWithdrawDelegatorReward): unknown;
                fromPartial(object: Partial<_233.MsgWithdrawDelegatorReward>): _233.MsgWithdrawDelegatorReward;
                fromAmino(object: _233.MsgWithdrawDelegatorRewardAmino): _233.MsgWithdrawDelegatorReward;
                toAmino(message: _233.MsgWithdrawDelegatorReward): _233.MsgWithdrawDelegatorRewardAmino;
                fromAminoMsg(object: _233.MsgWithdrawDelegatorRewardAminoMsg): _233.MsgWithdrawDelegatorReward;
                toAminoMsg(message: _233.MsgWithdrawDelegatorReward): _233.MsgWithdrawDelegatorRewardAminoMsg;
                fromProtoMsg(message: _233.MsgWithdrawDelegatorRewardProtoMsg): _233.MsgWithdrawDelegatorReward;
                toProto(message: _233.MsgWithdrawDelegatorReward): Uint8Array;
                toProtoMsg(message: _233.MsgWithdrawDelegatorReward): _233.MsgWithdrawDelegatorRewardProtoMsg;
            };
            MsgWithdrawDelegatorRewardResponse: {
                encode(message: _233.MsgWithdrawDelegatorRewardResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgWithdrawDelegatorRewardResponse;
                fromJSON(object: any): _233.MsgWithdrawDelegatorRewardResponse;
                toJSON(message: _233.MsgWithdrawDelegatorRewardResponse): unknown;
                fromPartial(object: Partial<_233.MsgWithdrawDelegatorRewardResponse>): _233.MsgWithdrawDelegatorRewardResponse;
                fromAmino(object: _233.MsgWithdrawDelegatorRewardResponseAmino): _233.MsgWithdrawDelegatorRewardResponse;
                toAmino(message: _233.MsgWithdrawDelegatorRewardResponse): _233.MsgWithdrawDelegatorRewardResponseAmino;
                fromAminoMsg(object: _233.MsgWithdrawDelegatorRewardResponseAminoMsg): _233.MsgWithdrawDelegatorRewardResponse;
                toAminoMsg(message: _233.MsgWithdrawDelegatorRewardResponse): _233.MsgWithdrawDelegatorRewardResponseAminoMsg;
                fromProtoMsg(message: _233.MsgWithdrawDelegatorRewardResponseProtoMsg): _233.MsgWithdrawDelegatorRewardResponse;
                toProto(message: _233.MsgWithdrawDelegatorRewardResponse): Uint8Array;
                toProtoMsg(message: _233.MsgWithdrawDelegatorRewardResponse): _233.MsgWithdrawDelegatorRewardResponseProtoMsg;
            };
            MsgWithdrawValidatorCommission: {
                encode(message: _233.MsgWithdrawValidatorCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgWithdrawValidatorCommission;
                fromJSON(object: any): _233.MsgWithdrawValidatorCommission;
                toJSON(message: _233.MsgWithdrawValidatorCommission): unknown;
                fromPartial(object: Partial<_233.MsgWithdrawValidatorCommission>): _233.MsgWithdrawValidatorCommission;
                fromAmino(object: _233.MsgWithdrawValidatorCommissionAmino): _233.MsgWithdrawValidatorCommission;
                toAmino(message: _233.MsgWithdrawValidatorCommission): _233.MsgWithdrawValidatorCommissionAmino;
                fromAminoMsg(object: _233.MsgWithdrawValidatorCommissionAminoMsg): _233.MsgWithdrawValidatorCommission;
                toAminoMsg(message: _233.MsgWithdrawValidatorCommission): _233.MsgWithdrawValidatorCommissionAminoMsg;
                fromProtoMsg(message: _233.MsgWithdrawValidatorCommissionProtoMsg): _233.MsgWithdrawValidatorCommission;
                toProto(message: _233.MsgWithdrawValidatorCommission): Uint8Array;
                toProtoMsg(message: _233.MsgWithdrawValidatorCommission): _233.MsgWithdrawValidatorCommissionProtoMsg;
            };
            MsgWithdrawValidatorCommissionResponse: {
                encode(message: _233.MsgWithdrawValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgWithdrawValidatorCommissionResponse;
                fromJSON(object: any): _233.MsgWithdrawValidatorCommissionResponse;
                toJSON(message: _233.MsgWithdrawValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_233.MsgWithdrawValidatorCommissionResponse>): _233.MsgWithdrawValidatorCommissionResponse;
                fromAmino(object: _233.MsgWithdrawValidatorCommissionResponseAmino): _233.MsgWithdrawValidatorCommissionResponse;
                toAmino(message: _233.MsgWithdrawValidatorCommissionResponse): _233.MsgWithdrawValidatorCommissionResponseAmino;
                fromAminoMsg(object: _233.MsgWithdrawValidatorCommissionResponseAminoMsg): _233.MsgWithdrawValidatorCommissionResponse;
                toAminoMsg(message: _233.MsgWithdrawValidatorCommissionResponse): _233.MsgWithdrawValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _233.MsgWithdrawValidatorCommissionResponseProtoMsg): _233.MsgWithdrawValidatorCommissionResponse;
                toProto(message: _233.MsgWithdrawValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _233.MsgWithdrawValidatorCommissionResponse): _233.MsgWithdrawValidatorCommissionResponseProtoMsg;
            };
            MsgFundCommunityPool: {
                encode(message: _233.MsgFundCommunityPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgFundCommunityPool;
                fromJSON(object: any): _233.MsgFundCommunityPool;
                toJSON(message: _233.MsgFundCommunityPool): unknown;
                fromPartial(object: Partial<_233.MsgFundCommunityPool>): _233.MsgFundCommunityPool;
                fromAmino(object: _233.MsgFundCommunityPoolAmino): _233.MsgFundCommunityPool;
                toAmino(message: _233.MsgFundCommunityPool): _233.MsgFundCommunityPoolAmino;
                fromAminoMsg(object: _233.MsgFundCommunityPoolAminoMsg): _233.MsgFundCommunityPool;
                toAminoMsg(message: _233.MsgFundCommunityPool): _233.MsgFundCommunityPoolAminoMsg;
                fromProtoMsg(message: _233.MsgFundCommunityPoolProtoMsg): _233.MsgFundCommunityPool;
                toProto(message: _233.MsgFundCommunityPool): Uint8Array;
                toProtoMsg(message: _233.MsgFundCommunityPool): _233.MsgFundCommunityPoolProtoMsg;
            };
            MsgFundCommunityPoolResponse: {
                encode(_: _233.MsgFundCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _233.MsgFundCommunityPoolResponse;
                fromJSON(_: any): _233.MsgFundCommunityPoolResponse;
                toJSON(_: _233.MsgFundCommunityPoolResponse): unknown;
                fromPartial(_: Partial<_233.MsgFundCommunityPoolResponse>): _233.MsgFundCommunityPoolResponse;
                fromAmino(_: _233.MsgFundCommunityPoolResponseAmino): _233.MsgFundCommunityPoolResponse;
                toAmino(_: _233.MsgFundCommunityPoolResponse): _233.MsgFundCommunityPoolResponseAmino;
                fromAminoMsg(object: _233.MsgFundCommunityPoolResponseAminoMsg): _233.MsgFundCommunityPoolResponse;
                toAminoMsg(message: _233.MsgFundCommunityPoolResponse): _233.MsgFundCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _233.MsgFundCommunityPoolResponseProtoMsg): _233.MsgFundCommunityPoolResponse;
                toProto(message: _233.MsgFundCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _233.MsgFundCommunityPoolResponse): _233.MsgFundCommunityPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _232.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsRequest;
                fromJSON(_: any): _232.QueryParamsRequest;
                toJSON(_: _232.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_232.QueryParamsRequest>): _232.QueryParamsRequest;
                fromAmino(_: _232.QueryParamsRequestAmino): _232.QueryParamsRequest;
                toAmino(_: _232.QueryParamsRequest): _232.QueryParamsRequestAmino;
                fromAminoMsg(object: _232.QueryParamsRequestAminoMsg): _232.QueryParamsRequest;
                toAminoMsg(message: _232.QueryParamsRequest): _232.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _232.QueryParamsRequestProtoMsg): _232.QueryParamsRequest;
                toProto(message: _232.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryParamsRequest): _232.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _232.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryParamsResponse;
                fromJSON(object: any): _232.QueryParamsResponse;
                toJSON(message: _232.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_232.QueryParamsResponse>): _232.QueryParamsResponse;
                fromAmino(object: _232.QueryParamsResponseAmino): _232.QueryParamsResponse;
                toAmino(message: _232.QueryParamsResponse): _232.QueryParamsResponseAmino;
                fromAminoMsg(object: _232.QueryParamsResponseAminoMsg): _232.QueryParamsResponse;
                toAminoMsg(message: _232.QueryParamsResponse): _232.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _232.QueryParamsResponseProtoMsg): _232.QueryParamsResponse;
                toProto(message: _232.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryParamsResponse): _232.QueryParamsResponseProtoMsg;
            };
            QueryValidatorOutstandingRewardsRequest: {
                encode(message: _232.QueryValidatorOutstandingRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorOutstandingRewardsRequest;
                fromJSON(object: any): _232.QueryValidatorOutstandingRewardsRequest;
                toJSON(message: _232.QueryValidatorOutstandingRewardsRequest): unknown;
                fromPartial(object: Partial<_232.QueryValidatorOutstandingRewardsRequest>): _232.QueryValidatorOutstandingRewardsRequest;
                fromAmino(object: _232.QueryValidatorOutstandingRewardsRequestAmino): _232.QueryValidatorOutstandingRewardsRequest;
                toAmino(message: _232.QueryValidatorOutstandingRewardsRequest): _232.QueryValidatorOutstandingRewardsRequestAmino;
                fromAminoMsg(object: _232.QueryValidatorOutstandingRewardsRequestAminoMsg): _232.QueryValidatorOutstandingRewardsRequest;
                toAminoMsg(message: _232.QueryValidatorOutstandingRewardsRequest): _232.QueryValidatorOutstandingRewardsRequestAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorOutstandingRewardsRequestProtoMsg): _232.QueryValidatorOutstandingRewardsRequest;
                toProto(message: _232.QueryValidatorOutstandingRewardsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorOutstandingRewardsRequest): _232.QueryValidatorOutstandingRewardsRequestProtoMsg;
            };
            QueryValidatorOutstandingRewardsResponse: {
                encode(message: _232.QueryValidatorOutstandingRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorOutstandingRewardsResponse;
                fromJSON(object: any): _232.QueryValidatorOutstandingRewardsResponse;
                toJSON(message: _232.QueryValidatorOutstandingRewardsResponse): unknown;
                fromPartial(object: Partial<_232.QueryValidatorOutstandingRewardsResponse>): _232.QueryValidatorOutstandingRewardsResponse;
                fromAmino(object: _232.QueryValidatorOutstandingRewardsResponseAmino): _232.QueryValidatorOutstandingRewardsResponse;
                toAmino(message: _232.QueryValidatorOutstandingRewardsResponse): _232.QueryValidatorOutstandingRewardsResponseAmino;
                fromAminoMsg(object: _232.QueryValidatorOutstandingRewardsResponseAminoMsg): _232.QueryValidatorOutstandingRewardsResponse;
                toAminoMsg(message: _232.QueryValidatorOutstandingRewardsResponse): _232.QueryValidatorOutstandingRewardsResponseAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorOutstandingRewardsResponseProtoMsg): _232.QueryValidatorOutstandingRewardsResponse;
                toProto(message: _232.QueryValidatorOutstandingRewardsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorOutstandingRewardsResponse): _232.QueryValidatorOutstandingRewardsResponseProtoMsg;
            };
            QueryValidatorCommissionRequest: {
                encode(message: _232.QueryValidatorCommissionRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorCommissionRequest;
                fromJSON(object: any): _232.QueryValidatorCommissionRequest;
                toJSON(message: _232.QueryValidatorCommissionRequest): unknown;
                fromPartial(object: Partial<_232.QueryValidatorCommissionRequest>): _232.QueryValidatorCommissionRequest;
                fromAmino(object: _232.QueryValidatorCommissionRequestAmino): _232.QueryValidatorCommissionRequest;
                toAmino(message: _232.QueryValidatorCommissionRequest): _232.QueryValidatorCommissionRequestAmino;
                fromAminoMsg(object: _232.QueryValidatorCommissionRequestAminoMsg): _232.QueryValidatorCommissionRequest;
                toAminoMsg(message: _232.QueryValidatorCommissionRequest): _232.QueryValidatorCommissionRequestAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorCommissionRequestProtoMsg): _232.QueryValidatorCommissionRequest;
                toProto(message: _232.QueryValidatorCommissionRequest): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorCommissionRequest): _232.QueryValidatorCommissionRequestProtoMsg;
            };
            QueryValidatorCommissionResponse: {
                encode(message: _232.QueryValidatorCommissionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorCommissionResponse;
                fromJSON(object: any): _232.QueryValidatorCommissionResponse;
                toJSON(message: _232.QueryValidatorCommissionResponse): unknown;
                fromPartial(object: Partial<_232.QueryValidatorCommissionResponse>): _232.QueryValidatorCommissionResponse;
                fromAmino(object: _232.QueryValidatorCommissionResponseAmino): _232.QueryValidatorCommissionResponse;
                toAmino(message: _232.QueryValidatorCommissionResponse): _232.QueryValidatorCommissionResponseAmino;
                fromAminoMsg(object: _232.QueryValidatorCommissionResponseAminoMsg): _232.QueryValidatorCommissionResponse;
                toAminoMsg(message: _232.QueryValidatorCommissionResponse): _232.QueryValidatorCommissionResponseAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorCommissionResponseProtoMsg): _232.QueryValidatorCommissionResponse;
                toProto(message: _232.QueryValidatorCommissionResponse): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorCommissionResponse): _232.QueryValidatorCommissionResponseProtoMsg;
            };
            QueryValidatorSlashesRequest: {
                encode(message: _232.QueryValidatorSlashesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorSlashesRequest;
                fromJSON(object: any): _232.QueryValidatorSlashesRequest;
                toJSON(message: _232.QueryValidatorSlashesRequest): unknown;
                fromPartial(object: Partial<_232.QueryValidatorSlashesRequest>): _232.QueryValidatorSlashesRequest;
                fromAmino(object: _232.QueryValidatorSlashesRequestAmino): _232.QueryValidatorSlashesRequest;
                toAmino(message: _232.QueryValidatorSlashesRequest): _232.QueryValidatorSlashesRequestAmino;
                fromAminoMsg(object: _232.QueryValidatorSlashesRequestAminoMsg): _232.QueryValidatorSlashesRequest;
                toAminoMsg(message: _232.QueryValidatorSlashesRequest): _232.QueryValidatorSlashesRequestAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorSlashesRequestProtoMsg): _232.QueryValidatorSlashesRequest;
                toProto(message: _232.QueryValidatorSlashesRequest): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorSlashesRequest): _232.QueryValidatorSlashesRequestProtoMsg;
            };
            QueryValidatorSlashesResponse: {
                encode(message: _232.QueryValidatorSlashesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryValidatorSlashesResponse;
                fromJSON(object: any): _232.QueryValidatorSlashesResponse;
                toJSON(message: _232.QueryValidatorSlashesResponse): unknown;
                fromPartial(object: Partial<_232.QueryValidatorSlashesResponse>): _232.QueryValidatorSlashesResponse;
                fromAmino(object: _232.QueryValidatorSlashesResponseAmino): _232.QueryValidatorSlashesResponse;
                toAmino(message: _232.QueryValidatorSlashesResponse): _232.QueryValidatorSlashesResponseAmino;
                fromAminoMsg(object: _232.QueryValidatorSlashesResponseAminoMsg): _232.QueryValidatorSlashesResponse;
                toAminoMsg(message: _232.QueryValidatorSlashesResponse): _232.QueryValidatorSlashesResponseAminoMsg;
                fromProtoMsg(message: _232.QueryValidatorSlashesResponseProtoMsg): _232.QueryValidatorSlashesResponse;
                toProto(message: _232.QueryValidatorSlashesResponse): Uint8Array;
                toProtoMsg(message: _232.QueryValidatorSlashesResponse): _232.QueryValidatorSlashesResponseProtoMsg;
            };
            QueryDelegationRewardsRequest: {
                encode(message: _232.QueryDelegationRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationRewardsRequest;
                fromJSON(object: any): _232.QueryDelegationRewardsRequest;
                toJSON(message: _232.QueryDelegationRewardsRequest): unknown;
                fromPartial(object: Partial<_232.QueryDelegationRewardsRequest>): _232.QueryDelegationRewardsRequest;
                fromAmino(object: _232.QueryDelegationRewardsRequestAmino): _232.QueryDelegationRewardsRequest;
                toAmino(message: _232.QueryDelegationRewardsRequest): _232.QueryDelegationRewardsRequestAmino;
                fromAminoMsg(object: _232.QueryDelegationRewardsRequestAminoMsg): _232.QueryDelegationRewardsRequest;
                toAminoMsg(message: _232.QueryDelegationRewardsRequest): _232.QueryDelegationRewardsRequestAminoMsg;
                fromProtoMsg(message: _232.QueryDelegationRewardsRequestProtoMsg): _232.QueryDelegationRewardsRequest;
                toProto(message: _232.QueryDelegationRewardsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryDelegationRewardsRequest): _232.QueryDelegationRewardsRequestProtoMsg;
            };
            QueryDelegationRewardsResponse: {
                encode(message: _232.QueryDelegationRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationRewardsResponse;
                fromJSON(object: any): _232.QueryDelegationRewardsResponse;
                toJSON(message: _232.QueryDelegationRewardsResponse): unknown;
                fromPartial(object: Partial<_232.QueryDelegationRewardsResponse>): _232.QueryDelegationRewardsResponse;
                fromAmino(object: _232.QueryDelegationRewardsResponseAmino): _232.QueryDelegationRewardsResponse;
                toAmino(message: _232.QueryDelegationRewardsResponse): _232.QueryDelegationRewardsResponseAmino;
                fromAminoMsg(object: _232.QueryDelegationRewardsResponseAminoMsg): _232.QueryDelegationRewardsResponse;
                toAminoMsg(message: _232.QueryDelegationRewardsResponse): _232.QueryDelegationRewardsResponseAminoMsg;
                fromProtoMsg(message: _232.QueryDelegationRewardsResponseProtoMsg): _232.QueryDelegationRewardsResponse;
                toProto(message: _232.QueryDelegationRewardsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryDelegationRewardsResponse): _232.QueryDelegationRewardsResponseProtoMsg;
            };
            QueryDelegationTotalRewardsRequest: {
                encode(message: _232.QueryDelegationTotalRewardsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationTotalRewardsRequest;
                fromJSON(object: any): _232.QueryDelegationTotalRewardsRequest;
                toJSON(message: _232.QueryDelegationTotalRewardsRequest): unknown;
                fromPartial(object: Partial<_232.QueryDelegationTotalRewardsRequest>): _232.QueryDelegationTotalRewardsRequest;
                fromAmino(object: _232.QueryDelegationTotalRewardsRequestAmino): _232.QueryDelegationTotalRewardsRequest;
                toAmino(message: _232.QueryDelegationTotalRewardsRequest): _232.QueryDelegationTotalRewardsRequestAmino;
                fromAminoMsg(object: _232.QueryDelegationTotalRewardsRequestAminoMsg): _232.QueryDelegationTotalRewardsRequest;
                toAminoMsg(message: _232.QueryDelegationTotalRewardsRequest): _232.QueryDelegationTotalRewardsRequestAminoMsg;
                fromProtoMsg(message: _232.QueryDelegationTotalRewardsRequestProtoMsg): _232.QueryDelegationTotalRewardsRequest;
                toProto(message: _232.QueryDelegationTotalRewardsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryDelegationTotalRewardsRequest): _232.QueryDelegationTotalRewardsRequestProtoMsg;
            };
            QueryDelegationTotalRewardsResponse: {
                encode(message: _232.QueryDelegationTotalRewardsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegationTotalRewardsResponse;
                fromJSON(object: any): _232.QueryDelegationTotalRewardsResponse;
                toJSON(message: _232.QueryDelegationTotalRewardsResponse): unknown;
                fromPartial(object: Partial<_232.QueryDelegationTotalRewardsResponse>): _232.QueryDelegationTotalRewardsResponse;
                fromAmino(object: _232.QueryDelegationTotalRewardsResponseAmino): _232.QueryDelegationTotalRewardsResponse;
                toAmino(message: _232.QueryDelegationTotalRewardsResponse): _232.QueryDelegationTotalRewardsResponseAmino;
                fromAminoMsg(object: _232.QueryDelegationTotalRewardsResponseAminoMsg): _232.QueryDelegationTotalRewardsResponse;
                toAminoMsg(message: _232.QueryDelegationTotalRewardsResponse): _232.QueryDelegationTotalRewardsResponseAminoMsg;
                fromProtoMsg(message: _232.QueryDelegationTotalRewardsResponseProtoMsg): _232.QueryDelegationTotalRewardsResponse;
                toProto(message: _232.QueryDelegationTotalRewardsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryDelegationTotalRewardsResponse): _232.QueryDelegationTotalRewardsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _232.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _232.QueryDelegatorValidatorsRequest;
                toJSON(message: _232.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_232.QueryDelegatorValidatorsRequest>): _232.QueryDelegatorValidatorsRequest;
                fromAmino(object: _232.QueryDelegatorValidatorsRequestAmino): _232.QueryDelegatorValidatorsRequest;
                toAmino(message: _232.QueryDelegatorValidatorsRequest): _232.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _232.QueryDelegatorValidatorsRequestAminoMsg): _232.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _232.QueryDelegatorValidatorsRequest): _232.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _232.QueryDelegatorValidatorsRequestProtoMsg): _232.QueryDelegatorValidatorsRequest;
                toProto(message: _232.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _232.QueryDelegatorValidatorsRequest): _232.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _232.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _232.QueryDelegatorValidatorsResponse;
                toJSON(message: _232.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_232.QueryDelegatorValidatorsResponse>): _232.QueryDelegatorValidatorsResponse;
                fromAmino(object: _232.QueryDelegatorValidatorsResponseAmino): _232.QueryDelegatorValidatorsResponse;
                toAmino(message: _232.QueryDelegatorValidatorsResponse): _232.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _232.QueryDelegatorValidatorsResponseAminoMsg): _232.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _232.QueryDelegatorValidatorsResponse): _232.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _232.QueryDelegatorValidatorsResponseProtoMsg): _232.QueryDelegatorValidatorsResponse;
                toProto(message: _232.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _232.QueryDelegatorValidatorsResponse): _232.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorWithdrawAddressRequest: {
                encode(message: _232.QueryDelegatorWithdrawAddressRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorWithdrawAddressRequest;
                fromJSON(object: any): _232.QueryDelegatorWithdrawAddressRequest;
                toJSON(message: _232.QueryDelegatorWithdrawAddressRequest): unknown;
                fromPartial(object: Partial<_232.QueryDelegatorWithdrawAddressRequest>): _232.QueryDelegatorWithdrawAddressRequest;
                fromAmino(object: _232.QueryDelegatorWithdrawAddressRequestAmino): _232.QueryDelegatorWithdrawAddressRequest;
                toAmino(message: _232.QueryDelegatorWithdrawAddressRequest): _232.QueryDelegatorWithdrawAddressRequestAmino;
                fromAminoMsg(object: _232.QueryDelegatorWithdrawAddressRequestAminoMsg): _232.QueryDelegatorWithdrawAddressRequest;
                toAminoMsg(message: _232.QueryDelegatorWithdrawAddressRequest): _232.QueryDelegatorWithdrawAddressRequestAminoMsg;
                fromProtoMsg(message: _232.QueryDelegatorWithdrawAddressRequestProtoMsg): _232.QueryDelegatorWithdrawAddressRequest;
                toProto(message: _232.QueryDelegatorWithdrawAddressRequest): Uint8Array;
                toProtoMsg(message: _232.QueryDelegatorWithdrawAddressRequest): _232.QueryDelegatorWithdrawAddressRequestProtoMsg;
            };
            QueryDelegatorWithdrawAddressResponse: {
                encode(message: _232.QueryDelegatorWithdrawAddressResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryDelegatorWithdrawAddressResponse;
                fromJSON(object: any): _232.QueryDelegatorWithdrawAddressResponse;
                toJSON(message: _232.QueryDelegatorWithdrawAddressResponse): unknown;
                fromPartial(object: Partial<_232.QueryDelegatorWithdrawAddressResponse>): _232.QueryDelegatorWithdrawAddressResponse;
                fromAmino(object: _232.QueryDelegatorWithdrawAddressResponseAmino): _232.QueryDelegatorWithdrawAddressResponse;
                toAmino(message: _232.QueryDelegatorWithdrawAddressResponse): _232.QueryDelegatorWithdrawAddressResponseAmino;
                fromAminoMsg(object: _232.QueryDelegatorWithdrawAddressResponseAminoMsg): _232.QueryDelegatorWithdrawAddressResponse;
                toAminoMsg(message: _232.QueryDelegatorWithdrawAddressResponse): _232.QueryDelegatorWithdrawAddressResponseAminoMsg;
                fromProtoMsg(message: _232.QueryDelegatorWithdrawAddressResponseProtoMsg): _232.QueryDelegatorWithdrawAddressResponse;
                toProto(message: _232.QueryDelegatorWithdrawAddressResponse): Uint8Array;
                toProtoMsg(message: _232.QueryDelegatorWithdrawAddressResponse): _232.QueryDelegatorWithdrawAddressResponseProtoMsg;
            };
            QueryCommunityPoolRequest: {
                encode(_: _232.QueryCommunityPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryCommunityPoolRequest;
                fromJSON(_: any): _232.QueryCommunityPoolRequest;
                toJSON(_: _232.QueryCommunityPoolRequest): unknown;
                fromPartial(_: Partial<_232.QueryCommunityPoolRequest>): _232.QueryCommunityPoolRequest;
                fromAmino(_: _232.QueryCommunityPoolRequestAmino): _232.QueryCommunityPoolRequest;
                toAmino(_: _232.QueryCommunityPoolRequest): _232.QueryCommunityPoolRequestAmino;
                fromAminoMsg(object: _232.QueryCommunityPoolRequestAminoMsg): _232.QueryCommunityPoolRequest;
                toAminoMsg(message: _232.QueryCommunityPoolRequest): _232.QueryCommunityPoolRequestAminoMsg;
                fromProtoMsg(message: _232.QueryCommunityPoolRequestProtoMsg): _232.QueryCommunityPoolRequest;
                toProto(message: _232.QueryCommunityPoolRequest): Uint8Array;
                toProtoMsg(message: _232.QueryCommunityPoolRequest): _232.QueryCommunityPoolRequestProtoMsg;
            };
            QueryCommunityPoolResponse: {
                encode(message: _232.QueryCommunityPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _232.QueryCommunityPoolResponse;
                fromJSON(object: any): _232.QueryCommunityPoolResponse;
                toJSON(message: _232.QueryCommunityPoolResponse): unknown;
                fromPartial(object: Partial<_232.QueryCommunityPoolResponse>): _232.QueryCommunityPoolResponse;
                fromAmino(object: _232.QueryCommunityPoolResponseAmino): _232.QueryCommunityPoolResponse;
                toAmino(message: _232.QueryCommunityPoolResponse): _232.QueryCommunityPoolResponseAmino;
                fromAminoMsg(object: _232.QueryCommunityPoolResponseAminoMsg): _232.QueryCommunityPoolResponse;
                toAminoMsg(message: _232.QueryCommunityPoolResponse): _232.QueryCommunityPoolResponseAminoMsg;
                fromProtoMsg(message: _232.QueryCommunityPoolResponseProtoMsg): _232.QueryCommunityPoolResponse;
                toProto(message: _232.QueryCommunityPoolResponse): Uint8Array;
                toProtoMsg(message: _232.QueryCommunityPoolResponse): _232.QueryCommunityPoolResponseProtoMsg;
            };
            DelegatorWithdrawInfo: {
                encode(message: _231.DelegatorWithdrawInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.DelegatorWithdrawInfo;
                fromJSON(object: any): _231.DelegatorWithdrawInfo;
                toJSON(message: _231.DelegatorWithdrawInfo): unknown;
                fromPartial(object: Partial<_231.DelegatorWithdrawInfo>): _231.DelegatorWithdrawInfo;
                fromAmino(object: _231.DelegatorWithdrawInfoAmino): _231.DelegatorWithdrawInfo;
                toAmino(message: _231.DelegatorWithdrawInfo): _231.DelegatorWithdrawInfoAmino;
                fromAminoMsg(object: _231.DelegatorWithdrawInfoAminoMsg): _231.DelegatorWithdrawInfo;
                toAminoMsg(message: _231.DelegatorWithdrawInfo): _231.DelegatorWithdrawInfoAminoMsg;
                fromProtoMsg(message: _231.DelegatorWithdrawInfoProtoMsg): _231.DelegatorWithdrawInfo;
                toProto(message: _231.DelegatorWithdrawInfo): Uint8Array;
                toProtoMsg(message: _231.DelegatorWithdrawInfo): _231.DelegatorWithdrawInfoProtoMsg;
            };
            ValidatorOutstandingRewardsRecord: {
                encode(message: _231.ValidatorOutstandingRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorOutstandingRewardsRecord;
                fromJSON(object: any): _231.ValidatorOutstandingRewardsRecord;
                toJSON(message: _231.ValidatorOutstandingRewardsRecord): unknown;
                fromPartial(object: Partial<_231.ValidatorOutstandingRewardsRecord>): _231.ValidatorOutstandingRewardsRecord;
                fromAmino(object: _231.ValidatorOutstandingRewardsRecordAmino): _231.ValidatorOutstandingRewardsRecord;
                toAmino(message: _231.ValidatorOutstandingRewardsRecord): _231.ValidatorOutstandingRewardsRecordAmino;
                fromAminoMsg(object: _231.ValidatorOutstandingRewardsRecordAminoMsg): _231.ValidatorOutstandingRewardsRecord;
                toAminoMsg(message: _231.ValidatorOutstandingRewardsRecord): _231.ValidatorOutstandingRewardsRecordAminoMsg;
                fromProtoMsg(message: _231.ValidatorOutstandingRewardsRecordProtoMsg): _231.ValidatorOutstandingRewardsRecord;
                toProto(message: _231.ValidatorOutstandingRewardsRecord): Uint8Array;
                toProtoMsg(message: _231.ValidatorOutstandingRewardsRecord): _231.ValidatorOutstandingRewardsRecordProtoMsg;
            };
            ValidatorAccumulatedCommissionRecord: {
                encode(message: _231.ValidatorAccumulatedCommissionRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorAccumulatedCommissionRecord;
                fromJSON(object: any): _231.ValidatorAccumulatedCommissionRecord;
                toJSON(message: _231.ValidatorAccumulatedCommissionRecord): unknown;
                fromPartial(object: Partial<_231.ValidatorAccumulatedCommissionRecord>): _231.ValidatorAccumulatedCommissionRecord;
                fromAmino(object: _231.ValidatorAccumulatedCommissionRecordAmino): _231.ValidatorAccumulatedCommissionRecord;
                toAmino(message: _231.ValidatorAccumulatedCommissionRecord): _231.ValidatorAccumulatedCommissionRecordAmino;
                fromAminoMsg(object: _231.ValidatorAccumulatedCommissionRecordAminoMsg): _231.ValidatorAccumulatedCommissionRecord;
                toAminoMsg(message: _231.ValidatorAccumulatedCommissionRecord): _231.ValidatorAccumulatedCommissionRecordAminoMsg;
                fromProtoMsg(message: _231.ValidatorAccumulatedCommissionRecordProtoMsg): _231.ValidatorAccumulatedCommissionRecord;
                toProto(message: _231.ValidatorAccumulatedCommissionRecord): Uint8Array;
                toProtoMsg(message: _231.ValidatorAccumulatedCommissionRecord): _231.ValidatorAccumulatedCommissionRecordProtoMsg;
            };
            ValidatorHistoricalRewardsRecord: {
                encode(message: _231.ValidatorHistoricalRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorHistoricalRewardsRecord;
                fromJSON(object: any): _231.ValidatorHistoricalRewardsRecord;
                toJSON(message: _231.ValidatorHistoricalRewardsRecord): unknown;
                fromPartial(object: Partial<_231.ValidatorHistoricalRewardsRecord>): _231.ValidatorHistoricalRewardsRecord;
                fromAmino(object: _231.ValidatorHistoricalRewardsRecordAmino): _231.ValidatorHistoricalRewardsRecord;
                toAmino(message: _231.ValidatorHistoricalRewardsRecord): _231.ValidatorHistoricalRewardsRecordAmino;
                fromAminoMsg(object: _231.ValidatorHistoricalRewardsRecordAminoMsg): _231.ValidatorHistoricalRewardsRecord;
                toAminoMsg(message: _231.ValidatorHistoricalRewardsRecord): _231.ValidatorHistoricalRewardsRecordAminoMsg;
                fromProtoMsg(message: _231.ValidatorHistoricalRewardsRecordProtoMsg): _231.ValidatorHistoricalRewardsRecord;
                toProto(message: _231.ValidatorHistoricalRewardsRecord): Uint8Array;
                toProtoMsg(message: _231.ValidatorHistoricalRewardsRecord): _231.ValidatorHistoricalRewardsRecordProtoMsg;
            };
            ValidatorCurrentRewardsRecord: {
                encode(message: _231.ValidatorCurrentRewardsRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorCurrentRewardsRecord;
                fromJSON(object: any): _231.ValidatorCurrentRewardsRecord;
                toJSON(message: _231.ValidatorCurrentRewardsRecord): unknown;
                fromPartial(object: Partial<_231.ValidatorCurrentRewardsRecord>): _231.ValidatorCurrentRewardsRecord;
                fromAmino(object: _231.ValidatorCurrentRewardsRecordAmino): _231.ValidatorCurrentRewardsRecord;
                toAmino(message: _231.ValidatorCurrentRewardsRecord): _231.ValidatorCurrentRewardsRecordAmino;
                fromAminoMsg(object: _231.ValidatorCurrentRewardsRecordAminoMsg): _231.ValidatorCurrentRewardsRecord;
                toAminoMsg(message: _231.ValidatorCurrentRewardsRecord): _231.ValidatorCurrentRewardsRecordAminoMsg;
                fromProtoMsg(message: _231.ValidatorCurrentRewardsRecordProtoMsg): _231.ValidatorCurrentRewardsRecord;
                toProto(message: _231.ValidatorCurrentRewardsRecord): Uint8Array;
                toProtoMsg(message: _231.ValidatorCurrentRewardsRecord): _231.ValidatorCurrentRewardsRecordProtoMsg;
            };
            DelegatorStartingInfoRecord: {
                encode(message: _231.DelegatorStartingInfoRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.DelegatorStartingInfoRecord;
                fromJSON(object: any): _231.DelegatorStartingInfoRecord;
                toJSON(message: _231.DelegatorStartingInfoRecord): unknown;
                fromPartial(object: Partial<_231.DelegatorStartingInfoRecord>): _231.DelegatorStartingInfoRecord;
                fromAmino(object: _231.DelegatorStartingInfoRecordAmino): _231.DelegatorStartingInfoRecord;
                toAmino(message: _231.DelegatorStartingInfoRecord): _231.DelegatorStartingInfoRecordAmino;
                fromAminoMsg(object: _231.DelegatorStartingInfoRecordAminoMsg): _231.DelegatorStartingInfoRecord;
                toAminoMsg(message: _231.DelegatorStartingInfoRecord): _231.DelegatorStartingInfoRecordAminoMsg;
                fromProtoMsg(message: _231.DelegatorStartingInfoRecordProtoMsg): _231.DelegatorStartingInfoRecord;
                toProto(message: _231.DelegatorStartingInfoRecord): Uint8Array;
                toProtoMsg(message: _231.DelegatorStartingInfoRecord): _231.DelegatorStartingInfoRecordProtoMsg;
            };
            ValidatorSlashEventRecord: {
                encode(message: _231.ValidatorSlashEventRecord, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.ValidatorSlashEventRecord;
                fromJSON(object: any): _231.ValidatorSlashEventRecord;
                toJSON(message: _231.ValidatorSlashEventRecord): unknown;
                fromPartial(object: Partial<_231.ValidatorSlashEventRecord>): _231.ValidatorSlashEventRecord;
                fromAmino(object: _231.ValidatorSlashEventRecordAmino): _231.ValidatorSlashEventRecord;
                toAmino(message: _231.ValidatorSlashEventRecord): _231.ValidatorSlashEventRecordAmino;
                fromAminoMsg(object: _231.ValidatorSlashEventRecordAminoMsg): _231.ValidatorSlashEventRecord;
                toAminoMsg(message: _231.ValidatorSlashEventRecord): _231.ValidatorSlashEventRecordAminoMsg;
                fromProtoMsg(message: _231.ValidatorSlashEventRecordProtoMsg): _231.ValidatorSlashEventRecord;
                toProto(message: _231.ValidatorSlashEventRecord): Uint8Array;
                toProtoMsg(message: _231.ValidatorSlashEventRecord): _231.ValidatorSlashEventRecordProtoMsg;
            };
            GenesisState: {
                encode(message: _231.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _231.GenesisState;
                fromJSON(object: any): _231.GenesisState;
                toJSON(message: _231.GenesisState): unknown;
                fromPartial(object: Partial<_231.GenesisState>): _231.GenesisState;
                fromAmino(object: _231.GenesisStateAmino): _231.GenesisState;
                toAmino(message: _231.GenesisState): _231.GenesisStateAmino;
                fromAminoMsg(object: _231.GenesisStateAminoMsg): _231.GenesisState;
                toAminoMsg(message: _231.GenesisState): _231.GenesisStateAminoMsg;
                fromProtoMsg(message: _231.GenesisStateProtoMsg): _231.GenesisState;
                toProto(message: _231.GenesisState): Uint8Array;
                toProtoMsg(message: _231.GenesisState): _231.GenesisStateProtoMsg;
            };
            Params: {
                encode(message: _230.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.Params;
                fromJSON(object: any): _230.Params;
                toJSON(message: _230.Params): unknown;
                fromPartial(object: Partial<_230.Params>): _230.Params;
                fromAmino(object: _230.ParamsAmino): _230.Params;
                toAmino(message: _230.Params): _230.ParamsAmino;
                fromAminoMsg(object: _230.ParamsAminoMsg): _230.Params;
                toAminoMsg(message: _230.Params): _230.ParamsAminoMsg;
                fromProtoMsg(message: _230.ParamsProtoMsg): _230.Params;
                toProto(message: _230.Params): Uint8Array;
                toProtoMsg(message: _230.Params): _230.ParamsProtoMsg;
            };
            ValidatorHistoricalRewards: {
                encode(message: _230.ValidatorHistoricalRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorHistoricalRewards;
                fromJSON(object: any): _230.ValidatorHistoricalRewards;
                toJSON(message: _230.ValidatorHistoricalRewards): unknown;
                fromPartial(object: Partial<_230.ValidatorHistoricalRewards>): _230.ValidatorHistoricalRewards;
                fromAmino(object: _230.ValidatorHistoricalRewardsAmino): _230.ValidatorHistoricalRewards;
                toAmino(message: _230.ValidatorHistoricalRewards): _230.ValidatorHistoricalRewardsAmino;
                fromAminoMsg(object: _230.ValidatorHistoricalRewardsAminoMsg): _230.ValidatorHistoricalRewards;
                toAminoMsg(message: _230.ValidatorHistoricalRewards): _230.ValidatorHistoricalRewardsAminoMsg;
                fromProtoMsg(message: _230.ValidatorHistoricalRewardsProtoMsg): _230.ValidatorHistoricalRewards;
                toProto(message: _230.ValidatorHistoricalRewards): Uint8Array;
                toProtoMsg(message: _230.ValidatorHistoricalRewards): _230.ValidatorHistoricalRewardsProtoMsg;
            };
            ValidatorCurrentRewards: {
                encode(message: _230.ValidatorCurrentRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorCurrentRewards;
                fromJSON(object: any): _230.ValidatorCurrentRewards;
                toJSON(message: _230.ValidatorCurrentRewards): unknown;
                fromPartial(object: Partial<_230.ValidatorCurrentRewards>): _230.ValidatorCurrentRewards;
                fromAmino(object: _230.ValidatorCurrentRewardsAmino): _230.ValidatorCurrentRewards;
                toAmino(message: _230.ValidatorCurrentRewards): _230.ValidatorCurrentRewardsAmino;
                fromAminoMsg(object: _230.ValidatorCurrentRewardsAminoMsg): _230.ValidatorCurrentRewards;
                toAminoMsg(message: _230.ValidatorCurrentRewards): _230.ValidatorCurrentRewardsAminoMsg;
                fromProtoMsg(message: _230.ValidatorCurrentRewardsProtoMsg): _230.ValidatorCurrentRewards;
                toProto(message: _230.ValidatorCurrentRewards): Uint8Array;
                toProtoMsg(message: _230.ValidatorCurrentRewards): _230.ValidatorCurrentRewardsProtoMsg;
            };
            ValidatorAccumulatedCommission: {
                encode(message: _230.ValidatorAccumulatedCommission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorAccumulatedCommission;
                fromJSON(object: any): _230.ValidatorAccumulatedCommission;
                toJSON(message: _230.ValidatorAccumulatedCommission): unknown;
                fromPartial(object: Partial<_230.ValidatorAccumulatedCommission>): _230.ValidatorAccumulatedCommission;
                fromAmino(object: _230.ValidatorAccumulatedCommissionAmino): _230.ValidatorAccumulatedCommission;
                toAmino(message: _230.ValidatorAccumulatedCommission): _230.ValidatorAccumulatedCommissionAmino;
                fromAminoMsg(object: _230.ValidatorAccumulatedCommissionAminoMsg): _230.ValidatorAccumulatedCommission;
                toAminoMsg(message: _230.ValidatorAccumulatedCommission): _230.ValidatorAccumulatedCommissionAminoMsg;
                fromProtoMsg(message: _230.ValidatorAccumulatedCommissionProtoMsg): _230.ValidatorAccumulatedCommission;
                toProto(message: _230.ValidatorAccumulatedCommission): Uint8Array;
                toProtoMsg(message: _230.ValidatorAccumulatedCommission): _230.ValidatorAccumulatedCommissionProtoMsg;
            };
            ValidatorOutstandingRewards: {
                encode(message: _230.ValidatorOutstandingRewards, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorOutstandingRewards;
                fromJSON(object: any): _230.ValidatorOutstandingRewards;
                toJSON(message: _230.ValidatorOutstandingRewards): unknown;
                fromPartial(object: Partial<_230.ValidatorOutstandingRewards>): _230.ValidatorOutstandingRewards;
                fromAmino(object: _230.ValidatorOutstandingRewardsAmino): _230.ValidatorOutstandingRewards;
                toAmino(message: _230.ValidatorOutstandingRewards): _230.ValidatorOutstandingRewardsAmino;
                fromAminoMsg(object: _230.ValidatorOutstandingRewardsAminoMsg): _230.ValidatorOutstandingRewards;
                toAminoMsg(message: _230.ValidatorOutstandingRewards): _230.ValidatorOutstandingRewardsAminoMsg;
                fromProtoMsg(message: _230.ValidatorOutstandingRewardsProtoMsg): _230.ValidatorOutstandingRewards;
                toProto(message: _230.ValidatorOutstandingRewards): Uint8Array;
                toProtoMsg(message: _230.ValidatorOutstandingRewards): _230.ValidatorOutstandingRewardsProtoMsg;
            };
            ValidatorSlashEvent: {
                encode(message: _230.ValidatorSlashEvent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorSlashEvent;
                fromJSON(object: any): _230.ValidatorSlashEvent;
                toJSON(message: _230.ValidatorSlashEvent): unknown;
                fromPartial(object: Partial<_230.ValidatorSlashEvent>): _230.ValidatorSlashEvent;
                fromAmino(object: _230.ValidatorSlashEventAmino): _230.ValidatorSlashEvent;
                toAmino(message: _230.ValidatorSlashEvent): _230.ValidatorSlashEventAmino;
                fromAminoMsg(object: _230.ValidatorSlashEventAminoMsg): _230.ValidatorSlashEvent;
                toAminoMsg(message: _230.ValidatorSlashEvent): _230.ValidatorSlashEventAminoMsg;
                fromProtoMsg(message: _230.ValidatorSlashEventProtoMsg): _230.ValidatorSlashEvent;
                toProto(message: _230.ValidatorSlashEvent): Uint8Array;
                toProtoMsg(message: _230.ValidatorSlashEvent): _230.ValidatorSlashEventProtoMsg;
            };
            ValidatorSlashEvents: {
                encode(message: _230.ValidatorSlashEvents, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.ValidatorSlashEvents;
                fromJSON(object: any): _230.ValidatorSlashEvents;
                toJSON(message: _230.ValidatorSlashEvents): unknown;
                fromPartial(object: Partial<_230.ValidatorSlashEvents>): _230.ValidatorSlashEvents;
                fromAmino(object: _230.ValidatorSlashEventsAmino): _230.ValidatorSlashEvents;
                toAmino(message: _230.ValidatorSlashEvents): _230.ValidatorSlashEventsAmino;
                fromAminoMsg(object: _230.ValidatorSlashEventsAminoMsg): _230.ValidatorSlashEvents;
                toAminoMsg(message: _230.ValidatorSlashEvents): _230.ValidatorSlashEventsAminoMsg;
                fromProtoMsg(message: _230.ValidatorSlashEventsProtoMsg): _230.ValidatorSlashEvents;
                toProto(message: _230.ValidatorSlashEvents): Uint8Array;
                toProtoMsg(message: _230.ValidatorSlashEvents): _230.ValidatorSlashEventsProtoMsg;
            };
            FeePool: {
                encode(message: _230.FeePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.FeePool;
                fromJSON(object: any): _230.FeePool;
                toJSON(message: _230.FeePool): unknown;
                fromPartial(object: Partial<_230.FeePool>): _230.FeePool;
                fromAmino(object: _230.FeePoolAmino): _230.FeePool;
                toAmino(message: _230.FeePool): _230.FeePoolAmino;
                fromAminoMsg(object: _230.FeePoolAminoMsg): _230.FeePool;
                toAminoMsg(message: _230.FeePool): _230.FeePoolAminoMsg;
                fromProtoMsg(message: _230.FeePoolProtoMsg): _230.FeePool;
                toProto(message: _230.FeePool): Uint8Array;
                toProtoMsg(message: _230.FeePool): _230.FeePoolProtoMsg;
            };
            CommunityPoolSpendProposal: {
                encode(message: _230.CommunityPoolSpendProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.CommunityPoolSpendProposal;
                fromJSON(object: any): _230.CommunityPoolSpendProposal;
                toJSON(message: _230.CommunityPoolSpendProposal): unknown;
                fromPartial(object: Partial<_230.CommunityPoolSpendProposal>): _230.CommunityPoolSpendProposal;
                fromAmino(object: _230.CommunityPoolSpendProposalAmino): _230.CommunityPoolSpendProposal;
                toAmino(message: _230.CommunityPoolSpendProposal): _230.CommunityPoolSpendProposalAmino;
                fromAminoMsg(object: _230.CommunityPoolSpendProposalAminoMsg): _230.CommunityPoolSpendProposal;
                toAminoMsg(message: _230.CommunityPoolSpendProposal): _230.CommunityPoolSpendProposalAminoMsg;
                fromProtoMsg(message: _230.CommunityPoolSpendProposalProtoMsg): _230.CommunityPoolSpendProposal;
                toProto(message: _230.CommunityPoolSpendProposal): Uint8Array;
                toProtoMsg(message: _230.CommunityPoolSpendProposal): _230.CommunityPoolSpendProposalProtoMsg;
            };
            DelegatorStartingInfo: {
                encode(message: _230.DelegatorStartingInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.DelegatorStartingInfo;
                fromJSON(object: any): _230.DelegatorStartingInfo;
                toJSON(message: _230.DelegatorStartingInfo): unknown;
                fromPartial(object: Partial<_230.DelegatorStartingInfo>): _230.DelegatorStartingInfo;
                fromAmino(object: _230.DelegatorStartingInfoAmino): _230.DelegatorStartingInfo;
                toAmino(message: _230.DelegatorStartingInfo): _230.DelegatorStartingInfoAmino;
                fromAminoMsg(object: _230.DelegatorStartingInfoAminoMsg): _230.DelegatorStartingInfo;
                toAminoMsg(message: _230.DelegatorStartingInfo): _230.DelegatorStartingInfoAminoMsg;
                fromProtoMsg(message: _230.DelegatorStartingInfoProtoMsg): _230.DelegatorStartingInfo;
                toProto(message: _230.DelegatorStartingInfo): Uint8Array;
                toProtoMsg(message: _230.DelegatorStartingInfo): _230.DelegatorStartingInfoProtoMsg;
            };
            DelegationDelegatorReward: {
                encode(message: _230.DelegationDelegatorReward, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.DelegationDelegatorReward;
                fromJSON(object: any): _230.DelegationDelegatorReward;
                toJSON(message: _230.DelegationDelegatorReward): unknown;
                fromPartial(object: Partial<_230.DelegationDelegatorReward>): _230.DelegationDelegatorReward;
                fromAmino(object: _230.DelegationDelegatorRewardAmino): _230.DelegationDelegatorReward;
                toAmino(message: _230.DelegationDelegatorReward): _230.DelegationDelegatorRewardAmino;
                fromAminoMsg(object: _230.DelegationDelegatorRewardAminoMsg): _230.DelegationDelegatorReward;
                toAminoMsg(message: _230.DelegationDelegatorReward): _230.DelegationDelegatorRewardAminoMsg;
                fromProtoMsg(message: _230.DelegationDelegatorRewardProtoMsg): _230.DelegationDelegatorReward;
                toProto(message: _230.DelegationDelegatorReward): Uint8Array;
                toProtoMsg(message: _230.DelegationDelegatorReward): _230.DelegationDelegatorRewardProtoMsg;
            };
            CommunityPoolSpendProposalWithDeposit: {
                encode(message: _230.CommunityPoolSpendProposalWithDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _230.CommunityPoolSpendProposalWithDeposit;
                fromJSON(object: any): _230.CommunityPoolSpendProposalWithDeposit;
                toJSON(message: _230.CommunityPoolSpendProposalWithDeposit): unknown;
                fromPartial(object: Partial<_230.CommunityPoolSpendProposalWithDeposit>): _230.CommunityPoolSpendProposalWithDeposit;
                fromAmino(object: _230.CommunityPoolSpendProposalWithDepositAmino): _230.CommunityPoolSpendProposalWithDeposit;
                toAmino(message: _230.CommunityPoolSpendProposalWithDeposit): _230.CommunityPoolSpendProposalWithDepositAmino;
                fromAminoMsg(object: _230.CommunityPoolSpendProposalWithDepositAminoMsg): _230.CommunityPoolSpendProposalWithDeposit;
                toAminoMsg(message: _230.CommunityPoolSpendProposalWithDeposit): _230.CommunityPoolSpendProposalWithDepositAminoMsg;
                fromProtoMsg(message: _230.CommunityPoolSpendProposalWithDepositProtoMsg): _230.CommunityPoolSpendProposalWithDeposit;
                toProto(message: _230.CommunityPoolSpendProposalWithDeposit): Uint8Array;
                toProtoMsg(message: _230.CommunityPoolSpendProposalWithDeposit): _230.CommunityPoolSpendProposalWithDepositProtoMsg;
            };
        };
    }
    namespace evidence {
        const v1beta1: {
            MsgClientImpl: typeof _454.MsgClientImpl;
            QueryClientImpl: typeof _438.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                evidence(request: _236.QueryEvidenceRequest): Promise<_236.QueryEvidenceResponse>;
                allEvidence(request?: _236.QueryAllEvidenceRequest): Promise<_236.QueryAllEvidenceResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitEvidence(value: _237.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitEvidence(value: _237.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _237.MsgSubmitEvidence;
                    };
                };
                toJSON: {
                    submitEvidence(value: _237.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitEvidence(value: any): {
                        typeUrl: string;
                        value: _237.MsgSubmitEvidence;
                    };
                };
                fromPartial: {
                    submitEvidence(value: _237.MsgSubmitEvidence): {
                        typeUrl: string;
                        value: _237.MsgSubmitEvidence;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.evidence.v1beta1.MsgSubmitEvidence": {
                    aminoType: string;
                    toAmino: (message: _237.MsgSubmitEvidence) => _237.MsgSubmitEvidenceAmino;
                    fromAmino: (object: _237.MsgSubmitEvidenceAmino) => _237.MsgSubmitEvidence;
                };
            };
            MsgSubmitEvidence: {
                encode(message: _237.MsgSubmitEvidence, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgSubmitEvidence;
                fromJSON(object: any): _237.MsgSubmitEvidence;
                toJSON(message: _237.MsgSubmitEvidence): unknown;
                fromPartial(object: Partial<_237.MsgSubmitEvidence>): _237.MsgSubmitEvidence;
                fromAmino(object: _237.MsgSubmitEvidenceAmino): _237.MsgSubmitEvidence;
                toAmino(message: _237.MsgSubmitEvidence): _237.MsgSubmitEvidenceAmino;
                fromAminoMsg(object: _237.MsgSubmitEvidenceAminoMsg): _237.MsgSubmitEvidence;
                toAminoMsg(message: _237.MsgSubmitEvidence): _237.MsgSubmitEvidenceAminoMsg;
                fromProtoMsg(message: _237.MsgSubmitEvidenceProtoMsg): _237.MsgSubmitEvidence;
                toProto(message: _237.MsgSubmitEvidence): Uint8Array;
                toProtoMsg(message: _237.MsgSubmitEvidence): _237.MsgSubmitEvidenceProtoMsg;
            };
            MsgSubmitEvidenceResponse: {
                encode(message: _237.MsgSubmitEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _237.MsgSubmitEvidenceResponse;
                fromJSON(object: any): _237.MsgSubmitEvidenceResponse;
                toJSON(message: _237.MsgSubmitEvidenceResponse): unknown;
                fromPartial(object: Partial<_237.MsgSubmitEvidenceResponse>): _237.MsgSubmitEvidenceResponse;
                fromAmino(object: _237.MsgSubmitEvidenceResponseAmino): _237.MsgSubmitEvidenceResponse;
                toAmino(message: _237.MsgSubmitEvidenceResponse): _237.MsgSubmitEvidenceResponseAmino;
                fromAminoMsg(object: _237.MsgSubmitEvidenceResponseAminoMsg): _237.MsgSubmitEvidenceResponse;
                toAminoMsg(message: _237.MsgSubmitEvidenceResponse): _237.MsgSubmitEvidenceResponseAminoMsg;
                fromProtoMsg(message: _237.MsgSubmitEvidenceResponseProtoMsg): _237.MsgSubmitEvidenceResponse;
                toProto(message: _237.MsgSubmitEvidenceResponse): Uint8Array;
                toProtoMsg(message: _237.MsgSubmitEvidenceResponse): _237.MsgSubmitEvidenceResponseProtoMsg;
            };
            QueryEvidenceRequest: {
                encode(message: _236.QueryEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryEvidenceRequest;
                fromJSON(object: any): _236.QueryEvidenceRequest;
                toJSON(message: _236.QueryEvidenceRequest): unknown;
                fromPartial(object: Partial<_236.QueryEvidenceRequest>): _236.QueryEvidenceRequest;
                fromAmino(object: _236.QueryEvidenceRequestAmino): _236.QueryEvidenceRequest;
                toAmino(message: _236.QueryEvidenceRequest): _236.QueryEvidenceRequestAmino;
                fromAminoMsg(object: _236.QueryEvidenceRequestAminoMsg): _236.QueryEvidenceRequest;
                toAminoMsg(message: _236.QueryEvidenceRequest): _236.QueryEvidenceRequestAminoMsg;
                fromProtoMsg(message: _236.QueryEvidenceRequestProtoMsg): _236.QueryEvidenceRequest;
                toProto(message: _236.QueryEvidenceRequest): Uint8Array;
                toProtoMsg(message: _236.QueryEvidenceRequest): _236.QueryEvidenceRequestProtoMsg;
            };
            QueryEvidenceResponse: {
                encode(message: _236.QueryEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryEvidenceResponse;
                fromJSON(object: any): _236.QueryEvidenceResponse;
                toJSON(message: _236.QueryEvidenceResponse): unknown;
                fromPartial(object: Partial<_236.QueryEvidenceResponse>): _236.QueryEvidenceResponse;
                fromAmino(object: _236.QueryEvidenceResponseAmino): _236.QueryEvidenceResponse;
                toAmino(message: _236.QueryEvidenceResponse): _236.QueryEvidenceResponseAmino;
                fromAminoMsg(object: _236.QueryEvidenceResponseAminoMsg): _236.QueryEvidenceResponse;
                toAminoMsg(message: _236.QueryEvidenceResponse): _236.QueryEvidenceResponseAminoMsg;
                fromProtoMsg(message: _236.QueryEvidenceResponseProtoMsg): _236.QueryEvidenceResponse;
                toProto(message: _236.QueryEvidenceResponse): Uint8Array;
                toProtoMsg(message: _236.QueryEvidenceResponse): _236.QueryEvidenceResponseProtoMsg;
            };
            QueryAllEvidenceRequest: {
                encode(message: _236.QueryAllEvidenceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryAllEvidenceRequest;
                fromJSON(object: any): _236.QueryAllEvidenceRequest;
                toJSON(message: _236.QueryAllEvidenceRequest): unknown;
                fromPartial(object: Partial<_236.QueryAllEvidenceRequest>): _236.QueryAllEvidenceRequest;
                fromAmino(object: _236.QueryAllEvidenceRequestAmino): _236.QueryAllEvidenceRequest;
                toAmino(message: _236.QueryAllEvidenceRequest): _236.QueryAllEvidenceRequestAmino;
                fromAminoMsg(object: _236.QueryAllEvidenceRequestAminoMsg): _236.QueryAllEvidenceRequest;
                toAminoMsg(message: _236.QueryAllEvidenceRequest): _236.QueryAllEvidenceRequestAminoMsg;
                fromProtoMsg(message: _236.QueryAllEvidenceRequestProtoMsg): _236.QueryAllEvidenceRequest;
                toProto(message: _236.QueryAllEvidenceRequest): Uint8Array;
                toProtoMsg(message: _236.QueryAllEvidenceRequest): _236.QueryAllEvidenceRequestProtoMsg;
            };
            QueryAllEvidenceResponse: {
                encode(message: _236.QueryAllEvidenceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _236.QueryAllEvidenceResponse;
                fromJSON(object: any): _236.QueryAllEvidenceResponse;
                toJSON(message: _236.QueryAllEvidenceResponse): unknown;
                fromPartial(object: Partial<_236.QueryAllEvidenceResponse>): _236.QueryAllEvidenceResponse;
                fromAmino(object: _236.QueryAllEvidenceResponseAmino): _236.QueryAllEvidenceResponse;
                toAmino(message: _236.QueryAllEvidenceResponse): _236.QueryAllEvidenceResponseAmino;
                fromAminoMsg(object: _236.QueryAllEvidenceResponseAminoMsg): _236.QueryAllEvidenceResponse;
                toAminoMsg(message: _236.QueryAllEvidenceResponse): _236.QueryAllEvidenceResponseAminoMsg;
                fromProtoMsg(message: _236.QueryAllEvidenceResponseProtoMsg): _236.QueryAllEvidenceResponse;
                toProto(message: _236.QueryAllEvidenceResponse): Uint8Array;
                toProtoMsg(message: _236.QueryAllEvidenceResponse): _236.QueryAllEvidenceResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _235.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _235.GenesisState;
                fromJSON(object: any): _235.GenesisState;
                toJSON(message: _235.GenesisState): unknown;
                fromPartial(object: Partial<_235.GenesisState>): _235.GenesisState;
                fromAmino(object: _235.GenesisStateAmino): _235.GenesisState;
                toAmino(message: _235.GenesisState): _235.GenesisStateAmino;
                fromAminoMsg(object: _235.GenesisStateAminoMsg): _235.GenesisState;
                toAminoMsg(message: _235.GenesisState): _235.GenesisStateAminoMsg;
                fromProtoMsg(message: _235.GenesisStateProtoMsg): _235.GenesisState;
                toProto(message: _235.GenesisState): Uint8Array;
                toProtoMsg(message: _235.GenesisState): _235.GenesisStateProtoMsg;
            };
            Equivocation: {
                encode(message: _234.Equivocation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _234.Equivocation;
                fromJSON(object: any): _234.Equivocation;
                toJSON(message: _234.Equivocation): unknown;
                fromPartial(object: Partial<_234.Equivocation>): _234.Equivocation;
                fromAmino(object: _234.EquivocationAmino): _234.Equivocation;
                toAmino(message: _234.Equivocation): _234.EquivocationAmino;
                fromAminoMsg(object: _234.EquivocationAminoMsg): _234.Equivocation;
                toAminoMsg(message: _234.Equivocation): _234.EquivocationAminoMsg;
                fromProtoMsg(message: _234.EquivocationProtoMsg): _234.Equivocation;
                toProto(message: _234.Equivocation): Uint8Array;
                toProtoMsg(message: _234.Equivocation): _234.EquivocationProtoMsg;
            };
        };
    }
    namespace feegrant {
        const v1beta1: {
            MsgClientImpl: typeof _455.MsgClientImpl;
            QueryClientImpl: typeof _439.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                allowance(request: _240.QueryAllowanceRequest): Promise<_240.QueryAllowanceResponse>;
                allowances(request: _240.QueryAllowancesRequest): Promise<_240.QueryAllowancesResponse>;
                allowancesByGranter(request: _240.QueryAllowancesByGranterRequest): Promise<_240.QueryAllowancesByGranterResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    grantAllowance(value: _241.MsgGrantAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    revokeAllowance(value: _241.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    grantAllowance(value: _241.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _241.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _241.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _241.MsgRevokeAllowance;
                    };
                };
                toJSON: {
                    grantAllowance(value: _241.MsgGrantAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                    revokeAllowance(value: _241.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    grantAllowance(value: any): {
                        typeUrl: string;
                        value: _241.MsgGrantAllowance;
                    };
                    revokeAllowance(value: any): {
                        typeUrl: string;
                        value: _241.MsgRevokeAllowance;
                    };
                };
                fromPartial: {
                    grantAllowance(value: _241.MsgGrantAllowance): {
                        typeUrl: string;
                        value: _241.MsgGrantAllowance;
                    };
                    revokeAllowance(value: _241.MsgRevokeAllowance): {
                        typeUrl: string;
                        value: _241.MsgRevokeAllowance;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.feegrant.v1beta1.MsgGrantAllowance": {
                    aminoType: string;
                    toAmino: (message: _241.MsgGrantAllowance) => _241.MsgGrantAllowanceAmino;
                    fromAmino: (object: _241.MsgGrantAllowanceAmino) => _241.MsgGrantAllowance;
                };
                "/cosmos.feegrant.v1beta1.MsgRevokeAllowance": {
                    aminoType: string;
                    toAmino: (message: _241.MsgRevokeAllowance) => _241.MsgRevokeAllowanceAmino;
                    fromAmino: (object: _241.MsgRevokeAllowanceAmino) => _241.MsgRevokeAllowance;
                };
            };
            MsgGrantAllowance: {
                encode(message: _241.MsgGrantAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgGrantAllowance;
                fromJSON(object: any): _241.MsgGrantAllowance;
                toJSON(message: _241.MsgGrantAllowance): unknown;
                fromPartial(object: Partial<_241.MsgGrantAllowance>): _241.MsgGrantAllowance;
                fromAmino(object: _241.MsgGrantAllowanceAmino): _241.MsgGrantAllowance;
                toAmino(message: _241.MsgGrantAllowance): _241.MsgGrantAllowanceAmino;
                fromAminoMsg(object: _241.MsgGrantAllowanceAminoMsg): _241.MsgGrantAllowance;
                toAminoMsg(message: _241.MsgGrantAllowance): _241.MsgGrantAllowanceAminoMsg;
                fromProtoMsg(message: _241.MsgGrantAllowanceProtoMsg): _241.MsgGrantAllowance;
                toProto(message: _241.MsgGrantAllowance): Uint8Array;
                toProtoMsg(message: _241.MsgGrantAllowance): _241.MsgGrantAllowanceProtoMsg;
            };
            MsgGrantAllowanceResponse: {
                encode(_: _241.MsgGrantAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgGrantAllowanceResponse;
                fromJSON(_: any): _241.MsgGrantAllowanceResponse;
                toJSON(_: _241.MsgGrantAllowanceResponse): unknown;
                fromPartial(_: Partial<_241.MsgGrantAllowanceResponse>): _241.MsgGrantAllowanceResponse;
                fromAmino(_: _241.MsgGrantAllowanceResponseAmino): _241.MsgGrantAllowanceResponse;
                toAmino(_: _241.MsgGrantAllowanceResponse): _241.MsgGrantAllowanceResponseAmino;
                fromAminoMsg(object: _241.MsgGrantAllowanceResponseAminoMsg): _241.MsgGrantAllowanceResponse;
                toAminoMsg(message: _241.MsgGrantAllowanceResponse): _241.MsgGrantAllowanceResponseAminoMsg;
                fromProtoMsg(message: _241.MsgGrantAllowanceResponseProtoMsg): _241.MsgGrantAllowanceResponse;
                toProto(message: _241.MsgGrantAllowanceResponse): Uint8Array;
                toProtoMsg(message: _241.MsgGrantAllowanceResponse): _241.MsgGrantAllowanceResponseProtoMsg;
            };
            MsgRevokeAllowance: {
                encode(message: _241.MsgRevokeAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRevokeAllowance;
                fromJSON(object: any): _241.MsgRevokeAllowance;
                toJSON(message: _241.MsgRevokeAllowance): unknown;
                fromPartial(object: Partial<_241.MsgRevokeAllowance>): _241.MsgRevokeAllowance;
                fromAmino(object: _241.MsgRevokeAllowanceAmino): _241.MsgRevokeAllowance;
                toAmino(message: _241.MsgRevokeAllowance): _241.MsgRevokeAllowanceAmino;
                fromAminoMsg(object: _241.MsgRevokeAllowanceAminoMsg): _241.MsgRevokeAllowance;
                toAminoMsg(message: _241.MsgRevokeAllowance): _241.MsgRevokeAllowanceAminoMsg;
                fromProtoMsg(message: _241.MsgRevokeAllowanceProtoMsg): _241.MsgRevokeAllowance;
                toProto(message: _241.MsgRevokeAllowance): Uint8Array;
                toProtoMsg(message: _241.MsgRevokeAllowance): _241.MsgRevokeAllowanceProtoMsg;
            };
            MsgRevokeAllowanceResponse: {
                encode(_: _241.MsgRevokeAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _241.MsgRevokeAllowanceResponse;
                fromJSON(_: any): _241.MsgRevokeAllowanceResponse;
                toJSON(_: _241.MsgRevokeAllowanceResponse): unknown;
                fromPartial(_: Partial<_241.MsgRevokeAllowanceResponse>): _241.MsgRevokeAllowanceResponse;
                fromAmino(_: _241.MsgRevokeAllowanceResponseAmino): _241.MsgRevokeAllowanceResponse;
                toAmino(_: _241.MsgRevokeAllowanceResponse): _241.MsgRevokeAllowanceResponseAmino;
                fromAminoMsg(object: _241.MsgRevokeAllowanceResponseAminoMsg): _241.MsgRevokeAllowanceResponse;
                toAminoMsg(message: _241.MsgRevokeAllowanceResponse): _241.MsgRevokeAllowanceResponseAminoMsg;
                fromProtoMsg(message: _241.MsgRevokeAllowanceResponseProtoMsg): _241.MsgRevokeAllowanceResponse;
                toProto(message: _241.MsgRevokeAllowanceResponse): Uint8Array;
                toProtoMsg(message: _241.MsgRevokeAllowanceResponse): _241.MsgRevokeAllowanceResponseProtoMsg;
            };
            QueryAllowanceRequest: {
                encode(message: _240.QueryAllowanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowanceRequest;
                fromJSON(object: any): _240.QueryAllowanceRequest;
                toJSON(message: _240.QueryAllowanceRequest): unknown;
                fromPartial(object: Partial<_240.QueryAllowanceRequest>): _240.QueryAllowanceRequest;
                fromAmino(object: _240.QueryAllowanceRequestAmino): _240.QueryAllowanceRequest;
                toAmino(message: _240.QueryAllowanceRequest): _240.QueryAllowanceRequestAmino;
                fromAminoMsg(object: _240.QueryAllowanceRequestAminoMsg): _240.QueryAllowanceRequest;
                toAminoMsg(message: _240.QueryAllowanceRequest): _240.QueryAllowanceRequestAminoMsg;
                fromProtoMsg(message: _240.QueryAllowanceRequestProtoMsg): _240.QueryAllowanceRequest;
                toProto(message: _240.QueryAllowanceRequest): Uint8Array;
                toProtoMsg(message: _240.QueryAllowanceRequest): _240.QueryAllowanceRequestProtoMsg;
            };
            QueryAllowanceResponse: {
                encode(message: _240.QueryAllowanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowanceResponse;
                fromJSON(object: any): _240.QueryAllowanceResponse;
                toJSON(message: _240.QueryAllowanceResponse): unknown;
                fromPartial(object: Partial<_240.QueryAllowanceResponse>): _240.QueryAllowanceResponse;
                fromAmino(object: _240.QueryAllowanceResponseAmino): _240.QueryAllowanceResponse;
                toAmino(message: _240.QueryAllowanceResponse): _240.QueryAllowanceResponseAmino;
                fromAminoMsg(object: _240.QueryAllowanceResponseAminoMsg): _240.QueryAllowanceResponse;
                toAminoMsg(message: _240.QueryAllowanceResponse): _240.QueryAllowanceResponseAminoMsg;
                fromProtoMsg(message: _240.QueryAllowanceResponseProtoMsg): _240.QueryAllowanceResponse;
                toProto(message: _240.QueryAllowanceResponse): Uint8Array;
                toProtoMsg(message: _240.QueryAllowanceResponse): _240.QueryAllowanceResponseProtoMsg;
            };
            QueryAllowancesRequest: {
                encode(message: _240.QueryAllowancesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowancesRequest;
                fromJSON(object: any): _240.QueryAllowancesRequest;
                toJSON(message: _240.QueryAllowancesRequest): unknown;
                fromPartial(object: Partial<_240.QueryAllowancesRequest>): _240.QueryAllowancesRequest;
                fromAmino(object: _240.QueryAllowancesRequestAmino): _240.QueryAllowancesRequest;
                toAmino(message: _240.QueryAllowancesRequest): _240.QueryAllowancesRequestAmino;
                fromAminoMsg(object: _240.QueryAllowancesRequestAminoMsg): _240.QueryAllowancesRequest;
                toAminoMsg(message: _240.QueryAllowancesRequest): _240.QueryAllowancesRequestAminoMsg;
                fromProtoMsg(message: _240.QueryAllowancesRequestProtoMsg): _240.QueryAllowancesRequest;
                toProto(message: _240.QueryAllowancesRequest): Uint8Array;
                toProtoMsg(message: _240.QueryAllowancesRequest): _240.QueryAllowancesRequestProtoMsg;
            };
            QueryAllowancesResponse: {
                encode(message: _240.QueryAllowancesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowancesResponse;
                fromJSON(object: any): _240.QueryAllowancesResponse;
                toJSON(message: _240.QueryAllowancesResponse): unknown;
                fromPartial(object: Partial<_240.QueryAllowancesResponse>): _240.QueryAllowancesResponse;
                fromAmino(object: _240.QueryAllowancesResponseAmino): _240.QueryAllowancesResponse;
                toAmino(message: _240.QueryAllowancesResponse): _240.QueryAllowancesResponseAmino;
                fromAminoMsg(object: _240.QueryAllowancesResponseAminoMsg): _240.QueryAllowancesResponse;
                toAminoMsg(message: _240.QueryAllowancesResponse): _240.QueryAllowancesResponseAminoMsg;
                fromProtoMsg(message: _240.QueryAllowancesResponseProtoMsg): _240.QueryAllowancesResponse;
                toProto(message: _240.QueryAllowancesResponse): Uint8Array;
                toProtoMsg(message: _240.QueryAllowancesResponse): _240.QueryAllowancesResponseProtoMsg;
            };
            QueryAllowancesByGranterRequest: {
                encode(message: _240.QueryAllowancesByGranterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowancesByGranterRequest;
                fromJSON(object: any): _240.QueryAllowancesByGranterRequest;
                toJSON(message: _240.QueryAllowancesByGranterRequest): unknown;
                fromPartial(object: Partial<_240.QueryAllowancesByGranterRequest>): _240.QueryAllowancesByGranterRequest;
                fromAmino(object: _240.QueryAllowancesByGranterRequestAmino): _240.QueryAllowancesByGranterRequest;
                toAmino(message: _240.QueryAllowancesByGranterRequest): _240.QueryAllowancesByGranterRequestAmino;
                fromAminoMsg(object: _240.QueryAllowancesByGranterRequestAminoMsg): _240.QueryAllowancesByGranterRequest;
                toAminoMsg(message: _240.QueryAllowancesByGranterRequest): _240.QueryAllowancesByGranterRequestAminoMsg;
                fromProtoMsg(message: _240.QueryAllowancesByGranterRequestProtoMsg): _240.QueryAllowancesByGranterRequest;
                toProto(message: _240.QueryAllowancesByGranterRequest): Uint8Array;
                toProtoMsg(message: _240.QueryAllowancesByGranterRequest): _240.QueryAllowancesByGranterRequestProtoMsg;
            };
            QueryAllowancesByGranterResponse: {
                encode(message: _240.QueryAllowancesByGranterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _240.QueryAllowancesByGranterResponse;
                fromJSON(object: any): _240.QueryAllowancesByGranterResponse;
                toJSON(message: _240.QueryAllowancesByGranterResponse): unknown;
                fromPartial(object: Partial<_240.QueryAllowancesByGranterResponse>): _240.QueryAllowancesByGranterResponse;
                fromAmino(object: _240.QueryAllowancesByGranterResponseAmino): _240.QueryAllowancesByGranterResponse;
                toAmino(message: _240.QueryAllowancesByGranterResponse): _240.QueryAllowancesByGranterResponseAmino;
                fromAminoMsg(object: _240.QueryAllowancesByGranterResponseAminoMsg): _240.QueryAllowancesByGranterResponse;
                toAminoMsg(message: _240.QueryAllowancesByGranterResponse): _240.QueryAllowancesByGranterResponseAminoMsg;
                fromProtoMsg(message: _240.QueryAllowancesByGranterResponseProtoMsg): _240.QueryAllowancesByGranterResponse;
                toProto(message: _240.QueryAllowancesByGranterResponse): Uint8Array;
                toProtoMsg(message: _240.QueryAllowancesByGranterResponse): _240.QueryAllowancesByGranterResponseProtoMsg;
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
            BasicAllowance: {
                encode(message: _238.BasicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.BasicAllowance;
                fromJSON(object: any): _238.BasicAllowance;
                toJSON(message: _238.BasicAllowance): unknown;
                fromPartial(object: Partial<_238.BasicAllowance>): _238.BasicAllowance;
                fromAmino(object: _238.BasicAllowanceAmino): _238.BasicAllowance;
                toAmino(message: _238.BasicAllowance): _238.BasicAllowanceAmino;
                fromAminoMsg(object: _238.BasicAllowanceAminoMsg): _238.BasicAllowance;
                toAminoMsg(message: _238.BasicAllowance): _238.BasicAllowanceAminoMsg;
                fromProtoMsg(message: _238.BasicAllowanceProtoMsg): _238.BasicAllowance;
                toProto(message: _238.BasicAllowance): Uint8Array;
                toProtoMsg(message: _238.BasicAllowance): _238.BasicAllowanceProtoMsg;
            };
            PeriodicAllowance: {
                encode(message: _238.PeriodicAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.PeriodicAllowance;
                fromJSON(object: any): _238.PeriodicAllowance;
                toJSON(message: _238.PeriodicAllowance): unknown;
                fromPartial(object: Partial<_238.PeriodicAllowance>): _238.PeriodicAllowance;
                fromAmino(object: _238.PeriodicAllowanceAmino): _238.PeriodicAllowance;
                toAmino(message: _238.PeriodicAllowance): _238.PeriodicAllowanceAmino;
                fromAminoMsg(object: _238.PeriodicAllowanceAminoMsg): _238.PeriodicAllowance;
                toAminoMsg(message: _238.PeriodicAllowance): _238.PeriodicAllowanceAminoMsg;
                fromProtoMsg(message: _238.PeriodicAllowanceProtoMsg): _238.PeriodicAllowance;
                toProto(message: _238.PeriodicAllowance): Uint8Array;
                toProtoMsg(message: _238.PeriodicAllowance): _238.PeriodicAllowanceProtoMsg;
            };
            AllowedMsgAllowance: {
                encode(message: _238.AllowedMsgAllowance, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.AllowedMsgAllowance;
                fromJSON(object: any): _238.AllowedMsgAllowance;
                toJSON(message: _238.AllowedMsgAllowance): unknown;
                fromPartial(object: Partial<_238.AllowedMsgAllowance>): _238.AllowedMsgAllowance;
                fromAmino(object: _238.AllowedMsgAllowanceAmino): _238.AllowedMsgAllowance;
                toAmino(message: _238.AllowedMsgAllowance): _238.AllowedMsgAllowanceAmino;
                fromAminoMsg(object: _238.AllowedMsgAllowanceAminoMsg): _238.AllowedMsgAllowance;
                toAminoMsg(message: _238.AllowedMsgAllowance): _238.AllowedMsgAllowanceAminoMsg;
                fromProtoMsg(message: _238.AllowedMsgAllowanceProtoMsg): _238.AllowedMsgAllowance;
                toProto(message: _238.AllowedMsgAllowance): Uint8Array;
                toProtoMsg(message: _238.AllowedMsgAllowance): _238.AllowedMsgAllowanceProtoMsg;
            };
            Grant: {
                encode(message: _238.Grant, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _238.Grant;
                fromJSON(object: any): _238.Grant;
                toJSON(message: _238.Grant): unknown;
                fromPartial(object: Partial<_238.Grant>): _238.Grant;
                fromAmino(object: _238.GrantAmino): _238.Grant;
                toAmino(message: _238.Grant): _238.GrantAmino;
                fromAminoMsg(object: _238.GrantAminoMsg): _238.Grant;
                toAminoMsg(message: _238.Grant): _238.GrantAminoMsg;
                fromProtoMsg(message: _238.GrantProtoMsg): _238.Grant;
                toProto(message: _238.Grant): Uint8Array;
                toProtoMsg(message: _238.Grant): _238.GrantProtoMsg;
            };
        };
    }
    namespace genutil {
        const v1beta1: {
            GenesisState: {
                encode(message: _242.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _242.GenesisState;
                fromJSON(object: any): _242.GenesisState;
                toJSON(message: _242.GenesisState): unknown;
                fromPartial(object: Partial<_242.GenesisState>): _242.GenesisState;
                fromAmino(object: _242.GenesisStateAmino): _242.GenesisState;
                toAmino(message: _242.GenesisState): _242.GenesisStateAmino;
                fromAminoMsg(object: _242.GenesisStateAminoMsg): _242.GenesisState;
                toAminoMsg(message: _242.GenesisState): _242.GenesisStateAminoMsg;
                fromProtoMsg(message: _242.GenesisStateProtoMsg): _242.GenesisState;
                toProto(message: _242.GenesisState): Uint8Array;
                toProtoMsg(message: _242.GenesisState): _242.GenesisStateProtoMsg;
            };
        };
    }
    namespace gov {
        const v1: {
            MsgClientImpl: typeof _456.MsgClientImpl;
            QueryClientImpl: typeof _440.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _245.QueryProposalRequest): Promise<_245.QueryProposalResponse>;
                proposals(request: _245.QueryProposalsRequest): Promise<_245.QueryProposalsResponse>;
                vote(request: _245.QueryVoteRequest): Promise<_245.QueryVoteResponse>;
                votes(request: _245.QueryVotesRequest): Promise<_245.QueryVotesResponse>;
                params(request: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                deposit(request: _245.QueryDepositRequest): Promise<_245.QueryDepositResponse>;
                deposits(request: _245.QueryDepositsRequest): Promise<_245.QueryDepositsResponse>;
                tallyResult(request: _245.QueryTallyResultRequest): Promise<_245.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _246.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    execLegacyContent(value: _246.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _246.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _246.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _246.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _246.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _246.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _246.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _246.MsgExecLegacyContent;
                    };
                    vote(value: _246.MsgVote): {
                        typeUrl: string;
                        value: _246.MsgVote;
                    };
                    voteWeighted(value: _246.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _246.MsgVoteWeighted;
                    };
                    deposit(value: _246.MsgDeposit): {
                        typeUrl: string;
                        value: _246.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _246.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    execLegacyContent(value: _246.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _246.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _246.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _246.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _246.MsgSubmitProposal;
                    };
                    execLegacyContent(value: any): {
                        typeUrl: string;
                        value: _246.MsgExecLegacyContent;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _246.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _246.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _246.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _246.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _246.MsgSubmitProposal;
                    };
                    execLegacyContent(value: _246.MsgExecLegacyContent): {
                        typeUrl: string;
                        value: _246.MsgExecLegacyContent;
                    };
                    vote(value: _246.MsgVote): {
                        typeUrl: string;
                        value: _246.MsgVote;
                    };
                    voteWeighted(value: _246.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _246.MsgVoteWeighted;
                    };
                    deposit(value: _246.MsgDeposit): {
                        typeUrl: string;
                        value: _246.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _246.MsgSubmitProposal) => _246.MsgSubmitProposalAmino;
                    fromAmino: (object: _246.MsgSubmitProposalAmino) => _246.MsgSubmitProposal;
                };
                "/cosmos.gov.v1.MsgExecLegacyContent": {
                    aminoType: string;
                    toAmino: (message: _246.MsgExecLegacyContent) => _246.MsgExecLegacyContentAmino;
                    fromAmino: (object: _246.MsgExecLegacyContentAmino) => _246.MsgExecLegacyContent;
                };
                "/cosmos.gov.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _246.MsgVote) => _246.MsgVoteAmino;
                    fromAmino: (object: _246.MsgVoteAmino) => _246.MsgVote;
                };
                "/cosmos.gov.v1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _246.MsgVoteWeighted) => _246.MsgVoteWeightedAmino;
                    fromAmino: (object: _246.MsgVoteWeightedAmino) => _246.MsgVoteWeighted;
                };
                "/cosmos.gov.v1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _246.MsgDeposit) => _246.MsgDepositAmino;
                    fromAmino: (object: _246.MsgDepositAmino) => _246.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _246.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgSubmitProposal;
                fromJSON(object: any): _246.MsgSubmitProposal;
                toJSON(message: _246.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_246.MsgSubmitProposal>): _246.MsgSubmitProposal;
                fromAmino(object: _246.MsgSubmitProposalAmino): _246.MsgSubmitProposal;
                toAmino(message: _246.MsgSubmitProposal): _246.MsgSubmitProposalAmino;
                fromAminoMsg(object: _246.MsgSubmitProposalAminoMsg): _246.MsgSubmitProposal;
                toAminoMsg(message: _246.MsgSubmitProposal): _246.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _246.MsgSubmitProposalProtoMsg): _246.MsgSubmitProposal;
                toProto(message: _246.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _246.MsgSubmitProposal): _246.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _246.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgSubmitProposalResponse;
                fromJSON(object: any): _246.MsgSubmitProposalResponse;
                toJSON(message: _246.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_246.MsgSubmitProposalResponse>): _246.MsgSubmitProposalResponse;
                fromAmino(object: _246.MsgSubmitProposalResponseAmino): _246.MsgSubmitProposalResponse;
                toAmino(message: _246.MsgSubmitProposalResponse): _246.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _246.MsgSubmitProposalResponseAminoMsg): _246.MsgSubmitProposalResponse;
                toAminoMsg(message: _246.MsgSubmitProposalResponse): _246.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _246.MsgSubmitProposalResponseProtoMsg): _246.MsgSubmitProposalResponse;
                toProto(message: _246.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _246.MsgSubmitProposalResponse): _246.MsgSubmitProposalResponseProtoMsg;
            };
            MsgExecLegacyContent: {
                encode(message: _246.MsgExecLegacyContent, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgExecLegacyContent;
                fromJSON(object: any): _246.MsgExecLegacyContent;
                toJSON(message: _246.MsgExecLegacyContent): unknown;
                fromPartial(object: Partial<_246.MsgExecLegacyContent>): _246.MsgExecLegacyContent;
                fromAmino(object: _246.MsgExecLegacyContentAmino): _246.MsgExecLegacyContent;
                toAmino(message: _246.MsgExecLegacyContent): _246.MsgExecLegacyContentAmino;
                fromAminoMsg(object: _246.MsgExecLegacyContentAminoMsg): _246.MsgExecLegacyContent;
                toAminoMsg(message: _246.MsgExecLegacyContent): _246.MsgExecLegacyContentAminoMsg;
                fromProtoMsg(message: _246.MsgExecLegacyContentProtoMsg): _246.MsgExecLegacyContent;
                toProto(message: _246.MsgExecLegacyContent): Uint8Array;
                toProtoMsg(message: _246.MsgExecLegacyContent): _246.MsgExecLegacyContentProtoMsg;
            };
            MsgExecLegacyContentResponse: {
                encode(_: _246.MsgExecLegacyContentResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgExecLegacyContentResponse;
                fromJSON(_: any): _246.MsgExecLegacyContentResponse;
                toJSON(_: _246.MsgExecLegacyContentResponse): unknown;
                fromPartial(_: Partial<_246.MsgExecLegacyContentResponse>): _246.MsgExecLegacyContentResponse;
                fromAmino(_: _246.MsgExecLegacyContentResponseAmino): _246.MsgExecLegacyContentResponse;
                toAmino(_: _246.MsgExecLegacyContentResponse): _246.MsgExecLegacyContentResponseAmino;
                fromAminoMsg(object: _246.MsgExecLegacyContentResponseAminoMsg): _246.MsgExecLegacyContentResponse;
                toAminoMsg(message: _246.MsgExecLegacyContentResponse): _246.MsgExecLegacyContentResponseAminoMsg;
                fromProtoMsg(message: _246.MsgExecLegacyContentResponseProtoMsg): _246.MsgExecLegacyContentResponse;
                toProto(message: _246.MsgExecLegacyContentResponse): Uint8Array;
                toProtoMsg(message: _246.MsgExecLegacyContentResponse): _246.MsgExecLegacyContentResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _246.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgVote;
                fromJSON(object: any): _246.MsgVote;
                toJSON(message: _246.MsgVote): unknown;
                fromPartial(object: Partial<_246.MsgVote>): _246.MsgVote;
                fromAmino(object: _246.MsgVoteAmino): _246.MsgVote;
                toAmino(message: _246.MsgVote): _246.MsgVoteAmino;
                fromAminoMsg(object: _246.MsgVoteAminoMsg): _246.MsgVote;
                toAminoMsg(message: _246.MsgVote): _246.MsgVoteAminoMsg;
                fromProtoMsg(message: _246.MsgVoteProtoMsg): _246.MsgVote;
                toProto(message: _246.MsgVote): Uint8Array;
                toProtoMsg(message: _246.MsgVote): _246.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _246.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgVoteResponse;
                fromJSON(_: any): _246.MsgVoteResponse;
                toJSON(_: _246.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_246.MsgVoteResponse>): _246.MsgVoteResponse;
                fromAmino(_: _246.MsgVoteResponseAmino): _246.MsgVoteResponse;
                toAmino(_: _246.MsgVoteResponse): _246.MsgVoteResponseAmino;
                fromAminoMsg(object: _246.MsgVoteResponseAminoMsg): _246.MsgVoteResponse;
                toAminoMsg(message: _246.MsgVoteResponse): _246.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _246.MsgVoteResponseProtoMsg): _246.MsgVoteResponse;
                toProto(message: _246.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _246.MsgVoteResponse): _246.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _246.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgVoteWeighted;
                fromJSON(object: any): _246.MsgVoteWeighted;
                toJSON(message: _246.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_246.MsgVoteWeighted>): _246.MsgVoteWeighted;
                fromAmino(object: _246.MsgVoteWeightedAmino): _246.MsgVoteWeighted;
                toAmino(message: _246.MsgVoteWeighted): _246.MsgVoteWeightedAmino;
                fromAminoMsg(object: _246.MsgVoteWeightedAminoMsg): _246.MsgVoteWeighted;
                toAminoMsg(message: _246.MsgVoteWeighted): _246.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _246.MsgVoteWeightedProtoMsg): _246.MsgVoteWeighted;
                toProto(message: _246.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _246.MsgVoteWeighted): _246.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _246.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgVoteWeightedResponse;
                fromJSON(_: any): _246.MsgVoteWeightedResponse;
                toJSON(_: _246.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_246.MsgVoteWeightedResponse>): _246.MsgVoteWeightedResponse;
                fromAmino(_: _246.MsgVoteWeightedResponseAmino): _246.MsgVoteWeightedResponse;
                toAmino(_: _246.MsgVoteWeightedResponse): _246.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _246.MsgVoteWeightedResponseAminoMsg): _246.MsgVoteWeightedResponse;
                toAminoMsg(message: _246.MsgVoteWeightedResponse): _246.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _246.MsgVoteWeightedResponseProtoMsg): _246.MsgVoteWeightedResponse;
                toProto(message: _246.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _246.MsgVoteWeightedResponse): _246.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _246.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgDeposit;
                fromJSON(object: any): _246.MsgDeposit;
                toJSON(message: _246.MsgDeposit): unknown;
                fromPartial(object: Partial<_246.MsgDeposit>): _246.MsgDeposit;
                fromAmino(object: _246.MsgDepositAmino): _246.MsgDeposit;
                toAmino(message: _246.MsgDeposit): _246.MsgDepositAmino;
                fromAminoMsg(object: _246.MsgDepositAminoMsg): _246.MsgDeposit;
                toAminoMsg(message: _246.MsgDeposit): _246.MsgDepositAminoMsg;
                fromProtoMsg(message: _246.MsgDepositProtoMsg): _246.MsgDeposit;
                toProto(message: _246.MsgDeposit): Uint8Array;
                toProtoMsg(message: _246.MsgDeposit): _246.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _246.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _246.MsgDepositResponse;
                fromJSON(_: any): _246.MsgDepositResponse;
                toJSON(_: _246.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_246.MsgDepositResponse>): _246.MsgDepositResponse;
                fromAmino(_: _246.MsgDepositResponseAmino): _246.MsgDepositResponse;
                toAmino(_: _246.MsgDepositResponse): _246.MsgDepositResponseAmino;
                fromAminoMsg(object: _246.MsgDepositResponseAminoMsg): _246.MsgDepositResponse;
                toAminoMsg(message: _246.MsgDepositResponse): _246.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _246.MsgDepositResponseProtoMsg): _246.MsgDepositResponse;
                toProto(message: _246.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _246.MsgDepositResponse): _246.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _245.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryProposalRequest;
                fromJSON(object: any): _245.QueryProposalRequest;
                toJSON(message: _245.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_245.QueryProposalRequest>): _245.QueryProposalRequest;
                fromAmino(object: _245.QueryProposalRequestAmino): _245.QueryProposalRequest;
                toAmino(message: _245.QueryProposalRequest): _245.QueryProposalRequestAmino;
                fromAminoMsg(object: _245.QueryProposalRequestAminoMsg): _245.QueryProposalRequest;
                toAminoMsg(message: _245.QueryProposalRequest): _245.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _245.QueryProposalRequestProtoMsg): _245.QueryProposalRequest;
                toProto(message: _245.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _245.QueryProposalRequest): _245.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _245.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryProposalResponse;
                fromJSON(object: any): _245.QueryProposalResponse;
                toJSON(message: _245.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_245.QueryProposalResponse>): _245.QueryProposalResponse;
                fromAmino(object: _245.QueryProposalResponseAmino): _245.QueryProposalResponse;
                toAmino(message: _245.QueryProposalResponse): _245.QueryProposalResponseAmino;
                fromAminoMsg(object: _245.QueryProposalResponseAminoMsg): _245.QueryProposalResponse;
                toAminoMsg(message: _245.QueryProposalResponse): _245.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _245.QueryProposalResponseProtoMsg): _245.QueryProposalResponse;
                toProto(message: _245.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _245.QueryProposalResponse): _245.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _245.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryProposalsRequest;
                fromJSON(object: any): _245.QueryProposalsRequest;
                toJSON(message: _245.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_245.QueryProposalsRequest>): _245.QueryProposalsRequest;
                fromAmino(object: _245.QueryProposalsRequestAmino): _245.QueryProposalsRequest;
                toAmino(message: _245.QueryProposalsRequest): _245.QueryProposalsRequestAmino;
                fromAminoMsg(object: _245.QueryProposalsRequestAminoMsg): _245.QueryProposalsRequest;
                toAminoMsg(message: _245.QueryProposalsRequest): _245.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _245.QueryProposalsRequestProtoMsg): _245.QueryProposalsRequest;
                toProto(message: _245.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryProposalsRequest): _245.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _245.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryProposalsResponse;
                fromJSON(object: any): _245.QueryProposalsResponse;
                toJSON(message: _245.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_245.QueryProposalsResponse>): _245.QueryProposalsResponse;
                fromAmino(object: _245.QueryProposalsResponseAmino): _245.QueryProposalsResponse;
                toAmino(message: _245.QueryProposalsResponse): _245.QueryProposalsResponseAmino;
                fromAminoMsg(object: _245.QueryProposalsResponseAminoMsg): _245.QueryProposalsResponse;
                toAminoMsg(message: _245.QueryProposalsResponse): _245.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _245.QueryProposalsResponseProtoMsg): _245.QueryProposalsResponse;
                toProto(message: _245.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryProposalsResponse): _245.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _245.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryVoteRequest;
                fromJSON(object: any): _245.QueryVoteRequest;
                toJSON(message: _245.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_245.QueryVoteRequest>): _245.QueryVoteRequest;
                fromAmino(object: _245.QueryVoteRequestAmino): _245.QueryVoteRequest;
                toAmino(message: _245.QueryVoteRequest): _245.QueryVoteRequestAmino;
                fromAminoMsg(object: _245.QueryVoteRequestAminoMsg): _245.QueryVoteRequest;
                toAminoMsg(message: _245.QueryVoteRequest): _245.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _245.QueryVoteRequestProtoMsg): _245.QueryVoteRequest;
                toProto(message: _245.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _245.QueryVoteRequest): _245.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _245.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryVoteResponse;
                fromJSON(object: any): _245.QueryVoteResponse;
                toJSON(message: _245.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_245.QueryVoteResponse>): _245.QueryVoteResponse;
                fromAmino(object: _245.QueryVoteResponseAmino): _245.QueryVoteResponse;
                toAmino(message: _245.QueryVoteResponse): _245.QueryVoteResponseAmino;
                fromAminoMsg(object: _245.QueryVoteResponseAminoMsg): _245.QueryVoteResponse;
                toAminoMsg(message: _245.QueryVoteResponse): _245.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _245.QueryVoteResponseProtoMsg): _245.QueryVoteResponse;
                toProto(message: _245.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _245.QueryVoteResponse): _245.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _245.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryVotesRequest;
                fromJSON(object: any): _245.QueryVotesRequest;
                toJSON(message: _245.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_245.QueryVotesRequest>): _245.QueryVotesRequest;
                fromAmino(object: _245.QueryVotesRequestAmino): _245.QueryVotesRequest;
                toAmino(message: _245.QueryVotesRequest): _245.QueryVotesRequestAmino;
                fromAminoMsg(object: _245.QueryVotesRequestAminoMsg): _245.QueryVotesRequest;
                toAminoMsg(message: _245.QueryVotesRequest): _245.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _245.QueryVotesRequestProtoMsg): _245.QueryVotesRequest;
                toProto(message: _245.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _245.QueryVotesRequest): _245.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _245.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryVotesResponse;
                fromJSON(object: any): _245.QueryVotesResponse;
                toJSON(message: _245.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_245.QueryVotesResponse>): _245.QueryVotesResponse;
                fromAmino(object: _245.QueryVotesResponseAmino): _245.QueryVotesResponse;
                toAmino(message: _245.QueryVotesResponse): _245.QueryVotesResponseAmino;
                fromAminoMsg(object: _245.QueryVotesResponseAminoMsg): _245.QueryVotesResponse;
                toAminoMsg(message: _245.QueryVotesResponse): _245.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _245.QueryVotesResponseProtoMsg): _245.QueryVotesResponse;
                toProto(message: _245.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _245.QueryVotesResponse): _245.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _245.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsRequest;
                fromJSON(object: any): _245.QueryParamsRequest;
                toJSON(message: _245.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_245.QueryParamsRequest>): _245.QueryParamsRequest;
                fromAmino(object: _245.QueryParamsRequestAmino): _245.QueryParamsRequest;
                toAmino(message: _245.QueryParamsRequest): _245.QueryParamsRequestAmino;
                fromAminoMsg(object: _245.QueryParamsRequestAminoMsg): _245.QueryParamsRequest;
                toAminoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _245.QueryParamsRequestProtoMsg): _245.QueryParamsRequest;
                toProto(message: _245.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryParamsRequest): _245.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _245.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryParamsResponse;
                fromJSON(object: any): _245.QueryParamsResponse;
                toJSON(message: _245.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_245.QueryParamsResponse>): _245.QueryParamsResponse;
                fromAmino(object: _245.QueryParamsResponseAmino): _245.QueryParamsResponse;
                toAmino(message: _245.QueryParamsResponse): _245.QueryParamsResponseAmino;
                fromAminoMsg(object: _245.QueryParamsResponseAminoMsg): _245.QueryParamsResponse;
                toAminoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _245.QueryParamsResponseProtoMsg): _245.QueryParamsResponse;
                toProto(message: _245.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryParamsResponse): _245.QueryParamsResponseProtoMsg;
            };
            QueryDepositRequest: {
                encode(message: _245.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositRequest;
                fromJSON(object: any): _245.QueryDepositRequest;
                toJSON(message: _245.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_245.QueryDepositRequest>): _245.QueryDepositRequest;
                fromAmino(object: _245.QueryDepositRequestAmino): _245.QueryDepositRequest;
                toAmino(message: _245.QueryDepositRequest): _245.QueryDepositRequestAmino;
                fromAminoMsg(object: _245.QueryDepositRequestAminoMsg): _245.QueryDepositRequest;
                toAminoMsg(message: _245.QueryDepositRequest): _245.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _245.QueryDepositRequestProtoMsg): _245.QueryDepositRequest;
                toProto(message: _245.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _245.QueryDepositRequest): _245.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _245.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositResponse;
                fromJSON(object: any): _245.QueryDepositResponse;
                toJSON(message: _245.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_245.QueryDepositResponse>): _245.QueryDepositResponse;
                fromAmino(object: _245.QueryDepositResponseAmino): _245.QueryDepositResponse;
                toAmino(message: _245.QueryDepositResponse): _245.QueryDepositResponseAmino;
                fromAminoMsg(object: _245.QueryDepositResponseAminoMsg): _245.QueryDepositResponse;
                toAminoMsg(message: _245.QueryDepositResponse): _245.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _245.QueryDepositResponseProtoMsg): _245.QueryDepositResponse;
                toProto(message: _245.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _245.QueryDepositResponse): _245.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _245.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositsRequest;
                fromJSON(object: any): _245.QueryDepositsRequest;
                toJSON(message: _245.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_245.QueryDepositsRequest>): _245.QueryDepositsRequest;
                fromAmino(object: _245.QueryDepositsRequestAmino): _245.QueryDepositsRequest;
                toAmino(message: _245.QueryDepositsRequest): _245.QueryDepositsRequestAmino;
                fromAminoMsg(object: _245.QueryDepositsRequestAminoMsg): _245.QueryDepositsRequest;
                toAminoMsg(message: _245.QueryDepositsRequest): _245.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _245.QueryDepositsRequestProtoMsg): _245.QueryDepositsRequest;
                toProto(message: _245.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _245.QueryDepositsRequest): _245.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _245.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryDepositsResponse;
                fromJSON(object: any): _245.QueryDepositsResponse;
                toJSON(message: _245.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_245.QueryDepositsResponse>): _245.QueryDepositsResponse;
                fromAmino(object: _245.QueryDepositsResponseAmino): _245.QueryDepositsResponse;
                toAmino(message: _245.QueryDepositsResponse): _245.QueryDepositsResponseAmino;
                fromAminoMsg(object: _245.QueryDepositsResponseAminoMsg): _245.QueryDepositsResponse;
                toAminoMsg(message: _245.QueryDepositsResponse): _245.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _245.QueryDepositsResponseProtoMsg): _245.QueryDepositsResponse;
                toProto(message: _245.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _245.QueryDepositsResponse): _245.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _245.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryTallyResultRequest;
                fromJSON(object: any): _245.QueryTallyResultRequest;
                toJSON(message: _245.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_245.QueryTallyResultRequest>): _245.QueryTallyResultRequest;
                fromAmino(object: _245.QueryTallyResultRequestAmino): _245.QueryTallyResultRequest;
                toAmino(message: _245.QueryTallyResultRequest): _245.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _245.QueryTallyResultRequestAminoMsg): _245.QueryTallyResultRequest;
                toAminoMsg(message: _245.QueryTallyResultRequest): _245.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _245.QueryTallyResultRequestProtoMsg): _245.QueryTallyResultRequest;
                toProto(message: _245.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _245.QueryTallyResultRequest): _245.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _245.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _245.QueryTallyResultResponse;
                fromJSON(object: any): _245.QueryTallyResultResponse;
                toJSON(message: _245.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_245.QueryTallyResultResponse>): _245.QueryTallyResultResponse;
                fromAmino(object: _245.QueryTallyResultResponseAmino): _245.QueryTallyResultResponse;
                toAmino(message: _245.QueryTallyResultResponse): _245.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _245.QueryTallyResultResponseAminoMsg): _245.QueryTallyResultResponse;
                toAminoMsg(message: _245.QueryTallyResultResponse): _245.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _245.QueryTallyResultResponseProtoMsg): _245.QueryTallyResultResponse;
                toProto(message: _245.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _245.QueryTallyResultResponse): _245.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _244.VoteOption;
            voteOptionToJSON(object: _244.VoteOption): string;
            proposalStatusFromJSON(object: any): _244.ProposalStatus;
            proposalStatusToJSON(object: _244.ProposalStatus): string;
            VoteOption: typeof _244.VoteOption;
            VoteOptionSDKType: typeof _244.VoteOption;
            VoteOptionAmino: typeof _244.VoteOption;
            ProposalStatus: typeof _244.ProposalStatus;
            ProposalStatusSDKType: typeof _244.ProposalStatus;
            ProposalStatusAmino: typeof _244.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _244.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.WeightedVoteOption;
                fromJSON(object: any): _244.WeightedVoteOption;
                toJSON(message: _244.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_244.WeightedVoteOption>): _244.WeightedVoteOption;
                fromAmino(object: _244.WeightedVoteOptionAmino): _244.WeightedVoteOption;
                toAmino(message: _244.WeightedVoteOption): _244.WeightedVoteOptionAmino;
                fromAminoMsg(object: _244.WeightedVoteOptionAminoMsg): _244.WeightedVoteOption;
                toAminoMsg(message: _244.WeightedVoteOption): _244.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _244.WeightedVoteOptionProtoMsg): _244.WeightedVoteOption;
                toProto(message: _244.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _244.WeightedVoteOption): _244.WeightedVoteOptionProtoMsg;
            };
            Deposit: {
                encode(message: _244.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Deposit;
                fromJSON(object: any): _244.Deposit;
                toJSON(message: _244.Deposit): unknown;
                fromPartial(object: Partial<_244.Deposit>): _244.Deposit;
                fromAmino(object: _244.DepositAmino): _244.Deposit;
                toAmino(message: _244.Deposit): _244.DepositAmino;
                fromAminoMsg(object: _244.DepositAminoMsg): _244.Deposit;
                toAminoMsg(message: _244.Deposit): _244.DepositAminoMsg;
                fromProtoMsg(message: _244.DepositProtoMsg): _244.Deposit;
                toProto(message: _244.Deposit): Uint8Array;
                toProtoMsg(message: _244.Deposit): _244.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _244.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Proposal;
                fromJSON(object: any): _244.Proposal;
                toJSON(message: _244.Proposal): unknown;
                fromPartial(object: Partial<_244.Proposal>): _244.Proposal;
                fromAmino(object: _244.ProposalAmino): _244.Proposal;
                toAmino(message: _244.Proposal): _244.ProposalAmino;
                fromAminoMsg(object: _244.ProposalAminoMsg): _244.Proposal;
                toAminoMsg(message: _244.Proposal): _244.ProposalAminoMsg;
                fromProtoMsg(message: _244.ProposalProtoMsg): _244.Proposal;
                toProto(message: _244.Proposal): Uint8Array;
                toProtoMsg(message: _244.Proposal): _244.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _244.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.TallyResult;
                fromJSON(object: any): _244.TallyResult;
                toJSON(message: _244.TallyResult): unknown;
                fromPartial(object: Partial<_244.TallyResult>): _244.TallyResult;
                fromAmino(object: _244.TallyResultAmino): _244.TallyResult;
                toAmino(message: _244.TallyResult): _244.TallyResultAmino;
                fromAminoMsg(object: _244.TallyResultAminoMsg): _244.TallyResult;
                toAminoMsg(message: _244.TallyResult): _244.TallyResultAminoMsg;
                fromProtoMsg(message: _244.TallyResultProtoMsg): _244.TallyResult;
                toProto(message: _244.TallyResult): Uint8Array;
                toProtoMsg(message: _244.TallyResult): _244.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _244.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.Vote;
                fromJSON(object: any): _244.Vote;
                toJSON(message: _244.Vote): unknown;
                fromPartial(object: Partial<_244.Vote>): _244.Vote;
                fromAmino(object: _244.VoteAmino): _244.Vote;
                toAmino(message: _244.Vote): _244.VoteAmino;
                fromAminoMsg(object: _244.VoteAminoMsg): _244.Vote;
                toAminoMsg(message: _244.Vote): _244.VoteAminoMsg;
                fromProtoMsg(message: _244.VoteProtoMsg): _244.Vote;
                toProto(message: _244.Vote): Uint8Array;
                toProtoMsg(message: _244.Vote): _244.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _244.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.DepositParams;
                fromJSON(object: any): _244.DepositParams;
                toJSON(message: _244.DepositParams): unknown;
                fromPartial(object: Partial<_244.DepositParams>): _244.DepositParams;
                fromAmino(object: _244.DepositParamsAmino): _244.DepositParams;
                toAmino(message: _244.DepositParams): _244.DepositParamsAmino;
                fromAminoMsg(object: _244.DepositParamsAminoMsg): _244.DepositParams;
                toAminoMsg(message: _244.DepositParams): _244.DepositParamsAminoMsg;
                fromProtoMsg(message: _244.DepositParamsProtoMsg): _244.DepositParams;
                toProto(message: _244.DepositParams): Uint8Array;
                toProtoMsg(message: _244.DepositParams): _244.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _244.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.VotingParams;
                fromJSON(object: any): _244.VotingParams;
                toJSON(message: _244.VotingParams): unknown;
                fromPartial(object: Partial<_244.VotingParams>): _244.VotingParams;
                fromAmino(object: _244.VotingParamsAmino): _244.VotingParams;
                toAmino(message: _244.VotingParams): _244.VotingParamsAmino;
                fromAminoMsg(object: _244.VotingParamsAminoMsg): _244.VotingParams;
                toAminoMsg(message: _244.VotingParams): _244.VotingParamsAminoMsg;
                fromProtoMsg(message: _244.VotingParamsProtoMsg): _244.VotingParams;
                toProto(message: _244.VotingParams): Uint8Array;
                toProtoMsg(message: _244.VotingParams): _244.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _244.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _244.TallyParams;
                fromJSON(object: any): _244.TallyParams;
                toJSON(message: _244.TallyParams): unknown;
                fromPartial(object: Partial<_244.TallyParams>): _244.TallyParams;
                fromAmino(object: _244.TallyParamsAmino): _244.TallyParams;
                toAmino(message: _244.TallyParams): _244.TallyParamsAmino;
                fromAminoMsg(object: _244.TallyParamsAminoMsg): _244.TallyParams;
                toAminoMsg(message: _244.TallyParams): _244.TallyParamsAminoMsg;
                fromProtoMsg(message: _244.TallyParamsProtoMsg): _244.TallyParams;
                toProto(message: _244.TallyParams): Uint8Array;
                toProtoMsg(message: _244.TallyParams): _244.TallyParamsProtoMsg;
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
        };
        const v1beta1: {
            MsgClientImpl: typeof _457.MsgClientImpl;
            QueryClientImpl: typeof _441.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                proposal(request: _249.QueryProposalRequest): Promise<_249.QueryProposalResponse>;
                proposals(request: _249.QueryProposalsRequest): Promise<_249.QueryProposalsResponse>;
                vote(request: _249.QueryVoteRequest): Promise<_249.QueryVoteResponse>;
                votes(request: _249.QueryVotesRequest): Promise<_249.QueryVotesResponse>;
                params(request: _249.QueryParamsRequest): Promise<_249.QueryParamsResponse>;
                deposit(request: _249.QueryDepositRequest): Promise<_249.QueryDepositResponse>;
                deposits(request: _249.QueryDepositsRequest): Promise<_249.QueryDepositsResponse>;
                tallyResult(request: _249.QueryTallyResultRequest): Promise<_249.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    submitProposal(value: _250.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _250.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    voteWeighted(value: _250.MsgVoteWeighted): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    deposit(value: _250.MsgDeposit): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    submitProposal(value: _250.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _250.MsgSubmitProposal;
                    };
                    vote(value: _250.MsgVote): {
                        typeUrl: string;
                        value: _250.MsgVote;
                    };
                    voteWeighted(value: _250.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _250.MsgVoteWeighted;
                    };
                    deposit(value: _250.MsgDeposit): {
                        typeUrl: string;
                        value: _250.MsgDeposit;
                    };
                };
                toJSON: {
                    submitProposal(value: _250.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _250.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    voteWeighted(value: _250.MsgVoteWeighted): {
                        typeUrl: string;
                        value: unknown;
                    };
                    deposit(value: _250.MsgDeposit): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _250.MsgSubmitProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _250.MsgVote;
                    };
                    voteWeighted(value: any): {
                        typeUrl: string;
                        value: _250.MsgVoteWeighted;
                    };
                    deposit(value: any): {
                        typeUrl: string;
                        value: _250.MsgDeposit;
                    };
                };
                fromPartial: {
                    submitProposal(value: _250.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _250.MsgSubmitProposal;
                    };
                    vote(value: _250.MsgVote): {
                        typeUrl: string;
                        value: _250.MsgVote;
                    };
                    voteWeighted(value: _250.MsgVoteWeighted): {
                        typeUrl: string;
                        value: _250.MsgVoteWeighted;
                    };
                    deposit(value: _250.MsgDeposit): {
                        typeUrl: string;
                        value: _250.MsgDeposit;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.gov.v1beta1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _250.MsgSubmitProposal) => _250.MsgSubmitProposalAmino;
                    fromAmino: (object: _250.MsgSubmitProposalAmino) => _250.MsgSubmitProposal;
                };
                "/cosmos.gov.v1beta1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _250.MsgVote) => _250.MsgVoteAmino;
                    fromAmino: (object: _250.MsgVoteAmino) => _250.MsgVote;
                };
                "/cosmos.gov.v1beta1.MsgVoteWeighted": {
                    aminoType: string;
                    toAmino: (message: _250.MsgVoteWeighted) => _250.MsgVoteWeightedAmino;
                    fromAmino: (object: _250.MsgVoteWeightedAmino) => _250.MsgVoteWeighted;
                };
                "/cosmos.gov.v1beta1.MsgDeposit": {
                    aminoType: string;
                    toAmino: (message: _250.MsgDeposit) => _250.MsgDepositAmino;
                    fromAmino: (object: _250.MsgDepositAmino) => _250.MsgDeposit;
                };
            };
            MsgSubmitProposal: {
                encode(message: _250.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgSubmitProposal;
                fromJSON(object: any): _250.MsgSubmitProposal;
                toJSON(message: _250.MsgSubmitProposal): unknown;
                fromPartial(object: Partial<_250.MsgSubmitProposal>): _250.MsgSubmitProposal;
                fromAmino(object: _250.MsgSubmitProposalAmino): _250.MsgSubmitProposal;
                toAmino(message: _250.MsgSubmitProposal): _250.MsgSubmitProposalAmino;
                fromAminoMsg(object: _250.MsgSubmitProposalAminoMsg): _250.MsgSubmitProposal;
                toAminoMsg(message: _250.MsgSubmitProposal): _250.MsgSubmitProposalAminoMsg;
                fromProtoMsg(message: _250.MsgSubmitProposalProtoMsg): _250.MsgSubmitProposal;
                toProto(message: _250.MsgSubmitProposal): Uint8Array;
                toProtoMsg(message: _250.MsgSubmitProposal): _250.MsgSubmitProposalProtoMsg;
            };
            MsgSubmitProposalResponse: {
                encode(message: _250.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgSubmitProposalResponse;
                fromJSON(object: any): _250.MsgSubmitProposalResponse;
                toJSON(message: _250.MsgSubmitProposalResponse): unknown;
                fromPartial(object: Partial<_250.MsgSubmitProposalResponse>): _250.MsgSubmitProposalResponse;
                fromAmino(object: _250.MsgSubmitProposalResponseAmino): _250.MsgSubmitProposalResponse;
                toAmino(message: _250.MsgSubmitProposalResponse): _250.MsgSubmitProposalResponseAmino;
                fromAminoMsg(object: _250.MsgSubmitProposalResponseAminoMsg): _250.MsgSubmitProposalResponse;
                toAminoMsg(message: _250.MsgSubmitProposalResponse): _250.MsgSubmitProposalResponseAminoMsg;
                fromProtoMsg(message: _250.MsgSubmitProposalResponseProtoMsg): _250.MsgSubmitProposalResponse;
                toProto(message: _250.MsgSubmitProposalResponse): Uint8Array;
                toProtoMsg(message: _250.MsgSubmitProposalResponse): _250.MsgSubmitProposalResponseProtoMsg;
            };
            MsgVote: {
                encode(message: _250.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgVote;
                fromJSON(object: any): _250.MsgVote;
                toJSON(message: _250.MsgVote): unknown;
                fromPartial(object: Partial<_250.MsgVote>): _250.MsgVote;
                fromAmino(object: _250.MsgVoteAmino): _250.MsgVote;
                toAmino(message: _250.MsgVote): _250.MsgVoteAmino;
                fromAminoMsg(object: _250.MsgVoteAminoMsg): _250.MsgVote;
                toAminoMsg(message: _250.MsgVote): _250.MsgVoteAminoMsg;
                fromProtoMsg(message: _250.MsgVoteProtoMsg): _250.MsgVote;
                toProto(message: _250.MsgVote): Uint8Array;
                toProtoMsg(message: _250.MsgVote): _250.MsgVoteProtoMsg;
            };
            MsgVoteResponse: {
                encode(_: _250.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgVoteResponse;
                fromJSON(_: any): _250.MsgVoteResponse;
                toJSON(_: _250.MsgVoteResponse): unknown;
                fromPartial(_: Partial<_250.MsgVoteResponse>): _250.MsgVoteResponse;
                fromAmino(_: _250.MsgVoteResponseAmino): _250.MsgVoteResponse;
                toAmino(_: _250.MsgVoteResponse): _250.MsgVoteResponseAmino;
                fromAminoMsg(object: _250.MsgVoteResponseAminoMsg): _250.MsgVoteResponse;
                toAminoMsg(message: _250.MsgVoteResponse): _250.MsgVoteResponseAminoMsg;
                fromProtoMsg(message: _250.MsgVoteResponseProtoMsg): _250.MsgVoteResponse;
                toProto(message: _250.MsgVoteResponse): Uint8Array;
                toProtoMsg(message: _250.MsgVoteResponse): _250.MsgVoteResponseProtoMsg;
            };
            MsgVoteWeighted: {
                encode(message: _250.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgVoteWeighted;
                fromJSON(object: any): _250.MsgVoteWeighted;
                toJSON(message: _250.MsgVoteWeighted): unknown;
                fromPartial(object: Partial<_250.MsgVoteWeighted>): _250.MsgVoteWeighted;
                fromAmino(object: _250.MsgVoteWeightedAmino): _250.MsgVoteWeighted;
                toAmino(message: _250.MsgVoteWeighted): _250.MsgVoteWeightedAmino;
                fromAminoMsg(object: _250.MsgVoteWeightedAminoMsg): _250.MsgVoteWeighted;
                toAminoMsg(message: _250.MsgVoteWeighted): _250.MsgVoteWeightedAminoMsg;
                fromProtoMsg(message: _250.MsgVoteWeightedProtoMsg): _250.MsgVoteWeighted;
                toProto(message: _250.MsgVoteWeighted): Uint8Array;
                toProtoMsg(message: _250.MsgVoteWeighted): _250.MsgVoteWeightedProtoMsg;
            };
            MsgVoteWeightedResponse: {
                encode(_: _250.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgVoteWeightedResponse;
                fromJSON(_: any): _250.MsgVoteWeightedResponse;
                toJSON(_: _250.MsgVoteWeightedResponse): unknown;
                fromPartial(_: Partial<_250.MsgVoteWeightedResponse>): _250.MsgVoteWeightedResponse;
                fromAmino(_: _250.MsgVoteWeightedResponseAmino): _250.MsgVoteWeightedResponse;
                toAmino(_: _250.MsgVoteWeightedResponse): _250.MsgVoteWeightedResponseAmino;
                fromAminoMsg(object: _250.MsgVoteWeightedResponseAminoMsg): _250.MsgVoteWeightedResponse;
                toAminoMsg(message: _250.MsgVoteWeightedResponse): _250.MsgVoteWeightedResponseAminoMsg;
                fromProtoMsg(message: _250.MsgVoteWeightedResponseProtoMsg): _250.MsgVoteWeightedResponse;
                toProto(message: _250.MsgVoteWeightedResponse): Uint8Array;
                toProtoMsg(message: _250.MsgVoteWeightedResponse): _250.MsgVoteWeightedResponseProtoMsg;
            };
            MsgDeposit: {
                encode(message: _250.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgDeposit;
                fromJSON(object: any): _250.MsgDeposit;
                toJSON(message: _250.MsgDeposit): unknown;
                fromPartial(object: Partial<_250.MsgDeposit>): _250.MsgDeposit;
                fromAmino(object: _250.MsgDepositAmino): _250.MsgDeposit;
                toAmino(message: _250.MsgDeposit): _250.MsgDepositAmino;
                fromAminoMsg(object: _250.MsgDepositAminoMsg): _250.MsgDeposit;
                toAminoMsg(message: _250.MsgDeposit): _250.MsgDepositAminoMsg;
                fromProtoMsg(message: _250.MsgDepositProtoMsg): _250.MsgDeposit;
                toProto(message: _250.MsgDeposit): Uint8Array;
                toProtoMsg(message: _250.MsgDeposit): _250.MsgDepositProtoMsg;
            };
            MsgDepositResponse: {
                encode(_: _250.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _250.MsgDepositResponse;
                fromJSON(_: any): _250.MsgDepositResponse;
                toJSON(_: _250.MsgDepositResponse): unknown;
                fromPartial(_: Partial<_250.MsgDepositResponse>): _250.MsgDepositResponse;
                fromAmino(_: _250.MsgDepositResponseAmino): _250.MsgDepositResponse;
                toAmino(_: _250.MsgDepositResponse): _250.MsgDepositResponseAmino;
                fromAminoMsg(object: _250.MsgDepositResponseAminoMsg): _250.MsgDepositResponse;
                toAminoMsg(message: _250.MsgDepositResponse): _250.MsgDepositResponseAminoMsg;
                fromProtoMsg(message: _250.MsgDepositResponseProtoMsg): _250.MsgDepositResponse;
                toProto(message: _250.MsgDepositResponse): Uint8Array;
                toProtoMsg(message: _250.MsgDepositResponse): _250.MsgDepositResponseProtoMsg;
            };
            QueryProposalRequest: {
                encode(message: _249.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryProposalRequest;
                fromJSON(object: any): _249.QueryProposalRequest;
                toJSON(message: _249.QueryProposalRequest): unknown;
                fromPartial(object: Partial<_249.QueryProposalRequest>): _249.QueryProposalRequest;
                fromAmino(object: _249.QueryProposalRequestAmino): _249.QueryProposalRequest;
                toAmino(message: _249.QueryProposalRequest): _249.QueryProposalRequestAmino;
                fromAminoMsg(object: _249.QueryProposalRequestAminoMsg): _249.QueryProposalRequest;
                toAminoMsg(message: _249.QueryProposalRequest): _249.QueryProposalRequestAminoMsg;
                fromProtoMsg(message: _249.QueryProposalRequestProtoMsg): _249.QueryProposalRequest;
                toProto(message: _249.QueryProposalRequest): Uint8Array;
                toProtoMsg(message: _249.QueryProposalRequest): _249.QueryProposalRequestProtoMsg;
            };
            QueryProposalResponse: {
                encode(message: _249.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryProposalResponse;
                fromJSON(object: any): _249.QueryProposalResponse;
                toJSON(message: _249.QueryProposalResponse): unknown;
                fromPartial(object: Partial<_249.QueryProposalResponse>): _249.QueryProposalResponse;
                fromAmino(object: _249.QueryProposalResponseAmino): _249.QueryProposalResponse;
                toAmino(message: _249.QueryProposalResponse): _249.QueryProposalResponseAmino;
                fromAminoMsg(object: _249.QueryProposalResponseAminoMsg): _249.QueryProposalResponse;
                toAminoMsg(message: _249.QueryProposalResponse): _249.QueryProposalResponseAminoMsg;
                fromProtoMsg(message: _249.QueryProposalResponseProtoMsg): _249.QueryProposalResponse;
                toProto(message: _249.QueryProposalResponse): Uint8Array;
                toProtoMsg(message: _249.QueryProposalResponse): _249.QueryProposalResponseProtoMsg;
            };
            QueryProposalsRequest: {
                encode(message: _249.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryProposalsRequest;
                fromJSON(object: any): _249.QueryProposalsRequest;
                toJSON(message: _249.QueryProposalsRequest): unknown;
                fromPartial(object: Partial<_249.QueryProposalsRequest>): _249.QueryProposalsRequest;
                fromAmino(object: _249.QueryProposalsRequestAmino): _249.QueryProposalsRequest;
                toAmino(message: _249.QueryProposalsRequest): _249.QueryProposalsRequestAmino;
                fromAminoMsg(object: _249.QueryProposalsRequestAminoMsg): _249.QueryProposalsRequest;
                toAminoMsg(message: _249.QueryProposalsRequest): _249.QueryProposalsRequestAminoMsg;
                fromProtoMsg(message: _249.QueryProposalsRequestProtoMsg): _249.QueryProposalsRequest;
                toProto(message: _249.QueryProposalsRequest): Uint8Array;
                toProtoMsg(message: _249.QueryProposalsRequest): _249.QueryProposalsRequestProtoMsg;
            };
            QueryProposalsResponse: {
                encode(message: _249.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryProposalsResponse;
                fromJSON(object: any): _249.QueryProposalsResponse;
                toJSON(message: _249.QueryProposalsResponse): unknown;
                fromPartial(object: Partial<_249.QueryProposalsResponse>): _249.QueryProposalsResponse;
                fromAmino(object: _249.QueryProposalsResponseAmino): _249.QueryProposalsResponse;
                toAmino(message: _249.QueryProposalsResponse): _249.QueryProposalsResponseAmino;
                fromAminoMsg(object: _249.QueryProposalsResponseAminoMsg): _249.QueryProposalsResponse;
                toAminoMsg(message: _249.QueryProposalsResponse): _249.QueryProposalsResponseAminoMsg;
                fromProtoMsg(message: _249.QueryProposalsResponseProtoMsg): _249.QueryProposalsResponse;
                toProto(message: _249.QueryProposalsResponse): Uint8Array;
                toProtoMsg(message: _249.QueryProposalsResponse): _249.QueryProposalsResponseProtoMsg;
            };
            QueryVoteRequest: {
                encode(message: _249.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryVoteRequest;
                fromJSON(object: any): _249.QueryVoteRequest;
                toJSON(message: _249.QueryVoteRequest): unknown;
                fromPartial(object: Partial<_249.QueryVoteRequest>): _249.QueryVoteRequest;
                fromAmino(object: _249.QueryVoteRequestAmino): _249.QueryVoteRequest;
                toAmino(message: _249.QueryVoteRequest): _249.QueryVoteRequestAmino;
                fromAminoMsg(object: _249.QueryVoteRequestAminoMsg): _249.QueryVoteRequest;
                toAminoMsg(message: _249.QueryVoteRequest): _249.QueryVoteRequestAminoMsg;
                fromProtoMsg(message: _249.QueryVoteRequestProtoMsg): _249.QueryVoteRequest;
                toProto(message: _249.QueryVoteRequest): Uint8Array;
                toProtoMsg(message: _249.QueryVoteRequest): _249.QueryVoteRequestProtoMsg;
            };
            QueryVoteResponse: {
                encode(message: _249.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryVoteResponse;
                fromJSON(object: any): _249.QueryVoteResponse;
                toJSON(message: _249.QueryVoteResponse): unknown;
                fromPartial(object: Partial<_249.QueryVoteResponse>): _249.QueryVoteResponse;
                fromAmino(object: _249.QueryVoteResponseAmino): _249.QueryVoteResponse;
                toAmino(message: _249.QueryVoteResponse): _249.QueryVoteResponseAmino;
                fromAminoMsg(object: _249.QueryVoteResponseAminoMsg): _249.QueryVoteResponse;
                toAminoMsg(message: _249.QueryVoteResponse): _249.QueryVoteResponseAminoMsg;
                fromProtoMsg(message: _249.QueryVoteResponseProtoMsg): _249.QueryVoteResponse;
                toProto(message: _249.QueryVoteResponse): Uint8Array;
                toProtoMsg(message: _249.QueryVoteResponse): _249.QueryVoteResponseProtoMsg;
            };
            QueryVotesRequest: {
                encode(message: _249.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryVotesRequest;
                fromJSON(object: any): _249.QueryVotesRequest;
                toJSON(message: _249.QueryVotesRequest): unknown;
                fromPartial(object: Partial<_249.QueryVotesRequest>): _249.QueryVotesRequest;
                fromAmino(object: _249.QueryVotesRequestAmino): _249.QueryVotesRequest;
                toAmino(message: _249.QueryVotesRequest): _249.QueryVotesRequestAmino;
                fromAminoMsg(object: _249.QueryVotesRequestAminoMsg): _249.QueryVotesRequest;
                toAminoMsg(message: _249.QueryVotesRequest): _249.QueryVotesRequestAminoMsg;
                fromProtoMsg(message: _249.QueryVotesRequestProtoMsg): _249.QueryVotesRequest;
                toProto(message: _249.QueryVotesRequest): Uint8Array;
                toProtoMsg(message: _249.QueryVotesRequest): _249.QueryVotesRequestProtoMsg;
            };
            QueryVotesResponse: {
                encode(message: _249.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryVotesResponse;
                fromJSON(object: any): _249.QueryVotesResponse;
                toJSON(message: _249.QueryVotesResponse): unknown;
                fromPartial(object: Partial<_249.QueryVotesResponse>): _249.QueryVotesResponse;
                fromAmino(object: _249.QueryVotesResponseAmino): _249.QueryVotesResponse;
                toAmino(message: _249.QueryVotesResponse): _249.QueryVotesResponseAmino;
                fromAminoMsg(object: _249.QueryVotesResponseAminoMsg): _249.QueryVotesResponse;
                toAminoMsg(message: _249.QueryVotesResponse): _249.QueryVotesResponseAminoMsg;
                fromProtoMsg(message: _249.QueryVotesResponseProtoMsg): _249.QueryVotesResponse;
                toProto(message: _249.QueryVotesResponse): Uint8Array;
                toProtoMsg(message: _249.QueryVotesResponse): _249.QueryVotesResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(message: _249.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryParamsRequest;
                fromJSON(object: any): _249.QueryParamsRequest;
                toJSON(message: _249.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_249.QueryParamsRequest>): _249.QueryParamsRequest;
                fromAmino(object: _249.QueryParamsRequestAmino): _249.QueryParamsRequest;
                toAmino(message: _249.QueryParamsRequest): _249.QueryParamsRequestAmino;
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
            QueryDepositRequest: {
                encode(message: _249.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryDepositRequest;
                fromJSON(object: any): _249.QueryDepositRequest;
                toJSON(message: _249.QueryDepositRequest): unknown;
                fromPartial(object: Partial<_249.QueryDepositRequest>): _249.QueryDepositRequest;
                fromAmino(object: _249.QueryDepositRequestAmino): _249.QueryDepositRequest;
                toAmino(message: _249.QueryDepositRequest): _249.QueryDepositRequestAmino;
                fromAminoMsg(object: _249.QueryDepositRequestAminoMsg): _249.QueryDepositRequest;
                toAminoMsg(message: _249.QueryDepositRequest): _249.QueryDepositRequestAminoMsg;
                fromProtoMsg(message: _249.QueryDepositRequestProtoMsg): _249.QueryDepositRequest;
                toProto(message: _249.QueryDepositRequest): Uint8Array;
                toProtoMsg(message: _249.QueryDepositRequest): _249.QueryDepositRequestProtoMsg;
            };
            QueryDepositResponse: {
                encode(message: _249.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryDepositResponse;
                fromJSON(object: any): _249.QueryDepositResponse;
                toJSON(message: _249.QueryDepositResponse): unknown;
                fromPartial(object: Partial<_249.QueryDepositResponse>): _249.QueryDepositResponse;
                fromAmino(object: _249.QueryDepositResponseAmino): _249.QueryDepositResponse;
                toAmino(message: _249.QueryDepositResponse): _249.QueryDepositResponseAmino;
                fromAminoMsg(object: _249.QueryDepositResponseAminoMsg): _249.QueryDepositResponse;
                toAminoMsg(message: _249.QueryDepositResponse): _249.QueryDepositResponseAminoMsg;
                fromProtoMsg(message: _249.QueryDepositResponseProtoMsg): _249.QueryDepositResponse;
                toProto(message: _249.QueryDepositResponse): Uint8Array;
                toProtoMsg(message: _249.QueryDepositResponse): _249.QueryDepositResponseProtoMsg;
            };
            QueryDepositsRequest: {
                encode(message: _249.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryDepositsRequest;
                fromJSON(object: any): _249.QueryDepositsRequest;
                toJSON(message: _249.QueryDepositsRequest): unknown;
                fromPartial(object: Partial<_249.QueryDepositsRequest>): _249.QueryDepositsRequest;
                fromAmino(object: _249.QueryDepositsRequestAmino): _249.QueryDepositsRequest;
                toAmino(message: _249.QueryDepositsRequest): _249.QueryDepositsRequestAmino;
                fromAminoMsg(object: _249.QueryDepositsRequestAminoMsg): _249.QueryDepositsRequest;
                toAminoMsg(message: _249.QueryDepositsRequest): _249.QueryDepositsRequestAminoMsg;
                fromProtoMsg(message: _249.QueryDepositsRequestProtoMsg): _249.QueryDepositsRequest;
                toProto(message: _249.QueryDepositsRequest): Uint8Array;
                toProtoMsg(message: _249.QueryDepositsRequest): _249.QueryDepositsRequestProtoMsg;
            };
            QueryDepositsResponse: {
                encode(message: _249.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryDepositsResponse;
                fromJSON(object: any): _249.QueryDepositsResponse;
                toJSON(message: _249.QueryDepositsResponse): unknown;
                fromPartial(object: Partial<_249.QueryDepositsResponse>): _249.QueryDepositsResponse;
                fromAmino(object: _249.QueryDepositsResponseAmino): _249.QueryDepositsResponse;
                toAmino(message: _249.QueryDepositsResponse): _249.QueryDepositsResponseAmino;
                fromAminoMsg(object: _249.QueryDepositsResponseAminoMsg): _249.QueryDepositsResponse;
                toAminoMsg(message: _249.QueryDepositsResponse): _249.QueryDepositsResponseAminoMsg;
                fromProtoMsg(message: _249.QueryDepositsResponseProtoMsg): _249.QueryDepositsResponse;
                toProto(message: _249.QueryDepositsResponse): Uint8Array;
                toProtoMsg(message: _249.QueryDepositsResponse): _249.QueryDepositsResponseProtoMsg;
            };
            QueryTallyResultRequest: {
                encode(message: _249.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryTallyResultRequest;
                fromJSON(object: any): _249.QueryTallyResultRequest;
                toJSON(message: _249.QueryTallyResultRequest): unknown;
                fromPartial(object: Partial<_249.QueryTallyResultRequest>): _249.QueryTallyResultRequest;
                fromAmino(object: _249.QueryTallyResultRequestAmino): _249.QueryTallyResultRequest;
                toAmino(message: _249.QueryTallyResultRequest): _249.QueryTallyResultRequestAmino;
                fromAminoMsg(object: _249.QueryTallyResultRequestAminoMsg): _249.QueryTallyResultRequest;
                toAminoMsg(message: _249.QueryTallyResultRequest): _249.QueryTallyResultRequestAminoMsg;
                fromProtoMsg(message: _249.QueryTallyResultRequestProtoMsg): _249.QueryTallyResultRequest;
                toProto(message: _249.QueryTallyResultRequest): Uint8Array;
                toProtoMsg(message: _249.QueryTallyResultRequest): _249.QueryTallyResultRequestProtoMsg;
            };
            QueryTallyResultResponse: {
                encode(message: _249.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _249.QueryTallyResultResponse;
                fromJSON(object: any): _249.QueryTallyResultResponse;
                toJSON(message: _249.QueryTallyResultResponse): unknown;
                fromPartial(object: Partial<_249.QueryTallyResultResponse>): _249.QueryTallyResultResponse;
                fromAmino(object: _249.QueryTallyResultResponseAmino): _249.QueryTallyResultResponse;
                toAmino(message: _249.QueryTallyResultResponse): _249.QueryTallyResultResponseAmino;
                fromAminoMsg(object: _249.QueryTallyResultResponseAminoMsg): _249.QueryTallyResultResponse;
                toAminoMsg(message: _249.QueryTallyResultResponse): _249.QueryTallyResultResponseAminoMsg;
                fromProtoMsg(message: _249.QueryTallyResultResponseProtoMsg): _249.QueryTallyResultResponse;
                toProto(message: _249.QueryTallyResultResponse): Uint8Array;
                toProtoMsg(message: _249.QueryTallyResultResponse): _249.QueryTallyResultResponseProtoMsg;
            };
            voteOptionFromJSON(object: any): _248.VoteOption;
            voteOptionToJSON(object: _248.VoteOption): string;
            proposalStatusFromJSON(object: any): _248.ProposalStatus;
            proposalStatusToJSON(object: _248.ProposalStatus): string;
            VoteOption: typeof _248.VoteOption;
            VoteOptionSDKType: typeof _248.VoteOption;
            VoteOptionAmino: typeof _248.VoteOption;
            ProposalStatus: typeof _248.ProposalStatus;
            ProposalStatusSDKType: typeof _248.ProposalStatus;
            ProposalStatusAmino: typeof _248.ProposalStatus;
            WeightedVoteOption: {
                encode(message: _248.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.WeightedVoteOption;
                fromJSON(object: any): _248.WeightedVoteOption;
                toJSON(message: _248.WeightedVoteOption): unknown;
                fromPartial(object: Partial<_248.WeightedVoteOption>): _248.WeightedVoteOption;
                fromAmino(object: _248.WeightedVoteOptionAmino): _248.WeightedVoteOption;
                toAmino(message: _248.WeightedVoteOption): _248.WeightedVoteOptionAmino;
                fromAminoMsg(object: _248.WeightedVoteOptionAminoMsg): _248.WeightedVoteOption;
                toAminoMsg(message: _248.WeightedVoteOption): _248.WeightedVoteOptionAminoMsg;
                fromProtoMsg(message: _248.WeightedVoteOptionProtoMsg): _248.WeightedVoteOption;
                toProto(message: _248.WeightedVoteOption): Uint8Array;
                toProtoMsg(message: _248.WeightedVoteOption): _248.WeightedVoteOptionProtoMsg;
            };
            TextProposal: {
                encode(message: _248.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.TextProposal;
                fromJSON(object: any): _248.TextProposal;
                toJSON(message: _248.TextProposal): unknown;
                fromPartial(object: Partial<_248.TextProposal>): _248.TextProposal;
                fromAmino(object: _248.TextProposalAmino): _248.TextProposal;
                toAmino(message: _248.TextProposal): _248.TextProposalAmino;
                fromAminoMsg(object: _248.TextProposalAminoMsg): _248.TextProposal;
                toAminoMsg(message: _248.TextProposal): _248.TextProposalAminoMsg;
                fromProtoMsg(message: _248.TextProposalProtoMsg): _248.TextProposal;
                toProto(message: _248.TextProposal): Uint8Array;
                toProtoMsg(message: _248.TextProposal): _248.TextProposalProtoMsg;
            };
            Deposit: {
                encode(message: _248.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Deposit;
                fromJSON(object: any): _248.Deposit;
                toJSON(message: _248.Deposit): unknown;
                fromPartial(object: Partial<_248.Deposit>): _248.Deposit;
                fromAmino(object: _248.DepositAmino): _248.Deposit;
                toAmino(message: _248.Deposit): _248.DepositAmino;
                fromAminoMsg(object: _248.DepositAminoMsg): _248.Deposit;
                toAminoMsg(message: _248.Deposit): _248.DepositAminoMsg;
                fromProtoMsg(message: _248.DepositProtoMsg): _248.Deposit;
                toProto(message: _248.Deposit): Uint8Array;
                toProtoMsg(message: _248.Deposit): _248.DepositProtoMsg;
            };
            Proposal: {
                encode(message: _248.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Proposal;
                fromJSON(object: any): _248.Proposal;
                toJSON(message: _248.Proposal): unknown;
                fromPartial(object: Partial<_248.Proposal>): _248.Proposal;
                fromAmino(object: _248.ProposalAmino): _248.Proposal;
                toAmino(message: _248.Proposal): _248.ProposalAmino;
                fromAminoMsg(object: _248.ProposalAminoMsg): _248.Proposal;
                toAminoMsg(message: _248.Proposal): _248.ProposalAminoMsg;
                fromProtoMsg(message: _248.ProposalProtoMsg): _248.Proposal;
                toProto(message: _248.Proposal): Uint8Array;
                toProtoMsg(message: _248.Proposal): _248.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _248.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.TallyResult;
                fromJSON(object: any): _248.TallyResult;
                toJSON(message: _248.TallyResult): unknown;
                fromPartial(object: Partial<_248.TallyResult>): _248.TallyResult;
                fromAmino(object: _248.TallyResultAmino): _248.TallyResult;
                toAmino(message: _248.TallyResult): _248.TallyResultAmino;
                fromAminoMsg(object: _248.TallyResultAminoMsg): _248.TallyResult;
                toAminoMsg(message: _248.TallyResult): _248.TallyResultAminoMsg;
                fromProtoMsg(message: _248.TallyResultProtoMsg): _248.TallyResult;
                toProto(message: _248.TallyResult): Uint8Array;
                toProtoMsg(message: _248.TallyResult): _248.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _248.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.Vote;
                fromJSON(object: any): _248.Vote;
                toJSON(message: _248.Vote): unknown;
                fromPartial(object: Partial<_248.Vote>): _248.Vote;
                fromAmino(object: _248.VoteAmino): _248.Vote;
                toAmino(message: _248.Vote): _248.VoteAmino;
                fromAminoMsg(object: _248.VoteAminoMsg): _248.Vote;
                toAminoMsg(message: _248.Vote): _248.VoteAminoMsg;
                fromProtoMsg(message: _248.VoteProtoMsg): _248.Vote;
                toProto(message: _248.Vote): Uint8Array;
                toProtoMsg(message: _248.Vote): _248.VoteProtoMsg;
            };
            DepositParams: {
                encode(message: _248.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.DepositParams;
                fromJSON(object: any): _248.DepositParams;
                toJSON(message: _248.DepositParams): unknown;
                fromPartial(object: Partial<_248.DepositParams>): _248.DepositParams;
                fromAmino(object: _248.DepositParamsAmino): _248.DepositParams;
                toAmino(message: _248.DepositParams): _248.DepositParamsAmino;
                fromAminoMsg(object: _248.DepositParamsAminoMsg): _248.DepositParams;
                toAminoMsg(message: _248.DepositParams): _248.DepositParamsAminoMsg;
                fromProtoMsg(message: _248.DepositParamsProtoMsg): _248.DepositParams;
                toProto(message: _248.DepositParams): Uint8Array;
                toProtoMsg(message: _248.DepositParams): _248.DepositParamsProtoMsg;
            };
            VotingParams: {
                encode(message: _248.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.VotingParams;
                fromJSON(object: any): _248.VotingParams;
                toJSON(message: _248.VotingParams): unknown;
                fromPartial(object: Partial<_248.VotingParams>): _248.VotingParams;
                fromAmino(object: _248.VotingParamsAmino): _248.VotingParams;
                toAmino(message: _248.VotingParams): _248.VotingParamsAmino;
                fromAminoMsg(object: _248.VotingParamsAminoMsg): _248.VotingParams;
                toAminoMsg(message: _248.VotingParams): _248.VotingParamsAminoMsg;
                fromProtoMsg(message: _248.VotingParamsProtoMsg): _248.VotingParams;
                toProto(message: _248.VotingParams): Uint8Array;
                toProtoMsg(message: _248.VotingParams): _248.VotingParamsProtoMsg;
            };
            TallyParams: {
                encode(message: _248.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _248.TallyParams;
                fromJSON(object: any): _248.TallyParams;
                toJSON(message: _248.TallyParams): unknown;
                fromPartial(object: Partial<_248.TallyParams>): _248.TallyParams;
                fromAmino(object: _248.TallyParamsAmino): _248.TallyParams;
                toAmino(message: _248.TallyParams): _248.TallyParamsAmino;
                fromAminoMsg(object: _248.TallyParamsAminoMsg): _248.TallyParams;
                toAminoMsg(message: _248.TallyParams): _248.TallyParamsAminoMsg;
                fromProtoMsg(message: _248.TallyParamsProtoMsg): _248.TallyParams;
                toProto(message: _248.TallyParams): Uint8Array;
                toProtoMsg(message: _248.TallyParams): _248.TallyParamsProtoMsg;
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
    namespace group {
        const v1: {
            MsgClientImpl: typeof _458.MsgClientImpl;
            QueryClientImpl: typeof _442.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                groupInfo(request: _253.QueryGroupInfoRequest): Promise<_253.QueryGroupInfoResponse>;
                groupPolicyInfo(request: _253.QueryGroupPolicyInfoRequest): Promise<_253.QueryGroupPolicyInfoResponse>;
                groupMembers(request: _253.QueryGroupMembersRequest): Promise<_253.QueryGroupMembersResponse>;
                groupsByAdmin(request: _253.QueryGroupsByAdminRequest): Promise<_253.QueryGroupsByAdminResponse>;
                groupPoliciesByGroup(request: _253.QueryGroupPoliciesByGroupRequest): Promise<_253.QueryGroupPoliciesByGroupResponse>;
                groupPoliciesByAdmin(request: _253.QueryGroupPoliciesByAdminRequest): Promise<_253.QueryGroupPoliciesByAdminResponse>;
                proposal(request: _253.QueryProposalRequest): Promise<_253.QueryProposalResponse>;
                proposalsByGroupPolicy(request: _253.QueryProposalsByGroupPolicyRequest): Promise<_253.QueryProposalsByGroupPolicyResponse>;
                voteByProposalVoter(request: _253.QueryVoteByProposalVoterRequest): Promise<_253.QueryVoteByProposalVoterResponse>;
                votesByProposal(request: _253.QueryVotesByProposalRequest): Promise<_253.QueryVotesByProposalResponse>;
                votesByVoter(request: _253.QueryVotesByVoterRequest): Promise<_253.QueryVotesByVoterResponse>;
                groupsByMember(request: _253.QueryGroupsByMemberRequest): Promise<_253.QueryGroupsByMemberResponse>;
                tallyResult(request: _253.QueryTallyResultRequest): Promise<_253.QueryTallyResultResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createGroup(value: _254.MsgCreateGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMembers(value: _254.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupAdmin(value: _254.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupMetadata(value: _254.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupPolicy(value: _254.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createGroupWithPolicy(value: _254.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyAdmin(value: _254.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyDecisionPolicy(value: _254.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    updateGroupPolicyMetadata(value: _254.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    withdrawProposal(value: _254.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    exec(value: _254.MsgExec): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    leaveGroup(value: _254.MsgLeaveGroup): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createGroup(value: _254.MsgCreateGroup): {
                        typeUrl: string;
                        value: _254.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _254.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _254.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _254.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _254.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _254.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _254.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _254.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _254.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _254.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _254.MsgWithdrawProposal;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    exec(value: _254.MsgExec): {
                        typeUrl: string;
                        value: _254.MsgExec;
                    };
                    leaveGroup(value: _254.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _254.MsgLeaveGroup;
                    };
                };
                toJSON: {
                    createGroup(value: _254.MsgCreateGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMembers(value: _254.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupAdmin(value: _254.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupMetadata(value: _254.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupPolicy(value: _254.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createGroupWithPolicy(value: _254.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyAdmin(value: _254.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyDecisionPolicy(value: _254.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: unknown;
                    };
                    updateGroupPolicyMetadata(value: _254.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    withdrawProposal(value: _254.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: unknown;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: unknown;
                    };
                    exec(value: _254.MsgExec): {
                        typeUrl: string;
                        value: unknown;
                    };
                    leaveGroup(value: _254.MsgLeaveGroup): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createGroup(value: any): {
                        typeUrl: string;
                        value: _254.MsgCreateGroup;
                    };
                    updateGroupMembers(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: any): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: any): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: any): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: any): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    withdrawProposal(value: any): {
                        typeUrl: string;
                        value: _254.MsgWithdrawProposal;
                    };
                    vote(value: any): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    exec(value: any): {
                        typeUrl: string;
                        value: _254.MsgExec;
                    };
                    leaveGroup(value: any): {
                        typeUrl: string;
                        value: _254.MsgLeaveGroup;
                    };
                };
                fromPartial: {
                    createGroup(value: _254.MsgCreateGroup): {
                        typeUrl: string;
                        value: _254.MsgCreateGroup;
                    };
                    updateGroupMembers(value: _254.MsgUpdateGroupMembers): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMembers;
                    };
                    updateGroupAdmin(value: _254.MsgUpdateGroupAdmin): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupAdmin;
                    };
                    updateGroupMetadata(value: _254.MsgUpdateGroupMetadata): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupMetadata;
                    };
                    createGroupPolicy(value: _254.MsgCreateGroupPolicy): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupPolicy;
                    };
                    createGroupWithPolicy(value: _254.MsgCreateGroupWithPolicy): {
                        typeUrl: string;
                        value: _254.MsgCreateGroupWithPolicy;
                    };
                    updateGroupPolicyAdmin(value: _254.MsgUpdateGroupPolicyAdmin): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyAdmin;
                    };
                    updateGroupPolicyDecisionPolicy(value: _254.MsgUpdateGroupPolicyDecisionPolicy): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyDecisionPolicy;
                    };
                    updateGroupPolicyMetadata(value: _254.MsgUpdateGroupPolicyMetadata): {
                        typeUrl: string;
                        value: _254.MsgUpdateGroupPolicyMetadata;
                    };
                    submitProposal(value: _254.MsgSubmitProposal): {
                        typeUrl: string;
                        value: _254.MsgSubmitProposal;
                    };
                    withdrawProposal(value: _254.MsgWithdrawProposal): {
                        typeUrl: string;
                        value: _254.MsgWithdrawProposal;
                    };
                    vote(value: _254.MsgVote): {
                        typeUrl: string;
                        value: _254.MsgVote;
                    };
                    exec(value: _254.MsgExec): {
                        typeUrl: string;
                        value: _254.MsgExec;
                    };
                    leaveGroup(value: _254.MsgLeaveGroup): {
                        typeUrl: string;
                        value: _254.MsgLeaveGroup;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.group.v1.MsgCreateGroup": {
                    aminoType: string;
                    toAmino: (message: _254.MsgCreateGroup) => _254.MsgCreateGroupAmino;
                    fromAmino: (object: _254.MsgCreateGroupAmino) => _254.MsgCreateGroup;
                };
                "/cosmos.group.v1.MsgUpdateGroupMembers": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupMembers) => _254.MsgUpdateGroupMembersAmino;
                    fromAmino: (object: _254.MsgUpdateGroupMembersAmino) => _254.MsgUpdateGroupMembers;
                };
                "/cosmos.group.v1.MsgUpdateGroupAdmin": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupAdmin) => _254.MsgUpdateGroupAdminAmino;
                    fromAmino: (object: _254.MsgUpdateGroupAdminAmino) => _254.MsgUpdateGroupAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupMetadata": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupMetadata) => _254.MsgUpdateGroupMetadataAmino;
                    fromAmino: (object: _254.MsgUpdateGroupMetadataAmino) => _254.MsgUpdateGroupMetadata;
                };
                "/cosmos.group.v1.MsgCreateGroupPolicy": {
                    aminoType: string;
                    toAmino: (message: _254.MsgCreateGroupPolicy) => _254.MsgCreateGroupPolicyAmino;
                    fromAmino: (object: _254.MsgCreateGroupPolicyAmino) => _254.MsgCreateGroupPolicy;
                };
                "/cosmos.group.v1.MsgCreateGroupWithPolicy": {
                    aminoType: string;
                    toAmino: (message: _254.MsgCreateGroupWithPolicy) => _254.MsgCreateGroupWithPolicyAmino;
                    fromAmino: (object: _254.MsgCreateGroupWithPolicyAmino) => _254.MsgCreateGroupWithPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyAdmin": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupPolicyAdmin) => _254.MsgUpdateGroupPolicyAdminAmino;
                    fromAmino: (object: _254.MsgUpdateGroupPolicyAdminAmino) => _254.MsgUpdateGroupPolicyAdmin;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyDecisionPolicy": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupPolicyDecisionPolicy) => _254.MsgUpdateGroupPolicyDecisionPolicyAmino;
                    fromAmino: (object: _254.MsgUpdateGroupPolicyDecisionPolicyAmino) => _254.MsgUpdateGroupPolicyDecisionPolicy;
                };
                "/cosmos.group.v1.MsgUpdateGroupPolicyMetadata": {
                    aminoType: string;
                    toAmino: (message: _254.MsgUpdateGroupPolicyMetadata) => _254.MsgUpdateGroupPolicyMetadataAmino;
                    fromAmino: (object: _254.MsgUpdateGroupPolicyMetadataAmino) => _254.MsgUpdateGroupPolicyMetadata;
                };
                "/cosmos.group.v1.MsgSubmitProposal": {
                    aminoType: string;
                    toAmino: (message: _254.MsgSubmitProposal) => _254.MsgSubmitProposalAmino;
                    fromAmino: (object: _254.MsgSubmitProposalAmino) => _254.MsgSubmitProposal;
                };
                "/cosmos.group.v1.MsgWithdrawProposal": {
                    aminoType: string;
                    toAmino: (message: _254.MsgWithdrawProposal) => _254.MsgWithdrawProposalAmino;
                    fromAmino: (object: _254.MsgWithdrawProposalAmino) => _254.MsgWithdrawProposal;
                };
                "/cosmos.group.v1.MsgVote": {
                    aminoType: string;
                    toAmino: (message: _254.MsgVote) => _254.MsgVoteAmino;
                    fromAmino: (object: _254.MsgVoteAmino) => _254.MsgVote;
                };
                "/cosmos.group.v1.MsgExec": {
                    aminoType: string;
                    toAmino: (message: _254.MsgExec) => _254.MsgExecAmino;
                    fromAmino: (object: _254.MsgExecAmino) => _254.MsgExec;
                };
                "/cosmos.group.v1.MsgLeaveGroup": {
                    aminoType: string;
                    toAmino: (message: _254.MsgLeaveGroup) => _254.MsgLeaveGroupAmino;
                    fromAmino: (object: _254.MsgLeaveGroupAmino) => _254.MsgLeaveGroup;
                };
            };
            voteOptionFromJSON(object: any): _255.VoteOption;
            voteOptionToJSON(object: _255.VoteOption): string;
            proposalStatusFromJSON(object: any): _255.ProposalStatus;
            proposalStatusToJSON(object: _255.ProposalStatus): string;
            proposalResultFromJSON(object: any): _255.ProposalResult;
            proposalResultToJSON(object: _255.ProposalResult): string;
            proposalExecutorResultFromJSON(object: any): _255.ProposalExecutorResult;
            proposalExecutorResultToJSON(object: _255.ProposalExecutorResult): string;
            VoteOption: typeof _255.VoteOption;
            VoteOptionSDKType: typeof _255.VoteOption;
            VoteOptionAmino: typeof _255.VoteOption;
            ProposalStatus: typeof _255.ProposalStatus;
            ProposalStatusSDKType: typeof _255.ProposalStatus;
            ProposalStatusAmino: typeof _255.ProposalStatus;
            ProposalResult: typeof _255.ProposalResult;
            ProposalResultSDKType: typeof _255.ProposalResult;
            ProposalResultAmino: typeof _255.ProposalResult;
            ProposalExecutorResult: typeof _255.ProposalExecutorResult;
            ProposalExecutorResultSDKType: typeof _255.ProposalExecutorResult;
            ProposalExecutorResultAmino: typeof _255.ProposalExecutorResult;
            Member: {
                encode(message: _255.Member, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Member;
                fromJSON(object: any): _255.Member;
                toJSON(message: _255.Member): unknown;
                fromPartial(object: Partial<_255.Member>): _255.Member;
                fromAmino(object: _255.MemberAmino): _255.Member;
                toAmino(message: _255.Member): _255.MemberAmino;
                fromAminoMsg(object: _255.MemberAminoMsg): _255.Member;
                toAminoMsg(message: _255.Member): _255.MemberAminoMsg;
                fromProtoMsg(message: _255.MemberProtoMsg): _255.Member;
                toProto(message: _255.Member): Uint8Array;
                toProtoMsg(message: _255.Member): _255.MemberProtoMsg;
            };
            Members: {
                encode(message: _255.Members, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Members;
                fromJSON(object: any): _255.Members;
                toJSON(message: _255.Members): unknown;
                fromPartial(object: Partial<_255.Members>): _255.Members;
                fromAmino(object: _255.MembersAmino): _255.Members;
                toAmino(message: _255.Members): _255.MembersAmino;
                fromAminoMsg(object: _255.MembersAminoMsg): _255.Members;
                toAminoMsg(message: _255.Members): _255.MembersAminoMsg;
                fromProtoMsg(message: _255.MembersProtoMsg): _255.Members;
                toProto(message: _255.Members): Uint8Array;
                toProtoMsg(message: _255.Members): _255.MembersProtoMsg;
            };
            ThresholdDecisionPolicy: {
                encode(message: _255.ThresholdDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.ThresholdDecisionPolicy;
                fromJSON(object: any): _255.ThresholdDecisionPolicy;
                toJSON(message: _255.ThresholdDecisionPolicy): unknown;
                fromPartial(object: Partial<_255.ThresholdDecisionPolicy>): _255.ThresholdDecisionPolicy;
                fromAmino(object: _255.ThresholdDecisionPolicyAmino): _255.ThresholdDecisionPolicy;
                toAmino(message: _255.ThresholdDecisionPolicy): _255.ThresholdDecisionPolicyAmino;
                fromAminoMsg(object: _255.ThresholdDecisionPolicyAminoMsg): _255.ThresholdDecisionPolicy;
                toAminoMsg(message: _255.ThresholdDecisionPolicy): _255.ThresholdDecisionPolicyAminoMsg;
                fromProtoMsg(message: _255.ThresholdDecisionPolicyProtoMsg): _255.ThresholdDecisionPolicy;
                toProto(message: _255.ThresholdDecisionPolicy): Uint8Array;
                toProtoMsg(message: _255.ThresholdDecisionPolicy): _255.ThresholdDecisionPolicyProtoMsg;
            };
            PercentageDecisionPolicy: {
                encode(message: _255.PercentageDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.PercentageDecisionPolicy;
                fromJSON(object: any): _255.PercentageDecisionPolicy;
                toJSON(message: _255.PercentageDecisionPolicy): unknown;
                fromPartial(object: Partial<_255.PercentageDecisionPolicy>): _255.PercentageDecisionPolicy;
                fromAmino(object: _255.PercentageDecisionPolicyAmino): _255.PercentageDecisionPolicy;
                toAmino(message: _255.PercentageDecisionPolicy): _255.PercentageDecisionPolicyAmino;
                fromAminoMsg(object: _255.PercentageDecisionPolicyAminoMsg): _255.PercentageDecisionPolicy;
                toAminoMsg(message: _255.PercentageDecisionPolicy): _255.PercentageDecisionPolicyAminoMsg;
                fromProtoMsg(message: _255.PercentageDecisionPolicyProtoMsg): _255.PercentageDecisionPolicy;
                toProto(message: _255.PercentageDecisionPolicy): Uint8Array;
                toProtoMsg(message: _255.PercentageDecisionPolicy): _255.PercentageDecisionPolicyProtoMsg;
            };
            DecisionPolicyWindows: {
                encode(message: _255.DecisionPolicyWindows, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.DecisionPolicyWindows;
                fromJSON(object: any): _255.DecisionPolicyWindows;
                toJSON(message: _255.DecisionPolicyWindows): unknown;
                fromPartial(object: Partial<_255.DecisionPolicyWindows>): _255.DecisionPolicyWindows;
                fromAmino(object: _255.DecisionPolicyWindowsAmino): _255.DecisionPolicyWindows;
                toAmino(message: _255.DecisionPolicyWindows): _255.DecisionPolicyWindowsAmino;
                fromAminoMsg(object: _255.DecisionPolicyWindowsAminoMsg): _255.DecisionPolicyWindows;
                toAminoMsg(message: _255.DecisionPolicyWindows): _255.DecisionPolicyWindowsAminoMsg;
                fromProtoMsg(message: _255.DecisionPolicyWindowsProtoMsg): _255.DecisionPolicyWindows;
                toProto(message: _255.DecisionPolicyWindows): Uint8Array;
                toProtoMsg(message: _255.DecisionPolicyWindows): _255.DecisionPolicyWindowsProtoMsg;
            };
            GroupInfo: {
                encode(message: _255.GroupInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GroupInfo;
                fromJSON(object: any): _255.GroupInfo;
                toJSON(message: _255.GroupInfo): unknown;
                fromPartial(object: Partial<_255.GroupInfo>): _255.GroupInfo;
                fromAmino(object: _255.GroupInfoAmino): _255.GroupInfo;
                toAmino(message: _255.GroupInfo): _255.GroupInfoAmino;
                fromAminoMsg(object: _255.GroupInfoAminoMsg): _255.GroupInfo;
                toAminoMsg(message: _255.GroupInfo): _255.GroupInfoAminoMsg;
                fromProtoMsg(message: _255.GroupInfoProtoMsg): _255.GroupInfo;
                toProto(message: _255.GroupInfo): Uint8Array;
                toProtoMsg(message: _255.GroupInfo): _255.GroupInfoProtoMsg;
            };
            GroupMember: {
                encode(message: _255.GroupMember, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GroupMember;
                fromJSON(object: any): _255.GroupMember;
                toJSON(message: _255.GroupMember): unknown;
                fromPartial(object: Partial<_255.GroupMember>): _255.GroupMember;
                fromAmino(object: _255.GroupMemberAmino): _255.GroupMember;
                toAmino(message: _255.GroupMember): _255.GroupMemberAmino;
                fromAminoMsg(object: _255.GroupMemberAminoMsg): _255.GroupMember;
                toAminoMsg(message: _255.GroupMember): _255.GroupMemberAminoMsg;
                fromProtoMsg(message: _255.GroupMemberProtoMsg): _255.GroupMember;
                toProto(message: _255.GroupMember): Uint8Array;
                toProtoMsg(message: _255.GroupMember): _255.GroupMemberProtoMsg;
            };
            GroupPolicyInfo: {
                encode(message: _255.GroupPolicyInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.GroupPolicyInfo;
                fromJSON(object: any): _255.GroupPolicyInfo;
                toJSON(message: _255.GroupPolicyInfo): unknown;
                fromPartial(object: Partial<_255.GroupPolicyInfo>): _255.GroupPolicyInfo;
                fromAmino(object: _255.GroupPolicyInfoAmino): _255.GroupPolicyInfo;
                toAmino(message: _255.GroupPolicyInfo): _255.GroupPolicyInfoAmino;
                fromAminoMsg(object: _255.GroupPolicyInfoAminoMsg): _255.GroupPolicyInfo;
                toAminoMsg(message: _255.GroupPolicyInfo): _255.GroupPolicyInfoAminoMsg;
                fromProtoMsg(message: _255.GroupPolicyInfoProtoMsg): _255.GroupPolicyInfo;
                toProto(message: _255.GroupPolicyInfo): Uint8Array;
                toProtoMsg(message: _255.GroupPolicyInfo): _255.GroupPolicyInfoProtoMsg;
            };
            Proposal: {
                encode(message: _255.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Proposal;
                fromJSON(object: any): _255.Proposal;
                toJSON(message: _255.Proposal): unknown;
                fromPartial(object: Partial<_255.Proposal>): _255.Proposal;
                fromAmino(object: _255.ProposalAmino): _255.Proposal;
                toAmino(message: _255.Proposal): _255.ProposalAmino;
                fromAminoMsg(object: _255.ProposalAminoMsg): _255.Proposal;
                toAminoMsg(message: _255.Proposal): _255.ProposalAminoMsg;
                fromProtoMsg(message: _255.ProposalProtoMsg): _255.Proposal;
                toProto(message: _255.Proposal): Uint8Array;
                toProtoMsg(message: _255.Proposal): _255.ProposalProtoMsg;
            };
            TallyResult: {
                encode(message: _255.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.TallyResult;
                fromJSON(object: any): _255.TallyResult;
                toJSON(message: _255.TallyResult): unknown;
                fromPartial(object: Partial<_255.TallyResult>): _255.TallyResult;
                fromAmino(object: _255.TallyResultAmino): _255.TallyResult;
                toAmino(message: _255.TallyResult): _255.TallyResultAmino;
                fromAminoMsg(object: _255.TallyResultAminoMsg): _255.TallyResult;
                toAminoMsg(message: _255.TallyResult): _255.TallyResultAminoMsg;
                fromProtoMsg(message: _255.TallyResultProtoMsg): _255.TallyResult;
                toProto(message: _255.TallyResult): Uint8Array;
                toProtoMsg(message: _255.TallyResult): _255.TallyResultProtoMsg;
            };
            Vote: {
                encode(message: _255.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _255.Vote;
                fromJSON(object: any): _255.Vote;
                toJSON(message: _255.Vote): unknown;
                fromPartial(object: Partial<_255.Vote>): _255.Vote;
                fromAmino(object: _255.VoteAmino): _255.Vote;
                toAmino(message: _255.Vote): _255.VoteAmino;
                fromAminoMsg(object: _255.VoteAminoMsg): _255.Vote;
                toAminoMsg(message: _255.Vote): _255.VoteAminoMsg;
                fromProtoMsg(message: _255.VoteProtoMsg): _255.Vote;
                toProto(message: _255.Vote): Uint8Array;
                toProtoMsg(message: _255.Vote): _255.VoteProtoMsg;
            };
            execFromJSON(object: any): _254.Exec;
            execToJSON(object: _254.Exec): string;
            Exec: typeof _254.Exec;
            ExecSDKType: typeof _254.Exec;
            ExecAmino: typeof _254.Exec;
            MsgCreateGroup: {
                encode(message: _254.MsgCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroup;
                fromJSON(object: any): _254.MsgCreateGroup;
                toJSON(message: _254.MsgCreateGroup): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroup>): _254.MsgCreateGroup;
                fromAmino(object: _254.MsgCreateGroupAmino): _254.MsgCreateGroup;
                toAmino(message: _254.MsgCreateGroup): _254.MsgCreateGroupAmino;
                fromAminoMsg(object: _254.MsgCreateGroupAminoMsg): _254.MsgCreateGroup;
                toAminoMsg(message: _254.MsgCreateGroup): _254.MsgCreateGroupAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupProtoMsg): _254.MsgCreateGroup;
                toProto(message: _254.MsgCreateGroup): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroup): _254.MsgCreateGroupProtoMsg;
            };
            MsgCreateGroupResponse: {
                encode(message: _254.MsgCreateGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroupResponse;
                fromJSON(object: any): _254.MsgCreateGroupResponse;
                toJSON(message: _254.MsgCreateGroupResponse): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroupResponse>): _254.MsgCreateGroupResponse;
                fromAmino(object: _254.MsgCreateGroupResponseAmino): _254.MsgCreateGroupResponse;
                toAmino(message: _254.MsgCreateGroupResponse): _254.MsgCreateGroupResponseAmino;
                fromAminoMsg(object: _254.MsgCreateGroupResponseAminoMsg): _254.MsgCreateGroupResponse;
                toAminoMsg(message: _254.MsgCreateGroupResponse): _254.MsgCreateGroupResponseAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupResponseProtoMsg): _254.MsgCreateGroupResponse;
                toProto(message: _254.MsgCreateGroupResponse): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroupResponse): _254.MsgCreateGroupResponseProtoMsg;
            };
            MsgUpdateGroupMembers: {
                encode(message: _254.MsgUpdateGroupMembers, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupMembers;
                fromJSON(object: any): _254.MsgUpdateGroupMembers;
                toJSON(message: _254.MsgUpdateGroupMembers): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupMembers>): _254.MsgUpdateGroupMembers;
                fromAmino(object: _254.MsgUpdateGroupMembersAmino): _254.MsgUpdateGroupMembers;
                toAmino(message: _254.MsgUpdateGroupMembers): _254.MsgUpdateGroupMembersAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupMembersAminoMsg): _254.MsgUpdateGroupMembers;
                toAminoMsg(message: _254.MsgUpdateGroupMembers): _254.MsgUpdateGroupMembersAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupMembersProtoMsg): _254.MsgUpdateGroupMembers;
                toProto(message: _254.MsgUpdateGroupMembers): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupMembers): _254.MsgUpdateGroupMembersProtoMsg;
            };
            MsgUpdateGroupMembersResponse: {
                encode(_: _254.MsgUpdateGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupMembersResponse;
                fromJSON(_: any): _254.MsgUpdateGroupMembersResponse;
                toJSON(_: _254.MsgUpdateGroupMembersResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupMembersResponse>): _254.MsgUpdateGroupMembersResponse;
                fromAmino(_: _254.MsgUpdateGroupMembersResponseAmino): _254.MsgUpdateGroupMembersResponse;
                toAmino(_: _254.MsgUpdateGroupMembersResponse): _254.MsgUpdateGroupMembersResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupMembersResponseAminoMsg): _254.MsgUpdateGroupMembersResponse;
                toAminoMsg(message: _254.MsgUpdateGroupMembersResponse): _254.MsgUpdateGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupMembersResponseProtoMsg): _254.MsgUpdateGroupMembersResponse;
                toProto(message: _254.MsgUpdateGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupMembersResponse): _254.MsgUpdateGroupMembersResponseProtoMsg;
            };
            MsgUpdateGroupAdmin: {
                encode(message: _254.MsgUpdateGroupAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupAdmin;
                fromJSON(object: any): _254.MsgUpdateGroupAdmin;
                toJSON(message: _254.MsgUpdateGroupAdmin): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupAdmin>): _254.MsgUpdateGroupAdmin;
                fromAmino(object: _254.MsgUpdateGroupAdminAmino): _254.MsgUpdateGroupAdmin;
                toAmino(message: _254.MsgUpdateGroupAdmin): _254.MsgUpdateGroupAdminAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupAdminAminoMsg): _254.MsgUpdateGroupAdmin;
                toAminoMsg(message: _254.MsgUpdateGroupAdmin): _254.MsgUpdateGroupAdminAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupAdminProtoMsg): _254.MsgUpdateGroupAdmin;
                toProto(message: _254.MsgUpdateGroupAdmin): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupAdmin): _254.MsgUpdateGroupAdminProtoMsg;
            };
            MsgUpdateGroupAdminResponse: {
                encode(_: _254.MsgUpdateGroupAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupAdminResponse;
                fromJSON(_: any): _254.MsgUpdateGroupAdminResponse;
                toJSON(_: _254.MsgUpdateGroupAdminResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupAdminResponse>): _254.MsgUpdateGroupAdminResponse;
                fromAmino(_: _254.MsgUpdateGroupAdminResponseAmino): _254.MsgUpdateGroupAdminResponse;
                toAmino(_: _254.MsgUpdateGroupAdminResponse): _254.MsgUpdateGroupAdminResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupAdminResponseAminoMsg): _254.MsgUpdateGroupAdminResponse;
                toAminoMsg(message: _254.MsgUpdateGroupAdminResponse): _254.MsgUpdateGroupAdminResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupAdminResponseProtoMsg): _254.MsgUpdateGroupAdminResponse;
                toProto(message: _254.MsgUpdateGroupAdminResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupAdminResponse): _254.MsgUpdateGroupAdminResponseProtoMsg;
            };
            MsgUpdateGroupMetadata: {
                encode(message: _254.MsgUpdateGroupMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupMetadata;
                fromJSON(object: any): _254.MsgUpdateGroupMetadata;
                toJSON(message: _254.MsgUpdateGroupMetadata): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupMetadata>): _254.MsgUpdateGroupMetadata;
                fromAmino(object: _254.MsgUpdateGroupMetadataAmino): _254.MsgUpdateGroupMetadata;
                toAmino(message: _254.MsgUpdateGroupMetadata): _254.MsgUpdateGroupMetadataAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupMetadataAminoMsg): _254.MsgUpdateGroupMetadata;
                toAminoMsg(message: _254.MsgUpdateGroupMetadata): _254.MsgUpdateGroupMetadataAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupMetadataProtoMsg): _254.MsgUpdateGroupMetadata;
                toProto(message: _254.MsgUpdateGroupMetadata): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupMetadata): _254.MsgUpdateGroupMetadataProtoMsg;
            };
            MsgUpdateGroupMetadataResponse: {
                encode(_: _254.MsgUpdateGroupMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupMetadataResponse;
                fromJSON(_: any): _254.MsgUpdateGroupMetadataResponse;
                toJSON(_: _254.MsgUpdateGroupMetadataResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupMetadataResponse>): _254.MsgUpdateGroupMetadataResponse;
                fromAmino(_: _254.MsgUpdateGroupMetadataResponseAmino): _254.MsgUpdateGroupMetadataResponse;
                toAmino(_: _254.MsgUpdateGroupMetadataResponse): _254.MsgUpdateGroupMetadataResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupMetadataResponseAminoMsg): _254.MsgUpdateGroupMetadataResponse;
                toAminoMsg(message: _254.MsgUpdateGroupMetadataResponse): _254.MsgUpdateGroupMetadataResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupMetadataResponseProtoMsg): _254.MsgUpdateGroupMetadataResponse;
                toProto(message: _254.MsgUpdateGroupMetadataResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupMetadataResponse): _254.MsgUpdateGroupMetadataResponseProtoMsg;
            };
            MsgCreateGroupPolicy: {
                encode(message: _254.MsgCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroupPolicy;
                fromJSON(object: any): _254.MsgCreateGroupPolicy;
                toJSON(message: _254.MsgCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroupPolicy>): _254.MsgCreateGroupPolicy;
                fromAmino(object: _254.MsgCreateGroupPolicyAmino): _254.MsgCreateGroupPolicy;
                toAmino(message: _254.MsgCreateGroupPolicy): _254.MsgCreateGroupPolicyAmino;
                fromAminoMsg(object: _254.MsgCreateGroupPolicyAminoMsg): _254.MsgCreateGroupPolicy;
                toAminoMsg(message: _254.MsgCreateGroupPolicy): _254.MsgCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupPolicyProtoMsg): _254.MsgCreateGroupPolicy;
                toProto(message: _254.MsgCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroupPolicy): _254.MsgCreateGroupPolicyProtoMsg;
            };
            MsgCreateGroupPolicyResponse: {
                encode(message: _254.MsgCreateGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroupPolicyResponse;
                fromJSON(object: any): _254.MsgCreateGroupPolicyResponse;
                toJSON(message: _254.MsgCreateGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroupPolicyResponse>): _254.MsgCreateGroupPolicyResponse;
                fromAmino(object: _254.MsgCreateGroupPolicyResponseAmino): _254.MsgCreateGroupPolicyResponse;
                toAmino(message: _254.MsgCreateGroupPolicyResponse): _254.MsgCreateGroupPolicyResponseAmino;
                fromAminoMsg(object: _254.MsgCreateGroupPolicyResponseAminoMsg): _254.MsgCreateGroupPolicyResponse;
                toAminoMsg(message: _254.MsgCreateGroupPolicyResponse): _254.MsgCreateGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupPolicyResponseProtoMsg): _254.MsgCreateGroupPolicyResponse;
                toProto(message: _254.MsgCreateGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroupPolicyResponse): _254.MsgCreateGroupPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdmin: {
                encode(message: _254.MsgUpdateGroupPolicyAdmin, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyAdmin;
                fromJSON(object: any): _254.MsgUpdateGroupPolicyAdmin;
                toJSON(message: _254.MsgUpdateGroupPolicyAdmin): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupPolicyAdmin>): _254.MsgUpdateGroupPolicyAdmin;
                fromAmino(object: _254.MsgUpdateGroupPolicyAdminAmino): _254.MsgUpdateGroupPolicyAdmin;
                toAmino(message: _254.MsgUpdateGroupPolicyAdmin): _254.MsgUpdateGroupPolicyAdminAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyAdminAminoMsg): _254.MsgUpdateGroupPolicyAdmin;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyAdmin): _254.MsgUpdateGroupPolicyAdminAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyAdminProtoMsg): _254.MsgUpdateGroupPolicyAdmin;
                toProto(message: _254.MsgUpdateGroupPolicyAdmin): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyAdmin): _254.MsgUpdateGroupPolicyAdminProtoMsg;
            };
            MsgCreateGroupWithPolicy: {
                encode(message: _254.MsgCreateGroupWithPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroupWithPolicy;
                fromJSON(object: any): _254.MsgCreateGroupWithPolicy;
                toJSON(message: _254.MsgCreateGroupWithPolicy): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroupWithPolicy>): _254.MsgCreateGroupWithPolicy;
                fromAmino(object: _254.MsgCreateGroupWithPolicyAmino): _254.MsgCreateGroupWithPolicy;
                toAmino(message: _254.MsgCreateGroupWithPolicy): _254.MsgCreateGroupWithPolicyAmino;
                fromAminoMsg(object: _254.MsgCreateGroupWithPolicyAminoMsg): _254.MsgCreateGroupWithPolicy;
                toAminoMsg(message: _254.MsgCreateGroupWithPolicy): _254.MsgCreateGroupWithPolicyAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupWithPolicyProtoMsg): _254.MsgCreateGroupWithPolicy;
                toProto(message: _254.MsgCreateGroupWithPolicy): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroupWithPolicy): _254.MsgCreateGroupWithPolicyProtoMsg;
            };
            MsgCreateGroupWithPolicyResponse: {
                encode(message: _254.MsgCreateGroupWithPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgCreateGroupWithPolicyResponse;
                fromJSON(object: any): _254.MsgCreateGroupWithPolicyResponse;
                toJSON(message: _254.MsgCreateGroupWithPolicyResponse): unknown;
                fromPartial(object: Partial<_254.MsgCreateGroupWithPolicyResponse>): _254.MsgCreateGroupWithPolicyResponse;
                fromAmino(object: _254.MsgCreateGroupWithPolicyResponseAmino): _254.MsgCreateGroupWithPolicyResponse;
                toAmino(message: _254.MsgCreateGroupWithPolicyResponse): _254.MsgCreateGroupWithPolicyResponseAmino;
                fromAminoMsg(object: _254.MsgCreateGroupWithPolicyResponseAminoMsg): _254.MsgCreateGroupWithPolicyResponse;
                toAminoMsg(message: _254.MsgCreateGroupWithPolicyResponse): _254.MsgCreateGroupWithPolicyResponseAminoMsg;
                fromProtoMsg(message: _254.MsgCreateGroupWithPolicyResponseProtoMsg): _254.MsgCreateGroupWithPolicyResponse;
                toProto(message: _254.MsgCreateGroupWithPolicyResponse): Uint8Array;
                toProtoMsg(message: _254.MsgCreateGroupWithPolicyResponse): _254.MsgCreateGroupWithPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyAdminResponse: {
                encode(_: _254.MsgUpdateGroupPolicyAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyAdminResponse;
                fromJSON(_: any): _254.MsgUpdateGroupPolicyAdminResponse;
                toJSON(_: _254.MsgUpdateGroupPolicyAdminResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupPolicyAdminResponse>): _254.MsgUpdateGroupPolicyAdminResponse;
                fromAmino(_: _254.MsgUpdateGroupPolicyAdminResponseAmino): _254.MsgUpdateGroupPolicyAdminResponse;
                toAmino(_: _254.MsgUpdateGroupPolicyAdminResponse): _254.MsgUpdateGroupPolicyAdminResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyAdminResponseAminoMsg): _254.MsgUpdateGroupPolicyAdminResponse;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyAdminResponse): _254.MsgUpdateGroupPolicyAdminResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyAdminResponseProtoMsg): _254.MsgUpdateGroupPolicyAdminResponse;
                toProto(message: _254.MsgUpdateGroupPolicyAdminResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyAdminResponse): _254.MsgUpdateGroupPolicyAdminResponseProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicy: {
                encode(message: _254.MsgUpdateGroupPolicyDecisionPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyDecisionPolicy;
                fromJSON(object: any): _254.MsgUpdateGroupPolicyDecisionPolicy;
                toJSON(message: _254.MsgUpdateGroupPolicyDecisionPolicy): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupPolicyDecisionPolicy>): _254.MsgUpdateGroupPolicyDecisionPolicy;
                fromAmino(object: _254.MsgUpdateGroupPolicyDecisionPolicyAmino): _254.MsgUpdateGroupPolicyDecisionPolicy;
                toAmino(message: _254.MsgUpdateGroupPolicyDecisionPolicy): _254.MsgUpdateGroupPolicyDecisionPolicyAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyDecisionPolicyAminoMsg): _254.MsgUpdateGroupPolicyDecisionPolicy;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicy): _254.MsgUpdateGroupPolicyDecisionPolicyAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicyProtoMsg): _254.MsgUpdateGroupPolicyDecisionPolicy;
                toProto(message: _254.MsgUpdateGroupPolicyDecisionPolicy): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicy): _254.MsgUpdateGroupPolicyDecisionPolicyProtoMsg;
            };
            MsgUpdateGroupPolicyDecisionPolicyResponse: {
                encode(_: _254.MsgUpdateGroupPolicyDecisionPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromJSON(_: any): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toJSON(_: _254.MsgUpdateGroupPolicyDecisionPolicyResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupPolicyDecisionPolicyResponse>): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                fromAmino(_: _254.MsgUpdateGroupPolicyDecisionPolicyResponseAmino): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAmino(_: _254.MsgUpdateGroupPolicyDecisionPolicyResponse): _254.MsgUpdateGroupPolicyDecisionPolicyResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicyResponse): _254.MsgUpdateGroupPolicyDecisionPolicyResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg): _254.MsgUpdateGroupPolicyDecisionPolicyResponse;
                toProto(message: _254.MsgUpdateGroupPolicyDecisionPolicyResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyDecisionPolicyResponse): _254.MsgUpdateGroupPolicyDecisionPolicyResponseProtoMsg;
            };
            MsgUpdateGroupPolicyMetadata: {
                encode(message: _254.MsgUpdateGroupPolicyMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyMetadata;
                fromJSON(object: any): _254.MsgUpdateGroupPolicyMetadata;
                toJSON(message: _254.MsgUpdateGroupPolicyMetadata): unknown;
                fromPartial(object: Partial<_254.MsgUpdateGroupPolicyMetadata>): _254.MsgUpdateGroupPolicyMetadata;
                fromAmino(object: _254.MsgUpdateGroupPolicyMetadataAmino): _254.MsgUpdateGroupPolicyMetadata;
                toAmino(message: _254.MsgUpdateGroupPolicyMetadata): _254.MsgUpdateGroupPolicyMetadataAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyMetadataAminoMsg): _254.MsgUpdateGroupPolicyMetadata;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyMetadata): _254.MsgUpdateGroupPolicyMetadataAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyMetadataProtoMsg): _254.MsgUpdateGroupPolicyMetadata;
                toProto(message: _254.MsgUpdateGroupPolicyMetadata): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyMetadata): _254.MsgUpdateGroupPolicyMetadataProtoMsg;
            };
            MsgUpdateGroupPolicyMetadataResponse: {
                encode(_: _254.MsgUpdateGroupPolicyMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgUpdateGroupPolicyMetadataResponse;
                fromJSON(_: any): _254.MsgUpdateGroupPolicyMetadataResponse;
                toJSON(_: _254.MsgUpdateGroupPolicyMetadataResponse): unknown;
                fromPartial(_: Partial<_254.MsgUpdateGroupPolicyMetadataResponse>): _254.MsgUpdateGroupPolicyMetadataResponse;
                fromAmino(_: _254.MsgUpdateGroupPolicyMetadataResponseAmino): _254.MsgUpdateGroupPolicyMetadataResponse;
                toAmino(_: _254.MsgUpdateGroupPolicyMetadataResponse): _254.MsgUpdateGroupPolicyMetadataResponseAmino;
                fromAminoMsg(object: _254.MsgUpdateGroupPolicyMetadataResponseAminoMsg): _254.MsgUpdateGroupPolicyMetadataResponse;
                toAminoMsg(message: _254.MsgUpdateGroupPolicyMetadataResponse): _254.MsgUpdateGroupPolicyMetadataResponseAminoMsg;
                fromProtoMsg(message: _254.MsgUpdateGroupPolicyMetadataResponseProtoMsg): _254.MsgUpdateGroupPolicyMetadataResponse;
                toProto(message: _254.MsgUpdateGroupPolicyMetadataResponse): Uint8Array;
                toProtoMsg(message: _254.MsgUpdateGroupPolicyMetadataResponse): _254.MsgUpdateGroupPolicyMetadataResponseProtoMsg;
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
            MsgWithdrawProposal: {
                encode(message: _254.MsgWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgWithdrawProposal;
                fromJSON(object: any): _254.MsgWithdrawProposal;
                toJSON(message: _254.MsgWithdrawProposal): unknown;
                fromPartial(object: Partial<_254.MsgWithdrawProposal>): _254.MsgWithdrawProposal;
                fromAmino(object: _254.MsgWithdrawProposalAmino): _254.MsgWithdrawProposal;
                toAmino(message: _254.MsgWithdrawProposal): _254.MsgWithdrawProposalAmino;
                fromAminoMsg(object: _254.MsgWithdrawProposalAminoMsg): _254.MsgWithdrawProposal;
                toAminoMsg(message: _254.MsgWithdrawProposal): _254.MsgWithdrawProposalAminoMsg;
                fromProtoMsg(message: _254.MsgWithdrawProposalProtoMsg): _254.MsgWithdrawProposal;
                toProto(message: _254.MsgWithdrawProposal): Uint8Array;
                toProtoMsg(message: _254.MsgWithdrawProposal): _254.MsgWithdrawProposalProtoMsg;
            };
            MsgWithdrawProposalResponse: {
                encode(_: _254.MsgWithdrawProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgWithdrawProposalResponse;
                fromJSON(_: any): _254.MsgWithdrawProposalResponse;
                toJSON(_: _254.MsgWithdrawProposalResponse): unknown;
                fromPartial(_: Partial<_254.MsgWithdrawProposalResponse>): _254.MsgWithdrawProposalResponse;
                fromAmino(_: _254.MsgWithdrawProposalResponseAmino): _254.MsgWithdrawProposalResponse;
                toAmino(_: _254.MsgWithdrawProposalResponse): _254.MsgWithdrawProposalResponseAmino;
                fromAminoMsg(object: _254.MsgWithdrawProposalResponseAminoMsg): _254.MsgWithdrawProposalResponse;
                toAminoMsg(message: _254.MsgWithdrawProposalResponse): _254.MsgWithdrawProposalResponseAminoMsg;
                fromProtoMsg(message: _254.MsgWithdrawProposalResponseProtoMsg): _254.MsgWithdrawProposalResponse;
                toProto(message: _254.MsgWithdrawProposalResponse): Uint8Array;
                toProtoMsg(message: _254.MsgWithdrawProposalResponse): _254.MsgWithdrawProposalResponseProtoMsg;
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
            MsgExec: {
                encode(message: _254.MsgExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgExec;
                fromJSON(object: any): _254.MsgExec;
                toJSON(message: _254.MsgExec): unknown;
                fromPartial(object: Partial<_254.MsgExec>): _254.MsgExec;
                fromAmino(object: _254.MsgExecAmino): _254.MsgExec;
                toAmino(message: _254.MsgExec): _254.MsgExecAmino;
                fromAminoMsg(object: _254.MsgExecAminoMsg): _254.MsgExec;
                toAminoMsg(message: _254.MsgExec): _254.MsgExecAminoMsg;
                fromProtoMsg(message: _254.MsgExecProtoMsg): _254.MsgExec;
                toProto(message: _254.MsgExec): Uint8Array;
                toProtoMsg(message: _254.MsgExec): _254.MsgExecProtoMsg;
            };
            MsgExecResponse: {
                encode(_: _254.MsgExecResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgExecResponse;
                fromJSON(_: any): _254.MsgExecResponse;
                toJSON(_: _254.MsgExecResponse): unknown;
                fromPartial(_: Partial<_254.MsgExecResponse>): _254.MsgExecResponse;
                fromAmino(_: _254.MsgExecResponseAmino): _254.MsgExecResponse;
                toAmino(_: _254.MsgExecResponse): _254.MsgExecResponseAmino;
                fromAminoMsg(object: _254.MsgExecResponseAminoMsg): _254.MsgExecResponse;
                toAminoMsg(message: _254.MsgExecResponse): _254.MsgExecResponseAminoMsg;
                fromProtoMsg(message: _254.MsgExecResponseProtoMsg): _254.MsgExecResponse;
                toProto(message: _254.MsgExecResponse): Uint8Array;
                toProtoMsg(message: _254.MsgExecResponse): _254.MsgExecResponseProtoMsg;
            };
            MsgLeaveGroup: {
                encode(message: _254.MsgLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgLeaveGroup;
                fromJSON(object: any): _254.MsgLeaveGroup;
                toJSON(message: _254.MsgLeaveGroup): unknown;
                fromPartial(object: Partial<_254.MsgLeaveGroup>): _254.MsgLeaveGroup;
                fromAmino(object: _254.MsgLeaveGroupAmino): _254.MsgLeaveGroup;
                toAmino(message: _254.MsgLeaveGroup): _254.MsgLeaveGroupAmino;
                fromAminoMsg(object: _254.MsgLeaveGroupAminoMsg): _254.MsgLeaveGroup;
                toAminoMsg(message: _254.MsgLeaveGroup): _254.MsgLeaveGroupAminoMsg;
                fromProtoMsg(message: _254.MsgLeaveGroupProtoMsg): _254.MsgLeaveGroup;
                toProto(message: _254.MsgLeaveGroup): Uint8Array;
                toProtoMsg(message: _254.MsgLeaveGroup): _254.MsgLeaveGroupProtoMsg;
            };
            MsgLeaveGroupResponse: {
                encode(_: _254.MsgLeaveGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _254.MsgLeaveGroupResponse;
                fromJSON(_: any): _254.MsgLeaveGroupResponse;
                toJSON(_: _254.MsgLeaveGroupResponse): unknown;
                fromPartial(_: Partial<_254.MsgLeaveGroupResponse>): _254.MsgLeaveGroupResponse;
                fromAmino(_: _254.MsgLeaveGroupResponseAmino): _254.MsgLeaveGroupResponse;
                toAmino(_: _254.MsgLeaveGroupResponse): _254.MsgLeaveGroupResponseAmino;
                fromAminoMsg(object: _254.MsgLeaveGroupResponseAminoMsg): _254.MsgLeaveGroupResponse;
                toAminoMsg(message: _254.MsgLeaveGroupResponse): _254.MsgLeaveGroupResponseAminoMsg;
                fromProtoMsg(message: _254.MsgLeaveGroupResponseProtoMsg): _254.MsgLeaveGroupResponse;
                toProto(message: _254.MsgLeaveGroupResponse): Uint8Array;
                toProtoMsg(message: _254.MsgLeaveGroupResponse): _254.MsgLeaveGroupResponseProtoMsg;
            };
            QueryGroupInfoRequest: {
                encode(message: _253.QueryGroupInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupInfoRequest;
                fromJSON(object: any): _253.QueryGroupInfoRequest;
                toJSON(message: _253.QueryGroupInfoRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupInfoRequest>): _253.QueryGroupInfoRequest;
                fromAmino(object: _253.QueryGroupInfoRequestAmino): _253.QueryGroupInfoRequest;
                toAmino(message: _253.QueryGroupInfoRequest): _253.QueryGroupInfoRequestAmino;
                fromAminoMsg(object: _253.QueryGroupInfoRequestAminoMsg): _253.QueryGroupInfoRequest;
                toAminoMsg(message: _253.QueryGroupInfoRequest): _253.QueryGroupInfoRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupInfoRequestProtoMsg): _253.QueryGroupInfoRequest;
                toProto(message: _253.QueryGroupInfoRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupInfoRequest): _253.QueryGroupInfoRequestProtoMsg;
            };
            QueryGroupInfoResponse: {
                encode(message: _253.QueryGroupInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupInfoResponse;
                fromJSON(object: any): _253.QueryGroupInfoResponse;
                toJSON(message: _253.QueryGroupInfoResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupInfoResponse>): _253.QueryGroupInfoResponse;
                fromAmino(object: _253.QueryGroupInfoResponseAmino): _253.QueryGroupInfoResponse;
                toAmino(message: _253.QueryGroupInfoResponse): _253.QueryGroupInfoResponseAmino;
                fromAminoMsg(object: _253.QueryGroupInfoResponseAminoMsg): _253.QueryGroupInfoResponse;
                toAminoMsg(message: _253.QueryGroupInfoResponse): _253.QueryGroupInfoResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupInfoResponseProtoMsg): _253.QueryGroupInfoResponse;
                toProto(message: _253.QueryGroupInfoResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupInfoResponse): _253.QueryGroupInfoResponseProtoMsg;
            };
            QueryGroupPolicyInfoRequest: {
                encode(message: _253.QueryGroupPolicyInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPolicyInfoRequest;
                fromJSON(object: any): _253.QueryGroupPolicyInfoRequest;
                toJSON(message: _253.QueryGroupPolicyInfoRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupPolicyInfoRequest>): _253.QueryGroupPolicyInfoRequest;
                fromAmino(object: _253.QueryGroupPolicyInfoRequestAmino): _253.QueryGroupPolicyInfoRequest;
                toAmino(message: _253.QueryGroupPolicyInfoRequest): _253.QueryGroupPolicyInfoRequestAmino;
                fromAminoMsg(object: _253.QueryGroupPolicyInfoRequestAminoMsg): _253.QueryGroupPolicyInfoRequest;
                toAminoMsg(message: _253.QueryGroupPolicyInfoRequest): _253.QueryGroupPolicyInfoRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPolicyInfoRequestProtoMsg): _253.QueryGroupPolicyInfoRequest;
                toProto(message: _253.QueryGroupPolicyInfoRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPolicyInfoRequest): _253.QueryGroupPolicyInfoRequestProtoMsg;
            };
            QueryGroupPolicyInfoResponse: {
                encode(message: _253.QueryGroupPolicyInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPolicyInfoResponse;
                fromJSON(object: any): _253.QueryGroupPolicyInfoResponse;
                toJSON(message: _253.QueryGroupPolicyInfoResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupPolicyInfoResponse>): _253.QueryGroupPolicyInfoResponse;
                fromAmino(object: _253.QueryGroupPolicyInfoResponseAmino): _253.QueryGroupPolicyInfoResponse;
                toAmino(message: _253.QueryGroupPolicyInfoResponse): _253.QueryGroupPolicyInfoResponseAmino;
                fromAminoMsg(object: _253.QueryGroupPolicyInfoResponseAminoMsg): _253.QueryGroupPolicyInfoResponse;
                toAminoMsg(message: _253.QueryGroupPolicyInfoResponse): _253.QueryGroupPolicyInfoResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPolicyInfoResponseProtoMsg): _253.QueryGroupPolicyInfoResponse;
                toProto(message: _253.QueryGroupPolicyInfoResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPolicyInfoResponse): _253.QueryGroupPolicyInfoResponseProtoMsg;
            };
            QueryGroupMembersRequest: {
                encode(message: _253.QueryGroupMembersRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupMembersRequest;
                fromJSON(object: any): _253.QueryGroupMembersRequest;
                toJSON(message: _253.QueryGroupMembersRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupMembersRequest>): _253.QueryGroupMembersRequest;
                fromAmino(object: _253.QueryGroupMembersRequestAmino): _253.QueryGroupMembersRequest;
                toAmino(message: _253.QueryGroupMembersRequest): _253.QueryGroupMembersRequestAmino;
                fromAminoMsg(object: _253.QueryGroupMembersRequestAminoMsg): _253.QueryGroupMembersRequest;
                toAminoMsg(message: _253.QueryGroupMembersRequest): _253.QueryGroupMembersRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupMembersRequestProtoMsg): _253.QueryGroupMembersRequest;
                toProto(message: _253.QueryGroupMembersRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupMembersRequest): _253.QueryGroupMembersRequestProtoMsg;
            };
            QueryGroupMembersResponse: {
                encode(message: _253.QueryGroupMembersResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupMembersResponse;
                fromJSON(object: any): _253.QueryGroupMembersResponse;
                toJSON(message: _253.QueryGroupMembersResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupMembersResponse>): _253.QueryGroupMembersResponse;
                fromAmino(object: _253.QueryGroupMembersResponseAmino): _253.QueryGroupMembersResponse;
                toAmino(message: _253.QueryGroupMembersResponse): _253.QueryGroupMembersResponseAmino;
                fromAminoMsg(object: _253.QueryGroupMembersResponseAminoMsg): _253.QueryGroupMembersResponse;
                toAminoMsg(message: _253.QueryGroupMembersResponse): _253.QueryGroupMembersResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupMembersResponseProtoMsg): _253.QueryGroupMembersResponse;
                toProto(message: _253.QueryGroupMembersResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupMembersResponse): _253.QueryGroupMembersResponseProtoMsg;
            };
            QueryGroupsByAdminRequest: {
                encode(message: _253.QueryGroupsByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupsByAdminRequest;
                fromJSON(object: any): _253.QueryGroupsByAdminRequest;
                toJSON(message: _253.QueryGroupsByAdminRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupsByAdminRequest>): _253.QueryGroupsByAdminRequest;
                fromAmino(object: _253.QueryGroupsByAdminRequestAmino): _253.QueryGroupsByAdminRequest;
                toAmino(message: _253.QueryGroupsByAdminRequest): _253.QueryGroupsByAdminRequestAmino;
                fromAminoMsg(object: _253.QueryGroupsByAdminRequestAminoMsg): _253.QueryGroupsByAdminRequest;
                toAminoMsg(message: _253.QueryGroupsByAdminRequest): _253.QueryGroupsByAdminRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupsByAdminRequestProtoMsg): _253.QueryGroupsByAdminRequest;
                toProto(message: _253.QueryGroupsByAdminRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupsByAdminRequest): _253.QueryGroupsByAdminRequestProtoMsg;
            };
            QueryGroupsByAdminResponse: {
                encode(message: _253.QueryGroupsByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupsByAdminResponse;
                fromJSON(object: any): _253.QueryGroupsByAdminResponse;
                toJSON(message: _253.QueryGroupsByAdminResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupsByAdminResponse>): _253.QueryGroupsByAdminResponse;
                fromAmino(object: _253.QueryGroupsByAdminResponseAmino): _253.QueryGroupsByAdminResponse;
                toAmino(message: _253.QueryGroupsByAdminResponse): _253.QueryGroupsByAdminResponseAmino;
                fromAminoMsg(object: _253.QueryGroupsByAdminResponseAminoMsg): _253.QueryGroupsByAdminResponse;
                toAminoMsg(message: _253.QueryGroupsByAdminResponse): _253.QueryGroupsByAdminResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupsByAdminResponseProtoMsg): _253.QueryGroupsByAdminResponse;
                toProto(message: _253.QueryGroupsByAdminResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupsByAdminResponse): _253.QueryGroupsByAdminResponseProtoMsg;
            };
            QueryGroupPoliciesByGroupRequest: {
                encode(message: _253.QueryGroupPoliciesByGroupRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPoliciesByGroupRequest;
                fromJSON(object: any): _253.QueryGroupPoliciesByGroupRequest;
                toJSON(message: _253.QueryGroupPoliciesByGroupRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupPoliciesByGroupRequest>): _253.QueryGroupPoliciesByGroupRequest;
                fromAmino(object: _253.QueryGroupPoliciesByGroupRequestAmino): _253.QueryGroupPoliciesByGroupRequest;
                toAmino(message: _253.QueryGroupPoliciesByGroupRequest): _253.QueryGroupPoliciesByGroupRequestAmino;
                fromAminoMsg(object: _253.QueryGroupPoliciesByGroupRequestAminoMsg): _253.QueryGroupPoliciesByGroupRequest;
                toAminoMsg(message: _253.QueryGroupPoliciesByGroupRequest): _253.QueryGroupPoliciesByGroupRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPoliciesByGroupRequestProtoMsg): _253.QueryGroupPoliciesByGroupRequest;
                toProto(message: _253.QueryGroupPoliciesByGroupRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPoliciesByGroupRequest): _253.QueryGroupPoliciesByGroupRequestProtoMsg;
            };
            QueryGroupPoliciesByGroupResponse: {
                encode(message: _253.QueryGroupPoliciesByGroupResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPoliciesByGroupResponse;
                fromJSON(object: any): _253.QueryGroupPoliciesByGroupResponse;
                toJSON(message: _253.QueryGroupPoliciesByGroupResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupPoliciesByGroupResponse>): _253.QueryGroupPoliciesByGroupResponse;
                fromAmino(object: _253.QueryGroupPoliciesByGroupResponseAmino): _253.QueryGroupPoliciesByGroupResponse;
                toAmino(message: _253.QueryGroupPoliciesByGroupResponse): _253.QueryGroupPoliciesByGroupResponseAmino;
                fromAminoMsg(object: _253.QueryGroupPoliciesByGroupResponseAminoMsg): _253.QueryGroupPoliciesByGroupResponse;
                toAminoMsg(message: _253.QueryGroupPoliciesByGroupResponse): _253.QueryGroupPoliciesByGroupResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPoliciesByGroupResponseProtoMsg): _253.QueryGroupPoliciesByGroupResponse;
                toProto(message: _253.QueryGroupPoliciesByGroupResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPoliciesByGroupResponse): _253.QueryGroupPoliciesByGroupResponseProtoMsg;
            };
            QueryGroupPoliciesByAdminRequest: {
                encode(message: _253.QueryGroupPoliciesByAdminRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPoliciesByAdminRequest;
                fromJSON(object: any): _253.QueryGroupPoliciesByAdminRequest;
                toJSON(message: _253.QueryGroupPoliciesByAdminRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupPoliciesByAdminRequest>): _253.QueryGroupPoliciesByAdminRequest;
                fromAmino(object: _253.QueryGroupPoliciesByAdminRequestAmino): _253.QueryGroupPoliciesByAdminRequest;
                toAmino(message: _253.QueryGroupPoliciesByAdminRequest): _253.QueryGroupPoliciesByAdminRequestAmino;
                fromAminoMsg(object: _253.QueryGroupPoliciesByAdminRequestAminoMsg): _253.QueryGroupPoliciesByAdminRequest;
                toAminoMsg(message: _253.QueryGroupPoliciesByAdminRequest): _253.QueryGroupPoliciesByAdminRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPoliciesByAdminRequestProtoMsg): _253.QueryGroupPoliciesByAdminRequest;
                toProto(message: _253.QueryGroupPoliciesByAdminRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPoliciesByAdminRequest): _253.QueryGroupPoliciesByAdminRequestProtoMsg;
            };
            QueryGroupPoliciesByAdminResponse: {
                encode(message: _253.QueryGroupPoliciesByAdminResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupPoliciesByAdminResponse;
                fromJSON(object: any): _253.QueryGroupPoliciesByAdminResponse;
                toJSON(message: _253.QueryGroupPoliciesByAdminResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupPoliciesByAdminResponse>): _253.QueryGroupPoliciesByAdminResponse;
                fromAmino(object: _253.QueryGroupPoliciesByAdminResponseAmino): _253.QueryGroupPoliciesByAdminResponse;
                toAmino(message: _253.QueryGroupPoliciesByAdminResponse): _253.QueryGroupPoliciesByAdminResponseAmino;
                fromAminoMsg(object: _253.QueryGroupPoliciesByAdminResponseAminoMsg): _253.QueryGroupPoliciesByAdminResponse;
                toAminoMsg(message: _253.QueryGroupPoliciesByAdminResponse): _253.QueryGroupPoliciesByAdminResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupPoliciesByAdminResponseProtoMsg): _253.QueryGroupPoliciesByAdminResponse;
                toProto(message: _253.QueryGroupPoliciesByAdminResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupPoliciesByAdminResponse): _253.QueryGroupPoliciesByAdminResponseProtoMsg;
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
            QueryProposalsByGroupPolicyRequest: {
                encode(message: _253.QueryProposalsByGroupPolicyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalsByGroupPolicyRequest;
                fromJSON(object: any): _253.QueryProposalsByGroupPolicyRequest;
                toJSON(message: _253.QueryProposalsByGroupPolicyRequest): unknown;
                fromPartial(object: Partial<_253.QueryProposalsByGroupPolicyRequest>): _253.QueryProposalsByGroupPolicyRequest;
                fromAmino(object: _253.QueryProposalsByGroupPolicyRequestAmino): _253.QueryProposalsByGroupPolicyRequest;
                toAmino(message: _253.QueryProposalsByGroupPolicyRequest): _253.QueryProposalsByGroupPolicyRequestAmino;
                fromAminoMsg(object: _253.QueryProposalsByGroupPolicyRequestAminoMsg): _253.QueryProposalsByGroupPolicyRequest;
                toAminoMsg(message: _253.QueryProposalsByGroupPolicyRequest): _253.QueryProposalsByGroupPolicyRequestAminoMsg;
                fromProtoMsg(message: _253.QueryProposalsByGroupPolicyRequestProtoMsg): _253.QueryProposalsByGroupPolicyRequest;
                toProto(message: _253.QueryProposalsByGroupPolicyRequest): Uint8Array;
                toProtoMsg(message: _253.QueryProposalsByGroupPolicyRequest): _253.QueryProposalsByGroupPolicyRequestProtoMsg;
            };
            QueryProposalsByGroupPolicyResponse: {
                encode(message: _253.QueryProposalsByGroupPolicyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryProposalsByGroupPolicyResponse;
                fromJSON(object: any): _253.QueryProposalsByGroupPolicyResponse;
                toJSON(message: _253.QueryProposalsByGroupPolicyResponse): unknown;
                fromPartial(object: Partial<_253.QueryProposalsByGroupPolicyResponse>): _253.QueryProposalsByGroupPolicyResponse;
                fromAmino(object: _253.QueryProposalsByGroupPolicyResponseAmino): _253.QueryProposalsByGroupPolicyResponse;
                toAmino(message: _253.QueryProposalsByGroupPolicyResponse): _253.QueryProposalsByGroupPolicyResponseAmino;
                fromAminoMsg(object: _253.QueryProposalsByGroupPolicyResponseAminoMsg): _253.QueryProposalsByGroupPolicyResponse;
                toAminoMsg(message: _253.QueryProposalsByGroupPolicyResponse): _253.QueryProposalsByGroupPolicyResponseAminoMsg;
                fromProtoMsg(message: _253.QueryProposalsByGroupPolicyResponseProtoMsg): _253.QueryProposalsByGroupPolicyResponse;
                toProto(message: _253.QueryProposalsByGroupPolicyResponse): Uint8Array;
                toProtoMsg(message: _253.QueryProposalsByGroupPolicyResponse): _253.QueryProposalsByGroupPolicyResponseProtoMsg;
            };
            QueryVoteByProposalVoterRequest: {
                encode(message: _253.QueryVoteByProposalVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVoteByProposalVoterRequest;
                fromJSON(object: any): _253.QueryVoteByProposalVoterRequest;
                toJSON(message: _253.QueryVoteByProposalVoterRequest): unknown;
                fromPartial(object: Partial<_253.QueryVoteByProposalVoterRequest>): _253.QueryVoteByProposalVoterRequest;
                fromAmino(object: _253.QueryVoteByProposalVoterRequestAmino): _253.QueryVoteByProposalVoterRequest;
                toAmino(message: _253.QueryVoteByProposalVoterRequest): _253.QueryVoteByProposalVoterRequestAmino;
                fromAminoMsg(object: _253.QueryVoteByProposalVoterRequestAminoMsg): _253.QueryVoteByProposalVoterRequest;
                toAminoMsg(message: _253.QueryVoteByProposalVoterRequest): _253.QueryVoteByProposalVoterRequestAminoMsg;
                fromProtoMsg(message: _253.QueryVoteByProposalVoterRequestProtoMsg): _253.QueryVoteByProposalVoterRequest;
                toProto(message: _253.QueryVoteByProposalVoterRequest): Uint8Array;
                toProtoMsg(message: _253.QueryVoteByProposalVoterRequest): _253.QueryVoteByProposalVoterRequestProtoMsg;
            };
            QueryVoteByProposalVoterResponse: {
                encode(message: _253.QueryVoteByProposalVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVoteByProposalVoterResponse;
                fromJSON(object: any): _253.QueryVoteByProposalVoterResponse;
                toJSON(message: _253.QueryVoteByProposalVoterResponse): unknown;
                fromPartial(object: Partial<_253.QueryVoteByProposalVoterResponse>): _253.QueryVoteByProposalVoterResponse;
                fromAmino(object: _253.QueryVoteByProposalVoterResponseAmino): _253.QueryVoteByProposalVoterResponse;
                toAmino(message: _253.QueryVoteByProposalVoterResponse): _253.QueryVoteByProposalVoterResponseAmino;
                fromAminoMsg(object: _253.QueryVoteByProposalVoterResponseAminoMsg): _253.QueryVoteByProposalVoterResponse;
                toAminoMsg(message: _253.QueryVoteByProposalVoterResponse): _253.QueryVoteByProposalVoterResponseAminoMsg;
                fromProtoMsg(message: _253.QueryVoteByProposalVoterResponseProtoMsg): _253.QueryVoteByProposalVoterResponse;
                toProto(message: _253.QueryVoteByProposalVoterResponse): Uint8Array;
                toProtoMsg(message: _253.QueryVoteByProposalVoterResponse): _253.QueryVoteByProposalVoterResponseProtoMsg;
            };
            QueryVotesByProposalRequest: {
                encode(message: _253.QueryVotesByProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesByProposalRequest;
                fromJSON(object: any): _253.QueryVotesByProposalRequest;
                toJSON(message: _253.QueryVotesByProposalRequest): unknown;
                fromPartial(object: Partial<_253.QueryVotesByProposalRequest>): _253.QueryVotesByProposalRequest;
                fromAmino(object: _253.QueryVotesByProposalRequestAmino): _253.QueryVotesByProposalRequest;
                toAmino(message: _253.QueryVotesByProposalRequest): _253.QueryVotesByProposalRequestAmino;
                fromAminoMsg(object: _253.QueryVotesByProposalRequestAminoMsg): _253.QueryVotesByProposalRequest;
                toAminoMsg(message: _253.QueryVotesByProposalRequest): _253.QueryVotesByProposalRequestAminoMsg;
                fromProtoMsg(message: _253.QueryVotesByProposalRequestProtoMsg): _253.QueryVotesByProposalRequest;
                toProto(message: _253.QueryVotesByProposalRequest): Uint8Array;
                toProtoMsg(message: _253.QueryVotesByProposalRequest): _253.QueryVotesByProposalRequestProtoMsg;
            };
            QueryVotesByProposalResponse: {
                encode(message: _253.QueryVotesByProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesByProposalResponse;
                fromJSON(object: any): _253.QueryVotesByProposalResponse;
                toJSON(message: _253.QueryVotesByProposalResponse): unknown;
                fromPartial(object: Partial<_253.QueryVotesByProposalResponse>): _253.QueryVotesByProposalResponse;
                fromAmino(object: _253.QueryVotesByProposalResponseAmino): _253.QueryVotesByProposalResponse;
                toAmino(message: _253.QueryVotesByProposalResponse): _253.QueryVotesByProposalResponseAmino;
                fromAminoMsg(object: _253.QueryVotesByProposalResponseAminoMsg): _253.QueryVotesByProposalResponse;
                toAminoMsg(message: _253.QueryVotesByProposalResponse): _253.QueryVotesByProposalResponseAminoMsg;
                fromProtoMsg(message: _253.QueryVotesByProposalResponseProtoMsg): _253.QueryVotesByProposalResponse;
                toProto(message: _253.QueryVotesByProposalResponse): Uint8Array;
                toProtoMsg(message: _253.QueryVotesByProposalResponse): _253.QueryVotesByProposalResponseProtoMsg;
            };
            QueryVotesByVoterRequest: {
                encode(message: _253.QueryVotesByVoterRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesByVoterRequest;
                fromJSON(object: any): _253.QueryVotesByVoterRequest;
                toJSON(message: _253.QueryVotesByVoterRequest): unknown;
                fromPartial(object: Partial<_253.QueryVotesByVoterRequest>): _253.QueryVotesByVoterRequest;
                fromAmino(object: _253.QueryVotesByVoterRequestAmino): _253.QueryVotesByVoterRequest;
                toAmino(message: _253.QueryVotesByVoterRequest): _253.QueryVotesByVoterRequestAmino;
                fromAminoMsg(object: _253.QueryVotesByVoterRequestAminoMsg): _253.QueryVotesByVoterRequest;
                toAminoMsg(message: _253.QueryVotesByVoterRequest): _253.QueryVotesByVoterRequestAminoMsg;
                fromProtoMsg(message: _253.QueryVotesByVoterRequestProtoMsg): _253.QueryVotesByVoterRequest;
                toProto(message: _253.QueryVotesByVoterRequest): Uint8Array;
                toProtoMsg(message: _253.QueryVotesByVoterRequest): _253.QueryVotesByVoterRequestProtoMsg;
            };
            QueryVotesByVoterResponse: {
                encode(message: _253.QueryVotesByVoterResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryVotesByVoterResponse;
                fromJSON(object: any): _253.QueryVotesByVoterResponse;
                toJSON(message: _253.QueryVotesByVoterResponse): unknown;
                fromPartial(object: Partial<_253.QueryVotesByVoterResponse>): _253.QueryVotesByVoterResponse;
                fromAmino(object: _253.QueryVotesByVoterResponseAmino): _253.QueryVotesByVoterResponse;
                toAmino(message: _253.QueryVotesByVoterResponse): _253.QueryVotesByVoterResponseAmino;
                fromAminoMsg(object: _253.QueryVotesByVoterResponseAminoMsg): _253.QueryVotesByVoterResponse;
                toAminoMsg(message: _253.QueryVotesByVoterResponse): _253.QueryVotesByVoterResponseAminoMsg;
                fromProtoMsg(message: _253.QueryVotesByVoterResponseProtoMsg): _253.QueryVotesByVoterResponse;
                toProto(message: _253.QueryVotesByVoterResponse): Uint8Array;
                toProtoMsg(message: _253.QueryVotesByVoterResponse): _253.QueryVotesByVoterResponseProtoMsg;
            };
            QueryGroupsByMemberRequest: {
                encode(message: _253.QueryGroupsByMemberRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupsByMemberRequest;
                fromJSON(object: any): _253.QueryGroupsByMemberRequest;
                toJSON(message: _253.QueryGroupsByMemberRequest): unknown;
                fromPartial(object: Partial<_253.QueryGroupsByMemberRequest>): _253.QueryGroupsByMemberRequest;
                fromAmino(object: _253.QueryGroupsByMemberRequestAmino): _253.QueryGroupsByMemberRequest;
                toAmino(message: _253.QueryGroupsByMemberRequest): _253.QueryGroupsByMemberRequestAmino;
                fromAminoMsg(object: _253.QueryGroupsByMemberRequestAminoMsg): _253.QueryGroupsByMemberRequest;
                toAminoMsg(message: _253.QueryGroupsByMemberRequest): _253.QueryGroupsByMemberRequestAminoMsg;
                fromProtoMsg(message: _253.QueryGroupsByMemberRequestProtoMsg): _253.QueryGroupsByMemberRequest;
                toProto(message: _253.QueryGroupsByMemberRequest): Uint8Array;
                toProtoMsg(message: _253.QueryGroupsByMemberRequest): _253.QueryGroupsByMemberRequestProtoMsg;
            };
            QueryGroupsByMemberResponse: {
                encode(message: _253.QueryGroupsByMemberResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _253.QueryGroupsByMemberResponse;
                fromJSON(object: any): _253.QueryGroupsByMemberResponse;
                toJSON(message: _253.QueryGroupsByMemberResponse): unknown;
                fromPartial(object: Partial<_253.QueryGroupsByMemberResponse>): _253.QueryGroupsByMemberResponse;
                fromAmino(object: _253.QueryGroupsByMemberResponseAmino): _253.QueryGroupsByMemberResponse;
                toAmino(message: _253.QueryGroupsByMemberResponse): _253.QueryGroupsByMemberResponseAmino;
                fromAminoMsg(object: _253.QueryGroupsByMemberResponseAminoMsg): _253.QueryGroupsByMemberResponse;
                toAminoMsg(message: _253.QueryGroupsByMemberResponse): _253.QueryGroupsByMemberResponseAminoMsg;
                fromProtoMsg(message: _253.QueryGroupsByMemberResponseProtoMsg): _253.QueryGroupsByMemberResponse;
                toProto(message: _253.QueryGroupsByMemberResponse): Uint8Array;
                toProtoMsg(message: _253.QueryGroupsByMemberResponse): _253.QueryGroupsByMemberResponseProtoMsg;
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
            EventCreateGroup: {
                encode(message: _251.EventCreateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventCreateGroup;
                fromJSON(object: any): _251.EventCreateGroup;
                toJSON(message: _251.EventCreateGroup): unknown;
                fromPartial(object: Partial<_251.EventCreateGroup>): _251.EventCreateGroup;
                fromAmino(object: _251.EventCreateGroupAmino): _251.EventCreateGroup;
                toAmino(message: _251.EventCreateGroup): _251.EventCreateGroupAmino;
                fromAminoMsg(object: _251.EventCreateGroupAminoMsg): _251.EventCreateGroup;
                toAminoMsg(message: _251.EventCreateGroup): _251.EventCreateGroupAminoMsg;
                fromProtoMsg(message: _251.EventCreateGroupProtoMsg): _251.EventCreateGroup;
                toProto(message: _251.EventCreateGroup): Uint8Array;
                toProtoMsg(message: _251.EventCreateGroup): _251.EventCreateGroupProtoMsg;
            };
            EventUpdateGroup: {
                encode(message: _251.EventUpdateGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventUpdateGroup;
                fromJSON(object: any): _251.EventUpdateGroup;
                toJSON(message: _251.EventUpdateGroup): unknown;
                fromPartial(object: Partial<_251.EventUpdateGroup>): _251.EventUpdateGroup;
                fromAmino(object: _251.EventUpdateGroupAmino): _251.EventUpdateGroup;
                toAmino(message: _251.EventUpdateGroup): _251.EventUpdateGroupAmino;
                fromAminoMsg(object: _251.EventUpdateGroupAminoMsg): _251.EventUpdateGroup;
                toAminoMsg(message: _251.EventUpdateGroup): _251.EventUpdateGroupAminoMsg;
                fromProtoMsg(message: _251.EventUpdateGroupProtoMsg): _251.EventUpdateGroup;
                toProto(message: _251.EventUpdateGroup): Uint8Array;
                toProtoMsg(message: _251.EventUpdateGroup): _251.EventUpdateGroupProtoMsg;
            };
            EventCreateGroupPolicy: {
                encode(message: _251.EventCreateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventCreateGroupPolicy;
                fromJSON(object: any): _251.EventCreateGroupPolicy;
                toJSON(message: _251.EventCreateGroupPolicy): unknown;
                fromPartial(object: Partial<_251.EventCreateGroupPolicy>): _251.EventCreateGroupPolicy;
                fromAmino(object: _251.EventCreateGroupPolicyAmino): _251.EventCreateGroupPolicy;
                toAmino(message: _251.EventCreateGroupPolicy): _251.EventCreateGroupPolicyAmino;
                fromAminoMsg(object: _251.EventCreateGroupPolicyAminoMsg): _251.EventCreateGroupPolicy;
                toAminoMsg(message: _251.EventCreateGroupPolicy): _251.EventCreateGroupPolicyAminoMsg;
                fromProtoMsg(message: _251.EventCreateGroupPolicyProtoMsg): _251.EventCreateGroupPolicy;
                toProto(message: _251.EventCreateGroupPolicy): Uint8Array;
                toProtoMsg(message: _251.EventCreateGroupPolicy): _251.EventCreateGroupPolicyProtoMsg;
            };
            EventUpdateGroupPolicy: {
                encode(message: _251.EventUpdateGroupPolicy, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventUpdateGroupPolicy;
                fromJSON(object: any): _251.EventUpdateGroupPolicy;
                toJSON(message: _251.EventUpdateGroupPolicy): unknown;
                fromPartial(object: Partial<_251.EventUpdateGroupPolicy>): _251.EventUpdateGroupPolicy;
                fromAmino(object: _251.EventUpdateGroupPolicyAmino): _251.EventUpdateGroupPolicy;
                toAmino(message: _251.EventUpdateGroupPolicy): _251.EventUpdateGroupPolicyAmino;
                fromAminoMsg(object: _251.EventUpdateGroupPolicyAminoMsg): _251.EventUpdateGroupPolicy;
                toAminoMsg(message: _251.EventUpdateGroupPolicy): _251.EventUpdateGroupPolicyAminoMsg;
                fromProtoMsg(message: _251.EventUpdateGroupPolicyProtoMsg): _251.EventUpdateGroupPolicy;
                toProto(message: _251.EventUpdateGroupPolicy): Uint8Array;
                toProtoMsg(message: _251.EventUpdateGroupPolicy): _251.EventUpdateGroupPolicyProtoMsg;
            };
            EventSubmitProposal: {
                encode(message: _251.EventSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventSubmitProposal;
                fromJSON(object: any): _251.EventSubmitProposal;
                toJSON(message: _251.EventSubmitProposal): unknown;
                fromPartial(object: Partial<_251.EventSubmitProposal>): _251.EventSubmitProposal;
                fromAmino(object: _251.EventSubmitProposalAmino): _251.EventSubmitProposal;
                toAmino(message: _251.EventSubmitProposal): _251.EventSubmitProposalAmino;
                fromAminoMsg(object: _251.EventSubmitProposalAminoMsg): _251.EventSubmitProposal;
                toAminoMsg(message: _251.EventSubmitProposal): _251.EventSubmitProposalAminoMsg;
                fromProtoMsg(message: _251.EventSubmitProposalProtoMsg): _251.EventSubmitProposal;
                toProto(message: _251.EventSubmitProposal): Uint8Array;
                toProtoMsg(message: _251.EventSubmitProposal): _251.EventSubmitProposalProtoMsg;
            };
            EventWithdrawProposal: {
                encode(message: _251.EventWithdrawProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventWithdrawProposal;
                fromJSON(object: any): _251.EventWithdrawProposal;
                toJSON(message: _251.EventWithdrawProposal): unknown;
                fromPartial(object: Partial<_251.EventWithdrawProposal>): _251.EventWithdrawProposal;
                fromAmino(object: _251.EventWithdrawProposalAmino): _251.EventWithdrawProposal;
                toAmino(message: _251.EventWithdrawProposal): _251.EventWithdrawProposalAmino;
                fromAminoMsg(object: _251.EventWithdrawProposalAminoMsg): _251.EventWithdrawProposal;
                toAminoMsg(message: _251.EventWithdrawProposal): _251.EventWithdrawProposalAminoMsg;
                fromProtoMsg(message: _251.EventWithdrawProposalProtoMsg): _251.EventWithdrawProposal;
                toProto(message: _251.EventWithdrawProposal): Uint8Array;
                toProtoMsg(message: _251.EventWithdrawProposal): _251.EventWithdrawProposalProtoMsg;
            };
            EventVote: {
                encode(message: _251.EventVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventVote;
                fromJSON(object: any): _251.EventVote;
                toJSON(message: _251.EventVote): unknown;
                fromPartial(object: Partial<_251.EventVote>): _251.EventVote;
                fromAmino(object: _251.EventVoteAmino): _251.EventVote;
                toAmino(message: _251.EventVote): _251.EventVoteAmino;
                fromAminoMsg(object: _251.EventVoteAminoMsg): _251.EventVote;
                toAminoMsg(message: _251.EventVote): _251.EventVoteAminoMsg;
                fromProtoMsg(message: _251.EventVoteProtoMsg): _251.EventVote;
                toProto(message: _251.EventVote): Uint8Array;
                toProtoMsg(message: _251.EventVote): _251.EventVoteProtoMsg;
            };
            EventExec: {
                encode(message: _251.EventExec, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventExec;
                fromJSON(object: any): _251.EventExec;
                toJSON(message: _251.EventExec): unknown;
                fromPartial(object: Partial<_251.EventExec>): _251.EventExec;
                fromAmino(object: _251.EventExecAmino): _251.EventExec;
                toAmino(message: _251.EventExec): _251.EventExecAmino;
                fromAminoMsg(object: _251.EventExecAminoMsg): _251.EventExec;
                toAminoMsg(message: _251.EventExec): _251.EventExecAminoMsg;
                fromProtoMsg(message: _251.EventExecProtoMsg): _251.EventExec;
                toProto(message: _251.EventExec): Uint8Array;
                toProtoMsg(message: _251.EventExec): _251.EventExecProtoMsg;
            };
            EventLeaveGroup: {
                encode(message: _251.EventLeaveGroup, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _251.EventLeaveGroup;
                fromJSON(object: any): _251.EventLeaveGroup;
                toJSON(message: _251.EventLeaveGroup): unknown;
                fromPartial(object: Partial<_251.EventLeaveGroup>): _251.EventLeaveGroup;
                fromAmino(object: _251.EventLeaveGroupAmino): _251.EventLeaveGroup;
                toAmino(message: _251.EventLeaveGroup): _251.EventLeaveGroupAmino;
                fromAminoMsg(object: _251.EventLeaveGroupAminoMsg): _251.EventLeaveGroup;
                toAminoMsg(message: _251.EventLeaveGroup): _251.EventLeaveGroupAminoMsg;
                fromProtoMsg(message: _251.EventLeaveGroupProtoMsg): _251.EventLeaveGroup;
                toProto(message: _251.EventLeaveGroup): Uint8Array;
                toProtoMsg(message: _251.EventLeaveGroup): _251.EventLeaveGroupProtoMsg;
            };
        };
    }
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _443.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _258.QueryParamsRequest): Promise<_258.QueryParamsResponse>;
                inflation(request?: _258.QueryInflationRequest): Promise<_258.QueryInflationResponse>;
                annualProvisions(request?: _258.QueryAnnualProvisionsRequest): Promise<_258.QueryAnnualProvisionsResponse>;
            };
            QueryParamsRequest: {
                encode(_: _258.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryParamsRequest;
                fromJSON(_: any): _258.QueryParamsRequest;
                toJSON(_: _258.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_258.QueryParamsRequest>): _258.QueryParamsRequest;
                fromAmino(_: _258.QueryParamsRequestAmino): _258.QueryParamsRequest;
                toAmino(_: _258.QueryParamsRequest): _258.QueryParamsRequestAmino;
                fromAminoMsg(object: _258.QueryParamsRequestAminoMsg): _258.QueryParamsRequest;
                toAminoMsg(message: _258.QueryParamsRequest): _258.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _258.QueryParamsRequestProtoMsg): _258.QueryParamsRequest;
                toProto(message: _258.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _258.QueryParamsRequest): _258.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _258.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryParamsResponse;
                fromJSON(object: any): _258.QueryParamsResponse;
                toJSON(message: _258.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_258.QueryParamsResponse>): _258.QueryParamsResponse;
                fromAmino(object: _258.QueryParamsResponseAmino): _258.QueryParamsResponse;
                toAmino(message: _258.QueryParamsResponse): _258.QueryParamsResponseAmino;
                fromAminoMsg(object: _258.QueryParamsResponseAminoMsg): _258.QueryParamsResponse;
                toAminoMsg(message: _258.QueryParamsResponse): _258.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _258.QueryParamsResponseProtoMsg): _258.QueryParamsResponse;
                toProto(message: _258.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _258.QueryParamsResponse): _258.QueryParamsResponseProtoMsg;
            };
            QueryInflationRequest: {
                encode(_: _258.QueryInflationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryInflationRequest;
                fromJSON(_: any): _258.QueryInflationRequest;
                toJSON(_: _258.QueryInflationRequest): unknown;
                fromPartial(_: Partial<_258.QueryInflationRequest>): _258.QueryInflationRequest;
                fromAmino(_: _258.QueryInflationRequestAmino): _258.QueryInflationRequest;
                toAmino(_: _258.QueryInflationRequest): _258.QueryInflationRequestAmino;
                fromAminoMsg(object: _258.QueryInflationRequestAminoMsg): _258.QueryInflationRequest;
                toAminoMsg(message: _258.QueryInflationRequest): _258.QueryInflationRequestAminoMsg;
                fromProtoMsg(message: _258.QueryInflationRequestProtoMsg): _258.QueryInflationRequest;
                toProto(message: _258.QueryInflationRequest): Uint8Array;
                toProtoMsg(message: _258.QueryInflationRequest): _258.QueryInflationRequestProtoMsg;
            };
            QueryInflationResponse: {
                encode(message: _258.QueryInflationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryInflationResponse;
                fromJSON(object: any): _258.QueryInflationResponse;
                toJSON(message: _258.QueryInflationResponse): unknown;
                fromPartial(object: Partial<_258.QueryInflationResponse>): _258.QueryInflationResponse;
                fromAmino(object: _258.QueryInflationResponseAmino): _258.QueryInflationResponse;
                toAmino(message: _258.QueryInflationResponse): _258.QueryInflationResponseAmino;
                fromAminoMsg(object: _258.QueryInflationResponseAminoMsg): _258.QueryInflationResponse;
                toAminoMsg(message: _258.QueryInflationResponse): _258.QueryInflationResponseAminoMsg;
                fromProtoMsg(message: _258.QueryInflationResponseProtoMsg): _258.QueryInflationResponse;
                toProto(message: _258.QueryInflationResponse): Uint8Array;
                toProtoMsg(message: _258.QueryInflationResponse): _258.QueryInflationResponseProtoMsg;
            };
            QueryAnnualProvisionsRequest: {
                encode(_: _258.QueryAnnualProvisionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryAnnualProvisionsRequest;
                fromJSON(_: any): _258.QueryAnnualProvisionsRequest;
                toJSON(_: _258.QueryAnnualProvisionsRequest): unknown;
                fromPartial(_: Partial<_258.QueryAnnualProvisionsRequest>): _258.QueryAnnualProvisionsRequest;
                fromAmino(_: _258.QueryAnnualProvisionsRequestAmino): _258.QueryAnnualProvisionsRequest;
                toAmino(_: _258.QueryAnnualProvisionsRequest): _258.QueryAnnualProvisionsRequestAmino;
                fromAminoMsg(object: _258.QueryAnnualProvisionsRequestAminoMsg): _258.QueryAnnualProvisionsRequest;
                toAminoMsg(message: _258.QueryAnnualProvisionsRequest): _258.QueryAnnualProvisionsRequestAminoMsg;
                fromProtoMsg(message: _258.QueryAnnualProvisionsRequestProtoMsg): _258.QueryAnnualProvisionsRequest;
                toProto(message: _258.QueryAnnualProvisionsRequest): Uint8Array;
                toProtoMsg(message: _258.QueryAnnualProvisionsRequest): _258.QueryAnnualProvisionsRequestProtoMsg;
            };
            QueryAnnualProvisionsResponse: {
                encode(message: _258.QueryAnnualProvisionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _258.QueryAnnualProvisionsResponse;
                fromJSON(object: any): _258.QueryAnnualProvisionsResponse;
                toJSON(message: _258.QueryAnnualProvisionsResponse): unknown;
                fromPartial(object: Partial<_258.QueryAnnualProvisionsResponse>): _258.QueryAnnualProvisionsResponse;
                fromAmino(object: _258.QueryAnnualProvisionsResponseAmino): _258.QueryAnnualProvisionsResponse;
                toAmino(message: _258.QueryAnnualProvisionsResponse): _258.QueryAnnualProvisionsResponseAmino;
                fromAminoMsg(object: _258.QueryAnnualProvisionsResponseAminoMsg): _258.QueryAnnualProvisionsResponse;
                toAminoMsg(message: _258.QueryAnnualProvisionsResponse): _258.QueryAnnualProvisionsResponseAminoMsg;
                fromProtoMsg(message: _258.QueryAnnualProvisionsResponseProtoMsg): _258.QueryAnnualProvisionsResponse;
                toProto(message: _258.QueryAnnualProvisionsResponse): Uint8Array;
                toProtoMsg(message: _258.QueryAnnualProvisionsResponse): _258.QueryAnnualProvisionsResponseProtoMsg;
            };
            Minter: {
                encode(message: _257.Minter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.Minter;
                fromJSON(object: any): _257.Minter;
                toJSON(message: _257.Minter): unknown;
                fromPartial(object: Partial<_257.Minter>): _257.Minter;
                fromAmino(object: _257.MinterAmino): _257.Minter;
                toAmino(message: _257.Minter): _257.MinterAmino;
                fromAminoMsg(object: _257.MinterAminoMsg): _257.Minter;
                toAminoMsg(message: _257.Minter): _257.MinterAminoMsg;
                fromProtoMsg(message: _257.MinterProtoMsg): _257.Minter;
                toProto(message: _257.Minter): Uint8Array;
                toProtoMsg(message: _257.Minter): _257.MinterProtoMsg;
            };
            Params: {
                encode(message: _257.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _257.Params;
                fromJSON(object: any): _257.Params;
                toJSON(message: _257.Params): unknown;
                fromPartial(object: Partial<_257.Params>): _257.Params;
                fromAmino(object: _257.ParamsAmino): _257.Params;
                toAmino(message: _257.Params): _257.ParamsAmino;
                fromAminoMsg(object: _257.ParamsAminoMsg): _257.Params;
                toAminoMsg(message: _257.Params): _257.ParamsAminoMsg;
                fromProtoMsg(message: _257.ParamsProtoMsg): _257.Params;
                toProto(message: _257.Params): Uint8Array;
                toProtoMsg(message: _257.Params): _257.ParamsProtoMsg;
            };
            GenesisState: {
                encode(message: _256.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _256.GenesisState;
                fromJSON(object: any): _256.GenesisState;
                toJSON(message: _256.GenesisState): unknown;
                fromPartial(object: Partial<_256.GenesisState>): _256.GenesisState;
                fromAmino(object: _256.GenesisStateAmino): _256.GenesisState;
                toAmino(message: _256.GenesisState): _256.GenesisStateAmino;
                fromAminoMsg(object: _256.GenesisStateAminoMsg): _256.GenesisState;
                toAminoMsg(message: _256.GenesisState): _256.GenesisStateAminoMsg;
                fromProtoMsg(message: _256.GenesisStateProtoMsg): _256.GenesisState;
                toProto(message: _256.GenesisState): Uint8Array;
                toProtoMsg(message: _256.GenesisState): _256.GenesisStateProtoMsg;
            };
        };
    }
    namespace msg {
        const v1: {};
    }
    namespace nft {
        const v1beta1: {
            MsgClientImpl: typeof _459.MsgClientImpl;
            QueryClientImpl: typeof _444.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                balance(request: _263.QueryBalanceRequest): Promise<_263.QueryBalanceResponse>;
                owner(request: _263.QueryOwnerRequest): Promise<_263.QueryOwnerResponse>;
                supply(request: _263.QuerySupplyRequest): Promise<_263.QuerySupplyResponse>;
                nFTs(request: _263.QueryNFTsRequest): Promise<_263.QueryNFTsResponse>;
                nFT(request: _263.QueryNFTRequest): Promise<_263.QueryNFTResponse>;
                class(request: _263.QueryClassRequest): Promise<_263.QueryClassResponse>;
                classes(request?: _263.QueryClassesRequest): Promise<_263.QueryClassesResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    send(value: _264.MsgSend): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    send(value: _264.MsgSend): {
                        typeUrl: string;
                        value: _264.MsgSend;
                    };
                };
                toJSON: {
                    send(value: _264.MsgSend): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    send(value: any): {
                        typeUrl: string;
                        value: _264.MsgSend;
                    };
                };
                fromPartial: {
                    send(value: _264.MsgSend): {
                        typeUrl: string;
                        value: _264.MsgSend;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.nft.v1beta1.MsgSend": {
                    aminoType: string;
                    toAmino: (message: _264.MsgSend) => _264.MsgSendAmino;
                    fromAmino: (object: _264.MsgSendAmino) => _264.MsgSend;
                };
            };
            MsgSend: {
                encode(message: _264.MsgSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.MsgSend;
                fromJSON(object: any): _264.MsgSend;
                toJSON(message: _264.MsgSend): unknown;
                fromPartial(object: Partial<_264.MsgSend>): _264.MsgSend;
                fromAmino(object: _264.MsgSendAmino): _264.MsgSend;
                toAmino(message: _264.MsgSend): _264.MsgSendAmino;
                fromAminoMsg(object: _264.MsgSendAminoMsg): _264.MsgSend;
                toAminoMsg(message: _264.MsgSend): _264.MsgSendAminoMsg;
                fromProtoMsg(message: _264.MsgSendProtoMsg): _264.MsgSend;
                toProto(message: _264.MsgSend): Uint8Array;
                toProtoMsg(message: _264.MsgSend): _264.MsgSendProtoMsg;
            };
            MsgSendResponse: {
                encode(_: _264.MsgSendResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _264.MsgSendResponse;
                fromJSON(_: any): _264.MsgSendResponse;
                toJSON(_: _264.MsgSendResponse): unknown;
                fromPartial(_: Partial<_264.MsgSendResponse>): _264.MsgSendResponse;
                fromAmino(_: _264.MsgSendResponseAmino): _264.MsgSendResponse;
                toAmino(_: _264.MsgSendResponse): _264.MsgSendResponseAmino;
                fromAminoMsg(object: _264.MsgSendResponseAminoMsg): _264.MsgSendResponse;
                toAminoMsg(message: _264.MsgSendResponse): _264.MsgSendResponseAminoMsg;
                fromProtoMsg(message: _264.MsgSendResponseProtoMsg): _264.MsgSendResponse;
                toProto(message: _264.MsgSendResponse): Uint8Array;
                toProtoMsg(message: _264.MsgSendResponse): _264.MsgSendResponseProtoMsg;
            };
            QueryBalanceRequest: {
                encode(message: _263.QueryBalanceRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryBalanceRequest;
                fromJSON(object: any): _263.QueryBalanceRequest;
                toJSON(message: _263.QueryBalanceRequest): unknown;
                fromPartial(object: Partial<_263.QueryBalanceRequest>): _263.QueryBalanceRequest;
                fromAmino(object: _263.QueryBalanceRequestAmino): _263.QueryBalanceRequest;
                toAmino(message: _263.QueryBalanceRequest): _263.QueryBalanceRequestAmino;
                fromAminoMsg(object: _263.QueryBalanceRequestAminoMsg): _263.QueryBalanceRequest;
                toAminoMsg(message: _263.QueryBalanceRequest): _263.QueryBalanceRequestAminoMsg;
                fromProtoMsg(message: _263.QueryBalanceRequestProtoMsg): _263.QueryBalanceRequest;
                toProto(message: _263.QueryBalanceRequest): Uint8Array;
                toProtoMsg(message: _263.QueryBalanceRequest): _263.QueryBalanceRequestProtoMsg;
            };
            QueryBalanceResponse: {
                encode(message: _263.QueryBalanceResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryBalanceResponse;
                fromJSON(object: any): _263.QueryBalanceResponse;
                toJSON(message: _263.QueryBalanceResponse): unknown;
                fromPartial(object: Partial<_263.QueryBalanceResponse>): _263.QueryBalanceResponse;
                fromAmino(object: _263.QueryBalanceResponseAmino): _263.QueryBalanceResponse;
                toAmino(message: _263.QueryBalanceResponse): _263.QueryBalanceResponseAmino;
                fromAminoMsg(object: _263.QueryBalanceResponseAminoMsg): _263.QueryBalanceResponse;
                toAminoMsg(message: _263.QueryBalanceResponse): _263.QueryBalanceResponseAminoMsg;
                fromProtoMsg(message: _263.QueryBalanceResponseProtoMsg): _263.QueryBalanceResponse;
                toProto(message: _263.QueryBalanceResponse): Uint8Array;
                toProtoMsg(message: _263.QueryBalanceResponse): _263.QueryBalanceResponseProtoMsg;
            };
            QueryOwnerRequest: {
                encode(message: _263.QueryOwnerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryOwnerRequest;
                fromJSON(object: any): _263.QueryOwnerRequest;
                toJSON(message: _263.QueryOwnerRequest): unknown;
                fromPartial(object: Partial<_263.QueryOwnerRequest>): _263.QueryOwnerRequest;
                fromAmino(object: _263.QueryOwnerRequestAmino): _263.QueryOwnerRequest;
                toAmino(message: _263.QueryOwnerRequest): _263.QueryOwnerRequestAmino;
                fromAminoMsg(object: _263.QueryOwnerRequestAminoMsg): _263.QueryOwnerRequest;
                toAminoMsg(message: _263.QueryOwnerRequest): _263.QueryOwnerRequestAminoMsg;
                fromProtoMsg(message: _263.QueryOwnerRequestProtoMsg): _263.QueryOwnerRequest;
                toProto(message: _263.QueryOwnerRequest): Uint8Array;
                toProtoMsg(message: _263.QueryOwnerRequest): _263.QueryOwnerRequestProtoMsg;
            };
            QueryOwnerResponse: {
                encode(message: _263.QueryOwnerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryOwnerResponse;
                fromJSON(object: any): _263.QueryOwnerResponse;
                toJSON(message: _263.QueryOwnerResponse): unknown;
                fromPartial(object: Partial<_263.QueryOwnerResponse>): _263.QueryOwnerResponse;
                fromAmino(object: _263.QueryOwnerResponseAmino): _263.QueryOwnerResponse;
                toAmino(message: _263.QueryOwnerResponse): _263.QueryOwnerResponseAmino;
                fromAminoMsg(object: _263.QueryOwnerResponseAminoMsg): _263.QueryOwnerResponse;
                toAminoMsg(message: _263.QueryOwnerResponse): _263.QueryOwnerResponseAminoMsg;
                fromProtoMsg(message: _263.QueryOwnerResponseProtoMsg): _263.QueryOwnerResponse;
                toProto(message: _263.QueryOwnerResponse): Uint8Array;
                toProtoMsg(message: _263.QueryOwnerResponse): _263.QueryOwnerResponseProtoMsg;
            };
            QuerySupplyRequest: {
                encode(message: _263.QuerySupplyRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QuerySupplyRequest;
                fromJSON(object: any): _263.QuerySupplyRequest;
                toJSON(message: _263.QuerySupplyRequest): unknown;
                fromPartial(object: Partial<_263.QuerySupplyRequest>): _263.QuerySupplyRequest;
                fromAmino(object: _263.QuerySupplyRequestAmino): _263.QuerySupplyRequest;
                toAmino(message: _263.QuerySupplyRequest): _263.QuerySupplyRequestAmino;
                fromAminoMsg(object: _263.QuerySupplyRequestAminoMsg): _263.QuerySupplyRequest;
                toAminoMsg(message: _263.QuerySupplyRequest): _263.QuerySupplyRequestAminoMsg;
                fromProtoMsg(message: _263.QuerySupplyRequestProtoMsg): _263.QuerySupplyRequest;
                toProto(message: _263.QuerySupplyRequest): Uint8Array;
                toProtoMsg(message: _263.QuerySupplyRequest): _263.QuerySupplyRequestProtoMsg;
            };
            QuerySupplyResponse: {
                encode(message: _263.QuerySupplyResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QuerySupplyResponse;
                fromJSON(object: any): _263.QuerySupplyResponse;
                toJSON(message: _263.QuerySupplyResponse): unknown;
                fromPartial(object: Partial<_263.QuerySupplyResponse>): _263.QuerySupplyResponse;
                fromAmino(object: _263.QuerySupplyResponseAmino): _263.QuerySupplyResponse;
                toAmino(message: _263.QuerySupplyResponse): _263.QuerySupplyResponseAmino;
                fromAminoMsg(object: _263.QuerySupplyResponseAminoMsg): _263.QuerySupplyResponse;
                toAminoMsg(message: _263.QuerySupplyResponse): _263.QuerySupplyResponseAminoMsg;
                fromProtoMsg(message: _263.QuerySupplyResponseProtoMsg): _263.QuerySupplyResponse;
                toProto(message: _263.QuerySupplyResponse): Uint8Array;
                toProtoMsg(message: _263.QuerySupplyResponse): _263.QuerySupplyResponseProtoMsg;
            };
            QueryNFTsRequest: {
                encode(message: _263.QueryNFTsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryNFTsRequest;
                fromJSON(object: any): _263.QueryNFTsRequest;
                toJSON(message: _263.QueryNFTsRequest): unknown;
                fromPartial(object: Partial<_263.QueryNFTsRequest>): _263.QueryNFTsRequest;
                fromAmino(object: _263.QueryNFTsRequestAmino): _263.QueryNFTsRequest;
                toAmino(message: _263.QueryNFTsRequest): _263.QueryNFTsRequestAmino;
                fromAminoMsg(object: _263.QueryNFTsRequestAminoMsg): _263.QueryNFTsRequest;
                toAminoMsg(message: _263.QueryNFTsRequest): _263.QueryNFTsRequestAminoMsg;
                fromProtoMsg(message: _263.QueryNFTsRequestProtoMsg): _263.QueryNFTsRequest;
                toProto(message: _263.QueryNFTsRequest): Uint8Array;
                toProtoMsg(message: _263.QueryNFTsRequest): _263.QueryNFTsRequestProtoMsg;
            };
            QueryNFTsResponse: {
                encode(message: _263.QueryNFTsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryNFTsResponse;
                fromJSON(object: any): _263.QueryNFTsResponse;
                toJSON(message: _263.QueryNFTsResponse): unknown;
                fromPartial(object: Partial<_263.QueryNFTsResponse>): _263.QueryNFTsResponse;
                fromAmino(object: _263.QueryNFTsResponseAmino): _263.QueryNFTsResponse;
                toAmino(message: _263.QueryNFTsResponse): _263.QueryNFTsResponseAmino;
                fromAminoMsg(object: _263.QueryNFTsResponseAminoMsg): _263.QueryNFTsResponse;
                toAminoMsg(message: _263.QueryNFTsResponse): _263.QueryNFTsResponseAminoMsg;
                fromProtoMsg(message: _263.QueryNFTsResponseProtoMsg): _263.QueryNFTsResponse;
                toProto(message: _263.QueryNFTsResponse): Uint8Array;
                toProtoMsg(message: _263.QueryNFTsResponse): _263.QueryNFTsResponseProtoMsg;
            };
            QueryNFTRequest: {
                encode(message: _263.QueryNFTRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryNFTRequest;
                fromJSON(object: any): _263.QueryNFTRequest;
                toJSON(message: _263.QueryNFTRequest): unknown;
                fromPartial(object: Partial<_263.QueryNFTRequest>): _263.QueryNFTRequest;
                fromAmino(object: _263.QueryNFTRequestAmino): _263.QueryNFTRequest;
                toAmino(message: _263.QueryNFTRequest): _263.QueryNFTRequestAmino;
                fromAminoMsg(object: _263.QueryNFTRequestAminoMsg): _263.QueryNFTRequest;
                toAminoMsg(message: _263.QueryNFTRequest): _263.QueryNFTRequestAminoMsg;
                fromProtoMsg(message: _263.QueryNFTRequestProtoMsg): _263.QueryNFTRequest;
                toProto(message: _263.QueryNFTRequest): Uint8Array;
                toProtoMsg(message: _263.QueryNFTRequest): _263.QueryNFTRequestProtoMsg;
            };
            QueryNFTResponse: {
                encode(message: _263.QueryNFTResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryNFTResponse;
                fromJSON(object: any): _263.QueryNFTResponse;
                toJSON(message: _263.QueryNFTResponse): unknown;
                fromPartial(object: Partial<_263.QueryNFTResponse>): _263.QueryNFTResponse;
                fromAmino(object: _263.QueryNFTResponseAmino): _263.QueryNFTResponse;
                toAmino(message: _263.QueryNFTResponse): _263.QueryNFTResponseAmino;
                fromAminoMsg(object: _263.QueryNFTResponseAminoMsg): _263.QueryNFTResponse;
                toAminoMsg(message: _263.QueryNFTResponse): _263.QueryNFTResponseAminoMsg;
                fromProtoMsg(message: _263.QueryNFTResponseProtoMsg): _263.QueryNFTResponse;
                toProto(message: _263.QueryNFTResponse): Uint8Array;
                toProtoMsg(message: _263.QueryNFTResponse): _263.QueryNFTResponseProtoMsg;
            };
            QueryClassRequest: {
                encode(message: _263.QueryClassRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryClassRequest;
                fromJSON(object: any): _263.QueryClassRequest;
                toJSON(message: _263.QueryClassRequest): unknown;
                fromPartial(object: Partial<_263.QueryClassRequest>): _263.QueryClassRequest;
                fromAmino(object: _263.QueryClassRequestAmino): _263.QueryClassRequest;
                toAmino(message: _263.QueryClassRequest): _263.QueryClassRequestAmino;
                fromAminoMsg(object: _263.QueryClassRequestAminoMsg): _263.QueryClassRequest;
                toAminoMsg(message: _263.QueryClassRequest): _263.QueryClassRequestAminoMsg;
                fromProtoMsg(message: _263.QueryClassRequestProtoMsg): _263.QueryClassRequest;
                toProto(message: _263.QueryClassRequest): Uint8Array;
                toProtoMsg(message: _263.QueryClassRequest): _263.QueryClassRequestProtoMsg;
            };
            QueryClassResponse: {
                encode(message: _263.QueryClassResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryClassResponse;
                fromJSON(object: any): _263.QueryClassResponse;
                toJSON(message: _263.QueryClassResponse): unknown;
                fromPartial(object: Partial<_263.QueryClassResponse>): _263.QueryClassResponse;
                fromAmino(object: _263.QueryClassResponseAmino): _263.QueryClassResponse;
                toAmino(message: _263.QueryClassResponse): _263.QueryClassResponseAmino;
                fromAminoMsg(object: _263.QueryClassResponseAminoMsg): _263.QueryClassResponse;
                toAminoMsg(message: _263.QueryClassResponse): _263.QueryClassResponseAminoMsg;
                fromProtoMsg(message: _263.QueryClassResponseProtoMsg): _263.QueryClassResponse;
                toProto(message: _263.QueryClassResponse): Uint8Array;
                toProtoMsg(message: _263.QueryClassResponse): _263.QueryClassResponseProtoMsg;
            };
            QueryClassesRequest: {
                encode(message: _263.QueryClassesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryClassesRequest;
                fromJSON(object: any): _263.QueryClassesRequest;
                toJSON(message: _263.QueryClassesRequest): unknown;
                fromPartial(object: Partial<_263.QueryClassesRequest>): _263.QueryClassesRequest;
                fromAmino(object: _263.QueryClassesRequestAmino): _263.QueryClassesRequest;
                toAmino(message: _263.QueryClassesRequest): _263.QueryClassesRequestAmino;
                fromAminoMsg(object: _263.QueryClassesRequestAminoMsg): _263.QueryClassesRequest;
                toAminoMsg(message: _263.QueryClassesRequest): _263.QueryClassesRequestAminoMsg;
                fromProtoMsg(message: _263.QueryClassesRequestProtoMsg): _263.QueryClassesRequest;
                toProto(message: _263.QueryClassesRequest): Uint8Array;
                toProtoMsg(message: _263.QueryClassesRequest): _263.QueryClassesRequestProtoMsg;
            };
            QueryClassesResponse: {
                encode(message: _263.QueryClassesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _263.QueryClassesResponse;
                fromJSON(object: any): _263.QueryClassesResponse;
                toJSON(message: _263.QueryClassesResponse): unknown;
                fromPartial(object: Partial<_263.QueryClassesResponse>): _263.QueryClassesResponse;
                fromAmino(object: _263.QueryClassesResponseAmino): _263.QueryClassesResponse;
                toAmino(message: _263.QueryClassesResponse): _263.QueryClassesResponseAmino;
                fromAminoMsg(object: _263.QueryClassesResponseAminoMsg): _263.QueryClassesResponse;
                toAminoMsg(message: _263.QueryClassesResponse): _263.QueryClassesResponseAminoMsg;
                fromProtoMsg(message: _263.QueryClassesResponseProtoMsg): _263.QueryClassesResponse;
                toProto(message: _263.QueryClassesResponse): Uint8Array;
                toProtoMsg(message: _263.QueryClassesResponse): _263.QueryClassesResponseProtoMsg;
            };
            Class: {
                encode(message: _262.Class, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.Class;
                fromJSON(object: any): _262.Class;
                toJSON(message: _262.Class): unknown;
                fromPartial(object: Partial<_262.Class>): _262.Class;
                fromAmino(object: _262.ClassAmino): _262.Class;
                toAmino(message: _262.Class): _262.ClassAmino;
                fromAminoMsg(object: _262.ClassAminoMsg): _262.Class;
                toAminoMsg(message: _262.Class): _262.ClassAminoMsg;
                fromProtoMsg(message: _262.ClassProtoMsg): _262.Class;
                toProto(message: _262.Class): Uint8Array;
                toProtoMsg(message: _262.Class): _262.ClassProtoMsg;
            };
            NFT: {
                encode(message: _262.NFT, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _262.NFT;
                fromJSON(object: any): _262.NFT;
                toJSON(message: _262.NFT): unknown;
                fromPartial(object: Partial<_262.NFT>): _262.NFT;
                fromAmino(object: _262.NFTAmino): _262.NFT;
                toAmino(message: _262.NFT): _262.NFTAmino;
                fromAminoMsg(object: _262.NFTAminoMsg): _262.NFT;
                toAminoMsg(message: _262.NFT): _262.NFTAminoMsg;
                fromProtoMsg(message: _262.NFTProtoMsg): _262.NFT;
                toProto(message: _262.NFT): Uint8Array;
                toProtoMsg(message: _262.NFT): _262.NFTProtoMsg;
            };
            GenesisState: {
                encode(message: _261.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.GenesisState;
                fromJSON(object: any): _261.GenesisState;
                toJSON(message: _261.GenesisState): unknown;
                fromPartial(object: Partial<_261.GenesisState>): _261.GenesisState;
                fromAmino(object: _261.GenesisStateAmino): _261.GenesisState;
                toAmino(message: _261.GenesisState): _261.GenesisStateAmino;
                fromAminoMsg(object: _261.GenesisStateAminoMsg): _261.GenesisState;
                toAminoMsg(message: _261.GenesisState): _261.GenesisStateAminoMsg;
                fromProtoMsg(message: _261.GenesisStateProtoMsg): _261.GenesisState;
                toProto(message: _261.GenesisState): Uint8Array;
                toProtoMsg(message: _261.GenesisState): _261.GenesisStateProtoMsg;
            };
            Entry: {
                encode(message: _261.Entry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _261.Entry;
                fromJSON(object: any): _261.Entry;
                toJSON(message: _261.Entry): unknown;
                fromPartial(object: Partial<_261.Entry>): _261.Entry;
                fromAmino(object: _261.EntryAmino): _261.Entry;
                toAmino(message: _261.Entry): _261.EntryAmino;
                fromAminoMsg(object: _261.EntryAminoMsg): _261.Entry;
                toAminoMsg(message: _261.Entry): _261.EntryAminoMsg;
                fromProtoMsg(message: _261.EntryProtoMsg): _261.Entry;
                toProto(message: _261.Entry): Uint8Array;
                toProtoMsg(message: _261.Entry): _261.EntryProtoMsg;
            };
            EventSend: {
                encode(message: _260.EventSend, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.EventSend;
                fromJSON(object: any): _260.EventSend;
                toJSON(message: _260.EventSend): unknown;
                fromPartial(object: Partial<_260.EventSend>): _260.EventSend;
                fromAmino(object: _260.EventSendAmino): _260.EventSend;
                toAmino(message: _260.EventSend): _260.EventSendAmino;
                fromAminoMsg(object: _260.EventSendAminoMsg): _260.EventSend;
                toAminoMsg(message: _260.EventSend): _260.EventSendAminoMsg;
                fromProtoMsg(message: _260.EventSendProtoMsg): _260.EventSend;
                toProto(message: _260.EventSend): Uint8Array;
                toProtoMsg(message: _260.EventSend): _260.EventSendProtoMsg;
            };
            EventMint: {
                encode(message: _260.EventMint, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.EventMint;
                fromJSON(object: any): _260.EventMint;
                toJSON(message: _260.EventMint): unknown;
                fromPartial(object: Partial<_260.EventMint>): _260.EventMint;
                fromAmino(object: _260.EventMintAmino): _260.EventMint;
                toAmino(message: _260.EventMint): _260.EventMintAmino;
                fromAminoMsg(object: _260.EventMintAminoMsg): _260.EventMint;
                toAminoMsg(message: _260.EventMint): _260.EventMintAminoMsg;
                fromProtoMsg(message: _260.EventMintProtoMsg): _260.EventMint;
                toProto(message: _260.EventMint): Uint8Array;
                toProtoMsg(message: _260.EventMint): _260.EventMintProtoMsg;
            };
            EventBurn: {
                encode(message: _260.EventBurn, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _260.EventBurn;
                fromJSON(object: any): _260.EventBurn;
                toJSON(message: _260.EventBurn): unknown;
                fromPartial(object: Partial<_260.EventBurn>): _260.EventBurn;
                fromAmino(object: _260.EventBurnAmino): _260.EventBurn;
                toAmino(message: _260.EventBurn): _260.EventBurnAmino;
                fromAminoMsg(object: _260.EventBurnAminoMsg): _260.EventBurn;
                toAminoMsg(message: _260.EventBurn): _260.EventBurnAminoMsg;
                fromProtoMsg(message: _260.EventBurnProtoMsg): _260.EventBurn;
                toProto(message: _260.EventBurn): Uint8Array;
                toProtoMsg(message: _260.EventBurn): _260.EventBurnProtoMsg;
            };
        };
    }
    namespace orm {
        const v1: {
            TableDescriptor: {
                encode(message: _265.TableDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.TableDescriptor;
                fromJSON(object: any): _265.TableDescriptor;
                toJSON(message: _265.TableDescriptor): unknown;
                fromPartial(object: Partial<_265.TableDescriptor>): _265.TableDescriptor;
                fromAmino(object: _265.TableDescriptorAmino): _265.TableDescriptor;
                toAmino(message: _265.TableDescriptor): _265.TableDescriptorAmino;
                fromAminoMsg(object: _265.TableDescriptorAminoMsg): _265.TableDescriptor;
                toAminoMsg(message: _265.TableDescriptor): _265.TableDescriptorAminoMsg;
                fromProtoMsg(message: _265.TableDescriptorProtoMsg): _265.TableDescriptor;
                toProto(message: _265.TableDescriptor): Uint8Array;
                toProtoMsg(message: _265.TableDescriptor): _265.TableDescriptorProtoMsg;
            };
            PrimaryKeyDescriptor: {
                encode(message: _265.PrimaryKeyDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.PrimaryKeyDescriptor;
                fromJSON(object: any): _265.PrimaryKeyDescriptor;
                toJSON(message: _265.PrimaryKeyDescriptor): unknown;
                fromPartial(object: Partial<_265.PrimaryKeyDescriptor>): _265.PrimaryKeyDescriptor;
                fromAmino(object: _265.PrimaryKeyDescriptorAmino): _265.PrimaryKeyDescriptor;
                toAmino(message: _265.PrimaryKeyDescriptor): _265.PrimaryKeyDescriptorAmino;
                fromAminoMsg(object: _265.PrimaryKeyDescriptorAminoMsg): _265.PrimaryKeyDescriptor;
                toAminoMsg(message: _265.PrimaryKeyDescriptor): _265.PrimaryKeyDescriptorAminoMsg;
                fromProtoMsg(message: _265.PrimaryKeyDescriptorProtoMsg): _265.PrimaryKeyDescriptor;
                toProto(message: _265.PrimaryKeyDescriptor): Uint8Array;
                toProtoMsg(message: _265.PrimaryKeyDescriptor): _265.PrimaryKeyDescriptorProtoMsg;
            };
            SecondaryIndexDescriptor: {
                encode(message: _265.SecondaryIndexDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.SecondaryIndexDescriptor;
                fromJSON(object: any): _265.SecondaryIndexDescriptor;
                toJSON(message: _265.SecondaryIndexDescriptor): unknown;
                fromPartial(object: Partial<_265.SecondaryIndexDescriptor>): _265.SecondaryIndexDescriptor;
                fromAmino(object: _265.SecondaryIndexDescriptorAmino): _265.SecondaryIndexDescriptor;
                toAmino(message: _265.SecondaryIndexDescriptor): _265.SecondaryIndexDescriptorAmino;
                fromAminoMsg(object: _265.SecondaryIndexDescriptorAminoMsg): _265.SecondaryIndexDescriptor;
                toAminoMsg(message: _265.SecondaryIndexDescriptor): _265.SecondaryIndexDescriptorAminoMsg;
                fromProtoMsg(message: _265.SecondaryIndexDescriptorProtoMsg): _265.SecondaryIndexDescriptor;
                toProto(message: _265.SecondaryIndexDescriptor): Uint8Array;
                toProtoMsg(message: _265.SecondaryIndexDescriptor): _265.SecondaryIndexDescriptorProtoMsg;
            };
            SingletonDescriptor: {
                encode(message: _265.SingletonDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _265.SingletonDescriptor;
                fromJSON(object: any): _265.SingletonDescriptor;
                toJSON(message: _265.SingletonDescriptor): unknown;
                fromPartial(object: Partial<_265.SingletonDescriptor>): _265.SingletonDescriptor;
                fromAmino(object: _265.SingletonDescriptorAmino): _265.SingletonDescriptor;
                toAmino(message: _265.SingletonDescriptor): _265.SingletonDescriptorAmino;
                fromAminoMsg(object: _265.SingletonDescriptorAminoMsg): _265.SingletonDescriptor;
                toAminoMsg(message: _265.SingletonDescriptor): _265.SingletonDescriptorAminoMsg;
                fromProtoMsg(message: _265.SingletonDescriptorProtoMsg): _265.SingletonDescriptor;
                toProto(message: _265.SingletonDescriptor): Uint8Array;
                toProtoMsg(message: _265.SingletonDescriptor): _265.SingletonDescriptorProtoMsg;
            };
        };
        const v1alpha1: {
            storageTypeFromJSON(object: any): _266.StorageType;
            storageTypeToJSON(object: _266.StorageType): string;
            StorageType: typeof _266.StorageType;
            StorageTypeSDKType: typeof _266.StorageType;
            StorageTypeAmino: typeof _266.StorageType;
            ModuleSchemaDescriptor: {
                encode(message: _266.ModuleSchemaDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.ModuleSchemaDescriptor;
                fromJSON(object: any): _266.ModuleSchemaDescriptor;
                toJSON(message: _266.ModuleSchemaDescriptor): unknown;
                fromPartial(object: Partial<_266.ModuleSchemaDescriptor>): _266.ModuleSchemaDescriptor;
                fromAmino(object: _266.ModuleSchemaDescriptorAmino): _266.ModuleSchemaDescriptor;
                toAmino(message: _266.ModuleSchemaDescriptor): _266.ModuleSchemaDescriptorAmino;
                fromAminoMsg(object: _266.ModuleSchemaDescriptorAminoMsg): _266.ModuleSchemaDescriptor;
                toAminoMsg(message: _266.ModuleSchemaDescriptor): _266.ModuleSchemaDescriptorAminoMsg;
                fromProtoMsg(message: _266.ModuleSchemaDescriptorProtoMsg): _266.ModuleSchemaDescriptor;
                toProto(message: _266.ModuleSchemaDescriptor): Uint8Array;
                toProtoMsg(message: _266.ModuleSchemaDescriptor): _266.ModuleSchemaDescriptorProtoMsg;
            };
            ModuleSchemaDescriptor_FileEntry: {
                encode(message: _266.ModuleSchemaDescriptor_FileEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _266.ModuleSchemaDescriptor_FileEntry;
                fromJSON(object: any): _266.ModuleSchemaDescriptor_FileEntry;
                toJSON(message: _266.ModuleSchemaDescriptor_FileEntry): unknown;
                fromPartial(object: Partial<_266.ModuleSchemaDescriptor_FileEntry>): _266.ModuleSchemaDescriptor_FileEntry;
                fromAmino(object: _266.ModuleSchemaDescriptor_FileEntryAmino): _266.ModuleSchemaDescriptor_FileEntry;
                toAmino(message: _266.ModuleSchemaDescriptor_FileEntry): _266.ModuleSchemaDescriptor_FileEntryAmino;
                fromAminoMsg(object: _266.ModuleSchemaDescriptor_FileEntryAminoMsg): _266.ModuleSchemaDescriptor_FileEntry;
                toAminoMsg(message: _266.ModuleSchemaDescriptor_FileEntry): _266.ModuleSchemaDescriptor_FileEntryAminoMsg;
                fromProtoMsg(message: _266.ModuleSchemaDescriptor_FileEntryProtoMsg): _266.ModuleSchemaDescriptor_FileEntry;
                toProto(message: _266.ModuleSchemaDescriptor_FileEntry): Uint8Array;
                toProtoMsg(message: _266.ModuleSchemaDescriptor_FileEntry): _266.ModuleSchemaDescriptor_FileEntryProtoMsg;
            };
        };
    }
    namespace params {
        const v1beta1: {
            QueryClientImpl: typeof _445.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request: _268.QueryParamsRequest): Promise<_268.QueryParamsResponse>;
                subspaces(request?: _268.QuerySubspacesRequest): Promise<_268.QuerySubspacesResponse>;
            };
            QueryParamsRequest: {
                encode(message: _268.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryParamsRequest;
                fromJSON(object: any): _268.QueryParamsRequest;
                toJSON(message: _268.QueryParamsRequest): unknown;
                fromPartial(object: Partial<_268.QueryParamsRequest>): _268.QueryParamsRequest;
                fromAmino(object: _268.QueryParamsRequestAmino): _268.QueryParamsRequest;
                toAmino(message: _268.QueryParamsRequest): _268.QueryParamsRequestAmino;
                fromAminoMsg(object: _268.QueryParamsRequestAminoMsg): _268.QueryParamsRequest;
                toAminoMsg(message: _268.QueryParamsRequest): _268.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _268.QueryParamsRequestProtoMsg): _268.QueryParamsRequest;
                toProto(message: _268.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _268.QueryParamsRequest): _268.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _268.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QueryParamsResponse;
                fromJSON(object: any): _268.QueryParamsResponse;
                toJSON(message: _268.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_268.QueryParamsResponse>): _268.QueryParamsResponse;
                fromAmino(object: _268.QueryParamsResponseAmino): _268.QueryParamsResponse;
                toAmino(message: _268.QueryParamsResponse): _268.QueryParamsResponseAmino;
                fromAminoMsg(object: _268.QueryParamsResponseAminoMsg): _268.QueryParamsResponse;
                toAminoMsg(message: _268.QueryParamsResponse): _268.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _268.QueryParamsResponseProtoMsg): _268.QueryParamsResponse;
                toProto(message: _268.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _268.QueryParamsResponse): _268.QueryParamsResponseProtoMsg;
            };
            QuerySubspacesRequest: {
                encode(_: _268.QuerySubspacesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QuerySubspacesRequest;
                fromJSON(_: any): _268.QuerySubspacesRequest;
                toJSON(_: _268.QuerySubspacesRequest): unknown;
                fromPartial(_: Partial<_268.QuerySubspacesRequest>): _268.QuerySubspacesRequest;
                fromAmino(_: _268.QuerySubspacesRequestAmino): _268.QuerySubspacesRequest;
                toAmino(_: _268.QuerySubspacesRequest): _268.QuerySubspacesRequestAmino;
                fromAminoMsg(object: _268.QuerySubspacesRequestAminoMsg): _268.QuerySubspacesRequest;
                toAminoMsg(message: _268.QuerySubspacesRequest): _268.QuerySubspacesRequestAminoMsg;
                fromProtoMsg(message: _268.QuerySubspacesRequestProtoMsg): _268.QuerySubspacesRequest;
                toProto(message: _268.QuerySubspacesRequest): Uint8Array;
                toProtoMsg(message: _268.QuerySubspacesRequest): _268.QuerySubspacesRequestProtoMsg;
            };
            QuerySubspacesResponse: {
                encode(message: _268.QuerySubspacesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.QuerySubspacesResponse;
                fromJSON(object: any): _268.QuerySubspacesResponse;
                toJSON(message: _268.QuerySubspacesResponse): unknown;
                fromPartial(object: Partial<_268.QuerySubspacesResponse>): _268.QuerySubspacesResponse;
                fromAmino(object: _268.QuerySubspacesResponseAmino): _268.QuerySubspacesResponse;
                toAmino(message: _268.QuerySubspacesResponse): _268.QuerySubspacesResponseAmino;
                fromAminoMsg(object: _268.QuerySubspacesResponseAminoMsg): _268.QuerySubspacesResponse;
                toAminoMsg(message: _268.QuerySubspacesResponse): _268.QuerySubspacesResponseAminoMsg;
                fromProtoMsg(message: _268.QuerySubspacesResponseProtoMsg): _268.QuerySubspacesResponse;
                toProto(message: _268.QuerySubspacesResponse): Uint8Array;
                toProtoMsg(message: _268.QuerySubspacesResponse): _268.QuerySubspacesResponseProtoMsg;
            };
            Subspace: {
                encode(message: _268.Subspace, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _268.Subspace;
                fromJSON(object: any): _268.Subspace;
                toJSON(message: _268.Subspace): unknown;
                fromPartial(object: Partial<_268.Subspace>): _268.Subspace;
                fromAmino(object: _268.SubspaceAmino): _268.Subspace;
                toAmino(message: _268.Subspace): _268.SubspaceAmino;
                fromAminoMsg(object: _268.SubspaceAminoMsg): _268.Subspace;
                toAminoMsg(message: _268.Subspace): _268.SubspaceAminoMsg;
                fromProtoMsg(message: _268.SubspaceProtoMsg): _268.Subspace;
                toProto(message: _268.Subspace): Uint8Array;
                toProtoMsg(message: _268.Subspace): _268.SubspaceProtoMsg;
            };
            ParameterChangeProposal: {
                encode(message: _267.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.ParameterChangeProposal;
                fromJSON(object: any): _267.ParameterChangeProposal;
                toJSON(message: _267.ParameterChangeProposal): unknown;
                fromPartial(object: Partial<_267.ParameterChangeProposal>): _267.ParameterChangeProposal;
                fromAmino(object: _267.ParameterChangeProposalAmino): _267.ParameterChangeProposal;
                toAmino(message: _267.ParameterChangeProposal): _267.ParameterChangeProposalAmino;
                fromAminoMsg(object: _267.ParameterChangeProposalAminoMsg): _267.ParameterChangeProposal;
                toAminoMsg(message: _267.ParameterChangeProposal): _267.ParameterChangeProposalAminoMsg;
                fromProtoMsg(message: _267.ParameterChangeProposalProtoMsg): _267.ParameterChangeProposal;
                toProto(message: _267.ParameterChangeProposal): Uint8Array;
                toProtoMsg(message: _267.ParameterChangeProposal): _267.ParameterChangeProposalProtoMsg;
            };
            ParamChange: {
                encode(message: _267.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _267.ParamChange;
                fromJSON(object: any): _267.ParamChange;
                toJSON(message: _267.ParamChange): unknown;
                fromPartial(object: Partial<_267.ParamChange>): _267.ParamChange;
                fromAmino(object: _267.ParamChangeAmino): _267.ParamChange;
                toAmino(message: _267.ParamChange): _267.ParamChangeAmino;
                fromAminoMsg(object: _267.ParamChangeAminoMsg): _267.ParamChange;
                toAminoMsg(message: _267.ParamChange): _267.ParamChangeAminoMsg;
                fromProtoMsg(message: _267.ParamChangeProtoMsg): _267.ParamChange;
                toProto(message: _267.ParamChange): Uint8Array;
                toProtoMsg(message: _267.ParamChange): _267.ParamChangeProtoMsg;
            };
        };
    }
    namespace slashing {
        const v1beta1: {
            MsgClientImpl: typeof _460.MsgClientImpl;
            QueryClientImpl: typeof _446.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                params(request?: _270.QueryParamsRequest): Promise<_270.QueryParamsResponse>;
                signingInfo(request: _270.QuerySigningInfoRequest): Promise<_270.QuerySigningInfoResponse>;
                signingInfos(request?: _270.QuerySigningInfosRequest): Promise<_270.QuerySigningInfosResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    unjail(value: _272.MsgUnjail): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    unjail(value: _272.MsgUnjail): {
                        typeUrl: string;
                        value: _272.MsgUnjail;
                    };
                };
                toJSON: {
                    unjail(value: _272.MsgUnjail): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    unjail(value: any): {
                        typeUrl: string;
                        value: _272.MsgUnjail;
                    };
                };
                fromPartial: {
                    unjail(value: _272.MsgUnjail): {
                        typeUrl: string;
                        value: _272.MsgUnjail;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.slashing.v1beta1.MsgUnjail": {
                    aminoType: string;
                    toAmino: (message: _272.MsgUnjail) => _272.MsgUnjailAmino;
                    fromAmino: (object: _272.MsgUnjailAmino) => _272.MsgUnjail;
                };
            };
            MsgUnjail: {
                encode(message: _272.MsgUnjail, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.MsgUnjail;
                fromJSON(object: any): _272.MsgUnjail;
                toJSON(message: _272.MsgUnjail): unknown;
                fromPartial(object: Partial<_272.MsgUnjail>): _272.MsgUnjail;
                fromAmino(object: _272.MsgUnjailAmino): _272.MsgUnjail;
                toAmino(message: _272.MsgUnjail): _272.MsgUnjailAmino;
                fromAminoMsg(object: _272.MsgUnjailAminoMsg): _272.MsgUnjail;
                toAminoMsg(message: _272.MsgUnjail): _272.MsgUnjailAminoMsg;
                fromProtoMsg(message: _272.MsgUnjailProtoMsg): _272.MsgUnjail;
                toProto(message: _272.MsgUnjail): Uint8Array;
                toProtoMsg(message: _272.MsgUnjail): _272.MsgUnjailProtoMsg;
            };
            MsgUnjailResponse: {
                encode(_: _272.MsgUnjailResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _272.MsgUnjailResponse;
                fromJSON(_: any): _272.MsgUnjailResponse;
                toJSON(_: _272.MsgUnjailResponse): unknown;
                fromPartial(_: Partial<_272.MsgUnjailResponse>): _272.MsgUnjailResponse;
                fromAmino(_: _272.MsgUnjailResponseAmino): _272.MsgUnjailResponse;
                toAmino(_: _272.MsgUnjailResponse): _272.MsgUnjailResponseAmino;
                fromAminoMsg(object: _272.MsgUnjailResponseAminoMsg): _272.MsgUnjailResponse;
                toAminoMsg(message: _272.MsgUnjailResponse): _272.MsgUnjailResponseAminoMsg;
                fromProtoMsg(message: _272.MsgUnjailResponseProtoMsg): _272.MsgUnjailResponse;
                toProto(message: _272.MsgUnjailResponse): Uint8Array;
                toProtoMsg(message: _272.MsgUnjailResponse): _272.MsgUnjailResponseProtoMsg;
            };
            ValidatorSigningInfo: {
                encode(message: _271.ValidatorSigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.ValidatorSigningInfo;
                fromJSON(object: any): _271.ValidatorSigningInfo;
                toJSON(message: _271.ValidatorSigningInfo): unknown;
                fromPartial(object: Partial<_271.ValidatorSigningInfo>): _271.ValidatorSigningInfo;
                fromAmino(object: _271.ValidatorSigningInfoAmino): _271.ValidatorSigningInfo;
                toAmino(message: _271.ValidatorSigningInfo): _271.ValidatorSigningInfoAmino;
                fromAminoMsg(object: _271.ValidatorSigningInfoAminoMsg): _271.ValidatorSigningInfo;
                toAminoMsg(message: _271.ValidatorSigningInfo): _271.ValidatorSigningInfoAminoMsg;
                fromProtoMsg(message: _271.ValidatorSigningInfoProtoMsg): _271.ValidatorSigningInfo;
                toProto(message: _271.ValidatorSigningInfo): Uint8Array;
                toProtoMsg(message: _271.ValidatorSigningInfo): _271.ValidatorSigningInfoProtoMsg;
            };
            Params: {
                encode(message: _271.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _271.Params;
                fromJSON(object: any): _271.Params;
                toJSON(message: _271.Params): unknown;
                fromPartial(object: Partial<_271.Params>): _271.Params;
                fromAmino(object: _271.ParamsAmino): _271.Params;
                toAmino(message: _271.Params): _271.ParamsAmino;
                fromAminoMsg(object: _271.ParamsAminoMsg): _271.Params;
                toAminoMsg(message: _271.Params): _271.ParamsAminoMsg;
                fromProtoMsg(message: _271.ParamsProtoMsg): _271.Params;
                toProto(message: _271.Params): Uint8Array;
                toProtoMsg(message: _271.Params): _271.ParamsProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _270.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryParamsRequest;
                fromJSON(_: any): _270.QueryParamsRequest;
                toJSON(_: _270.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_270.QueryParamsRequest>): _270.QueryParamsRequest;
                fromAmino(_: _270.QueryParamsRequestAmino): _270.QueryParamsRequest;
                toAmino(_: _270.QueryParamsRequest): _270.QueryParamsRequestAmino;
                fromAminoMsg(object: _270.QueryParamsRequestAminoMsg): _270.QueryParamsRequest;
                toAminoMsg(message: _270.QueryParamsRequest): _270.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _270.QueryParamsRequestProtoMsg): _270.QueryParamsRequest;
                toProto(message: _270.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _270.QueryParamsRequest): _270.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _270.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QueryParamsResponse;
                fromJSON(object: any): _270.QueryParamsResponse;
                toJSON(message: _270.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_270.QueryParamsResponse>): _270.QueryParamsResponse;
                fromAmino(object: _270.QueryParamsResponseAmino): _270.QueryParamsResponse;
                toAmino(message: _270.QueryParamsResponse): _270.QueryParamsResponseAmino;
                fromAminoMsg(object: _270.QueryParamsResponseAminoMsg): _270.QueryParamsResponse;
                toAminoMsg(message: _270.QueryParamsResponse): _270.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _270.QueryParamsResponseProtoMsg): _270.QueryParamsResponse;
                toProto(message: _270.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _270.QueryParamsResponse): _270.QueryParamsResponseProtoMsg;
            };
            QuerySigningInfoRequest: {
                encode(message: _270.QuerySigningInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySigningInfoRequest;
                fromJSON(object: any): _270.QuerySigningInfoRequest;
                toJSON(message: _270.QuerySigningInfoRequest): unknown;
                fromPartial(object: Partial<_270.QuerySigningInfoRequest>): _270.QuerySigningInfoRequest;
                fromAmino(object: _270.QuerySigningInfoRequestAmino): _270.QuerySigningInfoRequest;
                toAmino(message: _270.QuerySigningInfoRequest): _270.QuerySigningInfoRequestAmino;
                fromAminoMsg(object: _270.QuerySigningInfoRequestAminoMsg): _270.QuerySigningInfoRequest;
                toAminoMsg(message: _270.QuerySigningInfoRequest): _270.QuerySigningInfoRequestAminoMsg;
                fromProtoMsg(message: _270.QuerySigningInfoRequestProtoMsg): _270.QuerySigningInfoRequest;
                toProto(message: _270.QuerySigningInfoRequest): Uint8Array;
                toProtoMsg(message: _270.QuerySigningInfoRequest): _270.QuerySigningInfoRequestProtoMsg;
            };
            QuerySigningInfoResponse: {
                encode(message: _270.QuerySigningInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySigningInfoResponse;
                fromJSON(object: any): _270.QuerySigningInfoResponse;
                toJSON(message: _270.QuerySigningInfoResponse): unknown;
                fromPartial(object: Partial<_270.QuerySigningInfoResponse>): _270.QuerySigningInfoResponse;
                fromAmino(object: _270.QuerySigningInfoResponseAmino): _270.QuerySigningInfoResponse;
                toAmino(message: _270.QuerySigningInfoResponse): _270.QuerySigningInfoResponseAmino;
                fromAminoMsg(object: _270.QuerySigningInfoResponseAminoMsg): _270.QuerySigningInfoResponse;
                toAminoMsg(message: _270.QuerySigningInfoResponse): _270.QuerySigningInfoResponseAminoMsg;
                fromProtoMsg(message: _270.QuerySigningInfoResponseProtoMsg): _270.QuerySigningInfoResponse;
                toProto(message: _270.QuerySigningInfoResponse): Uint8Array;
                toProtoMsg(message: _270.QuerySigningInfoResponse): _270.QuerySigningInfoResponseProtoMsg;
            };
            QuerySigningInfosRequest: {
                encode(message: _270.QuerySigningInfosRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySigningInfosRequest;
                fromJSON(object: any): _270.QuerySigningInfosRequest;
                toJSON(message: _270.QuerySigningInfosRequest): unknown;
                fromPartial(object: Partial<_270.QuerySigningInfosRequest>): _270.QuerySigningInfosRequest;
                fromAmino(object: _270.QuerySigningInfosRequestAmino): _270.QuerySigningInfosRequest;
                toAmino(message: _270.QuerySigningInfosRequest): _270.QuerySigningInfosRequestAmino;
                fromAminoMsg(object: _270.QuerySigningInfosRequestAminoMsg): _270.QuerySigningInfosRequest;
                toAminoMsg(message: _270.QuerySigningInfosRequest): _270.QuerySigningInfosRequestAminoMsg;
                fromProtoMsg(message: _270.QuerySigningInfosRequestProtoMsg): _270.QuerySigningInfosRequest;
                toProto(message: _270.QuerySigningInfosRequest): Uint8Array;
                toProtoMsg(message: _270.QuerySigningInfosRequest): _270.QuerySigningInfosRequestProtoMsg;
            };
            QuerySigningInfosResponse: {
                encode(message: _270.QuerySigningInfosResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _270.QuerySigningInfosResponse;
                fromJSON(object: any): _270.QuerySigningInfosResponse;
                toJSON(message: _270.QuerySigningInfosResponse): unknown;
                fromPartial(object: Partial<_270.QuerySigningInfosResponse>): _270.QuerySigningInfosResponse;
                fromAmino(object: _270.QuerySigningInfosResponseAmino): _270.QuerySigningInfosResponse;
                toAmino(message: _270.QuerySigningInfosResponse): _270.QuerySigningInfosResponseAmino;
                fromAminoMsg(object: _270.QuerySigningInfosResponseAminoMsg): _270.QuerySigningInfosResponse;
                toAminoMsg(message: _270.QuerySigningInfosResponse): _270.QuerySigningInfosResponseAminoMsg;
                fromProtoMsg(message: _270.QuerySigningInfosResponseProtoMsg): _270.QuerySigningInfosResponse;
                toProto(message: _270.QuerySigningInfosResponse): Uint8Array;
                toProtoMsg(message: _270.QuerySigningInfosResponse): _270.QuerySigningInfosResponseProtoMsg;
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
            SigningInfo: {
                encode(message: _269.SigningInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.SigningInfo;
                fromJSON(object: any): _269.SigningInfo;
                toJSON(message: _269.SigningInfo): unknown;
                fromPartial(object: Partial<_269.SigningInfo>): _269.SigningInfo;
                fromAmino(object: _269.SigningInfoAmino): _269.SigningInfo;
                toAmino(message: _269.SigningInfo): _269.SigningInfoAmino;
                fromAminoMsg(object: _269.SigningInfoAminoMsg): _269.SigningInfo;
                toAminoMsg(message: _269.SigningInfo): _269.SigningInfoAminoMsg;
                fromProtoMsg(message: _269.SigningInfoProtoMsg): _269.SigningInfo;
                toProto(message: _269.SigningInfo): Uint8Array;
                toProtoMsg(message: _269.SigningInfo): _269.SigningInfoProtoMsg;
            };
            ValidatorMissedBlocks: {
                encode(message: _269.ValidatorMissedBlocks, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.ValidatorMissedBlocks;
                fromJSON(object: any): _269.ValidatorMissedBlocks;
                toJSON(message: _269.ValidatorMissedBlocks): unknown;
                fromPartial(object: Partial<_269.ValidatorMissedBlocks>): _269.ValidatorMissedBlocks;
                fromAmino(object: _269.ValidatorMissedBlocksAmino): _269.ValidatorMissedBlocks;
                toAmino(message: _269.ValidatorMissedBlocks): _269.ValidatorMissedBlocksAmino;
                fromAminoMsg(object: _269.ValidatorMissedBlocksAminoMsg): _269.ValidatorMissedBlocks;
                toAminoMsg(message: _269.ValidatorMissedBlocks): _269.ValidatorMissedBlocksAminoMsg;
                fromProtoMsg(message: _269.ValidatorMissedBlocksProtoMsg): _269.ValidatorMissedBlocks;
                toProto(message: _269.ValidatorMissedBlocks): Uint8Array;
                toProtoMsg(message: _269.ValidatorMissedBlocks): _269.ValidatorMissedBlocksProtoMsg;
            };
            MissedBlock: {
                encode(message: _269.MissedBlock, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _269.MissedBlock;
                fromJSON(object: any): _269.MissedBlock;
                toJSON(message: _269.MissedBlock): unknown;
                fromPartial(object: Partial<_269.MissedBlock>): _269.MissedBlock;
                fromAmino(object: _269.MissedBlockAmino): _269.MissedBlock;
                toAmino(message: _269.MissedBlock): _269.MissedBlockAmino;
                fromAminoMsg(object: _269.MissedBlockAminoMsg): _269.MissedBlock;
                toAminoMsg(message: _269.MissedBlock): _269.MissedBlockAminoMsg;
                fromProtoMsg(message: _269.MissedBlockProtoMsg): _269.MissedBlock;
                toProto(message: _269.MissedBlock): Uint8Array;
                toProtoMsg(message: _269.MissedBlock): _269.MissedBlockProtoMsg;
            };
        };
    }
    namespace staking {
        const v1beta1: {
            MsgClientImpl: typeof _461.MsgClientImpl;
            QueryClientImpl: typeof _447.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                validators(request: _275.QueryValidatorsRequest): Promise<_275.QueryValidatorsResponse>;
                validator(request: _275.QueryValidatorRequest): Promise<_275.QueryValidatorResponse>;
                validatorDelegations(request: _275.QueryValidatorDelegationsRequest): Promise<_275.QueryValidatorDelegationsResponse>;
                validatorUnbondingDelegations(request: _275.QueryValidatorUnbondingDelegationsRequest): Promise<_275.QueryValidatorUnbondingDelegationsResponse>;
                delegation(request: _275.QueryDelegationRequest): Promise<_275.QueryDelegationResponse>;
                unbondingDelegation(request: _275.QueryUnbondingDelegationRequest): Promise<_275.QueryUnbondingDelegationResponse>;
                delegatorDelegations(request: _275.QueryDelegatorDelegationsRequest): Promise<_275.QueryDelegatorDelegationsResponse>;
                delegatorUnbondingDelegations(request: _275.QueryDelegatorUnbondingDelegationsRequest): Promise<_275.QueryDelegatorUnbondingDelegationsResponse>;
                redelegations(request: _275.QueryRedelegationsRequest): Promise<_275.QueryRedelegationsResponse>;
                delegatorValidators(request: _275.QueryDelegatorValidatorsRequest): Promise<_275.QueryDelegatorValidatorsResponse>;
                delegatorValidator(request: _275.QueryDelegatorValidatorRequest): Promise<_275.QueryDelegatorValidatorResponse>;
                historicalInfo(request: _275.QueryHistoricalInfoRequest): Promise<_275.QueryHistoricalInfoResponse>;
                pool(request?: _275.QueryPoolRequest): Promise<_275.QueryPoolResponse>;
                params(request?: _275.QueryParamsRequest): Promise<_275.QueryParamsResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createValidator(value: _277.MsgCreateValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    editValidator(value: _277.MsgEditValidator): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    delegate(value: _277.MsgDelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    beginRedelegate(value: _277.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    undelegate(value: _277.MsgUndelegate): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createValidator(value: _277.MsgCreateValidator): {
                        typeUrl: string;
                        value: _277.MsgCreateValidator;
                    };
                    editValidator(value: _277.MsgEditValidator): {
                        typeUrl: string;
                        value: _277.MsgEditValidator;
                    };
                    delegate(value: _277.MsgDelegate): {
                        typeUrl: string;
                        value: _277.MsgDelegate;
                    };
                    beginRedelegate(value: _277.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _277.MsgBeginRedelegate;
                    };
                    undelegate(value: _277.MsgUndelegate): {
                        typeUrl: string;
                        value: _277.MsgUndelegate;
                    };
                };
                toJSON: {
                    createValidator(value: _277.MsgCreateValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    editValidator(value: _277.MsgEditValidator): {
                        typeUrl: string;
                        value: unknown;
                    };
                    delegate(value: _277.MsgDelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    beginRedelegate(value: _277.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                    undelegate(value: _277.MsgUndelegate): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createValidator(value: any): {
                        typeUrl: string;
                        value: _277.MsgCreateValidator;
                    };
                    editValidator(value: any): {
                        typeUrl: string;
                        value: _277.MsgEditValidator;
                    };
                    delegate(value: any): {
                        typeUrl: string;
                        value: _277.MsgDelegate;
                    };
                    beginRedelegate(value: any): {
                        typeUrl: string;
                        value: _277.MsgBeginRedelegate;
                    };
                    undelegate(value: any): {
                        typeUrl: string;
                        value: _277.MsgUndelegate;
                    };
                };
                fromPartial: {
                    createValidator(value: _277.MsgCreateValidator): {
                        typeUrl: string;
                        value: _277.MsgCreateValidator;
                    };
                    editValidator(value: _277.MsgEditValidator): {
                        typeUrl: string;
                        value: _277.MsgEditValidator;
                    };
                    delegate(value: _277.MsgDelegate): {
                        typeUrl: string;
                        value: _277.MsgDelegate;
                    };
                    beginRedelegate(value: _277.MsgBeginRedelegate): {
                        typeUrl: string;
                        value: _277.MsgBeginRedelegate;
                    };
                    undelegate(value: _277.MsgUndelegate): {
                        typeUrl: string;
                        value: _277.MsgUndelegate;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.staking.v1beta1.MsgCreateValidator": {
                    aminoType: string;
                    toAmino: (message: _277.MsgCreateValidator) => _277.MsgCreateValidatorAmino;
                    fromAmino: (object: _277.MsgCreateValidatorAmino) => _277.MsgCreateValidator;
                };
                "/cosmos.staking.v1beta1.MsgEditValidator": {
                    aminoType: string;
                    toAmino: (message: _277.MsgEditValidator) => _277.MsgEditValidatorAmino;
                    fromAmino: (object: _277.MsgEditValidatorAmino) => _277.MsgEditValidator;
                };
                "/cosmos.staking.v1beta1.MsgDelegate": {
                    aminoType: string;
                    toAmino: (message: _277.MsgDelegate) => _277.MsgDelegateAmino;
                    fromAmino: (object: _277.MsgDelegateAmino) => _277.MsgDelegate;
                };
                "/cosmos.staking.v1beta1.MsgBeginRedelegate": {
                    aminoType: string;
                    toAmino: (message: _277.MsgBeginRedelegate) => _277.MsgBeginRedelegateAmino;
                    fromAmino: (object: _277.MsgBeginRedelegateAmino) => _277.MsgBeginRedelegate;
                };
                "/cosmos.staking.v1beta1.MsgUndelegate": {
                    aminoType: string;
                    toAmino: (message: _277.MsgUndelegate) => _277.MsgUndelegateAmino;
                    fromAmino: (object: _277.MsgUndelegateAmino) => _277.MsgUndelegate;
                };
            };
            MsgCreateValidator: {
                encode(message: _277.MsgCreateValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgCreateValidator;
                fromJSON(object: any): _277.MsgCreateValidator;
                toJSON(message: _277.MsgCreateValidator): unknown;
                fromPartial(object: Partial<_277.MsgCreateValidator>): _277.MsgCreateValidator;
                fromAmino(object: _277.MsgCreateValidatorAmino): _277.MsgCreateValidator;
                toAmino(message: _277.MsgCreateValidator): _277.MsgCreateValidatorAmino;
                fromAminoMsg(object: _277.MsgCreateValidatorAminoMsg): _277.MsgCreateValidator;
                toAminoMsg(message: _277.MsgCreateValidator): _277.MsgCreateValidatorAminoMsg;
                fromProtoMsg(message: _277.MsgCreateValidatorProtoMsg): _277.MsgCreateValidator;
                toProto(message: _277.MsgCreateValidator): Uint8Array;
                toProtoMsg(message: _277.MsgCreateValidator): _277.MsgCreateValidatorProtoMsg;
            };
            MsgCreateValidatorResponse: {
                encode(_: _277.MsgCreateValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgCreateValidatorResponse;
                fromJSON(_: any): _277.MsgCreateValidatorResponse;
                toJSON(_: _277.MsgCreateValidatorResponse): unknown;
                fromPartial(_: Partial<_277.MsgCreateValidatorResponse>): _277.MsgCreateValidatorResponse;
                fromAmino(_: _277.MsgCreateValidatorResponseAmino): _277.MsgCreateValidatorResponse;
                toAmino(_: _277.MsgCreateValidatorResponse): _277.MsgCreateValidatorResponseAmino;
                fromAminoMsg(object: _277.MsgCreateValidatorResponseAminoMsg): _277.MsgCreateValidatorResponse;
                toAminoMsg(message: _277.MsgCreateValidatorResponse): _277.MsgCreateValidatorResponseAminoMsg;
                fromProtoMsg(message: _277.MsgCreateValidatorResponseProtoMsg): _277.MsgCreateValidatorResponse;
                toProto(message: _277.MsgCreateValidatorResponse): Uint8Array;
                toProtoMsg(message: _277.MsgCreateValidatorResponse): _277.MsgCreateValidatorResponseProtoMsg;
            };
            MsgEditValidator: {
                encode(message: _277.MsgEditValidator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgEditValidator;
                fromJSON(object: any): _277.MsgEditValidator;
                toJSON(message: _277.MsgEditValidator): unknown;
                fromPartial(object: Partial<_277.MsgEditValidator>): _277.MsgEditValidator;
                fromAmino(object: _277.MsgEditValidatorAmino): _277.MsgEditValidator;
                toAmino(message: _277.MsgEditValidator): _277.MsgEditValidatorAmino;
                fromAminoMsg(object: _277.MsgEditValidatorAminoMsg): _277.MsgEditValidator;
                toAminoMsg(message: _277.MsgEditValidator): _277.MsgEditValidatorAminoMsg;
                fromProtoMsg(message: _277.MsgEditValidatorProtoMsg): _277.MsgEditValidator;
                toProto(message: _277.MsgEditValidator): Uint8Array;
                toProtoMsg(message: _277.MsgEditValidator): _277.MsgEditValidatorProtoMsg;
            };
            MsgEditValidatorResponse: {
                encode(_: _277.MsgEditValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgEditValidatorResponse;
                fromJSON(_: any): _277.MsgEditValidatorResponse;
                toJSON(_: _277.MsgEditValidatorResponse): unknown;
                fromPartial(_: Partial<_277.MsgEditValidatorResponse>): _277.MsgEditValidatorResponse;
                fromAmino(_: _277.MsgEditValidatorResponseAmino): _277.MsgEditValidatorResponse;
                toAmino(_: _277.MsgEditValidatorResponse): _277.MsgEditValidatorResponseAmino;
                fromAminoMsg(object: _277.MsgEditValidatorResponseAminoMsg): _277.MsgEditValidatorResponse;
                toAminoMsg(message: _277.MsgEditValidatorResponse): _277.MsgEditValidatorResponseAminoMsg;
                fromProtoMsg(message: _277.MsgEditValidatorResponseProtoMsg): _277.MsgEditValidatorResponse;
                toProto(message: _277.MsgEditValidatorResponse): Uint8Array;
                toProtoMsg(message: _277.MsgEditValidatorResponse): _277.MsgEditValidatorResponseProtoMsg;
            };
            MsgDelegate: {
                encode(message: _277.MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgDelegate;
                fromJSON(object: any): _277.MsgDelegate;
                toJSON(message: _277.MsgDelegate): unknown;
                fromPartial(object: Partial<_277.MsgDelegate>): _277.MsgDelegate;
                fromAmino(object: _277.MsgDelegateAmino): _277.MsgDelegate;
                toAmino(message: _277.MsgDelegate): _277.MsgDelegateAmino;
                fromAminoMsg(object: _277.MsgDelegateAminoMsg): _277.MsgDelegate;
                toAminoMsg(message: _277.MsgDelegate): _277.MsgDelegateAminoMsg;
                fromProtoMsg(message: _277.MsgDelegateProtoMsg): _277.MsgDelegate;
                toProto(message: _277.MsgDelegate): Uint8Array;
                toProtoMsg(message: _277.MsgDelegate): _277.MsgDelegateProtoMsg;
            };
            MsgDelegateResponse: {
                encode(_: _277.MsgDelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgDelegateResponse;
                fromJSON(_: any): _277.MsgDelegateResponse;
                toJSON(_: _277.MsgDelegateResponse): unknown;
                fromPartial(_: Partial<_277.MsgDelegateResponse>): _277.MsgDelegateResponse;
                fromAmino(_: _277.MsgDelegateResponseAmino): _277.MsgDelegateResponse;
                toAmino(_: _277.MsgDelegateResponse): _277.MsgDelegateResponseAmino;
                fromAminoMsg(object: _277.MsgDelegateResponseAminoMsg): _277.MsgDelegateResponse;
                toAminoMsg(message: _277.MsgDelegateResponse): _277.MsgDelegateResponseAminoMsg;
                fromProtoMsg(message: _277.MsgDelegateResponseProtoMsg): _277.MsgDelegateResponse;
                toProto(message: _277.MsgDelegateResponse): Uint8Array;
                toProtoMsg(message: _277.MsgDelegateResponse): _277.MsgDelegateResponseProtoMsg;
            };
            MsgBeginRedelegate: {
                encode(message: _277.MsgBeginRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgBeginRedelegate;
                fromJSON(object: any): _277.MsgBeginRedelegate;
                toJSON(message: _277.MsgBeginRedelegate): unknown;
                fromPartial(object: Partial<_277.MsgBeginRedelegate>): _277.MsgBeginRedelegate;
                fromAmino(object: _277.MsgBeginRedelegateAmino): _277.MsgBeginRedelegate;
                toAmino(message: _277.MsgBeginRedelegate): _277.MsgBeginRedelegateAmino;
                fromAminoMsg(object: _277.MsgBeginRedelegateAminoMsg): _277.MsgBeginRedelegate;
                toAminoMsg(message: _277.MsgBeginRedelegate): _277.MsgBeginRedelegateAminoMsg;
                fromProtoMsg(message: _277.MsgBeginRedelegateProtoMsg): _277.MsgBeginRedelegate;
                toProto(message: _277.MsgBeginRedelegate): Uint8Array;
                toProtoMsg(message: _277.MsgBeginRedelegate): _277.MsgBeginRedelegateProtoMsg;
            };
            MsgBeginRedelegateResponse: {
                encode(message: _277.MsgBeginRedelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgBeginRedelegateResponse;
                fromJSON(object: any): _277.MsgBeginRedelegateResponse;
                toJSON(message: _277.MsgBeginRedelegateResponse): unknown;
                fromPartial(object: Partial<_277.MsgBeginRedelegateResponse>): _277.MsgBeginRedelegateResponse;
                fromAmino(object: _277.MsgBeginRedelegateResponseAmino): _277.MsgBeginRedelegateResponse;
                toAmino(message: _277.MsgBeginRedelegateResponse): _277.MsgBeginRedelegateResponseAmino;
                fromAminoMsg(object: _277.MsgBeginRedelegateResponseAminoMsg): _277.MsgBeginRedelegateResponse;
                toAminoMsg(message: _277.MsgBeginRedelegateResponse): _277.MsgBeginRedelegateResponseAminoMsg;
                fromProtoMsg(message: _277.MsgBeginRedelegateResponseProtoMsg): _277.MsgBeginRedelegateResponse;
                toProto(message: _277.MsgBeginRedelegateResponse): Uint8Array;
                toProtoMsg(message: _277.MsgBeginRedelegateResponse): _277.MsgBeginRedelegateResponseProtoMsg;
            };
            MsgUndelegate: {
                encode(message: _277.MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgUndelegate;
                fromJSON(object: any): _277.MsgUndelegate;
                toJSON(message: _277.MsgUndelegate): unknown;
                fromPartial(object: Partial<_277.MsgUndelegate>): _277.MsgUndelegate;
                fromAmino(object: _277.MsgUndelegateAmino): _277.MsgUndelegate;
                toAmino(message: _277.MsgUndelegate): _277.MsgUndelegateAmino;
                fromAminoMsg(object: _277.MsgUndelegateAminoMsg): _277.MsgUndelegate;
                toAminoMsg(message: _277.MsgUndelegate): _277.MsgUndelegateAminoMsg;
                fromProtoMsg(message: _277.MsgUndelegateProtoMsg): _277.MsgUndelegate;
                toProto(message: _277.MsgUndelegate): Uint8Array;
                toProtoMsg(message: _277.MsgUndelegate): _277.MsgUndelegateProtoMsg;
            };
            MsgUndelegateResponse: {
                encode(message: _277.MsgUndelegateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _277.MsgUndelegateResponse;
                fromJSON(object: any): _277.MsgUndelegateResponse;
                toJSON(message: _277.MsgUndelegateResponse): unknown;
                fromPartial(object: Partial<_277.MsgUndelegateResponse>): _277.MsgUndelegateResponse;
                fromAmino(object: _277.MsgUndelegateResponseAmino): _277.MsgUndelegateResponse;
                toAmino(message: _277.MsgUndelegateResponse): _277.MsgUndelegateResponseAmino;
                fromAminoMsg(object: _277.MsgUndelegateResponseAminoMsg): _277.MsgUndelegateResponse;
                toAminoMsg(message: _277.MsgUndelegateResponse): _277.MsgUndelegateResponseAminoMsg;
                fromProtoMsg(message: _277.MsgUndelegateResponseProtoMsg): _277.MsgUndelegateResponse;
                toProto(message: _277.MsgUndelegateResponse): Uint8Array;
                toProtoMsg(message: _277.MsgUndelegateResponse): _277.MsgUndelegateResponseProtoMsg;
            };
            bondStatusFromJSON(object: any): _276.BondStatus;
            bondStatusToJSON(object: _276.BondStatus): string;
            BondStatus: typeof _276.BondStatus;
            BondStatusSDKType: typeof _276.BondStatus;
            BondStatusAmino: typeof _276.BondStatus;
            HistoricalInfo: {
                encode(message: _276.HistoricalInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.HistoricalInfo;
                fromJSON(object: any): _276.HistoricalInfo;
                toJSON(message: _276.HistoricalInfo): unknown;
                fromPartial(object: Partial<_276.HistoricalInfo>): _276.HistoricalInfo;
                fromAmino(object: _276.HistoricalInfoAmino): _276.HistoricalInfo;
                toAmino(message: _276.HistoricalInfo): _276.HistoricalInfoAmino;
                fromAminoMsg(object: _276.HistoricalInfoAminoMsg): _276.HistoricalInfo;
                toAminoMsg(message: _276.HistoricalInfo): _276.HistoricalInfoAminoMsg;
                fromProtoMsg(message: _276.HistoricalInfoProtoMsg): _276.HistoricalInfo;
                toProto(message: _276.HistoricalInfo): Uint8Array;
                toProtoMsg(message: _276.HistoricalInfo): _276.HistoricalInfoProtoMsg;
            };
            CommissionRates: {
                encode(message: _276.CommissionRates, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.CommissionRates;
                fromJSON(object: any): _276.CommissionRates;
                toJSON(message: _276.CommissionRates): unknown;
                fromPartial(object: Partial<_276.CommissionRates>): _276.CommissionRates;
                fromAmino(object: _276.CommissionRatesAmino): _276.CommissionRates;
                toAmino(message: _276.CommissionRates): _276.CommissionRatesAmino;
                fromAminoMsg(object: _276.CommissionRatesAminoMsg): _276.CommissionRates;
                toAminoMsg(message: _276.CommissionRates): _276.CommissionRatesAminoMsg;
                fromProtoMsg(message: _276.CommissionRatesProtoMsg): _276.CommissionRates;
                toProto(message: _276.CommissionRates): Uint8Array;
                toProtoMsg(message: _276.CommissionRates): _276.CommissionRatesProtoMsg;
            };
            Commission: {
                encode(message: _276.Commission, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Commission;
                fromJSON(object: any): _276.Commission;
                toJSON(message: _276.Commission): unknown;
                fromPartial(object: Partial<_276.Commission>): _276.Commission;
                fromAmino(object: _276.CommissionAmino): _276.Commission;
                toAmino(message: _276.Commission): _276.CommissionAmino;
                fromAminoMsg(object: _276.CommissionAminoMsg): _276.Commission;
                toAminoMsg(message: _276.Commission): _276.CommissionAminoMsg;
                fromProtoMsg(message: _276.CommissionProtoMsg): _276.Commission;
                toProto(message: _276.Commission): Uint8Array;
                toProtoMsg(message: _276.Commission): _276.CommissionProtoMsg;
            };
            Description: {
                encode(message: _276.Description, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Description;
                fromJSON(object: any): _276.Description;
                toJSON(message: _276.Description): unknown;
                fromPartial(object: Partial<_276.Description>): _276.Description;
                fromAmino(object: _276.DescriptionAmino): _276.Description;
                toAmino(message: _276.Description): _276.DescriptionAmino;
                fromAminoMsg(object: _276.DescriptionAminoMsg): _276.Description;
                toAminoMsg(message: _276.Description): _276.DescriptionAminoMsg;
                fromProtoMsg(message: _276.DescriptionProtoMsg): _276.Description;
                toProto(message: _276.Description): Uint8Array;
                toProtoMsg(message: _276.Description): _276.DescriptionProtoMsg;
            };
            Validator: {
                encode(message: _276.Validator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Validator;
                fromJSON(object: any): _276.Validator;
                toJSON(message: _276.Validator): unknown;
                fromPartial(object: Partial<_276.Validator>): _276.Validator;
                fromAmino(object: _276.ValidatorAmino): _276.Validator;
                toAmino(message: _276.Validator): _276.ValidatorAmino;
                fromAminoMsg(object: _276.ValidatorAminoMsg): _276.Validator;
                toAminoMsg(message: _276.Validator): _276.ValidatorAminoMsg;
                fromProtoMsg(message: _276.ValidatorProtoMsg): _276.Validator;
                toProto(message: _276.Validator): Uint8Array;
                toProtoMsg(message: _276.Validator): _276.ValidatorProtoMsg;
            };
            ValAddresses: {
                encode(message: _276.ValAddresses, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.ValAddresses;
                fromJSON(object: any): _276.ValAddresses;
                toJSON(message: _276.ValAddresses): unknown;
                fromPartial(object: Partial<_276.ValAddresses>): _276.ValAddresses;
                fromAmino(object: _276.ValAddressesAmino): _276.ValAddresses;
                toAmino(message: _276.ValAddresses): _276.ValAddressesAmino;
                fromAminoMsg(object: _276.ValAddressesAminoMsg): _276.ValAddresses;
                toAminoMsg(message: _276.ValAddresses): _276.ValAddressesAminoMsg;
                fromProtoMsg(message: _276.ValAddressesProtoMsg): _276.ValAddresses;
                toProto(message: _276.ValAddresses): Uint8Array;
                toProtoMsg(message: _276.ValAddresses): _276.ValAddressesProtoMsg;
            };
            DVPair: {
                encode(message: _276.DVPair, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DVPair;
                fromJSON(object: any): _276.DVPair;
                toJSON(message: _276.DVPair): unknown;
                fromPartial(object: Partial<_276.DVPair>): _276.DVPair;
                fromAmino(object: _276.DVPairAmino): _276.DVPair;
                toAmino(message: _276.DVPair): _276.DVPairAmino;
                fromAminoMsg(object: _276.DVPairAminoMsg): _276.DVPair;
                toAminoMsg(message: _276.DVPair): _276.DVPairAminoMsg;
                fromProtoMsg(message: _276.DVPairProtoMsg): _276.DVPair;
                toProto(message: _276.DVPair): Uint8Array;
                toProtoMsg(message: _276.DVPair): _276.DVPairProtoMsg;
            };
            DVPairs: {
                encode(message: _276.DVPairs, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DVPairs;
                fromJSON(object: any): _276.DVPairs;
                toJSON(message: _276.DVPairs): unknown;
                fromPartial(object: Partial<_276.DVPairs>): _276.DVPairs;
                fromAmino(object: _276.DVPairsAmino): _276.DVPairs;
                toAmino(message: _276.DVPairs): _276.DVPairsAmino;
                fromAminoMsg(object: _276.DVPairsAminoMsg): _276.DVPairs;
                toAminoMsg(message: _276.DVPairs): _276.DVPairsAminoMsg;
                fromProtoMsg(message: _276.DVPairsProtoMsg): _276.DVPairs;
                toProto(message: _276.DVPairs): Uint8Array;
                toProtoMsg(message: _276.DVPairs): _276.DVPairsProtoMsg;
            };
            DVVTriplet: {
                encode(message: _276.DVVTriplet, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DVVTriplet;
                fromJSON(object: any): _276.DVVTriplet;
                toJSON(message: _276.DVVTriplet): unknown;
                fromPartial(object: Partial<_276.DVVTriplet>): _276.DVVTriplet;
                fromAmino(object: _276.DVVTripletAmino): _276.DVVTriplet;
                toAmino(message: _276.DVVTriplet): _276.DVVTripletAmino;
                fromAminoMsg(object: _276.DVVTripletAminoMsg): _276.DVVTriplet;
                toAminoMsg(message: _276.DVVTriplet): _276.DVVTripletAminoMsg;
                fromProtoMsg(message: _276.DVVTripletProtoMsg): _276.DVVTriplet;
                toProto(message: _276.DVVTriplet): Uint8Array;
                toProtoMsg(message: _276.DVVTriplet): _276.DVVTripletProtoMsg;
            };
            DVVTriplets: {
                encode(message: _276.DVVTriplets, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DVVTriplets;
                fromJSON(object: any): _276.DVVTriplets;
                toJSON(message: _276.DVVTriplets): unknown;
                fromPartial(object: Partial<_276.DVVTriplets>): _276.DVVTriplets;
                fromAmino(object: _276.DVVTripletsAmino): _276.DVVTriplets;
                toAmino(message: _276.DVVTriplets): _276.DVVTripletsAmino;
                fromAminoMsg(object: _276.DVVTripletsAminoMsg): _276.DVVTriplets;
                toAminoMsg(message: _276.DVVTriplets): _276.DVVTripletsAminoMsg;
                fromProtoMsg(message: _276.DVVTripletsProtoMsg): _276.DVVTriplets;
                toProto(message: _276.DVVTriplets): Uint8Array;
                toProtoMsg(message: _276.DVVTriplets): _276.DVVTripletsProtoMsg;
            };
            Delegation: {
                encode(message: _276.Delegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Delegation;
                fromJSON(object: any): _276.Delegation;
                toJSON(message: _276.Delegation): unknown;
                fromPartial(object: Partial<_276.Delegation>): _276.Delegation;
                fromAmino(object: _276.DelegationAmino): _276.Delegation;
                toAmino(message: _276.Delegation): _276.DelegationAmino;
                fromAminoMsg(object: _276.DelegationAminoMsg): _276.Delegation;
                toAminoMsg(message: _276.Delegation): _276.DelegationAminoMsg;
                fromProtoMsg(message: _276.DelegationProtoMsg): _276.Delegation;
                toProto(message: _276.Delegation): Uint8Array;
                toProtoMsg(message: _276.Delegation): _276.DelegationProtoMsg;
            };
            UnbondingDelegation: {
                encode(message: _276.UnbondingDelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.UnbondingDelegation;
                fromJSON(object: any): _276.UnbondingDelegation;
                toJSON(message: _276.UnbondingDelegation): unknown;
                fromPartial(object: Partial<_276.UnbondingDelegation>): _276.UnbondingDelegation;
                fromAmino(object: _276.UnbondingDelegationAmino): _276.UnbondingDelegation;
                toAmino(message: _276.UnbondingDelegation): _276.UnbondingDelegationAmino;
                fromAminoMsg(object: _276.UnbondingDelegationAminoMsg): _276.UnbondingDelegation;
                toAminoMsg(message: _276.UnbondingDelegation): _276.UnbondingDelegationAminoMsg;
                fromProtoMsg(message: _276.UnbondingDelegationProtoMsg): _276.UnbondingDelegation;
                toProto(message: _276.UnbondingDelegation): Uint8Array;
                toProtoMsg(message: _276.UnbondingDelegation): _276.UnbondingDelegationProtoMsg;
            };
            UnbondingDelegationEntry: {
                encode(message: _276.UnbondingDelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.UnbondingDelegationEntry;
                fromJSON(object: any): _276.UnbondingDelegationEntry;
                toJSON(message: _276.UnbondingDelegationEntry): unknown;
                fromPartial(object: Partial<_276.UnbondingDelegationEntry>): _276.UnbondingDelegationEntry;
                fromAmino(object: _276.UnbondingDelegationEntryAmino): _276.UnbondingDelegationEntry;
                toAmino(message: _276.UnbondingDelegationEntry): _276.UnbondingDelegationEntryAmino;
                fromAminoMsg(object: _276.UnbondingDelegationEntryAminoMsg): _276.UnbondingDelegationEntry;
                toAminoMsg(message: _276.UnbondingDelegationEntry): _276.UnbondingDelegationEntryAminoMsg;
                fromProtoMsg(message: _276.UnbondingDelegationEntryProtoMsg): _276.UnbondingDelegationEntry;
                toProto(message: _276.UnbondingDelegationEntry): Uint8Array;
                toProtoMsg(message: _276.UnbondingDelegationEntry): _276.UnbondingDelegationEntryProtoMsg;
            };
            RedelegationEntry: {
                encode(message: _276.RedelegationEntry, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RedelegationEntry;
                fromJSON(object: any): _276.RedelegationEntry;
                toJSON(message: _276.RedelegationEntry): unknown;
                fromPartial(object: Partial<_276.RedelegationEntry>): _276.RedelegationEntry;
                fromAmino(object: _276.RedelegationEntryAmino): _276.RedelegationEntry;
                toAmino(message: _276.RedelegationEntry): _276.RedelegationEntryAmino;
                fromAminoMsg(object: _276.RedelegationEntryAminoMsg): _276.RedelegationEntry;
                toAminoMsg(message: _276.RedelegationEntry): _276.RedelegationEntryAminoMsg;
                fromProtoMsg(message: _276.RedelegationEntryProtoMsg): _276.RedelegationEntry;
                toProto(message: _276.RedelegationEntry): Uint8Array;
                toProtoMsg(message: _276.RedelegationEntry): _276.RedelegationEntryProtoMsg;
            };
            Redelegation: {
                encode(message: _276.Redelegation, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Redelegation;
                fromJSON(object: any): _276.Redelegation;
                toJSON(message: _276.Redelegation): unknown;
                fromPartial(object: Partial<_276.Redelegation>): _276.Redelegation;
                fromAmino(object: _276.RedelegationAmino): _276.Redelegation;
                toAmino(message: _276.Redelegation): _276.RedelegationAmino;
                fromAminoMsg(object: _276.RedelegationAminoMsg): _276.Redelegation;
                toAminoMsg(message: _276.Redelegation): _276.RedelegationAminoMsg;
                fromProtoMsg(message: _276.RedelegationProtoMsg): _276.Redelegation;
                toProto(message: _276.Redelegation): Uint8Array;
                toProtoMsg(message: _276.Redelegation): _276.RedelegationProtoMsg;
            };
            Params: {
                encode(message: _276.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Params;
                fromJSON(object: any): _276.Params;
                toJSON(message: _276.Params): unknown;
                fromPartial(object: Partial<_276.Params>): _276.Params;
                fromAmino(object: _276.ParamsAmino): _276.Params;
                toAmino(message: _276.Params): _276.ParamsAmino;
                fromAminoMsg(object: _276.ParamsAminoMsg): _276.Params;
                toAminoMsg(message: _276.Params): _276.ParamsAminoMsg;
                fromProtoMsg(message: _276.ParamsProtoMsg): _276.Params;
                toProto(message: _276.Params): Uint8Array;
                toProtoMsg(message: _276.Params): _276.ParamsProtoMsg;
            };
            DelegationResponse: {
                encode(message: _276.DelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.DelegationResponse;
                fromJSON(object: any): _276.DelegationResponse;
                toJSON(message: _276.DelegationResponse): unknown;
                fromPartial(object: Partial<_276.DelegationResponse>): _276.DelegationResponse;
                fromAmino(object: _276.DelegationResponseAmino): _276.DelegationResponse;
                toAmino(message: _276.DelegationResponse): _276.DelegationResponseAmino;
                fromAminoMsg(object: _276.DelegationResponseAminoMsg): _276.DelegationResponse;
                toAminoMsg(message: _276.DelegationResponse): _276.DelegationResponseAminoMsg;
                fromProtoMsg(message: _276.DelegationResponseProtoMsg): _276.DelegationResponse;
                toProto(message: _276.DelegationResponse): Uint8Array;
                toProtoMsg(message: _276.DelegationResponse): _276.DelegationResponseProtoMsg;
            };
            RedelegationEntryResponse: {
                encode(message: _276.RedelegationEntryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RedelegationEntryResponse;
                fromJSON(object: any): _276.RedelegationEntryResponse;
                toJSON(message: _276.RedelegationEntryResponse): unknown;
                fromPartial(object: Partial<_276.RedelegationEntryResponse>): _276.RedelegationEntryResponse;
                fromAmino(object: _276.RedelegationEntryResponseAmino): _276.RedelegationEntryResponse;
                toAmino(message: _276.RedelegationEntryResponse): _276.RedelegationEntryResponseAmino;
                fromAminoMsg(object: _276.RedelegationEntryResponseAminoMsg): _276.RedelegationEntryResponse;
                toAminoMsg(message: _276.RedelegationEntryResponse): _276.RedelegationEntryResponseAminoMsg;
                fromProtoMsg(message: _276.RedelegationEntryResponseProtoMsg): _276.RedelegationEntryResponse;
                toProto(message: _276.RedelegationEntryResponse): Uint8Array;
                toProtoMsg(message: _276.RedelegationEntryResponse): _276.RedelegationEntryResponseProtoMsg;
            };
            RedelegationResponse: {
                encode(message: _276.RedelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.RedelegationResponse;
                fromJSON(object: any): _276.RedelegationResponse;
                toJSON(message: _276.RedelegationResponse): unknown;
                fromPartial(object: Partial<_276.RedelegationResponse>): _276.RedelegationResponse;
                fromAmino(object: _276.RedelegationResponseAmino): _276.RedelegationResponse;
                toAmino(message: _276.RedelegationResponse): _276.RedelegationResponseAmino;
                fromAminoMsg(object: _276.RedelegationResponseAminoMsg): _276.RedelegationResponse;
                toAminoMsg(message: _276.RedelegationResponse): _276.RedelegationResponseAminoMsg;
                fromProtoMsg(message: _276.RedelegationResponseProtoMsg): _276.RedelegationResponse;
                toProto(message: _276.RedelegationResponse): Uint8Array;
                toProtoMsg(message: _276.RedelegationResponse): _276.RedelegationResponseProtoMsg;
            };
            Pool: {
                encode(message: _276.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _276.Pool;
                fromJSON(object: any): _276.Pool;
                toJSON(message: _276.Pool): unknown;
                fromPartial(object: Partial<_276.Pool>): _276.Pool;
                fromAmino(object: _276.PoolAmino): _276.Pool;
                toAmino(message: _276.Pool): _276.PoolAmino;
                fromAminoMsg(object: _276.PoolAminoMsg): _276.Pool;
                toAminoMsg(message: _276.Pool): _276.PoolAminoMsg;
                fromProtoMsg(message: _276.PoolProtoMsg): _276.Pool;
                toProto(message: _276.Pool): Uint8Array;
                toProtoMsg(message: _276.Pool): _276.PoolProtoMsg;
            };
            QueryValidatorsRequest: {
                encode(message: _275.QueryValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorsRequest;
                fromJSON(object: any): _275.QueryValidatorsRequest;
                toJSON(message: _275.QueryValidatorsRequest): unknown;
                fromPartial(object: Partial<_275.QueryValidatorsRequest>): _275.QueryValidatorsRequest;
                fromAmino(object: _275.QueryValidatorsRequestAmino): _275.QueryValidatorsRequest;
                toAmino(message: _275.QueryValidatorsRequest): _275.QueryValidatorsRequestAmino;
                fromAminoMsg(object: _275.QueryValidatorsRequestAminoMsg): _275.QueryValidatorsRequest;
                toAminoMsg(message: _275.QueryValidatorsRequest): _275.QueryValidatorsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorsRequestProtoMsg): _275.QueryValidatorsRequest;
                toProto(message: _275.QueryValidatorsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorsRequest): _275.QueryValidatorsRequestProtoMsg;
            };
            QueryValidatorsResponse: {
                encode(message: _275.QueryValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorsResponse;
                fromJSON(object: any): _275.QueryValidatorsResponse;
                toJSON(message: _275.QueryValidatorsResponse): unknown;
                fromPartial(object: Partial<_275.QueryValidatorsResponse>): _275.QueryValidatorsResponse;
                fromAmino(object: _275.QueryValidatorsResponseAmino): _275.QueryValidatorsResponse;
                toAmino(message: _275.QueryValidatorsResponse): _275.QueryValidatorsResponseAmino;
                fromAminoMsg(object: _275.QueryValidatorsResponseAminoMsg): _275.QueryValidatorsResponse;
                toAminoMsg(message: _275.QueryValidatorsResponse): _275.QueryValidatorsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorsResponseProtoMsg): _275.QueryValidatorsResponse;
                toProto(message: _275.QueryValidatorsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorsResponse): _275.QueryValidatorsResponseProtoMsg;
            };
            QueryValidatorRequest: {
                encode(message: _275.QueryValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorRequest;
                fromJSON(object: any): _275.QueryValidatorRequest;
                toJSON(message: _275.QueryValidatorRequest): unknown;
                fromPartial(object: Partial<_275.QueryValidatorRequest>): _275.QueryValidatorRequest;
                fromAmino(object: _275.QueryValidatorRequestAmino): _275.QueryValidatorRequest;
                toAmino(message: _275.QueryValidatorRequest): _275.QueryValidatorRequestAmino;
                fromAminoMsg(object: _275.QueryValidatorRequestAminoMsg): _275.QueryValidatorRequest;
                toAminoMsg(message: _275.QueryValidatorRequest): _275.QueryValidatorRequestAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorRequestProtoMsg): _275.QueryValidatorRequest;
                toProto(message: _275.QueryValidatorRequest): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorRequest): _275.QueryValidatorRequestProtoMsg;
            };
            QueryValidatorResponse: {
                encode(message: _275.QueryValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorResponse;
                fromJSON(object: any): _275.QueryValidatorResponse;
                toJSON(message: _275.QueryValidatorResponse): unknown;
                fromPartial(object: Partial<_275.QueryValidatorResponse>): _275.QueryValidatorResponse;
                fromAmino(object: _275.QueryValidatorResponseAmino): _275.QueryValidatorResponse;
                toAmino(message: _275.QueryValidatorResponse): _275.QueryValidatorResponseAmino;
                fromAminoMsg(object: _275.QueryValidatorResponseAminoMsg): _275.QueryValidatorResponse;
                toAminoMsg(message: _275.QueryValidatorResponse): _275.QueryValidatorResponseAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorResponseProtoMsg): _275.QueryValidatorResponse;
                toProto(message: _275.QueryValidatorResponse): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorResponse): _275.QueryValidatorResponseProtoMsg;
            };
            QueryValidatorDelegationsRequest: {
                encode(message: _275.QueryValidatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorDelegationsRequest;
                fromJSON(object: any): _275.QueryValidatorDelegationsRequest;
                toJSON(message: _275.QueryValidatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_275.QueryValidatorDelegationsRequest>): _275.QueryValidatorDelegationsRequest;
                fromAmino(object: _275.QueryValidatorDelegationsRequestAmino): _275.QueryValidatorDelegationsRequest;
                toAmino(message: _275.QueryValidatorDelegationsRequest): _275.QueryValidatorDelegationsRequestAmino;
                fromAminoMsg(object: _275.QueryValidatorDelegationsRequestAminoMsg): _275.QueryValidatorDelegationsRequest;
                toAminoMsg(message: _275.QueryValidatorDelegationsRequest): _275.QueryValidatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorDelegationsRequestProtoMsg): _275.QueryValidatorDelegationsRequest;
                toProto(message: _275.QueryValidatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorDelegationsRequest): _275.QueryValidatorDelegationsRequestProtoMsg;
            };
            QueryValidatorDelegationsResponse: {
                encode(message: _275.QueryValidatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorDelegationsResponse;
                fromJSON(object: any): _275.QueryValidatorDelegationsResponse;
                toJSON(message: _275.QueryValidatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_275.QueryValidatorDelegationsResponse>): _275.QueryValidatorDelegationsResponse;
                fromAmino(object: _275.QueryValidatorDelegationsResponseAmino): _275.QueryValidatorDelegationsResponse;
                toAmino(message: _275.QueryValidatorDelegationsResponse): _275.QueryValidatorDelegationsResponseAmino;
                fromAminoMsg(object: _275.QueryValidatorDelegationsResponseAminoMsg): _275.QueryValidatorDelegationsResponse;
                toAminoMsg(message: _275.QueryValidatorDelegationsResponse): _275.QueryValidatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorDelegationsResponseProtoMsg): _275.QueryValidatorDelegationsResponse;
                toProto(message: _275.QueryValidatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorDelegationsResponse): _275.QueryValidatorDelegationsResponseProtoMsg;
            };
            QueryValidatorUnbondingDelegationsRequest: {
                encode(message: _275.QueryValidatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorUnbondingDelegationsRequest;
                fromJSON(object: any): _275.QueryValidatorUnbondingDelegationsRequest;
                toJSON(message: _275.QueryValidatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_275.QueryValidatorUnbondingDelegationsRequest>): _275.QueryValidatorUnbondingDelegationsRequest;
                fromAmino(object: _275.QueryValidatorUnbondingDelegationsRequestAmino): _275.QueryValidatorUnbondingDelegationsRequest;
                toAmino(message: _275.QueryValidatorUnbondingDelegationsRequest): _275.QueryValidatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _275.QueryValidatorUnbondingDelegationsRequestAminoMsg): _275.QueryValidatorUnbondingDelegationsRequest;
                toAminoMsg(message: _275.QueryValidatorUnbondingDelegationsRequest): _275.QueryValidatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorUnbondingDelegationsRequestProtoMsg): _275.QueryValidatorUnbondingDelegationsRequest;
                toProto(message: _275.QueryValidatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorUnbondingDelegationsRequest): _275.QueryValidatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryValidatorUnbondingDelegationsResponse: {
                encode(message: _275.QueryValidatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryValidatorUnbondingDelegationsResponse;
                fromJSON(object: any): _275.QueryValidatorUnbondingDelegationsResponse;
                toJSON(message: _275.QueryValidatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_275.QueryValidatorUnbondingDelegationsResponse>): _275.QueryValidatorUnbondingDelegationsResponse;
                fromAmino(object: _275.QueryValidatorUnbondingDelegationsResponseAmino): _275.QueryValidatorUnbondingDelegationsResponse;
                toAmino(message: _275.QueryValidatorUnbondingDelegationsResponse): _275.QueryValidatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _275.QueryValidatorUnbondingDelegationsResponseAminoMsg): _275.QueryValidatorUnbondingDelegationsResponse;
                toAminoMsg(message: _275.QueryValidatorUnbondingDelegationsResponse): _275.QueryValidatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryValidatorUnbondingDelegationsResponseProtoMsg): _275.QueryValidatorUnbondingDelegationsResponse;
                toProto(message: _275.QueryValidatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryValidatorUnbondingDelegationsResponse): _275.QueryValidatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryDelegationRequest: {
                encode(message: _275.QueryDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegationRequest;
                fromJSON(object: any): _275.QueryDelegationRequest;
                toJSON(message: _275.QueryDelegationRequest): unknown;
                fromPartial(object: Partial<_275.QueryDelegationRequest>): _275.QueryDelegationRequest;
                fromAmino(object: _275.QueryDelegationRequestAmino): _275.QueryDelegationRequest;
                toAmino(message: _275.QueryDelegationRequest): _275.QueryDelegationRequestAmino;
                fromAminoMsg(object: _275.QueryDelegationRequestAminoMsg): _275.QueryDelegationRequest;
                toAminoMsg(message: _275.QueryDelegationRequest): _275.QueryDelegationRequestAminoMsg;
                fromProtoMsg(message: _275.QueryDelegationRequestProtoMsg): _275.QueryDelegationRequest;
                toProto(message: _275.QueryDelegationRequest): Uint8Array;
                toProtoMsg(message: _275.QueryDelegationRequest): _275.QueryDelegationRequestProtoMsg;
            };
            QueryDelegationResponse: {
                encode(message: _275.QueryDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegationResponse;
                fromJSON(object: any): _275.QueryDelegationResponse;
                toJSON(message: _275.QueryDelegationResponse): unknown;
                fromPartial(object: Partial<_275.QueryDelegationResponse>): _275.QueryDelegationResponse;
                fromAmino(object: _275.QueryDelegationResponseAmino): _275.QueryDelegationResponse;
                toAmino(message: _275.QueryDelegationResponse): _275.QueryDelegationResponseAmino;
                fromAminoMsg(object: _275.QueryDelegationResponseAminoMsg): _275.QueryDelegationResponse;
                toAminoMsg(message: _275.QueryDelegationResponse): _275.QueryDelegationResponseAminoMsg;
                fromProtoMsg(message: _275.QueryDelegationResponseProtoMsg): _275.QueryDelegationResponse;
                toProto(message: _275.QueryDelegationResponse): Uint8Array;
                toProtoMsg(message: _275.QueryDelegationResponse): _275.QueryDelegationResponseProtoMsg;
            };
            QueryUnbondingDelegationRequest: {
                encode(message: _275.QueryUnbondingDelegationRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryUnbondingDelegationRequest;
                fromJSON(object: any): _275.QueryUnbondingDelegationRequest;
                toJSON(message: _275.QueryUnbondingDelegationRequest): unknown;
                fromPartial(object: Partial<_275.QueryUnbondingDelegationRequest>): _275.QueryUnbondingDelegationRequest;
                fromAmino(object: _275.QueryUnbondingDelegationRequestAmino): _275.QueryUnbondingDelegationRequest;
                toAmino(message: _275.QueryUnbondingDelegationRequest): _275.QueryUnbondingDelegationRequestAmino;
                fromAminoMsg(object: _275.QueryUnbondingDelegationRequestAminoMsg): _275.QueryUnbondingDelegationRequest;
                toAminoMsg(message: _275.QueryUnbondingDelegationRequest): _275.QueryUnbondingDelegationRequestAminoMsg;
                fromProtoMsg(message: _275.QueryUnbondingDelegationRequestProtoMsg): _275.QueryUnbondingDelegationRequest;
                toProto(message: _275.QueryUnbondingDelegationRequest): Uint8Array;
                toProtoMsg(message: _275.QueryUnbondingDelegationRequest): _275.QueryUnbondingDelegationRequestProtoMsg;
            };
            QueryUnbondingDelegationResponse: {
                encode(message: _275.QueryUnbondingDelegationResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryUnbondingDelegationResponse;
                fromJSON(object: any): _275.QueryUnbondingDelegationResponse;
                toJSON(message: _275.QueryUnbondingDelegationResponse): unknown;
                fromPartial(object: Partial<_275.QueryUnbondingDelegationResponse>): _275.QueryUnbondingDelegationResponse;
                fromAmino(object: _275.QueryUnbondingDelegationResponseAmino): _275.QueryUnbondingDelegationResponse;
                toAmino(message: _275.QueryUnbondingDelegationResponse): _275.QueryUnbondingDelegationResponseAmino;
                fromAminoMsg(object: _275.QueryUnbondingDelegationResponseAminoMsg): _275.QueryUnbondingDelegationResponse;
                toAminoMsg(message: _275.QueryUnbondingDelegationResponse): _275.QueryUnbondingDelegationResponseAminoMsg;
                fromProtoMsg(message: _275.QueryUnbondingDelegationResponseProtoMsg): _275.QueryUnbondingDelegationResponse;
                toProto(message: _275.QueryUnbondingDelegationResponse): Uint8Array;
                toProtoMsg(message: _275.QueryUnbondingDelegationResponse): _275.QueryUnbondingDelegationResponseProtoMsg;
            };
            QueryDelegatorDelegationsRequest: {
                encode(message: _275.QueryDelegatorDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorDelegationsRequest;
                fromJSON(object: any): _275.QueryDelegatorDelegationsRequest;
                toJSON(message: _275.QueryDelegatorDelegationsRequest): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorDelegationsRequest>): _275.QueryDelegatorDelegationsRequest;
                fromAmino(object: _275.QueryDelegatorDelegationsRequestAmino): _275.QueryDelegatorDelegationsRequest;
                toAmino(message: _275.QueryDelegatorDelegationsRequest): _275.QueryDelegatorDelegationsRequestAmino;
                fromAminoMsg(object: _275.QueryDelegatorDelegationsRequestAminoMsg): _275.QueryDelegatorDelegationsRequest;
                toAminoMsg(message: _275.QueryDelegatorDelegationsRequest): _275.QueryDelegatorDelegationsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorDelegationsRequestProtoMsg): _275.QueryDelegatorDelegationsRequest;
                toProto(message: _275.QueryDelegatorDelegationsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorDelegationsRequest): _275.QueryDelegatorDelegationsRequestProtoMsg;
            };
            QueryDelegatorDelegationsResponse: {
                encode(message: _275.QueryDelegatorDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorDelegationsResponse;
                fromJSON(object: any): _275.QueryDelegatorDelegationsResponse;
                toJSON(message: _275.QueryDelegatorDelegationsResponse): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorDelegationsResponse>): _275.QueryDelegatorDelegationsResponse;
                fromAmino(object: _275.QueryDelegatorDelegationsResponseAmino): _275.QueryDelegatorDelegationsResponse;
                toAmino(message: _275.QueryDelegatorDelegationsResponse): _275.QueryDelegatorDelegationsResponseAmino;
                fromAminoMsg(object: _275.QueryDelegatorDelegationsResponseAminoMsg): _275.QueryDelegatorDelegationsResponse;
                toAminoMsg(message: _275.QueryDelegatorDelegationsResponse): _275.QueryDelegatorDelegationsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorDelegationsResponseProtoMsg): _275.QueryDelegatorDelegationsResponse;
                toProto(message: _275.QueryDelegatorDelegationsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorDelegationsResponse): _275.QueryDelegatorDelegationsResponseProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsRequest: {
                encode(message: _275.QueryDelegatorUnbondingDelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorUnbondingDelegationsRequest;
                fromJSON(object: any): _275.QueryDelegatorUnbondingDelegationsRequest;
                toJSON(message: _275.QueryDelegatorUnbondingDelegationsRequest): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorUnbondingDelegationsRequest>): _275.QueryDelegatorUnbondingDelegationsRequest;
                fromAmino(object: _275.QueryDelegatorUnbondingDelegationsRequestAmino): _275.QueryDelegatorUnbondingDelegationsRequest;
                toAmino(message: _275.QueryDelegatorUnbondingDelegationsRequest): _275.QueryDelegatorUnbondingDelegationsRequestAmino;
                fromAminoMsg(object: _275.QueryDelegatorUnbondingDelegationsRequestAminoMsg): _275.QueryDelegatorUnbondingDelegationsRequest;
                toAminoMsg(message: _275.QueryDelegatorUnbondingDelegationsRequest): _275.QueryDelegatorUnbondingDelegationsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorUnbondingDelegationsRequestProtoMsg): _275.QueryDelegatorUnbondingDelegationsRequest;
                toProto(message: _275.QueryDelegatorUnbondingDelegationsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorUnbondingDelegationsRequest): _275.QueryDelegatorUnbondingDelegationsRequestProtoMsg;
            };
            QueryDelegatorUnbondingDelegationsResponse: {
                encode(message: _275.QueryDelegatorUnbondingDelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorUnbondingDelegationsResponse;
                fromJSON(object: any): _275.QueryDelegatorUnbondingDelegationsResponse;
                toJSON(message: _275.QueryDelegatorUnbondingDelegationsResponse): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorUnbondingDelegationsResponse>): _275.QueryDelegatorUnbondingDelegationsResponse;
                fromAmino(object: _275.QueryDelegatorUnbondingDelegationsResponseAmino): _275.QueryDelegatorUnbondingDelegationsResponse;
                toAmino(message: _275.QueryDelegatorUnbondingDelegationsResponse): _275.QueryDelegatorUnbondingDelegationsResponseAmino;
                fromAminoMsg(object: _275.QueryDelegatorUnbondingDelegationsResponseAminoMsg): _275.QueryDelegatorUnbondingDelegationsResponse;
                toAminoMsg(message: _275.QueryDelegatorUnbondingDelegationsResponse): _275.QueryDelegatorUnbondingDelegationsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorUnbondingDelegationsResponseProtoMsg): _275.QueryDelegatorUnbondingDelegationsResponse;
                toProto(message: _275.QueryDelegatorUnbondingDelegationsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorUnbondingDelegationsResponse): _275.QueryDelegatorUnbondingDelegationsResponseProtoMsg;
            };
            QueryRedelegationsRequest: {
                encode(message: _275.QueryRedelegationsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryRedelegationsRequest;
                fromJSON(object: any): _275.QueryRedelegationsRequest;
                toJSON(message: _275.QueryRedelegationsRequest): unknown;
                fromPartial(object: Partial<_275.QueryRedelegationsRequest>): _275.QueryRedelegationsRequest;
                fromAmino(object: _275.QueryRedelegationsRequestAmino): _275.QueryRedelegationsRequest;
                toAmino(message: _275.QueryRedelegationsRequest): _275.QueryRedelegationsRequestAmino;
                fromAminoMsg(object: _275.QueryRedelegationsRequestAminoMsg): _275.QueryRedelegationsRequest;
                toAminoMsg(message: _275.QueryRedelegationsRequest): _275.QueryRedelegationsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryRedelegationsRequestProtoMsg): _275.QueryRedelegationsRequest;
                toProto(message: _275.QueryRedelegationsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryRedelegationsRequest): _275.QueryRedelegationsRequestProtoMsg;
            };
            QueryRedelegationsResponse: {
                encode(message: _275.QueryRedelegationsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryRedelegationsResponse;
                fromJSON(object: any): _275.QueryRedelegationsResponse;
                toJSON(message: _275.QueryRedelegationsResponse): unknown;
                fromPartial(object: Partial<_275.QueryRedelegationsResponse>): _275.QueryRedelegationsResponse;
                fromAmino(object: _275.QueryRedelegationsResponseAmino): _275.QueryRedelegationsResponse;
                toAmino(message: _275.QueryRedelegationsResponse): _275.QueryRedelegationsResponseAmino;
                fromAminoMsg(object: _275.QueryRedelegationsResponseAminoMsg): _275.QueryRedelegationsResponse;
                toAminoMsg(message: _275.QueryRedelegationsResponse): _275.QueryRedelegationsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryRedelegationsResponseProtoMsg): _275.QueryRedelegationsResponse;
                toProto(message: _275.QueryRedelegationsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryRedelegationsResponse): _275.QueryRedelegationsResponseProtoMsg;
            };
            QueryDelegatorValidatorsRequest: {
                encode(message: _275.QueryDelegatorValidatorsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorValidatorsRequest;
                fromJSON(object: any): _275.QueryDelegatorValidatorsRequest;
                toJSON(message: _275.QueryDelegatorValidatorsRequest): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorValidatorsRequest>): _275.QueryDelegatorValidatorsRequest;
                fromAmino(object: _275.QueryDelegatorValidatorsRequestAmino): _275.QueryDelegatorValidatorsRequest;
                toAmino(message: _275.QueryDelegatorValidatorsRequest): _275.QueryDelegatorValidatorsRequestAmino;
                fromAminoMsg(object: _275.QueryDelegatorValidatorsRequestAminoMsg): _275.QueryDelegatorValidatorsRequest;
                toAminoMsg(message: _275.QueryDelegatorValidatorsRequest): _275.QueryDelegatorValidatorsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorValidatorsRequestProtoMsg): _275.QueryDelegatorValidatorsRequest;
                toProto(message: _275.QueryDelegatorValidatorsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorValidatorsRequest): _275.QueryDelegatorValidatorsRequestProtoMsg;
            };
            QueryDelegatorValidatorsResponse: {
                encode(message: _275.QueryDelegatorValidatorsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorValidatorsResponse;
                fromJSON(object: any): _275.QueryDelegatorValidatorsResponse;
                toJSON(message: _275.QueryDelegatorValidatorsResponse): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorValidatorsResponse>): _275.QueryDelegatorValidatorsResponse;
                fromAmino(object: _275.QueryDelegatorValidatorsResponseAmino): _275.QueryDelegatorValidatorsResponse;
                toAmino(message: _275.QueryDelegatorValidatorsResponse): _275.QueryDelegatorValidatorsResponseAmino;
                fromAminoMsg(object: _275.QueryDelegatorValidatorsResponseAminoMsg): _275.QueryDelegatorValidatorsResponse;
                toAminoMsg(message: _275.QueryDelegatorValidatorsResponse): _275.QueryDelegatorValidatorsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorValidatorsResponseProtoMsg): _275.QueryDelegatorValidatorsResponse;
                toProto(message: _275.QueryDelegatorValidatorsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorValidatorsResponse): _275.QueryDelegatorValidatorsResponseProtoMsg;
            };
            QueryDelegatorValidatorRequest: {
                encode(message: _275.QueryDelegatorValidatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorValidatorRequest;
                fromJSON(object: any): _275.QueryDelegatorValidatorRequest;
                toJSON(message: _275.QueryDelegatorValidatorRequest): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorValidatorRequest>): _275.QueryDelegatorValidatorRequest;
                fromAmino(object: _275.QueryDelegatorValidatorRequestAmino): _275.QueryDelegatorValidatorRequest;
                toAmino(message: _275.QueryDelegatorValidatorRequest): _275.QueryDelegatorValidatorRequestAmino;
                fromAminoMsg(object: _275.QueryDelegatorValidatorRequestAminoMsg): _275.QueryDelegatorValidatorRequest;
                toAminoMsg(message: _275.QueryDelegatorValidatorRequest): _275.QueryDelegatorValidatorRequestAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorValidatorRequestProtoMsg): _275.QueryDelegatorValidatorRequest;
                toProto(message: _275.QueryDelegatorValidatorRequest): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorValidatorRequest): _275.QueryDelegatorValidatorRequestProtoMsg;
            };
            QueryDelegatorValidatorResponse: {
                encode(message: _275.QueryDelegatorValidatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryDelegatorValidatorResponse;
                fromJSON(object: any): _275.QueryDelegatorValidatorResponse;
                toJSON(message: _275.QueryDelegatorValidatorResponse): unknown;
                fromPartial(object: Partial<_275.QueryDelegatorValidatorResponse>): _275.QueryDelegatorValidatorResponse;
                fromAmino(object: _275.QueryDelegatorValidatorResponseAmino): _275.QueryDelegatorValidatorResponse;
                toAmino(message: _275.QueryDelegatorValidatorResponse): _275.QueryDelegatorValidatorResponseAmino;
                fromAminoMsg(object: _275.QueryDelegatorValidatorResponseAminoMsg): _275.QueryDelegatorValidatorResponse;
                toAminoMsg(message: _275.QueryDelegatorValidatorResponse): _275.QueryDelegatorValidatorResponseAminoMsg;
                fromProtoMsg(message: _275.QueryDelegatorValidatorResponseProtoMsg): _275.QueryDelegatorValidatorResponse;
                toProto(message: _275.QueryDelegatorValidatorResponse): Uint8Array;
                toProtoMsg(message: _275.QueryDelegatorValidatorResponse): _275.QueryDelegatorValidatorResponseProtoMsg;
            };
            QueryHistoricalInfoRequest: {
                encode(message: _275.QueryHistoricalInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryHistoricalInfoRequest;
                fromJSON(object: any): _275.QueryHistoricalInfoRequest;
                toJSON(message: _275.QueryHistoricalInfoRequest): unknown;
                fromPartial(object: Partial<_275.QueryHistoricalInfoRequest>): _275.QueryHistoricalInfoRequest;
                fromAmino(object: _275.QueryHistoricalInfoRequestAmino): _275.QueryHistoricalInfoRequest;
                toAmino(message: _275.QueryHistoricalInfoRequest): _275.QueryHistoricalInfoRequestAmino;
                fromAminoMsg(object: _275.QueryHistoricalInfoRequestAminoMsg): _275.QueryHistoricalInfoRequest;
                toAminoMsg(message: _275.QueryHistoricalInfoRequest): _275.QueryHistoricalInfoRequestAminoMsg;
                fromProtoMsg(message: _275.QueryHistoricalInfoRequestProtoMsg): _275.QueryHistoricalInfoRequest;
                toProto(message: _275.QueryHistoricalInfoRequest): Uint8Array;
                toProtoMsg(message: _275.QueryHistoricalInfoRequest): _275.QueryHistoricalInfoRequestProtoMsg;
            };
            QueryHistoricalInfoResponse: {
                encode(message: _275.QueryHistoricalInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryHistoricalInfoResponse;
                fromJSON(object: any): _275.QueryHistoricalInfoResponse;
                toJSON(message: _275.QueryHistoricalInfoResponse): unknown;
                fromPartial(object: Partial<_275.QueryHistoricalInfoResponse>): _275.QueryHistoricalInfoResponse;
                fromAmino(object: _275.QueryHistoricalInfoResponseAmino): _275.QueryHistoricalInfoResponse;
                toAmino(message: _275.QueryHistoricalInfoResponse): _275.QueryHistoricalInfoResponseAmino;
                fromAminoMsg(object: _275.QueryHistoricalInfoResponseAminoMsg): _275.QueryHistoricalInfoResponse;
                toAminoMsg(message: _275.QueryHistoricalInfoResponse): _275.QueryHistoricalInfoResponseAminoMsg;
                fromProtoMsg(message: _275.QueryHistoricalInfoResponseProtoMsg): _275.QueryHistoricalInfoResponse;
                toProto(message: _275.QueryHistoricalInfoResponse): Uint8Array;
                toProtoMsg(message: _275.QueryHistoricalInfoResponse): _275.QueryHistoricalInfoResponseProtoMsg;
            };
            QueryPoolRequest: {
                encode(_: _275.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryPoolRequest;
                fromJSON(_: any): _275.QueryPoolRequest;
                toJSON(_: _275.QueryPoolRequest): unknown;
                fromPartial(_: Partial<_275.QueryPoolRequest>): _275.QueryPoolRequest;
                fromAmino(_: _275.QueryPoolRequestAmino): _275.QueryPoolRequest;
                toAmino(_: _275.QueryPoolRequest): _275.QueryPoolRequestAmino;
                fromAminoMsg(object: _275.QueryPoolRequestAminoMsg): _275.QueryPoolRequest;
                toAminoMsg(message: _275.QueryPoolRequest): _275.QueryPoolRequestAminoMsg;
                fromProtoMsg(message: _275.QueryPoolRequestProtoMsg): _275.QueryPoolRequest;
                toProto(message: _275.QueryPoolRequest): Uint8Array;
                toProtoMsg(message: _275.QueryPoolRequest): _275.QueryPoolRequestProtoMsg;
            };
            QueryPoolResponse: {
                encode(message: _275.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryPoolResponse;
                fromJSON(object: any): _275.QueryPoolResponse;
                toJSON(message: _275.QueryPoolResponse): unknown;
                fromPartial(object: Partial<_275.QueryPoolResponse>): _275.QueryPoolResponse;
                fromAmino(object: _275.QueryPoolResponseAmino): _275.QueryPoolResponse;
                toAmino(message: _275.QueryPoolResponse): _275.QueryPoolResponseAmino;
                fromAminoMsg(object: _275.QueryPoolResponseAminoMsg): _275.QueryPoolResponse;
                toAminoMsg(message: _275.QueryPoolResponse): _275.QueryPoolResponseAminoMsg;
                fromProtoMsg(message: _275.QueryPoolResponseProtoMsg): _275.QueryPoolResponse;
                toProto(message: _275.QueryPoolResponse): Uint8Array;
                toProtoMsg(message: _275.QueryPoolResponse): _275.QueryPoolResponseProtoMsg;
            };
            QueryParamsRequest: {
                encode(_: _275.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryParamsRequest;
                fromJSON(_: any): _275.QueryParamsRequest;
                toJSON(_: _275.QueryParamsRequest): unknown;
                fromPartial(_: Partial<_275.QueryParamsRequest>): _275.QueryParamsRequest;
                fromAmino(_: _275.QueryParamsRequestAmino): _275.QueryParamsRequest;
                toAmino(_: _275.QueryParamsRequest): _275.QueryParamsRequestAmino;
                fromAminoMsg(object: _275.QueryParamsRequestAminoMsg): _275.QueryParamsRequest;
                toAminoMsg(message: _275.QueryParamsRequest): _275.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _275.QueryParamsRequestProtoMsg): _275.QueryParamsRequest;
                toProto(message: _275.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _275.QueryParamsRequest): _275.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                encode(message: _275.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _275.QueryParamsResponse;
                fromJSON(object: any): _275.QueryParamsResponse;
                toJSON(message: _275.QueryParamsResponse): unknown;
                fromPartial(object: Partial<_275.QueryParamsResponse>): _275.QueryParamsResponse;
                fromAmino(object: _275.QueryParamsResponseAmino): _275.QueryParamsResponse;
                toAmino(message: _275.QueryParamsResponse): _275.QueryParamsResponseAmino;
                fromAminoMsg(object: _275.QueryParamsResponseAminoMsg): _275.QueryParamsResponse;
                toAminoMsg(message: _275.QueryParamsResponse): _275.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _275.QueryParamsResponseProtoMsg): _275.QueryParamsResponse;
                toProto(message: _275.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _275.QueryParamsResponse): _275.QueryParamsResponseProtoMsg;
            };
            GenesisState: {
                encode(message: _274.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.GenesisState;
                fromJSON(object: any): _274.GenesisState;
                toJSON(message: _274.GenesisState): unknown;
                fromPartial(object: Partial<_274.GenesisState>): _274.GenesisState;
                fromAmino(object: _274.GenesisStateAmino): _274.GenesisState;
                toAmino(message: _274.GenesisState): _274.GenesisStateAmino;
                fromAminoMsg(object: _274.GenesisStateAminoMsg): _274.GenesisState;
                toAminoMsg(message: _274.GenesisState): _274.GenesisStateAminoMsg;
                fromProtoMsg(message: _274.GenesisStateProtoMsg): _274.GenesisState;
                toProto(message: _274.GenesisState): Uint8Array;
                toProtoMsg(message: _274.GenesisState): _274.GenesisStateProtoMsg;
            };
            LastValidatorPower: {
                encode(message: _274.LastValidatorPower, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _274.LastValidatorPower;
                fromJSON(object: any): _274.LastValidatorPower;
                toJSON(message: _274.LastValidatorPower): unknown;
                fromPartial(object: Partial<_274.LastValidatorPower>): _274.LastValidatorPower;
                fromAmino(object: _274.LastValidatorPowerAmino): _274.LastValidatorPower;
                toAmino(message: _274.LastValidatorPower): _274.LastValidatorPowerAmino;
                fromAminoMsg(object: _274.LastValidatorPowerAminoMsg): _274.LastValidatorPower;
                toAminoMsg(message: _274.LastValidatorPower): _274.LastValidatorPowerAminoMsg;
                fromProtoMsg(message: _274.LastValidatorPowerProtoMsg): _274.LastValidatorPower;
                toProto(message: _274.LastValidatorPower): Uint8Array;
                toProtoMsg(message: _274.LastValidatorPower): _274.LastValidatorPowerProtoMsg;
            };
            authorizationTypeFromJSON(object: any): _273.AuthorizationType;
            authorizationTypeToJSON(object: _273.AuthorizationType): string;
            AuthorizationType: typeof _273.AuthorizationType;
            AuthorizationTypeSDKType: typeof _273.AuthorizationType;
            AuthorizationTypeAmino: typeof _273.AuthorizationType;
            StakeAuthorization: {
                encode(message: _273.StakeAuthorization, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.StakeAuthorization;
                fromJSON(object: any): _273.StakeAuthorization;
                toJSON(message: _273.StakeAuthorization): unknown;
                fromPartial(object: Partial<_273.StakeAuthorization>): _273.StakeAuthorization;
                fromAmino(object: _273.StakeAuthorizationAmino): _273.StakeAuthorization;
                toAmino(message: _273.StakeAuthorization): _273.StakeAuthorizationAmino;
                fromAminoMsg(object: _273.StakeAuthorizationAminoMsg): _273.StakeAuthorization;
                toAminoMsg(message: _273.StakeAuthorization): _273.StakeAuthorizationAminoMsg;
                fromProtoMsg(message: _273.StakeAuthorizationProtoMsg): _273.StakeAuthorization;
                toProto(message: _273.StakeAuthorization): Uint8Array;
                toProtoMsg(message: _273.StakeAuthorization): _273.StakeAuthorizationProtoMsg;
            };
            StakeAuthorization_Validators: {
                encode(message: _273.StakeAuthorization_Validators, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _273.StakeAuthorization_Validators;
                fromJSON(object: any): _273.StakeAuthorization_Validators;
                toJSON(message: _273.StakeAuthorization_Validators): unknown;
                fromPartial(object: Partial<_273.StakeAuthorization_Validators>): _273.StakeAuthorization_Validators;
                fromAmino(object: _273.StakeAuthorization_ValidatorsAmino): _273.StakeAuthorization_Validators;
                toAmino(message: _273.StakeAuthorization_Validators): _273.StakeAuthorization_ValidatorsAmino;
                fromAminoMsg(object: _273.StakeAuthorization_ValidatorsAminoMsg): _273.StakeAuthorization_Validators;
                toAminoMsg(message: _273.StakeAuthorization_Validators): _273.StakeAuthorization_ValidatorsAminoMsg;
                fromProtoMsg(message: _273.StakeAuthorization_ValidatorsProtoMsg): _273.StakeAuthorization_Validators;
                toProto(message: _273.StakeAuthorization_Validators): Uint8Array;
                toProtoMsg(message: _273.StakeAuthorization_Validators): _273.StakeAuthorization_ValidatorsProtoMsg;
            };
        };
    }
    namespace tx {
        namespace signing {
            const v1beta1: {
                signModeFromJSON(object: any): _278.SignMode;
                signModeToJSON(object: _278.SignMode): string;
                SignMode: typeof _278.SignMode;
                SignModeSDKType: typeof _278.SignMode;
                SignModeAmino: typeof _278.SignMode;
                SignatureDescriptors: {
                    encode(message: _278.SignatureDescriptors, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SignatureDescriptors;
                    fromJSON(object: any): _278.SignatureDescriptors;
                    toJSON(message: _278.SignatureDescriptors): unknown;
                    fromPartial(object: Partial<_278.SignatureDescriptors>): _278.SignatureDescriptors;
                    fromAmino(object: _278.SignatureDescriptorsAmino): _278.SignatureDescriptors;
                    toAmino(message: _278.SignatureDescriptors): _278.SignatureDescriptorsAmino;
                    fromAminoMsg(object: _278.SignatureDescriptorsAminoMsg): _278.SignatureDescriptors;
                    toAminoMsg(message: _278.SignatureDescriptors): _278.SignatureDescriptorsAminoMsg;
                    fromProtoMsg(message: _278.SignatureDescriptorsProtoMsg): _278.SignatureDescriptors;
                    toProto(message: _278.SignatureDescriptors): Uint8Array;
                    toProtoMsg(message: _278.SignatureDescriptors): _278.SignatureDescriptorsProtoMsg;
                };
                SignatureDescriptor: {
                    encode(message: _278.SignatureDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SignatureDescriptor;
                    fromJSON(object: any): _278.SignatureDescriptor;
                    toJSON(message: _278.SignatureDescriptor): unknown;
                    fromPartial(object: Partial<_278.SignatureDescriptor>): _278.SignatureDescriptor;
                    fromAmino(object: _278.SignatureDescriptorAmino): _278.SignatureDescriptor;
                    toAmino(message: _278.SignatureDescriptor): _278.SignatureDescriptorAmino;
                    fromAminoMsg(object: _278.SignatureDescriptorAminoMsg): _278.SignatureDescriptor;
                    toAminoMsg(message: _278.SignatureDescriptor): _278.SignatureDescriptorAminoMsg;
                    fromProtoMsg(message: _278.SignatureDescriptorProtoMsg): _278.SignatureDescriptor;
                    toProto(message: _278.SignatureDescriptor): Uint8Array;
                    toProtoMsg(message: _278.SignatureDescriptor): _278.SignatureDescriptorProtoMsg;
                };
                SignatureDescriptor_Data: {
                    encode(message: _278.SignatureDescriptor_Data, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SignatureDescriptor_Data;
                    fromJSON(object: any): _278.SignatureDescriptor_Data;
                    toJSON(message: _278.SignatureDescriptor_Data): unknown;
                    fromPartial(object: Partial<_278.SignatureDescriptor_Data>): _278.SignatureDescriptor_Data;
                    fromAmino(object: _278.SignatureDescriptor_DataAmino): _278.SignatureDescriptor_Data;
                    toAmino(message: _278.SignatureDescriptor_Data): _278.SignatureDescriptor_DataAmino;
                    fromAminoMsg(object: _278.SignatureDescriptor_DataAminoMsg): _278.SignatureDescriptor_Data;
                    toAminoMsg(message: _278.SignatureDescriptor_Data): _278.SignatureDescriptor_DataAminoMsg;
                    fromProtoMsg(message: _278.SignatureDescriptor_DataProtoMsg): _278.SignatureDescriptor_Data;
                    toProto(message: _278.SignatureDescriptor_Data): Uint8Array;
                    toProtoMsg(message: _278.SignatureDescriptor_Data): _278.SignatureDescriptor_DataProtoMsg;
                };
                SignatureDescriptor_Data_Single: {
                    encode(message: _278.SignatureDescriptor_Data_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SignatureDescriptor_Data_Single;
                    fromJSON(object: any): _278.SignatureDescriptor_Data_Single;
                    toJSON(message: _278.SignatureDescriptor_Data_Single): unknown;
                    fromPartial(object: Partial<_278.SignatureDescriptor_Data_Single>): _278.SignatureDescriptor_Data_Single;
                    fromAmino(object: _278.SignatureDescriptor_Data_SingleAmino): _278.SignatureDescriptor_Data_Single;
                    toAmino(message: _278.SignatureDescriptor_Data_Single): _278.SignatureDescriptor_Data_SingleAmino;
                    fromAminoMsg(object: _278.SignatureDescriptor_Data_SingleAminoMsg): _278.SignatureDescriptor_Data_Single;
                    toAminoMsg(message: _278.SignatureDescriptor_Data_Single): _278.SignatureDescriptor_Data_SingleAminoMsg;
                    fromProtoMsg(message: _278.SignatureDescriptor_Data_SingleProtoMsg): _278.SignatureDescriptor_Data_Single;
                    toProto(message: _278.SignatureDescriptor_Data_Single): Uint8Array;
                    toProtoMsg(message: _278.SignatureDescriptor_Data_Single): _278.SignatureDescriptor_Data_SingleProtoMsg;
                };
                SignatureDescriptor_Data_Multi: {
                    encode(message: _278.SignatureDescriptor_Data_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _278.SignatureDescriptor_Data_Multi;
                    fromJSON(object: any): _278.SignatureDescriptor_Data_Multi;
                    toJSON(message: _278.SignatureDescriptor_Data_Multi): unknown;
                    fromPartial(object: Partial<_278.SignatureDescriptor_Data_Multi>): _278.SignatureDescriptor_Data_Multi;
                    fromAmino(object: _278.SignatureDescriptor_Data_MultiAmino): _278.SignatureDescriptor_Data_Multi;
                    toAmino(message: _278.SignatureDescriptor_Data_Multi): _278.SignatureDescriptor_Data_MultiAmino;
                    fromAminoMsg(object: _278.SignatureDescriptor_Data_MultiAminoMsg): _278.SignatureDescriptor_Data_Multi;
                    toAminoMsg(message: _278.SignatureDescriptor_Data_Multi): _278.SignatureDescriptor_Data_MultiAminoMsg;
                    fromProtoMsg(message: _278.SignatureDescriptor_Data_MultiProtoMsg): _278.SignatureDescriptor_Data_Multi;
                    toProto(message: _278.SignatureDescriptor_Data_Multi): Uint8Array;
                    toProtoMsg(message: _278.SignatureDescriptor_Data_Multi): _278.SignatureDescriptor_Data_MultiProtoMsg;
                };
            };
        }
        const v1beta1: {
            ServiceClientImpl: typeof _448.ServiceClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                simulate(request: _279.SimulateRequest): Promise<_279.SimulateResponse>;
                getTx(request: _279.GetTxRequest): Promise<_279.GetTxResponse>;
                broadcastTx(request: _279.BroadcastTxRequest): Promise<_279.BroadcastTxResponse>;
                getTxsEvent(request: _279.GetTxsEventRequest): Promise<_279.GetTxsEventResponse>;
                getBlockWithTxs(request: _279.GetBlockWithTxsRequest): Promise<_279.GetBlockWithTxsResponse>;
            };
            Tx: {
                encode(message: _280.Tx, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.Tx;
                fromJSON(object: any): _280.Tx;
                toJSON(message: _280.Tx): unknown;
                fromPartial(object: Partial<_280.Tx>): _280.Tx;
                fromAmino(object: _280.TxAmino): _280.Tx;
                toAmino(message: _280.Tx): _280.TxAmino;
                fromAminoMsg(object: _280.TxAminoMsg): _280.Tx;
                toAminoMsg(message: _280.Tx): _280.TxAminoMsg;
                fromProtoMsg(message: _280.TxProtoMsg): _280.Tx;
                toProto(message: _280.Tx): Uint8Array;
                toProtoMsg(message: _280.Tx): _280.TxProtoMsg;
            };
            TxRaw: {
                encode(message: _280.TxRaw, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.TxRaw;
                fromJSON(object: any): _280.TxRaw;
                toJSON(message: _280.TxRaw): unknown;
                fromPartial(object: Partial<_280.TxRaw>): _280.TxRaw;
                fromAmino(object: _280.TxRawAmino): _280.TxRaw;
                toAmino(message: _280.TxRaw): _280.TxRawAmino;
                fromAminoMsg(object: _280.TxRawAminoMsg): _280.TxRaw;
                toAminoMsg(message: _280.TxRaw): _280.TxRawAminoMsg;
                fromProtoMsg(message: _280.TxRawProtoMsg): _280.TxRaw;
                toProto(message: _280.TxRaw): Uint8Array;
                toProtoMsg(message: _280.TxRaw): _280.TxRawProtoMsg;
            };
            SignDoc: {
                encode(message: _280.SignDoc, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.SignDoc;
                fromJSON(object: any): _280.SignDoc;
                toJSON(message: _280.SignDoc): unknown;
                fromPartial(object: Partial<_280.SignDoc>): _280.SignDoc;
                fromAmino(object: _280.SignDocAmino): _280.SignDoc;
                toAmino(message: _280.SignDoc): _280.SignDocAmino;
                fromAminoMsg(object: _280.SignDocAminoMsg): _280.SignDoc;
                toAminoMsg(message: _280.SignDoc): _280.SignDocAminoMsg;
                fromProtoMsg(message: _280.SignDocProtoMsg): _280.SignDoc;
                toProto(message: _280.SignDoc): Uint8Array;
                toProtoMsg(message: _280.SignDoc): _280.SignDocProtoMsg;
            };
            SignDocDirectAux: {
                encode(message: _280.SignDocDirectAux, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.SignDocDirectAux;
                fromJSON(object: any): _280.SignDocDirectAux;
                toJSON(message: _280.SignDocDirectAux): unknown;
                fromPartial(object: Partial<_280.SignDocDirectAux>): _280.SignDocDirectAux;
                fromAmino(object: _280.SignDocDirectAuxAmino): _280.SignDocDirectAux;
                toAmino(message: _280.SignDocDirectAux): _280.SignDocDirectAuxAmino;
                fromAminoMsg(object: _280.SignDocDirectAuxAminoMsg): _280.SignDocDirectAux;
                toAminoMsg(message: _280.SignDocDirectAux): _280.SignDocDirectAuxAminoMsg;
                fromProtoMsg(message: _280.SignDocDirectAuxProtoMsg): _280.SignDocDirectAux;
                toProto(message: _280.SignDocDirectAux): Uint8Array;
                toProtoMsg(message: _280.SignDocDirectAux): _280.SignDocDirectAuxProtoMsg;
            };
            TxBody: {
                encode(message: _280.TxBody, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.TxBody;
                fromJSON(object: any): _280.TxBody;
                toJSON(message: _280.TxBody): unknown;
                fromPartial(object: Partial<_280.TxBody>): _280.TxBody;
                fromAmino(object: _280.TxBodyAmino): _280.TxBody;
                toAmino(message: _280.TxBody): _280.TxBodyAmino;
                fromAminoMsg(object: _280.TxBodyAminoMsg): _280.TxBody;
                toAminoMsg(message: _280.TxBody): _280.TxBodyAminoMsg;
                fromProtoMsg(message: _280.TxBodyProtoMsg): _280.TxBody;
                toProto(message: _280.TxBody): Uint8Array;
                toProtoMsg(message: _280.TxBody): _280.TxBodyProtoMsg;
            };
            AuthInfo: {
                encode(message: _280.AuthInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.AuthInfo;
                fromJSON(object: any): _280.AuthInfo;
                toJSON(message: _280.AuthInfo): unknown;
                fromPartial(object: Partial<_280.AuthInfo>): _280.AuthInfo;
                fromAmino(object: _280.AuthInfoAmino): _280.AuthInfo;
                toAmino(message: _280.AuthInfo): _280.AuthInfoAmino;
                fromAminoMsg(object: _280.AuthInfoAminoMsg): _280.AuthInfo;
                toAminoMsg(message: _280.AuthInfo): _280.AuthInfoAminoMsg;
                fromProtoMsg(message: _280.AuthInfoProtoMsg): _280.AuthInfo;
                toProto(message: _280.AuthInfo): Uint8Array;
                toProtoMsg(message: _280.AuthInfo): _280.AuthInfoProtoMsg;
            };
            SignerInfo: {
                encode(message: _280.SignerInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.SignerInfo;
                fromJSON(object: any): _280.SignerInfo;
                toJSON(message: _280.SignerInfo): unknown;
                fromPartial(object: Partial<_280.SignerInfo>): _280.SignerInfo;
                fromAmino(object: _280.SignerInfoAmino): _280.SignerInfo;
                toAmino(message: _280.SignerInfo): _280.SignerInfoAmino;
                fromAminoMsg(object: _280.SignerInfoAminoMsg): _280.SignerInfo;
                toAminoMsg(message: _280.SignerInfo): _280.SignerInfoAminoMsg;
                fromProtoMsg(message: _280.SignerInfoProtoMsg): _280.SignerInfo;
                toProto(message: _280.SignerInfo): Uint8Array;
                toProtoMsg(message: _280.SignerInfo): _280.SignerInfoProtoMsg;
            };
            ModeInfo: {
                encode(message: _280.ModeInfo, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.ModeInfo;
                fromJSON(object: any): _280.ModeInfo;
                toJSON(message: _280.ModeInfo): unknown;
                fromPartial(object: Partial<_280.ModeInfo>): _280.ModeInfo;
                fromAmino(object: _280.ModeInfoAmino): _280.ModeInfo;
                toAmino(message: _280.ModeInfo): _280.ModeInfoAmino;
                fromAminoMsg(object: _280.ModeInfoAminoMsg): _280.ModeInfo;
                toAminoMsg(message: _280.ModeInfo): _280.ModeInfoAminoMsg;
                fromProtoMsg(message: _280.ModeInfoProtoMsg): _280.ModeInfo;
                toProto(message: _280.ModeInfo): Uint8Array;
                toProtoMsg(message: _280.ModeInfo): _280.ModeInfoProtoMsg;
            };
            ModeInfo_Single: {
                encode(message: _280.ModeInfo_Single, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.ModeInfo_Single;
                fromJSON(object: any): _280.ModeInfo_Single;
                toJSON(message: _280.ModeInfo_Single): unknown;
                fromPartial(object: Partial<_280.ModeInfo_Single>): _280.ModeInfo_Single;
                fromAmino(object: _280.ModeInfo_SingleAmino): _280.ModeInfo_Single;
                toAmino(message: _280.ModeInfo_Single): _280.ModeInfo_SingleAmino;
                fromAminoMsg(object: _280.ModeInfo_SingleAminoMsg): _280.ModeInfo_Single;
                toAminoMsg(message: _280.ModeInfo_Single): _280.ModeInfo_SingleAminoMsg;
                fromProtoMsg(message: _280.ModeInfo_SingleProtoMsg): _280.ModeInfo_Single;
                toProto(message: _280.ModeInfo_Single): Uint8Array;
                toProtoMsg(message: _280.ModeInfo_Single): _280.ModeInfo_SingleProtoMsg;
            };
            ModeInfo_Multi: {
                encode(message: _280.ModeInfo_Multi, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.ModeInfo_Multi;
                fromJSON(object: any): _280.ModeInfo_Multi;
                toJSON(message: _280.ModeInfo_Multi): unknown;
                fromPartial(object: Partial<_280.ModeInfo_Multi>): _280.ModeInfo_Multi;
                fromAmino(object: _280.ModeInfo_MultiAmino): _280.ModeInfo_Multi;
                toAmino(message: _280.ModeInfo_Multi): _280.ModeInfo_MultiAmino;
                fromAminoMsg(object: _280.ModeInfo_MultiAminoMsg): _280.ModeInfo_Multi;
                toAminoMsg(message: _280.ModeInfo_Multi): _280.ModeInfo_MultiAminoMsg;
                fromProtoMsg(message: _280.ModeInfo_MultiProtoMsg): _280.ModeInfo_Multi;
                toProto(message: _280.ModeInfo_Multi): Uint8Array;
                toProtoMsg(message: _280.ModeInfo_Multi): _280.ModeInfo_MultiProtoMsg;
            };
            Fee: {
                encode(message: _280.Fee, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.Fee;
                fromJSON(object: any): _280.Fee;
                toJSON(message: _280.Fee): unknown;
                fromPartial(object: Partial<_280.Fee>): _280.Fee;
                fromAmino(object: _280.FeeAmino): _280.Fee;
                toAmino(message: _280.Fee): _280.FeeAmino;
                fromAminoMsg(object: _280.FeeAminoMsg): _280.Fee;
                toAminoMsg(message: _280.Fee): _280.FeeAminoMsg;
                fromProtoMsg(message: _280.FeeProtoMsg): _280.Fee;
                toProto(message: _280.Fee): Uint8Array;
                toProtoMsg(message: _280.Fee): _280.FeeProtoMsg;
            };
            Tip: {
                encode(message: _280.Tip, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.Tip;
                fromJSON(object: any): _280.Tip;
                toJSON(message: _280.Tip): unknown;
                fromPartial(object: Partial<_280.Tip>): _280.Tip;
                fromAmino(object: _280.TipAmino): _280.Tip;
                toAmino(message: _280.Tip): _280.TipAmino;
                fromAminoMsg(object: _280.TipAminoMsg): _280.Tip;
                toAminoMsg(message: _280.Tip): _280.TipAminoMsg;
                fromProtoMsg(message: _280.TipProtoMsg): _280.Tip;
                toProto(message: _280.Tip): Uint8Array;
                toProtoMsg(message: _280.Tip): _280.TipProtoMsg;
            };
            AuxSignerData: {
                encode(message: _280.AuxSignerData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _280.AuxSignerData;
                fromJSON(object: any): _280.AuxSignerData;
                toJSON(message: _280.AuxSignerData): unknown;
                fromPartial(object: Partial<_280.AuxSignerData>): _280.AuxSignerData;
                fromAmino(object: _280.AuxSignerDataAmino): _280.AuxSignerData;
                toAmino(message: _280.AuxSignerData): _280.AuxSignerDataAmino;
                fromAminoMsg(object: _280.AuxSignerDataAminoMsg): _280.AuxSignerData;
                toAminoMsg(message: _280.AuxSignerData): _280.AuxSignerDataAminoMsg;
                fromProtoMsg(message: _280.AuxSignerDataProtoMsg): _280.AuxSignerData;
                toProto(message: _280.AuxSignerData): Uint8Array;
                toProtoMsg(message: _280.AuxSignerData): _280.AuxSignerDataProtoMsg;
            };
            orderByFromJSON(object: any): _279.OrderBy;
            orderByToJSON(object: _279.OrderBy): string;
            broadcastModeFromJSON(object: any): _279.BroadcastMode;
            broadcastModeToJSON(object: _279.BroadcastMode): string;
            OrderBy: typeof _279.OrderBy;
            OrderBySDKType: typeof _279.OrderBy;
            OrderByAmino: typeof _279.OrderBy;
            BroadcastMode: typeof _279.BroadcastMode;
            BroadcastModeSDKType: typeof _279.BroadcastMode;
            BroadcastModeAmino: typeof _279.BroadcastMode;
            GetTxsEventRequest: {
                encode(message: _279.GetTxsEventRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetTxsEventRequest;
                fromJSON(object: any): _279.GetTxsEventRequest;
                toJSON(message: _279.GetTxsEventRequest): unknown;
                fromPartial(object: Partial<_279.GetTxsEventRequest>): _279.GetTxsEventRequest;
                fromAmino(object: _279.GetTxsEventRequestAmino): _279.GetTxsEventRequest;
                toAmino(message: _279.GetTxsEventRequest): _279.GetTxsEventRequestAmino;
                fromAminoMsg(object: _279.GetTxsEventRequestAminoMsg): _279.GetTxsEventRequest;
                toAminoMsg(message: _279.GetTxsEventRequest): _279.GetTxsEventRequestAminoMsg;
                fromProtoMsg(message: _279.GetTxsEventRequestProtoMsg): _279.GetTxsEventRequest;
                toProto(message: _279.GetTxsEventRequest): Uint8Array;
                toProtoMsg(message: _279.GetTxsEventRequest): _279.GetTxsEventRequestProtoMsg;
            };
            GetTxsEventResponse: {
                encode(message: _279.GetTxsEventResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetTxsEventResponse;
                fromJSON(object: any): _279.GetTxsEventResponse;
                toJSON(message: _279.GetTxsEventResponse): unknown;
                fromPartial(object: Partial<_279.GetTxsEventResponse>): _279.GetTxsEventResponse;
                fromAmino(object: _279.GetTxsEventResponseAmino): _279.GetTxsEventResponse;
                toAmino(message: _279.GetTxsEventResponse): _279.GetTxsEventResponseAmino;
                fromAminoMsg(object: _279.GetTxsEventResponseAminoMsg): _279.GetTxsEventResponse;
                toAminoMsg(message: _279.GetTxsEventResponse): _279.GetTxsEventResponseAminoMsg;
                fromProtoMsg(message: _279.GetTxsEventResponseProtoMsg): _279.GetTxsEventResponse;
                toProto(message: _279.GetTxsEventResponse): Uint8Array;
                toProtoMsg(message: _279.GetTxsEventResponse): _279.GetTxsEventResponseProtoMsg;
            };
            BroadcastTxRequest: {
                encode(message: _279.BroadcastTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.BroadcastTxRequest;
                fromJSON(object: any): _279.BroadcastTxRequest;
                toJSON(message: _279.BroadcastTxRequest): unknown;
                fromPartial(object: Partial<_279.BroadcastTxRequest>): _279.BroadcastTxRequest;
                fromAmino(object: _279.BroadcastTxRequestAmino): _279.BroadcastTxRequest;
                toAmino(message: _279.BroadcastTxRequest): _279.BroadcastTxRequestAmino;
                fromAminoMsg(object: _279.BroadcastTxRequestAminoMsg): _279.BroadcastTxRequest;
                toAminoMsg(message: _279.BroadcastTxRequest): _279.BroadcastTxRequestAminoMsg;
                fromProtoMsg(message: _279.BroadcastTxRequestProtoMsg): _279.BroadcastTxRequest;
                toProto(message: _279.BroadcastTxRequest): Uint8Array;
                toProtoMsg(message: _279.BroadcastTxRequest): _279.BroadcastTxRequestProtoMsg;
            };
            BroadcastTxResponse: {
                encode(message: _279.BroadcastTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.BroadcastTxResponse;
                fromJSON(object: any): _279.BroadcastTxResponse;
                toJSON(message: _279.BroadcastTxResponse): unknown;
                fromPartial(object: Partial<_279.BroadcastTxResponse>): _279.BroadcastTxResponse;
                fromAmino(object: _279.BroadcastTxResponseAmino): _279.BroadcastTxResponse;
                toAmino(message: _279.BroadcastTxResponse): _279.BroadcastTxResponseAmino;
                fromAminoMsg(object: _279.BroadcastTxResponseAminoMsg): _279.BroadcastTxResponse;
                toAminoMsg(message: _279.BroadcastTxResponse): _279.BroadcastTxResponseAminoMsg;
                fromProtoMsg(message: _279.BroadcastTxResponseProtoMsg): _279.BroadcastTxResponse;
                toProto(message: _279.BroadcastTxResponse): Uint8Array;
                toProtoMsg(message: _279.BroadcastTxResponse): _279.BroadcastTxResponseProtoMsg;
            };
            SimulateRequest: {
                encode(message: _279.SimulateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.SimulateRequest;
                fromJSON(object: any): _279.SimulateRequest;
                toJSON(message: _279.SimulateRequest): unknown;
                fromPartial(object: Partial<_279.SimulateRequest>): _279.SimulateRequest;
                fromAmino(object: _279.SimulateRequestAmino): _279.SimulateRequest;
                toAmino(message: _279.SimulateRequest): _279.SimulateRequestAmino;
                fromAminoMsg(object: _279.SimulateRequestAminoMsg): _279.SimulateRequest;
                toAminoMsg(message: _279.SimulateRequest): _279.SimulateRequestAminoMsg;
                fromProtoMsg(message: _279.SimulateRequestProtoMsg): _279.SimulateRequest;
                toProto(message: _279.SimulateRequest): Uint8Array;
                toProtoMsg(message: _279.SimulateRequest): _279.SimulateRequestProtoMsg;
            };
            SimulateResponse: {
                encode(message: _279.SimulateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.SimulateResponse;
                fromJSON(object: any): _279.SimulateResponse;
                toJSON(message: _279.SimulateResponse): unknown;
                fromPartial(object: Partial<_279.SimulateResponse>): _279.SimulateResponse;
                fromAmino(object: _279.SimulateResponseAmino): _279.SimulateResponse;
                toAmino(message: _279.SimulateResponse): _279.SimulateResponseAmino;
                fromAminoMsg(object: _279.SimulateResponseAminoMsg): _279.SimulateResponse;
                toAminoMsg(message: _279.SimulateResponse): _279.SimulateResponseAminoMsg;
                fromProtoMsg(message: _279.SimulateResponseProtoMsg): _279.SimulateResponse;
                toProto(message: _279.SimulateResponse): Uint8Array;
                toProtoMsg(message: _279.SimulateResponse): _279.SimulateResponseProtoMsg;
            };
            GetTxRequest: {
                encode(message: _279.GetTxRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetTxRequest;
                fromJSON(object: any): _279.GetTxRequest;
                toJSON(message: _279.GetTxRequest): unknown;
                fromPartial(object: Partial<_279.GetTxRequest>): _279.GetTxRequest;
                fromAmino(object: _279.GetTxRequestAmino): _279.GetTxRequest;
                toAmino(message: _279.GetTxRequest): _279.GetTxRequestAmino;
                fromAminoMsg(object: _279.GetTxRequestAminoMsg): _279.GetTxRequest;
                toAminoMsg(message: _279.GetTxRequest): _279.GetTxRequestAminoMsg;
                fromProtoMsg(message: _279.GetTxRequestProtoMsg): _279.GetTxRequest;
                toProto(message: _279.GetTxRequest): Uint8Array;
                toProtoMsg(message: _279.GetTxRequest): _279.GetTxRequestProtoMsg;
            };
            GetTxResponse: {
                encode(message: _279.GetTxResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetTxResponse;
                fromJSON(object: any): _279.GetTxResponse;
                toJSON(message: _279.GetTxResponse): unknown;
                fromPartial(object: Partial<_279.GetTxResponse>): _279.GetTxResponse;
                fromAmino(object: _279.GetTxResponseAmino): _279.GetTxResponse;
                toAmino(message: _279.GetTxResponse): _279.GetTxResponseAmino;
                fromAminoMsg(object: _279.GetTxResponseAminoMsg): _279.GetTxResponse;
                toAminoMsg(message: _279.GetTxResponse): _279.GetTxResponseAminoMsg;
                fromProtoMsg(message: _279.GetTxResponseProtoMsg): _279.GetTxResponse;
                toProto(message: _279.GetTxResponse): Uint8Array;
                toProtoMsg(message: _279.GetTxResponse): _279.GetTxResponseProtoMsg;
            };
            GetBlockWithTxsRequest: {
                encode(message: _279.GetBlockWithTxsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetBlockWithTxsRequest;
                fromJSON(object: any): _279.GetBlockWithTxsRequest;
                toJSON(message: _279.GetBlockWithTxsRequest): unknown;
                fromPartial(object: Partial<_279.GetBlockWithTxsRequest>): _279.GetBlockWithTxsRequest;
                fromAmino(object: _279.GetBlockWithTxsRequestAmino): _279.GetBlockWithTxsRequest;
                toAmino(message: _279.GetBlockWithTxsRequest): _279.GetBlockWithTxsRequestAmino;
                fromAminoMsg(object: _279.GetBlockWithTxsRequestAminoMsg): _279.GetBlockWithTxsRequest;
                toAminoMsg(message: _279.GetBlockWithTxsRequest): _279.GetBlockWithTxsRequestAminoMsg;
                fromProtoMsg(message: _279.GetBlockWithTxsRequestProtoMsg): _279.GetBlockWithTxsRequest;
                toProto(message: _279.GetBlockWithTxsRequest): Uint8Array;
                toProtoMsg(message: _279.GetBlockWithTxsRequest): _279.GetBlockWithTxsRequestProtoMsg;
            };
            GetBlockWithTxsResponse: {
                encode(message: _279.GetBlockWithTxsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _279.GetBlockWithTxsResponse;
                fromJSON(object: any): _279.GetBlockWithTxsResponse;
                toJSON(message: _279.GetBlockWithTxsResponse): unknown;
                fromPartial(object: Partial<_279.GetBlockWithTxsResponse>): _279.GetBlockWithTxsResponse;
                fromAmino(object: _279.GetBlockWithTxsResponseAmino): _279.GetBlockWithTxsResponse;
                toAmino(message: _279.GetBlockWithTxsResponse): _279.GetBlockWithTxsResponseAmino;
                fromAminoMsg(object: _279.GetBlockWithTxsResponseAminoMsg): _279.GetBlockWithTxsResponse;
                toAminoMsg(message: _279.GetBlockWithTxsResponse): _279.GetBlockWithTxsResponseAminoMsg;
                fromProtoMsg(message: _279.GetBlockWithTxsResponseProtoMsg): _279.GetBlockWithTxsResponse;
                toProto(message: _279.GetBlockWithTxsResponse): Uint8Array;
                toProtoMsg(message: _279.GetBlockWithTxsResponse): _279.GetBlockWithTxsResponseProtoMsg;
            };
        };
    }
    namespace upgrade {
        const v1beta1: {
            MsgClientImpl: typeof _462.MsgClientImpl;
            QueryClientImpl: typeof _449.QueryClientImpl;
            createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                currentPlan(request?: _281.QueryCurrentPlanRequest): Promise<_281.QueryCurrentPlanResponse>;
                appliedPlan(request: _281.QueryAppliedPlanRequest): Promise<_281.QueryAppliedPlanResponse>;
                upgradedConsensusState(request: _281.QueryUpgradedConsensusStateRequest): Promise<_281.QueryUpgradedConsensusStateResponse>;
                moduleVersions(request: _281.QueryModuleVersionsRequest): Promise<_281.QueryModuleVersionsResponse>;
                authority(request?: _281.QueryAuthorityRequest): Promise<_281.QueryAuthorityResponse>;
            };
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    softwareUpgrade(value: _282.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    cancelUpgrade(value: _282.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    softwareUpgrade(value: _282.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _282.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _282.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _282.MsgCancelUpgrade;
                    };
                };
                toJSON: {
                    softwareUpgrade(value: _282.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                    cancelUpgrade(value: _282.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    softwareUpgrade(value: any): {
                        typeUrl: string;
                        value: _282.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: any): {
                        typeUrl: string;
                        value: _282.MsgCancelUpgrade;
                    };
                };
                fromPartial: {
                    softwareUpgrade(value: _282.MsgSoftwareUpgrade): {
                        typeUrl: string;
                        value: _282.MsgSoftwareUpgrade;
                    };
                    cancelUpgrade(value: _282.MsgCancelUpgrade): {
                        typeUrl: string;
                        value: _282.MsgCancelUpgrade;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade": {
                    aminoType: string;
                    toAmino: (message: _282.MsgSoftwareUpgrade) => _282.MsgSoftwareUpgradeAmino;
                    fromAmino: (object: _282.MsgSoftwareUpgradeAmino) => _282.MsgSoftwareUpgrade;
                };
                "/cosmos.upgrade.v1beta1.MsgCancelUpgrade": {
                    aminoType: string;
                    toAmino: (message: _282.MsgCancelUpgrade) => _282.MsgCancelUpgradeAmino;
                    fromAmino: (object: _282.MsgCancelUpgradeAmino) => _282.MsgCancelUpgrade;
                };
            };
            Plan: {
                encode(message: _283.Plan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.Plan;
                fromJSON(object: any): _283.Plan;
                toJSON(message: _283.Plan): unknown;
                fromPartial(object: Partial<_283.Plan>): _283.Plan;
                fromAmino(object: _283.PlanAmino): _283.Plan;
                toAmino(message: _283.Plan): _283.PlanAmino;
                fromAminoMsg(object: _283.PlanAminoMsg): _283.Plan;
                toAminoMsg(message: _283.Plan): _283.PlanAminoMsg;
                fromProtoMsg(message: _283.PlanProtoMsg): _283.Plan;
                toProto(message: _283.Plan): Uint8Array;
                toProtoMsg(message: _283.Plan): _283.PlanProtoMsg;
            };
            SoftwareUpgradeProposal: {
                encode(message: _283.SoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.SoftwareUpgradeProposal;
                fromJSON(object: any): _283.SoftwareUpgradeProposal;
                toJSON(message: _283.SoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_283.SoftwareUpgradeProposal>): _283.SoftwareUpgradeProposal;
                fromAmino(object: _283.SoftwareUpgradeProposalAmino): _283.SoftwareUpgradeProposal;
                toAmino(message: _283.SoftwareUpgradeProposal): _283.SoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _283.SoftwareUpgradeProposalAminoMsg): _283.SoftwareUpgradeProposal;
                toAminoMsg(message: _283.SoftwareUpgradeProposal): _283.SoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _283.SoftwareUpgradeProposalProtoMsg): _283.SoftwareUpgradeProposal;
                toProto(message: _283.SoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _283.SoftwareUpgradeProposal): _283.SoftwareUpgradeProposalProtoMsg;
            };
            CancelSoftwareUpgradeProposal: {
                encode(message: _283.CancelSoftwareUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.CancelSoftwareUpgradeProposal;
                fromJSON(object: any): _283.CancelSoftwareUpgradeProposal;
                toJSON(message: _283.CancelSoftwareUpgradeProposal): unknown;
                fromPartial(object: Partial<_283.CancelSoftwareUpgradeProposal>): _283.CancelSoftwareUpgradeProposal;
                fromAmino(object: _283.CancelSoftwareUpgradeProposalAmino): _283.CancelSoftwareUpgradeProposal;
                toAmino(message: _283.CancelSoftwareUpgradeProposal): _283.CancelSoftwareUpgradeProposalAmino;
                fromAminoMsg(object: _283.CancelSoftwareUpgradeProposalAminoMsg): _283.CancelSoftwareUpgradeProposal;
                toAminoMsg(message: _283.CancelSoftwareUpgradeProposal): _283.CancelSoftwareUpgradeProposalAminoMsg;
                fromProtoMsg(message: _283.CancelSoftwareUpgradeProposalProtoMsg): _283.CancelSoftwareUpgradeProposal;
                toProto(message: _283.CancelSoftwareUpgradeProposal): Uint8Array;
                toProtoMsg(message: _283.CancelSoftwareUpgradeProposal): _283.CancelSoftwareUpgradeProposalProtoMsg;
            };
            ModuleVersion: {
                encode(message: _283.ModuleVersion, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _283.ModuleVersion;
                fromJSON(object: any): _283.ModuleVersion;
                toJSON(message: _283.ModuleVersion): unknown;
                fromPartial(object: Partial<_283.ModuleVersion>): _283.ModuleVersion;
                fromAmino(object: _283.ModuleVersionAmino): _283.ModuleVersion;
                toAmino(message: _283.ModuleVersion): _283.ModuleVersionAmino;
                fromAminoMsg(object: _283.ModuleVersionAminoMsg): _283.ModuleVersion;
                toAminoMsg(message: _283.ModuleVersion): _283.ModuleVersionAminoMsg;
                fromProtoMsg(message: _283.ModuleVersionProtoMsg): _283.ModuleVersion;
                toProto(message: _283.ModuleVersion): Uint8Array;
                toProtoMsg(message: _283.ModuleVersion): _283.ModuleVersionProtoMsg;
            };
            MsgSoftwareUpgrade: {
                encode(message: _282.MsgSoftwareUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MsgSoftwareUpgrade;
                fromJSON(object: any): _282.MsgSoftwareUpgrade;
                toJSON(message: _282.MsgSoftwareUpgrade): unknown;
                fromPartial(object: Partial<_282.MsgSoftwareUpgrade>): _282.MsgSoftwareUpgrade;
                fromAmino(object: _282.MsgSoftwareUpgradeAmino): _282.MsgSoftwareUpgrade;
                toAmino(message: _282.MsgSoftwareUpgrade): _282.MsgSoftwareUpgradeAmino;
                fromAminoMsg(object: _282.MsgSoftwareUpgradeAminoMsg): _282.MsgSoftwareUpgrade;
                toAminoMsg(message: _282.MsgSoftwareUpgrade): _282.MsgSoftwareUpgradeAminoMsg;
                fromProtoMsg(message: _282.MsgSoftwareUpgradeProtoMsg): _282.MsgSoftwareUpgrade;
                toProto(message: _282.MsgSoftwareUpgrade): Uint8Array;
                toProtoMsg(message: _282.MsgSoftwareUpgrade): _282.MsgSoftwareUpgradeProtoMsg;
            };
            MsgSoftwareUpgradeResponse: {
                encode(_: _282.MsgSoftwareUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MsgSoftwareUpgradeResponse;
                fromJSON(_: any): _282.MsgSoftwareUpgradeResponse;
                toJSON(_: _282.MsgSoftwareUpgradeResponse): unknown;
                fromPartial(_: Partial<_282.MsgSoftwareUpgradeResponse>): _282.MsgSoftwareUpgradeResponse;
                fromAmino(_: _282.MsgSoftwareUpgradeResponseAmino): _282.MsgSoftwareUpgradeResponse;
                toAmino(_: _282.MsgSoftwareUpgradeResponse): _282.MsgSoftwareUpgradeResponseAmino;
                fromAminoMsg(object: _282.MsgSoftwareUpgradeResponseAminoMsg): _282.MsgSoftwareUpgradeResponse;
                toAminoMsg(message: _282.MsgSoftwareUpgradeResponse): _282.MsgSoftwareUpgradeResponseAminoMsg;
                fromProtoMsg(message: _282.MsgSoftwareUpgradeResponseProtoMsg): _282.MsgSoftwareUpgradeResponse;
                toProto(message: _282.MsgSoftwareUpgradeResponse): Uint8Array;
                toProtoMsg(message: _282.MsgSoftwareUpgradeResponse): _282.MsgSoftwareUpgradeResponseProtoMsg;
            };
            MsgCancelUpgrade: {
                encode(message: _282.MsgCancelUpgrade, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MsgCancelUpgrade;
                fromJSON(object: any): _282.MsgCancelUpgrade;
                toJSON(message: _282.MsgCancelUpgrade): unknown;
                fromPartial(object: Partial<_282.MsgCancelUpgrade>): _282.MsgCancelUpgrade;
                fromAmino(object: _282.MsgCancelUpgradeAmino): _282.MsgCancelUpgrade;
                toAmino(message: _282.MsgCancelUpgrade): _282.MsgCancelUpgradeAmino;
                fromAminoMsg(object: _282.MsgCancelUpgradeAminoMsg): _282.MsgCancelUpgrade;
                toAminoMsg(message: _282.MsgCancelUpgrade): _282.MsgCancelUpgradeAminoMsg;
                fromProtoMsg(message: _282.MsgCancelUpgradeProtoMsg): _282.MsgCancelUpgrade;
                toProto(message: _282.MsgCancelUpgrade): Uint8Array;
                toProtoMsg(message: _282.MsgCancelUpgrade): _282.MsgCancelUpgradeProtoMsg;
            };
            MsgCancelUpgradeResponse: {
                encode(_: _282.MsgCancelUpgradeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _282.MsgCancelUpgradeResponse;
                fromJSON(_: any): _282.MsgCancelUpgradeResponse;
                toJSON(_: _282.MsgCancelUpgradeResponse): unknown;
                fromPartial(_: Partial<_282.MsgCancelUpgradeResponse>): _282.MsgCancelUpgradeResponse;
                fromAmino(_: _282.MsgCancelUpgradeResponseAmino): _282.MsgCancelUpgradeResponse;
                toAmino(_: _282.MsgCancelUpgradeResponse): _282.MsgCancelUpgradeResponseAmino;
                fromAminoMsg(object: _282.MsgCancelUpgradeResponseAminoMsg): _282.MsgCancelUpgradeResponse;
                toAminoMsg(message: _282.MsgCancelUpgradeResponse): _282.MsgCancelUpgradeResponseAminoMsg;
                fromProtoMsg(message: _282.MsgCancelUpgradeResponseProtoMsg): _282.MsgCancelUpgradeResponse;
                toProto(message: _282.MsgCancelUpgradeResponse): Uint8Array;
                toProtoMsg(message: _282.MsgCancelUpgradeResponse): _282.MsgCancelUpgradeResponseProtoMsg;
            };
            QueryCurrentPlanRequest: {
                encode(_: _281.QueryCurrentPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryCurrentPlanRequest;
                fromJSON(_: any): _281.QueryCurrentPlanRequest;
                toJSON(_: _281.QueryCurrentPlanRequest): unknown;
                fromPartial(_: Partial<_281.QueryCurrentPlanRequest>): _281.QueryCurrentPlanRequest;
                fromAmino(_: _281.QueryCurrentPlanRequestAmino): _281.QueryCurrentPlanRequest;
                toAmino(_: _281.QueryCurrentPlanRequest): _281.QueryCurrentPlanRequestAmino;
                fromAminoMsg(object: _281.QueryCurrentPlanRequestAminoMsg): _281.QueryCurrentPlanRequest;
                toAminoMsg(message: _281.QueryCurrentPlanRequest): _281.QueryCurrentPlanRequestAminoMsg;
                fromProtoMsg(message: _281.QueryCurrentPlanRequestProtoMsg): _281.QueryCurrentPlanRequest;
                toProto(message: _281.QueryCurrentPlanRequest): Uint8Array;
                toProtoMsg(message: _281.QueryCurrentPlanRequest): _281.QueryCurrentPlanRequestProtoMsg;
            };
            QueryCurrentPlanResponse: {
                encode(message: _281.QueryCurrentPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryCurrentPlanResponse;
                fromJSON(object: any): _281.QueryCurrentPlanResponse;
                toJSON(message: _281.QueryCurrentPlanResponse): unknown;
                fromPartial(object: Partial<_281.QueryCurrentPlanResponse>): _281.QueryCurrentPlanResponse;
                fromAmino(object: _281.QueryCurrentPlanResponseAmino): _281.QueryCurrentPlanResponse;
                toAmino(message: _281.QueryCurrentPlanResponse): _281.QueryCurrentPlanResponseAmino;
                fromAminoMsg(object: _281.QueryCurrentPlanResponseAminoMsg): _281.QueryCurrentPlanResponse;
                toAminoMsg(message: _281.QueryCurrentPlanResponse): _281.QueryCurrentPlanResponseAminoMsg;
                fromProtoMsg(message: _281.QueryCurrentPlanResponseProtoMsg): _281.QueryCurrentPlanResponse;
                toProto(message: _281.QueryCurrentPlanResponse): Uint8Array;
                toProtoMsg(message: _281.QueryCurrentPlanResponse): _281.QueryCurrentPlanResponseProtoMsg;
            };
            QueryAppliedPlanRequest: {
                encode(message: _281.QueryAppliedPlanRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryAppliedPlanRequest;
                fromJSON(object: any): _281.QueryAppliedPlanRequest;
                toJSON(message: _281.QueryAppliedPlanRequest): unknown;
                fromPartial(object: Partial<_281.QueryAppliedPlanRequest>): _281.QueryAppliedPlanRequest;
                fromAmino(object: _281.QueryAppliedPlanRequestAmino): _281.QueryAppliedPlanRequest;
                toAmino(message: _281.QueryAppliedPlanRequest): _281.QueryAppliedPlanRequestAmino;
                fromAminoMsg(object: _281.QueryAppliedPlanRequestAminoMsg): _281.QueryAppliedPlanRequest;
                toAminoMsg(message: _281.QueryAppliedPlanRequest): _281.QueryAppliedPlanRequestAminoMsg;
                fromProtoMsg(message: _281.QueryAppliedPlanRequestProtoMsg): _281.QueryAppliedPlanRequest;
                toProto(message: _281.QueryAppliedPlanRequest): Uint8Array;
                toProtoMsg(message: _281.QueryAppliedPlanRequest): _281.QueryAppliedPlanRequestProtoMsg;
            };
            QueryAppliedPlanResponse: {
                encode(message: _281.QueryAppliedPlanResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryAppliedPlanResponse;
                fromJSON(object: any): _281.QueryAppliedPlanResponse;
                toJSON(message: _281.QueryAppliedPlanResponse): unknown;
                fromPartial(object: Partial<_281.QueryAppliedPlanResponse>): _281.QueryAppliedPlanResponse;
                fromAmino(object: _281.QueryAppliedPlanResponseAmino): _281.QueryAppliedPlanResponse;
                toAmino(message: _281.QueryAppliedPlanResponse): _281.QueryAppliedPlanResponseAmino;
                fromAminoMsg(object: _281.QueryAppliedPlanResponseAminoMsg): _281.QueryAppliedPlanResponse;
                toAminoMsg(message: _281.QueryAppliedPlanResponse): _281.QueryAppliedPlanResponseAminoMsg;
                fromProtoMsg(message: _281.QueryAppliedPlanResponseProtoMsg): _281.QueryAppliedPlanResponse;
                toProto(message: _281.QueryAppliedPlanResponse): Uint8Array;
                toProtoMsg(message: _281.QueryAppliedPlanResponse): _281.QueryAppliedPlanResponseProtoMsg;
            };
            QueryUpgradedConsensusStateRequest: {
                encode(message: _281.QueryUpgradedConsensusStateRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryUpgradedConsensusStateRequest;
                fromJSON(object: any): _281.QueryUpgradedConsensusStateRequest;
                toJSON(message: _281.QueryUpgradedConsensusStateRequest): unknown;
                fromPartial(object: Partial<_281.QueryUpgradedConsensusStateRequest>): _281.QueryUpgradedConsensusStateRequest;
                fromAmino(object: _281.QueryUpgradedConsensusStateRequestAmino): _281.QueryUpgradedConsensusStateRequest;
                toAmino(message: _281.QueryUpgradedConsensusStateRequest): _281.QueryUpgradedConsensusStateRequestAmino;
                fromAminoMsg(object: _281.QueryUpgradedConsensusStateRequestAminoMsg): _281.QueryUpgradedConsensusStateRequest;
                toAminoMsg(message: _281.QueryUpgradedConsensusStateRequest): _281.QueryUpgradedConsensusStateRequestAminoMsg;
                fromProtoMsg(message: _281.QueryUpgradedConsensusStateRequestProtoMsg): _281.QueryUpgradedConsensusStateRequest;
                toProto(message: _281.QueryUpgradedConsensusStateRequest): Uint8Array;
                toProtoMsg(message: _281.QueryUpgradedConsensusStateRequest): _281.QueryUpgradedConsensusStateRequestProtoMsg;
            };
            QueryUpgradedConsensusStateResponse: {
                encode(message: _281.QueryUpgradedConsensusStateResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryUpgradedConsensusStateResponse;
                fromJSON(object: any): _281.QueryUpgradedConsensusStateResponse;
                toJSON(message: _281.QueryUpgradedConsensusStateResponse): unknown;
                fromPartial(object: Partial<_281.QueryUpgradedConsensusStateResponse>): _281.QueryUpgradedConsensusStateResponse;
                fromAmino(object: _281.QueryUpgradedConsensusStateResponseAmino): _281.QueryUpgradedConsensusStateResponse;
                toAmino(message: _281.QueryUpgradedConsensusStateResponse): _281.QueryUpgradedConsensusStateResponseAmino;
                fromAminoMsg(object: _281.QueryUpgradedConsensusStateResponseAminoMsg): _281.QueryUpgradedConsensusStateResponse;
                toAminoMsg(message: _281.QueryUpgradedConsensusStateResponse): _281.QueryUpgradedConsensusStateResponseAminoMsg;
                fromProtoMsg(message: _281.QueryUpgradedConsensusStateResponseProtoMsg): _281.QueryUpgradedConsensusStateResponse;
                toProto(message: _281.QueryUpgradedConsensusStateResponse): Uint8Array;
                toProtoMsg(message: _281.QueryUpgradedConsensusStateResponse): _281.QueryUpgradedConsensusStateResponseProtoMsg;
            };
            QueryModuleVersionsRequest: {
                encode(message: _281.QueryModuleVersionsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryModuleVersionsRequest;
                fromJSON(object: any): _281.QueryModuleVersionsRequest;
                toJSON(message: _281.QueryModuleVersionsRequest): unknown;
                fromPartial(object: Partial<_281.QueryModuleVersionsRequest>): _281.QueryModuleVersionsRequest;
                fromAmino(object: _281.QueryModuleVersionsRequestAmino): _281.QueryModuleVersionsRequest;
                toAmino(message: _281.QueryModuleVersionsRequest): _281.QueryModuleVersionsRequestAmino;
                fromAminoMsg(object: _281.QueryModuleVersionsRequestAminoMsg): _281.QueryModuleVersionsRequest;
                toAminoMsg(message: _281.QueryModuleVersionsRequest): _281.QueryModuleVersionsRequestAminoMsg;
                fromProtoMsg(message: _281.QueryModuleVersionsRequestProtoMsg): _281.QueryModuleVersionsRequest;
                toProto(message: _281.QueryModuleVersionsRequest): Uint8Array;
                toProtoMsg(message: _281.QueryModuleVersionsRequest): _281.QueryModuleVersionsRequestProtoMsg;
            };
            QueryModuleVersionsResponse: {
                encode(message: _281.QueryModuleVersionsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryModuleVersionsResponse;
                fromJSON(object: any): _281.QueryModuleVersionsResponse;
                toJSON(message: _281.QueryModuleVersionsResponse): unknown;
                fromPartial(object: Partial<_281.QueryModuleVersionsResponse>): _281.QueryModuleVersionsResponse;
                fromAmino(object: _281.QueryModuleVersionsResponseAmino): _281.QueryModuleVersionsResponse;
                toAmino(message: _281.QueryModuleVersionsResponse): _281.QueryModuleVersionsResponseAmino;
                fromAminoMsg(object: _281.QueryModuleVersionsResponseAminoMsg): _281.QueryModuleVersionsResponse;
                toAminoMsg(message: _281.QueryModuleVersionsResponse): _281.QueryModuleVersionsResponseAminoMsg;
                fromProtoMsg(message: _281.QueryModuleVersionsResponseProtoMsg): _281.QueryModuleVersionsResponse;
                toProto(message: _281.QueryModuleVersionsResponse): Uint8Array;
                toProtoMsg(message: _281.QueryModuleVersionsResponse): _281.QueryModuleVersionsResponseProtoMsg;
            };
            QueryAuthorityRequest: {
                encode(_: _281.QueryAuthorityRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryAuthorityRequest;
                fromJSON(_: any): _281.QueryAuthorityRequest;
                toJSON(_: _281.QueryAuthorityRequest): unknown;
                fromPartial(_: Partial<_281.QueryAuthorityRequest>): _281.QueryAuthorityRequest;
                fromAmino(_: _281.QueryAuthorityRequestAmino): _281.QueryAuthorityRequest;
                toAmino(_: _281.QueryAuthorityRequest): _281.QueryAuthorityRequestAmino;
                fromAminoMsg(object: _281.QueryAuthorityRequestAminoMsg): _281.QueryAuthorityRequest;
                toAminoMsg(message: _281.QueryAuthorityRequest): _281.QueryAuthorityRequestAminoMsg;
                fromProtoMsg(message: _281.QueryAuthorityRequestProtoMsg): _281.QueryAuthorityRequest;
                toProto(message: _281.QueryAuthorityRequest): Uint8Array;
                toProtoMsg(message: _281.QueryAuthorityRequest): _281.QueryAuthorityRequestProtoMsg;
            };
            QueryAuthorityResponse: {
                encode(message: _281.QueryAuthorityResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _281.QueryAuthorityResponse;
                fromJSON(object: any): _281.QueryAuthorityResponse;
                toJSON(message: _281.QueryAuthorityResponse): unknown;
                fromPartial(object: Partial<_281.QueryAuthorityResponse>): _281.QueryAuthorityResponse;
                fromAmino(object: _281.QueryAuthorityResponseAmino): _281.QueryAuthorityResponse;
                toAmino(message: _281.QueryAuthorityResponse): _281.QueryAuthorityResponseAmino;
                fromAminoMsg(object: _281.QueryAuthorityResponseAminoMsg): _281.QueryAuthorityResponse;
                toAminoMsg(message: _281.QueryAuthorityResponse): _281.QueryAuthorityResponseAminoMsg;
                fromProtoMsg(message: _281.QueryAuthorityResponseProtoMsg): _281.QueryAuthorityResponse;
                toProto(message: _281.QueryAuthorityResponse): Uint8Array;
                toProtoMsg(message: _281.QueryAuthorityResponse): _281.QueryAuthorityResponseProtoMsg;
            };
        };
    }
    namespace vesting {
        const v1beta1: {
            MsgClientImpl: typeof _463.MsgClientImpl;
            registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createVestingAccount(value: _284.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPermanentLockedAccount(value: _284.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    createPeriodicVestingAccount(value: _284.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createVestingAccount(value: _284.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _284.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _284.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _284.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _284.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _284.MsgCreatePeriodicVestingAccount;
                    };
                };
                toJSON: {
                    createVestingAccount(value: _284.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPermanentLockedAccount(value: _284.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                    createPeriodicVestingAccount(value: _284.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createVestingAccount(value: any): {
                        typeUrl: string;
                        value: _284.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: any): {
                        typeUrl: string;
                        value: _284.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: any): {
                        typeUrl: string;
                        value: _284.MsgCreatePeriodicVestingAccount;
                    };
                };
                fromPartial: {
                    createVestingAccount(value: _284.MsgCreateVestingAccount): {
                        typeUrl: string;
                        value: _284.MsgCreateVestingAccount;
                    };
                    createPermanentLockedAccount(value: _284.MsgCreatePermanentLockedAccount): {
                        typeUrl: string;
                        value: _284.MsgCreatePermanentLockedAccount;
                    };
                    createPeriodicVestingAccount(value: _284.MsgCreatePeriodicVestingAccount): {
                        typeUrl: string;
                        value: _284.MsgCreatePeriodicVestingAccount;
                    };
                };
            };
            AminoConverter: {
                "/cosmos.vesting.v1beta1.MsgCreateVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _284.MsgCreateVestingAccount) => _284.MsgCreateVestingAccountAmino;
                    fromAmino: (object: _284.MsgCreateVestingAccountAmino) => _284.MsgCreateVestingAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePermanentLockedAccount": {
                    aminoType: string;
                    toAmino: (message: _284.MsgCreatePermanentLockedAccount) => _284.MsgCreatePermanentLockedAccountAmino;
                    fromAmino: (object: _284.MsgCreatePermanentLockedAccountAmino) => _284.MsgCreatePermanentLockedAccount;
                };
                "/cosmos.vesting.v1beta1.MsgCreatePeriodicVestingAccount": {
                    aminoType: string;
                    toAmino: (message: _284.MsgCreatePeriodicVestingAccount) => _284.MsgCreatePeriodicVestingAccountAmino;
                    fromAmino: (object: _284.MsgCreatePeriodicVestingAccountAmino) => _284.MsgCreatePeriodicVestingAccount;
                };
            };
            BaseVestingAccount: {
                encode(message: _285.BaseVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.BaseVestingAccount;
                fromJSON(object: any): _285.BaseVestingAccount;
                toJSON(message: _285.BaseVestingAccount): unknown;
                fromPartial(object: Partial<_285.BaseVestingAccount>): _285.BaseVestingAccount;
                fromAmino(object: _285.BaseVestingAccountAmino): _285.BaseVestingAccount;
                toAmino(message: _285.BaseVestingAccount): _285.BaseVestingAccountAmino;
                fromAminoMsg(object: _285.BaseVestingAccountAminoMsg): _285.BaseVestingAccount;
                toAminoMsg(message: _285.BaseVestingAccount): _285.BaseVestingAccountAminoMsg;
                fromProtoMsg(message: _285.BaseVestingAccountProtoMsg): _285.BaseVestingAccount;
                toProto(message: _285.BaseVestingAccount): Uint8Array;
                toProtoMsg(message: _285.BaseVestingAccount): _285.BaseVestingAccountProtoMsg;
            };
            ContinuousVestingAccount: {
                encode(message: _285.ContinuousVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.ContinuousVestingAccount;
                fromJSON(object: any): _285.ContinuousVestingAccount;
                toJSON(message: _285.ContinuousVestingAccount): unknown;
                fromPartial(object: Partial<_285.ContinuousVestingAccount>): _285.ContinuousVestingAccount;
                fromAmino(object: _285.ContinuousVestingAccountAmino): _285.ContinuousVestingAccount;
                toAmino(message: _285.ContinuousVestingAccount): _285.ContinuousVestingAccountAmino;
                fromAminoMsg(object: _285.ContinuousVestingAccountAminoMsg): _285.ContinuousVestingAccount;
                toAminoMsg(message: _285.ContinuousVestingAccount): _285.ContinuousVestingAccountAminoMsg;
                fromProtoMsg(message: _285.ContinuousVestingAccountProtoMsg): _285.ContinuousVestingAccount;
                toProto(message: _285.ContinuousVestingAccount): Uint8Array;
                toProtoMsg(message: _285.ContinuousVestingAccount): _285.ContinuousVestingAccountProtoMsg;
            };
            DelayedVestingAccount: {
                encode(message: _285.DelayedVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.DelayedVestingAccount;
                fromJSON(object: any): _285.DelayedVestingAccount;
                toJSON(message: _285.DelayedVestingAccount): unknown;
                fromPartial(object: Partial<_285.DelayedVestingAccount>): _285.DelayedVestingAccount;
                fromAmino(object: _285.DelayedVestingAccountAmino): _285.DelayedVestingAccount;
                toAmino(message: _285.DelayedVestingAccount): _285.DelayedVestingAccountAmino;
                fromAminoMsg(object: _285.DelayedVestingAccountAminoMsg): _285.DelayedVestingAccount;
                toAminoMsg(message: _285.DelayedVestingAccount): _285.DelayedVestingAccountAminoMsg;
                fromProtoMsg(message: _285.DelayedVestingAccountProtoMsg): _285.DelayedVestingAccount;
                toProto(message: _285.DelayedVestingAccount): Uint8Array;
                toProtoMsg(message: _285.DelayedVestingAccount): _285.DelayedVestingAccountProtoMsg;
            };
            Period: {
                encode(message: _285.Period, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.Period;
                fromJSON(object: any): _285.Period;
                toJSON(message: _285.Period): unknown;
                fromPartial(object: Partial<_285.Period>): _285.Period;
                fromAmino(object: _285.PeriodAmino): _285.Period;
                toAmino(message: _285.Period): _285.PeriodAmino;
                fromAminoMsg(object: _285.PeriodAminoMsg): _285.Period;
                toAminoMsg(message: _285.Period): _285.PeriodAminoMsg;
                fromProtoMsg(message: _285.PeriodProtoMsg): _285.Period;
                toProto(message: _285.Period): Uint8Array;
                toProtoMsg(message: _285.Period): _285.PeriodProtoMsg;
            };
            PeriodicVestingAccount: {
                encode(message: _285.PeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.PeriodicVestingAccount;
                fromJSON(object: any): _285.PeriodicVestingAccount;
                toJSON(message: _285.PeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_285.PeriodicVestingAccount>): _285.PeriodicVestingAccount;
                fromAmino(object: _285.PeriodicVestingAccountAmino): _285.PeriodicVestingAccount;
                toAmino(message: _285.PeriodicVestingAccount): _285.PeriodicVestingAccountAmino;
                fromAminoMsg(object: _285.PeriodicVestingAccountAminoMsg): _285.PeriodicVestingAccount;
                toAminoMsg(message: _285.PeriodicVestingAccount): _285.PeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _285.PeriodicVestingAccountProtoMsg): _285.PeriodicVestingAccount;
                toProto(message: _285.PeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _285.PeriodicVestingAccount): _285.PeriodicVestingAccountProtoMsg;
            };
            PermanentLockedAccount: {
                encode(message: _285.PermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _285.PermanentLockedAccount;
                fromJSON(object: any): _285.PermanentLockedAccount;
                toJSON(message: _285.PermanentLockedAccount): unknown;
                fromPartial(object: Partial<_285.PermanentLockedAccount>): _285.PermanentLockedAccount;
                fromAmino(object: _285.PermanentLockedAccountAmino): _285.PermanentLockedAccount;
                toAmino(message: _285.PermanentLockedAccount): _285.PermanentLockedAccountAmino;
                fromAminoMsg(object: _285.PermanentLockedAccountAminoMsg): _285.PermanentLockedAccount;
                toAminoMsg(message: _285.PermanentLockedAccount): _285.PermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _285.PermanentLockedAccountProtoMsg): _285.PermanentLockedAccount;
                toProto(message: _285.PermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _285.PermanentLockedAccount): _285.PermanentLockedAccountProtoMsg;
            };
            MsgCreateVestingAccount: {
                encode(message: _284.MsgCreateVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreateVestingAccount;
                fromJSON(object: any): _284.MsgCreateVestingAccount;
                toJSON(message: _284.MsgCreateVestingAccount): unknown;
                fromPartial(object: Partial<_284.MsgCreateVestingAccount>): _284.MsgCreateVestingAccount;
                fromAmino(object: _284.MsgCreateVestingAccountAmino): _284.MsgCreateVestingAccount;
                toAmino(message: _284.MsgCreateVestingAccount): _284.MsgCreateVestingAccountAmino;
                fromAminoMsg(object: _284.MsgCreateVestingAccountAminoMsg): _284.MsgCreateVestingAccount;
                toAminoMsg(message: _284.MsgCreateVestingAccount): _284.MsgCreateVestingAccountAminoMsg;
                fromProtoMsg(message: _284.MsgCreateVestingAccountProtoMsg): _284.MsgCreateVestingAccount;
                toProto(message: _284.MsgCreateVestingAccount): Uint8Array;
                toProtoMsg(message: _284.MsgCreateVestingAccount): _284.MsgCreateVestingAccountProtoMsg;
            };
            MsgCreateVestingAccountResponse: {
                encode(_: _284.MsgCreateVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreateVestingAccountResponse;
                fromJSON(_: any): _284.MsgCreateVestingAccountResponse;
                toJSON(_: _284.MsgCreateVestingAccountResponse): unknown;
                fromPartial(_: Partial<_284.MsgCreateVestingAccountResponse>): _284.MsgCreateVestingAccountResponse;
                fromAmino(_: _284.MsgCreateVestingAccountResponseAmino): _284.MsgCreateVestingAccountResponse;
                toAmino(_: _284.MsgCreateVestingAccountResponse): _284.MsgCreateVestingAccountResponseAmino;
                fromAminoMsg(object: _284.MsgCreateVestingAccountResponseAminoMsg): _284.MsgCreateVestingAccountResponse;
                toAminoMsg(message: _284.MsgCreateVestingAccountResponse): _284.MsgCreateVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _284.MsgCreateVestingAccountResponseProtoMsg): _284.MsgCreateVestingAccountResponse;
                toProto(message: _284.MsgCreateVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _284.MsgCreateVestingAccountResponse): _284.MsgCreateVestingAccountResponseProtoMsg;
            };
            MsgCreatePermanentLockedAccount: {
                encode(message: _284.MsgCreatePermanentLockedAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreatePermanentLockedAccount;
                fromJSON(object: any): _284.MsgCreatePermanentLockedAccount;
                toJSON(message: _284.MsgCreatePermanentLockedAccount): unknown;
                fromPartial(object: Partial<_284.MsgCreatePermanentLockedAccount>): _284.MsgCreatePermanentLockedAccount;
                fromAmino(object: _284.MsgCreatePermanentLockedAccountAmino): _284.MsgCreatePermanentLockedAccount;
                toAmino(message: _284.MsgCreatePermanentLockedAccount): _284.MsgCreatePermanentLockedAccountAmino;
                fromAminoMsg(object: _284.MsgCreatePermanentLockedAccountAminoMsg): _284.MsgCreatePermanentLockedAccount;
                toAminoMsg(message: _284.MsgCreatePermanentLockedAccount): _284.MsgCreatePermanentLockedAccountAminoMsg;
                fromProtoMsg(message: _284.MsgCreatePermanentLockedAccountProtoMsg): _284.MsgCreatePermanentLockedAccount;
                toProto(message: _284.MsgCreatePermanentLockedAccount): Uint8Array;
                toProtoMsg(message: _284.MsgCreatePermanentLockedAccount): _284.MsgCreatePermanentLockedAccountProtoMsg;
            };
            MsgCreatePermanentLockedAccountResponse: {
                encode(_: _284.MsgCreatePermanentLockedAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreatePermanentLockedAccountResponse;
                fromJSON(_: any): _284.MsgCreatePermanentLockedAccountResponse;
                toJSON(_: _284.MsgCreatePermanentLockedAccountResponse): unknown;
                fromPartial(_: Partial<_284.MsgCreatePermanentLockedAccountResponse>): _284.MsgCreatePermanentLockedAccountResponse;
                fromAmino(_: _284.MsgCreatePermanentLockedAccountResponseAmino): _284.MsgCreatePermanentLockedAccountResponse;
                toAmino(_: _284.MsgCreatePermanentLockedAccountResponse): _284.MsgCreatePermanentLockedAccountResponseAmino;
                fromAminoMsg(object: _284.MsgCreatePermanentLockedAccountResponseAminoMsg): _284.MsgCreatePermanentLockedAccountResponse;
                toAminoMsg(message: _284.MsgCreatePermanentLockedAccountResponse): _284.MsgCreatePermanentLockedAccountResponseAminoMsg;
                fromProtoMsg(message: _284.MsgCreatePermanentLockedAccountResponseProtoMsg): _284.MsgCreatePermanentLockedAccountResponse;
                toProto(message: _284.MsgCreatePermanentLockedAccountResponse): Uint8Array;
                toProtoMsg(message: _284.MsgCreatePermanentLockedAccountResponse): _284.MsgCreatePermanentLockedAccountResponseProtoMsg;
            };
            MsgCreatePeriodicVestingAccount: {
                encode(message: _284.MsgCreatePeriodicVestingAccount, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreatePeriodicVestingAccount;
                fromJSON(object: any): _284.MsgCreatePeriodicVestingAccount;
                toJSON(message: _284.MsgCreatePeriodicVestingAccount): unknown;
                fromPartial(object: Partial<_284.MsgCreatePeriodicVestingAccount>): _284.MsgCreatePeriodicVestingAccount;
                fromAmino(object: _284.MsgCreatePeriodicVestingAccountAmino): _284.MsgCreatePeriodicVestingAccount;
                toAmino(message: _284.MsgCreatePeriodicVestingAccount): _284.MsgCreatePeriodicVestingAccountAmino;
                fromAminoMsg(object: _284.MsgCreatePeriodicVestingAccountAminoMsg): _284.MsgCreatePeriodicVestingAccount;
                toAminoMsg(message: _284.MsgCreatePeriodicVestingAccount): _284.MsgCreatePeriodicVestingAccountAminoMsg;
                fromProtoMsg(message: _284.MsgCreatePeriodicVestingAccountProtoMsg): _284.MsgCreatePeriodicVestingAccount;
                toProto(message: _284.MsgCreatePeriodicVestingAccount): Uint8Array;
                toProtoMsg(message: _284.MsgCreatePeriodicVestingAccount): _284.MsgCreatePeriodicVestingAccountProtoMsg;
            };
            MsgCreatePeriodicVestingAccountResponse: {
                encode(_: _284.MsgCreatePeriodicVestingAccountResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _284.MsgCreatePeriodicVestingAccountResponse;
                fromJSON(_: any): _284.MsgCreatePeriodicVestingAccountResponse;
                toJSON(_: _284.MsgCreatePeriodicVestingAccountResponse): unknown;
                fromPartial(_: Partial<_284.MsgCreatePeriodicVestingAccountResponse>): _284.MsgCreatePeriodicVestingAccountResponse;
                fromAmino(_: _284.MsgCreatePeriodicVestingAccountResponseAmino): _284.MsgCreatePeriodicVestingAccountResponse;
                toAmino(_: _284.MsgCreatePeriodicVestingAccountResponse): _284.MsgCreatePeriodicVestingAccountResponseAmino;
                fromAminoMsg(object: _284.MsgCreatePeriodicVestingAccountResponseAminoMsg): _284.MsgCreatePeriodicVestingAccountResponse;
                toAminoMsg(message: _284.MsgCreatePeriodicVestingAccountResponse): _284.MsgCreatePeriodicVestingAccountResponseAminoMsg;
                fromProtoMsg(message: _284.MsgCreatePeriodicVestingAccountResponseProtoMsg): _284.MsgCreatePeriodicVestingAccountResponse;
                toProto(message: _284.MsgCreatePeriodicVestingAccountResponse): Uint8Array;
                toProtoMsg(message: _284.MsgCreatePeriodicVestingAccountResponse): _284.MsgCreatePeriodicVestingAccountResponseProtoMsg;
            };
        };
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: _450.MsgClientImpl;
                };
                bank: {
                    v1beta1: _451.MsgClientImpl;
                };
                crisis: {
                    v1beta1: _452.MsgClientImpl;
                };
                distribution: {
                    v1beta1: _453.MsgClientImpl;
                };
                evidence: {
                    v1beta1: _454.MsgClientImpl;
                };
                feegrant: {
                    v1beta1: _455.MsgClientImpl;
                };
                gov: {
                    v1: _456.MsgClientImpl;
                    v1beta1: _457.MsgClientImpl;
                };
                group: {
                    v1: _458.MsgClientImpl;
                };
                nft: {
                    v1beta1: _459.MsgClientImpl;
                };
                slashing: {
                    v1beta1: _460.MsgClientImpl;
                };
                staking: {
                    v1beta1: _461.MsgClientImpl;
                };
                upgrade: {
                    v1beta1: _462.MsgClientImpl;
                };
                vesting: {
                    v1beta1: _463.MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: _196.QueryConfigRequest): Promise<_196.QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: _199.QueryAccountsRequest): Promise<_199.QueryAccountsResponse>;
                        account(request: _199.QueryAccountRequest): Promise<_199.QueryAccountResponse>;
                        params(request?: _199.QueryParamsRequest): Promise<_199.QueryParamsResponse>;
                        moduleAccounts(request?: _199.QueryModuleAccountsRequest): Promise<_199.QueryModuleAccountsResponse>;
                        bech32Prefix(request?: _199.Bech32PrefixRequest): Promise<_199.Bech32PrefixResponse>;
                        addressBytesToString(request: _199.AddressBytesToStringRequest): Promise<_199.AddressBytesToStringResponse>;
                        addressStringToBytes(request: _199.AddressStringToBytesRequest): Promise<_199.AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: _203.QueryGrantsRequest): Promise<_203.QueryGrantsResponse>;
                        granterGrants(request: _203.QueryGranterGrantsRequest): Promise<_203.QueryGranterGrantsResponse>;
                        granteeGrants(request: _203.QueryGranteeGrantsRequest): Promise<_203.QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: _208.QueryBalanceRequest): Promise<_208.QueryBalanceResponse>;
                        allBalances(request: _208.QueryAllBalancesRequest): Promise<_208.QueryAllBalancesResponse>;
                        spendableBalances(request: _208.QuerySpendableBalancesRequest): Promise<_208.QuerySpendableBalancesResponse>;
                        totalSupply(request?: _208.QueryTotalSupplyRequest): Promise<_208.QueryTotalSupplyResponse>;
                        supplyOf(request: _208.QuerySupplyOfRequest): Promise<_208.QuerySupplyOfResponse>;
                        params(request?: _208.QueryParamsRequest): Promise<_208.QueryParamsResponse>;
                        denomMetadata(request: _208.QueryDenomMetadataRequest): Promise<_208.QueryDenomMetadataResponse>;
                        denomsMetadata(request?: _208.QueryDenomsMetadataRequest): Promise<_208.QueryDenomsMetadataResponse>;
                        denomOwners(request: _208.QueryDenomOwnersRequest): Promise<_208.QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: _218.GetNodeInfoRequest): Promise<_218.GetNodeInfoResponse>;
                            getSyncing(request?: _218.GetSyncingRequest): Promise<_218.GetSyncingResponse>;
                            getLatestBlock(request?: _218.GetLatestBlockRequest): Promise<_218.GetLatestBlockResponse>;
                            getBlockByHeight(request: _218.GetBlockByHeightRequest): Promise<_218.GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: _218.GetLatestValidatorSetRequest): Promise<_218.GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: _218.GetValidatorSetByHeightRequest): Promise<_218.GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: _232.QueryParamsRequest): Promise<_232.QueryParamsResponse>;
                        validatorOutstandingRewards(request: _232.QueryValidatorOutstandingRewardsRequest): Promise<_232.QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: _232.QueryValidatorCommissionRequest): Promise<_232.QueryValidatorCommissionResponse>;
                        validatorSlashes(request: _232.QueryValidatorSlashesRequest): Promise<_232.QueryValidatorSlashesResponse>;
                        delegationRewards(request: _232.QueryDelegationRewardsRequest): Promise<_232.QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: _232.QueryDelegationTotalRewardsRequest): Promise<_232.QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: _232.QueryDelegatorValidatorsRequest): Promise<_232.QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: _232.QueryDelegatorWithdrawAddressRequest): Promise<_232.QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: _232.QueryCommunityPoolRequest): Promise<_232.QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: _236.QueryEvidenceRequest): Promise<_236.QueryEvidenceResponse>;
                        allEvidence(request?: _236.QueryAllEvidenceRequest): Promise<_236.QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: _240.QueryAllowanceRequest): Promise<_240.QueryAllowanceResponse>;
                        allowances(request: _240.QueryAllowancesRequest): Promise<_240.QueryAllowancesResponse>;
                        allowancesByGranter(request: _240.QueryAllowancesByGranterRequest): Promise<_240.QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: _245.QueryProposalRequest): Promise<_245.QueryProposalResponse>;
                        proposals(request: _245.QueryProposalsRequest): Promise<_245.QueryProposalsResponse>;
                        vote(request: _245.QueryVoteRequest): Promise<_245.QueryVoteResponse>;
                        votes(request: _245.QueryVotesRequest): Promise<_245.QueryVotesResponse>;
                        params(request: _245.QueryParamsRequest): Promise<_245.QueryParamsResponse>;
                        deposit(request: _245.QueryDepositRequest): Promise<_245.QueryDepositResponse>;
                        deposits(request: _245.QueryDepositsRequest): Promise<_245.QueryDepositsResponse>;
                        tallyResult(request: _245.QueryTallyResultRequest): Promise<_245.QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: _249.QueryProposalRequest): Promise<_249.QueryProposalResponse>;
                        proposals(request: _249.QueryProposalsRequest): Promise<_249.QueryProposalsResponse>;
                        vote(request: _249.QueryVoteRequest): Promise<_249.QueryVoteResponse>;
                        votes(request: _249.QueryVotesRequest): Promise<_249.QueryVotesResponse>;
                        params(request: _249.QueryParamsRequest): Promise<_249.QueryParamsResponse>;
                        deposit(request: _249.QueryDepositRequest): Promise<_249.QueryDepositResponse>;
                        deposits(request: _249.QueryDepositsRequest): Promise<_249.QueryDepositsResponse>;
                        tallyResult(request: _249.QueryTallyResultRequest): Promise<_249.QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: _253.QueryGroupInfoRequest): Promise<_253.QueryGroupInfoResponse>;
                        groupPolicyInfo(request: _253.QueryGroupPolicyInfoRequest): Promise<_253.QueryGroupPolicyInfoResponse>;
                        groupMembers(request: _253.QueryGroupMembersRequest): Promise<_253.QueryGroupMembersResponse>;
                        groupsByAdmin(request: _253.QueryGroupsByAdminRequest): Promise<_253.QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: _253.QueryGroupPoliciesByGroupRequest): Promise<_253.QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: _253.QueryGroupPoliciesByAdminRequest): Promise<_253.QueryGroupPoliciesByAdminResponse>;
                        proposal(request: _253.QueryProposalRequest): Promise<_253.QueryProposalResponse>;
                        proposalsByGroupPolicy(request: _253.QueryProposalsByGroupPolicyRequest): Promise<_253.QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: _253.QueryVoteByProposalVoterRequest): Promise<_253.QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: _253.QueryVotesByProposalRequest): Promise<_253.QueryVotesByProposalResponse>;
                        votesByVoter(request: _253.QueryVotesByVoterRequest): Promise<_253.QueryVotesByVoterResponse>;
                        groupsByMember(request: _253.QueryGroupsByMemberRequest): Promise<_253.QueryGroupsByMemberResponse>;
                        tallyResult(request: _253.QueryTallyResultRequest): Promise<_253.QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: _258.QueryParamsRequest): Promise<_258.QueryParamsResponse>;
                        inflation(request?: _258.QueryInflationRequest): Promise<_258.QueryInflationResponse>;
                        annualProvisions(request?: _258.QueryAnnualProvisionsRequest): Promise<_258.QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: _263.QueryBalanceRequest): Promise<_263.QueryBalanceResponse>;
                        owner(request: _263.QueryOwnerRequest): Promise<_263.QueryOwnerResponse>;
                        supply(request: _263.QuerySupplyRequest): Promise<_263.QuerySupplyResponse>;
                        nFTs(request: _263.QueryNFTsRequest): Promise<_263.QueryNFTsResponse>;
                        nFT(request: _263.QueryNFTRequest): Promise<_263.QueryNFTResponse>;
                        class(request: _263.QueryClassRequest): Promise<_263.QueryClassResponse>;
                        classes(request?: _263.QueryClassesRequest): Promise<_263.QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: _268.QueryParamsRequest): Promise<_268.QueryParamsResponse>;
                        subspaces(request?: _268.QuerySubspacesRequest): Promise<_268.QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: _270.QueryParamsRequest): Promise<_270.QueryParamsResponse>;
                        signingInfo(request: _270.QuerySigningInfoRequest): Promise<_270.QuerySigningInfoResponse>;
                        signingInfos(request?: _270.QuerySigningInfosRequest): Promise<_270.QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: _275.QueryValidatorsRequest): Promise<_275.QueryValidatorsResponse>;
                        validator(request: _275.QueryValidatorRequest): Promise<_275.QueryValidatorResponse>;
                        validatorDelegations(request: _275.QueryValidatorDelegationsRequest): Promise<_275.QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: _275.QueryValidatorUnbondingDelegationsRequest): Promise<_275.QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: _275.QueryDelegationRequest): Promise<_275.QueryDelegationResponse>;
                        unbondingDelegation(request: _275.QueryUnbondingDelegationRequest): Promise<_275.QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: _275.QueryDelegatorDelegationsRequest): Promise<_275.QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: _275.QueryDelegatorUnbondingDelegationsRequest): Promise<_275.QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: _275.QueryRedelegationsRequest): Promise<_275.QueryRedelegationsResponse>;
                        delegatorValidators(request: _275.QueryDelegatorValidatorsRequest): Promise<_275.QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: _275.QueryDelegatorValidatorRequest): Promise<_275.QueryDelegatorValidatorResponse>;
                        historicalInfo(request: _275.QueryHistoricalInfoRequest): Promise<_275.QueryHistoricalInfoResponse>;
                        pool(request?: _275.QueryPoolRequest): Promise<_275.QueryPoolResponse>;
                        params(request?: _275.QueryParamsRequest): Promise<_275.QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: _279.SimulateRequest): Promise<_279.SimulateResponse>;
                        getTx(request: _279.GetTxRequest): Promise<_279.GetTxResponse>;
                        broadcastTx(request: _279.BroadcastTxRequest): Promise<_279.BroadcastTxResponse>;
                        getTxsEvent(request: _279.GetTxsEventRequest): Promise<_279.GetTxsEventResponse>;
                        getBlockWithTxs(request: _279.GetBlockWithTxsRequest): Promise<_279.GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: _281.QueryCurrentPlanRequest): Promise<_281.QueryCurrentPlanResponse>;
                        appliedPlan(request: _281.QueryAppliedPlanRequest): Promise<_281.QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: _281.QueryUpgradedConsensusStateRequest): Promise<_281.QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: _281.QueryModuleVersionsRequest): Promise<_281.QueryModuleVersionsResponse>;
                        authority(request?: _281.QueryAuthorityRequest): Promise<_281.QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
