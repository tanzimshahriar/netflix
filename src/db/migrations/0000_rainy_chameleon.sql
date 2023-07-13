CREATE TABLE IF NOT EXISTS "accounts" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"userId" varchar(255) NOT NULL,
	"type" varchar(255) NOT NULL,
	"provider" varchar(255) NOT NULL,
	"providerAccountId" varchar(255) NOT NULL,
	"access_token" text,
	"expires_in" integer,
	"id_token" text,
	"refresh_token" text,
	"refresh_token_expires_in" integer,
	"scope" varchar(255),
	"token_type" varchar(255),
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"sessionToken" varchar(255) NOT NULL,
	"userId" varchar(255) NOT NULL,
	"expires" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" varchar(255) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255) NOT NULL,
	"emailVerified" timestamp,
	"image" varchar(255),
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_tokens" (
	"identifier" varchar(255) PRIMARY KEY NOT NULL,
	"token" varchar(255) NOT NULL,
	"expires" date NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "accounts__provider__providerAccountId__idx" ON "accounts" ("provider","providerAccountId");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "accounts__userId__idx" ON "accounts" ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "sessions__sessionToken__idx" ON "sessions" ("sessionToken");--> statement-breakpoint
CREATE INDEX IF NOT EXISTS "sessions__userId__idx" ON "sessions" ("userId");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users__email__idx" ON "users" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "verification_tokens__token__idx" ON "verification_tokens" ("token");