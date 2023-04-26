import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../../ids/base/any_ownable_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  ownableID?: AnyOwnableID;
  value: string;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.splits.transactions.unwrap.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  ownable_i_d?: AnyOwnableIDAmino;
  value: string;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.splits.transactions.unwrap.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  ownable_i_d?: AnyOwnableIDSDKType;
  value: string;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    ownableID: undefined,
    value: ""
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
    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(26).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(34).string(message.value);
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
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;
        case 4:
          message.value = reader.string();
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
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      fromID: object?.from_i_d ? IdentityID.fromAmino(object.from_i_d) : undefined,
      ownableID: object?.ownable_i_d ? AnyOwnableID.fromAmino(object.ownable_i_d) : undefined,
      value: object.value
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.ownable_i_d = message.ownableID ? AnyOwnableID.toAmino(message.ownableID) : undefined;
    obj.value = message.value;
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
      typeUrl: "/assetmantle.modules.splits.transactions.unwrap.Message",
      value: Message.encode(message).finish()
    };
  }
};