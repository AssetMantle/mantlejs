import { Height, HeightAmino, HeightSDKType } from "../../types/base/height";
import * as _m0 from "protobufjs/minimal";
export interface HeightData {
    value?: Height;
}
export interface HeightDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.HeightData";
    value: Uint8Array;
}
export interface HeightDataAmino {
    value?: HeightAmino;
}
export interface HeightDataAminoMsg {
    type: "/assetmantle.schema.data.base.HeightData";
    value: HeightDataAmino;
}
export interface HeightDataSDKType {
    value?: HeightSDKType;
}
export declare const HeightData: {
    encode(message: HeightData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HeightData;
    fromJSON(object: any): HeightData;
    toJSON(message: HeightData): unknown;
    fromPartial(object: Partial<HeightData>): HeightData;
    fromAmino(object: HeightDataAmino): HeightData;
    toAmino(message: HeightData): HeightDataAmino;
    fromAminoMsg(object: HeightDataAminoMsg): HeightData;
    fromProtoMsg(message: HeightDataProtoMsg): HeightData;
    toProto(message: HeightData): Uint8Array;
    toProtoMsg(message: HeightData): HeightDataProtoMsg;
};
