import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.identities.transactions.issue.Message": {
    aminoType: "/assetmantle.modules.identities.transactions.issue.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};