//@ts-nocheck
import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  AssetMantle: {
    modules: {
      assets: {
        transactions: {
          burn: new (await import("./modules/x/assets/transactions/burn/service.rpc.msg")).MsgClientImpl(rpc),
          define: new (await import("./modules/x/assets/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("./modules/x/assets/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          mint: new (await import("./modules/x/assets/transactions/mint/service.rpc.msg")).MsgClientImpl(rpc),
          mutate: new (await import("./modules/x/assets/transactions/mutate/service.rpc.msg")).MsgClientImpl(rpc),
          renumerate: new (await import("./modules/x/assets/transactions/renumerate/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("./modules/x/assets/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc),
          send: new (await import("./modules/x/assets/transactions/send/service.rpc.msg")).MsgClientImpl(rpc),
          unwrap: new (await import("./modules/x/assets/transactions/unwrap/service.rpc.msg")).MsgClientImpl(rpc),
          wrap: new (await import("./modules/x/assets/transactions/wrap/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      identities: {
        transactions: {
          define: new (await import("./modules/x/identities/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("./modules/x/identities/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          issue: new (await import("./modules/x/identities/transactions/issue/service.rpc.msg")).MsgClientImpl(rpc),
          name: new (await import("./modules/x/identities/transactions/name/service.rpc.msg")).MsgClientImpl(rpc),
          provision: new (await import("./modules/x/identities/transactions/provision/service.rpc.msg")).MsgClientImpl(rpc),
          quash: new (await import("./modules/x/identities/transactions/quash/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("./modules/x/identities/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc),
          unprovision: new (await import("./modules/x/identities/transactions/unprovision/service.rpc.msg")).MsgClientImpl(rpc),
          update: new (await import("./modules/x/identities/transactions/update/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      metas: {
        transactions: {
          reveal: new (await import("./modules/x/metas/transactions/reveal/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      orders: {
        transactions: {
          cancel: new (await import("./modules/x/orders/transactions/cancel/service.rpc.msg")).MsgClientImpl(rpc),
          define: new (await import("./modules/x/orders/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("./modules/x/orders/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          get: new (await import("./modules/x/orders/transactions/get/service.rpc.msg")).MsgClientImpl(rpc),
          immediate: new (await import("./modules/x/orders/transactions/immediate/service.rpc.msg")).MsgClientImpl(rpc),
          make: new (await import("./modules/x/orders/transactions/make/service.rpc.msg")).MsgClientImpl(rpc),
          modify: new (await import("./modules/x/orders/transactions/modify/service.rpc.msg")).MsgClientImpl(rpc),
          put: new (await import("./modules/x/orders/transactions/put/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("./modules/x/orders/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc),
          take: new (await import("./modules/x/orders/transactions/take/service.rpc.msg")).MsgClientImpl(rpc)
        }
      }
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});