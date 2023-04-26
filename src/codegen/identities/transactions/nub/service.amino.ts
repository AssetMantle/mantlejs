import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.identities.transactions.nub.Message": {
    aminoType: "/assetmantle.modules.identities.transactions.nub.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};