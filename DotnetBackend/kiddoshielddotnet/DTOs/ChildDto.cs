namespace childDto;

public class ChildDto
{
    public int Cid { get; set; }
    public string Cfname { get; set; }
    public string Age { get; set; }
    public double Weight { get; set; }
    public string Bloodgrp { get; set; }
    public char Gender { get; set; }
    public string Dob { get; set; }
    public int Uid { get; set; }

    public ChildDto()
    {
    }

    public ChildDto(int cid, string cfname, string age, double weight, string bloodgrp, char gender, string dob)
    {
        Cid = cid;
        Cfname = cfname;
        Age = age;
        Weight = weight;
        Bloodgrp = bloodgrp;
        Gender = gender;
        Dob = dob;
    }

    public ChildDto(string cfname, string age, double weight, string bloodgrp, char gender, string dob)
    {
        Cfname = cfname;
        Age = age;
        Weight = weight;
        Bloodgrp = bloodgrp;
        Gender = gender;
        Dob = dob;
    }

    public ChildDto(int cid, string cfname, string age, double weight, string bloodgrp, char gender, string dob, int uid)
    {
        Cid = cid;
        Cfname = cfname;
        Age = age;
        Weight = weight;
        Bloodgrp = bloodgrp;
        Gender = gender;
        Dob = dob;
        Uid = uid;
    }

    public override string ToString()
    {
        return $"ChildDto [Cid={Cid}, Cfname={Cfname}, Age={Age}, Weight={Weight}, Bloodgrp={Bloodgrp}, Gender={Gender}, Dob={Dob}]";
    }
}
