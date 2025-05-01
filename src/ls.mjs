import fs from 'fs';

export const ls = async () => {
  fs.readdir(process.cwd(), { withFileTypes: true }, (err, fileList) => {
    if (err) {
      process.stdout.write('Operation failed\n');
      return;
    }

    const directories = fileList.filter(dir => dir.isDirectory()).map(dir => dir.name);
    directories.sort();
    const files = fileList.filter(file => !file.isDirectory()).map(file => file.name);
    files.sort();

    const resultData = [
      ...directories.map(dir => ({ Name: dir, Type: 'directory' })),
      ...files.map(file => ({ Name: file, Type: 'file' }))
    ];

    console.table(resultData);
  });
};
