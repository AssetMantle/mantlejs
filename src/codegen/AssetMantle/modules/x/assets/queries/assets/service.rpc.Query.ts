//@ts-nocheck
import { Rpc } from "../../../../../../helpers";
import { BinaryReader } from "../../../../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRequest } from "./query_request";
import { QueryResponse } from "./query_response";
export interface Query {
  handle(request: QueryRequest): Promise<QueryResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }
  handle(request: QueryRequest): Promise<QueryResponse> {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request("AssetMantle.modules.assets.queries.assets.Query", "Handle", data);
    return promise.then(data => QueryResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    handle(request: QueryRequest): Promise<QueryResponse> {
      return queryService.handle(request);
    }
  };
};