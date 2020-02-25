package pl.coderslab.project_team.model;

import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @NotNull @NotBlank
    String login;
    @NotNull
    String password;
    @Email
    String email;
    String firstName;
    String lastName;
}
