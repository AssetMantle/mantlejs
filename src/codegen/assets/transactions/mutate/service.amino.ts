import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.assets.transactions.mutate.Message": {
    aminoType: "/assetmantle.modules.assets.transactions.mutate.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};