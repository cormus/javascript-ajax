/**
 * Modification of http://stackoverflow.com/questions/8567114/how-to-make-an-ajax-call-without-jquery
 *
 * @date 05-09-2014
 */
function Ajax()
{
    var obj = this;
    
    obj.x = function() {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();  
        }
        var versions = [
            "MSXML2.XmlHttp.5.0",   
            "MSXML2.XmlHttp.4.0",  
            "MSXML2.XmlHttp.3.0",   
            "MSXML2.XmlHttp.2.0",  
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for(var i = 0; i < versions.length; i++) {  
            try {  
                xhr = new ActiveXObject(versions[i]);  
                break;  
            } catch (e) {
            }  
        }
        return xhr;
    };

    obj.send = function(url, callback, errorCallback, method, data, sync) {
        var x = obj.x();
        x.open(method, url, sync);
        x.onreadystatechange = function() {
            if (x.readyState == 4 && x.status == 200) {
                callback(x.responseText)
            }
            else
            {
                errorCallback();
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    };

    obj.get = function(url, data, callback, errorCallback, sync) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        obj.send(url + '?' + query.join('&'), callback, errorCallback, 'GET', null, sync)
    };

    obj.post = function(url, data, callback, errorCallback, sync) {
        obj.send(url, callback, errorCallback, 'POST', 'data='+ obj.stringify(data), sync)
    };
    
    obj.stringify = function(data)
    {
        return JSON.stringify(data);
    };
    
    obj.parse = function(data)
    {
        return JSON.parse(data);
    };
}