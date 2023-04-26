import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface TransactionResponse {
  classificationID: string;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/assetmantle.modules.orders.transactions.define.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  classification_i_d: string;
}
export interface TransactionResponseAminoMsg {
  type: "/assetmantle.modules.orders.transactions.define.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  classification_i_d: string;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    classificationID: ""
  };
}
export const TransactionResponse = {
  encode(message: TransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classificationID !== "") {
      writer.uint32(10).string(message.classificationID);
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
          message.classificationID = reader.string();
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
      classificationID: isSet(object.classificationID) ? String(object.classificationID) : ""
    };
  },
  toJSON(message: TransactionResponse): unknown {
    const obj: any = {};
    message.classificationID !== undefined && (obj.classificationID = message.classificationID);
    return obj;
  },
  fromPartial(object: Partial<TransactionResponse>): TransactionResponse {
    const message = createBaseTransactionResponse();
    message.classificationID = object.classificationID ?? "";
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    return {
      classificationID: object.classification_i_d
    };
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID;
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
      typeUrl: "/assetmantle.modules.orders.transactions.define.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};