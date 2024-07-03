//@ts-nocheck
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface OrderID {
  hashID?: HashID;
}
export interface OrderIDProtoMsg {
  typeUrl: "/AssetMantle.schema.ids.base.OrderID";
  value: Uint8Array;
}
export interface OrderIDAmino {
  hash_i_d?: HashIDAmino;
}
export interface OrderIDAminoMsg {
  type: "/AssetMantle.schema.ids.base.OrderID";
  value: OrderIDAmino;
}
export interface OrderIDSDKType {
  hash_i_d?: HashIDSDKType;
}
function createBaseOrderID(): OrderID {
  return {
    hashID: undefined
  };
}
export const OrderID = {
  typeUrl: "/AssetMantle.schema.ids.base.OrderID",
  encode(message: OrderID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hashID !== undefined) {
      HashID.encode(message.hashID, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): OrderID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashID = HashID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<OrderID>): OrderID {
    const message = createBaseOrderID();
    message.hashID = object.hashID !== undefined && object.hashID !== null ? HashID.fromPartial(object.hashID) : undefined;
    return message;
  },
  fromAmino(object: OrderIDAmino): OrderID {
    const message = createBaseOrderID();
    if (object.hash_i_d !== undefined && object.hash_i_d !== null) {
      message.hashID = HashID.fromAmino(object.hash_i_d);
    }
    return message;
  },
  toAmino(message: OrderID): OrderIDAmino {
    const obj: any = {};
    obj.hash_i_d = message.hashID ? HashID.toAmino(message.hashID) : undefined;
    return obj;
  },
  fromAminoMsg(object: OrderIDAminoMsg): OrderID {
    return OrderID.fromAmino(object.value);
  },
  fromProtoMsg(message: OrderIDProtoMsg): OrderID {
    return OrderID.decode(message.value);
  },
  toProto(message: OrderID): Uint8Array {
    return OrderID.encode(message).finish();
  },
  toProtoMsg(message: OrderID): OrderIDProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.ids.base.OrderID",
      value: OrderID.encode(message).finish()
    };
  }
};