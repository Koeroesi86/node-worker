import Worker from './Worker';
import { spawn } from 'child_process';

jest.mock('child_process');
const mockedSpawn = jest.mocked(spawn);

describe('Worker', () => {
  it('should spawn process', async () => {
    const worker = new Worker('ls', { stdio: 'inherit' });
    expect(mockedSpawn).toHaveBeenCalled();
  });
});
