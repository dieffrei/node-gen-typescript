
class EventLogFile {
    
    public Id: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public EventType: String;
    public LogDate: Date;
    public LogFileLength: Object;
    public LogFileContentType: String;
    public ApiVersion: Object;
    public LogFileFieldNames: String;
    public LogFileFieldTypes: String;
    public LogFile: Object;

    construct(){}
}