SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `unisex` (
  `brID` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `lattitude` double(8, 5) NOT NULL,
  `longitude` double(8, 5) NOT NULL,
  `description` tinytext NOT NULL,
  `upvote` int(11) NOT NULL,
  `downvote` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `unisex` (`brID`, `name`, `lattitude`, `longitude`, `description`, `upvote`, `downvote`) VALUES
(1, 'Baldwin Hall',  33.9537, -83.3722, 'Rooms 00G8, 0105P, 0153, 0273, 0275, 0373, 0375, 0410A, 0410B', 100, 0),
(2, 'Bishop House', 33.9559, -83.3732, 'Rooms 0004A, 0012A.', 100, 0),
(3, 'Brooks Hall', 33.9541, -83.3755, 'Rooms 0G18, 0G19.', 100, 0),
(4, 'Business Services', 33.9648, -83.4031, 'Rooms 000B6, 00B24, 0208C.', 100, 0),
(5, 'Candler Hall', 33.9561, -83.3761, 'Rooms 0210, 0211, 0314, 0315, 0B08, 0B09.', 100, 0),
(6, 'Correll Hall', 33.9529, -83.3778, 'Rooms 0130, 0132, 0212, 0228, 0411.', 100, 0),
(7, 'Demosthenian Hall', 33.9569, -83.3752, 'Room 0105', 100, 0),
(8, 'Denmark Hall', 33.9547, -83.3756, 'Rooms 0023M, 0023W, 0104R, 0211.', 100, 0),
(9, 'Founders Garden House', 33.954378, -83.376085, 'Room 0103.', 100, 0),
(10, 'Gilbert Hall', 33.955713, -83.376028, 'Rooms 0106, 0219A, 0228, 0228A, 0234, 0248A, 0370A, 0370B, 0402A, 0409A.', 100, 0),
(11, 'Hodgson Oil Building', 33.956556, -83.371538, 'Room  0186.', 100, 0),
(12, 'Hull Street Deck', 33.95294, -83.378865, 'Room 0309A.', 100, 0);

ALTER TABLE `unisex`
  ADD PRIMARY KEY (`brID`);

ALTER TABLE `unisex`
  MODIFY `brID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


