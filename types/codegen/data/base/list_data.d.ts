import { AnyListableData, AnyListableDataAmino, AnyListableDataSDKType } from "./any_listable_data";
import * as _m0 from "protobufjs/minimal";
export interface ListData {
    value: AnyListableData[];
}
export interface ListDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.ListData";
    value: Uint8Array;
}
export interface ListDataAmino {
    value: AnyListableDataAmino[];
}
export interface ListDataAminoMsg {
    type: "/assetmantle.schema.data.base.ListData";
    value: ListDataAmino;
}
export interface ListDataSDKType {
    value: AnyListableDataSDKType[];
}
export declare const ListData: {
    encode(message: ListData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ListData;
    fromJSON(object: any): ListData;
    toJSON(message: ListData): unknown;
    fromPartial(object: Partial<ListData>): ListData;
    fromAmino(object: ListDataAmino): ListData;
    toAmino(message: ListData): ListDataAmino;
    fromAminoMsg(object: ListDataAminoMsg): ListData;
    fromProtoMsg(message: ListDataProtoMsg): ListData;
    toProto(message: ListData): Uint8Array;
    toProtoMsg(message: ListData): ListDataProtoMsg;
};
