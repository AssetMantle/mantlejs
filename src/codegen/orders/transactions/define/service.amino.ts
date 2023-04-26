import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.orders.transactions.define.Message": {
    aminoType: "/assetmantle.modules.orders.transactions.define.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};