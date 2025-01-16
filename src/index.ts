import "dotenv/config";
import { abstractTestnet } from "thirdweb/chains";
import nebulaRead from "./thirdweb/nebulaRead.js";
import nebulaCreateSession from "./thirdweb/nebulaCreateSession.js";
import { checkEnvironmentVariables } from "./utils/envCheck.js";

async function main() {
    checkEnvironmentVariables(); // Check if you've set all the environment variables

    // Create a new session to remember context from the chat
    const session = await nebulaCreateSession({
        title: "My session",
    })

    // Example: Read information from an NFT collection
    const result = await nebulaRead({
        prompt: "How many NFTs are there in this collection 0xC4822AbB9F05646A9Ce44EFa6dDcda0Bf45595AA",
        context: {
            chains: [abstractTestnet],
        },
        sessionId: session.result.id,
    })

    console.log(result);
}

main();