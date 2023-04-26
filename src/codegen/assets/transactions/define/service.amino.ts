import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.assets.transactions.define.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.define.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};