import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "./any_ownable_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface SplitID {
  ownableID?: AnyOwnableID;
  ownerID?: IdentityID;
}
export interface SplitIDProtoMsg {
  typeUrl: "/assetmantle.schema.ids.base.SplitID";
  value: Uint8Array;
}
export interface SplitIDAmino {
  ownable_i_d?: AnyOwnableIDAmino;
  owner_i_d?: IdentityIDAmino;
}
export interface SplitIDAminoMsg {
  type: "/assetmantle.schema.ids.base.SplitID";
  value: SplitIDAmino;
}
export interface SplitIDSDKType {
  ownable_i_d?: AnyOwnableIDSDKType;
  owner_i_d?: IdentityIDSDKType;
}
function createBaseSplitID(): SplitID {
  return {
    ownableID: undefined,
    ownerID: undefined
  };
}
export const SplitID = {
  encode(message: SplitID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(10).fork()).ldelim();
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
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
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
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      ownerID: isSet(object.ownerID) ? IdentityID.fromJSON(object.ownerID) : undefined
    };
  },
  toJSON(message: SplitID): unknown {
    const obj: any = {};
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.ownerID !== undefined && (obj.ownerID = message.ownerID ? IdentityID.toJSON(message.ownerID) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SplitID>): SplitID {
    const message = createBaseSplitID();
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    return message;
  },
  fromAmino(object: SplitIDAmino): SplitID {
    return {
      ownableID: object?.ownable_i_d ? AnyOwnableID.fromAmino(object.ownable_i_d) : undefined,
      ownerID: object?.owner_i_d ? IdentityID.fromAmino(object.owner_i_d) : undefined
    };
  },
  toAmino(message: SplitID): SplitIDAmino {
    const obj: any = {};
    obj.ownable_i_d = message.ownableID ? AnyOwnableID.toAmino(message.ownableID) : undefined;
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