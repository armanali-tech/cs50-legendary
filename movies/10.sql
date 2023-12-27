SELECT P.name
FROM directors AS D
LEFT JOIN movies AS M ON M.id = D.movie_id
LEFT JOIN people AS P ON P.id = D.person_id
LEFT JOIN ratings AS R ON R.movie_id = D.movie_id
WHERE R.rating >= 9.0;
