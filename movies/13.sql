SELECT DISTINCT P.name
FROM stars AS S
JOIN movies AS M ON M.id = S.movie_id
JOIN people AS P ON P.id = S.person_id
WHERE M.id IN (
    SELECT movie_id
    FROM stars
    WHERE person_id = (SELECT id FROM people WHERE name = 'Kevin Bacon')
) AND P.name != 'Kevin Bacon';
