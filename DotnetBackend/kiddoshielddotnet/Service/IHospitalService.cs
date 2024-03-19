namespace HospitalServices;
using Models;
using vaccineDto;
public interface IHospitalService
{
    string AddHospital(Hospital hospital);
    List<Hospital> GetHospitals();
    string RegisterDoctor(Doctor doctor, int hid);
    string RegisterVaccine(VaccineDto vaccine, int hid);
}