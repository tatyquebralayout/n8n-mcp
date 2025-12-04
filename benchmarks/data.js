window.BENCHMARK_DATA = {
  "lastUpdate": 1764811313658,
  "repoUrl": "https://github.com/tatyquebralayout/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "baab3a02dc68c5d81e33f93bce0e5462d65a52d1",
          "message": "Merge pull request #139 from czlonkowski/feature/validation-improvements\n\nchore: update n8n to v1.106.3 and bump version to 2.10.4",
          "timestamp": "2025-08-12T08:57:47+02:00",
          "tree_id": "eb0e009eb0f4f9b2b57fab8bd3ab6b4442e72ccc",
          "url": "https://github.com/tatyquebralayout/n8n-mcp/commit/baab3a02dc68c5d81e33f93bce0e5462d65a52d1"
        },
        "date": 1755126557688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "unit": "ms",
            "range": 0.27180000000000004,
            "extra": "52251 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1324,
            "unit": "ms",
            "range": 0.49119999999999964,
            "extra": "319 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "unit": "ms",
            "range": 0.28700000000000003,
            "extra": "203110 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.066,
            "unit": "ms",
            "range": 0.3372,
            "extra": "15159 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "527e9874ab6b26b3dbae131f5259f81bac1cd1ab",
          "message": "chore: update n8n to 1.122.4 and remove ludwig's templates (v2.28.3) (#463)\n\n- Updated n8n from 1.121.2 to 1.122.4\n- Updated n8n-core from 1.120.1 to 1.121.1\n- Updated n8n-workflow from 1.118.1 to 1.119.1\n- Updated @n8n/n8n-nodes-langchain from 1.120.1 to 1.121.1\n- Rebuilt node database with 544 nodes (438 from n8n-nodes-base, 106 from @n8n/n8n-nodes-langchain)\n- Removed 7 templates from creator \"ludwig\" at author's request (IDs: 2795, 2816, 2825, 2850, 2869, 2939, 3847)\n- Updated README badge with new n8n version\n- Updated CHANGELOG with dependency changes\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\n🤖 Generated with [Claude Code](https://claude.com/claude-code)\n\nCo-authored-by: Claude <noreply@anthropic.com>",
          "timestamp": "2025-12-03T00:11:41+01:00",
          "tree_id": "72f7371af9598b14c1914c2b5a82b75d2b9d4851",
          "url": "https://github.com/tatyquebralayout/n8n-mcp/commit/527e9874ab6b26b3dbae131f5259f81bac1cd1ab"
        },
        "date": 1764811312920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}