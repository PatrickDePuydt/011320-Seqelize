--// Models are always singular
--// Models are blueprints for users

-- Column Data Type
-- name:string
sequelize model:create --name user --attributes name:string,age:integer,email:string

sequelize db:migrate

sequelize db:migrate:undo

SELECT * FROM users;

sequelize model:create --name pet --attributes name:string,species:string,description:text,userID:integer
-- "Pets" comes from the singular "pet"

SELECT u.name AS owner_name, p.name AS pet_name
FROM user u
JOIN pets p -- the many
ON u.id = p."userId"; --// Some value that is the same that links them together
-- When you have a one to many relation, the connection happens on the many

-- Done in zshell, not PG cli
sequelize model:create --name pet --attributes name:string,species:string,description:text,userId:integer

