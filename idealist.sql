-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Jan 2017 um 15:51
-- Server-Version: 10.1.19-MariaDB
-- PHP-Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `idealist`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `idea`
--

CREATE TABLE `idea` (
  `ID` int(11) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `author` varchar(60) NOT NULL,
  `title` varchar(80) NOT NULL,
  `description` text NOT NULL,
  `acceptet` tinyint(1) DEFAULT NULL,
  `comment` text,
  `version` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `idea`
--

INSERT INTO `idea` (`ID`, `created_date`, `updated`, `author`, `title`, `description`, `acceptet`, `comment`, `version`) VALUES
(1, '2017-01-06 14:39:43', NULL, 'Thomas', 'Test', 'Test', NULL, NULL, '1');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `idea`
--
ALTER TABLE `idea`
  ADD KEY `ID` (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `idea`
--
ALTER TABLE `idea`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
