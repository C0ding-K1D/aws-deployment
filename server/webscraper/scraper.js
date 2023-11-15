const puppeteer = require("puppeteer");

async function scrapeMediumArticles() {
  try {
    // Launch a headless browser
    const browser = await puppeteer.launch({
      // Add any other Puppeteer options you need
      headless: true, // Change as needed
      executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
      args: [
        "--disable-gpu",
        "--disable-dev-shm-usage",
        "--disable-setuid-sandbox",
        "--no-sandbox",
      ],
    });
    const page = await browser.newPage();

    // Navigate to the URL
    await page.goto("https://medium.com/@Matthew_Alvarez");

    await page.setDefaultTimeout(30000);
    // Wait for the main content to load (you may need to adjust the selector)
    await page.waitForSelector("main");

    // Extract information from the articles within the main tag
    const articles = await page.evaluate(() => {
      const articlesList = [];
      let id = 1;
      // Select all the article elements within the main tag
      const articleElements = document.querySelectorAll("main article");

      articleElements.forEach((articleElement) => {
        const anchorElement = articleElement.querySelector("a");
        const h2Element = articleElement.querySelector("h2");
        const imgElement = articleElement.querySelector("img");

        if (anchorElement && h2Element && imgElement) {
          let href = anchorElement.getAttribute("href");

          // Check if href starts with /@Matthew_Alvarez
          if (
            href.startsWith("/@Matthew_Alvarez") ||
            href.startsWith("/strategio")
          ) {
            const baseUrl = "https://medium.com";

            href = href.split("?source=user")[0];
            // Prepend the base URL
            href = baseUrl + href;

            const title = h2Element.textContent;
            const imgSrc = imgElement.getAttribute("src");

            articlesList.push({
              id: id++,
              href,
              title,
              imgSrc,
            });
          }
        }
      });

      return articlesList;
    });

    // Close the browser
    await browser.close();

    return articles;
  } catch (error) {
    throw new Error("An error occurred while scraping: " + error.message);
  }
}

module.exports = {
  scrapeMediumArticles,
};
