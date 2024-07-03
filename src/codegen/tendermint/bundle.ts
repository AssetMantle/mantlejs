import * as _270 from "./abci/types";
import * as _271 from "./crypto/keys";
import * as _272 from "./crypto/proof";
import * as _273 from "./libs/bits/types";
import * as _274 from "./p2p/types";
import * as _275 from "./types/block";
import * as _276 from "./types/evidence";
import * as _277 from "./types/params";
import * as _278 from "./types/types";
import * as _279 from "./types/validator";
import * as _280 from "./version/types";
export namespace tendermint {
  export const abci = {
    ..._270
  };
  export const crypto = {
    ..._271,
    ..._272
  };
  export namespace libs {
    export const bits = {
      ..._273
    };
  }
  export const p2p = {
    ..._274
  };
  export const types = {
    ..._275,
    ..._276,
    ..._277,
    ..._278,
    ..._279
  };
  export const version = {
    ..._280
  };
}