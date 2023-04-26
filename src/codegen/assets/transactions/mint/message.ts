import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  toID?: IdentityID;
  classificationID?: ClassificationID;
  immutableMetaProperties?: PropertyList;
  immutableProperties?: PropertyList;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.assets.transactions.mint.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  to_i_d?: IdentityIDAmino;
  classification_i_d?: ClassificationIDAmino;
  immutable_meta_properties?: PropertyListAmino;
  immutable_properties?: PropertyListAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.assets.transactions.mint.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  to_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  immutable_meta_properties?: PropertyListSDKType;
  immutable_properties?: PropertyListSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    toID: undefined,
    classificationID: undefined,
    immutableMetaProperties: undefined,
    immutableProperties: undefined,
    mutableMetaProperties: undefined,
    mutableProperties: undefined
  };
}
export const Message = {
  encode(message: Message, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.from !== "") {
      writer.uint32(10).string(message.from);
    }
    if (message.fromID !== undefined) {
      IdentityID.encode(message.fromID, writer.uint32(18).fork()).ldelim();
    }
    if (message.toID !== undefined) {
      IdentityID.encode(message.toID, writer.uint32(26).fork()).ldelim();
    }
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(34).fork()).ldelim();
    }
    if (message.immutableMetaProperties !== undefined) {
      PropertyList.encode(message.immutableMetaProperties, writer.uint32(42).fork()).ldelim();
    }
    if (message.immutableProperties !== undefined) {
      PropertyList.encode(message.immutableProperties, writer.uint32(50).fork()).ldelim();
    }
    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(58).fork()).ldelim();
    }
    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.from = reader.string();
          break;
        case 2:
          message.fromID = IdentityID.decode(reader, reader.uint32());
          break;
        case 3:
          message.toID = IdentityID.decode(reader, reader.uint32());
          break;
        case 4:
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 5:
          message.immutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 6:
          message.immutableProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 7:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 8:
          message.mutableProperties = PropertyList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Message {
    return {
      from: isSet(object.from) ? String(object.from) : "",
      fromID: isSet(object.fromID) ? IdentityID.fromJSON(object.fromID) : undefined,
      toID: isSet(object.toID) ? IdentityID.fromJSON(object.toID) : undefined,
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      immutableMetaProperties: isSet(object.immutableMetaProperties) ? PropertyList.fromJSON(object.immutableMetaProperties) : undefined,
      immutableProperties: isSet(object.immutableProperties) ? PropertyList.fromJSON(object.immutableProperties) : undefined,
      mutableMetaProperties: isSet(object.mutableMetaProperties) ? PropertyList.fromJSON(object.mutableMetaProperties) : undefined,
      mutableProperties: isSet(object.mutableProperties) ? PropertyList.fromJSON(object.mutableProperties) : undefined
    };
  },
  toJSON(message: Message): unknown {
    const obj: any = {};
    message.from !== undefined && (obj.from = message.from);
    message.fromID !== undefined && (obj.fromID = message.fromID ? IdentityID.toJSON(message.fromID) : undefined);
    message.toID !== undefined && (obj.toID = message.toID ? IdentityID.toJSON(message.toID) : undefined);
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.immutableMetaProperties !== undefined && (obj.immutableMetaProperties = message.immutableMetaProperties ? PropertyList.toJSON(message.immutableMetaProperties) : undefined);
    message.immutableProperties !== undefined && (obj.immutableProperties = message.immutableProperties ? PropertyList.toJSON(message.immutableProperties) : undefined);
    message.mutableMetaProperties !== undefined && (obj.mutableMetaProperties = message.mutableMetaProperties ? PropertyList.toJSON(message.mutableMetaProperties) : undefined);
    message.mutableProperties !== undefined && (obj.mutableProperties = message.mutableProperties ? PropertyList.toJSON(message.mutableProperties) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Message>): Message {
    const message = createBaseMessage();
    message.from = object.from ?? "";
    message.fromID = object.fromID !== undefined && object.fromID !== null ? IdentityID.fromPartial(object.fromID) : undefined;
    message.toID = object.toID !== undefined && object.toID !== null ? IdentityID.fromPartial(object.toID) : undefined;
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.immutableMetaProperties = object.immutableMetaProperties !== undefined && object.immutableMetaProperties !== null ? PropertyList.fromPartial(object.immutableMetaProperties) : undefined;
    message.immutableProperties = object.immutableProperties !== undefined && object.immutableProperties !== null ? PropertyList.fromPartial(object.immutableProperties) : undefined;
    message.mutableMetaProperties = object.mutableMetaProperties !== undefined && object.mutableMetaProperties !== null ? PropertyList.fromPartial(object.mutableMetaProperties) : undefined;
    message.mutableProperties = object.mutableProperties !== undefined && object.mutableProperties !== null ? PropertyList.fromPartial(object.mutableProperties) : undefined;
    return message;
  },
  fromAmino(object: MessageAmino): Message {
    return {
      from: object.from,
      fromID: object?.from_i_d ? IdentityID.fromAmino(object.from_i_d) : undefined,
      toID: object?.to_i_d ? IdentityID.fromAmino(object.to_i_d) : undefined,
      classificationID: object?.classification_i_d ? ClassificationID.fromAmino(object.classification_i_d) : undefined,
      immutableMetaProperties: object?.immutable_meta_properties ? PropertyList.fromAmino(object.immutable_meta_properties) : undefined,
      immutableProperties: object?.immutable_properties ? PropertyList.fromAmino(object.immutable_properties) : undefined,
      mutableMetaProperties: object?.mutable_meta_properties ? PropertyList.fromAmino(object.mutable_meta_properties) : undefined,
      mutableProperties: object?.mutable_properties ? PropertyList.fromAmino(object.mutable_properties) : undefined
    };
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.to_i_d = message.toID ? IdentityID.toAmino(message.toID) : undefined;
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.immutable_meta_properties = message.immutableMetaProperties ? PropertyList.toAmino(message.immutableMetaProperties) : undefined;
    obj.immutable_properties = message.immutableProperties ? PropertyList.toAmino(message.immutableProperties) : undefined;
    obj.mutable_meta_properties = message.mutableMetaProperties ? PropertyList.toAmino(message.mutableMetaProperties) : undefined;
    obj.mutable_properties = message.mutableProperties ? PropertyList.toAmino(message.mutableProperties) : undefined;
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
      typeUrl: "/assetmantle.modules.assets.transactions.mint.Message",
      value: Message.encode(message).finish()
    };
  }
};