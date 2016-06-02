
class ProcessInstanceWorkitem {
    
    public Id: String;
    public ProcessInstanceId: String;
    public OriginalActorId: String;
    public ActorId: String;
    public ElapsedTimeInDays: Object;
    public ElapsedTimeInHours: Object;
    public ElapsedTimeInMinutes: Object;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public SystemModstamp: Date;

    construct(){}
}