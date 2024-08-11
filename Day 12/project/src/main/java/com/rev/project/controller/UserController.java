package com.rev.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.rev.project.model.Users;
import com.rev.project.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getusers")
    public List<Users> getUsers() {
        return userService.getUsers();
    }

    @PostMapping("/register")
    public Users addUser(@RequestBody Users user) {
        return userService.addUser(user);
    }

    @DeleteMapping("/delete/{uid}")
    public String deleteUser(@PathVariable Long uid) {
        return userService.deleteUser(uid);
    }

   

    @PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody Users user) {
    try {
        Users loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
        return ResponseEntity.ok(loggedInUser);
    } catch (RuntimeException e) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
    }
}

}
