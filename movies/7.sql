SELECT M.title, R.rating
FROM movies AS M
LEFT JOIN ratings AS R ON M.id = R.movie_id
WHERE M.year = 2010 AND R.rating IS NOT NULL
ORDER BY rating DESC, title;
