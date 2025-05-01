import fs from 'fs';

export const add = async (args) => {
  const file = args[0];
  if (!file) {
    process.stdout.write('Invalid input\n');
    return;
  }
  fs.writeFile(file, '', (err) => {
    if (err) {
      process.stdout.write('Operation failed\n');
    }
  });
};
