import { CompactBitArray, CompactBitArrayAmino, CompactBitArraySDKType } from "../../../crypto/multisig/v1beta1/multisig";
import { Any, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { Long } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/**
 * SignMode represents a signing mode with its own security guarantees.
 *
 * This enum should be considered a registry of all known sign modes
 * in the Cosmos ecosystem. Apps are not expected to support all known
 * sign modes. Apps that would like to support custom  sign modes are
 * encouraged to open a small PR against this file to add a new case
 * to this SignMode enum describing their sign mode so that different
 * apps have a consistent version of this enum.
 */
export declare enum SignMode {
    /**
     * SIGN_MODE_UNSPECIFIED - SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
     * rejected.
     */
    SIGN_MODE_UNSPECIFIED = 0,
    /**
     * SIGN_MODE_DIRECT - SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
     * verified with raw bytes from Tx.
     */
    SIGN_MODE_DIRECT = 1,
    /**
     * SIGN_MODE_TEXTUAL - SIGN_MODE_TEXTUAL is a future signing mode that will verify some
     * human-readable textual representation on top of the binary representation
     * from SIGN_MODE_DIRECT. It is currently not supported.
     */
    SIGN_MODE_TEXTUAL = 2,
    /**
     * SIGN_MODE_DIRECT_AUX - SIGN_MODE_DIRECT_AUX specifies a signing mode which uses
     * SignDocDirectAux. As opposed to SIGN_MODE_DIRECT, this sign mode does not
     * require signers signing over other signers' `signer_info`. It also allows
     * for adding Tips in transactions.
     *
     * Since: cosmos-sdk 0.46
     */
    SIGN_MODE_DIRECT_AUX = 3,
    /**
     * SIGN_MODE_LEGACY_AMINO_JSON - SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
     * Amino JSON and will be removed in the future.
     */
    SIGN_MODE_LEGACY_AMINO_JSON = 127,
    UNRECOGNIZED = -1
}
export declare const SignModeSDKType: typeof SignMode;
export declare const SignModeAmino: typeof SignMode;
export declare function signModeFromJSON(object: any): SignMode;
export declare function signModeToJSON(object: SignMode): string;
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptors {
    /** signatures are the signature descriptors */
    signatures: SignatureDescriptor[];
}
export interface SignatureDescriptorsProtoMsg {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptors";
    value: Uint8Array;
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsAmino {
    /** signatures are the signature descriptors */
    signatures: SignatureDescriptorAmino[];
}
export interface SignatureDescriptorsAminoMsg {
    type: "cosmos-sdk/SignatureDescriptors";
    value: SignatureDescriptorsAmino;
}
/** SignatureDescriptors wraps multiple SignatureDescriptor's. */
export interface SignatureDescriptorsSDKType {
    signatures: SignatureDescriptorSDKType[];
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptor {
    /** public_key is the public key of the signer */
    publicKey?: Any;
    data?: SignatureDescriptor_Data;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to prevent
     * replay attacks.
     */
    sequence: Long;
}
export interface SignatureDescriptorProtoMsg {
    typeUrl: "/cosmos.tx.signing.v1beta1.SignatureDescriptor";
    value: Uint8Array;
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorAmino {
    /** public_key is the public key of the signer */
    public_key?: AnyAmino;
    data?: SignatureDescriptor_DataAmino;
    /**
     * sequence is the sequence of the account, which describes the
     * number of committed transactions signed by a given address. It is used to prevent
     * replay attacks.
     */
    sequence: string;
}
export interface SignatureDescriptorAminoMsg {
    type: "cosmos-sdk/SignatureDescriptor";
    value: SignatureDescriptorAmino;
}
/**
 * SignatureDescriptor is a convenience type which represents the full data for
 * a signature including the public key of the signer, signing modes and the
 * signature itself. It is primarily used for coordinating signatures between
 * clients.
 */
export interface SignatureDescriptorSDKType {
    public_key?: AnySDKType;
    data?: SignatureDescriptor_DataSDKType;
    sequence: Long;
}
/** Data represents signature data */
export interface SignatureDescriptor_Data {
    /** single represents a single signer */
    single?: SignatureDescriptor_Data_Single;
    /** multi represents a multisig signer */
    multi?: SignatureDescriptor_Data_Multi;
}
export interface SignatureDescriptor_DataProtoMsg {
    typeUrl: "/cosmos.tx.signing.v1beta1.Data";
    value: Uint8Array;
}
/** Data represents signature data */
export interface SignatureDescriptor_DataAmino {
    /** single represents a single signer */
    single?: SignatureDescriptor_Data_SingleAmino;
    /** multi represents a multisig signer */
    multi?: SignatureDescriptor_Data_MultiAmino;
}
export interface SignatureDescriptor_DataAminoMsg {
    type: "cosmos-sdk/Data";
    value: SignatureDescriptor_DataAmino;
}
/** Data represents signature data */
export interface SignatureDescriptor_DataSDKType {
    single?: SignatureDescriptor_Data_SingleSDKType;
    multi?: SignatureDescriptor_Data_MultiSDKType;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_Single {
    /** mode is the signing mode of the single signer */
    mode: SignMode;
    /** signature is the raw signature bytes */
    signature: Uint8Array;
}
export interface SignatureDescriptor_Data_SingleProtoMsg {
    typeUrl: "/cosmos.tx.signing.v1beta1.Single";
    value: Uint8Array;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleAmino {
    /** mode is the signing mode of the single signer */
    mode: SignMode;
    /** signature is the raw signature bytes */
    signature: Uint8Array;
}
export interface SignatureDescriptor_Data_SingleAminoMsg {
    type: "cosmos-sdk/Single";
    value: SignatureDescriptor_Data_SingleAmino;
}
/** Single is the signature data for a single signer */
export interface SignatureDescriptor_Data_SingleSDKType {
    mode: SignMode;
    signature: Uint8Array;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_Multi {
    /** bitarray specifies which keys within the multisig are signing */
    bitarray?: CompactBitArray;
    /** signatures is the signatures of the multi-signature */
    signatures: SignatureDescriptor_Data[];
}
export interface SignatureDescriptor_Data_MultiProtoMsg {
    typeUrl: "/cosmos.tx.signing.v1beta1.Multi";
    value: Uint8Array;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiAmino {
    /** bitarray specifies which keys within the multisig are signing */
    bitarray?: CompactBitArrayAmino;
    /** signatures is the signatures of the multi-signature */
    signatures: SignatureDescriptor_DataAmino[];
}
export interface SignatureDescriptor_Data_MultiAminoMsg {
    type: "cosmos-sdk/Multi";
    value: SignatureDescriptor_Data_MultiAmino;
}
/** Multi is the signature data for a multisig public key */
export interface SignatureDescriptor_Data_MultiSDKType {
    bitarray?: CompactBitArraySDKType;
    signatures: SignatureDescriptor_DataSDKType[];
}
export declare const SignatureDescriptors: {
    encode(message: SignatureDescriptors, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptors;
    fromJSON(object: any): SignatureDescriptors;
    toJSON(message: SignatureDescriptors): unknown;
    fromPartial(object: Partial<SignatureDescriptors>): SignatureDescriptors;
    fromAmino(object: SignatureDescriptorsAmino): SignatureDescriptors;
    toAmino(message: SignatureDescriptors): SignatureDescriptorsAmino;
    fromAminoMsg(object: SignatureDescriptorsAminoMsg): SignatureDescriptors;
    toAminoMsg(message: SignatureDescriptors): SignatureDescriptorsAminoMsg;
    fromProtoMsg(message: SignatureDescriptorsProtoMsg): SignatureDescriptors;
    toProto(message: SignatureDescriptors): Uint8Array;
    toProtoMsg(message: SignatureDescriptors): SignatureDescriptorsProtoMsg;
};
export declare const SignatureDescriptor: {
    encode(message: SignatureDescriptor, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor;
    fromJSON(object: any): SignatureDescriptor;
    toJSON(message: SignatureDescriptor): unknown;
    fromPartial(object: Partial<SignatureDescriptor>): SignatureDescriptor;
    fromAmino(object: SignatureDescriptorAmino): SignatureDescriptor;
    toAmino(message: SignatureDescriptor): SignatureDescriptorAmino;
    fromAminoMsg(object: SignatureDescriptorAminoMsg): SignatureDescriptor;
    toAminoMsg(message: SignatureDescriptor): SignatureDescriptorAminoMsg;
    fromProtoMsg(message: SignatureDescriptorProtoMsg): SignatureDescriptor;
    toProto(message: SignatureDescriptor): Uint8Array;
    toProtoMsg(message: SignatureDescriptor): SignatureDescriptorProtoMsg;
};
export declare const SignatureDescriptor_Data: {
    encode(message: SignatureDescriptor_Data, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data;
    fromJSON(object: any): SignatureDescriptor_Data;
    toJSON(message: SignatureDescriptor_Data): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data>): SignatureDescriptor_Data;
    fromAmino(object: SignatureDescriptor_DataAmino): SignatureDescriptor_Data;
    toAmino(message: SignatureDescriptor_Data): SignatureDescriptor_DataAmino;
    fromAminoMsg(object: SignatureDescriptor_DataAminoMsg): SignatureDescriptor_Data;
    toAminoMsg(message: SignatureDescriptor_Data): SignatureDescriptor_DataAminoMsg;
    fromProtoMsg(message: SignatureDescriptor_DataProtoMsg): SignatureDescriptor_Data;
    toProto(message: SignatureDescriptor_Data): Uint8Array;
    toProtoMsg(message: SignatureDescriptor_Data): SignatureDescriptor_DataProtoMsg;
};
export declare const SignatureDescriptor_Data_Single: {
    encode(message: SignatureDescriptor_Data_Single, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Single;
    fromJSON(object: any): SignatureDescriptor_Data_Single;
    toJSON(message: SignatureDescriptor_Data_Single): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data_Single>): SignatureDescriptor_Data_Single;
    fromAmino(object: SignatureDescriptor_Data_SingleAmino): SignatureDescriptor_Data_Single;
    toAmino(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleAmino;
    fromAminoMsg(object: SignatureDescriptor_Data_SingleAminoMsg): SignatureDescriptor_Data_Single;
    toAminoMsg(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleAminoMsg;
    fromProtoMsg(message: SignatureDescriptor_Data_SingleProtoMsg): SignatureDescriptor_Data_Single;
    toProto(message: SignatureDescriptor_Data_Single): Uint8Array;
    toProtoMsg(message: SignatureDescriptor_Data_Single): SignatureDescriptor_Data_SingleProtoMsg;
};
export declare const SignatureDescriptor_Data_Multi: {
    encode(message: SignatureDescriptor_Data_Multi, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignatureDescriptor_Data_Multi;
    fromJSON(object: any): SignatureDescriptor_Data_Multi;
    toJSON(message: SignatureDescriptor_Data_Multi): unknown;
    fromPartial(object: Partial<SignatureDescriptor_Data_Multi>): SignatureDescriptor_Data_Multi;
    fromAmino(object: SignatureDescriptor_Data_MultiAmino): SignatureDescriptor_Data_Multi;
    toAmino(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiAmino;
    fromAminoMsg(object: SignatureDescriptor_Data_MultiAminoMsg): SignatureDescriptor_Data_Multi;
    toAminoMsg(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiAminoMsg;
    fromProtoMsg(message: SignatureDescriptor_Data_MultiProtoMsg): SignatureDescriptor_Data_Multi;
    toProto(message: SignatureDescriptor_Data_Multi): Uint8Array;
    toProtoMsg(message: SignatureDescriptor_Data_Multi): SignatureDescriptor_Data_MultiProtoMsg;
};
