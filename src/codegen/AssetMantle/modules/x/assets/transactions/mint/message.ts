//@ts-nocheck
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../../../schema/ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../../../schema/ids/base/classification_id";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../../../schema/lists/base/property_list";
import { BinaryReader, BinaryWriter } from "../../../../../../binary";
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
  typeUrl: "/AssetMantle.modules.assets.transactions.mint.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  to_i_d?: IdentityIDAmino;
  classification_i_d?: ClassificationIDAmino;
  immutable_meta_properties?: PropertyListAmino;
  immutable_properties?: PropertyListAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.assets.transactions.mint.Message";
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
  typeUrl: "/AssetMantle.modules.assets.transactions.mint.Message",
  encode(message: Message, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Message {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
    const message = createBaseMessage();
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    }
    if (object.from_i_d !== undefined && object.from_i_d !== null) {
      message.fromID = IdentityID.fromAmino(object.from_i_d);
    }
    if (object.to_i_d !== undefined && object.to_i_d !== null) {
      message.toID = IdentityID.fromAmino(object.to_i_d);
    }
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    if (object.immutable_meta_properties !== undefined && object.immutable_meta_properties !== null) {
      message.immutableMetaProperties = PropertyList.fromAmino(object.immutable_meta_properties);
    }
    if (object.immutable_properties !== undefined && object.immutable_properties !== null) {
      message.immutableProperties = PropertyList.fromAmino(object.immutable_properties);
    }
    if (object.mutable_meta_properties !== undefined && object.mutable_meta_properties !== null) {
      message.mutableMetaProperties = PropertyList.fromAmino(object.mutable_meta_properties);
    }
    if (object.mutable_properties !== undefined && object.mutable_properties !== null) {
      message.mutableProperties = PropertyList.fromAmino(object.mutable_properties);
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
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
      typeUrl: "/AssetMantle.modules.assets.transactions.mint.Message",
      value: Message.encode(message).finish()
    };
  }
};