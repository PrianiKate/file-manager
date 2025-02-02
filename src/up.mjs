export const up = () => {
  const currentDir = process.cwd();
  const newDir = currentDir.slice(0, currentDir.lastIndexOf('/'));
  process.chdir(newDir || '/');
};
