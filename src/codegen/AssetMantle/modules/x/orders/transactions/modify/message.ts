//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "../../../../../schema/ids/base/order_id";
import { Height, HeightAmino, HeightSDKType } from "../../../../../schema/types/base/height";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../../../schema/lists/base/property_list";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  fromID?: IdentityID;
  orderID?: OrderID;
  makerSplit: string;
  takerSplit: string;
  expiresIn?: Height;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.transactions.modify.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  order_i_d?: OrderIDAmino;
  maker_split?: string;
  taker_split?: string;
  expires_in?: HeightAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.orders.transactions.modify.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  order_i_d?: OrderIDSDKType;
  maker_split: string;
  taker_split: string;
  expires_in?: HeightSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    orderID: undefined,
    makerSplit: "",
    takerSplit: "",
    expiresIn: undefined,
    mutableMetaProperties: undefined,
    mutableProperties: undefined
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.orders.transactions.modify.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(26).fork()).ldelim();
    }
    if (message.makerSplit !== "") {
      writer.uint32(34).string(message.makerSplit);
    }
    if (message.takerSplit !== "") {
      writer.uint32(42).string(message.takerSplit);
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
  decode(input: BinaryReader | Uint8Array, length?: number): Message {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
          message.makerSplit = reader.string();
          break;
        case 5:
          message.takerSplit = reader.string();
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
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    message.makerSplit = object.makerSplit ?? "";
    message.takerSplit = object.takerSplit ?? "";
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Height.fromPartial(object.expiresIn) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.from_i_d !== undefined && object.from_i_d !== null) {
      message.fromID = IdentityID.fromAmino(object.from_i_d);
    }
    if (object.order_i_d !== undefined && object.order_i_d !== null) {
      message.orderID = OrderID.fromAmino(object.order_i_d);
    }
    if (object.maker_split !== undefined && object.maker_split !== null) {
      message.makerSplit = object.maker_split;
    }
    if (object.taker_split !== undefined && object.taker_split !== null) {
      message.takerSplit = object.taker_split;
    }
    if (object.expires_in !== undefined && object.expires_in !== null) {
      message.expiresIn = Height.fromAmino(object.expires_in);
    }
    if (object.mutable_meta_properties !== undefined && object.mutable_meta_properties !== null) {
      message.mutableMetaProperties = PropertyList.fromAmino(object.mutable_meta_properties);
    }
    if (object.mutable_properties !== undefined && object.mutable_properties !== null) {
      message.mutableProperties = PropertyList.fromAmino(object.mutable_properties);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    obj.maker_split = message.makerSplit === "" ? undefined : message.makerSplit;
    obj.taker_split = message.takerSplit === "" ? undefined : message.takerSplit;
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
      typeUrl: "/AssetMantle.modules.orders.transactions.modify.Message",
      value: Message.encode(message).finish()
    };
  }
};