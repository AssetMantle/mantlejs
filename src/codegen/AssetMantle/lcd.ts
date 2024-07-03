//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    AssetMantle: {
      modules: {
        assets: {
          queries: {
            asset: new (await import("./modules/x/assets/queries/asset/service.lcd")).LCDQueryClient({
              requestClient
            }),
            assets: new (await import("./modules/x/assets/queries/assets/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        classifications: {
          queries: {
            classification: new (await import("./modules/x/classifications/queries/classification/service.lcd")).LCDQueryClient({
              requestClient
            }),
            classifications: new (await import("./modules/x/classifications/queries/classifications/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        identities: {
          queries: {
            identities: new (await import("./modules/x/identities/queries/identities/service.lcd")).LCDQueryClient({
              requestClient
            }),
            identity: new (await import("./modules/x/identities/queries/identity/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        maintainers: {
          queries: {
            maintainer: new (await import("./modules/x/maintainers/queries/maintainer/service.lcd")).LCDQueryClient({
              requestClient
            }),
            maintainers: new (await import("./modules/x/maintainers/queries/maintainers/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        metas: {
          queries: {
            meta: new (await import("./modules/x/metas/queries/meta/service.lcd")).LCDQueryClient({
              requestClient
            }),
            metas: new (await import("./modules/x/metas/queries/metas/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        orders: {
          queries: {
            order: new (await import("./modules/x/orders/queries/order/service.lcd")).LCDQueryClient({
              requestClient
            }),
            orders: new (await import("./modules/x/orders/queries/orders/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        },
        splits: {
          queries: {
            balances: new (await import("./modules/x/splits/queries/balances/service.lcd")).LCDQueryClient({
              requestClient
            }),
            split: new (await import("./modules/x/splits/queries/split/service.lcd")).LCDQueryClient({
              requestClient
            }),
            splits: new (await import("./modules/x/splits/queries/splits/service.lcd")).LCDQueryClient({
              requestClient
            }),
            supply: new (await import("./modules/x/splits/queries/supply/service.lcd")).LCDQueryClient({
              requestClient
            })
          }
        }
      }
    },
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};