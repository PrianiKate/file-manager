import OS from 'os';

const getEndOfLine = () => OS.EOL;

const getCpus = () => {
  const info = OS.cpus();
  const amount = info.length;
  const cpuInfo = info
    .map(({ model, speed }) => `${model}, ${(speed / 1000).toFixed(1)}GHz`)
    .join('\n');
  return `${amount}\n${cpuInfo}`;
};

const getHomeDir = () => OS.homedir();

const getUserName = () => OS.userInfo().username;

const getArchitecture = () => OS.arch();

export const os = (args) => {
  const arg = args[0];
  const validArgs = {
    '--EOL': getEndOfLine,
    '--cpus': getCpus,
    '--homedir': getHomeDir,
    '--username': getUserName,
    '--architecture': getArchitecture
  };
  if (!validArgs[arg]) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const data = validArgs[arg]();
  process.stdout.write(`${data}\n`);
};
