import * as _201 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _201.ScalarType;
    scalarTypeToJSON(object: _201.ScalarType): string;
    ScalarType: typeof _201.ScalarType;
    ScalarTypeSDKType: typeof _201.ScalarType;
    ScalarTypeAmino: typeof _201.ScalarType;
    InterfaceDescriptor: {
        encode(message: _201.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.InterfaceDescriptor;
        fromJSON(object: any): _201.InterfaceDescriptor;
        toJSON(message: _201.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_201.InterfaceDescriptor>): _201.InterfaceDescriptor;
        fromAmino(object: _201.InterfaceDescriptorAmino): _201.InterfaceDescriptor;
        toAmino(message: _201.InterfaceDescriptor): _201.InterfaceDescriptorAmino;
        fromAminoMsg(object: _201.InterfaceDescriptorAminoMsg): _201.InterfaceDescriptor;
        fromProtoMsg(message: _201.InterfaceDescriptorProtoMsg): _201.InterfaceDescriptor;
        toProto(message: _201.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _201.InterfaceDescriptor): _201.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        encode(message: _201.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _201.ScalarDescriptor;
        fromJSON(object: any): _201.ScalarDescriptor;
        toJSON(message: _201.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_201.ScalarDescriptor>): _201.ScalarDescriptor;
        fromAmino(object: _201.ScalarDescriptorAmino): _201.ScalarDescriptor;
        toAmino(message: _201.ScalarDescriptor): _201.ScalarDescriptorAmino;
        fromAminoMsg(object: _201.ScalarDescriptorAminoMsg): _201.ScalarDescriptor;
        fromProtoMsg(message: _201.ScalarDescriptorProtoMsg): _201.ScalarDescriptor;
        toProto(message: _201.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _201.ScalarDescriptor): _201.ScalarDescriptorProtoMsg;
    };
};
