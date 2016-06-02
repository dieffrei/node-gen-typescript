
class Organization {
    
    public Id: String;
    public Name: String;
    public Division: String;
    public Street: String;
    public City: String;
    public State: String;
    public PostalCode: String;
    public Country: String;
    public Latitude: Object;
    public Longitude: Object;
    public Address: Object;
    public Phone: Object;
    public Fax: Object;
    public PrimaryContact: String;
    public DefaultLocaleSidKey: String;
    public LanguageLocaleKey: String;
    public ReceivesInfoEmails: Boolean;
    public ReceivesAdminInfoEmails: Boolean;
    public PreferencesRequireOpportunityProducts: Boolean;
    public PreferencesTransactionSecurityPolicy: Boolean;
    public PreferencesTerminateOldestSession: Boolean;
    public FiscalYearStartMonth: Object;
    public UsesStartDateAsFiscalYearName: Boolean;
    public DefaultAccountAccess: String;
    public DefaultContactAccess: String;
    public DefaultOpportunityAccess: String;
    public DefaultLeadAccess: String;
    public DefaultCaseAccess: String;
    public DefaultCalendarAccess: String;
    public DefaultPricebookAccess: String;
    public DefaultCampaignAccess: String;
    public SystemModstamp: Date;
    public ComplianceBccEmail: Object;
    public UiSkin: String;
    public SignupCountryIsoCode: String;
    public TrialExpirationDate: Date;
    public OrganizationType: String;
    public InstanceName: String;
    public IsSandbox: Boolean;
    public WebToCaseDefaultOrigin: String;
    public MonthlyPageViewsUsed: Object;
    public MonthlyPageViewsEntitlement: Object;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;

    construct(){}
}