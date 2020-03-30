package pl.coderslab.project_team.priority;

import pl.coderslab.project_team.model.Priority;

import java.util.Set;

interface PriorityService {
    Priority create(Priority priority);

    Priority update(long id, Priority priority);

    void delete(long id);

    Priority findById(long id);

    Set<Priority> getAll();
}
