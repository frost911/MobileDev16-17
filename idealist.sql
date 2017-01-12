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
(1, '2016-11-06 08:38:15', '2016-12-31 23:59:33', 'Maurice', 'Frohes Neues', 'Ich wünsche euch allen ein Frohes Neues Jahr', 'DANKE :)', 1, '42'),
(2, '2016-12-06 20:48:35', '2017-01-09 21:59:33', 'Thomas', 'Test', 'TestTestTestTestTestl', 'adgasg', 1, '34'),
(3, '2016-12-07 23:34:55', '2017-01-10 12:23:22', 'Maurice', 'Kicker', 'Hey, wie wäre es wenn wir uns mal einen Kicker für den Flur besorgen?', 'Nice-To-Have', 1, '2'),
(4, '2016-12-18 18:54:07', '2017-01-11 14:23:45', 'Patrick', 'Neue Möbel', 'Ich wäre mal für vernünftige Möbel', 'Maurice: Nee, lieber einen neuen Kühlschrank.; Thomas: Ich hätte lieber einen Beamer um mir Filme an zu gucken', 1, '64'),
(5, '2017-01-02 15:55:35', '2017-01-09 21:59:33', 'Stefan', 'PHP', 'I love PHP', 'Glückwunsch', 0, '88'),
(6, '2017-01-09 20:02:28', '2017-01-09 20:03:09', 'Thomas', 'Mehr Kaffee', 'Kaffee ist ein schwarzes, psychotropes, koffeinhaltiges Heißgetränk, das aus gerösteten und gemahlenen Kaffeebohnen, den Samen aus den Früchten der Kaffeepflanze, und heißem Wasser hergestellt wird.', '', 0, '2'),
(7, '2017-01-09 20:48:35', '2017-01-09 21:59:33', 'Thomas', 'Maler-App', 'Schönen Guten Morgen. Lasst uns eine App Entwickelt, die Malern unter die Arme greift.', 'Tim: Ich bin dabei', 0, '15'),
(8, '2017-01-09 22:00:17', NULL, 'Thomas', 'Lorem ipsum dolor sit amet', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', NULL, NULL, '1'),
(9, '2017-01-11 11:48:35', '2017-01-12 00:59:33', 'Tim', 'Wackelpudding', 'Ich fände es Innovativ, wenn wir ab nächster Woche täglich Wackelpudding verteilen würden.', 'Stefan: Ich halte da nix von, dann schmeißen wir nur das Geld zum Fenster raus.', 0, '200'),
(10, '2017-01-12 20:48:35', '2017-01-13 21:59:33', 'Stefan', 'Prüfung', 'Hallo, ich wollte euch nur mitteilen, dass Ihr alle bestanden habt.', 'Tim:Bestanden; Maurice: Puuh, geschafft; Patrick: Bazinga; Thomas: Endlich und auf in die Nächste Prüfung', 1, '22');
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
