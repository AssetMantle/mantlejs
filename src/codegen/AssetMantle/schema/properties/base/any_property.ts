//@ts-nocheck
import { MesaProperty, MesaPropertyAmino, MesaPropertySDKType } from "./mesa_property";
import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "./meta_property";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface AnyProperty {
  mesaProperty?: MesaProperty;
  metaProperty?: MetaProperty;
}
export interface AnyPropertyProtoMsg {
  typeUrl: "/AssetMantle.schema.properties.base.AnyProperty";
  value: Uint8Array;
}
export interface AnyPropertyAmino {
  mesa_property?: MesaPropertyAmino;
  meta_property?: MetaPropertyAmino;
}
export interface AnyPropertyAminoMsg {
  type: "/AssetMantle.schema.properties.base.AnyProperty";
  value: AnyPropertyAmino;
}
export interface AnyPropertySDKType {
  mesa_property?: MesaPropertySDKType;
  meta_property?: MetaPropertySDKType;
}
function createBaseAnyProperty(): AnyProperty {
  return {
    mesaProperty: undefined,
    metaProperty: undefined
  };
}
export const AnyProperty = {
  typeUrl: "/AssetMantle.schema.properties.base.AnyProperty",
  encode(message: AnyProperty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.mesaProperty !== undefined) {
      MesaProperty.encode(message.mesaProperty, writer.uint32(10).fork()).ldelim();
    }
    if (message.metaProperty !== undefined) {
      MetaProperty.encode(message.metaProperty, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AnyProperty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyProperty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mesaProperty = MesaProperty.decode(reader, reader.uint32());
          break;
        case 2:
          message.metaProperty = MetaProperty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<AnyProperty>): AnyProperty {
    const message = createBaseAnyProperty();
    message.mesaProperty = object.mesaProperty !== undefined && object.mesaProperty !== null ? MesaProperty.fromPartial(object.mesaProperty) : undefined;
    message.metaProperty = object.metaProperty !== undefined && object.metaProperty !== null ? MetaProperty.fromPartial(object.metaProperty) : undefined;
    return message;
  },
  fromAmino(object: AnyPropertyAmino): AnyProperty {
    const message = createBaseAnyProperty();
    if (object.mesa_property !== undefined && object.mesa_property !== null) {
      message.mesaProperty = MesaProperty.fromAmino(object.mesa_property);
    }
    if (object.meta_property !== undefined && object.meta_property !== null) {
      message.metaProperty = MetaProperty.fromAmino(object.meta_property);
    }
    return message;
  },
  toAmino(message: AnyProperty): AnyPropertyAmino {
    const obj: any = {};
    obj.mesa_property = message.mesaProperty ? MesaProperty.toAmino(message.mesaProperty) : undefined;
    obj.meta_property = message.metaProperty ? MetaProperty.toAmino(message.metaProperty) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnyPropertyAminoMsg): AnyProperty {
    return AnyProperty.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyPropertyProtoMsg): AnyProperty {
    return AnyProperty.decode(message.value);
  },
  toProto(message: AnyProperty): Uint8Array {
    return AnyProperty.encode(message).finish();
  },
  toProtoMsg(message: AnyProperty): AnyPropertyProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.properties.base.AnyProperty",
      value: AnyProperty.encode(message).finish()
    };
  }
};