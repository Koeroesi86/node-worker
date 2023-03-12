const { spawn: originalSpawn, ChildProcess } = jest.requireActual('child_process');

type Spawn = typeof originalSpawn;

export const spawn = jest.fn<ReturnType<Spawn>, Parameters<Spawn>>(() => new ChildProcess());
