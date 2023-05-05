import * as _m0 from "protobufjs/minimal";
export interface StringData {
    value: string;
}
export interface StringDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.StringData";
    value: Uint8Array;
}
export interface StringDataAmino {
    value: string;
}
export interface StringDataAminoMsg {
    type: "/assetmantle.schema.data.base.StringData";
    value: StringDataAmino;
}
export interface StringDataSDKType {
    value: string;
}
export declare const StringData: {
    encode(message: StringData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringData;
    fromJSON(object: any): StringData;
    toJSON(message: StringData): unknown;
    fromPartial(object: Partial<StringData>): StringData;
    fromAmino(object: StringDataAmino): StringData;
    toAmino(message: StringData): StringDataAmino;
    fromAminoMsg(object: StringDataAminoMsg): StringData;
    fromProtoMsg(message: StringDataProtoMsg): StringData;
    toProto(message: StringData): Uint8Array;
    toProtoMsg(message: StringData): StringDataProtoMsg;
};
