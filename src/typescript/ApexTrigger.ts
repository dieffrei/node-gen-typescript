
class ApexTrigger {
    
    public Id: String;
    public NamespacePrefix: String;
    public Name: String;
    public TableEnumOrId: String;
    public UsageBeforeInsert: Boolean;
    public UsageAfterInsert: Boolean;
    public UsageBeforeUpdate: Boolean;
    public UsageAfterUpdate: Boolean;
    public UsageBeforeDelete: Boolean;
    public UsageAfterDelete: Boolean;
    public UsageIsBulk: Boolean;
    public UsageAfterUndelete: Boolean;
    public ApiVersion: Object;
    public Status: String;
    public IsValid: Boolean;
    public BodyCrc: Object;
    public Body: String;
    public LengthWithoutComments: Object;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}