package com.rev.project.repo;

import com.rev.project.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Feedbackrepo extends JpaRepository<Feedback, Long> {
}
