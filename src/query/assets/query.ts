import * as config from "../../config.json";
import { sendGetRequest } from "../../utils";

export const queryAsset = async (): Promise<any> => {
  const url = config.TENDERMINT_REST_URL + config.queryAssetPath;
  try {
    const queryData = await sendGetRequest(url);
    const list = queryData?.result?.value?.assets?.value?.list;
    return list;
  } catch (error) {
    console.error("error during queryAsset: ", error);
  }
};

export const queryAssetWithID = async (id: any): Promise<any> => {
  const url = config.TENDERMINT_REST_URL + config.queryAssetWithID + id;
  try {
    const queryData = await sendGetRequest(url);
    const list = queryData?.result?.value?.assets?.value?.list;
    return list;
  } catch (error) {
    console.error("error during queryAssetWithID: ", error);
  }
};
