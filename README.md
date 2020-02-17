# Portfolio-Liu
My Portfolio Web Site, created with React and Next



 ### Sample

https://github.com/zeit/next-learn-demo



### Start the server

npm run dev



### Notes

- To start the server : `npm run dev (cmd)`

  To stop the server : `ctrl + c`

- Make sure your React Component is the **default** export.

- Page navigation : `<Link href="/..."></Link>`

  >  index.js

- We import and use the [useRouter](https://nextjs.org/docs/api-reference/next/router#userouter) function from `next/router` which will return the Next.js `router` object.

  In this case, we are using the router's `query` object, which has the query string params.

  Therefore, we get the title with `router.query.title`.

  > useRouter-1.js & post.js
  >
  > useRouter-2.js & post2.js

- Dynamic page with clean URL, made by query.id

  > toblog.js & blog/[id].js

- use [isomorphic-unfetch](https://github.com/developit/unfetch) to fetch data for page

  > toShow.js & shows/[id].js

- database : Node-SQLite (codecademy)

- [CSS in Js](https://github.com/MicheleBertoli/css-in-js) styling :  

  - <style jsx>{``}</style>
    CSS rules have no effect on elements inside of a child component.

  - <style jsx global>{``}</style>
Global css : changing child component's style
    
>  react-markdown example : blog/[id].js