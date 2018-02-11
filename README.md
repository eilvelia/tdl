## tglib

TDLib (Telegram Database library) bindings for Node.js

-----

### Getting started

1. Build your own TDLib binary (https://github.com/tdlib/td#building)
2. `npm i -S tglib`
3. Use it!

-----

### Handling updates and errors

By default, tglib will handle the incoming updates internally. You can attach your own event listener for receiving updates and errors.

-----

### Fetch

Since TDLib is asynchronous, if you need to use some API like `getChats`, you need to add the `@extra` property to your query in `client._send` and filter the corresponding result in `client._receive` by matching the same `@extra` property that defined previously.

tglib provides an easy and convenient way to deal with these API called `client.fetch`, all you need to do is call the function and awaits for the result. tglib will take care of `client._send` and `client._receive`.

-----

### License

MIT