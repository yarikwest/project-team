package pl.coderslab.project_team.priority;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.coderslab.project_team.model.Priority;

import java.util.HashSet;
import java.util.Set;

@Service
@Slf4j
class PriorityServiceImpl implements PriorityService {
    private final PriorityRepository priorityRepository;

    PriorityServiceImpl(PriorityRepository priorityRepository) {
        this.priorityRepository = priorityRepository;
    }

    @Override
    public Priority create(Priority priority) {
        return priorityRepository.save(priority);
    }

    @Override
    public Priority update(long id, Priority priority) {
        if (!priorityRepository.existsById(id)) {
            log.warn("Priority with id: {} not found", id);
            throw new PriorityNotFoundException(id);
        } else {
            return priorityRepository.save(priority);
        }
    }

    @Override
    public void delete(long id) {
        if (!priorityRepository.existsById(id)) {
            log.warn("Priority with id: {} not found", id);
            throw new PriorityNotFoundException(id);
        } else {
            priorityRepository.deleteById(id);
        }
    }

    @Override
    public Priority findById(long id) {
        return priorityRepository.findById(id).orElseThrow(() -> {
            log.warn("Priority with id: {} not found", id);
            return new PriorityNotFoundException(id);
        });
    }

    @Override
    public Set<Priority> getAll() {
        return new HashSet<>(priorityRepository.findAll());
    }
}
