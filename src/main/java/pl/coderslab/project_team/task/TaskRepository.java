package pl.coderslab.project_team.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.coderslab.project_team.model.Task;

import java.util.Set;

interface TaskRepository extends JpaRepository<Task, Long> {
    @Query(value = "select t from Task t where t.project.id = :projectId")
    Set<Task> findAllTasksByProjectId(@Param("projectId") long projectId);
}
