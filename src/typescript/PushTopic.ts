
class PushTopic {
    
    public Id: String;
    public Name: String;
    public Query: String;
    public ApiVersion: Object;
    public IsActive: Boolean;
    public NotifyForFields: String;
    public NotifyForOperations: String;
    public Description: String;
    public NotifyForOperationCreate: Boolean;
    public NotifyForOperationUpdate: Boolean;
    public NotifyForOperationDelete: Boolean;
    public NotifyForOperationUndelete: Boolean;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}