package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "priorities")
public class Priority extends BaseEntity {
    @NotNull @NotBlank
    String name;
    @Size(min = 4, max = 7)
    String color;
    Boolean isActive;
}
