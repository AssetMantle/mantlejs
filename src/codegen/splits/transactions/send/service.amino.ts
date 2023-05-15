//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.splits.transactions.send.Message": {
    aminoType: "/assetmantle.modules.splits.transactions.send.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};