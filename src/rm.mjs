import fs from 'fs';
import { accessPath } from './accessPath.mjs';
import path from 'path';

export const rm = async (args) => {
  const file = args[0];
  if (!file) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const fileExistsStatus = await accessPath(file);
  if (!fileExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  fs.rm(path.join(process.cwd(), file), (err) => {
    if (err) {
      process.stdout.write('Operation failed\n');
    }
  });
};
