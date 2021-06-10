```bash
yarn

# No TS errors ✅
rm -rf target-tsc dist && tsc --build app/tsconfig.json --verbose

# TS errors ❌
rm -rf target-tsc dist && webpack
```