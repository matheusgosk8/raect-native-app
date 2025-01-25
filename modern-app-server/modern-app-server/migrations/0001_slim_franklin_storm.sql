CREATE TABLE "medicos" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"nome" text NOT NULL,
	"especialidade" text NOT NULL,
	"horarios_disponiveis" text
);
--> statement-breakpoint
DROP TABLE "users" CASCADE;