#!/usr/bin/env node

var jsforce = require('jsforce');
var _ = require('underscore');
var Bliss = require('bliss');
var fs = require('fs');

var Field = (function(){

    function Field(meta) {
        _.extend(this, meta);
    }

    Field.prototype.getType = function(){
        var tp = '';
        if (this.type == 'string') {
            tp = 'String'
        } else if (this.type == 'id') {
            tp = 'String'
        } else if (this.type == 'boolean') {
            tp = 'Boolean'
        } else if (this.type == 'reference') {
            tp = 'String'
        } else if (this.type == 'datetime') {
            tp = 'Date'
        } else if (this.type == 'decimal') {
            tp = 'Number'
        } else if (this.type == 'picklist') {
            tp = 'String'
        } else if (this.type == 'date') {
            tp = 'Date'
        } else if (this.type == 'textarea') {
            tp = 'String'
        } else if (this.type == 'percent') {
            tp = 'Number'
        } else if (this.type == 'currency') {
            tp = 'Number'
        } else if (this.type == 'multipicklist') {
            tp = 'String'
        } else {
            console.log('Type not recognized: ' + this.type);
            tp = 'Object'
        }
        return tp;
    };

    return Field;

})();

var Clazz = (function(){

    function Clazz(meta) {
        _.extend(this, meta);
        _.each(this.fields, function(metadataField){
            _.extend(metadataField, new Field(metadataField))
        })
    }

    Clazz.prototype.getName = function() {
        return this.name;
    };

    Clazz.prototype.getFields = function() {
        return this.fields;
    };

    return Clazz;

})();


var conn = new jsforce.Connection({
    loginUrl : 'https://login.salesforce.com'
});

conn.login('username', 'password', function(err, userInfo) {
    if (err) { return console.error(err); }

    console.log(conn.accessToken);
    console.log(conn.instanceUrl);
    console.log("User ID: " + userInfo.id);
    console.log("Org ID: " + userInfo.organizationId);

    conn.describeGlobal(function(err, res) {

        if (err) { return console.error(err); }

        _.each(res.sobjects, function(customObject){

            conn.sobject(customObject.name).describe(function(err, meta) {

                if (err) { return console.error(err); }

                var cl = new Clazz(meta);

                var bliss = new Bliss();
                var template = bliss.compileFile('template/class.ts.tpl');
                var output = template(cl);

                console.log(output);

                fs.writeFile("src/typescript/" + cl.getName() + '.ts', output, function(err) {
                    if(err) {
                        return console.log(err);
                    }
                });

            });

        });


    });


});