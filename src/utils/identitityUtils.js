import base64url from "base64url";
import { assetmantle } from "../codegen";
import { getNubIdentityID } from "./cryptoUtils";

export const getQueryRequestIdentity = (username) => {
  if (!username) throw Error("Invalid Username in getQueryRequestAsset");
  const usernameBase64Url = getNubIdentityID(username);
  const usernameUint8Array = new Uint8Array(
    base64url.toBuffer(usernameBase64Url)
  );

  const queryRequest =
    assetmantle.modules.identities.queries.identity.QueryRequest.fromPartial({
      key: { identityID: { hashID: { iDBytes: usernameUint8Array } } },
    });

  return queryRequest;
};
