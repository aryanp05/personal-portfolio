import b1ws1 from "../../assets/bitgo/b1ws1.png";
import b1ws2 from "../../assets/bitgo/b1ws2.png";
import b1cpu1 from "../../assets/bitgo/b1cpu1.png";
import b1cpu2 from "../../assets/bitgo/b1cpu2.png";
import b1mem1 from "../../assets/bitgo/b1mem1.png";
import b1mem2 from "../../assets/bitgo/b1mem2.png";
import b2s1 from "../../assets/bitgo/b2s1.png";
import b2s2 from "../../assets/bitgo/b1s2.png";
import b3o1 from "../../assets/bitgo/b3o1.png";
import b3o2 from "../../assets/bitgo/b3o2.png";
import b3o3 from "../../assets/bitgo/b3o3.png";
import b4e1 from "../../assets/bitgo/b4e1.png";
import b4e2 from "../../assets/bitgo/b4e2.png";
import b4e3 from "../../assets/bitgo/b4e3.png";

export const BITGO_BLOCKS = [
  {
    title: "Consolidated Market Data Architecture",
    subtitle:
      "A foundational rewrite of BitGo’s trade market data pipeline from one WebSocket per trust/product/exchange into a consolidated per-exchange architecture.",
    tags: ["Go", "WebSockets", "Market Data", "Fanout"],
    description: [
      "Investigated and identified large websocket connection overhead, slow processing of messages, duplicate connections, and slow REDIS writing in BitGo’s market data.",
      "Redesigned the real-time market pipeline by consolidating websocket connections from one per trust-product-exchange into a consolidated, multiplexed WebSocket model.",
      "Introduced new, specialized low-latency exchange-producers to consolidate subscriptions per exchange and optimized the publishers to write faster and dedupe trust data.",
      "Refactored the MarketDataMessageParser to map a single Talos symbol to multiple Lumina product IDs, enabling one parsed update to fan out safely across related products.",
      "Rolled out the new architecture behind a feature flag with test-to-production staging, while fixing hello/ping fanout noise and consolidated path parsing bugs.",
      "Monitored the change through each environment and identified bugs and issues early on.",
    ],
    metrics: [
      { value: "3.37K → 26", label: "active Talos WebSocket connections" },
      { value: "-48%", label: "CPU usage on market data server pods" },
      { value: "-60%+", label: "pod memory usage from fewer buffers/goroutines" },
    ],
    architecture: [
      { label: "Before", value: "One stream per trust × product × exchange triplet." },
      { label: "After", value: "One stream per exchange with per-product fanout." },
      { label: "Fanout", value: "Messages partitioned by request ID hash across worker pools." },
      { label: "Rollout", value: "Feature-flagged cutover with latency parity checks." },
    ],
    images: {
      row1: [
        { src: b1ws1, label: "# of WS Connections Before" },
        { src: b1ws2, label: "# of WS Connections After" },
      ],
      row2: {
        label: "CPU of Trade-Market-Data Server",
        images: [b1cpu1, b1cpu2],
      },
      row3: {
        label: "Memory of Trade-Market-Data Server",
        images: [b1mem1, b1mem2],
      },
    },
  },
  {
    title: "Deterministic Fanout for Parallel Level 2 Order Book Processing",
    subtitle:
      "A worker-pool based fanout system that increased throughput while keeping product-level market data ordering deterministic.",
    tags: ["Concurrency", "Order Books", "Worker Pools", "Low Latency"],
    description: [
      "Engineered a deterministic fanout system to handle the larger number of messages per consolidated websocket and parallelize Level 2 order book processing across worker pools that increased market data throughput from 9.5K to 13K updates/second.",
      "Used dynamically sized worker pools to balance parallelism and overhead across exchanges and used specialized request ID processing and hashing to ensure deterministic worker allocation to eliminate contention.",
      "Separated parsing, routing, and publishing responsibilities so each exchange feed could fan out messages to interested trusts without duplicating upstream WebSocket subscriptions.",
    ],
    metrics: [
      { value: "9.5K → 13K", label: "market data updates per second" },
      { value: "Hash-based", label: "deterministic product partitioning" },
      { value: "Zero contention", label: "parallel order book processing path" },
    ],
    architecture: [
      { label: "Partitioning", value: "Request IDs hash to stable fanout workers." },
      { label: "Publisher model", value: "Level2ExchangePublisher handles product-exchange publishing." },
      { label: "Safety", value: "Product-level ordering remains stable while throughput scales." },
      { label: "Latency", value: "Receive and publish histograms used to validate parity." },
    ],
    images: {
      row2: { label: "Market Data Updates Per Second", image: b2s1 },
      row3: { label: "Receives & Publishes Per Second", image: b2s2 },
    },
  },
  {
    title: "Dynamic TradeEngineConfigs Runtime Update Layer",
    subtitle:
      "A single runtime configuration architecture that turns TradeEngineConfigs cache changes into zero-downtime updates across WebSockets, ProductRegistry, and order book systems.",
    tags: ["Dynamic Config", "Caching", "WebSockets", "Order Books", "Atomic Pointers", "Reliability"],
    description: [
      "Built a dynamic layer over the TradeEngineConfigs cache with a live poller that detects product, trust, exchange, and trade-disabled config changes, diffs them against cached snapshots, and emits strongly typed add/update/delete events.",
      "Converted restart-driven trade engine configuration workflows into zero-downtime runtime updates, propagating changes across WebSocket subscriptions, ProductRegistry mappings, and order book lifecycle management while services stayed online.",
    ],
    downstreamSections: [
      {
        title: "WebSocket subscription updates",
        body:
          "Wired config events into the Talos WebSocket pipeline so product and exchange subscriptions could update at runtime using amend messages. New exchanges bootstrap only the required producer, fanout, and publisher flow, avoiding full service restarts.",
      },
      {
        title: "ProductRegistry runtime refreshes",
        body:
          "Refactored ProductRegistryService to consume live config events and rebuild immutable mapping snapshots for products, exchanges, venues, and institutions. Active registries are swapped with atomic.Pointer, keeping trade-path lookups lock-free.",
      },
      {
        title: "Order book lifecycle updates",
        body:
          "Extended runtime config updates into order book managers so exchange additions/removals take effect without stale market data. Added AddExchange and RemoveExchange flows with cleanup and context-based lifecycle management.",
      },
    ],
    metrics: [
      { value: "3 consumers", label: "WebSockets, ProductRegistry, and order books" },
      { value: "60s", label: "config polling cadence" },
      { value: "0 restarts", label: "target for product/exchange config changes" },
      { value: "Lock-free", label: "ProductRegistry hot-path reads" },
    ],
    architecture: [
      {
        label: "Source",
        value: "TradeEngineConfigs cache becomes the refreshable runtime source of truth.",
      },
      { label: "Detection", value: "Poller diffs live DB config against cached snapshots on a fixed cadence." },
      { label: "Distribution", value: "Typed config change events fan out through registered callbacks." },
      {
        label: "Consumers",
        value: "WebSockets update subscriptions, ProductRegistry swaps maps, and order books add/remove LPs.",
      },
    ],
  },
  {
    title: "Transaction Cost Analysis Market Data Feed",
    subtitle:
      "A dedicated market data feed for TCA with prime-org scoped caching and configurable Talos subscription options.",
    tags: ["Redis", "TCA", "Prime Org", "Market Data"],
    description: [
      "Architected a dedicated TCA market data feed separate from the trade feed, enabling downstream Transaction Cost Analysis consumers to subscribe with specialized fee modes, liquidity types, and market data requirements.",
      "Reduced duplicate Redis snapshot caching by moving from trust-org scoped keys to prime-org scoped keys, using a new PrimeOrgProductCompositeKey, batched Redis writes, and dedicated TCA metrics to support more efficient Level 2 snapshot delivery.",
    ],
    metrics: [
      { value: "Prime-org", label: "cache strategy to reduce duplicate snapshots" },
      { value: "Batch Redis", label: "optional pipelined snapshot writes" },
      { value: "Reusable", label: "shared producer and fanout infrastructure" },
    ],
    architecture: [
      { label: "Trade feed", value: "Firm/taker liquidity for execution paths." },
      { label: "TCA feed", value: "Indicative/raw liquidity for analysis paths." },
      { label: "Cache key", value: "primeOrg + product instead of trustOrg + product." },
      { label: "Bug fix", value: "Prime org resolved from LP institution identifier." },
    ],
  },
  {
    title: "Trade API Order Book Memory Optimization",
    subtitle:
      "Reduced allocation pressure in high-frequency WebSocket workers by reusing market data objects across publish ticks.",
    tags: ["Performance", "Go GC", "Memory", "WebSocket API"],
    description: [
      "Optimized the trade API market data WebSocket worker, which previously allocated new OrderBookManager and Level2SnapshotMessage objects on every 300ms publish tick.",
      "Introduced Reset-based object reuse for Level2SnapshotMessage, preserving backing slice capacity for bids and asks across publish cycles.",
      "Added SetSpreadManager to reuse OrderBookManager instances and contributed a generic MapInto utility for zero-allocation slice mapping with capacity-safe semantics.",
    ],
    metrics: [
      { value: "-27%", label: "memory usage improvement in hot path" },
      { value: "300ms", label: "publish tick optimized for reuse" },
      { value: "Lower GC", label: "fewer per-tick heap allocations" },
    ],
    architecture: [
      { label: "Before", value: "New snapshot and manager objects every tick." },
      { label: "After", value: "Allocate once, then Reset and reuse." },
      { label: "Slices", value: "Backing arrays preserved for bids and asks." },
      { label: "Utility", value: "MapInto enables capacity-safe zero-allocation mapping." },
    ],
  },
  {
    title: "Order Book Squares Dashboard",
    subtitle: "A multi-liquidity-provider order book dashboard widget for internal trading operators.",
    tags: ["React", "GraphQL", "WebSockets", "Trading UI"],
    description: [
      "Built the internal Order Book Squares dashboard from scratch, giving operators compact real-time panels to monitor multiple product and liquidity-provider order book views.",
      "Implemented a reference-counted SubscriptionManager to coalesce duplicate UI views into a single WebSocket subscription, while adding BPS spread calculations and a Prime Org selector across PostgreSQL, GraphQL, and React.",
    ],
    metrics: [
      { value: "1 sub", label: "per product regardless of open squares" },
      { value: "BPS", label: "spread visualization for tiny tick sizes" },
      { value: "Full-stack", label: "Prime Org selector from DB to React" },
    ],
    architecture: [
      { label: "SubscriptionManager", value: "Sends subscribe on 0→1 and unsubscribe on 1→0." },
      { label: "Only button", value: "Quickly isolates one liquidity provider in a square." },
      { label: "Spread mode", value: "Scales bars by spread instead of only size." },
      { label: "Prime org filter", value: "Scopes institutions and products page-wide." },
    ],
    images: {
      row2: {
        label: "Internal Order Book Before",
        image: b3o1,
        aspectClass: "aspect-[18/9]",
      },
      row3: {
        label: "Internal Order Book After",
        images: [b3o2, b3o3],
        aspectClass: "aspect-[18/9]",
      },
    },
  },
  {
    title: "Real-time LP Health Monitoring Strip",
    subtitle: "A full-stack health dashboard showing whether each exchange is healthy, degraded, or offline.",
    tags: ["GraphQL", "React", "Monitoring", "LP Health"],
    description: [
      "Built an end-to-end real-time LP health monitoring strip for the internal trading dashboard, giving operators immediate visibility into exchange market data health across liquidity providers.",
      "Implemented a GraphQL resolver over the LP Status Cache to aggregate product-level state into tri-state exchange health indicators, with prime-org filtering, expandable React product detail views, and backend unit test coverage.",
    ],
    metrics: [
      { value: "3 states", label: "healthy, degraded, offline" },
      { value: "Sub-second", label: "visual detection instead of log triage" },
      { value: "Drill-down", label: "exchange to product-level status" },
    ],
    architecture: [
      { label: "Data source", value: "LP Status Cache snapshot freshness." },
      { label: "Resolver", value: "Aggregates product states by exchange." },
      { label: "UI", value: "Horizontal strip with expandable product details." },
      { label: "Filtering", value: "Optional primeOrgID scope." },
    ],
    images: {
      row2: {
        label: "LP Health Strip",
        images: [b4e1, b4e2, b4e3],
        aspectClass: "aspect-[24/6]",
      },
    },
  },
];
