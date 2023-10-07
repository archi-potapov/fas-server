
CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    login VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    privilege_id INTEGER
);

create TABLE privilege(
    id SERIAL PRIMARY KEY,
    premium BOOLEAN
);


-- create TABLE person(
--     id SERIAL PRIMARY KEY,
--     login VARCHAR(255),
--     password VARCHAR(255),
--     email VARCHAR(255),
--     privilege_id INTEGER,
--     FOREIGN KEY (privilege_id) REFERENCES privilege (id)
-- );

-- create TABLE privilege(
--     id SERIAL PRIMARY KEY,
--     premium BOOLEAN
-- );