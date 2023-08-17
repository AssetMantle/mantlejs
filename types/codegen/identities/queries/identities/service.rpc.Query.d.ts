import { Rpc } from "../../../helpers";
import { QueryClient } from "@cosmjs/stargate";
import { QueryRequest } from "./query_request";
import { QueryResponse } from "./query_response";
export interface Query {
    handle(request: QueryRequest): Promise<QueryResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    handle(request: QueryRequest): Promise<QueryResponse>;
}
export declare const createRpcQueryExtension: (base: QueryClient) => {
    handle(request: QueryRequest): Promise<QueryResponse>;
};
