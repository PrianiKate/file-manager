import fs from 'fs';
import crypto from 'crypto';
import { accessPath } from './accessPath.mjs';

export const hash = async (args) => {
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

  const hash = await new Promise((resolve, _) => {
    const hash = crypto.createHash('sha256');
    hash.once('finish', () => resolve(hash.read().toString('hex')));
    readable.pipe(hash);
  });

  process.stdout.write(`${hash}\n`);
};
