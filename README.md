# Node.js vs Bun Server Framework Benchmark Comparison

🌐 **Test Setup**: 500 connections, 10s duration, sampled every second

| Framework      | Runtime | Avg Latency | Max Latency | Avg Req/Sec | Total Requests | Throughput |
| -------------- | ------- | ----------- | ----------- | ----------- | -------------- | ---------- |
| **Express**    | Node    | 148.78 ms   | 957 ms      | 3,311       | 34k (7.91 MB)  | ↓🐢        |
|                | Bun     | 29.05 ms    | 500 ms      | 17,030      | 171k (32.7 MB) | 🚀🔥       |
| **H3**         | Node    | 32.57 ms    | 522 ms      | 15,125      | 152k (27.5 MB) | ↑          |
|                | Bun     | 25.69 ms    | 928ms       | 19,243      | 193k (26 MB)   | ↑↑         |
| **Hono**       | Node    | 52.28 ms    | 761 ms      | 9,475       | 95k (15.9 MB)  | ↑↑         |
|                | Bun     | 18.33 ms    | 503 ms      | 26,761      | 268k (32.1 MB) | 🚀🚀       |
| **Fastify**    | Node    | 59.35 ms    | 715 ms      | 8,356       | 84k (15.7 MB)  | ↑          |
|                | Bun     | 48.47 ms    | 711 ms      | 10,217      | 103k (14.3 MB) | ↑↑         |
| **Node HTTP**  | Node    | 27.93 ms    | 606 ms      | 17,681      | 177k (31.5 MB) | 🚀         |
| **Bun Server** | Bun     | 16.66 ms    | 500 ms      | 29,283      | 293k (37.5 MB) | 🚀⚡       |

## Key Performance Indicators

**Latency Champion** 🏆: Bun Server (16.66ms avg)  
**Throughput King** 👑: Bun Server (29,283 req/sec)  
**Most Consistent** ⚡: Bun Hono (3.41 MB/sec sustained)  
**Biggest Improvement** 📈: Express (5.14x faster in Bun)

## Comparison Visualization

**Requests per Second**

```bash
Bun Server    █████████████████████████▌ 29,283
Bun Hono      ███████████████████▌ 26,761
Bun H3        ████████████████ 19,243
Node HTTP     █████████████▌ 17,681
Bun Express   ████████████▌ 17,030
Node H3       ███████████ 15,125
Bun Fastify   ████████ 10,217
Node Hono     ███████▌ 9,475
Node Fastify  ██████▌ 8,356
Node Express  ███▌ 3,311
```

**Latency Distribution**

| Framework        | 2.5% | 50%  | 97.5% |
| ---------------- | ---- | ---- | ----- |
| **Bun Server**   | 14ms | 15ms | 24ms  |
| **Bun Hono**     | 14ms | 16ms | 30ms  |
| **Bun H3**       | 17ms | 22ms | 42ms  |
| **Node HTTP**    | 17ms | 25ms | 48ms  |
| **Bun Express**  | 22ms | 25ms | 47ms  |
| **Node H3**      | 18ms | 28ms | 74ms  |
| **Bun Fastify**  | 26ms | 43ms | 91ms  |
| **Node Fastify** | 5ms  | 52ms | 161ms |
| **Node Hono**    | 9ms  | 33ms | 151ms |
| **Node Express** | 2ms  | 45ms | 561ms |

## Analysis Takeaways

1. Bun shows remarkable performance gains (3-5x) for Express framework
2. Native solutions (Node HTTP/Bun Server) outperform frameworks
3. Hono demonstrates excellent Bun compatibility with 2.8x speed boost
4. Fastify shows smallest runtime difference between Node/Bun
5. H3 also shows small runtime difference between Node/Bun
6. Bun Server achieves lowest latency + highest throughput combo
