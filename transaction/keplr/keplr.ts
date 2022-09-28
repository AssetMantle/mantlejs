import * as config from "../../config.json";
import { AssetMantle } from "../../utilities/mantleJS";
import { getWallet } from "../../utilities/keys";
import { MsgSend } from "@cosmjs/stargate/build/codec/cosmos/bank/v1beta1/tx";

class keplr extends AssetMantle {
  createMsg = async (
    msgSendTypeUrl: string,
    keplrAddress: string,
    toAddress: string,
    amount: any,
    mnemonic: any,
    feesAmount: any,
    feesToken: any,
    gas: any,
    mode: any,
    memo: string,
  ): Promise<any> => {
    try {
      const wallet = await getWallet(mnemonic, "");
      let path = this.path;

      let options = {
        typeUrl: msgSendTypeUrl,
        value: MsgSend.fromPartial({
          fromAddress: keplrAddress,
          toAddress: toAddress,
          amount: [
            {
              denom: config.CoinDenom,
              amount: String(amount),
            },
          ],
        }),
      };
      return options;
    } catch (e) {
      console.log("Error ion keplr: ", e);
    }
  };
}

module.exports = keplr;
