## ludensAjax

It is one of the most used functionalities Ludens have used in production code
when wanting to load more data dynamically.

Note: This function only provides the ajax config.

example:
``` javascript
ludensAjax({
  method: 'get',
  url: 'http://www.ludensreklame.no/wp-json/wp/v2/posts',
  data: {id: 1, name: 'øyvind'},
  outputTarget: 'body',
  loading: {
    selector: 'body',
    loadingText: 'data is loading'
  },
  errorMsg: 'Something happened when loading data',
  cb: () => {
    console.log('done')
  }
})
```
