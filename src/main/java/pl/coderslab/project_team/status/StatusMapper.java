package pl.coderslab.project_team.status;

import org.mapstruct.Mapper;
import pl.coderslab.project_team.model.Status;

import java.util.Set;

@Mapper(componentModel = "spring")
interface StatusMapper {


    StatusDto statusToStatusDto(Status status);

    Status statusDtoToStatus(StatusDto statusDto);

    Set<StatusDto> statusesToStatusDtos(Set<Status> statuses);

    Set<Status> statusDtosToStatuses(Set<StatusDto> statusDtos);

}
