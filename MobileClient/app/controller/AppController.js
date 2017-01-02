Ext.define('Idealist.controller.AppController',{
	extend: 'Ext.app.Controller',
	config:{
		control:{
			idealist:{
				itemtap:'showIdeaDetails'
			}
		},
		refs:{
			main:'main'		
		}
	},
	
	showIdeaDetails:function(list, index, target, record){
		var main = this.getMain();
		var ideaForm = Ext.widget('ideaform');
		ideaForm.setRecord(record);
		main.push(ideaForm);
	}
});