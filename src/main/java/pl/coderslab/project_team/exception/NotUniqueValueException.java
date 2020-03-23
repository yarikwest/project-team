package pl.coderslab.project_team.exception;

import org.springframework.dao.DataIntegrityViolationException;

public class NotUniqueValueException extends DataIntegrityViolationException {
    public NotUniqueValueException(String fieldName) {
        super("User with this " + fieldName + " already exists");
    }
}
