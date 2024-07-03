//@ts-nocheck
import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../../schema/ids/base/order_id";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Key {
  orderID?: OrderID;
}
export interface KeyProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  order_i_d?: OrderIDAmino;
}
export interface KeyAminoMsg {
  type: "/AssetMantle.modules.orders.key.Key";
  value: KeyAmino;
}
export interface KeySDKType {
  order_i_d?: OrderIDSDKType;
}
function createBaseKey(): Key {
  return {
    orderID: undefined
  };
}
export const Key = {
  typeUrl: "/AssetMantle.modules.orders.key.Key",
  encode(message: Key, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Key {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKey();
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
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    const message = createBaseKey();
    if (object.order_i_d !== undefined && object.order_i_d !== null) {
      message.orderID = OrderID.fromAmino(object.order_i_d);
    }
    return message;
  },
  toAmino(message: Key): KeyAmino {
    const obj: any = {};
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    return obj;
  },
  fromAminoMsg(object: KeyAminoMsg): Key {
    return Key.fromAmino(object.value);
  },
  fromProtoMsg(message: KeyProtoMsg): Key {
    return Key.decode(message.value);
  },
  toProto(message: Key): Uint8Array {
    return Key.encode(message).finish();
  },
  toProtoMsg(message: Key): KeyProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.orders.key.Key",
      value: Key.encode(message).finish()
    };
  }
};