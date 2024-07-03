//@ts-nocheck
import * as _1 from "./modules/x/assets/genesis/genesis";
import * as _2 from "./modules/x/assets/key/key";
import * as _3 from "./modules/x/assets/mappable/mappable";
import * as _4 from "./modules/x/assets/queries/asset/query_request";
import * as _5 from "./modules/x/assets/queries/asset/query_response";
import * as _6 from "./modules/x/assets/queries/asset/service";
import * as _7 from "./modules/x/assets/queries/assets/query_request";
import * as _8 from "./modules/x/assets/queries/assets/query_response";
import * as _9 from "./modules/x/assets/queries/assets/service";
import * as _10 from "./modules/x/assets/record/record";
import * as _11 from "./modules/x/assets/transactions/burn/message";
import * as _12 from "./modules/x/assets/transactions/burn/service";
import * as _13 from "./modules/x/assets/transactions/burn/transaction_response";
import * as _14 from "./modules/x/assets/transactions/define/message";
import * as _15 from "./modules/x/assets/transactions/define/service";
import * as _16 from "./modules/x/assets/transactions/define/transaction_response";
import * as _17 from "./modules/x/assets/transactions/deputize/message";
import * as _18 from "./modules/x/assets/transactions/deputize/service";
import * as _19 from "./modules/x/assets/transactions/deputize/transaction_response";
import * as _20 from "./modules/x/assets/transactions/mint/message";
import * as _21 from "./modules/x/assets/transactions/mint/service";
import * as _22 from "./modules/x/assets/transactions/mint/transaction_response";
import * as _23 from "./modules/x/assets/transactions/mutate/message";
import * as _24 from "./modules/x/assets/transactions/mutate/service";
import * as _25 from "./modules/x/assets/transactions/mutate/transaction_response";
import * as _26 from "./modules/x/assets/transactions/renumerate/message";
import * as _27 from "./modules/x/assets/transactions/renumerate/service";
import * as _28 from "./modules/x/assets/transactions/renumerate/transaction_response";
import * as _29 from "./modules/x/assets/transactions/revoke/message";
import * as _30 from "./modules/x/assets/transactions/revoke/service";
import * as _31 from "./modules/x/assets/transactions/revoke/transaction_response";
import * as _32 from "./modules/x/assets/transactions/send/message";
import * as _33 from "./modules/x/assets/transactions/send/service";
import * as _34 from "./modules/x/assets/transactions/send/transaction_response";
import * as _35 from "./modules/x/assets/transactions/unwrap/message";
import * as _36 from "./modules/x/assets/transactions/unwrap/service";
import * as _37 from "./modules/x/assets/transactions/unwrap/transaction_response";
import * as _38 from "./modules/x/assets/transactions/wrap/message";
import * as _39 from "./modules/x/assets/transactions/wrap/service";
import * as _40 from "./modules/x/assets/transactions/wrap/transaction_response";
import * as _41 from "./modules/x/classifications/genesis/genesis";
import * as _42 from "./modules/x/classifications/key/key";
import * as _43 from "./modules/x/classifications/mappable/mappable";
import * as _44 from "./modules/x/classifications/queries/classification/query_request";
import * as _45 from "./modules/x/classifications/queries/classification/query_response";
import * as _46 from "./modules/x/classifications/queries/classification/service";
import * as _47 from "./modules/x/classifications/queries/classifications/query_request";
import * as _48 from "./modules/x/classifications/queries/classifications/query_response";
import * as _49 from "./modules/x/classifications/queries/classifications/service";
import * as _50 from "./modules/x/classifications/record/record";
import * as _51 from "./modules/x/identities/genesis/genesis";
import * as _52 from "./modules/x/identities/key/key";
import * as _53 from "./modules/x/identities/mappable/mappable";
import * as _54 from "./modules/x/identities/queries/identities/query_request";
import * as _55 from "./modules/x/identities/queries/identities/query_response";
import * as _56 from "./modules/x/identities/queries/identities/service";
import * as _57 from "./modules/x/identities/queries/identity/query_request";
import * as _58 from "./modules/x/identities/queries/identity/query_response";
import * as _59 from "./modules/x/identities/queries/identity/service";
import * as _60 from "./modules/x/identities/record/record";
import * as _61 from "./modules/x/identities/transactions/define/message";
import * as _62 from "./modules/x/identities/transactions/define/service";
import * as _63 from "./modules/x/identities/transactions/define/transaction_response";
import * as _64 from "./modules/x/identities/transactions/deputize/message";
import * as _65 from "./modules/x/identities/transactions/deputize/service";
import * as _66 from "./modules/x/identities/transactions/deputize/transaction_response";
import * as _67 from "./modules/x/identities/transactions/issue/message";
import * as _68 from "./modules/x/identities/transactions/issue/service";
import * as _69 from "./modules/x/identities/transactions/issue/transaction_response";
import * as _70 from "./modules/x/identities/transactions/name/message";
import * as _71 from "./modules/x/identities/transactions/name/service";
import * as _72 from "./modules/x/identities/transactions/name/transaction_response";
import * as _73 from "./modules/x/identities/transactions/provision/message";
import * as _74 from "./modules/x/identities/transactions/provision/service";
import * as _75 from "./modules/x/identities/transactions/provision/transaction_response";
import * as _76 from "./modules/x/identities/transactions/quash/message";
import * as _77 from "./modules/x/identities/transactions/quash/service";
import * as _78 from "./modules/x/identities/transactions/quash/transaction_response";
import * as _79 from "./modules/x/identities/transactions/revoke/message";
import * as _80 from "./modules/x/identities/transactions/revoke/service";
import * as _81 from "./modules/x/identities/transactions/revoke/transaction_response";
import * as _82 from "./modules/x/identities/transactions/unprovision/message";
import * as _83 from "./modules/x/identities/transactions/unprovision/service";
import * as _84 from "./modules/x/identities/transactions/unprovision/transaction_response";
import * as _85 from "./modules/x/identities/transactions/update/message";
import * as _86 from "./modules/x/identities/transactions/update/service";
import * as _87 from "./modules/x/identities/transactions/update/transaction_response";
import * as _88 from "./modules/x/maintainers/genesis/genesis";
import * as _89 from "./modules/x/maintainers/key/key";
import * as _90 from "./modules/x/maintainers/mappable/mappable";
import * as _91 from "./modules/x/maintainers/queries/maintainer/query_request";
import * as _92 from "./modules/x/maintainers/queries/maintainer/query_response";
import * as _93 from "./modules/x/maintainers/queries/maintainer/service";
import * as _94 from "./modules/x/maintainers/queries/maintainers/query_request";
import * as _95 from "./modules/x/maintainers/queries/maintainers/query_response";
import * as _96 from "./modules/x/maintainers/queries/maintainers/service";
import * as _97 from "./modules/x/maintainers/record/record";
import * as _98 from "./modules/x/metas/genesis/genesis";
import * as _99 from "./modules/x/metas/key/key";
import * as _100 from "./modules/x/metas/mappable/mappable";
import * as _101 from "./modules/x/metas/queries/meta/query_request";
import * as _102 from "./modules/x/metas/queries/meta/query_response";
import * as _103 from "./modules/x/metas/queries/meta/service";
import * as _104 from "./modules/x/metas/queries/metas/query_request";
import * as _105 from "./modules/x/metas/queries/metas/query_response";
import * as _106 from "./modules/x/metas/queries/metas/service";
import * as _107 from "./modules/x/metas/record/record";
import * as _108 from "./modules/x/metas/transactions/reveal/message";
import * as _109 from "./modules/x/metas/transactions/reveal/service";
import * as _110 from "./modules/x/metas/transactions/reveal/transaction_response";
import * as _111 from "./modules/x/orders/genesis/genesis";
import * as _112 from "./modules/x/orders/key/key";
import * as _113 from "./modules/x/orders/mappable/mappable";
import * as _114 from "./modules/x/orders/queries/order/query_request";
import * as _115 from "./modules/x/orders/queries/order/query_response";
import * as _116 from "./modules/x/orders/queries/order/service";
import * as _117 from "./modules/x/orders/queries/orders/query_request";
import * as _118 from "./modules/x/orders/queries/orders/query_response";
import * as _119 from "./modules/x/orders/queries/orders/service";
import * as _120 from "./modules/x/orders/record/record";
import * as _121 from "./modules/x/orders/transactions/cancel/message";
import * as _122 from "./modules/x/orders/transactions/cancel/service";
import * as _123 from "./modules/x/orders/transactions/cancel/transaction_response";
import * as _124 from "./modules/x/orders/transactions/define/message";
import * as _125 from "./modules/x/orders/transactions/define/service";
import * as _126 from "./modules/x/orders/transactions/define/transaction_response";
import * as _127 from "./modules/x/orders/transactions/deputize/message";
import * as _128 from "./modules/x/orders/transactions/deputize/service";
import * as _129 from "./modules/x/orders/transactions/deputize/transaction_response";
import * as _130 from "./modules/x/orders/transactions/get/message";
import * as _131 from "./modules/x/orders/transactions/get/service";
import * as _132 from "./modules/x/orders/transactions/get/transaction_response";
import * as _133 from "./modules/x/orders/transactions/immediate/message";
import * as _134 from "./modules/x/orders/transactions/immediate/service";
import * as _135 from "./modules/x/orders/transactions/immediate/transaction_response";
import * as _136 from "./modules/x/orders/transactions/make/message";
import * as _137 from "./modules/x/orders/transactions/make/service";
import * as _138 from "./modules/x/orders/transactions/make/transaction_response";
import * as _139 from "./modules/x/orders/transactions/modify/message";
import * as _140 from "./modules/x/orders/transactions/modify/service";
import * as _141 from "./modules/x/orders/transactions/modify/transaction_response";
import * as _142 from "./modules/x/orders/transactions/put/message";
import * as _143 from "./modules/x/orders/transactions/put/service";
import * as _144 from "./modules/x/orders/transactions/put/transaction_response";
import * as _145 from "./modules/x/orders/transactions/revoke/message";
import * as _146 from "./modules/x/orders/transactions/revoke/service";
import * as _147 from "./modules/x/orders/transactions/revoke/transaction_response";
import * as _148 from "./modules/x/orders/transactions/take/message";
import * as _149 from "./modules/x/orders/transactions/take/service";
import * as _150 from "./modules/x/orders/transactions/take/transaction_response";
import * as _151 from "./modules/x/splits/genesis/genesis";
import * as _152 from "./modules/x/splits/key/key";
import * as _153 from "./modules/x/splits/mappable/mappable";
import * as _154 from "./modules/x/splits/queries/balances/query_request";
import * as _155 from "./modules/x/splits/queries/balances/query_response";
import * as _156 from "./modules/x/splits/queries/balances/service";
import * as _157 from "./modules/x/splits/queries/split/query_request";
import * as _158 from "./modules/x/splits/queries/split/query_response";
import * as _159 from "./modules/x/splits/queries/split/service";
import * as _160 from "./modules/x/splits/queries/splits/query_request";
import * as _161 from "./modules/x/splits/queries/splits/query_response";
import * as _162 from "./modules/x/splits/queries/splits/service";
import * as _163 from "./modules/x/splits/queries/supply/query_request";
import * as _164 from "./modules/x/splits/queries/supply/query_response";
import * as _165 from "./modules/x/splits/queries/supply/service";
import * as _166 from "./modules/x/splits/record/record";
import * as _167 from "./schema/data/base/acc_address_data";
import * as _168 from "./schema/data/base/any_data";
import * as _169 from "./schema/data/base/any_listable_data";
import * as _170 from "./schema/data/base/boolean_data";
import * as _171 from "./schema/data/base/dec_data";
import * as _172 from "./schema/data/base/height_data";
import * as _173 from "./schema/data/base/id_data";
import * as _174 from "./schema/data/base/linked_data";
import * as _175 from "./schema/data/base/list_data";
import * as _176 from "./schema/data/base/number_data";
import * as _177 from "./schema/data/base/string_data";
import * as _178 from "./schema/documents/base/document";
import * as _179 from "./schema/ids/base/any_id";
import * as _180 from "./schema/ids/base/asset_id";
import * as _181 from "./schema/ids/base/classification_id";
import * as _182 from "./schema/ids/base/data_id";
import * as _183 from "./schema/ids/base/hash_id";
import * as _184 from "./schema/ids/base/identity_id";
import * as _185 from "./schema/ids/base/maintainer_id";
import * as _186 from "./schema/ids/base/order_id";
import * as _187 from "./schema/ids/base/property_id";
import * as _188 from "./schema/ids/base/split_id";
import * as _189 from "./schema/ids/base/string_id";
import * as _190 from "./schema/lists/base/id_list";
import * as _191 from "./schema/lists/base/parameter_list";
import * as _192 from "./schema/lists/base/property_list";
import * as _193 from "./schema/parameters/base/parameter";
import * as _194 from "./schema/properties/base/any_property";
import * as _195 from "./schema/properties/base/mesa_property";
import * as _196 from "./schema/properties/base/meta_property";
import * as _197 from "./schema/qualified/base/immutables";
import * as _198 from "./schema/qualified/base/mutables";
import * as _199 from "./schema/types/base/height";
import * as _200 from "./schema/types/base/split";
import * as _281 from "./modules/x/assets/transactions/burn/service.amino";
import * as _282 from "./modules/x/assets/transactions/define/service.amino";
import * as _283 from "./modules/x/assets/transactions/deputize/service.amino";
import * as _284 from "./modules/x/assets/transactions/mint/service.amino";
import * as _285 from "./modules/x/assets/transactions/mutate/service.amino";
import * as _286 from "./modules/x/assets/transactions/renumerate/service.amino";
import * as _287 from "./modules/x/assets/transactions/revoke/service.amino";
import * as _288 from "./modules/x/assets/transactions/send/service.amino";
import * as _289 from "./modules/x/assets/transactions/unwrap/service.amino";
import * as _290 from "./modules/x/assets/transactions/wrap/service.amino";
import * as _291 from "./modules/x/identities/transactions/define/service.amino";
import * as _292 from "./modules/x/identities/transactions/deputize/service.amino";
import * as _293 from "./modules/x/identities/transactions/issue/service.amino";
import * as _294 from "./modules/x/identities/transactions/name/service.amino";
import * as _295 from "./modules/x/identities/transactions/provision/service.amino";
import * as _296 from "./modules/x/identities/transactions/quash/service.amino";
import * as _297 from "./modules/x/identities/transactions/revoke/service.amino";
import * as _298 from "./modules/x/identities/transactions/unprovision/service.amino";
import * as _299 from "./modules/x/identities/transactions/update/service.amino";
import * as _300 from "./modules/x/metas/transactions/reveal/service.amino";
import * as _301 from "./modules/x/orders/transactions/cancel/service.amino";
import * as _302 from "./modules/x/orders/transactions/define/service.amino";
import * as _303 from "./modules/x/orders/transactions/deputize/service.amino";
import * as _304 from "./modules/x/orders/transactions/get/service.amino";
import * as _305 from "./modules/x/orders/transactions/immediate/service.amino";
import * as _306 from "./modules/x/orders/transactions/make/service.amino";
import * as _307 from "./modules/x/orders/transactions/modify/service.amino";
import * as _308 from "./modules/x/orders/transactions/put/service.amino";
import * as _309 from "./modules/x/orders/transactions/revoke/service.amino";
import * as _310 from "./modules/x/orders/transactions/take/service.amino";
import * as _311 from "./modules/x/assets/transactions/burn/service.registry";
import * as _312 from "./modules/x/assets/transactions/define/service.registry";
import * as _313 from "./modules/x/assets/transactions/deputize/service.registry";
import * as _314 from "./modules/x/assets/transactions/mint/service.registry";
import * as _315 from "./modules/x/assets/transactions/mutate/service.registry";
import * as _316 from "./modules/x/assets/transactions/renumerate/service.registry";
import * as _317 from "./modules/x/assets/transactions/revoke/service.registry";
import * as _318 from "./modules/x/assets/transactions/send/service.registry";
import * as _319 from "./modules/x/assets/transactions/unwrap/service.registry";
import * as _320 from "./modules/x/assets/transactions/wrap/service.registry";
import * as _321 from "./modules/x/identities/transactions/define/service.registry";
import * as _322 from "./modules/x/identities/transactions/deputize/service.registry";
import * as _323 from "./modules/x/identities/transactions/issue/service.registry";
import * as _324 from "./modules/x/identities/transactions/name/service.registry";
import * as _325 from "./modules/x/identities/transactions/provision/service.registry";
import * as _326 from "./modules/x/identities/transactions/quash/service.registry";
import * as _327 from "./modules/x/identities/transactions/revoke/service.registry";
import * as _328 from "./modules/x/identities/transactions/unprovision/service.registry";
import * as _329 from "./modules/x/identities/transactions/update/service.registry";
import * as _330 from "./modules/x/metas/transactions/reveal/service.registry";
import * as _331 from "./modules/x/orders/transactions/cancel/service.registry";
import * as _332 from "./modules/x/orders/transactions/define/service.registry";
import * as _333 from "./modules/x/orders/transactions/deputize/service.registry";
import * as _334 from "./modules/x/orders/transactions/get/service.registry";
import * as _335 from "./modules/x/orders/transactions/immediate/service.registry";
import * as _336 from "./modules/x/orders/transactions/make/service.registry";
import * as _337 from "./modules/x/orders/transactions/modify/service.registry";
import * as _338 from "./modules/x/orders/transactions/put/service.registry";
import * as _339 from "./modules/x/orders/transactions/revoke/service.registry";
import * as _340 from "./modules/x/orders/transactions/take/service.registry";
import * as _341 from "./modules/x/assets/queries/asset/service.lcd";
import * as _342 from "./modules/x/assets/queries/assets/service.lcd";
import * as _343 from "./modules/x/classifications/queries/classification/service.lcd";
import * as _344 from "./modules/x/classifications/queries/classifications/service.lcd";
import * as _345 from "./modules/x/identities/queries/identities/service.lcd";
import * as _346 from "./modules/x/identities/queries/identity/service.lcd";
import * as _347 from "./modules/x/maintainers/queries/maintainer/service.lcd";
import * as _348 from "./modules/x/maintainers/queries/maintainers/service.lcd";
import * as _349 from "./modules/x/metas/queries/meta/service.lcd";
import * as _350 from "./modules/x/metas/queries/metas/service.lcd";
import * as _351 from "./modules/x/orders/queries/order/service.lcd";
import * as _352 from "./modules/x/orders/queries/orders/service.lcd";
import * as _353 from "./modules/x/splits/queries/balances/service.lcd";
import * as _354 from "./modules/x/splits/queries/split/service.lcd";
import * as _355 from "./modules/x/splits/queries/splits/service.lcd";
import * as _356 from "./modules/x/splits/queries/supply/service.lcd";
import * as _357 from "./modules/x/assets/queries/asset/service.rpc.Query";
import * as _358 from "./modules/x/assets/queries/assets/service.rpc.Query";
import * as _359 from "./modules/x/classifications/queries/classification/service.rpc.Query";
import * as _360 from "./modules/x/classifications/queries/classifications/service.rpc.Query";
import * as _361 from "./modules/x/identities/queries/identities/service.rpc.Query";
import * as _362 from "./modules/x/identities/queries/identity/service.rpc.Query";
import * as _363 from "./modules/x/maintainers/queries/maintainer/service.rpc.Query";
import * as _364 from "./modules/x/maintainers/queries/maintainers/service.rpc.Query";
import * as _365 from "./modules/x/metas/queries/meta/service.rpc.Query";
import * as _366 from "./modules/x/metas/queries/metas/service.rpc.Query";
import * as _367 from "./modules/x/orders/queries/order/service.rpc.Query";
import * as _368 from "./modules/x/orders/queries/orders/service.rpc.Query";
import * as _369 from "./modules/x/splits/queries/balances/service.rpc.Query";
import * as _370 from "./modules/x/splits/queries/split/service.rpc.Query";
import * as _371 from "./modules/x/splits/queries/splits/service.rpc.Query";
import * as _372 from "./modules/x/splits/queries/supply/service.rpc.Query";
import * as _373 from "./modules/x/assets/transactions/burn/service.rpc.msg";
import * as _374 from "./modules/x/assets/transactions/define/service.rpc.msg";
import * as _375 from "./modules/x/assets/transactions/deputize/service.rpc.msg";
import * as _376 from "./modules/x/assets/transactions/mint/service.rpc.msg";
import * as _377 from "./modules/x/assets/transactions/mutate/service.rpc.msg";
import * as _378 from "./modules/x/assets/transactions/renumerate/service.rpc.msg";
import * as _379 from "./modules/x/assets/transactions/revoke/service.rpc.msg";
import * as _380 from "./modules/x/assets/transactions/send/service.rpc.msg";
import * as _381 from "./modules/x/assets/transactions/unwrap/service.rpc.msg";
import * as _382 from "./modules/x/assets/transactions/wrap/service.rpc.msg";
import * as _383 from "./modules/x/identities/transactions/define/service.rpc.msg";
import * as _384 from "./modules/x/identities/transactions/deputize/service.rpc.msg";
import * as _385 from "./modules/x/identities/transactions/issue/service.rpc.msg";
import * as _386 from "./modules/x/identities/transactions/name/service.rpc.msg";
import * as _387 from "./modules/x/identities/transactions/provision/service.rpc.msg";
import * as _388 from "./modules/x/identities/transactions/quash/service.rpc.msg";
import * as _389 from "./modules/x/identities/transactions/revoke/service.rpc.msg";
import * as _390 from "./modules/x/identities/transactions/unprovision/service.rpc.msg";
import * as _391 from "./modules/x/identities/transactions/update/service.rpc.msg";
import * as _392 from "./modules/x/metas/transactions/reveal/service.rpc.msg";
import * as _393 from "./modules/x/orders/transactions/cancel/service.rpc.msg";
import * as _394 from "./modules/x/orders/transactions/define/service.rpc.msg";
import * as _395 from "./modules/x/orders/transactions/deputize/service.rpc.msg";
import * as _396 from "./modules/x/orders/transactions/get/service.rpc.msg";
import * as _397 from "./modules/x/orders/transactions/immediate/service.rpc.msg";
import * as _398 from "./modules/x/orders/transactions/make/service.rpc.msg";
import * as _399 from "./modules/x/orders/transactions/modify/service.rpc.msg";
import * as _400 from "./modules/x/orders/transactions/put/service.rpc.msg";
import * as _401 from "./modules/x/orders/transactions/revoke/service.rpc.msg";
import * as _402 from "./modules/x/orders/transactions/take/service.rpc.msg";
import * as _459 from "./lcd";
import * as _460 from "./rpc.query";
import * as _461 from "./rpc.tx";
export namespace AssetMantle {
  export namespace modules {
    export namespace assets {
      export const genesis = {
        ..._1
      };
      export const key = {
        ..._2
      };
      export const mappable = {
        ..._3
      };
      export namespace queries {
        export const asset = {
          ..._4,
          ..._5,
          ..._6,
          ..._341,
          ..._357
        };
        export const assets = {
          ..._7,
          ..._8,
          ..._9,
          ..._342,
          ..._358
        };
      }
      export const record = {
        ..._10
      };
      export namespace transactions {
        export const burn = {
          ..._11,
          ..._12,
          ..._13,
          ..._281,
          ..._311,
          ..._373
        };
        export const define = {
          ..._14,
          ..._15,
          ..._16,
          ..._282,
          ..._312,
          ..._374
        };
        export const deputize = {
          ..._17,
          ..._18,
          ..._19,
          ..._283,
          ..._313,
          ..._375
        };
        export const mint = {
          ..._20,
          ..._21,
          ..._22,
          ..._284,
          ..._314,
          ..._376
        };
        export const mutate = {
          ..._23,
          ..._24,
          ..._25,
          ..._285,
          ..._315,
          ..._377
        };
        export const renumerate = {
          ..._26,
          ..._27,
          ..._28,
          ..._286,
          ..._316,
          ..._378
        };
        export const revoke = {
          ..._29,
          ..._30,
          ..._31,
          ..._287,
          ..._317,
          ..._379
        };
        export const send = {
          ..._32,
          ..._33,
          ..._34,
          ..._288,
          ..._318,
          ..._380
        };
        export const unwrap = {
          ..._35,
          ..._36,
          ..._37,
          ..._289,
          ..._319,
          ..._381
        };
        export const wrap = {
          ..._38,
          ..._39,
          ..._40,
          ..._290,
          ..._320,
          ..._382
        };
      }
    }
    export namespace classifications {
      export const genesis = {
        ..._41
      };
      export const key = {
        ..._42
      };
      export const mappable = {
        ..._43
      };
      export namespace queries {
        export const classification = {
          ..._44,
          ..._45,
          ..._46,
          ..._343,
          ..._359
        };
        export const classifications = {
          ..._47,
          ..._48,
          ..._49,
          ..._344,
          ..._360
        };
      }
      export const record = {
        ..._50
      };
    }
    export namespace identities {
      export const genesis = {
        ..._51
      };
      export const key = {
        ..._52
      };
      export const mappable = {
        ..._53
      };
      export namespace queries {
        export const identities = {
          ..._54,
          ..._55,
          ..._56,
          ..._345,
          ..._361
        };
        export const identity = {
          ..._57,
          ..._58,
          ..._59,
          ..._346,
          ..._362
        };
      }
      export const record = {
        ..._60
      };
      export namespace transactions {
        export const define = {
          ..._61,
          ..._62,
          ..._63,
          ..._291,
          ..._321,
          ..._383
        };
        export const deputize = {
          ..._64,
          ..._65,
          ..._66,
          ..._292,
          ..._322,
          ..._384
        };
        export const issue = {
          ..._67,
          ..._68,
          ..._69,
          ..._293,
          ..._323,
          ..._385
        };
        export const name = {
          ..._70,
          ..._71,
          ..._72,
          ..._294,
          ..._324,
          ..._386
        };
        export const provision = {
          ..._73,
          ..._74,
          ..._75,
          ..._295,
          ..._325,
          ..._387
        };
        export const quash = {
          ..._76,
          ..._77,
          ..._78,
          ..._296,
          ..._326,
          ..._388
        };
        export const revoke = {
          ..._79,
          ..._80,
          ..._81,
          ..._297,
          ..._327,
          ..._389
        };
        export const unprovision = {
          ..._82,
          ..._83,
          ..._84,
          ..._298,
          ..._328,
          ..._390
        };
        export const update = {
          ..._85,
          ..._86,
          ..._87,
          ..._299,
          ..._329,
          ..._391
        };
      }
    }
    export namespace maintainers {
      export const genesis = {
        ..._88
      };
      export const key = {
        ..._89
      };
      export const mappable = {
        ..._90
      };
      export namespace queries {
        export const maintainer = {
          ..._91,
          ..._92,
          ..._93,
          ..._347,
          ..._363
        };
        export const maintainers = {
          ..._94,
          ..._95,
          ..._96,
          ..._348,
          ..._364
        };
      }
      export const record = {
        ..._97
      };
    }
    export namespace metas {
      export const genesis = {
        ..._98
      };
      export const key = {
        ..._99
      };
      export const mappable = {
        ..._100
      };
      export namespace queries {
        export const meta = {
          ..._101,
          ..._102,
          ..._103,
          ..._349,
          ..._365
        };
        export const metas = {
          ..._104,
          ..._105,
          ..._106,
          ..._350,
          ..._366
        };
      }
      export const record = {
        ..._107
      };
      export namespace transactions {
        export const reveal = {
          ..._108,
          ..._109,
          ..._110,
          ..._300,
          ..._330,
          ..._392
        };
      }
    }
    export namespace orders {
      export const genesis = {
        ..._111
      };
      export const key = {
        ..._112
      };
      export const mappable = {
        ..._113
      };
      export namespace queries {
        export const order = {
          ..._114,
          ..._115,
          ..._116,
          ..._351,
          ..._367
        };
        export const orders = {
          ..._117,
          ..._118,
          ..._119,
          ..._352,
          ..._368
        };
      }
      export const record = {
        ..._120
      };
      export namespace transactions {
        export const cancel = {
          ..._121,
          ..._122,
          ..._123,
          ..._301,
          ..._331,
          ..._393
        };
        export const define = {
          ..._124,
          ..._125,
          ..._126,
          ..._302,
          ..._332,
          ..._394
        };
        export const deputize = {
          ..._127,
          ..._128,
          ..._129,
          ..._303,
          ..._333,
          ..._395
        };
        export const get = {
          ..._130,
          ..._131,
          ..._132,
          ..._304,
          ..._334,
          ..._396
        };
        export const immediate = {
          ..._133,
          ..._134,
          ..._135,
          ..._305,
          ..._335,
          ..._397
        };
        export const make = {
          ..._136,
          ..._137,
          ..._138,
          ..._306,
          ..._336,
          ..._398
        };
        export const modify = {
          ..._139,
          ..._140,
          ..._141,
          ..._307,
          ..._337,
          ..._399
        };
        export const put = {
          ..._142,
          ..._143,
          ..._144,
          ..._308,
          ..._338,
          ..._400
        };
        export const revoke = {
          ..._145,
          ..._146,
          ..._147,
          ..._309,
          ..._339,
          ..._401
        };
        export const take = {
          ..._148,
          ..._149,
          ..._150,
          ..._310,
          ..._340,
          ..._402
        };
      }
    }
    export namespace splits {
      export const genesis = {
        ..._151
      };
      export const key = {
        ..._152
      };
      export const mappable = {
        ..._153
      };
      export namespace queries {
        export const balances = {
          ..._154,
          ..._155,
          ..._156,
          ..._353,
          ..._369
        };
        export const split = {
          ..._157,
          ..._158,
          ..._159,
          ..._354,
          ..._370
        };
        export const splits = {
          ..._160,
          ..._161,
          ..._162,
          ..._355,
          ..._371
        };
        export const supply = {
          ..._163,
          ..._164,
          ..._165,
          ..._356,
          ..._372
        };
      }
      export const record = {
        ..._166
      };
    }
  }
  export namespace schema {
    export namespace data {
      export const base = {
        ..._167,
        ..._168,
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177
      };
    }
    export namespace documents {
      export const base = {
        ..._178
      };
    }
    export namespace ids {
      export const base = {
        ..._179,
        ..._180,
        ..._181,
        ..._182,
        ..._183,
        ..._184,
        ..._185,
        ..._186,
        ..._187,
        ..._188,
        ..._189
      };
    }
    export namespace lists {
      export const base = {
        ..._190,
        ..._191,
        ..._192
      };
    }
    export namespace parameters {
      export const base = {
        ..._193
      };
    }
    export namespace properties {
      export const base = {
        ..._194,
        ..._195,
        ..._196
      };
    }
    export namespace qualified {
      export const base = {
        ..._197,
        ..._198
      };
    }
    export namespace types {
      export const base = {
        ..._199,
        ..._200
      };
    }
  }
  export const ClientFactory = {
    ..._459,
    ..._460,
    ..._461
  };
}