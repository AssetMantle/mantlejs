import { AssetID, AssetIDAmino, AssetIDSDKType } from "./asset_id";
import { ClassificationID, ClassificationIDAmino, ClassificationIDSDKType } from "./classification_id";
import { DataID, DataIDAmino, DataIDSDKType } from "./data_id";
import { HashID, HashIDAmino, HashIDSDKType } from "./hash_id";
import { IdentityID, IdentityIDAmino, IdentityIDSDKType } from "./identity_id";
import { MaintainerID, MaintainerIDAmino, MaintainerIDSDKType } from "./maintainer_id";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order_id";
import { PropertyID, PropertyIDAmino, PropertyIDSDKType } from "./property_id";
import { SplitID, SplitIDAmino, SplitIDSDKType } from "./split_id";
import { StringID, StringIDAmino, StringIDSDKType } from "./string_id";
import * as _m0 from "protobufjs/minimal";
export interface AnyID {
    assetID?: AssetID;
    classificationID?: ClassificationID;
    dataID?: DataID;
    hashID?: HashID;
    identityID?: IdentityID;
    maintainerID?: MaintainerID;
    orderID?: OrderID;
    propertyID?: PropertyID;
    splitID?: SplitID;
    stringID?: StringID;
}
export interface AnyIDProtoMsg {
    typeUrl: "/assetmantle.schema.ids.base.AnyID";
    value: Uint8Array;
}
export interface AnyIDAmino {
    asset_i_d?: AssetIDAmino;
    classification_i_d?: ClassificationIDAmino;
    data_i_d?: DataIDAmino;
    hash_i_d?: HashIDAmino;
    identity_i_d?: IdentityIDAmino;
    maintainer_i_d?: MaintainerIDAmino;
    order_i_d?: OrderIDAmino;
    property_i_d?: PropertyIDAmino;
    split_i_d?: SplitIDAmino;
    string_i_d?: StringIDAmino;
}
export interface AnyIDAminoMsg {
    type: "/assetmantle.schema.ids.base.AnyID";
    value: AnyIDAmino;
}
export interface AnyIDSDKType {
    asset_i_d?: AssetIDSDKType;
    classification_i_d?: ClassificationIDSDKType;
    data_i_d?: DataIDSDKType;
    hash_i_d?: HashIDSDKType;
    identity_i_d?: IdentityIDSDKType;
    maintainer_i_d?: MaintainerIDSDKType;
    order_i_d?: OrderIDSDKType;
    property_i_d?: PropertyIDSDKType;
    split_i_d?: SplitIDSDKType;
    string_i_d?: StringIDSDKType;
}
export declare const AnyID: {
    encode(message: AnyID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AnyID;
    fromJSON(object: any): AnyID;
    toJSON(message: AnyID): unknown;
    fromPartial(object: Partial<AnyID>): AnyID;
    fromAmino(object: AnyIDAmino): AnyID;
    toAmino(message: AnyID): AnyIDAmino;
    fromAminoMsg(object: AnyIDAminoMsg): AnyID;
    fromProtoMsg(message: AnyIDProtoMsg): AnyID;
    toProto(message: AnyID): Uint8Array;
    toProtoMsg(message: AnyID): AnyIDProtoMsg;
};
