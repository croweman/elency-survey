function Page(obj) {

    if (obj === undefined) obj = {};

    this.id = obj.id || uuid.v4();
    this.name = obj.name;
    this.text = obj.text;
    this.questions = obj.questions || [];
    this.dependencies = obj.dependencies || [];
}

module.exports = Page;

