import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface SplitID {
  assetID?: AssetID;
  ownerID?: IdentityID;
}
export interface SplitIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.SplitID";
  value: Uint8Array;
}
export interface SplitIDAmino {
  asset_i_d?: AssetIDAmino;
  owner_i_d?: IdentityIDAmino;
}
export interface SplitIDAminoMsg {
  type: "/assetmantle.schema.ids.base.SplitID";
  value: SplitIDAmino;
}
export interface SplitIDSDKType {
  asset_i_d?: AssetIDSDKType;
  owner_i_d?: IdentityIDSDKType;
}
function createBaseSplitID(): SplitID {
  return {
    assetID: undefined,
    ownerID: undefined
  };
}
export const SplitID = {
  encode(message: SplitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    if (message.ownerID !== undefined) {
      IdentityID.encode(message.ownerID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SplitID {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplitID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.assetID = AssetID.decode(reader, reader.uint32());
          break;
        case 2:
          message.ownerID = IdentityID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SplitID {
    return {
      assetID: isSet(object.assetID) ? AssetID.fromJSON(object.assetID) : undefined,
      ownerID: isSet(object.ownerID) ? IdentityID.fromJSON(object.ownerID) : undefined
    };
  },
  toJSON(message: SplitID): unknown {
    const obj: any = {};
    message.assetID !== undefined && (obj.assetID = message.assetID ? AssetID.toJSON(message.assetID) : undefined);
    message.ownerID !== undefined && (obj.ownerID = message.ownerID ? IdentityID.toJSON(message.ownerID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SplitID>): SplitID {
    const message = createBaseSplitID();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    return message;
  },
  fromAmino(object: SplitIDAmino): SplitID {
    return {
      assetID: object?.asset_i_d ? AssetID.fromAmino(object.asset_i_d) : undefined,
      ownerID: object?.owner_i_d ? IdentityID.fromAmino(object.owner_i_d) : undefined
    };
  },
  toAmino(message: SplitID): SplitIDAmino {
    const obj: any = {};
    obj.asset_i_d = message.assetID ? AssetID.toAmino(message.assetID) : undefined;
    obj.owner_i_d = message.ownerID ? IdentityID.toAmino(message.ownerID) : undefined;
    return obj;
  },
  fromAminoMsg(object: SplitIDAminoMsg): SplitID {
    return SplitID.fromAmino(object.value);
  },
  fromProtoMsg(message: SplitIDProtoMsg): SplitID {
    return SplitID.decode(message.value);
  },
  toProto(message: SplitID): Uint8Array {
    return SplitID.encode(message).finish();
  },
  toProtoMsg(message: SplitID): SplitIDProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.ids.base.SplitID",
      value: SplitID.encode(message).finish()
    };
  }
};