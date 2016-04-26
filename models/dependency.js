function Dependency(obj) {

    if (obj === undefined) obj = {};

    this.id = obj.id || uuid.v4();
    this.questionId = obj.questionId;
    this.equalityType = obj.equalityType;
    this.dependentQuestionId = obj.dependentQuestionId;
    this.value = obj.value;
    //greater than and less than what, the questions answer, or should these be set optionally on the dependency
}

module.exports = Dependency;

