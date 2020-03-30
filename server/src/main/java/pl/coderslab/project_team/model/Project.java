package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
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
    @Column(unique = true)
    String name;
    String description;
    String identity;
    @Column(name = "is_active")
    Boolean active;
    @ManyToMany
    @JoinTable(name = "projects_users",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id"))
    Set<User> users = new HashSet<>();

    @PrePersist
    @PostUpdate
    public void createIdentifier() {
        this.identity = Normalizer.normalize(this.name, Normalizer.Form.NFD)
                .replaceAll("\\p{M}", "")
                .replaceAll("ł", "l")
                .replaceAll("Ł", "L")
                .replaceAll(" ", "-");
    }
}
