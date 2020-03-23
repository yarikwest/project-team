package pl.coderslab.project_team.status;

import pl.coderslab.project_team.model.Status;

import java.util.Set;

interface StatusService {
    Set<Status> getAll();

    Status create(Status status);

    Status update(long id, Status status);

    void delete(long id);

    Status findById(long id);
}
