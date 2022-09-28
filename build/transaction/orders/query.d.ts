import { Persistence } from "../../utilities/persistenceJS";
export declare class queryOrders extends Persistence {
    queryOrder: () => Promise<any>;
    queryOrderWithID: (id: any) => Promise<any>;
}
