import * as config from "../../config.json";
import Request from "request";
import { AssetMantle } from "../../utilities/mantleJS";

export class queryIdentities extends AssetMantle {
  queryIdentity = async (): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryIdentityPath,
      headers: {},
    };

    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: string }) {
        if (error) {
          reject(error);
        }
        let result = JSON.parse(res.body);
        let list = result.result.value.identities.value.list;
        resolve(list);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
      return error;
    });
  };

  queryIdentityWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryIdentityWithID + id,
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
