# Browser setup

For a Claude user with no browser tool who chose to set up browser mode. You cannot install anything on the user's computer: a browser extension installs only when the user clicks **Add to Chrome**. So setup is a guided run of its own, one step per message, checking a screenshot after each, exactly as in [`guided-mode.md`](guided-mode.md).

What it needs: a paid Claude plan (Pro, Max, Team or Enterprise) and Google Chrome. Claude in Chrome runs only in Chrome; Microsoft Edge, which comes with Windows, and other Chromium browsers are not supported. On a free plan, or on an assistant other than Claude, skip this page and use guided mode.

## Steps

1. **Chrome.** When Chrome is missing, the user opens https://www.google.com/chrome in Edge, downloads and installs it. Done when Chrome is open.
2. **Extension.** In Chrome, the user opens https://chromewebstore.google.com/detail/claude/fcoeoabgfenejglbffodgkkbkcdhcgfn, clicks **Add to Chrome**, and accepts the permissions Chrome lists. Tell them plainly that the extension can click, type and read pages in their browser, which is how it fills the rs.ge form. Done when Chrome confirms the extension is added.
3. **Sign in and pin.** The user signs in with their Claude account when the extension asks (they type their own login, as at any hand-over), then clicks the puzzle-piece icon and the pin next to **Claude**. Done when the Claude icon sits in the toolbar.
4. **Move the conversation.** The user opens https://eservices.rs.ge in Chrome, clicks the Claude icon to open the side panel, and writes the request again there ("rs.ge-ზე ქვე-მომხმარებელი შემიქმენი"). Skills work in the side panel. In the Claude desktop app the alternative is Settings → Customize → Connectors → Claude in Chrome → on, then enable it in the conversation's connectors menu.

Done when the new conversation has a browser tool; it then starts this skill in browser mode from step 1. When step 4 shows no browser tool (an older side panel, or an admin has switched it off), continue here in guided mode.
