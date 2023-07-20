import { Key, KeyAmino, KeySDKType } from "../key/key";
import { Mappable, MappableAmino, MappableSDKType } from "../mappable/mappable";
import * as _m0 from "protobufjs/minimal";
export interface Record {
    key?: Key;
    mappable?: Mappable;
}
export interface RecordProtoMsg {
    typeUrl: "/assetmantle.modules.metas.record.Record";
    value: Uint8Array;
}
export interface RecordAmino {
    key?: KeyAmino;
    mappable?: MappableAmino;
}
export interface RecordAminoMsg {
    type: "/assetmantle.modules.metas.record.Record";
    value: RecordAmino;
}
export interface RecordSDKType {
    key?: KeySDKType;
    mappable?: MappableSDKType;
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial(object: Partial<Record>): Record;
    fromAmino(object: RecordAmino): Record;
    toAmino(message: Record): RecordAmino;
    fromAminoMsg(object: RecordAminoMsg): Record;
    fromProtoMsg(message: RecordProtoMsg): Record;
    toProto(message: Record): Uint8Array;
    toProtoMsg(message: Record): RecordProtoMsg;
};
