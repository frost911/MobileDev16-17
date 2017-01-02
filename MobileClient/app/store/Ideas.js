Ext.define('Idealist.store.Ideas', {
	extend: 'Ext.data.Store',
	requires: [
		'Ext.data.proxy.Rest'
	],
	config: {
		model: 'Idealist.model.Idea',
		autoLoad: true,
		proxy: {
			type: 'rest',
			url: '/MobileDev16-17/WebService/ideas',
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