import { Document, DocumentAmino, DocumentSDKType } from "../../documents/base/document";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Mappable {
  maintainer?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/assetmantle.modules.maintainers.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  maintainer?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/assetmantle.modules.maintainers.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  maintainer?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    maintainer: undefined
  };
}
export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maintainer !== undefined) {
      Document.encode(message.maintainer, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Mappable {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMappable();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maintainer = Document.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Mappable {
    return {
      maintainer: isSet(object.maintainer) ? Document.fromJSON(object.maintainer) : undefined
    };
  },
  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.maintainer !== undefined && (obj.maintainer = message.maintainer ? Document.toJSON(message.maintainer) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.maintainer = object.maintainer !== undefined && object.maintainer !== null ? Document.fromPartial(object.maintainer) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    return {
      maintainer: object?.maintainer ? Document.fromAmino(object.maintainer) : undefined
    };
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.maintainer = message.maintainer ? Document.toAmino(message.maintainer) : undefined;
    return obj;
  },
  fromAminoMsg(object: MappableAminoMsg): Mappable {
    return Mappable.fromAmino(object.value);
  },
  fromProtoMsg(message: MappableProtoMsg): Mappable {
    return Mappable.decode(message.value);
  },
  toProto(message: Mappable): Uint8Array {
    return Mappable.encode(message).finish();
  },
  toProtoMsg(message: Mappable): MappableProtoMsg {
    return {
      typeUrl: "/assetmantle.modules.maintainers.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};