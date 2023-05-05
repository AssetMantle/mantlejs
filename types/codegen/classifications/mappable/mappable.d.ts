import { Document, DocumentAmino, DocumentSDKType } from "../../documents/base/document";
import * as _m0 from "protobufjs/minimal";
export interface Mappable {
    classification?: Document;
}
export interface MappableProtoMsg {
    typeUrl: "/assetmantle.modules.classifications.mappable.Mappable";
    value: Uint8Array;
}
export interface MappableAmino {
    classification?: DocumentAmino;
}
export interface MappableAminoMsg {
    type: "/assetmantle.modules.classifications.mappable.Mappable";
    value: MappableAmino;
}
export interface MappableSDKType {
    classification?: DocumentSDKType;
}
export declare const Mappable: {
    encode(message: Mappable, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Mappable;
    fromJSON(object: any): Mappable;
    toJSON(message: Mappable): unknown;
    fromPartial(object: Partial<Mappable>): Mappable;
    fromAmino(object: MappableAmino): Mappable;
    toAmino(message: Mappable): MappableAmino;
    fromAminoMsg(object: MappableAminoMsg): Mappable;
    fromProtoMsg(message: MappableProtoMsg): Mappable;
    toProto(message: Mappable): Uint8Array;
    toProtoMsg(message: Mappable): MappableProtoMsg;
};
