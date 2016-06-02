
class TenantUsageEntitlement {
    
    public Id: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public ResourceGroupKey: String;
    public Setting: String;
    public StartDate: Date;
    public EndDate: Date;
    public CurrentAmountAllowed: Object;
    public Frequency: String;
    public IsPersistentResource: Boolean;
    public HasRollover: Boolean;
    public OverageGrace: Number;
    public AmountUsed: Object;
    public UsageDate: Date;
    public MasterLabel: String;

    construct(){}
}