function Question(obj) {

    if (obj === undefined) obj = {};

    this.id = obj.id || uuid.v4();
    this.name = obj.name;
    this.text = obj.text;
    this.questionType = obj.questionType;
    this.validators = obj.validators || [];
    this.dependencies = obj.dependencies || [];
}

module.exports = Question;

