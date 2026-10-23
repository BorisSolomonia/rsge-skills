// Builds the release packages from the one source of truth in skills/.
//   dist/<skill>.zip          Claude.ai and ChatGPT skill upload (skill folder at the zip root)
//   dist/custom-gpt/          Custom GPT instructions, settings and knowledge files
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readdirSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
const skill = "rsge-create-subuser";
const skillDir = join(root, "skills", skill);
const dist = join(root, "dist");

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const zipPath = join(dist, `${skill}.zip`);
const hasZip = (() => {
  try {
    execFileSync("zip", ["-v"], { stdio: "ignore" });
    return true;
  } catch {
    return false;
  }
})();
if (hasZip) {
  execFileSync("zip", ["-r", "-q", zipPath, skill], { cwd: join(root, "skills") });
} else {
  // Windows, or WSL without zip: Windows' bsdtar writes a zip with forward-slash entry names.
  // (PowerShell 5's Compress-Archive writes backslashes, which other unzippers misread.)
  const winPath = (p: string) => execFileSync("wslpath", ["-w", p]).toString().trim();
  const toWin = process.env.WSL_DISTRO_NAME ? winPath : (p: string) => p;
  execFileSync("tar.exe", ["-a", "-c", "-f", toWin(zipPath), "-C", toWin(join(root, "skills")), skill]);
}

const gpt = join(dist, "custom-gpt");
const knowledge = join(gpt, "knowledge");
mkdirSync(knowledge, { recursive: true });
cpSync(join(root, "packaging", "custom-gpt"), gpt, { recursive: true });
cpSync(join(skillDir, "SKILL.md"), join(knowledge, "SKILL.md"));
for (const f of readdirSync(join(skillDir, "references"))) {
  cpSync(join(skillDir, "references", f), join(knowledge, f));
}

console.log(`wrote ${zipPath}`);
console.log(`wrote ${gpt} (${readdirSync(knowledge).length} knowledge files)`);
