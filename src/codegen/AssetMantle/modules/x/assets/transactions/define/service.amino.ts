//@ts-nocheck
import { Message } from "./message";
export const AminoConverter = {
  "/AssetMantle.modules.assets.transactions.define.Message": {
    aminoType: "/AssetMantle.modules.assets.transactions.define.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};