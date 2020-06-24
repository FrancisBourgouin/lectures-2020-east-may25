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

Barista, Bartender, Manager, Superviser, Dishwaser, Cook
Full-time, Part-time, Salary, Skill, Name, 

### ERD describing the relationship


+------------+
| employee   |
+------------+
|     id     |
|    name    |
| skill_id   |
|  salary    |
| contact_id |
|availbility_id |
+------------+
+------------+
| contact    |
+------------+
|  id        |
|  phone     |
|  email     |
|            |
|            |
|            |
+------------+
+------------+
| skill      |
+------------+
|   id       |
|  position  |
| experience |
|   cert     |
|            |
|            |
+------------+
+------------+
| availbility |
+------------+
|      FT    |
|            |
|            |
|            |
|            |
|            |
+------------+