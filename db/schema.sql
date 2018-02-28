CREATE DATABASE news_db;
USE news_db;

-- Create the table plans.
CREATE TABLE articles
(
id int NOT NULL AUTO_INCREMENT,
source varchar(50) NOT NULL,
author varchar(50) NOT NULL,
title varchar(100) NOT NULL,
description varchar(300) NOT NULL,
url varchar(200) NOT NULL,
urlToImage varchar(200) NOT NULL,
publishDate varchar(30) NOT NULL,
isFake boolean NOT NULL,
PRIMARY KEY (id)
);

-- Create the table plans.
CREATE TABLE users
(
id int NOT NULL AUTO_INCREMENT,
userName varchar(50) NULL,
firstName varchar(20) NULL,
lastName varchar(30) NULL,
PRIMARY KEY (id)
);