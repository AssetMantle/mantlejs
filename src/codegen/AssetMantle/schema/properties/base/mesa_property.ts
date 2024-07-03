//@ts-nocheck
import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "../../ids/base/property_id";
import { DataID, DataIDAmino, DataIDSDKType } from "../../ids/base/data_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface MesaProperty {
  iD?: PropertyID;
  dataID?: DataID;
}
export interface MesaPropertyProtoMsg {
  typeUrl: "/AssetMantle.schema.properties.base.MesaProperty";
  value: Uint8Array;
}
export interface MesaPropertyAmino {
  i_d?: PropertyIDAmino;
  data_i_d?: DataIDAmino;
}
export interface MesaPropertyAminoMsg {
  type: "/AssetMantle.schema.properties.base.MesaProperty";
  value: MesaPropertyAmino;
}
export interface MesaPropertySDKType {
  i_d?: PropertyIDSDKType;
  data_i_d?: DataIDSDKType;
}
function createBaseMesaProperty(): MesaProperty {
  return {
    iD: undefined,
    dataID: undefined
  };
}
export const MesaProperty = {
  typeUrl: "/AssetMantle.schema.properties.base.MesaProperty",
  encode(message: MesaProperty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iD !== undefined) {
      PropertyID.encode(message.iD, writer.uint32(10).fork()).ldelim();
    }
    if (message.dataID !== undefined) {
      DataID.encode(message.dataID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MesaProperty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMesaProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iD = PropertyID.decode(reader, reader.uint32());
          break;
        case 2:
          message.dataID = DataID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MesaProperty>): MesaProperty {
    const message = createBaseMesaProperty();
    message.iD = object.iD !== undefined && object.iD !== null ? PropertyID.fromPartial(object.iD) : undefined;
    message.dataID = object.dataID !== undefined && object.dataID !== null ? DataID.fromPartial(object.dataID) : undefined;
    return message;
  },
  fromAmino(object: MesaPropertyAmino): MesaProperty {
    const message = createBaseMesaProperty();
    if (object.i_d !== undefined && object.i_d !== null) {
      message.iD = PropertyID.fromAmino(object.i_d);
    }
    if (object.data_i_d !== undefined && object.data_i_d !== null) {
      message.dataID = DataID.fromAmino(object.data_i_d);
    }
    return message;
  },
  toAmino(message: MesaProperty): MesaPropertyAmino {
    const obj: any = {};
    obj.i_d = message.iD ? PropertyID.toAmino(message.iD) : undefined;
    obj.data_i_d = message.dataID ? DataID.toAmino(message.dataID) : undefined;
    return obj;
  },
  fromAminoMsg(object: MesaPropertyAminoMsg): MesaProperty {
    return MesaProperty.fromAmino(object.value);
  },
  fromProtoMsg(message: MesaPropertyProtoMsg): MesaProperty {
    return MesaProperty.decode(message.value);
  },
  toProto(message: MesaProperty): Uint8Array {
    return MesaProperty.encode(message).finish();
  },
  toProtoMsg(message: MesaProperty): MesaPropertyProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.properties.base.MesaProperty",
      value: MesaProperty.encode(message).finish()
    };
  }
};