
class OrderItem {
    
    public Id: String;
    public IsDeleted: Boolean;
    public OrderId: String;
    public PricebookEntryId: String;
    public OriginalOrderItemId: String;
    public AvailableQuantity: Object;
    public Quantity: Object;
    public UnitPrice: Number;
    public ListPrice: Number;
    public ServiceDate: Date;
    public EndDate: Date;
    public Description: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public OrderItemNumber: String;

    construct(){}
}