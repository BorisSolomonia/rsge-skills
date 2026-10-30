---
name: rsge-create-subuser
description: Creates an ordinary sub-user (ქვე-მომხმარებელი) on the Georgian Revenue Service portal eservices.rs.ge with chosen rights, the human typing every password. Use when the user wants an rs.ge sub-user for an accountant, an employee or accounting/ERP/waybill software, or writes "ქვე-მომხმარებელი", "rs.ge sub-user", "rs.ge user for my accountant".
license: MIT
---

# Create an rs.ge sub-user

The job: the user ends with one ordinary sub-user on eservices.rs.ge holding exactly the rights they chose, and every secret (their own login password, the SMS code, the new sub-user's password) was typed by them, in the portal, never in chat.

Speak Georgian. Switch to English only when the user writes English.

## The hand-over

A **hand-over** is the moment the human types a secret into the portal while you look away. There are exactly two:

1. **Login**: the user logs in at https://eservices.rs.ge/Login.aspx with their own username, password and SMS code.
2. **Password and Save**: the user types the new sub-user's password into **პაროლი** and clicks **შენახვა** themselves.

At each hand-over, name the exact field, say why you are not looking, and wait for the user's "done" in chat. Secrets live only in the portal's fields: when a user starts to paste one into chat, stop them and point at the field instead.

The **პაროლი** field shows the password as plain text. So between the user typing it and the form closing, take no screenshot and read nothing from the page. Before any later look, confirm the field is empty with a yes/no check (never its value).

## Pick the mode

- **Browser mode**: you have a browser tool (Claude in Chrome, the ChatGPT browser, Codex or Claude Code with a browser). You drive the portal; the user does the two hand-overs.
- **Guided mode**: no browser tool. You give one step per message and check a screenshot the user sends after each. Read [`references/guided-mode.md`](references/guided-mode.md) before the first step.

With no browser tool, offer the choice: guided mode now, or a one-time browser setup (Chrome plus the Claude in Chrome extension, about five minutes) after which you fill the form yourself. On setup, follow [`references/browser-setup.md`](references/browser-setup.md).

## Steps

### 1. Make sure the user is logged in

Do this first, before any question. Open `https://eservices.rs.ge/Subusers.aspx`. When the page stays on `Subusers.aspx`, the user is logged in. When it lands on `Login.aspx`, they are not: give them the link https://eservices.rs.ge/Login.aspx and do the **login hand-over**. In guided mode, give the same link and ask for a screenshot of the page that opens.

Done when `Subusers.aspx` shows the list of sub-users.

### 2. Gather the details in chat

Ask in one message:

- **Who the sub-user is for**, offering in the same message the default rights preset from [`references/rights-presets.md`](references/rights-presets.md). The user can change any box.
- **Username: one word**, for example `buhgalteri`. rs.ge adds `:<owner's ID number>` to it by itself when the sub-user is saved, so the login becomes `buhgalteri:<ID>`. Ask for the word only; the part after the colon is never the user's to type, and you read the full login off the list in step 7.
- **Full name** (სახელი, გვარი).
- **Email** (ელ-ფოსტა). Save refuses the form without it.
- Optional: mobile phone, IP address, note.

Done when you hold the one-word username, full name, email and a rights choice.

### 3. Open an empty form

On `Subusers.aspx`, click **ახალი მომხმარებელი**, and switch the type to **ქვე-მომხმარებელი** (the default is the other type, "ფიზიკური პირი - ქვემომხმარებელი"). Field ids, rights markup and portal gotchas: [`references/portal-map.md`](references/portal-map.md). In browser mode, read it before the first click.

Done when the username and password fields are on the form.

### 4. Fill everything except the password

Fill **მომხმარებელი** with the one word exactly as given, then full name, email and any optional fields. Keep **აქტიური მომხმარებელი** ticked.

Rights live under **მოდულების მართვის უფლება**. Click **მონიშნულების გასუფთავება** to clear every right, open the **ძირითადი მოდულები** section, and tick the preset there by matching module titles read live off the page. Then check that **აქტიური მომხმარებელი** is still ticked.

Done when a read-back of the form shows every chosen value and every ticked right matches the choice, with nothing else ticked anywhere.

### 5. Summary and yes

Show the user a summary: type, username (the word; rs.ge adds `:<ID>` on Save, so do not guess the ID), full name, email, each module with its ticked rights. Wait for an explicit yes. A "no" or a change sends you back to step 4.

### 6. Password and Save hand-over

Tell the user, in these terms:

1. Type the new password in **პაროლი**. It shows as text, so you will not look until the form closes.
2. Click **შენახვა**. When rs.ge asks you to confirm, you answer it; I don't.
3. Write "saved", or tell me the message rs.ge showed.

When Save refuses the form, the portal empties the password field: confirm it is empty (yes/no), then fix the field it names, then the user retypes the password and clicks **შენახვა** again. When the session expired, the user logs in again at https://eservices.rs.ge/Login.aspx; then look in the list for the username first (the Save may have landed), and only when it is missing repeat steps 3 to 5.

Done when the user says "saved".

### 7. Verify

Reload `Subusers.aspx` (this clears the form), confirm the password field is empty, then find the row whose **მომხმარებელი** starts with the username followed by a colon. That cell is the **full login**, `<word>:<ID>`, exactly as rs.ge stored it. Select the row, open **ცვლილება**, and read back the ticked rights. Close that popup with ✕, without saving.

Done when the row exists, you hold the full login as the list shows it, and every right matches the summary from step 5.

### 8. Hand over the login

Write the login to an env file the user keeps:

```
RSGE_USERNAME=<full login from step 7>
RSGE_PASSWORD=
```

- **With file access** (Claude Code, Codex, Cursor): when the user's project already has a `.env`, add the two lines there; otherwise create `rsge.env` in the current folder. Check that `.gitignore` covers the file; when it does not (or there is none), say so and offer to add the line, and add it on yes. Give the file as a clickable link.
- **On Claude.ai or ChatGPT with file creation:** create `rsge.env` as a file the user downloads, and give its link.
- **Guided mode without files:** show the two lines and tell the user to save them as `rsge.env`.

Tell the user to type the password they chose after `RSGE_PASSWORD=` themselves, save the file, and keep it out of chats and shared folders. After that, never open the file again. Give the full login to their accountant or software. Point at [`references/troubleshooting.md`](references/troubleshooting.md) for errors the software may report later.

Done when the user has the file with the full login in it and knows where the password goes.

## Scope

This skill creates one ordinary portal sub-user. A SOAP service user (`create_service_user`), the ID-number-bound type "ფიზიკური პირი - ქვემომხმარებელი", editing or deleting existing sub-users, and filing anything belong to other tools.
