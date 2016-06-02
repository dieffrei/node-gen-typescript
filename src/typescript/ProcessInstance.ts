
class ProcessInstance {
    
    public Id: String;
    public ProcessDefinitionId: String;
    public TargetObjectId: String;
    public Status: String;
    public CompletedDate: Date;
    public LastActorId: String;
    public ElapsedTimeInDays: Object;
    public ElapsedTimeInHours: Object;
    public ElapsedTimeInMinutes: Object;
    public SubmittedById: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}