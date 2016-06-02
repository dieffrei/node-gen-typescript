
class Holiday {
    
    public Id: String;
    public Name: String;
    public Description: String;
    public IsAllDay: Boolean;
    public ActivityDate: Date;
    public StartTimeInMinutes: Object;
    public EndTimeInMinutes: Object;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public IsRecurrence: Boolean;
    public RecurrenceStartDate: Date;
    public RecurrenceEndDateOnly: Date;
    public RecurrenceType: String;
    public RecurrenceInterval: Object;
    public RecurrenceDayOfWeekMask: Object;
    public RecurrenceDayOfMonth: Object;
    public RecurrenceInstance: String;
    public RecurrenceMonthOfYear: String;

    construct(){}
}