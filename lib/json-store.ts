import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';

const dataDirectory = join(process.cwd(), 'data');

export const readJsonFile = <T>(fileName: string, fallback: T): T => {
  const filePath = join(dataDirectory, fileName);

  if (!existsSync(filePath)) {
    writeJsonFile(fileName, fallback);
    return fallback;
  }

  try {
    return JSON.parse(readFileSync(filePath, 'utf8')) as T;
  } catch {
    return fallback;
  }
};

export const writeJsonFile = <T>(fileName: string, data: T) => {
  const filePath = join(dataDirectory, fileName);
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, JSON.stringify(data, null, 2));
};
