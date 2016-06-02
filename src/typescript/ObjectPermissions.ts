
class ObjectPermissions {
    
    public Id: String;
    public ParentId: String;
    public SobjectType: String;
    public PermissionsCreate: Boolean;
    public PermissionsRead: Boolean;
    public PermissionsEdit: Boolean;
    public PermissionsDelete: Boolean;
    public PermissionsViewAllRecords: Boolean;
    public PermissionsModifyAllRecords: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;

    construct(){}
}