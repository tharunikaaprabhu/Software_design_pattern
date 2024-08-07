package com.roll.software.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.roll.software.model.User;
import com.roll.software.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService uservice;
     
    @GetMapping("/all")
    public List<User> GetUsers(){
        return uservice.getUsers();
    }
    @PostMapping("/add")
    public User AddUsers(@RequestBody User user)
    {
        return uservice.addUser(user);
    }
     @PutMapping("/edit/{uid}")
     public String EditUser(@RequestBody User user,@PathVariable String uid)
     {  
        return uservice.editUser(user,uid);

     }

     @DeleteMapping("/delete/{uid}")
     public String DeleteUser(@PathVariable String uid){
        return uservice.deleteUser(uid);

     }
    
}
