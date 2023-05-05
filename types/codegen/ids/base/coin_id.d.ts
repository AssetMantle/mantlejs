import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
export interface CoinID {
    stringID?: StringID;
}
export interface CoinIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.CoinID";
    value: Uint8Array;
}
export interface CoinIDAmino {
    string_i_d?: StringIDAmino;
}
export interface CoinIDAminoMsg {
    type: "/assetmantle.schema.ids.base.CoinID";
    value: CoinIDAmino;
}
export interface CoinIDSDKType {
    string_i_d?: StringIDSDKType;
}
export declare const CoinID: {
    encode(message: CoinID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinID;
    fromJSON(object: any): CoinID;
    toJSON(message: CoinID): unknown;
    fromPartial(object: Partial<CoinID>): CoinID;
    fromAmino(object: CoinIDAmino): CoinID;
    toAmino(message: CoinID): CoinIDAmino;
    fromAminoMsg(object: CoinIDAminoMsg): CoinID;
    fromProtoMsg(message: CoinIDProtoMsg): CoinID;
    toProto(message: CoinID): Uint8Array;
    toProtoMsg(message: CoinID): CoinIDProtoMsg;
};
