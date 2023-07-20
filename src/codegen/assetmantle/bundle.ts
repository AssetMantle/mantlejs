import * as _1 from "../assets/genesis/genesis";
import * as _2 from "../assets/key/key";
import * as _3 from "../assets/mappable/mappable";
import * as _4 from "../assets/queries/asset/query_request";
import * as _5 from "../assets/queries/asset/query_response";
import * as _6 from "../assets/queries/asset/service";
import * as _7 from "../assets/queries/assets/query_request";
import * as _8 from "../assets/queries/assets/query_response";
import * as _9 from "../assets/queries/assets/service";
import * as _10 from "../assets/record/record";
import * as _11 from "../assets/transactions/burn/message";
import * as _12 from "../assets/transactions/burn/service";
import * as _13 from "../assets/transactions/burn/transaction_response";
import * as _14 from "../assets/transactions/define/message";
import * as _15 from "../assets/transactions/define/service";
import * as _16 from "../assets/transactions/define/transaction_response";
import * as _17 from "../assets/transactions/deputize/message";
import * as _18 from "../assets/transactions/deputize/service";
import * as _19 from "../assets/transactions/deputize/transaction_response";
import * as _20 from "../assets/transactions/mint/message";
import * as _21 from "../assets/transactions/mint/service";
import * as _22 from "../assets/transactions/mint/transaction_response";
import * as _23 from "../assets/transactions/mutate/message";
import * as _24 from "../assets/transactions/mutate/service";
import * as _25 from "../assets/transactions/mutate/transaction_response";
import * as _26 from "../assets/transactions/renumerate/message";
import * as _27 from "../assets/transactions/renumerate/service";
import * as _28 from "../assets/transactions/renumerate/transaction_response";
import * as _29 from "../assets/transactions/revoke/message";
import * as _30 from "../assets/transactions/revoke/service";
import * as _31 from "../assets/transactions/revoke/transaction_response";
import * as _32 from "../classifications/genesis/genesis";
import * as _33 from "../classifications/key/key";
import * as _34 from "../classifications/mappable/mappable";
import * as _35 from "../classifications/queries/classification/query_request";
import * as _36 from "../classifications/queries/classification/query_response";
import * as _37 from "../classifications/queries/classification/service";
import * as _38 from "../classifications/queries/classifications/query_request";
import * as _39 from "../classifications/queries/classifications/query_response";
import * as _40 from "../classifications/queries/classifications/service";
import * as _41 from "../classifications/record/record";
import * as _42 from "../identities/genesis/genesis";
import * as _43 from "../identities/key/key";
import * as _44 from "../identities/mappable/mappable";
import * as _45 from "../identities/queries/identities/query_request";
import * as _46 from "../identities/queries/identities/query_response";
import * as _47 from "../identities/queries/identities/service";
import * as _48 from "../identities/queries/identity/query_request";
import * as _49 from "../identities/queries/identity/query_response";
import * as _50 from "../identities/queries/identity/service";
import * as _51 from "../identities/record/record";
import * as _52 from "../identities/transactions/define/message";
import * as _53 from "../identities/transactions/define/service";
import * as _54 from "../identities/transactions/define/transaction_response";
import * as _55 from "../identities/transactions/deputize/message";
import * as _56 from "../identities/transactions/deputize/service";
import * as _57 from "../identities/transactions/deputize/transaction_response";
import * as _58 from "../identities/transactions/issue/message";
import * as _59 from "../identities/transactions/issue/service";
import * as _60 from "../identities/transactions/issue/transaction_response";
import * as _61 from "../identities/transactions/nub/message";
import * as _62 from "../identities/transactions/nub/service";
import * as _63 from "../identities/transactions/nub/transaction_response";
import * as _64 from "../identities/transactions/provision/message";
import * as _65 from "../identities/transactions/provision/service";
import * as _66 from "../identities/transactions/provision/transaction_response";
import * as _67 from "../identities/transactions/quash/message";
import * as _68 from "../identities/transactions/quash/service";
import * as _69 from "../identities/transactions/quash/transaction_response";
import * as _70 from "../identities/transactions/revoke/message";
import * as _71 from "../identities/transactions/revoke/service";
import * as _72 from "../identities/transactions/revoke/transaction_response";
import * as _73 from "../identities/transactions/unprovision/message";
import * as _74 from "../identities/transactions/unprovision/service";
import * as _75 from "../identities/transactions/unprovision/transaction_response";
import * as _76 from "../identities/transactions/update/message";
import * as _77 from "../identities/transactions/update/service";
import * as _78 from "../identities/transactions/update/transaction_response";
import * as _79 from "../maintainers/genesis/genesis";
import * as _80 from "../maintainers/key/key";
import * as _81 from "../maintainers/mappable/mappable";
import * as _82 from "../maintainers/queries/maintainer/query_request";
import * as _83 from "../maintainers/queries/maintainer/query_response";
import * as _84 from "../maintainers/queries/maintainer/service";
import * as _85 from "../maintainers/queries/maintainers/query_request";
import * as _86 from "../maintainers/queries/maintainers/query_response";
import * as _87 from "../maintainers/queries/maintainers/service";
import * as _88 from "../maintainers/record/record";
import * as _89 from "../metas/genesis/genesis";
import * as _90 from "../metas/key/key";
import * as _91 from "../metas/mappable/mappable";
import * as _92 from "../metas/queries/meta/query_request";
import * as _93 from "../metas/queries/meta/query_response";
import * as _94 from "../metas/queries/meta/service";
import * as _95 from "../metas/queries/metas/query_request";
import * as _96 from "../metas/queries/metas/query_response";
import * as _97 from "../metas/queries/metas/service";
import * as _98 from "../metas/record/record";
import * as _99 from "../metas/transactions/reveal/message";
import * as _100 from "../metas/transactions/reveal/service";
import * as _101 from "../metas/transactions/reveal/transaction_response";
import * as _102 from "../orders/genesis/genesis";
import * as _103 from "../orders/key/key";
import * as _104 from "../orders/mappable/mappable";
import * as _105 from "../orders/queries/order/query_request";
import * as _106 from "../orders/queries/order/query_response";
import * as _107 from "../orders/queries/order/service";
import * as _108 from "../orders/queries/orders/query_request";
import * as _109 from "../orders/queries/orders/query_response";
import * as _110 from "../orders/queries/orders/service";
import * as _111 from "../orders/record/record";
import * as _112 from "../orders/transactions/cancel/message";
import * as _113 from "../orders/transactions/cancel/service";
import * as _114 from "../orders/transactions/cancel/transaction_response";
import * as _115 from "../orders/transactions/define/message";
import * as _116 from "../orders/transactions/define/service";
import * as _117 from "../orders/transactions/define/transaction_response";
import * as _118 from "../orders/transactions/deputize/message";
import * as _119 from "../orders/transactions/deputize/service";
import * as _120 from "../orders/transactions/deputize/transaction_response";
import * as _121 from "../orders/transactions/immediate/message";
import * as _122 from "../orders/transactions/immediate/service";
import * as _123 from "../orders/transactions/immediate/transaction_response";
import * as _124 from "../orders/transactions/make/message";
import * as _125 from "../orders/transactions/make/service";
import * as _126 from "../orders/transactions/make/transaction_response";
import * as _127 from "../orders/transactions/modify/message";
import * as _128 from "../orders/transactions/modify/service";
import * as _129 from "../orders/transactions/modify/transaction_response";
import * as _130 from "../orders/transactions/revoke/message";
import * as _131 from "../orders/transactions/revoke/service";
import * as _132 from "../orders/transactions/revoke/transaction_response";
import * as _133 from "../orders/transactions/take/message";
import * as _134 from "../orders/transactions/take/service";
import * as _135 from "../orders/transactions/take/transaction_response";
import * as _136 from "../splits/genesis/genesis";
import * as _137 from "../splits/key/key";
import * as _138 from "../splits/mappable/mappable";
import * as _139 from "../splits/queries/ownable/query_request";
import * as _140 from "../splits/queries/ownable/query_response";
import * as _141 from "../splits/queries/ownable/service";
import * as _142 from "../splits/queries/split/query_request";
import * as _143 from "../splits/queries/split/query_response";
import * as _144 from "../splits/queries/split/service";
import * as _145 from "../splits/queries/splits/query_request";
import * as _146 from "../splits/queries/splits/query_response";
import * as _147 from "../splits/queries/splits/service";
import * as _148 from "../splits/record/record";
import * as _149 from "../splits/transactions/send/message";
import * as _150 from "../splits/transactions/send/service";
import * as _151 from "../splits/transactions/send/transaction_response";
import * as _152 from "../splits/transactions/unwrap/message";
import * as _153 from "../splits/transactions/unwrap/service";
import * as _154 from "../splits/transactions/unwrap/transaction_response";
import * as _155 from "../splits/transactions/wrap/message";
import * as _156 from "../splits/transactions/wrap/service";
import * as _157 from "../splits/transactions/wrap/transaction_response";
import * as _158 from "../data/base/acc_address_data";
import * as _159 from "../data/base/any_data";
import * as _160 from "../data/base/any_listable_data";
import * as _161 from "../data/base/boolean_data";
import * as _162 from "../data/base/dec_data";
import * as _163 from "../data/base/height_data";
import * as _164 from "../data/base/id_data";
import * as _165 from "../data/base/list_data";
import * as _166 from "../data/base/number_data";
import * as _167 from "../data/base/string_data";
import * as _168 from "../documents/base/document";
import * as _169 from "../ids/base/any_id";
import * as _170 from "../ids/base/any_ownable_id";
import * as _171 from "../ids/base/asset_id";
import * as _172 from "../ids/base/classification_id";
import * as _173 from "../ids/base/coin_id";
import * as _174 from "../ids/base/data_id";
import * as _175 from "../ids/base/hash_id";
import * as _176 from "../ids/base/identity_id";
import * as _177 from "../ids/base/maintainer_id";
import * as _178 from "../ids/base/order_id";
import * as _179 from "../ids/base/property_id";
import * as _180 from "../ids/base/split_id";
import * as _181 from "../ids/base/string_id";
import * as _182 from "../lists/base/id_list";
import * as _183 from "../lists/base/property_list";
import * as _184 from "../lists/base/parameter_list";
import * as _185 from "../parameters/base/parameter";
import * as _186 from "../properties/base/any_property";
import * as _187 from "../properties/base/mesa_property";
import * as _188 from "../properties/base/meta_property";
import * as _189 from "../qualified/base/immutables";
import * as _190 from "../qualified/base/mutables";
import * as _191 from "../types/base/height";
import * as _192 from "../types/base/split";
import * as _305 from "../assets/transactions/burn/service.amino";
import * as _306 from "../assets/transactions/define/service.amino";
import * as _307 from "../assets/transactions/deputize/service.amino";
import * as _308 from "../assets/transactions/mint/service.amino";
import * as _309 from "../assets/transactions/mutate/service.amino";
import * as _310 from "../assets/transactions/renumerate/service.amino";
import * as _311 from "../assets/transactions/revoke/service.amino";
import * as _312 from "../identities/transactions/define/service.amino";
import * as _313 from "../identities/transactions/deputize/service.amino";
import * as _314 from "../identities/transactions/issue/service.amino";
import * as _315 from "../identities/transactions/nub/service.amino";
import * as _316 from "../identities/transactions/provision/service.amino";
import * as _317 from "../identities/transactions/quash/service.amino";
import * as _318 from "../identities/transactions/revoke/service.amino";
import * as _319 from "../identities/transactions/unprovision/service.amino";
import * as _320 from "../identities/transactions/update/service.amino";
import * as _321 from "../metas/transactions/reveal/service.amino";
import * as _322 from "../orders/transactions/cancel/service.amino";
import * as _323 from "../orders/transactions/define/service.amino";
import * as _324 from "../orders/transactions/deputize/service.amino";
import * as _325 from "../orders/transactions/immediate/service.amino";
import * as _326 from "../orders/transactions/make/service.amino";
import * as _327 from "../orders/transactions/modify/service.amino";
import * as _328 from "../orders/transactions/revoke/service.amino";
import * as _329 from "../orders/transactions/take/service.amino";
import * as _330 from "../splits/transactions/send/service.amino";
import * as _331 from "../splits/transactions/unwrap/service.amino";
import * as _332 from "../splits/transactions/wrap/service.amino";
import * as _333 from "../assets/transactions/burn/service.registry";
import * as _334 from "../assets/transactions/define/service.registry";
import * as _335 from "../assets/transactions/deputize/service.registry";
import * as _336 from "../assets/transactions/mint/service.registry";
import * as _337 from "../assets/transactions/mutate/service.registry";
import * as _338 from "../assets/transactions/renumerate/service.registry";
import * as _339 from "../assets/transactions/revoke/service.registry";
import * as _340 from "../identities/transactions/define/service.registry";
import * as _341 from "../identities/transactions/deputize/service.registry";
import * as _342 from "../identities/transactions/issue/service.registry";
import * as _343 from "../identities/transactions/nub/service.registry";
import * as _344 from "../identities/transactions/provision/service.registry";
import * as _345 from "../identities/transactions/quash/service.registry";
import * as _346 from "../identities/transactions/revoke/service.registry";
import * as _347 from "../identities/transactions/unprovision/service.registry";
import * as _348 from "../identities/transactions/update/service.registry";
import * as _349 from "../metas/transactions/reveal/service.registry";
import * as _350 from "../orders/transactions/cancel/service.registry";
import * as _351 from "../orders/transactions/define/service.registry";
import * as _352 from "../orders/transactions/deputize/service.registry";
import * as _353 from "../orders/transactions/immediate/service.registry";
import * as _354 from "../orders/transactions/make/service.registry";
import * as _355 from "../orders/transactions/modify/service.registry";
import * as _356 from "../orders/transactions/revoke/service.registry";
import * as _357 from "../orders/transactions/take/service.registry";
import * as _358 from "../splits/transactions/send/service.registry";
import * as _359 from "../splits/transactions/unwrap/service.registry";
import * as _360 from "../splits/transactions/wrap/service.registry";
import * as _361 from "../assets/queries/asset/service.rpc.Service";
import * as _362 from "../assets/queries/assets/service.rpc.Service";
import * as _363 from "../classifications/queries/classification/service.rpc.Service";
import * as _364 from "../classifications/queries/classifications/service.rpc.Service";
import * as _365 from "../identities/queries/identities/service.rpc.Service";
import * as _366 from "../identities/queries/identity/service.rpc.Service";
import * as _367 from "../maintainers/queries/maintainer/service.rpc.Service";
import * as _368 from "../maintainers/queries/maintainers/service.rpc.Service";
import * as _369 from "../metas/queries/meta/service.rpc.Service";
import * as _370 from "../metas/queries/metas/service.rpc.Service";
import * as _371 from "../orders/queries/order/service.rpc.Service";
import * as _372 from "../orders/queries/orders/service.rpc.Service";
import * as _373 from "../splits/queries/ownable/service.rpc.Service";
import * as _374 from "../splits/queries/split/service.rpc.Service";
import * as _375 from "../splits/queries/splits/service.rpc.Service";
import * as _376 from "../assets/transactions/burn/service.rpc.msg";
import * as _377 from "../assets/transactions/define/service.rpc.msg";
import * as _378 from "../assets/transactions/deputize/service.rpc.msg";
import * as _379 from "../assets/transactions/mint/service.rpc.msg";
import * as _380 from "../assets/transactions/mutate/service.rpc.msg";
import * as _381 from "../assets/transactions/renumerate/service.rpc.msg";
import * as _382 from "../assets/transactions/revoke/service.rpc.msg";
import * as _383 from "../identities/transactions/define/service.rpc.msg";
import * as _384 from "../identities/transactions/deputize/service.rpc.msg";
import * as _385 from "../identities/transactions/issue/service.rpc.msg";
import * as _386 from "../identities/transactions/nub/service.rpc.msg";
import * as _387 from "../identities/transactions/provision/service.rpc.msg";
import * as _388 from "../identities/transactions/quash/service.rpc.msg";
import * as _389 from "../identities/transactions/revoke/service.rpc.msg";
import * as _390 from "../identities/transactions/unprovision/service.rpc.msg";
import * as _391 from "../identities/transactions/update/service.rpc.msg";
import * as _392 from "../metas/transactions/reveal/service.rpc.msg";
import * as _393 from "../orders/transactions/cancel/service.rpc.msg";
import * as _394 from "../orders/transactions/define/service.rpc.msg";
import * as _395 from "../orders/transactions/deputize/service.rpc.msg";
import * as _396 from "../orders/transactions/immediate/service.rpc.msg";
import * as _397 from "../orders/transactions/make/service.rpc.msg";
import * as _398 from "../orders/transactions/modify/service.rpc.msg";
import * as _399 from "../orders/transactions/revoke/service.rpc.msg";
import * as _400 from "../orders/transactions/take/service.rpc.msg";
import * as _401 from "../splits/transactions/send/service.rpc.msg";
import * as _402 from "../splits/transactions/unwrap/service.rpc.msg";
import * as _403 from "../splits/transactions/wrap/service.rpc.msg";
import * as _464 from "./rpc.query";
import * as _465 from "./rpc.tx";
export namespace assetmantle {
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
          ..._361
        };
        export const assets = {
          ..._7,
          ..._8,
          ..._9,
          ..._362
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
          ..._305,
          ..._333,
          ..._376
        };
        export const define = {
          ..._14,
          ..._15,
          ..._16,
          ..._306,
          ..._334,
          ..._377
        };
        export const deputize = {
          ..._17,
          ..._18,
          ..._19,
          ..._307,
          ..._335,
          ..._378
        };
        export const mint = {
          ..._20,
          ..._21,
          ..._22,
          ..._308,
          ..._336,
          ..._379
        };
        export const mutate = {
          ..._23,
          ..._24,
          ..._25,
          ..._309,
          ..._337,
          ..._380
        };
        export const renumerate = {
          ..._26,
          ..._27,
          ..._28,
          ..._310,
          ..._338,
          ..._381
        };
        export const revoke = {
          ..._29,
          ..._30,
          ..._31,
          ..._311,
          ..._339,
          ..._382
        };
      }
    }
    export namespace classifications {
      export const genesis = {
        ..._32
      };
      export const key = {
        ..._33
      };
      export const mappable = {
        ..._34
      };
      export namespace queries {
        export const classification = {
          ..._35,
          ..._36,
          ..._37,
          ..._363
        };
        export const classifications = {
          ..._38,
          ..._39,
          ..._40,
          ..._364
        };
      }
      export const record = {
        ..._41
      };
    }
    export namespace identities {
      export const genesis = {
        ..._42
      };
      export const key = {
        ..._43
      };
      export const mappable = {
        ..._44
      };
      export namespace queries {
        export const identities = {
          ..._45,
          ..._46,
          ..._47,
          ..._365
        };
        export const identity = {
          ..._48,
          ..._49,
          ..._50,
          ..._366
        };
      }
      export const record = {
        ..._51
      };
      export namespace transactions {
        export const define = {
          ..._52,
          ..._53,
          ..._54,
          ..._312,
          ..._340,
          ..._383
        };
        export const deputize = {
          ..._55,
          ..._56,
          ..._57,
          ..._313,
          ..._341,
          ..._384
        };
        export const issue = {
          ..._58,
          ..._59,
          ..._60,
          ..._314,
          ..._342,
          ..._385
        };
        export const nub = {
          ..._61,
          ..._62,
          ..._63,
          ..._315,
          ..._343,
          ..._386
        };
        export const provision = {
          ..._64,
          ..._65,
          ..._66,
          ..._316,
          ..._344,
          ..._387
        };
        export const quash = {
          ..._67,
          ..._68,
          ..._69,
          ..._317,
          ..._345,
          ..._388
        };
        export const revoke = {
          ..._70,
          ..._71,
          ..._72,
          ..._318,
          ..._346,
          ..._389
        };
        export const unprovision = {
          ..._73,
          ..._74,
          ..._75,
          ..._319,
          ..._347,
          ..._390
        };
        export const mutate = {
          ..._76,
          ..._77,
          ..._78,
          ..._320,
          ..._348,
          ..._391
        };
      }
    }
    export namespace maintainers {
      export const genesis = {
        ..._79
      };
      export const key = {
        ..._80
      };
      export const mappable = {
        ..._81
      };
      export namespace queries {
        export const maintainer = {
          ..._82,
          ..._83,
          ..._84,
          ..._367
        };
        export const maintainers = {
          ..._85,
          ..._86,
          ..._87,
          ..._368
        };
      }
      export const record = {
        ..._88
      };
    }
    export namespace metas {
      export const genesis = {
        ..._89
      };
      export const key = {
        ..._90
      };
      export const mappable = {
        ..._91
      };
      export namespace queries {
        export const meta = {
          ..._92,
          ..._93,
          ..._94,
          ..._369
        };
        export const metas = {
          ..._95,
          ..._96,
          ..._97,
          ..._370
        };
      }
      export const record = {
        ..._98
      };
      export namespace transactions {
        export const reveal = {
          ..._99,
          ..._100,
          ..._101,
          ..._321,
          ..._349,
          ..._392
        };
      }
    }
    export namespace orders {
      export const genesis = {
        ..._102
      };
      export const key = {
        ..._103
      };
      export const mappable = {
        ..._104
      };
      export namespace queries {
        export const order = {
          ..._105,
          ..._106,
          ..._107,
          ..._371
        };
        export const orders = {
          ..._108,
          ..._109,
          ..._110,
          ..._372
        };
      }
      export const record = {
        ..._111
      };
      export namespace transactions {
        export const cancel = {
          ..._112,
          ..._113,
          ..._114,
          ..._322,
          ..._350,
          ..._393
        };
        export const define = {
          ..._115,
          ..._116,
          ..._117,
          ..._323,
          ..._351,
          ..._394
        };
        export const deputize = {
          ..._118,
          ..._119,
          ..._120,
          ..._324,
          ..._352,
          ..._395
        };
        export const immediate = {
          ..._121,
          ..._122,
          ..._123,
          ..._325,
          ..._353,
          ..._396
        };
        export const make = {
          ..._124,
          ..._125,
          ..._126,
          ..._326,
          ..._354,
          ..._397
        };
        export const modify = {
          ..._127,
          ..._128,
          ..._129,
          ..._327,
          ..._355,
          ..._398
        };
        export const revoke = {
          ..._130,
          ..._131,
          ..._132,
          ..._328,
          ..._356,
          ..._399
        };
        export const take = {
          ..._133,
          ..._134,
          ..._135,
          ..._329,
          ..._357,
          ..._400
        };
      }
    }
    export namespace splits {
      export const genesis = {
        ..._136
      };
      export const key = {
        ..._137
      };
      export const mappable = {
        ..._138
      };
      export namespace queries {
        export const ownable = {
          ..._139,
          ..._140,
          ..._141,
          ..._373
        };
        export const split = {
          ..._142,
          ..._143,
          ..._144,
          ..._374
        };
        export const splits = {
          ..._145,
          ..._146,
          ..._147,
          ..._375
        };
      }
      export const record = {
        ..._148
      };
      export namespace transactions {
        export const send = {
          ..._149,
          ..._150,
          ..._151,
          ..._330,
          ..._358,
          ..._401
        };
        export const unwrap = {
          ..._152,
          ..._153,
          ..._154,
          ..._331,
          ..._359,
          ..._402
        };
        export const wrap = {
          ..._155,
          ..._156,
          ..._157,
          ..._332,
          ..._360,
          ..._403
        };
      }
    }
  }
  export namespace schema {
    export namespace data {
      export const base = {
        ..._158,
        ..._159,
        ..._160,
        ..._161,
        ..._162,
        ..._163,
        ..._164,
        ..._165,
        ..._166,
        ..._167
      };
    }
    export namespace documents {
      export const base = {
        ..._168
      };
    }
    export namespace ids {
      export const base = {
        ..._169,
        ..._170,
        ..._171,
        ..._172,
        ..._173,
        ..._174,
        ..._175,
        ..._176,
        ..._177,
        ..._178,
        ..._179,
        ..._180,
        ..._181
      };
    }
    export namespace lists {
      export const base = {
        ..._182,
        ..._183
      };
    }
    export namespace parameters {
      export const base = {
        ..._184,
        ..._185
      };
    }
    export namespace properties {
      export const base = {
        ..._186,
        ..._187,
        ..._188
      };
    }
    export namespace qualified {
      export const base = {
        ..._189,
        ..._190
      };
    }
    export namespace types {
      export const base = {
        ..._191,
        ..._192
      };
    }
  }
  export const ClientFactory = {
    ..._464,
    ..._465
  };
}