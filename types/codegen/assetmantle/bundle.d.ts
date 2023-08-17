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
import * as _32 from "../assets/transactions/send/message";
import * as _34 from "../assets/transactions/send/transaction_response";
import * as _35 from "../assets/transactions/unwrap/message";
import * as _37 from "../assets/transactions/unwrap/transaction_response";
import * as _38 from "../assets/transactions/wrap/message";
import * as _40 from "../assets/transactions/wrap/transaction_response";
import * as _41 from "../classifications/genesis/genesis";
import * as _42 from "../classifications/key/key";
import * as _43 from "../classifications/mappable/mappable";
import * as _44 from "../classifications/queries/classification/query_request";
import * as _45 from "../classifications/queries/classification/query_response";
import * as _47 from "../classifications/queries/classifications/query_request";
import * as _48 from "../classifications/queries/classifications/query_response";
import * as _50 from "../classifications/record/record";
import * as _51 from "../identities/genesis/genesis";
import * as _52 from "../identities/key/key";
import * as _53 from "../identities/mappable/mappable";
import * as _54 from "../identities/queries/identities/query_request";
import * as _55 from "../identities/queries/identities/query_response";
import * as _57 from "../identities/queries/identity/query_request";
import * as _58 from "../identities/queries/identity/query_response";
import * as _60 from "../identities/record/record";
import * as _61 from "../identities/transactions/define/message";
import * as _63 from "../identities/transactions/define/transaction_response";
import * as _64 from "../identities/transactions/deputize/message";
import * as _66 from "../identities/transactions/deputize/transaction_response";
import * as _67 from "../identities/transactions/issue/message";
import * as _69 from "../identities/transactions/issue/transaction_response";
import * as _70 from "../identities/transactions/name/message";
import * as _72 from "../identities/transactions/name/transaction_response";
import * as _73 from "../identities/transactions/provision/message";
import * as _75 from "../identities/transactions/provision/transaction_response";
import * as _76 from "../identities/transactions/quash/message";
import * as _78 from "../identities/transactions/quash/transaction_response";
import * as _79 from "../identities/transactions/revoke/message";
import * as _81 from "../identities/transactions/revoke/transaction_response";
import * as _82 from "../identities/transactions/unprovision/message";
import * as _84 from "../identities/transactions/unprovision/transaction_response";
import * as _85 from "../identities/transactions/update/message";
import * as _87 from "../identities/transactions/update/transaction_response";
import * as _88 from "../maintainers/genesis/genesis";
import * as _89 from "../maintainers/key/key";
import * as _90 from "../maintainers/mappable/mappable";
import * as _91 from "../maintainers/queries/maintainer/query_request";
import * as _92 from "../maintainers/queries/maintainer/query_response";
import * as _94 from "../maintainers/queries/maintainers/query_request";
import * as _95 from "../maintainers/queries/maintainers/query_response";
import * as _97 from "../maintainers/record/record";
import * as _98 from "../metas/genesis/genesis";
import * as _99 from "../metas/key/key";
import * as _100 from "../metas/mappable/mappable";
import * as _101 from "../metas/queries/meta/query_request";
import * as _102 from "../metas/queries/meta/query_response";
import * as _104 from "../metas/queries/metas/query_request";
import * as _105 from "../metas/queries/metas/query_response";
import * as _107 from "../metas/record/record";
import * as _108 from "../metas/transactions/reveal/message";
import * as _110 from "../metas/transactions/reveal/transaction_response";
import * as _111 from "../orders/genesis/genesis";
import * as _112 from "../orders/key/key";
import * as _113 from "../orders/mappable/mappable";
import * as _114 from "../orders/queries/order/query_request";
import * as _115 from "../orders/queries/order/query_response";
import * as _117 from "../orders/queries/orders/query_request";
import * as _118 from "../orders/queries/orders/query_response";
import * as _120 from "../orders/record/record";
import * as _121 from "../orders/transactions/cancel/message";
import * as _123 from "../orders/transactions/cancel/transaction_response";
import * as _124 from "../orders/transactions/define/message";
import * as _126 from "../orders/transactions/define/transaction_response";
import * as _127 from "../orders/transactions/deputize/message";
import * as _129 from "../orders/transactions/deputize/transaction_response";
import * as _130 from "../orders/transactions/get/message";
import * as _132 from "../orders/transactions/get/transaction_response";
import * as _133 from "../orders/transactions/immediate/message";
import * as _135 from "../orders/transactions/immediate/transaction_response";
import * as _136 from "../orders/transactions/make/message";
import * as _138 from "../orders/transactions/make/transaction_response";
import * as _139 from "../orders/transactions/modify/message";
import * as _141 from "../orders/transactions/modify/transaction_response";
import * as _142 from "../orders/transactions/put/message";
import * as _144 from "../orders/transactions/put/transaction_response";
import * as _145 from "../orders/transactions/revoke/message";
import * as _147 from "../orders/transactions/revoke/transaction_response";
import * as _148 from "../orders/transactions/take/message";
import * as _150 from "../orders/transactions/take/transaction_response";
import * as _151 from "../splits/genesis/genesis";
import * as _152 from "../splits/key/key";
import * as _153 from "../splits/mappable/mappable";
import * as _154 from "../splits/queries/balances/query_request";
import * as _155 from "../splits/queries/balances/query_response";
import * as _157 from "../splits/queries/split/query_request";
import * as _158 from "../splits/queries/split/query_response";
import * as _160 from "../splits/queries/splits/query_request";
import * as _161 from "../splits/queries/splits/query_response";
import * as _163 from "../splits/queries/supply/query_request";
import * as _164 from "../splits/queries/supply/query_response";
import * as _166 from "../splits/record/record";
import * as _167 from "../data/base/acc_address_data";
import * as _168 from "../data/base/any_data";
import * as _169 from "../data/base/any_listable_data";
import * as _170 from "../data/base/boolean_data";
import * as _171 from "../data/base/dec_data";
import * as _172 from "../data/base/height_data";
import * as _173 from "../data/base/id_data";
import * as _174 from "../data/base/linked_data";
import * as _175 from "../data/base/list_data";
import * as _176 from "../data/base/number_data";
import * as _177 from "../data/base/string_data";
import * as _178 from "../documents/base/document";
import * as _179 from "../ids/base/any_id";
import * as _180 from "../ids/base/asset_id";
import * as _181 from "../ids/base/classification_id";
import * as _182 from "../ids/base/data_id";
import * as _183 from "../ids/base/hash_id";
import * as _184 from "../ids/base/identity_id";
import * as _185 from "../ids/base/maintainer_id";
import * as _186 from "../ids/base/order_id";
import * as _187 from "../ids/base/property_id";
import * as _188 from "../ids/base/split_id";
import * as _189 from "../ids/base/string_id";
import * as _190 from "../lists/base/id_list";
import * as _191 from "../lists/base/property_list";
import * as _192 from "../lists/base/parameter_list";
import * as _193 from "../parameters/base/parameter";
import * as _194 from "../properties/base/any_property";
import * as _195 from "../properties/base/mesa_property";
import * as _196 from "../properties/base/meta_property";
import * as _197 from "../qualified/base/immutables";
import * as _198 from "../qualified/base/mutables";
import * as _199 from "../types/base/height";
import * as _200 from "../types/base/split";
import * as _373 from "../assets/queries/asset/service.rpc.Query";
import * as _374 from "../assets/queries/assets/service.rpc.Query";
import * as _375 from "../classifications/queries/classification/service.rpc.Query";
import * as _376 from "../classifications/queries/classifications/service.rpc.Query";
import * as _377 from "../identities/queries/identities/service.rpc.Query";
import * as _378 from "../identities/queries/identity/service.rpc.Query";
import * as _379 from "../maintainers/queries/maintainer/service.rpc.Query";
import * as _380 from "../maintainers/queries/maintainers/service.rpc.Query";
import * as _381 from "../metas/queries/meta/service.rpc.Query";
import * as _382 from "../metas/queries/metas/service.rpc.Query";
import * as _383 from "../orders/queries/order/service.rpc.Query";
import * as _384 from "../orders/queries/orders/service.rpc.Query";
import * as _385 from "../splits/queries/balances/service.rpc.Query";
import * as _386 from "../splits/queries/split/service.rpc.Query";
import * as _387 from "../splits/queries/splits/service.rpc.Query";
import * as _388 from "../splits/queries/supply/service.rpc.Query";
import * as _389 from "../assets/transactions/burn/service.rpc.msg";
import * as _390 from "../assets/transactions/define/service.rpc.msg";
import * as _391 from "../assets/transactions/deputize/service.rpc.msg";
import * as _392 from "../assets/transactions/mint/service.rpc.msg";
import * as _393 from "../assets/transactions/mutate/service.rpc.msg";
import * as _394 from "../assets/transactions/renumerate/service.rpc.msg";
import * as _395 from "../assets/transactions/revoke/service.rpc.msg";
import * as _396 from "../assets/transactions/send/service.rpc.msg";
import * as _397 from "../assets/transactions/unwrap/service.rpc.msg";
import * as _398 from "../assets/transactions/wrap/service.rpc.msg";
import * as _399 from "../identities/transactions/define/service.rpc.msg";
import * as _400 from "../identities/transactions/deputize/service.rpc.msg";
import * as _401 from "../identities/transactions/issue/service.rpc.msg";
import * as _402 from "../identities/transactions/name/service.rpc.msg";
import * as _403 from "../identities/transactions/provision/service.rpc.msg";
import * as _404 from "../identities/transactions/quash/service.rpc.msg";
import * as _405 from "../identities/transactions/revoke/service.rpc.msg";
import * as _406 from "../identities/transactions/unprovision/service.rpc.msg";
import * as _407 from "../identities/transactions/update/service.rpc.msg";
import * as _408 from "../metas/transactions/reveal/service.rpc.msg";
import * as _409 from "../orders/transactions/cancel/service.rpc.msg";
import * as _410 from "../orders/transactions/define/service.rpc.msg";
import * as _411 from "../orders/transactions/deputize/service.rpc.msg";
import * as _412 from "../orders/transactions/get/service.rpc.msg";
import * as _413 from "../orders/transactions/immediate/service.rpc.msg";
import * as _414 from "../orders/transactions/make/service.rpc.msg";
import * as _415 from "../orders/transactions/modify/service.rpc.msg";
import * as _416 from "../orders/transactions/put/service.rpc.msg";
import * as _417 from "../orders/transactions/revoke/service.rpc.msg";
import * as _418 from "../orders/transactions/take/service.rpc.msg";
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
                    QueryClientImpl: typeof _373.QueryClientImpl;
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
                    QueryClientImpl: typeof _374.QueryClientImpl;
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
                    MsgClientImpl: typeof _389.MsgClientImpl;
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
                    MsgClientImpl: typeof _390.MsgClientImpl;
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
                    MsgClientImpl: typeof _391.MsgClientImpl;
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
                    MsgClientImpl: typeof _392.MsgClientImpl;
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
                    MsgClientImpl: typeof _393.MsgClientImpl;
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
                    MsgClientImpl: typeof _394.MsgClientImpl;
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
                    MsgClientImpl: typeof _395.MsgClientImpl;
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
                const send: {
                    MsgClientImpl: typeof _396.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _32.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _32.Message): {
                                typeUrl: string;
                                value: _32.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _32.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _32.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _32.Message): {
                                typeUrl: string;
                                value: _32.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.send.Message": {
                            aminoType: string;
                            toAmino: (message: _32.Message) => _32.MessageAmino;
                            fromAmino: (object: _32.MessageAmino) => _32.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _34.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _34.TransactionResponse;
                        fromJSON(_: any): _34.TransactionResponse;
                        toJSON(_: _34.TransactionResponse): unknown;
                        fromPartial(_: Partial<_34.TransactionResponse>): _34.TransactionResponse;
                        fromAmino(_: _34.TransactionResponseAmino): _34.TransactionResponse;
                        toAmino(_: _34.TransactionResponse): _34.TransactionResponseAmino;
                        fromAminoMsg(object: _34.TransactionResponseAminoMsg): _34.TransactionResponse;
                        fromProtoMsg(message: _34.TransactionResponseProtoMsg): _34.TransactionResponse;
                        toProto(message: _34.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _34.TransactionResponse): _34.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _32.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _32.Message;
                        fromJSON(object: any): _32.Message;
                        toJSON(message: _32.Message): unknown;
                        fromPartial(object: Partial<_32.Message>): _32.Message;
                        fromAmino(object: _32.MessageAmino): _32.Message;
                        toAmino(message: _32.Message): _32.MessageAmino;
                        fromAminoMsg(object: _32.MessageAminoMsg): _32.Message;
                        fromProtoMsg(message: _32.MessageProtoMsg): _32.Message;
                        toProto(message: _32.Message): Uint8Array;
                        toProtoMsg(message: _32.Message): _32.MessageProtoMsg;
                    };
                };
                const unwrap: {
                    MsgClientImpl: typeof _397.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _35.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _35.Message): {
                                typeUrl: string;
                                value: _35.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _35.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _35.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _35.Message): {
                                typeUrl: string;
                                value: _35.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.unwrap.Message": {
                            aminoType: string;
                            toAmino: (message: _35.Message) => _35.MessageAmino;
                            fromAmino: (object: _35.MessageAmino) => _35.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _37.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _37.TransactionResponse;
                        fromJSON(_: any): _37.TransactionResponse;
                        toJSON(_: _37.TransactionResponse): unknown;
                        fromPartial(_: Partial<_37.TransactionResponse>): _37.TransactionResponse;
                        fromAmino(_: _37.TransactionResponseAmino): _37.TransactionResponse;
                        toAmino(_: _37.TransactionResponse): _37.TransactionResponseAmino;
                        fromAminoMsg(object: _37.TransactionResponseAminoMsg): _37.TransactionResponse;
                        fromProtoMsg(message: _37.TransactionResponseProtoMsg): _37.TransactionResponse;
                        toProto(message: _37.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _37.TransactionResponse): _37.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _35.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _35.Message;
                        fromJSON(object: any): _35.Message;
                        toJSON(message: _35.Message): unknown;
                        fromPartial(object: Partial<_35.Message>): _35.Message;
                        fromAmino(object: _35.MessageAmino): _35.Message;
                        toAmino(message: _35.Message): _35.MessageAmino;
                        fromAminoMsg(object: _35.MessageAminoMsg): _35.Message;
                        fromProtoMsg(message: _35.MessageProtoMsg): _35.Message;
                        toProto(message: _35.Message): Uint8Array;
                        toProtoMsg(message: _35.Message): _35.MessageProtoMsg;
                    };
                };
                const wrap: {
                    MsgClientImpl: typeof _398.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _38.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _38.Message): {
                                typeUrl: string;
                                value: _38.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _38.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _38.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _38.Message): {
                                typeUrl: string;
                                value: _38.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.assets.transactions.wrap.Message": {
                            aminoType: string;
                            toAmino: (message: _38.Message) => _38.MessageAmino;
                            fromAmino: (object: _38.MessageAmino) => _38.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _40.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _40.TransactionResponse;
                        fromJSON(_: any): _40.TransactionResponse;
                        toJSON(_: _40.TransactionResponse): unknown;
                        fromPartial(_: Partial<_40.TransactionResponse>): _40.TransactionResponse;
                        fromAmino(_: _40.TransactionResponseAmino): _40.TransactionResponse;
                        toAmino(_: _40.TransactionResponse): _40.TransactionResponseAmino;
                        fromAminoMsg(object: _40.TransactionResponseAminoMsg): _40.TransactionResponse;
                        fromProtoMsg(message: _40.TransactionResponseProtoMsg): _40.TransactionResponse;
                        toProto(message: _40.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _40.TransactionResponse): _40.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _38.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _38.Message;
                        fromJSON(object: any): _38.Message;
                        toJSON(message: _38.Message): unknown;
                        fromPartial(object: Partial<_38.Message>): _38.Message;
                        fromAmino(object: _38.MessageAmino): _38.Message;
                        toAmino(message: _38.Message): _38.MessageAmino;
                        fromAminoMsg(object: _38.MessageAminoMsg): _38.Message;
                        fromProtoMsg(message: _38.MessageProtoMsg): _38.Message;
                        toProto(message: _38.Message): Uint8Array;
                        toProtoMsg(message: _38.Message): _38.MessageProtoMsg;
                    };
                };
            }
        }
        namespace classifications {
            const genesis: {
                Genesis: {
                    encode(message: _41.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _41.Genesis;
                    fromJSON(object: any): _41.Genesis;
                    toJSON(message: _41.Genesis): unknown;
                    fromPartial(object: Partial<_41.Genesis>): _41.Genesis;
                    fromAmino(object: _41.GenesisAmino): _41.Genesis;
                    toAmino(message: _41.Genesis): _41.GenesisAmino;
                    fromAminoMsg(object: _41.GenesisAminoMsg): _41.Genesis;
                    fromProtoMsg(message: _41.GenesisProtoMsg): _41.Genesis;
                    toProto(message: _41.Genesis): Uint8Array;
                    toProtoMsg(message: _41.Genesis): _41.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _42.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _42.Key;
                    fromJSON(object: any): _42.Key;
                    toJSON(message: _42.Key): unknown;
                    fromPartial(object: Partial<_42.Key>): _42.Key;
                    fromAmino(object: _42.KeyAmino): _42.Key;
                    toAmino(message: _42.Key): _42.KeyAmino;
                    fromAminoMsg(object: _42.KeyAminoMsg): _42.Key;
                    fromProtoMsg(message: _42.KeyProtoMsg): _42.Key;
                    toProto(message: _42.Key): Uint8Array;
                    toProtoMsg(message: _42.Key): _42.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _43.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _43.Mappable;
                    fromJSON(object: any): _43.Mappable;
                    toJSON(message: _43.Mappable): unknown;
                    fromPartial(object: Partial<_43.Mappable>): _43.Mappable;
                    fromAmino(object: _43.MappableAmino): _43.Mappable;
                    toAmino(message: _43.Mappable): _43.MappableAmino;
                    fromAminoMsg(object: _43.MappableAminoMsg): _43.Mappable;
                    fromProtoMsg(message: _43.MappableProtoMsg): _43.Mappable;
                    toProto(message: _43.Mappable): Uint8Array;
                    toProtoMsg(message: _43.Mappable): _43.MappableProtoMsg;
                };
            };
            namespace queries {
                const classification: {
                    QueryClientImpl: typeof _375.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _44.QueryRequest): Promise<_45.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _45.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _45.QueryResponse;
                        fromJSON(object: any): _45.QueryResponse;
                        toJSON(message: _45.QueryResponse): unknown;
                        fromPartial(object: Partial<_45.QueryResponse>): _45.QueryResponse;
                        fromAmino(object: _45.QueryResponseAmino): _45.QueryResponse;
                        toAmino(message: _45.QueryResponse): _45.QueryResponseAmino;
                        fromAminoMsg(object: _45.QueryResponseAminoMsg): _45.QueryResponse;
                        fromProtoMsg(message: _45.QueryResponseProtoMsg): _45.QueryResponse;
                        toProto(message: _45.QueryResponse): Uint8Array;
                        toProtoMsg(message: _45.QueryResponse): _45.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _44.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _44.QueryRequest;
                        fromJSON(object: any): _44.QueryRequest;
                        toJSON(message: _44.QueryRequest): unknown;
                        fromPartial(object: Partial<_44.QueryRequest>): _44.QueryRequest;
                        fromAmino(object: _44.QueryRequestAmino): _44.QueryRequest;
                        toAmino(message: _44.QueryRequest): _44.QueryRequestAmino;
                        fromAminoMsg(object: _44.QueryRequestAminoMsg): _44.QueryRequest;
                        fromProtoMsg(message: _44.QueryRequestProtoMsg): _44.QueryRequest;
                        toProto(message: _44.QueryRequest): Uint8Array;
                        toProtoMsg(message: _44.QueryRequest): _44.QueryRequestProtoMsg;
                    };
                };
                const classifications: {
                    QueryClientImpl: typeof _376.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _47.QueryRequest): Promise<_48.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _48.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _48.QueryResponse;
                        fromJSON(object: any): _48.QueryResponse;
                        toJSON(message: _48.QueryResponse): unknown;
                        fromPartial(object: Partial<_48.QueryResponse>): _48.QueryResponse;
                        fromAmino(object: _48.QueryResponseAmino): _48.QueryResponse;
                        toAmino(message: _48.QueryResponse): _48.QueryResponseAmino;
                        fromAminoMsg(object: _48.QueryResponseAminoMsg): _48.QueryResponse;
                        fromProtoMsg(message: _48.QueryResponseProtoMsg): _48.QueryResponse;
                        toProto(message: _48.QueryResponse): Uint8Array;
                        toProtoMsg(message: _48.QueryResponse): _48.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _47.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _47.QueryRequest;
                        fromJSON(object: any): _47.QueryRequest;
                        toJSON(message: _47.QueryRequest): unknown;
                        fromPartial(object: Partial<_47.QueryRequest>): _47.QueryRequest;
                        fromAmino(object: _47.QueryRequestAmino): _47.QueryRequest;
                        toAmino(message: _47.QueryRequest): _47.QueryRequestAmino;
                        fromAminoMsg(object: _47.QueryRequestAminoMsg): _47.QueryRequest;
                        fromProtoMsg(message: _47.QueryRequestProtoMsg): _47.QueryRequest;
                        toProto(message: _47.QueryRequest): Uint8Array;
                        toProtoMsg(message: _47.QueryRequest): _47.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _50.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _50.Record;
                    fromJSON(object: any): _50.Record;
                    toJSON(message: _50.Record): unknown;
                    fromPartial(object: Partial<_50.Record>): _50.Record;
                    fromAmino(object: _50.RecordAmino): _50.Record;
                    toAmino(message: _50.Record): _50.RecordAmino;
                    fromAminoMsg(object: _50.RecordAminoMsg): _50.Record;
                    fromProtoMsg(message: _50.RecordProtoMsg): _50.Record;
                    toProto(message: _50.Record): Uint8Array;
                    toProtoMsg(message: _50.Record): _50.RecordProtoMsg;
                };
            };
        }
        namespace identities {
            const genesis: {
                Genesis: {
                    encode(message: _51.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _51.Genesis;
                    fromJSON(object: any): _51.Genesis;
                    toJSON(message: _51.Genesis): unknown;
                    fromPartial(object: Partial<_51.Genesis>): _51.Genesis;
                    fromAmino(object: _51.GenesisAmino): _51.Genesis;
                    toAmino(message: _51.Genesis): _51.GenesisAmino;
                    fromAminoMsg(object: _51.GenesisAminoMsg): _51.Genesis;
                    fromProtoMsg(message: _51.GenesisProtoMsg): _51.Genesis;
                    toProto(message: _51.Genesis): Uint8Array;
                    toProtoMsg(message: _51.Genesis): _51.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _52.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _52.Key;
                    fromJSON(object: any): _52.Key;
                    toJSON(message: _52.Key): unknown;
                    fromPartial(object: Partial<_52.Key>): _52.Key;
                    fromAmino(object: _52.KeyAmino): _52.Key;
                    toAmino(message: _52.Key): _52.KeyAmino;
                    fromAminoMsg(object: _52.KeyAminoMsg): _52.Key;
                    fromProtoMsg(message: _52.KeyProtoMsg): _52.Key;
                    toProto(message: _52.Key): Uint8Array;
                    toProtoMsg(message: _52.Key): _52.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _53.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _53.Mappable;
                    fromJSON(object: any): _53.Mappable;
                    toJSON(message: _53.Mappable): unknown;
                    fromPartial(object: Partial<_53.Mappable>): _53.Mappable;
                    fromAmino(object: _53.MappableAmino): _53.Mappable;
                    toAmino(message: _53.Mappable): _53.MappableAmino;
                    fromAminoMsg(object: _53.MappableAminoMsg): _53.Mappable;
                    fromProtoMsg(message: _53.MappableProtoMsg): _53.Mappable;
                    toProto(message: _53.Mappable): Uint8Array;
                    toProtoMsg(message: _53.Mappable): _53.MappableProtoMsg;
                };
            };
            namespace queries {
                const identities: {
                    QueryClientImpl: typeof _377.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _54.QueryRequest): Promise<_55.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _55.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _55.QueryResponse;
                        fromJSON(object: any): _55.QueryResponse;
                        toJSON(message: _55.QueryResponse): unknown;
                        fromPartial(object: Partial<_55.QueryResponse>): _55.QueryResponse;
                        fromAmino(object: _55.QueryResponseAmino): _55.QueryResponse;
                        toAmino(message: _55.QueryResponse): _55.QueryResponseAmino;
                        fromAminoMsg(object: _55.QueryResponseAminoMsg): _55.QueryResponse;
                        fromProtoMsg(message: _55.QueryResponseProtoMsg): _55.QueryResponse;
                        toProto(message: _55.QueryResponse): Uint8Array;
                        toProtoMsg(message: _55.QueryResponse): _55.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _54.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _54.QueryRequest;
                        fromJSON(object: any): _54.QueryRequest;
                        toJSON(message: _54.QueryRequest): unknown;
                        fromPartial(object: Partial<_54.QueryRequest>): _54.QueryRequest;
                        fromAmino(object: _54.QueryRequestAmino): _54.QueryRequest;
                        toAmino(message: _54.QueryRequest): _54.QueryRequestAmino;
                        fromAminoMsg(object: _54.QueryRequestAminoMsg): _54.QueryRequest;
                        fromProtoMsg(message: _54.QueryRequestProtoMsg): _54.QueryRequest;
                        toProto(message: _54.QueryRequest): Uint8Array;
                        toProtoMsg(message: _54.QueryRequest): _54.QueryRequestProtoMsg;
                    };
                };
                const identity: {
                    QueryClientImpl: typeof _378.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _57.QueryRequest): Promise<_58.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _58.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _58.QueryResponse;
                        fromJSON(object: any): _58.QueryResponse;
                        toJSON(message: _58.QueryResponse): unknown;
                        fromPartial(object: Partial<_58.QueryResponse>): _58.QueryResponse;
                        fromAmino(object: _58.QueryResponseAmino): _58.QueryResponse;
                        toAmino(message: _58.QueryResponse): _58.QueryResponseAmino;
                        fromAminoMsg(object: _58.QueryResponseAminoMsg): _58.QueryResponse;
                        fromProtoMsg(message: _58.QueryResponseProtoMsg): _58.QueryResponse;
                        toProto(message: _58.QueryResponse): Uint8Array;
                        toProtoMsg(message: _58.QueryResponse): _58.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _57.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _57.QueryRequest;
                        fromJSON(object: any): _57.QueryRequest;
                        toJSON(message: _57.QueryRequest): unknown;
                        fromPartial(object: Partial<_57.QueryRequest>): _57.QueryRequest;
                        fromAmino(object: _57.QueryRequestAmino): _57.QueryRequest;
                        toAmino(message: _57.QueryRequest): _57.QueryRequestAmino;
                        fromAminoMsg(object: _57.QueryRequestAminoMsg): _57.QueryRequest;
                        fromProtoMsg(message: _57.QueryRequestProtoMsg): _57.QueryRequest;
                        toProto(message: _57.QueryRequest): Uint8Array;
                        toProtoMsg(message: _57.QueryRequest): _57.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _60.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _60.Record;
                    fromJSON(object: any): _60.Record;
                    toJSON(message: _60.Record): unknown;
                    fromPartial(object: Partial<_60.Record>): _60.Record;
                    fromAmino(object: _60.RecordAmino): _60.Record;
                    toAmino(message: _60.Record): _60.RecordAmino;
                    fromAminoMsg(object: _60.RecordAminoMsg): _60.Record;
                    fromProtoMsg(message: _60.RecordProtoMsg): _60.Record;
                    toProto(message: _60.Record): Uint8Array;
                    toProtoMsg(message: _60.Record): _60.RecordProtoMsg;
                };
            };
            namespace transactions {
                const define: {
                    MsgClientImpl: typeof _399.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.define.Message": {
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
                const deputize: {
                    MsgClientImpl: typeof _400.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.deputize.Message": {
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
                const issue: {
                    MsgClientImpl: typeof _401.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.issue.Message": {
                            aminoType: string;
                            toAmino: (message: _67.Message) => _67.MessageAmino;
                            fromAmino: (object: _67.MessageAmino) => _67.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _69.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _69.TransactionResponse;
                        fromJSON(object: any): _69.TransactionResponse;
                        toJSON(message: _69.TransactionResponse): unknown;
                        fromPartial(object: Partial<_69.TransactionResponse>): _69.TransactionResponse;
                        fromAmino(object: _69.TransactionResponseAmino): _69.TransactionResponse;
                        toAmino(message: _69.TransactionResponse): _69.TransactionResponseAmino;
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
                const name: {
                    MsgClientImpl: typeof _402.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.name.Message": {
                            aminoType: string;
                            toAmino: (message: _70.Message) => _70.MessageAmino;
                            fromAmino: (object: _70.MessageAmino) => _70.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _72.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _72.TransactionResponse;
                        fromJSON(object: any): _72.TransactionResponse;
                        toJSON(message: _72.TransactionResponse): unknown;
                        fromPartial(object: Partial<_72.TransactionResponse>): _72.TransactionResponse;
                        fromAmino(object: _72.TransactionResponseAmino): _72.TransactionResponse;
                        toAmino(message: _72.TransactionResponse): _72.TransactionResponseAmino;
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
                const provision: {
                    MsgClientImpl: typeof _403.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.provision.Message": {
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
                const quash: {
                    MsgClientImpl: typeof _404.MsgClientImpl;
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
                        "/assetmantle.modules.identities.transactions.quash.Message": {
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
                const revoke: {
                    MsgClientImpl: typeof _405.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _79.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _79.Message): {
                                typeUrl: string;
                                value: _79.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _79.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _79.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _79.Message): {
                                typeUrl: string;
                                value: _79.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.revoke.Message": {
                            aminoType: string;
                            toAmino: (message: _79.Message) => _79.MessageAmino;
                            fromAmino: (object: _79.MessageAmino) => _79.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _81.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _81.TransactionResponse;
                        fromJSON(_: any): _81.TransactionResponse;
                        toJSON(_: _81.TransactionResponse): unknown;
                        fromPartial(_: Partial<_81.TransactionResponse>): _81.TransactionResponse;
                        fromAmino(_: _81.TransactionResponseAmino): _81.TransactionResponse;
                        toAmino(_: _81.TransactionResponse): _81.TransactionResponseAmino;
                        fromAminoMsg(object: _81.TransactionResponseAminoMsg): _81.TransactionResponse;
                        fromProtoMsg(message: _81.TransactionResponseProtoMsg): _81.TransactionResponse;
                        toProto(message: _81.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _81.TransactionResponse): _81.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _79.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _79.Message;
                        fromJSON(object: any): _79.Message;
                        toJSON(message: _79.Message): unknown;
                        fromPartial(object: Partial<_79.Message>): _79.Message;
                        fromAmino(object: _79.MessageAmino): _79.Message;
                        toAmino(message: _79.Message): _79.MessageAmino;
                        fromAminoMsg(object: _79.MessageAminoMsg): _79.Message;
                        fromProtoMsg(message: _79.MessageProtoMsg): _79.Message;
                        toProto(message: _79.Message): Uint8Array;
                        toProtoMsg(message: _79.Message): _79.MessageProtoMsg;
                    };
                };
                const unprovision: {
                    MsgClientImpl: typeof _406.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _82.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _82.Message): {
                                typeUrl: string;
                                value: _82.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _82.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _82.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _82.Message): {
                                typeUrl: string;
                                value: _82.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.unprovision.Message": {
                            aminoType: string;
                            toAmino: (message: _82.Message) => _82.MessageAmino;
                            fromAmino: (object: _82.MessageAmino) => _82.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _84.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _84.TransactionResponse;
                        fromJSON(_: any): _84.TransactionResponse;
                        toJSON(_: _84.TransactionResponse): unknown;
                        fromPartial(_: Partial<_84.TransactionResponse>): _84.TransactionResponse;
                        fromAmino(_: _84.TransactionResponseAmino): _84.TransactionResponse;
                        toAmino(_: _84.TransactionResponse): _84.TransactionResponseAmino;
                        fromAminoMsg(object: _84.TransactionResponseAminoMsg): _84.TransactionResponse;
                        fromProtoMsg(message: _84.TransactionResponseProtoMsg): _84.TransactionResponse;
                        toProto(message: _84.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _84.TransactionResponse): _84.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _82.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _82.Message;
                        fromJSON(object: any): _82.Message;
                        toJSON(message: _82.Message): unknown;
                        fromPartial(object: Partial<_82.Message>): _82.Message;
                        fromAmino(object: _82.MessageAmino): _82.Message;
                        toAmino(message: _82.Message): _82.MessageAmino;
                        fromAminoMsg(object: _82.MessageAminoMsg): _82.Message;
                        fromProtoMsg(message: _82.MessageProtoMsg): _82.Message;
                        toProto(message: _82.Message): Uint8Array;
                        toProtoMsg(message: _82.Message): _82.MessageProtoMsg;
                    };
                };
                const mutate: {
                    MsgClientImpl: typeof _407.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _85.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _85.Message): {
                                typeUrl: string;
                                value: _85.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _85.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _85.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _85.Message): {
                                typeUrl: string;
                                value: _85.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.identities.transactions.mutate.Message": {
                            aminoType: string;
                            toAmino: (message: _85.Message) => _85.MessageAmino;
                            fromAmino: (object: _85.MessageAmino) => _85.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _87.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _87.TransactionResponse;
                        fromJSON(_: any): _87.TransactionResponse;
                        toJSON(_: _87.TransactionResponse): unknown;
                        fromPartial(_: Partial<_87.TransactionResponse>): _87.TransactionResponse;
                        fromAmino(_: _87.TransactionResponseAmino): _87.TransactionResponse;
                        toAmino(_: _87.TransactionResponse): _87.TransactionResponseAmino;
                        fromAminoMsg(object: _87.TransactionResponseAminoMsg): _87.TransactionResponse;
                        fromProtoMsg(message: _87.TransactionResponseProtoMsg): _87.TransactionResponse;
                        toProto(message: _87.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _87.TransactionResponse): _87.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _85.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _85.Message;
                        fromJSON(object: any): _85.Message;
                        toJSON(message: _85.Message): unknown;
                        fromPartial(object: Partial<_85.Message>): _85.Message;
                        fromAmino(object: _85.MessageAmino): _85.Message;
                        toAmino(message: _85.Message): _85.MessageAmino;
                        fromAminoMsg(object: _85.MessageAminoMsg): _85.Message;
                        fromProtoMsg(message: _85.MessageProtoMsg): _85.Message;
                        toProto(message: _85.Message): Uint8Array;
                        toProtoMsg(message: _85.Message): _85.MessageProtoMsg;
                    };
                };
            }
        }
        namespace maintainers {
            const genesis: {
                Genesis: {
                    encode(message: _88.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _88.Genesis;
                    fromJSON(object: any): _88.Genesis;
                    toJSON(message: _88.Genesis): unknown;
                    fromPartial(object: Partial<_88.Genesis>): _88.Genesis;
                    fromAmino(object: _88.GenesisAmino): _88.Genesis;
                    toAmino(message: _88.Genesis): _88.GenesisAmino;
                    fromAminoMsg(object: _88.GenesisAminoMsg): _88.Genesis;
                    fromProtoMsg(message: _88.GenesisProtoMsg): _88.Genesis;
                    toProto(message: _88.Genesis): Uint8Array;
                    toProtoMsg(message: _88.Genesis): _88.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _89.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _89.Key;
                    fromJSON(object: any): _89.Key;
                    toJSON(message: _89.Key): unknown;
                    fromPartial(object: Partial<_89.Key>): _89.Key;
                    fromAmino(object: _89.KeyAmino): _89.Key;
                    toAmino(message: _89.Key): _89.KeyAmino;
                    fromAminoMsg(object: _89.KeyAminoMsg): _89.Key;
                    fromProtoMsg(message: _89.KeyProtoMsg): _89.Key;
                    toProto(message: _89.Key): Uint8Array;
                    toProtoMsg(message: _89.Key): _89.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _90.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _90.Mappable;
                    fromJSON(object: any): _90.Mappable;
                    toJSON(message: _90.Mappable): unknown;
                    fromPartial(object: Partial<_90.Mappable>): _90.Mappable;
                    fromAmino(object: _90.MappableAmino): _90.Mappable;
                    toAmino(message: _90.Mappable): _90.MappableAmino;
                    fromAminoMsg(object: _90.MappableAminoMsg): _90.Mappable;
                    fromProtoMsg(message: _90.MappableProtoMsg): _90.Mappable;
                    toProto(message: _90.Mappable): Uint8Array;
                    toProtoMsg(message: _90.Mappable): _90.MappableProtoMsg;
                };
            };
            namespace queries {
                const maintainer: {
                    QueryClientImpl: typeof _379.QueryClientImpl;
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
                const maintainers: {
                    QueryClientImpl: typeof _380.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _94.QueryRequest): Promise<_95.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _95.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _95.QueryResponse;
                        fromJSON(object: any): _95.QueryResponse;
                        toJSON(message: _95.QueryResponse): unknown;
                        fromPartial(object: Partial<_95.QueryResponse>): _95.QueryResponse;
                        fromAmino(object: _95.QueryResponseAmino): _95.QueryResponse;
                        toAmino(message: _95.QueryResponse): _95.QueryResponseAmino;
                        fromAminoMsg(object: _95.QueryResponseAminoMsg): _95.QueryResponse;
                        fromProtoMsg(message: _95.QueryResponseProtoMsg): _95.QueryResponse;
                        toProto(message: _95.QueryResponse): Uint8Array;
                        toProtoMsg(message: _95.QueryResponse): _95.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _94.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _94.QueryRequest;
                        fromJSON(object: any): _94.QueryRequest;
                        toJSON(message: _94.QueryRequest): unknown;
                        fromPartial(object: Partial<_94.QueryRequest>): _94.QueryRequest;
                        fromAmino(object: _94.QueryRequestAmino): _94.QueryRequest;
                        toAmino(message: _94.QueryRequest): _94.QueryRequestAmino;
                        fromAminoMsg(object: _94.QueryRequestAminoMsg): _94.QueryRequest;
                        fromProtoMsg(message: _94.QueryRequestProtoMsg): _94.QueryRequest;
                        toProto(message: _94.QueryRequest): Uint8Array;
                        toProtoMsg(message: _94.QueryRequest): _94.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _97.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _97.Record;
                    fromJSON(object: any): _97.Record;
                    toJSON(message: _97.Record): unknown;
                    fromPartial(object: Partial<_97.Record>): _97.Record;
                    fromAmino(object: _97.RecordAmino): _97.Record;
                    toAmino(message: _97.Record): _97.RecordAmino;
                    fromAminoMsg(object: _97.RecordAminoMsg): _97.Record;
                    fromProtoMsg(message: _97.RecordProtoMsg): _97.Record;
                    toProto(message: _97.Record): Uint8Array;
                    toProtoMsg(message: _97.Record): _97.RecordProtoMsg;
                };
            };
        }
        namespace metas {
            const genesis: {
                Genesis: {
                    encode(message: _98.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _98.Genesis;
                    fromJSON(object: any): _98.Genesis;
                    toJSON(message: _98.Genesis): unknown;
                    fromPartial(object: Partial<_98.Genesis>): _98.Genesis;
                    fromAmino(object: _98.GenesisAmino): _98.Genesis;
                    toAmino(message: _98.Genesis): _98.GenesisAmino;
                    fromAminoMsg(object: _98.GenesisAminoMsg): _98.Genesis;
                    fromProtoMsg(message: _98.GenesisProtoMsg): _98.Genesis;
                    toProto(message: _98.Genesis): Uint8Array;
                    toProtoMsg(message: _98.Genesis): _98.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _99.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _99.Key;
                    fromJSON(object: any): _99.Key;
                    toJSON(message: _99.Key): unknown;
                    fromPartial(object: Partial<_99.Key>): _99.Key;
                    fromAmino(object: _99.KeyAmino): _99.Key;
                    toAmino(message: _99.Key): _99.KeyAmino;
                    fromAminoMsg(object: _99.KeyAminoMsg): _99.Key;
                    fromProtoMsg(message: _99.KeyProtoMsg): _99.Key;
                    toProto(message: _99.Key): Uint8Array;
                    toProtoMsg(message: _99.Key): _99.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _100.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _100.Mappable;
                    fromJSON(object: any): _100.Mappable;
                    toJSON(message: _100.Mappable): unknown;
                    fromPartial(object: Partial<_100.Mappable>): _100.Mappable;
                    fromAmino(object: _100.MappableAmino): _100.Mappable;
                    toAmino(message: _100.Mappable): _100.MappableAmino;
                    fromAminoMsg(object: _100.MappableAminoMsg): _100.Mappable;
                    fromProtoMsg(message: _100.MappableProtoMsg): _100.Mappable;
                    toProto(message: _100.Mappable): Uint8Array;
                    toProtoMsg(message: _100.Mappable): _100.MappableProtoMsg;
                };
            };
            namespace queries {
                const meta: {
                    QueryClientImpl: typeof _381.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _101.QueryRequest): Promise<_102.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _102.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _102.QueryResponse;
                        fromJSON(object: any): _102.QueryResponse;
                        toJSON(message: _102.QueryResponse): unknown;
                        fromPartial(object: Partial<_102.QueryResponse>): _102.QueryResponse;
                        fromAmino(object: _102.QueryResponseAmino): _102.QueryResponse;
                        toAmino(message: _102.QueryResponse): _102.QueryResponseAmino;
                        fromAminoMsg(object: _102.QueryResponseAminoMsg): _102.QueryResponse;
                        fromProtoMsg(message: _102.QueryResponseProtoMsg): _102.QueryResponse;
                        toProto(message: _102.QueryResponse): Uint8Array;
                        toProtoMsg(message: _102.QueryResponse): _102.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _101.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _101.QueryRequest;
                        fromJSON(object: any): _101.QueryRequest;
                        toJSON(message: _101.QueryRequest): unknown;
                        fromPartial(object: Partial<_101.QueryRequest>): _101.QueryRequest;
                        fromAmino(object: _101.QueryRequestAmino): _101.QueryRequest;
                        toAmino(message: _101.QueryRequest): _101.QueryRequestAmino;
                        fromAminoMsg(object: _101.QueryRequestAminoMsg): _101.QueryRequest;
                        fromProtoMsg(message: _101.QueryRequestProtoMsg): _101.QueryRequest;
                        toProto(message: _101.QueryRequest): Uint8Array;
                        toProtoMsg(message: _101.QueryRequest): _101.QueryRequestProtoMsg;
                    };
                };
                const metas: {
                    QueryClientImpl: typeof _382.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _104.QueryRequest): Promise<_105.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _105.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _105.QueryResponse;
                        fromJSON(object: any): _105.QueryResponse;
                        toJSON(message: _105.QueryResponse): unknown;
                        fromPartial(object: Partial<_105.QueryResponse>): _105.QueryResponse;
                        fromAmino(object: _105.QueryResponseAmino): _105.QueryResponse;
                        toAmino(message: _105.QueryResponse): _105.QueryResponseAmino;
                        fromAminoMsg(object: _105.QueryResponseAminoMsg): _105.QueryResponse;
                        fromProtoMsg(message: _105.QueryResponseProtoMsg): _105.QueryResponse;
                        toProto(message: _105.QueryResponse): Uint8Array;
                        toProtoMsg(message: _105.QueryResponse): _105.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _104.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _104.QueryRequest;
                        fromJSON(object: any): _104.QueryRequest;
                        toJSON(message: _104.QueryRequest): unknown;
                        fromPartial(object: Partial<_104.QueryRequest>): _104.QueryRequest;
                        fromAmino(object: _104.QueryRequestAmino): _104.QueryRequest;
                        toAmino(message: _104.QueryRequest): _104.QueryRequestAmino;
                        fromAminoMsg(object: _104.QueryRequestAminoMsg): _104.QueryRequest;
                        fromProtoMsg(message: _104.QueryRequestProtoMsg): _104.QueryRequest;
                        toProto(message: _104.QueryRequest): Uint8Array;
                        toProtoMsg(message: _104.QueryRequest): _104.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _107.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _107.Record;
                    fromJSON(object: any): _107.Record;
                    toJSON(message: _107.Record): unknown;
                    fromPartial(object: Partial<_107.Record>): _107.Record;
                    fromAmino(object: _107.RecordAmino): _107.Record;
                    toAmino(message: _107.Record): _107.RecordAmino;
                    fromAminoMsg(object: _107.RecordAminoMsg): _107.Record;
                    fromProtoMsg(message: _107.RecordProtoMsg): _107.Record;
                    toProto(message: _107.Record): Uint8Array;
                    toProtoMsg(message: _107.Record): _107.RecordProtoMsg;
                };
            };
            namespace transactions {
                const reveal: {
                    MsgClientImpl: typeof _408.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _108.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _108.Message): {
                                typeUrl: string;
                                value: _108.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _108.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _108.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _108.Message): {
                                typeUrl: string;
                                value: _108.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.metas.transactions.reveal.Message": {
                            aminoType: string;
                            toAmino: (message: _108.Message) => _108.MessageAmino;
                            fromAmino: (object: _108.MessageAmino) => _108.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _110.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _110.TransactionResponse;
                        fromJSON(_: any): _110.TransactionResponse;
                        toJSON(_: _110.TransactionResponse): unknown;
                        fromPartial(_: Partial<_110.TransactionResponse>): _110.TransactionResponse;
                        fromAmino(_: _110.TransactionResponseAmino): _110.TransactionResponse;
                        toAmino(_: _110.TransactionResponse): _110.TransactionResponseAmino;
                        fromAminoMsg(object: _110.TransactionResponseAminoMsg): _110.TransactionResponse;
                        fromProtoMsg(message: _110.TransactionResponseProtoMsg): _110.TransactionResponse;
                        toProto(message: _110.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _110.TransactionResponse): _110.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _108.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _108.Message;
                        fromJSON(object: any): _108.Message;
                        toJSON(message: _108.Message): unknown;
                        fromPartial(object: Partial<_108.Message>): _108.Message;
                        fromAmino(object: _108.MessageAmino): _108.Message;
                        toAmino(message: _108.Message): _108.MessageAmino;
                        fromAminoMsg(object: _108.MessageAminoMsg): _108.Message;
                        fromProtoMsg(message: _108.MessageProtoMsg): _108.Message;
                        toProto(message: _108.Message): Uint8Array;
                        toProtoMsg(message: _108.Message): _108.MessageProtoMsg;
                    };
                };
            }
        }
        namespace orders {
            const genesis: {
                Genesis: {
                    encode(message: _111.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _111.Genesis;
                    fromJSON(object: any): _111.Genesis;
                    toJSON(message: _111.Genesis): unknown;
                    fromPartial(object: Partial<_111.Genesis>): _111.Genesis;
                    fromAmino(object: _111.GenesisAmino): _111.Genesis;
                    toAmino(message: _111.Genesis): _111.GenesisAmino;
                    fromAminoMsg(object: _111.GenesisAminoMsg): _111.Genesis;
                    fromProtoMsg(message: _111.GenesisProtoMsg): _111.Genesis;
                    toProto(message: _111.Genesis): Uint8Array;
                    toProtoMsg(message: _111.Genesis): _111.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _112.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _112.Key;
                    fromJSON(object: any): _112.Key;
                    toJSON(message: _112.Key): unknown;
                    fromPartial(object: Partial<_112.Key>): _112.Key;
                    fromAmino(object: _112.KeyAmino): _112.Key;
                    toAmino(message: _112.Key): _112.KeyAmino;
                    fromAminoMsg(object: _112.KeyAminoMsg): _112.Key;
                    fromProtoMsg(message: _112.KeyProtoMsg): _112.Key;
                    toProto(message: _112.Key): Uint8Array;
                    toProtoMsg(message: _112.Key): _112.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _113.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _113.Mappable;
                    fromJSON(object: any): _113.Mappable;
                    toJSON(message: _113.Mappable): unknown;
                    fromPartial(object: Partial<_113.Mappable>): _113.Mappable;
                    fromAmino(object: _113.MappableAmino): _113.Mappable;
                    toAmino(message: _113.Mappable): _113.MappableAmino;
                    fromAminoMsg(object: _113.MappableAminoMsg): _113.Mappable;
                    fromProtoMsg(message: _113.MappableProtoMsg): _113.Mappable;
                    toProto(message: _113.Mappable): Uint8Array;
                    toProtoMsg(message: _113.Mappable): _113.MappableProtoMsg;
                };
            };
            namespace queries {
                const order: {
                    QueryClientImpl: typeof _383.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _114.QueryRequest): Promise<_115.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _115.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _115.QueryResponse;
                        fromJSON(object: any): _115.QueryResponse;
                        toJSON(message: _115.QueryResponse): unknown;
                        fromPartial(object: Partial<_115.QueryResponse>): _115.QueryResponse;
                        fromAmino(object: _115.QueryResponseAmino): _115.QueryResponse;
                        toAmino(message: _115.QueryResponse): _115.QueryResponseAmino;
                        fromAminoMsg(object: _115.QueryResponseAminoMsg): _115.QueryResponse;
                        fromProtoMsg(message: _115.QueryResponseProtoMsg): _115.QueryResponse;
                        toProto(message: _115.QueryResponse): Uint8Array;
                        toProtoMsg(message: _115.QueryResponse): _115.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _114.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _114.QueryRequest;
                        fromJSON(object: any): _114.QueryRequest;
                        toJSON(message: _114.QueryRequest): unknown;
                        fromPartial(object: Partial<_114.QueryRequest>): _114.QueryRequest;
                        fromAmino(object: _114.QueryRequestAmino): _114.QueryRequest;
                        toAmino(message: _114.QueryRequest): _114.QueryRequestAmino;
                        fromAminoMsg(object: _114.QueryRequestAminoMsg): _114.QueryRequest;
                        fromProtoMsg(message: _114.QueryRequestProtoMsg): _114.QueryRequest;
                        toProto(message: _114.QueryRequest): Uint8Array;
                        toProtoMsg(message: _114.QueryRequest): _114.QueryRequestProtoMsg;
                    };
                };
                const orders: {
                    QueryClientImpl: typeof _384.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _117.QueryRequest): Promise<_118.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _118.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _118.QueryResponse;
                        fromJSON(object: any): _118.QueryResponse;
                        toJSON(message: _118.QueryResponse): unknown;
                        fromPartial(object: Partial<_118.QueryResponse>): _118.QueryResponse;
                        fromAmino(object: _118.QueryResponseAmino): _118.QueryResponse;
                        toAmino(message: _118.QueryResponse): _118.QueryResponseAmino;
                        fromAminoMsg(object: _118.QueryResponseAminoMsg): _118.QueryResponse;
                        fromProtoMsg(message: _118.QueryResponseProtoMsg): _118.QueryResponse;
                        toProto(message: _118.QueryResponse): Uint8Array;
                        toProtoMsg(message: _118.QueryResponse): _118.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _117.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _117.QueryRequest;
                        fromJSON(object: any): _117.QueryRequest;
                        toJSON(message: _117.QueryRequest): unknown;
                        fromPartial(object: Partial<_117.QueryRequest>): _117.QueryRequest;
                        fromAmino(object: _117.QueryRequestAmino): _117.QueryRequest;
                        toAmino(message: _117.QueryRequest): _117.QueryRequestAmino;
                        fromAminoMsg(object: _117.QueryRequestAminoMsg): _117.QueryRequest;
                        fromProtoMsg(message: _117.QueryRequestProtoMsg): _117.QueryRequest;
                        toProto(message: _117.QueryRequest): Uint8Array;
                        toProtoMsg(message: _117.QueryRequest): _117.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _120.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _120.Record;
                    fromJSON(object: any): _120.Record;
                    toJSON(message: _120.Record): unknown;
                    fromPartial(object: Partial<_120.Record>): _120.Record;
                    fromAmino(object: _120.RecordAmino): _120.Record;
                    toAmino(message: _120.Record): _120.RecordAmino;
                    fromAminoMsg(object: _120.RecordAminoMsg): _120.Record;
                    fromProtoMsg(message: _120.RecordProtoMsg): _120.Record;
                    toProto(message: _120.Record): Uint8Array;
                    toProtoMsg(message: _120.Record): _120.RecordProtoMsg;
                };
            };
            namespace transactions {
                const cancel: {
                    MsgClientImpl: typeof _409.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.cancel.Message": {
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
                const define: {
                    MsgClientImpl: typeof _410.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.define.Message": {
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
                const deputize: {
                    MsgClientImpl: typeof _411.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.deputize.Message": {
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
                const get: {
                    MsgClientImpl: typeof _412.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.get.Message": {
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
                const immediate: {
                    MsgClientImpl: typeof _413.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.immediate.Message": {
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
                const make: {
                    MsgClientImpl: typeof _414.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _136.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _136.Message): {
                                typeUrl: string;
                                value: _136.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _136.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _136.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _136.Message): {
                                typeUrl: string;
                                value: _136.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.make.Message": {
                            aminoType: string;
                            toAmino: (message: _136.Message) => _136.MessageAmino;
                            fromAmino: (object: _136.MessageAmino) => _136.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _138.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _138.TransactionResponse;
                        fromJSON(object: any): _138.TransactionResponse;
                        toJSON(message: _138.TransactionResponse): unknown;
                        fromPartial(object: Partial<_138.TransactionResponse>): _138.TransactionResponse;
                        fromAmino(object: _138.TransactionResponseAmino): _138.TransactionResponse;
                        toAmino(message: _138.TransactionResponse): _138.TransactionResponseAmino;
                        fromAminoMsg(object: _138.TransactionResponseAminoMsg): _138.TransactionResponse;
                        fromProtoMsg(message: _138.TransactionResponseProtoMsg): _138.TransactionResponse;
                        toProto(message: _138.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _138.TransactionResponse): _138.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _136.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _136.Message;
                        fromJSON(object: any): _136.Message;
                        toJSON(message: _136.Message): unknown;
                        fromPartial(object: Partial<_136.Message>): _136.Message;
                        fromAmino(object: _136.MessageAmino): _136.Message;
                        toAmino(message: _136.Message): _136.MessageAmino;
                        fromAminoMsg(object: _136.MessageAminoMsg): _136.Message;
                        fromProtoMsg(message: _136.MessageProtoMsg): _136.Message;
                        toProto(message: _136.Message): Uint8Array;
                        toProtoMsg(message: _136.Message): _136.MessageProtoMsg;
                    };
                };
                const modify: {
                    MsgClientImpl: typeof _415.MsgClientImpl;
                    registry: readonly [string, import("@cosmjs/proto-signing").GeneratedType][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            handle(value: _139.Message): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            handle(value: _139.Message): {
                                typeUrl: string;
                                value: _139.Message;
                            };
                        };
                        toJSON: {
                            handle(value: _139.Message): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            handle(value: any): {
                                typeUrl: string;
                                value: _139.Message;
                            };
                        };
                        fromPartial: {
                            handle(value: _139.Message): {
                                typeUrl: string;
                                value: _139.Message;
                            };
                        };
                    };
                    AminoConverter: {
                        "/assetmantle.modules.orders.transactions.modify.Message": {
                            aminoType: string;
                            toAmino: (message: _139.Message) => _139.MessageAmino;
                            fromAmino: (object: _139.MessageAmino) => _139.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _141.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _141.TransactionResponse;
                        fromJSON(_: any): _141.TransactionResponse;
                        toJSON(_: _141.TransactionResponse): unknown;
                        fromPartial(_: Partial<_141.TransactionResponse>): _141.TransactionResponse;
                        fromAmino(_: _141.TransactionResponseAmino): _141.TransactionResponse;
                        toAmino(_: _141.TransactionResponse): _141.TransactionResponseAmino;
                        fromAminoMsg(object: _141.TransactionResponseAminoMsg): _141.TransactionResponse;
                        fromProtoMsg(message: _141.TransactionResponseProtoMsg): _141.TransactionResponse;
                        toProto(message: _141.TransactionResponse): Uint8Array;
                        toProtoMsg(message: _141.TransactionResponse): _141.TransactionResponseProtoMsg;
                    };
                    Message: {
                        encode(message: _139.Message, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _139.Message;
                        fromJSON(object: any): _139.Message;
                        toJSON(message: _139.Message): unknown;
                        fromPartial(object: Partial<_139.Message>): _139.Message;
                        fromAmino(object: _139.MessageAmino): _139.Message;
                        toAmino(message: _139.Message): _139.MessageAmino;
                        fromAminoMsg(object: _139.MessageAminoMsg): _139.Message;
                        fromProtoMsg(message: _139.MessageProtoMsg): _139.Message;
                        toProto(message: _139.Message): Uint8Array;
                        toProtoMsg(message: _139.Message): _139.MessageProtoMsg;
                    };
                };
                const put: {
                    MsgClientImpl: typeof _416.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.put.Message": {
                            aminoType: string;
                            toAmino: (message: _142.Message) => _142.MessageAmino;
                            fromAmino: (object: _142.MessageAmino) => _142.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(message: _144.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _144.TransactionResponse;
                        fromJSON(object: any): _144.TransactionResponse;
                        toJSON(message: _144.TransactionResponse): unknown;
                        fromPartial(object: Partial<_144.TransactionResponse>): _144.TransactionResponse;
                        fromAmino(object: _144.TransactionResponseAmino): _144.TransactionResponse;
                        toAmino(message: _144.TransactionResponse): _144.TransactionResponseAmino;
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
                const revoke: {
                    MsgClientImpl: typeof _417.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.revoke.Message": {
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
                const take: {
                    MsgClientImpl: typeof _418.MsgClientImpl;
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
                        "/assetmantle.modules.orders.transactions.take.Message": {
                            aminoType: string;
                            toAmino: (message: _148.Message) => _148.MessageAmino;
                            fromAmino: (object: _148.MessageAmino) => _148.Message;
                        };
                    };
                    TransactionResponse: {
                        encode(_: _150.TransactionResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _150.TransactionResponse;
                        fromJSON(_: any): _150.TransactionResponse;
                        toJSON(_: _150.TransactionResponse): unknown;
                        fromPartial(_: Partial<_150.TransactionResponse>): _150.TransactionResponse;
                        fromAmino(_: _150.TransactionResponseAmino): _150.TransactionResponse;
                        toAmino(_: _150.TransactionResponse): _150.TransactionResponseAmino;
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
        namespace splits {
            const genesis: {
                Genesis: {
                    encode(message: _151.Genesis, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _151.Genesis;
                    fromJSON(object: any): _151.Genesis;
                    toJSON(message: _151.Genesis): unknown;
                    fromPartial(object: Partial<_151.Genesis>): _151.Genesis;
                    fromAmino(object: _151.GenesisAmino): _151.Genesis;
                    toAmino(message: _151.Genesis): _151.GenesisAmino;
                    fromAminoMsg(object: _151.GenesisAminoMsg): _151.Genesis;
                    fromProtoMsg(message: _151.GenesisProtoMsg): _151.Genesis;
                    toProto(message: _151.Genesis): Uint8Array;
                    toProtoMsg(message: _151.Genesis): _151.GenesisProtoMsg;
                };
            };
            const key: {
                Key: {
                    encode(message: _152.Key, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _152.Key;
                    fromJSON(object: any): _152.Key;
                    toJSON(message: _152.Key): unknown;
                    fromPartial(object: Partial<_152.Key>): _152.Key;
                    fromAmino(object: _152.KeyAmino): _152.Key;
                    toAmino(message: _152.Key): _152.KeyAmino;
                    fromAminoMsg(object: _152.KeyAminoMsg): _152.Key;
                    fromProtoMsg(message: _152.KeyProtoMsg): _152.Key;
                    toProto(message: _152.Key): Uint8Array;
                    toProtoMsg(message: _152.Key): _152.KeyProtoMsg;
                };
            };
            const mappable: {
                Mappable: {
                    encode(message: _153.Mappable, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _153.Mappable;
                    fromJSON(object: any): _153.Mappable;
                    toJSON(message: _153.Mappable): unknown;
                    fromPartial(object: Partial<_153.Mappable>): _153.Mappable;
                    fromAmino(object: _153.MappableAmino): _153.Mappable;
                    toAmino(message: _153.Mappable): _153.MappableAmino;
                    fromAminoMsg(object: _153.MappableAminoMsg): _153.Mappable;
                    fromProtoMsg(message: _153.MappableProtoMsg): _153.Mappable;
                    toProto(message: _153.Mappable): Uint8Array;
                    toProtoMsg(message: _153.Mappable): _153.MappableProtoMsg;
                };
            };
            namespace queries {
                const balances: {
                    QueryClientImpl: typeof _385.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _154.QueryRequest): Promise<_155.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _155.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _155.QueryResponse;
                        fromJSON(object: any): _155.QueryResponse;
                        toJSON(message: _155.QueryResponse): unknown;
                        fromPartial(object: Partial<_155.QueryResponse>): _155.QueryResponse;
                        fromAmino(object: _155.QueryResponseAmino): _155.QueryResponse;
                        toAmino(message: _155.QueryResponse): _155.QueryResponseAmino;
                        fromAminoMsg(object: _155.QueryResponseAminoMsg): _155.QueryResponse;
                        fromProtoMsg(message: _155.QueryResponseProtoMsg): _155.QueryResponse;
                        toProto(message: _155.QueryResponse): Uint8Array;
                        toProtoMsg(message: _155.QueryResponse): _155.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _154.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _154.QueryRequest;
                        fromJSON(object: any): _154.QueryRequest;
                        toJSON(message: _154.QueryRequest): unknown;
                        fromPartial(object: Partial<_154.QueryRequest>): _154.QueryRequest;
                        fromAmino(object: _154.QueryRequestAmino): _154.QueryRequest;
                        toAmino(message: _154.QueryRequest): _154.QueryRequestAmino;
                        fromAminoMsg(object: _154.QueryRequestAminoMsg): _154.QueryRequest;
                        fromProtoMsg(message: _154.QueryRequestProtoMsg): _154.QueryRequest;
                        toProto(message: _154.QueryRequest): Uint8Array;
                        toProtoMsg(message: _154.QueryRequest): _154.QueryRequestProtoMsg;
                    };
                };
                const split: {
                    QueryClientImpl: typeof _386.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _157.QueryRequest): Promise<_158.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _158.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _158.QueryResponse;
                        fromJSON(object: any): _158.QueryResponse;
                        toJSON(message: _158.QueryResponse): unknown;
                        fromPartial(object: Partial<_158.QueryResponse>): _158.QueryResponse;
                        fromAmino(object: _158.QueryResponseAmino): _158.QueryResponse;
                        toAmino(message: _158.QueryResponse): _158.QueryResponseAmino;
                        fromAminoMsg(object: _158.QueryResponseAminoMsg): _158.QueryResponse;
                        fromProtoMsg(message: _158.QueryResponseProtoMsg): _158.QueryResponse;
                        toProto(message: _158.QueryResponse): Uint8Array;
                        toProtoMsg(message: _158.QueryResponse): _158.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _157.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _157.QueryRequest;
                        fromJSON(object: any): _157.QueryRequest;
                        toJSON(message: _157.QueryRequest): unknown;
                        fromPartial(object: Partial<_157.QueryRequest>): _157.QueryRequest;
                        fromAmino(object: _157.QueryRequestAmino): _157.QueryRequest;
                        toAmino(message: _157.QueryRequest): _157.QueryRequestAmino;
                        fromAminoMsg(object: _157.QueryRequestAminoMsg): _157.QueryRequest;
                        fromProtoMsg(message: _157.QueryRequestProtoMsg): _157.QueryRequest;
                        toProto(message: _157.QueryRequest): Uint8Array;
                        toProtoMsg(message: _157.QueryRequest): _157.QueryRequestProtoMsg;
                    };
                };
                const splits: {
                    QueryClientImpl: typeof _387.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _160.QueryRequest): Promise<_161.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _161.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _161.QueryResponse;
                        fromJSON(object: any): _161.QueryResponse;
                        toJSON(message: _161.QueryResponse): unknown;
                        fromPartial(object: Partial<_161.QueryResponse>): _161.QueryResponse;
                        fromAmino(object: _161.QueryResponseAmino): _161.QueryResponse;
                        toAmino(message: _161.QueryResponse): _161.QueryResponseAmino;
                        fromAminoMsg(object: _161.QueryResponseAminoMsg): _161.QueryResponse;
                        fromProtoMsg(message: _161.QueryResponseProtoMsg): _161.QueryResponse;
                        toProto(message: _161.QueryResponse): Uint8Array;
                        toProtoMsg(message: _161.QueryResponse): _161.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _160.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _160.QueryRequest;
                        fromJSON(object: any): _160.QueryRequest;
                        toJSON(message: _160.QueryRequest): unknown;
                        fromPartial(object: Partial<_160.QueryRequest>): _160.QueryRequest;
                        fromAmino(object: _160.QueryRequestAmino): _160.QueryRequest;
                        toAmino(message: _160.QueryRequest): _160.QueryRequestAmino;
                        fromAminoMsg(object: _160.QueryRequestAminoMsg): _160.QueryRequest;
                        fromProtoMsg(message: _160.QueryRequestProtoMsg): _160.QueryRequest;
                        toProto(message: _160.QueryRequest): Uint8Array;
                        toProtoMsg(message: _160.QueryRequest): _160.QueryRequestProtoMsg;
                    };
                };
                const supply: {
                    QueryClientImpl: typeof _388.QueryClientImpl;
                    createRpcQueryExtension: (base: import("@cosmjs/stargate").QueryClient) => {
                        handle(request: _163.QueryRequest): Promise<_164.QueryResponse>;
                    };
                    QueryResponse: {
                        encode(message: _164.QueryResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _164.QueryResponse;
                        fromJSON(object: any): _164.QueryResponse;
                        toJSON(message: _164.QueryResponse): unknown;
                        fromPartial(object: Partial<_164.QueryResponse>): _164.QueryResponse;
                        fromAmino(object: _164.QueryResponseAmino): _164.QueryResponse;
                        toAmino(message: _164.QueryResponse): _164.QueryResponseAmino;
                        fromAminoMsg(object: _164.QueryResponseAminoMsg): _164.QueryResponse;
                        fromProtoMsg(message: _164.QueryResponseProtoMsg): _164.QueryResponse;
                        toProto(message: _164.QueryResponse): Uint8Array;
                        toProtoMsg(message: _164.QueryResponse): _164.QueryResponseProtoMsg;
                    };
                    QueryRequest: {
                        encode(message: _163.QueryRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _163.QueryRequest;
                        fromJSON(object: any): _163.QueryRequest;
                        toJSON(message: _163.QueryRequest): unknown;
                        fromPartial(object: Partial<_163.QueryRequest>): _163.QueryRequest;
                        fromAmino(object: _163.QueryRequestAmino): _163.QueryRequest;
                        toAmino(message: _163.QueryRequest): _163.QueryRequestAmino;
                        fromAminoMsg(object: _163.QueryRequestAminoMsg): _163.QueryRequest;
                        fromProtoMsg(message: _163.QueryRequestProtoMsg): _163.QueryRequest;
                        toProto(message: _163.QueryRequest): Uint8Array;
                        toProtoMsg(message: _163.QueryRequest): _163.QueryRequestProtoMsg;
                    };
                };
            }
            const record: {
                Record: {
                    encode(message: _166.Record, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _166.Record;
                    fromJSON(object: any): _166.Record;
                    toJSON(message: _166.Record): unknown;
                    fromPartial(object: Partial<_166.Record>): _166.Record;
                    fromAmino(object: _166.RecordAmino): _166.Record;
                    toAmino(message: _166.Record): _166.RecordAmino;
                    fromAminoMsg(object: _166.RecordAminoMsg): _166.Record;
                    fromProtoMsg(message: _166.RecordProtoMsg): _166.Record;
                    toProto(message: _166.Record): Uint8Array;
                    toProtoMsg(message: _166.Record): _166.RecordProtoMsg;
                };
            };
        }
    }
    namespace schema {
        namespace data {
            const base: {
                StringData: {
                    encode(message: _177.StringData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _177.StringData;
                    fromJSON(object: any): _177.StringData;
                    toJSON(message: _177.StringData): unknown;
                    fromPartial(object: Partial<_177.StringData>): _177.StringData;
                    fromAmino(object: _177.StringDataAmino): _177.StringData;
                    toAmino(message: _177.StringData): _177.StringDataAmino;
                    fromAminoMsg(object: _177.StringDataAminoMsg): _177.StringData;
                    fromProtoMsg(message: _177.StringDataProtoMsg): _177.StringData;
                    toProto(message: _177.StringData): Uint8Array;
                    toProtoMsg(message: _177.StringData): _177.StringDataProtoMsg;
                };
                NumberData: {
                    encode(message: _176.NumberData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _176.NumberData;
                    fromJSON(object: any): _176.NumberData;
                    toJSON(message: _176.NumberData): unknown;
                    fromPartial(object: Partial<_176.NumberData>): _176.NumberData;
                    fromAmino(object: _176.NumberDataAmino): _176.NumberData;
                    toAmino(message: _176.NumberData): _176.NumberDataAmino;
                    fromAminoMsg(object: _176.NumberDataAminoMsg): _176.NumberData;
                    fromProtoMsg(message: _176.NumberDataProtoMsg): _176.NumberData;
                    toProto(message: _176.NumberData): Uint8Array;
                    toProtoMsg(message: _176.NumberData): _176.NumberDataProtoMsg;
                };
                ListData: {
                    encode(message: _175.ListData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _175.ListData;
                    fromJSON(object: any): _175.ListData;
                    toJSON(message: _175.ListData): unknown;
                    fromPartial(object: Partial<_175.ListData>): _175.ListData;
                    fromAmino(object: _175.ListDataAmino): _175.ListData;
                    toAmino(message: _175.ListData): _175.ListDataAmino;
                    fromAminoMsg(object: _175.ListDataAminoMsg): _175.ListData;
                    fromProtoMsg(message: _175.ListDataProtoMsg): _175.ListData;
                    toProto(message: _175.ListData): Uint8Array;
                    toProtoMsg(message: _175.ListData): _175.ListDataProtoMsg;
                };
                LinkedData: {
                    encode(message: _174.LinkedData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _174.LinkedData;
                    fromJSON(object: any): _174.LinkedData;
                    toJSON(message: _174.LinkedData): unknown;
                    fromPartial(object: Partial<_174.LinkedData>): _174.LinkedData;
                    fromAmino(object: _174.LinkedDataAmino): _174.LinkedData;
                    toAmino(message: _174.LinkedData): _174.LinkedDataAmino;
                    fromAminoMsg(object: _174.LinkedDataAminoMsg): _174.LinkedData;
                    fromProtoMsg(message: _174.LinkedDataProtoMsg): _174.LinkedData;
                    toProto(message: _174.LinkedData): Uint8Array;
                    toProtoMsg(message: _174.LinkedData): _174.LinkedDataProtoMsg;
                };
                IDData: {
                    encode(message: _173.IDData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _173.IDData;
                    fromJSON(object: any): _173.IDData;
                    toJSON(message: _173.IDData): unknown;
                    fromPartial(object: Partial<_173.IDData>): _173.IDData;
                    fromAmino(object: _173.IDDataAmino): _173.IDData;
                    toAmino(message: _173.IDData): _173.IDDataAmino;
                    fromAminoMsg(object: _173.IDDataAminoMsg): _173.IDData;
                    fromProtoMsg(message: _173.IDDataProtoMsg): _173.IDData;
                    toProto(message: _173.IDData): Uint8Array;
                    toProtoMsg(message: _173.IDData): _173.IDDataProtoMsg;
                };
                HeightData: {
                    encode(message: _172.HeightData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _172.HeightData;
                    fromJSON(object: any): _172.HeightData;
                    toJSON(message: _172.HeightData): unknown;
                    fromPartial(object: Partial<_172.HeightData>): _172.HeightData;
                    fromAmino(object: _172.HeightDataAmino): _172.HeightData;
                    toAmino(message: _172.HeightData): _172.HeightDataAmino;
                    fromAminoMsg(object: _172.HeightDataAminoMsg): _172.HeightData;
                    fromProtoMsg(message: _172.HeightDataProtoMsg): _172.HeightData;
                    toProto(message: _172.HeightData): Uint8Array;
                    toProtoMsg(message: _172.HeightData): _172.HeightDataProtoMsg;
                };
                DecData: {
                    encode(message: _171.DecData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _171.DecData;
                    fromJSON(object: any): _171.DecData;
                    toJSON(message: _171.DecData): unknown;
                    fromPartial(object: Partial<_171.DecData>): _171.DecData;
                    fromAmino(object: _171.DecDataAmino): _171.DecData;
                    toAmino(message: _171.DecData): _171.DecDataAmino;
                    fromAminoMsg(object: _171.DecDataAminoMsg): _171.DecData;
                    fromProtoMsg(message: _171.DecDataProtoMsg): _171.DecData;
                    toProto(message: _171.DecData): Uint8Array;
                    toProtoMsg(message: _171.DecData): _171.DecDataProtoMsg;
                };
                BooleanData: {
                    encode(message: _170.BooleanData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _170.BooleanData;
                    fromJSON(object: any): _170.BooleanData;
                    toJSON(message: _170.BooleanData): unknown;
                    fromPartial(object: Partial<_170.BooleanData>): _170.BooleanData;
                    fromAmino(object: _170.BooleanDataAmino): _170.BooleanData;
                    toAmino(message: _170.BooleanData): _170.BooleanDataAmino;
                    fromAminoMsg(object: _170.BooleanDataAminoMsg): _170.BooleanData;
                    fromProtoMsg(message: _170.BooleanDataProtoMsg): _170.BooleanData;
                    toProto(message: _170.BooleanData): Uint8Array;
                    toProtoMsg(message: _170.BooleanData): _170.BooleanDataProtoMsg;
                };
                AnyListableData: {
                    encode(message: _169.AnyListableData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _169.AnyListableData;
                    fromJSON(object: any): _169.AnyListableData;
                    toJSON(message: _169.AnyListableData): unknown;
                    fromPartial(object: Partial<_169.AnyListableData>): _169.AnyListableData;
                    fromAmino(object: _169.AnyListableDataAmino): _169.AnyListableData;
                    toAmino(message: _169.AnyListableData): _169.AnyListableDataAmino;
                    fromAminoMsg(object: _169.AnyListableDataAminoMsg): _169.AnyListableData;
                    fromProtoMsg(message: _169.AnyListableDataProtoMsg): _169.AnyListableData;
                    toProto(message: _169.AnyListableData): Uint8Array;
                    toProtoMsg(message: _169.AnyListableData): _169.AnyListableDataProtoMsg;
                };
                AnyData: {
                    encode(message: _168.AnyData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _168.AnyData;
                    fromJSON(object: any): _168.AnyData;
                    toJSON(message: _168.AnyData): unknown;
                    fromPartial(object: Partial<_168.AnyData>): _168.AnyData;
                    fromAmino(object: _168.AnyDataAmino): _168.AnyData;
                    toAmino(message: _168.AnyData): _168.AnyDataAmino;
                    fromAminoMsg(object: _168.AnyDataAminoMsg): _168.AnyData;
                    fromProtoMsg(message: _168.AnyDataProtoMsg): _168.AnyData;
                    toProto(message: _168.AnyData): Uint8Array;
                    toProtoMsg(message: _168.AnyData): _168.AnyDataProtoMsg;
                };
                AccAddressData: {
                    encode(message: _167.AccAddressData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _167.AccAddressData;
                    fromJSON(object: any): _167.AccAddressData;
                    toJSON(message: _167.AccAddressData): unknown;
                    fromPartial(object: Partial<_167.AccAddressData>): _167.AccAddressData;
                    fromAmino(object: _167.AccAddressDataAmino): _167.AccAddressData;
                    toAmino(message: _167.AccAddressData): _167.AccAddressDataAmino;
                    fromAminoMsg(object: _167.AccAddressDataAminoMsg): _167.AccAddressData;
                    fromProtoMsg(message: _167.AccAddressDataProtoMsg): _167.AccAddressData;
                    toProto(message: _167.AccAddressData): Uint8Array;
                    toProtoMsg(message: _167.AccAddressData): _167.AccAddressDataProtoMsg;
                };
            };
        }
        namespace documents {
            const base: {
                Document: {
                    encode(message: _178.Document, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _178.Document;
                    fromJSON(object: any): _178.Document;
                    toJSON(message: _178.Document): unknown;
                    fromPartial(object: Partial<_178.Document>): _178.Document;
                    fromAmino(object: _178.DocumentAmino): _178.Document;
                    toAmino(message: _178.Document): _178.DocumentAmino;
                    fromAminoMsg(object: _178.DocumentAminoMsg): _178.Document;
                    fromProtoMsg(message: _178.DocumentProtoMsg): _178.Document;
                    toProto(message: _178.Document): Uint8Array;
                    toProtoMsg(message: _178.Document): _178.DocumentProtoMsg;
                };
            };
        }
        namespace ids {
            const base: {
                StringID: {
                    encode(message: _189.StringID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _189.StringID;
                    fromJSON(object: any): _189.StringID;
                    toJSON(message: _189.StringID): unknown;
                    fromPartial(object: Partial<_189.StringID>): _189.StringID;
                    fromAmino(object: _189.StringIDAmino): _189.StringID;
                    toAmino(message: _189.StringID): _189.StringIDAmino;
                    fromAminoMsg(object: _189.StringIDAminoMsg): _189.StringID;
                    fromProtoMsg(message: _189.StringIDProtoMsg): _189.StringID;
                    toProto(message: _189.StringID): Uint8Array;
                    toProtoMsg(message: _189.StringID): _189.StringIDProtoMsg;
                };
                SplitID: {
                    encode(message: _188.SplitID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _188.SplitID;
                    fromJSON(object: any): _188.SplitID;
                    toJSON(message: _188.SplitID): unknown;
                    fromPartial(object: Partial<_188.SplitID>): _188.SplitID;
                    fromAmino(object: _188.SplitIDAmino): _188.SplitID;
                    toAmino(message: _188.SplitID): _188.SplitIDAmino;
                    fromAminoMsg(object: _188.SplitIDAminoMsg): _188.SplitID;
                    fromProtoMsg(message: _188.SplitIDProtoMsg): _188.SplitID;
                    toProto(message: _188.SplitID): Uint8Array;
                    toProtoMsg(message: _188.SplitID): _188.SplitIDProtoMsg;
                };
                PropertyID: {
                    encode(message: _187.PropertyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _187.PropertyID;
                    fromJSON(object: any): _187.PropertyID;
                    toJSON(message: _187.PropertyID): unknown;
                    fromPartial(object: Partial<_187.PropertyID>): _187.PropertyID;
                    fromAmino(object: _187.PropertyIDAmino): _187.PropertyID;
                    toAmino(message: _187.PropertyID): _187.PropertyIDAmino;
                    fromAminoMsg(object: _187.PropertyIDAminoMsg): _187.PropertyID;
                    fromProtoMsg(message: _187.PropertyIDProtoMsg): _187.PropertyID;
                    toProto(message: _187.PropertyID): Uint8Array;
                    toProtoMsg(message: _187.PropertyID): _187.PropertyIDProtoMsg;
                };
                OrderID: {
                    encode(message: _186.OrderID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _186.OrderID;
                    fromJSON(object: any): _186.OrderID;
                    toJSON(message: _186.OrderID): unknown;
                    fromPartial(object: Partial<_186.OrderID>): _186.OrderID;
                    fromAmino(object: _186.OrderIDAmino): _186.OrderID;
                    toAmino(message: _186.OrderID): _186.OrderIDAmino;
                    fromAminoMsg(object: _186.OrderIDAminoMsg): _186.OrderID;
                    fromProtoMsg(message: _186.OrderIDProtoMsg): _186.OrderID;
                    toProto(message: _186.OrderID): Uint8Array;
                    toProtoMsg(message: _186.OrderID): _186.OrderIDProtoMsg;
                };
                MaintainerID: {
                    encode(message: _185.MaintainerID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _185.MaintainerID;
                    fromJSON(object: any): _185.MaintainerID;
                    toJSON(message: _185.MaintainerID): unknown;
                    fromPartial(object: Partial<_185.MaintainerID>): _185.MaintainerID;
                    fromAmino(object: _185.MaintainerIDAmino): _185.MaintainerID;
                    toAmino(message: _185.MaintainerID): _185.MaintainerIDAmino;
                    fromAminoMsg(object: _185.MaintainerIDAminoMsg): _185.MaintainerID;
                    fromProtoMsg(message: _185.MaintainerIDProtoMsg): _185.MaintainerID;
                    toProto(message: _185.MaintainerID): Uint8Array;
                    toProtoMsg(message: _185.MaintainerID): _185.MaintainerIDProtoMsg;
                };
                IdentityID: {
                    encode(message: _184.IdentityID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.IdentityID;
                    fromJSON(object: any): _184.IdentityID;
                    toJSON(message: _184.IdentityID): unknown;
                    fromPartial(object: Partial<_184.IdentityID>): _184.IdentityID;
                    fromAmino(object: _184.IdentityIDAmino): _184.IdentityID;
                    toAmino(message: _184.IdentityID): _184.IdentityIDAmino;
                    fromAminoMsg(object: _184.IdentityIDAminoMsg): _184.IdentityID;
                    fromProtoMsg(message: _184.IdentityIDProtoMsg): _184.IdentityID;
                    toProto(message: _184.IdentityID): Uint8Array;
                    toProtoMsg(message: _184.IdentityID): _184.IdentityIDProtoMsg;
                };
                HashID: {
                    encode(message: _183.HashID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _183.HashID;
                    fromJSON(object: any): _183.HashID;
                    toJSON(message: _183.HashID): unknown;
                    fromPartial(object: Partial<_183.HashID>): _183.HashID;
                    fromAmino(object: _183.HashIDAmino): _183.HashID;
                    toAmino(message: _183.HashID): _183.HashIDAmino;
                    fromAminoMsg(object: _183.HashIDAminoMsg): _183.HashID;
                    fromProtoMsg(message: _183.HashIDProtoMsg): _183.HashID;
                    toProto(message: _183.HashID): Uint8Array;
                    toProtoMsg(message: _183.HashID): _183.HashIDProtoMsg;
                };
                DataID: {
                    encode(message: _182.DataID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _182.DataID;
                    fromJSON(object: any): _182.DataID;
                    toJSON(message: _182.DataID): unknown;
                    fromPartial(object: Partial<_182.DataID>): _182.DataID;
                    fromAmino(object: _182.DataIDAmino): _182.DataID;
                    toAmino(message: _182.DataID): _182.DataIDAmino;
                    fromAminoMsg(object: _182.DataIDAminoMsg): _182.DataID;
                    fromProtoMsg(message: _182.DataIDProtoMsg): _182.DataID;
                    toProto(message: _182.DataID): Uint8Array;
                    toProtoMsg(message: _182.DataID): _182.DataIDProtoMsg;
                };
                ClassificationID: {
                    encode(message: _181.ClassificationID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _181.ClassificationID;
                    fromJSON(object: any): _181.ClassificationID;
                    toJSON(message: _181.ClassificationID): unknown;
                    fromPartial(object: Partial<_181.ClassificationID>): _181.ClassificationID;
                    fromAmino(object: _181.ClassificationIDAmino): _181.ClassificationID;
                    toAmino(message: _181.ClassificationID): _181.ClassificationIDAmino;
                    fromAminoMsg(object: _181.ClassificationIDAminoMsg): _181.ClassificationID;
                    fromProtoMsg(message: _181.ClassificationIDProtoMsg): _181.ClassificationID;
                    toProto(message: _181.ClassificationID): Uint8Array;
                    toProtoMsg(message: _181.ClassificationID): _181.ClassificationIDProtoMsg;
                };
                AssetID: {
                    encode(message: _180.AssetID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _180.AssetID;
                    fromJSON(object: any): _180.AssetID;
                    toJSON(message: _180.AssetID): unknown;
                    fromPartial(object: Partial<_180.AssetID>): _180.AssetID;
                    fromAmino(object: _180.AssetIDAmino): _180.AssetID;
                    toAmino(message: _180.AssetID): _180.AssetIDAmino;
                    fromAminoMsg(object: _180.AssetIDAminoMsg): _180.AssetID;
                    fromProtoMsg(message: _180.AssetIDProtoMsg): _180.AssetID;
                    toProto(message: _180.AssetID): Uint8Array;
                    toProtoMsg(message: _180.AssetID): _180.AssetIDProtoMsg;
                };
                AnyID: {
                    encode(message: _179.AnyID, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _179.AnyID;
                    fromJSON(object: any): _179.AnyID;
                    toJSON(message: _179.AnyID): unknown;
                    fromPartial(object: Partial<_179.AnyID>): _179.AnyID;
                    fromAmino(object: _179.AnyIDAmino): _179.AnyID;
                    toAmino(message: _179.AnyID): _179.AnyIDAmino;
                    fromAminoMsg(object: _179.AnyIDAminoMsg): _179.AnyID;
                    fromProtoMsg(message: _179.AnyIDProtoMsg): _179.AnyID;
                    toProto(message: _179.AnyID): Uint8Array;
                    toProtoMsg(message: _179.AnyID): _179.AnyIDProtoMsg;
                };
            };
        }
        namespace lists {
            const base: {
                PropertyList: {
                    encode(message: _191.PropertyList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _191.PropertyList;
                    fromJSON(object: any): _191.PropertyList;
                    toJSON(message: _191.PropertyList): unknown;
                    fromPartial(object: Partial<_191.PropertyList>): _191.PropertyList;
                    fromAmino(object: _191.PropertyListAmino): _191.PropertyList;
                    toAmino(message: _191.PropertyList): _191.PropertyListAmino;
                    fromAminoMsg(object: _191.PropertyListAminoMsg): _191.PropertyList;
                    fromProtoMsg(message: _191.PropertyListProtoMsg): _191.PropertyList;
                    toProto(message: _191.PropertyList): Uint8Array;
                    toProtoMsg(message: _191.PropertyList): _191.PropertyListProtoMsg;
                };
                IDList: {
                    encode(message: _190.IDList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _190.IDList;
                    fromJSON(object: any): _190.IDList;
                    toJSON(message: _190.IDList): unknown;
                    fromPartial(object: Partial<_190.IDList>): _190.IDList;
                    fromAmino(object: _190.IDListAmino): _190.IDList;
                    toAmino(message: _190.IDList): _190.IDListAmino;
                    fromAminoMsg(object: _190.IDListAminoMsg): _190.IDList;
                    fromProtoMsg(message: _190.IDListProtoMsg): _190.IDList;
                    toProto(message: _190.IDList): Uint8Array;
                    toProtoMsg(message: _190.IDList): _190.IDListProtoMsg;
                };
            };
        }
        namespace parameters {
            const base: {
                Parameter: {
                    encode(message: _193.Parameter, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.Parameter;
                    fromJSON(object: any): _193.Parameter;
                    toJSON(message: _193.Parameter): unknown;
                    fromPartial(object: Partial<_193.Parameter>): _193.Parameter;
                    fromAmino(object: _193.ParameterAmino): _193.Parameter;
                    toAmino(message: _193.Parameter): _193.ParameterAmino;
                    fromAminoMsg(object: _193.ParameterAminoMsg): _193.Parameter;
                    fromProtoMsg(message: _193.ParameterProtoMsg): _193.Parameter;
                    toProto(message: _193.Parameter): Uint8Array;
                    toProtoMsg(message: _193.Parameter): _193.ParameterProtoMsg;
                };
                ParameterList: {
                    encode(message: _192.ParameterList, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _192.ParameterList;
                    fromJSON(object: any): _192.ParameterList;
                    toJSON(message: _192.ParameterList): unknown;
                    fromPartial(object: Partial<_192.ParameterList>): _192.ParameterList;
                    fromAmino(object: _192.ParameterListAmino): _192.ParameterList;
                    toAmino(message: _192.ParameterList): _192.ParameterListAmino;
                    fromAminoMsg(object: _192.ParameterListAminoMsg): _192.ParameterList;
                    fromProtoMsg(message: _192.ParameterListProtoMsg): _192.ParameterList;
                    toProto(message: _192.ParameterList): Uint8Array;
                    toProtoMsg(message: _192.ParameterList): _192.ParameterListProtoMsg;
                };
            };
        }
        namespace properties {
            const base: {
                MetaProperty: {
                    encode(message: _196.MetaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _196.MetaProperty;
                    fromJSON(object: any): _196.MetaProperty;
                    toJSON(message: _196.MetaProperty): unknown;
                    fromPartial(object: Partial<_196.MetaProperty>): _196.MetaProperty;
                    fromAmino(object: _196.MetaPropertyAmino): _196.MetaProperty;
                    toAmino(message: _196.MetaProperty): _196.MetaPropertyAmino;
                    fromAminoMsg(object: _196.MetaPropertyAminoMsg): _196.MetaProperty;
                    fromProtoMsg(message: _196.MetaPropertyProtoMsg): _196.MetaProperty;
                    toProto(message: _196.MetaProperty): Uint8Array;
                    toProtoMsg(message: _196.MetaProperty): _196.MetaPropertyProtoMsg;
                };
                MesaProperty: {
                    encode(message: _195.MesaProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _195.MesaProperty;
                    fromJSON(object: any): _195.MesaProperty;
                    toJSON(message: _195.MesaProperty): unknown;
                    fromPartial(object: Partial<_195.MesaProperty>): _195.MesaProperty;
                    fromAmino(object: _195.MesaPropertyAmino): _195.MesaProperty;
                    toAmino(message: _195.MesaProperty): _195.MesaPropertyAmino;
                    fromAminoMsg(object: _195.MesaPropertyAminoMsg): _195.MesaProperty;
                    fromProtoMsg(message: _195.MesaPropertyProtoMsg): _195.MesaProperty;
                    toProto(message: _195.MesaProperty): Uint8Array;
                    toProtoMsg(message: _195.MesaProperty): _195.MesaPropertyProtoMsg;
                };
                AnyProperty: {
                    encode(message: _194.AnyProperty, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _194.AnyProperty;
                    fromJSON(object: any): _194.AnyProperty;
                    toJSON(message: _194.AnyProperty): unknown;
                    fromPartial(object: Partial<_194.AnyProperty>): _194.AnyProperty;
                    fromAmino(object: _194.AnyPropertyAmino): _194.AnyProperty;
                    toAmino(message: _194.AnyProperty): _194.AnyPropertyAmino;
                    fromAminoMsg(object: _194.AnyPropertyAminoMsg): _194.AnyProperty;
                    fromProtoMsg(message: _194.AnyPropertyProtoMsg): _194.AnyProperty;
                    toProto(message: _194.AnyProperty): Uint8Array;
                    toProtoMsg(message: _194.AnyProperty): _194.AnyPropertyProtoMsg;
                };
            };
        }
        namespace qualified {
            const base: {
                Mutables: {
                    encode(message: _198.Mutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _198.Mutables;
                    fromJSON(object: any): _198.Mutables;
                    toJSON(message: _198.Mutables): unknown;
                    fromPartial(object: Partial<_198.Mutables>): _198.Mutables;
                    fromAmino(object: _198.MutablesAmino): _198.Mutables;
                    toAmino(message: _198.Mutables): _198.MutablesAmino;
                    fromAminoMsg(object: _198.MutablesAminoMsg): _198.Mutables;
                    fromProtoMsg(message: _198.MutablesProtoMsg): _198.Mutables;
                    toProto(message: _198.Mutables): Uint8Array;
                    toProtoMsg(message: _198.Mutables): _198.MutablesProtoMsg;
                };
                Immutables: {
                    encode(message: _197.Immutables, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _197.Immutables;
                    fromJSON(object: any): _197.Immutables;
                    toJSON(message: _197.Immutables): unknown;
                    fromPartial(object: Partial<_197.Immutables>): _197.Immutables;
                    fromAmino(object: _197.ImmutablesAmino): _197.Immutables;
                    toAmino(message: _197.Immutables): _197.ImmutablesAmino;
                    fromAminoMsg(object: _197.ImmutablesAminoMsg): _197.Immutables;
                    fromProtoMsg(message: _197.ImmutablesProtoMsg): _197.Immutables;
                    toProto(message: _197.Immutables): Uint8Array;
                    toProtoMsg(message: _197.Immutables): _197.ImmutablesProtoMsg;
                };
            };
        }
        namespace types {
            const base: {
                Split: {
                    encode(message: _200.Split, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _200.Split;
                    fromJSON(object: any): _200.Split;
                    toJSON(message: _200.Split): unknown;
                    fromPartial(object: Partial<_200.Split>): _200.Split;
                    fromAmino(object: _200.SplitAmino): _200.Split;
                    toAmino(message: _200.Split): _200.SplitAmino;
                    fromAminoMsg(object: _200.SplitAminoMsg): _200.Split;
                    fromProtoMsg(message: _200.SplitProtoMsg): _200.Split;
                    toProto(message: _200.Split): Uint8Array;
                    toProtoMsg(message: _200.Split): _200.SplitProtoMsg;
                };
                Height: {
                    encode(message: _199.Height, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                    decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _199.Height;
                    fromJSON(object: any): _199.Height;
                    toJSON(message: _199.Height): unknown;
                    fromPartial(object: Partial<_199.Height>): _199.Height;
                    fromAmino(object: _199.HeightAmino): _199.Height;
                    toAmino(message: _199.Height): _199.HeightAmino;
                    fromAminoMsg(object: _199.HeightAminoMsg): _199.Height;
                    fromProtoMsg(message: _199.HeightProtoMsg): _199.Height;
                    toProto(message: _199.Height): Uint8Array;
                    toProtoMsg(message: _199.Height): _199.HeightProtoMsg;
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
                            burn: _389.MsgClientImpl;
                            define: _390.MsgClientImpl;
                            deputize: _391.MsgClientImpl;
                            mint: _392.MsgClientImpl;
                            mutate: _393.MsgClientImpl;
                            renumerate: _394.MsgClientImpl;
                            revoke: _395.MsgClientImpl;
                            send: _396.MsgClientImpl;
                            unwrap: _397.MsgClientImpl;
                            wrap: _398.MsgClientImpl;
                        };
                    };
                    identities: {
                        transactions: {
                            define: _399.MsgClientImpl;
                            deputize: _400.MsgClientImpl;
                            issue: _401.MsgClientImpl;
                            name: _402.MsgClientImpl;
                            provision: _403.MsgClientImpl;
                            quash: _404.MsgClientImpl;
                            revoke: _405.MsgClientImpl;
                            unprovision: _406.MsgClientImpl;
                            mutate: _407.MsgClientImpl;
                        };
                    };
                    metas: {
                        transactions: {
                            reveal: _408.MsgClientImpl;
                        };
                    };
                    orders: {
                        transactions: {
                            cancel: _409.MsgClientImpl;
                            define: _410.MsgClientImpl;
                            deputize: _411.MsgClientImpl;
                            get: _412.MsgClientImpl;
                            immediate: _413.MsgClientImpl;
                            make: _414.MsgClientImpl;
                            modify: _415.MsgClientImpl;
                            put: _416.MsgClientImpl;
                            revoke: _417.MsgClientImpl;
                            take: _418.MsgClientImpl;
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
                                handle(request: _44.QueryRequest): Promise<_45.QueryResponse>;
                            };
                            classifications: {
                                handle(request: _47.QueryRequest): Promise<_48.QueryResponse>;
                            };
                        };
                    };
                    identities: {
                        queries: {
                            identities: {
                                handle(request: _54.QueryRequest): Promise<_55.QueryResponse>;
                            };
                            identity: {
                                handle(request: _57.QueryRequest): Promise<_58.QueryResponse>;
                            };
                        };
                    };
                    maintainers: {
                        queries: {
                            maintainer: {
                                handle(request: _91.QueryRequest): Promise<_92.QueryResponse>;
                            };
                            maintainers: {
                                handle(request: _94.QueryRequest): Promise<_95.QueryResponse>;
                            };
                        };
                    };
                    metas: {
                        queries: {
                            meta: {
                                handle(request: _101.QueryRequest): Promise<_102.QueryResponse>;
                            };
                            metas: {
                                handle(request: _104.QueryRequest): Promise<_105.QueryResponse>;
                            };
                        };
                    };
                    orders: {
                        queries: {
                            order: {
                                handle(request: _114.QueryRequest): Promise<_115.QueryResponse>;
                            };
                            orders: {
                                handle(request: _117.QueryRequest): Promise<_118.QueryResponse>;
                            };
                        };
                    };
                    splits: {
                        queries: {
                            balances: {
                                handle(request: _154.QueryRequest): Promise<_155.QueryResponse>;
                            };
                            split: {
                                handle(request: _157.QueryRequest): Promise<_158.QueryResponse>;
                            };
                            splits: {
                                handle(request: _160.QueryRequest): Promise<_161.QueryResponse>;
                            };
                            supply: {
                                handle(request: _163.QueryRequest): Promise<_164.QueryResponse>;
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
