import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryRequest } from "./query_request";
import { QueryResponse } from "./query_response";
export interface Service {
  handle(request: QueryRequest): Promise<QueryResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.handle = this.handle.bind(this);
  }
  handle(request: QueryRequest): Promise<QueryResponse> {
    const data = QueryRequest.encode(request).finish();
    const promise = this.rpc.request("assetmantle.modules.metas.queries.meta.Service", "Handle", data);
    return promise.then(data => QueryResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    handle(request: QueryRequest): Promise<QueryResponse> {
      return queryService.handle(request);
    }
  };
};