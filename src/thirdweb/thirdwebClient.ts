import { createThirdwebClient } from "thirdweb";

export const thirdwebClient = createThirdwebClient({
    clientId: process.env.THIRDWEB_CLIENT_ID!,
    secretKey: process.env.THIRDWEB_SECRET_KEY!,
});