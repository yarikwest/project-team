package pl.coderslab.project_team.priority;

import javax.persistence.EntityNotFoundException;

class PriorityNotFoundException extends EntityNotFoundException {
    public PriorityNotFoundException(long id) {
        super("Priority with id: {" + id + "} not found");
    }
}
