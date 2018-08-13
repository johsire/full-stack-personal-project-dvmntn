INSERT INTO orders
(user_id, product_id, stripe_id, status, order_email)
VALUES
($1, $2, $3, $4, $5)
RETURNING *;