import * as _94 from "./wasm/v1/genesis";
import * as _95 from "./wasm/v1/ibc";
import * as _96 from "./wasm/v1/proposal";
import * as _97 from "./wasm/v1/query";
import * as _98 from "./wasm/v1/tx";
import * as _99 from "./wasm/v1/types";
import * as _195 from "./wasm/v1/query.lcd";
import * as _196 from "./wasm/v1/query.rpc.query";
import * as _197 from "./wasm/v1/tx.rpc.msg";
import * as _216 from "./lcd";
import * as _217 from "./rpc.query";
import * as _218 from "./rpc.tx";
export namespace cosmwasm {
  export namespace wasm {
    export const v1 = { ..._94,
      ..._95,
      ..._96,
      ..._97,
      ..._98,
      ..._99,
      ..._195,
      ..._196,
      ..._197
    };
  }
  export const ClientFactory = { ..._216,
    ..._217,
    ..._218
  };
}