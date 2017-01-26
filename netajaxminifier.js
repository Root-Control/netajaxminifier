'use strict';
    var GET = function (config, handleData) {
        switch (true) {
            case config.identifier > 0:
                var url = "/" + config.controller + "/" + config.method + "/" + config.identifier;
                break;
            case config.identifier === false:
                var url = "/" + config.controller + "/" + config.method;
                break;
        }
        if (config.identifier === undefined) {
            config.identifier = 1;
        }
        var data = $.ajax({
            type: "GET",
            url: url,
            success: function (data) {
                handleData('success', JSON.parse(data));
            },
            error: function (request, status, error, xhr) {
                handleData('error', request.statusText);
            }
        });
    };

        var POST = function (config, handleData) {
            $.ajax({
                type: "POST",
                url: "/" + config.controller + "/" + config.method,
                data: config.data,
                contentType: false,
                processData: false,
                success: function (data) {
                    handleData('success', JSON.parse(data));
                },
                error: function (request, status, error, xhr) {
                    alert('error');
                    handleData('error', request.responseText);
                }

            });
        };

    var errorMessages = function (data) {
      switch (data) {
          case "OK":
              alert("No hay Datos");
              break;
          case "Not Found":
              alert("El metodo que ingresaste es incorrecto");
              break;
          default:
              alert(data);
              break;
      }
    };


    var fillArray = function (data) {           
        var formData = new FormData();
        formData.append('__RequestVerificationToken', $('input[name="__RequestVerificationToken"]').val());
        for (var i = 0; i < data.length; i++) {
            formData.append(data[i], $('#' + data[i]).val());
        }
        return formData;
    };

    var toJavaScriptDate = function (value, format) {
        var patron = /Date\(([^]+)\)/;
        var resultados = patron.exec(value);
        var fecha = new Date(parseFloat(resultados[1]));
        var day = fecha.getDate().toString();
        var month = (fecha.getMonth() + 1).toString();
        var year = fecha.getFullYear();
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        switch (format) {
            case 'dd-mm-yyyy':
                return (day + "/" + month + "/" + year);
                break;
            case 'yyyy-mm-dd':
                return (year + "/" + month + "/" +  day);
                break;
            default:
                return (day + "/" + month + "/" + year);
        }
    };