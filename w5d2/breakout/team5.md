## Building an ERD 
HI BOBBY.
### Example of ERD box

+-------------+
|  Airport    |
+-------------+
|  PK ID      |
|  Location   |
| # of Runways|
| Amenities   |
|   Gates     |
| Airlines    |
| poss_destin |
+-------------+
      |
     /|\
+--------------+
|   Flights    |
+--------------+
| PK           |
| dest_airport |
| flight_num   |
| depart_time  |
| arrive_time  |
|  airline     |
| FK airport_id|
+--------------+



### Description of your relationship

Airport and its available destinations

### ERD describing the relationship