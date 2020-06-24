## Building an ERD 

### Example of ERD box

+------------+
| TITLE HERE |
+------------+
|            |
|            |
|            |
|            |
|            |
|            |
+------------+

### Description of your relationship

One owner to many pets
Where pets are split by species

### ERD describing the relationship

+------------   +  
|    Owner      |
+------------   +
| PK   id       |
| name          |
| age           |
| pet allergies |
|               |
|               |
+------------   +

+---------------+  
|    Pet        |
+---------------+
| PK    id      |
| FK owner_id   | 
| FK species_id |
| age           |
| name          |
| nickname      |
| weight        |
| gender        |
| breed         |
+---------------+

+------------     +  
|    Species      |
+------------     +
| PK   id         |
| name            |
| # of legs       |
| diet type       |
| scientific name |
|                 |
+------------     +