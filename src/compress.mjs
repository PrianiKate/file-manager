import { accessPath } from './accessPath.mjs';
import { createBrotliCompress } from 'zlib';
import fs from 'fs';

export const compress = async (args) => {
  const file = args[0];
  const destinationFile = args[1];
  if (!file || !destinationFile) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const fileExistsStatus = await accessPath(file);
  const destinationPath = destinationFile.slice(0, destinationFile.lastIndexOf('/'));
  const destinationPathExistsStatus = await accessPath(destinationPath);
  if (!fileExistsStatus || !destinationPathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }

  const brotli = createBrotliCompress();
  const source = fs.createReadStream(file);
  const destination = fs.createWriteStream(destinationFile);

  source.pipe(brotli).pipe(destination);
};
