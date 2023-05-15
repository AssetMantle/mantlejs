//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.assets.transactions.mint.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.mint.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};