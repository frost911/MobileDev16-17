Ext.define('Idealist.plugin.PullRefresh', {
  override: 'Ext.plugin.PullRefresh',
  onLatestFetched: function(operation) {
    var store = this.getList().getStore(),
      oldRecords = store.getData(),
      newRecords = operation.getRecords(),
      length = newRecords.length,
      toInsert = [],
      newRecord, oldRecord, i;

    for (i = 0; i < length; i++) {
      newRecord = newRecords[i];
      oldRecord = oldRecords.getByKey(newRecord.getId());

      if (oldRecord) {
        oldRecord.set(newRecord.getData());
      } else {
        toInsert.push(newRecord);
      }

      oldRecord = undefined;
    }

    store.insert(0, toInsert);
    
    /* Patch: gelöschte Todos aus der Liste entfernen */
    var toRemove = [],
      newRecordsIds = Ext.Array.map(newRecords, function(record) { return record.getId(); });

    for (i = 0; i < oldRecords.length; i++) {
      oldRecord = oldRecords.getAt(i);
      
      if (Ext.Array.contains(newRecordsIds, oldRecord.getId()) === false) {
        toRemove.push(oldRecord);
      }
    }
    
    store.remove(toRemove);        
    /* Ende des Patches */
    
    this.setState("loaded");
    this.fireEvent('latestfetched', this, toInsert);
    if (this.getAutoSnapBack()) {
      this.snapBack();
    }
  }
});