# Custom GPT settings

Fill these into the GPT builder (Configure tab). `bun scripts/build.ts` copies the knowledge files into `dist/custom-gpt/knowledge/`.

- **Name:** rs.ge ქვე-მომხმარებელი
- **Description:** rs.ge-ზე ქვე-მომხმარებლის შექმნა ბუღალტრისთვის ან პროგრამისთვის. პაროლს თქვენ წერთ, არა AI.
- **Instructions:** the full text of `instructions.md`.
- **Conversation starters:**
  - rs.ge-ზე ქვე-მომხმარებელი შემიქმენი ბუღალტრისთვის
  - ქვე-მომხმარებელი მჭირდება საბუღალტრო პროგრამისთვის
  - Create an rs.ge sub-user for my accountant
- **Knowledge:** every file in `dist/custom-gpt/knowledge/` (`SKILL.md` and the five reference files).
- **Capabilities:** Web search off. Code interpreter off. Image generation off.

Before publishing, re-check on logged-in OpenAI pages which plans can use a Custom GPT and whether it can use the ChatGPT browser; the plan facts in this repo come from search summaries.
