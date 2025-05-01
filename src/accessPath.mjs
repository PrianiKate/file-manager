import fs from 'fs';
import path from 'path';

export const accessPath = (userPath, isAbsolute = false) => {
  return new Promise((resolve, _) => {
    const PATH = isAbsolute ? userPath : path.resolve(process.cwd(), userPath);
    fs.access(PATH, (err, _) => {
      if (err === null) {
        resolve(true);
      } else {
        resolve();
      }
    });
  });
}
