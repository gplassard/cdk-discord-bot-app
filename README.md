# Cdk discord app

Simple discord bot registering a `/hello` command and deployed on AWS using AWS CDK. 
Sample app for https://github.com/gplassard/cdk-discord-bot-construct.

# Usage

## Requirements

* nodejs, yarn
* [access to github npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)
* [configure a discord bot](https://discord.com/developers/applications/)

## Commands

```bash
# first install
yarn install
# update projen managed config
yarn projen
# First deployment
yarn cdk:app deploy  --parameters DISCORD_APP_ID=<DISCORD_APP_ID> --parameters DISCORD_PUBLIC_KEY=<DISCORD_PUBLIC_KEY> --parameters DISCORD_BOT_TOKEN=<DISCORD_BOT_TOKEN>`
yarn cdk:app deploy
```

# See

* https://github.com/gplassard/cdk-discord-bot-construct
* https://slash-create.js.org
* https://aws.amazon.com/fr/cdk/
* https://github.com/gplassard/projen-extensions
* https://projen.io/
