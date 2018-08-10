SELECT
users.id,
users.auth_id,
users.user_name,
address.street,
address.city,
-- orders.product_id AS product_id,
-- orders.id as order_id
FROM users
INNER JOIN
address
ON
users.id=address.user_id
-- INNER JOIN orders
-- ON users.id=orders.user_id
WHERE users.id = 1;

-- SELECT * FROM users WHERE users.id = $1;