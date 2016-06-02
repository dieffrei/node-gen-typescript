
class AuthProvider {
    
    public Id: String;
    public CreatedDate: Date;
    public ProviderType: String;
    public FriendlyName: String;
    public DeveloperName: String;
    public RegistrationHandlerId: String;
    public ExecutionUserId: String;
    public ConsumerKey: String;
    public ConsumerSecret: String;
    public ErrorUrl: String;
    public AuthorizeUrl: Object;
    public TokenUrl: Object;
    public UserInfoUrl: Object;
    public DefaultScopes: String;
    public IdTokenIssuer: String;
    public OptionsSendAccessTokenInHeader: Boolean;
    public OptionsSendClientCredentialsInHeader: Boolean;
    public OptionsIncludeOrgIdInId: Boolean;
    public IconUrl: Object;
    public LogoutUrl: Object;

    construct(){}
}