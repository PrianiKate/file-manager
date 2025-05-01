import path from 'path';

export const up = () => {
  const currentDir = process.cwd();
  const newDir = currentDir.slice(0, currentDir.lastIndexOf(path.sep));
  process.chdir(newDir || path.sep);
};
