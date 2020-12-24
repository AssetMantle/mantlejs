const config = require("../../config.json")
const request = require('request');
const Promise = require('promise');
const persistenceClass = require('../../utilities/persistenceJS')

class queryOrders extends persistenceClass {
    async queryOrder() {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryOrderPath,
            'headers': {}
        };

        return new Promise(function (resolve, reject) {
            request(options, async function (error, res) {
                if (error) {
                    reject(error);
                }
                let result = JSON.parse(res.body)
                let list = result.result.list
                resolve(list)
            });
        }).catch(function (error) {
            console.log("Promise Rejected: " + error);
        });
    }

    async queryOrderWithID(id) {
        let path = this.path

        let options = {
            'method': 'GET',
            'url': path + config.queryOrderWithID + id,
            'headers': {}
        };
        return new Promise(function (resolve, reject) {
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

module.exports = queryOrders