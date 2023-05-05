import * as _m0 from "protobufjs/minimal";
export interface AccAddressData {
    value: Uint8Array;
}
export interface AccAddressDataProtoMsg {
    typeUrl: "/assetmantle.schema.data.base.AccAddressData";
    value: Uint8Array;
}
export interface AccAddressDataAmino {
    value: Uint8Array;
}
export interface AccAddressDataAminoMsg {
    type: "/assetmantle.schema.data.base.AccAddressData";
    value: AccAddressDataAmino;
}
export interface AccAddressDataSDKType {
    value: Uint8Array;
}
export declare const AccAddressData: {
    encode(message: AccAddressData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AccAddressData;
    fromJSON(object: any): AccAddressData;
    toJSON(message: AccAddressData): unknown;
    fromPartial(object: Partial<AccAddressData>): AccAddressData;
    fromAmino(object: AccAddressDataAmino): AccAddressData;
    toAmino(message: AccAddressData): AccAddressDataAmino;
    fromAminoMsg(object: AccAddressDataAminoMsg): AccAddressData;
    fromProtoMsg(message: AccAddressDataProtoMsg): AccAddressData;
    toProto(message: AccAddressData): Uint8Array;
    toProtoMsg(message: AccAddressData): AccAddressDataProtoMsg;
};
