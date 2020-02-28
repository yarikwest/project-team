package pl.coderslab.project_team.task;

import javax.persistence.EntityNotFoundException;

class TaskNotFoundException extends EntityNotFoundException {
    public TaskNotFoundException(long id) {
        super("Task with id: " + id + " not found");
    }
}
