## Building an ERD 

### Example of ERD box

### Description of your relationship

Movies Actors Directors Genres

### ERD describing the relationship

+------------+    
|   movie    |
+------------+
|     id     |
|  actor_id  | >--- actor
|director_id |  >--- director
|  series    |
|  genre_id  | ---< genres
|  rating    |
+------------+

+------------+
|    actor   |
+------------+
|     id     |
|   name     |
|  salary    |
|  movie_id  | >---< movie
|            |
|            |
+------------+

+------------+
|  director  |
+------------+
|     id     |
|    name    |
| movie_id   | ---< movie
|            |
|            |
|            |
+------------+

+------------+
|  genres    |
+------------+
|     id     |
|    type    | >--- movie
|            |
+------------+