# Portal map: the sub-user form

Recorded on the live portal, October 2026. The page is the authority: when a label or id here differs from what you read, trust the page and say so to the user.

## Where it lives

- Login page: `https://eservices.rs.ge/Login.aspx`. Opening any page while logged out redirects there (`Login.aspx?redirect_url=...`). After login: `https://eservices.rs.ge/MainPage.aspx`.
- Left menu **ქვე-მომხმარებლის უფლებების მართვა** opens `https://eservices.rs.ge/Subusers.aspx`: the list of sub-users. Its **მომხმარებელი** column shows logins as `username:<owner's ID number>`.
- Toolbar: **ახალი მომხმარებელი** opens the popup **მომხმარებლის დამატება**; **ცვლილება** opens the selected row in the same popup for editing.

## Form fields (type ქვე-მომხმარებელი)

| Label | Element id | Notes |
|---|---|---|
| აქტიური მომხმარებელი | `inActive` | ticked by default; keep it |
| type toggle | label **ქვე-მომხმარებელი** | the default is the other type; switch first |
| პირადი ნომერი | `inPersN_inputID` | optional for this type |
| სახელი, გვარი | `inFullName_inputID` | editable for this type |
| მომხმარებელი | `inUserName_inputID` | one word; rs.ge adds `:<owner ID>` on Save. Never type the colon or the ID |
| პაროლი | `inPassword_inputID` | `type=text`: shows the password. Human only |
| ელ-ფოსტა | `inEmail_inputID` | required by Save |
| სერვის მომხმარებელი | `inServiceUserName_inputID` | locked; rs.ge fills it itself (seen in the edit view as `WORD:<ID>`, capitals). Nothing to ask the user |
| IP მისამართი | `inIpAddress_inputID` | optional |
| შენიშვნა | `inNote_inputID` | optional |
| მობილური ტელეფონის ნომერი | `inTel_inputID` | optional; **დადასტურება** confirms it, needed only for notifications |

## Rights

- The rights part of the form is headed **მოდულების მართვის უფლება**. Its section **ძირითადი მოდულები** opens collapsed: open it before ticking.
- Main modules sit under `.permMain`, one `.permissionBox` per module: a title, a hidden input holding the module id, and checkboxes whose `value` is the right code ([`rights-presets.md`](rights-presets.md)).
- Below them: one block per declaration type (read, create/edit, delete, send) and services with a single **გამოძახება** right.
- **მონიშნულების გასუფთავება** clears every box. **უფლებების შაბლონები** holds the built-in templates and the user's saved ones.

## Gotchas

- **The popup stays in the page when closed.** Its inputs keep a non-null `offsetParent`, so "is the field visible" does not tell you the form is gone. Test "is the password field empty" (yes/no) before any read or screenshot.
- **A refused Save empties the password field.**
- **The session expires** while a filled form waits; the form is lost.
- **Native dialogs freeze browser tools.** Before scripted clicks, replace `window.alert` and `window.prompt` with functions that log the message, and leave `window.confirm` alone so the user answers the portal's confirmations. Re-install after every page load.
- **Screenshots of the popup can time out** in some browser extensions while DOM reads keep working. Prefer DOM reads; screenshot sparingly.
- Setting a field by script: set `value`, then dispatch `input`, `change` and `blur` so the portal's validation sees it.
- **Rights ticked by script inside a collapsed section may not save.** The built-in **წაკითხვა** template saved, but "full period" (code 9) boxes ticked by `.click()` while **ძირითადი მოდულები** was collapsed were dropped. Expand the section, tick by mouse, and always read the rights back after Save (step 7); a missing code 9 changes the period the rights cover (see [`rights-presets.md`](rights-presets.md)).
- **The edit popup shows only module rights.** Declaration-type rights don't appear there, so step 7 cannot confirm them; say so instead of claiming them.
