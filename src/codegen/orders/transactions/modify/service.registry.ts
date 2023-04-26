import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { Message } from "./message";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/assetmantle.modules.orders.transactions.modify.Message", Message]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    handle(value: Message) {
      return {
        typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
        value: Message.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    handle(value: Message) {
      return {
        typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
        value
      };
    }
  },
  toJSON: {
    handle(value: Message) {
      return {
        typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
        value: Message.toJSON(value)
      };
    }
  },
  fromJSON: {
    handle(value: any) {
      return {
        typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
        value: Message.fromJSON(value)
      };
    }
  },
  fromPartial: {
    handle(value: Message) {
      return {
        typeUrl: "/assetmantle.modules.orders.transactions.modify.Message",
        value: Message.fromPartial(value)
      };
    }
  }
};