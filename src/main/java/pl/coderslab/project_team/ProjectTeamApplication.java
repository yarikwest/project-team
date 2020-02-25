package pl.coderslab.project_team;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ProjectTeamApplication {

    public static void main(String[] args) {
        SpringApplication.run(ProjectTeamApplication.class, args);
    }

}
