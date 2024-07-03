//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface Message {
  from: string;
  to: string;
  identityID?: IdentityID;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.transactions.provision.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  to?: string;
  identity_i_d?: IdentityIDAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.identities.transactions.provision.Message";
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
  typeUrl: "/AssetMantle.modules.identities.transactions.provision.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    }
    if (object.identity_i_d !== undefined && object.identity_i_d !== null) {
      message.identityID = IdentityID.fromAmino(object.identity_i_d);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.to = message.to === "" ? undefined : message.to;
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
      typeUrl: "/AssetMantle.modules.identities.transactions.provision.Message",
      value: Message.encode(message).finish()
    };
  }
};