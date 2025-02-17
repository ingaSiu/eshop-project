CREATE TYPE "public"."category" AS ENUM('GAME', 'BOOKS', 'PET_SUPPLIES', 'TOYS', 'STATIONERY', 'CLOTHING', 'ELECTRONICS', 'HOME', 'OTHER');--> statement-breakpoint
CREATE TABLE "products" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"title" varchar NOT NULL,
	"category" "category" DEFAULT 'BOOKS',
	"description" text NOT NULL,
	"price" integer NOT NULL,
	"image_url" text NOT NULL,
	"rating" integer NOT NULL,
	"stock" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "products_id_unique" UNIQUE("id")
);
