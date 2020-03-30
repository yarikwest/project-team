package pl.coderslab.project_team.task;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.project_team.model.Task;

import javax.validation.Valid;
import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("tasks")
class TaskController {
    private final TaskService taskService;
    private final TaskMapper taskMapper;

    TaskController(TaskService taskService, TaskMapper taskMapper) {
        this.taskService = taskService;
        this.taskMapper = taskMapper;
    }

    @GetMapping
    public ResponseEntity<Set<TaskDto>> getAll() {
        return ResponseEntity.ok(taskMapper.tasksToTaskDtos(taskService.getAll()));
    }

    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getById(@PathVariable long id) {
        Task task = taskService.findById(id);
        TaskDto taskDto = taskMapper.taskToTaskDto(task);
        return ResponseEntity.ok(taskDto);
    }

    @PostMapping
    public ResponseEntity<TaskDto> create(@Valid @RequestBody TaskDto taskDto) {
        Task task = taskMapper.taskDtoToTask(taskDto);
        task = taskService.create(task);
        return ResponseEntity
                .created(URI.create("projects/" + task.getId()))
                .body(taskMapper.taskToTaskDto(task));
    }

    @PutMapping("{id}")
    public ResponseEntity<TaskDto> update(@PathVariable long id, @Valid @RequestBody TaskDto taskDto) {
        Task task = taskMapper.taskDtoToTask(taskDto);
        task = taskService.update(id, task);
        return ResponseEntity.ok(taskMapper.taskToTaskDto(task));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> remove(@PathVariable long id) {
        taskService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("project/{id}")
    public ResponseEntity<Set<TaskDto>> getAllByProjectId(@PathVariable long id) {
        Set<Task> tasks = taskService.getAllByProjectId(id);
        Set<TaskDto> taskDtos = taskMapper.tasksToTaskDtos(tasks);

        return ResponseEntity.ok(taskDtos);
    }

}
