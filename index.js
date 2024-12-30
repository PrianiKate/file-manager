import { parseUsernameArg } from './src/args.mjs';

const startApp = async () => {
  const userName = parseUsernameArg();
  console.log(`Welcome to the File Manager, ${userName}!`);
  console.log(`You are currently in ${process.cwd()}\n`);

  const onExit = () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit(0);
  };

  process.on('SIGINT', onExit);
};

await startApp();
