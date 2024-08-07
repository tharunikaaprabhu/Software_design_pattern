package com.roll.software.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roll.software.Repo.UserRepo;
import com.roll.software.model.User;

@Service
public class UserService {
    @Autowired
    private UserRepo urepo;
    public List<User>getUsers(){
        return urepo.findAll();
    }
    public User addUser(User user){
        return urepo.save(user);
    }
    public String editUser(User user,String uid)
    {
        User userx = urepo.findById(uid).orElse(null);

        if(userx!=null){
            urepo.save(user);
            return userx + "Updated";
        }
        return "User Not Found !";
    }
    public String deleteUser(String uid){
        urepo.deleteById(uid);
        return uid + "Deleted";
    }
}
