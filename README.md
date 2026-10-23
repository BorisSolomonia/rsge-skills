# rsge-skills

AI skills for the Georgian Revenue Service portal, [eservices.rs.ge](https://eservices.rs.ge).

| Skill | What it does |
|---|---|
| [`rsge-create-subuser`](skills/rsge-create-subuser/SKILL.md) | Creates an ordinary sub-user (ქვე-მომხმარებელი) with the rights you choose. You type every password yourself, in the portal. |

## ქართულად

**რას აკეთებს:** ხელოვნური ინტელექტი (ChatGPT, Claude ან სხვა) rs.ge-ზე ქმნის ქვე-მომხმარებელს თქვენი ბუღალტრისთვის, თანამშრომლისთვის ან საბუღალტრო პროგრამისთვის. AI ავსებს ფორმას, გაჩვენებთ შეჯამებას და ელოდება თქვენს თანხმობას.

**პაროლები მხოლოდ თქვენ იცით:** rs.ge-ზე შესვლას, SMS კოდს და ახალი მომხმარებლის პაროლს თქვენ წერთ თავად, პორტალის ველში. AI პაროლს არც ითხოვს ჩატში, არც ხედავს. შენახვის ღილაკსაც თქვენ აჭერთ.

**როგორ დავაყენო:**

- **Claude.ai** (ნებისმიერი გეგმა): ჩამოტვირთეთ `rsge-create-subuser.zip` (Releases), შემდეგ Customize → Skills → "+" → Create skill → Upload a skill.
- **Claude Code, Codex, Cursor და სხვა აგენტები:** `npx skills add BorisSolomonia/rsge-skills`
- **ChatGPT:** გამოიყენეთ ჩვენი Custom GPT (ბმული დაემატება). ბრაუზერის გარეშე ის ნაბიჯ-ნაბიჯ გიხელმძღვანელებთ ეკრანის სურათებით.

შემდეგ დაწერეთ: "rs.ge-ზე ქვე-მომხმარებელი შემიქმენი ბუღალტრისთვის".

## In English

**What it does:** your AI (ChatGPT, Claude or a coding agent) creates an rs.ge sub-user for your accountant, an employee or accounting software. It fills the form, shows you a summary and waits for your yes.

**Passwords stay yours:** you type your rs.ge login, the SMS code and the new sub-user's password yourself, in the portal's own fields. The AI never asks for a password in chat and does not look while one is on screen. You click Save.

**Install:**

- **Claude.ai** (any plan): download `rsge-create-subuser.zip` from Releases, then Customize → Skills → "+" → Create skill → Upload a skill.
- **Claude Code, Codex, Cursor and other agents:** `npx skills add BorisSolomonia/rsge-skills`
- **ChatGPT:** use the Custom GPT (link to come). Without a browser tool it guides you step by step and checks your screenshots.

Then say: "create an rs.ge sub-user for my accountant".

## Two ways it runs

- **Browser mode**: the AI has a browser (Claude in Chrome, the ChatGPT browser, Codex or Claude Code with a browser tool). It drives the portal; you log in and type the password when it hands over.
- **Guided mode**: no browser. The AI gives one step at a time and checks a screenshot after each.

## Building the packages

```sh
bun scripts/build.ts
```

Writes `dist/rsge-create-subuser.zip` (Claude.ai upload) and `dist/custom-gpt/` (instructions and knowledge files for a Custom GPT).

## License

MIT. See [LICENSE](LICENSE).
