package pl.coderslab.project_team.priority;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.coderslab.project_team.model.Priority;

import java.net.URI;
import java.util.Set;

@RestController
@RequestMapping("priorities")
class PriorityController {
    private final PriorityService priorityService;
    private final PriorityMapper priorityMapper;

    PriorityController(PriorityService priorityService, PriorityMapper priorityMapper) {
        this.priorityService = priorityService;
        this.priorityMapper = priorityMapper;
    }

    @GetMapping
    public ResponseEntity<Set<PriorityDto>> getAll() {
        return ResponseEntity.ok(priorityMapper.prioritiesToPriorityDtos(priorityService.getAll()));
    }

    @GetMapping("{id}")
    public ResponseEntity<PriorityDto> getById(@PathVariable long id) {
        return ResponseEntity.ok(priorityMapper.priorityToPriorityDto(priorityService.findById(id)));
    }

    @PostMapping
    public ResponseEntity<PriorityDto> create(@RequestBody PriorityDto priorityDto) {
        Priority priority = priorityMapper.priorityDtoToPriority(priorityDto);
        PriorityDto savedPriorityDto = priorityMapper.priorityToPriorityDto(priorityService.create(priority));
        return ResponseEntity
                .created(URI.create("priorities/" + savedPriorityDto.getId()))
                .body(savedPriorityDto);
    }

    @PutMapping("{id}")
    public ResponseEntity<PriorityDto> update(@PathVariable long id, @RequestBody PriorityDto priorityDto) {
        Priority priority = priorityMapper.priorityDtoToPriority(priorityDto);
        PriorityDto updatedPriorityDto = priorityMapper.priorityToPriorityDto(priorityService.update(id, priority));
        return ResponseEntity.ok(updatedPriorityDto);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> remove(@PathVariable long id) {
        priorityService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

