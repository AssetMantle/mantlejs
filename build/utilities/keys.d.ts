export declare const getWallet: (mnemonic: string, bip39Passphrase: string) => Promise<any>;
export declare const createRandomWallet: (bip39Passphrase: string) => Promise<{
    address: string;
    mnemonic: string;
}>;
export declare const createWallet: (mnemonic: string, bip39Passphrase: string) => Promise<{
    address: string;
    mnemonic: string;
}>;
export declare const getWalletPath: () => string;
export declare const createStore: (mnemonic: string, password: string) => {
    Response: any;
    error: any;
};
export declare const decryptStore: (fileData: any, password: string) => {
    mnemonic: any;
};
