import { MesaProperty, MesaPropertyAmino, MesaPropertySDKType } from "./mesa_property";
import { MetaProperty, MetaPropertyAmino, MetaPropertySDKType } from "./meta_property";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AnyProperty {
  mesaProperty?: MesaProperty;
  metaProperty?: MetaProperty;
}
export interface AnyPropertyProtoMsg {
  typeUrl: "/assetmantle.schema.properties.base.AnyProperty";
  value: Uint8Array;
}
export interface AnyPropertyAmino {
  mesa_property?: MesaPropertyAmino;
  meta_property?: MetaPropertyAmino;
}
export interface AnyPropertyAminoMsg {
  type: "/assetmantle.schema.properties.base.AnyProperty";
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
  encode(message: AnyProperty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.mesaProperty !== undefined) {
      MesaProperty.encode(message.mesaProperty, writer.uint32(10).fork()).ldelim();
    }
    if (message.metaProperty !== undefined) {
      MetaProperty.encode(message.metaProperty, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AnyProperty {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): AnyProperty {
    return {
      mesaProperty: isSet(object.mesaProperty) ? MesaProperty.fromJSON(object.mesaProperty) : undefined,
      metaProperty: isSet(object.metaProperty) ? MetaProperty.fromJSON(object.metaProperty) : undefined
    };
  },
  toJSON(message: AnyProperty): unknown {
    const obj: any = {};
    message.mesaProperty !== undefined && (obj.mesaProperty = message.mesaProperty ? MesaProperty.toJSON(message.mesaProperty) : undefined);
    message.metaProperty !== undefined && (obj.metaProperty = message.metaProperty ? MetaProperty.toJSON(message.metaProperty) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AnyProperty>): AnyProperty {
    const message = createBaseAnyProperty();
    message.mesaProperty = object.mesaProperty !== undefined && object.mesaProperty !== null ? MesaProperty.fromPartial(object.mesaProperty) : undefined;
    message.metaProperty = object.metaProperty !== undefined && object.metaProperty !== null ? MetaProperty.fromPartial(object.metaProperty) : undefined;
    return message;
  },
  fromAmino(object: AnyPropertyAmino): AnyProperty {
    return {
      mesaProperty: object?.mesa_property ? MesaProperty.fromAmino(object.mesa_property) : undefined,
      metaProperty: object?.meta_property ? MetaProperty.fromAmino(object.meta_property) : undefined
    };
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
      typeUrl: "/assetmantle.schema.properties.base.AnyProperty",
      value: AnyProperty.encode(message).finish()
    };
  }
};