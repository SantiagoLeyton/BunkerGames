CREATE DATABASE IF NOT EXISTS bunkergames;
USE bunkergames;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2),
    stock INT,
    trailer VARCHAR(255),
    logo VARCHAR(255),
    images TEXT, -- se pueden guardar rutas separadas por coma
    tags TEXT -- guardar etiquetas separadas por coma
);

CREATE TABLE giftcards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    logo VARCHAR(255),
    price DECIMAL(10, 2),
    stock INT
);

CREATE TABLE cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    product_type ENUM('game', 'giftcard') NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(id)
);