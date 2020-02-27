package pl.coderslab.project_team.utils;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Getter
@Setter
@FieldDefaults(level = AccessLevel.PRIVATE)
class ApiError {
    int code;
    HttpStatus status;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    LocalDateTime timestamp;
    String error;
    String message;

    private ApiError() {
        timestamp = LocalDateTime.now();
    }

    ApiError(HttpStatus status, Throwable ex) {
        this();
        this.status = status;
        this.code = status.value();
        this.error = "Unexpected error";
        this.message = ex.toString();
    }

    ApiError(HttpStatus status, String error, Throwable ex) {
        this();
        this.status = status;
        this.code = status.value();
        this.error = error;
        this.message = ex.toString();
    }
}
