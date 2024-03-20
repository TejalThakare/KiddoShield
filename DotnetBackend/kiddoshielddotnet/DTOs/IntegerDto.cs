namespace integerDto;
public class IntegerDto
{
    public int Avdoses { get; set; }

    public IntegerDto()
    {
    }

    public int GetAvdoses()
    {
        return Avdoses;
    }

    public void SetAvdoses(int avdoses)
    {
        Avdoses = avdoses;
    }
}
