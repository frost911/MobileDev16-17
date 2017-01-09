-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Erstellungszeit: 09. Jan 2017 um 23:01
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
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `author` varchar(60) NOT NULL,
  `title` varchar(80) NOT NULL,
  `description` text NOT NULL,
  `comment` text,
  `accepted` tinyint(1) DEFAULT NULL,
  `version` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Daten für Tabelle `idea`
--

INSERT INTO `idea` (`ID`, `created`, `updated`, `author`, `title`, `description`, `comment`, `accepted`, `version`) VALUES
(2, '2017-01-06 20:48:35', '2017-01-09 21:59:33', 'Thomas', 'Test', 'TestTestTestTestTestl', 'adgasg', 1, '64'),
(6, '2017-01-09 20:02:28', '2017-01-09 20:03:09', 'Thomas', 'Mehr Kaffee', 'Kaffee ist ein schwarzes, psychotropes, koffeinhaltiges Heißgetränk, das aus gerösteten und gemahlenen Kaffeebohnen, den Samen aus den Früchten der Kaffeepflanze, und heißem Wasser hergestellt wird.', '', 0, '2'),
(8, '2017-01-09 22:00:17', NULL, 'Thomas', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', NULL, NULL, '1');

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
