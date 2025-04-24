<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
#  ElectroStore – A Single Page Application for Selling Electronics Online

##  Objective

ElectroStore is a responsive, modern Single Page Application (SPA) built with React that simulates an online electronics store. The main objective is to deliver an intuitive eCommerce interface where users can browse, search, filter, and manage electronic products. The frontend communicates with a mock backend powered by `json-server`, providing realistic API interactions via a local `db.json` file.

---

##  Project Features

###  Core Features
-  Display a dynamic catalog of electronic products (smartphones, laptops, accessories, etc.)
-  View individual product details (images, name, price)
-  Add products to a shopping cart
-  Manage cart: update quantities, remove items
-  Search, sort, and filter products
-  Navigate between pages (product list, product detail, cart) without page reloads

---

## Technical Scope

###  Frontend
- **React**: Component-based UI framework
- **React Router**: SPA routing for seamless navigation
- **CSS**: Custom styling using modern layout systems (Flexbox & Grid)

###  Backend (Mock)
- **json-server**: Serves mock REST API endpoints via `db.json`
- Provides endpoints like `/products`, `/orders`, etc.

###  API Integration
- **Fetch API** used to get and post data to/from `json-server`

### State Management
- **React Hooks** (`useState`, `useEffect`) for managing local UI state
- Dynamic state updates for cart operations, filtering, and product lists

---

## Getting Started

### 1. Clone the Repository
```bash
      git clone https://github.com/your-username/electrostore.git
         cd electrostore


   ### 2.Install Dependencies
   ```bash
   npm install

        ### 3. Run JSON Server
    Make sure you have json-server installed globally:
       npm install -g json-server
        Start the mock API:

    ```bash
        json-server --watch db.json --port 5000
     ### 4. Start React App
In a new terminal:

    ```bash
       npm run dev
      The app will run at: http://localhost:5173/

## Folder Structure

ElectroStore/
├── public/
│   └── db.json               # Mock data for json-server
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.js
│   ├── pages/
│   │   ├── ProductList.jsx
│   │   ├── ProductDetails.jsx
│   │   └── CartPage.jsx
│   ├── App.js
│   ├── main.js
│   └── styles/
│       └── index.css 
├── package.json
├── README.md
└── .gitignore



## Author
      Developed by Ruler8,tinamanga,Elvis108-coder

## License
This project is licensed under the MIT License.
>>>>>>> 13b3757482241d4c89707b68f89f31c04c221bb9
