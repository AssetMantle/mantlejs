import { assetmantle } from "./codegen";
import { getQueryRequestAsset, getQueryRequestAssets } from "./utils";

export * from "./codegen";

const mantleClient = await assetmantle.ClientFactory.createRPCQueryClient({
  rpcEndpoint,
});

// const queryRequest = assetmantle.modules.assets.queries.assets.QueryRequest.fromPartial({key: {assetID: {hashID: {iDBytes: }}}})

const { list } =
  await mantleClient.assetmantle.modules.assets.queries.assets.handle(
    getQueryRequestAssets()
  );

  const {} = await mantleClient.assetmantle.modules.assets.queries.asset.handle(getQueryRequestAsset())
