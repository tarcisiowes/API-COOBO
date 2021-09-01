CREATE DATABASE coobo;

create table if not exists documents (
  id serial primary key,
  kbSize numeric,
  name text not null unique,
  content text,
  createdAt text not null,
  deleteAt text ,
  deleted boolean default false
)