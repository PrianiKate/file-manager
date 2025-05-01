import fs from 'fs';
import { accessPath } from './accessPath.mjs';
import path from 'path';

export const rn = async (args) => {
  const file = args[0];
  const newFileName = args[1];
  if (!file || !newFileName) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const fileExistsStatus = await accessPath(file);
  if (!fileExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  const oldPath = path.join(process.cwd(), file);
  const newPath = path.join(path.dirname(oldPath), newFileName);
  fs.rename(oldPath, newPath, (err) => {
    if (err) {
      process.stdout.write('Operation failed\n');
    }
  });
};
