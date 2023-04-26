import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  identityID: string;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.identities.transactions.issue.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  identity_i_d: string;
}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.identities.transactions.issue.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  identity_i_d: string;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    identityID: ""
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identityID !== "") {
      writer.uint32(10).string(message.identityID);
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
          message.identityID = reader.string();
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
      identityID: isSet(object.identityID) ? String(object.identityID) : ""
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.identityID !== undefined && (obj.identityID = message.identityID);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.identityID = object.identityID ?? "";
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    return {
      identityID: object.identity_i_d
    };
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.identity_i_d = message.identityID;
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
      typeUrl: "/assetmantle.modules.identities.transactions.issue.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};