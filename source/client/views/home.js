app.controller("HomeCtrl", ['$scope', '$rootScope', '$filter', function ($scope, $rootScope, $filter) {

    $scope.welcomeMessage = "Welcome to home controller";
    $scope.source = "/resources/img/template01_logo.png";

    var template = {
        "1_00": {
            "containerParams": {
                "Bluemound": ["blue mound", "bluemound", "Clinic Location Is Bluemound", "we are at the blue mound clinic", "Clinic Location Bluemound", "Location is Bluemound", "We are at the Bluemound Clinic"],
                "Riverwoods": ["Clinic Location Is Riverwoods", "Clinic Location Riverwoods", "Location is Riverwoods", "We are at the Riverwoods Clinic"]
            },
            "containerName": "Not Labeled",
            "containerDescrip": "Office location",
            "containerLogic": "MatchPhraseToCheckBox",
            "schema": {
                type: "array",
                title: "Clinic Location?",
                items: {
                    "type": "string",
                    "enum": [
                        "Bluemound",
                        "Riverwoods"
                    ]
                }
            },
            "form": [{
                key: "imageLogo",
                type: "template",
                htmlClass: "inlineChkBox",
                template: '<img class="center-block"  src="{{form.source}}" ng-click="form.foo()" >',
                source: "/resources/img/template01_logo.png",
                foo: function () { alert('oh yeeess!'); }
            }, {
                key: "1_00",
                type: "checkboxes",
                fieldHtmlClass: "inlineChkBox",

                titleMap: [
                    { value: "Bluemound", name: "Bluemound" },
                    { value: "Riverwoods", name: "Riverwoods" }
                ]
            }],
            "data": []
        },
        "1_01": {
            "containerParams": {
                "Gharia": ["I'm doctor gharia", "my name is doctor Gharia", "Patient of doctor Gharia"],
                "Balding": ["I'm doctor balding", "my name is doctor balding", "patient of doctor Balding", "patient of dr balding", "patient of dr. balding"],
                "Hexsel": ["I'm doctor hexsel", "my name is doctor hexsel", "patient of doctor hexsel"]
            },
            "containerName": "Not Labeled",
            "containerDescrip": "Who the doctor is",
            "containerLogic": "MatchPhraseToCheckBox",
            "schema": {
                type: "array",
                title: "Doctor's Name",
                items: {
                    "type": "string",
                    "enum": [
                        "Gharia",
                        "Balding",
                        "Hexsel"
                    ]
                }
            },
            "form": [{
                key: "1_01",
                type: "checkboxes",
                fieldHtmlClass: "inlineChkBox",

                titleMap: [
                    { value: "Gharia", name: "Dr. Gharia" },
                    { value: "Balding", name: "Dr. Balding" },
                    { value: "Hexsel", name: "Dr. Hexsel" }
                ]
            }],
            "data": []
        },

    };


    var getSchema = function (templt) {
        var schema = {};
        var keysArray = Object.keys(templt)
        angular.forEach(keysArray, function (key) {
            var objectValue = templt[key];
            schema[key] = objectValue.schema;
        });
        return schema;
    };

    var getForm = function (templt) {
        var formsResult = [];
        var keysArray = Object.keys(templt)
        angular.forEach(keysArray, function (key) {
            var objectValue = templt[key];
            formsResult = formsResult.concat(objectValue.form);
        });
        return formsResult;
    };

    var getModel = function (templt) {
        var data = {};
        var keysArray = Object.keys(templt)
        angular.forEach(keysArray, function (key) {
            var objectValue = templt[key];
            data[key] = objectValue.data;
        });
        return data;
    };

    // $scope.schema = {
    //     type: "object",
    //     properties: {
    //         name: { type: "string", minLength: 5, title: "Name" },
    //         checkboxes: {
    //             type: "array",
    //             title: "Is Smoker?",
    //             items: {
    //                 "type": "string",
    //                 "enum": [
    //                     "normal",
    //                     "need Test"
    //                 ]
    //             }
    //         },
    //         isRadio: {
    //             type: "boolean",
    //             title: "Is Radio?"
    //         },
    //         select: {
    //             type: "string"
    //         }
    //     }
    // };

    // $scope.form = [
    //     {
    //         key: "imageLogo",
    //         type: "template",
    //         htmlClass: "inlineChkBox",
    //         template: '<img class="center-block"  src="{{form.source}}" ng-click="form.foo()" >',
    //         source: "/resources/img/template01_logo.png",
    //         foo: function () { alert('oh yeeess!'); }
    //     },
    //     {
    //         key: "name",
    //         type: "text",
    //         labelHtmlClass: "text-center",
    //     },
    //     {
    //         key: "checkboxes",
    //         type: "checkboxes",
    //         fieldHtmlClass: "inlineChkBox",

    //         titleMap: [
    //             { value: "normal", name: "No I don't understand these cryptic terms" },
    //             { value: "need Test", name: "Yes this makes perfect sense to me" }
    //         ]
    //     },
    //     {
    //         key: "isRadio",
    //         type: "radios",
    //         titleMap: [
    //             { value: false, name: "No I don't understand these cryptic terms" },
    //             { value: true, name: "Yes this makes perfect sense to me" }
    //         ]
    //     },
    //     {
    //         key: "select",
    //         type: "select",
    //         readonly: false,
    //         titleMap: [
    //             { value: "Andersson", name: "Andersson" },
    //             { value: "Johansson", name: "Johansson" },
    //             { value: "other", name: "Something else..." }
    //         ]
    //     },
    //     {
    //         type: "submit",
    //         title: "Save"
    //     }
    // ];

    // $scope.model = { name: "Amit" };

    var schemaProp = getSchema(template);
    console.log(schemaProp);
    $scope.schema = {
        type: "object",
        properties: schemaProp
    }

    var formValue = getForm(template);
    console.log(formValue);

    formValue.push({
        type: "submit",
        title: "Save"
    });
    console.log(formValue);

    $scope.form = formValue;
    $scope.model=getModel(template);

}]);
