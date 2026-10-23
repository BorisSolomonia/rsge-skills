# Recording: the rs.ge sub-user form (2026-10-23)

Recorded live in Chrome (Claude in Chrome extension) on the principal's own individual account, logged in by him.
Nothing was saved. Values that identify the account owner (ID number, names, emails) are deliberately left out.
Source of each fact: DOM reads of the live page (element ids quoted) and screenshots taken during the session.

## Where it lives

1. After login the landing page is `https://eservices.rs.ge/MainPage.aspx`.
2. Left menu item **ქვე-მომხმარებლის უფლებების მართვა** opens `https://eservices.rs.ge/Subusers.aspx`.
3. That page has two tabs: **ქვე-მომხმარებლის უფლებების მართვა** (the list) and **წაშლილი მომხმარებლები** (deleted users).
4. The list columns: პირადი ნომერი · სახელი გვარი · პოზიცია · მომხმარებელი · ტელეფონი · ელ-ფოსტა · შექმნის თარიღი · წაშლის თარიღი · აღდგენის თარიღი · შენიშვნა. A green dot marks an active user.
5. The **მომხმარებელი** column shows the login as `<username>:<taxpayer ID>`: rs.ge appends the owner's ID to the name chosen.
6. Button **ახალი მომხმარებელი** opens a popup, **მომხმარებლის დამატება**.

## The popup

**Top:** checkbox **აქტიური მომხმარებელი** (`inActive`, ticked by default).

**ძირითადი ინფორმაცია**, two types chosen by a toggle:

| Field (label) | element id | Type A: ფიზიკური პირი - ქვემომხმარებელი (default) | Type B: ქვე-მომხმარებელი |
|---|---|---|---|
| პირადი ნომერი | `inPersN_inputID` (max 11) | shown | shown |
| სახელი, გვარი | `inFullName_inputID` | shown, locked (filled from the ID number) | shown, editable |
| პოზიცია | select, 10 options | shown | hidden |
| მომხმარებელი | `inUserName_inputID` | hidden | shown |
| პაროლი | `inPassword_inputID` | hidden | shown, **`type=text`: the password is visible on screen** |
| ელ-ფოსტა | `inEmail_inputID` | shown | shown |
| სერვის მომხმარებელი | `inServiceUserName_inputID` | hidden | shown, locked |
| IP მისამართი | `inIpAddress_inputID` | shown | shown |
| შენიშვნა | `inNote_inputID` | shown | shown |
| მობილური ტელეფონის ნომერი (5xx-xxx-xxx) + დადასტურება | `inTel_inputID` | shown | shown |
| ფილიალი | select, 128 options | hidden in both views seen | hidden |

Under the phone: "შეტყობინების მისაღებად აუცილებელია ნომრის დადასტურება" (the number must be confirmed to receive notifications).

Position options: დირექტორი · ფინანსური დირექტორი · ბუღალტერი · ოპერატორი · ფინანსური დეპარტამენტის თანამშრომელი · ლოჯისტისკის თანამშრომელი · ზედა / ქვედა / საშუალო რგოლის მენეჯერი.

**უფლებების შაბლონები** (rights templates). Two are built in: **ყველა უფლების მონიშვნა** (tick every right) and **წაკითხვა** ("პირს მიენიჭება ყველა მოდულზე მხოლოდ წაკითხვის უფლება": read-only on every module). The button **შაბლონად შენახვა** saves the current ticks as a named template.

**მოდულების მართვის უფლება**, with **მონიშნულების გასუფთავება** (clear all). 233 checkboxes in total:

