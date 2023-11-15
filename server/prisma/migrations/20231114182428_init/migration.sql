-- CreateTable
CREATE TABLE "Blog" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "imgSrc" TEXT NOT NULL,

    CONSTRAINT "Blog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Blog_href_key" ON "Blog"("href");
