
class Note {
    
    public Id: String;
    public IsDeleted: Boolean;
    public ParentId: String;
    public Title: String;
    public IsPrivate: Boolean;
    public Body: String;
    public OwnerId: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}