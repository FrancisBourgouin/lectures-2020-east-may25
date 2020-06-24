## Building an ERD 

### Example of ERD box

+-----------------+
| grocery item    |
+-----------------+
| id              |
| name            |
| price           |
| quantity        |
| grocery_list_id |
|                 |
+-----------------+

### Description of your relationship

Describe here

### ERD describing the relationship
      

+-----------------+
| grocery_item    |
+-----------------+
| id              |
| name            |
| price           |
| quantity        |
| grocery_list_id |
|                 |
+-----------------+
     \|/
      |
shopper_id                                   f+-----------------+
| grocery_list    |
+-----------------+
| id              |
|     |
| shopper_id      |
|                 |
|                 |
|                 |
+-----------------+
     \|/
      |
+------------+
|grocery shopper|
+------------+
|id              |
|name            |
|age             |
|                |
|                |
|                |
+------------+