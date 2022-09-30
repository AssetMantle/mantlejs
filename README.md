
<p style="text-align: center;">
  <img src="https://docs.assetmantle.one/assets/images/Mediakit/png/Horizontal_Dark.png" width="200" alt="AssetMantle">
</p>

<div align="center">
  <h1>MantleJS</h1>

[![License: Apache-2.0](https://img.shields.io/github/license/assetmantle/modules.svg)](https://github.com/assetmantle/modules/blob/main/LICENSE)
[![Lines Of Code](https://img.shields.io/tokei/lines/github/assetmantle/javascriptClient)](https://github.com/assetmantle/javascriptClient)
[![Version](https://img.shields.io/github/tag/assetmantle/javascriptClient.svg?cacheSeconds=3600)](https://github.com/assetmantle/javascriptClient/latest)

</div>

Client side JS libraries for AssetMantle SDK transaction generation, signing and broadcasting.

## Contributing

If you want to contribute to MantleJS, please read the instructions in [CODING_GUIDELINES.md](CODING_GUIDELINES.md).

<div align="center">

[![Discord](https://dcbadge.vercel.app/api/server/8tSZ2NPSnS)](https://discord.gg/8tSZ2NPSnS)
[![Twitter](https://img.shields.io/twitter/follow/AssetMantle?color=blue&label=Twitter&style=for-the-badge&cacheSeconds=3600&logo=twitter)](https://twitter.com/AssetMantle)
[![Reddit](https://img.shields.io/reddit/subreddit-subscribers/AssetMantle?style=for-the-badge&cacheSeconds=3600&logo=reddit&label=Reddit%20r/assetmantle&logoColor=white)](https://www.reddit.com/r/AssetMantle/)
[![Twitter](https://img.shields.io/youtube/channel/subscribers/UCQkov-0kol99KGMxyXc-a6Q?label=YouTube&cacheSeconds=3600&logoColor=red&style=for-the-badge&logo=YouTube)](https://twitter.com/AssetMantle)

</div>

<div align="center">
    <div style="display:flex; justify-content:space-around;">
        <h3 style="margin:-5px 10px 5px;">Contributors</h3>
        <hr align="left" width="20%">
    </div>
    <img src="https://contrib.rocks/image?repo=assetmantle/javascriptClient&columns=80" style="width:1000;"/>
</div>

## Installation

### Node

```bash
npm install mantlejs
```

### Yarn

```bash
yarn add mantlejs
```



## Example Usage

```js
import {queryIdentities} from "mantlejs/build/transaction/identity/query";

// get the queryIdentities controller object to perform the query
const queryIdentitiesControllerObj = new queryIdentities(process.env.REACT_APP_ASSET_MANTLE_API);

const handleSubmit = async event => {
        event.preventDefault();
        const IdentityName = event.target.identityname.value;
        // create double hash
        const hashGenerate = GetMetaHelper.Hash(GetMetaHelper.Hash(IdentityName));
        // build identityID using nub classificationID and the generated hash
        const identityID = config.nubClassificationID+'|'+hashGenerate;
        // query identities in the chain associated with the particular identityID
        const identitiesPromise = queryIdentitiesControllerObj.queryIdentityWithID(identityID);
}

```

## API List
<p>The list of critical JS API endpoints which acts as the interface to the AssetMantle SDK, used for rapid Javascript based DApp prototyping</p>

### transaction / identity
<p> APIs pertaining to manipulating the 'identity', a DID based entity used to represent identity of user. </p>

#### <ins>defineIdentity.define</ins>
<p>used to define an identity entity. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`define: (address: string, chain_id: string, mnemonic: string, fromID: string, mutableTraits: string, immutableTraits: any, mutableMetaTraits: any, immutableMetaTraits: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;`
<p>---------------</p>


#### <ins>defineIdentity.createIdentityDefineMsg</ins>
<p>used to define an identity entity. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createIdentityDefineMsg: (address: string, chain_id: string, fromID: string, mutableTraits: string, immutableTraits: any, mutableMetaTraits: any, immutableMetaTraits: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;`
<p>---------------</p>



#### <ins>issueIdentity.issue</ins>
<p>used to issue an identity entity. Defines a message and initiates the transaction.</p>
<p><strong>Function Signature</strong></p>

`issue: (address: string, chain_id: string, mnemonic: any, to: any, fromID: string, classificationID: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;`
<p>---------------</p>



#### <ins>issueIdentity.createIdentityIssueMsg</ins>
<p>used to issue an identity entity. Only defines and outputs a message object.</p>
<p><strong>Function Signature</strong></p>

`createIdentityIssueMsg: (address: string, chain_id: string, to: any, fromID: string, classificationID: any, mutableProperties: string, immutableProperties: any, mutableMetaProperties: any, immutableMetaProperties: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;`
<p>---------------</p>



#### <ins>nubIdentity.nub</ins>
<p>used to create a nub ID, which is the simplest but complete and valid unit of identification. Defines a message and initiates the transaction.</p>
<p><strong>Function Signature</strong></p>

`nub: (address: string, chain_id: string, mnemonic: any, nubID: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;`
<p>---------------</p>




#### <ins>nubIdentity.createIdentityNubMsg</ins>
<p>used to create a nub ID, which is the simplest but complete and valid unit of identification. Only defines and outputs a message object.</p>
<p><strong>Function Signature</strong></p>

`createIdentityNubMsg: (address: string, chain_id: string, nubID: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;`
<p>---------------</p>




#### <ins>provisionIdentity.provision</ins>
<p>used to create a provision address which is used to control / operate an identity. a nub ID, which is the simplest but complete and valid unit of identification. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`provision: (address: string, chain_id: string, mnemonic: any, identityID: any, to: any, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string) => Promise<any>;`
<p>---------------</p>




#### <ins>provisionIdentity.createIdentityProvisionMsg</ins>
<p>used to create a provision address which is used to control / operate an identity. Only defines and outputs a message object</p>
<p><strong>Function Signature</strong></p>

`createIdentityProvisionMsg: (address: string, chain_id: string, identityID: any, to: any, feesAmount: any, feesToken: any, gas: any, memo: string) => Promise<any>;`
<p>---------------</p>




#### <ins>queryIdentities.queryIdentity</ins>
<p>used to query the list of all identities. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`queryIdentity: () => Promise<any>;`
<p>---------------</p>




#### <ins>queryIdentities.queryIdentityWithID</ins>
<p>used to query the list of all identities pertaining to a certain ID argument passed. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`queryIdentityWithID: (id: any) => Promise<any>;`
<hr>

### transaction / assets
<p> APIs pertaining to manipulating the 'assets', a DID based entity used to represent NFTs. </p>

#### <ins>burnAsset.burn</ins>
<p>used to burn an Asset. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`burn: (address: string, chain_id: string, mnemonic: string, fromID: string, assetID: string, feesAmount: any, feesToken: any, gas: any, mode: any, memo: string,  ) => Promise<any>;`
<p>---------------</p>




#### <ins>burnAsset.createAssetBurnMsg</ins>
<p>used to burn an Asset. Only defines and outputs a message object</p>
<p><strong>Function Signature</strong></p>

`createAssetBurnMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    assetID: string,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>

#### <ins>defineAsset.define</ins>
<p>used to define the schema of an Asset. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`define: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    mutableTraits: string,
    immutableTraits: any,
    mutableMetaTraits: any,
    immutableMetaTraits: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>defineAsset.createAssetDefineMsg</ins>
<p>used to define the schema of an Asset. Only defines and outputs a message object</p>
<p><strong>Function Signature</strong></p>

`createAssetDefineMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    mutableTraits: string,
    immutableTraits: any,
    mutableMetaTraits: any,
    immutableMetaTraits: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>

#### <ins>mintAsset.mint</ins>
<p>used to mint an asset using the defined schema. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

` mint: (
    address: string,
    chain_id: string,
    mnemonic: any,
    toID: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>mintAsset.createAssetMintMsg</ins>
<p>used to mint an asset using the defined schema. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createAssetMintMsg: (
    address: string,
    chain_id: string,
    toID: any,
    fromID: string,
    classificationID: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>

#### <ins>mutateAsset.mutate</ins>
<p>used to change the mutable properties of an Asset. These specific properties must be already defined as mutable in the schema of asset. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`mutate: (
    address: string,
    chain_id: string,
    mnemonic: any,
    fromID: string,
    assetID: any,
    mutableProperties: string,
    mutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>mutateAsset.createAssetMutateMsg</ins>
<p>used to change the mutable properties of an Asset. These specific properties must be already defined as mutable in the schema of asset. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createAssetMutateMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    assetID: any,
    mutableProperties: string,
    mutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>


#### <ins>queryAssets.queryAsset</ins>
<p>used to change the mutable properties of an Asset. These specific properties must be already defined as mutable in the schema of asset. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`queryAsset: () => Promise<any>;`
<p>---------------</p>




#### <ins>queryAssets.queryAssetWithID</ins>
<p>used to change the mutable properties of an Asset. These specific properties must be already defined as mutable in the schema of asset. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`queryAssetWithID: (id: any) => Promise<any>;`


<hr>

### transaction / classification
<p> APIs pertaining to manipulating the Classifications or schemas of entities created </p>

#### <ins>cls.queryClassification</ins>
<p>used to query the details of all Classifications IDs. </p>
<p><strong>Function Signature</strong></p>

`queryClassification: () => Promise<any>;`
<p>---------------</p>




#### <ins>cls.queryClassificationWithID</ins>
<p>used to query the details of Classification IDs pertaining to the ID argument provided in the function</p>
<p><strong>Function Signature</strong></p>

`queryClassificationWithID: (id: any) => Promise<any>;`
<p>---------------</p>


<hr>

### transaction / maintainer
<p> APIs pertaining to managing the maintainers and access control lists of various entities </p>

#### <ins>deputizeMaintainer.deputize</ins>
<p>used to provide or revoke access controls to new maintainer roles. Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`deputize: (
    address: string,
    chain_id: string,
    mnemonic: string,
    identityID: string,
    clsID: string,
    toID: string,
    maintainedTraits: string,
    addMaintainer: any,
    removeMaintainer: any,
    mutateMaintainer: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>deputizeMaintainer.createDeputizeMsg</ins>
<p>used to provide or revoke access controls to new maintainer roles. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createDeputizeMsg: (
    address: string,
    chain_id: string,
    identityID: string,
    clsID: string,
    toID: string,
    maintainedTraits: string,
    addMaintainer: any,
    removeMaintainer: any,
    mutateMaintainer: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>



#### <ins>queryMaintainer.queryMaintainerWithID</ins>
<p>used to query the details of Classification IDs pertaining to the ID argument provided in the function</p>
<p><strong>Function Signature</strong></p>

`queryMaintainerWithID: (id: any) => Promise<any>;`


<hr>

### transaction / order
<p> APIs pertaining to manipulating the 'order', a DID based entity used to represent orders created to perform a transfer of value between 'identities' and 'assets'. </p>

#### <ins>defineOrder.define</ins>
<p>used to define a schema for an order type.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`define: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    mutableTraits: string,
    immutableTraits: any,
    mutableMetaTraits: any,
    immutableMetaTraits: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>defineOrder.createOrderDefineMsg</ins>
<p>used to define a schema for an order type. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createOrderDefineMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    mutableTraits: string,
    immutableTraits: any,
    mutableMetaTraits: any,
    immutableMetaTraits: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>

#### <ins>makeOrder.make</ins>
<p>used to issue an order pertaining to a specific classification.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`make: (
    address: string,
    chain_id: string,
    mnemonic: any,
    fromID: string,
    classificationID: any,
    makerOwnableID: string,
    takerOwnableID: string,
    expiresIn: any,
    makerOwnableSplit: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>makeOrder.createOrderMakeMsg</ins>
<p>used to issue an order pertaining to a specific classification. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createOrderMakeMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    classificationID: any,
    makerOwnableID: string,
    takerOwnableID: string,
    expiresIn: any,
    makerOwnableSplit: any,
    mutableProperties: string,
    immutableProperties: any,
    mutableMetaProperties: any,
    immutableMetaProperties: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>


#### <ins>takeOrder.take</ins>
<p>used to accept an issued order pertaining to a specific order ID.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`take: (
    address: string,
    chain_id: string,
    mnemonic: any,
    fromID: string,
    takerOwnableSplit: any,
    orderID: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>takeOrder.createOrderTakeMsg</ins>
<p>used to accept an issued order pertaining to a specific order ID. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createOrderTakeMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    takerOwnableSplit: any,
    orderID: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>


#### <ins>cancelOrder.cancel</ins>
<p>used to cancel an issued order pertaining to a specific order ID.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`cancel: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    orderID: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>cancelOrder.createOrderCancelMsg</ins>
<p>used to cancel an issued order pertaining to a specific order ID. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createOrderCancelMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    orderID: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>


#### <ins>queryOrders.queryOrder</ins>
<p>used to query for the list of all orders available </p>
<p><strong>Function Signature</strong></p>

`queryOrder: () => Promise<any>;`
<p>---------------</p>




#### <ins>queryOrders.queryOrderWithID</ins>
<p>used to query for a specifc order pertaining to an order ID </p>
<p><strong>Function Signature</strong></p>

`queryOrderWithID: (id: any) => Promise<any>;`


<hr>

### transaction / meta
<p> APIs pertaining to querying a certain meta property across the entities </p>

#### <ins>queryMeta.queryMetaWithID</ins>
<p>used to query for a meta property of entities of a certain ID </p>
<p><strong>Function Signature</strong></p>

`queryMetaWithID: (id: any) => Promise<any>;`
<p>---------------</p>




#### <ins>revealMeta.reveal</ins>
<p>used to cancel an issued order pertaining to a specific order ID.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`reveal: (
    address: string,
    chain_id: string,
    mnemonic: any,
    metaFact: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>revealMeta.createMetaRevealMsg</ins>
<p>used to cancel an issued order pertaining to a specific order ID. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createMetaRevealMsg: (
    address: string,
    chain_id: string,
    metaFact: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`

<hr>

### transaction / splits
<p> APIs pertaining to creating and manipulating fractionalizing of NFTs and their correlation with FTs </p>

#### <ins>querySplits.querySplitsWithID</ins>
<p>used to query a split (fractional NFT) using a specific ID </p>
<p><strong>Function Signature</strong></p>

`querySplitsWithID: (id: any) => Promise<any>;`
<p>---------------</p>




#### <ins>sendSplits.send</ins>
<p>used to send a split from one identity to another.  Defines a message and initiates the transaction. </p>
<p><strong>Function Signature</strong></p>

`send: (
    address: string,
    chain_id: string,
    mnemonic: string,
    fromID: string,
    toID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ) => Promise<any>;`
<p>---------------</p>




#### <ins>sendSplits.createSplitsSendMsg</ins>
<p>used to send a split from one identity to another. Only defines and outputs a message object. </p>
<p><strong>Function Signature</strong></p>

`createSplitsSendMsg: (
    address: string,
    chain_id: string,
    fromID: string,
    toID: string,
    ownableID: string,
    split: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    memo: string,
  ) => Promise<any>;`

<hr>











































