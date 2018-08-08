INSERT INTO order
(user_id, product_id)
VALUES
($1, $2)
RETURNING *;