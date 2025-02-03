import { accessPath } from './accessPath.mjs';
import path from 'path';

export const cd = async (args) => {
  let folder = args[0];
  if (!folder) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const currentDir = process.cwd();
  if (!folder.startsWith(currentDir)) {
    folder = path.join(currentDir, folder);
  }
  const pathExistsStatus = await accessPath(folder, true);
  if (!pathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  process.chdir(folder);
};
