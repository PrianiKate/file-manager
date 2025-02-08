import fs from 'fs';
import { accessPath } from './accessPath.mjs';
import path from 'path';

export const cp = async (args) => {
  const file = args[0];
  const newFilePath = args[1];
  if (!file || !newFilePath) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const fileExistsStatus = await accessPath(file);
  const pathExistsStatus = await accessPath(newFilePath);
  if (!fileExistsStatus || !pathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  const readable = fs.createReadStream(file, { encoding: 'utf8' });
  const fileName = path.basename(file);
  const copiedFilePath = path.join(newFilePath, fileName);
  const writable = fs.createWriteStream(copiedFilePath, { encoding: 'utf8' });
  readable.pipe(writable);
};
