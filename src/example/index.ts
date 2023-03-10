import path from 'path';
import Worker from '../Worker';

const worker = new Worker(
  `yarn ts-node ${path.resolve(__dirname, './script.ts')}`,
  { stdio: 'inherit' }
);

process.once('exit', () => {
  worker.terminate();
});
