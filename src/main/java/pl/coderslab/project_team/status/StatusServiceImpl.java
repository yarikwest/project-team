package pl.coderslab.project_team.status;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import pl.coderslab.project_team.model.Status;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@Service
class StatusServiceImpl implements StatusService {

    private final StatusRepository statusRepository;

    public StatusServiceImpl(StatusRepository statusRepository) {
        this.statusRepository = statusRepository;
    }

    @Override
    public Set<Status> getAll() {
        return new HashSet<>(statusRepository.findAll());
    }

    @Override
    public Status create(Status status) {
        return statusRepository.save(status);
    }

    @Override
    public Status update(long id, Status statusToUpdate) {
        Status statusInDb = statusRepository.findById(id).orElseThrow(() -> {
            log.warn("Status with id: " + id + " not found");
            return new StatusNotFoundException(id);
        });

        statusInDb.setLevel(statusToUpdate.getLevel());
        statusInDb.setName(statusToUpdate.getName());
        statusInDb.setActive(statusToUpdate.getActive());

        return statusRepository.save(statusInDb);
    }

    @Override
    public void delete(long id) {
        if (!statusRepository.existsById(id)) {
            log.warn("Status with id: " + id + " not found");
            throw new StatusNotFoundException(id);
        }
        statusRepository.deleteById(id);
    }

    @Override
    public Status findById(long id) {
        return statusRepository.findById(id).orElseThrow(() -> {
            log.warn("Status with id: " + id + " not found");
            return new StatusNotFoundException(id);
        });
    }
}
