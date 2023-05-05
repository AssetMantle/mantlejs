import { AnyData, AnyDataAmino, AnyDataSDKType } from "../../../data/base/any_data";
import * as _m0 from "protobufjs/minimal";
export interface Message {
    from: string;
    data?: AnyData;
}
export interface MessageProtoMsg {
    typeUrl: "/assetmantle.modules.metas.transactions.reveal.Message";
    value: Uint8Array;
}
export interface MessageAmino {
    from: string;
    data?: AnyDataAmino;
}
export interface MessageAminoMsg {
    type: "/assetmantle.modules.metas.transactions.reveal.Message";
    value: MessageAmino;
}
export interface MessageSDKType {
    from: string;
    data?: AnyDataSDKType;
}
export declare const Message: {
    encode(message: Message, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Message;
    fromJSON(object: any): Message;
    toJSON(message: Message): unknown;
    fromPartial(object: Partial<Message>): Message;
    fromAmino(object: MessageAmino): Message;
    toAmino(message: Message): MessageAmino;
    fromAminoMsg(object: MessageAminoMsg): Message;
    fromProtoMsg(message: MessageProtoMsg): Message;
    toProto(message: Message): Uint8Array;
    toProtoMsg(message: Message): MessageProtoMsg;
};
