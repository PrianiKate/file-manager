import fs from 'fs';
import path from 'path';

export const accessPath = (userPath) => {
  return new Promise((resolve, reject) => {
    const PATH = path.resolve(process.cwd(), userPath);
    fs.access(PATH, fs.constants.F_OK, (err) => {
      if (err) reject();
      else resolve(userPath);
    });
  });
}
