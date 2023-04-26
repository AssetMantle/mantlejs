import * as _m0 from "protobufjs/minimal";
import { isSet, bytesFromBase64, base64FromBytes } from "../../helpers";
export interface HashID {
  iDBytes: Uint8Array;
}
export interface HashIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.HashID";
  value: Uint8Array;
}
export interface HashIDAmino {
  i_d_bytes: Uint8Array;
}
export interface HashIDAminoMsg {
  type: "/assetmantle.schema.ids.base.HashID";
  value: HashIDAmino;
}
export interface HashIDSDKType {
  i_d_bytes: Uint8Array;
}
function createBaseHashID(): HashID {
  return {
    iDBytes: new Uint8Array()
  };
}
export const HashID = {
  encode(message: HashID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.iDBytes.length !== 0) {
      writer.uint32(10).bytes(message.iDBytes);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HashID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHashID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iDBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HashID {
    return {
      iDBytes: isSet(object.iDBytes) ? bytesFromBase64(object.iDBytes) : new Uint8Array()
    };
  },
  toJSON(message: HashID): unknown {
    const obj: any = {};
    message.iDBytes !== undefined && (obj.iDBytes = base64FromBytes(message.iDBytes !== undefined ? message.iDBytes : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<HashID>): HashID {
    const message = createBaseHashID();
    message.iDBytes = object.iDBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: HashIDAmino): HashID {
    return {
      iDBytes: object.i_d_bytes
    };
  },
  toAmino(message: HashID): HashIDAmino {
    const obj: any = {};
    obj.i_d_bytes = message.iDBytes;
    return obj;
  },
  fromAminoMsg(object: HashIDAminoMsg): HashID {
    return HashID.fromAmino(object.value);
  },
  fromProtoMsg(message: HashIDProtoMsg): HashID {
    return HashID.decode(message.value);
  },
  toProto(message: HashID): Uint8Array {
    return HashID.encode(message).finish();
  },
  toProtoMsg(message: HashID): HashIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.HashID",
      value: HashID.encode(message).finish()
    };
  }
};