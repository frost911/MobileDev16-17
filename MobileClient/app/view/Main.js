Ext.define('Idealist.view.Main', {
    extend: 'Ext.navigation.View',
	xtype:'main',
	config: {
		items: {
			xtype: 'idealist',
		},
		defaultBackButtonText: 'Zurück'
	}
});