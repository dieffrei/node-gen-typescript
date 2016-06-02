
class Task {
    
    public Id: String;
    public WhoId: String;
    public WhatId: String;
    public Subject: Object;
    public ActivityDate: Date;
    public Status: String;
    public Priority: String;
    public IsHighPriority: Boolean;
    public OwnerId: String;
    public Description: String;
    public IsDeleted: Boolean;
    public AccountId: String;
    public IsClosed: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public IsArchived: Boolean;
    public CallDurationInSeconds: Object;
    public CallType: String;
    public CallDisposition: String;
    public CallObject: String;
    public ReminderDateTime: Date;
    public IsReminderSet: Boolean;
    public RecurrenceActivityId: String;
    public IsRecurrence: Boolean;
    public RecurrenceStartDateOnly: Date;
    public RecurrenceEndDateOnly: Date;
    public RecurrenceTimeZoneSidKey: String;
    public RecurrenceType: String;
    public RecurrenceInterval: Object;
    public RecurrenceDayOfWeekMask: Object;
    public RecurrenceDayOfMonth: Object;
    public RecurrenceInstance: String;
    public RecurrenceMonthOfYear: String;
    public RecurrenceRegeneratedType: String;
    public DB_Activity_Type__c: String;

    construct(){}
}