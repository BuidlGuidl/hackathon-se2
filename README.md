# SE-2 Hackathon site 

Built with [scaffold-eth-2](https://github.com/scaffold-eth/se-2/)

In `packages/nextks` copy `.env.example` to `.env.local` and add your credentials for Notion.

## Contents

- [Requirements](#requirements)
- [Quickstart](#Quickstart)


## Requirements

Before you begin, you need to install the following tools:
- [Node (v18 LTS)](https://nodejs.org/en/download/)
- [Yarn (v1.x)](https://classic.yarnpkg.com/en/docs/install/)
- [Git](https://git-scm.com/downloads)

## Quickstart

To get started with Scaffold-Eth 2, follow the steps below:

1. Clone this repo & install dependencies

```
git clone https://github.com/scaffold-eth/se-2.git
cd se-2
yarn install
```

2. Run a local network in the first terminal:

```
yarn chain
```

This command starts a local Ethereum network using Hardhat. The network runs on your local machine and can be used for testing and development. You can customize the network configuration in `hardhat.config.js`.

3. On a second terminal, deploy the test contract:

```
yarn deploy
```
This command deploys a test smart contract to the local network. The contract is located in `packages/hardhat/contracts` and can be modified to suit your needs. The `yarn deploy` command uses the deploy script located in `packages/hardhat/deploy` to deploy the contract to the network. You can also customize the deploy script.

4. On a third terminal, start your NextJS app:

```
yarn start
```
Visit your app on: `http://localhost:3000`. 

- Edit your frontend in `packages/nextjs/pages`
