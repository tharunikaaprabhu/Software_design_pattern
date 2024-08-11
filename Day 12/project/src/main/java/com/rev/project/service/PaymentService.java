package com.rev.project.service;

import com.rev.project.model.Payment;
import com.rev.project.repo.Paymentrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentService {

    @Autowired
    private Paymentrepo paymentRepository;

    public Payment processPayment(Payment payment) {
        // Add logic to process the payment
        return paymentRepository.save(payment);
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }
}
