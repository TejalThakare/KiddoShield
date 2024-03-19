
namespace vaccineDto;
public class VaccineDto
{
    public int Vid { get; set; }
    public string Vname { get; set; }
    public int Avdoses { get; set; }

    public VaccineDto(int vid, string vname, int avdoses)
    {
        Vid = vid;
        Vname = vname;
        Avdoses = avdoses;
    }
}