import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { CoinID, CoinIDAmino, CoinIDSDKType } from "./coin_id";
import * as _m0 from "protobufjs/minimal";
export interface AnyOwnableID {
    assetID?: AssetID;
    coinID?: CoinID;
}
export interface AnyOwnableIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.AnyOwnableID";
    value: Uint8Array;
}
export interface AnyOwnableIDAmino {
    asset_i_d?: AssetIDAmino;
    coin_i_d?: CoinIDAmino;
}
export interface AnyOwnableIDAminoMsg {
    type: "/assetmantle.schema.ids.base.AnyOwnableID";
    value: AnyOwnableIDAmino;
}
export interface AnyOwnableIDSDKType {
    asset_i_d?: AssetIDSDKType;
    coin_i_d?: CoinIDSDKType;
}
export declare const AnyOwnableID: {
    encode(message: AnyOwnableID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyOwnableID;
    fromJSON(object: any): AnyOwnableID;
    toJSON(message: AnyOwnableID): unknown;
    fromPartial(object: Partial<AnyOwnableID>): AnyOwnableID;
    fromAmino(object: AnyOwnableIDAmino): AnyOwnableID;
    toAmino(message: AnyOwnableID): AnyOwnableIDAmino;
    fromAminoMsg(object: AnyOwnableIDAminoMsg): AnyOwnableID;
    fromProtoMsg(message: AnyOwnableIDProtoMsg): AnyOwnableID;
    toProto(message: AnyOwnableID): Uint8Array;
    toProtoMsg(message: AnyOwnableID): AnyOwnableIDProtoMsg;
};
