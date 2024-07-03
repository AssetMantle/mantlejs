//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/AssetMantle.modules.assets.transactions.send.Message": {
    aminoType: "/AssetMantle.modules.assets.transactions.send.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};