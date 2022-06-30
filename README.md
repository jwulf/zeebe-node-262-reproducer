# zeebe-node-262-reproducer

A reproducer for [Issue 262](https://github.com/camunda-community-hub/zeebe-client-node-js/issues/262) in the Zeebe Node library

## To run

Bring up the 8.0.2 broker using the following command:

```bash
docker-compose up
```

Then start the worker:

```bash
node index.js
```
