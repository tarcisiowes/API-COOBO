CREATE DATABASE coobo;

create table if not exists documents (
  id serial primary key,
  kbSize numeric,
  name text not null unique,
  content text not null,
  createdAt text not null,
  deleteAt text ,
  deleted boolean default false
)