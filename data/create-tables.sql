BEGIN;

DROP TABLE IF EXISTS "skill", "diploma", "project","techno", "image";

CREATE TABLE "diploma" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "name" text NOT NULL,
  "school_name" text NOT NULL,
  "location" text NOT NULL,
  "dates" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "project" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "name" text NOT NULL,
  "description" text NOT NULL,
  "github_repo_url" text NOT NULL,
  "link" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "image" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "url" text NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "skill" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "name" text NOT NULL,
  "image_id" integer NOT NULL REFERENCES "image"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "techno" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY, 
  "name" text NOT NULL,
  "image_id" integer NOT NULL REFERENCES "image"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

CREATE TABLE "project_has_techno" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "project_id" integer NOT NULL REFERENCES "project"("id"),
  "techno_id" integer NOT NULL REFERENCES "techno"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  UNIQUE ("project_id", "techno_id")
);

CREATE TABLE "project_has_image" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "project_id" integer NOT NULL REFERENCES "project"("id"),
  "image_id" integer NOT NULL REFERENCES "image"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  UNIQUE ("project_id", "image_id")
);

CREATE TABLE "diploma_teach_skill" (
  "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "diploma_id" integer NOT NULL REFERENCES "diploma"("id"),
  "skill_id" integer NOT NULL REFERENCES "skill"("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  UNIQUE ("diploma_id", "skill_id")
);

COMMIT;