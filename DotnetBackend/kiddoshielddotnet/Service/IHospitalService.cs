namespace HospitalServices;

using doctorDto;
using doctorLoginDto;
using hospitalDto;
using hospitalLoginDto;
using integerDto;
using Microsoft.AspNetCore.Mvc;
using Models;
using vaccineDto;
public interface IHospitalService
{
    string AddHospital(Hospital hospital);
    List<Hospital> GetHospitals();
    string RegisterDoctor(DoctorDto doctordto, int hid);
    string RegisterVaccine(VaccineDto vaccine, int hid);

    string HospitalLogin(HospitalloginDto hospitallogindto);
    string LoginDoctor(DoctorloginDto doctorlogindto);
    string DeleteDoctor(int did);
    string UpdateDoctor(int did, DoctorDto doctordto);
    string DeleteHospital(int hid);
    string UpdateHospital(HospitalDto hospitaldto);
    List<Doctor> GetAllDoctors(int hid);
    HashSet<Vaccine> GetAllVaccines(int hid);
    string UpdateVaccineDoses(int vid, IntegerDto integerdto);
    List<Appointment> GetallAppointments(int hid);
}