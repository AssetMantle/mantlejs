import { Document, DocumentAmino, DocumentSDKType } from "../../documents/base/document";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Mappable {
  identity?: Document;
}
export interface MappableProtoMsg {
  typeUrl: "/assetmantle.modules.identities.mappable.Mappable";
  value: Uint8Array;
}
export interface MappableAmino {
  identity?: DocumentAmino;
}
export interface MappableAminoMsg {
  type: "/assetmantle.modules.identities.mappable.Mappable";
  value: MappableAmino;
}
export interface MappableSDKType {
  identity?: DocumentSDKType;
}
function createBaseMappable(): Mappable {
  return {
    identity: undefined
  };
}
export const Mappable = {
  encode(message: Mappable, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.identity !== undefined) {
      Document.encode(message.identity, writer.uint32(10).fork()).ldelim();
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
          message.identity = Document.decode(reader, reader.uint32());
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
      identity: isSet(object.identity) ? Document.fromJSON(object.identity) : undefined
    };
  },
  toJSON(message: Mappable): unknown {
    const obj: any = {};
    message.identity !== undefined && (obj.identity = message.identity ? Document.toJSON(message.identity) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Mappable>): Mappable {
    const message = createBaseMappable();
    message.identity = object.identity !== undefined && object.identity !== null ? Document.fromPartial(object.identity) : undefined;
    return message;
  },
  fromAmino(object: MappableAmino): Mappable {
    return {
      identity: object?.identity ? Document.fromAmino(object.identity) : undefined
    };
  },
  toAmino(message: Mappable): MappableAmino {
    const obj: any = {};
    obj.identity = message.identity ? Document.toAmino(message.identity) : undefined;
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
      typeUrl: "/assetmantle.modules.identities.mappable.Mappable",
      value: Mappable.encode(message).finish()
    };
  }
};