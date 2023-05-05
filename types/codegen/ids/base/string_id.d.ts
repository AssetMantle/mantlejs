import * as _m0 from "protobufjs/minimal";
export interface StringID {
    iDString: string;
}
export interface StringIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.StringID";
    value: Uint8Array;
}
export interface StringIDAmino {
    i_d_string: string;
}
export interface StringIDAminoMsg {
    type: "/assetmantle.schema.ids.base.StringID";
    value: StringIDAmino;
}
export interface StringIDSDKType {
    i_d_string: string;
}
export declare const StringID: {
    encode(message: StringID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StringID;
    fromJSON(object: any): StringID;
    toJSON(message: StringID): unknown;
    fromPartial(object: Partial<StringID>): StringID;
    fromAmino(object: StringIDAmino): StringID;
    toAmino(message: StringID): StringIDAmino;
    fromAminoMsg(object: StringIDAminoMsg): StringID;
    fromProtoMsg(message: StringIDProtoMsg): StringID;
    toProto(message: StringID): Uint8Array;
    toProtoMsg(message: StringID): StringIDProtoMsg;
};
