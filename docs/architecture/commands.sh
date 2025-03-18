# Step 1: Initialize the basic structure with Next.js
npx create-next-app@14.2.24 . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"

# Step 2: After creation, modify package.json to pin specific versions
# Remove the current dependencies
npm uninstall next react react-dom tailwindcss postcss autoprefixer eslint typescript @types/react @types/react-dom @types/node

# Reinstall with specific versions
npm install next@14.2.24 react@18.3.1 react-dom@18.3.1
npm install -D tailwindcss@3.3.7 postcss@8.4.49 autoprefixer@10.4.21 typescript@5.4.5  @types/node@20.17.24 @types/react@18.3.18 @types/react-dom@18.3.5 eslint@8.56.0