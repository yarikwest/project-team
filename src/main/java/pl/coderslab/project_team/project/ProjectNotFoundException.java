package pl.coderslab.project_team.project;

import javax.persistence.EntityNotFoundException;

class ProjectNotFoundException extends EntityNotFoundException {
    public ProjectNotFoundException(long id) {
        super("Project with id: " + id + " not found");
    }
}
