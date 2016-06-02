
class ProcessInstanceHistory {
    
    public Id: String;
    public IsPending: Boolean;
    public ProcessInstanceId: String;
    public TargetObjectId: String;
    public StepStatus: String;
    public OriginalActorId: String;
    public ActorId: String;
    public RemindersSent: Object;
    public ElapsedTimeInDays: Object;
    public ElapsedTimeInHours: Object;
    public ElapsedTimeInMinutes: Object;
    public Comments: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public SystemModstamp: Date;

    construct(){}
}