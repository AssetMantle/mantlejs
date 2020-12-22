const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class makeOrder extends persistenceClass {
    async make(address, chain_id, mnemonic, fromID, classificationID, makerOwnableID, takerOwnableID, expiresIn, makerOwnableSplit, mutableProperties, immutableProperties, mutableMetaProperties, immutableMetaProperties, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
        let path = this.path

        let options = {
            'method': 'POST',
            'url': path + config.makeOrderPath,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type":config.makeOrderType,
                "value":{
                    "baseReq":{"from":address,
                        "chain_id":chain_id,
                        "memo":memo,
                        "fees": [{"amount": String(feesAmount), "denom": feesToken}],
                        "gas": String(gas)},
                    "fromID":fromID,
                    "classificationID":classificationID,
                    "makerOwnableID":makerOwnableID,
                    "takerOwnableID":takerOwnableID,
                    "expiresIn":expiresIn,
                    "makerOwnableSplit":makerOwnableSplit,
                    "mutableProperties":mutableProperties,
                    "immutableProperties":immutableProperties,
                    "mutableMetaProperties":mutableMetaProperties,
                    "immutableMetaProperties":immutableMetaProperties
                }
            })
        };
    
        return new Promise(function(resolve, reject) {
            request(options, function (error, response) {
                if (error) {
                    reject(error);
                }
                let result = JSON.parse(response.body)
                resolve(broadcast.broadcastTx(path, wallet, result.value, chain_id, mode));
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}

module.exports = makeOrder
