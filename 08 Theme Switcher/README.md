# 🌗 Theme Switcher

> A simple React theme switcher that toggles between light and dark modes.

---

## 📸 Screenshots / Demo
![Screenshot 2025-06-22 163549](https://github.com/user-attachments/assets/d9a565d0-5ac5-4d97-8ee5-e92ad51e20d5)
![Screenshot 2025-06-22 163557](https://github.com/user-attachments/assets/fa232bb8-f0a6-423b-822a-729e3922a844)


---

## 🚀 Project Overview

This React app enables users to switch themes (light ↔ dark) with persistent preference. Features include:

- Uses React *Context API* to manage theme state.

- Persists user preference in **localStorage**.
- Applies `data-theme` attribute on `<html>` for CSS style adaptations.
- No external CSS frameworks; easy to customize.

---

## 🔧 Tech Stack

- **React** (hooks, functional components)  
- **CSS variables** for theme colors  
- **JavaScript Web APIs**: `localStorage`  
- **Tooling**: Likely Vite or Create‑React‑App (based on project structure)

---


**Key files:**

- `ThemeContext.js` – Defines React Context for theme value + setter.
- `ThemeProvider.jsx` – Wraps the app, reads/writes `localStorage`, toggles `data-theme` attribute.
- `ThemeToggle.jsx` – A UI switch/button component that changes theme.
- `theme.css` – CSS using `:root` and `[data-theme="dark"]` variables for colors.
- `App.jsx` – Main app UI, consuming theme context.
- `index.js` – Bootstraps React app inside `ThemeProvider`.

---




