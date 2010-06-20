Ext.namespace('GBIF');
Ext.namespace('GBIF.MetaMaker');

GBIF.MetaMaker.Extension = function(config){

 var store = new Ext.data.ArrayStore({
		fields: [
			 	{name: 'term'}
			,	{name: 'dataType'}
			,	{name: 'required'}
		]
	});

	Ext.apply(this, config, {
			store: store
		,	columns: [
          new Ext.grid.RowNumberer()
      	,	{header: 'Term', width: 160, sortable: true, dataIndex: 'term'}
				,	{header: 'Data Type', width: 160, sortable: false, dataIndex: 'dataType'}
				,	{header: 'Required', width: 160, sortable: false, dataIndex: 'required'}
			]
		,	stripeRows: true
		,	title: 'Extension'

    ,	ddGroup: 'testDDGroup'
    ,enableDragDrop: true
    ,autoScroll: true
    ,listeners: {
        render: function(g) {
					var ddrow = new Ext.ux.dd.GridReorderDropTarget(g, {
							copy: false
							,listeners: {
									beforerowmove: function(objThis, oldIndex, newIndex, records) {
											// code goes here
											// return false to cancel the move
									}
									,afterrowmove: function(objThis, oldIndex, newIndex, records) {
											// code goes here
									}
									,beforerowcopy: function(objThis, oldIndex, newIndex, records) {
											// code goes here
											// return false to cancel the copy
									}
									,afterrowcopy: function(objThis, oldIndex, newIndex, records) {
											// code goes here
									}
							}
					});

					// if you need scrolling, register the grid view's scroller with the scroll manager
					Ext.dd.ScrollManager.register(g.getView().getEditorParent());
        }
        ,beforedestroy: function(g) {
            // if you previously registered with the scroll manager, unregister it (if you don't it will lead to problems in IE)
            Ext.dd.ScrollManager.unregister(g.getView().getEditorParent());
        }
    }
	});

	GBIF.MetaMaker.Extension.superclass.constructor.call(this, config);

}	

Ext.extend(GBIF.MetaMaker.Extension, Ext.grid.GridPanel, {	
});