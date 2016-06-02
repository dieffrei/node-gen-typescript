
class UserProvisioningRequest {
    
    public Id: String;
    public OwnerId: String;
    public IsDeleted: Boolean;
    public Name: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public SalesforceUserId: String;
    public ExternalUserId: String;
    public AppName: String;
    public State: String;
    public Operation: String;
    public ScheduleDate: Date;
    public ConnectedAppId: String;
    public UserProvConfigId: String;
    public UserProvAccountId: String;
    public ApprovalStatus: String;
    public ManagerId: String;

    construct(){}
}