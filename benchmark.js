import autocannon, { track } from "autocannon";

const args = process.argv.slice(2);
const serverRuntime = args[0];
const serverName = args[1];
const port = args[2] || 3000;

const url = `http://localhost:${port}`;
const runBenchmark = async () => {
  const instance = autocannon({
    url,
    connections: 500, // Number of concurrent connections
    duration: 10, // Duration of the test in seconds
    // You can add more options here
  });

  instance.on("response", (client, res, time) => {
    // console.log(`Response received: ${res.statusCode} in ${time} ms`);
  });

  instance.on("done", (result) => {
    console.log(`${serverRuntime} Benchmark results for ${serverName}:`);
    // console.log(result);
  });

  // Start the benchmark
  track(instance);
};

runBenchmark().catch((err) => {
  console.error("Error running benchmark:", err);
});
