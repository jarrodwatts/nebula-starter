import "dotenv/config";
import { Nebula } from "thirdweb/ai";
import { abstractTestnet } from "thirdweb/chains";
import { checkEnvironmentVariables } from "./utils/envCheck.js";
import { thirdwebClient } from "./thirdweb/thirdwebClient.js";


async function main() {
    // Check environment variables are set.
    checkEnvironmentVariables();

    const response = await Nebula.chat({
        client: thirdwebClient,
        prompt: "What's the symbol of this contract: 0xC4822AbB9F05646A9Ce44EFa6dDcda0Bf45595AA",
        context: {
            chains: [abstractTestnet],
        },
    });

    console.log(response.message);

}

main();