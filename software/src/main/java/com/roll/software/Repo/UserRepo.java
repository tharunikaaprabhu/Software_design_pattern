package com.roll.software.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.roll.software.model.User;

public interface UserRepo extends JpaRepository<User,String>{
    
}
