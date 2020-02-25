package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "tasks")
public class Task extends BaseEntity {
    @NotNull @NotBlank
    String theme;
    @NotNull @Size(max = 255)
    String description;
    String typeOfTask;
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;
    @ManyToOne
    @JoinColumn(name = "project_id")
    Project project;
    @ManyToOne
    @JoinColumn(name = "status_id")
    Status status;
    @ManyToOne
    @JoinColumn(name = "priority_id")
    Priority priority;
}
