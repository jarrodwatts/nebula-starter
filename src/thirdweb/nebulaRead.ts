import { Nebula } from "thirdweb/ai";
import { account } from "../utils/createAccountFromPrivateKey.js";
import { client } from "./thirdwebClient.js";

type NebulaReadInput = Omit<Nebula.Input, 'client'> & {
    client?: Nebula.Input['client'];
};

export default async function nebulaRead(input: NebulaReadInput) {
    try {
        const response = await Nebula.chat({
            ...input,
            client: input.client || client,
            account: input.account || account
        });
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}