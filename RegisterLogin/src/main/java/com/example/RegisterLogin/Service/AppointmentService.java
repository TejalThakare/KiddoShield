package com.example.RegisterLogin.Service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.RegisterLogin.Entity.Appointment;
import com.example.RegisterLogin.Entity.Hospital;
import com.example.RegisterLogin.Repo.AppointmentRepo;
import com.example.RegisterLogin.Repo.HospitalRepo;

@Service
public class AppointmentService {
	 @Autowired
	    private PasswordEncoder passwordEncoder;
    @Autowired
    private JavaMailSender javaMailSender;

    @Autowired
    private AppointmentRepo appointmentRepository;

    @Autowired
    private HospitalRepo hospitalRepository;

    public void sendReminderEmails() {
        // Calculate the date two days from now
        LocalDate twoDaysFromNow = LocalDate.now().plusDays(2);

        // Retrieve appointments for the calculated date
        List<Appointment> appointments = appointmentRepository.findByAppointmentDateAndHospital(twoDaysFromNow);
        // Send reminder emails
        for (Appointment appointment : appointments) {
            sendEmail(appointment);
        }
    }

    public void sendEmail(Appointment appointment) {
        // Calculate the date two days before the appointment
        LocalDate twoDaysBeforeAppointment = appointment.getDate().minusDays(2);

        // Check if the current date is two days before the appointment
        if (LocalDate.now().equals(twoDaysBeforeAppointment)) {
            Hospital hospital = appointment.getHospital();
            
            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(appointment.getEmail());
            mailMessage.setSubject("Vaccine Appointment Reminder");

            String messageBody = String.format("Dear patient,\n\nThis is a reminder for your upcoming %s appointment on %s at %s.\n\nBest regards,\n%s",
                    appointment.getVname(), appointment.getDate(), hospital.getAddress(), hospital.getHname());

            mailMessage.setText(messageBody);

            // Use hospital-specific email configuration
            JavaMailSenderImpl hospitalMailSender = new JavaMailSenderImpl();
           
            hospitalMailSender.setUsername(hospital.getEmail());
            hospitalMailSender.setPassword(passwordEncoder.encode(hospital.getPassword()));

            // Send the email using the hospital-specific configuration
            hospitalMailSender.send(mailMessage);
        }
    }
    public List<Appointment> findByAppointmentDateAndHospital(LocalDate twoDaysFromNow){
    	List<Appointment>aset=appointmentRepository.findByAppointmentDateAndHospital(twoDaysFromNow);
    	return aset;
    }
}