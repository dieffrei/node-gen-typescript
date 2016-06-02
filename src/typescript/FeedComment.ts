
class FeedComment {
    
    public Id: String;
    public FeedItemId: String;
    public ParentId: String;
    public CreatedById: String;
    public CreatedDate: Date;
    public Revision: Object;
    public LastEditById: String;
    public LastEditDate: Date;
    public CommentBody: String;
    public IsDeleted: Boolean;
    public InsertedById: String;
    public CommentType: String;
    public RelatedRecordId: String;

    construct(){}
}