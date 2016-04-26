function Survey(obj) {

    if (obj === undefined) obj = {};

    this.id = obj.id || uuid.v4();
    this.name = obj.name;
    this.text = obj.text;
    this.pages = obj.pages || [];
    this.created = obj.created || new Date();
    this.createdBy = obj.createdBy;
    this.changed = obj.changed || new Date();
    this.changedBy = obj.changedBy;
}

module.exports = Survey;

