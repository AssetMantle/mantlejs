import * as _193 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _193.ScalarType;
    scalarTypeToJSON(object: _193.ScalarType): string;
    ScalarType: typeof _193.ScalarType;
    ScalarTypeSDKType: typeof _193.ScalarType;
    ScalarTypeAmino: typeof _193.ScalarType;
    InterfaceDescriptor: {
        encode(message: _193.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.InterfaceDescriptor;
        fromJSON(object: any): _193.InterfaceDescriptor;
        toJSON(message: _193.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_193.InterfaceDescriptor>): _193.InterfaceDescriptor;
        fromAmino(object: _193.InterfaceDescriptorAmino): _193.InterfaceDescriptor;
        toAmino(message: _193.InterfaceDescriptor): _193.InterfaceDescriptorAmino;
        fromAminoMsg(object: _193.InterfaceDescriptorAminoMsg): _193.InterfaceDescriptor;
        fromProtoMsg(message: _193.InterfaceDescriptorProtoMsg): _193.InterfaceDescriptor;
        toProto(message: _193.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _193.InterfaceDescriptor): _193.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        encode(message: _193.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _193.ScalarDescriptor;
        fromJSON(object: any): _193.ScalarDescriptor;
        toJSON(message: _193.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_193.ScalarDescriptor>): _193.ScalarDescriptor;
        fromAmino(object: _193.ScalarDescriptorAmino): _193.ScalarDescriptor;
        toAmino(message: _193.ScalarDescriptor): _193.ScalarDescriptorAmino;
        fromAminoMsg(object: _193.ScalarDescriptorAminoMsg): _193.ScalarDescriptor;
        fromProtoMsg(message: _193.ScalarDescriptorProtoMsg): _193.ScalarDescriptor;
        toProto(message: _193.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _193.ScalarDescriptor): _193.ScalarDescriptorProtoMsg;
    };
};
