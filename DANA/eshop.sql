-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 10, 2022 at 02:40 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eshop`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` bigint(20) NOT NULL,
  `nama_barang` varchar(100) NOT NULL,
  `gambar` varchar(255) NOT NULL,
  `harga` float NOT NULL,
  `stok` int(11) NOT NULL,
  `deskripsi` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `nama_barang`, `gambar`, `harga`, `stok`, `deskripsi`) VALUES
(1, 'Cat Wheel', 'images/barang1.jpg', 500000, 123, 'Basically a hamster wheel but 10 times bigger. Highly recommended for chonky cats.'),
(2, 'Pet Cargo', 'images/barang2.jpg', 300000, 500, 'In case your furry friend doesn\'t like to be carried in your arms.'),
(3, 'Floof Bed', 'images/barang3.jpg', 100000, 100, 'Fluffy bed for fluffy pet'),
(4, 'Pet Bowl', 'images/barang6.jpeg', 80000, 321, 'Where my treats at??');

-- --------------------------------------------------------

--
-- Table structure for table `transaksi`
--

CREATE TABLE `transaksi` (
  `id_transaksi` bigint(20) NOT NULL,
  `nama_barang` varchar(100) NOT NULL,
  `harga` float NOT NULL,
  `quantity` int(11) NOT NULL,
  `total_harga` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transaksi`
--

INSERT INTO `transaksi` (`id_transaksi`, `nama_barang`, `harga`, `quantity`, `total_harga`) VALUES
(1, 'Floof Bed', 100000, 0, 0),
(2, 'Floof Bed', 100000, 0, 0),
(3, 'Floof Bed', 100000, 0, 0),
(4, 'Pet Bowl', 80000, 0, 0),
(5, 'Pet Cargo', 300000, 2, 600000),
(6, 'Cat Wheel', 500000, 2, 1000000),
(7, 'Cat Wheel', 500000, 2, 1000000),
(8, 'Cat Wheel', 500000, 2, 1000000),
(9, 'Cat Wheel', 500000, 2, 1000000),
(10, 'Pet Bowl', 80000, 6, 480000),
(11, 'Pet Cargo', 300000, 7, 2100000),
(12, 'Pet Cargo', 300000, 7, 2100000),
(13, 'Floof Bed', 100000, 1, 100000),
(14, 'Floof Bed', 100000, 9, 900000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`) VALUES
(1, 'sarah', 'sarahpontoh02@gmail.com', '123'),
(2, 'tes', 'tes1@gmail.com', 'tes123'),
(3, 'sarahhpth', 'tes2@gmail.com', '123'),
(4, 'user 11', 'user11@gmail.com', '123'),
(5, 'terserah', 'baru@gmail.com', '123');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`),
  ADD UNIQUE KEY `nama_barang` (`nama_barang`);

--
-- Indexes for table `transaksi`
--
ALTER TABLE `transaksi`
  ADD PRIMARY KEY (`id_transaksi`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `transaksi`
--
ALTER TABLE `transaksi`
  MODIFY `id_transaksi` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
