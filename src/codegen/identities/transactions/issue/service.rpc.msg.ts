import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { Message } from "./message";
import { TransactionResponse } from "./transaction_response";
export interface Msg {
  handle(request: Message): Promise<TransactionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }
  handle(request: Message): Promise<TransactionResponse> {
    const data = Message.encode(request).finish();
    const promise = this.rpc.request("assetmantle.modules.identities.transactions.issue.Msg", "Handle", data);
    return promise.then(data => TransactionResponse.decode(new _m0.Reader(data)));
  }
}