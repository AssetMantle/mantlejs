const keys = require("../../utilities/keys");
const broadcast = require("../../utilities/broadcastTx");
const config = require("../../config.json")
const request = require('request');
const persistenceClass = require('../../utilities/persistenceJS')

class deputizeMaintainer extends persistenceClass {
    async deputize(address, chain_id, mnemonic, identityID, clsID, toID, maintainedTraits, addMaintainer, removeMaintainer, mutateMaintainer, feesAmount, feesToken, gas, mode, memo = "") {
        const wallet = keys.getWallet(mnemonic);
    
        let options = {
            'method': 'POST',
            'url': this.path + config.deputizeMaintainerType,
            'headers': {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "type":config.deputizeMaintainerType + "/request",
                "value":{
                    "baseReq":{"from":address,"chain_id":chain_id,"memo":memo},
                    "toID": toID,
                    "classificationID": clsID,
                    "fromID": identityID,
                    "maintainedTraits":maintainedTraits,
                    "addMaintainer": addMaintainer,
                    "removeMaintainer": removeMaintainer,
                    "mutateMaintainer": mutateMaintainer
                }
            })
        };
        return new Promise(function(resolve, reject) {
            request(options, function (error, response) {
                if (error) throw new Error(error);
    
                let result = JSON.parse(response.body)
    
                let tx = {
                    msg: result.value.msg,
                    fee: {amount: [{amount: String(feesAmount), denom: feesToken}], gas: String(gas)},
                    signatures:null,
                    memo:result.value.memo
                }
                resolve(broadcast.broadcastTx(wallet, tx, chain_id, mode));
            });
        });
    }
}
module.exports = {
    deputizeMaintainer
};
