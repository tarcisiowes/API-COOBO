create table if not exists documents (
  id serial primary key,
  kbSize integer,
  nome unique text not null,
  content text,
  createdAt text not null,
  deleteAt text not null
)