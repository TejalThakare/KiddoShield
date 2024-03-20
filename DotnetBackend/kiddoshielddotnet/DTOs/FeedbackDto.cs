namespace feedbackDto;
public class FeedbackDto
{
    public string Msg { get; set; }

    public FeedbackDto()
    {
    }

    public FeedbackDto(string msg)
    {
        Msg = msg;
    }
}
