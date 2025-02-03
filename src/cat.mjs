import fs from 'fs';
import { accessPath } from './accessPath.mjs';

export const cat = async (args) => {
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
  const readable = fs.createReadStream(file, { encoding: 'utf8' });
  for await (const chunk of readable) {
    process.stdout.write(chunk);
  }
  process.stdout.write('\n');
};
