package com.rev.project.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rev.project.model.Users;

@Repository
public interface Userrepo extends JpaRepository<Users, Long> {
    Optional<Users> findByEmailAndPassword(String email, String password);
}
