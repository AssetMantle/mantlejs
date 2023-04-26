import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  assetmantle: {
    modules: {
      assets: {
        transactions: {
          burn: new (await import("../assets/transactions/burn/service.rpc.msg")).MsgClientImpl(rpc),
          define: new (await import("../assets/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("../assets/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          mint: new (await import("../assets/transactions/mint/service.rpc.msg")).MsgClientImpl(rpc),
          mutate: new (await import("../assets/transactions/mutate/service.rpc.msg")).MsgClientImpl(rpc),
          renumerate: new (await import("../assets/transactions/renumerate/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("../assets/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      identities: {
        transactions: {
          define: new (await import("../identities/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("../identities/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          issue: new (await import("../identities/transactions/issue/service.rpc.msg")).MsgClientImpl(rpc),
          mutate: new (await import("../identities/transactions/mutate/service.rpc.msg")).MsgClientImpl(rpc),
          nub: new (await import("../identities/transactions/nub/service.rpc.msg")).MsgClientImpl(rpc),
          provision: new (await import("../identities/transactions/provision/service.rpc.msg")).MsgClientImpl(rpc),
          quash: new (await import("../identities/transactions/quash/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("../identities/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc),
          unprovision: new (await import("../identities/transactions/unprovision/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      metas: {
        transactions: {
          reveal: new (await import("../metas/transactions/reveal/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      orders: {
        transactions: {
          cancel: new (await import("../orders/transactions/cancel/service.rpc.msg")).MsgClientImpl(rpc),
          define: new (await import("../orders/transactions/define/service.rpc.msg")).MsgClientImpl(rpc),
          deputize: new (await import("../orders/transactions/deputize/service.rpc.msg")).MsgClientImpl(rpc),
          immediate: new (await import("../orders/transactions/immediate/service.rpc.msg")).MsgClientImpl(rpc),
          make: new (await import("../orders/transactions/make/service.rpc.msg")).MsgClientImpl(rpc),
          modify: new (await import("../orders/transactions/modify/service.rpc.msg")).MsgClientImpl(rpc),
          revoke: new (await import("../orders/transactions/revoke/service.rpc.msg")).MsgClientImpl(rpc),
          take: new (await import("../orders/transactions/take/service.rpc.msg")).MsgClientImpl(rpc)
        }
      },
      splits: {
        transactions: {
          send: new (await import("../splits/transactions/send/service.rpc.msg")).MsgClientImpl(rpc),
          unwrap: new (await import("../splits/transactions/unwrap/service.rpc.msg")).MsgClientImpl(rpc),
          wrap: new (await import("../splits/transactions/wrap/service.rpc.msg")).MsgClientImpl(rpc)
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
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
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
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
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