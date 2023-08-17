import { BotSyncer } from '@gplassard/cdk-discord-bot-construct';
import { ALL_COMMANDS } from '../commands';

const botSyncer = new BotSyncer({
  commands: ALL_COMMANDS,
});
export const handler = botSyncer.handler();
