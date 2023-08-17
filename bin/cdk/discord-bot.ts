import { DiscordBot } from "@gplassard/cdk-discord-bot-construct";
import { App, CfnParameter, SecretValue, Stack } from "aws-cdk-lib";
import path from "path";

const app = new App();
const stack = new Stack(app, 'DiscordBot', {
    stackName: 'discord-bot',
    tags: {
        app: 'discord-bot',
        isInfraAsCode: 'cdk',
    }
});
const discordAppId = new CfnParameter(stack, 'DiscordAppId', { noEcho: true });
const discordPublicKey = new CfnParameter(stack, 'DiscordPublicKey', { noEcho: true });
const discordBotToken = new CfnParameter(stack, 'DiscordBotToken', { noEcho: true });

new DiscordBot(stack, 'DiscordBot', {
    name: 'discord-bot',
    handler: {
        entry: path.join(__dirname, '../../src/lambdas/bot-handler.ts')
    },
    syncer: {
        entry: path.join(__dirname, '../../src/lambdas/bot-handler.ts')
    },
    credentials: {
        botAppId: discordAppId.valueAsString,
        botPublicKey: discordPublicKey.valueAsString,
        botToken: SecretValue.cfnParameter(discordBotToken),
    }
})

app.synth();
