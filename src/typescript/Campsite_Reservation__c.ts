
class Campsite_Reservation__c {
    
    public Id: String;
    public IsDeleted: Boolean;
    public Name: String;
    public CreatedDate: Date;
    public CreatedById: String;
    public LastModifiedDate: Date;
    public LastModifiedById: String;
    public SystemModstamp: Date;
    public User__c: String;
    public Start_Date__c: Date;
    public End_Date__c: Date;
    public Campsite__c: String;

    construct(){}
}