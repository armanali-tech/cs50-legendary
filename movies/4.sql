SELECT COUNT(*) FROM movies AS M
LEFT JOIN  ratings AS R ON M.id = R.movie_id
WHERE R.rating = 10.0;

