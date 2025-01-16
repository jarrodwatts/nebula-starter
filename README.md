# Onchain AI Agent with Thirdweb Nebula

Create an AI agent using thirdweb's Nebula TypeScript SDK.

The agent can query real-time blockchain data
and submit transactions using simple natural language prompts

## Prerequisites

- [Node.js](https://nodejs.org/) (I'm using v22)
- [pnpm](https://pnpm.io/) package manager

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/jarrodwatts/nebula-starter
   cd nebula-starter
   ```

2. **Set up Thirdweb credentials**
   - Go to [Thirdweb Dashboard](https://thirdweb.com/dashboard)
   - Create a project and note the client ID and secret key

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Open the `.env` file and fill in your Thirdweb credentials:

   ```
   THIRDWEB_CLIENT_ID=your_client_id_here
   THIRDWEB_SECRET_KEY=your_secret_key_here
   PRIVATE_KEY=your_evm_wallet_private_key_here
   ```

4. **Install dependencies**

   ```bash
   pnpm install
   ```

5. **Start the project**

   ```bash
   pnpm start
   ```
