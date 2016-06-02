
class ProcessInstanceStep {
    
    public Id: String;
    public ProcessInstanceId: String;
    public StepStatus: String;
    public OriginalActorId: String;
    public ActorId: String;
    public Comments: String;
    public StepNodeId: String;
    public ElapsedTimeInDays: Object;
    public ElapsedTimeInHours: Object;
    public ElapsedTimeInMinutes: Object;
    public CreatedDate: Date;
    public CreatedById: String;
    public SystemModstamp: Date;

    construct(){}
}