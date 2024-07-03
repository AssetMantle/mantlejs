//@ts-nocheck
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as assetmantleModulesXAssetsTransactionsBurnServiceRegistry from "./modules/x/assets/transactions/burn/service.registry";
import * as assetmantleModulesXAssetsTransactionsDefineServiceRegistry from "./modules/x/assets/transactions/define/service.registry";
import * as assetmantleModulesXAssetsTransactionsDeputizeServiceRegistry from "./modules/x/assets/transactions/deputize/service.registry";
import * as assetmantleModulesXAssetsTransactionsMintServiceRegistry from "./modules/x/assets/transactions/mint/service.registry";
import * as assetmantleModulesXAssetsTransactionsMutateServiceRegistry from "./modules/x/assets/transactions/mutate/service.registry";
import * as assetmantleModulesXAssetsTransactionsRenumerateServiceRegistry from "./modules/x/assets/transactions/renumerate/service.registry";
import * as assetmantleModulesXAssetsTransactionsRevokeServiceRegistry from "./modules/x/assets/transactions/revoke/service.registry";
import * as assetmantleModulesXAssetsTransactionsSendServiceRegistry from "./modules/x/assets/transactions/send/service.registry";
import * as assetmantleModulesXAssetsTransactionsUnwrapServiceRegistry from "./modules/x/assets/transactions/unwrap/service.registry";
import * as assetmantleModulesXAssetsTransactionsWrapServiceRegistry from "./modules/x/assets/transactions/wrap/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsDefineServiceRegistry from "./modules/x/identities/transactions/define/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsDeputizeServiceRegistry from "./modules/x/identities/transactions/deputize/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsIssueServiceRegistry from "./modules/x/identities/transactions/issue/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsNameServiceRegistry from "./modules/x/identities/transactions/name/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsProvisionServiceRegistry from "./modules/x/identities/transactions/provision/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsQuashServiceRegistry from "./modules/x/identities/transactions/quash/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsRevokeServiceRegistry from "./modules/x/identities/transactions/revoke/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsUnprovisionServiceRegistry from "./modules/x/identities/transactions/unprovision/service.registry";
import * as assetmantleModulesXIdentitiesTransactionsUpdateServiceRegistry from "./modules/x/identities/transactions/update/service.registry";
import * as assetmantleModulesXMetasTransactionsRevealServiceRegistry from "./modules/x/metas/transactions/reveal/service.registry";
import * as assetmantleModulesXOrdersTransactionsCancelServiceRegistry from "./modules/x/orders/transactions/cancel/service.registry";
import * as assetmantleModulesXOrdersTransactionsDefineServiceRegistry from "./modules/x/orders/transactions/define/service.registry";
import * as assetmantleModulesXOrdersTransactionsDeputizeServiceRegistry from "./modules/x/orders/transactions/deputize/service.registry";
import * as assetmantleModulesXOrdersTransactionsGetServiceRegistry from "./modules/x/orders/transactions/get/service.registry";
import * as assetmantleModulesXOrdersTransactionsImmediateServiceRegistry from "./modules/x/orders/transactions/immediate/service.registry";
import * as assetmantleModulesXOrdersTransactionsMakeServiceRegistry from "./modules/x/orders/transactions/make/service.registry";
import * as assetmantleModulesXOrdersTransactionsModifyServiceRegistry from "./modules/x/orders/transactions/modify/service.registry";
import * as assetmantleModulesXOrdersTransactionsPutServiceRegistry from "./modules/x/orders/transactions/put/service.registry";
import * as assetmantleModulesXOrdersTransactionsRevokeServiceRegistry from "./modules/x/orders/transactions/revoke/service.registry";
import * as assetmantleModulesXOrdersTransactionsTakeServiceRegistry from "./modules/x/orders/transactions/take/service.registry";
import * as assetmantleModulesXAssetsTransactionsBurnServiceAmino from "./modules/x/assets/transactions/burn/service.amino";
import * as assetmantleModulesXAssetsTransactionsDefineServiceAmino from "./modules/x/assets/transactions/define/service.amino";
import * as assetmantleModulesXAssetsTransactionsDeputizeServiceAmino from "./modules/x/assets/transactions/deputize/service.amino";
import * as assetmantleModulesXAssetsTransactionsMintServiceAmino from "./modules/x/assets/transactions/mint/service.amino";
import * as assetmantleModulesXAssetsTransactionsMutateServiceAmino from "./modules/x/assets/transactions/mutate/service.amino";
import * as assetmantleModulesXAssetsTransactionsRenumerateServiceAmino from "./modules/x/assets/transactions/renumerate/service.amino";
import * as assetmantleModulesXAssetsTransactionsRevokeServiceAmino from "./modules/x/assets/transactions/revoke/service.amino";
import * as assetmantleModulesXAssetsTransactionsSendServiceAmino from "./modules/x/assets/transactions/send/service.amino";
import * as assetmantleModulesXAssetsTransactionsUnwrapServiceAmino from "./modules/x/assets/transactions/unwrap/service.amino";
import * as assetmantleModulesXAssetsTransactionsWrapServiceAmino from "./modules/x/assets/transactions/wrap/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsDefineServiceAmino from "./modules/x/identities/transactions/define/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsDeputizeServiceAmino from "./modules/x/identities/transactions/deputize/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsIssueServiceAmino from "./modules/x/identities/transactions/issue/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsNameServiceAmino from "./modules/x/identities/transactions/name/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsProvisionServiceAmino from "./modules/x/identities/transactions/provision/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsQuashServiceAmino from "./modules/x/identities/transactions/quash/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsRevokeServiceAmino from "./modules/x/identities/transactions/revoke/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsUnprovisionServiceAmino from "./modules/x/identities/transactions/unprovision/service.amino";
import * as assetmantleModulesXIdentitiesTransactionsUpdateServiceAmino from "./modules/x/identities/transactions/update/service.amino";
import * as assetmantleModulesXMetasTransactionsRevealServiceAmino from "./modules/x/metas/transactions/reveal/service.amino";
import * as assetmantleModulesXOrdersTransactionsCancelServiceAmino from "./modules/x/orders/transactions/cancel/service.amino";
import * as assetmantleModulesXOrdersTransactionsDefineServiceAmino from "./modules/x/orders/transactions/define/service.amino";
import * as assetmantleModulesXOrdersTransactionsDeputizeServiceAmino from "./modules/x/orders/transactions/deputize/service.amino";
import * as assetmantleModulesXOrdersTransactionsGetServiceAmino from "./modules/x/orders/transactions/get/service.amino";
import * as assetmantleModulesXOrdersTransactionsImmediateServiceAmino from "./modules/x/orders/transactions/immediate/service.amino";
import * as assetmantleModulesXOrdersTransactionsMakeServiceAmino from "./modules/x/orders/transactions/make/service.amino";
import * as assetmantleModulesXOrdersTransactionsModifyServiceAmino from "./modules/x/orders/transactions/modify/service.amino";
import * as assetmantleModulesXOrdersTransactionsPutServiceAmino from "./modules/x/orders/transactions/put/service.amino";
import * as assetmantleModulesXOrdersTransactionsRevokeServiceAmino from "./modules/x/orders/transactions/revoke/service.amino";
import * as assetmantleModulesXOrdersTransactionsTakeServiceAmino from "./modules/x/orders/transactions/take/service.amino";
export const assetMantleAminoConverters = {
  ...assetmantleModulesXAssetsTransactionsBurnServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsDefineServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsDeputizeServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsMintServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsMutateServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsRenumerateServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsRevokeServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsSendServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsUnwrapServiceAmino.AminoConverter,
  ...assetmantleModulesXAssetsTransactionsWrapServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsDefineServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsDeputizeServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsIssueServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsNameServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsProvisionServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsQuashServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsRevokeServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsUnprovisionServiceAmino.AminoConverter,
  ...assetmantleModulesXIdentitiesTransactionsUpdateServiceAmino.AminoConverter,
  ...assetmantleModulesXMetasTransactionsRevealServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsCancelServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsDefineServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsDeputizeServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsGetServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsImmediateServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsMakeServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsModifyServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsPutServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsRevokeServiceAmino.AminoConverter,
  ...assetmantleModulesXOrdersTransactionsTakeServiceAmino.AminoConverter
};
export const assetMantleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...assetmantleModulesXAssetsTransactionsBurnServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsDefineServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsDeputizeServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsMintServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsMutateServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsRenumerateServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsRevokeServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsSendServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsUnwrapServiceRegistry.registry, ...assetmantleModulesXAssetsTransactionsWrapServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsDefineServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsDeputizeServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsIssueServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsNameServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsProvisionServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsQuashServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsRevokeServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsUnprovisionServiceRegistry.registry, ...assetmantleModulesXIdentitiesTransactionsUpdateServiceRegistry.registry, ...assetmantleModulesXMetasTransactionsRevealServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsCancelServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsDefineServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsDeputizeServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsGetServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsImmediateServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsMakeServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsModifyServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsPutServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsRevokeServiceRegistry.registry, ...assetmantleModulesXOrdersTransactionsTakeServiceRegistry.registry];
export const getSigningAssetMantleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...assetMantleProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...assetMantleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAssetMantleClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAssetMantleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: (registry as any),
    aminoTypes
  });
  return client;
};