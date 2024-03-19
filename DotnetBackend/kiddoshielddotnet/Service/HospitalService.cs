namespace HospitalServices;
using DbcontextClass;
using Models;
using vaccineDto;
public class HospitalService : IHospitalService
{
    private readonly KiddoDBContext _dbContext;
    public HospitalService(KiddoDBContext dbContext)
    {
        _dbContext = dbContext;
    }

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
    public string RegisterDoctor(Doctor doctor, int hid)
    {

        Hospital hospital = _dbContext.Hospitals.Where(x => x.Hid == hid).FirstOrDefault();
        if (hospital != null)
        {
            doctor.Hospital = hospital;
            _dbContext.Doctors.Add(doctor);
            _dbContext.SaveChanges();
            return "Doctor added successfully";
        }
        else
            return "Hospital not found";
    }
    public string RegisterVaccine(VaccineDto vaccine, int hid)
    {
        Hospital hospital = _dbContext.Hospitals.FirstOrDefault(x => x.Hid == hid);
        if (hospital != null)
        {
            Vaccine newVaccine = new Vaccine
            {
                Vname = vaccine.Vname,
                Avdoses = vaccine.Avdoses,
                Hid = hid
            };
            _dbContext.Vaccines.Add(newVaccine);
            _dbContext.SaveChanges();
            return "Vaccine added successfully";
        }
        else
        {
            return "Hospital not found";
        }
    }
}