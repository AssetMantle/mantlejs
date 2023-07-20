import * as _1 from "../assets/genesis/genesis";
import * as _2 from "../assets/key/key";
import * as _3 from "../assets/mappable/mappable";
import * as _4 from "../assets/queries/asset/query_request";
import * as _5 from "../assets/queries/asset/query_response";
import * as _7 from "../assets/queries/assets/query_request";
import * as _8 from "../assets/queries/assets/query_response";
import * as _10 from "../assets/record/record";
import * as _11 from "../assets/transactions/burn/message";
import * as _13 from "../assets/transactions/burn/transaction_response";
import * as _14 from "../assets/transactions/define/message";
import * as _16 from "../assets/transactions/define/transaction_response";
import * as _17 from "../assets/transactions/deputize/message";
import * as _19 from "../assets/transactions/deputize/transaction_response";
import * as _20 from "../assets/transactions/mint/message";
import * as _22 from "../assets/transactions/mint/transaction_response";
import * as _23 from "../assets/transactions/mutate/message";
import * as _25 from "../assets/transactions/mutate/transaction_response";
import * as _26 from "../assets/transactions/renumerate/message";
import * as _28 from "../assets/transactions/renumerate/transaction_response";
import * as _29 from "../assets/transactions/revoke/message";
import * as _31 from "../assets/transactions/revoke/transaction_response";
import * as _32 from "../classifications/genesis/genesis";
import * as _33 from "../classifications/key/key";
import * as _34 from "../classifications/mappable/mappable";
import * as _35 from "../classifications/queries/classification/query_request";
import * as _36 from "../classifications/queries/classification/query_response";
import * as _38 from "../classifications/queries/classifications/query_request";
import * as _39 from "../classifications/queries/classifications/query_response";
import * as _41 from "../classifications/record/record";
import * as _42 from "../identities/genesis/genesis";
import * as _43 from "../identities/key/key";
import * as _44 from "../identities/mappable/mappable";
import * as _45 from "../identities/queries/identities/query_request";
import * as _46 from "../identities/queries/identities/query_response";
import * as _48 from "../identities/queries/identity/query_request";
import * as _49 from "../identities/queries/identity/query_response";
import * as _51 from "../identities/record/record";
import * as _52 from "../identities/transactions/define/message";
import * as _54 from "../identities/transactions/define/transaction_response";
import * as _55 from "../identities/transactions/deputize/message";
import * as _57 from "../identities/transactions/deputize/transaction_response";
import * as _58 from "../identities/transactions/issue/message";
import * as _60 from "../identities/transactions/issue/transaction_response";
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
import * as _76 from "../identities/transactions/update/message";
import * as _78 from "../identities/transactions/update/transaction_response";
import * as _79 from "../maintainers/genesis/genesis";
import * as _80 from "../maintainers/key/key";
import * as _81 from "../maintainers/mappable/mappable";
import * as _82 from "../maintainers/queries/maintainer/query_request";
import * as _83 from "../maintainers/queries/maintainer/query_response";
import * as _85 from "../maintainers/queries/maintainers/query_request";
import * as _86 from "../maintainers/queries/maintainers/query_response";
import * as _88 from "../maintainers/record/record";
import * as _89 from "../metas/genesis/genesis";
import * as _90 from "../metas/key/key";
import * as _91 from "../metas/mappable/mappable";
import * as _92 from "../metas/queries/meta/query_request";
import * as _93 from "../metas/queries/meta/query_response";
import * as _95 from "../metas/queries/metas/query_request";
import * as _96 from "../metas/queries/metas/query_response";
import * as _98 from "../metas/record/record";
import * as _99 from "../metas/transactions/reveal/message";
import * as _101 from "../metas/transactions/reveal/transaction_response";
import * as _102 from "../orders/genesis/genesis";
import * as _103 from "../orders/key/key";
import * as _104 from "../orders/mappable/mappable";
import * as _105 from "../orders/queries/order/query_request";
import * as _106 from "../orders/queries/order/query_response";
import * as _108 from "../orders/queries/orders/query_request";
import * as _109 from "../orders/queries/orders/query_response";
import * as _111 from "../orders/record/record";
import * as _112 from "../orders/transactions/cancel/message";
import * as _114 from "../orders/transactions/cancel/transaction_response";
import * as _115 from "../orders/transactions/define/message";
import * as _117 from "../orders/transactions/define/transaction_response";
import * as _118 from "../orders/transactions/deputize/message";
import * as _120 from "../orders/transactions/deputize/transaction_response";
import * as _121 from "../orders/transactions/immediate/message";
import * as _123 from "../orders/transactions/immediate/transaction_response";
import * as _124 from "../orders/transactions/make/message";
import * as _126 from "../orders/transactions/make/transaction_response";
import * as _127 from "../orders/transactions/modify/message";
import * as _129 from "../orders/transactions/modify/transaction_response";
import * as _130 from "../orders/transactions/revoke/message";
import * as _132 from "../orders/transactions/revoke/transaction_response";
import * as _133 from "../orders/transactions/take/message";
import * as _135 from "../orders/transactions/take/transaction_response";
import * as _136 from "../splits/genesis/genesis";
import * as _137 from "../splits/key/key";
import * as _138 from "../splits/mappable/mappable";
import * as _139 from "../splits/queries/ownable/query_request";
import * as _140 from "../splits/queries/ownable/query_response";
import * as _142 from "../splits/queries/split/query_request";
import * as _143 from "../splits/queries/split/query_response";
import * as _145 from "../splits/queries/splits/query_request";
import * as _146 from "../splits/queries/splits/query_response";
import * as _148 from "../splits/record/record";
import * as _149 from "../splits/transactions/send/message";
import * as _151 from "../splits/transactions/send/transaction_response";
import * as _152 from "../splits/transactions/unwrap/message";
import * as _154 from "../splits/transactions/unwrap/transaction_response";
import * as _155 from "../splits/transactions/wrap/message";
import * as _157 from "../splits/transactions/wrap/transaction_response";
import * as _158 from "../data/base/acc_address_data";
import * as _159 from "../data/base/any_data";
import * as _160 from "../data/base/any_listable_data";
import * as _161 from "../data/base/boolean_data";
import * as _162 from "../data/base/dec_data";
import * as _163 from "../data/base/height_data";
import * as _164 from "../data/base/id_data";
import * as _165 from "../data/base/list_data";
import * as _166 from "../data/base/number_data";
import * as _167 from "../data/base/string_data";
import * as _168 from "../documents/base/document";
import * as _169 from "../ids/base/any_id";
import * as _170 from "../ids/base/any_ownable_id";
import * as _171 from "../ids/base/asset_id";
import * as _172 from "../ids/base/classification_id";
import * as _173 from "../ids/base/coin_id";
import * as _174 from "../ids/base/data_id";
import * as _175 from "../ids/base/hash_id";
import * as _176 from "../ids/base/identity_id";
import * as _177 from "../ids/base/maintainer_id";
import * as _178 from "../ids/base/order_id";
import * as _179 from "../ids/base/property_id";
import * as _180 from "../ids/base/split_id";
import * as _181 from "../ids/base/string_id";
import * as _182 from "../lists/base/id_list";
import * as _183 from "../lists/base/property_list";
import * as _184 from "../lists/base/parameter_list";
import * as _185 from "../parameters/base/parameter";
import * as _186 from "../properties/base/any_property";
import * as _187 from "../properties/base/mesa_property";
import * as _188 from "../properties/base/meta_property";
import * as _189 from "../qualified/base/immutables";
import * as _190 from "../qualified/base/mutables";
import * as _191 from "../types/base/height";
import * as _192 from "../types/base/split";
import * as _361 from "../assets/queries/asset/service.rpc.Service";
import * as _362 from "../assets/queries/assets/service.rpc.Service";
import * as _363 from "../classifications/queries/classification/service.rpc.Service";
import * as _364 from "../classifications/queries/classifications/service.rpc.Service";
import * as _365 from "../identities/queries/identities/service.rpc.Service";
import * as _366 from "../identities/queries/identity/service.rpc.Service";
import * as _367 from "../maintainers/queries/maintainer/service.rpc.Service";
import * as _368 from "../maintainers/queries/maintainers/service.rpc.Service";
import * as _369 from "../metas/queries/meta/service.rpc.Service";
import * as _370 from "../metas/queries/metas/service.rpc.Service";
import * as _371 from "../orders/queries/order/service.rpc.Service";
import * as _372 from "../orders/queries/orders/service.rpc.Service";
import * as _373 from "../splits/queries/ownable/service.rpc.Service";
import * as _374 from "../splits/queries/split/service.rpc.Service";
import * as _375 from "../splits/queries/splits/service.rpc.Service";
import * as _376 from "../assets/transactions/burn/service.rpc.msg";
import * as _377 from "../assets/transactions/define/service.rpc.msg";
import * as _378 from "../assets/transactions/deputize/service.rpc.msg";
import * as _379 from "../assets/transactions/mint/service.rpc.msg";
import * as _380 from "../assets/transactions/mutate/service.rpc.msg";
import * as _381 from "../assets/transactions/renumerate/service.rpc.msg";
import * as _382 from "../assets/transactions/revoke/service.rpc.msg";
import * as _383 from "../identities/transactions/define/service.rpc.msg";
import * as _384 from "../identities/transactions/deputize/service.rpc.msg";
import * as _385 from "../identities/transactions/issue/service.rpc.msg";
import * as _386 from "../identities/transactions/nub/service.rpc.msg";
import * as _387 from "../identities/transactions/provision/service.rpc.msg";
import * as _388 from "../identities/transactions/quash/service.rpc.msg";
import * as _389 from "../identities/transactions/revoke/service.rpc.msg";
import * as _390 from "../identities/transactions/unprovision/service.rpc.msg";
import * as _391 from "../identities/transactions/update/service.rpc.msg";
import * as _392 from "../metas/transactions/reveal/service.rpc.msg";
import * as _393 from "../orders/transactions/cancel/service.rpc.msg";
import * as _394 from "../orders/transactions/define/service.rpc.msg";
import * as _395 from "../orders/transactions/deputize/service.rpc.msg";
import * as _396 from "../orders/transactions/immediate/service.rpc.msg";
import * as _397 from "../orders/transactions/make/service.rpc.msg";
import * as _398 from "../orders/transactions/modify/service.rpc.msg";
import * as _399 from "../orders/transactions/revoke/service.rpc.msg";
import * as _400 from "../orders/transactions/take/service.rpc.msg";
import * as _401 from "../splits/transactions/send/service.rpc.msg";
import * as _402 from "../splits/transactions/unwrap/service.rpc.msg";
import * as _403 from "../splits/transactions/wrap/service.rpc.msg";
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
                    ServiceClientImpl: typeof _361.ServiceClientImpl;
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
                    ServiceClientImpl: typeof _362.ServiceClientImpl;
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
            const record: {
                Record: {
                    encode(message: _10.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _10.Record;
                    fromJSON(object: any): _10.Record;
                    toJSON(message: _10.Record): unknown;
                    fromPartial(object: Partial<_10.Record>): _10.Record;
                    fromAmino(object: _10.RecordAmino): _10.Record;
                    toAmino(message: _10.Record): _10.RecordAmino;
                    fromAminoMsg(object: _10.RecordAminoMsg): _10.Record;
                    fromProtoMsg(message: _10.RecordProtoMsg): _10.Record;
                    toProto(message: _10.Record): Uint8Array;
                    toProtoMsg(message: _10.Record): _10.RecordProtoMsg;
                };
            };
            namespace transactions {
                const burn: {
                    MsgClientImpl: typeof _376.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _11.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _11.Message): {
                                typeUrl: string;
                                value: _11.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _11.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _11.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _11.Message): {
                                typeUrl: string;
                                value: _11.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.burn.Message": {
                            aminoType: string;
                            toAmino: (message: _11.Message) => _11.MessageAmino;
                            fromAmino: (object: _11.MessageAmino) => _11.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _13.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _13.TransactionResponse;
                        fromJSON(_: any): _13.TransactionResponse;
                        toJSON(_: _13.TransactionResponse): unknown;
                        fromPartial(_: Partial<_13.TransactionResponse>): _13.TransactionResponse;
                        fromAmino(_: _13.TransactionResponseAmino): _13.TransactionResponse;
                        toAmino(_: _13.TransactionResponse): _13.TransactionResponseAmino;
                        fromAminoMsg(object: _13.TransactionResponseAminoMsg): _13.TransactionResponse;
                        fromProtoMsg(message: _13.TransactionResponseProtoMsg): _13.TransactionResponse;
                        toProto(message: _13.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _13.TransactionResponse): _13.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _11.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _11.Message;
                        fromJSON(object: any): _11.Message;
                        toJSON(message: _11.Message): unknown;
                        fromPartial(object: Partial<_11.Message>): _11.Message;
                        fromAmino(object: _11.MessageAmino): _11.Message;
                        toAmino(message: _11.Message): _11.MessageAmino;
                        fromAminoMsg(object: _11.MessageAminoMsg): _11.Message;
                        fromProtoMsg(message: _11.MessageProtoMsg): _11.Message;
                        toProto(message: _11.Message): Uint8Array;
                        toProtoMsg(message: _11.Message): _11.MessageProtoMsg;
                    };
                };
                const define: {
                    MsgClientImpl: typeof _377.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _14.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _14.Message): {
                                typeUrl: string;
                                value: _14.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _14.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _14.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _14.Message): {
                                typeUrl: string;
                                value: _14.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _14.Message) => _14.MessageAmino;
                            fromAmino: (object: _14.MessageAmino) => _14.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _16.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _16.TransactionResponse;
                        fromJSON(object: any): _16.TransactionResponse;
                        toJSON(message: _16.TransactionResponse): unknown;
                        fromPartial(object: Partial<_16.TransactionResponse>): _16.TransactionResponse;
                        fromAmino(object: _16.TransactionResponseAmino): _16.TransactionResponse;
                        toAmino(message: _16.TransactionResponse): _16.TransactionResponseAmino;
                        fromAminoMsg(object: _16.TransactionResponseAminoMsg): _16.TransactionResponse;
                        fromProtoMsg(message: _16.TransactionResponseProtoMsg): _16.TransactionResponse;
                        toProto(message: _16.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _16.TransactionResponse): _16.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _14.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _14.Message;
                        fromJSON(object: any): _14.Message;
                        toJSON(message: _14.Message): unknown;
                        fromPartial(object: Partial<_14.Message>): _14.Message;
                        fromAmino(object: _14.MessageAmino): _14.Message;
                        toAmino(message: _14.Message): _14.MessageAmino;
                        fromAminoMsg(object: _14.MessageAminoMsg): _14.Message;
                        fromProtoMsg(message: _14.MessageProtoMsg): _14.Message;
                        toProto(message: _14.Message): Uint8Array;
                        toProtoMsg(message: _14.Message): _14.MessageProtoMsg;
                    };
                };
                const deputize: {
                    MsgClientImpl: typeof _378.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _17.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _17.Message): {
                                typeUrl: string;
                                value: _17.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _17.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _17.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _17.Message): {
                                typeUrl: string;
                                value: _17.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _17.Message) => _17.MessageAmino;
                            fromAmino: (object: _17.MessageAmino) => _17.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _19.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _19.TransactionResponse;
                        fromJSON(_: any): _19.TransactionResponse;
                        toJSON(_: _19.TransactionResponse): unknown;
                        fromPartial(_: Partial<_19.TransactionResponse>): _19.TransactionResponse;
                        fromAmino(_: _19.TransactionResponseAmino): _19.TransactionResponse;
                        toAmino(_: _19.TransactionResponse): _19.TransactionResponseAmino;
                        fromAminoMsg(object: _19.TransactionResponseAminoMsg): _19.TransactionResponse;
                        fromProtoMsg(message: _19.TransactionResponseProtoMsg): _19.TransactionResponse;
                        toProto(message: _19.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _19.TransactionResponse): _19.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _17.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _17.Message;
                        fromJSON(object: any): _17.Message;
                        toJSON(message: _17.Message): unknown;
                        fromPartial(object: Partial<_17.Message>): _17.Message;
                        fromAmino(object: _17.MessageAmino): _17.Message;
                        toAmino(message: _17.Message): _17.MessageAmino;
                        fromAminoMsg(object: _17.MessageAminoMsg): _17.Message;
                        fromProtoMsg(message: _17.MessageProtoMsg): _17.Message;
                        toProto(message: _17.Message): Uint8Array;
                        toProtoMsg(message: _17.Message): _17.MessageProtoMsg;
                    };
                };
                const mint: {
                    MsgClientImpl: typeof _379.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _20.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _20.Message): {
                                typeUrl: string;
                                value: _20.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _20.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _20.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _20.Message): {
                                typeUrl: string;
                                value: _20.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.mint.Message": {
                            aminoType: string;
                            toAmino: (message: _20.Message) => _20.MessageAmino;
                            fromAmino: (object: _20.MessageAmino) => _20.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _22.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _22.TransactionResponse;
                        fromJSON(object: any): _22.TransactionResponse;
                        toJSON(message: _22.TransactionResponse): unknown;
                        fromPartial(object: Partial<_22.TransactionResponse>): _22.TransactionResponse;
                        fromAmino(object: _22.TransactionResponseAmino): _22.TransactionResponse;
                        toAmino(message: _22.TransactionResponse): _22.TransactionResponseAmino;
                        fromAminoMsg(object: _22.TransactionResponseAminoMsg): _22.TransactionResponse;
                        fromProtoMsg(message: _22.TransactionResponseProtoMsg): _22.TransactionResponse;
                        toProto(message: _22.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _22.TransactionResponse): _22.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _20.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _20.Message;
                        fromJSON(object: any): _20.Message;
                        toJSON(message: _20.Message): unknown;
                        fromPartial(object: Partial<_20.Message>): _20.Message;
                        fromAmino(object: _20.MessageAmino): _20.Message;
                        toAmino(message: _20.Message): _20.MessageAmino;
                        fromAminoMsg(object: _20.MessageAminoMsg): _20.Message;
                        fromProtoMsg(message: _20.MessageProtoMsg): _20.Message;
                        toProto(message: _20.Message): Uint8Array;
                        toProtoMsg(message: _20.Message): _20.MessageProtoMsg;
                    };
                };
                const mutate: {
                    MsgClientImpl: typeof _380.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _23.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _23.Message): {
                                typeUrl: string;
                                value: _23.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _23.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _23.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _23.Message): {
                                typeUrl: string;
                                value: _23.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.mutate.Message": {
                            aminoType: string;
                            toAmino: (message: _23.Message) => _23.MessageAmino;
                            fromAmino: (object: _23.MessageAmino) => _23.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _25.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _25.TransactionResponse;
                        fromJSON(_: any): _25.TransactionResponse;
                        toJSON(_: _25.TransactionResponse): unknown;
                        fromPartial(_: Partial<_25.TransactionResponse>): _25.TransactionResponse;
                        fromAmino(_: _25.TransactionResponseAmino): _25.TransactionResponse;
                        toAmino(_: _25.TransactionResponse): _25.TransactionResponseAmino;
                        fromAminoMsg(object: _25.TransactionResponseAminoMsg): _25.TransactionResponse;
                        fromProtoMsg(message: _25.TransactionResponseProtoMsg): _25.TransactionResponse;
                        toProto(message: _25.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _25.TransactionResponse): _25.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _23.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _23.Message;
                        fromJSON(object: any): _23.Message;
                        toJSON(message: _23.Message): unknown;
                        fromPartial(object: Partial<_23.Message>): _23.Message;
                        fromAmino(object: _23.MessageAmino): _23.Message;
                        toAmino(message: _23.Message): _23.MessageAmino;
                        fromAminoMsg(object: _23.MessageAminoMsg): _23.Message;
                        fromProtoMsg(message: _23.MessageProtoMsg): _23.Message;
                        toProto(message: _23.Message): Uint8Array;
                        toProtoMsg(message: _23.Message): _23.MessageProtoMsg;
                    };
                };
                const renumerate: {
                    MsgClientImpl: typeof _381.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _26.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _26.Message): {
                                typeUrl: string;
                                value: _26.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _26.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _26.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _26.Message): {
                                typeUrl: string;
                                value: _26.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.renumerate.Message": {
                            aminoType: string;
                            toAmino: (message: _26.Message) => _26.MessageAmino;
                            fromAmino: (object: _26.MessageAmino) => _26.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _28.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _28.TransactionResponse;
                        fromJSON(_: any): _28.TransactionResponse;
                        toJSON(_: _28.TransactionResponse): unknown;
                        fromPartial(_: Partial<_28.TransactionResponse>): _28.TransactionResponse;
                        fromAmino(_: _28.TransactionResponseAmino): _28.TransactionResponse;
                        toAmino(_: _28.TransactionResponse): _28.TransactionResponseAmino;
                        fromAminoMsg(object: _28.TransactionResponseAminoMsg): _28.TransactionResponse;
                        fromProtoMsg(message: _28.TransactionResponseProtoMsg): _28.TransactionResponse;
                        toProto(message: _28.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _28.TransactionResponse): _28.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _26.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _26.Message;
                        fromJSON(object: any): _26.Message;
                        toJSON(message: _26.Message): unknown;
                        fromPartial(object: Partial<_26.Message>): _26.Message;
                        fromAmino(object: _26.MessageAmino): _26.Message;
                        toAmino(message: _26.Message): _26.MessageAmino;
                        fromAminoMsg(object: _26.MessageAminoMsg): _26.Message;
                        fromProtoMsg(message: _26.MessageProtoMsg): _26.Message;
                        toProto(message: _26.Message): Uint8Array;
                        toProtoMsg(message: _26.Message): _26.MessageProtoMsg;
                    };
                };
                const revoke: {
                    MsgClientImpl: typeof _382.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _29.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _29.Message): {
                                typeUrl: string;
                                value: _29.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _29.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _29.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _29.Message): {
                                typeUrl: string;
                                value: _29.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _29.Message) => _29.MessageAmino;
                            fromAmino: (object: _29.MessageAmino) => _29.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _31.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _31.TransactionResponse;
                        fromJSON(_: any): _31.TransactionResponse;
                        toJSON(_: _31.TransactionResponse): unknown;
                        fromPartial(_: Partial<_31.TransactionResponse>): _31.TransactionResponse;
                        fromAmino(_: _31.TransactionResponseAmino): _31.TransactionResponse;
                        toAmino(_: _31.TransactionResponse): _31.TransactionResponseAmino;
                        fromAminoMsg(object: _31.TransactionResponseAminoMsg): _31.TransactionResponse;
                        fromProtoMsg(message: _31.TransactionResponseProtoMsg): _31.TransactionResponse;
                        toProto(message: _31.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _31.TransactionResponse): _31.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _29.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _29.Message;
                        fromJSON(object: any): _29.Message;
                        toJSON(message: _29.Message): unknown;
                        fromPartial(object: Partial<_29.Message>): _29.Message;
                        fromAmino(object: _29.MessageAmino): _29.Message;
                        toAmino(message: _29.Message): _29.MessageAmino;
                        fromAminoMsg(object: _29.MessageAminoMsg): _29.Message;
                        fromProtoMsg(message: _29.MessageProtoMsg): _29.Message;
                        toProto(message: _29.Message): Uint8Array;
                        toProtoMsg(message: _29.Message): _29.MessageProtoMsg;
                    };
                };
            }
        }
        namespace classifications {
            const genesis: {
                Genesis: {
                    encode(message: _32.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Genesis;
                    fromJSON(object: any): _32.Genesis;
                    toJSON(message: _32.Genesis): unknown;
                    fromPartial(object: Partial<_32.Genesis>): _32.Genesis;
                    fromAmino(object: _32.GenesisAmino): _32.Genesis;
                    toAmino(message: _32.Genesis): _32.GenesisAmino;
                    fromAminoMsg(object: _32.GenesisAminoMsg): _32.Genesis;
                    fromProtoMsg(message: _32.GenesisProtoMsg): _32.Genesis;
                    toProto(message: _32.Genesis): Uint8Array;
                    toProtoMsg(message: _32.Genesis): _32.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _33.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _33.Key;
                    fromJSON(object: any): _33.Key;
                    toJSON(message: _33.Key): unknown;
                    fromPartial(object: Partial<_33.Key>): _33.Key;
                    fromAmino(object: _33.KeyAmino): _33.Key;
                    toAmino(message: _33.Key): _33.KeyAmino;
                    fromAminoMsg(object: _33.KeyAminoMsg): _33.Key;
                    fromProtoMsg(message: _33.KeyProtoMsg): _33.Key;
                    toProto(message: _33.Key): Uint8Array;
                    toProtoMsg(message: _33.Key): _33.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _34.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.Mappable;
                    fromJSON(object: any): _34.Mappable;
                    toJSON(message: _34.Mappable): unknown;
                    fromPartial(object: Partial<_34.Mappable>): _34.Mappable;
                    fromAmino(object: _34.MappableAmino): _34.Mappable;
                    toAmino(message: _34.Mappable): _34.MappableAmino;
                    fromAminoMsg(object: _34.MappableAminoMsg): _34.Mappable;
                    fromProtoMsg(message: _34.MappableProtoMsg): _34.Mappable;
                    toProto(message: _34.Mappable): Uint8Array;
                    toProtoMsg(message: _34.Mappable): _34.MappableProtoMsg;
                };
            };
            namespace queries {
                const classification: {
                    ServiceClientImpl: typeof _363.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _35.QueryRequest): Promise<_36.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _36.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _36.QueryResponse;
                        fromJSON(object: any): _36.QueryResponse;
                        toJSON(message: _36.QueryResponse): unknown;
                        fromPartial(object: Partial<_36.QueryResponse>): _36.QueryResponse;
                        fromAmino(object: _36.QueryResponseAmino): _36.QueryResponse;
                        toAmino(message: _36.QueryResponse): _36.QueryResponseAmino;
                        fromAminoMsg(object: _36.QueryResponseAminoMsg): _36.QueryResponse;
                        fromProtoMsg(message: _36.QueryResponseProtoMsg): _36.QueryResponse;
                        toProto(message: _36.QueryResponse): Uint8Array;
                        toProtoMsg(message: _36.QueryResponse): _36.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _35.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.QueryRequest;
                        fromJSON(object: any): _35.QueryRequest;
                        toJSON(message: _35.QueryRequest): unknown;
                        fromPartial(object: Partial<_35.QueryRequest>): _35.QueryRequest;
                        fromAmino(object: _35.QueryRequestAmino): _35.QueryRequest;
                        toAmino(message: _35.QueryRequest): _35.QueryRequestAmino;
                        fromAminoMsg(object: _35.QueryRequestAminoMsg): _35.QueryRequest;
                        fromProtoMsg(message: _35.QueryRequestProtoMsg): _35.QueryRequest;
                        toProto(message: _35.QueryRequest): Uint8Array;
                        toProtoMsg(message: _35.QueryRequest): _35.QueryRequestProtoMsg;
                    };
                };
                const classifications: {
                    ServiceClientImpl: typeof _364.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _38.QueryRequest): Promise<_39.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _39.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _39.QueryResponse;
                        fromJSON(object: any): _39.QueryResponse;
                        toJSON(message: _39.QueryResponse): unknown;
                        fromPartial(object: Partial<_39.QueryResponse>): _39.QueryResponse;
                        fromAmino(object: _39.QueryResponseAmino): _39.QueryResponse;
                        toAmino(message: _39.QueryResponse): _39.QueryResponseAmino;
                        fromAminoMsg(object: _39.QueryResponseAminoMsg): _39.QueryResponse;
                        fromProtoMsg(message: _39.QueryResponseProtoMsg): _39.QueryResponse;
                        toProto(message: _39.QueryResponse): Uint8Array;
                        toProtoMsg(message: _39.QueryResponse): _39.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _38.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.QueryRequest;
                        fromJSON(object: any): _38.QueryRequest;
                        toJSON(message: _38.QueryRequest): unknown;
                        fromPartial(object: Partial<_38.QueryRequest>): _38.QueryRequest;
                        fromAmino(object: _38.QueryRequestAmino): _38.QueryRequest;
                        toAmino(message: _38.QueryRequest): _38.QueryRequestAmino;
                        fromAminoMsg(object: _38.QueryRequestAminoMsg): _38.QueryRequest;
                        fromProtoMsg(message: _38.QueryRequestProtoMsg): _38.QueryRequest;
                        toProto(message: _38.QueryRequest): Uint8Array;
                        toProtoMsg(message: _38.QueryRequest): _38.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _41.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Record;
                    fromJSON(object: any): _41.Record;
                    toJSON(message: _41.Record): unknown;
                    fromPartial(object: Partial<_41.Record>): _41.Record;
                    fromAmino(object: _41.RecordAmino): _41.Record;
                    toAmino(message: _41.Record): _41.RecordAmino;
                    fromAminoMsg(object: _41.RecordAminoMsg): _41.Record;
                    fromProtoMsg(message: _41.RecordProtoMsg): _41.Record;
                    toProto(message: _41.Record): Uint8Array;
                    toProtoMsg(message: _41.Record): _41.RecordProtoMsg;
                };
            };
        }
        namespace identities {
            const genesis: {
                Genesis: {
                    encode(message: _42.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Genesis;
                    fromJSON(object: any): _42.Genesis;
                    toJSON(message: _42.Genesis): unknown;
                    fromPartial(object: Partial<_42.Genesis>): _42.Genesis;
                    fromAmino(object: _42.GenesisAmino): _42.Genesis;
                    toAmino(message: _42.Genesis): _42.GenesisAmino;
                    fromAminoMsg(object: _42.GenesisAminoMsg): _42.Genesis;
                    fromProtoMsg(message: _42.GenesisProtoMsg): _42.Genesis;
                    toProto(message: _42.Genesis): Uint8Array;
                    toProtoMsg(message: _42.Genesis): _42.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _43.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Key;
                    fromJSON(object: any): _43.Key;
                    toJSON(message: _43.Key): unknown;
                    fromPartial(object: Partial<_43.Key>): _43.Key;
                    fromAmino(object: _43.KeyAmino): _43.Key;
                    toAmino(message: _43.Key): _43.KeyAmino;
                    fromAminoMsg(object: _43.KeyAminoMsg): _43.Key;
                    fromProtoMsg(message: _43.KeyProtoMsg): _43.Key;
                    toProto(message: _43.Key): Uint8Array;
                    toProtoMsg(message: _43.Key): _43.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _44.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.Mappable;
                    fromJSON(object: any): _44.Mappable;
                    toJSON(message: _44.Mappable): unknown;
                    fromPartial(object: Partial<_44.Mappable>): _44.Mappable;
                    fromAmino(object: _44.MappableAmino): _44.Mappable;
                    toAmino(message: _44.Mappable): _44.MappableAmino;
                    fromAminoMsg(object: _44.MappableAminoMsg): _44.Mappable;
                    fromProtoMsg(message: _44.MappableProtoMsg): _44.Mappable;
                    toProto(message: _44.Mappable): Uint8Array;
                    toProtoMsg(message: _44.Mappable): _44.MappableProtoMsg;
                };
            };
            namespace queries {
                const identities: {
                    ServiceClientImpl: typeof _365.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _45.QueryRequest): Promise<_46.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _46.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _46.QueryResponse;
                        fromJSON(object: any): _46.QueryResponse;
                        toJSON(message: _46.QueryResponse): unknown;
                        fromPartial(object: Partial<_46.QueryResponse>): _46.QueryResponse;
                        fromAmino(object: _46.QueryResponseAmino): _46.QueryResponse;
                        toAmino(message: _46.QueryResponse): _46.QueryResponseAmino;
                        fromAminoMsg(object: _46.QueryResponseAminoMsg): _46.QueryResponse;
                        fromProtoMsg(message: _46.QueryResponseProtoMsg): _46.QueryResponse;
                        toProto(message: _46.QueryResponse): Uint8Array;
                        toProtoMsg(message: _46.QueryResponse): _46.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _45.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryRequest;
                        fromJSON(object: any): _45.QueryRequest;
                        toJSON(message: _45.QueryRequest): unknown;
                        fromPartial(object: Partial<_45.QueryRequest>): _45.QueryRequest;
                        fromAmino(object: _45.QueryRequestAmino): _45.QueryRequest;
                        toAmino(message: _45.QueryRequest): _45.QueryRequestAmino;
                        fromAminoMsg(object: _45.QueryRequestAminoMsg): _45.QueryRequest;
                        fromProtoMsg(message: _45.QueryRequestProtoMsg): _45.QueryRequest;
                        toProto(message: _45.QueryRequest): Uint8Array;
                        toProtoMsg(message: _45.QueryRequest): _45.QueryRequestProtoMsg;
                    };
                };
                const identity: {
                    ServiceClientImpl: typeof _366.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _48.QueryRequest): Promise<_49.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _49.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _49.QueryResponse;
                        fromJSON(object: any): _49.QueryResponse;
                        toJSON(message: _49.QueryResponse): unknown;
                        fromPartial(object: Partial<_49.QueryResponse>): _49.QueryResponse;
                        fromAmino(object: _49.QueryResponseAmino): _49.QueryResponse;
                        toAmino(message: _49.QueryResponse): _49.QueryResponseAmino;
                        fromAminoMsg(object: _49.QueryResponseAminoMsg): _49.QueryResponse;
                        fromProtoMsg(message: _49.QueryResponseProtoMsg): _49.QueryResponse;
                        toProto(message: _49.QueryResponse): Uint8Array;
                        toProtoMsg(message: _49.QueryResponse): _49.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _48.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryRequest;
                        fromJSON(object: any): _48.QueryRequest;
                        toJSON(message: _48.QueryRequest): unknown;
                        fromPartial(object: Partial<_48.QueryRequest>): _48.QueryRequest;
                        fromAmino(object: _48.QueryRequestAmino): _48.QueryRequest;
                        toAmino(message: _48.QueryRequest): _48.QueryRequestAmino;
                        fromAminoMsg(object: _48.QueryRequestAminoMsg): _48.QueryRequest;
                        fromProtoMsg(message: _48.QueryRequestProtoMsg): _48.QueryRequest;
                        toProto(message: _48.QueryRequest): Uint8Array;
                        toProtoMsg(message: _48.QueryRequest): _48.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _51.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Record;
                    fromJSON(object: any): _51.Record;
                    toJSON(message: _51.Record): unknown;
                    fromPartial(object: Partial<_51.Record>): _51.Record;
                    fromAmino(object: _51.RecordAmino): _51.Record;
                    toAmino(message: _51.Record): _51.RecordAmino;
                    fromAminoMsg(object: _51.RecordAminoMsg): _51.Record;
                    fromProtoMsg(message: _51.RecordProtoMsg): _51.Record;
                    toProto(message: _51.Record): Uint8Array;
                    toProtoMsg(message: _51.Record): _51.RecordProtoMsg;
                };
            };
            namespace transactions {
                const define: {
                    MsgClientImpl: typeof _383.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _52.Message) => _52.MessageAmino;
                            fromAmino: (object: _52.MessageAmino) => _52.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _54.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.TransactionResponse;
                        fromJSON(object: any): _54.TransactionResponse;
                        toJSON(message: _54.TransactionResponse): unknown;
                        fromPartial(object: Partial<_54.TransactionResponse>): _54.TransactionResponse;
                        fromAmino(object: _54.TransactionResponseAmino): _54.TransactionResponse;
                        toAmino(message: _54.TransactionResponse): _54.TransactionResponseAmino;
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
                const deputize: {
                    MsgClientImpl: typeof _384.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _55.Message) => _55.MessageAmino;
                            fromAmino: (object: _55.MessageAmino) => _55.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _57.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.TransactionResponse;
                        fromJSON(_: any): _57.TransactionResponse;
                        toJSON(_: _57.TransactionResponse): unknown;
                        fromPartial(_: Partial<_57.TransactionResponse>): _57.TransactionResponse;
                        fromAmino(_: _57.TransactionResponseAmino): _57.TransactionResponse;
                        toAmino(_: _57.TransactionResponse): _57.TransactionResponseAmino;
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
                const issue: {
                    MsgClientImpl: typeof _385.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.issue.Message": {
                            aminoType: string;
                            toAmino: (message: _58.Message) => _58.MessageAmino;
                            fromAmino: (object: _58.MessageAmino) => _58.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _60.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.TransactionResponse;
                        fromJSON(object: any): _60.TransactionResponse;
                        toJSON(message: _60.TransactionResponse): unknown;
                        fromPartial(object: Partial<_60.TransactionResponse>): _60.TransactionResponse;
                        fromAmino(object: _60.TransactionResponseAmino): _60.TransactionResponse;
                        toAmino(message: _60.TransactionResponse): _60.TransactionResponseAmino;
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
                    MsgClientImpl: typeof _386.MsgClientImpl;
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
                    MsgClientImpl: typeof _387.MsgClientImpl;
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
                    MsgClientImpl: typeof _388.MsgClientImpl;
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
                    MsgClientImpl: typeof _389.MsgClientImpl;
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
                    MsgClientImpl: typeof _390.MsgClientImpl;
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
                const mutate: {
                    MsgClientImpl: typeof _391.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _76.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _76.Message): {
                                typeUrl: string;
                                value: _76.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _76.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _76.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _76.Message): {
                                typeUrl: string;
                                value: _76.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.mutate.Message": {
                            aminoType: string;
                            toAmino: (message: _76.Message) => _76.MessageAmino;
                            fromAmino: (object: _76.MessageAmino) => _76.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _78.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _78.TransactionResponse;
                        fromJSON(_: any): _78.TransactionResponse;
                        toJSON(_: _78.TransactionResponse): unknown;
                        fromPartial(_: Partial<_78.TransactionResponse>): _78.TransactionResponse;
                        fromAmino(_: _78.TransactionResponseAmino): _78.TransactionResponse;
                        toAmino(_: _78.TransactionResponse): _78.TransactionResponseAmino;
                        fromAminoMsg(object: _78.TransactionResponseAminoMsg): _78.TransactionResponse;
                        fromProtoMsg(message: _78.TransactionResponseProtoMsg): _78.TransactionResponse;
                        toProto(message: _78.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _78.TransactionResponse): _78.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _76.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _76.Message;
                        fromJSON(object: any): _76.Message;
                        toJSON(message: _76.Message): unknown;
                        fromPartial(object: Partial<_76.Message>): _76.Message;
                        fromAmino(object: _76.MessageAmino): _76.Message;
                        toAmino(message: _76.Message): _76.MessageAmino;
                        fromAminoMsg(object: _76.MessageAminoMsg): _76.Message;
                        fromProtoMsg(message: _76.MessageProtoMsg): _76.Message;
                        toProto(message: _76.Message): Uint8Array;
                        toProtoMsg(message: _76.Message): _76.MessageProtoMsg;
                    };
                };
            }
        }
        namespace maintainers {
            const genesis: {
                Genesis: {
                    encode(message: _79.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Genesis;
                    fromJSON(object: any): _79.Genesis;
                    toJSON(message: _79.Genesis): unknown;
                    fromPartial(object: Partial<_79.Genesis>): _79.Genesis;
                    fromAmino(object: _79.GenesisAmino): _79.Genesis;
                    toAmino(message: _79.Genesis): _79.GenesisAmino;
                    fromAminoMsg(object: _79.GenesisAminoMsg): _79.Genesis;
                    fromProtoMsg(message: _79.GenesisProtoMsg): _79.Genesis;
                    toProto(message: _79.Genesis): Uint8Array;
                    toProtoMsg(message: _79.Genesis): _79.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _80.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _80.Key;
                    fromJSON(object: any): _80.Key;
                    toJSON(message: _80.Key): unknown;
                    fromPartial(object: Partial<_80.Key>): _80.Key;
                    fromAmino(object: _80.KeyAmino): _80.Key;
                    toAmino(message: _80.Key): _80.KeyAmino;
                    fromAminoMsg(object: _80.KeyAminoMsg): _80.Key;
                    fromProtoMsg(message: _80.KeyProtoMsg): _80.Key;
                    toProto(message: _80.Key): Uint8Array;
                    toProtoMsg(message: _80.Key): _80.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _81.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.Mappable;
                    fromJSON(object: any): _81.Mappable;
                    toJSON(message: _81.Mappable): unknown;
                    fromPartial(object: Partial<_81.Mappable>): _81.Mappable;
                    fromAmino(object: _81.MappableAmino): _81.Mappable;
                    toAmino(message: _81.Mappable): _81.MappableAmino;
                    fromAminoMsg(object: _81.MappableAminoMsg): _81.Mappable;
                    fromProtoMsg(message: _81.MappableProtoMsg): _81.Mappable;
                    toProto(message: _81.Mappable): Uint8Array;
                    toProtoMsg(message: _81.Mappable): _81.MappableProtoMsg;
                };
            };
            namespace queries {
                const maintainer: {
                    ServiceClientImpl: typeof _367.ServiceClientImpl;
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
                const maintainers: {
                    ServiceClientImpl: typeof _368.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _85.QueryRequest): Promise<_86.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _86.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _86.QueryResponse;
                        fromJSON(object: any): _86.QueryResponse;
                        toJSON(message: _86.QueryResponse): unknown;
                        fromPartial(object: Partial<_86.QueryResponse>): _86.QueryResponse;
                        fromAmino(object: _86.QueryResponseAmino): _86.QueryResponse;
                        toAmino(message: _86.QueryResponse): _86.QueryResponseAmino;
                        fromAminoMsg(object: _86.QueryResponseAminoMsg): _86.QueryResponse;
                        fromProtoMsg(message: _86.QueryResponseProtoMsg): _86.QueryResponse;
                        toProto(message: _86.QueryResponse): Uint8Array;
                        toProtoMsg(message: _86.QueryResponse): _86.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _85.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.QueryRequest;
                        fromJSON(object: any): _85.QueryRequest;
                        toJSON(message: _85.QueryRequest): unknown;
                        fromPartial(object: Partial<_85.QueryRequest>): _85.QueryRequest;
                        fromAmino(object: _85.QueryRequestAmino): _85.QueryRequest;
                        toAmino(message: _85.QueryRequest): _85.QueryRequestAmino;
                        fromAminoMsg(object: _85.QueryRequestAminoMsg): _85.QueryRequest;
                        fromProtoMsg(message: _85.QueryRequestProtoMsg): _85.QueryRequest;
                        toProto(message: _85.QueryRequest): Uint8Array;
                        toProtoMsg(message: _85.QueryRequest): _85.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _88.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Record;
                    fromJSON(object: any): _88.Record;
                    toJSON(message: _88.Record): unknown;
                    fromPartial(object: Partial<_88.Record>): _88.Record;
                    fromAmino(object: _88.RecordAmino): _88.Record;
                    toAmino(message: _88.Record): _88.RecordAmino;
                    fromAminoMsg(object: _88.RecordAminoMsg): _88.Record;
                    fromProtoMsg(message: _88.RecordProtoMsg): _88.Record;
                    toProto(message: _88.Record): Uint8Array;
                    toProtoMsg(message: _88.Record): _88.RecordProtoMsg;
                };
            };
        }
        namespace metas {
            const genesis: {
                Genesis: {
                    encode(message: _89.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Genesis;
                    fromJSON(object: any): _89.Genesis;
                    toJSON(message: _89.Genesis): unknown;
                    fromPartial(object: Partial<_89.Genesis>): _89.Genesis;
                    fromAmino(object: _89.GenesisAmino): _89.Genesis;
                    toAmino(message: _89.Genesis): _89.GenesisAmino;
                    fromAminoMsg(object: _89.GenesisAminoMsg): _89.Genesis;
                    fromProtoMsg(message: _89.GenesisProtoMsg): _89.Genesis;
                    toProto(message: _89.Genesis): Uint8Array;
                    toProtoMsg(message: _89.Genesis): _89.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _90.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Key;
                    fromJSON(object: any): _90.Key;
                    toJSON(message: _90.Key): unknown;
                    fromPartial(object: Partial<_90.Key>): _90.Key;
                    fromAmino(object: _90.KeyAmino): _90.Key;
                    toAmino(message: _90.Key): _90.KeyAmino;
                    fromAminoMsg(object: _90.KeyAminoMsg): _90.Key;
                    fromProtoMsg(message: _90.KeyProtoMsg): _90.Key;
                    toProto(message: _90.Key): Uint8Array;
                    toProtoMsg(message: _90.Key): _90.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _91.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _91.Mappable;
                    fromJSON(object: any): _91.Mappable;
                    toJSON(message: _91.Mappable): unknown;
                    fromPartial(object: Partial<_91.Mappable>): _91.Mappable;
                    fromAmino(object: _91.MappableAmino): _91.Mappable;
                    toAmino(message: _91.Mappable): _91.MappableAmino;
                    fromAminoMsg(object: _91.MappableAminoMsg): _91.Mappable;
                    fromProtoMsg(message: _91.MappableProtoMsg): _91.Mappable;
                    toProto(message: _91.Mappable): Uint8Array;
                    toProtoMsg(message: _91.Mappable): _91.MappableProtoMsg;
                };
            };
            namespace queries {
                const meta: {
                    ServiceClientImpl: typeof _369.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _92.QueryRequest): Promise<_93.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _93.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _93.QueryResponse;
                        fromJSON(object: any): _93.QueryResponse;
                        toJSON(message: _93.QueryResponse): unknown;
                        fromPartial(object: Partial<_93.QueryResponse>): _93.QueryResponse;
                        fromAmino(object: _93.QueryResponseAmino): _93.QueryResponse;
                        toAmino(message: _93.QueryResponse): _93.QueryResponseAmino;
                        fromAminoMsg(object: _93.QueryResponseAminoMsg): _93.QueryResponse;
                        fromProtoMsg(message: _93.QueryResponseProtoMsg): _93.QueryResponse;
                        toProto(message: _93.QueryResponse): Uint8Array;
                        toProtoMsg(message: _93.QueryResponse): _93.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _92.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _92.QueryRequest;
                        fromJSON(object: any): _92.QueryRequest;
                        toJSON(message: _92.QueryRequest): unknown;
                        fromPartial(object: Partial<_92.QueryRequest>): _92.QueryRequest;
                        fromAmino(object: _92.QueryRequestAmino): _92.QueryRequest;
                        toAmino(message: _92.QueryRequest): _92.QueryRequestAmino;
                        fromAminoMsg(object: _92.QueryRequestAminoMsg): _92.QueryRequest;
                        fromProtoMsg(message: _92.QueryRequestProtoMsg): _92.QueryRequest;
                        toProto(message: _92.QueryRequest): Uint8Array;
                        toProtoMsg(message: _92.QueryRequest): _92.QueryRequestProtoMsg;
                    };
                };
                const metas: {
                    ServiceClientImpl: typeof _370.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _95.QueryRequest): Promise<_96.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _96.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _96.QueryResponse;
                        fromJSON(object: any): _96.QueryResponse;
                        toJSON(message: _96.QueryResponse): unknown;
                        fromPartial(object: Partial<_96.QueryResponse>): _96.QueryResponse;
                        fromAmino(object: _96.QueryResponseAmino): _96.QueryResponse;
                        toAmino(message: _96.QueryResponse): _96.QueryResponseAmino;
                        fromAminoMsg(object: _96.QueryResponseAminoMsg): _96.QueryResponse;
                        fromProtoMsg(message: _96.QueryResponseProtoMsg): _96.QueryResponse;
                        toProto(message: _96.QueryResponse): Uint8Array;
                        toProtoMsg(message: _96.QueryResponse): _96.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _95.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryRequest;
                        fromJSON(object: any): _95.QueryRequest;
                        toJSON(message: _95.QueryRequest): unknown;
                        fromPartial(object: Partial<_95.QueryRequest>): _95.QueryRequest;
                        fromAmino(object: _95.QueryRequestAmino): _95.QueryRequest;
                        toAmino(message: _95.QueryRequest): _95.QueryRequestAmino;
                        fromAminoMsg(object: _95.QueryRequestAminoMsg): _95.QueryRequest;
                        fromProtoMsg(message: _95.QueryRequestProtoMsg): _95.QueryRequest;
                        toProto(message: _95.QueryRequest): Uint8Array;
                        toProtoMsg(message: _95.QueryRequest): _95.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _98.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Record;
                    fromJSON(object: any): _98.Record;
                    toJSON(message: _98.Record): unknown;
                    fromPartial(object: Partial<_98.Record>): _98.Record;
                    fromAmino(object: _98.RecordAmino): _98.Record;
                    toAmino(message: _98.Record): _98.RecordAmino;
                    fromAminoMsg(object: _98.RecordAminoMsg): _98.Record;
                    fromProtoMsg(message: _98.RecordProtoMsg): _98.Record;
                    toProto(message: _98.Record): Uint8Array;
                    toProtoMsg(message: _98.Record): _98.RecordProtoMsg;
                };
            };
            namespace transactions {
                const reveal: {
                    MsgClientImpl: typeof _392.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _99.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _99.Message): {
                                typeUrl: string;
                                value: _99.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _99.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _99.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _99.Message): {
                                typeUrl: string;
                                value: _99.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.metas.transactions.reveal.Message": {
                            aminoType: string;
                            toAmino: (message: _99.Message) => _99.MessageAmino;
                            fromAmino: (object: _99.MessageAmino) => _99.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _101.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.TransactionResponse;
                        fromJSON(_: any): _101.TransactionResponse;
                        toJSON(_: _101.TransactionResponse): unknown;
                        fromPartial(_: Partial<_101.TransactionResponse>): _101.TransactionResponse;
                        fromAmino(_: _101.TransactionResponseAmino): _101.TransactionResponse;
                        toAmino(_: _101.TransactionResponse): _101.TransactionResponseAmino;
                        fromAminoMsg(object: _101.TransactionResponseAminoMsg): _101.TransactionResponse;
                        fromProtoMsg(message: _101.TransactionResponseProtoMsg): _101.TransactionResponse;
                        toProto(message: _101.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _101.TransactionResponse): _101.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _99.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Message;
                        fromJSON(object: any): _99.Message;
                        toJSON(message: _99.Message): unknown;
                        fromPartial(object: Partial<_99.Message>): _99.Message;
                        fromAmino(object: _99.MessageAmino): _99.Message;
                        toAmino(message: _99.Message): _99.MessageAmino;
                        fromAminoMsg(object: _99.MessageAminoMsg): _99.Message;
                        fromProtoMsg(message: _99.MessageProtoMsg): _99.Message;
                        toProto(message: _99.Message): Uint8Array;
                        toProtoMsg(message: _99.Message): _99.MessageProtoMsg;
                    };
                };
            }
        }
        namespace orders {
            const genesis: {
                Genesis: {
                    encode(message: _102.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.Genesis;
                    fromJSON(object: any): _102.Genesis;
                    toJSON(message: _102.Genesis): unknown;
                    fromPartial(object: Partial<_102.Genesis>): _102.Genesis;
                    fromAmino(object: _102.GenesisAmino): _102.Genesis;
                    toAmino(message: _102.Genesis): _102.GenesisAmino;
                    fromAminoMsg(object: _102.GenesisAminoMsg): _102.Genesis;
                    fromProtoMsg(message: _102.GenesisProtoMsg): _102.Genesis;
                    toProto(message: _102.Genesis): Uint8Array;
                    toProtoMsg(message: _102.Genesis): _102.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _103.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _103.Key;
                    fromJSON(object: any): _103.Key;
                    toJSON(message: _103.Key): unknown;
                    fromPartial(object: Partial<_103.Key>): _103.Key;
                    fromAmino(object: _103.KeyAmino): _103.Key;
                    toAmino(message: _103.Key): _103.KeyAmino;
                    fromAminoMsg(object: _103.KeyAminoMsg): _103.Key;
                    fromProtoMsg(message: _103.KeyProtoMsg): _103.Key;
                    toProto(message: _103.Key): Uint8Array;
                    toProtoMsg(message: _103.Key): _103.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _104.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.Mappable;
                    fromJSON(object: any): _104.Mappable;
                    toJSON(message: _104.Mappable): unknown;
                    fromPartial(object: Partial<_104.Mappable>): _104.Mappable;
                    fromAmino(object: _104.MappableAmino): _104.Mappable;
                    toAmino(message: _104.Mappable): _104.MappableAmino;
                    fromAminoMsg(object: _104.MappableAminoMsg): _104.Mappable;
                    fromProtoMsg(message: _104.MappableProtoMsg): _104.Mappable;
                    toProto(message: _104.Mappable): Uint8Array;
                    toProtoMsg(message: _104.Mappable): _104.MappableProtoMsg;
                };
            };
            namespace queries {
                const order: {
                    ServiceClientImpl: typeof _371.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _105.QueryRequest): Promise<_106.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _106.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _106.QueryResponse;
                        fromJSON(object: any): _106.QueryResponse;
                        toJSON(message: _106.QueryResponse): unknown;
                        fromPartial(object: Partial<_106.QueryResponse>): _106.QueryResponse;
                        fromAmino(object: _106.QueryResponseAmino): _106.QueryResponse;
                        toAmino(message: _106.QueryResponse): _106.QueryResponseAmino;
                        fromAminoMsg(object: _106.QueryResponseAminoMsg): _106.QueryResponse;
                        fromProtoMsg(message: _106.QueryResponseProtoMsg): _106.QueryResponse;
                        toProto(message: _106.QueryResponse): Uint8Array;
                        toProtoMsg(message: _106.QueryResponse): _106.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _105.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryRequest;
                        fromJSON(object: any): _105.QueryRequest;
                        toJSON(message: _105.QueryRequest): unknown;
                        fromPartial(object: Partial<_105.QueryRequest>): _105.QueryRequest;
                        fromAmino(object: _105.QueryRequestAmino): _105.QueryRequest;
                        toAmino(message: _105.QueryRequest): _105.QueryRequestAmino;
                        fromAminoMsg(object: _105.QueryRequestAminoMsg): _105.QueryRequest;
                        fromProtoMsg(message: _105.QueryRequestProtoMsg): _105.QueryRequest;
                        toProto(message: _105.QueryRequest): Uint8Array;
                        toProtoMsg(message: _105.QueryRequest): _105.QueryRequestProtoMsg;
                    };
                };
                const orders: {
                    ServiceClientImpl: typeof _372.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _108.QueryRequest): Promise<_109.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _109.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _109.QueryResponse;
                        fromJSON(object: any): _109.QueryResponse;
                        toJSON(message: _109.QueryResponse): unknown;
                        fromPartial(object: Partial<_109.QueryResponse>): _109.QueryResponse;
                        fromAmino(object: _109.QueryResponseAmino): _109.QueryResponse;
                        toAmino(message: _109.QueryResponse): _109.QueryResponseAmino;
                        fromAminoMsg(object: _109.QueryResponseAminoMsg): _109.QueryResponse;
                        fromProtoMsg(message: _109.QueryResponseProtoMsg): _109.QueryResponse;
                        toProto(message: _109.QueryResponse): Uint8Array;
                        toProtoMsg(message: _109.QueryResponse): _109.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _108.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.QueryRequest;
                        fromJSON(object: any): _108.QueryRequest;
                        toJSON(message: _108.QueryRequest): unknown;
                        fromPartial(object: Partial<_108.QueryRequest>): _108.QueryRequest;
                        fromAmino(object: _108.QueryRequestAmino): _108.QueryRequest;
                        toAmino(message: _108.QueryRequest): _108.QueryRequestAmino;
                        fromAminoMsg(object: _108.QueryRequestAminoMsg): _108.QueryRequest;
                        fromProtoMsg(message: _108.QueryRequestProtoMsg): _108.QueryRequest;
                        toProto(message: _108.QueryRequest): Uint8Array;
                        toProtoMsg(message: _108.QueryRequest): _108.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _111.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Record;
                    fromJSON(object: any): _111.Record;
                    toJSON(message: _111.Record): unknown;
                    fromPartial(object: Partial<_111.Record>): _111.Record;
                    fromAmino(object: _111.RecordAmino): _111.Record;
                    toAmino(message: _111.Record): _111.RecordAmino;
                    fromAminoMsg(object: _111.RecordAminoMsg): _111.Record;
                    fromProtoMsg(message: _111.RecordProtoMsg): _111.Record;
                    toProto(message: _111.Record): Uint8Array;
                    toProtoMsg(message: _111.Record): _111.RecordProtoMsg;
                };
            };
            namespace transactions {
                const cancel: {
                    MsgClientImpl: typeof _393.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.cancel.Message": {
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
                const define: {
                    MsgClientImpl: typeof _394.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.define.Message": {
                            aminoType: string;
                            toAmino: (message: _115.Message) => _115.MessageAmino;
                            fromAmino: (object: _115.MessageAmino) => _115.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _117.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.TransactionResponse;
                        fromJSON(object: any): _117.TransactionResponse;
                        toJSON(message: _117.TransactionResponse): unknown;
                        fromPartial(object: Partial<_117.TransactionResponse>): _117.TransactionResponse;
                        fromAmino(object: _117.TransactionResponseAmino): _117.TransactionResponse;
                        toAmino(message: _117.TransactionResponse): _117.TransactionResponseAmino;
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
                const deputize: {
                    MsgClientImpl: typeof _395.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.deputize.Message": {
                            aminoType: string;
                            toAmino: (message: _118.Message) => _118.MessageAmino;
                            fromAmino: (object: _118.MessageAmino) => _118.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _120.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.TransactionResponse;
                        fromJSON(_: any): _120.TransactionResponse;
                        toJSON(_: _120.TransactionResponse): unknown;
                        fromPartial(_: Partial<_120.TransactionResponse>): _120.TransactionResponse;
                        fromAmino(_: _120.TransactionResponseAmino): _120.TransactionResponse;
                        toAmino(_: _120.TransactionResponse): _120.TransactionResponseAmino;
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
                const immediate: {
                    MsgClientImpl: typeof _396.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.immediate.Message": {
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
                const make: {
                    MsgClientImpl: typeof _397.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.make.Message": {
                            aminoType: string;
                            toAmino: (message: _124.Message) => _124.MessageAmino;
                            fromAmino: (object: _124.MessageAmino) => _124.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _126.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _126.TransactionResponse;
                        fromJSON(object: any): _126.TransactionResponse;
                        toJSON(message: _126.TransactionResponse): unknown;
                        fromPartial(object: Partial<_126.TransactionResponse>): _126.TransactionResponse;
                        fromAmino(object: _126.TransactionResponseAmino): _126.TransactionResponse;
                        toAmino(message: _126.TransactionResponse): _126.TransactionResponseAmino;
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
                const modify: {
                    MsgClientImpl: typeof _398.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.modify.Message": {
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
                const revoke: {
                    MsgClientImpl: typeof _399.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _130.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _130.Message): {
                                typeUrl: string;
                                value: _130.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _130.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _130.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _130.Message): {
                                typeUrl: string;
                                value: _130.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _130.Message) => _130.MessageAmino;
                            fromAmino: (object: _130.MessageAmino) => _130.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _132.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _132.TransactionResponse;
                        fromJSON(_: any): _132.TransactionResponse;
                        toJSON(_: _132.TransactionResponse): unknown;
                        fromPartial(_: Partial<_132.TransactionResponse>): _132.TransactionResponse;
                        fromAmino(_: _132.TransactionResponseAmino): _132.TransactionResponse;
                        toAmino(_: _132.TransactionResponse): _132.TransactionResponseAmino;
                        fromAminoMsg(object: _132.TransactionResponseAminoMsg): _132.TransactionResponse;
                        fromProtoMsg(message: _132.TransactionResponseProtoMsg): _132.TransactionResponse;
                        toProto(message: _132.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _132.TransactionResponse): _132.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _130.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _130.Message;
                        fromJSON(object: any): _130.Message;
                        toJSON(message: _130.Message): unknown;
                        fromPartial(object: Partial<_130.Message>): _130.Message;
                        fromAmino(object: _130.MessageAmino): _130.Message;
                        toAmino(message: _130.Message): _130.MessageAmino;
                        fromAminoMsg(object: _130.MessageAminoMsg): _130.Message;
                        fromProtoMsg(message: _130.MessageProtoMsg): _130.Message;
                        toProto(message: _130.Message): Uint8Array;
                        toProtoMsg(message: _130.Message): _130.MessageProtoMsg;
                    };
                };
                const take: {
                    MsgClientImpl: typeof _400.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _133.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _133.Message): {
                                typeUrl: string;
                                value: _133.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _133.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _133.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _133.Message): {
                                typeUrl: string;
                                value: _133.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.take.Message": {
                            aminoType: string;
                            toAmino: (message: _133.Message) => _133.MessageAmino;
                            fromAmino: (object: _133.MessageAmino) => _133.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _135.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _135.TransactionResponse;
                        fromJSON(_: any): _135.TransactionResponse;
                        toJSON(_: _135.TransactionResponse): unknown;
                        fromPartial(_: Partial<_135.TransactionResponse>): _135.TransactionResponse;
                        fromAmino(_: _135.TransactionResponseAmino): _135.TransactionResponse;
                        toAmino(_: _135.TransactionResponse): _135.TransactionResponseAmino;
                        fromAminoMsg(object: _135.TransactionResponseAminoMsg): _135.TransactionResponse;
                        fromProtoMsg(message: _135.TransactionResponseProtoMsg): _135.TransactionResponse;
                        toProto(message: _135.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _135.TransactionResponse): _135.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _133.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _133.Message;
                        fromJSON(object: any): _133.Message;
                        toJSON(message: _133.Message): unknown;
                        fromPartial(object: Partial<_133.Message>): _133.Message;
                        fromAmino(object: _133.MessageAmino): _133.Message;
                        toAmino(message: _133.Message): _133.MessageAmino;
                        fromAminoMsg(object: _133.MessageAminoMsg): _133.Message;
                        fromProtoMsg(message: _133.MessageProtoMsg): _133.Message;
                        toProto(message: _133.Message): Uint8Array;
                        toProtoMsg(message: _133.Message): _133.MessageProtoMsg;
                    };
                };
            }
        }
        namespace splits {
            const genesis: {
                Genesis: {
                    encode(message: _136.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Genesis;
                    fromJSON(object: any): _136.Genesis;
                    toJSON(message: _136.Genesis): unknown;
                    fromPartial(object: Partial<_136.Genesis>): _136.Genesis;
                    fromAmino(object: _136.GenesisAmino): _136.Genesis;
                    toAmino(message: _136.Genesis): _136.GenesisAmino;
                    fromAminoMsg(object: _136.GenesisAminoMsg): _136.Genesis;
                    fromProtoMsg(message: _136.GenesisProtoMsg): _136.Genesis;
                    toProto(message: _136.Genesis): Uint8Array;
                    toProtoMsg(message: _136.Genesis): _136.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _137.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _137.Key;
                    fromJSON(object: any): _137.Key;
                    toJSON(message: _137.Key): unknown;
                    fromPartial(object: Partial<_137.Key>): _137.Key;
                    fromAmino(object: _137.KeyAmino): _137.Key;
                    toAmino(message: _137.Key): _137.KeyAmino;
                    fromAminoMsg(object: _137.KeyAminoMsg): _137.Key;
                    fromProtoMsg(message: _137.KeyProtoMsg): _137.Key;
                    toProto(message: _137.Key): Uint8Array;
                    toProtoMsg(message: _137.Key): _137.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _138.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.Mappable;
                    fromJSON(object: any): _138.Mappable;
                    toJSON(message: _138.Mappable): unknown;
                    fromPartial(object: Partial<_138.Mappable>): _138.Mappable;
                    fromAmino(object: _138.MappableAmino): _138.Mappable;
                    toAmino(message: _138.Mappable): _138.MappableAmino;
                    fromAminoMsg(object: _138.MappableAminoMsg): _138.Mappable;
                    fromProtoMsg(message: _138.MappableProtoMsg): _138.Mappable;
                    toProto(message: _138.Mappable): Uint8Array;
                    toProtoMsg(message: _138.Mappable): _138.MappableProtoMsg;
                };
            };
            namespace queries {
                const ownable: {
                    ServiceClientImpl: typeof _373.ServiceClientImpl;
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
                const split: {
                    ServiceClientImpl: typeof _374.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _142.QueryRequest): Promise<_143.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _143.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _143.QueryResponse;
                        fromJSON(object: any): _143.QueryResponse;
                        toJSON(message: _143.QueryResponse): unknown;
                        fromPartial(object: Partial<_143.QueryResponse>): _143.QueryResponse;
                        fromAmino(object: _143.QueryResponseAmino): _143.QueryResponse;
                        toAmino(message: _143.QueryResponse): _143.QueryResponseAmino;
                        fromAminoMsg(object: _143.QueryResponseAminoMsg): _143.QueryResponse;
                        fromProtoMsg(message: _143.QueryResponseProtoMsg): _143.QueryResponse;
                        toProto(message: _143.QueryResponse): Uint8Array;
                        toProtoMsg(message: _143.QueryResponse): _143.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _142.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _142.QueryRequest;
                        fromJSON(object: any): _142.QueryRequest;
                        toJSON(message: _142.QueryRequest): unknown;
                        fromPartial(object: Partial<_142.QueryRequest>): _142.QueryRequest;
                        fromAmino(object: _142.QueryRequestAmino): _142.QueryRequest;
                        toAmino(message: _142.QueryRequest): _142.QueryRequestAmino;
                        fromAminoMsg(object: _142.QueryRequestAminoMsg): _142.QueryRequest;
                        fromProtoMsg(message: _142.QueryRequestProtoMsg): _142.QueryRequest;
                        toProto(message: _142.QueryRequest): Uint8Array;
                        toProtoMsg(message: _142.QueryRequest): _142.QueryRequestProtoMsg;
                    };
                };
                const splits: {
                    ServiceClientImpl: typeof _375.ServiceClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _145.QueryRequest): Promise<_146.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _146.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _146.QueryResponse;
                        fromJSON(object: any): _146.QueryResponse;
                        toJSON(message: _146.QueryResponse): unknown;
                        fromPartial(object: Partial<_146.QueryResponse>): _146.QueryResponse;
                        fromAmino(object: _146.QueryResponseAmino): _146.QueryResponse;
                        toAmino(message: _146.QueryResponse): _146.QueryResponseAmino;
                        fromAminoMsg(object: _146.QueryResponseAminoMsg): _146.QueryResponse;
                        fromProtoMsg(message: _146.QueryResponseProtoMsg): _146.QueryResponse;
                        toProto(message: _146.QueryResponse): Uint8Array;
                        toProtoMsg(message: _146.QueryResponse): _146.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _145.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _145.QueryRequest;
                        fromJSON(object: any): _145.QueryRequest;
                        toJSON(message: _145.QueryRequest): unknown;
                        fromPartial(object: Partial<_145.QueryRequest>): _145.QueryRequest;
                        fromAmino(object: _145.QueryRequestAmino): _145.QueryRequest;
                        toAmino(message: _145.QueryRequest): _145.QueryRequestAmino;
                        fromAminoMsg(object: _145.QueryRequestAminoMsg): _145.QueryRequest;
                        fromProtoMsg(message: _145.QueryRequestProtoMsg): _145.QueryRequest;
                        toProto(message: _145.QueryRequest): Uint8Array;
                        toProtoMsg(message: _145.QueryRequest): _145.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _148.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _148.Record;
                    fromJSON(object: any): _148.Record;
                    toJSON(message: _148.Record): unknown;
                    fromPartial(object: Partial<_148.Record>): _148.Record;
                    fromAmino(object: _148.RecordAmino): _148.Record;
                    toAmino(message: _148.Record): _148.RecordAmino;
                    fromAminoMsg(object: _148.RecordAminoMsg): _148.Record;
                    fromProtoMsg(message: _148.RecordProtoMsg): _148.Record;
                    toProto(message: _148.Record): Uint8Array;
                    toProtoMsg(message: _148.Record): _148.RecordProtoMsg;
                };
            };
            namespace transactions {
                const send: {
                    MsgClientImpl: typeof _401.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _149.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _149.Message): {
                                typeUrl: string;
                                value: _149.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _149.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _149.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _149.Message): {
                                typeUrl: string;
                                value: _149.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.send.Message": {
                            aminoType: string;
                            toAmino: (message: _149.Message) => _149.MessageAmino;
                            fromAmino: (object: _149.MessageAmino) => _149.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _151.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.TransactionResponse;
                        fromJSON(_: any): _151.TransactionResponse;
                        toJSON(_: _151.TransactionResponse): unknown;
                        fromPartial(_: Partial<_151.TransactionResponse>): _151.TransactionResponse;
                        fromAmino(_: _151.TransactionResponseAmino): _151.TransactionResponse;
                        toAmino(_: _151.TransactionResponse): _151.TransactionResponseAmino;
                        fromAminoMsg(object: _151.TransactionResponseAminoMsg): _151.TransactionResponse;
                        fromProtoMsg(message: _151.TransactionResponseProtoMsg): _151.TransactionResponse;
                        toProto(message: _151.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _151.TransactionResponse): _151.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _149.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _149.Message;
                        fromJSON(object: any): _149.Message;
                        toJSON(message: _149.Message): unknown;
                        fromPartial(object: Partial<_149.Message>): _149.Message;
                        fromAmino(object: _149.MessageAmino): _149.Message;
                        toAmino(message: _149.Message): _149.MessageAmino;
                        fromAminoMsg(object: _149.MessageAminoMsg): _149.Message;
                        fromProtoMsg(message: _149.MessageProtoMsg): _149.Message;
                        toProto(message: _149.Message): Uint8Array;
                        toProtoMsg(message: _149.Message): _149.MessageProtoMsg;
                    };
                };
                const unwrap: {
                    MsgClientImpl: typeof _402.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _152.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _152.Message): {
                                typeUrl: string;
                                value: _152.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _152.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _152.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _152.Message): {
                                typeUrl: string;
                                value: _152.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.unwrap.Message": {
                            aminoType: string;
                            toAmino: (message: _152.Message) => _152.MessageAmino;
                            fromAmino: (object: _152.MessageAmino) => _152.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _154.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.TransactionResponse;
                        fromJSON(_: any): _154.TransactionResponse;
                        toJSON(_: _154.TransactionResponse): unknown;
                        fromPartial(_: Partial<_154.TransactionResponse>): _154.TransactionResponse;
                        fromAmino(_: _154.TransactionResponseAmino): _154.TransactionResponse;
                        toAmino(_: _154.TransactionResponse): _154.TransactionResponseAmino;
                        fromAminoMsg(object: _154.TransactionResponseAminoMsg): _154.TransactionResponse;
                        fromProtoMsg(message: _154.TransactionResponseProtoMsg): _154.TransactionResponse;
                        toProto(message: _154.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _154.TransactionResponse): _154.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _152.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Message;
                        fromJSON(object: any): _152.Message;
                        toJSON(message: _152.Message): unknown;
                        fromPartial(object: Partial<_152.Message>): _152.Message;
                        fromAmino(object: _152.MessageAmino): _152.Message;
                        toAmino(message: _152.Message): _152.MessageAmino;
                        fromAminoMsg(object: _152.MessageAminoMsg): _152.Message;
                        fromProtoMsg(message: _152.MessageProtoMsg): _152.Message;
                        toProto(message: _152.Message): Uint8Array;
                        toProtoMsg(message: _152.Message): _152.MessageProtoMsg;
                    };
                };
                const wrap: {
                    MsgClientImpl: typeof _403.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _155.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _155.Message): {
                                typeUrl: string;
                                value: _155.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _155.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _155.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _155.Message): {
                                typeUrl: string;
                                value: _155.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.splits.transactions.wrap.Message": {
                            aminoType: string;
                            toAmino: (message: _155.Message) => _155.MessageAmino;
                            fromAmino: (object: _155.MessageAmino) => _155.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _157.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.TransactionResponse;
                        fromJSON(object: any): _157.TransactionResponse;
                        toJSON(message: _157.TransactionResponse): unknown;
                        fromPartial(object: Partial<_157.TransactionResponse>): _157.TransactionResponse;
                        fromAmino(object: _157.TransactionResponseAmino): _157.TransactionResponse;
                        toAmino(message: _157.TransactionResponse): _157.TransactionResponseAmino;
                        fromAminoMsg(object: _157.TransactionResponseAminoMsg): _157.TransactionResponse;
                        fromProtoMsg(message: _157.TransactionResponseProtoMsg): _157.TransactionResponse;
                        toProto(message: _157.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _157.TransactionResponse): _157.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _155.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.Message;
                        fromJSON(object: any): _155.Message;
                        toJSON(message: _155.Message): unknown;
                        fromPartial(object: Partial<_155.Message>): _155.Message;
                        fromAmino(object: _155.MessageAmino): _155.Message;
                        toAmino(message: _155.Message): _155.MessageAmino;
                        fromAminoMsg(object: _155.MessageAminoMsg): _155.Message;
                        fromProtoMsg(message: _155.MessageProtoMsg): _155.Message;
                        toProto(message: _155.Message): Uint8Array;
                        toProtoMsg(message: _155.Message): _155.MessageProtoMsg;
                    };
                };
            }
        }
    }
    namespace schema {
        namespace data {
            const base: {
                StringData: {
                    encode(message: _167.StringData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.StringData;
                    fromJSON(object: any): _167.StringData;
                    toJSON(message: _167.StringData): unknown;
                    fromPartial(object: Partial<_167.StringData>): _167.StringData;
                    fromAmino(object: _167.StringDataAmino): _167.StringData;
                    toAmino(message: _167.StringData): _167.StringDataAmino;
                    fromAminoMsg(object: _167.StringDataAminoMsg): _167.StringData;
                    fromProtoMsg(message: _167.StringDataProtoMsg): _167.StringData;
                    toProto(message: _167.StringData): Uint8Array;
                    toProtoMsg(message: _167.StringData): _167.StringDataProtoMsg;
                };
                NumberData: {
                    encode(message: _166.NumberData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.NumberData;
                    fromJSON(object: any): _166.NumberData;
                    toJSON(message: _166.NumberData): unknown;
                    fromPartial(object: Partial<_166.NumberData>): _166.NumberData;
                    fromAmino(object: _166.NumberDataAmino): _166.NumberData;
                    toAmino(message: _166.NumberData): _166.NumberDataAmino;
                    fromAminoMsg(object: _166.NumberDataAminoMsg): _166.NumberData;
                    fromProtoMsg(message: _166.NumberDataProtoMsg): _166.NumberData;
                    toProto(message: _166.NumberData): Uint8Array;
                    toProtoMsg(message: _166.NumberData): _166.NumberDataProtoMsg;
                };
                ListData: {
                    encode(message: _165.ListData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _165.ListData;
                    fromJSON(object: any): _165.ListData;
                    toJSON(message: _165.ListData): unknown;
                    fromPartial(object: Partial<_165.ListData>): _165.ListData;
                    fromAmino(object: _165.ListDataAmino): _165.ListData;
                    toAmino(message: _165.ListData): _165.ListDataAmino;
                    fromAminoMsg(object: _165.ListDataAminoMsg): _165.ListData;
                    fromProtoMsg(message: _165.ListDataProtoMsg): _165.ListData;
                    toProto(message: _165.ListData): Uint8Array;
                    toProtoMsg(message: _165.ListData): _165.ListDataProtoMsg;
                };
                IDData: {
                    encode(message: _164.IDData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.IDData;
                    fromJSON(object: any): _164.IDData;
                    toJSON(message: _164.IDData): unknown;
                    fromPartial(object: Partial<_164.IDData>): _164.IDData;
                    fromAmino(object: _164.IDDataAmino): _164.IDData;
                    toAmino(message: _164.IDData): _164.IDDataAmino;
                    fromAminoMsg(object: _164.IDDataAminoMsg): _164.IDData;
                    fromProtoMsg(message: _164.IDDataProtoMsg): _164.IDData;
                    toProto(message: _164.IDData): Uint8Array;
                    toProtoMsg(message: _164.IDData): _164.IDDataProtoMsg;
                };
                HeightData: {
                    encode(message: _163.HeightData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.HeightData;
                    fromJSON(object: any): _163.HeightData;
                    toJSON(message: _163.HeightData): unknown;
                    fromPartial(object: Partial<_163.HeightData>): _163.HeightData;
                    fromAmino(object: _163.HeightDataAmino): _163.HeightData;
                    toAmino(message: _163.HeightData): _163.HeightDataAmino;
                    fromAminoMsg(object: _163.HeightDataAminoMsg): _163.HeightData;
                    fromProtoMsg(message: _163.HeightDataProtoMsg): _163.HeightData;
                    toProto(message: _163.HeightData): Uint8Array;
                    toProtoMsg(message: _163.HeightData): _163.HeightDataProtoMsg;
                };
                DecData: {
                    encode(message: _162.DecData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _162.DecData;
                    fromJSON(object: any): _162.DecData;
                    toJSON(message: _162.DecData): unknown;
                    fromPartial(object: Partial<_162.DecData>): _162.DecData;
                    fromAmino(object: _162.DecDataAmino): _162.DecData;
                    toAmino(message: _162.DecData): _162.DecDataAmino;
                    fromAminoMsg(object: _162.DecDataAminoMsg): _162.DecData;
                    fromProtoMsg(message: _162.DecDataProtoMsg): _162.DecData;
                    toProto(message: _162.DecData): Uint8Array;
                    toProtoMsg(message: _162.DecData): _162.DecDataProtoMsg;
                };
                BooleanData: {
                    encode(message: _161.BooleanData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.BooleanData;
                    fromJSON(object: any): _161.BooleanData;
                    toJSON(message: _161.BooleanData): unknown;
                    fromPartial(object: Partial<_161.BooleanData>): _161.BooleanData;
                    fromAmino(object: _161.BooleanDataAmino): _161.BooleanData;
                    toAmino(message: _161.BooleanData): _161.BooleanDataAmino;
                    fromAminoMsg(object: _161.BooleanDataAminoMsg): _161.BooleanData;
                    fromProtoMsg(message: _161.BooleanDataProtoMsg): _161.BooleanData;
                    toProto(message: _161.BooleanData): Uint8Array;
                    toProtoMsg(message: _161.BooleanData): _161.BooleanDataProtoMsg;
                };
                AnyListableData: {
                    encode(message: _160.AnyListableData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.AnyListableData;
                    fromJSON(object: any): _160.AnyListableData;
                    toJSON(message: _160.AnyListableData): unknown;
                    fromPartial(object: Partial<_160.AnyListableData>): _160.AnyListableData;
                    fromAmino(object: _160.AnyListableDataAmino): _160.AnyListableData;
                    toAmino(message: _160.AnyListableData): _160.AnyListableDataAmino;
                    fromAminoMsg(object: _160.AnyListableDataAminoMsg): _160.AnyListableData;
                    fromProtoMsg(message: _160.AnyListableDataProtoMsg): _160.AnyListableData;
                    toProto(message: _160.AnyListableData): Uint8Array;
                    toProtoMsg(message: _160.AnyListableData): _160.AnyListableDataProtoMsg;
                };
                AnyData: {
                    encode(message: _159.AnyData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _159.AnyData;
                    fromJSON(object: any): _159.AnyData;
                    toJSON(message: _159.AnyData): unknown;
                    fromPartial(object: Partial<_159.AnyData>): _159.AnyData;
                    fromAmino(object: _159.AnyDataAmino): _159.AnyData;
                    toAmino(message: _159.AnyData): _159.AnyDataAmino;
                    fromAminoMsg(object: _159.AnyDataAminoMsg): _159.AnyData;
                    fromProtoMsg(message: _159.AnyDataProtoMsg): _159.AnyData;
                    toProto(message: _159.AnyData): Uint8Array;
                    toProtoMsg(message: _159.AnyData): _159.AnyDataProtoMsg;
                };
                AccAddressData: {
                    encode(message: _158.AccAddressData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.AccAddressData;
                    fromJSON(object: any): _158.AccAddressData;
                    toJSON(message: _158.AccAddressData): unknown;
                    fromPartial(object: Partial<_158.AccAddressData>): _158.AccAddressData;
                    fromAmino(object: _158.AccAddressDataAmino): _158.AccAddressData;
                    toAmino(message: _158.AccAddressData): _158.AccAddressDataAmino;
                    fromAminoMsg(object: _158.AccAddressDataAminoMsg): _158.AccAddressData;
                    fromProtoMsg(message: _158.AccAddressDataProtoMsg): _158.AccAddressData;
                    toProto(message: _158.AccAddressData): Uint8Array;
                    toProtoMsg(message: _158.AccAddressData): _158.AccAddressDataProtoMsg;
                };
            };
        }
        namespace documents {
            const base: {
                Document: {
                    encode(message: _168.Document, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.Document;
                    fromJSON(object: any): _168.Document;
                    toJSON(message: _168.Document): unknown;
                    fromPartial(object: Partial<_168.Document>): _168.Document;
                    fromAmino(object: _168.DocumentAmino): _168.Document;
                    toAmino(message: _168.Document): _168.DocumentAmino;
                    fromAminoMsg(object: _168.DocumentAminoMsg): _168.Document;
                    fromProtoMsg(message: _168.DocumentProtoMsg): _168.Document;
                    toProto(message: _168.Document): Uint8Array;
                    toProtoMsg(message: _168.Document): _168.DocumentProtoMsg;
                };
            };
        }
        namespace ids {
            const base: {
                StringID: {
                    encode(message: _181.StringID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.StringID;
                    fromJSON(object: any): _181.StringID;
                    toJSON(message: _181.StringID): unknown;
                    fromPartial(object: Partial<_181.StringID>): _181.StringID;
                    fromAmino(object: _181.StringIDAmino): _181.StringID;
                    toAmino(message: _181.StringID): _181.StringIDAmino;
                    fromAminoMsg(object: _181.StringIDAminoMsg): _181.StringID;
                    fromProtoMsg(message: _181.StringIDProtoMsg): _181.StringID;
                    toProto(message: _181.StringID): Uint8Array;
                    toProtoMsg(message: _181.StringID): _181.StringIDProtoMsg;
                };
                SplitID: {
                    encode(message: _180.SplitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.SplitID;
                    fromJSON(object: any): _180.SplitID;
                    toJSON(message: _180.SplitID): unknown;
                    fromPartial(object: Partial<_180.SplitID>): _180.SplitID;
                    fromAmino(object: _180.SplitIDAmino): _180.SplitID;
                    toAmino(message: _180.SplitID): _180.SplitIDAmino;
                    fromAminoMsg(object: _180.SplitIDAminoMsg): _180.SplitID;
                    fromProtoMsg(message: _180.SplitIDProtoMsg): _180.SplitID;
                    toProto(message: _180.SplitID): Uint8Array;
                    toProtoMsg(message: _180.SplitID): _180.SplitIDProtoMsg;
                };
                PropertyID: {
                    encode(message: _179.PropertyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.PropertyID;
                    fromJSON(object: any): _179.PropertyID;
                    toJSON(message: _179.PropertyID): unknown;
                    fromPartial(object: Partial<_179.PropertyID>): _179.PropertyID;
                    fromAmino(object: _179.PropertyIDAmino): _179.PropertyID;
                    toAmino(message: _179.PropertyID): _179.PropertyIDAmino;
                    fromAminoMsg(object: _179.PropertyIDAminoMsg): _179.PropertyID;
                    fromProtoMsg(message: _179.PropertyIDProtoMsg): _179.PropertyID;
                    toProto(message: _179.PropertyID): Uint8Array;
                    toProtoMsg(message: _179.PropertyID): _179.PropertyIDProtoMsg;
                };
                OrderID: {
                    encode(message: _178.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.OrderID;
                    fromJSON(object: any): _178.OrderID;
                    toJSON(message: _178.OrderID): unknown;
                    fromPartial(object: Partial<_178.OrderID>): _178.OrderID;
                    fromAmino(object: _178.OrderIDAmino): _178.OrderID;
                    toAmino(message: _178.OrderID): _178.OrderIDAmino;
                    fromAminoMsg(object: _178.OrderIDAminoMsg): _178.OrderID;
                    fromProtoMsg(message: _178.OrderIDProtoMsg): _178.OrderID;
                    toProto(message: _178.OrderID): Uint8Array;
                    toProtoMsg(message: _178.OrderID): _178.OrderIDProtoMsg;
                };
                MaintainerID: {
                    encode(message: _177.MaintainerID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.MaintainerID;
                    fromJSON(object: any): _177.MaintainerID;
                    toJSON(message: _177.MaintainerID): unknown;
                    fromPartial(object: Partial<_177.MaintainerID>): _177.MaintainerID;
                    fromAmino(object: _177.MaintainerIDAmino): _177.MaintainerID;
                    toAmino(message: _177.MaintainerID): _177.MaintainerIDAmino;
                    fromAminoMsg(object: _177.MaintainerIDAminoMsg): _177.MaintainerID;
                    fromProtoMsg(message: _177.MaintainerIDProtoMsg): _177.MaintainerID;
                    toProto(message: _177.MaintainerID): Uint8Array;
                    toProtoMsg(message: _177.MaintainerID): _177.MaintainerIDProtoMsg;
                };
                IdentityID: {
                    encode(message: _176.IdentityID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.IdentityID;
                    fromJSON(object: any): _176.IdentityID;
                    toJSON(message: _176.IdentityID): unknown;
                    fromPartial(object: Partial<_176.IdentityID>): _176.IdentityID;
                    fromAmino(object: _176.IdentityIDAmino): _176.IdentityID;
                    toAmino(message: _176.IdentityID): _176.IdentityIDAmino;
                    fromAminoMsg(object: _176.IdentityIDAminoMsg): _176.IdentityID;
                    fromProtoMsg(message: _176.IdentityIDProtoMsg): _176.IdentityID;
                    toProto(message: _176.IdentityID): Uint8Array;
                    toProtoMsg(message: _176.IdentityID): _176.IdentityIDProtoMsg;
                };
                HashID: {
                    encode(message: _175.HashID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.HashID;
                    fromJSON(object: any): _175.HashID;
                    toJSON(message: _175.HashID): unknown;
                    fromPartial(object: Partial<_175.HashID>): _175.HashID;
                    fromAmino(object: _175.HashIDAmino): _175.HashID;
                    toAmino(message: _175.HashID): _175.HashIDAmino;
                    fromAminoMsg(object: _175.HashIDAminoMsg): _175.HashID;
                    fromProtoMsg(message: _175.HashIDProtoMsg): _175.HashID;
                    toProto(message: _175.HashID): Uint8Array;
                    toProtoMsg(message: _175.HashID): _175.HashIDProtoMsg;
                };
                DataID: {
                    encode(message: _174.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.DataID;
                    fromJSON(object: any): _174.DataID;
                    toJSON(message: _174.DataID): unknown;
                    fromPartial(object: Partial<_174.DataID>): _174.DataID;
                    fromAmino(object: _174.DataIDAmino): _174.DataID;
                    toAmino(message: _174.DataID): _174.DataIDAmino;
                    fromAminoMsg(object: _174.DataIDAminoMsg): _174.DataID;
                    fromProtoMsg(message: _174.DataIDProtoMsg): _174.DataID;
                    toProto(message: _174.DataID): Uint8Array;
                    toProtoMsg(message: _174.DataID): _174.DataIDProtoMsg;
                };
                CoinID: {
                    encode(message: _173.CoinID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.CoinID;
                    fromJSON(object: any): _173.CoinID;
                    toJSON(message: _173.CoinID): unknown;
                    fromPartial(object: Partial<_173.CoinID>): _173.CoinID;
                    fromAmino(object: _173.CoinIDAmino): _173.CoinID;
                    toAmino(message: _173.CoinID): _173.CoinIDAmino;
                    fromAminoMsg(object: _173.CoinIDAminoMsg): _173.CoinID;
                    fromProtoMsg(message: _173.CoinIDProtoMsg): _173.CoinID;
                    toProto(message: _173.CoinID): Uint8Array;
                    toProtoMsg(message: _173.CoinID): _173.CoinIDProtoMsg;
                };
                ClassificationID: {
                    encode(message: _172.ClassificationID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.ClassificationID;
                    fromJSON(object: any): _172.ClassificationID;
                    toJSON(message: _172.ClassificationID): unknown;
                    fromPartial(object: Partial<_172.ClassificationID>): _172.ClassificationID;
                    fromAmino(object: _172.ClassificationIDAmino): _172.ClassificationID;
                    toAmino(message: _172.ClassificationID): _172.ClassificationIDAmino;
                    fromAminoMsg(object: _172.ClassificationIDAminoMsg): _172.ClassificationID;
                    fromProtoMsg(message: _172.ClassificationIDProtoMsg): _172.ClassificationID;
                    toProto(message: _172.ClassificationID): Uint8Array;
                    toProtoMsg(message: _172.ClassificationID): _172.ClassificationIDProtoMsg;
                };
                AssetID: {
                    encode(message: _171.AssetID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.AssetID;
                    fromJSON(object: any): _171.AssetID;
                    toJSON(message: _171.AssetID): unknown;
                    fromPartial(object: Partial<_171.AssetID>): _171.AssetID;
                    fromAmino(object: _171.AssetIDAmino): _171.AssetID;
                    toAmino(message: _171.AssetID): _171.AssetIDAmino;
                    fromAminoMsg(object: _171.AssetIDAminoMsg): _171.AssetID;
                    fromProtoMsg(message: _171.AssetIDProtoMsg): _171.AssetID;
                    toProto(message: _171.AssetID): Uint8Array;
                    toProtoMsg(message: _171.AssetID): _171.AssetIDProtoMsg;
                };
                AnyOwnableID: {
                    encode(message: _170.AnyOwnableID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.AnyOwnableID;
                    fromJSON(object: any): _170.AnyOwnableID;
                    toJSON(message: _170.AnyOwnableID): unknown;
                    fromPartial(object: Partial<_170.AnyOwnableID>): _170.AnyOwnableID;
                    fromAmino(object: _170.AnyOwnableIDAmino): _170.AnyOwnableID;
                    toAmino(message: _170.AnyOwnableID): _170.AnyOwnableIDAmino;
                    fromAminoMsg(object: _170.AnyOwnableIDAminoMsg): _170.AnyOwnableID;
                    fromProtoMsg(message: _170.AnyOwnableIDProtoMsg): _170.AnyOwnableID;
                    toProto(message: _170.AnyOwnableID): Uint8Array;
                    toProtoMsg(message: _170.AnyOwnableID): _170.AnyOwnableIDProtoMsg;
                };
                AnyID: {
                    encode(message: _169.AnyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.AnyID;
                    fromJSON(object: any): _169.AnyID;
                    toJSON(message: _169.AnyID): unknown;
                    fromPartial(object: Partial<_169.AnyID>): _169.AnyID;
                    fromAmino(object: _169.AnyIDAmino): _169.AnyID;
                    toAmino(message: _169.AnyID): _169.AnyIDAmino;
                    fromAminoMsg(object: _169.AnyIDAminoMsg): _169.AnyID;
                    fromProtoMsg(message: _169.AnyIDProtoMsg): _169.AnyID;
                    toProto(message: _169.AnyID): Uint8Array;
                    toProtoMsg(message: _169.AnyID): _169.AnyIDProtoMsg;
                };
            };
        }
        namespace lists {
            const base: {
                PropertyList: {
                    encode(message: _183.PropertyList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.PropertyList;
                    fromJSON(object: any): _183.PropertyList;
                    toJSON(message: _183.PropertyList): unknown;
                    fromPartial(object: Partial<_183.PropertyList>): _183.PropertyList;
                    fromAmino(object: _183.PropertyListAmino): _183.PropertyList;
                    toAmino(message: _183.PropertyList): _183.PropertyListAmino;
                    fromAminoMsg(object: _183.PropertyListAminoMsg): _183.PropertyList;
                    fromProtoMsg(message: _183.PropertyListProtoMsg): _183.PropertyList;
                    toProto(message: _183.PropertyList): Uint8Array;
                    toProtoMsg(message: _183.PropertyList): _183.PropertyListProtoMsg;
                };
                IDList: {
                    encode(message: _182.IDList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.IDList;
                    fromJSON(object: any): _182.IDList;
                    toJSON(message: _182.IDList): unknown;
                    fromPartial(object: Partial<_182.IDList>): _182.IDList;
                    fromAmino(object: _182.IDListAmino): _182.IDList;
                    toAmino(message: _182.IDList): _182.IDListAmino;
                    fromAminoMsg(object: _182.IDListAminoMsg): _182.IDList;
                    fromProtoMsg(message: _182.IDListProtoMsg): _182.IDList;
                    toProto(message: _182.IDList): Uint8Array;
                    toProtoMsg(message: _182.IDList): _182.IDListProtoMsg;
                };
            };
        }
        namespace parameters {
            const base: {
                Parameter: {
                    encode(message: _185.Parameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.Parameter;
                    fromJSON(object: any): _185.Parameter;
                    toJSON(message: _185.Parameter): unknown;
                    fromPartial(object: Partial<_185.Parameter>): _185.Parameter;
                    fromAmino(object: _185.ParameterAmino): _185.Parameter;
                    toAmino(message: _185.Parameter): _185.ParameterAmino;
                    fromAminoMsg(object: _185.ParameterAminoMsg): _185.Parameter;
                    fromProtoMsg(message: _185.ParameterProtoMsg): _185.Parameter;
                    toProto(message: _185.Parameter): Uint8Array;
                    toProtoMsg(message: _185.Parameter): _185.ParameterProtoMsg;
                };
                ParameterList: {
                    encode(message: _184.ParameterList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ParameterList;
                    fromJSON(object: any): _184.ParameterList;
                    toJSON(message: _184.ParameterList): unknown;
                    fromPartial(object: Partial<_184.ParameterList>): _184.ParameterList;
                    fromAmino(object: _184.ParameterListAmino): _184.ParameterList;
                    toAmino(message: _184.ParameterList): _184.ParameterListAmino;
                    fromAminoMsg(object: _184.ParameterListAminoMsg): _184.ParameterList;
                    fromProtoMsg(message: _184.ParameterListProtoMsg): _184.ParameterList;
                    toProto(message: _184.ParameterList): Uint8Array;
                    toProtoMsg(message: _184.ParameterList): _184.ParameterListProtoMsg;
                };
            };
        }
        namespace properties {
            const base: {
                MetaProperty: {
                    encode(message: _188.MetaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.MetaProperty;
                    fromJSON(object: any): _188.MetaProperty;
                    toJSON(message: _188.MetaProperty): unknown;
                    fromPartial(object: Partial<_188.MetaProperty>): _188.MetaProperty;
                    fromAmino(object: _188.MetaPropertyAmino): _188.MetaProperty;
                    toAmino(message: _188.MetaProperty): _188.MetaPropertyAmino;
                    fromAminoMsg(object: _188.MetaPropertyAminoMsg): _188.MetaProperty;
                    fromProtoMsg(message: _188.MetaPropertyProtoMsg): _188.MetaProperty;
                    toProto(message: _188.MetaProperty): Uint8Array;
                    toProtoMsg(message: _188.MetaProperty): _188.MetaPropertyProtoMsg;
                };
                MesaProperty: {
                    encode(message: _187.MesaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.MesaProperty;
                    fromJSON(object: any): _187.MesaProperty;
                    toJSON(message: _187.MesaProperty): unknown;
                    fromPartial(object: Partial<_187.MesaProperty>): _187.MesaProperty;
                    fromAmino(object: _187.MesaPropertyAmino): _187.MesaProperty;
                    toAmino(message: _187.MesaProperty): _187.MesaPropertyAmino;
                    fromAminoMsg(object: _187.MesaPropertyAminoMsg): _187.MesaProperty;
                    fromProtoMsg(message: _187.MesaPropertyProtoMsg): _187.MesaProperty;
                    toProto(message: _187.MesaProperty): Uint8Array;
                    toProtoMsg(message: _187.MesaProperty): _187.MesaPropertyProtoMsg;
                };
                AnyProperty: {
                    encode(message: _186.AnyProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.AnyProperty;
                    fromJSON(object: any): _186.AnyProperty;
                    toJSON(message: _186.AnyProperty): unknown;
                    fromPartial(object: Partial<_186.AnyProperty>): _186.AnyProperty;
                    fromAmino(object: _186.AnyPropertyAmino): _186.AnyProperty;
                    toAmino(message: _186.AnyProperty): _186.AnyPropertyAmino;
                    fromAminoMsg(object: _186.AnyPropertyAminoMsg): _186.AnyProperty;
                    fromProtoMsg(message: _186.AnyPropertyProtoMsg): _186.AnyProperty;
                    toProto(message: _186.AnyProperty): Uint8Array;
                    toProtoMsg(message: _186.AnyProperty): _186.AnyPropertyProtoMsg;
                };
            };
        }
        namespace qualified {
            const base: {
                Mutables: {
                    encode(message: _190.Mutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.Mutables;
                    fromJSON(object: any): _190.Mutables;
                    toJSON(message: _190.Mutables): unknown;
                    fromPartial(object: Partial<_190.Mutables>): _190.Mutables;
                    fromAmino(object: _190.MutablesAmino): _190.Mutables;
                    toAmino(message: _190.Mutables): _190.MutablesAmino;
                    fromAminoMsg(object: _190.MutablesAminoMsg): _190.Mutables;
                    fromProtoMsg(message: _190.MutablesProtoMsg): _190.Mutables;
                    toProto(message: _190.Mutables): Uint8Array;
                    toProtoMsg(message: _190.Mutables): _190.MutablesProtoMsg;
                };
                Immutables: {
                    encode(message: _189.Immutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.Immutables;
                    fromJSON(object: any): _189.Immutables;
                    toJSON(message: _189.Immutables): unknown;
                    fromPartial(object: Partial<_189.Immutables>): _189.Immutables;
                    fromAmino(object: _189.ImmutablesAmino): _189.Immutables;
                    toAmino(message: _189.Immutables): _189.ImmutablesAmino;
                    fromAminoMsg(object: _189.ImmutablesAminoMsg): _189.Immutables;
                    fromProtoMsg(message: _189.ImmutablesProtoMsg): _189.Immutables;
                    toProto(message: _189.Immutables): Uint8Array;
                    toProtoMsg(message: _189.Immutables): _189.ImmutablesProtoMsg;
                };
            };
        }
        namespace types {
            const base: {
                Split: {
                    encode(message: _192.Split, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.Split;
                    fromJSON(object: any): _192.Split;
                    toJSON(message: _192.Split): unknown;
                    fromPartial(object: Partial<_192.Split>): _192.Split;
                    fromAmino(object: _192.SplitAmino): _192.Split;
                    toAmino(message: _192.Split): _192.SplitAmino;
                    fromAminoMsg(object: _192.SplitAminoMsg): _192.Split;
                    fromProtoMsg(message: _192.SplitProtoMsg): _192.Split;
                    toProto(message: _192.Split): Uint8Array;
                    toProtoMsg(message: _192.Split): _192.SplitProtoMsg;
                };
                Height: {
                    encode(message: _191.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.Height;
                    fromJSON(object: any): _191.Height;
                    toJSON(message: _191.Height): unknown;
                    fromPartial(object: Partial<_191.Height>): _191.Height;
                    fromAmino(object: _191.HeightAmino): _191.Height;
                    toAmino(message: _191.Height): _191.HeightAmino;
                    fromAminoMsg(object: _191.HeightAminoMsg): _191.Height;
                    fromProtoMsg(message: _191.HeightProtoMsg): _191.Height;
                    toProto(message: _191.Height): Uint8Array;
                    toProtoMsg(message: _191.Height): _191.HeightProtoMsg;
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
                            burn: _376.MsgClientImpl;
                            define: _377.MsgClientImpl;
                            deputize: _378.MsgClientImpl;
                            mint: _379.MsgClientImpl;
                            mutate: _380.MsgClientImpl;
                            renumerate: _381.MsgClientImpl;
                            revoke: _382.MsgClientImpl;
                        };
                    };
                    identities: {
                        transactions: {
                            define: _383.MsgClientImpl;
                            deputize: _384.MsgClientImpl;
                            issue: _385.MsgClientImpl;
                            nub: _386.MsgClientImpl;
                            provision: _387.MsgClientImpl;
                            quash: _388.MsgClientImpl;
                            revoke: _389.MsgClientImpl;
                            unprovision: _390.MsgClientImpl;
                            mutate: _391.MsgClientImpl;
                        };
                    };
                    metas: {
                        transactions: {
                            reveal: _392.MsgClientImpl;
                        };
                    };
                    orders: {
                        transactions: {
                            cancel: _393.MsgClientImpl;
                            define: _394.MsgClientImpl;
                            deputize: _395.MsgClientImpl;
                            immediate: _396.MsgClientImpl;
                            make: _397.MsgClientImpl;
                            modify: _398.MsgClientImpl;
                            revoke: _399.MsgClientImpl;
                            take: _400.MsgClientImpl;
                        };
                    };
                    splits: {
                        transactions: {
                            send: _401.MsgClientImpl;
                            unwrap: _402.MsgClientImpl;
                            wrap: _403.MsgClientImpl;
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
                                handle(request: _35.QueryRequest): Promise<_36.QueryResponse>;
                            };
                            classifications: {
                                handle(request: _38.QueryRequest): Promise<_39.QueryResponse>;
                            };
                        };
                    };
                    identities: {
                        queries: {
                            identities: {
                                handle(request: _45.QueryRequest): Promise<_46.QueryResponse>;
                            };
                            identity: {
                                handle(request: _48.QueryRequest): Promise<_49.QueryResponse>;
                            };
                        };
                    };
                    maintainers: {
                        queries: {
                            maintainer: {
                                handle(request: _82.QueryRequest): Promise<_83.QueryResponse>;
                            };
                            maintainers: {
                                handle(request: _85.QueryRequest): Promise<_86.QueryResponse>;
                            };
                        };
                    };
                    metas: {
                        queries: {
                            meta: {
                                handle(request: _92.QueryRequest): Promise<_93.QueryResponse>;
                            };
                            metas: {
                                handle(request: _95.QueryRequest): Promise<_96.QueryResponse>;
                            };
                        };
                    };
                    orders: {
                        queries: {
                            order: {
                                handle(request: _105.QueryRequest): Promise<_106.QueryResponse>;
                            };
                            orders: {
                                handle(request: _108.QueryRequest): Promise<_109.QueryResponse>;
                            };
                        };
                    };
                    splits: {
                        queries: {
                            ownable: {
                                handle(request: _139.QueryRequest): Promise<_140.QueryResponse>;
                            };
                            split: {
                                handle(request: _142.QueryRequest): Promise<_143.QueryResponse>;
                            };
                            splits: {
                                handle(request: _145.QueryRequest): Promise<_146.QueryResponse>;
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
