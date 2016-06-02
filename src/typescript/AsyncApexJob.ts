
class AsyncApexJob {
    
    public Id: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public JobType: String;
    public ApexClassId: String;
    public Status: String;
    public JobItemsProcessed: Object;
    public TotalJobItems: Object;
    public NumberOfErrors: Object;
    public CompletedDate: Date;
    public MethodName: String;
    public ExtendedStatus: String;
    public ParentJobId: String;
    public LastProcessed: String;
    public LastProcessedOffset: Object;

    construct(){}
}