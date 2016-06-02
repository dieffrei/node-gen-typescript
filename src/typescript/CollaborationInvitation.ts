
class CollaborationInvitation {
    
    public Id: String;
    public ParentId: String;
    public SharedEntityId: String;
    public InviterId: String;
    public InvitedUserEmail: String;
    public InvitedUserEmailNormalized: Object;
    public Status: String;
    public OptionalMessage: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}