import * as config from "../../config.json";
import Request from "request";
import { AssetMantle } from "../../utilities/mantleJS";

export class queryMeta extends AssetMantle {
  queryMetaWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryMetaWithID + id,
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
