import { Persistence } from "../../utilities/persistenceJS";
export declare class queryAssets extends Persistence {
    queryAsset: () => Promise<any>;
    queryAssetWithID: (id: any) => Promise<any>;
}
