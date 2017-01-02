Ext.define('Idealist.view.IdeaForm', {
	extend: 'Ext.form.Panel',
	requires: [
		'Ext.field.DatePicker'
	],
	xtype: 'ideaform',
	config:{
		items:[
			{
				xtype: 'textfield',
				name: 'title',
				label: 'Titel',
				readOnly: true
			},
			{
				xtype: 'textfield',
				name: 'author',
				label: 'Author',
				readOnly: true
			},
			{
				xtype: 'datepickerfield',
				name: 'updated',
				label: 'Aktualisiert',
				readOnly: true,
				dateFormat: 'd.m.Y'
			},
			{
				xtype: 'textareafield',
				name: 'description',
				label: 'Beschreibung',
				readOnly: true
			}
		]
	}
});