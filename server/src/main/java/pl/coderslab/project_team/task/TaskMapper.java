package pl.coderslab.project_team.task;

import org.mapstruct.Mapper;
import pl.coderslab.project_team.model.Task;

import java.util.Set;

@Mapper(componentModel = "spring")
interface TaskMapper {
    Task taskDtoToTask(TaskDto taskDto);

    TaskDto taskToTaskDto(Task task);

    Set<Task> taskDtosToTasks(Set<TaskDto> taskDtos);

    Set<TaskDto> tasksToTaskDtos(Set<Task> tasks);
}
