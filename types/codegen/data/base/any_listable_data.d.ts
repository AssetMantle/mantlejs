import { AccAddressData, AccAddressDataAmino, AccAddressDataSDKType } from "./acc_address_data";
import { BooleanData, BooleanDataAmino, BooleanDataSDKType } from "./boolean_data";
import { DecData, DecDataAmino, DecDataSDKType } from "./dec_data";
import { HeightData, HeightDataAmino, HeightDataSDKType } from "./height_data";
import { IDData, IDDataAmino, IDDataSDKType } from "./id_data";
import { NumberData, NumberDataAmino, NumberDataSDKType } from "./number_data";
import { StringData, StringDataAmino, StringDataSDKType } from "./string_data";
import * as _m0 from "protobufjs/minimal";
export interface AnyListableData {
    accAddressData?: AccAddressData;
    booleanData?: BooleanData;
    decData?: DecData;
    heightData?: HeightData;
    iDData?: IDData;
    numberData?: NumberData;
    stringData?: StringData;
}
export interface AnyListableDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.AnyListableData";
    value: Uint8Array;
}
export interface AnyListableDataAmino {
    acc_address_data?: AccAddressDataAmino;
    boolean_data?: BooleanDataAmino;
    dec_data?: DecDataAmino;
    height_data?: HeightDataAmino;
    i_d_data?: IDDataAmino;
    number_data?: NumberDataAmino;
    string_data?: StringDataAmino;
}
export interface AnyListableDataAminoMsg {
    type: "/assetmantle.schema.data.base.AnyListableData";
    value: AnyListableDataAmino;
}
export interface AnyListableDataSDKType {
    acc_address_data?: AccAddressDataSDKType;
    boolean_data?: BooleanDataSDKType;
    dec_data?: DecDataSDKType;
    height_data?: HeightDataSDKType;
    i_d_data?: IDDataSDKType;
    number_data?: NumberDataSDKType;
    string_data?: StringDataSDKType;
}
export declare const AnyListableData: {
    encode(message: AnyListableData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyListableData;
    fromJSON(object: any): AnyListableData;
    toJSON(message: AnyListableData): unknown;
    fromPartial(object: Partial<AnyListableData>): AnyListableData;
    fromAmino(object: AnyListableDataAmino): AnyListableData;
    toAmino(message: AnyListableData): AnyListableDataAmino;
    fromAminoMsg(object: AnyListableDataAminoMsg): AnyListableData;
    fromProtoMsg(message: AnyListableDataProtoMsg): AnyListableData;
    toProto(message: AnyListableData): Uint8Array;
    toProtoMsg(message: AnyListableData): AnyListableDataProtoMsg;
};
