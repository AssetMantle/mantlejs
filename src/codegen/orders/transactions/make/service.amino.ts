import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.orders.transactions.make.Message": {
    aminoType: "/assetmantle.modules.orders.transactions.make.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};