
class ContentDocument {
    
    public Id: String;
    public CreatedById: String;
    public CreatedDate: Date;
    public LastModifiedById: String;
    public LastModifiedDate: Date;
    public IsArchived: Boolean;
    public ArchivedById: String;
    public ArchivedDate: Date;
    public IsDeleted: Boolean;
    public OwnerId: String;
    public SystemModstamp: Date;
    public Title: String;
    public PublishStatus: String;
    public LatestPublishedVersionId: String;
    public ParentId: String;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;
    public Description: String;
    public ContentSize: Object;
    public FileType: String;
    public FileExtension: String;
    public ContentModifiedDate: Date;

    construct(){}
}