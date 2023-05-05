import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const assetmantleAminoConverters: {
    "/assetmantle.modules.splits.transactions.wrap.Message": {
        aminoType: string;
        toAmino: (message: import("../splits/transactions/wrap/message").Message) => import("../splits/transactions/wrap/message").MessageAmino;
        fromAmino: (object: import("../splits/transactions/wrap/message").MessageAmino) => import("../splits/transactions/wrap/message").Message;
    };
    "/assetmantle.modules.splits.transactions.unwrap.Message": {
        aminoType: string;
        toAmino: (message: import("../splits/transactions/unwrap/message").Message) => import("../splits/transactions/unwrap/message").MessageAmino;
        fromAmino: (object: import("../splits/transactions/unwrap/message").MessageAmino) => import("../splits/transactions/unwrap/message").Message;
    };
    "/assetmantle.modules.splits.transactions.send.Message": {
        aminoType: string;
        toAmino: (message: import("../splits/transactions/send/message").Message) => import("../splits/transactions/send/message").MessageAmino;
        fromAmino: (object: import("../splits/transactions/send/message").MessageAmino) => import("../splits/transactions/send/message").Message;
    };
    "/assetmantle.modules.orders.transactions.take.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/take/message").Message) => import("../orders/transactions/take/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/take/message").MessageAmino) => import("../orders/transactions/take/message").Message;
    };
    "/assetmantle.modules.orders.transactions.revoke.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/revoke/message").Message) => import("../orders/transactions/revoke/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/revoke/message").MessageAmino) => import("../orders/transactions/revoke/message").Message;
    };
    "/assetmantle.modules.orders.transactions.modify.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/modify/message").Message) => import("../orders/transactions/modify/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/modify/message").MessageAmino) => import("../orders/transactions/modify/message").Message;
    };
    "/assetmantle.modules.orders.transactions.make.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/make/message").Message) => import("../orders/transactions/make/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/make/message").MessageAmino) => import("../orders/transactions/make/message").Message;
    };
    "/assetmantle.modules.orders.transactions.immediate.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/immediate/message").Message) => import("../orders/transactions/immediate/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/immediate/message").MessageAmino) => import("../orders/transactions/immediate/message").Message;
    };
    "/assetmantle.modules.orders.transactions.deputize.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/deputize/message").Message) => import("../orders/transactions/deputize/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/deputize/message").MessageAmino) => import("../orders/transactions/deputize/message").Message;
    };
    "/assetmantle.modules.orders.transactions.define.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/define/message").Message) => import("../orders/transactions/define/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/define/message").MessageAmino) => import("../orders/transactions/define/message").Message;
    };
    "/assetmantle.modules.orders.transactions.cancel.Message": {
        aminoType: string;
        toAmino: (message: import("../orders/transactions/cancel/message").Message) => import("../orders/transactions/cancel/message").MessageAmino;
        fromAmino: (object: import("../orders/transactions/cancel/message").MessageAmino) => import("../orders/transactions/cancel/message").Message;
    };
    "/assetmantle.modules.metas.transactions.reveal.Message": {
        aminoType: string;
        toAmino: (message: import("../metas/transactions/reveal/message").Message) => import("../metas/transactions/reveal/message").MessageAmino;
        fromAmino: (object: import("../metas/transactions/reveal/message").MessageAmino) => import("../metas/transactions/reveal/message").Message;
    };
    "/assetmantle.modules.identities.transactions.unprovision.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/unprovision/message").Message) => import("../identities/transactions/unprovision/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/unprovision/message").MessageAmino) => import("../identities/transactions/unprovision/message").Message;
    };
    "/assetmantle.modules.identities.transactions.revoke.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/revoke/message").Message) => import("../identities/transactions/revoke/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/revoke/message").MessageAmino) => import("../identities/transactions/revoke/message").Message;
    };
    "/assetmantle.modules.identities.transactions.quash.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/quash/message").Message) => import("../identities/transactions/quash/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/quash/message").MessageAmino) => import("../identities/transactions/quash/message").Message;
    };
    "/assetmantle.modules.identities.transactions.provision.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/provision/message").Message) => import("../identities/transactions/provision/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/provision/message").MessageAmino) => import("../identities/transactions/provision/message").Message;
    };
    "/assetmantle.modules.identities.transactions.nub.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/nub/message").Message) => import("../identities/transactions/nub/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/nub/message").MessageAmino) => import("../identities/transactions/nub/message").Message;
    };
    "/assetmantle.modules.identities.transactions.mutate.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/mutate/message").Message) => import("../identities/transactions/mutate/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/mutate/message").MessageAmino) => import("../identities/transactions/mutate/message").Message;
    };
    "/assetmantle.modules.identities.transactions.issue.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/issue/message").Message) => import("../identities/transactions/issue/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/issue/message").MessageAmino) => import("../identities/transactions/issue/message").Message;
    };
    "/assetmantle.modules.identities.transactions.deputize.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/deputize/message").Message) => import("../identities/transactions/deputize/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/deputize/message").MessageAmino) => import("../identities/transactions/deputize/message").Message;
    };
    "/assetmantle.modules.identities.transactions.define.Message": {
        aminoType: string;
        toAmino: (message: import("../identities/transactions/define/message").Message) => import("../identities/transactions/define/message").MessageAmino;
        fromAmino: (object: import("../identities/transactions/define/message").MessageAmino) => import("../identities/transactions/define/message").Message;
    };
    "/assetmantle.modules.assets.transactions.revoke.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/revoke/message").Message) => import("../assets/transactions/revoke/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/revoke/message").MessageAmino) => import("../assets/transactions/revoke/message").Message;
    };
    "/assetmantle.modules.assets.transactions.renumerate.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/renumerate/message").Message) => import("../assets/transactions/renumerate/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/renumerate/message").MessageAmino) => import("../assets/transactions/renumerate/message").Message;
    };
    "/assetmantle.modules.assets.transactions.mutate.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/mutate/message").Message) => import("../assets/transactions/mutate/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/mutate/message").MessageAmino) => import("../assets/transactions/mutate/message").Message;
    };
    "/assetmantle.modules.assets.transactions.mint.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/mint/message").Message) => import("../assets/transactions/mint/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/mint/message").MessageAmino) => import("../assets/transactions/mint/message").Message;
    };
    "/assetmantle.modules.assets.transactions.deputize.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/deputize/message").Message) => import("../assets/transactions/deputize/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/deputize/message").MessageAmino) => import("../assets/transactions/deputize/message").Message;
    };
    "/assetmantle.modules.assets.transactions.define.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/define/message").Message) => import("../assets/transactions/define/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/define/message").MessageAmino) => import("../assets/transactions/define/message").Message;
    };
    "/assetmantle.modules.assets.transactions.burn.Message": {
        aminoType: string;
        toAmino: (message: import("../assets/transactions/burn/message").Message) => import("../assets/transactions/burn/message").MessageAmino;
        fromAmino: (object: import("../assets/transactions/burn/message").MessageAmino) => import("../assets/transactions/burn/message").Message;
    };
};
export declare const assetmantleProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAssetmantleClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAssetmantleClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
