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
  maintainedProperties?: PropertyList;
  canMakeOrder: boolean;
  canCancelOrder: boolean;
  canAddMaintainer: boolean;
  canRemoveMaintainer: boolean;
  canMutateMaintainer: boolean;
}
export interface MessageProtoMsg {
  typeUrl: "/AssetMantle.modules.orders.transactions.deputize.Message";
  value: Uint8Array;
}
export interface MessageAmino {
  from?: string;
  from_i_d?: IdentityIDAmino;
  to_i_d?: IdentityIDAmino;
  classification_i_d?: ClassificationIDAmino;
  maintained_properties?: PropertyListAmino;
  can_make_order?: boolean;
  can_cancel_order?: boolean;
  can_add_maintainer?: boolean;
  can_remove_maintainer?: boolean;
  can_mutate_maintainer?: boolean;
}
export interface MessageAminoMsg {
  type: "/AssetMantle.modules.orders.transactions.deputize.Message";
  value: MessageAmino;
}
export interface MessageSDKType {
  from: string;
  from_i_d?: IdentityIDSDKType;
  to_i_d?: IdentityIDSDKType;
  classification_i_d?: ClassificationIDSDKType;
  maintained_properties?: PropertyListSDKType;
  can_make_order: boolean;
  can_cancel_order: boolean;
  can_add_maintainer: boolean;
  can_remove_maintainer: boolean;
  can_mutate_maintainer: boolean;
}
function createBaseMessage(): Message {
  return {
    from: "",
    fromID: undefined,
    toID: undefined,
    classificationID: undefined,
    maintainedProperties: undefined,
    canMakeOrder: false,
    canCancelOrder: false,
    canAddMaintainer: false,
    canRemoveMaintainer: false,
    canMutateMaintainer: false
  };
}
export const Message = {
  typeUrl: "/AssetMantle.modules.orders.transactions.deputize.Message",
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
    if (message.maintainedProperties !== undefined) {
      PropertyList.encode(message.maintainedProperties, writer.uint32(42).fork()).ldelim();
    }
    if (message.canMakeOrder === true) {
      writer.uint32(48).bool(message.canMakeOrder);
    }
    if (message.canCancelOrder === true) {
      writer.uint32(56).bool(message.canCancelOrder);
    }
    if (message.canAddMaintainer === true) {
      writer.uint32(64).bool(message.canAddMaintainer);
    }
    if (message.canRemoveMaintainer === true) {
      writer.uint32(72).bool(message.canRemoveMaintainer);
    }
    if (message.canMutateMaintainer === true) {
      writer.uint32(80).bool(message.canMutateMaintainer);
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
          message.maintainedProperties = PropertyList.decode(reader, reader.uint32());
          break;
        case 6:
          message.canMakeOrder = reader.bool();
          break;
        case 7:
          message.canCancelOrder = reader.bool();
          break;
        case 8:
          message.canAddMaintainer = reader.bool();
          break;
        case 9:
          message.canRemoveMaintainer = reader.bool();
          break;
        case 10:
          message.canMutateMaintainer = reader.bool();
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
    message.maintainedProperties = object.maintainedProperties !== undefined && object.maintainedProperties !== null ? PropertyList.fromPartial(object.maintainedProperties) : undefined;
    message.canMakeOrder = object.canMakeOrder ?? false;
    message.canCancelOrder = object.canCancelOrder ?? false;
    message.canAddMaintainer = object.canAddMaintainer ?? false;
    message.canRemoveMaintainer = object.canRemoveMaintainer ?? false;
    message.canMutateMaintainer = object.canMutateMaintainer ?? false;
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
    if (object.maintained_properties !== undefined && object.maintained_properties !== null) {
      message.maintainedProperties = PropertyList.fromAmino(object.maintained_properties);
    }
    if (object.can_make_order !== undefined && object.can_make_order !== null) {
      message.canMakeOrder = object.can_make_order;
    }
    if (object.can_cancel_order !== undefined && object.can_cancel_order !== null) {
      message.canCancelOrder = object.can_cancel_order;
    }
    if (object.can_add_maintainer !== undefined && object.can_add_maintainer !== null) {
      message.canAddMaintainer = object.can_add_maintainer;
    }
    if (object.can_remove_maintainer !== undefined && object.can_remove_maintainer !== null) {
      message.canRemoveMaintainer = object.can_remove_maintainer;
    }
    if (object.can_mutate_maintainer !== undefined && object.can_mutate_maintainer !== null) {
      message.canMutateMaintainer = object.can_mutate_maintainer;
    }
    return message;
  },
  toAmino(message: Message): MessageAmino {
    const obj: any = {};
    obj.from = message.from === "" ? undefined : message.from;
    obj.from_i_d = message.fromID ? IdentityID.toAmino(message.fromID) : undefined;
    obj.to_i_d = message.toID ? IdentityID.toAmino(message.toID) : undefined;
    obj.classification_i_d = message.classificationID ? ClassificationID.toAmino(message.classificationID) : undefined;
    obj.maintained_properties = message.maintainedProperties ? PropertyList.toAmino(message.maintainedProperties) : undefined;
    obj.can_make_order = message.canMakeOrder === false ? undefined : message.canMakeOrder;
    obj.can_cancel_order = message.canCancelOrder === false ? undefined : message.canCancelOrder;
    obj.can_add_maintainer = message.canAddMaintainer === false ? undefined : message.canAddMaintainer;
    obj.can_remove_maintainer = message.canRemoveMaintainer === false ? undefined : message.canRemoveMaintainer;
    obj.can_mutate_maintainer = message.canMutateMaintainer === false ? undefined : message.canMutateMaintainer;
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
      typeUrl: "/AssetMantle.modules.orders.transactions.deputize.Message",
      value: Message.encode(message).finish()
    };
  }
};