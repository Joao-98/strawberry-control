# 🍓 Strawberry Control

A web application to manage daily strawberry buying and selling operations, built with Next.js.

---

## 📖 Motivation

This project was inspired by real-life experience.

I worked for about 5 years in strawberry production and sales, where all records were manually written in notebooks — tracking purchases, sales, prices, and quantities.

Over time, this process became inefficient and error-prone, especially when trying to analyze results or calculate profits.

This application was built to solve that problem by digitizing the entire workflow, allowing faster and more reliable tracking of daily operations.

---

## 🚀 Features

- Register strawberry purchases and sales
- Track number of boxes and price per box
- Automatic calculation of totals
- Profit and revenue summary dashboard
- Persistent data using LocalStorage
- Multilingual support (Portuguese, English, Spanish)
- Shared global state using Context API
- Reusable form components
- Clean and responsive UI

---

## 📊 Pages

### 🛒 Buy

Register purchase entries (vendor, quantity, quality, price).

### 💰 Sell

Register sales entries (buyer, quantity, quality, price).

### 📈 Report

View overall summary:

- Total boxes bought
- Total boxes sold
- Total spent
- Total revenue
- Profit overview

---

## 🌍 Internationalization (i18n)

The application supports 3 languages:

- 🇧🇷 Portuguese
- 🇺🇸 English
- 🇪🇸 Spanish

Language is managed globally using Context API and persisted in LocalStorage.

---

## 🧠 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Context API (state management)
- LocalStorage (data persistence)

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/strawberry-control.git
```

```bash
npm install
# or
yarn install
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🌐 Live Demo

https://strawberry-control.vercel.app/
