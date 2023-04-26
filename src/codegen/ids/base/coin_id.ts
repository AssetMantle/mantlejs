import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface CoinID {
  stringID?: StringID;
}
export interface CoinIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.CoinID";
  value: Uint8Array;
}
export interface CoinIDAmino {
  string_i_d?: StringIDAmino;
}
export interface CoinIDAminoMsg {
  type: "/assetmantle.schema.ids.base.CoinID";
  value: CoinIDAmino;
}
export interface CoinIDSDKType {
  string_i_d?: StringIDSDKType;
}
function createBaseCoinID(): CoinID {
  return {
    stringID: undefined
  };
}
export const CoinID = {
  encode(message: CoinID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.stringID !== undefined) {
      StringID.encode(message.stringID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): CoinID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stringID = StringID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CoinID {
    return {
      stringID: isSet(object.stringID) ? StringID.fromJSON(object.stringID) : undefined
    };
  },
  toJSON(message: CoinID): unknown {
    const obj: any = {};
    message.stringID !== undefined && (obj.stringID = message.stringID ? StringID.toJSON(message.stringID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<CoinID>): CoinID {
    const message = createBaseCoinID();
    message.stringID = object.stringID !== undefined && object.stringID !== null ? StringID.fromPartial(object.stringID) : undefined;
    return message;
  },
  fromAmino(object: CoinIDAmino): CoinID {
    return {
      stringID: object?.string_i_d ? StringID.fromAmino(object.string_i_d) : undefined
    };
  },
  toAmino(message: CoinID): CoinIDAmino {
    const obj: any = {};
    obj.string_i_d = message.stringID ? StringID.toAmino(message.stringID) : undefined;
    return obj;
  },
  fromAminoMsg(object: CoinIDAminoMsg): CoinID {
    return CoinID.fromAmino(object.value);
  },
  fromProtoMsg(message: CoinIDProtoMsg): CoinID {
    return CoinID.decode(message.value);
  },
  toProto(message: CoinID): Uint8Array {
    return CoinID.encode(message).finish();
  },
  toProtoMsg(message: CoinID): CoinIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.CoinID",
      value: CoinID.encode(message).finish()
    };
  }
};