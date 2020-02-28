package pl.coderslab.project_team.user;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
class UserDto {
    long id;
    @NotBlank(message = "Login is mandatory")
    String login;
    String firstName;
    String lastName;
    @Email
    @NotBlank(message = "Email is mandatory")
    String email;
    boolean admin;
}
