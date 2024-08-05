package com.rev.project.controller;

import com.rev.project.model.Dash;
import com.rev.project.service.DashService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/info")
public class DashController {

    @Autowired
    private DashService dService;

    @GetMapping
    public List<Dash> getAllUsers() {
        return dService.getAllUsers();
    }

    @GetMapping("/{id}")
    public Dash getUserById(@PathVariable Long id) {
        return dService.getUserById(id);
    }

    @PostMapping
    public Dash createUser(@RequestBody Dash dash) {
        return dService.saveUser(dash);
    }

    @PutMapping("/{id}")
    public Dash updateUser(@PathVariable Long id, @RequestBody Dash userDetails) {
        Dash user = dService.getUserById(id);
        if (user != null) {
            user.setUserID(userDetails.getUserID());
            user.setEmail(userDetails.getEmail());
            user.setEventType(userDetails.getEventType());
            user.setPassword(userDetails.getPassword());
            return dService.saveUser(user);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        dService.deleteUser(id);
    }
}

