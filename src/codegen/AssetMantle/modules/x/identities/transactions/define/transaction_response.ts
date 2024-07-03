//@ts-nocheck
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../../../schema/ids/base/classification_id";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
export interface TransactionResponse {
  classificationID?: ClassificationID;
}
export interface TransactionResponseProtoMsg {
  typeUrl: "/AssetMantle.modules.identities.transactions.define.TransactionResponse";
  value: Uint8Array;
}
export interface TransactionResponseAmino {
  classification_i_d?: ClassificationIDAmino;
}
export interface TransactionResponseAminoMsg {
  type: "/AssetMantle.modules.identities.transactions.define.TransactionResponse";
  value: TransactionResponseAmino;
}
export interface TransactionResponseSDKType {
  classification_i_d?: ClassificationIDSDKType;
}
function createBaseTransactionResponse(): TransactionResponse {
  return {
    classificationID: undefined
  };
}
export const TransactionResponse = {
  typeUrl: "/AssetMantle.modules.identities.transactions.define.TransactionResponse",
  encode(message: TransactionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(10).fork()).ldelim();
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
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
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    return message;
  },
  fromAmino(object: TransactionResponseAmino): TransactionResponse {
    const message = createBaseTransactionResponse();
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    return message;
  },
  toAmino(message: TransactionResponse): TransactionResponseAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
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
      typeUrl: "/AssetMantle.modules.identities.transactions.define.TransactionResponse",
      value: TransactionResponse.encode(message).finish()
    };
  }
};