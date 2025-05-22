const { createServer } = require('node:http');
const { exec } = require('node:child_process');

const hostname = '127.0.0.1';
const port = 3000;

const solverPath = process.env.SOLVER_PATH_EXE;
console.log(solverPath);

exec(`${solverPath} -i resources/text/commandline_sample_input.txt `, (error: string, stdout: string, stderr: string) => {
    // once the command has completed, the callback function is called
    if (error) {
        // log and return if we encounter an error
        console.error("could not execute command: ", error)
        return
    }
    // log the output received from the command
    console.log(stdout)
});

const server = createServer((req: any, res: any) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});