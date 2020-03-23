package pl.coderslab.project_team.task;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.coderslab.project_team.model.Task;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;

    TaskServiceImpl(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }


    @Override
    public Task create(Task task) {
        return taskRepository.save(task);
    }

    @Override
    public Task update(long id, Task task) {
        if (!taskRepository.existsById(id)) {
            log.warn("Task with id: {} not found", id);
            throw new TaskNotFoundException(id);
        }
        return taskRepository.save(task);
    }

    @Override
    public void delete(long id) {
        if (!taskRepository.existsById(id)) {
            log.warn("Task with id: {} not found", id);
            throw new TaskNotFoundException(id);
        }
        taskRepository.deleteById(id);
    }

    @Override
    public Task findById(long id) {
        return taskRepository.findById(id).orElseThrow(() -> {
            log.warn("Task with id: {} not found", id);
            return new TaskNotFoundException(id);
        });
    }

    @Override
    public Set<Task> getAll() {
        return new HashSet<>(taskRepository.findAll());
    }

    @Override
    public Set<Task> getAllByProjectId(long projectId) {
        return taskRepository.findAllTasksByProjectId(projectId);
    }

}
