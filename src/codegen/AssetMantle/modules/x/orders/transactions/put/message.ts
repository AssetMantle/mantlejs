//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../../schema/ids/base/asset_id";
import { Height, HeightAmino, HeightSDKType } from "../../../../../schema/types/base/height";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  fromID?: IdentityID;
  makerAssetID?: AssetID;
  takerAssetID?: AssetID;
  makerSplit: string;
  takerSplit: string;
  expiryHeight?: Height;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.transactions.put.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  maker_asset_i_d?: AssetIDAmino;
  taker_asset_i_d?: AssetIDAmino;
  maker_split?: string;
  taker_split?: string;
  expiry_height?: HeightAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.orders.transactions.put.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  maker_asset_i_d?: AssetIDSDKType;
  taker_asset_i_d?: AssetIDSDKType;
  maker_split: string;
  taker_split: string;
  expiry_height?: HeightSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    makerAssetID: undefined,
    takerAssetID: undefined,
    makerSplit: "",
    takerSplit: "",
    expiryHeight: undefined
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.orders.transactions.put.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.makerAssetID !== undefined) {
      AssetID.encode(message.makerAssetID, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerAssetID !== undefined) {
      AssetID.encode(message.takerAssetID, writer.uint32(34).fork()).ldelim();
    }
    if (message.makerSplit !== "") {
      writer.uint32(42).string(message.makerSplit);
    }
    if (message.takerSplit !== "") {
      writer.uint32(50).string(message.takerSplit);
    }
    if (message.expiryHeight !== undefined) {
      Height.encode(message.expiryHeight, writer.uint32(58).fork()).ldelim();
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
          message.makerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 4:
          message.takerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 5:
          message.makerSplit = reader.string();
          break;
        case 6:
          message.takerSplit = reader.string();
          break;
        case 7:
          message.expiryHeight = Height.decode(reader, reader.uint32());
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
    message.makerAssetID = object.makerAssetID !== undefined && object.makerAssetID !== null ? AssetID.fromPartial(object.makerAssetID) : undefined;
    message.takerAssetID = object.takerAssetID !== undefined && object.takerAssetID !== null ? AssetID.fromPartial(object.takerAssetID) : undefined;
    message.makerSplit = object.makerSplit ?? "";
    message.takerSplit = object.takerSplit ?? "";
    message.expiryHeight = object.expiryHeight !== undefined && object.expiryHeight !== null ? Height.fromPartial(object.expiryHeight) : undefined;
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
    if (object.maker_asset_i_d !== undefined && object.maker_asset_i_d !== null) {
      message.makerAssetID = AssetID.fromAmino(object.maker_asset_i_d);
    }
    if (object.taker_asset_i_d !== undefined && object.taker_asset_i_d !== null) {
      message.takerAssetID = AssetID.fromAmino(object.taker_asset_i_d);
    }
    if (object.maker_split !== undefined && object.maker_split !== null) {
      message.makerSplit = object.maker_split;
    }
    if (object.taker_split !== undefined && object.taker_split !== null) {
      message.takerSplit = object.taker_split;
    }
    if (object.expiry_height !== undefined && object.expiry_height !== null) {
      message.expiryHeight = Height.fromAmino(object.expiry_height);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.maker_asset_i_d = message.makerAssetID ? AssetID.toAmino(message.makerAssetID) : undefined;
    obj.taker_asset_i_d = message.takerAssetID ? AssetID.toAmino(message.takerAssetID) : undefined;
    obj.maker_split = message.makerSplit === "" ? undefined : message.makerSplit;
    obj.taker_split = message.takerSplit === "" ? undefined : message.takerSplit;
    obj.expiry_height = message.expiryHeight ? Height.toAmino(message.expiryHeight) : undefined;
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
      typeUrl: "/AssetMantle.modules.orders.transactions.put.Message",
      value: Message.encode(message).finish()
    };
  }
};