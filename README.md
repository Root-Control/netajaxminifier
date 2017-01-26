# netajaxminifier
Javascript tool for Net developers

# BASIC USAGE

   # CONTROLLER:
            public JsonResult MyMethod()
            {
              var data = "Hello World";
              return Json(data, JsonRequestBehavior.AllowGet);
            }


   # VIEW:        
        var config = { controller: "MyController", method: "MyMethod", identifier: false };
        GET(config, function (message, data) {
            if (message === 'error') {
                alert('You have the following error: ' + data);
                return;
            }
            console.log(data);
        });
