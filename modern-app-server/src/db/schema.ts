import { pgTable, uuid, text, boolean } from 'drizzle-orm/pg-core';

export const medicosTable = pgTable('medicos', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: text('nome').notNull(),
  especialidade: text('especialidade').notNull(),
  horarios_disponiveis: text('horarios_disponiveis'),
});

export const agendamentosTable = pgTable('agendamento', {
  id: uuid('id').primaryKey().defaultRandom(),
  medico: text('medico'),
  paciente: text('paciente'),
  data_horario: text('data_horario'),
  ativo: boolean('ativo').default(false),
});
