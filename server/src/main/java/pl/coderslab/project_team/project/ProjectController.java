package pl.coderslab.project_team.project;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.project_team.model.Project;

import javax.validation.Valid;
import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("projects")
class ProjectController {
    private final ProjectService projectService;
    private final ProjectMapper projectMapper;

    ProjectController(ProjectService projectService, ProjectMapper projectMapper) {
        this.projectService = projectService;
        this.projectMapper = projectMapper;
    }

    @GetMapping
    public ResponseEntity<Set<ProjectDto>> getAll() {
        return ResponseEntity.ok(projectMapper.projectsToProjectDtos(projectService.getAll()));
    }

    @GetMapping("{id}")
    public ResponseEntity<ProjectDto> getById(@PathVariable long id) {
        Project project = projectService.findById(id);
        ProjectDto projectDto = projectMapper.projectToProjectDto(project);
        return ResponseEntity.ok(projectDto);
    }

    @PostMapping
    public ResponseEntity<ProjectDto> create(@Valid @RequestBody ProjectDto projectDto) {
        Project project = projectMapper.projectDtoToProject(projectDto);
        project = projectService.create(project);
        return ResponseEntity
                .created(URI.create("projects/" + project.getId()))
                .body(projectMapper.projectToProjectDto(project));
    }

    @PutMapping("{id}")
    public ResponseEntity<ProjectDto> update(@PathVariable long id, @Valid @RequestBody ProjectDto projectDto) {
        Project project = projectMapper.projectDtoToProject(projectDto);
        project = projectService.update(id, project);
        return ResponseEntity.ok(projectMapper.projectToProjectDto(project));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> remove(@PathVariable long id) {
        projectService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
