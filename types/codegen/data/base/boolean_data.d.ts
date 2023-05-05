import * as _m0 from "protobufjs/minimal";
export interface BooleanData {
    value: boolean;
}
export interface BooleanDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.BooleanData";
    value: Uint8Array;
}
export interface BooleanDataAmino {
    value: boolean;
}
export interface BooleanDataAminoMsg {
    type: "/assetmantle.schema.data.base.BooleanData";
    value: BooleanDataAmino;
}
export interface BooleanDataSDKType {
    value: boolean;
}
export declare const BooleanData: {
    encode(message: BooleanData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BooleanData;
    fromJSON(object: any): BooleanData;
    toJSON(message: BooleanData): unknown;
    fromPartial(object: Partial<BooleanData>): BooleanData;
    fromAmino(object: BooleanDataAmino): BooleanData;
    toAmino(message: BooleanData): BooleanDataAmino;
    fromAminoMsg(object: BooleanDataAminoMsg): BooleanData;
    fromProtoMsg(message: BooleanDataProtoMsg): BooleanData;
    toProto(message: BooleanData): Uint8Array;
    toProtoMsg(message: BooleanData): BooleanDataProtoMsg;
};
