package com.rev.project.controller;

import com.rev.project.model.Admin;
import com.rev.project.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/events")
public class AdminController {

    @Autowired
    private AdminService adService;

    @GetMapping
    public List<Admin> getAllEvents() {
        return adService.getAllEvents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Admin> getEventById(@PathVariable Long id) {
        Optional<Admin> optionalEvent = adService.getEventById(id);
        if (optionalEvent.isPresent()) {
            return ResponseEntity.ok(optionalEvent.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Admin createEvent(@RequestBody Admin admin) {
        return adService.createEvent(admin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateEvent(@PathVariable Long id, @RequestBody Admin adminDetails) {
        Admin updatedEvent = adService.updateEvent(id, adminDetails);
        if (updatedEvent != null) {
            return ResponseEntity.ok(updatedEvent);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
        adService.deleteEvent(id);
        return ResponseEntity.noContent().build();
    }
}
