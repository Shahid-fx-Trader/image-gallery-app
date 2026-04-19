# 🖼️ Image Gallery App

A clean, responsive image gallery built with React that fetches and displays photos from the [Picsum Photos API](https://picsum.photos/). Browse beautiful images with smooth pagination and click through to view originals.

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?style=flat&logo=axios&logoColor=white)

---

## 📋 Description

Image Gallery App is a React-based web application that fetches high-quality images from the Picsum Photos API and presents them in a responsive grid layout. Each image displays the author's name and is clickable — opening the full-resolution original in a new tab. Navigation between pages is handled through intuitive Next and Previous buttons, making browsing effortless.

This project is a great example of working with external APIs, React hooks, and utility-first CSS in a real-world scenario.

---

## ✨ Features

- 📡 **Live API Integration** — Fetches real images from the Picsum Photos API
- 🏗️ **Responsive Grid Layout** — Adapts cleanly across desktop, tablet, and mobile screens
- 👤 **Author Attribution** — Displays the photographer's name on each image card
- 🔄 **Pagination** — Navigate through images using Next / Previous buttons
- 🖱️ **Clickable Images** — Each image opens the original in a new browser tab
- 🎨 **Modern UI** — Minimal, clean design powered by Tailwind CSS

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://reactjs.org/) | UI library (useState, useEffect hooks) |
| [Axios](https://axios-http.com/) | HTTP client for API requests |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling framework |
| [Picsum Photos API](https://picsum.photos/) | Source of random images |

---

## 🚀 Installation & Setup

Follow these steps to run the project locally:

**1. Clone the repository**
```bash
[git clone ](https://github.com/Shahid-fx-Trader/image-gallery-app.git)cd image-gallery-app
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm start
```

**4. Open in your browser**
```
http://localhost:3000
```

> **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) (v16 or later) and npm installed on your machine.

---

## 📖 Usage

1. Launch the app — images load automatically from the Picsum API.
2. Browse the gallery displayed in a responsive grid.
3. Click any image to open the full-resolution original in a new tab.
4. Use the **Previous** and **Next** buttons at the bottom to navigate between pages.

---

## 📁 Folder Structure

```
image-gallery-app/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx                 # Root component with state & API logic
│   ├── index.js                # React entry point
│   └── index.css               # Tailwind CSS imports
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🔮 Future Improvements

- [ ] **Search functionality** — Filter images by keyword or category
- [ ] **Lightbox modal** — View full-size images in an overlay instead of a new tab
- [ ] **Favorites** — Let users save and revisit favourite images
- [ ] **Download button** — One-click image download
- [ ] **Loading skeletons** — Skeleton placeholders while images are fetching
- [ ] **Dark mode** — Toggle between light and dark themes
- [ ] **Infinite scroll** — Replace pagination with seamless scroll loading

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ and React</p>
