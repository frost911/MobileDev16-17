Ext.define("Todoliste.view.TodoList", {
	extend: 'Ext.dataview.List',
	requires:['Ext.plugin.PullRefresh'],
	xtype: 'todolist',
	config: {
		store: 'Todos',
		emptyText: 'Die Liste ist leer.',
		itemTpl: '<div><span>{title}</span></div>',
		plugins:[
			{
				type:'pullrefresh',
				lastUpdatedDateFormat: 'm.d.Y h:s',
				lastUpdatedText: 'Zuletzt aktualisiert:',
				pullText: 'Zum Aktualisieren herunterziehen...',
				releaseText: 'Zum Aktualisieren loslassen...',
				loadingText: 'Lädt...',
				loadedText: 'Geladen.'
			}
		]
	}
});