import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../../ids/base/identity_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "../../../ids/base/classification_id";
import { AssetID, AssetIDAmino, AssetIDSDKType } from "../../../ids/base/asset_id";
import { Height, HeightAmino, HeightSDKType } from "../../../types/base/height";
import { PropertyList, PropertyListAmino, PropertyListSDKType } from "../../../lists/base/property_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface Message {
  from: string;
  fromID?: IdentityID;
  classificationID?: ClassificationID;
  takerID?: IdentityID;
  makerAssetID?: AssetID;
  takerAssetID?: AssetID;
  expiresIn?: Height;
  makerSplit: string;
  takerSplit: string;
  immutableMetaProperties?: PropertyList;
  immutableProperties?: PropertyList;
  mutableMetaProperties?: PropertyList;
  mutableProperties?: PropertyList;
}
export interface MessageProtoMsg {
  typeUrl: "/assetmantle.modules.orders.transactions.immediate.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from: string;
  from_i_d?: IdentityIDAmino;
  classification_i_d?: ClassificationIDAmino;
  taker_i_d?: IdentityIDAmino;
  maker_asset_i_d?: AssetIDAmino;
  taker_asset_i_d?: AssetIDAmino;
  expires_in?: HeightAmino;
  maker_split: string;
  taker_split: string;
  immutable_meta_properties?: PropertyListAmino;
  immutable_properties?: PropertyListAmino;
  mutable_meta_properties?: PropertyListAmino;
  mutable_properties?: PropertyListAmino;
}
export interface MessageAminoMsg {
  type: "/assetmantle.modules.orders.transactions.immediate.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  taker_i_d?: IdentityIDSDKType;
  maker_asset_i_d?: AssetIDSDKType;
  taker_asset_i_d?: AssetIDSDKType;
  expires_in?: HeightSDKType;
  maker_split: string;
  taker_split: string;
  immutable_meta_properties?: PropertyListSDKType;
  immutable_properties?: PropertyListSDKType;
  mutable_meta_properties?: PropertyListSDKType;
  mutable_properties?: PropertyListSDKType;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    classificationID: undefined,
    takerID: undefined,
    makerAssetID: undefined,
    takerAssetID: undefined,
    expiresIn: undefined,
    makerSplit: "",
    takerSplit: "",
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
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(26).fork()).ldelim();
    }
    if (message.takerID !== undefined) {
      IdentityID.encode(message.takerID, writer.uint32(34).fork()).ldelim();
    }
    if (message.makerAssetID !== undefined) {
      AssetID.encode(message.makerAssetID, writer.uint32(42).fork()).ldelim();
    }
    if (message.takerAssetID !== undefined) {
      AssetID.encode(message.takerAssetID, writer.uint32(50).fork()).ldelim();
    }
    if (message.expiresIn !== undefined) {
      Height.encode(message.expiresIn, writer.uint32(58).fork()).ldelim();
    }
    if (message.makerSplit !== "") {
      writer.uint32(66).string(message.makerSplit);
    }
    if (message.takerSplit !== "") {
      writer.uint32(74).string(message.takerSplit);
    }
    if (message.immutableMetaProperties !== undefined) {
      PropertyList.encode(message.immutableMetaProperties, writer.uint32(82).fork()).ldelim();
    }
    if (message.immutableProperties !== undefined) {
      PropertyList.encode(message.immutableProperties, writer.uint32(90).fork()).ldelim();
    }
    if (message.mutableMetaProperties !== undefined) {
      PropertyList.encode(message.mutableMetaProperties, writer.uint32(98).fork()).ldelim();
    }
    if (message.mutableProperties !== undefined) {
      PropertyList.encode(message.mutableProperties, writer.uint32(106).fork()).ldelim();
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
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 4:
          message.takerID = IdentityID.decode(reader, reader.uint32());
          break;
        case 5:
          message.makerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 6:
          message.takerAssetID = AssetID.decode(reader, reader.uint32());
          break;
        case 7:
          message.expiresIn = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.makerSplit = reader.string();
          break;
        case 9:
          message.takerSplit = reader.string();
          break;
        case 10:
          message.immutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 11:
          message.immutableProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 12:
          message.mutableMetaProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 13:
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
      classificationID: isSet(object.classificationID) ? ClassificationID.fromJSON(object.classificationID) : undefined,
      takerID: isSet(object.takerID) ? IdentityID.fromJSON(object.takerID) : undefined,
      makerAssetID: isSet(object.makerAssetID) ? AssetID.fromJSON(object.makerAssetID) : undefined,
      takerAssetID: isSet(object.takerAssetID) ? AssetID.fromJSON(object.takerAssetID) : undefined,
      expiresIn: isSet(object.expiresIn) ? Height.fromJSON(object.expiresIn) : undefined,
      makerSplit: isSet(object.makerSplit) ? String(object.makerSplit) : "",
      takerSplit: isSet(object.takerSplit) ? String(object.takerSplit) : "",
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
    message.classificationID !== undefined && (obj.classificationID = message.classificationID ? ClassificationID.toJSON(message.classificationID) : undefined);
    message.takerID !== undefined && (obj.takerID = message.takerID ? IdentityID.toJSON(message.takerID) : undefined);
    message.makerAssetID !== undefined && (obj.makerAssetID = message.makerAssetID ? AssetID.toJSON(message.makerAssetID) : undefined);
    message.takerAssetID !== undefined && (obj.takerAssetID = message.takerAssetID ? AssetID.toJSON(message.takerAssetID) : undefined);
    message.expiresIn !== undefined && (obj.expiresIn = message.expiresIn ? Height.toJSON(message.expiresIn) : undefined);
    message.makerSplit !== undefined && (obj.makerSplit = message.makerSplit);
    message.takerSplit !== undefined && (obj.takerSplit = message.takerSplit);
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
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.takerID = object.takerID !== undefined && object.takerID !== null ? IdentityID.fromPartial(object.takerID) : undefined;
    message.makerAssetID = object.makerAssetID !== undefined && object.makerAssetID !== null ? AssetID.fromPartial(object.makerAssetID) : undefined;
    message.takerAssetID = object.takerAssetID !== undefined && object.takerAssetID !== null ? AssetID.fromPartial(object.takerAssetID) : undefined;
    message.expiresIn = object.expiresIn !== undefined && object.expiresIn !== null ? Height.fromPartial(object.expiresIn) : undefined;
    message.makerSplit = object.makerSplit ?? "";
    message.takerSplit = object.takerSplit ?? "";
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
      classificationID: object?.classification_i_d ? ClassificationID.fromAmino(object.classification_i_d) : undefined,
      takerID: object?.taker_i_d ? IdentityID.fromAmino(object.taker_i_d) : undefined,
      makerAssetID: object?.maker_asset_i_d ? AssetID.fromAmino(object.maker_asset_i_d) : undefined,
      takerAssetID: object?.taker_asset_i_d ? AssetID.fromAmino(object.taker_asset_i_d) : undefined,
      expiresIn: object?.expires_in ? Height.fromAmino(object.expires_in) : undefined,
      makerSplit: object.maker_split,
      takerSplit: object.taker_split,
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
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.taker_i_d = message.takerID ? IdentityID.toAmino(message.takerID) : undefined;
    obj.maker_asset_i_d = message.makerAssetID ? AssetID.toAmino(message.makerAssetID) : undefined;
    obj.taker_asset_i_d = message.takerAssetID ? AssetID.toAmino(message.takerAssetID) : undefined;
    obj.expires_in = message.expiresIn ? Height.toAmino(message.expiresIn) : undefined;
    obj.maker_split = message.makerSplit;
    obj.taker_split = message.takerSplit;
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
      typeUrl: "/assetmantle.modules.orders.transactions.immediate.Message",
      value: Message.encode(message).finish()
    };
  }
};