Ext.define('Idealist.model.Idea', {
	extend: 'Ext.data.Model',
	config:{
		fields: [
			'title',
			'author',
			{
				name: 'updated',
				type: 'date'
			},
			'accepted',
			'description',
			'comment'
			],
		idProperty: 'url'
	}
});