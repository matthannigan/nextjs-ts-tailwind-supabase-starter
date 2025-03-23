find .next -name "*.tsbuildinfo" -type f -delete
rm -rf .next
rm -rf node_modules/.cache
npx tsc --build --clean