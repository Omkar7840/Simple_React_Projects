# 🧩 Mini Context Practice

A small React app demonstrating the use of **Context API** for managing user login state across the app.

---

## Screenshots of the project

![Screenshot 2025-06-21 185535](https://github.com/user-attachments/assets/47d90f27-37c6-4fcc-8c58-f0b630b78f6d)
![Screenshot 2025-06-21 185548](https://github.com/user-attachments/assets/34f3fe43-fa7c-4287-afaf-820465fbfa83)

---

## 🔍 Features

- Lightweight user context management
- Simple login & logout flow
- Shared state across components using React Context
- Starter layout ready for extension

---

## 🗂️ Project Structure

```text
07 Mini Context/
├── public/
│   └── index.html               # Entry HTML file
├── src/
│   ├── components/
│   │   ├── Profile.jsx          # Profile page that consumes user context
│   │   └── Login.jsx            # Login form to set user info
│   ├── context/
│   │   ├── UserContext.js       # React Context object
│   │   └── UserContextProvider.jsx  # Wraps app and provides `{ user, setUser }`
│   ├── App.jsx                  # Main app with routing
│   └── index.jsx                # App bootstrap with router + provider
├── package.json
└── README.md
