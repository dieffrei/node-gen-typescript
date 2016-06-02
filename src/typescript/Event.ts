
class Event {
    
    public Id: String;
    public WhoId: String;
    public WhatId: String;
    public Subject: Object;
    public Location: String;
    public IsAllDayEvent: Boolean;
    public ActivityDateTime: Date;
    public ActivityDate: Date;
    public DurationInMinutes: Object;
    public StartDateTime: Date;
    public EndDateTime: Date;
    public Description: String;
    public AccountId: String;
    public OwnerId: String;
    public IsPrivate: Boolean;
    public ShowAs: String;
    public IsDeleted: Boolean;
    public IsChild: Boolean;
    public IsGroupEvent: Boolean;
    public GroupEventType: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public IsArchived: Boolean;
    public RecurrenceActivityId: String;
    public IsRecurrence: Boolean;
    public RecurrenceStartDateTime: Date;
    public RecurrenceEndDateOnly: Date;
    public RecurrenceTimeZoneSidKey: String;
    public RecurrenceType: String;
    public RecurrenceInterval: Object;
    public RecurrenceDayOfWeekMask: Object;
    public RecurrenceDayOfMonth: Object;
    public RecurrenceInstance: String;
    public RecurrenceMonthOfYear: String;
    public ReminderDateTime: Date;
    public IsReminderSet: Boolean;
    public DB_Activity_Type__c: String;

    construct(){}
}