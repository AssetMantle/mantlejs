//@ts-nocheck
import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    AssetMantle: {
      modules: {
        assets: {
          queries: {
            asset: (await import("./modules/x/assets/queries/asset/service.rpc.Query")).createRpcQueryExtension(client),
            assets: (await import("./modules/x/assets/queries/assets/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        classifications: {
          queries: {
            classification: (await import("./modules/x/classifications/queries/classification/service.rpc.Query")).createRpcQueryExtension(client),
            classifications: (await import("./modules/x/classifications/queries/classifications/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        identities: {
          queries: {
            identities: (await import("./modules/x/identities/queries/identities/service.rpc.Query")).createRpcQueryExtension(client),
            identity: (await import("./modules/x/identities/queries/identity/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        maintainers: {
          queries: {
            maintainer: (await import("./modules/x/maintainers/queries/maintainer/service.rpc.Query")).createRpcQueryExtension(client),
            maintainers: (await import("./modules/x/maintainers/queries/maintainers/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        metas: {
          queries: {
            meta: (await import("./modules/x/metas/queries/meta/service.rpc.Query")).createRpcQueryExtension(client),
            metas: (await import("./modules/x/metas/queries/metas/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        orders: {
          queries: {
            order: (await import("./modules/x/orders/queries/order/service.rpc.Query")).createRpcQueryExtension(client),
            orders: (await import("./modules/x/orders/queries/orders/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        splits: {
          queries: {
            balances: (await import("./modules/x/splits/queries/balances/service.rpc.Query")).createRpcQueryExtension(client),
            split: (await import("./modules/x/splits/queries/split/service.rpc.Query")).createRpcQueryExtension(client),
            splits: (await import("./modules/x/splits/queries/splits/service.rpc.Query")).createRpcQueryExtension(client),
            supply: (await import("./modules/x/splits/queries/supply/service.rpc.Query")).createRpcQueryExtension(client)
          }
        }
      }
    },
    cosmos: {
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};