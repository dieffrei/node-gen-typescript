
class Case {
    
    public Id: String;
    public IsDeleted: Boolean;
    public CaseNumber: String;
    public ContactId: String;
    public AccountId: String;
    public AssetId: String;
    public ParentId: String;
    public SuppliedName: String;
    public SuppliedEmail: Object;
    public SuppliedPhone: String;
    public SuppliedCompany: String;
    public Type: String;
    public Status: String;
    public Reason: String;
    public Origin: String;
    public Subject: String;
    public Priority: String;
    public Description: String;
    public IsClosed: Boolean;
    public ClosedDate: Date;
    public IsEscalated: Boolean;
    public OwnerId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;
    public EngineeringReqNumber__c: String;
    public SLAViolation__c: String;
    public Product__c: String;
    public PotentialLiability__c: String;
    public Days_Since_Last_Update__c: Object;
    public Last_Day_of_Month__c: Date;

    construct(){}
}