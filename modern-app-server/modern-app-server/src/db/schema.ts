import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const medicosTable = pgTable('medicos', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: text('nome').notNull(),
  especialidade: text('especialidade').notNull(),
  horarios_disponiveis: text('horarios_disponiveis'),
});
