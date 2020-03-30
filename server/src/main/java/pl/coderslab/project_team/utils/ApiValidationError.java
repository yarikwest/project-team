package pl.coderslab.project_team.utils;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;

@Getter
@Setter
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
class ApiValidationError extends ApiSubError {
    String object;
    String field;
    Object rejectedValue;
    String message;
}
