import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    assetmantle: {
        modules: {
            assets: {
                transactions: {
                    burn: import("../assets/transactions/burn/service.rpc.msg").MsgClientImpl;
                    define: import("../assets/transactions/define/service.rpc.msg").MsgClientImpl;
                    deputize: import("../assets/transactions/deputize/service.rpc.msg").MsgClientImpl;
                    mint: import("../assets/transactions/mint/service.rpc.msg").MsgClientImpl;
                    mutate: import("../assets/transactions/mutate/service.rpc.msg").MsgClientImpl;
                    renumerate: import("../assets/transactions/renumerate/service.rpc.msg").MsgClientImpl;
                    revoke: import("../assets/transactions/revoke/service.rpc.msg").MsgClientImpl;
                };
            };
            identities: {
                transactions: {
                    define: import("../identities/transactions/define/service.rpc.msg").MsgClientImpl;
                    deputize: import("../identities/transactions/deputize/service.rpc.msg").MsgClientImpl;
                    issue: import("../identities/transactions/issue/service.rpc.msg").MsgClientImpl;
                    mutate: import("../identities/transactions/mutate/service.rpc.msg").MsgClientImpl;
                    nub: import("../identities/transactions/nub/service.rpc.msg").MsgClientImpl;
                    provision: import("../identities/transactions/provision/service.rpc.msg").MsgClientImpl;
                    quash: import("../identities/transactions/quash/service.rpc.msg").MsgClientImpl;
                    revoke: import("../identities/transactions/revoke/service.rpc.msg").MsgClientImpl;
                    unprovision: import("../identities/transactions/unprovision/service.rpc.msg").MsgClientImpl;
                };
            };
            metas: {
                transactions: {
                    reveal: import("../metas/transactions/reveal/service.rpc.msg").MsgClientImpl;
                };
            };
            orders: {
                transactions: {
                    cancel: import("../orders/transactions/cancel/service.rpc.msg").MsgClientImpl;
                    define: import("../orders/transactions/define/service.rpc.msg").MsgClientImpl;
                    deputize: import("../orders/transactions/deputize/service.rpc.msg").MsgClientImpl;
                    immediate: import("../orders/transactions/immediate/service.rpc.msg").MsgClientImpl;
                    make: import("../orders/transactions/make/service.rpc.msg").MsgClientImpl;
                    modify: import("../orders/transactions/modify/service.rpc.msg").MsgClientImpl;
                    revoke: import("../orders/transactions/revoke/service.rpc.msg").MsgClientImpl;
                    take: import("../orders/transactions/take/service.rpc.msg").MsgClientImpl;
                };
            };
            splits: {
                transactions: {
                    send: import("../splits/transactions/send/service.rpc.msg").MsgClientImpl;
                    unwrap: import("../splits/transactions/unwrap/service.rpc.msg").MsgClientImpl;
                    wrap: import("../splits/transactions/wrap/service.rpc.msg").MsgClientImpl;
                };
            };
        };
    };
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
