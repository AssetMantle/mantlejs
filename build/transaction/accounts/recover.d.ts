import { Persistence } from "../../utilities/persistenceJS";
export declare class recoverAccount extends Persistence {
    recover: (mnemonic: string, name: string) => Promise<any>;
}
