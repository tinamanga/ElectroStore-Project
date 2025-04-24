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
   
   npm install

        ### 3. Run JSON Server
    Make sure you have json-server installed globally:
       npm install -g json-server
        Start the mock API:

    `
        json-server --watch db.json --port 5000
     ### 4. Start React App
In a new terminal:

    
       npm run dev
      The app will run at: http://localhost:5173/

## Folder Structure

EDevbuy/
├── node_modules/                # Installed npm packages
├── public/
│   └── db.json                  # JSON Server data (products, users, etc.)
├── src/
│   ├── assets/                  

│   │   ├── Cart.css
│   │   ├── CartPage.css
│   │   └── ElectroStore.mp4
│   ├── components/              
│   │   ├── Cart.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductCard.jsx
│   ├── context/                 
│   ├── pages/                   
│   │   ├── CartPage.jsx
│   │   ├── ProductDetails.jsx
│   │   └── ProductList.jsx
│   ├── App.css                  
│   ├── App.jsx                  
│   ├── index.css                
│   ├── layout.jsx               
│   └── main.jsx                 
├── .gitignore                   
├── eslint.config.js            
├── index.html                  
├── package-lock.json          
├── package.json                
├── README.md                   
└── vite.config.js              



## Author
      Developed by Ruler8,tinamanga,Elvis108-coder

## License
This project is licensed under the MIT License.