import { Persistence } from "../../utilities/persistenceJS";
export declare class cls extends Persistence {
    queryClassification: () => Promise<any>;
    queryClassificationWithID: (id: any) => Promise<any>;
}
