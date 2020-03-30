package pl.coderslab.project_team.status;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.project_team.model.Status;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("statuses")
class StatusController {
    private final StatusService statusService;
    private final StatusMapper statusMapper;

    StatusController(StatusService statusService, StatusMapper statusMapper) {
        this.statusService = statusService;
        this.statusMapper = statusMapper;
    }

    @GetMapping("/{id}")
    public StatusDto getById(@PathVariable long id) {
        return statusMapper.statusToStatusDto(statusService.findById(id));
    }

    @GetMapping
    public Set<StatusDto> getAll() {
        return statusMapper.statusesToStatusDtos(statusService.getAll());
    }

    @PostMapping
    public ResponseEntity<StatusDto> create(@RequestBody StatusDto statusDto) {
        Status status = statusMapper.statusDtoToStatus(statusDto);
        StatusDto savedStatusDto = statusMapper.statusToStatusDto(statusService.create(status));
        return ResponseEntity
                .created(URI.create("/statuses/" + savedStatusDto.getId()))
                .body(savedStatusDto);
    }

    @PutMapping("/{id}")
    public StatusDto update(@RequestBody StatusDto statusDto, @PathVariable long id) {
        Status status = statusMapper.statusDtoToStatus(statusDto);
        return statusMapper.statusToStatusDto(statusService.update(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable long id) {
        statusService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
