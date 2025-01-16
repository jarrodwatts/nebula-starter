export function checkEnvironmentVariables() {
    const requiredEnvVars = {
        THIRDWEB_CLIENT_ID: "Go to https://thirdweb.com/dashboard and create a new API key.",
        THIRDWEB_SECRET_KEY: "Go to https://thirdweb.com/dashboard and create a new secret key.",
        PRIVATE_KEY: "To execute transactions from a wallet, add the wallet's private key to the .env file.",
    };

    for (const [varName, additionalInfo] of Object.entries(requiredEnvVars)) {
        if (!process.env[varName]) {
            const message = `🚨 ${varName} is not set in the .env file.${additionalInfo ? `\n            ${additionalInfo}` : ""}\nSee the README or the .env.example file for more information.`;
            throw new Error(message);
        }
    }

    console.log("Environment variables are set correctly");
} 