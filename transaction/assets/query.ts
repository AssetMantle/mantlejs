import * as config from "../../config.json";
import Request from "request";
import { AssetMantle } from "../../utilities/mantleJS";

export class queryAssets extends AssetMantle {
  queryAsset = async (): Promise<any> => {
    let path = this.path;
    let options = {
      method: "GET",
      url: path + config.queryAssetPath,
      headers: {},
    };

    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: string }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(res.body);
        let list = result.result.value.assets.value.list;
        resolve(list);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  queryAssetWithID = async (id: any): Promise<any> => {
    let path = this.path;
    let options = {
      method: "GET",
      url: path + config.queryAssetWithID + id,
      headers: {},
    };
    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: any }) {
        if (error) {
          reject(error);
        }
        resolve(res.body);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };
}
