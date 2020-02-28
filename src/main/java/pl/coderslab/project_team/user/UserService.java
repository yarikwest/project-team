package pl.coderslab.project_team.user;

import pl.coderslab.project_team.model.User;

import java.util.Set;

interface UserService {
    User create(User user);

    User update(long id, User user);

    void delete(long id);

    User findById(long id);

    Set<User> getAll();
}
