package pl.coderslab.project_team.project;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import pl.coderslab.project_team.user.UserDto;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.time.LocalDateTime;
import java.util.Set;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProjectDto {
    long id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    LocalDateTime created;
    String identity;
    @NotBlank(message = "Name is mandatory")
    String name;
    @Size(max = 255)
    String description;
    boolean active;
    Set<UserDto> users;
}
