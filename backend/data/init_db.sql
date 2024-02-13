-- psql -U postgres -f init_db.sql
DROP DATABASE IF EXISTS festyfiesta;
DROP USER IF EXISTS festyfiesta;

CREATE USER festyfiesta WITH PASSWORD 'festyfiesta';

CREATE DATABASE festyfiesta OWNER festyfiesta;