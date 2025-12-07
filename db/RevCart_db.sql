-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: revcart_db
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,
  `cart_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKpcttvuq4mxppo8sxggjtn5i2c` (`cart_id`),
  KEY `FK1re40cjegsfvw58xrkdp6bac6` (`product_id`),
  CONSTRAINT `FK1re40cjegsfvw58xrkdp6bac6` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `FKpcttvuq4mxppo8sxggjtn5i2c` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart_items`
--

LOCK TABLES `cart_items` WRITE;
/*!40000 ALTER TABLE `cart_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) DEFAULT NULL,
  `updated_at` datetime(6) DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_64t7ox312pqal3p7fg9o503c2` (`user_id`),
  CONSTRAINT `FKb5o626f86h46m4s7ms6ginnop` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `active` bit(1) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_t8o6pivur7nn124jehx7cygw5` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'','electronics',_binary '\0',NULL),(2,'','vegetables',_binary '','2025-12-02 18:18:46.233006'),(3,'','Fruits',_binary '','2025-12-02 18:42:38.102226');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupons`
--

DROP TABLE IF EXISTS `coupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupons` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `active` bit(1) NOT NULL,
  `code` varchar(255) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `first_order_only` bit(1) NOT NULL,
  `min_order_amount` decimal(38,2) DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `type` enum('FIXED_AMOUNT','FREE_DELIVERY','PERCENTAGE') DEFAULT NULL,
  `value` decimal(38,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_eplt0kkm9yf2of2lnx6c1oy9b` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupons`
--

LOCK TABLES `coupons` WRITE;
/*!40000 ALTER TABLE `coupons` DISABLE KEYS */;
INSERT INTO `coupons` VALUES (1,_binary '','FREE','2025-12-02 18:06:08.086600','Get free delivery on your order',_binary '\0',NULL,'Free Delivery','FREE_DELIVERY',0.00),(2,_binary '','FIRST','2025-12-02 18:06:08.140945','₹100 off on your first order',_binary '',NULL,'First Order Discount','FIXED_AMOUNT',100.00),(3,_binary '','SAVE10','2025-12-02 18:06:08.154281','Get 10% discount on your order',_binary '\0',NULL,'10% Off','PERCENTAGE',10.00),(4,_binary '','SAVE15','2025-12-02 18:06:08.165865','Get 15% discount on your order',_binary '\0',NULL,'15% Off','PERCENTAGE',15.00);
/*!40000 ALTER TABLE `coupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` decimal(10,2) NOT NULL,
  `quantity` int NOT NULL,
  `order_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKbioxgbv59vetrxe0ejfubep1w` (`order_id`),
  KEY `FKocimc7dtr037rh4ls4l95nlfi` (`product_id`),
  CONSTRAINT `FKbioxgbv59vetrxe0ejfubep1w` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKocimc7dtr037rh4ls4l95nlfi` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` text NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `delivered_at` datetime(6) DEFAULT NULL,
  `order_status` enum('CANCELLED','DELIVERED','OUT_FOR_DELIVERY','PACKED','PLACED') NOT NULL,
  `payment_method` varchar(255) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `total_amount` decimal(10,2) NOT NULL,
  `user_id` bigint NOT NULL,
  `customer_email` varchar(255) DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `customer_phone` varchar(255) DEFAULT NULL,
  `delivery_address` text,
  PRIMARY KEY (`id`),
  KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`),
  CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_reset_tokens` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `expiry_date` datetime(6) NOT NULL,
  `otp` varchar(255) NOT NULL,
  `used` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
INSERT INTO `password_reset_tokens` VALUES (5,'prathameshpatil.xx@gmail.com','2025-12-01 13:43:58.854141','494539',_binary '\0');
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `category` varchar(255) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` text,
  `discount_price` decimal(10,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `stock` int NOT NULL,
  `current_stock` int NOT NULL,
  `initial_stock` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=133 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (3,NULL,'Dairy & Eggs','2025-11-29 20:24:53.198761','Fresh whole milk from grass-fed cows',NULL,'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80','Premium Milk',65.00,4.50,100,100,100),(4,NULL,'Dairy & Eggs','2025-12-02 18:46:02.800558','',0.00,'https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2023-11-16/egg__6pcs_front.jpg','Eggs',80.00,4.50,100,100,100),(9,NULL,'fruits','2025-11-30 05:55:09.808092','Red Kashmiri Apples ',99.00,'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce','Apple',120.00,4.80,100,100,100),(11,NULL,'Snacks','2025-12-01 08:34:51.714415','Crispy salted potato chips',0.00,'https://www.onlinedelivery.in/images/thumbnails/710/626/detailed/36/76a8620b-020b-41cd-af15-d1adc9499546.jpg','Potato Chips',30.00,4.40,1000,1000,100),(12,NULL,'Snacks','2025-12-01 13:42:43.364582','Crunchy Mexican nachos',0.00,'https://thebusybaker.ca/wp-content/uploads/2017/12/rainbow-vegetable-skillet-nachos-fbig1.jpg','Nachos',50.00,4.50,80,80,80),(13,NULL,'Snacks',NULL,'Roasted salted peanuts',35.00,'https://images.unsplash.com/photo-1603046891744-c6e4b2f4fa05?auto=format&fit=crop&w=600&q=80','Salted Peanuts',40.00,4.40,90,0,90),(14,NULL,'Snacks','2025-11-30 14:30:53.081541','Healthy roasted makhana',0.00,'https://www.bbassets.com/media/uploads/p/l/40194137_4-snack-factory-makhana-pudina-masala-twist.jpg','Masala Makhana',120.00,4.60,40,40,40),(15,NULL,'Snacks','2025-11-30 13:19:41.205774','Rich milk chocolate bar',0.00,'https://www.quickpantry.in/cdn/shop/files/Cadbury_Dairy_Milk_Silk_-_Fruit_Nut_55_g.jpg?v=1744891850','Dairy milk',80.00,4.70,70,70,70),(16,NULL,'Snacks',NULL,'Ready-to-eat salted popcorn',25.00,'https://images.unsplash.com/photo-1510626176961-4b57d4f3c982?auto=format&fit=crop&w=600&q=80','Popcorn',30.00,4.50,100,0,100),(17,NULL,'Snacks',NULL,'High protein snack bar',130.00,'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80','Protein Bar',150.00,4.60,40,0,40),(18,NULL,'Snacks','2025-11-30 13:23:42.986365','Fresh baked cookies',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBjp_8ROQV-4-JI5nMxLW-Hj92qYK_pnoxA&s','Cookies',100.00,4.70,50,50,60),(20,NULL,'Snacks','2025-11-30 12:51:13.571941','Crispy Kerala banana chips',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqwiG95-EZxX6QYhtwOd0n5M2J4N1e2fWNg&s','Banana Chips',70.00,4.50,79,79,80),(21,NULL,'Snacks','2025-11-30 19:12:35.461105','South Indian crispy snack',0.00,'https://5.imimg.com/data5/SELLER/Default/2024/10/456575155/MW/RT/VV/468492/rajaram-s-butter-murukku-500x500.jpg','Murukku',60.00,4.40,70,70,70),(22,NULL,'Snacks','2025-11-30 12:53:22.728010','Crunchy spicy bhujia',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmS2n24APQmXfzJ0PXMwPsosQVw6svNCew1w&s','Bhujia',40.00,4.40,98,98,100),(23,NULL,'Snacks','2025-11-30 19:16:19.801105','Creamy cheese dip for nachos',0.00,'https://www.bbassets.com/media/uploads/p/xl/40306440-9_1-flaveo-cheesy-nachos-dip.jpg','Nacho Cheese Dip',150.00,4.70,40,40,40),(24,NULL,'Snacks',NULL,'Premium roasted cashews',180.00,'https://images.unsplash.com/photo-1592928306735-6b0e1fa89bbf?auto=format&fit=crop&w=600&q=80','Salted Cashews',200.00,4.80,30,0,30),(25,NULL,'Snacks','2025-11-30 13:18:56.084637','Chocolate chip cookies',0.00,'https://m.media-amazon.com/images/I/61+kx6f7O1L.jpg','Choco Cookies',120.00,4.70,60,60,60),(26,NULL,'Snacks','2025-11-30 13:49:54.502214','Healthy oats granola bar',0.00,'https://www.shutterstock.com/image-photo/advertisement-granola-bar-packaging-isolated-260nw-2630322285.jpg','Granola Bar',130.00,4.60,40,40,40),(27,NULL,'Snacks','2025-11-30 13:27:55.221894','Puffy corn snack',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYO52yZOfaFFT1cTZKTy3Jn11OxC_lGBqooQ&s','Corn Puffs',20.00,4.30,100,100,100),(28,NULL,'Snacks','2025-11-30 14:32:56.058714','Traditional Indian peanut chikki',0.00,'https://shreechikki.in/cdn/shop/files/shreeji_peanut_chikki_chikki_100g_3d.png?v=1758091487','Peanut Chikki',30.00,4.50,90,90,90),(30,NULL,'Snacks','2025-11-30 13:35:39.030750','Premium dry fruit laddu',0.00,'https://m.media-amazon.com/images/I/71T-nwk-6wL.jpg','Dry Fruit Laddu',250.00,4.90,25,25,25),(31,NULL,'Bakery','2025-11-30 13:05:27.649493','Freshly baked whole wheat bread',0.00,'https://www.jiomart.com/images/product/original/490626264/wibs-browny-whole-wheat-bread-400-g-product-images-o490626264-p490626264-0-202403050641.jpg?im=Resize=(1000,1000)','Whole Wheat Bread',40.00,4.50,30,30,30),(32,NULL,'Bakery','2025-11-30 12:58:59.436004','Healthy brown bread loaf',0.00,'https://www.bbassets.com/media/uploads/p/l/40195005_2-popular-brown-bread.jpg','Brown Bread',45.00,4.60,40,40,40),(33,NULL,'Bakery','2025-11-30 13:31:03.586517','Buttery French croissant',0.00,'https://cdn.dribbble.com/userupload/10246232/file/original-e3b644c1a06a3ab3ef9b7783de20bbdb.jpg?resize=752x&vertical=center','Croissant',80.00,4.70,50,50,50),(34,NULL,'Bakery','2025-11-30 13:22:22.791880','Soft donut with chocolate glaze',0.00,'https://png.pngtree.com/png-vector/20250905/ourmid/pngtree-individual-chocolate-donut-packaged-in-black-wrapper-for-sale-png-image_17358074.webp','Chocolate Donut',60.00,4.60,60,60,60),(35,NULL,'Bakery','2025-11-30 13:48:37.379748','Oven-baked garlic breadsticks',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDR0SBN6FaqH69qDGdVFnzk14eoYRRhe5KmYE_kbTC0ytXEBDctI4Hnx0AS4VLlrMzEE&usqp=CAU','Garlic Bread',90.00,4.80,40,40,40),(36,NULL,'bakery','2025-11-30 12:50:33.369385','Soft homemade banana cake',0.00,'https://hips.hearstapps.com/hmg-prod/images/banana-cake-index-668d577807a62.jpg?crop=0.8886439484400355xw:1xh;center,top&resize=1200:*','Banana Cake',150.00,4.70,30,30,30),(37,NULL,'Bakery','2025-11-30 16:16:00.522211','Colorful assorted cupcakes',0.00,'https://cdnnew.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-yummy-black-forest-cupcakes-192469-m.jpg','Cupcakes',100.00,4.70,50,50,50),(38,NULL,'Bakery','2025-11-30 14:01:08.718839','Classic soft white bread loaf',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_7O_NwROZhAu8_QmsMpYUksTsEotnd62Gtw&s','White Bread',35.00,4.50,40,40,40),(39,NULL,'Bakery','2025-11-30 13:00:23.701628','Crunchy butter cookies',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGOqMtkqI45C4TYVPgWmLDSNWxphIDEEonIg&s','Cookies',120.00,4.80,58,58,60),(41,NULL,'Bakery','2025-11-30 13:26:39.585528','Soft chocolate chip muffin',0.00,'https://www.bbassets.com/media/uploads/p/l/40347173_1-the-bakers-dozen-choco-chip-muffin.jpg','Chocolate Muffin',50.00,4.70,70,70,70),(42,NULL,'Bakery','2025-11-30 14:49:18.313617','Ready-made pizza crust',0.00,'https://5.imimg.com/data5/SELLER/Default/2020/9/PT/TF/QG/69094599/pizza-base-packaging-pouch.jpg','Pizza Base',60.00,4.50,60,60,60),(43,NULL,'Bakery',NULL,'Crunchy cardamom rusk',40.00,'https://images.unsplash.com/photo-1563636619-ece9e0f4b767?auto=format&fit=crop&w=600&q=80','Rusk',45.00,4.40,100,0,100),(45,NULL,'Bakery','2025-11-30 12:57:35.389149','Soft mini bread rolls',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2euimiC72vvE4XXPKkSypExbVosriqa42A&s','Bread Rolls',45.00,4.50,60,60,60),(46,NULL,'Bakery','2025-11-30 19:11:57.250676','Healthy multigrain bread',0.00,'https://imaginity.com/wp-content/uploads/2022/12/imaginity_webers-specialty_bread_packaging-design.jpg','Multigrain Bread',60.00,4.60,50,50,50),(47,NULL,'Bakery','2025-11-30 13:36:15.003346','Soft sweet cream bun',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZYMJTgbYzSrCBxESML8WcZ8becohlcUr-A&s','Cream Bun',35.00,4.40,70,70,70),(48,NULL,'Bakery','2025-11-30 13:35:01.215035','Assorted donut pack of 6',210.00,'https://cpimg.tistatic.com/09706931/b/4/Six-Pieces-of-Donut-Packaging-Boxes-Manufacturer-Supplier.jpg','Donut Box (6)',220.00,4.80,30,30,30),(49,NULL,'Bakery','2025-11-30 13:04:45.646432','moserella cheese',90.00,'https://5.imimg.com/data5/SELLER/Default/2022/3/BA/VN/QF/1442638/40126254-2-1-amul-pizza-cheese-mozzarella-diced.jpg','Cheese mozerella',120.00,4.70,40,40,40),(50,NULL,'Bakery','2025-11-30 13:21:03.035148','Rich fudgy brownie',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9LMVIDI04FpceRcr_EsRGDbgaE0gXxBS5w&s','Mango Brownie',90.00,4.80,40,40,40),(51,NULL,'Beverages','2025-11-30 19:18:06.732945','Fresh orange fruit juice',0.00,'https://i.pinimg.com/736x/c1/df/aa/c1dfaaccd2dfdc8aae2d3f9a8f0cd59c.jpg','Orange Juice',120.00,4.50,80,80,80),(52,NULL,'Beverages','2025-11-30 13:25:04.367741','Chilled Coca Cola bottle',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoxW-04cHh_18WeGMi73rCtz-KuCzMJxUYSW5QaaFQ_6dbqYhvJhPrs-12NKjZp4HWHyw&usqp=CAU','Coca Cola',40.00,4.40,100,100,100),(53,NULL,'Beverages','2025-11-30 14:08:25.122968','Thick sweet mango juice',0.00,'https://www.crazyvegankitchen.com/wp-content/uploads/2023/06/mango-juice-recipe.jpg','Mango Juice',110.00,4.60,60,60,60),(54,NULL,'Beverages','2025-11-30 13:36:53.927169','Iced cold brewed coffee',0.00,'https://i.pinimg.com/236x/88/39/23/8839232c2e914c08613dce8afe054bd6.jpg','Cold Coffee',150.00,4.70,50,50,50),(55,NULL,'Beverages','2025-11-30 13:46:17.596954','Natural coconut water',0.00,'https://thumbs.dreamstime.com/b/coconut-water-green-packaging-sold-supermarket-pantai-remis-perak-october-coconut-water-green-packaging-sold-293251270.jpg','Fresh Coconut Water',60.00,4.80,100,100,100),(56,NULL,'Beverages','2025-11-30 13:41:43.900118','Refuel energy drink',0.00,'https://yaffa-cdn.s3.amazonaws.com/yaffadsp/images/dmImage/StandardImage/RedB1_07C58640-2212-11E6-8F46020ED517F827.jpg','Red bull Energy Drink',110.00,4.40,60,60,60),(57,NULL,'Beverages','2025-11-30 19:14:06.942233','Refreshing lemon iced tea',0.00,'https://5.imimg.com/data5/SELLER/Default/2024/7/437308177/LJ/UC/ZV/798985/mr-kool-lemon-iced-tea-500x500.jpeg','Lemon Ice Tea Powder',90.00,4.50,70,70,70),(58,NULL,'Beverages','2025-11-30 12:56:45.369003','Strong roasted black coffee',0.00,'https://www.tatanutrikorner.com/cdn/shop/files/1_83e62f12-ec78-48af-834d-22196e8db858-fococlipping-HD_2.png?v=1748858295&width=823','Tata Coffee',80.00,4.60,55,55,60),(59,NULL,'Beverages','2025-11-30 14:04:34.312662','Relaxing green tea bags',0.00,'https://images.ctfassets.net/e8bhhtr91vp3/DJia3AeL6uZFtTE0KiPMs/1c8ba182e2d9be59391305459b30c9ef/Lipton-website_Mobile-Green-Teas.webp?w=800&q=50','Green Tea',50.00,4.50,50,50,90),(60,NULL,'Beverages','2025-11-30 19:15:02.091042','Thick chocolate milkshake',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdY3gnMaHHkkwsEcOCy0txUxJTg8_XfnPtQ&s','Milkshake',130.00,4.70,40,40,40),(61,NULL,'Beverages',NULL,'High protein chocolate shake',230.00,'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80','Protein Shake',250.00,4.80,40,0,40),(62,NULL,'Beverages','2025-11-30 14:15:52.564295','Mineral packaged water',0.00,'https://www.shutterstock.com/image-photo/skiathos-greece-062624-plastic-bottled-600nw-2493938399.jpg','Water Bottle',20.00,4.40,120,120,120),(64,NULL,'Beverages','2025-11-30 13:01:08.869095','Refreshing salted buttermilk',0.00,'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/da/cms-assets/cms/product/bd3ce0e0-1b7d-415d-8e5d-0a128d46cbb8.png','Amul Buttermilk',35.00,4.60,78,78,80),(65,NULL,'Beverages','2025-11-30 14:23:34.250326','Sweet creamy Punjabi lassi',0.00,'https://www.jiomart.com/images/product/original/590009674/kiwi-imported-3-pcs-pack-product-images-o590009674-p590317377-1-202408070949.jpg?im=Resize=(1000,1000)','Lassi',60.00,4.70,60,60,60),(66,NULL,'Beverages','2025-11-30 13:34:26.343435','Premium hot brew bottle',169.00,'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80','hot Brew Coffee',170.00,4.80,50,50,40),(67,NULL,'Beverages','2025-11-30 14:38:25.502101','Sparkling soda water',0.00,'https://m.media-amazon.com/images/I/41akRAbexAL._AC_UF894,1000_QL80_.jpg','Soda Water',30.00,4.30,90,90,90),(68,NULL,'Beverages','2025-11-30 13:47:51.959796','Refreshing fruit punch drink',0.00,'https://i.pinimg.com/736x/e2/83/09/e283093d5e3e51251569764af7401904.jpg','Fruit Punch',140.00,4.60,50,50,50),(69,NULL,'Beverages','2025-11-30 19:11:04.220450','Healthy herbal tea blend',0.00,'https://www.shutterstock.com/image-vector/tea-packaging-design-zip-pouch-260nw-2264303347.jpg','Herbal Tea',50.00,4.60,80,80,80),(70,NULL,'Beverages',NULL,'Sparkling fresh fruit drink',180.00,'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&w=600&q=80','Sparkling Juice',200.00,4.70,40,0,40),(71,NULL,'Meat & Seafood','2025-11-30 13:06:16.469692','Fresh boneless chicken breast',230.00,'https://m.media-amazon.com/images/I/518spFpRg+L._AC_UF894,1000_QL80_.jpg','Chicken Breast',250.00,4.70,60,60,60),(72,NULL,'Meat & Seafood','2025-11-30 13:11:21.914995','Tender chicken legs perfect for grilling',0.00,'https://m.media-amazon.com/images/I/61SclcQySJL._AC_UF894,1000_QL80_.jpg','Chicken Drumsticks',220.00,4.60,70,70,70),(73,NULL,'Meat & Seafood','2025-11-30 14:43:24.272013','Premium fresh mutton curry cut',0.00,'https://freshtogo.in/product_image/1734386635Mutton%20Curry%20Cut%20(Rewaji)%20-%20Medium%20Pieces.webp','Mutton Curry Cut',520.00,4.80,40,40,40),(74,NULL,'Meat & Seafood','2025-11-30 13:46:59.082333','Large white prawns',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgOp1OBKFbKFNxepUQnikT22roGvICsL4Kfw&s','Fresh Prawns',450.00,4.70,50,50,50),(75,NULL,'Meat & Seafood',NULL,'Fresh river rohu fish',270.00,'https://images.unsplash.com/photo-1617196034891-a1d3e41e80ea?auto=format&fit=crop&w=600&q=80','Rohu Fish',300.00,4.60,40,0,40),(76,NULL,'Meat & Seafood',NULL,'Norwegian salmon fillet',850.00,'https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=600&q=80','Salmon Fillet',900.00,4.90,30,0,30),(78,NULL,'Meat & Seafood','2025-11-30 13:17:17.644449','Lean chicken mince ideal for cutlets',0.00,'https://5.imimg.com/data5/SELLER/Default/2021/6/BG/OQ/NY/40307377/chicken-mince-500x500.jpg','Chicken Mince',240.00,4.60,60,60,60),(79,NULL,'Meat & Seafood',NULL,'Cold smoked salmon slices',950.00,'https://images.unsplash.com/photo-1600695237882-8f70b0f68132?auto=format&fit=crop&w=600&q=80','Smoked Salmon',1000.00,4.90,20,0,20),(80,NULL,'Meat & Seafood','2025-11-30 13:28:59.970176','Fresh white crab meat',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfrOpLjxl3UsunsnNRJZmEjASNiWgTI4iJ8w&s','Crab Meat',600.00,4.70,25,25,25),(81,NULL,'Meat & Seafood','2025-11-30 13:03:06.502330','Soft boneless catfish fillet',0.00,'https://cookingwithclaudy.com/wp-content/uploads/2023/03/20230329105343_IMG_4621-1.jpg','Catfish Fillet',350.00,4.50,40,40,40),(82,NULL,'Meat & Seafood','2025-11-30 13:17:00.375579','Juicy chicken wings',0.00,'https://5.imimg.com/data5/KZ/EP/MZ/SELLER-27508847/frozen-chicken-wings.jpg','Chicken Wings',220.00,4.70,50,50,50),(83,NULL,'Meat & Seafood',NULL,'Large fresh shrimps',650.00,'https://images.unsplash.com/photo-1604088920386-7abf3c08bf77?auto=format&fit=crop&w=600&q=80','Shrimp',700.00,4.80,40,0,40),(84,NULL,'Meat & Seafood',NULL,'Fresh rohu fish cut for curry',300.00,'https://images.unsplash.com/photo-1510626176961-4b57d4f3c982?auto=format&fit=crop&w=600&q=80','Rohu Bengali Cut',320.00,4.60,35,0,35),(85,NULL,'Meat & Seafood','2025-11-30 14:27:46.544748','Fresh mackerel fish',0.00,'https://m.media-amazon.com/images/I/61+gO-1CAfL._AC_UF894,1000_QL80_.jpg','Mackerel',260.00,4.50,40,40,40),(86,NULL,'Meat & Seafood','2025-11-30 13:15:22.136386','Juicy boneless chicken thigh',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuq9vJC_FROfPAk3Etd2_wy3zNLrwHLNBpBg&s','Chicken Thigh Boneless',260.00,4.70,50,50,50),(87,NULL,'Meat & Seafood','2025-11-30 14:18:34.827307','Premium king fish steaks',0.00,'https://www.shutterstock.com/image-photo/several-whole-kingfish-lie-on-260nw-2528579359.jpg','King Fish',900.00,4.80,20,20,20),(88,NULL,'Meat & Seafood','2025-11-30 14:40:59.426940','Clean soft squid rings',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lSWgVUm_NXeCPqXj3fETaY4YnmenkUBC_A&s','Squid Rings',500.00,4.60,30,30,30),(89,NULL,'Meat & Seafood','2025-11-30 12:54:27.777808','Ready-to-eat boiled eggs pack',0.00,'https://m.media-amazon.com/images/I/714r91-V7XL.jpg',' Eggs (6)',80.00,4.50,89,89,100),(90,NULL,'Meat & Seafood','2025-11-30 13:13:24.871099','Smoked chicken sausages',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9O-waVl_vTdJPDyAGnssiOMtFX6NAQlwHDg&s','Chicken Sausages',300.00,4.60,40,40,40),(91,NULL,'Dairy & Eggs',NULL,'Fresh whole milk from grass-fed cows',55.00,'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80','Premium Milk',65.00,4.50,100,0,100),(92,NULL,'Dairy & Eggs','2025-11-30 13:43:51.820103','instant noodles',0.00,'https://www.quickpantry.in/cdn/shop/products/maggi-masala-instant-noodles-70-g-quick-pantry.jpg?v=1710537948','maggie',80.00,4.50,60,60,60),(93,NULL,'Dairy & Eggs','2025-11-30 12:59:38.761226','Creamy salted butter',0.00,'https://www.bbassets.com/media/uploads/p/l/40045943_1-amul-butter-pasteurised.jpg','Amul Butter',120.00,4.60,50,50,50),(94,NULL,'Dairy & Eggs','2025-11-30 13:03:41.444997','Aged cheddar cheese block',150.00,'https://dlecta.com/cdn/shop/files/100_cheddarblock1.jpg?v=1703935831','Cheddar Cheese',180.00,4.80,40,40,40),(95,NULL,'Dairy & Eggs','2025-11-30 19:18:55.931537','Fresh soft paneer',0.00,'https://mir-s3-cdn-cf.behance.net/projects/404/d2e6b1201290163.Y3JvcCw1ODMzLDQ1NjIsMCwyMTY.jpg','Paneer',150.00,4.70,45,45,45),(96,NULL,'Dairy & Eggs','2025-11-30 13:54:06.865333','Thick high-protein yogurt',0.00,'https://worldbranddesign.com/wp-content/uploads/2021/11/Greek-2-world-brand-design.jpg','Greek Yogurt',90.00,4.60,60,60,60),(97,NULL,'Dairy & Eggs','2025-11-30 13:33:40.052556','Smooth probiotic curd',0.00,'https://cpimg.tistatic.com/09968450/b/4/95-Dia-350gm-curd-packaging-cup..jpg','Curd',60.00,4.50,80,80,80),(98,NULL,'Dairy & Eggs','2025-11-30 13:49:21.049716','Pure A2 cow ghee',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhtuQHeYV1WpUFk5GEguawNQ9oLFLVZgYPA&s','Ghee',350.00,4.80,30,30,30),(99,NULL,'Dairy & Eggs','2025-11-30 13:30:24.489507','Fresh dairy cream',100.00,'https://5.imimg.com/data5/SELLER/Default/2023/11/358969661/YS/QT/XY/104006097/fresh-cream-500x500.jpg','Fresh Cream',110.00,4.60,40,40,40),(100,NULL,'Dairy & Eggs','2025-11-30 14:46:40.929132','Soft mozzarella cheese',0.00,'https://dlecta.com/cdn/shop/files/Front_730d21db-e4c9-477a-8065-2b11e4877288.jpg?v=1741691018','Mozzarella',200.00,4.70,35,35,35),(101,NULL,'Dairy & Eggs','2025-11-30 13:24:27.833988','Sweet chocolate flavored milk',0.00,'https://mir-s3-cdn-cf.behance.net/projects/404/1522eb236377379.Y3JvcCwxNDAwLDEwOTUsMCwxNTI.jpg','Chocolate Milk',75.00,4.50,70,70,70),(102,NULL,'Dairy & Eggs','2025-11-30 13:40:53.153803','High-protein liquid egg whites',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSstdd7CqcGJXLsFqS-VcZzgoL_abniAWs_gg&s','Egg Whites cream',95.00,4.60,50,50,50),(103,NULL,'Dairy & Eggs','2025-11-30 13:27:16.705160','Fresh cottage cheese',0.00,'https://cmgplastics.com/wp-content/uploads/2022/05/CMGSEM2207_CottageCheese_Blog_v1.jpg','Cottage Cheese',140.00,4.60,45,45,45),(104,NULL,'Dairy & Eggs',NULL,'Rich creamy sour cream',115.00,'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=600&q=80','Sour Cream',130.00,4.50,40,0,40),(105,NULL,'Dairy & Eggs',NULL,'Digestive probiotic drink',45.00,'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&w=600&q=80','Probiotic Drink',50.00,4.40,90,0,90),(106,NULL,'Dairy & Eggs','2025-11-30 13:40:00.409935','Pack of 30 farm eggs',180.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRTQPRsL6_uttuDvJUqWmmPGEyp_3S6H0usOFbjvp-2N_F1YbFcyGOzzrDkqFsIJmmUc&usqp=CAU','Egg Pack (30)',180.00,4.70,155,155,150),(107,NULL,'Dairy & Eggs','2025-11-30 13:44:27.029103','Fruit flavored yogurt cups',0.00,'https://i.pinimg.com/736x/2f/ee/b7/2feeb76b3ccea57c3e2f5d8bbf07303f.jpg','Flavored Yogurt',60.00,4.50,80,80,80),(108,NULL,'Dairy & Eggs',NULL,'Low-fat skimmed milk',50.00,'https://images.unsplash.com/photo-1505575967455-5d9a98b1c6d9?auto=format&fit=crop&w=600&q=80','Skim Milk',60.00,4.40,70,0,70),(109,NULL,'Dairy & Eggs','2025-11-30 14:11:13.519138','Light and fluffy whipped cream',0.00,'https://presidentcheese.com/wp-content/uploads/2024/04/WhippedCreamRecipePage_CoverImage.jpg','Whipped Cream',160.00,4.70,35,35,35),(112,NULL,'Fruits & Vegetables','2025-11-30 14:35:58.793240','Seedless juicy red grapes',0.00,'https://5.imimg.com/data5/SELLER/Default/2021/9/RH/UT/SM/47860490/red-globe-grape-500x500.jpeg','Red Grapes',150.00,4.60,100,100,100),(113,NULL,'Fruits & Vegetables','2025-11-30 12:52:05.913173','Fresh organic bananas',0.00,'https://images.immediate.co.uk/production/volatile/sites/30/2025/03/Bunch-of-bananas-00871a2.jpg?quality=90&resize=440,400','Bananas',60.00,4.40,78,78,80),(114,NULL,'Fruits & Vegetables','2025-11-30 14:13:10.226960','Sweet and juicy watermelon',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD0qedAEEvk9S0-G_e3ur6BXTD_5k7UJ4Cog&s','Watermelon',180.00,4.50,40,40,40),(115,NULL,'Fruits & Vegetables','2025-11-30 19:20:43.857139','Fresh ruby red pomegranates',100.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGfXQQZJzng-Y4eZg6Q8Bi5pRJNUHCgKbNw&s','Pomegranates',160.00,4.60,60,60,60),(116,NULL,'Fruits & Vegetables','2025-11-30 13:57:15.978311','Vitamin C rich sweet oranges',0.00,'https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg','Oranges',100.00,4.50,90,90,90),(117,NULL,'Fruits & Vegetables',NULL,'Fresh tropical pineapple',75.00,'https://images.unsplash.com/photo-1502741338009-cac2772e18bc','Pineapple',90.00,4.40,50,0,50),(118,NULL,'Fruits & Vegetables','2025-11-30 14:21:42.840993','Imported high-nutrient kiwi',0.00,'https://www.jiomart.com/images/product/original/590009674/kiwi-imported-3-pcs-pack-product-images-o590009674-p590317377-1-202408070949.jpg?im=Resize=(1000,1000)','Kiwi',200.00,4.80,40,40,40),(119,NULL,'Fruits & Vegetables','2025-11-30 19:17:15.581172','Fresh sweet strawberries',0.00,'https://png.pngtree.com/thumb_back/fh260/background/20220729/pngtree-strawberry-beauty-package-gourmet-photo-image_32953300.jpg','Strawberries',250.00,4.90,35,35,35),(120,NULL,'Fruits & Vegetables','2025-11-30 19:15:24.540298','Premium Alphonso mangoes',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLVW6qU1XbyT70PDKRWXlxr_kNA7Vo1Sdog&s','Mangoes',300.00,4.90,60,60,60),(121,NULL,'Fruits & Vegetables','2025-11-30 12:58:12.091728','Farm fresh green broccoli',75.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnmsTqc4RhMDFWD3kmkwhJX-zzKAAx-mdnjw&s','Broccoli',80.00,4.60,60,60,60),(122,NULL,'Fruits & Vegetables','2025-11-30 13:07:02.571439','Organic white cauliflower',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-qovZ0FCqah6IyWZmH9f7wbKgEtqE4qUqw&s','Cauliflower',70.00,4.50,70,70,70),(123,NULL,'Fruits & Vegetables','2025-11-30 19:13:28.099083','Fresh red tomatoes',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSG8UubcMmAEVvdtsi-nIG1E5jtWMI9vhOuA&s','Tomatoes',50.00,4.60,100,100,100),(124,NULL,'Fruits & Vegetables','2025-12-01 08:33:52.742717','Clean organic potatoes',0.00,'https://img.freepik.com/premium-photo/two-potatoes-with-brown-spots-them-sit-white-surface_416902-1195.jpg','Potatoes',40.00,4.40,120,120,120),(125,NULL,'Fruits & Vegetables','2025-11-30 19:19:54.740637','Fresh farm onions',0.00,'https://5.imimg.com/data5/ANDROID/Default/2025/1/479903241/VE/IC/JH/234971033/product-jpeg-500x500.jpg','Onions',45.00,4.50,120,120,120),(126,NULL,'Fruits & Vegetables',NULL,'Fresh green spinach bundle',25.00,'https://images.unsplash.com/photo-1506806732259-39c2d0268443','Spinach',30.00,4.70,40,0,40),(127,NULL,'Fruits & Vegetables','2025-11-30 13:02:13.273989','Crunchy orange carrots',0.00,'https://media.istockphoto.com/id/1399548383/vector/carrot-with-leaves-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=JVqIhTEE0m8b26_nZcDoU3VqJVjHyc7P4m0j4Jf0qMs=','Carrots',60.00,4.60,68,68,70),(128,NULL,'Fruits & Vegetables','2025-11-30 13:01:38.812067','Fresh green cabbage',0.00,'https://cdn-prod.medicalnewstoday.com/content/images/articles/284/284823/one-big-cabbage.jpg','Cabbage',55.00,4.50,60,60,60),(129,NULL,'Fruits & Vegetables','2025-11-30 13:31:51.497845','Hydrating green cucumbers',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDWDRtI9TR1XCIDNY6rtoxkFgZrzdaWHENfw&s','Cucumber',40.00,4.40,60,60,60),(130,NULL,'Fruits & Vegetables','2025-11-30 12:52:41.825668','Organic purple beetroot',0.00,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkohgn4Bd7SIrWRaJtgCRmXeFFUWeDCx5ATA&s','Beetroot',70.00,4.60,50,50,50),(131,NULL,'frozen','2025-11-30 16:23:05.500786','bsqhguj',22000.00,'https://images.jdmagicbox.com/quickquotes/images_main/-c3qcsbfo.jpg','SmartPhone',23000.00,4.50,10,10,10),(132,NULL,'snacks','2025-12-01 13:32:56.996212','new gen',0.00,'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5884/5884809ld.jpg','laptop',12000.00,4.50,10,10,10);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified` bit(1) NOT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','CUSTOMER','DELIVERY_AGENT') NOT NULL,
  `otp_expiry` datetime(6) DEFAULT NULL,
  `verification_otp` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_6dotkott2kjsp8vw4d0m25fb7` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'123 Demo Street, Demo City','2025-11-29 21:53:01.511635','customer@demo.com',_binary '\0','Demo Customer','$2a$10$Km6/dfELzZ8F9PA.HUtJzetqRFscA31Z250eaQpfrT42124sN8gk2','9876543210','CUSTOMER',NULL,NULL),(2,NULL,'2025-11-29 21:53:01.707600','admin@demo.com',_binary '\0','Demo Admin','$2a$10$zponHoE3ZTB5TbBL/pQfi.h6GVENsYK1zAEnrsoAbGJoFnAA67BaK','9876543211','ADMIN',NULL,NULL),(3,NULL,'2025-11-29 21:53:01.792079','delivery@demo.com',_binary '\0','Demo Delivery Agent','$2a$10$uTIwbDAqzgC6gIAcW.K2Vue4t7tE/4Mkjx8By.BchGmkhuRAqCWGu','9876543212','DELIVERY_AGENT',NULL,NULL),(4,NULL,'2025-11-30 12:29:26.949071','prathamesh@demo.com',_binary '\0','Prathamesh Gajanan Patil','$2a$10$xU4ZJwC9Qrxm1baX/lFUuu1IJqOovxvuRgTP9PBllyEJjUrvQjWR2','8468822088','CUSTOMER',NULL,NULL),(5,NULL,'2025-11-30 16:24:45.973652','Guest@demo.com',_binary '\0','Guest','$2a$10$4p4ipBF9i0tvSRNm3B0AIuT3RKvYWkM1B6Bcvy5C6f0uO0tT1MDIi','1234567890','CUSTOMER',NULL,NULL),(6,NULL,'2025-11-30 17:34:17.896151','aman@demo.com',_binary '\0','aman pardeshi','$2a$10$thoHgdBTv9ajRG97xSBp8OKKcH5RfUpT3bdQHVTfo6uKRq0A9ks2W','3458822088','CUSTOMER',NULL,NULL),(7,NULL,'2025-11-30 18:42:26.428106','harshwarbhe@gmail.com',_binary '\0','Harsh Warbhe ','$2a$10$i59bPNNtRuqe3O7Ge49nY.1gK2eKAVVfgHbV0.nHGATTpZoxOwn76','1234567891','CUSTOMER',NULL,NULL),(8,NULL,'2025-11-30 18:56:41.894838','prathameshpatil.xx@gmail.com',_binary '\0','Pratham patil','$2a$10$0mPvw.FZSzdRBULaY2Ljj.IVnBgyunSiUlKGnKc5rS9z.us47eA9u','08468822088','CUSTOMER',NULL,NULL),(9,NULL,'2025-12-01 13:26:17.389041','aman@gmail.com',_binary '\0','aman p ','$2a$10$7QxkPQj76GpUXOFbF97Ez.lK6UebA.c4239LjJ5/qzR6uUVh9LEEC','01234567890','CUSTOMER',NULL,NULL),(10,NULL,'2025-12-02 18:45:01.818805','kartikpatil@gmail.com',_binary '\0','Kartik Patil','$2a$10$HTjhUW1Rg0VTaPzhWpmHdepjY7.duy5JL/iRxHkCG88j9VF.9Vwty','9087654321','CUSTOMER',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-05 22:04:46
