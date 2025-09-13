# ajanja-onlinePharm

AjanjaCare Pharmacy Web App – A responsive React + TypeScript application showcasing pharmacy services, health packages, and clinic workflow management. Built with **Vite**, **Tailwind CSS**, and **Framer Motion**, ready for deployment on **Vercel**.

## Features

- Modern, responsive UI for clinics and small hospitals  
- Appointment management, patient records, billing, and teleconsultation  
- Interactive health packages and service sections  
- Animations powered by Framer Motion  

## Setup with Vite, React, and TypeScript

This template provides a minimal setup for React with Vite and TypeScript, including HMR (Hot Module Replacement) and ESLint rules.

### ESLint Configuration

For production apps, enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])

