import { AssetMantle } from "../../utilities/mantleJS";
export declare class queryIdentities extends AssetMantle {
  queryIdentity: () => Promise<any>;
  queryIdentityWithID: (id: any) => Promise<any>;
}
