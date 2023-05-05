import * as _m0 from "protobufjs/minimal";
export interface DecData {
    value: string;
}
export interface DecDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.DecData";
    value: Uint8Array;
}
export interface DecDataAmino {
    value: string;
}
export interface DecDataAminoMsg {
    type: "/assetmantle.schema.data.base.DecData";
    value: DecDataAmino;
}
export interface DecDataSDKType {
    value: string;
}
export declare const DecData: {
    encode(message: DecData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecData;
    fromJSON(object: any): DecData;
    toJSON(message: DecData): unknown;
    fromPartial(object: Partial<DecData>): DecData;
    fromAmino(object: DecDataAmino): DecData;
    toAmino(message: DecData): DecDataAmino;
    fromAminoMsg(object: DecDataAminoMsg): DecData;
    fromProtoMsg(message: DecDataProtoMsg): DecData;
    toProto(message: DecData): Uint8Array;
    toProtoMsg(message: DecData): DecDataProtoMsg;
};
