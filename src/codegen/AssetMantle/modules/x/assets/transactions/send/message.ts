//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../../../schema/ids/base/asset_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  fromID?: IdentityID;
  toID?: IdentityID;
  assetID?: AssetID;
  value: string;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.assets.transactions.send.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  to_i_d?: IdentityIDAmino;
  asset_i_d?: AssetIDAmino;
  value?: string;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.assets.transactions.send.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  to_i_d?: IdentityIDSDKType;
  asset_i_d?: AssetIDSDKType;
  value: string;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    toID: undefined,
    assetID: undefined,
    value: ""
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.assets.transactions.send.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.toID !== undefined) {
      IdentityID.encode(message.toID, writer.uint32(26).fork()).ldelim();
    }
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(34).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(42).string(message.value);
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
          message.toID = IdentityID.decode(reader, reader.uint32());
          break;
        case 4:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        case 5:
          message.value = reader.string();
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
    message.toID = object.toID !== undefined && object.toID !== null ? IdentityID.fromPartial(object.toID) : undefined;
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.value = object.value ?? "";
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
    if (object.to_i_d !== undefined && object.to_i_d !== null) {
      message.toID = IdentityID.fromAmino(object.to_i_d);
    }
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.to_i_d = message.toID ? IdentityID.toAmino(message.toID) : undefined;
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
    obj.value = message.value === "" ? undefined : message.value;
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
      typeUrl: "/AssetMantle.modules.assets.transactions.send.Message",
      value: Message.encode(message).finish()
    };
  }
};