function SignUpViewModel() {
    const self = this
    self.FirstName = ko.observable("").extend({
        validation:{
            message: 'First name can not be empty',
            validator: function (value) {
                return value.length > 1
            }
        }
    });
    self.LastName = ko.observable("").extend({
        validation:{
            message: 'Last name can not be empty',
            decorateInputElement: Error,
            validator: function(value){
                return value.length >1
            }

        }
    });

    self.Email = ko.observable("").extend({
        required: true,
        email: true
    })

    self.Password = ko.observable("").extend({
        validation:{
            message: 'Password can not be empty',
            validator: function(value){
                return value.length > 1
            }
        }
    });

    self.FirstName.subscribe(function (newValue) {
        console.log(newValue, "newValue")
    })
    self.handleSubmit = function(){
        let errors = ko.validation.group(self)
        if(errors().length >0){
            console.log("errors")
            errors.showAllMessages();
            return;
        }
        let payload = {
            FirstName: self.FirstName(),
            LastName: self.LastName(),
            Email: self.Email(),
            Password: self.Password()
        }
        console.log(payload)
    }
}
const knockoutApp = document.getElementById("knockout");
ko.applyBindings(new SignUpViewModel(), knockoutApp );
