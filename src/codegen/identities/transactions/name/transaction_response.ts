import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  nameIdentityID?: IdentityID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.identities.transactions.name.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  name_identity_i_d?: IdentityIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.identities.transactions.name.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  name_identity_i_d?: IdentityIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    nameIdentityID: undefined
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nameIdentityID !== undefined) {
      IdentityID.encode(message.nameIdentityID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameIdentityID = IdentityID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TransactionResponse {
    return {
      nameIdentityID: isSet(object.nameIdentityID) ? IdentityID.fromJSON(object.nameIdentityID) : undefined
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.nameIdentityID !== undefined && (obj.nameIdentityID = message.nameIdentityID ? IdentityID.toJSON(message.nameIdentityID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.nameIdentityID = object.nameIdentityID !== undefined && object.nameIdentityID !== null ? IdentityID.fromPartial(object.nameIdentityID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    return {
      nameIdentityID: object?.name_identity_i_d ? IdentityID.fromAmino(object.name_identity_i_d) : undefined
    };
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.name_identity_i_d = message.nameIdentityID ? IdentityID.toAmino(message.nameIdentityID) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransactionResponseAminoMsg): TransactionResponse {
    return TransactionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: TransactionResponseProtoMsg): TransactionResponse {
    return TransactionResponse.decode(message.value);
  },
  toProto(message: TransactionResponse): Uint8Array {
    return TransactionResponse.encode(message).finish();
  },
  toProtoMsg(message: TransactionResponse): TransactionResponseProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.identities.transactions.name.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};