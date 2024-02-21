package com.example.RegisterLogin.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

@Service
public class ScheduledTasks {

    @Autowired
    private AppointmentService appointmentService;

    @Scheduled(cron = "0 0 12 * * ?") // Run every day at 12:00 PM
    public void sendAppointmentReminders() {
        appointmentService.sendReminderEmails();
    }
}
