DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    login      VARCHAR(250) NOT NULL UNIQUE,
    password   VARCHAR(250) NOT NULL,
    email      VARCHAR(250) NOT NULL UNIQUE,
    first_name VARCHAR(250),
    last_name  VARCHAR(250),
    is_admin   BOOLEAN DEFAULT FALSE,
    created    DATETIME,
    updated    DATETIME

);

DROP TABLE IF EXISTS statuses CASCADE;

CREATE TABLE statuses
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(250) NOT NULL,
    level     INT          NOT NULL,
    is_active BOOLEAN DEFAULT FALSE,
    created   DATETIME,
    updated   DATETIME
);

DROP TABLE IF EXISTS priorities CASCADE;

CREATE TABLE priorities
(
    id        INT AUTO_INCREMENT PRIMARY KEY,
    name      VARCHAR(250) NOT NULL,
    color     VARCHAR(7),
    is_active BOOLEAN DEFAULT FALSE,
    created   DATETIME,
    updated   DATETIME
);

DROP TABLE IF EXISTS projects CASCADE;

CREATE TABLE projects
(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(250) NOT NULL UNIQUE,
    description VARCHAR(255) NOT NULL,
    is_active   BOOLEAN DEFAULT FALSE,
    identity    VARCHAR(250),
    created     DATETIME,
    updated     DATETIME
);

DROP TABLE IF EXISTS projects_users CASCADE;

CREATE TABLE projects_users
(
    id         INT AUTO_INCREMENT PRIMARY KEY,
    user_id    INT NOT NULL,
    project_id INT NOT NULL,
    created    DATETIME,
    updated    DATETIME,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS tasks CASCADE;

CREATE TABLE tasks
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    user_id      INT,
    theme        VARCHAR(250) NOT NULL,
    description  VARCHAR(255) NOT NULL,
    project_id   INT          NOT NULL,
    status_id    INT          NOT NULL,
    priority_id  INT          NOT NULL,
    type_of_task VARCHAR(250),
    created      DATETIME,
    updated      DATETIME,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    FOREIGN KEY (project_id) REFERENCES projects (id) ON DELETE CASCADE,
    FOREIGN KEY (status_id) REFERENCES statuses (id) ON DELETE CASCADE,
    FOREIGN KEY (priority_id) REFERENCES priorities (id) ON DELETE CASCADE
);
