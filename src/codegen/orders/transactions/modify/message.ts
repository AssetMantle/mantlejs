import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../ids/base/order_id";
import { Height, HeightAmino, HeightSDKType } from "../../../types/base/height";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  orderID?: OrderID;
  makerOwnableSplit: string;
  takerOwnableSplit: string;
  expiresIn?: Height;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.orders.transactions.modify.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  order_i_d?: OrderIDAmino;
  maker_ownable_split: string;
  taker_ownable_split: string;
  expires_in?: HeightAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.orders.transactions.modify.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  order_i_d?: OrderIDSDKType;
  maker_ownable_split: string;
  taker_ownable_split: string;
  expires_in?: HeightSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    orderID: undefined,
    makerOwnableSplit: "",
    takerOwnableSplit: "",
    expiresIn: undefined,
    mutableMetaProperties: undefined,
    mutableProperties: undefined
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
    if (message.makerOwnableSplit !== "") {
      writer.uint32(34).string(message.makerOwnableSplit);
    }
    if (message.takerOwnableSplit !== "") {
      writer.uint32(42).string(message.takerOwnableSplit);
    }
    if (message.expiresIn !== undefined) {
      Height.encode(message.expiresIn, writer.uint32(50).fork()).ldelim();
    }
    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(58).fork()).ldelim();
    }
    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(66).fork()).ldelim();
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
        case 4:
          message.makerOwnableSplit = reader.string();
          break;
        case 5:
          message.takerOwnableSplit = reader.string();
          break;
        case 6:
          message.expiresIn = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 8:
          message.mutableProperties = PropertyList.decode(reader, reader.uint32());
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
      orderID: isSet(object.orderID) ? OrderID.fromJSON(object.orderID) : undefined,
      makerOwnableSplit: isSet(object.makerOwnableSplit) ? String(object.makerOwnableSplit) : "",
      takerOwnableSplit: isSet(object.takerOwnableSplit) ? String(object.takerOwnableSplit) : "",
      expiresIn: isSet(object.expiresIn) ? Height.fromJSON(object.expiresIn) : undefined,
      mutableMetaProperties: isSet(object.mutableMetaProperties) ? PropertyList.fromJSON(object.mutableMetaProperties) : undefined,
      mutableProperties: isSet(object.mutableProperties) ? PropertyList.fromJSON(object.mutableProperties) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.orderID !== undefined && (obj.orderID = message.orderID ? OrderID.toJSON(message.orderID) : undefined);
    message.makerOwnableSplit !== undefined && (obj.makerOwnableSplit = message.makerOwnableSplit);
    message.takerOwnableSplit !== undefined && (obj.takerOwnableSplit = message.takerOwnableSplit);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn ? Height.toJSON(message.expiresIn) : undefined);
    message.mutableMetaProperties !== undefined && (obj.mutableMetaProperties = message.mutableMetaProperties ? PropertyList.toJSON(message.mutableMetaProperties) : undefined);
    message.mutableProperties !== undefined && (obj.mutableProperties = message.mutableProperties ? PropertyList.toJSON(message.mutableProperties) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    message.makerOwnableSplit = object.makerOwnableSplit ?? "";
    message.takerOwnableSplit = object.takerOwnableSplit ?? "";
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Height.fromPartial(object.expiresIn) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      fromID: object?.from_i_d ? IdentityID.fromAmino(object.from_i_d) : undefined,
      orderID: object?.order_i_d ? OrderID.fromAmino(object.order_i_d) : undefined,
      makerOwnableSplit: object.maker_ownable_split,
      takerOwnableSplit: object.taker_ownable_split,
      expiresIn: object?.expires_in ? Height.fromAmino(object.expires_in) : undefined,
      mutableMetaProperties: object?.mutable_meta_properties ? PropertyList.fromAmino(object.mutable_meta_properties) : undefined,
      mutableProperties: object?.mutable_properties ? PropertyList.fromAmino(object.mutable_properties) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    obj.maker_ownable_split = message.makerOwnableSplit;
    obj.taker_ownable_split = message.takerOwnableSplit;
    obj.expires_in = message.expiresIn ? Height.toAmino(message.expiresIn) : undefined;
    obj.mutable_meta_properties = message.mutableMetaProperties ? PropertyList.toAmino(message.mutableMetaProperties) : undefined;
    obj.mutable_properties = message.mutableProperties ? PropertyList.toAmino(message.mutableProperties) : undefined;
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
      typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
      value: Message.encode(message).finish()
    };
  }
};