# Changelog

## 0.1.0-alpha.11 (2025-07-03)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Bug Fixes

* **client:** don't send `Content-Type` for bodyless methods ([3c48050](https://github.com/justement-api/justement-node/commit/3c480507c9e846080499f2ee4448f849e758a614))


### Chores

* mention unit type in timeout docs ([275e2e6](https://github.com/justement-api/justement-node/commit/275e2e63cdfe208649a80f24d46f54e7363fe39e))

## 0.1.0-alpha.10 (2025-06-30)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** api update ([5eaf538](https://github.com/justement-api/justement-node/commit/5eaf5380cfaba517ea06f2d8fb23cb3d6512ae47))


### Chores

* **ci:** add timeout thresholds for CI jobs ([8a4f693](https://github.com/justement-api/justement-node/commit/8a4f69352b2345da4b15501629fe2b775857cc6d))
* **ci:** bump node version for release workflows ([8bee877](https://github.com/justement-api/justement-node/commit/8bee877f91e2c707db1bf4dba5a1d466c4dba996))
* **ci:** only use depot for staging repos ([3587e53](https://github.com/justement-api/justement-node/commit/3587e53ea91f708910df9d05cd8ab7dfc3db7a74))
* **client:** minor internal fixes ([2fdb583](https://github.com/justement-api/justement-node/commit/2fdb583ab01929adf700e9a6add7a63cfe1a780a))
* **docs:** grammar improvements ([df639ca](https://github.com/justement-api/justement-node/commit/df639caf68b665014c5a5c4c12e6ab6fa81a3810))
* **docs:** use top-level-await in example snippets ([4349b89](https://github.com/justement-api/justement-node/commit/4349b896445ff9f64d747af5d7a14dea11daf8a9))
* improve publish-npm script --latest tag logic ([4c535ae](https://github.com/justement-api/justement-node/commit/4c535ae8b5e8cefb03be3f373915fa7f011d6c63))
* **internal:** codegen related update ([e29a1a6](https://github.com/justement-api/justement-node/commit/e29a1a6b9695299848d9f57727efb3dd2f489663))
* **internal:** reduce CI branch coverage ([e5680c6](https://github.com/justement-api/justement-node/commit/e5680c68c67b5cc379a7dbce9157755055fe5cc4))
* **internal:** upload builds and expand CI branch coverage ([7fa7a5d](https://github.com/justement-api/justement-node/commit/7fa7a5d51b7ab92aca7ad232a70c47e842b1316d))


### Documentation

* **pagination:** improve naming ([926c1bc](https://github.com/justement-api/justement-node/commit/926c1bc6a744b2da3fc802f6965cec258454f26d))
* **readme:** fix typo ([8fcb60c](https://github.com/justement-api/justement-node/commit/8fcb60c7f7bb75e8cc203ffee887efefb399e8fa))

## 0.1.0-alpha.9 (2025-04-05)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Bug Fixes

* **mcp:** remove unused tools.ts ([#43](https://github.com/justement-api/justement-node/issues/43)) ([b553460](https://github.com/justement-api/justement-node/commit/b55346079e990bc2539863499ee9a9cadf74b8cf))

## 0.1.0-alpha.8 (2025-04-04)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Bug Fixes

* **api:** improve type resolution when importing as a package ([#41](https://github.com/justement-api/justement-node/issues/41)) ([fda4f4e](https://github.com/justement-api/justement-node/commit/fda4f4e47eae36ab567775daa7e7b0e92c264faf))


### Chores

* **internal:** add aliases for Record and Array ([#39](https://github.com/justement-api/justement-node/issues/39)) ([b03e3f0](https://github.com/justement-api/justement-node/commit/b03e3f057e16641997366e7d33dcd48a589e5e68))

## 0.1.0-alpha.7 (2025-04-03)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Bug Fixes

* **client:** send `X-Stainless-Timeout` in seconds ([#36](https://github.com/justement-api/justement-node/issues/36)) ([e6ad23c](https://github.com/justement-api/justement-node/commit/e6ad23c8074abfa2b34f5a5ce845e00b0b413fce))

## 0.1.0-alpha.6 (2025-03-28)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Bug Fixes

* **internal:** work around https://github.com/vercel/next.js/issues/76881 ([#33](https://github.com/justement-api/justement-node/issues/33)) ([ec74f6b](https://github.com/justement-api/justement-node/commit/ec74f6b63c5cf5e7398e8c78d5eeea8468ab302a))

## 0.1.0-alpha.5 (2025-03-22)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#26](https://github.com/justement-api/justement-node/issues/26)) ([c40da8f](https://github.com/justement-api/justement-node/commit/c40da8f1e74d2fe3665a019cfc7a849fecef45fe))
* **client:** accept RFC6838 JSON content types ([#27](https://github.com/justement-api/justement-node/issues/27)) ([f8ff762](https://github.com/justement-api/justement-node/commit/f8ff76239b9422241c49e046fc19dbb472277f43))


### Bug Fixes

* avoid type error in certain environments ([#31](https://github.com/justement-api/justement-node/issues/31)) ([9d0bceb](https://github.com/justement-api/justement-node/commit/9d0bcebf61bc51843f1ed9ba21b8bd9ffc727999))


### Chores

* **exports:** cleaner resource index imports ([#29](https://github.com/justement-api/justement-node/issues/29)) ([7f3266b](https://github.com/justement-api/justement-node/commit/7f3266b49426d6487503e2bf554269804ec92475))
* **exports:** stop using path fallbacks ([#30](https://github.com/justement-api/justement-node/issues/30)) ([0532661](https://github.com/justement-api/justement-node/commit/0532661686f39f92d689e577b88b29cb992ba84b))
* **internal:** fix devcontainers setup ([#23](https://github.com/justement-api/justement-node/issues/23)) ([afb4303](https://github.com/justement-api/justement-node/commit/afb4303c3ec1adac446ee0c68e5bab5448f11832))
* **internal:** remove extra empty newlines ([#28](https://github.com/justement-api/justement-node/issues/28)) ([6969dc3](https://github.com/justement-api/justement-node/commit/6969dc3276faba1bc0d8c4308703245d37505a97))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#25](https://github.com/justement-api/justement-node/issues/25)) ([7b282dc](https://github.com/justement-api/justement-node/commit/7b282dcf153b966794d51d9f8552206f7a2846a8))

## 0.1.0-alpha.4 (2025-02-14)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Bug Fixes

* **client:** fix export map for index exports ([#21](https://github.com/justement-api/justement-node/issues/21)) ([0f9409e](https://github.com/justement-api/justement-node/commit/0f9409e0477c169c36419836c2468d9393d76691))


### Chores

* **internal:** codegen related update ([#19](https://github.com/justement-api/justement-node/issues/19)) ([15286db](https://github.com/justement-api/justement-node/commit/15286db21c96355a0aa51e6b1ff11a7658660f21))

## 0.1.0-alpha.3 (2025-01-02)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Bug Fixes

* **client:** normalize method ([#16](https://github.com/justement-api/justement-node/issues/16)) ([43e6765](https://github.com/justement-api/justement-node/commit/43e676536bdb141ca19618e8d7bb813955efe166))


### Chores

* **internal:** codegen related update ([#17](https://github.com/justement-api/justement-node/issues/17)) ([790173e](https://github.com/justement-api/justement-node/commit/790173e51013a0bc67000cdea14dd41c174b2b2c))
* **internal:** codegen related update ([#18](https://github.com/justement-api/justement-node/issues/18)) ([cb6f712](https://github.com/justement-api/justement-node/commit/cb6f712314676569c956474c7233d7bce9f8d9b5))
* **internal:** fix some typos ([#14](https://github.com/justement-api/justement-node/issues/14)) ([457b37a](https://github.com/justement-api/justement-node/commit/457b37a652d60d3acd19b28fc2736f241c975620))

## 0.1.0-alpha.2 (2024-12-13)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/justement-api/justement-node/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** api update ([#12](https://github.com/justement-api/justement-node/issues/12)) ([90d1575](https://github.com/justement-api/justement-node/commit/90d15757177cf8188e5e7032d4412125fec1c1e4))


### Chores

* **internal:** bump cross-spawn to v7.0.6 ([#9](https://github.com/justement-api/justement-node/issues/9)) ([bdca0bb](https://github.com/justement-api/justement-node/commit/bdca0bb4b8831868bce04485b1620fdd4a443721))
* **internal:** remove unnecessary getRequestClient function ([#7](https://github.com/justement-api/justement-node/issues/7)) ([961ab7c](https://github.com/justement-api/justement-node/commit/961ab7ca834c4a1a58dd7d2c7e1dccf323eecbd8))
* **internal:** update isAbsoluteURL ([#11](https://github.com/justement-api/justement-node/issues/11)) ([b9d9a8a](https://github.com/justement-api/justement-node/commit/b9d9a8af4211cb850c949a541d1b8b0e541caa0c))
* **types:** nicer error class types + jsdocs ([#10](https://github.com/justement-api/justement-node/issues/10)) ([85d8777](https://github.com/justement-api/justement-node/commit/85d87772a0e01f6054bef2206c2d6ad75dc72d95))

## 0.1.0-alpha.1 (2024-12-02)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/justement-api/justement-node/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **api:** manual updates ([2a096d6](https://github.com/justement-api/justement-node/commit/2a096d62e83b42b2b41ca66bce5d811c13ef04d3))
* **api:** manual updates ([2a23097](https://github.com/justement-api/justement-node/commit/2a230976fad6c031e00a4e49ac093d44643e4f54))
* **api:** manual updates ([c0547df](https://github.com/justement-api/justement-node/commit/c0547df29504892dbd19bdc19af2d45b7c537aef))
* **api:** manual updates ([#1](https://github.com/justement-api/justement-node/issues/1)) ([417fc8e](https://github.com/justement-api/justement-node/commit/417fc8e29a0d19aaf7e9756b87fbcfaa50623d21))
* **api:** manual updates ([#3](https://github.com/justement-api/justement-node/issues/3)) ([01632f9](https://github.com/justement-api/justement-node/commit/01632f9678be1c31766cae635e4ee8a7817c8661))
* **api:** manual updates ([#4](https://github.com/justement-api/justement-node/issues/4)) ([b171370](https://github.com/justement-api/justement-node/commit/b171370471babe5d305c7da8efebf03ad6012fae))
* **api:** manual updates ([#5](https://github.com/justement-api/justement-node/issues/5)) ([f3e1d33](https://github.com/justement-api/justement-node/commit/f3e1d33ed16d9999e73c651a3075d993a0f82ced))


### Chores

* configure new SDK language ([ca1297b](https://github.com/justement-api/justement-node/commit/ca1297bc64cb6a5a0b82728225b73655bdfd4d98))
* **internal:** codegen related update ([952f23e](https://github.com/justement-api/justement-node/commit/952f23ec9cd218f5f264637effac2d3bca7ffde2))
* update SDK settings ([67ae29c](https://github.com/justement-api/justement-node/commit/67ae29c8e040926fee6ebfac5e05e9ed0362c342))
