Create DATABASE blushup_db;
USE blushup_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  sale BOOLEAN DEFAULT FALSE,
  salePrice DECIMAL(10, 2) DEFAULT NULL,
  image VARCHAR(255) NOT NULL,
  category VARCHAR(50) NOT NULL,
  serial_number VARCHAR(50) NOT NULL,
  stock_quantity INT NOT NULL,
  reviews_rating INT NOT NULL,
  reviews_count INT NOT NULL,
  description TEXT NOT NULL
);


INSERT INTO products (id, name, price, sale, salePrice, image, category, reviews_rating, reviews_count, description, serial_number, stock_quantity) VALUES
(1, 'Luxury Lipstick Set', 250.00, TRUE, 200.00, 'wlipstickset.png', 'womens', 4, 10, 'A premium collection of long-lasting, highly pigmented lipsticks in a variety of shades to suit every occasion.', 'WLS001', 100),
(2, 'Pro Eyeshadow Palette', 300.00, FALSE, NULL, 'eyeshadow2.jpg', 'womens', 4, 5, 'A professional eyeshadow palette with 20 highly blendable shades, perfect for both natural and dramatic looks.', 'WEP002', 50),
(3, 'Matte Foundation Kit', 350.00, FALSE, NULL, 'wfoundation.png', 'womens', 4, 7, 'A full-coverage foundation kit with a smooth matte finish, designed to last all day without creasing or fading.', 'MFK003', 30),
(4, 'Blush & Highlighter Duo', 200.00, TRUE, 180.00, 'wblushandhighlighter.webp', 'womens', 5, 2, 'A beautiful blush and highlighter duo that adds a natural glow and flush of color to your complexion.', 'BHD004', 75),
(5, 'Waterproof Mascara', 180.00, FALSE, NULL, 'wmascara.png', 'womens', 3, 1, 'A smudge-proof, long-lasting waterproof mascara that volumizes and lengthens your lashes effortlessly.', 'WM005', 120),
(6, 'Velvet Matte Lipstick', 220.00, TRUE, 180.00, 'wredlipstick.jpg', 'womens', 4, 8, 'A luxurious matte lipstick with a velvety texture, offering rich color payoff and all-day comfort.', 'VML006', 80),
(7, 'Glow Foundation', 280.00, FALSE, NULL, 'wglow.webp', 'womens', 5, 10, 'A lightweight, dewy foundation that enhances your natural glow while providing flawless coverage.', 'GF007', 40),
(8, 'Setting Spray', 190.00, FALSE, NULL, 'wsettingspray.jpg', 'womens', 4, 6, 'A refreshing setting spray that locks in your makeup for up to 12 hours without feeling heavy.', 'SS008', 70),
(9, 'Brow Pomade', 260.00, FALSE, NULL, 'wbrowpomade.png', 'womens', 4, 6, 'A waterproof, smudge-proof brow pomade for sculpting, defining, and filling in your eyebrows with ease.', 'BP009', 60),
(10, 'Flawless Contour Kit', 320.00, TRUE, 270.00, 'wcontour.jpg', 'womens', 5, 4, 'A versatile contour kit with a blend of bronzers and highlighters to sculpt and define your features.', 'FC010', 50),

(11, 'Men\'s Tinted Moisturizer', 150.00, FALSE, NULL, 'mtinted.webp', 'mens', 4, 5, 'A lightweight tinted moisturizer that hydrates and evens out skin tone for a natural look.', 'MTM011', 100),
(12, 'BB Cream for Men', 120.00, TRUE, 100.00, 'mcream.jpg', 'mens', 4, 3, 'A multi-functional BB cream that provides light coverage while nourishing and protecting the skin.', 'BBC012', 80),
(13, 'Men\'s Eyebrow Gel', 80.00, FALSE, NULL, 'meyebrowgel.webp', 'mens', 4, 9, 'A clear or tinted eyebrow gel that shapes and holds brows in place for a polished appearance.', 'MEG013', 150),
(14, 'Men\'s Under-Eye Concealer', 200.00, FALSE, NULL, 'mundereye.jpg', 'mens', 4, 7, 'A lightweight under-eye concealer that instantly reduces dark circles and signs of fatigue.', 'MUC014', 60),
(15, 'Oil-Free Foundation', 300.00, FALSE, NULL, 'moilfoundation.jpg', 'mens', 5, 10, 'A breathable, oil-free foundation that provides a matte finish and long-lasting coverage.', 'OFF015', 30),
(16, 'Men’s Setting Powder', 60.00, FALSE, NULL, 'mpowder.avif', 'mens', 4, 12, 'A lightweight setting powder that controls shine and sets makeup in place for all-day wear.', 'MSP016', 80),
(17, 'Natural Finish Concealer', 90.00, TRUE, 70.00, 'mconcealer.jpg', 'mens', 3, 6, 'A natural-finish concealer that covers imperfections while blending seamlessly into the skin.', 'NFC017', 110),
(18, 'Men\'s Lip Balm with Tint', 250.00, FALSE, NULL, 'mlipbalm.jpg', 'mens', 5, 4, 'A hydrating lip balm with a subtle tint, keeping lips soft and nourished throughout the day.', 'MLB018', 90),
(19, 'Men\'s Neutral Eyeshadow', 110.00, FALSE, NULL, 'mshadow.avif', 'mens', 3, 8, 'A neutral-toned eyeshadow palette designed for subtle enhancement and definition.', 'MNE019', 120),
(20, 'Beard and Brow Pencil', 140.00, TRUE, 120.00, 'meyebrowpencil.webp', 'mens', 4, 9, 'A dual-purpose pencil to define and fill in both beards and brows for a fuller look.', 'BBP020', 75),

