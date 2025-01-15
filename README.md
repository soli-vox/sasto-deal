# Sasto Deal

A multi-vendor eCommerce system with a Laravel-based backend and a React.js frontend.

---

## Requirements
### Backend (Laravel)
- PHP 8.2 or higher
- Composer
- MySQL or another database
- Node.js (for frontend assets in Laravel)

### Frontend (React.js)
- Node.js 16.x or higher
- npm or yarn (for package management)

---

## Installation Guide

### Step 1: Clone the Repository

git clone https://github.com/devisopen/sasto-deal.git



### Step 2: Backend Setup (Laravel)
1. Navigate to the git sasto-deal folder
   ```bash
   cd sasto-deal

2. Navigate to the backend folder:
   ```bash
   cd backend
3. Install dependencies via Composer:
   ```bash
   composer install
4. Create a .env file:
   ```bash
   cp .env.example .env
5. Generate the application key:
   ```bash
   php artisan key:generate
6. Set up your database in the .env file:
   ```bash
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_user
   DB_PASSWORD=your_database_password
7. Run migrations and seed the database:
   ```bash
   php artisan migrate --seed
8. Serve the Laravel application:
   ```bash
   php artisan serve



---

### **Step 3: Frontend Setup (React.js)**

1. Navigate to the frontend folder:
   ```bash
   cd ../frontend
2. Install dependencies:
   ```bash
   npm install
3. Start the React development server:
   ```bash
   npm run dev


---

Feel Free to ask
