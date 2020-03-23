package pl.coderslab.project_team.task;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import pl.coderslab.project_team.priority.PriorityDto;
import pl.coderslab.project_team.project.ProjectDto;
import pl.coderslab.project_team.status.StatusDto;
import pl.coderslab.project_team.user.UserDto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
class TaskDto {
    long id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime created;
    @NotBlank(message = "Theme is mandatory")
    String theme;
    @Size(max = 255)
    String description;
    String type;
    UserDto user;
    @NotNull(message = "Task should be assign to the project")
    ProjectDto project;
    @NotNull(message = "Task should has status")
    StatusDto status;
    @NotNull(message = "Task should has priority")
    PriorityDto priority;
}
