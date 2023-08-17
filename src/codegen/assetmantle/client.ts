import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as assetsTransactionsBurnServiceRegistry from "../assets/transactions/burn/service.registry";
import * as assetsTransactionsDefineServiceRegistry from "../assets/transactions/define/service.registry";
import * as assetsTransactionsDeputizeServiceRegistry from "../assets/transactions/deputize/service.registry";
import * as assetsTransactionsMintServiceRegistry from "../assets/transactions/mint/service.registry";
import * as assetsTransactionsMutateServiceRegistry from "../assets/transactions/mutate/service.registry";
import * as assetsTransactionsRenumerateServiceRegistry from "../assets/transactions/renumerate/service.registry";
import * as assetsTransactionsRevokeServiceRegistry from "../assets/transactions/revoke/service.registry";
import * as assetsTransactionsSendServiceRegistry from "../assets/transactions/send/service.registry";
import * as assetsTransactionsUnwrapServiceRegistry from "../assets/transactions/unwrap/service.registry";
import * as assetsTransactionsWrapServiceRegistry from "../assets/transactions/wrap/service.registry";
import * as identitiesTransactionsDefineServiceRegistry from "../identities/transactions/define/service.registry";
import * as identitiesTransactionsDeputizeServiceRegistry from "../identities/transactions/deputize/service.registry";
import * as identitiesTransactionsIssueServiceRegistry from "../identities/transactions/issue/service.registry";
import * as identitiesTransactionsNameServiceRegistry from "../identities/transactions/name/service.registry";
import * as identitiesTransactionsProvisionServiceRegistry from "../identities/transactions/provision/service.registry";
import * as identitiesTransactionsQuashServiceRegistry from "../identities/transactions/quash/service.registry";
import * as identitiesTransactionsRevokeServiceRegistry from "../identities/transactions/revoke/service.registry";
import * as identitiesTransactionsUnprovisionServiceRegistry from "../identities/transactions/unprovision/service.registry";
import * as identitiesTransactionsUpdateServiceRegistry from "../identities/transactions/update/service.registry";
import * as metasTransactionsRevealServiceRegistry from "../metas/transactions/reveal/service.registry";
import * as ordersTransactionsCancelServiceRegistry from "../orders/transactions/cancel/service.registry";
import * as ordersTransactionsDefineServiceRegistry from "../orders/transactions/define/service.registry";
import * as ordersTransactionsDeputizeServiceRegistry from "../orders/transactions/deputize/service.registry";
import * as ordersTransactionsGetServiceRegistry from "../orders/transactions/get/service.registry";
import * as ordersTransactionsImmediateServiceRegistry from "../orders/transactions/immediate/service.registry";
import * as ordersTransactionsMakeServiceRegistry from "../orders/transactions/make/service.registry";
import * as ordersTransactionsModifyServiceRegistry from "../orders/transactions/modify/service.registry";
import * as ordersTransactionsPutServiceRegistry from "../orders/transactions/put/service.registry";
import * as ordersTransactionsRevokeServiceRegistry from "../orders/transactions/revoke/service.registry";
import * as ordersTransactionsTakeServiceRegistry from "../orders/transactions/take/service.registry";
import * as assetsTransactionsBurnServiceAmino from "../assets/transactions/burn/service.amino";
import * as assetsTransactionsDefineServiceAmino from "../assets/transactions/define/service.amino";
import * as assetsTransactionsDeputizeServiceAmino from "../assets/transactions/deputize/service.amino";
import * as assetsTransactionsMintServiceAmino from "../assets/transactions/mint/service.amino";
import * as assetsTransactionsMutateServiceAmino from "../assets/transactions/mutate/service.amino";
import * as assetsTransactionsRenumerateServiceAmino from "../assets/transactions/renumerate/service.amino";
import * as assetsTransactionsRevokeServiceAmino from "../assets/transactions/revoke/service.amino";
import * as assetsTransactionsSendServiceAmino from "../assets/transactions/send/service.amino";
import * as assetsTransactionsUnwrapServiceAmino from "../assets/transactions/unwrap/service.amino";
import * as assetsTransactionsWrapServiceAmino from "../assets/transactions/wrap/service.amino";
import * as identitiesTransactionsDefineServiceAmino from "../identities/transactions/define/service.amino";
import * as identitiesTransactionsDeputizeServiceAmino from "../identities/transactions/deputize/service.amino";
import * as identitiesTransactionsIssueServiceAmino from "../identities/transactions/issue/service.amino";
import * as identitiesTransactionsNameServiceAmino from "../identities/transactions/name/service.amino";
import * as identitiesTransactionsProvisionServiceAmino from "../identities/transactions/provision/service.amino";
import * as identitiesTransactionsQuashServiceAmino from "../identities/transactions/quash/service.amino";
import * as identitiesTransactionsRevokeServiceAmino from "../identities/transactions/revoke/service.amino";
import * as identitiesTransactionsUnprovisionServiceAmino from "../identities/transactions/unprovision/service.amino";
import * as identitiesTransactionsUpdateServiceAmino from "../identities/transactions/update/service.amino";
import * as metasTransactionsRevealServiceAmino from "../metas/transactions/reveal/service.amino";
import * as ordersTransactionsCancelServiceAmino from "../orders/transactions/cancel/service.amino";
import * as ordersTransactionsDefineServiceAmino from "../orders/transactions/define/service.amino";
import * as ordersTransactionsDeputizeServiceAmino from "../orders/transactions/deputize/service.amino";
import * as ordersTransactionsGetServiceAmino from "../orders/transactions/get/service.amino";
import * as ordersTransactionsImmediateServiceAmino from "../orders/transactions/immediate/service.amino";
import * as ordersTransactionsMakeServiceAmino from "../orders/transactions/make/service.amino";
import * as ordersTransactionsModifyServiceAmino from "../orders/transactions/modify/service.amino";
import * as ordersTransactionsPutServiceAmino from "../orders/transactions/put/service.amino";
import * as ordersTransactionsRevokeServiceAmino from "../orders/transactions/revoke/service.amino";
import * as ordersTransactionsTakeServiceAmino from "../orders/transactions/take/service.amino";
export const assetmantleAminoConverters = {
  ...assetsTransactionsBurnServiceAmino.AminoConverter,
  ...assetsTransactionsDefineServiceAmino.AminoConverter,
  ...assetsTransactionsDeputizeServiceAmino.AminoConverter,
  ...assetsTransactionsMintServiceAmino.AminoConverter,
  ...assetsTransactionsMutateServiceAmino.AminoConverter,
  ...assetsTransactionsRenumerateServiceAmino.AminoConverter,
  ...assetsTransactionsRevokeServiceAmino.AminoConverter,
  ...assetsTransactionsSendServiceAmino.AminoConverter,
  ...assetsTransactionsUnwrapServiceAmino.AminoConverter,
  ...assetsTransactionsWrapServiceAmino.AminoConverter,
  ...identitiesTransactionsDefineServiceAmino.AminoConverter,
  ...identitiesTransactionsDeputizeServiceAmino.AminoConverter,
  ...identitiesTransactionsIssueServiceAmino.AminoConverter,
  ...identitiesTransactionsNameServiceAmino.AminoConverter,
  ...identitiesTransactionsProvisionServiceAmino.AminoConverter,
  ...identitiesTransactionsQuashServiceAmino.AminoConverter,
  ...identitiesTransactionsRevokeServiceAmino.AminoConverter,
  ...identitiesTransactionsUnprovisionServiceAmino.AminoConverter,
  ...identitiesTransactionsUpdateServiceAmino.AminoConverter,
  ...metasTransactionsRevealServiceAmino.AminoConverter,
  ...ordersTransactionsCancelServiceAmino.AminoConverter,
  ...ordersTransactionsDefineServiceAmino.AminoConverter,
  ...ordersTransactionsDeputizeServiceAmino.AminoConverter,
  ...ordersTransactionsGetServiceAmino.AminoConverter,
  ...ordersTransactionsImmediateServiceAmino.AminoConverter,
  ...ordersTransactionsMakeServiceAmino.AminoConverter,
  ...ordersTransactionsModifyServiceAmino.AminoConverter,
  ...ordersTransactionsPutServiceAmino.AminoConverter,
  ...ordersTransactionsRevokeServiceAmino.AminoConverter,
  ...ordersTransactionsTakeServiceAmino.AminoConverter
};
export const assetmantleProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...assetsTransactionsBurnServiceRegistry.registry, ...assetsTransactionsDefineServiceRegistry.registry, ...assetsTransactionsDeputizeServiceRegistry.registry, ...assetsTransactionsMintServiceRegistry.registry, ...assetsTransactionsMutateServiceRegistry.registry, ...assetsTransactionsRenumerateServiceRegistry.registry, ...assetsTransactionsRevokeServiceRegistry.registry, ...assetsTransactionsSendServiceRegistry.registry, ...assetsTransactionsUnwrapServiceRegistry.registry, ...assetsTransactionsWrapServiceRegistry.registry, ...identitiesTransactionsDefineServiceRegistry.registry, ...identitiesTransactionsDeputizeServiceRegistry.registry, ...identitiesTransactionsIssueServiceRegistry.registry, ...identitiesTransactionsNameServiceRegistry.registry, ...identitiesTransactionsProvisionServiceRegistry.registry, ...identitiesTransactionsQuashServiceRegistry.registry, ...identitiesTransactionsRevokeServiceRegistry.registry, ...identitiesTransactionsUnprovisionServiceRegistry.registry, ...identitiesTransactionsUpdateServiceRegistry.registry, ...metasTransactionsRevealServiceRegistry.registry, ...ordersTransactionsCancelServiceRegistry.registry, ...ordersTransactionsDefineServiceRegistry.registry, ...ordersTransactionsDeputizeServiceRegistry.registry, ...ordersTransactionsGetServiceRegistry.registry, ...ordersTransactionsImmediateServiceRegistry.registry, ...ordersTransactionsMakeServiceRegistry.registry, ...ordersTransactionsModifyServiceRegistry.registry, ...ordersTransactionsPutServiceRegistry.registry, ...ordersTransactionsRevokeServiceRegistry.registry, ...ordersTransactionsTakeServiceRegistry.registry];
export const getSigningAssetmantleClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...assetmantleProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...assetmantleAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAssetmantleClient = async ({
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
  } = getSigningAssetmantleClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};