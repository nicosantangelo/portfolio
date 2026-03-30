const Critters = require("critters");
const fs = require("fs").promises;
const path = require("path");

const OUT_DIR = path.join(__dirname, "../out");

async function findHtmlFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory() ? findHtmlFiles(fullPath) : fullPath;
    })
  );
  return files.flat().filter((f) => f.endsWith(".html"));
}

async function main() {
  const critters = new Critters({ path: OUT_DIR, logLevel: "warn" });
  const htmlFiles = await findHtmlFiles(OUT_DIR);

  await Promise.all(
    htmlFiles.map(async (file) => {
      const html = await fs.readFile(file, "utf-8");
      const optimized = await critters.process(html);
      await fs.writeFile(file, optimized);
      console.log(`Optimized: ${path.relative(OUT_DIR, file)}`);
    })
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
