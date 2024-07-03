//@ts-nocheck
import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "../../properties/base/meta_property";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface Parameter {
  metaProperty?: MetaProperty;
}
export interface ParameterProtoMsg {
  typeUrl: "/AssetMantle.schema.parameters.base.Parameter";
  value: Uint8Array;
}
export interface ParameterAmino {
  meta_property?: MetaPropertyAmino;
}
export interface ParameterAminoMsg {
  type: "/AssetMantle.schema.parameters.base.Parameter";
  value: ParameterAmino;
}
export interface ParameterSDKType {
  meta_property?: MetaPropertySDKType;
}
function createBaseParameter(): Parameter {
  return {
    metaProperty: undefined
  };
}
export const Parameter = {
  typeUrl: "/AssetMantle.schema.parameters.base.Parameter",
  encode(message: Parameter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.metaProperty !== undefined) {
      MetaProperty.encode(message.metaProperty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Parameter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.metaProperty = MetaProperty.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Parameter>): Parameter {
    const message = createBaseParameter();
    message.metaProperty = object.metaProperty !== undefined && object.metaProperty !== null ? MetaProperty.fromPartial(object.metaProperty) : undefined;
    return message;
  },
  fromAmino(object: ParameterAmino): Parameter {
    const message = createBaseParameter();
    if (object.meta_property !== undefined && object.meta_property !== null) {
      message.metaProperty = MetaProperty.fromAmino(object.meta_property);
    }
    return message;
  },
  toAmino(message: Parameter): ParameterAmino {
    const obj: any = {};
    obj.meta_property = message.metaProperty ? MetaProperty.toAmino(message.metaProperty) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParameterAminoMsg): Parameter {
    return Parameter.fromAmino(object.value);
  },
  fromProtoMsg(message: ParameterProtoMsg): Parameter {
    return Parameter.decode(message.value);
  },
  toProto(message: Parameter): Uint8Array {
    return Parameter.encode(message).finish();
  },
  toProtoMsg(message: Parameter): ParameterProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.parameters.base.Parameter",
      value: Parameter.encode(message).finish()
    };
  }
};