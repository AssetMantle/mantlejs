//@ts-nocheck
import { Parameter, ParameterAmino, ParameterSDKType } from "../../parameters/base/parameter";
import { BinaryReader, BinaryWriter } from "../../../../binary";
export interface ParameterList {
  parameters: Parameter[];
}
export interface ParameterListProtoMsg {
  typeUrl: "/AssetMantle.schema.lists.base.ParameterList";
  value: Uint8Array;
}
export interface ParameterListAmino {
  parameters?: ParameterAmino[];
}
export interface ParameterListAminoMsg {
  type: "/AssetMantle.schema.lists.base.ParameterList";
  value: ParameterListAmino;
}
export interface ParameterListSDKType {
  parameters: ParameterSDKType[];
}
function createBaseParameterList(): ParameterList {
  return {
    parameters: []
  };
}
export const ParameterList = {
  typeUrl: "/AssetMantle.schema.lists.base.ParameterList",
  encode(message: ParameterList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.parameters) {
      Parameter.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParameterList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParameterList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.parameters.push(Parameter.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ParameterList>): ParameterList {
    const message = createBaseParameterList();
    message.parameters = object.parameters?.map(e => Parameter.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ParameterListAmino): ParameterList {
    const message = createBaseParameterList();
    message.parameters = object.parameters?.map(e => Parameter.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ParameterList): ParameterListAmino {
    const obj: any = {};
    if (message.parameters) {
      obj.parameters = message.parameters.map(e => e ? Parameter.toAmino(e) : undefined);
    } else {
      obj.parameters = message.parameters;
    }
    return obj;
  },
  fromAminoMsg(object: ParameterListAminoMsg): ParameterList {
    return ParameterList.fromAmino(object.value);
  },
  fromProtoMsg(message: ParameterListProtoMsg): ParameterList {
    return ParameterList.decode(message.value);
  },
  toProto(message: ParameterList): Uint8Array {
    return ParameterList.encode(message).finish();
  },
  toProtoMsg(message: ParameterList): ParameterListProtoMsg {
    return {
      typeUrl: "/AssetMantle.schema.lists.base.ParameterList",
      value: ParameterList.encode(message).finish()
    };
  }
};