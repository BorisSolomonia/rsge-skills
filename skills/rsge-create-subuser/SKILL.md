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

1. **Login**: the user logs in at eservices.rs.ge with their own username, password and SMS code.
2. **Password and Save**: the user types the new sub-user's password into **პაროლი** and clicks **შენახვა** themselves.

At each hand-over, name the exact field, say why you are not looking, and wait for the user's "done" in chat. Secrets live only in the portal's fields: when a user starts to paste one into chat, stop them and point at the field instead.

The **პაროლი** field shows the password as plain text. So between the user typing it and the form closing, take no screenshot and read nothing from the page. Before any later look, confirm the field is empty with a yes/no check (never its value).

## Pick the mode

- **Browser mode**: you have a browser tool (Claude in Chrome, the ChatGPT browser, Codex or Claude Code with a browser). You drive the portal; the user does the two hand-overs.
- **Guided mode**: no browser tool. You give one step per message and check a screenshot the user sends after each. Read [`references/guided-mode.md`](references/guided-mode.md) before the first step.

With no browser tool, offer the choice: guided mode now, or a one-time browser setup (Chrome plus the Claude in Chrome extension, about five minutes) after which you fill the form yourself. On setup, follow [`references/browser-setup.md`](references/browser-setup.md).

## Steps

### 1. Gather the details in chat

Ask in one message:

- **Who the sub-user is for**, then offer a rights preset from [`references/rights-presets.md`](references/rights-presets.md). The user can change any box.
- **Username** (rs.ge turns it into `username:<owner's ID number>`).
- **Full name** (სახელი, გვარი).
- **Email** (ელ-ფოსტა). Save refuses the form without it.
- Optional: mobile phone, IP address, note.

Done when you hold username, full name, email and a rights choice.

### 2. Login hand-over

Ask the user to log in at https://eservices.rs.ge themselves (in the browser you drive, or their own in guided mode). Done when the page is `MainPage.aspx` and the user says they are in.

### 3. Open an empty form

Open `https://eservices.rs.ge/Subusers.aspx`, click **ახალი მომხმარებელი**, and switch the type to **ქვე-მომხმარებელი** (the default is the other type, "ფიზიკური პირი - ქვემომხმარებელი"). Field ids, rights markup and portal gotchas: [`references/portal-map.md`](references/portal-map.md). In browser mode, read it before the first click.

Done when the username and password fields are on the form.

### 4. Fill everything except the password

Fill username, full name, email and any optional fields. Keep **აქტიური მომხმარებელი** ticked. Clear all rights (**მონიშნულების გასუფთავება**), then tick the chosen preset by matching module titles read live off the page.

Done when a read-back of the form shows every chosen value and every ticked right matches the choice, with nothing else ticked.

### 5. Summary and yes

Show the user a summary: type, username, full name, email, each module with its ticked rights. Wait for an explicit yes. A "no" or a change sends you back to step 4.

### 6. Password and Save hand-over

Tell the user, in these terms:

1. Type the new password in **პაროლი**. It shows as text, so you will not look until the form closes.
2. Click **შენახვა**. Answer any confirmation the portal shows yourself.
3. Write "saved", or tell me the message rs.ge showed.

When Save refuses the form, the portal empties the password field: fix the field it names, then the user retypes the password and clicks **შენახვა** again. When the session expired, the user logs in again; then look in the list for the username first (the Save may have landed), and only when it is missing repeat steps 3 to 5.

Done when the user says "saved".

### 7. Verify

Reload `Subusers.aspx` (this clears the form), confirm the password field is empty, then find the row whose **მომხმარებელი** starts with the username. Select it, open **ცვლილება**, and read back the ticked rights. Close that popup with ✕, without saving.

Done when the row exists and every right matches the summary from step 5. Tell the user the login name to give their accountant or software (`username:<ID number>`), and that the password is the one they typed. Point at [`references/troubleshooting.md`](references/troubleshooting.md) for errors the software may report later.

## Scope

This skill creates one ordinary portal sub-user. A SOAP service user (`create_service_user`), the ID-number-bound type "ფიზიკური პირი - ქვემომხმარებელი", editing or deleting existing sub-users, and filing anything belong to other tools.
