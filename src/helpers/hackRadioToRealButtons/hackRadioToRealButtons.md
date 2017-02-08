## Hack radio inputs to work like real buttons

Some prework needs to be done to make this work:

- Wrap labels around radio inputs
- Make radio inputs share the same "name" attribute
- Set display none on radio inputs

### How to use

```js
hackRadioToRealButtons($('label'), {
  initialStyles: {
    background: 'red',
    color: 'white'
  },
  activeStyles: {
    background: 'black'
  }
})
```
