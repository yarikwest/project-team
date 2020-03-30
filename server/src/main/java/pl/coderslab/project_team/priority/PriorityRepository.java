package pl.coderslab.project_team.priority;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.coderslab.project_team.model.Priority;

interface PriorityRepository extends JpaRepository<Priority, Long> {
}
