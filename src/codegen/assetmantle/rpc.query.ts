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
    assetmantle: {
      modules: {
        assets: {
          queries: {
            asset: (await import("../assets/queries/asset/service.rpc.Query")).createRpcQueryExtension(client),
            assets: (await import("../assets/queries/assets/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        classifications: {
          queries: {
            classification: (await import("../classifications/queries/classification/service.rpc.Query")).createRpcQueryExtension(client),
            classifications: (await import("../classifications/queries/classifications/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        identities: {
          queries: {
            identities: (await import("../identities/queries/identities/service.rpc.Query")).createRpcQueryExtension(client),
            identity: (await import("../identities/queries/identity/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        maintainers: {
          queries: {
            maintainer: (await import("../maintainers/queries/maintainer/service.rpc.Query")).createRpcQueryExtension(client),
            maintainers: (await import("../maintainers/queries/maintainers/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        metas: {
          queries: {
            meta: (await import("../metas/queries/meta/service.rpc.Query")).createRpcQueryExtension(client),
            metas: (await import("../metas/queries/metas/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        orders: {
          queries: {
            order: (await import("../orders/queries/order/service.rpc.Query")).createRpcQueryExtension(client),
            orders: (await import("../orders/queries/orders/service.rpc.Query")).createRpcQueryExtension(client)
          }
        },
        splits: {
          queries: {
            balances: (await import("../splits/queries/balances/service.rpc.Query")).createRpcQueryExtension(client),
            split: (await import("../splits/queries/split/service.rpc.Query")).createRpcQueryExtension(client),
            splits: (await import("../splits/queries/splits/service.rpc.Query")).createRpcQueryExtension(client),
            supply: (await import("../splits/queries/supply/service.rpc.Query")).createRpcQueryExtension(client)
          }
        }
      }
    },
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
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
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
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