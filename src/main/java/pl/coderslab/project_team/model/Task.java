package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
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
    String theme;
    String description;
    @Column(name = "type_of_task")
    String type;
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
