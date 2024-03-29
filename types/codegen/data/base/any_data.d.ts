import { AccAddressData, AccAddressDataAmino, AccAddressDataSDKType } from "./acc_address_data";
import { BooleanData, BooleanDataAmino, BooleanDataSDKType } from "./boolean_data";
import { DecData, DecDataAmino, DecDataSDKType } from "./dec_data";
import { HeightData, HeightDataAmino, HeightDataSDKType } from "./height_data";
import { IDData, IDDataAmino, IDDataSDKType } from "./id_data";
import { ListData, ListDataAmino, ListDataSDKType } from "./list_data";
import { LinkedData, LinkedDataAmino, LinkedDataSDKType } from "./linked_data";
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
    linkedData?: LinkedData;
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
    linked_data?: LinkedDataAmino;
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
    linked_data?: LinkedDataSDKType;
    number_data?: NumberDataSDKType;
    string_data?: StringDataSDKType;
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
