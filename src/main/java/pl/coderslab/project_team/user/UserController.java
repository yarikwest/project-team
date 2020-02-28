package pl.coderslab.project_team.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.project_team.model.User;

import javax.validation.Valid;
import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("users")
class UserController {
    private final UserService userService;
    private final UserMapper userMapper;

    UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping
    public ResponseEntity<Set<UserDto>> getAll() {
        return ResponseEntity.ok(userMapper.usersToUserDtos(userService.getAll()));
    }

    @GetMapping("{id}")
    public ResponseEntity<UserDto> getById(@PathVariable long id) {
        User user = userService.findById(id);
        UserDto userDto = userMapper.userToUserDto(user);
        return ResponseEntity.ok(userDto);
    }

    @PostMapping
    public ResponseEntity<UserDto> create(@Valid @RequestBody UserDto userDto) {
        User user = userMapper.userDtoToUser(userDto);
        user = userService.create(user);
        return ResponseEntity
                .created(URI.create("users/" + user.getId()))
                .body(userMapper.userToUserDto(user));
    }

    @PutMapping("{id}")
    public ResponseEntity<UserDto> update(@PathVariable long id, @Valid @RequestBody UserDto userDto) {
        User user = userMapper.userDtoToUser(userDto);
        user = userService.update(id, user);
        return ResponseEntity.ok(userMapper.userToUserDto(user));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> remove(@PathVariable long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
