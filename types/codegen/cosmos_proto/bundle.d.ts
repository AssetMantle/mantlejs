import * as _184 from "./cosmos";
export declare const cosmos_proto: {
    scalarTypeFromJSON(object: any): _184.ScalarType;
    scalarTypeToJSON(object: _184.ScalarType): string;
    ScalarType: typeof _184.ScalarType;
    ScalarTypeSDKType: typeof _184.ScalarType;
    ScalarTypeAmino: typeof _184.ScalarType;
    InterfaceDescriptor: {
        encode(message: _184.InterfaceDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.InterfaceDescriptor;
        fromJSON(object: any): _184.InterfaceDescriptor;
        toJSON(message: _184.InterfaceDescriptor): unknown;
        fromPartial(object: Partial<_184.InterfaceDescriptor>): _184.InterfaceDescriptor;
        fromAmino(object: _184.InterfaceDescriptorAmino): _184.InterfaceDescriptor;
        toAmino(message: _184.InterfaceDescriptor): _184.InterfaceDescriptorAmino;
        fromAminoMsg(object: _184.InterfaceDescriptorAminoMsg): _184.InterfaceDescriptor;
        fromProtoMsg(message: _184.InterfaceDescriptorProtoMsg): _184.InterfaceDescriptor;
        toProto(message: _184.InterfaceDescriptor): Uint8Array;
        toProtoMsg(message: _184.InterfaceDescriptor): _184.InterfaceDescriptorProtoMsg;
    };
    ScalarDescriptor: {
        encode(message: _184.ScalarDescriptor, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number): _184.ScalarDescriptor;
        fromJSON(object: any): _184.ScalarDescriptor;
        toJSON(message: _184.ScalarDescriptor): unknown;
        fromPartial(object: Partial<_184.ScalarDescriptor>): _184.ScalarDescriptor;
        fromAmino(object: _184.ScalarDescriptorAmino): _184.ScalarDescriptor;
        toAmino(message: _184.ScalarDescriptor): _184.ScalarDescriptorAmino;
        fromAminoMsg(object: _184.ScalarDescriptorAminoMsg): _184.ScalarDescriptor;
        fromProtoMsg(message: _184.ScalarDescriptorProtoMsg): _184.ScalarDescriptor;
        toProto(message: _184.ScalarDescriptor): Uint8Array;
        toProtoMsg(message: _184.ScalarDescriptor): _184.ScalarDescriptorProtoMsg;
    };
};
