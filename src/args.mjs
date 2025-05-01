export const parseUsernameArg = () => {
  const args = process.argv.slice(2);
  const userNameArgStr = args.find(arg => arg.startsWith('--username='));
  const userName = userNameArgStr?.split('=')[1] ?? '';

  return userName;
};
