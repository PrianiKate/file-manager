import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const accessPath = (userPath) => {
  return new Promise((resolve, reject) => {
    const PATH = path.resolve(__dirname, userPath);
    fs.access(PATH, fs.constants.F_OK, (err) => {
      if (err) reject();
      else resolve();
    });
  });
}
