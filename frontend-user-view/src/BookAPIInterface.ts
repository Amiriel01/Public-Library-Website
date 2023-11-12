  //items[0-9], volumeInfo{ title: string, authors[], description: string, imageLinks{ thumbnail: string }, infoLink: string }  

  //data returned from the API interface
  export interface BookAPIData {
    //if predefined interface, use either
    // items: BookDataInterface[]
    items: Array<BookDataInterface>
    // //if no predefined interface
    // items: Array<{foo:string}>
  }

  export interface BookDataInterface {
   volumeInfo: {
    title: string, 
    authors: Array<string>,
    description: string, 
    imageLinks: {
        thumbnail: string,
    },
    infoLink: string,
   }
  }

