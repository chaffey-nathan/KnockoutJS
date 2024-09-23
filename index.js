function AppViewModel(){
    self = this;
    self.title = ko.observable("Knockout.js Testing Site");
    self.questions = ko.observableArray([
        { id: "q1", qtext: "This is question 1", col2: "This is a test"},
        { id: "q2", qtext: "This is question 2", col2: "Test row 2"}
    ]);
    self.addNewQuestion = function(){
        var nextId = self.questions().length + 1;
        self.questions.push({ id: "q"+nextId, qtext: "This is question "+nextId, col2: "Test row "+nextId});
    };
    self.removeLastQuestion = function(){
        let idxToRemove = self.questions().length-1;
        self.questions.remove(self.questions()[idxToRemove]);
    };
    self.removeQuestion = function(data) {
        self.questions.remove(this);
	};

    self.showDiv = ko.observable(false);
    self.showDivText = ko.observable();
    self.showDivLogic = ko.computed(function () {
        if (self.showDiv() == false){
            self.showDivText('Show div');
        }
        else {
            self.showDivText('Hide div');
        }
    });
    self.toggleShowDiv = function () {
        self.showDiv(!self.showDiv());
    }
}

ko.applyBindings(new AppViewModel(), document.getElementById('main'));