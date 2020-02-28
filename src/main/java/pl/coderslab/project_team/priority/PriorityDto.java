package pl.coderslab.project_team.priority;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
class PriorityDto {
    long id;
    String name;
    String color;
    boolean active;
}
