
class Attachment {
    
    public Id: String;
    public IsDeleted: Boolean;
    public ParentId: String;
    public Name: String;
    public IsPrivate: Boolean;
    public ContentType: String;
    public BodyLength: Object;
    public Body: Object;
    public OwnerId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public Description: String;

    construct(){}
}