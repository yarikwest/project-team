package pl.coderslab.project_team.project;

import pl.coderslab.project_team.model.Project;

import java.util.Set;

interface ProjectService {
    Project create(Project project);

    Project update(long id, Project project);

    void delete(long id);

    Project findById(long id);

    Set<Project> getAll();
}
