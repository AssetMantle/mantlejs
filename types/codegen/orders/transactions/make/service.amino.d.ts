import { Message } from "./message";
export declare const AminoConverter: {
    "/assetmantle.modules.orders.transactions.make.Message": {
        aminoType: string;
        toAmino: (message: Message) => import("./message").MessageAmino;
        fromAmino: (object: import("./message").MessageAmino) => Message;
    };
};
