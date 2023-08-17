//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.assets.transactions.wrap.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.wrap.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};