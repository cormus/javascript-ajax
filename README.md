# javascript-ajax

```
	var ajaxClass = new Ajax();
    ajaxClass.get('testea.php', {foo: 'bar', value: 'testes envio'}, function(data) { alert(data) }, function(){ alert('Error') });
	
	var ajaxClass = new Ajax();
    ajaxClass.post('testea.php', {foo: 'bar', value: [1,2,3,4]}, function(data) { alert(data) }, function(){ alert('Error') });
```