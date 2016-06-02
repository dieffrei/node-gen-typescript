
class BackgroundOperation {
    
    public Id: String;
    public IsDeleted: Boolean;
    public Name: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public SubmittedAt: Date;
    public Status: String;
    public ExecutionGroup: String;
    public SequenceGroup: String;
    public SequenceNumber: Object;
    public GroupLeaderId: String;
    public StartedAt: Date;
    public FinishedAt: Date;
    public WorkerUri: String;
    public Timeout: Object;
    public ExpiresAt: Date;
    public NumFollowers: Object;
    public ProcessAfter: Date;
    public ParentKey: String;
    public RetryLimit: Object;
    public RetryCount: Object;
    public RetryBackoff: Object;
    public Error: String;

    construct(){}
}