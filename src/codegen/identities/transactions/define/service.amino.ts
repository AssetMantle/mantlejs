import { Message } from "./message";
export const AminoConverter = {
  "/assetmantle.modules.identities.transactions.define.Message": {
    aminoType: "/assetmantle.modules.identities.transactions.define.Message",
    toAmino: Message.toAmino,
    fromAmino: Message.fromAmino
  }
};