package com.rev.project.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rev.project.model.Users;
import com.rev.project.repo.Userrepo;

@Service
public class UserService {

    @Autowired
    private Userrepo userRepository;

    public List<Users> getUsers() {
        return userRepository.findAll();
    }

    public Users addUser(Users user) {
        return userRepository.save(user);
    }

    public String deleteUser(Long uid) {
        userRepository.deleteById(uid);
        return "User deleted with id: " + uid;
    }

    public Users loginUser(String email, String password) {
        Optional<Users> optionalUser = userRepository.findByEmailAndPassword(email, password);
        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            throw new RuntimeException("Invalid login credentials");
        }
    }


    
}
