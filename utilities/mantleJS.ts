import * as config from "../config.json";

export class AssetMantle {
  //field
  path: string;

  //constructor
  constructor(path: string = config.TENDERMINT_REST_URL) {
    this.path = path;
  }
}
