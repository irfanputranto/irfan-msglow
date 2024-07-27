# Create a Simple Product and Cart Display System

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [License](#license)

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js v18](https://nodejs.org/)
- [Composer 2.5.7](https://getcomposer.org/)
- [PHP 8.2](https://www.php.net/)
- [MySQL](https://www.mysql.com/)

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/irfanputranto/msglow-irfan.git
cd msglow-irfan
```

### Step 2: Setting Up the Environment

#### Configure the '.env' file

Copy file .env.example to rename .env

```bash
cp .env.example .env
```

update the '.env' file with your database credential
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

### Step 3: Install Dependencies & Migration

For Windows

```bash
sh install.sh
```

For Linux

```bash
install.sh
```

### Step 4: Running the Application

Running Laravel

```bash
php artisan serve
```

Running React

```bash
npm run devs
```

# License

Copyright (c) 2024 Naf-Dreams (Irfan Putranto Prtama)

Portfolio http://naf-dreams.my.id/