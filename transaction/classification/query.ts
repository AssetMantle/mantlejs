import * as config from "../../config.json";
import Request from "request";
import { AssetMantle } from "../../utilities/mantleJS";

export class cls extends AssetMantle {
  queryClassification = async (): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryClassificationPath,
      headers: {},
    };

    return new Promise(function (resolve, reject) {
      Request(options, async function (error: any, res: { body: string }) {
        if (error) {
          reject(error);
        }

        let result = JSON.parse(res.body);
        let list = result.result.value.classifications.value.list;
        resolve(list);
      });
    }).catch(function (error) {
      console.log("Promise Rejected: " + error);
    });
  };

  queryClassificationWithID = async (id: any): Promise<any> => {
    let path = this.path;

    let options = {
      method: "GET",
      url: path + config.queryClsWithID + id,
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
