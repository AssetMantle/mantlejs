//@ts-nocheck
import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../../../schema/ids/base/order_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface TransactionResponse {
  orderID?: OrderID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.transactions.put.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  order_i_d?: OrderIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/AssetMantle.modules.orders.transactions.put.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  order_i_d?: OrderIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    orderID: undefined
  };
}
export const TransactionResponse = {
  typeUrl: "/AssetMantle.modules.orders.transactions.put.TransactionResponse",
  encode(message: TransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.orderID = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    const message = createBaseTransactionResponse();
    if (object.order_i_d !== undefined && object.order_i_d !== null) {
      message.orderID = OrderID.fromAmino(object.order_i_d);
    }
    return message;
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse {
    return TransactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse {
    return TransactionResponse.decode(message.value);
  },
  toProto(message: TransactionResponse): Uint8Array {
    return TransactionResponse.encode(message).finish();
  },
  toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.orders.transactions.put.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};