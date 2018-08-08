INSERT into address (user_id, street , city, state, zip)
VALUES ($1, $2, $3, $4, $5) RETURNING *;

