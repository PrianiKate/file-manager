import { accessPath } from './accessPath.mjs';

export const cd = async (args) => {
  const path = args[0];
  if (!path) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const pathExistsStatus = await accessPath(path);
  const absolutePathExistsStatus = await accessPath(path, true);
  if (!pathExistsStatus && !absolutePathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  process.chdir(path);
};
