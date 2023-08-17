//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.assets.transactions.send.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.send.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};