import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface QueryRequest {
  classificationID?: ClassificationID;
}
export interface QueryRequestProtoMsg {
  typeUrl: "/assetmantle.modules.classifications.queries.classification.QueryRequest";
  value: Uint8Array;
}
export interface QueryRequestAmino {
  classification_i_d?: ClassificationIDAmino;
}
export interface QueryRequestAminoMsg {
  type: "/assetmantle.modules.classifications.queries.classification.QueryRequest";
  value: QueryRequestAmino;
}
export interface QueryRequestSDKType {
  classification_i_d?: ClassificationIDSDKType;
}
function createBaseQueryRequest(): QueryRequest {
  return {
    classificationID: undefined
  };
}
export const QueryRequest = {
  encode(message: QueryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRequest();
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
  fromJSON(object: any): QueryRequest {
    return {
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined
    };
  },
  toJSON(message: QueryRequest): unknown {
    const obj: any = {};
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryRequest>): QueryRequest {
    const message = createBaseQueryRequest();
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    return message;
  },
  fromAmino(object: QueryRequestAmino): QueryRequest {
    return {
      classificationID: object?.classification_i_d ? ClassificationID.fromAmino(object.classification_i_d) : undefined
    };
  },
  toAmino(message: QueryRequest): QueryRequestAmino {
    const obj: any = {};
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryRequestAminoMsg): QueryRequest {
    return QueryRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryRequestProtoMsg): QueryRequest {
    return QueryRequest.decode(message.value);
  },
  toProto(message: QueryRequest): Uint8Array {
    return QueryRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryRequest): QueryRequestProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.classifications.queries.classification.QueryRequest",
      value: QueryRequest.encode(message).finish()
    };
  }
};