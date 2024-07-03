//@ts-nocheck
import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../../../../schema/data/base/any_data";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  data?: AnyData;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.metas.transactions.reveal.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  data?: AnyDataAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.metas.transactions.reveal.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  data?: AnyDataSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    data: undefined
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.metas.transactions.reveal.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.data !== undefined) {
      AnyData.encode(message.data, writer.uint32(18).fork()).ldelim();
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
          message.data = AnyData.decode(reader, reader.uint32());
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
    message.data = object.data !== undefined && object.data !== null ? AnyData.fromPartial(object.data) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = AnyData.fromAmino(object.data);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.data = message.data ? AnyData.toAmino(message.data) : undefined;
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
      typeUrl: "/AssetMantle.modules.metas.transactions.reveal.Message",
      value: Message.encode(message).finish()
    };
  }
};