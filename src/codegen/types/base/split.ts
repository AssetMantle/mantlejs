import { AnyOwnableID, AnyOwnableIDAmino, AnyOwnableIDSDKType } from "../../ids/base/any_ownable_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "../../ids/base/identity_id";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Split {
  ownableID?: AnyOwnableID;
  ownerID?: IdentityID;
  value: string;
}
export interface SplitProtoMsg {
  typeUrl: "/assetmantle.schema.types.base.Split";
  value: Uint8Array;
}
export interface SplitAmino {
  ownable_i_d?: AnyOwnableIDAmino;
  owner_i_d?: IdentityIDAmino;
  value: string;
}
export interface SplitAminoMsg {
  type: "/assetmantle.schema.types.base.Split";
  value: SplitAmino;
}
export interface SplitSDKType {
  ownable_i_d?: AnyOwnableIDSDKType;
  owner_i_d?: IdentityIDSDKType;
  value: string;
}
function createBaseSplit(): Split {
  return {
    ownableID: undefined,
    ownerID: undefined,
    value: ""
  };
}
export const Split = {
  encode(message: Split, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ownableID !== undefined) {
      AnyOwnableID.encode(message.ownableID, writer.uint32(10).fork()).ldelim();
    }
    if (message.ownerID !== undefined) {
      IdentityID.encode(message.ownerID, writer.uint32(18).fork()).ldelim();
    }
    if (message.value !== "") {
      writer.uint32(26).string(message.value);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Split {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSplit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ownableID = AnyOwnableID.decode(reader, reader.uint32());
          break;
        case 2:
          message.ownerID = IdentityID.decode(reader, reader.uint32());
          break;
        case 3:
          message.value = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Split {
    return {
      ownableID: isSet(object.ownableID) ? AnyOwnableID.fromJSON(object.ownableID) : undefined,
      ownerID: isSet(object.ownerID) ? IdentityID.fromJSON(object.ownerID) : undefined,
      value: isSet(object.value) ? String(object.value) : ""
    };
  },
  toJSON(message: Split): unknown {
    const obj: any = {};
    message.ownableID !== undefined && (obj.ownableID = message.ownableID ? AnyOwnableID.toJSON(message.ownableID) : undefined);
    message.ownerID !== undefined && (obj.ownerID = message.ownerID ? IdentityID.toJSON(message.ownerID) : undefined);
    message.value !== undefined && (obj.value = message.value);
    return obj;
  },
  fromPartial(object: Partial<Split>): Split {
    const message = createBaseSplit();
    message.ownableID = object.ownableID !== undefined && object.ownableID !== null ? AnyOwnableID.fromPartial(object.ownableID) : undefined;
    message.ownerID = object.ownerID !== undefined && object.ownerID !== null ? IdentityID.fromPartial(object.ownerID) : undefined;
    message.value = object.value ?? "";
    return message;
  },
  fromAmino(object: SplitAmino): Split {
    return {
      ownableID: object?.ownable_i_d ? AnyOwnableID.fromAmino(object.ownable_i_d) : undefined,
      ownerID: object?.owner_i_d ? IdentityID.fromAmino(object.owner_i_d) : undefined,
      value: object.value
    };
  },
  toAmino(message: Split): SplitAmino {
    const obj: any = {};
    obj.ownable_i_d = message.ownableID ? AnyOwnableID.toAmino(message.ownableID) : undefined;
    obj.owner_i_d = message.ownerID ? IdentityID.toAmino(message.ownerID) : undefined;
    obj.value = message.value;
    return obj;
  },
  fromAminoMsg(object: SplitAminoMsg): Split {
    return Split.fromAmino(object.value);
  },
  fromProtoMsg(message: SplitProtoMsg): Split {
    return Split.decode(message.value);
  },
  toProto(message: Split): Uint8Array {
    return Split.encode(message).finish();
  },
  toProtoMsg(message: Split): SplitProtoMsg {
    return {
      typeUrl: "/assetmantle.schema.types.base.Split",
      value: Split.encode(message).finish()
    };
  }
};