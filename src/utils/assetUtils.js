import base64url from "base64url";
import { assetmantle } from "../codegen";
import { getNubIdentityID } from "./cryptoUtils";

const emptyAssetKey = assetmantle.modules.assets.key.Key.fromPartial({
  assetID: { hashID: { iDBytes: new Uint8Array() } },
});

export const getQueryRequestAssets = (key = emptyAssetKey, limit = 12) => {
  const queryRequest =
    assetmantle.modules.assets.queries.assets.QueryRequest.fromPartial({
      key,
      limit,
    });

  return queryRequest;
};

export const getQueryRequestAsset = (username) => {
  if (!username) throw Error("Invalid Username in getQueryRequestAsset");
  const usernameBase64Url = getNubIdentityID(username);
  const usernameUint8Array = new Uint8Array(
    base64url.toBuffer(usernameBase64Url)
  );

  const queryRequest =
    assetmantle.modules.assets.queries.asset.QueryRequest.fromPartial({
      key: { assetID: { hashID: { iDBytes: usernameUint8Array } } },
    });

  return queryRequest;
};
