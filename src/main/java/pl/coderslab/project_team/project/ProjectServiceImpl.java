package pl.coderslab.project_team.project;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.coderslab.project_team.exception.NotUniqueValueException;
import pl.coderslab.project_team.model.Project;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository projectRepository;

    ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public Project create(Project project) {
        if (projectRepository.existsByName(project.getName())) {
            throw new NotUniqueValueException("name");
        }
        return projectRepository.save(project);
    }

    @Override
    public Project update(long id, Project project) {
        if (!projectRepository.existsById(id)) {
            log.warn("Project with id: {} not found", id);
            throw new ProjectNotFoundException(id);
        }
        return projectRepository.save(project);
    }

    @Override
    public void delete(long id) {
        if (!projectRepository.existsById(id)) {
            log.warn("Project with id: {} not found", id);
            throw new ProjectNotFoundException(id);
        }
        projectRepository.deleteById(id);
    }

    @Override
    public Project findById(long id) {
        return projectRepository.findById(id).orElseThrow(() -> {
            log.warn("Project with id: {} not found", id);
            return new ProjectNotFoundException(id);
        });
    }

    @Override
    public Set<Project> getAll() {
        return new HashSet<>(projectRepository.findAll());
    }
}
