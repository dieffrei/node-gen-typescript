
class RelationshipDomain {
    
    public Id: String;
    public DurableId: String;
    public ParentSobjectId: String;
    public ChildSobjectId: String;
    public FieldId: String;
    public RelationshipInfoId: String;
    public RelationshipName: String;
    public IsCascadeDelete: Boolean;
    public IsDeprecatedAndHidden: Boolean;
    public IsRestrictedDelete: Boolean;

    construct(){}
}