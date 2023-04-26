import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  coins: Coin[];
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.splits.transactions.wrap.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  coins: CoinAmino[];
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.splits.transactions.wrap.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  coins: CoinSDKType[];
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    coins: []
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
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
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
          message.coins.push(Coin.decode(reader, reader.uint32()));
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
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      fromID: object?.from_i_d ? IdentityID.fromAmino(object.from_i_d) : undefined,
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    if (message.coins) {
      obj.coins = message.coins.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.coins = [];
    }
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
      typeUrl: "/assetmantle.modules.splits.transactions.wrap.Message",
      value: Message.encode(message).finish()
    };
  }
};