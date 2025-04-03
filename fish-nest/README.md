npm install @reduxjs/toolkit react-redux react-router-dom react-icons

npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  @tailwind base;
@tailwind components;
@tailwind utilities;