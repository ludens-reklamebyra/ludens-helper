import ludensAjax from './helpers/ludensajax/ludensajax' // example

// use this file to import functions and test them within the browser
// with index.html file included in the root of this repo.

ludensAjax({
  method: 'get',
  url: 'http://www.ludensreklame.no/wp-json/wp/v2/posts',
  dataType: 'JSON',
  outputTarget: 'body',
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
