import { AssetMantle } from "../../utilities/mantleJS";
export declare class queryAssets extends AssetMantle {
  queryAsset: () => Promise<any>;
  queryAssetWithID: (id: any) => Promise<any>;
}
