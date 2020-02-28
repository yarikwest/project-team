insert into USERS (LOGIN, PASSWORD, EMAIL, FIRST_NAME, LAST_NAME, CREATED, UPDATED)
values ('admin', 'admin', 'admin@mail.com', 'Elladine', 'Deighton', '2019-09-01 19:14:17',
        '2020-01-05 17:50:09'),
       ('llevison1', 'y7AVbLj4YBvd', 'llevison1@fda.gov', 'Lorrie', 'Levison', '2019-06-16 22:21:48',
        '2020-01-10 15:20:24'),
       ('wcongdon2', '3ShceMQ', 'wcongdon2@topsy.com', 'Winslow', 'Congdon', '2019-08-29 05:51:07',
        '2020-01-27 22:09:19'),
       ('ngolborn3', 'tiFVycL5M', 'ngolborn3@java.com', 'Nevil', 'Golborn', '2019-09-30 09:30:03',
        '2020-02-20 09:37:27'),
       ('oquigg4', '4FBHpGKIy', 'oquigg4@hao123.com', 'Omero', 'Quigg', '2019-12-02 01:59:30', '2020-01-12 09:29:46'),
       ('tbernakiewicz5', 'wgNi0V', 'tbernakiewicz5@jugem.jp', 'Thalia', 'Bernakiewicz', '2019-10-03 11:05:22',
        '2020-02-16 19:10:59'),
       ('ihigbin6', 'w5LDDxOXjii', 'ihigbin6@hostgator.com', 'Isacco', 'Higbin', '2019-07-05 17:57:01',
        '2020-02-11 20:23:54'),
       ('dobern7', 'jasBVnOA33k', 'dobern7@cafepress.com', 'Dion', 'Obern', '2019-12-18 01:27:31',
        '2020-01-16 10:07:41'),
       ('lclarkson8', 'xBnE0K', 'lclarkson8@goo.gl', 'Lindsy', 'Clarkson', '2019-05-31 22:15:46',
        '2020-01-15 09:56:46'),
       ('cselesnick9', '4037yY9VGd', 'cselesnick9@mashable.com', 'Cosetta', 'Selesnick', '2019-03-29 01:27:15',
        '2020-01-08 22:22:00');

update USERS
set IS_ADMIN = true
where ID = 1;

insert into STATUSES (NAME, LEVEL, IS_ACTIVE, CREATED, UPDATED)
values ('Muffen', 1, true, '2019-07-16 18:59:31', '2020-01-15 04:42:46'),
       ('Moat', 2, false, '2019-09-20 17:33:23', '2020-01-21 23:41:31'),
       ('Rosenbarg', 3, true, '2019-04-14 13:42:21', '2020-02-22 18:54:44'),
       ('Ferriday', 4, true, '2019-08-14 07:46:43', '2020-02-09 03:51:20'),
       ('Tinmouth', 5, false, '2019-05-02 16:31:38', '2020-02-09 23:59:46');

insert into PRIORITIES (NAME, COLOR, IS_ACTIVE, CREATED, UPDATED)
values ('Bagger', '#435964', false, '2019-07-16 18:59:31', '2020-01-15 04:42:46'),
       ('Toohey', '#6f1031', true, '2019-09-20 17:33:23', '2020-01-21 23:41:31'),
       ('Doorly', '#072c67', false, '2019-04-14 13:42:21', '2020-02-22 18:54:44'),
       ('Balle', '#ec24c4', true, '2019-08-14 07:46:43', '2020-02-09 03:51:20'),
       ('Everest', '#958eee', true, '2019-05-02 16:31:38', '2020-02-09 23:59:46');

insert into PROJECTS (NAME, DESCRIPTION, IS_ACTIVE, IDENTITY, CREATED, UPDATED)
values ('ante ipsum', 'quis justo maecenas rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet', true,
        'venenatis tristique', '2019-07-16 18:59:31', '2020-01-15 04:42:46'),
       ('integer ac neque', 'turpis enim blandit mi in porttitor pede justo eu massa donec dapibus duis at', true,
        'habitasse platea dictumst etiam faucibus', '2019-09-20 17:33:23', '2020-01-21 23:41:31'),
       ('hac habitasse',
        'aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
        false, 'luctus ultricies', '2019-04-14 13:42:21', '2020-02-22 18:54:44');

