@!(clazz)
class @clazz.getName() {
    @for(var p=0; p<clazz.getFields().length; p++) {@{field = clazz.fields[p]}
    public @field.name: @field.getType();}

    construct(){}
}