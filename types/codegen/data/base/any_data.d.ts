import { AccAddressData, AccAddressDataAmino, AccAddressDataSDKType } from "./acc_address_data";
import { BooleanData, BooleanDataAmino, BooleanDataSDKType } from "./boolean_data";
import { DecData, DecDataAmino, DecDataSDKType } from "./dec_data";
import { HeightData, HeightDataAmino, HeightDataSDKType } from "./height_data";
import { IDData, IDDataAmino, IDDataSDKType } from "./id_data";
import { NumberData, NumberDataAmino, NumberDataSDKType } from "./number_data";
import { StringData, StringDataAmino, StringDataSDKType } from "./string_data";
import * as _m0 from "protobufjs/minimal";
export interface AnyData {
    accAddressData?: AccAddressData;
    booleanData?: BooleanData;
    decData?: DecData;
    heightData?: HeightData;
    iDData?: IDData;
    listData?: ListData;
    numberData?: NumberData;
    stringData?: StringData;
}
export interface AnyDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.AnyData";
    value: Uint8Array;
}
export interface AnyDataAmino {
    acc_address_data?: AccAddressDataAmino;
    boolean_data?: BooleanDataAmino;
    dec_data?: DecDataAmino;
    height_data?: HeightDataAmino;
    i_d_data?: IDDataAmino;
    list_data?: ListDataAmino;
    number_data?: NumberDataAmino;
    string_data?: StringDataAmino;
}
export interface AnyDataAminoMsg {
    type: "/assetmantle.schema.data.base.AnyData";
    value: AnyDataAmino;
}
export interface AnyDataSDKType {
    acc_address_data?: AccAddressDataSDKType;
    boolean_data?: BooleanDataSDKType;
    dec_data?: DecDataSDKType;
    height_data?: HeightDataSDKType;
    i_d_data?: IDDataSDKType;
    list_data?: ListDataSDKType;
    number_data?: NumberDataSDKType;
    string_data?: StringDataSDKType;
}
export interface ListData {
    dataList: AnyData[];
}
export interface ListDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.ListData";
    value: Uint8Array;
}
export interface ListDataAmino {
    data_list: AnyDataAmino[];
}
export interface ListDataAminoMsg {
    type: "/assetmantle.schema.data.base.ListData";
    value: ListDataAmino;
}
export interface ListDataSDKType {
    data_list: AnyDataSDKType[];
}
export declare const AnyData: {
    encode(message: AnyData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyData;
    fromJSON(object: any): AnyData;
    toJSON(message: AnyData): unknown;
    fromPartial(object: Partial<AnyData>): AnyData;
    fromAmino(object: AnyDataAmino): AnyData;
    toAmino(message: AnyData): AnyDataAmino;
    fromAminoMsg(object: AnyDataAminoMsg): AnyData;
    fromProtoMsg(message: AnyDataProtoMsg): AnyData;
    toProto(message: AnyData): Uint8Array;
    toProtoMsg(message: AnyData): AnyDataProtoMsg;
};
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
