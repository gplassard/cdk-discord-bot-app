import { CommandContext, SlashCommand, SlashCreator } from 'slash-create';

export class HelloCommand extends SlashCommand {
  constructor(creator: SlashCreator) {
    super(creator, {
      name: 'hello',
      description: 'says hello',
    });
  }

  async run(ctx: CommandContext): Promise<any> {
    console.log('Hello command', ctx);
    const data = ctx.data;
    if ('user' in data) {
      return `Hello user ${data.user.global_name} !`;
    } else {
      return `Hello member ${data.member.user.global_name} !`;
    }
  }
}
