import * as _m0 from "protobufjs/minimal";
export interface HashID {
    iDBytes: Uint8Array;
}
export interface HashIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.HashID";
    value: Uint8Array;
}
export interface HashIDAmino {
    i_d_bytes: Uint8Array;
}
export interface HashIDAminoMsg {
    type: "/assetmantle.schema.ids.base.HashID";
    value: HashIDAmino;
}
export interface HashIDSDKType {
    i_d_bytes: Uint8Array;
}
export declare const HashID: {
    encode(message: HashID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HashID;
    fromJSON(object: any): HashID;
    toJSON(message: HashID): unknown;
    fromPartial(object: Partial<HashID>): HashID;
    fromAmino(object: HashIDAmino): HashID;
    toAmino(message: HashID): HashIDAmino;
    fromAminoMsg(object: HashIDAminoMsg): HashID;
    fromProtoMsg(message: HashIDProtoMsg): HashID;
    toProto(message: HashID): Uint8Array;
    toProtoMsg(message: HashID): HashIDProtoMsg;
};
