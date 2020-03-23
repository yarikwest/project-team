package pl.coderslab.project_team.user;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.coderslab.project_team.model.User;

interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByLogin(String login);

    boolean existsByEmail(String email);
}
