//@ts-nocheck
import { Record, RecordAmino, RecordSDKType } from "../record/record";
import { ParameterList, ParameterListAmino, ParameterListSDKType } from "../../../../schema/lists/base/parameter_list";
import { BinaryReader, BinaryWriter } from "../../../../../binary";
export interface Genesis {
  records: Record[];
  parameterList?: ParameterList;
}
export interface GenesisProtoMsg {
  typeUrl: "/AssetMantle.modules.classifications.genesis.Genesis";
  value: Uint8Array;
}
export interface GenesisAmino {
  records?: RecordAmino[];
  parameter_list?: ParameterListAmino;
}
export interface GenesisAminoMsg {
  type: "/AssetMantle.modules.classifications.genesis.Genesis";
  value: GenesisAmino;
}
export interface GenesisSDKType {
  records: RecordSDKType[];
  parameter_list?: ParameterListSDKType;
}
function createBaseGenesis(): Genesis {
  return {
    records: [],
    parameterList: undefined
  };
}
export const Genesis = {
  typeUrl: "/AssetMantle.modules.classifications.genesis.Genesis",
  encode(message: Genesis, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.records) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.parameterList !== undefined) {
      ParameterList.encode(message.parameterList, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Genesis {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesis();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(Record.decode(reader, reader.uint32()));
          break;
        case 2:
          message.parameterList = ParameterList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Genesis>): Genesis {
    const message = createBaseGenesis();
    message.records = object.records?.map(e => Record.fromPartial(e)) || [];
    message.parameterList = object.parameterList !== undefined && object.parameterList !== null ? ParameterList.fromPartial(object.parameterList) : undefined;
    return message;
  },
  fromAmino(object: GenesisAmino): Genesis {
    const message = createBaseGenesis();
    message.records = object.records?.map(e => Record.fromAmino(e)) || [];
    if (object.parameter_list !== undefined && object.parameter_list !== null) {
      message.parameterList = ParameterList.fromAmino(object.parameter_list);
    }
    return message;
  },
  toAmino(message: Genesis): GenesisAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.records = message.records;
    }
    obj.parameter_list = message.parameterList ? ParameterList.toAmino(message.parameterList) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisAminoMsg): Genesis {
    return Genesis.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisProtoMsg): Genesis {
    return Genesis.decode(message.value);
  },
  toProto(message: Genesis): Uint8Array {
    return Genesis.encode(message).finish();
  },
  toProtoMsg(message: Genesis): GenesisProtoMsg {
    return {
      typeUrl: "/AssetMantle.modules.classifications.genesis.Genesis",
      value: Genesis.encode(message).finish()
    };
  }
};