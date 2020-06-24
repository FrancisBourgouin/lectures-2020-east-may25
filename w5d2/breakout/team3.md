## Building an ERD 

### Example of ERD box

+------------+       
|aquarium_store|
+------------+
| id         |PK
|  location  |
|    owner   |
|            |
|            |
+------------+
+------------+       
|    order    |    
+------------+
| id         | 
| fish_id
quantity_fish
food_id
quantity_food

equipment_id       |
 |
+------------+

+------------+       
|    fish    |    
+------------+
| id         | 
| name       |
| species    |
| price      |
| color      |
| water_type |
+------------+

+------------+       
    food     |
| id         |
| name       |
| price      |
|            |
+------------+

+------------+       
equipment    |
| id         |
| name       |
| price      |
|       |
+------------+

+------------+       
Accessory_id |
| id         |
| name       |
| price      |
|       |
+------------+

### Description of your relationship

Our relationship describes an aquarium/retail store that sells fishies, aquariums, and accessories.
Aquarium to fish, food, equipement and orders will be ONE to MANY relationship


### ERD describing the relationship
