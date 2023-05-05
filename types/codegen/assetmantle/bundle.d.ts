import * as _1 from "../assets/genesis/genesis";
import * as _2 from "../assets/key/key";
import * as _3 from "../assets/mappable/mappable";
import * as _4 from "../assets/queries/asset/query_request";
import * as _5 from "../assets/queries/asset/query_response";
import * as _7 from "../assets/queries/assets/query_request";
import * as _8 from "../assets/queries/assets/query_response";
import * as _10 from "../assets/transactions/burn/message";
import * as _12 from "../assets/transactions/burn/transaction_response";
import * as _13 from "../assets/transactions/define/message";
import * as _15 from "../assets/transactions/define/transaction_response";
import * as _16 from "../assets/transactions/deputize/message";
import * as _18 from "../assets/transactions/deputize/transaction_response";
import * as _19 from "../assets/transactions/mint/message";
import * as _21 from "../assets/transactions/mint/transaction_response";
import * as _22 from "../assets/transactions/mutate/message";
import * as _24 from "../assets/transactions/mutate/transaction_response";
import * as _25 from "../assets/transactions/renumerate/message";
import * as _27 from "../assets/transactions/renumerate/transaction_response";
import * as _28 from "../assets/transactions/revoke/message";
import * as _30 from "../assets/transactions/revoke/transaction_response";
import * as _31 from "../classifications/genesis/genesis";
import * as _32 from "../classifications/key/key";
import * as _33 from "../classifications/mappable/mappable";
import * as _34 from "../classifications/queries/classification/query_request";
import * as _35 from "../classifications/queries/classification/query_response";
import * as _37 from "../classifications/queries/classifications/query_request";
import * as _38 from "../classifications/queries/classifications/query_response";
import * as _40 from "../identities/genesis/genesis";
import * as _41 from "../identities/key/key";
import * as _42 from "../identities/mappable/mappable";
import * as _43 from "../identities/queries/identities/query_request";
import * as _44 from "../identities/queries/identities/query_response";
import * as _46 from "../identities/queries/identity/query_request";
import * as _47 from "../identities/queries/identity/query_response";
import * as _49 from "../identities/transactions/define/message";
import * as _51 from "../identities/transactions/define/transaction_response";
import * as _52 from "../identities/transactions/deputize/message";
import * as _54 from "../identities/transactions/deputize/transaction_response";
import * as _55 from "../identities/transactions/issue/message";
import * as _57 from "../identities/transactions/issue/transaction_response";
import * as _58 from "../identities/transactions/mutate/message";
import * as _60 from "../identities/transactions/mutate/transaction_response";
import * as _61 from "../identities/transactions/nub/message";
import * as _63 from "../identities/transactions/nub/transaction_response";
import * as _64 from "../identities/transactions/provision/message";
import * as _66 from "../identities/transactions/provision/transaction_response";
import * as _67 from "../identities/transactions/quash/message";
import * as _69 from "../identities/transactions/quash/transaction_response";
import * as _70 from "../identities/transactions/revoke/message";
import * as _72 from "../identities/transactions/revoke/transaction_response";
import * as _73 from "../identities/transactions/unprovision/message";
import * as _75 from "../identities/transactions/unprovision/transaction_response";
import * as _76 from "../maintainers/genesis/genesis";
import * as _77 from "../maintainers/key/key";
import * as _78 from "../maintainers/mappable/mappable";
import * as _79 from "../maintainers/queries/maintainer/query_request";
import * as _80 from "../maintainers/queries/maintainer/query_response";
import * as _82 from "../maintainers/queries/maintainers/query_request";
import * as _83 from "../maintainers/queries/maintainers/query_response";
import * as _85 from "../metas/genesis/genesis";
import * as _86 from "../metas/key/key";
import * as _87 from "../metas/mappable/mappable";
import * as _88 from "../metas/queries/meta/query_request";
import * as _89 from "../metas/queries/meta/query_response";
import * as _91 from "../metas/queries/metas/query_request";
import * as _92 from "../metas/queries/metas/query_response";
import * as _94 from "../metas/transactions/reveal/message";
import * as _96 from "../metas/transactions/reveal/transaction_response";
import * as _97 from "../orders/genesis/genesis";
import * as _98 from "../orders/key/key";
import * as _99 from "../orders/mappable/mappable";
import * as _100 from "../orders/queries/order/query_request";
import * as _101 from "../orders/queries/order/query_response";
import * as _103 from "../orders/queries/orders/query_request";
import * as _104 from "../orders/queries/orders/query_response";
import * as _106 from "../orders/transactions/cancel/message";
import * as _108 from "../orders/transactions/cancel/transaction_response";
import * as _109 from "../orders/transactions/define/message";
import * as _111 from "../orders/transactions/define/transaction_response";
import * as _112 from "../orders/transactions/deputize/message";
import * as _114 from "../orders/transactions/deputize/transaction_response";
import * as _115 from "../orders/transactions/immediate/message";
import * as _117 from "../orders/transactions/immediate/transaction_response";
import * as _118 from "../orders/transactions/make/message";
import * as _120 from "../orders/transactions/make/transaction_response";
import * as _121 from "../orders/transactions/modify/message";
import * as _123 from "../orders/transactions/modify/transaction_response";
import * as _124 from "../orders/transactions/revoke/message";
import * as _126 from "../orders/transactions/revoke/transaction_response";
import * as _127 from "../orders/transactions/take/message";
import * as _129 from "../orders/transactions/take/transaction_response";
import * as _130 from "../splits/genesis/genesis";
import * as _131 from "../splits/key/key";
import * as _132 from "../splits/mappable/mappable";
import * as _133 from "../splits/queries/ownable/query_request";
import * as _134 from "../splits/queries/ownable/query_response";
import * as _136 from "../splits/queries/split/query_request";
import * as _137 from "../splits/queries/split/query_response";
import * as _139 from "../splits/queries/splits/query_request";
import * as _140 from "../splits/queries/splits/query_response";
import * as _142 from "../splits/transactions/send/message";
import * as _144 from "../splits/transactions/send/transaction_response";
import * as _145 from "../splits/transactions/unwrap/message";
import * as _147 from "../splits/transactions/unwrap/transaction_response";
import * as _148 from "../splits/transactions/wrap/message";
import * as _150 from "../splits/transactions/wrap/transaction_response";
import * as _151 from "../data/base/acc_address_data";
import * as _152 from "../data/base/any_data";
import * as _153 from "../data/base/boolean_data";
import * as _154 from "../data/base/dec_data";
import * as _155 from "../data/base/height_data";
import * as _156 from "../data/base/id_data";
import * as _157 from "../data/base/number_data";
import * as _158 from "../data/base/string_data";
import * as _159 from "../documents/base/document";
import * as _160 from "../ids/base/any_id";
import * as _161 from "../ids/base/any_ownable_id";
import * as _162 from "../ids/base/asset_id";
import * as _163 from "../ids/base/classification_id";
import * as _164 from "../ids/base/coin_id";
import * as _165 from "../ids/base/data_id";
import * as _166 from "../ids/base/hash_id";
import * as _167 from "../ids/base/identity_id";
import * as _168 from "../ids/base/maintainer_id";
import * as _169 from "../ids/base/order_id";
import * as _170 from "../ids/base/property_id";
import * as _171 from "../ids/base/split_id";
import * as _172 from "../ids/base/string_id";
import * as _173 from "../lists/base/id_list";
import * as _174 from "../lists/base/property_list";
import * as _175 from "../parameters/base/parameter_list";
import * as _176 from "../parameters/base/parameter";
import * as _177 from "../properties/base/any_property";
import * as _178 from "../properties/base/mesa_property";
import * as _179 from "../properties/base/meta_property";
import * as _180 from "../qualified/base/immutables";
import * as _181 from "../qualified/base/mutables";
import * as _182 from "../types/base/height";
import * as _183 from "../types/base/split";
import * as _352 from "../assets/queries/asset/service.rpc.Service";
import * as _353 from "../assets/queries/assets/service.rpc.Service";
import * as _354 from "../classifications/queries/classification/service.rpc.Service";
import * as _355 from "../classifications/queries/classifications/service.rpc.Service";
import * as _356 from "../identities/queries/identities/service.rpc.Service";
import * as _357 from "../identities/queries/identity/service.rpc.Service";
import * as _358 from "../maintainers/queries/maintainer/service.rpc.Service";
import * as _359 from "../maintainers/queries/maintainers/service.rpc.Service";
import * as _360 from "../metas/queries/meta/service.rpc.Service";
import * as _361 from "../metas/queries/metas/service.rpc.Service";
import * as _362 from "../orders/queries/order/service.rpc.Service";
import * as _363 from "../orders/queries/orders/service.rpc.Service";
import * as _364 from "../splits/queries/ownable/service.rpc.Service";
import * as _365 from "../splits/queries/split/service.rpc.Service";
import * as _366 from "../splits/queries/splits/service.rpc.Service";
import * as _367 from "../assets/transactions/burn/service.rpc.msg";
import * as _368 from "../assets/transactions/define/service.rpc.msg";
import * as _369 from "../assets/transactions/deputize/service.rpc.msg";
import * as _370 from "../assets/transactions/mint/service.rpc.msg";
import * as _371 from "../assets/transactions/mutate/service.rpc.msg";
import * as _372 from "../assets/transactions/renumerate/service.rpc.msg";
import * as _373 from "../assets/transactions/revoke/service.rpc.msg";
import * as _374 from "../identities/transactions/define/service.rpc.msg";
import * as _375 from "../identities/transactions/deputize/service.rpc.msg";
import * as _376 from "../identities/transactions/issue/service.rpc.msg";
import * as _377 from "../identities/transactions/mutate/service.rpc.msg";
import * as _378 from "../identities/transactions/nub/service.rpc.msg";
import * as _379 from "../identities/transactions/provision/service.rpc.msg";
import * as _380 from "../identities/transactions/quash/service.rpc.msg";
import * as _381 from "../identities/transactions/revoke/service.rpc.msg";
import * as _382 from "../identities/transactions/unprovision/service.rpc.msg";
import * as _383 from "../metas/transactions/reveal/service.rpc.msg";
import * as _384 from "../orders/transactions/cancel/service.rpc.msg";
import * as _385 from "../orders/transactions/define/service.rpc.msg";
import * as _386 from "../orders/transactions/deputize/service.rpc.msg";
import * as _387 from "../orders/transactions/immediate/service.rpc.msg";
import * as _388 from "../orders/transactions/make/service.rpc.msg";
import * as _389 from "../orders/transactions/modify/service.rpc.msg";
import * as _390 from "../orders/transactions/revoke/service.rpc.msg";
import * as _391 from "../orders/transactions/take/service.rpc.msg";
import * as _392 from "../splits/transactions/send/service.rpc.msg";
import * as _393 from "../splits/transactions/unwrap/service.rpc.msg";
import * as _394 from "../splits/transactions/wrap/service.rpc.msg";
export declare namespace assetmantle {
    namespace modules {
        namespace assets {
            const genesis: {
                Genesis: {
                    encode(message: _1.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _1.Genesis;
                    fromJSON(object: any): _1.Genesis;
                    toJSON(message: _1.Genesis): unknown;
                    fromPartial(object: Partial<_1.Genesis>): _1.Genesis;
                    fromAmino(object: _1.GenesisAmino): _1.Genesis;
                    toAmino(message: _1.Genesis): _1.GenesisAmino;
                    fromAminoMsg(object: _1.GenesisAminoMsg): _1.Genesis;
                    fromProtoMsg(message: _1.GenesisProtoMsg): _1.Genesis;
                    toProto(message: _1.Genesis): Uint8Array;
                    toProtoMsg(message: _1.Genesis): _1.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _2.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _2.Key;
                    fromJSON(object: any): _2.Key;
                    toJSON(message: _2.Key): unknown;
                    fromPartial(object: Partial<_2.Key>): _2.Key;
                    fromAmino(object: _2.KeyAmino): _2.Key;
                    toAmino(message: _2.Key): _2.KeyAmino;
                    fromAminoMsg(object: _2.KeyAminoMsg): _2.Key;
                    fromProtoMsg(message: _2.KeyProtoMsg): _2.Key;
                    toProto(message: _2.Key): Uint8Array;
                    toProtoMsg(message: _2.Key): _2.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _3.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _3.Mappable;
                    fromJSON(object: any): _3.Mappable;
                    toJSON(message: _3.Mappable): unknown;
                    fromPartial(object: Partial<_3.Mappable>): _3.Mappable;
                    fromAmino(object: _3.MappableAmino): _3.Mappable;
                    toAmino(message: _3.Mappable): _3.MappableAmino;
                    fromAminoMsg(object: _3.MappableAminoMsg): _3.Mappable;
                    fromProtoMsg(message: _3.MappableProtoMsg): _3.Mappable;
                    toProto(message: _3.Mappable): Uint8Array;
                    toProtoMsg(message: _3.Mappable): _3.MappableProtoMsg;
                };
            };
            namespace queries {
                const asset: {
                    ServiceClientImpl: typeof _352.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _4.QueryRequest): Promise<_5.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _5.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _5.QueryResponse;
                        fromJSON(object: any): _5.QueryResponse;
                        toJSON(message: _5.QueryResponse): unknown;
                        fromPartial(object: Partial<_5.QueryResponse>): _5.QueryResponse;
                        fromAmino(object: _5.QueryResponseAmino): _5.QueryResponse;
                        toAmino(message: _5.QueryResponse): _5.QueryResponseAmino;
                        fromAminoMsg(object: _5.QueryResponseAminoMsg): _5.QueryResponse;
                        fromProtoMsg(message: _5.QueryResponseProtoMsg): _5.QueryResponse;
                        toProto(message: _5.QueryResponse): Uint8Array;
                        toProtoMsg(message: _5.QueryResponse): _5.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _4.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _4.QueryRequest;
                        fromJSON(object: any): _4.QueryRequest;
                        toJSON(message: _4.QueryRequest): unknown;
                        fromPartial(object: Partial<_4.QueryRequest>): _4.QueryRequest;
                        fromAmino(object: _4.QueryRequestAmino): _4.QueryRequest;
                        toAmino(message: _4.QueryRequest): _4.QueryRequestAmino;
                        fromAminoMsg(object: _4.QueryRequestAminoMsg): _4.QueryRequest;
                        fromProtoMsg(message: _4.QueryRequestProtoMsg): _4.QueryRequest;
                        toProto(message: _4.QueryRequest): Uint8Array;
                        toProtoMsg(message: _4.QueryRequest): _4.QueryRequestProtoMsg;
                    };
                };
                const assets: {
                    ServiceClientImpl: typeof _353.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _7.QueryRequest): Promise<_8.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _8.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _8.QueryResponse;
                        fromJSON(object: any): _8.QueryResponse;
                        toJSON(message: _8.QueryResponse): unknown;
                        fromPartial(object: Partial<_8.QueryResponse>): _8.QueryResponse;
                        fromAmino(object: _8.QueryResponseAmino): _8.QueryResponse;
                        toAmino(message: _8.QueryResponse): _8.QueryResponseAmino;
                        fromAminoMsg(object: _8.QueryResponseAminoMsg): _8.QueryResponse;
                        fromProtoMsg(message: _8.QueryResponseProtoMsg): _8.QueryResponse;
                        toProto(message: _8.QueryResponse): Uint8Array;
                        toProtoMsg(message: _8.QueryResponse): _8.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _7.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _7.QueryRequest;
                        fromJSON(object: any): _7.QueryRequest;
                        toJSON(message: _7.QueryRequest): unknown;
                        fromPartial(object: Partial<_7.QueryRequest>): _7.QueryRequest;
                        fromAmino(object: _7.QueryRequestAmino): _7.QueryRequest;
                        toAmino(message: _7.QueryRequest): _7.QueryRequestAmino;
                        fromAminoMsg(object: _7.QueryRequestAminoMsg): _7.QueryRequest;
                        fromProtoMsg(message: _7.QueryRequestProtoMsg): _7.QueryRequest;
                        toProto(message: _7.QueryRequest): Uint8Array;
                        toProtoMsg(message: _7.QueryRequest): _7.QueryRequestProtoMsg;
                    };
                };
            }
            namespace transactions {
                const burn: {
                    MsgClientImpl: typeof _367.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _10.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _10.Message): {
                                typeUrl: string;
                                value: _10.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _10.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _10.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _10.Message): {
                                typeUrl: string;
                                value: _10.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.burn.Message": {
                            aminoType: string;
                            toAmino: (message: _10.Message) => _10.MessageAmino;
                            fromAmino: (object: _10.MessageAmino) => _10.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _12.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _12.TransactionResponse;
                        fromJSON(_: any): _12.TransactionResponse;
                        toJSON(_: _12.TransactionResponse): unknown;
                        fromPartial(_: Partial<_12.TransactionResponse>): _12.TransactionResponse;
                        fromAmino(_: _12.TransactionResponseAmino): _12.TransactionResponse;
                        toAmino(_: _12.TransactionResponse): _12.TransactionResponseAmino;
                        fromAminoMsg(object: _12.TransactionResponseAminoMsg): _12.TransactionResponse;
                        fromProtoMsg(message: _12.TransactionResponseProtoMsg): _12.TransactionResponse;
                        toProto(message: _12.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _12.TransactionResponse): _12.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _10.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Message;
                        fromJSON(object: any): _10.Message;
                        toJSON(message: _10.Message): unknown;
                        fromPartial(object: Partial<_10.Message>): _10.Message;
                        fromAmino(object: _10.MessageAmino): _10.Message;
                        toAmino(message: _10.Message): _10.MessageAmino;
                        fromAminoMsg(object: _10.MessageAminoMsg): _10.Message;
                        fromProtoMsg(message: _10.MessageProtoMsg): _10.Message;
                        toProto(message: _10.Message): Uint8Array;
                        toProtoMsg(message: _10.Message): _10.MessageProtoMsg;
                    };
                };
                const define: {
                    MsgClientImpl: typeof _368.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _13.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _13.Message): {
                                typeUrl: string;
                                value: _13.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _13.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _13.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _13.Message): {
                                typeUrl: string;
                                value: _13.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _13.Message) => _13.MessageAmino;
                            fromAmino: (object: _13.MessageAmino) => _13.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _15.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _15.TransactionResponse;
                        fromJSON(object: any): _15.TransactionResponse;
                        toJSON(message: _15.TransactionResponse): unknown;
                        fromPartial(object: Partial<_15.TransactionResponse>): _15.TransactionResponse;
                        fromAmino(object: _15.TransactionResponseAmino): _15.TransactionResponse;
                        toAmino(message: _15.TransactionResponse): _15.TransactionResponseAmino;
                        fromAminoMsg(object: _15.TransactionResponseAminoMsg): _15.TransactionResponse;
                        fromProtoMsg(message: _15.TransactionResponseProtoMsg): _15.TransactionResponse;
                        toProto(message: _15.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _15.TransactionResponse): _15.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _13.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.Message;
                        fromJSON(object: any): _13.Message;
                        toJSON(message: _13.Message): unknown;
                        fromPartial(object: Partial<_13.Message>): _13.Message;
                        fromAmino(object: _13.MessageAmino): _13.Message;
                        toAmino(message: _13.Message): _13.MessageAmino;
                        fromAminoMsg(object: _13.MessageAminoMsg): _13.Message;
                        fromProtoMsg(message: _13.MessageProtoMsg): _13.Message;
                        toProto(message: _13.Message): Uint8Array;
                        toProtoMsg(message: _13.Message): _13.MessageProtoMsg;
                    };
                };
                const deputize: {
                    MsgClientImpl: typeof _369.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _16.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _16.Message): {
                                typeUrl: string;
                                value: _16.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _16.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _16.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _16.Message): {
                                typeUrl: string;
                                value: _16.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _16.Message) => _16.MessageAmino;
                            fromAmino: (object: _16.MessageAmino) => _16.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _18.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _18.TransactionResponse;
                        fromJSON(_: any): _18.TransactionResponse;
                        toJSON(_: _18.TransactionResponse): unknown;
                        fromPartial(_: Partial<_18.TransactionResponse>): _18.TransactionResponse;
                        fromAmino(_: _18.TransactionResponseAmino): _18.TransactionResponse;
                        toAmino(_: _18.TransactionResponse): _18.TransactionResponseAmino;
                        fromAminoMsg(object: _18.TransactionResponseAminoMsg): _18.TransactionResponse;
                        fromProtoMsg(message: _18.TransactionResponseProtoMsg): _18.TransactionResponse;
                        toProto(message: _18.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _18.TransactionResponse): _18.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _16.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.Message;
                        fromJSON(object: any): _16.Message;
                        toJSON(message: _16.Message): unknown;
                        fromPartial(object: Partial<_16.Message>): _16.Message;
                        fromAmino(object: _16.MessageAmino): _16.Message;
                        toAmino(message: _16.Message): _16.MessageAmino;
                        fromAminoMsg(object: _16.MessageAminoMsg): _16.Message;
                        fromProtoMsg(message: _16.MessageProtoMsg): _16.Message;
                        toProto(message: _16.Message): Uint8Array;
                        toProtoMsg(message: _16.Message): _16.MessageProtoMsg;
                    };
                };
                const mint: {
                    MsgClientImpl: typeof _370.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _19.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _19.Message): {
                                typeUrl: string;
                                value: _19.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _19.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _19.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _19.Message): {
                                typeUrl: string;
                                value: _19.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.mint.Message": {
                            aminoType: string;
                            toAmino: (message: _19.Message) => _19.MessageAmino;
                            fromAmino: (object: _19.MessageAmino) => _19.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _21.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _21.TransactionResponse;
                        fromJSON(object: any): _21.TransactionResponse;
                        toJSON(message: _21.TransactionResponse): unknown;
                        fromPartial(object: Partial<_21.TransactionResponse>): _21.TransactionResponse;
                        fromAmino(object: _21.TransactionResponseAmino): _21.TransactionResponse;
                        toAmino(message: _21.TransactionResponse): _21.TransactionResponseAmino;
                        fromAminoMsg(object: _21.TransactionResponseAminoMsg): _21.TransactionResponse;
                        fromProtoMsg(message: _21.TransactionResponseProtoMsg): _21.TransactionResponse;
                        toProto(message: _21.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _21.TransactionResponse): _21.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _19.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.Message;
                        fromJSON(object: any): _19.Message;
                        toJSON(message: _19.Message): unknown;
                        fromPartial(object: Partial<_19.Message>): _19.Message;
                        fromAmino(object: _19.MessageAmino): _19.Message;
                        toAmino(message: _19.Message): _19.MessageAmino;
                        fromAminoMsg(object: _19.MessageAminoMsg): _19.Message;
                        fromProtoMsg(message: _19.MessageProtoMsg): _19.Message;
                        toProto(message: _19.Message): Uint8Array;
                        toProtoMsg(message: _19.Message): _19.MessageProtoMsg;
                    };
                };
                const mutate: {
                    MsgClientImpl: typeof _371.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _22.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _22.Message): {
                                typeUrl: string;
                                value: _22.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _22.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _22.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _22.Message): {
                                typeUrl: string;
                                value: _22.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.mutate.Message": {
                            aminoType: string;
                            toAmino: (message: _22.Message) => _22.MessageAmino;
                            fromAmino: (object: _22.MessageAmino) => _22.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _24.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _24.TransactionResponse;
                        fromJSON(_: any): _24.TransactionResponse;
                        toJSON(_: _24.TransactionResponse): unknown;
                        fromPartial(_: Partial<_24.TransactionResponse>): _24.TransactionResponse;
                        fromAmino(_: _24.TransactionResponseAmino): _24.TransactionResponse;
                        toAmino(_: _24.TransactionResponse): _24.TransactionResponseAmino;
                        fromAminoMsg(object: _24.TransactionResponseAminoMsg): _24.TransactionResponse;
                        fromProtoMsg(message: _24.TransactionResponseProtoMsg): _24.TransactionResponse;
                        toProto(message: _24.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _24.TransactionResponse): _24.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _22.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.Message;
                        fromJSON(object: any): _22.Message;
                        toJSON(message: _22.Message): unknown;
                        fromPartial(object: Partial<_22.Message>): _22.Message;
                        fromAmino(object: _22.MessageAmino): _22.Message;
                        toAmino(message: _22.Message): _22.MessageAmino;
                        fromAminoMsg(object: _22.MessageAminoMsg): _22.Message;
                        fromProtoMsg(message: _22.MessageProtoMsg): _22.Message;
                        toProto(message: _22.Message): Uint8Array;
                        toProtoMsg(message: _22.Message): _22.MessageProtoMsg;
                    };
                };
                const renumerate: {
                    MsgClientImpl: typeof _372.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _25.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _25.Message): {
                                typeUrl: string;
                                value: _25.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _25.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _25.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _25.Message): {
                                typeUrl: string;
                                value: _25.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.renumerate.Message": {
                            aminoType: string;
                            toAmino: (message: _25.Message) => _25.MessageAmino;
                            fromAmino: (object: _25.MessageAmino) => _25.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _27.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _27.TransactionResponse;
                        fromJSON(_: any): _27.TransactionResponse;
                        toJSON(_: _27.TransactionResponse): unknown;
                        fromPartial(_: Partial<_27.TransactionResponse>): _27.TransactionResponse;
                        fromAmino(_: _27.TransactionResponseAmino): _27.TransactionResponse;
                        toAmino(_: _27.TransactionResponse): _27.TransactionResponseAmino;
                        fromAminoMsg(object: _27.TransactionResponseAminoMsg): _27.TransactionResponse;
                        fromProtoMsg(message: _27.TransactionResponseProtoMsg): _27.TransactionResponse;
                        toProto(message: _27.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _27.TransactionResponse): _27.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _25.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.Message;
                        fromJSON(object: any): _25.Message;
                        toJSON(message: _25.Message): unknown;
                        fromPartial(object: Partial<_25.Message>): _25.Message;
                        fromAmino(object: _25.MessageAmino): _25.Message;
                        toAmino(message: _25.Message): _25.MessageAmino;
                        fromAminoMsg(object: _25.MessageAminoMsg): _25.Message;
                        fromProtoMsg(message: _25.MessageProtoMsg): _25.Message;
                        toProto(message: _25.Message): Uint8Array;
                        toProtoMsg(message: _25.Message): _25.MessageProtoMsg;
                    };
                };
                const revoke: {
                    MsgClientImpl: typeof _373.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _28.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _28.Message): {
                                typeUrl: string;
                                value: _28.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _28.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _28.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _28.Message): {
                                typeUrl: string;
                                value: _28.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _28.Message) => _28.MessageAmino;
                            fromAmino: (object: _28.MessageAmino) => _28.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _30.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _30.TransactionResponse;
                        fromJSON(_: any): _30.TransactionResponse;
                        toJSON(_: _30.TransactionResponse): unknown;
                        fromPartial(_: Partial<_30.TransactionResponse>): _30.TransactionResponse;
                        fromAmino(_: _30.TransactionResponseAmino): _30.TransactionResponse;
                        toAmino(_: _30.TransactionResponse): _30.TransactionResponseAmino;
                        fromAminoMsg(object: _30.TransactionResponseAminoMsg): _30.TransactionResponse;
                        fromProtoMsg(message: _30.TransactionResponseProtoMsg): _30.TransactionResponse;
                        toProto(message: _30.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _30.TransactionResponse): _30.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _28.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.Message;
                        fromJSON(object: any): _28.Message;
                        toJSON(message: _28.Message): unknown;
                        fromPartial(object: Partial<_28.Message>): _28.Message;
                        fromAmino(object: _28.MessageAmino): _28.Message;
                        toAmino(message: _28.Message): _28.MessageAmino;
                        fromAminoMsg(object: _28.MessageAminoMsg): _28.Message;
                        fromProtoMsg(message: _28.MessageProtoMsg): _28.Message;
                        toProto(message: _28.Message): Uint8Array;
                        toProtoMsg(message: _28.Message): _28.MessageProtoMsg;
                    };
                };
            }
        }
        namespace classifications {
            const genesis: {
                Genesis: {
                    encode(message: _31.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.Genesis;
                    fromJSON(object: any): _31.Genesis;
                    toJSON(message: _31.Genesis): unknown;
                    fromPartial(object: Partial<_31.Genesis>): _31.Genesis;
                    fromAmino(object: _31.GenesisAmino): _31.Genesis;
                    toAmino(message: _31.Genesis): _31.GenesisAmino;
                    fromAminoMsg(object: _31.GenesisAminoMsg): _31.Genesis;
                    fromProtoMsg(message: _31.GenesisProtoMsg): _31.Genesis;
                    toProto(message: _31.Genesis): Uint8Array;
                    toProtoMsg(message: _31.Genesis): _31.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _32.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Key;
                    fromJSON(object: any): _32.Key;
                    toJSON(message: _32.Key): unknown;
                    fromPartial(object: Partial<_32.Key>): _32.Key;
                    fromAmino(object: _32.KeyAmino): _32.Key;
                    toAmino(message: _32.Key): _32.KeyAmino;
                    fromAminoMsg(object: _32.KeyAminoMsg): _32.Key;
                    fromProtoMsg(message: _32.KeyProtoMsg): _32.Key;
                    toProto(message: _32.Key): Uint8Array;
                    toProtoMsg(message: _32.Key): _32.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _33.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Mappable;
                    fromJSON(object: any): _33.Mappable;
                    toJSON(message: _33.Mappable): unknown;
                    fromPartial(object: Partial<_33.Mappable>): _33.Mappable;
                    fromAmino(object: _33.MappableAmino): _33.Mappable;
                    toAmino(message: _33.Mappable): _33.MappableAmino;
                    fromAminoMsg(object: _33.MappableAminoMsg): _33.Mappable;
                    fromProtoMsg(message: _33.MappableProtoMsg): _33.Mappable;
                    toProto(message: _33.Mappable): Uint8Array;
                    toProtoMsg(message: _33.Mappable): _33.MappableProtoMsg;
                };
            };
            namespace queries {
                const classification: {
                    ServiceClientImpl: typeof _354.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _34.QueryRequest): Promise<_35.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _35.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryResponse;
                        fromJSON(object: any): _35.QueryResponse;
                        toJSON(message: _35.QueryResponse): unknown;
                        fromPartial(object: Partial<_35.QueryResponse>): _35.QueryResponse;
                        fromAmino(object: _35.QueryResponseAmino): _35.QueryResponse;
                        toAmino(message: _35.QueryResponse): _35.QueryResponseAmino;
                        fromAminoMsg(object: _35.QueryResponseAminoMsg): _35.QueryResponse;
                        fromProtoMsg(message: _35.QueryResponseProtoMsg): _35.QueryResponse;
                        toProto(message: _35.QueryResponse): Uint8Array;
                        toProtoMsg(message: _35.QueryResponse): _35.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _34.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.QueryRequest;
                        fromJSON(object: any): _34.QueryRequest;
                        toJSON(message: _34.QueryRequest): unknown;
                        fromPartial(object: Partial<_34.QueryRequest>): _34.QueryRequest;
                        fromAmino(object: _34.QueryRequestAmino): _34.QueryRequest;
                        toAmino(message: _34.QueryRequest): _34.QueryRequestAmino;
                        fromAminoMsg(object: _34.QueryRequestAminoMsg): _34.QueryRequest;
                        fromProtoMsg(message: _34.QueryRequestProtoMsg): _34.QueryRequest;
                        toProto(message: _34.QueryRequest): Uint8Array;
                        toProtoMsg(message: _34.QueryRequest): _34.QueryRequestProtoMsg;
                    };
                };
                const classifications: {
                    ServiceClientImpl: typeof _355.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _37.QueryRequest): Promise<_38.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _38.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryResponse;
                        fromJSON(object: any): _38.QueryResponse;
                        toJSON(message: _38.QueryResponse): unknown;
                        fromPartial(object: Partial<_38.QueryResponse>): _38.QueryResponse;
                        fromAmino(object: _38.QueryResponseAmino): _38.QueryResponse;
                        toAmino(message: _38.QueryResponse): _38.QueryResponseAmino;
                        fromAminoMsg(object: _38.QueryResponseAminoMsg): _38.QueryResponse;
                        fromProtoMsg(message: _38.QueryResponseProtoMsg): _38.QueryResponse;
                        toProto(message: _38.QueryResponse): Uint8Array;
                        toProtoMsg(message: _38.QueryResponse): _38.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _37.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.QueryRequest;
                        fromJSON(object: any): _37.QueryRequest;
                        toJSON(message: _37.QueryRequest): unknown;
                        fromPartial(object: Partial<_37.QueryRequest>): _37.QueryRequest;
                        fromAmino(object: _37.QueryRequestAmino): _37.QueryRequest;
                        toAmino(message: _37.QueryRequest): _37.QueryRequestAmino;
                        fromAminoMsg(object: _37.QueryRequestAminoMsg): _37.QueryRequest;
                        fromProtoMsg(message: _37.QueryRequestProtoMsg): _37.QueryRequest;
                        toProto(message: _37.QueryRequest): Uint8Array;
                        toProtoMsg(message: _37.QueryRequest): _37.QueryRequestProtoMsg;
                    };
                };
            }
        }
        namespace identities {
            const genesis: {
                Genesis: {
                    encode(message: _40.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.Genesis;
                    fromJSON(object: any): _40.Genesis;
                    toJSON(message: _40.Genesis): unknown;
                    fromPartial(object: Partial<_40.Genesis>): _40.Genesis;
                    fromAmino(object: _40.GenesisAmino): _40.Genesis;
                    toAmino(message: _40.Genesis): _40.GenesisAmino;
                    fromAminoMsg(object: _40.GenesisAminoMsg): _40.Genesis;
                    fromProtoMsg(message: _40.GenesisProtoMsg): _40.Genesis;
                    toProto(message: _40.Genesis): Uint8Array;
                    toProtoMsg(message: _40.Genesis): _40.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _41.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Key;
                    fromJSON(object: any): _41.Key;
                    toJSON(message: _41.Key): unknown;
                    fromPartial(object: Partial<_41.Key>): _41.Key;
                    fromAmino(object: _41.KeyAmino): _41.Key;
                    toAmino(message: _41.Key): _41.KeyAmino;
                    fromAminoMsg(object: _41.KeyAminoMsg): _41.Key;
                    fromProtoMsg(message: _41.KeyProtoMsg): _41.Key;
                    toProto(message: _41.Key): Uint8Array;
                    toProtoMsg(message: _41.Key): _41.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _42.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Mappable;
                    fromJSON(object: any): _42.Mappable;
                    toJSON(message: _42.Mappable): unknown;
                    fromPartial(object: Partial<_42.Mappable>): _42.Mappable;
                    fromAmino(object: _42.MappableAmino): _42.Mappable;
                    toAmino(message: _42.Mappable): _42.MappableAmino;
                    fromAminoMsg(object: _42.MappableAminoMsg): _42.Mappable;
                    fromProtoMsg(message: _42.MappableProtoMsg): _42.Mappable;
                    toProto(message: _42.Mappable): Uint8Array;
                    toProtoMsg(message: _42.Mappable): _42.MappableProtoMsg;
                };
            };
            namespace queries {
                const identities: {
                    ServiceClientImpl: typeof _356.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _43.QueryRequest): Promise<_44.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _44.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryResponse;
                        fromJSON(object: any): _44.QueryResponse;
                        toJSON(message: _44.QueryResponse): unknown;
                        fromPartial(object: Partial<_44.QueryResponse>): _44.QueryResponse;
                        fromAmino(object: _44.QueryResponseAmino): _44.QueryResponse;
                        toAmino(message: _44.QueryResponse): _44.QueryResponseAmino;
                        fromAminoMsg(object: _44.QueryResponseAminoMsg): _44.QueryResponse;
                        fromProtoMsg(message: _44.QueryResponseProtoMsg): _44.QueryResponse;
                        toProto(message: _44.QueryResponse): Uint8Array;
                        toProtoMsg(message: _44.QueryResponse): _44.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _43.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.QueryRequest;
                        fromJSON(object: any): _43.QueryRequest;
                        toJSON(message: _43.QueryRequest): unknown;
                        fromPartial(object: Partial<_43.QueryRequest>): _43.QueryRequest;
                        fromAmino(object: _43.QueryRequestAmino): _43.QueryRequest;
                        toAmino(message: _43.QueryRequest): _43.QueryRequestAmino;
                        fromAminoMsg(object: _43.QueryRequestAminoMsg): _43.QueryRequest;
                        fromProtoMsg(message: _43.QueryRequestProtoMsg): _43.QueryRequest;
                        toProto(message: _43.QueryRequest): Uint8Array;
                        toProtoMsg(message: _43.QueryRequest): _43.QueryRequestProtoMsg;
                    };
                };
                const identity: {
                    ServiceClientImpl: typeof _357.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _46.QueryRequest): Promise<_47.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _47.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryResponse;
                        fromJSON(object: any): _47.QueryResponse;
                        toJSON(message: _47.QueryResponse): unknown;
                        fromPartial(object: Partial<_47.QueryResponse>): _47.QueryResponse;
                        fromAmino(object: _47.QueryResponseAmino): _47.QueryResponse;
                        toAmino(message: _47.QueryResponse): _47.QueryResponseAmino;
                        fromAminoMsg(object: _47.QueryResponseAminoMsg): _47.QueryResponse;
                        fromProtoMsg(message: _47.QueryResponseProtoMsg): _47.QueryResponse;
                        toProto(message: _47.QueryResponse): Uint8Array;
                        toProtoMsg(message: _47.QueryResponse): _47.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _46.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryRequest;
                        fromJSON(object: any): _46.QueryRequest;
                        toJSON(message: _46.QueryRequest): unknown;
                        fromPartial(object: Partial<_46.QueryRequest>): _46.QueryRequest;
                        fromAmino(object: _46.QueryRequestAmino): _46.QueryRequest;
                        toAmino(message: _46.QueryRequest): _46.QueryRequestAmino;
                        fromAminoMsg(object: _46.QueryRequestAminoMsg): _46.QueryRequest;
                        fromProtoMsg(message: _46.QueryRequestProtoMsg): _46.QueryRequest;
                        toProto(message: _46.QueryRequest): Uint8Array;
                        toProtoMsg(message: _46.QueryRequest): _46.QueryRequestProtoMsg;
                    };
                };
            }
            namespace transactions {
                const define: {
                    MsgClientImpl: typeof _374.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _49.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _49.Message): {
                                typeUrl: string;
                                value: _49.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _49.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _49.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _49.Message): {
                                typeUrl: string;
                                value: _49.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _49.Message) => _49.MessageAmino;
                            fromAmino: (object: _49.MessageAmino) => _49.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _51.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.TransactionResponse;
                        fromJSON(object: any): _51.TransactionResponse;
                        toJSON(message: _51.TransactionResponse): unknown;
                        fromPartial(object: Partial<_51.TransactionResponse>): _51.TransactionResponse;
                        fromAmino(object: _51.TransactionResponseAmino): _51.TransactionResponse;
                        toAmino(message: _51.TransactionResponse): _51.TransactionResponseAmino;
                        fromAminoMsg(object: _51.TransactionResponseAminoMsg): _51.TransactionResponse;
                        fromProtoMsg(message: _51.TransactionResponseProtoMsg): _51.TransactionResponse;
                        toProto(message: _51.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _51.TransactionResponse): _51.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _49.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.Message;
                        fromJSON(object: any): _49.Message;
                        toJSON(message: _49.Message): unknown;
                        fromPartial(object: Partial<_49.Message>): _49.Message;
                        fromAmino(object: _49.MessageAmino): _49.Message;
                        toAmino(message: _49.Message): _49.MessageAmino;
                        fromAminoMsg(object: _49.MessageAminoMsg): _49.Message;
                        fromProtoMsg(message: _49.MessageProtoMsg): _49.Message;
                        toProto(message: _49.Message): Uint8Array;
                        toProtoMsg(message: _49.Message): _49.MessageProtoMsg;
                    };
                };
                const deputize: {
                    MsgClientImpl: typeof _375.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _52.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _52.Message): {
                                typeUrl: string;
                                value: _52.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _52.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _52.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _52.Message): {
                                typeUrl: string;
                                value: _52.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _52.Message) => _52.MessageAmino;
                            fromAmino: (object: _52.MessageAmino) => _52.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _54.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TransactionResponse;
                        fromJSON(_: any): _54.TransactionResponse;
                        toJSON(_: _54.TransactionResponse): unknown;
                        fromPartial(_: Partial<_54.TransactionResponse>): _54.TransactionResponse;
                        fromAmino(_: _54.TransactionResponseAmino): _54.TransactionResponse;
                        toAmino(_: _54.TransactionResponse): _54.TransactionResponseAmino;
                        fromAminoMsg(object: _54.TransactionResponseAminoMsg): _54.TransactionResponse;
                        fromProtoMsg(message: _54.TransactionResponseProtoMsg): _54.TransactionResponse;
                        toProto(message: _54.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _54.TransactionResponse): _54.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _52.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Message;
                        fromJSON(object: any): _52.Message;
                        toJSON(message: _52.Message): unknown;
                        fromPartial(object: Partial<_52.Message>): _52.Message;
                        fromAmino(object: _52.MessageAmino): _52.Message;
                        toAmino(message: _52.Message): _52.MessageAmino;
                        fromAminoMsg(object: _52.MessageAminoMsg): _52.Message;
                        fromProtoMsg(message: _52.MessageProtoMsg): _52.Message;
                        toProto(message: _52.Message): Uint8Array;
                        toProtoMsg(message: _52.Message): _52.MessageProtoMsg;
                    };
                };
                const issue: {
                    MsgClientImpl: typeof _376.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _55.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _55.Message): {
                                typeUrl: string;
                                value: _55.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _55.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _55.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _55.Message): {
                                typeUrl: string;
                                value: _55.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.issue.Message": {
                            aminoType: string;
                            toAmino: (message: _55.Message) => _55.MessageAmino;
                            fromAmino: (object: _55.MessageAmino) => _55.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _57.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TransactionResponse;
                        fromJSON(object: any): _57.TransactionResponse;
                        toJSON(message: _57.TransactionResponse): unknown;
                        fromPartial(object: Partial<_57.TransactionResponse>): _57.TransactionResponse;
                        fromAmino(object: _57.TransactionResponseAmino): _57.TransactionResponse;
                        toAmino(message: _57.TransactionResponse): _57.TransactionResponseAmino;
                        fromAminoMsg(object: _57.TransactionResponseAminoMsg): _57.TransactionResponse;
                        fromProtoMsg(message: _57.TransactionResponseProtoMsg): _57.TransactionResponse;
                        toProto(message: _57.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _57.TransactionResponse): _57.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _55.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.Message;
                        fromJSON(object: any): _55.Message;
                        toJSON(message: _55.Message): unknown;
                        fromPartial(object: Partial<_55.Message>): _55.Message;
                        fromAmino(object: _55.MessageAmino): _55.Message;
                        toAmino(message: _55.Message): _55.MessageAmino;
                        fromAminoMsg(object: _55.MessageAminoMsg): _55.Message;
                        fromProtoMsg(message: _55.MessageProtoMsg): _55.Message;
                        toProto(message: _55.Message): Uint8Array;
                        toProtoMsg(message: _55.Message): _55.MessageProtoMsg;
                    };
                };
                const mutate: {
                    MsgClientImpl: typeof _377.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _58.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _58.Message): {
                                typeUrl: string;
                                value: _58.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _58.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _58.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _58.Message): {
                                typeUrl: string;
                                value: _58.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.mutate.Message": {
                            aminoType: string;
                            toAmino: (message: _58.Message) => _58.MessageAmino;
                            fromAmino: (object: _58.MessageAmino) => _58.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _60.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TransactionResponse;
                        fromJSON(_: any): _60.TransactionResponse;
                        toJSON(_: _60.TransactionResponse): unknown;
                        fromPartial(_: Partial<_60.TransactionResponse>): _60.TransactionResponse;
                        fromAmino(_: _60.TransactionResponseAmino): _60.TransactionResponse;
                        toAmino(_: _60.TransactionResponse): _60.TransactionResponseAmino;
                        fromAminoMsg(object: _60.TransactionResponseAminoMsg): _60.TransactionResponse;
                        fromProtoMsg(message: _60.TransactionResponseProtoMsg): _60.TransactionResponse;
                        toProto(message: _60.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _60.TransactionResponse): _60.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _58.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.Message;
                        fromJSON(object: any): _58.Message;
                        toJSON(message: _58.Message): unknown;
                        fromPartial(object: Partial<_58.Message>): _58.Message;
                        fromAmino(object: _58.MessageAmino): _58.Message;
                        toAmino(message: _58.Message): _58.MessageAmino;
                        fromAminoMsg(object: _58.MessageAminoMsg): _58.Message;
                        fromProtoMsg(message: _58.MessageProtoMsg): _58.Message;
                        toProto(message: _58.Message): Uint8Array;
                        toProtoMsg(message: _58.Message): _58.MessageProtoMsg;
                    };
                };
                const nub: {
                    MsgClientImpl: typeof _378.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _61.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _61.Message): {
                                typeUrl: string;
                                value: _61.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _61.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _61.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _61.Message): {
                                typeUrl: string;
                                value: _61.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.nub.Message": {
                            aminoType: string;
                            toAmino: (message: _61.Message) => _61.MessageAmino;
                            fromAmino: (object: _61.MessageAmino) => _61.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _63.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _63.TransactionResponse;
                        fromJSON(object: any): _63.TransactionResponse;
                        toJSON(message: _63.TransactionResponse): unknown;
                        fromPartial(object: Partial<_63.TransactionResponse>): _63.TransactionResponse;
                        fromAmino(object: _63.TransactionResponseAmino): _63.TransactionResponse;
                        toAmino(message: _63.TransactionResponse): _63.TransactionResponseAmino;
                        fromAminoMsg(object: _63.TransactionResponseAminoMsg): _63.TransactionResponse;
                        fromProtoMsg(message: _63.TransactionResponseProtoMsg): _63.TransactionResponse;
                        toProto(message: _63.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _63.TransactionResponse): _63.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _61.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _61.Message;
                        fromJSON(object: any): _61.Message;
                        toJSON(message: _61.Message): unknown;
                        fromPartial(object: Partial<_61.Message>): _61.Message;
                        fromAmino(object: _61.MessageAmino): _61.Message;
                        toAmino(message: _61.Message): _61.MessageAmino;
                        fromAminoMsg(object: _61.MessageAminoMsg): _61.Message;
                        fromProtoMsg(message: _61.MessageProtoMsg): _61.Message;
                        toProto(message: _61.Message): Uint8Array;
                        toProtoMsg(message: _61.Message): _61.MessageProtoMsg;
                    };
                };
                const provision: {
                    MsgClientImpl: typeof _379.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _64.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _64.Message): {
                                typeUrl: string;
                                value: _64.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _64.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _64.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _64.Message): {
                                typeUrl: string;
                                value: _64.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.provision.Message": {
                            aminoType: string;
                            toAmino: (message: _64.Message) => _64.MessageAmino;
                            fromAmino: (object: _64.MessageAmino) => _64.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _66.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _66.TransactionResponse;
                        fromJSON(_: any): _66.TransactionResponse;
                        toJSON(_: _66.TransactionResponse): unknown;
                        fromPartial(_: Partial<_66.TransactionResponse>): _66.TransactionResponse;
                        fromAmino(_: _66.TransactionResponseAmino): _66.TransactionResponse;
                        toAmino(_: _66.TransactionResponse): _66.TransactionResponseAmino;
                        fromAminoMsg(object: _66.TransactionResponseAminoMsg): _66.TransactionResponse;
                        fromProtoMsg(message: _66.TransactionResponseProtoMsg): _66.TransactionResponse;
                        toProto(message: _66.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _66.TransactionResponse): _66.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _64.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _64.Message;
                        fromJSON(object: any): _64.Message;
                        toJSON(message: _64.Message): unknown;
                        fromPartial(object: Partial<_64.Message>): _64.Message;
                        fromAmino(object: _64.MessageAmino): _64.Message;
                        toAmino(message: _64.Message): _64.MessageAmino;
                        fromAminoMsg(object: _64.MessageAminoMsg): _64.Message;
                        fromProtoMsg(message: _64.MessageProtoMsg): _64.Message;
                        toProto(message: _64.Message): Uint8Array;
                        toProtoMsg(message: _64.Message): _64.MessageProtoMsg;
                    };
                };
                const quash: {
                    MsgClientImpl: typeof _380.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _67.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _67.Message): {
                                typeUrl: string;
                                value: _67.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _67.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _67.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _67.Message): {
                                typeUrl: string;
                                value: _67.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.quash.Message": {
                            aminoType: string;
                            toAmino: (message: _67.Message) => _67.MessageAmino;
                            fromAmino: (object: _67.MessageAmino) => _67.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _69.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TransactionResponse;
                        fromJSON(_: any): _69.TransactionResponse;
                        toJSON(_: _69.TransactionResponse): unknown;
                        fromPartial(_: Partial<_69.TransactionResponse>): _69.TransactionResponse;
                        fromAmino(_: _69.TransactionResponseAmino): _69.TransactionResponse;
                        toAmino(_: _69.TransactionResponse): _69.TransactionResponseAmino;
                        fromAminoMsg(object: _69.TransactionResponseAminoMsg): _69.TransactionResponse;
                        fromProtoMsg(message: _69.TransactionResponseProtoMsg): _69.TransactionResponse;
                        toProto(message: _69.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _69.TransactionResponse): _69.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _67.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _67.Message;
                        fromJSON(object: any): _67.Message;
                        toJSON(message: _67.Message): unknown;
                        fromPartial(object: Partial<_67.Message>): _67.Message;
                        fromAmino(object: _67.MessageAmino): _67.Message;
                        toAmino(message: _67.Message): _67.MessageAmino;
                        fromAminoMsg(object: _67.MessageAminoMsg): _67.Message;
                        fromProtoMsg(message: _67.MessageProtoMsg): _67.Message;
                        toProto(message: _67.Message): Uint8Array;
                        toProtoMsg(message: _67.Message): _67.MessageProtoMsg;
                    };
                };
                const revoke: {
                    MsgClientImpl: typeof _381.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _70.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _70.Message): {
                                typeUrl: string;
                                value: _70.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _70.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _70.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _70.Message): {
                                typeUrl: string;
                                value: _70.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _70.Message) => _70.MessageAmino;
                            fromAmino: (object: _70.MessageAmino) => _70.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _72.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TransactionResponse;
                        fromJSON(_: any): _72.TransactionResponse;
                        toJSON(_: _72.TransactionResponse): unknown;
                        fromPartial(_: Partial<_72.TransactionResponse>): _72.TransactionResponse;
                        fromAmino(_: _72.TransactionResponseAmino): _72.TransactionResponse;
                        toAmino(_: _72.TransactionResponse): _72.TransactionResponseAmino;
                        fromAminoMsg(object: _72.TransactionResponseAminoMsg): _72.TransactionResponse;
                        fromProtoMsg(message: _72.TransactionResponseProtoMsg): _72.TransactionResponse;
                        toProto(message: _72.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _72.TransactionResponse): _72.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _70.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _70.Message;
                        fromJSON(object: any): _70.Message;
                        toJSON(message: _70.Message): unknown;
                        fromPartial(object: Partial<_70.Message>): _70.Message;
                        fromAmino(object: _70.MessageAmino): _70.Message;
                        toAmino(message: _70.Message): _70.MessageAmino;
                        fromAminoMsg(object: _70.MessageAminoMsg): _70.Message;
                        fromProtoMsg(message: _70.MessageProtoMsg): _70.Message;
                        toProto(message: _70.Message): Uint8Array;
                        toProtoMsg(message: _70.Message): _70.MessageProtoMsg;
                    };
                };
                const unprovision: {
                    MsgClientImpl: typeof _382.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _73.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _73.Message): {
                                typeUrl: string;
                                value: _73.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _73.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _73.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _73.Message): {
                                typeUrl: string;
                                value: _73.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.unprovision.Message": {
                            aminoType: string;
                            toAmino: (message: _73.Message) => _73.MessageAmino;
                            fromAmino: (object: _73.MessageAmino) => _73.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _75.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _75.TransactionResponse;
                        fromJSON(_: any): _75.TransactionResponse;
                        toJSON(_: _75.TransactionResponse): unknown;
                        fromPartial(_: Partial<_75.TransactionResponse>): _75.TransactionResponse;
                        fromAmino(_: _75.TransactionResponseAmino): _75.TransactionResponse;
                        toAmino(_: _75.TransactionResponse): _75.TransactionResponseAmino;
                        fromAminoMsg(object: _75.TransactionResponseAminoMsg): _75.TransactionResponse;
                        fromProtoMsg(message: _75.TransactionResponseProtoMsg): _75.TransactionResponse;
                        toProto(message: _75.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _75.TransactionResponse): _75.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _73.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _73.Message;
                        fromJSON(object: any): _73.Message;
                        toJSON(message: _73.Message): unknown;
                        fromPartial(object: Partial<_73.Message>): _73.Message;
                        fromAmino(object: _73.MessageAmino): _73.Message;
                        toAmino(message: _73.Message): _73.MessageAmino;
                        fromAminoMsg(object: _73.MessageAminoMsg): _73.Message;
                        fromProtoMsg(message: _73.MessageProtoMsg): _73.Message;
                        toProto(message: _73.Message): Uint8Array;
                        toProtoMsg(message: _73.Message): _73.MessageProtoMsg;
                    };
                };
            }
        }
        namespace maintainers {
            const genesis: {
                Genesis: {
                    encode(message: _76.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Genesis;
                    fromJSON(object: any): _76.Genesis;
                    toJSON(message: _76.Genesis): unknown;
                    fromPartial(object: Partial<_76.Genesis>): _76.Genesis;
                    fromAmino(object: _76.GenesisAmino): _76.Genesis;
                    toAmino(message: _76.Genesis): _76.GenesisAmino;
                    fromAminoMsg(object: _76.GenesisAminoMsg): _76.Genesis;
                    fromProtoMsg(message: _76.GenesisProtoMsg): _76.Genesis;
                    toProto(message: _76.Genesis): Uint8Array;
                    toProtoMsg(message: _76.Genesis): _76.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _77.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _77.Key;
                    fromJSON(object: any): _77.Key;
                    toJSON(message: _77.Key): unknown;
                    fromPartial(object: Partial<_77.Key>): _77.Key;
                    fromAmino(object: _77.KeyAmino): _77.Key;
                    toAmino(message: _77.Key): _77.KeyAmino;
                    fromAminoMsg(object: _77.KeyAminoMsg): _77.Key;
                    fromProtoMsg(message: _77.KeyProtoMsg): _77.Key;
                    toProto(message: _77.Key): Uint8Array;
                    toProtoMsg(message: _77.Key): _77.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _78.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.Mappable;
                    fromJSON(object: any): _78.Mappable;
                    toJSON(message: _78.Mappable): unknown;
                    fromPartial(object: Partial<_78.Mappable>): _78.Mappable;
                    fromAmino(object: _78.MappableAmino): _78.Mappable;
                    toAmino(message: _78.Mappable): _78.MappableAmino;
                    fromAminoMsg(object: _78.MappableAminoMsg): _78.Mappable;
                    fromProtoMsg(message: _78.MappableProtoMsg): _78.Mappable;
                    toProto(message: _78.Mappable): Uint8Array;
                    toProtoMsg(message: _78.Mappable): _78.MappableProtoMsg;
                };
            };
            namespace queries {
                const maintainer: {
                    ServiceClientImpl: typeof _358.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _79.QueryRequest): Promise<_80.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _80.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.QueryResponse;
                        fromJSON(object: any): _80.QueryResponse;
                        toJSON(message: _80.QueryResponse): unknown;
                        fromPartial(object: Partial<_80.QueryResponse>): _80.QueryResponse;
                        fromAmino(object: _80.QueryResponseAmino): _80.QueryResponse;
                        toAmino(message: _80.QueryResponse): _80.QueryResponseAmino;
                        fromAminoMsg(object: _80.QueryResponseAminoMsg): _80.QueryResponse;
                        fromProtoMsg(message: _80.QueryResponseProtoMsg): _80.QueryResponse;
                        toProto(message: _80.QueryResponse): Uint8Array;
                        toProtoMsg(message: _80.QueryResponse): _80.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _79.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.QueryRequest;
                        fromJSON(object: any): _79.QueryRequest;
                        toJSON(message: _79.QueryRequest): unknown;
                        fromPartial(object: Partial<_79.QueryRequest>): _79.QueryRequest;
                        fromAmino(object: _79.QueryRequestAmino): _79.QueryRequest;
                        toAmino(message: _79.QueryRequest): _79.QueryRequestAmino;
                        fromAminoMsg(object: _79.QueryRequestAminoMsg): _79.QueryRequest;
                        fromProtoMsg(message: _79.QueryRequestProtoMsg): _79.QueryRequest;
                        toProto(message: _79.QueryRequest): Uint8Array;
                        toProtoMsg(message: _79.QueryRequest): _79.QueryRequestProtoMsg;
                    };
                };
                const maintainers: {
                    ServiceClientImpl: typeof _359.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _82.QueryRequest): Promise<_83.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _83.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _83.QueryResponse;
                        fromJSON(object: any): _83.QueryResponse;
                        toJSON(message: _83.QueryResponse): unknown;
                        fromPartial(object: Partial<_83.QueryResponse>): _83.QueryResponse;
                        fromAmino(object: _83.QueryResponseAmino): _83.QueryResponse;
                        toAmino(message: _83.QueryResponse): _83.QueryResponseAmino;
                        fromAminoMsg(object: _83.QueryResponseAminoMsg): _83.QueryResponse;
                        fromProtoMsg(message: _83.QueryResponseProtoMsg): _83.QueryResponse;
                        toProto(message: _83.QueryResponse): Uint8Array;
                        toProtoMsg(message: _83.QueryResponse): _83.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _82.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.QueryRequest;
                        fromJSON(object: any): _82.QueryRequest;
                        toJSON(message: _82.QueryRequest): unknown;
                        fromPartial(object: Partial<_82.QueryRequest>): _82.QueryRequest;
                        fromAmino(object: _82.QueryRequestAmino): _82.QueryRequest;
                        toAmino(message: _82.QueryRequest): _82.QueryRequestAmino;
                        fromAminoMsg(object: _82.QueryRequestAminoMsg): _82.QueryRequest;
                        fromProtoMsg(message: _82.QueryRequestProtoMsg): _82.QueryRequest;
                        toProto(message: _82.QueryRequest): Uint8Array;
                        toProtoMsg(message: _82.QueryRequest): _82.QueryRequestProtoMsg;
                    };
                };
            }
        }
        namespace metas {
            const genesis: {
                Genesis: {
                    encode(message: _85.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Genesis;
                    fromJSON(object: any): _85.Genesis;
                    toJSON(message: _85.Genesis): unknown;
                    fromPartial(object: Partial<_85.Genesis>): _85.Genesis;
                    fromAmino(object: _85.GenesisAmino): _85.Genesis;
                    toAmino(message: _85.Genesis): _85.GenesisAmino;
                    fromAminoMsg(object: _85.GenesisAminoMsg): _85.Genesis;
                    fromProtoMsg(message: _85.GenesisProtoMsg): _85.Genesis;
                    toProto(message: _85.Genesis): Uint8Array;
                    toProtoMsg(message: _85.Genesis): _85.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _86.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.Key;
                    fromJSON(object: any): _86.Key;
                    toJSON(message: _86.Key): unknown;
                    fromPartial(object: Partial<_86.Key>): _86.Key;
                    fromAmino(object: _86.KeyAmino): _86.Key;
                    toAmino(message: _86.Key): _86.KeyAmino;
                    fromAminoMsg(object: _86.KeyAminoMsg): _86.Key;
                    fromProtoMsg(message: _86.KeyProtoMsg): _86.Key;
                    toProto(message: _86.Key): Uint8Array;
                    toProtoMsg(message: _86.Key): _86.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _87.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.Mappable;
                    fromJSON(object: any): _87.Mappable;
                    toJSON(message: _87.Mappable): unknown;
                    fromPartial(object: Partial<_87.Mappable>): _87.Mappable;
                    fromAmino(object: _87.MappableAmino): _87.Mappable;
                    toAmino(message: _87.Mappable): _87.MappableAmino;
                    fromAminoMsg(object: _87.MappableAminoMsg): _87.Mappable;
                    fromProtoMsg(message: _87.MappableProtoMsg): _87.Mappable;
                    toProto(message: _87.Mappable): Uint8Array;
                    toProtoMsg(message: _87.Mappable): _87.MappableProtoMsg;
                };
            };
            namespace queries {
                const meta: {
                    ServiceClientImpl: typeof _360.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _88.QueryRequest): Promise<_89.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _89.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.QueryResponse;
                        fromJSON(object: any): _89.QueryResponse;
                        toJSON(message: _89.QueryResponse): unknown;
                        fromPartial(object: Partial<_89.QueryResponse>): _89.QueryResponse;
                        fromAmino(object: _89.QueryResponseAmino): _89.QueryResponse;
                        toAmino(message: _89.QueryResponse): _89.QueryResponseAmino;
                        fromAminoMsg(object: _89.QueryResponseAminoMsg): _89.QueryResponse;
                        fromProtoMsg(message: _89.QueryResponseProtoMsg): _89.QueryResponse;
                        toProto(message: _89.QueryResponse): Uint8Array;
                        toProtoMsg(message: _89.QueryResponse): _89.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _88.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.QueryRequest;
                        fromJSON(object: any): _88.QueryRequest;
                        toJSON(message: _88.QueryRequest): unknown;
                        fromPartial(object: Partial<_88.QueryRequest>): _88.QueryRequest;
                        fromAmino(object: _88.QueryRequestAmino): _88.QueryRequest;
                        toAmino(message: _88.QueryRequest): _88.QueryRequestAmino;
                        fromAminoMsg(object: _88.QueryRequestAminoMsg): _88.QueryRequest;
                        fromProtoMsg(message: _88.QueryRequestProtoMsg): _88.QueryRequest;
                        toProto(message: _88.QueryRequest): Uint8Array;
                        toProtoMsg(message: _88.QueryRequest): _88.QueryRequestProtoMsg;
                    };
                };
                const metas: {
                    ServiceClientImpl: typeof _361.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _91.QueryRequest): Promise<_92.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _92.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryResponse;
                        fromJSON(object: any): _92.QueryResponse;
                        toJSON(message: _92.QueryResponse): unknown;
                        fromPartial(object: Partial<_92.QueryResponse>): _92.QueryResponse;
                        fromAmino(object: _92.QueryResponseAmino): _92.QueryResponse;
                        toAmino(message: _92.QueryResponse): _92.QueryResponseAmino;
                        fromAminoMsg(object: _92.QueryResponseAminoMsg): _92.QueryResponse;
                        fromProtoMsg(message: _92.QueryResponseProtoMsg): _92.QueryResponse;
                        toProto(message: _92.QueryResponse): Uint8Array;
                        toProtoMsg(message: _92.QueryResponse): _92.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _91.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.QueryRequest;
                        fromJSON(object: any): _91.QueryRequest;
                        toJSON(message: _91.QueryRequest): unknown;
                        fromPartial(object: Partial<_91.QueryRequest>): _91.QueryRequest;
                        fromAmino(object: _91.QueryRequestAmino): _91.QueryRequest;
                        toAmino(message: _91.QueryRequest): _91.QueryRequestAmino;
                        fromAminoMsg(object: _91.QueryRequestAminoMsg): _91.QueryRequest;
                        fromProtoMsg(message: _91.QueryRequestProtoMsg): _91.QueryRequest;
                        toProto(message: _91.QueryRequest): Uint8Array;
                        toProtoMsg(message: _91.QueryRequest): _91.QueryRequestProtoMsg;
                    };
                };
            }
            namespace transactions {
                const reveal: {
                    MsgClientImpl: typeof _383.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _94.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _94.Message): {
                                typeUrl: string;
                                value: _94.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _94.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _94.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _94.Message): {
                                typeUrl: string;
                                value: _94.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.metas.transactions.reveal.Message": {
                            aminoType: string;
                            toAmino: (message: _94.Message) => _94.MessageAmino;
                            fromAmino: (object: _94.MessageAmino) => _94.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _96.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.TransactionResponse;
                        fromJSON(_: any): _96.TransactionResponse;
                        toJSON(_: _96.TransactionResponse): unknown;
                        fromPartial(_: Partial<_96.TransactionResponse>): _96.TransactionResponse;
                        fromAmino(_: _96.TransactionResponseAmino): _96.TransactionResponse;
                        toAmino(_: _96.TransactionResponse): _96.TransactionResponseAmino;
                        fromAminoMsg(object: _96.TransactionResponseAminoMsg): _96.TransactionResponse;
                        fromProtoMsg(message: _96.TransactionResponseProtoMsg): _96.TransactionResponse;
                        toProto(message: _96.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _96.TransactionResponse): _96.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _94.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.Message;
                        fromJSON(object: any): _94.Message;
                        toJSON(message: _94.Message): unknown;
                        fromPartial(object: Partial<_94.Message>): _94.Message;
                        fromAmino(object: _94.MessageAmino): _94.Message;
                        toAmino(message: _94.Message): _94.MessageAmino;
                        fromAminoMsg(object: _94.MessageAminoMsg): _94.Message;
                        fromProtoMsg(message: _94.MessageProtoMsg): _94.Message;
                        toProto(message: _94.Message): Uint8Array;
                        toProtoMsg(message: _94.Message): _94.MessageProtoMsg;
                    };
                };
            }
        }
        namespace orders {
            const genesis: {
                Genesis: {
                    encode(message: _97.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Genesis;
                    fromJSON(object: any): _97.Genesis;
                    toJSON(message: _97.Genesis): unknown;
                    fromPartial(object: Partial<_97.Genesis>): _97.Genesis;
                    fromAmino(object: _97.GenesisAmino): _97.Genesis;
                    toAmino(message: _97.Genesis): _97.GenesisAmino;
                    fromAminoMsg(object: _97.GenesisAminoMsg): _97.Genesis;
                    fromProtoMsg(message: _97.GenesisProtoMsg): _97.Genesis;
                    toProto(message: _97.Genesis): Uint8Array;
                    toProtoMsg(message: _97.Genesis): _97.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _98.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Key;
                    fromJSON(object: any): _98.Key;
                    toJSON(message: _98.Key): unknown;
                    fromPartial(object: Partial<_98.Key>): _98.Key;
                    fromAmino(object: _98.KeyAmino): _98.Key;
                    toAmino(message: _98.Key): _98.KeyAmino;
                    fromAminoMsg(object: _98.KeyAminoMsg): _98.Key;
                    fromProtoMsg(message: _98.KeyProtoMsg): _98.Key;
                    toProto(message: _98.Key): Uint8Array;
                    toProtoMsg(message: _98.Key): _98.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _99.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Mappable;
                    fromJSON(object: any): _99.Mappable;
                    toJSON(message: _99.Mappable): unknown;
                    fromPartial(object: Partial<_99.Mappable>): _99.Mappable;
                    fromAmino(object: _99.MappableAmino): _99.Mappable;
                    toAmino(message: _99.Mappable): _99.MappableAmino;
                    fromAminoMsg(object: _99.MappableAminoMsg): _99.Mappable;
                    fromProtoMsg(message: _99.MappableProtoMsg): _99.Mappable;
                    toProto(message: _99.Mappable): Uint8Array;
                    toProtoMsg(message: _99.Mappable): _99.MappableProtoMsg;
                };
            };
            namespace queries {
                const order: {
                    ServiceClientImpl: typeof _362.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _100.QueryRequest): Promise<_101.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _101.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryResponse;
                        fromJSON(object: any): _101.QueryResponse;
                        toJSON(message: _101.QueryResponse): unknown;
                        fromPartial(object: Partial<_101.QueryResponse>): _101.QueryResponse;
                        fromAmino(object: _101.QueryResponseAmino): _101.QueryResponse;
                        toAmino(message: _101.QueryResponse): _101.QueryResponseAmino;
                        fromAminoMsg(object: _101.QueryResponseAminoMsg): _101.QueryResponse;
                        fromProtoMsg(message: _101.QueryResponseProtoMsg): _101.QueryResponse;
                        toProto(message: _101.QueryResponse): Uint8Array;
                        toProtoMsg(message: _101.QueryResponse): _101.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _100.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.QueryRequest;
                        fromJSON(object: any): _100.QueryRequest;
                        toJSON(message: _100.QueryRequest): unknown;
                        fromPartial(object: Partial<_100.QueryRequest>): _100.QueryRequest;
                        fromAmino(object: _100.QueryRequestAmino): _100.QueryRequest;
                        toAmino(message: _100.QueryRequest): _100.QueryRequestAmino;
                        fromAminoMsg(object: _100.QueryRequestAminoMsg): _100.QueryRequest;
                        fromProtoMsg(message: _100.QueryRequestProtoMsg): _100.QueryRequest;
                        toProto(message: _100.QueryRequest): Uint8Array;
                        toProtoMsg(message: _100.QueryRequest): _100.QueryRequestProtoMsg;
                    };
                };
                const orders: {
                    ServiceClientImpl: typeof _363.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _103.QueryRequest): Promise<_104.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _104.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryResponse;
                        fromJSON(object: any): _104.QueryResponse;
                        toJSON(message: _104.QueryResponse): unknown;
                        fromPartial(object: Partial<_104.QueryResponse>): _104.QueryResponse;
                        fromAmino(object: _104.QueryResponseAmino): _104.QueryResponse;
                        toAmino(message: _104.QueryResponse): _104.QueryResponseAmino;
                        fromAminoMsg(object: _104.QueryResponseAminoMsg): _104.QueryResponse;
                        fromProtoMsg(message: _104.QueryResponseProtoMsg): _104.QueryResponse;
                        toProto(message: _104.QueryResponse): Uint8Array;
                        toProtoMsg(message: _104.QueryResponse): _104.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _103.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.QueryRequest;
                        fromJSON(object: any): _103.QueryRequest;
                        toJSON(message: _103.QueryRequest): unknown;
                        fromPartial(object: Partial<_103.QueryRequest>): _103.QueryRequest;
                        fromAmino(object: _103.QueryRequestAmino): _103.QueryRequest;
                        toAmino(message: _103.QueryRequest): _103.QueryRequestAmino;
                        fromAminoMsg(object: _103.QueryRequestAminoMsg): _103.QueryRequest;
                        fromProtoMsg(message: _103.QueryRequestProtoMsg): _103.QueryRequest;
                        toProto(message: _103.QueryRequest): Uint8Array;
                        toProtoMsg(message: _103.QueryRequest): _103.QueryRequestProtoMsg;
                    };
                };
            }
            namespace transactions {
                const cancel: {
                    MsgClientImpl: typeof _384.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _106.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _106.Message): {
                                typeUrl: string;
                                value: _106.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _106.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _106.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _106.Message): {
                                typeUrl: string;
                                value: _106.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.cancel.Message": {
                            aminoType: string;
                            toAmino: (message: _106.Message) => _106.MessageAmino;
                            fromAmino: (object: _106.MessageAmino) => _106.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _108.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.TransactionResponse;
                        fromJSON(_: any): _108.TransactionResponse;
                        toJSON(_: _108.TransactionResponse): unknown;
                        fromPartial(_: Partial<_108.TransactionResponse>): _108.TransactionResponse;
                        fromAmino(_: _108.TransactionResponseAmino): _108.TransactionResponse;
                        toAmino(_: _108.TransactionResponse): _108.TransactionResponseAmino;
                        fromAminoMsg(object: _108.TransactionResponseAminoMsg): _108.TransactionResponse;
                        fromProtoMsg(message: _108.TransactionResponseProtoMsg): _108.TransactionResponse;
                        toProto(message: _108.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _108.TransactionResponse): _108.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _106.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.Message;
                        fromJSON(object: any): _106.Message;
                        toJSON(message: _106.Message): unknown;
                        fromPartial(object: Partial<_106.Message>): _106.Message;
                        fromAmino(object: _106.MessageAmino): _106.Message;
                        toAmino(message: _106.Message): _106.MessageAmino;
                        fromAminoMsg(object: _106.MessageAminoMsg): _106.Message;
                        fromProtoMsg(message: _106.MessageProtoMsg): _106.Message;
                        toProto(message: _106.Message): Uint8Array;
                        toProtoMsg(message: _106.Message): _106.MessageProtoMsg;
                    };
                };
                const define: {
                    MsgClientImpl: typeof _385.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _109.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _109.Message): {
                                typeUrl: string;
                                value: _109.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _109.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _109.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _109.Message): {
                                typeUrl: string;
                                value: _109.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _109.Message) => _109.MessageAmino;
                            fromAmino: (object: _109.MessageAmino) => _109.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _111.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.TransactionResponse;
                        fromJSON(object: any): _111.TransactionResponse;
                        toJSON(message: _111.TransactionResponse): unknown;
                        fromPartial(object: Partial<_111.TransactionResponse>): _111.TransactionResponse;
                        fromAmino(object: _111.TransactionResponseAmino): _111.TransactionResponse;
                        toAmino(message: _111.TransactionResponse): _111.TransactionResponseAmino;
                        fromAminoMsg(object: _111.TransactionResponseAminoMsg): _111.TransactionResponse;
                        fromProtoMsg(message: _111.TransactionResponseProtoMsg): _111.TransactionResponse;
                        toProto(message: _111.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _111.TransactionResponse): _111.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _109.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.Message;
                        fromJSON(object: any): _109.Message;
                        toJSON(message: _109.Message): unknown;
                        fromPartial(object: Partial<_109.Message>): _109.Message;
                        fromAmino(object: _109.MessageAmino): _109.Message;
                        toAmino(message: _109.Message): _109.MessageAmino;
                        fromAminoMsg(object: _109.MessageAminoMsg): _109.Message;
                        fromProtoMsg(message: _109.MessageProtoMsg): _109.Message;
                        toProto(message: _109.Message): Uint8Array;
                        toProtoMsg(message: _109.Message): _109.MessageProtoMsg;
                    };
                };
                const deputize: {
                    MsgClientImpl: typeof _386.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _112.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _112.Message): {
                                typeUrl: string;
                                value: _112.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _112.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _112.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _112.Message): {
                                typeUrl: string;
                                value: _112.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _112.Message) => _112.MessageAmino;
                            fromAmino: (object: _112.MessageAmino) => _112.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _114.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.TransactionResponse;
                        fromJSON(_: any): _114.TransactionResponse;
                        toJSON(_: _114.TransactionResponse): unknown;
                        fromPartial(_: Partial<_114.TransactionResponse>): _114.TransactionResponse;
                        fromAmino(_: _114.TransactionResponseAmino): _114.TransactionResponse;
                        toAmino(_: _114.TransactionResponse): _114.TransactionResponseAmino;
                        fromAminoMsg(object: _114.TransactionResponseAminoMsg): _114.TransactionResponse;
                        fromProtoMsg(message: _114.TransactionResponseProtoMsg): _114.TransactionResponse;
                        toProto(message: _114.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _114.TransactionResponse): _114.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _112.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Message;
                        fromJSON(object: any): _112.Message;
                        toJSON(message: _112.Message): unknown;
                        fromPartial(object: Partial<_112.Message>): _112.Message;
                        fromAmino(object: _112.MessageAmino): _112.Message;
                        toAmino(message: _112.Message): _112.MessageAmino;
                        fromAminoMsg(object: _112.MessageAminoMsg): _112.Message;
                        fromProtoMsg(message: _112.MessageProtoMsg): _112.Message;
                        toProto(message: _112.Message): Uint8Array;
                        toProtoMsg(message: _112.Message): _112.MessageProtoMsg;
                    };
                };
                const immediate: {
                    MsgClientImpl: typeof _387.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _115.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _115.Message): {
                                typeUrl: string;
                                value: _115.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _115.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _115.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _115.Message): {
                                typeUrl: string;
                                value: _115.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.immediate.Message": {
                            aminoType: string;
                            toAmino: (message: _115.Message) => _115.MessageAmino;
                            fromAmino: (object: _115.MessageAmino) => _115.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _117.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.TransactionResponse;
                        fromJSON(_: any): _117.TransactionResponse;
                        toJSON(_: _117.TransactionResponse): unknown;
                        fromPartial(_: Partial<_117.TransactionResponse>): _117.TransactionResponse;
                        fromAmino(_: _117.TransactionResponseAmino): _117.TransactionResponse;
                        toAmino(_: _117.TransactionResponse): _117.TransactionResponseAmino;
                        fromAminoMsg(object: _117.TransactionResponseAminoMsg): _117.TransactionResponse;
                        fromProtoMsg(message: _117.TransactionResponseProtoMsg): _117.TransactionResponse;
                        toProto(message: _117.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _117.TransactionResponse): _117.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _115.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.Message;
                        fromJSON(object: any): _115.Message;
                        toJSON(message: _115.Message): unknown;
                        fromPartial(object: Partial<_115.Message>): _115.Message;
                        fromAmino(object: _115.MessageAmino): _115.Message;
                        toAmino(message: _115.Message): _115.MessageAmino;
                        fromAminoMsg(object: _115.MessageAminoMsg): _115.Message;
                        fromProtoMsg(message: _115.MessageProtoMsg): _115.Message;
                        toProto(message: _115.Message): Uint8Array;
                        toProtoMsg(message: _115.Message): _115.MessageProtoMsg;
                    };
                };
                const make: {
                    MsgClientImpl: typeof _388.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _118.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _118.Message): {
                                typeUrl: string;
                                value: _118.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _118.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _118.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _118.Message): {
                                typeUrl: string;
                                value: _118.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.make.Message": {
                            aminoType: string;
                            toAmino: (message: _118.Message) => _118.MessageAmino;
                            fromAmino: (object: _118.MessageAmino) => _118.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _120.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TransactionResponse;
                        fromJSON(object: any): _120.TransactionResponse;
                        toJSON(message: _120.TransactionResponse): unknown;
                        fromPartial(object: Partial<_120.TransactionResponse>): _120.TransactionResponse;
                        fromAmino(object: _120.TransactionResponseAmino): _120.TransactionResponse;
                        toAmino(message: _120.TransactionResponse): _120.TransactionResponseAmino;
                        fromAminoMsg(object: _120.TransactionResponseAminoMsg): _120.TransactionResponse;
                        fromProtoMsg(message: _120.TransactionResponseProtoMsg): _120.TransactionResponse;
                        toProto(message: _120.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _120.TransactionResponse): _120.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _118.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.Message;
                        fromJSON(object: any): _118.Message;
                        toJSON(message: _118.Message): unknown;
                        fromPartial(object: Partial<_118.Message>): _118.Message;
                        fromAmino(object: _118.MessageAmino): _118.Message;
                        toAmino(message: _118.Message): _118.MessageAmino;
                        fromAminoMsg(object: _118.MessageAminoMsg): _118.Message;
                        fromProtoMsg(message: _118.MessageProtoMsg): _118.Message;
                        toProto(message: _118.Message): Uint8Array;
                        toProtoMsg(message: _118.Message): _118.MessageProtoMsg;
                    };
                };
                const modify: {
                    MsgClientImpl: typeof _389.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _121.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _121.Message): {
                                typeUrl: string;
                                value: _121.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _121.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _121.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _121.Message): {
                                typeUrl: string;
                                value: _121.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.modify.Message": {
                            aminoType: string;
                            toAmino: (message: _121.Message) => _121.MessageAmino;
                            fromAmino: (object: _121.MessageAmino) => _121.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _123.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _123.TransactionResponse;
                        fromJSON(_: any): _123.TransactionResponse;
                        toJSON(_: _123.TransactionResponse): unknown;
                        fromPartial(_: Partial<_123.TransactionResponse>): _123.TransactionResponse;
                        fromAmino(_: _123.TransactionResponseAmino): _123.TransactionResponse;
                        toAmino(_: _123.TransactionResponse): _123.TransactionResponseAmino;
                        fromAminoMsg(object: _123.TransactionResponseAminoMsg): _123.TransactionResponse;
                        fromProtoMsg(message: _123.TransactionResponseProtoMsg): _123.TransactionResponse;
                        toProto(message: _123.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _123.TransactionResponse): _123.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _121.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _121.Message;
                        fromJSON(object: any): _121.Message;
                        toJSON(message: _121.Message): unknown;
                        fromPartial(object: Partial<_121.Message>): _121.Message;
                        fromAmino(object: _121.MessageAmino): _121.Message;
                        toAmino(message: _121.Message): _121.MessageAmino;
                        fromAminoMsg(object: _121.MessageAminoMsg): _121.Message;
                        fromProtoMsg(message: _121.MessageProtoMsg): _121.Message;
                        toProto(message: _121.Message): Uint8Array;
                        toProtoMsg(message: _121.Message): _121.MessageProtoMsg;
                    };
                };
                const revoke: {
                    MsgClientImpl: typeof _390.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _124.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _124.Message): {
                                typeUrl: string;
                                value: _124.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _124.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _124.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _124.Message): {
                                typeUrl: string;
                                value: _124.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _124.Message) => _124.MessageAmino;
                            fromAmino: (object: _124.MessageAmino) => _124.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _126.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TransactionResponse;
                        fromJSON(_: any): _126.TransactionResponse;
                        toJSON(_: _126.TransactionResponse): unknown;
                        fromPartial(_: Partial<_126.TransactionResponse>): _126.TransactionResponse;
                        fromAmino(_: _126.TransactionResponseAmino): _126.TransactionResponse;
                        toAmino(_: _126.TransactionResponse): _126.TransactionResponseAmino;
                        fromAminoMsg(object: _126.TransactionResponseAminoMsg): _126.TransactionResponse;
                        fromProtoMsg(message: _126.TransactionResponseProtoMsg): _126.TransactionResponse;
                        toProto(message: _126.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _126.TransactionResponse): _126.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _124.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _124.Message;
                        fromJSON(object: any): _124.Message;
                        toJSON(message: _124.Message): unknown;
                        fromPartial(object: Partial<_124.Message>): _124.Message;
                        fromAmino(object: _124.MessageAmino): _124.Message;
                        toAmino(message: _124.Message): _124.MessageAmino;
                        fromAminoMsg(object: _124.MessageAminoMsg): _124.Message;
                        fromProtoMsg(message: _124.MessageProtoMsg): _124.Message;
                        toProto(message: _124.Message): Uint8Array;
                        toProtoMsg(message: _124.Message): _124.MessageProtoMsg;
                    };
                };
                const take: {
                    MsgClientImpl: typeof _391.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _127.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _127.Message): {
                                typeUrl: string;
                                value: _127.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _127.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _127.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _127.Message): {
                                typeUrl: string;
                                value: _127.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.take.Message": {
                            aminoType: string;
                            toAmino: (message: _127.Message) => _127.MessageAmino;
                            fromAmino: (object: _127.MessageAmino) => _127.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _129.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _129.TransactionResponse;
                        fromJSON(_: any): _129.TransactionResponse;
                        toJSON(_: _129.TransactionResponse): unknown;
                        fromPartial(_: Partial<_129.TransactionResponse>): _129.TransactionResponse;
                        fromAmino(_: _129.TransactionResponseAmino): _129.TransactionResponse;
                        toAmino(_: _129.TransactionResponse): _129.TransactionResponseAmino;
                        fromAminoMsg(object: _129.TransactionResponseAminoMsg): _129.TransactionResponse;
                        fromProtoMsg(message: _129.TransactionResponseProtoMsg): _129.TransactionResponse;
                        toProto(message: _129.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _129.TransactionResponse): _129.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _127.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _127.Message;
                        fromJSON(object: any): _127.Message;
                        toJSON(message: _127.Message): unknown;
                        fromPartial(object: Partial<_127.Message>): _127.Message;
                        fromAmino(object: _127.MessageAmino): _127.Message;
                        toAmino(message: _127.Message): _127.MessageAmino;
                        fromAminoMsg(object: _127.MessageAminoMsg): _127.Message;
                        fromProtoMsg(message: _127.MessageProtoMsg): _127.Message;
                        toProto(message: _127.Message): Uint8Array;
                        toProtoMsg(message: _127.Message): _127.MessageProtoMsg;
                    };
                };
            }
        }
        namespace splits {
            const genesis: {
                Genesis: {
                    encode(message: _130.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Genesis;
                    fromJSON(object: any): _130.Genesis;
                    toJSON(message: _130.Genesis): unknown;
                    fromPartial(object: Partial<_130.Genesis>): _130.Genesis;
                    fromAmino(object: _130.GenesisAmino): _130.Genesis;
                    toAmino(message: _130.Genesis): _130.GenesisAmino;
                    fromAminoMsg(object: _130.GenesisAminoMsg): _130.Genesis;
                    fromProtoMsg(message: _130.GenesisProtoMsg): _130.Genesis;
                    toProto(message: _130.Genesis): Uint8Array;
                    toProtoMsg(message: _130.Genesis): _130.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _131.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _131.Key;
                    fromJSON(object: any): _131.Key;
                    toJSON(message: _131.Key): unknown;
                    fromPartial(object: Partial<_131.Key>): _131.Key;
                    fromAmino(object: _131.KeyAmino): _131.Key;
                    toAmino(message: _131.Key): _131.KeyAmino;
                    fromAminoMsg(object: _131.KeyAminoMsg): _131.Key;
                    fromProtoMsg(message: _131.KeyProtoMsg): _131.Key;
                    toProto(message: _131.Key): Uint8Array;
                    toProtoMsg(message: _131.Key): _131.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _132.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.Mappable;
                    fromJSON(object: any): _132.Mappable;
                    toJSON(message: _132.Mappable): unknown;
                    fromPartial(object: Partial<_132.Mappable>): _132.Mappable;
                    fromAmino(object: _132.MappableAmino): _132.Mappable;
                    toAmino(message: _132.Mappable): _132.MappableAmino;
                    fromAminoMsg(object: _132.MappableAminoMsg): _132.Mappable;
                    fromProtoMsg(message: _132.MappableProtoMsg): _132.Mappable;
                    toProto(message: _132.Mappable): Uint8Array;
                    toProtoMsg(message: _132.Mappable): _132.MappableProtoMsg;
                };
            };
            namespace queries {
                const ownable: {
                    ServiceClientImpl: typeof _364.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _133.QueryRequest): Promise<_134.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _134.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _134.QueryResponse;
                        fromJSON(object: any): _134.QueryResponse;
                        toJSON(message: _134.QueryResponse): unknown;
                        fromPartial(object: Partial<_134.QueryResponse>): _134.QueryResponse;
                        fromAmino(object: _134.QueryResponseAmino): _134.QueryResponse;
                        toAmino(message: _134.QueryResponse): _134.QueryResponseAmino;
                        fromAminoMsg(object: _134.QueryResponseAminoMsg): _134.QueryResponse;
                        fromProtoMsg(message: _134.QueryResponseProtoMsg): _134.QueryResponse;
                        toProto(message: _134.QueryResponse): Uint8Array;
                        toProtoMsg(message: _134.QueryResponse): _134.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _133.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.QueryRequest;
                        fromJSON(object: any): _133.QueryRequest;
                        toJSON(message: _133.QueryRequest): unknown;
                        fromPartial(object: Partial<_133.QueryRequest>): _133.QueryRequest;
                        fromAmino(object: _133.QueryRequestAmino): _133.QueryRequest;
                        toAmino(message: _133.QueryRequest): _133.QueryRequestAmino;
                        fromAminoMsg(object: _133.QueryRequestAminoMsg): _133.QueryRequest;
                        fromProtoMsg(message: _133.QueryRequestProtoMsg): _133.QueryRequest;
                        toProto(message: _133.QueryRequest): Uint8Array;
                        toProtoMsg(message: _133.QueryRequest): _133.QueryRequestProtoMsg;
                    };
                };
                const split: {
                    ServiceClientImpl: typeof _365.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _136.QueryRequest): Promise<_137.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _137.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.QueryResponse;
                        fromJSON(object: any): _137.QueryResponse;
                        toJSON(message: _137.QueryResponse): unknown;
                        fromPartial(object: Partial<_137.QueryResponse>): _137.QueryResponse;
                        fromAmino(object: _137.QueryResponseAmino): _137.QueryResponse;
                        toAmino(message: _137.QueryResponse): _137.QueryResponseAmino;
                        fromAminoMsg(object: _137.QueryResponseAminoMsg): _137.QueryResponse;
                        fromProtoMsg(message: _137.QueryResponseProtoMsg): _137.QueryResponse;
                        toProto(message: _137.QueryResponse): Uint8Array;
                        toProtoMsg(message: _137.QueryResponse): _137.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _136.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.QueryRequest;
                        fromJSON(object: any): _136.QueryRequest;
                        toJSON(message: _136.QueryRequest): unknown;
                        fromPartial(object: Partial<_136.QueryRequest>): _136.QueryRequest;
                        fromAmino(object: _136.QueryRequestAmino): _136.QueryRequest;
                        toAmino(message: _136.QueryRequest): _136.QueryRequestAmino;
                        fromAminoMsg(object: _136.QueryRequestAminoMsg): _136.QueryRequest;
                        fromProtoMsg(message: _136.QueryRequestProtoMsg): _136.QueryRequest;
                        toProto(message: _136.QueryRequest): Uint8Array;
                        toProtoMsg(message: _136.QueryRequest): _136.QueryRequestProtoMsg;
                    };
                };
                const splits: {
                    ServiceClientImpl: typeof _366.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _139.QueryRequest): Promise<_140.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _140.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _140.QueryResponse;
                        fromJSON(object: any): _140.QueryResponse;
                        toJSON(message: _140.QueryResponse): unknown;
                        fromPartial(object: Partial<_140.QueryResponse>): _140.QueryResponse;
                        fromAmino(object: _140.QueryResponseAmino): _140.QueryResponse;
                        toAmino(message: _140.QueryResponse): _140.QueryResponseAmino;
                        fromAminoMsg(object: _140.QueryResponseAminoMsg): _140.QueryResponse;
                        fromProtoMsg(message: _140.QueryResponseProtoMsg): _140.QueryResponse;
                        toProto(message: _140.QueryResponse): Uint8Array;
                        toProtoMsg(message: _140.QueryResponse): _140.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _139.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.QueryRequest;
                        fromJSON(object: any): _139.QueryRequest;
                        toJSON(message: _139.QueryRequest): unknown;
                        fromPartial(object: Partial<_139.QueryRequest>): _139.QueryRequest;
                        fromAmino(object: _139.QueryRequestAmino): _139.QueryRequest;
                        toAmino(message: _139.QueryRequest): _139.QueryRequestAmino;
                        fromAminoMsg(object: _139.QueryRequestAminoMsg): _139.QueryRequest;
                        fromProtoMsg(message: _139.QueryRequestProtoMsg): _139.QueryRequest;
                        toProto(message: _139.QueryRequest): Uint8Array;
                        toProtoMsg(message: _139.QueryRequest): _139.QueryRequestProtoMsg;
                    };
                };
            }
            namespace transactions {
                const send: {
                    MsgClientImpl: typeof _392.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _142.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _142.Message): {
                                typeUrl: string;
                                value: _142.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _142.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _142.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _142.Message): {
                                typeUrl: string;
                                value: _142.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.send.Message": {
                            aminoType: string;
                            toAmino: (message: _142.Message) => _142.MessageAmino;
                            fromAmino: (object: _142.MessageAmino) => _142.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _144.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TransactionResponse;
                        fromJSON(_: any): _144.TransactionResponse;
                        toJSON(_: _144.TransactionResponse): unknown;
                        fromPartial(_: Partial<_144.TransactionResponse>): _144.TransactionResponse;
                        fromAmino(_: _144.TransactionResponseAmino): _144.TransactionResponse;
                        toAmino(_: _144.TransactionResponse): _144.TransactionResponseAmino;
                        fromAminoMsg(object: _144.TransactionResponseAminoMsg): _144.TransactionResponse;
                        fromProtoMsg(message: _144.TransactionResponseProtoMsg): _144.TransactionResponse;
                        toProto(message: _144.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _144.TransactionResponse): _144.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _142.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.Message;
                        fromJSON(object: any): _142.Message;
                        toJSON(message: _142.Message): unknown;
                        fromPartial(object: Partial<_142.Message>): _142.Message;
                        fromAmino(object: _142.MessageAmino): _142.Message;
                        toAmino(message: _142.Message): _142.MessageAmino;
                        fromAminoMsg(object: _142.MessageAminoMsg): _142.Message;
                        fromProtoMsg(message: _142.MessageProtoMsg): _142.Message;
                        toProto(message: _142.Message): Uint8Array;
                        toProtoMsg(message: _142.Message): _142.MessageProtoMsg;
                    };
                };
                const unwrap: {
                    MsgClientImpl: typeof _393.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _145.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _145.Message): {
                                typeUrl: string;
                                value: _145.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _145.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _145.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _145.Message): {
                                typeUrl: string;
                                value: _145.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.unwrap.Message": {
                            aminoType: string;
                            toAmino: (message: _145.Message) => _145.MessageAmino;
                            fromAmino: (object: _145.MessageAmino) => _145.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _147.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _147.TransactionResponse;
                        fromJSON(_: any): _147.TransactionResponse;
                        toJSON(_: _147.TransactionResponse): unknown;
                        fromPartial(_: Partial<_147.TransactionResponse>): _147.TransactionResponse;
                        fromAmino(_: _147.TransactionResponseAmino): _147.TransactionResponse;
                        toAmino(_: _147.TransactionResponse): _147.TransactionResponseAmino;
                        fromAminoMsg(object: _147.TransactionResponseAminoMsg): _147.TransactionResponse;
                        fromProtoMsg(message: _147.TransactionResponseProtoMsg): _147.TransactionResponse;
                        toProto(message: _147.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _147.TransactionResponse): _147.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _145.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.Message;
                        fromJSON(object: any): _145.Message;
                        toJSON(message: _145.Message): unknown;
                        fromPartial(object: Partial<_145.Message>): _145.Message;
                        fromAmino(object: _145.MessageAmino): _145.Message;
                        toAmino(message: _145.Message): _145.MessageAmino;
                        fromAminoMsg(object: _145.MessageAminoMsg): _145.Message;
                        fromProtoMsg(message: _145.MessageProtoMsg): _145.Message;
                        toProto(message: _145.Message): Uint8Array;
                        toProtoMsg(message: _145.Message): _145.MessageProtoMsg;
                    };
                };
                const wrap: {
                    MsgClientImpl: typeof _394.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _148.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _148.Message): {
                                typeUrl: string;
                                value: _148.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _148.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _148.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _148.Message): {
                                typeUrl: string;
                                value: _148.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.wrap.Message": {
                            aminoType: string;
                            toAmino: (message: _148.Message) => _148.MessageAmino;
                            fromAmino: (object: _148.MessageAmino) => _148.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _150.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TransactionResponse;
                        fromJSON(object: any): _150.TransactionResponse;
                        toJSON(message: _150.TransactionResponse): unknown;
                        fromPartial(object: Partial<_150.TransactionResponse>): _150.TransactionResponse;
                        fromAmino(object: _150.TransactionResponseAmino): _150.TransactionResponse;
                        toAmino(message: _150.TransactionResponse): _150.TransactionResponseAmino;
                        fromAminoMsg(object: _150.TransactionResponseAminoMsg): _150.TransactionResponse;
                        fromProtoMsg(message: _150.TransactionResponseProtoMsg): _150.TransactionResponse;
                        toProto(message: _150.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _150.TransactionResponse): _150.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _148.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Message;
                        fromJSON(object: any): _148.Message;
                        toJSON(message: _148.Message): unknown;
                        fromPartial(object: Partial<_148.Message>): _148.Message;
                        fromAmino(object: _148.MessageAmino): _148.Message;
                        toAmino(message: _148.Message): _148.MessageAmino;
                        fromAminoMsg(object: _148.MessageAminoMsg): _148.Message;
                        fromProtoMsg(message: _148.MessageProtoMsg): _148.Message;
                        toProto(message: _148.Message): Uint8Array;
                        toProtoMsg(message: _148.Message): _148.MessageProtoMsg;
                    };
                };
            }
        }
    }
    namespace schema {
        namespace data {
            const base: {
                StringData: {
                    encode(message: _158.StringData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.StringData;
                    fromJSON(object: any): _158.StringData;
                    toJSON(message: _158.StringData): unknown;
                    fromPartial(object: Partial<_158.StringData>): _158.StringData;
                    fromAmino(object: _158.StringDataAmino): _158.StringData;
                    toAmino(message: _158.StringData): _158.StringDataAmino;
                    fromAminoMsg(object: _158.StringDataAminoMsg): _158.StringData;
                    fromProtoMsg(message: _158.StringDataProtoMsg): _158.StringData;
                    toProto(message: _158.StringData): Uint8Array;
                    toProtoMsg(message: _158.StringData): _158.StringDataProtoMsg;
                };
                NumberData: {
                    encode(message: _157.NumberData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.NumberData;
                    fromJSON(object: any): _157.NumberData;
                    toJSON(message: _157.NumberData): unknown;
                    fromPartial(object: Partial<_157.NumberData>): _157.NumberData;
                    fromAmino(object: _157.NumberDataAmino): _157.NumberData;
                    toAmino(message: _157.NumberData): _157.NumberDataAmino;
                    fromAminoMsg(object: _157.NumberDataAminoMsg): _157.NumberData;
                    fromProtoMsg(message: _157.NumberDataProtoMsg): _157.NumberData;
                    toProto(message: _157.NumberData): Uint8Array;
                    toProtoMsg(message: _157.NumberData): _157.NumberDataProtoMsg;
                };
                IDData: {
                    encode(message: _156.IDData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _156.IDData;
                    fromJSON(object: any): _156.IDData;
                    toJSON(message: _156.IDData): unknown;
                    fromPartial(object: Partial<_156.IDData>): _156.IDData;
                    fromAmino(object: _156.IDDataAmino): _156.IDData;
                    toAmino(message: _156.IDData): _156.IDDataAmino;
                    fromAminoMsg(object: _156.IDDataAminoMsg): _156.IDData;
                    fromProtoMsg(message: _156.IDDataProtoMsg): _156.IDData;
                    toProto(message: _156.IDData): Uint8Array;
                    toProtoMsg(message: _156.IDData): _156.IDDataProtoMsg;
                };
                HeightData: {
                    encode(message: _155.HeightData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.HeightData;
                    fromJSON(object: any): _155.HeightData;
                    toJSON(message: _155.HeightData): unknown;
                    fromPartial(object: Partial<_155.HeightData>): _155.HeightData;
                    fromAmino(object: _155.HeightDataAmino): _155.HeightData;
                    toAmino(message: _155.HeightData): _155.HeightDataAmino;
                    fromAminoMsg(object: _155.HeightDataAminoMsg): _155.HeightData;
                    fromProtoMsg(message: _155.HeightDataProtoMsg): _155.HeightData;
                    toProto(message: _155.HeightData): Uint8Array;
                    toProtoMsg(message: _155.HeightData): _155.HeightDataProtoMsg;
                };
                DecData: {
                    encode(message: _154.DecData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.DecData;
                    fromJSON(object: any): _154.DecData;
                    toJSON(message: _154.DecData): unknown;
                    fromPartial(object: Partial<_154.DecData>): _154.DecData;
                    fromAmino(object: _154.DecDataAmino): _154.DecData;
                    toAmino(message: _154.DecData): _154.DecDataAmino;
                    fromAminoMsg(object: _154.DecDataAminoMsg): _154.DecData;
                    fromProtoMsg(message: _154.DecDataProtoMsg): _154.DecData;
                    toProto(message: _154.DecData): Uint8Array;
                    toProtoMsg(message: _154.DecData): _154.DecDataProtoMsg;
                };
                BooleanData: {
                    encode(message: _153.BooleanData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.BooleanData;
                    fromJSON(object: any): _153.BooleanData;
                    toJSON(message: _153.BooleanData): unknown;
                    fromPartial(object: Partial<_153.BooleanData>): _153.BooleanData;
                    fromAmino(object: _153.BooleanDataAmino): _153.BooleanData;
                    toAmino(message: _153.BooleanData): _153.BooleanDataAmino;
                    fromAminoMsg(object: _153.BooleanDataAminoMsg): _153.BooleanData;
                    fromProtoMsg(message: _153.BooleanDataProtoMsg): _153.BooleanData;
                    toProto(message: _153.BooleanData): Uint8Array;
                    toProtoMsg(message: _153.BooleanData): _153.BooleanDataProtoMsg;
                };
                AnyData: {
                    encode(message: _152.AnyData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.AnyData;
                    fromJSON(object: any): _152.AnyData;
                    toJSON(message: _152.AnyData): unknown;
                    fromPartial(object: Partial<_152.AnyData>): _152.AnyData;
                    fromAmino(object: _152.AnyDataAmino): _152.AnyData;
                    toAmino(message: _152.AnyData): _152.AnyDataAmino;
                    fromAminoMsg(object: _152.AnyDataAminoMsg): _152.AnyData;
                    fromProtoMsg(message: _152.AnyDataProtoMsg): _152.AnyData;
                    toProto(message: _152.AnyData): Uint8Array;
                    toProtoMsg(message: _152.AnyData): _152.AnyDataProtoMsg;
                };
                ListData: {
                    encode(message: _152.ListData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.ListData;
                    fromJSON(object: any): _152.ListData;
                    toJSON(message: _152.ListData): unknown;
                    fromPartial(object: Partial<_152.ListData>): _152.ListData;
                    fromAmino(object: _152.ListDataAmino): _152.ListData;
                    toAmino(message: _152.ListData): _152.ListDataAmino;
                    fromAminoMsg(object: _152.ListDataAminoMsg): _152.ListData;
                    fromProtoMsg(message: _152.ListDataProtoMsg): _152.ListData;
                    toProto(message: _152.ListData): Uint8Array;
                    toProtoMsg(message: _152.ListData): _152.ListDataProtoMsg;
                };
                AccAddressData: {
                    encode(message: _151.AccAddressData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.AccAddressData;
                    fromJSON(object: any): _151.AccAddressData;
                    toJSON(message: _151.AccAddressData): unknown;
                    fromPartial(object: Partial<_151.AccAddressData>): _151.AccAddressData;
                    fromAmino(object: _151.AccAddressDataAmino): _151.AccAddressData;
                    toAmino(message: _151.AccAddressData): _151.AccAddressDataAmino;
                    fromAminoMsg(object: _151.AccAddressDataAminoMsg): _151.AccAddressData;
                    fromProtoMsg(message: _151.AccAddressDataProtoMsg): _151.AccAddressData;
                    toProto(message: _151.AccAddressData): Uint8Array;
                    toProtoMsg(message: _151.AccAddressData): _151.AccAddressDataProtoMsg;
                };
            };
        }
        namespace documents {
            const base: {
                Document: {
                    encode(message: _159.Document, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.Document;
                    fromJSON(object: any): _159.Document;
                    toJSON(message: _159.Document): unknown;
                    fromPartial(object: Partial<_159.Document>): _159.Document;
                    fromAmino(object: _159.DocumentAmino): _159.Document;
                    toAmino(message: _159.Document): _159.DocumentAmino;
                    fromAminoMsg(object: _159.DocumentAminoMsg): _159.Document;
                    fromProtoMsg(message: _159.DocumentProtoMsg): _159.Document;
                    toProto(message: _159.Document): Uint8Array;
                    toProtoMsg(message: _159.Document): _159.DocumentProtoMsg;
                };
            };
        }
        namespace ids {
            const base: {
                StringID: {
                    encode(message: _172.StringID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.StringID;
                    fromJSON(object: any): _172.StringID;
                    toJSON(message: _172.StringID): unknown;
                    fromPartial(object: Partial<_172.StringID>): _172.StringID;
                    fromAmino(object: _172.StringIDAmino): _172.StringID;
                    toAmino(message: _172.StringID): _172.StringIDAmino;
                    fromAminoMsg(object: _172.StringIDAminoMsg): _172.StringID;
                    fromProtoMsg(message: _172.StringIDProtoMsg): _172.StringID;
                    toProto(message: _172.StringID): Uint8Array;
                    toProtoMsg(message: _172.StringID): _172.StringIDProtoMsg;
                };
                SplitID: {
                    encode(message: _171.SplitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.SplitID;
                    fromJSON(object: any): _171.SplitID;
                    toJSON(message: _171.SplitID): unknown;
                    fromPartial(object: Partial<_171.SplitID>): _171.SplitID;
                    fromAmino(object: _171.SplitIDAmino): _171.SplitID;
                    toAmino(message: _171.SplitID): _171.SplitIDAmino;
                    fromAminoMsg(object: _171.SplitIDAminoMsg): _171.SplitID;
                    fromProtoMsg(message: _171.SplitIDProtoMsg): _171.SplitID;
                    toProto(message: _171.SplitID): Uint8Array;
                    toProtoMsg(message: _171.SplitID): _171.SplitIDProtoMsg;
                };
                PropertyID: {
                    encode(message: _170.PropertyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.PropertyID;
                    fromJSON(object: any): _170.PropertyID;
                    toJSON(message: _170.PropertyID): unknown;
                    fromPartial(object: Partial<_170.PropertyID>): _170.PropertyID;
                    fromAmino(object: _170.PropertyIDAmino): _170.PropertyID;
                    toAmino(message: _170.PropertyID): _170.PropertyIDAmino;
                    fromAminoMsg(object: _170.PropertyIDAminoMsg): _170.PropertyID;
                    fromProtoMsg(message: _170.PropertyIDProtoMsg): _170.PropertyID;
                    toProto(message: _170.PropertyID): Uint8Array;
                    toProtoMsg(message: _170.PropertyID): _170.PropertyIDProtoMsg;
                };
                OrderID: {
                    encode(message: _169.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.OrderID;
                    fromJSON(object: any): _169.OrderID;
                    toJSON(message: _169.OrderID): unknown;
                    fromPartial(object: Partial<_169.OrderID>): _169.OrderID;
                    fromAmino(object: _169.OrderIDAmino): _169.OrderID;
                    toAmino(message: _169.OrderID): _169.OrderIDAmino;
                    fromAminoMsg(object: _169.OrderIDAminoMsg): _169.OrderID;
                    fromProtoMsg(message: _169.OrderIDProtoMsg): _169.OrderID;
                    toProto(message: _169.OrderID): Uint8Array;
                    toProtoMsg(message: _169.OrderID): _169.OrderIDProtoMsg;
                };
                MaintainerID: {
                    encode(message: _168.MaintainerID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.MaintainerID;
                    fromJSON(object: any): _168.MaintainerID;
                    toJSON(message: _168.MaintainerID): unknown;
                    fromPartial(object: Partial<_168.MaintainerID>): _168.MaintainerID;
                    fromAmino(object: _168.MaintainerIDAmino): _168.MaintainerID;
                    toAmino(message: _168.MaintainerID): _168.MaintainerIDAmino;
                    fromAminoMsg(object: _168.MaintainerIDAminoMsg): _168.MaintainerID;
                    fromProtoMsg(message: _168.MaintainerIDProtoMsg): _168.MaintainerID;
                    toProto(message: _168.MaintainerID): Uint8Array;
                    toProtoMsg(message: _168.MaintainerID): _168.MaintainerIDProtoMsg;
                };
                IdentityID: {
                    encode(message: _167.IdentityID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.IdentityID;
                    fromJSON(object: any): _167.IdentityID;
                    toJSON(message: _167.IdentityID): unknown;
                    fromPartial(object: Partial<_167.IdentityID>): _167.IdentityID;
                    fromAmino(object: _167.IdentityIDAmino): _167.IdentityID;
                    toAmino(message: _167.IdentityID): _167.IdentityIDAmino;
                    fromAminoMsg(object: _167.IdentityIDAminoMsg): _167.IdentityID;
                    fromProtoMsg(message: _167.IdentityIDProtoMsg): _167.IdentityID;
                    toProto(message: _167.IdentityID): Uint8Array;
                    toProtoMsg(message: _167.IdentityID): _167.IdentityIDProtoMsg;
                };
                HashID: {
                    encode(message: _166.HashID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.HashID;
                    fromJSON(object: any): _166.HashID;
                    toJSON(message: _166.HashID): unknown;
                    fromPartial(object: Partial<_166.HashID>): _166.HashID;
                    fromAmino(object: _166.HashIDAmino): _166.HashID;
                    toAmino(message: _166.HashID): _166.HashIDAmino;
                    fromAminoMsg(object: _166.HashIDAminoMsg): _166.HashID;
                    fromProtoMsg(message: _166.HashIDProtoMsg): _166.HashID;
                    toProto(message: _166.HashID): Uint8Array;
                    toProtoMsg(message: _166.HashID): _166.HashIDProtoMsg;
                };
                DataID: {
                    encode(message: _165.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.DataID;
                    fromJSON(object: any): _165.DataID;
                    toJSON(message: _165.DataID): unknown;
                    fromPartial(object: Partial<_165.DataID>): _165.DataID;
                    fromAmino(object: _165.DataIDAmino): _165.DataID;
                    toAmino(message: _165.DataID): _165.DataIDAmino;
                    fromAminoMsg(object: _165.DataIDAminoMsg): _165.DataID;
                    fromProtoMsg(message: _165.DataIDProtoMsg): _165.DataID;
                    toProto(message: _165.DataID): Uint8Array;
                    toProtoMsg(message: _165.DataID): _165.DataIDProtoMsg;
                };
                CoinID: {
                    encode(message: _164.CoinID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.CoinID;
                    fromJSON(object: any): _164.CoinID;
                    toJSON(message: _164.CoinID): unknown;
                    fromPartial(object: Partial<_164.CoinID>): _164.CoinID;
                    fromAmino(object: _164.CoinIDAmino): _164.CoinID;
                    toAmino(message: _164.CoinID): _164.CoinIDAmino;
                    fromAminoMsg(object: _164.CoinIDAminoMsg): _164.CoinID;
                    fromProtoMsg(message: _164.CoinIDProtoMsg): _164.CoinID;
                    toProto(message: _164.CoinID): Uint8Array;
                    toProtoMsg(message: _164.CoinID): _164.CoinIDProtoMsg;
                };
                ClassificationID: {
                    encode(message: _163.ClassificationID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.ClassificationID;
                    fromJSON(object: any): _163.ClassificationID;
                    toJSON(message: _163.ClassificationID): unknown;
                    fromPartial(object: Partial<_163.ClassificationID>): _163.ClassificationID;
                    fromAmino(object: _163.ClassificationIDAmino): _163.ClassificationID;
                    toAmino(message: _163.ClassificationID): _163.ClassificationIDAmino;
                    fromAminoMsg(object: _163.ClassificationIDAminoMsg): _163.ClassificationID;
                    fromProtoMsg(message: _163.ClassificationIDProtoMsg): _163.ClassificationID;
                    toProto(message: _163.ClassificationID): Uint8Array;
                    toProtoMsg(message: _163.ClassificationID): _163.ClassificationIDProtoMsg;
                };
                AssetID: {
                    encode(message: _162.AssetID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.AssetID;
                    fromJSON(object: any): _162.AssetID;
                    toJSON(message: _162.AssetID): unknown;
                    fromPartial(object: Partial<_162.AssetID>): _162.AssetID;
                    fromAmino(object: _162.AssetIDAmino): _162.AssetID;
                    toAmino(message: _162.AssetID): _162.AssetIDAmino;
                    fromAminoMsg(object: _162.AssetIDAminoMsg): _162.AssetID;
                    fromProtoMsg(message: _162.AssetIDProtoMsg): _162.AssetID;
                    toProto(message: _162.AssetID): Uint8Array;
                    toProtoMsg(message: _162.AssetID): _162.AssetIDProtoMsg;
                };
                AnyOwnableID: {
                    encode(message: _161.AnyOwnableID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.AnyOwnableID;
                    fromJSON(object: any): _161.AnyOwnableID;
                    toJSON(message: _161.AnyOwnableID): unknown;
                    fromPartial(object: Partial<_161.AnyOwnableID>): _161.AnyOwnableID;
                    fromAmino(object: _161.AnyOwnableIDAmino): _161.AnyOwnableID;
                    toAmino(message: _161.AnyOwnableID): _161.AnyOwnableIDAmino;
                    fromAminoMsg(object: _161.AnyOwnableIDAminoMsg): _161.AnyOwnableID;
                    fromProtoMsg(message: _161.AnyOwnableIDProtoMsg): _161.AnyOwnableID;
                    toProto(message: _161.AnyOwnableID): Uint8Array;
                    toProtoMsg(message: _161.AnyOwnableID): _161.AnyOwnableIDProtoMsg;
                };
                AnyID: {
                    encode(message: _160.AnyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AnyID;
                    fromJSON(object: any): _160.AnyID;
                    toJSON(message: _160.AnyID): unknown;
                    fromPartial(object: Partial<_160.AnyID>): _160.AnyID;
                    fromAmino(object: _160.AnyIDAmino): _160.AnyID;
                    toAmino(message: _160.AnyID): _160.AnyIDAmino;
                    fromAminoMsg(object: _160.AnyIDAminoMsg): _160.AnyID;
                    fromProtoMsg(message: _160.AnyIDProtoMsg): _160.AnyID;
                    toProto(message: _160.AnyID): Uint8Array;
                    toProtoMsg(message: _160.AnyID): _160.AnyIDProtoMsg;
                };
            };
        }
        namespace lists {
            const base: {
                PropertyList: {
                    encode(message: _174.PropertyList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.PropertyList;
                    fromJSON(object: any): _174.PropertyList;
                    toJSON(message: _174.PropertyList): unknown;
                    fromPartial(object: Partial<_174.PropertyList>): _174.PropertyList;
                    fromAmino(object: _174.PropertyListAmino): _174.PropertyList;
                    toAmino(message: _174.PropertyList): _174.PropertyListAmino;
                    fromAminoMsg(object: _174.PropertyListAminoMsg): _174.PropertyList;
                    fromProtoMsg(message: _174.PropertyListProtoMsg): _174.PropertyList;
                    toProto(message: _174.PropertyList): Uint8Array;
                    toProtoMsg(message: _174.PropertyList): _174.PropertyListProtoMsg;
                };
                IDList: {
                    encode(message: _173.IDList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.IDList;
                    fromJSON(object: any): _173.IDList;
                    toJSON(message: _173.IDList): unknown;
                    fromPartial(object: Partial<_173.IDList>): _173.IDList;
                    fromAmino(object: _173.IDListAmino): _173.IDList;
                    toAmino(message: _173.IDList): _173.IDListAmino;
                    fromAminoMsg(object: _173.IDListAminoMsg): _173.IDList;
                    fromProtoMsg(message: _173.IDListProtoMsg): _173.IDList;
                    toProto(message: _173.IDList): Uint8Array;
                    toProtoMsg(message: _173.IDList): _173.IDListProtoMsg;
                };
            };
        }
        namespace parameters {
            const base: {
                Parameter: {
                    encode(message: _176.Parameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.Parameter;
                    fromJSON(object: any): _176.Parameter;
                    toJSON(message: _176.Parameter): unknown;
                    fromPartial(object: Partial<_176.Parameter>): _176.Parameter;
                    fromAmino(object: _176.ParameterAmino): _176.Parameter;
                    toAmino(message: _176.Parameter): _176.ParameterAmino;
                    fromAminoMsg(object: _176.ParameterAminoMsg): _176.Parameter;
                    fromProtoMsg(message: _176.ParameterProtoMsg): _176.Parameter;
                    toProto(message: _176.Parameter): Uint8Array;
                    toProtoMsg(message: _176.Parameter): _176.ParameterProtoMsg;
                };
                ParameterList: {
                    encode(message: _175.ParameterList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ParameterList;
                    fromJSON(object: any): _175.ParameterList;
                    toJSON(message: _175.ParameterList): unknown;
                    fromPartial(object: Partial<_175.ParameterList>): _175.ParameterList;
                    fromAmino(object: _175.ParameterListAmino): _175.ParameterList;
                    toAmino(message: _175.ParameterList): _175.ParameterListAmino;
                    fromAminoMsg(object: _175.ParameterListAminoMsg): _175.ParameterList;
                    fromProtoMsg(message: _175.ParameterListProtoMsg): _175.ParameterList;
                    toProto(message: _175.ParameterList): Uint8Array;
                    toProtoMsg(message: _175.ParameterList): _175.ParameterListProtoMsg;
                };
            };
        }
        namespace properties {
            const base: {
                MetaProperty: {
                    encode(message: _179.MetaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.MetaProperty;
                    fromJSON(object: any): _179.MetaProperty;
                    toJSON(message: _179.MetaProperty): unknown;
                    fromPartial(object: Partial<_179.MetaProperty>): _179.MetaProperty;
                    fromAmino(object: _179.MetaPropertyAmino): _179.MetaProperty;
                    toAmino(message: _179.MetaProperty): _179.MetaPropertyAmino;
                    fromAminoMsg(object: _179.MetaPropertyAminoMsg): _179.MetaProperty;
                    fromProtoMsg(message: _179.MetaPropertyProtoMsg): _179.MetaProperty;
                    toProto(message: _179.MetaProperty): Uint8Array;
                    toProtoMsg(message: _179.MetaProperty): _179.MetaPropertyProtoMsg;
                };
                MesaProperty: {
                    encode(message: _178.MesaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.MesaProperty;
                    fromJSON(object: any): _178.MesaProperty;
                    toJSON(message: _178.MesaProperty): unknown;
                    fromPartial(object: Partial<_178.MesaProperty>): _178.MesaProperty;
                    fromAmino(object: _178.MesaPropertyAmino): _178.MesaProperty;
                    toAmino(message: _178.MesaProperty): _178.MesaPropertyAmino;
                    fromAminoMsg(object: _178.MesaPropertyAminoMsg): _178.MesaProperty;
                    fromProtoMsg(message: _178.MesaPropertyProtoMsg): _178.MesaProperty;
                    toProto(message: _178.MesaProperty): Uint8Array;
                    toProtoMsg(message: _178.MesaProperty): _178.MesaPropertyProtoMsg;
                };
                AnyProperty: {
                    encode(message: _177.AnyProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.AnyProperty;
                    fromJSON(object: any): _177.AnyProperty;
                    toJSON(message: _177.AnyProperty): unknown;
                    fromPartial(object: Partial<_177.AnyProperty>): _177.AnyProperty;
                    fromAmino(object: _177.AnyPropertyAmino): _177.AnyProperty;
                    toAmino(message: _177.AnyProperty): _177.AnyPropertyAmino;
                    fromAminoMsg(object: _177.AnyPropertyAminoMsg): _177.AnyProperty;
                    fromProtoMsg(message: _177.AnyPropertyProtoMsg): _177.AnyProperty;
                    toProto(message: _177.AnyProperty): Uint8Array;
                    toProtoMsg(message: _177.AnyProperty): _177.AnyPropertyProtoMsg;
                };
            };
        }
        namespace qualified {
            const base: {
                Mutables: {
                    encode(message: _181.Mutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.Mutables;
                    fromJSON(object: any): _181.Mutables;
                    toJSON(message: _181.Mutables): unknown;
                    fromPartial(object: Partial<_181.Mutables>): _181.Mutables;
                    fromAmino(object: _181.MutablesAmino): _181.Mutables;
                    toAmino(message: _181.Mutables): _181.MutablesAmino;
                    fromAminoMsg(object: _181.MutablesAminoMsg): _181.Mutables;
                    fromProtoMsg(message: _181.MutablesProtoMsg): _181.Mutables;
                    toProto(message: _181.Mutables): Uint8Array;
                    toProtoMsg(message: _181.Mutables): _181.MutablesProtoMsg;
                };
                Immutables: {
                    encode(message: _180.Immutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.Immutables;
                    fromJSON(object: any): _180.Immutables;
                    toJSON(message: _180.Immutables): unknown;
                    fromPartial(object: Partial<_180.Immutables>): _180.Immutables;
                    fromAmino(object: _180.ImmutablesAmino): _180.Immutables;
                    toAmino(message: _180.Immutables): _180.ImmutablesAmino;
                    fromAminoMsg(object: _180.ImmutablesAminoMsg): _180.Immutables;
                    fromProtoMsg(message: _180.ImmutablesProtoMsg): _180.Immutables;
                    toProto(message: _180.Immutables): Uint8Array;
                    toProtoMsg(message: _180.Immutables): _180.ImmutablesProtoMsg;
                };
            };
        }
        namespace types {
            const base: {
                Split: {
                    encode(message: _183.Split, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.Split;
                    fromJSON(object: any): _183.Split;
                    toJSON(message: _183.Split): unknown;
                    fromPartial(object: Partial<_183.Split>): _183.Split;
                    fromAmino(object: _183.SplitAmino): _183.Split;
                    toAmino(message: _183.Split): _183.SplitAmino;
                    fromAminoMsg(object: _183.SplitAminoMsg): _183.Split;
                    fromProtoMsg(message: _183.SplitProtoMsg): _183.Split;
                    toProto(message: _183.Split): Uint8Array;
                    toProtoMsg(message: _183.Split): _183.SplitProtoMsg;
                };
                Height: {
                    encode(message: _182.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.Height;
                    fromJSON(object: any): _182.Height;
                    toJSON(message: _182.Height): unknown;
                    fromPartial(object: Partial<_182.Height>): _182.Height;
                    fromAmino(object: _182.HeightAmino): _182.Height;
                    toAmino(message: _182.Height): _182.HeightAmino;
                    fromAminoMsg(object: _182.HeightAminoMsg): _182.Height;
                    fromProtoMsg(message: _182.HeightProtoMsg): _182.Height;
                    toProto(message: _182.Height): Uint8Array;
                    toProtoMsg(message: _182.Height): _182.HeightProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            assetmantle: {
                modules: {
                    assets: {
                        transactions: {
                            burn: _367.MsgClientImpl;
                            define: _368.MsgClientImpl;
                            deputize: _369.MsgClientImpl;
                            mint: _370.MsgClientImpl;
                            mutate: _371.MsgClientImpl;
                            renumerate: _372.MsgClientImpl;
                            revoke: _373.MsgClientImpl;
                        };
                    };
                    identities: {
                        transactions: {
                            define: _374.MsgClientImpl;
                            deputize: _375.MsgClientImpl;
                            issue: _376.MsgClientImpl;
                            mutate: _377.MsgClientImpl;
                            nub: _378.MsgClientImpl;
                            provision: _379.MsgClientImpl;
                            quash: _380.MsgClientImpl;
                            revoke: _381.MsgClientImpl;
                            unprovision: _382.MsgClientImpl;
                        };
                    };
                    metas: {
                        transactions: {
                            reveal: _383.MsgClientImpl;
                        };
                    };
                    orders: {
                        transactions: {
                            cancel: _384.MsgClientImpl;
                            define: _385.MsgClientImpl;
                            deputize: _386.MsgClientImpl;
                            immediate: _387.MsgClientImpl;
                            make: _388.MsgClientImpl;
                            modify: _389.MsgClientImpl;
                            revoke: _390.MsgClientImpl;
                            take: _391.MsgClientImpl;
                        };
                    };
                    splits: {
                        transactions: {
                            send: _392.MsgClientImpl;
                            unwrap: _393.MsgClientImpl;
                            wrap: _394.MsgClientImpl;
                        };
                    };
                };
            };
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
        }>;
        createRPCQueryClient: ({ rpcEndpoint }: {
            rpcEndpoint: string | import("@cosmjs/tendermint-rpc").HttpEndpoint;
        }) => Promise<{
            assetmantle: {
                modules: {
                    assets: {
                        queries: {
                            asset: {
                                handle(request: _4.QueryRequest): Promise<_5.QueryResponse>;
                            };
                            assets: {
                                handle(request: _7.QueryRequest): Promise<_8.QueryResponse>;
                            };
                        };
                    };
                    classifications: {
                        queries: {
                            classification: {
                                handle(request: _34.QueryRequest): Promise<_35.QueryResponse>;
                            };
                            classifications: {
                                handle(request: _37.QueryRequest): Promise<_38.QueryResponse>;
                            };
                        };
                    };
                    identities: {
                        queries: {
                            identities: {
                                handle(request: _43.QueryRequest): Promise<_44.QueryResponse>;
                            };
                            identity: {
                                handle(request: _46.QueryRequest): Promise<_47.QueryResponse>;
                            };
                        };
                    };
                    maintainers: {
                        queries: {
                            maintainer: {
                                handle(request: _79.QueryRequest): Promise<_80.QueryResponse>;
                            };
                            maintainers: {
                                handle(request: _82.QueryRequest): Promise<_83.QueryResponse>;
                            };
                        };
                    };
                    metas: {
                        queries: {
                            meta: {
                                handle(request: _88.QueryRequest): Promise<_89.QueryResponse>;
                            };
                            metas: {
                                handle(request: _91.QueryRequest): Promise<_92.QueryResponse>;
                            };
                        };
                    };
                    orders: {
                        queries: {
                            order: {
                                handle(request: _100.QueryRequest): Promise<_101.QueryResponse>;
                            };
                            orders: {
                                handle(request: _103.QueryRequest): Promise<_104.QueryResponse>;
                            };
                        };
                    };
                    splits: {
                        queries: {
                            ownable: {
                                handle(request: _133.QueryRequest): Promise<_134.QueryResponse>;
                            };
                            split: {
                                handle(request: _136.QueryRequest): Promise<_137.QueryResponse>;
                            };
                            splits: {
                                handle(request: _139.QueryRequest): Promise<_140.QueryResponse>;
                            };
                        };
                    };
                };
            };
            cosmos: {
                app: {
                    v1alpha1: {
                        config(request?: import("../cosmos/app/v1alpha1/query").QueryConfigRequest): Promise<import("../cosmos/app/v1alpha1/query").QueryConfigResponse>;
                    };
                };
                auth: {
                    v1beta1: {
                        accounts(request?: import("../cosmos/auth/v1beta1/query").QueryAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountsResponse>;
                        account(request: import("../cosmos/auth/v1beta1/query").QueryAccountRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryAccountResponse>;
                        params(request?: import("../cosmos/auth/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryParamsResponse>;
                        moduleAccounts(request?: import("../cosmos/auth/v1beta1/query").QueryModuleAccountsRequest): Promise<import("../cosmos/auth/v1beta1/query").QueryModuleAccountsResponse>;
                        bech32Prefix(request?: import("../cosmos/auth/v1beta1/query").Bech32PrefixRequest): Promise<import("../cosmos/auth/v1beta1/query").Bech32PrefixResponse>;
                        addressBytesToString(request: import("../cosmos/auth/v1beta1/query").AddressBytesToStringRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressBytesToStringResponse>;
                        addressStringToBytes(request: import("../cosmos/auth/v1beta1/query").AddressStringToBytesRequest): Promise<import("../cosmos/auth/v1beta1/query").AddressStringToBytesResponse>;
                    };
                };
                authz: {
                    v1beta1: {
                        grants(request: import("../cosmos/authz/v1beta1/query").QueryGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGrantsResponse>;
                        granterGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranterGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranterGrantsResponse>;
                        granteeGrants(request: import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsRequest): Promise<import("../cosmos/authz/v1beta1/query").QueryGranteeGrantsResponse>;
                    };
                };
                bank: {
                    v1beta1: {
                        balance(request: import("../cosmos/bank/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryBalanceResponse>;
                        allBalances(request: import("../cosmos/bank/v1beta1/query").QueryAllBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryAllBalancesResponse>;
                        spendableBalances(request: import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySpendableBalancesResponse>;
                        totalSupply(request?: import("../cosmos/bank/v1beta1/query").QueryTotalSupplyRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryTotalSupplyResponse>;
                        supplyOf(request: import("../cosmos/bank/v1beta1/query").QuerySupplyOfRequest): Promise<import("../cosmos/bank/v1beta1/query").QuerySupplyOfResponse>;
                        params(request?: import("../cosmos/bank/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryParamsResponse>;
                        denomMetadata(request: import("../cosmos/bank/v1beta1/query").QueryDenomMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomMetadataResponse>;
                        denomsMetadata(request?: import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomsMetadataResponse>;
                        denomOwners(request: import("../cosmos/bank/v1beta1/query").QueryDenomOwnersRequest): Promise<import("../cosmos/bank/v1beta1/query").QueryDenomOwnersResponse>;
                    };
                };
                base: {
                    tendermint: {
                        v1beta1: {
                            getNodeInfo(request?: import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetNodeInfoResponse>;
                            getSyncing(request?: import("../cosmos/base/tendermint/v1beta1/query").GetSyncingRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetSyncingResponse>;
                            getLatestBlock(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestBlockResponse>;
                            getBlockByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetBlockByHeightResponse>;
                            getLatestValidatorSet(request?: import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetLatestValidatorSetResponse>;
                            getValidatorSetByHeight(request: import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightRequest): Promise<import("../cosmos/base/tendermint/v1beta1/query").GetValidatorSetByHeightResponse>;
                        };
                    };
                };
                distribution: {
                    v1beta1: {
                        params(request?: import("../cosmos/distribution/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryParamsResponse>;
                        validatorOutstandingRewards(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorOutstandingRewardsResponse>;
                        validatorCommission(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorCommissionResponse>;
                        validatorSlashes(request: import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryValidatorSlashesResponse>;
                        delegationRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationRewardsResponse>;
                        delegationTotalRewards(request: import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegationTotalRewardsResponse>;
                        delegatorValidators(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorWithdrawAddress(request: import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryDelegatorWithdrawAddressResponse>;
                        communityPool(request?: import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolRequest): Promise<import("../cosmos/distribution/v1beta1/query").QueryCommunityPoolResponse>;
                    };
                };
                evidence: {
                    v1beta1: {
                        evidence(request: import("../cosmos/evidence/v1beta1/query").QueryEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryEvidenceResponse>;
                        allEvidence(request?: import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceRequest): Promise<import("../cosmos/evidence/v1beta1/query").QueryAllEvidenceResponse>;
                    };
                };
                feegrant: {
                    v1beta1: {
                        allowance(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowanceRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowanceResponse>;
                        allowances(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesResponse>;
                        allowancesByGranter(request: import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterRequest): Promise<import("../cosmos/feegrant/v1beta1/query").QueryAllowancesByGranterResponse>;
                    };
                };
                gov: {
                    v1: {
                        proposal(request: import("../cosmos/gov/v1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1/query").QueryTallyResultResponse>;
                    };
                    v1beta1: {
                        proposal(request: import("../cosmos/gov/v1beta1/query").QueryProposalRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalResponse>;
                        proposals(request: import("../cosmos/gov/v1beta1/query").QueryProposalsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryProposalsResponse>;
                        vote(request: import("../cosmos/gov/v1beta1/query").QueryVoteRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVoteResponse>;
                        votes(request: import("../cosmos/gov/v1beta1/query").QueryVotesRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryVotesResponse>;
                        params(request: import("../cosmos/gov/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryParamsResponse>;
                        deposit(request: import("../cosmos/gov/v1beta1/query").QueryDepositRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositResponse>;
                        deposits(request: import("../cosmos/gov/v1beta1/query").QueryDepositsRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryDepositsResponse>;
                        tallyResult(request: import("../cosmos/gov/v1beta1/query").QueryTallyResultRequest): Promise<import("../cosmos/gov/v1beta1/query").QueryTallyResultResponse>;
                    };
                };
                group: {
                    v1: {
                        groupInfo(request: import("../cosmos/group/v1/query").QueryGroupInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupInfoResponse>;
                        groupPolicyInfo(request: import("../cosmos/group/v1/query").QueryGroupPolicyInfoRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPolicyInfoResponse>;
                        groupMembers(request: import("../cosmos/group/v1/query").QueryGroupMembersRequest): Promise<import("../cosmos/group/v1/query").QueryGroupMembersResponse>;
                        groupsByAdmin(request: import("../cosmos/group/v1/query").QueryGroupsByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByAdminResponse>;
                        groupPoliciesByGroup(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByGroupResponse>;
                        groupPoliciesByAdmin(request: import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminRequest): Promise<import("../cosmos/group/v1/query").QueryGroupPoliciesByAdminResponse>;
                        proposal(request: import("../cosmos/group/v1/query").QueryProposalRequest): Promise<import("../cosmos/group/v1/query").QueryProposalResponse>;
                        proposalsByGroupPolicy(request: import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyRequest): Promise<import("../cosmos/group/v1/query").QueryProposalsByGroupPolicyResponse>;
                        voteByProposalVoter(request: import("../cosmos/group/v1/query").QueryVoteByProposalVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVoteByProposalVoterResponse>;
                        votesByProposal(request: import("../cosmos/group/v1/query").QueryVotesByProposalRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByProposalResponse>;
                        votesByVoter(request: import("../cosmos/group/v1/query").QueryVotesByVoterRequest): Promise<import("../cosmos/group/v1/query").QueryVotesByVoterResponse>;
                        groupsByMember(request: import("../cosmos/group/v1/query").QueryGroupsByMemberRequest): Promise<import("../cosmos/group/v1/query").QueryGroupsByMemberResponse>;
                        tallyResult(request: import("../cosmos/group/v1/query").QueryTallyResultRequest): Promise<import("../cosmos/group/v1/query").QueryTallyResultResponse>;
                    };
                };
                mint: {
                    v1beta1: {
                        params(request?: import("../cosmos/mint/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryParamsResponse>;
                        inflation(request?: import("../cosmos/mint/v1beta1/query").QueryInflationRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryInflationResponse>;
                        annualProvisions(request?: import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsRequest): Promise<import("../cosmos/mint/v1beta1/query").QueryAnnualProvisionsResponse>;
                    };
                };
                nft: {
                    v1beta1: {
                        balance(request: import("../cosmos/nft/v1beta1/query").QueryBalanceRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryBalanceResponse>;
                        owner(request: import("../cosmos/nft/v1beta1/query").QueryOwnerRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryOwnerResponse>;
                        supply(request: import("../cosmos/nft/v1beta1/query").QuerySupplyRequest): Promise<import("../cosmos/nft/v1beta1/query").QuerySupplyResponse>;
                        nFTs(request: import("../cosmos/nft/v1beta1/query").QueryNFTsRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTsResponse>;
                        nFT(request: import("../cosmos/nft/v1beta1/query").QueryNFTRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryNFTResponse>;
                        class(request: import("../cosmos/nft/v1beta1/query").QueryClassRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassResponse>;
                        classes(request?: import("../cosmos/nft/v1beta1/query").QueryClassesRequest): Promise<import("../cosmos/nft/v1beta1/query").QueryClassesResponse>;
                    };
                };
                params: {
                    v1beta1: {
                        params(request: import("../cosmos/params/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/params/v1beta1/query").QueryParamsResponse>;
                        subspaces(request?: import("../cosmos/params/v1beta1/query").QuerySubspacesRequest): Promise<import("../cosmos/params/v1beta1/query").QuerySubspacesResponse>;
                    };
                };
                slashing: {
                    v1beta1: {
                        params(request?: import("../cosmos/slashing/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/slashing/v1beta1/query").QueryParamsResponse>;
                        signingInfo(request: import("../cosmos/slashing/v1beta1/query").QuerySigningInfoRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfoResponse>;
                        signingInfos(request?: import("../cosmos/slashing/v1beta1/query").QuerySigningInfosRequest): Promise<import("../cosmos/slashing/v1beta1/query").QuerySigningInfosResponse>;
                    };
                };
                staking: {
                    v1beta1: {
                        validators(request: import("../cosmos/staking/v1beta1/query").QueryValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorsResponse>;
                        validator(request: import("../cosmos/staking/v1beta1/query").QueryValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorResponse>;
                        validatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorDelegationsResponse>;
                        validatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryValidatorUnbondingDelegationsResponse>;
                        delegation(request: import("../cosmos/staking/v1beta1/query").QueryDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegationResponse>;
                        unbondingDelegation(request: import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryUnbondingDelegationResponse>;
                        delegatorDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorDelegationsResponse>;
                        delegatorUnbondingDelegations(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorUnbondingDelegationsResponse>;
                        redelegations(request: import("../cosmos/staking/v1beta1/query").QueryRedelegationsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryRedelegationsResponse>;
                        delegatorValidators(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorsResponse>;
                        delegatorValidator(request: import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryDelegatorValidatorResponse>;
                        historicalInfo(request: import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryHistoricalInfoResponse>;
                        pool(request?: import("../cosmos/staking/v1beta1/query").QueryPoolRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryPoolResponse>;
                        params(request?: import("../cosmos/staking/v1beta1/query").QueryParamsRequest): Promise<import("../cosmos/staking/v1beta1/query").QueryParamsResponse>;
                    };
                };
                tx: {
                    v1beta1: {
                        simulate(request: import("../cosmos/tx/v1beta1/service").SimulateRequest): Promise<import("../cosmos/tx/v1beta1/service").SimulateResponse>;
                        getTx(request: import("../cosmos/tx/v1beta1/service").GetTxRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxResponse>;
                        broadcastTx(request: import("../cosmos/tx/v1beta1/service").BroadcastTxRequest): Promise<import("../cosmos/tx/v1beta1/service").BroadcastTxResponse>;
                        getTxsEvent(request: import("../cosmos/tx/v1beta1/service").GetTxsEventRequest): Promise<import("../cosmos/tx/v1beta1/service").GetTxsEventResponse>;
                        getBlockWithTxs(request: import("../cosmos/tx/v1beta1/service").GetBlockWithTxsRequest): Promise<import("../cosmos/tx/v1beta1/service").GetBlockWithTxsResponse>;
                    };
                };
                upgrade: {
                    v1beta1: {
                        currentPlan(request?: import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryCurrentPlanResponse>;
                        appliedPlan(request: import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAppliedPlanResponse>;
                        upgradedConsensusState(request: import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryUpgradedConsensusStateResponse>;
                        moduleVersions(request: import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryModuleVersionsResponse>;
                        authority(request?: import("../cosmos/upgrade/v1beta1/query").QueryAuthorityRequest): Promise<import("../cosmos/upgrade/v1beta1/query").QueryAuthorityResponse>;
                    };
                };
            };
        }>;
    };
}
