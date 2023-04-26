import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.identities.transactions.mutate.Message": {
    aminoType: "/assetmantle.modules.identities.transactions.mutate.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};