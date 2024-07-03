//@ts-nocheck
import { StringID, StringIDAmino, StringIDSDKType } from "../../../../../schema/ids/base/string_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  name?: StringID;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.transactions.name.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  name?: StringIDAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.identities.transactions.name.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  name?: StringIDSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    name: undefined
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.identities.transactions.name.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== undefined) {
      StringID.encode(message.name, writer.uint32(18).fork()).ldelim();
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
          message.name = StringID.decode(reader, reader.uint32());
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
    message.name = object.name !== undefined && object.name !== null ? StringID.fromPartial(object.name) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = StringID.fromAmino(object.name);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.name = message.name ? StringID.toAmino(message.name) : undefined;
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
      typeUrl: "/AssetMantle.modules.identities.transactions.name.Message",
      value: Message.encode(message).finish()
    };
  }
};