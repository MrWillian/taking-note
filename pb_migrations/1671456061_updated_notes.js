migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mwug70k19zk10ks")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jidxx7lm",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mwug70k19zk10ks")

  // remove
  collection.schema.removeField("jidxx7lm")

  return dao.saveCollection(collection)
})
