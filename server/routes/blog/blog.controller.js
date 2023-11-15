const { PrismaClient } = require("@prisma/client");
const { scrapeMediumArticles } = require("../../webscraper/scraper");

require("dotenv").config();

const prisma = new PrismaClient();

async function insertOrUpdateArticles() {
  const articles = await scrapeMediumArticles();

  if (articles.length < 1) {
    throw new Error("No Articles to insert");
  }

  try {
    for (const article of articles) {
      await prisma.Blog.upsert({
        where: {
          id: article.id,
        },
        update: {
          ...article,
        },
        create: {
          ...article,
        },
      });
    }

    console.log("Articles loaded successfully");
  } catch (error) {
    throw new Error(
      "An error occurred while inserting/updating articles: " + error.message
    );
  }
}

async function getRecentArticles(req, res) {
  try {
    const recentArticles = await prisma.Blog.findMany({
      take: 6, // Limit the result to the last 6 articles
      select: {
        href: true,
        title: true,
        imgSrc: true,
      },
      orderBy: {
        id: "asc",
      },
    });

    console.log("Articles found successfully");
    console.log("test", recentArticles);
    res.status(200).json(recentArticles);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching recent articles" });
  } finally {
    await prisma.$disconnect();
  }
}

module.exports = {
  insertOrUpdateArticles,
  getRecentArticles,
};
