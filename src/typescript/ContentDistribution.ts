
class ContentDistribution {
    
    public Id: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public OwnerId: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public Name: String;
    public IsDeleted: Boolean;
    public ContentVersionId: String;
    public ContentDocumentId: String;
    public RelatedRecordId: String;
    public PreferencesAllowPDFDownload: Boolean;
    public PreferencesAllowOriginalDownload: Boolean;
    public PreferencesPasswordRequired: Boolean;
    public PreferencesNotifyOnVisit: Boolean;
    public PreferencesLinkLatestVersion: Boolean;
    public PreferencesAllowViewInBrowser: Boolean;
    public PreferencesExpires: Boolean;
    public PreferencesNotifyRndtnComplete: Boolean;
    public ExpiryDate: Date;
    public Password: String;
    public ViewCount: Object;
    public FirstViewDate: Date;
    public LastViewDate: Date;
    public DistributionPublicUrl: String;

    construct(){}
}