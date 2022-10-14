import * as _132 from "./halving/v1beta1/genesis";
import * as _133 from "./halving/v1beta1/halving";
import * as _134 from "./halving/v1beta1/query";
import * as _211 from "./halving/v1beta1/query.lcd";
import * as _212 from "./halving/v1beta1/query.rpc.query";
import * as _222 from "./lcd";
import * as _223 from "./rpc.query";
export namespace persistence {
  export namespace halving {
    export const v1beta1 = { ..._132,
      ..._133,
      ..._134,
      ..._211,
      ..._212
    };
  }
  export const ClientFactory = { ..._222,
    ..._223
  };
}