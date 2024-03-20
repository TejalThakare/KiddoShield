namespace HospitalServices;

using System.Text.Json;
using System.Text.Json.Serialization;
using DbcontextClass;
using doctorDto;
using doctorLoginDto;
using hospitalDto;
using hospitalLoginDto;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Models;
using vaccineDto;
public class HospitalService : IHospitalService
{
    private readonly KiddoDBContext _dbContext;
    public HospitalService(KiddoDBContext dbContext)
    {
        _dbContext = dbContext;
    }

    //add Hospital

    public string AddHospital(Hospital hospital)
    {
        if (hospital == null)
        {
            return "Hospital object is null";
        }

        _dbContext.Add(hospital);
        _dbContext.SaveChanges();

        return "Hospital Added Successfully!";
    }
    public List<Hospital> GetHospitals()
    {
        return _dbContext.Hospitals.ToList();
    }

    //register doctor
    public string RegisterDoctor(DoctorDto doctordto, int hid)
    {

        Hospital hospital = _dbContext.Hospitals.Where(x => x.Hid == hid).FirstOrDefault();

        if (hospital != null)
        {
            Doctor doctor = new Doctor()
            {
                // Did = doctordto.Did,
                Dfname = doctordto.Dfname,
                Dlname = doctordto.Dlname,
                Contact = doctordto.Contact,
                Email = doctordto.Email,
                Password = doctordto.Password,
                Specialization = doctordto.Specialization
            };
            hospital.Doctors.Add(doctor);
            _dbContext.Doctors.Add(doctor);
            _dbContext.SaveChanges();
            return "Doctor added successfully";
        }
        else
            return "Not found";
    }

    // update hospital info
    public string UpdateHospital(HospitalDto hospitaldto)
    {
        Hospital hospital = _dbContext.Hospitals.FirstOrDefault(x => x.Email == hospitaldto.Email);
        if (hospital != null)
        {
            hospital.Hname = hospitaldto.Hname;
            hospital.Address = hospitaldto.Address;
            hospital.Contact = hospitaldto.Contact;
            hospital.Emergencynum = hospitaldto.Emergencynum;
            hospital.Email = hospitaldto.Email;
            hospital.Password = hospital.Password;
            _dbContext.Hospitals.Update(hospital);
            _dbContext.SaveChanges();
            return "updated successfully";
        }
        else
        {
            return "not found.";
        }
    }

    //registration vaccine
    public string RegisterVaccine(VaccineDto vaccine, int hid)
    {
        Hospital hospital = _dbContext.Hospitals.FirstOrDefault(x => x.Hid == hid);
        if (hospital != null)
        {
            Vaccine newVaccine = new Vaccine
            {
                Vname = vaccine.Vname,
                Avdoses = vaccine.Avdoses
            };
            hospital.Vaccines.Add(newVaccine);
            _dbContext.Vaccines.Add(newVaccine);
            _dbContext.SaveChanges();
            return "Vaccine added successfully";
        }
        else
        {
            return "Hospital not found";
        }
    }

    //hospital login 
    public string HospitalLogin(HospitalloginDto hospitallogindto)
    {
        Hospital hospital = _dbContext.Hospitals.Where(x => x.Email == hospitallogindto.Email).FirstOrDefault();
        if (hospital != null)
        {
            if (hospital.Email.Equals(hospitallogindto.Email) && hospital.Password.Equals(hospitallogindto.Password))
            {
                return "Login success";
            }
        }
        return "Not Found";

    }
    // hospital delete    // have to check 
    public string DeleteHospital(int hid)
    {
        Hospital hospital = _dbContext.Hospitals.FirstOrDefault(x => x.Hid == hid);
        if (hospital != null)
        {
            _dbContext.Remove(hospital);
            _dbContext.SaveChanges();
            return "Deleted Successfully!";
        }
        return "Hospital Not Found";
    }
    //doctor login 
    public string LoginDoctor(DoctorloginDto doctorlogindto)
    {
        Doctor doctor = _dbContext.Doctors.FirstOrDefault(x => x.Email == doctorlogindto.Email);

        if (doctor != null && doctor.Password == doctorlogindto.Password)
        {
            return "Login Success";
        }
        return "Not Found";
    }

    //delete doctor
    public string DeleteDoctor(int did)
    {
        Doctor doctor = _dbContext.Doctors.FirstOrDefault(x => x.Did == did);
        if (doctor != null)
        {
            _dbContext.Doctors.Remove(doctor);
            _dbContext.SaveChanges();
            return "Delete successfully";
        }

        return "Doctor not found!";
    }
    //update login doctor info
    public string UpdateDoctor(int did, DoctorDto doctordto)
    {
        Doctor doctor = _dbContext.Doctors.FirstOrDefault(x => x.Did == did);
        if (doctor != null)
        {
            // doctor.Did = doctordto.Did;
            doctor.Dfname = doctordto.Dfname;
            doctor.Dlname = doctordto.Dlname;
            doctor.Contact = doctordto.Contact;
            doctor.Specialization = doctordto.Specialization;
            doctor.Email = doctordto.Email;
            _dbContext.Doctors.Update(doctor);
            _dbContext.SaveChanges();
            return "Updated Successfully.";
        }
        return "Doctor not found";
    }

    //Get all Doctors 
    public List<Doctor> GetAllDoctors(int hid)
    {
        Hospital hospital = _dbContext.Hospitals.FirstOrDefault(x => x.Hid == hid);
        if (hospital != null)
        {

            List<Doctor> doctors = _dbContext.Doctors.Where(x => x.Hid == hid).ToList();
            foreach (var doctor in doctors)
            {
                doctor.Hospital = null;
            }


            return doctors;
        }
        return null;

    }
}