import { accessPath } from './accessPath.mjs';
import { cp } from './cp.mjs';
import { rm } from './rm.mjs';

export const mv = async (args) => {
  const file = args[0];
  const newFilePath = args[1];
  if (!file || !newFilePath) {
    process.stdout.write('Invalid input\n');
    return;
  }
  const fileExistsStatus = await accessPath(file);
  const pathExistsStatus = await accessPath(newFilePath);
  if (!fileExistsStatus || !pathExistsStatus) {
    process.stdout.write('Operation failed\n');
    return;
  }
  await cp([file, newFilePath]);
  await rm([file]);
};
