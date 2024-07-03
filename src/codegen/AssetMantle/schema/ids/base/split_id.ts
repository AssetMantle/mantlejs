//@ts-nocheck
import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface SplitID {
  assetID?: AssetID;
  ownerID?: IdentityID;
}
export interface SplitIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.SplitID";
  value: Uint8Array;
}
export interface SplitIDAmino {
  asset_i_d?: AssetIDAmino;
  owner_i_d?: IdentityIDAmino;
}
export interface SplitIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.SplitID";
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
  typeUrl: "/AssetMantle.schema.ids.base.SplitID",
  encode(message: SplitID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.assetID !== undefined) {
      AssetID.encode(message.assetID, writer.uint32(10).fork()).ldelim();
    }
    if (message.ownerID !== undefined) {
      IdentityID.encode(message.ownerID, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SplitID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
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
  fromPartial(object: Partial<SplitID>): SplitID {
    const message = createBaseSplitID();
    message.assetID = object.assetID !== undefined && object.assetID !== null ? AssetID.fromPartial(object.assetID) : undefined;
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    return message;
  },
  fromAmino(object: SplitIDAmino): SplitID {
    const message = createBaseSplitID();
    if (object.asset_i_d !== undefined && object.asset_i_d !== null) {
      message.assetID = AssetID.fromAmino(object.asset_i_d);
    }
    if (object.owner_i_d !== undefined && object.owner_i_d !== null) {
      message.ownerID = IdentityID.fromAmino(object.owner_i_d);
    }
    return message;
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
      typeUrl: "/AssetMantle.schema.ids.base.SplitID",
      value: SplitID.encode(message).finish()
    };
  }
};