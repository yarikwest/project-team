package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.text.Normalizer;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "projects")
public class Project extends BaseEntity {
    @NotNull @NotBlank
    String name;
    @NotNull @Size(max = 255)
    String description;
    Boolean isActive;
    String identity;
    @ManyToMany
    @JoinTable(name = "projects_users",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    Set<User> users = new HashSet<>();

    @Override
    public String toString() {
        return "Project{" +
                "name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", identifier='" + identity + '\'' +
                ", isActive=" + isActive +
                ", users=" + users +
                '}';
    }

    @PrePersist
    @PostUpdate
    public void createIdentifier() {
        this.identity = Normalizer.normalize(this.name, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .replaceAll("ł", "l")
                .replaceAll("Ł", "L")
                .replaceAll(" ", "");
    }
}
