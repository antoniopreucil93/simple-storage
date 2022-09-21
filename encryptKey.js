// http://127.0.0.1:7545
const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

(async function () {
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD,
    process.env.PRIVATE_KEY
  );
  fs.writeFileSync("./encryptedKey.json", encryptedJsonKey);
})();
