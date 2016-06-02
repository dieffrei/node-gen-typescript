
class Opportunity {
    
    public Id: String;
    public IsDeleted: Boolean;
    public AccountId: String;
    public IsPrivate: Boolean;
    public Name: String;
    public Description: String;
    public StageName: String;
    public Amount: Number;
    public Probability: Number;
    public ExpectedRevenue: Number;
    public TotalOpportunityQuantity: Object;
    public CloseDate: Date;
    public Type: String;
    public NextStep: String;
    public LeadSource: String;
    public IsClosed: Boolean;
    public IsWon: Boolean;
    public ForecastCategory: String;
    public ForecastCategoryName: String;
    public CampaignId: String;
    public HasOpportunityLineItem: Boolean;
    public Pricebook2Id: String;
    public OwnerId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public LastActivityDate: Date;
    public FiscalQuarter: Object;
    public FiscalYear: Object;
    public Fiscal: String;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;
    public DeliveryInstallationStatus__c: String;
    public TrackingNumber__c: String;
    public OrderNumber__c: String;
    public CurrentGenerators__c: String;
    public MainCompetitors__c: String;
    public DB_Competitor__c: String;
    public radius__c: Object;
    public height__c: Object;
    public Cylinder_Volume__c: Object;
    public Percent_Completed__c: Number;
    public Opportunity_Progress__c: String;

    construct(){}
}