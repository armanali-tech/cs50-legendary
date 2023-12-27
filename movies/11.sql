SELECT M.title
FROM stars AS S
JOIN movies AS M ON M.id = S.movie_id
JOIN people AS P ON P.id = S.person_id
JOIN ratings AS R ON R.movie_id = S.movie_id
WHERE P.name = 'Chadwick Boseman'
ORDER BY R.rating DESC
LIMIT 5;
