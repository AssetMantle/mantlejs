import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { CoinID, CoinIDAmino, CoinIDSDKType } from "./coin_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface AnyOwnableID {
  assetID?: AssetID;
  coinID?: CoinID;
}
export interface AnyOwnableIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.AnyOwnableID";
  value: Uint8Array;
}
export interface AnyOwnableIDAmino {
  asset_i_d?: AssetIDAmino;
  coin_i_d?: CoinIDAmino;
}
export interface AnyOwnableIDAminoMsg {
  type: "/assetmantle.schema.ids.base.AnyOwnableID";
  value: AnyOwnableIDAmino;
}
export interface AnyOwnableIDSDKType {
  asset_i_d?: AssetIDSDKType;
  coin_i_d?: CoinIDSDKType;
}
function createBaseAnyOwnableID(): AnyOwnableID {
  return {
    assetID: undefined,
    coinID: undefined
  };
}
export const AnyOwnableID = {
  encode(message: AnyOwnableID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    if (message.coinID !== undefined) {
      CoinID.encode(message.coinID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): AnyOwnableID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAnyOwnableID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        case 2:
          message.coinID = CoinID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AnyOwnableID {
    return {
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined,
      coinID: isSet(object.coinID) ? CoinID.fromJSON(object.coinID) : undefined
    };
  },
  toJSON(message: AnyOwnableID): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    message.coinID !== undefined && (obj.coinID = message.coinID ? CoinID.toJSON(message.coinID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<AnyOwnableID>): AnyOwnableID {
    const message = createBaseAnyOwnableID();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.coinID = object.coinID !== undefined && object.coinID !== null ? CoinID.fromPartial(object.coinID) : undefined;
    return message;
  },
  fromAmino(object: AnyOwnableIDAmino): AnyOwnableID {
    return {
      assetID: object?.asset_i_d ? AssetID.fromAmino(object.asset_i_d) : undefined,
      coinID: object?.coin_i_d ? CoinID.fromAmino(object.coin_i_d) : undefined
    };
  },
  toAmino(message: AnyOwnableID): AnyOwnableIDAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
    obj.coin_i_d = message.coinID ? CoinID.toAmino(message.coinID) : undefined;
    return obj;
  },
  fromAminoMsg(object: AnyOwnableIDAminoMsg): AnyOwnableID {
    return AnyOwnableID.fromAmino(object.value);
  },
  fromProtoMsg(message: AnyOwnableIDProtoMsg): AnyOwnableID {
    return AnyOwnableID.decode(message.value);
  },
  toProto(message: AnyOwnableID): Uint8Array {
    return AnyOwnableID.encode(message).finish();
  },
  toProtoMsg(message: AnyOwnableID): AnyOwnableIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.AnyOwnableID",
      value: AnyOwnableID.encode(message).finish()
    };
  }
};