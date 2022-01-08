window.BENCHMARK_DATA = {
  "lastUpdate": 1641644847401,
  "repoUrl": "https://github.com/vorner/arc-swap",
  "entries": {
    "Track benchmarks": [
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "18cacb53939503210e7598993eef6b87fc8834b2",
          "message": "Keep benchmarks in GH pages",
          "timestamp": "2021-01-02T19:13:52Z",
          "url": "https://github.com/vorner/arc-swap/pull/51/commits/18cacb53939503210e7598993eef6b87fc8834b2"
        },
        "date": 1609689524602,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 17,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 69,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 121,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 27,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 38,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 99,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 928,
            "range": "± 413",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 78,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 140,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 178,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 915,
            "range": "± 94",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10355d69139fa26193de364012d1e5ca8614012d",
          "message": "Merge pull request #51 from vorner/keep-benchmarks\n\nKeep benchmarks in GH pages",
          "timestamp": "2021-01-03T17:27:54+01:00",
          "tree_id": "bf078b66a15959df8a86ab88f8a6b53d81bafa52",
          "url": "https://github.com/vorner/arc-swap/commit/10355d69139fa26193de364012d1e5ca8614012d"
        },
        "date": 1609691667321,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 29,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 59,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 105,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 28,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 46,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 101,
            "range": "± 89",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 900,
            "range": "± 284",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 102,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 150,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 209,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1085,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 3,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "64dcf40ad952d87f6f294f9170f272d95bd91f54",
          "message": "Merge pull request #50 from vorner/no-half-lock\n\nReplace the half-lock with helping strategy",
          "timestamp": "2021-01-03T18:01:06+01:00",
          "tree_id": "259ee9c1d6266df99362622b870419e1093cab23",
          "url": "https://github.com/vorner/arc-swap/commit/64dcf40ad952d87f6f294f9170f272d95bd91f54"
        },
        "date": 1609693754486,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 176,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 34,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 56,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 74,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1415,
            "range": "± 1387",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 117,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 190,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 227,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1388,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "0426a36d46ed9ea8473b8ea0b7e0250c958eb54a",
          "message": "Don't fail on slow benchmarks\n\nThese are often more noise than a problem, because they are on CI and we\nhave a lot of them.",
          "timestamp": "2021-01-03T18:22:03+01:00",
          "tree_id": "18a506380ae07625886cd64b876c89d300b7905f",
          "url": "https://github.com/vorner/arc-swap/commit/0426a36d46ed9ea8473b8ea0b7e0250c958eb54a"
        },
        "date": 1609694948652,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 176,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 30,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 57,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 79,
            "range": "± 43",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1675,
            "range": "± 512",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 97,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 162,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 219,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1050,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "ae37017e3319215f5ba99e8e46ce414ba6c228e4",
          "message": "Allow mapping of dyn-access",
          "timestamp": "2021-04-29T06:43:37Z",
          "url": "https://github.com/vorner/arc-swap/pull/53/commits/ae37017e3319215f5ba99e8e46ce414ba6c228e4"
        },
        "date": 1621448861871,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 36,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 51,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 141,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 35,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 51,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 100,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 836,
            "range": "± 329",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 80,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 127,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 157,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1034,
            "range": "± 75",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "fc733c404ba45ba60cd61734db313629a659c67e",
          "message": "Solve some lints",
          "timestamp": "2021-04-29T06:43:37Z",
          "url": "https://github.com/vorner/arc-swap/pull/54/commits/fc733c404ba45ba60cd61734db313629a659c67e"
        },
        "date": 1621449912177,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 15,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 26,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 40,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 126,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 19,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 40,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 51,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1185,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 86,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 138,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 181,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1092,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a58a01790ade363dd88dd84f93ca12b1563f739",
          "message": "Merge pull request #54 from vorner/warnings\n\nSolve some lints",
          "timestamp": "2021-05-19T20:54:39+02:00",
          "tree_id": "c664bd5abee00da29bf69e17485d1a9ff4fca44c",
          "url": "https://github.com/vorner/arc-swap/commit/6a58a01790ade363dd88dd84f93ca12b1563f739"
        },
        "date": 1621450960021,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 37,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 53,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 156,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 22,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 48,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 73,
            "range": "± 35",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 886,
            "range": "± 374",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 102,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 112,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 166,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1020,
            "range": "± 90",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "f13cec6fcf1187080c6d7b7eeae5770070ff8bf3",
          "message": "Allow mapping of dyn-access",
          "timestamp": "2021-05-19T18:54:42Z",
          "url": "https://github.com/vorner/arc-swap/pull/53/commits/f13cec6fcf1187080c6d7b7eeae5770070ff8bf3"
        },
        "date": 1621451050676,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 35,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 154,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 23,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 52,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 85,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1300,
            "range": "± 638",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 85,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 130,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 166,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1085,
            "range": "± 74",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "376beed33d27a63416e1f468a538a71ec1add16f",
          "message": "Merge pull request #53 from vorner/dyn-access\n\nAllow mapping of dyn-access",
          "timestamp": "2021-05-19T21:35:05+02:00",
          "tree_id": "afa685fdf5be83630d46797af0a22c22416f090c",
          "url": "https://github.com/vorner/arc-swap/commit/376beed33d27a63416e1f468a538a71ec1add16f"
        },
        "date": 1621453286563,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 36,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 157,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 22,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 46,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 83,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1060,
            "range": "± 457",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 104,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 136,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 164,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1069,
            "range": "± 69",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "12ed8ac1bd5cb6cc6adf5b97754ac94ef919fa5b",
          "message": "Don't leave threads running in tests",
          "timestamp": "2021-05-20T22:25:32Z",
          "url": "https://github.com/vorner/arc-swap/pull/55/commits/12ed8ac1bd5cb6cc6adf5b97754ac94ef919fa5b"
        },
        "date": 1621794271873,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 34,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 50,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 143,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 31,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 58,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 71,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1341,
            "range": "± 476",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 93,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 148,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 164,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1074,
            "range": "± 93",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c914b2866922a18d020281d4a84cff934db1bf49",
          "message": "Merge pull request #55 from vorner/dont-leave-threads\n\nDon't leave threads running in tests",
          "timestamp": "2021-05-23T20:40:43+02:00",
          "tree_id": "98bbcef1f0829b63b315c1d12799bc1cd15b40ac",
          "url": "https://github.com/vorner/arc-swap/commit/c914b2866922a18d020281d4a84cff934db1bf49"
        },
        "date": 1621795609978,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 23,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 40,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 60,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 176,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 36,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 60,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 87,
            "range": "± 64",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1049,
            "range": "± 415",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 91,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 144,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 178,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1143,
            "range": "± 243",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "e9ab72693098bedb37603b3ecfbb01287f89ce02",
          "message": "Changelog",
          "timestamp": "2021-05-23T20:42:23+02:00",
          "tree_id": "adcaddc0011bf31ae95c93cd38a3ea2e56621472",
          "url": "https://github.com/vorner/arc-swap/commit/e9ab72693098bedb37603b3ecfbb01287f89ce02"
        },
        "date": 1621795685990,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 34,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 50,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 149,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 25,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 63,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 73,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1374,
            "range": "± 409",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 84,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 109,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 156,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1133,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "0080968b798f6f8c79a1c64705f9a471c9adcbb1",
          "message": "Cache doc example added",
          "timestamp": "2021-08-17T18:54:34Z",
          "url": "https://github.com/vorner/arc-swap/pull/58/commits/0080968b798f6f8c79a1c64705f9a471c9adcbb1"
        },
        "date": 1629658696519,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 36,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 53,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 160,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 28,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 65,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 75,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1018,
            "range": "± 361",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 85,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 117,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 157,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1103,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "b3d174774b159353a402c9c3940d46d62f5b88b4",
          "message": "Cache doc example added",
          "timestamp": "2021-08-17T18:54:34Z",
          "url": "https://github.com/vorner/arc-swap/pull/58/commits/b3d174774b159353a402c9c3940d46d62f5b88b4"
        },
        "date": 1629659287877,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 33,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 48,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 147,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 31,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 62,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 93,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 851,
            "range": "± 354",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 70,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 130,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 150,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1100,
            "range": "± 78",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "444eaef04bd4601964ffb1b97d446a3d2e6aec1f",
          "message": "Merge pull request #58 from vorner/cache-doc-thead-local\n\nCache doc example added",
          "timestamp": "2021-08-22T21:27:30+02:00",
          "tree_id": "85760053f66b18344d0b3b2e023a3e213669f943",
          "url": "https://github.com/vorner/arc-swap/commit/444eaef04bd4601964ffb1b97d446a3d2e6aec1f"
        },
        "date": 1629660953918,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 38,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 55,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 169,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 23,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 43,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 87,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1406,
            "range": "± 445",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 76,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 121,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 161,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1189,
            "range": "± 116",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "1484d8ca80b5bf55493d648ea04165f842e4e8f5",
          "message": "Version bump to 1.3.1",
          "timestamp": "2021-08-22T21:29:25+02:00",
          "tree_id": "e773486bbf4b8e5a11d11949894d81db6d95081d",
          "url": "https://github.com/vorner/arc-swap/commit/1484d8ca80b5bf55493d648ea04165f842e4e8f5"
        },
        "date": 1629661088228,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 35,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 172,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 22,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 48,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 100,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1126,
            "range": "± 623",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 134,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 194,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 208,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1331,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "d57e1ea6f7bb1ebe71535d5011db82197864bf95",
          "message": "Document that AsRef isn't for owned things\n\nConflicting trait implementations :-(\n\nCloses #61.",
          "timestamp": "2021-08-27T17:04:41+02:00",
          "tree_id": "a9e4daf616698e3e41f9b798ff7a20c15f19cecf",
          "url": "https://github.com/vorner/arc-swap/commit/d57e1ea6f7bb1ebe71535d5011db82197864bf95"
        },
        "date": 1630077202837,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 22,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 33,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 50,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 147,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 25,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 42,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 70,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1250,
            "range": "± 447",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 102,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 163,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 177,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1320,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "a87221bc2edb9d0aea1cddd30402330733b5893c",
          "message": "GH: Update codecov action",
          "timestamp": "2021-09-12T09:26:42+02:00",
          "tree_id": "544e5702a94b739714f025b6122ae507919ccb58",
          "url": "https://github.com/vorner/arc-swap/commit/a87221bc2edb9d0aea1cddd30402330733b5893c"
        },
        "date": 1631432015932,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 33,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 44,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 126,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 27,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 54,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 74,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1010,
            "range": "± 365",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 87,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 130,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 143,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 973,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "3043a39d1de95f9355dedde50860f7f3d4c2ef3e",
          "message": "Const ArcSwapOption initialization",
          "timestamp": "2021-09-12T07:26:54Z",
          "url": "https://github.com/vorner/arc-swap/pull/63/commits/3043a39d1de95f9355dedde50860f7f3d4c2ef3e"
        },
        "date": 1631807629188,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 35,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 48,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 145,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 28,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 49,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 72,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1050,
            "range": "± 491",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 79,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 116,
            "range": "± 36",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 150,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1031,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63bda3a59b855d88ad133f81889964c65b5acbc3",
          "message": "Merge pull request #63 from vorner/const-arc-swap-option\n\nConst ArcSwapOption initialization",
          "timestamp": "2021-09-17T11:57:28+02:00",
          "tree_id": "e456fd03a4517ae6319cd5b5895dc5d1890c379e",
          "url": "https://github.com/vorner/arc-swap/commit/63bda3a59b855d88ad133f81889964c65b5acbc3"
        },
        "date": 1631873019352,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 147,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 32,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 37,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 65,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 997,
            "range": "± 719",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 107,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 135,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 165,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1196,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a8a3ddf07ef36ef6ad086f1c095624130afcf052",
          "message": "Merge pull request #64 from Cyborus04/master\n\nFix typo in `ArcSwapOption::const_empty` documentation",
          "timestamp": "2021-09-19T12:17:53+02:00",
          "tree_id": "70688ae8d6bf7801695767a4efe555b485b10c26",
          "url": "https://github.com/vorner/arc-swap/commit/a8a3ddf07ef36ef6ad086f1c095624130afcf052"
        },
        "date": 1632046961264,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 30,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 46,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 144,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 32,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 30,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 68,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1382,
            "range": "± 1065",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 106,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 141,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 159,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1238,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "13e5e3f002dc51b3d938cd1e30db139e3fc96278",
          "message": "Tests on pull requests too",
          "timestamp": "2021-11-10T20:12:04+01:00",
          "tree_id": "51b139c3b919a0101ec0c1638941d903ae886c5d",
          "url": "https://github.com/vorner/arc-swap/commit/13e5e3f002dc51b3d938cd1e30db139e3fc96278"
        },
        "date": 1636572024054,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 18,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 34,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 55,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 156,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 26,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 39,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 76,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1141,
            "range": "± 404",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 77,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 101,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 145,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1071,
            "range": "± 71",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bratsinot@gmail.com",
            "name": "Aleksander",
            "username": "BratSinot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d6b1fb599bf4b1fb9114291d6cace2beacbc46e",
          "message": "Add serialize / deserialize features. (#65)\n\nAdd serde support",
          "timestamp": "2021-11-13T20:44:33+01:00",
          "tree_id": "7daa2b959cd284c2657d27b6e950c16824e64bbe",
          "url": "https://github.com/vorner/arc-swap/commit/8d6b1fb599bf4b1fb9114291d6cace2beacbc46e"
        },
        "date": 1636833036179,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 39,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 49,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 145,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 34,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 58,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 68,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1101,
            "range": "± 486",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 89,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 126,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 158,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1113,
            "range": "± 70",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "vorner",
            "username": "vorner"
          },
          "committer": {
            "name": "vorner",
            "username": "vorner"
          },
          "id": "e411d788f9d5d4cfc20bb109f963312c1124b2c2",
          "message": "Release 1.5.0",
          "timestamp": "2021-11-14T02:35:26Z",
          "url": "https://github.com/vorner/arc-swap/pull/66/commits/e411d788f9d5d4cfc20bb109f963312c1124b2c2"
        },
        "date": 1636878876460,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 22,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 40,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 54,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 153,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 30,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 62,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 82,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1238,
            "range": "± 546",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 123,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 162,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1183,
            "range": "± 109",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e16ca3f778e29b14f093a036f3ba39ee89b6b41",
          "message": "Merge pull request #66 from vorner/next\n\nRelease 1.5.0",
          "timestamp": "2021-11-15T18:41:56+01:00",
          "tree_id": "eaea8185b660ba3b26f2197ffe1b3ed33ceeb650",
          "url": "https://github.com/vorner/arc-swap/commit/7e16ca3f778e29b14f093a036f3ba39ee89b6b41"
        },
        "date": 1636998466516,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 36,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 53,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 149,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 31,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 62,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 58,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1290,
            "range": "± 582",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 83,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 111,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 148,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1107,
            "range": "± 80",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "f06b05123406a0acef420677f031a6df25af3d9f",
          "message": "Disable benchmarks on pull requests\n\nThere's some problem with permissions, needs to be investigated.. but\ndisabling until then.",
          "timestamp": "2021-12-19T16:26:43+01:00",
          "tree_id": "77677b5f9c9a4e70a8d639530aedae944aa7f89e",
          "url": "https://github.com/vorner/arc-swap/commit/f06b05123406a0acef420677f031a6df25af3d9f"
        },
        "date": 1639928130807,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 24,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 42,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 60,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 163,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 43,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 53,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 69,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1051,
            "range": "± 410",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 94,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 121,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 164,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1273,
            "range": "± 175",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Jiahao_XU@outlook.com",
            "name": "Jiahao XU",
            "username": "NobodyXu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d82b9e14a51a047e4283447713ab83541a0eeaa4",
          "message": "Add thread sanitizer to test (#72)",
          "timestamp": "2021-12-20T11:36:06+01:00",
          "tree_id": "787e2a01c313e3e7176d57127242467901a3cc01",
          "url": "https://github.com/vorner/arc-swap/commit/d82b9e14a51a047e4283447713ab83541a0eeaa4"
        },
        "date": 1639996920135,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 20,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 34,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 44,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 141,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 29,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 48,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 54,
            "range": "± 38",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 1057,
            "range": "± 363",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 77,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 115,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 146,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1067,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "committer": {
            "email": "vorner@vorner.cz",
            "name": "Michal 'vorner' Vaner",
            "username": "vorner"
          },
          "distinct": true,
          "id": "cc90e97bf2284d183200a58b3b7658af43938fee",
          "message": "Merge branch 'master' of github.com:vorner/arc-swap",
          "timestamp": "2022-01-08T13:19:55+01:00",
          "tree_id": "c864274a4f9dc76c913d0cc60d48941fcd0dc284",
          "url": "https://github.com/vorner/arc-swap/commit/cc90e97bf2284d183200a58b3b7658af43938fee"
        },
        "date": 1641644846976,
        "tool": "cargo",
        "benches": [
          {
            "name": "uncontended/load",
            "value": 21,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_full",
            "value": 38,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/load_many",
            "value": 48,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/store",
            "value": 148,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "uncontended/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load",
            "value": 30,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_full",
            "value": 55,
            "range": "± 49",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/load_many",
            "value": 68,
            "range": "± 24",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/store",
            "value": 895,
            "range": "± 390",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_loads/cache",
            "value": 0,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load",
            "value": 94,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_full",
            "value": 121,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/load_many",
            "value": 164,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/store",
            "value": 1202,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "concurrent_store/cache",
            "value": 1,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}