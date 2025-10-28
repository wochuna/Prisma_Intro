-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Studies" (
    "id" SERIAL NOT NULL,
    "program" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "sem" TEXT NOT NULL,

    CONSTRAINT "Studies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Residence" (
    "id" SERIAL NOT NULL,
    "house" TEXT NOT NULL,
    "period" TEXT NOT NULL,
    "studiesId" INTEGER,

    CONSTRAINT "Residence_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Residence" ADD CONSTRAINT "Residence_studiesId_fkey" FOREIGN KEY ("studiesId") REFERENCES "Studies"("id") ON DELETE SET NULL ON UPDATE CASCADE;
