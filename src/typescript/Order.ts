
class Order {
    
    public Id: String;
    public OwnerId: String;
    public ContractId: String;
    public AccountId: String;
    public Pricebook2Id: String;
    public OriginalOrderId: String;
    public EffectiveDate: Date;
    public EndDate: Date;
    public IsReductionOrder: Boolean;
    public Status: String;
    public Description: String;
    public CustomerAuthorizedById: String;
    public CustomerAuthorizedDate: Date;
    public CompanyAuthorizedById: String;
    public CompanyAuthorizedDate: Date;
    public Type: String;
    public BillingStreet: String;
    public BillingCity: String;
    public BillingState: String;
    public BillingPostalCode: String;
    public BillingCountry: String;
    public BillingLatitude: Object;
    public BillingLongitude: Object;
    public BillingAddress: Object;
    public ShippingStreet: String;
    public ShippingCity: String;
    public ShippingState: String;
    public ShippingPostalCode: String;
    public ShippingCountry: String;
    public ShippingLatitude: Object;
    public ShippingLongitude: Object;
    public ShippingAddress: Object;
    public Name: String;
    public PoDate: Date;
    public PoNumber: String;
    public OrderReferenceNumber: String;
    public BillToContactId: String;
    public ShipToContactId: String;
    public ActivatedDate: Date;
    public ActivatedById: String;
    public StatusCode: String;
    public OrderNumber: String;
    public TotalAmount: Number;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public IsDeleted: Boolean;
    public SystemModstamp: Date;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;

    construct(){}
}