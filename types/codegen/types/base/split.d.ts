import * as _m0 from "protobufjs/minimal";
export interface Split {
    value: string;
}
export interface SplitProtoMsg {
    typeUrl: "/assetmantle.schema.types.base.Split";
    value: Uint8Array;
}
export interface SplitAmino {
    value: string;
}
export interface SplitAminoMsg {
    type: "/assetmantle.schema.types.base.Split";
    value: SplitAmino;
}
export interface SplitSDKType {
    value: string;
}
export declare const Split: {
    encode(message: Split, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Split;
    fromJSON(object: any): Split;
    toJSON(message: Split): unknown;
    fromPartial(object: Partial<Split>): Split;
    fromAmino(object: SplitAmino): Split;
    toAmino(message: Split): SplitAmino;
    fromAminoMsg(object: SplitAminoMsg): Split;
    fromProtoMsg(message: SplitProtoMsg): Split;
    toProto(message: Split): Uint8Array;
    toProtoMsg(message: Split): SplitProtoMsg;
};
