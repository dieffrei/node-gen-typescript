
class Campaign {
    
    public Id: String;
    public IsDeleted: Boolean;
    public Name: String;
    public ParentId: String;
    public Type: String;
    public Status: String;
    public StartDate: Date;
    public EndDate: Date;
    public ExpectedRevenue: Number;
    public BudgetedCost: Number;
    public ActualCost: Number;
    public ExpectedResponse: Number;
    public NumberSent: Object;
    public IsActive: Boolean;
    public Description: String;
    public NumberOfLeads: Object;
    public NumberOfConvertedLeads: Object;
    public NumberOfContacts: Object;
    public NumberOfResponses: Object;
    public NumberOfOpportunities: Object;
    public NumberOfWonOpportunities: Object;
    public AmountAllOpportunities: Number;
    public AmountWonOpportunities: Number;
    public OwnerId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public LastActivityDate: Date;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;
    public CampaignMemberRecordTypeId: String;
    public DB_Campaign_Tactic__c: String;

    construct(){}
}