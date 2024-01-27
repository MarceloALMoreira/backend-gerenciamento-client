

## Link para acessa o Diagrama
## https://dbdiagram.io/d/Sistema-de-Gerenciamento-Cliente-65b47086ac844320aed32fdd

CREATE TABLE "clientes" (
  "id" integer PRIMARY KEY,
  "nome" varchar,
  "email" varchar,
  "telefone" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "servicos" (
  "id" integer PRIMARY KEY,
  "nome" varchar,
  "descricao" varchar,
  "preco" decimal,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "agendamento" (
  "id" integer PRIMARY KEY,
  "cliente_id" integer,
  "servico_id" integer,
  "data" date,
  "hora" time,
  "status" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

CREATE TABLE "feedbacks" (
  "id" integer PRIMARY KEY,
  "agendamento_id" varchar,
  "nota" integer,
  "comentario" varchar,
  "createdAt" timestamp,
  "updatedAt" timestamp
);

ALTER TABLE "agendamento" ADD FOREIGN KEY ("cliente_id") REFERENCES "clientes" ("id");

ALTER TABLE "agendamento" ADD FOREIGN KEY ("servico_id") REFERENCES "servicos" ("id");

ALTER TABLE "feedbacks" ADD FOREIGN KEY ("agendamento_id") REFERENCES "agendamento" ("id");
