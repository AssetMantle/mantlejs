import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface NumberData {
    value: Long;
}
export interface NumberDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.NumberData";
    value: Uint8Array;
}
export interface NumberDataAmino {
    value: string;
}
export interface NumberDataAminoMsg {
    type: "/assetmantle.schema.data.base.NumberData";
    value: NumberDataAmino;
}
export interface NumberDataSDKType {
    value: Long;
}
export declare const NumberData: {
    encode(message: NumberData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): NumberData;
    fromJSON(object: any): NumberData;
    toJSON(message: NumberData): unknown;
    fromPartial(object: Partial<NumberData>): NumberData;
    fromAmino(object: NumberDataAmino): NumberData;
    toAmino(message: NumberData): NumberDataAmino;
    fromAminoMsg(object: NumberDataAminoMsg): NumberData;
    fromProtoMsg(message: NumberDataProtoMsg): NumberData;
    toProto(message: NumberData): Uint8Array;
    toProtoMsg(message: NumberData): NumberDataProtoMsg;
};
