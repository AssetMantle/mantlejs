import { Rpc } from "../../../helpers";
import { Message } from "./message";
import { TransactionResponse } from "./transaction_response";
export interface Msg {
    handle(request: Message): Promise<TransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    handle(request: Message): Promise<TransactionResponse>;
}
