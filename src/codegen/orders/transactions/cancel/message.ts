import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../ids/base/order_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  orderID?: OrderID;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.orders.transactions.cancel.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  order_i_d?: OrderIDAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.orders.transactions.cancel.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  order_i_d?: OrderIDSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    orderID: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.fromID = IdentityID.decode(reader, reader.uint32());
          break;
        case 3:
          message.orderID = OrderID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      fromID: isSet(object.fromID) ? IdentityID.fromJSON(object.fromID) : undefined,
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      fromID: object?.from_i_d ? IdentityID.fromAmino(object.from_i_d) : undefined,
      orderID: object?.order_i_d ? OrderID.fromAmino(object.order_i_d) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    return obj;
  },
  fromAminoMsg(object: MessageAminoMsg): Message {
    return Message.fromAmino(object.value);
  },
  fromProtoMsg(message: MessageProtoMsg): Message {
    return Message.decode(message.value);
  },
  toProto(message: Message): Uint8Array {
    return Message.encode(message).finish();
  },
  toProtoMsg(message: Message): MessageProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.orders.transactions.cancel.Message",
      value: Message.encode(message).finish()
    };
  }
};