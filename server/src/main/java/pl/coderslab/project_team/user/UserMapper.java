package pl.coderslab.project_team.user;

import org.mapstruct.Mapper;
import pl.coderslab.project_team.model.User;

import java.util.Set;

@Mapper(componentModel = "spring")
interface UserMapper {
    User userDtoToUser(UserDto userDto);

    UserDto userToUserDto(User user);

    Set<User> userDtosToUsers(Set<UserDto> userDtos);

    Set<UserDto> usersToUserDtos(Set<User> users);
}
