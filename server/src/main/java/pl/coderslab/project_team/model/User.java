package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Column(unique = true)
    String login;
    @Column(nullable = false)
    String password = "1";
    @Column(unique = true)
    String email;
    String firstName;
    String lastName;
    @Column(name = "is_admin")
    Boolean admin;
}
