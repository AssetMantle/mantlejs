//@ts-nocheck
import * as _202 from "./auth/v1beta1/auth";
import * as _203 from "./auth/v1beta1/genesis";
import * as _204 from "./auth/v1beta1/query";
import * as _205 from "./authz/v1beta1/authz";
import * as _206 from "./authz/v1beta1/event";
import * as _207 from "./authz/v1beta1/genesis";
import * as _208 from "./authz/v1beta1/query";
import * as _209 from "./authz/v1beta1/tx";
import * as _210 from "./bank/v1beta1/authz";
import * as _211 from "./bank/v1beta1/bank";
import * as _212 from "./bank/v1beta1/genesis";
import * as _213 from "./bank/v1beta1/query";
import * as _214 from "./bank/v1beta1/tx";
import * as _215 from "./base/abci/v1beta1/abci";
import * as _216 from "./base/query/v1beta1/pagination";
import * as _217 from "./base/reflection/v2alpha1/reflection";
import * as _218 from "./base/v1beta1/coin";
import * as _219 from "./crypto/ed25519/keys";
import * as _220 from "./crypto/hd/v1/hd";
import * as _221 from "./crypto/keyring/v1/record";
import * as _222 from "./crypto/multisig/keys";
import * as _223 from "./crypto/secp256k1/keys";
import * as _224 from "./crypto/secp256r1/keys";
import * as _225 from "./distribution/v1beta1/distribution";
import * as _226 from "./distribution/v1beta1/genesis";
import * as _227 from "./distribution/v1beta1/query";
import * as _228 from "./distribution/v1beta1/tx";
import * as _229 from "./feegrant/v1beta1/feegrant";
import * as _230 from "./feegrant/v1beta1/genesis";
import * as _231 from "./feegrant/v1beta1/query";
import * as _232 from "./feegrant/v1beta1/tx";
import * as _233 from "./gov/v1/genesis";
import * as _234 from "./gov/v1/gov";
import * as _235 from "./gov/v1/query";
import * as _236 from "./gov/v1/tx";
import * as _237 from "./gov/v1beta1/genesis";
import * as _238 from "./gov/v1beta1/gov";
import * as _239 from "./gov/v1beta1/query";
import * as _240 from "./gov/v1beta1/tx";
import * as _241 from "./group/v1/events";
import * as _242 from "./group/v1/genesis";
import * as _243 from "./group/v1/query";
import * as _244 from "./group/v1/tx";
import * as _245 from "./group/v1/types";
import * as _246 from "./mint/v1beta1/genesis";
import * as _247 from "./mint/v1beta1/mint";
import * as _248 from "./mint/v1beta1/query";
import * as _249 from "./params/v1beta1/params";
import * as _250 from "./params/v1beta1/query";
import * as _251 from "./staking/v1beta1/authz";
import * as _252 from "./staking/v1beta1/genesis";
import * as _253 from "./staking/v1beta1/query";
import * as _254 from "./staking/v1beta1/staking";
import * as _255 from "./staking/v1beta1/tx";
import * as _256 from "./tx/signing/v1beta1/signing";
import * as _257 from "./tx/v1beta1/service";
import * as _258 from "./tx/v1beta1/tx";
import * as _259 from "./upgrade/v1beta1/query";
import * as _260 from "./upgrade/v1beta1/tx";
import * as _261 from "./upgrade/v1beta1/upgrade";
import * as _262 from "./vesting/v1beta1/tx";
import * as _263 from "./vesting/v1beta1/vesting";
import * as _403 from "./authz/v1beta1/tx.amino";
import * as _404 from "./bank/v1beta1/tx.amino";
import * as _405 from "./distribution/v1beta1/tx.amino";
import * as _406 from "./feegrant/v1beta1/tx.amino";
import * as _407 from "./gov/v1/tx.amino";
import * as _408 from "./gov/v1beta1/tx.amino";
import * as _409 from "./group/v1/tx.amino";
import * as _410 from "./staking/v1beta1/tx.amino";
import * as _411 from "./upgrade/v1beta1/tx.amino";
import * as _412 from "./vesting/v1beta1/tx.amino";
import * as _413 from "./authz/v1beta1/tx.registry";
import * as _414 from "./bank/v1beta1/tx.registry";
import * as _415 from "./distribution/v1beta1/tx.registry";
import * as _416 from "./feegrant/v1beta1/tx.registry";
import * as _417 from "./gov/v1/tx.registry";
import * as _418 from "./gov/v1beta1/tx.registry";
import * as _419 from "./group/v1/tx.registry";
import * as _420 from "./staking/v1beta1/tx.registry";
import * as _421 from "./upgrade/v1beta1/tx.registry";
import * as _422 from "./vesting/v1beta1/tx.registry";
import * as _423 from "./auth/v1beta1/query.lcd";
import * as _424 from "./authz/v1beta1/query.lcd";
import * as _425 from "./bank/v1beta1/query.lcd";
import * as _426 from "./distribution/v1beta1/query.lcd";
import * as _427 from "./feegrant/v1beta1/query.lcd";
import * as _428 from "./gov/v1/query.lcd";
import * as _429 from "./gov/v1beta1/query.lcd";
import * as _430 from "./group/v1/query.lcd";
import * as _431 from "./mint/v1beta1/query.lcd";
import * as _432 from "./params/v1beta1/query.lcd";
import * as _433 from "./staking/v1beta1/query.lcd";
import * as _434 from "./tx/v1beta1/service.lcd";
import * as _435 from "./upgrade/v1beta1/query.lcd";
import * as _436 from "./auth/v1beta1/query.rpc.Query";
import * as _437 from "./authz/v1beta1/query.rpc.Query";
import * as _438 from "./bank/v1beta1/query.rpc.Query";
import * as _439 from "./distribution/v1beta1/query.rpc.Query";
import * as _440 from "./feegrant/v1beta1/query.rpc.Query";
import * as _441 from "./gov/v1/query.rpc.Query";
import * as _442 from "./gov/v1beta1/query.rpc.Query";
import * as _443 from "./group/v1/query.rpc.Query";
import * as _444 from "./mint/v1beta1/query.rpc.Query";
import * as _445 from "./params/v1beta1/query.rpc.Query";
import * as _446 from "./staking/v1beta1/query.rpc.Query";
import * as _447 from "./tx/v1beta1/service.rpc.Service";
import * as _448 from "./upgrade/v1beta1/query.rpc.Query";
import * as _449 from "./authz/v1beta1/tx.rpc.msg";
import * as _450 from "./bank/v1beta1/tx.rpc.msg";
import * as _451 from "./distribution/v1beta1/tx.rpc.msg";
import * as _452 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _453 from "./gov/v1/tx.rpc.msg";
import * as _454 from "./gov/v1beta1/tx.rpc.msg";
import * as _455 from "./group/v1/tx.rpc.msg";
import * as _456 from "./staking/v1beta1/tx.rpc.msg";
import * as _457 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _458 from "./vesting/v1beta1/tx.rpc.msg";
import * as _462 from "./lcd";
import * as _463 from "./rpc.query";
import * as _464 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._202,
      ..._203,
      ..._204,
      ..._423,
      ..._436
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._205,
      ..._206,
      ..._207,
      ..._208,
      ..._209,
      ..._403,
      ..._413,
      ..._424,
      ..._437,
      ..._449
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._210,
      ..._211,
      ..._212,
      ..._213,
      ..._214,
      ..._404,
      ..._414,
      ..._425,
      ..._438,
      ..._450
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._215
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._216
      };
    }
    export namespace reflection {
      export const v2alpha1 = {
        ..._217
      };
    }
    export const v1beta1 = {
      ..._218
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._219
    };
    export namespace hd {
      export const v1 = {
        ..._220
      };
    }
    export namespace keyring {
      export const v1 = {
        ..._221
      };
    }
    export const multisig = {
      ..._222
    };
    export const secp256k1 = {
      ..._223
    };
    export const secp256r1 = {
      ..._224
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._225,
      ..._226,
      ..._227,
      ..._228,
      ..._405,
      ..._415,
      ..._426,
      ..._439,
      ..._451
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._229,
      ..._230,
      ..._231,
      ..._232,
      ..._406,
      ..._416,
      ..._427,
      ..._440,
      ..._452
    };
  }
  export namespace gov {
    export const v1 = {
      ..._233,
      ..._234,
      ..._235,
      ..._236,
      ..._407,
      ..._417,
      ..._428,
      ..._441,
      ..._453
    };
    export const v1beta1 = {
      ..._237,
      ..._238,
      ..._239,
      ..._240,
      ..._408,
      ..._418,
      ..._429,
      ..._442,
      ..._454
    };
  }
  export namespace group {
    export const v1 = {
      ..._241,
      ..._242,
      ..._243,
      ..._244,
      ..._245,
      ..._409,
      ..._419,
      ..._430,
      ..._443,
      ..._455
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._246,
      ..._247,
      ..._248,
      ..._431,
      ..._444
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._249,
      ..._250,
      ..._432,
      ..._445
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._251,
      ..._252,
      ..._253,
      ..._254,
      ..._255,
      ..._410,
      ..._420,
      ..._433,
      ..._446,
      ..._456
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._256
      };
    }
    export const v1beta1 = {
      ..._257,
      ..._258,
      ..._434,
      ..._447
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._259,
      ..._260,
      ..._261,
      ..._411,
      ..._421,
      ..._435,
      ..._448,
      ..._457
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._262,
      ..._263,
      ..._412,
      ..._422,
      ..._458
    };
  }
  export const ClientFactory = {
    ..._462,
    ..._463,
    ..._464
  };
}