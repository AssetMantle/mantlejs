//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { Message } from "./message";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/AssetMantle.modules.orders.transactions.take.Message", Message]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    handle(value: Message) {
      return {
        typeUrl: "/AssetMantle.modules.orders.transactions.take.Message",
        value: Message.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    handle(value: Message) {
      return {
        typeUrl: "/AssetMantle.modules.orders.transactions.take.Message",
        value
      };
    }
  },
  fromPartial: {
    handle(value: Message) {
      return {
        typeUrl: "/AssetMantle.modules.orders.transactions.take.Message",
        value: Message.fromPartial(value)
      };
    }
  }
};