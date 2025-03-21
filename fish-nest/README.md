========================= Setup ===============================
npm create vite@latest fish-nest -- --template react
========================= React Router ========================
npm install react-router-dom
npm install localforage match-sorter sort-by
========================= tailwind ============================
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
Add  tailwind.config.js in below code
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
]
Add below code : index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

====================== daisyUI =======================
npm i -D daisyui@latest
add below code in : tailwind.config.js:
plugins: [
    require('daisyui'),
  ],

====================== React icons ===================
npm install react-icons --save