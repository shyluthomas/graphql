-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_jobob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "companyId" INTEGER NOT NULL,
    CONSTRAINT "jobob_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_jobob" ("companyId", "date", "description", "id", "title") SELECT "companyId", "date", "description", "id", "title" FROM "jobob";
DROP TABLE "jobob";
ALTER TABLE "new_jobob" RENAME TO "jobob";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
