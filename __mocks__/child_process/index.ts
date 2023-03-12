const { ChildProcess } = jest.requireActual('child_process');

export const spawn = jest.fn(() => new ChildProcess());
