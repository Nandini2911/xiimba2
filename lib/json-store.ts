import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join } from 'path';

const seedDataDirectory = join(process.cwd(), 'data');
const dataDirectory = process.env.VERCEL
  ? join(tmpdir(), 'xiimba2-data')
  : seedDataDirectory;

export const readJsonFile = <T>(fileName: string, fallback: T): T => {
  const filePath = join(dataDirectory, fileName);

  if (!existsSync(filePath)) {
    const seedFilePath = join(seedDataDirectory, fileName);
    const initialData = existsSync(seedFilePath)
      ? JSON.parse(readFileSync(seedFilePath, 'utf8')) as T
      : fallback;

    writeJsonFile(fileName, initialData);
    return initialData;
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
