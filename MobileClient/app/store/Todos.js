Ext.define('Todoliste.store.Todos', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'Todoliste.model.Todo',
		autoLoad: true,
		proxy: {
			type: 'rest',
			url: '/tkulhavy/5_WebService/todos',
			listeners: {
				exception: function(proxy, response){
					Ext.Msg.alert('Fehler' + response.status,response.statusText);
				}
			},
			reader: {
				type:'json'
			}
		}
	}
});