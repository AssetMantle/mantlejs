import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { Message } from "./message";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        handle(value: Message): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        handle(value: Message): {
            typeUrl: string;
            value: Message;
        };
    };
    toJSON: {
        handle(value: Message): {
            typeUrl: string;
            value: unknown;
        };
    };
    fromJSON: {
        handle(value: any): {
            typeUrl: string;
            value: Message;
        };
    };
    fromPartial: {
        handle(value: Message): {
            typeUrl: string;
            value: Message;
        };
    };
};
