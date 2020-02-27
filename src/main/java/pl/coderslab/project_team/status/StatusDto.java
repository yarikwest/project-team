package pl.coderslab.project_team.status;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
class StatusDto {
    long id;
    String name;
    int level;
    boolean active;
}
