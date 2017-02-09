# netajaxminifier
Javascript tool for Net developers

# REQUIRED PACKAGES
   Jquery all versions
   NewtonSoft.Json

# BASIC USAGE
   Reference script.
  ```html
   <script type="text/javascript" src="https://rawgit.com/HiroshixD/netajaxminifier/master/netajaxminifier1.0.3.min.js"></script>
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
        Get(config, function (message, data) {
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
                //   Jquery Fields ID
                var fields = ['Field1', 'Field2', 'Field3', 'Field4', {'MyArrayField': MyArrayData}];
                  var config = { fields: fields, controller: 'MyController', method: 'Create'};;
                Post(config, function (message, data) {
                    if (message === 'error') {
                        errorMessages(data);
                        return;
                    }
                    //  Do Stuff here
                    console.log(data);
                });
            }
```

# CONSOLE RESULT
&#10148; Object
