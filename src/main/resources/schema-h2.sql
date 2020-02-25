DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    login      VARCHAR(250) NOT NULL,
    password   VARCHAR(250) NOT NULL,
    email      VARCHAR(250) NOT NULL,
    first_name VARCHAR(250),
    last_name  VARCHAR(250)
);

DROP TABLE IF EXISTS statuses CASCADE;

CREATE TABLE statuses
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(250) NOT NULL,
    level     INT          NOT NULL,
    is_active BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS priorities CASCADE;

CREATE TABLE priorities
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(250) NOT NULL,
    color     VARCHAR(7),
    is_active BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(250) NOT NULL,
    description VARCHAR(255) NOT NULL,
    is_active   BOOLEAN DEFAULT FALSE,
    created     DATETIME,
    identity    VARCHAR(250)
);

DROP TABLE IF EXISTS projects_users CASCADE;

CREATE TABLE projects_users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT NOT NULL,
    project_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (project_id) REFERENCES projects (id)
);

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    created      DATETIME,
    user_id      INT,
    theme        VARCHAR(250) NOT NULL,
    description  VARCHAR(255) NOT NULL,
    project_id   INT          NOT NULL,
    status_id    INT          NOT NULL,
    priority_id  INT          NOT NULL,
    type_of_task VARCHAR(250),
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (project_id) REFERENCES projects (id),
    FOREIGN KEY (status_id) REFERENCES statuses (id),
    FOREIGN KEY (priority_id) REFERENCES priorities (id)
);
