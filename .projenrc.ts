import { TypescriptApplicationProject } from '@gplassard/projen-extensions';

const project = new TypescriptApplicationProject({
  name: 'cdk-discord-bot-app',
  deps: ['slash-create', '@gplassard/cdk-discord-bot-construct'],
  devDeps: ['aws-cdk-lib', 'constructs', 'aws-cdk', 'esbuild'],
  releaseRank: 3,
});
project.addTask('cdk:app', {
  exec: 'yarn cdk --app "ts-node ./bin/cdk/discord-bot.ts"',
  receiveArgs: true,
});
project.addGitIgnore('cdk.out');
project.eslint?.addOverride({
  files: [
    'bin/cdk/**',
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
});
project.synth();