insert into TASKS (USER_ID, THEME, DESCRIPTION, PROJECT_ID, STATUS_ID, PRIORITY_ID, TYPE_OF_TASK, CREATED, UPDATED)
values (7, 'nulla dapibus', 'dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce',
        2, 4, 4, 'aenean fermentum donec', '2019-10-16 03:28:36', '2020-01-23 01:30:58'),
       (4, 'lectus pellentesque eget',
        'proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio', 1, 1, 1,
        'morbi', '2019-10-15 18:30:11', '2020-01-09 09:00:12'),
       (10, 'mauris lacinia sapien quis',
        'consequat morbi a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi quis', 1, 2, 3,
        'ut massa quis', '2019-09-21 11:07:48', '2020-02-16 20:09:21'),
       (3, 'tincidunt lacus at velit vivamus',
        'hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla', 1, 1, 1, 'nisi',
        '2019-01-06 15:42:14', '2020-02-12 20:25:22'),
       (5, 'donec diam neque vestibulum eget',
        'est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac enim',
        2, 1, 4, 'ac', '2019-08-29 14:33:28', '2020-02-05 06:30:15'),
       (10, 'in eleifend quam a odio', 'venenatis lacinia aenean sit amet justo morbi ut odio cras', 3, 1,
        5, 'proin at', '2019-08-10 10:45:12', '2020-02-03 02:42:02'),
       (9, 'nulla',
        'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in', 3, 2, 2, 'at nibh',
        '2019-06-29 16:32:08', '2020-01-02 14:57:24'),
       (7, 'lacinia sapien',
        'iaculis diam erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis',
        2, 3, 4, 'varius integer', '2019-10-07 10:25:19', '2020-02-18 02:37:12'),
       (4, 'eleifend luctus ultricies eu nibh',
        'nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum', 3, 5, 2,
        'dictumst aliquam', '2019-12-06 07:17:22', '2020-02-03 08:24:29'),
       (10, 'praesent',
        'justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat', 3, 4, 1, 'sit',
        '2019-04-01 19:59:17', '2020-01-27 06:08:20'),
       (7, 'vestibulum sed magna at nunc',
        'convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh', 3, 3, 4,
        'imperdiet sapien urna', '2019-03-28 10:40:57', '2020-01-29 12:46:32'),
       (7, 'cubilia curae donec pharetra magna',
        'a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce congue diam id ornare', 1, 5, 2,
        'aenean auctor', '2019-10-28 03:56:50', '2020-02-23 09:01:33'),
       (1, 'libero', 'at vulputate vitae nisl aenean lectus pellentesque eget nunc donec quis', 1, 4, 4,
        'in', '2019-07-08 18:47:17', '2020-02-01 02:00:10'),
       (9, 'ut nunc vestibulum ante',
        'integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam', 3, 4, 4, 'vel pede morbi',
        '2019-02-16 10:50:14', '2020-02-18 01:56:05'),
       (1, 'ultrices posuere cubilia curae',
        'in blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris non ligula',
        2, 1, 1, 'lorem ipsum', '2019-11-29 16:27:38', '2020-02-06 19:55:19');

insert into PROJECTS_USERS (USER_ID, PROJECT_ID, CREATED, UPDATED)
values (7, 3, '2019-10-16 03:28:36', '2020-01-23 01:30:58'),
       (9, 2, '2019-10-15 18:30:11', '2020-01-09 09:00:12'),
       (1, 1, '2019-09-21 11:07:48', '2020-02-16 20:09:21'),
       (8, 2, '2019-01-06 15:42:14', '2020-02-12 20:25:22'),
       (3, 3, '2019-08-29 14:33:28', '2020-02-05 06:30:15'),
       (8, 2, '2019-08-10 10:45:12', '2020-02-03 02:42:02'),
       (6, 3, '2019-06-29 16:32:08', '2020-01-02 14:57:24'),
       (8, 3, '2019-10-07 10:25:19', '2020-02-18 02:37:12'),
       (5, 1, '2019-12-06 07:17:22', '2020-02-03 08:24:29'),
       (5, 1, '2019-04-01 19:59:17', '2020-01-27 06:08:20'),
       (10, 3, '2019-03-28 10:40:57', '2020-01-29 12:46:32'),
       (1, 3, '2019-10-28 03:56:50', '2020-02-23 09:01:33'),
       (8, 3, '2019-07-08 18:47:17', '2020-02-01 02:00:10'),
       (7, 3, '2019-02-16 10:50:14', '2020-02-18 01:56:05'),
       (9, 3, '2019-11-29 16:27:38', '2020-02-06 19:55:19');