(21, 'Colorful Lip Gloss', 50.00, FALSE, NULL, 'klipglosspack.webp', 'kids', 4, 12, 'A fun and colorful lip gloss that provides a shiny finish with a sweet flavor.', 'CLG021', 200),
(22, 'Shimmer Blush', 45.00, FALSE, NULL, 'kblush.png', 'kids', 5, 8, 'A gentle shimmer blush for a light, playful flush of color on young cheeks.', 'SB022', 150),
(23, 'Magic Eyeshadow Crayons', 60.00, FALSE, NULL, 'kmagiccrayons.png', 'kids', 4, 10, 'Vibrant and safe eyeshadow crayons that are easy to apply and remove for kids.', 'MEC023', 180),
(24, 'Peachy Lip Balm', 30.00, TRUE, 25.00, 'klipbalm.jpeg', 'kids', 5, 6, 'A moisturizing lip balm with a fruity peach scent that kids love.', 'PLB024', 100),
(25, 'Sweet Sparkle Nail Polish', 40.00, FALSE, NULL, 'knailpolish.png', 'kids', 4, 7, 'A kid-friendly nail polish with sparkle for a fun, festive look.', 'SSNP025', 130),
(26, 'Butterfly Face Glitter', 35.00, FALSE, NULL, 'kglitter.webp', 'kids', 4, 5, 'Fun, safe glitter to add a touch of sparkle to your face for special occasions.', 'BFG026', 90),
(27, 'Rainbow Cheek Stick', 50.00, FALSE, NULL, 'krainbow.jpg', 'kids', 5, 9, 'A multicolored cheek stick for a playful, light tint on cheeks.', 'RCS027', 200),
(28, 'Starry Nail Decals', 25.00, FALSE, NULL, 'knails.avif', 'kids', 4, 4, 'Fun star-shaped nail decals for a cool, personalized touch on nails.', 'SND028', 150),
(29, 'Unicorn Lip Gloss Set', 55.00, TRUE, 45.00, 'klipgloss.png', 'kids', 5, 10, 'A set of sparkling lip glosses with fun unicorn-themed packaging.', 'ULGS029', 250),
(30, 'Glitter Face Stickers', 40.00, FALSE, NULL, 'kstickers.avif', 'kids', 4, 3, 'Cute glitter stickers for decorating faces with playful designs.', 'GFS030', 60);

SET SQL_SAFE_UPDATES = 0;

UPDATE products SET image = SUBSTRING_INDEX(image, '/', -1);

SET SQL_SAFE_UPDATES = 1;


CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,  -- To store the hashed password
  phone VARCHAR(20),
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,  -- To store the hashed password
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  phone VARCHAR(20),
  address TEXT,
  user_role VARCHAR(20)
);

UPDATE `blushup_db`.`users` SET `user_role` = 'admin' WHERE (`user_id` = '2');

ALTER TABLE users ADD COLUMN reset_token VARCHAR(255) NULL;
ALTER TABLE users ADD COLUMN reset_token_expiration DATETIME NULL;

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    zip VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    card_number VARCHAR(20) NOT NULL,
    expiry_date VARCHAR(10) NOT NULL,
    cvv VARCHAR(5) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE
);





-- Booking Table

CREATE TABLE stylists (
  stylist_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  expertise VARCHAR(255),
  contact_info VARCHAR(255),
  availability TEXT
);

CREATE TABLE bookings (
    booking_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    booking_date DATE NOT NULL,
    booking_time TIME NOT NULL,
    stylist VARCHAR(100) NOT NULL,
    special_request TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


 
-- ADMIN LOGIN
CREATE TABLE admins (
  admin_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

 INSERT INTO admins (username, password_hash) VALUES ('admin', '$2b$10$ExampleHash'); -- Replace with a real bcrypt hash