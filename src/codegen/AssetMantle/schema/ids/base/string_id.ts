//@ts-nocheck
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface StringID {
  iDString: string;
}
export interface StringIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.StringID";
  value: Uint8Array;
}
export interface StringIDAmino {
  i_d_string?: string;
}
export interface StringIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.StringID";
  value: StringIDAmino;
}
export interface StringIDSDKType {
  i_d_string: string;
}
function createBaseStringID(): StringID {
  return {
    iDString: ""
  };
}
export const StringID = {
  typeUrl: "/AssetMantle.schema.ids.base.StringID",
  encode(message: StringID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.iDString !== "") {
      writer.uint32(10).string(message.iDString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StringID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStringID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.iDString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StringID>): StringID {
    const message = createBaseStringID();
    message.iDString = object.iDString ?? "";
    return message;
  },
  fromAmino(object: StringIDAmino): StringID {
    const message = createBaseStringID();
    if (object.i_d_string !== undefined && object.i_d_string !== null) {
      message.iDString = object.i_d_string;
    }
    return message;
  },
  toAmino(message: StringID): StringIDAmino {
    const obj: any = {};
    obj.i_d_string = message.iDString === "" ? undefined : message.iDString;
    return obj;
  },
  fromAminoMsg(object: StringIDAminoMsg): StringID {
    return StringID.fromAmino(object.value);
  },
  fromProtoMsg(message: StringIDProtoMsg): StringID {
    return StringID.decode(message.value);
  },
  toProto(message: StringID): Uint8Array {
    return StringID.encode(message).finish();
  },
  toProtoMsg(message: StringID): StringIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.StringID",
      value: StringID.encode(message).finish()
    };
  }
};