SELECT M.title
FROM stars AS S
JOIN movies AS M ON M.id = S.movie_id
JOIN people AS P ON P.id = S.person_id
WHERE P.name IN ('Bradley Cooper', 'Jennifer Lawrence')
GROUP BY M.title
HAVING COUNT(DISTINCT P.id) = 2;
