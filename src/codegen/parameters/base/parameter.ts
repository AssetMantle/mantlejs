import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "../../properties/base/meta_property";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Parameter {
  metaProperty?: MetaProperty;
}
export interface ParameterProtoMsg {
  typeUrl: "/assetmantle.schema.parameters.base.Parameter";
  value: Uint8Array;
}
export interface ParameterAmino {
  meta_property?: MetaPropertyAmino;
}
export interface ParameterAminoMsg {
  type: "/assetmantle.schema.parameters.base.Parameter";
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
  encode(message: Parameter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.metaProperty !== undefined) {
      MetaProperty.encode(message.metaProperty, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Parameter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Parameter {
    return {
      metaProperty: isSet(object.metaProperty) ? MetaProperty.fromJSON(object.metaProperty) : undefined
    };
  },
  toJSON(message: Parameter): unknown {
    const obj: any = {};
    message.metaProperty !== undefined && (obj.metaProperty = message.metaProperty ? MetaProperty.toJSON(message.metaProperty) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Parameter>): Parameter {
    const message = createBaseParameter();
    message.metaProperty = object.metaProperty !== undefined && object.metaProperty !== null ? MetaProperty.fromPartial(object.metaProperty) : undefined;
    return message;
  },
  fromAmino(object: ParameterAmino): Parameter {
    return {
      metaProperty: object?.meta_property ? MetaProperty.fromAmino(object.meta_property) : undefined
    };
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
      typeUrl: "/assetmantle.schema.parameters.base.Parameter",
      value: Parameter.encode(message).finish()
    };
  }
};