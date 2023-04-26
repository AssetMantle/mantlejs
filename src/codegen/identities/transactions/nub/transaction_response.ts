import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  nubID: string;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.identities.transactions.nub.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  nub_i_d: string;
}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.identities.transactions.nub.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  nub_i_d: string;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    nubID: ""
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nubID !== "") {
      writer.uint32(10).string(message.nubID);
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
          message.nubID = reader.string();
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
      nubID: isSet(object.nubID) ? String(object.nubID) : ""
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.nubID !== undefined && (obj.nubID = message.nubID);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.nubID = object.nubID ?? "";
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    return {
      nubID: object.nub_i_d
    };
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.nub_i_d = message.nubID;
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
      typeUrl: "/assetmantle.modules.identities.transactions.nub.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};