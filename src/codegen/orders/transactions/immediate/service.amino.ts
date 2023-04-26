import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.orders.transactions.immediate.Message": {
    aminoType: "/assetmantle.modules.orders.transactions.immediate.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};