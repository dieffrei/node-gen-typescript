
class IdeaComment {
    
    public Id: String;
    public IdeaId: String;
    public CommunityId: String;
    public CommentBody: String;
    public CreatedById: String;
    public CreatedDate: Date;
    public SystemModstamp: Date;
    public IsDeleted: Boolean;
    public IsHtml: Boolean;
    public CreatorFullPhotoUrl: String;
    public CreatorSmallPhotoUrl: String;
    public CreatorName: String;
    public UpVotes: Object;

    construct(){}
}