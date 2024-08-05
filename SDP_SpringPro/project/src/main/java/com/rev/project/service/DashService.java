package com.rev.project.service;

import com.rev.project.model.Dash;
import com.rev.project.repo.Dashrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DashService {
    
    @Autowired
    private Dashrepo drepo;

    public List<Dash> getAllUsers() {
        return drepo.findAll();
    }

    public Dash getUserById(Long id) {
        return drepo.findById(id).orElse(null);
    }

    public Dash saveUser(Dash user) {
        return drepo.save(user);
    }

    public void deleteUser(Long id) {
        drepo.deleteById(id);
    }
}

