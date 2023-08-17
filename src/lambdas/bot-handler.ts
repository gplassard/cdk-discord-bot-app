import { BotHandler } from '@gplassard/cdk-discord-bot-construct';
import { ALL_COMMANDS } from '../commands';

const botHandler = new BotHandler({
  commands: ALL_COMMANDS,
});
export const handler = botHandler.handler();
