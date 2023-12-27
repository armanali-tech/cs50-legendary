SELECT P.name
FROM stars AS S
LEFT JOIN movies AS M ON M.id = S.movie_id
LEFT JOIN people AS P ON P.id = S.person_id
WHERE M.year = 2004
ORDER BY P.birth ASC;
