import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../ids/base/order_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Key {
  orderID?: OrderID;
}
export interface KeyProtoMsg {
  typeUrl: "/assetmantle.modules.orders.key.Key";
  value: Uint8Array;
}
export interface KeyAmino {
  order_i_d?: OrderIDAmino;
}
export interface KeyAminoMsg {
  type: "/assetmantle.modules.orders.key.Key";
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
  encode(message: Key, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Key {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Key {
    return {
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined
    };
  },
  toJSON(message: Key): unknown {
    const obj: any = {};
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Key>): Key {
    const message = createBaseKey();
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  },
  fromAmino(object: KeyAmino): Key {
    return {
      orderID: object?.order_i_d ? OrderID.fromAmino(object.order_i_d) : undefined
    };
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
      typeUrl: "/assetmantle.modules.orders.key.Key",
      value: Key.encode(message).finish()
    };
  }
};