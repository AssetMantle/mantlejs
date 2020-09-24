const keys = require("../../utilities/keys");
const helpers = require("../../helpers/index")
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
var request = require('request');

function unwrap(mnemonic, fromID, ownableID, split, feesAmount, feesToken, gas, mode, memo = "") {
    const wallet = keys.getWallet(mnemonic);
    console.log(JSON.stringify(options))
    console.log(fromID)
    var options = {
        'method': 'POST',
        'url': config.lcdURL + config.unwrapType,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"type":"/xprt/splits/unwrap/request","value":{"baseReq":{"from":config.testAccountAddress,"chain_id":config.chain_id},fromID:fromID,ownableID:ownableID,split:split}})
    };

    console.log(JSON.stringify(options))
    return new Promise(function(resolve, reject) {
        request(options, function (error, response) {
            if (error) throw new Error(error);

            var result = JSON.parse(response.body)

            let tx = {
                msg: result.value.msg,
                fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                signatures:null,
                memo:""
            }
            resolve(broadcast.broadcastTx(wallet, tx, mode));
        });
    });
}

module.exports = {
    unwrap
};
