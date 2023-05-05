import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Height {
    value: Long;
}
export interface HeightProtoMsg {
    typeUrl: "/assetmantle.schema.types.base.Height";
    value: Uint8Array;
}
export interface HeightAmino {
    value: string;
}
export interface HeightAminoMsg {
    type: "/assetmantle.schema.types.base.Height";
    value: HeightAmino;
}
export interface HeightSDKType {
    value: Long;
}
export declare const Height: {
    encode(message: Height, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Height;
    fromJSON(object: any): Height;
    toJSON(message: Height): unknown;
    fromPartial(object: Partial<Height>): Height;
    fromAmino(object: HeightAmino): Height;
    toAmino(message: Height): HeightAmino;
    fromAminoMsg(object: HeightAminoMsg): Height;
    fromProtoMsg(message: HeightProtoMsg): Height;
    toProto(message: Height): Uint8Array;
    toProtoMsg(message: Height): HeightProtoMsg;
};
