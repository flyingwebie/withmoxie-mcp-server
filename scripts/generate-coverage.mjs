import { readFile, writeFile } from "node:fs/promises";
import YAML from "yaml";
import { toolDefinitions } from "../build/tools/index.js";

const root = new URL("../", import.meta.url);
const spec = YAML.parse(await readFile(new URL("openapi.yaml", root), "utf8"));
const rows = [];
for (const [path, methods] of Object.entries(spec.paths)) {
  for (const [method, operation] of Object.entries(methods)) {
    const identity = method.toUpperCase() + " " + path;
    const tools = toolDefinitions.filter(tool => tool.operation === identity);
    if (!tools.length) throw new Error("Missing tool for " + identity);
    rows.push([operation.tags?.[0] || "Integration utilities", method.toUpperCase(), path, tools.map(tool => "`" + tool.name + "`").join(", ")]);
  }
}
rows.sort((left, right) => left.join(" ").localeCompare(right.join(" ")));
const contents = "# Moxie endpoint coverage\n\n"
  + "Generated from the local copy of the [official OpenAPI specification](https://api-docs.withmoxie.com/openapi/openapi.yml). "
  + `**${rows.length} operations across ${Object.keys(spec.paths).length} paths are covered by ${toolDefinitions.length} tools.**\n\n`
  + "Regenerate with `npm run docs:coverage`. HTTP method and path identify an operation; several upstream operation ids are misleading.\n\n"
  + "| Resource | Method | Path | MCP tools |\n| --- | --- | --- | --- |\n"
  + rows.map(([resource, method, path, tools]) => `| ${resource} | ${method} | \`${path}\` | ${tools} |`).join("\n") + "\n";
const file = new URL("docs/api-coverage.md", root);
if (process.argv.includes("--check")) {
  if (await readFile(file, "utf8") !== contents) throw new Error("Endpoint coverage is stale. Run npm run docs:coverage.");
} else await writeFile(file, contents);
console.log(`${process.argv.includes("--check") ? "Checked" : "Generated"} coverage for ${rows.length} operations and ${toolDefinitions.length} tools.`);
