# Welcome to this project

## Project info

This repository contains a Vite + React starter with shadcn-ui and Tailwind CSS. 
Our innovative platform integrates individual nodes (households, producers, buildings or, regions) into a decentralized energy market. To deploy our decentralization system, we are offering automated intra-node energy flow optimization. This demo is a proof of concept for this said optimization.

**Use the web editor or your preferred IDE**

You can edit files using an online project editor or clone the repo and work locally with your preferred IDE.

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Proof of Concept**

In our Proof of Concept (POC) scenario, we examine a hypothetical green development project located in Amsterdam and comprising four homes. This POC is grounded in the needs and developments in the housing sector in Northern Europe and comprises a valid test case. As such, we are simulating a complex of four (4) homes located in Amsterdam and equipped with:

Solar Panels: 72 250W panels (115m2) @ 15% efficiency (18Kwh max per day)
Battery Pack: 43Kwh w. 70% discharge limit and max 2Kwh daily charging rate.
Grid Connection: Stable grid connection at the same price as what the solar power can be sold for.


**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Python

Libraries to be used:

- numpy
- pandas
- datapane
- plotly

## How can I deploy this project?

Use your preferred deployment workflow (Vercel, Netlify, or custom hosting). Build with `npm run build` and deploy the output.

## Can I connect a custom domain?

Yes — configure your hosting provider or DNS for the deployed site.
