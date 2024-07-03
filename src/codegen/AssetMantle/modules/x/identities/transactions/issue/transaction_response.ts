//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface TransactionResponse {
  identityID?: IdentityID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.transactions.issue.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  identity_i_d?: IdentityIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/AssetMantle.modules.identities.transactions.issue.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  identity_i_d?: IdentityIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    identityID: undefined
  };
}
export const TransactionResponse = {
  typeUrl: "/AssetMantle.modules.identities.transactions.issue.TransactionResponse",
  encode(message: TransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TransactionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identityID = IdentityID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    const message = createBaseTransactionResponse();
    if (object.identity_i_d !== undefined && object.identity_i_d !== null) {
      message.identityID = IdentityID.fromAmino(object.identity_i_d);
    }
    return message;
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.identity_i_d = message.identityID ? IdentityID.toAmino(message.identityID) : undefined;
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
      typeUrl: "/AssetMantle.modules.identities.transactions.issue.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};