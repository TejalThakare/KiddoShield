namespace HospitalController;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DbcontextClass;
using Models;
using HospitalServices;
using vaccineDto;

[ApiController]
[Route("kiddoshield/[controller]")]
public class HospitalController : ControllerBase
{
    private readonly IHospitalService _hospitalService;

    public HospitalController(IHospitalService hospitalService)
    {
        _hospitalService = hospitalService;
    }

    [HttpPost]
    [Route("registerHospital")]
    public string AddHospital(Hospital hospital)
    {
        return _hospitalService.AddHospital(hospital);
    }

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

    [HttpPost]
    [Route("registerDoctor/{hid}")]
    public string RegisterDoctor(Doctor doctor, int hid)
    {
        Console.WriteLine("sdddddddddddddddddddddddddddddddddddddd");
        return _hospitalService.RegisterDoctor(doctor, hid);
    }

    [HttpPost]
    [Route("registerVaccine/{hid}")]
    public string RegisterVaccine(VaccineDto vaccineDto, int hid)
    {
        return _hospitalService.RegisterVaccine(vaccineDto, hid);
    }

}