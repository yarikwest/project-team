package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "statuses")
public class Status extends BaseEntity {
    @NotNull @NotBlank
    String name;
    @Min(1)
    Integer level;
    Boolean isActive;
}
