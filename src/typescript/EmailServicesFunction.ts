
class EmailServicesFunction {
    
    public Id: String;
    public IsActive: Boolean;
    public FunctionName: String;
    public AuthorizedSenders: String;
    public IsAuthenticationRequired: Boolean;
    public IsTlsRequired: Boolean;
    public AttachmentOption: String;
    public ApexClassId: String;
    public OverLimitAction: String;
    public FunctionInactiveAction: String;
    public AddressInactiveAction: String;
    public AuthenticationFailureAction: String;
    public AuthorizationFailureAction: String;
    public IsErrorRoutingEnabled: Boolean;
    public ErrorRoutingAddress: Object;
    public IsTextAttachmentsAsBinary: Boolean;
    public CreatedById: String;
    public CreatedDate: Date;
    public LastModifiedById: String;
    public LastModifiedDate: Date;
    public SystemModstamp: Date;

    construct(){}
}