package pl.coderslab.project_team.project;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.coderslab.project_team.model.Project;

interface ProjectRepository extends JpaRepository<Project, Long> {
    boolean existsByName(String name);
}
