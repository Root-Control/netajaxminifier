# netajaxminifier
Javascript tool for Net developers

# REQUIRED PACKAGES
   Jquery all versions

# BASIC USAGE
   Reference script.
      ```html
   <script type="text/javascript" src="https://raw.githubusercontent.com/HiroshixD/netajaxminifier/master/netajaxminifier1.0.1.min.js"></script>
   ```
   # GET REQUEST

   
   # CONTROLLER:
   ```C#

            public JsonResult MyMethod()
            {
              var data = "Hello World";
              return Json(data, JsonRequestBehavior.AllowGet);
            }

   ```
   # VIEW:  
   
   ```javascript
        var config = { controller: "MyController", method: "MyMethod", identifier: false };
        GET(config, function (message, data) {
            if (message === 'error') {
                alert('You have the following error: ' + data);
                return;
            }
            console.log(data);
        });
```
   
   # Result
   Hello World
   
   # POST REQUEST CREATE
   
   # CONTROLLER
   ```c#
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(TODO model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _repo.Create(model);
                    return Json(model, JsonRequestBehavior.AllowGet);
                }

            }
            catch
            {
                return View();
            }
        }
```

# VIEW
```javascript
            function create() {
                //   Fields ID
                var jqueryFields = ['Field1', 'Field2', 'Field3', 'Field4'];
                var formData = fillArray(jqueryFields);
                var config = {
                    fields: jqueryFields,
                    data: formData,
                    controller: 'MyController',
                    method: 'Create'
                };
                POST(config, function (message, data) {
                    if (message === 'error') {
                        errorMessages(data);
                        return;
                    }
                    //  Code data here
                    console.log(data);
                });
            }
```

# CONSOLE RESULT
&#10148; Object
