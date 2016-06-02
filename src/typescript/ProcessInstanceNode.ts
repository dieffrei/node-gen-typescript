
class ProcessInstanceNode {
    
    public Id: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public ProcessInstanceId: String;
    public ProcessNodeId: String;
    public NodeStatus: String;
    public CompletedDate: Date;
    public LastActorId: String;
    public ProcessNodeName: String;
    public ElapsedTimeInDays: Object;
    public ElapsedTimeInHours: Object;
    public ElapsedTimeInMinutes: Object;

    construct(){}
}