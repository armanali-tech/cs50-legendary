SELECT AVG(rating) AS average_rating
FROM movies AS M
LEFT JOIN ratings AS R ON M.id = R.movie_id
WHERE M.year = 2012;
