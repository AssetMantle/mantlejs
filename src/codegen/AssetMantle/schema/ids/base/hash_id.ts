//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
export interface HashID {
  iDBytes: Uint8Array;
}
export interface HashIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.HashID";
  value: Uint8Array;
}
export interface HashIDAmino {
  i_d_bytes?: string;
}
export interface HashIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.HashID";
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
  typeUrl: "/AssetMantle.schema.ids.base.HashID",
  encode(message: HashID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iDBytes.length !== 0) {
      writer.uint32(10).bytes(message.iDBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HashID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<HashID>): HashID {
    const message = createBaseHashID();
    message.iDBytes = object.iDBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: HashIDAmino): HashID {
    const message = createBaseHashID();
    if (object.i_d_bytes !== undefined && object.i_d_bytes !== null) {
      message.iDBytes = bytesFromBase64(object.i_d_bytes);
    }
    return message;
  },
  toAmino(message: HashID): HashIDAmino {
    const obj: any = {};
    obj.i_d_bytes = message.iDBytes ? base64FromBytes(message.iDBytes) : undefined;
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
      typeUrl: "/AssetMantle.schema.ids.base.HashID",
      value: HashID.encode(message).finish()
    };
  }
};