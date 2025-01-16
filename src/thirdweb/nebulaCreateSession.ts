import { client } from "./thirdwebClient.js";
import { account } from "../utils/createAccountFromPrivateKey.js";
import { abstractTestnet } from "thirdweb/chains";

type NebulaCreateSessionInput = {
    title: string;
};

type ExecuteConfig = {
    mode: 'client';
    signer_wallet_address: string;
    engine_url: string | null;
    engine_authorization_token: string | null;
    engine_backend_wallet_address: string | null;
    smart_account_address: string | null;
    smart_account_factory_address: string | null;
    smart_account_session_key: string | null;
};

type ContextFilter = {
    chain_ids: string[];
    contract_addresses: string[];
    wallet_addresses: string[];
};

type NebulaSession = {
    result: {
        id: string;
        account_id: string;
        model_name: string;
        is_public: boolean;
        execute_config: ExecuteConfig;
        title: string;
        memory: null;
        history: null;
        action: null;
        context_filter: ContextFilter;
        archive_at: string | null;
        deleted_at: string | null;
        created_at: string;
        updated_at: string;
    };
};

export default async function nebulaCreateSession(input: NebulaCreateSessionInput): Promise<NebulaSession> {
    try {
        const response = await fetch("https://nebula-api.thirdweb.com/session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-secret-key": client.secretKey!,
            },
            body: JSON.stringify({
                title: input.title,
                execute_config: {
                    mode: "client",
                    signer_wallet_address: account.address,
                },
                context_filter: {
                    chain_ids: [abstractTestnet.id.toString()],
                    contract_addresses: [],
                    wallet_addresses: [],
                }
            }),
        });

        if (!response.ok) {
            const errorBody = await response.text();
            console.error('Response body:', errorBody);
            throw new Error(`HTTP error! status: ${response.status}, body: ${errorBody}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
} 