package pl.coderslab.project_team.task;

import pl.coderslab.project_team.model.Task;

import java.util.Set;

interface TaskService {
    Task create(Task task);

    Task update(long id, Task task);

    void delete(long id);

    Task findById(long id);

    Set<Task> getAll();

    Set<Task> getAllByProjectId(long projectId);
}
