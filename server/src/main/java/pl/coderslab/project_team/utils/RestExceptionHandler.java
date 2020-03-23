package pl.coderslab.project_team.utils;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;
import pl.coderslab.project_team.exception.NotUniqueValueException;

import javax.persistence.EntityNotFoundException;

@ControllerAdvice
class RestExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<Object> handleEntityNotFoundExceptions(EntityNotFoundException e) {
        String error = "Entity not fount";
        return buildResponseEntity(new ApiError(HttpStatus.NOT_FOUND, error, e));
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException e, HttpHeaders headers, HttpStatus status, WebRequest request) {
        String error = "Validation errors";

        ApiError apiError = new ApiError(status, error, e);
        apiError.addValidationErrors(e.getBindingResult().getFieldErrors());

        return buildResponseEntity(apiError);
    }

    @ExceptionHandler(NotUniqueValueException.class)
    public ResponseEntity<Object> handleNotUniqueValueExceptions(NotUniqueValueException e) {
        String error = "Value duplicate";
        return buildResponseEntity(new ApiError(HttpStatus.CONFLICT, error, e));
    }

    private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
        return new ResponseEntity<>(apiError, apiError.getStatus());
    }
}
