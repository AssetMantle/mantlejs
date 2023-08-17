import { StringID, StringIDAmino, StringIDSDKType } from "../../../ids/base/string_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  name?: StringID;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.identities.transactions.name.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  name?: StringIDAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.identities.transactions.name.Message";
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
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.name !== undefined) {
      StringID.encode(message.name, writer.uint32(18).fork()).ldelim();
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
          message.name = StringID.decode(reader, reader.uint32());
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
      name: isSet(object.name) ? StringID.fromJSON(object.name) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.name !== undefined && (obj.name = message.name ? StringID.toJSON(message.name) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.name = object.name !== undefined && object.name !== null ? StringID.fromPartial(object.name) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      name: object?.name ? StringID.fromAmino(object.name) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
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
      typeUrl: "/assetmantle.modules.identities.transactions.name.Message",
      value: Message.encode(message).finish()
    };
  }
};