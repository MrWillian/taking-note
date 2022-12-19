migrate((db) => {
  const collection = new Collection({
    "id": "mwug70k19zk10ks",
    "created": "2022-12-19 13:20:51.602Z",
    "updated": "2022-12-19 13:20:51.602Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kyw3kndo",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mwug70k19zk10ks");

  return dao.deleteCollection(collection);
})
