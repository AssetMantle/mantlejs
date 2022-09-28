import { Persistence } from "../../utilities/persistenceJS";
export declare class queryIdentities extends Persistence {
    queryIdentity: () => Promise<any>;
    queryIdentityWithID: (id: any) => Promise<any>;
}
