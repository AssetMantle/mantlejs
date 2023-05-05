import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import * as _m0 from "protobufjs/minimal";
export interface OrderID {
    hashID?: HashID;
}
export interface OrderIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.OrderID";
    value: Uint8Array;
}
export interface OrderIDAmino {
    hash_i_d?: HashIDAmino;
}
export interface OrderIDAminoMsg {
    type: "/assetmantle.schema.ids.base.OrderID";
    value: OrderIDAmino;
}
export interface OrderIDSDKType {
    hash_i_d?: HashIDSDKType;
}
export declare const OrderID: {
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    fromPartial(object: Partial<OrderID>): OrderID;
    fromAmino(object: OrderIDAmino): OrderID;
    toAmino(message: OrderID): OrderIDAmino;
    fromAminoMsg(object: OrderIDAminoMsg): OrderID;
    fromProtoMsg(message: OrderIDProtoMsg): OrderID;
    toProto(message: OrderID): Uint8Array;
    toProtoMsg(message: OrderID): OrderIDProtoMsg;
};
