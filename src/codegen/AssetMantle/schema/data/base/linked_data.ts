//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "../../ids/base/hash_id";
import { StringID, StringIDAmino, StringIDSDKType } from "../../ids/base/string_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface LinkedData {
  resourceID?: HashID;
  extensionID?: StringID;
  serviceEndpoint: string;
}
export interface LinkedDataProtoMsg {
  typeUrl: "/AssetMantle.schema.data.base.LinkedData";
  value: Uint8Array;
}
export interface LinkedDataAmino {
  resource_i_d?: HashIDAmino;
  extension_i_d?: StringIDAmino;
  service_endpoint?: string;
}
export interface LinkedDataAminoMsg {
  type: "/AssetMantle.schema.data.base.LinkedData";
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
  typeUrl: "/AssetMantle.schema.data.base.LinkedData",
  encode(message: LinkedData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): LinkedData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<LinkedData>): LinkedData {
    const message = createBaseLinkedData();
    message.resourceID = object.resourceID !== undefined && object.resourceID !== null ? HashID.fromPartial(object.resourceID) : undefined;
    message.extensionID = object.extensionID !== undefined && object.extensionID !== null ? StringID.fromPartial(object.extensionID) : undefined;
    message.serviceEndpoint = object.serviceEndpoint ?? "";
    return message;
  },
  fromAmino(object: LinkedDataAmino): LinkedData {
    const message = createBaseLinkedData();
    if (object.resource_i_d !== undefined && object.resource_i_d !== null) {
      message.resourceID = HashID.fromAmino(object.resource_i_d);
    }
    if (object.extension_i_d !== undefined && object.extension_i_d !== null) {
      message.extensionID = StringID.fromAmino(object.extension_i_d);
    }
    if (object.service_endpoint !== undefined && object.service_endpoint !== null) {
      message.serviceEndpoint = object.service_endpoint;
    }
    return message;
  },
  toAmino(message: LinkedData): LinkedDataAmino {
    const obj: any = {};
    obj.resource_i_d = message.resourceID ? HashID.toAmino(message.resourceID) : undefined;
    obj.extension_i_d = message.extensionID ? StringID.toAmino(message.extensionID) : undefined;
    obj.service_endpoint = message.serviceEndpoint === "" ? undefined : message.serviceEndpoint;
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
      typeUrl: "/AssetMantle.schema.data.base.LinkedData",
      value: LinkedData.encode(message).finish()
    };
  }
};