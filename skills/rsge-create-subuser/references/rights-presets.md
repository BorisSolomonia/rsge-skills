# Rights presets

A preset is a starting point the user can change box by box. Match modules by their **title as shown on the page**; the module id is a hint for checking, since the portal can renumber.

Right codes (the `value` of each checkbox inside a module block):

| Code | Right |
|---|---|
| 0 | წაკითხვა (read) |
| 1 | შექმნა/რედაქტირება (create/edit) |
| 2 | წაშლა (delete) |
| 3 | გაგზავნა (send) |
| 4 | გააქტიურება (activate) |
| 5 | დასრულება (complete) |
| 6 | დადასტურება (confirm) |
| 7 | ქვეზედნადების დასრულება (complete sub-waybill) |
| 8 | ა/ფ შექმნა (create invoice) |
| 9 | უფლებები ვრცელდება სრული პერიოდის ჩანაწერებზე (rights cover records of the full period) |
| 10 | კორექტირება (correction) |
| 11 | გაუქმება (cancel) |
| 12 | დეკლარაციაზე მიბმა (attach to declaration) |
| 13 | ა/ფ მოთხოვნა (request invoice) |

Code 9 widens the other rights to records of the full period. What a sub-user sees without it has not been tested; when software later finds no older waybills or invoices, add code 9 with **ცვლილება**.

## Presets

### invoices-waybills-read (default)

For an accountant or accounting software that reads invoices and waybills. Under **მოდულების მართვის უფლება**, in **ძირითადი მოდულები**:

| Module title | Hint id | Box to tick | Code |
|---|---|---|---|
| ზედნადები | 5 | წაკითხვა | 0 |
| ანგარიშ-ფაქტურები | 3 | წაკითხვა | 0 |

Nothing else ticked: no other module, no other box on these two, no declaration type. When the user wants the sub-user to prepare documents too, add შექმნა/რედაქტირება (1) on the same two modules.

### read-only

The portal's built-in template **წაკითხვა** ("read-only on every module"). Click it under **უფლებების შაბლონები** instead of ticking boxes.

### custom

The user names modules and rights in their own words; map each to a title and codes from the tables above, and show the mapping in the step 5 summary.

The built-in **ყველა უფლების მონიშვნა** (every right) hands over delete, send and confirm on everything. Offer it only when the user asks for full rights by name, and say what it includes.
