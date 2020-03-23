package pl.coderslab.project_team.user;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.coderslab.project_team.exception.NotUniqueValueException;
import pl.coderslab.project_team.model.User;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User create(User user) {
        if (userRepository.existsByLogin(user.getLogin())) {
            throw new NotUniqueValueException("login");
        } else if (userRepository.existsByEmail(user.getEmail())) {
            throw new NotUniqueValueException("email");
        }

        return userRepository.save(user);
    }

    @Override
    public User update(long id, User user) {
        if (!userRepository.existsById(id)) {
            log.warn("User with id: {} not found", id);
            throw new UserNotFoundException(id);
        } else {
            return userRepository.save(user);
        }
    }

    @Override
    public void delete(long id) {
        if (!userRepository.existsById(id)) {
            log.warn("User with id: {} not found", id);
            throw new UserNotFoundException(id);
        } else {
            userRepository.deleteById(id);
        }
    }

    @Override
    public User findById(long id) {
        return userRepository.findById(id).orElseThrow(() -> {
            log.warn("User with id: {} not found", id);
            return new UserNotFoundException(id);
        });
    }

    @Override
    public Set<User> getAll() {
        return new HashSet<>(userRepository.findAll());
    }
}
