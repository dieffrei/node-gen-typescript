
class CronTrigger {
    
    public Id: String;
    public CronJobDetailId: String;
    public NextFireTime: Date;
    public PreviousFireTime: Date;
    public State: String;
    public StartTime: Date;
    public EndTime: Date;
    public CronExpression: String;
    public TimeZoneSidKey: String;
    public OwnerId: String;
    public LastModifiedById: String;
    public CreatedById: String;
    public CreatedDate: Date;
    public TimesTriggered: Object;

    construct(){}
}