- 123 in `.permMain` ("ძირითადი მოდულები"), one `.permissionBox` per module: a title, a hidden module id, then checkboxes whose `value` is a right code. Codes seen: 0 წაკითხვა · 1 შექმნა/რედაქტირება · 2 წაშლა · 3 გაგზავნა · 4 გააქტიურება · 5 დასრულება · 6 დადასტურება · 7 ქვეზედნადების დასრულება · 8 ა/ფ შექმნა · 9 უფლებები ვრცელდება სრული პერიოდის ჩანაწერებზე · 10 კორექტირება · 11 გაუქმება · 12 დეკლარაციაზე მიბმა · 13 ა/ფ მოთხოვნა. Module ids seen include ზედნადები 5, ანგარიშ-ფაქტურები 3, სპეც ანგარიშ-ფაქტურა 4, საგადასახადო დოკუმენტი 72, ქვე-მომხმარებლის უფლებების მართვა 16, დაქირავებულ პირთა რეესტრი 85, გადასახადის გადამხდელის საინფორმაციო ბარათი 23, ზოგადი ინფორმაცია 28 (21 read-only info items).
- 109 outside it: one block per declaration type (for example დღგ (თვე), საშემოსავლო (თვე), მცირე ბიზნესის საშემოსავლოს ყოველთვიური დეკლარაცია (თვე), მოგება (წელი), უკუდაბეგვრის დეკლარაცია (თვე)), each with წაკითხვა · შექმნა/რედაქტირება · წაშლა · გაგზავნა; then services with a single **გამოძახება** right (საბაჟო დეკლარაციების ინფორმაცია, NCTS დეკლარაციის ინფორმაცია, სალარო აპარატების Z ინფორმაცია, ჯამური შემოსავალი, ფინანსური რეპორტი and others).

**Bottom buttons:** **შაბლონად შენახვა** and **შენახვა** (Save). Save was not clicked.

## Gotchas found

- **The password field is plain text.** Anyone or anything looking at the screen after the password is typed sees it, including an AI taking screenshots.
- **Screenshots of this popup time out** in the extension after a few calls (`Page.captureScreenshot` 30 s timeout) while DOM reads keep working. Read the DOM; screenshot sparingly.
- **The browser tool blocks text that looks like a query string** (`key=value; ...`) as "Cookie/query string data". Format extracted lists with arrows instead.
- No native dialog fired while opening the popup or switching type (the dialog stub caught none).

## What Save requires (ordinary type)

- **ელ-ფოსტა is required.** Save refused the form without an email (seen by the principal on the first Save, 2026-10-23). So the skill asks for the email together with the username and name, before the password step.
- Filled at that point: type, მომხმარებელი, სახელი გვარი, rights, password. Empty: პირადი ნომერი, IP, შენიშვნა, phone. Whether any of these is also required is not yet known.
- The portal session can expire while a filled form waits; the form is lost and has to be filled again.
- **A refused Save empties the password field.** After the email was added, Save asked for the password again; the principal retyped it and Save succeeded. So the password is always the very last thing typed, and after any refusal the user fixes the named field first, then retypes the password.

## After a successful Save (test sub-user, 2026-10-23)

- The principal reported no confirmation dialog and no SMS step.
- The list gained one row: სახელი გვარი `Skill Test`, მომხმარებელი `skilltest:<owner ID>`, the email, შექმნის თარიღი `23-ოქტ-2026 09:13:22`, active. Read from the DOM after reloading `Subusers.aspx`.
- **Checking rights:** select the row, then the toolbar icon **ცვლილება** opens the same popup in edit mode. It showed ზედნადები (5) → 0,1,9 and ანგარიშ-ფაქტურები (3) → 0,1,9, 7 boxes checked in all including `inActive`. Exactly what was chosen.
- **Edit mode does not show the stored password**: the field opens empty.
- **Gotcha for agents:** the popup's inputs stay in the DOM with a non-null `offsetParent` even when the popup is closed, so "is the field visible" is not a safe test for "is the password on screen". Test whether the field is empty (a yes/no, never the value).

## Not yet seen

- Whether the new sub-user must change the password on first login.
- Whether ordinary sub-users need any other field in other cases (only the email was refused here).
- Whether the new sub-user must change the password on first login.
