
class MailmergeTemplate {
    
    public Id: String;
    public IsDeleted: Boolean;
    public Name: String;
    public Description: String;
    public Filename: String;
    public BodyLength: Object;
    public Body: Object;
    public LastUsedDate: Date;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public SecurityOptionsAttachmentScannedForXSS: Boolean;
    public SecurityOptionsAttachmentHasXSSThreat: Boolean;
    public SecurityOptionsAttachmentScannedforFlash: Boolean;
    public SecurityOptionsAttachmentHasFlash: Boolean;

    construct(){}
}