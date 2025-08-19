# Node.js vs Bun Server Framework Benchmark Comparison

🌐 **Test Setup**: 500 connections, 10s duration, sampled every second

## Core Framework Benchmarks

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
| **Elysia**     | Node    | 78.96 ms    | 648 ms      | 6,338       | 64k (10.1 MB)  | ↑          |
|                | Bun     | 18.9 ms     | 175 ms      | 26,306      | 264k (33.4 MB) | 🚀🚀       |
| **Node HTTP**  | Node    | 27.93 ms    | 606 ms      | 17,681      | 177k (31.5 MB) | 🚀         |
| **Bun Server** | Bun     | 16.66 ms    | 500 ms      | 29,283      | 293k (37.5 MB) | 🚀⚡       |

## JS Framework Benchmarks (Node Only)

| Framework     | Avg Latency | Max Latency | Avg Req/Sec | Total Requests | Throughput | Notes          |
| ------------- | ----------- | ----------- | ----------- | -------------- | ---------- | -------------- |
| **Next.js**   | 216.24 ms   | 1216 ms     | 2,297       | 23k (4.55 MB)  | ↓↓         | High variance  |
| **Nuxt.js**   | 2733 ms     | 4503 ms     | 264         | 6k (393 kB)    | 🐢⚠️       | Severe latency |
| **Remix**     | 0 ms\*      | 0 ms\*      | 0           | 9k (0 B)\*     | ❌         | Configuration? |
| **SolidJS**   | 1179 ms     | 2380 ms     | 407         | 5k (789 kB)    | ↓↓         | Unstable       |
| **SvelteKit** | 0 ms\*      | 0 ms\*      | 0           | 9k (0 B)\*     | ❌         | Setup issues?  |

## Key Performance Indicators

**Latency Champion** 🏆: Bun Server (16.66ms avg)  
**Throughput King** 👑: Bun Server (29,283 req/sec)  
**Most Consistent** ⚡: Bun Elysia (3.34 MB/sec sustained)  
**Biggest Improvement** 📈: Express (5.14x faster in Bun)  
**Slowest Framework** ⚠️: Nuxt.js (2.7s avg latency)

## Comparison Visualization

**Requests per Second (Core Frameworks)**

```bash
Bun Server    █████████████████████████▌ 29,283
Bun Hono      ███████████████████▌ 26,761
Bun Elysia    ███████████████████ 26,306
Bun H3        ████████████████ 19,243
Node HTTP     █████████████▌ 17,681
Bun Express   ████████████▌ 17,030
Node H3       ███████████ 15,125
Bun Fastify   ████████ 10,217
Node Hono     ███████▌ 9,475
Node Fastify  ██████▌ 8,356
Node Elysia   █████▌ 6,338
Node Express  ███▌ 3,311
```

**JS Framework Performance (Node)**

> These frameworks (notabely remix and sveltekit) might have not performed well due to vite. Testing same framework with node and bun were resulting same output, so bun's performance isn't included

```bash
Next.js       ██▌ 2,297
SolidJS       █ 407
Nuxt.js       ▌ 264
Remix         ❌ 0
SvelteKit     ❌ 0
```

**Latency Distribution**
| Framework | 2.5% | 50% | 97.5% |
| ---------------- | ---- | ---- | ----- |
| **Bun Server** | 14ms | 15ms | 24ms |
| **Bun Hono** | 14ms | 16ms | 30ms |
| **Bun Elysia** | 11ms | 16ms | 40ms |
| **Bun H3** | 17ms | 22ms | 42ms |
| **Node HTTP** | 17ms | 25ms | 48ms |
| **Node Elysia** | 41ms | 61ms | 194ms |
| **Next.js** | 3ms | 197ms| 881ms |
| **Nuxt.js** | 995ms| 2.8s | 3.8s |
| **SolidJS** | 684ms| 1s | 2.3s |

## Analysis Takeaways

1. **Bun Dominance**: Bun outperforms Node in all comparable frameworks (3-5x faster)
2. **JS Framework Struggles**: Full-stack frameworks show significantly worse performance:
   - Next.js: 10x slower than Node HTTP
   - Nuxt.js: 100x slower than Bun Server
3. **Configuration Issues**: Remix/SvelteKit tests likely misconfigured (0 successful responses)
4. **Latency Variance**: Next.js shows high latency spikes (1216ms max vs 216ms avg)
5. **Throughput Limits**: Even best JS framework (Next.js) only manages 2.3k RPS vs 29k RPS for Bun
6. **Memory Efficiency**: Bun handles 37.5MB throughput vs Next.js' 4.55MB (8x more efficient)

## Recommendations

- For API endpoints: Prefer Bun with Hono/Server
- For full-stack apps: Consider edge deployments for JS frameworks
- Use native HTTP servers for high-load scenarios
