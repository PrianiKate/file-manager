import { accessPath } from './accessPath.mjs';

export const cd = async (args) => {
  let path = args[0];
  if (!path) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const currentDir = process.cwd();
  if (!path.startsWith(currentDir)) {
    path = `${currentDir}${path}`;
  }
  const pathExistsStatus = await accessPath(path, true);
  if (!pathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  process.chdir(path);
};
