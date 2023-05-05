import { Coin, CoinAmino, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisState {
    /**
     * constant_fee is the fee used to verify the invariant in the crisis
     * module.
     */
    constantFee?: Coin;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/cosmos.crisis.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisStateAmino {
    /**
     * constant_fee is the fee used to verify the invariant in the crisis
     * module.
     */
    constant_fee?: CoinAmino;
}
export interface GenesisStateAminoMsg {
    type: "cosmos-sdk/GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the crisis module's genesis state. */
export interface GenesisStateSDKType {
    constant_fee?: CoinSDKType;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    toAminoMsg(message: GenesisState): GenesisStateAminoMsg;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
