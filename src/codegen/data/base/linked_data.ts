import { HashID, HashIDAmino, HashIDSDKType } from "../../ids/base/hash_id";
import { StringID, StringIDAmino, StringIDSDKType } from "../../ids/base/string_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface LinkedData {
  resourceID?: HashID;
  extensionID?: StringID;
  serviceEndpoint: string;
}
export interface LinkedDataProtoMsg {
  typeUrl: "/assetmantle.schema.data.base.LinkedData";
  value: Uint8Array;
}
export interface LinkedDataAmino {
  resource_i_d?: HashIDAmino;
  extension_i_d?: StringIDAmino;
  service_endpoint: string;
}
export interface LinkedDataAminoMsg {
  type: "/assetmantle.schema.data.base.LinkedData";
  value: LinkedDataAmino;
}
export interface LinkedDataSDKType {
  resource_i_d?: HashIDSDKType;
  extension_i_d?: StringIDSDKType;
  service_endpoint: string;
}
function createBaseLinkedData(): LinkedData {
  return {
    resourceID: undefined,
    extensionID: undefined,
    serviceEndpoint: ""
  };
}
export const LinkedData = {
  encode(message: LinkedData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resourceID !== undefined) {
      HashID.encode(message.resourceID, writer.uint32(10).fork()).ldelim();
    }
    if (message.extensionID !== undefined) {
      StringID.encode(message.extensionID, writer.uint32(18).fork()).ldelim();
    }
    if (message.serviceEndpoint !== "") {
      writer.uint32(26).string(message.serviceEndpoint);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): LinkedData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLinkedData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resourceID = HashID.decode(reader, reader.uint32());
          break;
        case 2:
          message.extensionID = StringID.decode(reader, reader.uint32());
          break;
        case 3:
          message.serviceEndpoint = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LinkedData {
    return {
      resourceID: isSet(object.resourceID) ? HashID.fromJSON(object.resourceID) : undefined,
      extensionID: isSet(object.extensionID) ? StringID.fromJSON(object.extensionID) : undefined,
      serviceEndpoint: isSet(object.serviceEndpoint) ? String(object.serviceEndpoint) : ""
    };
  },
  toJSON(message: LinkedData): unknown {
    const obj: any = {};
    message.resourceID !== undefined && (obj.resourceID = message.resourceID ? HashID.toJSON(message.resourceID) : undefined);
    message.extensionID !== undefined && (obj.extensionID = message.extensionID ? StringID.toJSON(message.extensionID) : undefined);
    message.serviceEndpoint !== undefined && (obj.serviceEndpoint = message.serviceEndpoint);
    return obj;
  },
  fromPartial(object: Partial<LinkedData>): LinkedData {
    const message = createBaseLinkedData();
    message.resourceID = object.resourceID !== undefined && object.resourceID !== null ? HashID.fromPartial(object.resourceID) : undefined;
    message.extensionID = object.extensionID !== undefined && object.extensionID !== null ? StringID.fromPartial(object.extensionID) : undefined;
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
  fromAmino(object: LinkedDataAmino): LinkedData {
    return {
      resourceID: object?.resource_i_d ? HashID.fromAmino(object.resource_i_d) : undefined,
      extensionID: object?.extension_i_d ? StringID.fromAmino(object.extension_i_d) : undefined,
      serviceEndpoint: object.service_endpoint
    };
  },
  toAmino(message: LinkedData): LinkedDataAmino {
    const obj: any = {};
    obj.resource_i_d = message.resourceID ? HashID.toAmino(message.resourceID) : undefined;
    obj.extension_i_d = message.extensionID ? StringID.toAmino(message.extensionID) : undefined;
    obj.service_endpoint = message.serviceEndpoint;
    return obj;
  },
  fromAminoMsg(object: LinkedDataAminoMsg): LinkedData {
    return LinkedData.fromAmino(object.value);
  },
  fromProtoMsg(message: LinkedDataProtoMsg): LinkedData {
    return LinkedData.decode(message.value);
  },
  toProto(message: LinkedData): Uint8Array {
    return LinkedData.encode(message).finish();
  },
  toProtoMsg(message: LinkedData): LinkedDataProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.data.base.LinkedData",
      value: LinkedData.encode(message).finish()
    };
  }
};