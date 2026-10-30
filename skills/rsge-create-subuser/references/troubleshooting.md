# Troubleshooting

## While creating

| What happens | Fix |
|---|---|
| Save refuses the form and names a field | Fill that field, retype the password (the field was emptied), click **შენახვა** again |
| Save asks for the password again | The field was emptied by a refused Save; the user retypes it |
| The page asks to log in again | The session expired: log in, open a new form, fill it again |
| The username is taken | Pick another username; the list's **წაშლილი მომხმარებლები** tab may hold an old one with the same name |
| The browser tool stops responding | A native dialog is open; the user closes it in the browser |

## When software uses the new sub-user

Accounting, ERP or waybill software logs in with `username:<ID number>` and the password the user typed. Errors it may report:

| Code | Meaning | Fix |
|---|---|---|
| -100 or `false` | Credentials refused, or the sub-user is disabled. The most common cause is a bare name: rs.ge wants the full `word:<ID>`, as the sub-user list shows it | Copy the full login from `RSGE_USERNAME` (or the list) into the software, check the password, tick **აქტიური მომხმარებელი** again if it was turned off, reconnect |
| -101 | Payer ID mismatch: the sub-user belongs to a different rs.ge account | Confirm which taxpayer account the software is connected to |
| -102 | Malformed request payload, most likely a bug in the software | Report it to the software's vendor with the operation name |
| permission error | The sub-user lacks a right the operation needs | Open the sub-user with **ცვლილება** in rs.ge and tick the missing right |
