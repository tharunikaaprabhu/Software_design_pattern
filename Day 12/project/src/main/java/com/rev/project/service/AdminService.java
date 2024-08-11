package com.rev.project.service;

import com.rev.project.model.Admin;
import com.rev.project.repo.Adminrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private Adminrepo adminrepo;

    public List<Admin> getAllEvents() {
        return adminrepo.findAll();
    }

    public Optional<Admin> getEventById(Long id) {
        return adminrepo.findById(id);
    }

    public Admin createEvent(Admin admin) {
        return adminrepo.save(admin);
    }

    public Admin updateEvent(Long id, Admin eventDetails) {
        Optional<Admin> optionalEvent = adminrepo.findById(id);
        if (optionalEvent.isPresent()) {
            Admin admin = optionalEvent.get();
            admin.setEventID(eventDetails.getEventID());
            admin.setEventName(eventDetails.getEventName());
            admin.setEventStatus(eventDetails.getEventStatus());
            admin.setEventDate(eventDetails.getEventDate());
            admin.setAttendees(eventDetails.getAttendees());
            return adminrepo.save(admin);
        }
        return null;
    }

    public void deleteEvent(Long id) {
        adminrepo.deleteById(id);
    }
}
