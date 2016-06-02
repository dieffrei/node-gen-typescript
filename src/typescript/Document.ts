
class Document {
    
    public Id: String;
    public FolderId: String;
    public IsDeleted: Boolean;
    public Name: String;
    public DeveloperName: String;
    public NamespacePrefix: String;
    public ContentType: String;
    public Type: String;
    public IsPublic: Boolean;
    public BodyLength: Object;
    public Body: Object;
    public Url: String;
    public Description: String;
    public Keywords: String;
    public IsInternalUseOnly: Boolean;
    public AuthorId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public IsBodySearchable: Boolean;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;

    construct(){}
}