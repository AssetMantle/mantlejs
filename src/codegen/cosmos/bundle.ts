import * as _194 from "./app/v1alpha1/config";
import * as _195 from "./app/v1alpha1/module";
import * as _196 from "./app/v1alpha1/query";
import * as _197 from "./auth/v1beta1/auth";
import * as _198 from "./auth/v1beta1/genesis";
import * as _199 from "./auth/v1beta1/query";
import * as _200 from "./authz/v1beta1/authz";
import * as _201 from "./authz/v1beta1/event";
import * as _202 from "./authz/v1beta1/genesis";
import * as _203 from "./authz/v1beta1/query";
import * as _204 from "./authz/v1beta1/tx";
import * as _205 from "./bank/v1beta1/authz";
import * as _206 from "./bank/v1beta1/bank";
import * as _207 from "./bank/v1beta1/genesis";
import * as _208 from "./bank/v1beta1/query";
import * as _209 from "./bank/v1beta1/tx";
import * as _210 from "./base/abci/v1beta1/abci";
import * as _211 from "./base/kv/v1beta1/kv";
import * as _212 from "./base/query/v1beta1/pagination";
import * as _213 from "./base/reflection/v1beta1/reflection";
import * as _214 from "./base/reflection/v2alpha1/reflection";
import * as _215 from "./base/snapshots/v1beta1/snapshot";
import * as _216 from "./base/store/v1beta1/commit_info";
import * as _217 from "./base/store/v1beta1/listening";
import * as _218 from "./base/tendermint/v1beta1/query";
import * as _219 from "./base/v1beta1/coin";
import * as _220 from "./capability/v1beta1/capability";
import * as _221 from "./capability/v1beta1/genesis";
import * as _222 from "./crisis/v1beta1/genesis";
import * as _223 from "./crisis/v1beta1/tx";
import * as _224 from "./crypto/ed25519/keys";
import * as _225 from "./crypto/hd/v1/hd";
import * as _226 from "./crypto/keyring/v1/record";
import * as _227 from "./crypto/multisig/keys";
import * as _228 from "./crypto/secp256k1/keys";
import * as _229 from "./crypto/secp256r1/keys";
import * as _230 from "./distribution/v1beta1/distribution";
import * as _231 from "./distribution/v1beta1/genesis";
import * as _232 from "./distribution/v1beta1/query";
import * as _233 from "./distribution/v1beta1/tx";
import * as _234 from "./evidence/v1beta1/evidence";
import * as _235 from "./evidence/v1beta1/genesis";
import * as _236 from "./evidence/v1beta1/query";
import * as _237 from "./evidence/v1beta1/tx";
import * as _238 from "./feegrant/v1beta1/feegrant";
import * as _239 from "./feegrant/v1beta1/genesis";
import * as _240 from "./feegrant/v1beta1/query";
import * as _241 from "./feegrant/v1beta1/tx";
import * as _242 from "./genutil/v1beta1/genesis";
import * as _243 from "./gov/v1/genesis";
import * as _244 from "./gov/v1/gov";
import * as _245 from "./gov/v1/query";
import * as _246 from "./gov/v1/tx";
import * as _247 from "./gov/v1beta1/genesis";
import * as _248 from "./gov/v1beta1/gov";
import * as _249 from "./gov/v1beta1/query";
import * as _250 from "./gov/v1beta1/tx";
import * as _251 from "./group/v1/events";
import * as _252 from "./group/v1/genesis";
import * as _253 from "./group/v1/query";
import * as _254 from "./group/v1/tx";
import * as _255 from "./group/v1/types";
import * as _256 from "./mint/v1beta1/genesis";
import * as _257 from "./mint/v1beta1/mint";
import * as _258 from "./mint/v1beta1/query";
import * as _259 from "./msg/v1/msg";
import * as _260 from "./nft/v1beta1/event";
import * as _261 from "./nft/v1beta1/genesis";
import * as _262 from "./nft/v1beta1/nft";
import * as _263 from "./nft/v1beta1/query";
import * as _264 from "./nft/v1beta1/tx";
import * as _265 from "./orm/v1/orm";
import * as _266 from "./orm/v1alpha1/schema";
import * as _267 from "./params/v1beta1/params";
import * as _268 from "./params/v1beta1/query";
import * as _269 from "./slashing/v1beta1/genesis";
import * as _270 from "./slashing/v1beta1/query";
import * as _271 from "./slashing/v1beta1/slashing";
import * as _272 from "./slashing/v1beta1/tx";
import * as _273 from "./staking/v1beta1/authz";
import * as _274 from "./staking/v1beta1/genesis";
import * as _275 from "./staking/v1beta1/query";
import * as _276 from "./staking/v1beta1/staking";
import * as _277 from "./staking/v1beta1/tx";
import * as _278 from "./tx/signing/v1beta1/signing";
import * as _279 from "./tx/v1beta1/service";
import * as _280 from "./tx/v1beta1/tx";
import * as _281 from "./upgrade/v1beta1/query";
import * as _282 from "./upgrade/v1beta1/tx";
import * as _283 from "./upgrade/v1beta1/upgrade";
import * as _284 from "./vesting/v1beta1/tx";
import * as _285 from "./vesting/v1beta1/vesting";
import * as _404 from "./authz/v1beta1/tx.amino";
import * as _405 from "./bank/v1beta1/tx.amino";
import * as _406 from "./crisis/v1beta1/tx.amino";
import * as _407 from "./distribution/v1beta1/tx.amino";
import * as _408 from "./evidence/v1beta1/tx.amino";
import * as _409 from "./feegrant/v1beta1/tx.amino";
import * as _410 from "./gov/v1/tx.amino";
import * as _411 from "./gov/v1beta1/tx.amino";
import * as _412 from "./group/v1/tx.amino";
import * as _413 from "./nft/v1beta1/tx.amino";
import * as _414 from "./slashing/v1beta1/tx.amino";
import * as _415 from "./staking/v1beta1/tx.amino";
import * as _416 from "./upgrade/v1beta1/tx.amino";
import * as _417 from "./vesting/v1beta1/tx.amino";
import * as _418 from "./authz/v1beta1/tx.registry";
import * as _419 from "./bank/v1beta1/tx.registry";
import * as _420 from "./crisis/v1beta1/tx.registry";
import * as _421 from "./distribution/v1beta1/tx.registry";
import * as _422 from "./evidence/v1beta1/tx.registry";
import * as _423 from "./feegrant/v1beta1/tx.registry";
import * as _424 from "./gov/v1/tx.registry";
import * as _425 from "./gov/v1beta1/tx.registry";
import * as _426 from "./group/v1/tx.registry";
import * as _427 from "./nft/v1beta1/tx.registry";
import * as _428 from "./slashing/v1beta1/tx.registry";
import * as _429 from "./staking/v1beta1/tx.registry";
import * as _430 from "./upgrade/v1beta1/tx.registry";
import * as _431 from "./vesting/v1beta1/tx.registry";
import * as _432 from "./app/v1alpha1/query.rpc.Query";
import * as _433 from "./auth/v1beta1/query.rpc.Query";
import * as _434 from "./authz/v1beta1/query.rpc.Query";
import * as _435 from "./bank/v1beta1/query.rpc.Query";
import * as _436 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _437 from "./distribution/v1beta1/query.rpc.Query";
import * as _438 from "./evidence/v1beta1/query.rpc.Query";
import * as _439 from "./feegrant/v1beta1/query.rpc.Query";
import * as _440 from "./gov/v1/query.rpc.Query";
import * as _441 from "./gov/v1beta1/query.rpc.Query";
import * as _442 from "./group/v1/query.rpc.Query";
import * as _443 from "./mint/v1beta1/query.rpc.Query";
import * as _444 from "./nft/v1beta1/query.rpc.Query";
import * as _445 from "./params/v1beta1/query.rpc.Query";
import * as _446 from "./slashing/v1beta1/query.rpc.Query";
import * as _447 from "./staking/v1beta1/query.rpc.Query";
import * as _448 from "./tx/v1beta1/service.rpc.Service";
import * as _449 from "./upgrade/v1beta1/query.rpc.Query";
import * as _450 from "./authz/v1beta1/tx.rpc.msg";
import * as _451 from "./bank/v1beta1/tx.rpc.msg";
import * as _452 from "./crisis/v1beta1/tx.rpc.msg";
import * as _453 from "./distribution/v1beta1/tx.rpc.msg";
import * as _454 from "./evidence/v1beta1/tx.rpc.msg";
import * as _455 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _456 from "./gov/v1/tx.rpc.msg";
import * as _457 from "./gov/v1beta1/tx.rpc.msg";
import * as _458 from "./group/v1/tx.rpc.msg";
import * as _459 from "./nft/v1beta1/tx.rpc.msg";
import * as _460 from "./slashing/v1beta1/tx.rpc.msg";
import * as _461 from "./staking/v1beta1/tx.rpc.msg";
import * as _462 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _463 from "./vesting/v1beta1/tx.rpc.msg";
import * as _466 from "./rpc.query";
import * as _467 from "./rpc.tx";
export namespace cosmos {
  export namespace app {
    export const v1alpha1 = {
      ..._194,
      ..._195,
      ..._196,
      ..._432
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._199,
      ..._433
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._200,
      ..._201,
      ..._202,
      ..._203,
      ..._204,
      ..._404,
      ..._418,
      ..._434,
      ..._450
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._405,
      ..._419,
      ..._435,
      ..._451
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._210
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._211
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._212
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._213
      };
      export const v2alpha1 = {
        ..._214
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._215
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._216,
        ..._217
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._218,
        ..._436
      };
    }
    export const v1beta1 = {
      ..._219
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._220,
      ..._221
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._222,
      ..._223,
      ..._406,
      ..._420,
      ..._452
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._224
    };
    export namespace hd {
      export const v1 = {
        ..._225
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._226
      };
    }
    export const multisig = {
      ..._227
    };
    export const secp256k1 = {
      ..._228
    };
    export const secp256r1 = {
      ..._229
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._230,
      ..._231,
      ..._232,
      ..._233,
      ..._407,
      ..._421,
      ..._437,
      ..._453
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._234,
      ..._235,
      ..._236,
      ..._237,
      ..._408,
      ..._422,
      ..._438,
      ..._454
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._238,
      ..._239,
      ..._240,
      ..._241,
      ..._409,
      ..._423,
      ..._439,
      ..._455
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._242
    };
  }
  export namespace gov {
    export const v1 = {
      ..._243,
      ..._244,
      ..._245,
      ..._246,
      ..._410,
      ..._424,
      ..._440,
      ..._456
    };
    export const v1beta1 = {
      ..._247,
      ..._248,
      ..._249,
      ..._250,
      ..._411,
      ..._425,
      ..._441,
      ..._457
    };
  }
  export namespace group {
    export const v1 = {
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._412,
      ..._426,
      ..._442,
      ..._458
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._256,
      ..._257,
      ..._258,
      ..._443
    };
  }
  export namespace msg {
    export const v1 = {
      ..._259
    };
  }
  export namespace nft {
    export const v1beta1 = {
      ..._260,
      ..._261,
      ..._262,
      ..._263,
      ..._264,
      ..._413,
      ..._427,
      ..._444,
      ..._459
    };
  }
  export namespace orm {
    export const v1 = {
      ..._265
    };
    export const v1alpha1 = {
      ..._266
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._267,
      ..._268,
      ..._445
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._269,
      ..._270,
      ..._271,
      ..._272,
      ..._414,
      ..._428,
      ..._446,
      ..._460
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._273,
      ..._274,
      ..._275,
      ..._276,
      ..._277,
      ..._415,
      ..._429,
      ..._447,
      ..._461
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._278
      };
    }
    export const v1beta1 = {
      ..._279,
      ..._280,
      ..._448
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._281,
      ..._282,
      ..._283,
      ..._416,
      ..._430,
      ..._449,
      ..._462
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._284,
      ..._285,
      ..._417,
      ..._431,
      ..._463
    };
  }
  export const ClientFactory = {
    ..._466,
    ..._467
  };
}