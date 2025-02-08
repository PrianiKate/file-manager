import { parseUsernameArg } from './src/args.mjs';
import os from 'os';
import * as commands from './src/index.mjs';

const startApp = async () => {
  const userName = parseUsernameArg();
  process.stdout.write(`Welcome to the File Manager, ${userName}!\n`);
  const homedir = os.homedir();
  process.chdir(homedir);

  const showWorkingDirectory = () => {
    process.stdout.write(`You are currently in ${process.cwd()}\n`);
  };

  const onExit = () => {
    process.stdout.write(`Thank you for using File Manager, ${userName}, goodbye!\n`);
    process.exit(0);
  };

  showWorkingDirectory();

  process.stdin.on('data', async (data) => {
    const parsedData = data.toString().trim().split(' ');
    const command = parsedData?.[0];
    const args = parsedData.slice(1);
    if (commands[command]) {
      await commands[command](args);
    } else if (command === '.exit') {
      onExit();
    } else {
      process.stdout.write('Invalid input\n');
    }
    showWorkingDirectory();
  });

  process.on('SIGINT', onExit);
};

await startApp();
