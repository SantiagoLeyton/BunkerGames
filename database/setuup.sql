-- Tabla de usuarios (el admin tendrá ID 1)
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,  -- Guardaremos el hash con bcrypt
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de juegos
CREATE TABLE games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    trailer_url VARCHAR(255),       -- Enlace de YouTube
    image_url VARCHAR(255),         -- Ruta de la imagen principal
    is_hidden BOOLEAN DEFAULT FALSE -- Para ocultar juegos sin eliminarlos
);

-- Tabla de tarjetas de regalo
CREATE TABLE gift_cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    image_url VARCHAR(255)          -- Logo de la tarjeta
);

-- Tabla de compras (simplificada para el proyecto)
CREATE TABLE purchases (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    game_id INT,                    -- Puede ser NULL si compra una tarjeta
    card_id INT,                    -- Puede ser NULL si compra un juego
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (game_id) REFERENCES games(id),
    FOREIGN KEY (card_id) REFERENCES gift_cards(id)
);