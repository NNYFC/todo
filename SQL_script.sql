-- SQL query to create database
CREATE DATABASE schooltask;
-- SQL queries to create table
CREATE TABLE subject(id INT NOT NULL auto_increment, name VARCHAR(30) NOT NULL, PRIMARY KEY(id));
CREATE TABLE students( id INT NOT NULL auto_increment , name VARCHAR(30) not null, primary key(id));
-- SQL query to insert data in table of a database
INSERT INTO subject(name) VALUES("ANDROID Programming");
-- SQL query to display all table attributes and their records of a database
SELECT * FROM subject;
-- SQL query to delete a database
DROP DATABASE schooltask;