
class ActivityHistory {
    
    public Id: String;
    public AccountId: String;
    public WhoId: String;
    public WhatId: String;
    public Subject: Object;
    public IsTask: Boolean;
    public ActivityDate: Date;
    public OwnerId: String;
    public Status: String;
    public Priority: String;
    public IsHighPriority: Boolean;
    public ActivityType: String;
    public IsClosed: Boolean;
    public IsAllDayEvent: Boolean;
    public IsVisibleInSelfService: Boolean;
    public DurationInMinutes: Object;
    public Location: String;
    public Description: String;
    public IsDeleted: Boolean;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public CallDurationInSeconds: Object;
    public CallType: String;
    public CallDisposition: String;
    public CallObject: String;
    public ReminderDateTime: Date;
    public IsReminderSet: Boolean;
    public EndDateTime: Date;
    public StartDateTime: Date;
    public DB_Activity_Type__c: String;

    construct(){}
}