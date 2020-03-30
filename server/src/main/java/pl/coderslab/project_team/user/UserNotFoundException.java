package pl.coderslab.project_team.user;

import javax.persistence.EntityNotFoundException;

class UserNotFoundException extends EntityNotFoundException {
    public UserNotFoundException(long id) {
        super("User with id: {" + id + "} not found");
    }
}
