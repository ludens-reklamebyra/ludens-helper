## loadmore

It is one of the most used functionalities Ludens have used in production code
when wanting to load more data dynamically.

Note: This function only provides the ajax config.

example:
``` javascript
loadmore({
  method: 'get',
  url: 'somephpscript/?search=lol',
  outputTarget: '#mySelector',
  cb: () => {
    // This will fire when ajax is completely done.
  },
  loading: {
    selector: '#mySelector',
    loadingText: 'Loading more... please hold'
  }
})
```
