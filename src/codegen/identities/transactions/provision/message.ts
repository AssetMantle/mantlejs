import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  to: string;
  identityID?: IdentityID;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.identities.transactions.provision.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  to: string;
  identity_i_d?: IdentityIDAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.identities.transactions.provision.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  to: string;
  identity_i_d?: IdentityIDSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    to: "",
    identityID: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(26).fork()).ldelim();
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
          message.to = reader.string();
          break;
        case 3:
          message.identityID = IdentityID.decode(reader, reader.uint32());
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
      to: isSet(object.to) ? String(object.to) : "",
      identityID: isSet(object.identityID) ? IdentityID.fromJSON(object.identityID) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.identityID !== undefined && (obj.identityID = message.identityID ? IdentityID.toJSON(message.identityID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      to: object.to,
      identityID: object?.identity_i_d ? IdentityID.fromAmino(object.identity_i_d) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.to = message.to;
    obj.identity_i_d = message.identityID ? IdentityID.toAmino(message.identityID) : undefined;
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
      typeUrl: "/assetmantle.modules.identities.transactions.provision.Message",
      value: Message.encode(message).finish()
    };
  }
};