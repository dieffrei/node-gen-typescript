
class ConnectedApplication {
    
    public Id: String;
    public Name: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public OptionsAllowAdminApprovedUsersOnly: Boolean;
    public OptionsRefreshTokenValidityMetric: Boolean;
    public OptionsHasSessionLevelPolicy: Boolean;
    public MobileSessionTimeout: String;
    public PinLength: String;
    public StartUrl: Object;
    public MobileStartUrl: Object;
    public RefreshTokenValidityPeriod: Object;

    construct(){}
}