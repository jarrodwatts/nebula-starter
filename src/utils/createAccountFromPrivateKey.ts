import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "../thirdweb/thirdwebClient.js";

export const account = privateKeyToAccount({
    client: client,
    privateKey: process.env.PRIVATE_KEY!
});
