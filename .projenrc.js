const { TypescriptApplicationProject } = require('@gplassard/projen-extensions');

const project = new TypescriptApplicationProject({
    name: 'cdk-discord-bot-app',
});
project.synth();