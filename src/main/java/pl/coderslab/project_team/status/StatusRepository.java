package pl.coderslab.project_team.status;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.coderslab.project_team.model.Status;

interface StatusRepository extends JpaRepository<Status, Long> {
}
