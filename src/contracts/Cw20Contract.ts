/**
 * This file was automatically generated by cosmwasm-typescript-gen@0.3.6.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the cosmwasm-typescript-gen generate command to regenerate this file.
 */

import { CosmWasmClient, ExecuteResult, SigningCosmWasmClient } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
export interface AllAccountsResponse {
  accounts: string[];
  [k: string]: unknown;
}
export type Uint128 = string;
export type Expiration =
  | {
      at_height: number;
    }
  | {
      at_time: Timestamp;
    }
  | {
      never: {
        [k: string]: unknown;
      };
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export interface AllAllowancesResponse {
  allowances: AllowanceInfo[];
  [k: string]: unknown;
}
export interface AllowanceInfo {
  allowance: Uint128;
  expires: Expiration;
  spender: string;
  [k: string]: unknown;
}
export interface AllowanceResponse {
  allowance: Uint128;
  expires: Expiration;
  [k: string]: unknown;
}
export interface BalanceResponse {
  balance: Uint128;
  [k: string]: unknown;
}
export type Cw20ExecuteMsg =
  | {
      transfer: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      burn: {
        amount: Uint128;
        [k: string]: unknown;
      };
    }
  | {
      send: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        [k: string]: unknown;
      };
    }
  | {
      increase_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      decrease_allowance: {
        amount: Uint128;
        expires?: Expiration | null;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      transfer_from: {
        amount: Uint128;
        owner: string;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      send_from: {
        amount: Uint128;
        contract: string;
        msg: Binary;
        owner: string;
        [k: string]: unknown;
      };
    }
  | {
      burn_from: {
        amount: Uint128;
        owner: string;
        [k: string]: unknown;
      };
    }
  | {
      mint: {
        amount: Uint128;
        recipient: string;
        [k: string]: unknown;
      };
    }
  | {
      update_minter: {
        new_minter: string;
        [k: string]: unknown;
      };
    }
  | {
      update_marketing: {
        description?: string | null;
        marketing?: string | null;
        project?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      upload_logo: Logo;
    };
export type Binary = string;
export type Logo =
  | {
      url: string;
    }
  | {
      embedded: EmbeddedLogo;
    };
export type EmbeddedLogo =
  | {
      svg: Binary;
    }
  | {
      png: Binary;
    };
export type Cw20QueryMsg =
  | {
      balance: {
        address: string;
        [k: string]: unknown;
      };
    }
  | {
      token_info: {
        [k: string]: unknown;
      };
    }
  | {
      allowance: {
        owner: string;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      minter: {
        [k: string]: unknown;
      };
    }
  | {
      marketing_info: {
        [k: string]: unknown;
      };
    }
  | {
      download_logo: {
        [k: string]: unknown;
      };
    }
  | {
      all_allowances: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      all_accounts: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    };
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg: Binary;
  sender: string;
  [k: string]: unknown;
}
export interface DownloadLogoResponse {
  data: Binary;
  mime_type: string;
  [k: string]: unknown;
}
export interface InstantiateMsg {
  decimals: number;
  initial_balances: Cw20Coin[];
  marketing?: InstantiateMarketingInfo | null;
  mint?: MinterResponse | null;
  name: string;
  symbol: string;
  [k: string]: unknown;
}
export interface Cw20Coin {
  address: string;
  amount: Uint128;
  [k: string]: unknown;
}
export interface InstantiateMarketingInfo {
  description?: string | null;
  logo?: Logo | null;
  marketing?: string | null;
  project?: string | null;
  [k: string]: unknown;
}
export interface MinterResponse {
  cap?: Uint128 | null;
  minter: string;
  [k: string]: unknown;
}
export type LogoInfo =
  | "embedded"
  | {
      url: string;
    };
export type Addr = string;
export interface MarketingInfoResponse {
  description?: string | null;
  logo?: LogoInfo | null;
  marketing?: Addr | null;
  project?: string | null;
  [k: string]: unknown;
}
export type QueryMsg =
  | {
      balance: {
        address: string;
        [k: string]: unknown;
      };
    }
  | {
      token_info: {
        [k: string]: unknown;
      };
    }
  | {
      minter: {
        [k: string]: unknown;
      };
    }
  | {
      allowance: {
        owner: string;
        spender: string;
        [k: string]: unknown;
      };
    }
  | {
      all_allowances: {
        limit?: number | null;
        owner: string;
        start_after?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      all_accounts: {
        limit?: number | null;
        start_after?: string | null;
        [k: string]: unknown;
      };
    }
  | {
      marketing_info: {
        [k: string]: unknown;
      };
    }
  | {
      download_logo: {
        [k: string]: unknown;
      };
    };
export interface TokenInfoResponse {
  decimals: number;
  name: string;
  symbol: string;
  total_supply: Uint128;
  [k: string]: unknown;
}
export interface Cw20ReadOnlyInterface {
  contractAddress: string;
  balance: ({ address }: { address: string }) => Promise<BalanceResponse>;
  tokenInfo: () => Promise<TokenInfoResponse>;
  minter: () => Promise<MinterResponse>;
  allowance: ({ owner, spender }: { owner: string; spender: string }) => Promise<AllowanceResponse>;
  allAllowances: ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }) => Promise<AllAllowancesResponse>;
  allAccounts: ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }) => Promise<AllAccountsResponse>;
  marketingInfo: () => Promise<MarketingInfoResponse>;
  downloadLogo: () => Promise<DownloadLogoResponse>;
}
export class Cw20QueryClient implements Cw20ReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;

  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.balance = this.balance.bind(this);
    this.tokenInfo = this.tokenInfo.bind(this);
    this.minter = this.minter.bind(this);
    this.allowance = this.allowance.bind(this);
    this.allAllowances = this.allAllowances.bind(this);
    this.allAccounts = this.allAccounts.bind(this);
    this.marketingInfo = this.marketingInfo.bind(this);
    this.downloadLogo = this.downloadLogo.bind(this);
  }

  balance = async ({ address }: { address: string }): Promise<BalanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      balance: {
        address,
      },
    });
  };
  tokenInfo = async (): Promise<TokenInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      token_info: {},
    });
  };
  minter = async (): Promise<MinterResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      minter: {},
    });
  };
  allowance = async ({ owner, spender }: { owner: string; spender: string }): Promise<AllowanceResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      allowance: {
        owner,
        spender,
      },
    });
  };
  allAllowances = async ({
    limit,
    owner,
    startAfter,
  }: {
    limit?: number;
    owner: string;
    startAfter?: string;
  }): Promise<AllAllowancesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_allowances: {
        limit,
        owner,
        start_after: startAfter,
      },
    });
  };
  allAccounts = async ({
    limit,
    startAfter,
  }: {
    limit?: number;
    startAfter?: string;
  }): Promise<AllAccountsResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      all_accounts: {
        limit,
        start_after: startAfter,
      },
    });
  };
  marketingInfo = async (): Promise<MarketingInfoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      marketing_info: {},
    });
  };
  downloadLogo = async (): Promise<DownloadLogoResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      download_logo: {},
    });
  };
}