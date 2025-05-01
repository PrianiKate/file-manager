import fs from 'fs';
import path from 'path';

export const mkdir = async (args) => {
  const folder = args[0];
  if (!folder) {
    process.stdout.write('Invalid input\n');
    return;
  }
  fs.mkdir(path.join(process.cwd(), folder),
    (err) => {
      if (err) {
        process.stdout.write('Operation failed\n');
      }
    });
};
