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



## Usage

```js
// In Node.js
const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');
console.log(web3);
// Output
{
    eth: ... ,
    shh: ... ,
    utils: ...,
    ...
}
```



