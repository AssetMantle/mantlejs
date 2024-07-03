//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "./classification_id";
import { DataID, DataIDAmino, DataIDSDKType } from "./data_id";
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "./maintainer_id";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order_id";
import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "./property_id";
import { SplitID, SplitIDAmino, SplitIDSDKType } from "./split_id";
import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface AnyID {
  assetID?: AssetID;
  classificationID?: ClassificationID;
  dataID?: DataID;
  hashID?: HashID;
  identityID?: IdentityID;
  maintainerID?: MaintainerID;
  orderID?: OrderID;
  propertyID?: PropertyID;
  splitID?: SplitID;
  stringID?: StringID;
}
export interface AnyIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.AnyID";
  value: Uint8Array;
}
export interface AnyIDAmino {
  asset_i_d?: AssetIDAmino;
  classification_i_d?: ClassificationIDAmino;
  data_i_d?: DataIDAmino;
  hash_i_d?: HashIDAmino;
  identity_i_d?: IdentityIDAmino;
  maintainer_i_d?: MaintainerIDAmino;
  order_i_d?: OrderIDAmino;
  property_i_d?: PropertyIDAmino;
  split_i_d?: SplitIDAmino;
  string_i_d?: StringIDAmino;
}
export interface AnyIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.AnyID";
  value: AnyIDAmino;
}
export interface AnyIDSDKType {
  asset_i_d?: AssetIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  data_i_d?: DataIDSDKType;
  hash_i_d?: HashIDSDKType;
  identity_i_d?: IdentityIDSDKType;
  maintainer_i_d?: MaintainerIDSDKType;
  order_i_d?: OrderIDSDKType;
  property_i_d?: PropertyIDSDKType;
  split_i_d?: SplitIDSDKType;
  string_i_d?: StringIDSDKType;
}
function createBaseAnyID(): AnyID {
  return {
    assetID: undefined,
    classificationID: undefined,
    dataID: undefined,
    hashID: undefined,
    identityID: undefined,
    maintainerID: undefined,
    orderID: undefined,
    propertyID: undefined,
    splitID: undefined,
    stringID: undefined
  };
}
export const AnyID = {
  typeUrl: "/AssetMantle.schema.ids.base.AnyID",
  encode(message: AnyID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    if (message.classificationID !== undefined) {
      ClassificationID.encode(message.classificationID, writer.uint32(18).fork()).ldelim();
    }
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(26).fork()).ldelim();
    }
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(34).fork()).ldelim();
    }
    if (message.identityID !== undefined) {
      IdentityID.encode(message.identityID, writer.uint32(42).fork()).ldelim();
    }
    if (message.maintainerID !== undefined) {
      MaintainerID.encode(message.maintainerID, writer.uint32(50).fork()).ldelim();
    }
    if (message.orderID !== undefined) {
      OrderID.encode(message.orderID, writer.uint32(58).fork()).ldelim();
    }
    if (message.propertyID !== undefined) {
      PropertyID.encode(message.propertyID, writer.uint32(66).fork()).ldelim();
    }
    if (message.splitID !== undefined) {
      SplitID.encode(message.splitID, writer.uint32(74).fork()).ldelim();
    }
    if (message.stringID !== undefined) {
      StringID.encode(message.stringID, writer.uint32(82).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnyID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        case 2:
          message.classificationID = ClassificationID.decode(reader, reader.uint32());
          break;
        case 3:
          message.dataID = DataID.decode(reader, reader.uint32());
          break;
        case 4:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        case 5:
          message.identityID = IdentityID.decode(reader, reader.uint32());
          break;
        case 6:
          message.maintainerID = MaintainerID.decode(reader, reader.uint32());
          break;
        case 7:
          message.orderID = OrderID.decode(reader, reader.uint32());
          break;
        case 8:
          message.propertyID = PropertyID.decode(reader, reader.uint32());
          break;
        case 9:
          message.splitID = SplitID.decode(reader, reader.uint32());
          break;
        case 10:
          message.stringID = StringID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AnyID>): AnyID {
    const message = createBaseAnyID();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.classificationID = object.classificationID !== undefined && object.classificationID !== null ? ClassificationID.fromPartial(object.classificationID) : undefined;
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    message.identityID = object.identityID !== undefined && object.identityID !== null ? IdentityID.fromPartial(object.identityID) : undefined;
    message.maintainerID = object.maintainerID !== undefined && object.maintainerID !== null ? MaintainerID.fromPartial(object.maintainerID) : undefined;
    message.orderID = object.orderID !== undefined && object.orderID !== null ? OrderID.fromPartial(object.orderID) : undefined;
    message.propertyID = object.propertyID !== undefined && object.propertyID !== null ? PropertyID.fromPartial(object.propertyID) : undefined;
    message.splitID = object.splitID !== undefined && object.splitID !== null ? SplitID.fromPartial(object.splitID) : undefined;
    message.stringID = object.stringID !== undefined && object.stringID !== null ? StringID.fromPartial(object.stringID) : undefined;
    return message;
  },
  fromAmino(object: AnyIDAmino): AnyID {
    const message = createBaseAnyID();
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    if (object.classification_i_d !== undefined && object.classification_i_d !== null) {
      message.classificationID = ClassificationID.fromAmino(object.classification_i_d);
    }
    if (object.data_i_d !== undefined && object.data_i_d !== null) {
      message.dataID = DataID.fromAmino(object.data_i_d);
    }
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    if (object.identity_i_d !== undefined && object.identity_i_d !== null) {
      message.identityID = IdentityID.fromAmino(object.identity_i_d);
    }
    if (object.maintainer_i_d !== undefined && object.maintainer_i_d !== null) {
      message.maintainerID = MaintainerID.fromAmino(object.maintainer_i_d);
    }
    if (object.order_i_d !== undefined && object.order_i_d !== null) {
      message.orderID = OrderID.fromAmino(object.order_i_d);
    }
    if (object.property_i_d !== undefined && object.property_i_d !== null) {
      message.propertyID = PropertyID.fromAmino(object.property_i_d);
    }
    if (object.split_i_d !== undefined && object.split_i_d !== null) {
      message.splitID = SplitID.fromAmino(object.split_i_d);
    }
    if (object.string_i_d !== undefined && object.string_i_d !== null) {
      message.stringID = StringID.fromAmino(object.string_i_d);
    }
    return message;
  },
  toAmino(message: AnyID): AnyIDAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.data_i_d = message.dataID ? DataID.toAmino(message.dataID) : undefined;
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    obj.identity_i_d = message.identityID ? IdentityID.toAmino(message.identityID) : undefined;
    obj.maintainer_i_d = message.maintainerID ? MaintainerID.toAmino(message.maintainerID) : undefined;
    obj.order_i_d = message.orderID ? OrderID.toAmino(message.orderID) : undefined;
    obj.property_i_d = message.propertyID ? PropertyID.toAmino(message.propertyID) : undefined;
    obj.split_i_d = message.splitID ? SplitID.toAmino(message.splitID) : undefined;
    obj.string_i_d = message.stringID ? StringID.toAmino(message.stringID) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnyIDAminoMsg): AnyID {
    return AnyID.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyIDProtoMsg): AnyID {
    return AnyID.decode(message.value);
  },
  toProto(message: AnyID): Uint8Array {
    return AnyID.encode(message).finish();
  },
  toProtoMsg(message: AnyID): AnyIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.AnyID",
      value: AnyID.encode(message).finish()
    };
  }
};