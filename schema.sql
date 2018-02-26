CREATE DATABASE news_db;
USE news_db;

-- Create the table plans.
CREATE TABLE users
(
id int NOT NULL AUTO_INCREMENT,
userName varchar(50) NULL,
firstName varchar(20) NULL,
lastName varchar(30) NULL,
PRIMARY KEY (id)
);

CREATE TABLE news
(
id int NOT NULL AUTO_INCREMENT,
userId int NOT NULL,
name varchar(50) NOT NULL,
snippet varchar(300) NOT NULL,
src varchar(300) NOT NULL,
publishDate date NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE fakeNews
(
id int NOT NULL AUTO_INCREMENT,
userId int NOT NULL,
newsId int NOT NULL,
timestamp date,

PRIMARY KEY (id)
);
