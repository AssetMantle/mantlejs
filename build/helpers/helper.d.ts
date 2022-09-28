import { Promise } from 'es6-promise';
export declare const checkRawLog: (log: any) => Promise<boolean>;
export declare const getAccount: (address: string, path: string) => Promise<any>;
export declare const FindInResponse: (type: string, list: [], id: string) => Promise<any>;
