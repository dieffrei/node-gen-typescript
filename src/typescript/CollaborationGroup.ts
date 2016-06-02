
class CollaborationGroup {
    
    public Id: String;
    public Name: String;
    public MemberCount: Object;
    public OwnerId: String;
    public CollaborationType: String;
    public Description: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public FullPhotoUrl: Object;
    public SmallPhotoUrl: Object;
    public LastFeedModifiedDate: Date;
    public InformationTitle: String;
    public InformationBody: String;
    public HasPrivateFieldsAccess: Boolean;
    public CanHaveGuests: Boolean;
    public LastViewedDate: Date;
    public LastReferencedDate: Date;
    public IsArchived: Boolean;
    public IsAutoArchiveDisabled: Boolean;
    public AnnouncementId: String;
    public GroupEmail: Object;

    construct(){}
}