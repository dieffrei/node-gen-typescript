
class Trail__c {
    
    public Id: String;
    public OwnerId: String;
    public IsDeleted: Boolean;
    public Name: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public Description__c: String;
    public Distance__c: Object;
    public Last_Inspection_Date__c: Date;

    construct(){}
}