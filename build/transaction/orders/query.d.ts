import { AssetMantle } from "../../utilities/mantleJS";
export declare class queryOrders extends AssetMantle {
    queryOrder: () => Promise<any>;
    queryOrderWithID: (id: any) => Promise<any>;
}
