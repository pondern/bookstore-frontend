## Link to [BestBooks](https://main--ga-bookstore.netlify.app/) live site

## Overview

The Bookstore API is an interactive collection of The New York Times bestseller books that allows anyone to browse the collection. A user can also sign up for an account and log in to add, edit, or delete a book from there library. A user can also choose to purchase a book from a selection of buying options.

## Pages

### Home Page

![Home Page](<Screenshot 2023-11-21 at 5.57.29 PM.png>)

<<<<<<< HEAD
### Browse Page
=======
The page will reload when you make changes.\![Screenshot 2023-11-21 at 5 49 23 PM](https://github.com/pondern/bookstore-frontend/assets/76927865/b474f8d2-e635-4e4c-9f70-65676b8ed39a)

You may also see any lint errors in the console.
>>>>>>> 54b9faa5c402678e26faab9cb555a9c0e2d96ede

![Browse Page](<Screenshot 2023-11-21 at 6.16.37 PM.png>)

### Detail Page

![Detail Page](<Screenshot 2023-11-21 at 6.25.01 PM.png>)

### Add Page

![Add Page](<Screenshot 2023-11-21 at 6.21.18 PM.png>)

### Sign-Up Page

![Sign-Up Page](<Screenshot 2023-11-21 at 6.21.44 PM.png>)

### Sign-In Page

![Sign-In Page](<Screenshot 2023-11-21 at 6.22.03 PM.png>)

## Schema

### Book Schema:

```javascript
const Schema = mongoose.Schema;

let BookSchema = new Schema({
  title: { type: String },
  author: { type: String },
  book_image: { type: String },
  publisher: { type: String },
  description: { type: String },
  buy_links: [
    {
      name: { type: String },
      url: { type: String },
    },
  ],
  rank: { type: Number },
  weeks_on_list: { type: Number },
  display_name: { type: String },
});

export default mongoose.model("books", BookSchema);
```

### User Schema:

```javascript
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password_digest: { type: String, required: true, select: false },
});

export default mongoose.model("users", UserSchema);
```

### Library Schema:

```javascript
const Schema = mongoose.Schema;

let LibrarySchema = new Schema({
  books: [
    {
      book: { type: Schema.Types.ObjectId, ref: "books" },
      stars: { type: Number, min: 1, max: 5 },
      comment: { type: String },
    },
  ],
  userId: { type: Schema.Types.ObjectId, ref: "users" },
});

export default mongoose.model("libraries", LibrarySchema);
```

## Team Expectations

Link to [Team Expectations Document](https://docs.google.com/document/d/1CJgyx3Nu_gRJJMGRL7gkoh9v1o5vb2Zb0RJvfQYLnng/edit)

Link to [Project Outline](https://docs.google.com/document/d/1WMG7CX3tmeAdju4malt2lE7Vz8K2oUcaGM85A9WGWhY/edit)

### Project Schedule

| Day   | Goal                                                                       |
| ----- | -------------------------------------------------------------------------- |
| 11/13 | Create repo, brainstorm idea & get approval                                |
| 11/14 | Finish readme, wireframe, Start building back-end                          |
| 11/15 | Continue working on back-end                                               |
| 11/16 | Finish working on back-end and deploy                                      |
| 11/17 | AM: Discuss delegating tasks, PM: Begin working on individual components   |
| 11/18 | Work on individual front-end components                                    |
| 11/19 | Work on individual front-end components and styling                        |
| 11/20 | Deploy front-end and have all major aspects of project completed, fix bugs |
| 11/21 | AM: Fix any remaing bugs, PM: Presentation                                 |

## MVP

- Home page displaying some of the books in the library
- Browse page getting and showing all books in the library
- Book detail page showing the title, author, genre, cover, and description of the book
- Sign up page to create an account
- Sign in page to sign into your account
- Add a book page to add a book to the user library
- Edit review of a book in user library
- Remove a book button to delete a book from the user library
- Sort books by alphabetically by title, author (post-MVP)
- Carousel of favorite books of class (post-MVP)
- Personalized book list per user (post-MVP)
- Recommended other books based on genre (post-MVP)

## Disclaimer

This API is created for educational purposes and does not claim official affiliation or endorsement by The New York Times

## Contact

For any questions or concerns, please [open an issue](https://github.com/pondern/bookstore-frontend/issues) in this repository.
