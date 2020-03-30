package pl.coderslab.project_team.priority;

import org.mapstruct.Mapper;
import pl.coderslab.project_team.model.Priority;

import java.util.Set;

@Mapper(componentModel = "spring")
interface PriorityMapper {

    Priority priorityDtoToPriority(PriorityDto priorityDto);

    PriorityDto priorityToPriorityDto(Priority priority);

    Set<Priority> priorityDtosToPriorities(Set<PriorityDto> priorityDtos);

    Set<PriorityDto> prioritiesToPriorityDtos(Set<Priority> priorities);
}
