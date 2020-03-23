package pl.coderslab.project_team.status;

import javax.persistence.EntityNotFoundException;

class StatusNotFoundException extends EntityNotFoundException {
    public StatusNotFoundException(long id) {
        super("Status with id: {" + id + "} not found");
    }
}
