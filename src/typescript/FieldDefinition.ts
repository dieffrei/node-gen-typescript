
class FieldDefinition {
    
    public Id: String;
    public DurableId: String;
    public QualifiedApiName: String;
    public EntityDefinitionId: String;
    public NamespacePrefix: String;
    public DeveloperName: String;
    public MasterLabel: String;
    public Label: String;
    public Length: Object;
    public DataType: String;
    public ServiceDataTypeId: String;
    public ExtraTypeInfo: String;
    public IsCalculated: Boolean;
    public IsHighScaleNumber: Boolean;
    public IsHtmlFormatted: Boolean;
    public IsNameField: Boolean;
    public IsNillable: Boolean;
    public IsWorkflowFilterable: Boolean;
    public IsCompactLayoutable: Boolean;
    public Precision: Object;
    public Scale: Object;
    public IsFieldHistoryTracked: Boolean;
    public IsApiFilterable: Boolean;
    public IsApiSortable: Boolean;
    public IsListFilterable: Boolean;
    public IsListSortable: Boolean;
    public IsApiGroupable: Boolean;
    public IsListVisible: Boolean;
    public ControllingFieldDefinitionId: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public PublisherId: String;
    public RunningUserFieldAccessId: String;
    public RelationshipName: String;
    public ReferenceTo: Object;
    public ReferenceTargetField: String;

    construct(){}
}