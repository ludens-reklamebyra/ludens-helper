## ludensAjax

It is one of the most used functionalities Ludens have used in production code
when wanting to load more data dynamically.

Note: This function only provides the ajax config.

example:
``` javascript
ludensAjax({
  method: 'get',
  url: 'http://www.ludensreklame.no/wp-json/wp/v2/posts',
  dataType: 'JSON',
  outputTarget: 'body',
  data: {query: 'something'}
  loading: {
    selector: 'body',
    loadingText: 'loading'
  },
  errorMsg: 'Something went wrong',
  cb: () => {
    console.log('cb is done')
  },
  jsonResult: (result) => {
    console.log(result) // JSON result
  }
})
```
