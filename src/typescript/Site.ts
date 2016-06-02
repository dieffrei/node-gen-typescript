
class Site {
    
    public Id: String;
    public Name: String;
    public Subdomain: String;
    public UrlPathPrefix: String;
    public GuestUserId: String;
    public Status: String;
    public AdminId: String;
    public OptionsEnableFeeds: Boolean;
    public OptionsRequireHttps: Boolean;
    public OptionsAllowHomePage: Boolean;
    public OptionsAllowStandardIdeasPages: Boolean;
    public OptionsAllowStandardSearch: Boolean;
    public OptionsAllowStandardLookups: Boolean;
    public OptionsAllowStandardAnswersPages: Boolean;
    public OptionsAllowGuestSupportApi: Boolean;
    public Description: String;
    public MasterLabel: String;
    public AnalyticsTrackingCode: String;
    public SiteType: String;
    public ClickjackProtectionLevel: String;
    public DailyBandwidthLimit: Object;
    public DailyBandwidthUsed: Object;
    public DailyRequestTimeLimit: Object;
    public DailyRequestTimeUsed: Object;
    public MonthlyPageViewsEntitlement: Object;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}