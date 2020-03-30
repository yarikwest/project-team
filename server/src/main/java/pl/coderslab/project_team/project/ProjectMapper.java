package pl.coderslab.project_team.project;

import org.mapstruct.Mapper;
import pl.coderslab.project_team.model.Project;
import pl.coderslab.project_team.model.User;
import pl.coderslab.project_team.user.UserDto;

import java.util.Set;

@Mapper(componentModel = "spring")
interface ProjectMapper {
    Project projectDtoToProject(ProjectDto projectDto);

    ProjectDto projectToProjectDto(Project project);

    Set<Project> projectDtosToProjects(Set<ProjectDto> projectDtos);

    Set<ProjectDto> projectsToProjectDtos(Set<Project> projects);

    Set<User> userDtosToUsers(Set<UserDto> userDtos);

    Set<UserDto> usersToUserDtos(Set<User> users);
}
