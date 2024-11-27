CREATE TABLE IF NOT EXISTS "projects" (
	"cuid" text PRIMARY KEY NOT NULL,
	"name" varchar(100),
	"description" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100)
);
