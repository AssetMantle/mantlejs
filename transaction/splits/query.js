const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class querySplits extends persistenceClass {
    async  querySplitsWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.querySplitWithID + id,
            'headers': {
            }
        };
        return new Promise(function(resolve, reject) {
            request(options, async function (error, res) {
                if (error) {
                    reject(error);
                }
                resolve(res.body)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
            return(error)
        });
    }
}

module.exports = querySplits
