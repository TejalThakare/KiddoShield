namespace HospitalController;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DbcontextClass;
using Models;
using HospitalServices;
using vaccineDto;
using doctorDto;
using hospitalLoginDto;
using doctorLoginDto;
using hospitalDto;
using integerDto;

[ApiController]
[Route("kiddoshield/[controller]")]
public class HospitalController : ControllerBase
{
    private readonly IHospitalService _hospitalService;

    public HospitalController(IHospitalService hospitalService)
    {
        _hospitalService = hospitalService;
    }
    //Register hospital
    [HttpPost]
    [Route("registerHospital")]
    public string AddHospital(Hospital hospital)
    {
        return _hospitalService.AddHospital(hospital);
    }

    //get hospital
    [HttpGet]
    [Route("getAllHospital")]
    public List<Hospital> GetHospitals()
    {
        List<Hospital> hosList = _hospitalService.GetHospitals();
        if (hosList != null)
        {
            return hosList;
        }
        else return null;
    }

    //login hospital
    [HttpPost]
    [Route("loginHospital")]
    public string HospitalLogin(HospitalloginDto hospitallogindto)
    {
        string messaage = _hospitalService.HospitalLogin(hospitallogindto);
        return messaage;
    }

    // register doctor
    [HttpPost]
    [Route("registerDoctor/{hid}")]
    public string RegisterDoctor(DoctorDto doctordto, int hid)
    {
        return _hospitalService.RegisterDoctor(doctordto, hid);
    }

    //Delete Doctor
    [HttpDelete]
    [Route("deleteHospital/{hid}")]
    public string DeleteHospital(int hid)
    {
        return _hospitalService.DeleteHospital(hid);
    }

    //Login Doctor
    [HttpPost]
    [Route("loginDoctor")]
    public string LoginDoctor(DoctorloginDto doctorlogindto)
    {
        return _hospitalService.LoginDoctor(doctorlogindto);
    }

    //update Hospital info
    [HttpPut]
    [Route("updateHospital/{hid}")]
    public string UpdateHospital(HospitalDto hospitaldto)
    {
        return _hospitalService.UpdateHospital(hospitaldto);
    }

    //Delete Doctor
    [HttpDelete]
    [Route("deleteDoctor/{did}")]
    public string DeleteDoctor(int did)
    {
        return _hospitalService.DeleteDoctor(did);
    }

    //update doctor info
    [HttpPut]
    [Route("updateDoctor/{did}")]
    public string UpdateDoctor(int did, DoctorDto doctordto)
    {
        return _hospitalService.UpdateDoctor(did, doctordto);
    }

    // register vaccine
    [HttpPost]
    [Route("registerVaccine/{hid}")]
    public string RegisterVaccine(VaccineDto vaccineDto, int hid)
    {
        return _hospitalService.RegisterVaccine(vaccineDto, hid);
    }

    //Get All vaccine
    [HttpGet]
    [Route("getAllVaccine/{hid}")]
    public HashSet<Vaccine> GetAllVaccines(int hid)
    {
        return _hospitalService.GetAllVaccines(hid);
    }

    //Get all doctors
    [HttpGet]
    [Route("getAllDoctors/{hid}")]
    public List<Doctor> GetAllDoctors(int hid)
    {
        return _hospitalService.GetAllDoctors(hid);
    }
    //update vaccine doses
    [HttpPut]
    [Route("addDoses/{vid}")]
    public string UpdateVaccineDoses(int vid, IntegerDto integerdto)
    {
        return _hospitalService.UpdateVaccineDoses(vid, integerdto);
    }

    //get all appointments ------------------not checked 
    [HttpGet]
    [Route("getapp/{hid}")]
    public List<Appointment> GetallAppointments(int hid)
    {
        return _hospitalService.GetallAppointments(hid);
    }
}