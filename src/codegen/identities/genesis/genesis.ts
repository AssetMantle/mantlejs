import { Record, RecordAmino, RecordSDKType } from "../record/record";
import { ParameterList, ParameterListAmino, ParameterListSDKType } from "../../lists/base/parameter_list";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../helpers";
export interface Genesis {
  records: Record[];
  parameterList?: ParameterList;
}
export interface GenesisProtoMsg {
  typeUrl: "/assetmantle.modules.identities.genesis.Genesis";
  value: Uint8Array;
}
export interface GenesisAmino {
  records: RecordAmino[];
  parameter_list?: ParameterListAmino;
}
export interface GenesisAminoMsg {
  type: "/assetmantle.modules.identities.genesis.Genesis";
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
  encode(message: Genesis, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.parameterList !== undefined) {
      ParameterList.encode(message.parameterList, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Genesis {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
  fromJSON(object: any): Genesis {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => Record.fromJSON(e)) : [],
      parameterList: isSet(object.parameterList) ? ParameterList.fromJSON(object.parameterList) : undefined
    };
  },
  toJSON(message: Genesis): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? Record.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.parameterList !== undefined && (obj.parameterList = message.parameterList ? ParameterList.toJSON(message.parameterList) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Genesis>): Genesis {
    const message = createBaseGenesis();
    message.records = object.records?.map(e => Record.fromPartial(e)) || [];
    message.parameterList = object.parameterList !== undefined && object.parameterList !== null ? ParameterList.fromPartial(object.parameterList) : undefined;
    return message;
  },
  fromAmino(object: GenesisAmino): Genesis {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => Record.fromAmino(e)) : [],
      parameterList: object?.parameter_list ? ParameterList.fromAmino(object.parameter_list) : undefined
    };
  },
  toAmino(message: Genesis): GenesisAmino {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map(e => e ? Record.toAmino(e) : undefined);
    } else {
      obj.records = [];
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
      typeUrl: "/assetmantle.modules.identities.genesis.Genesis",
      value: Genesis.encode(message).finish()
    };
  }
};