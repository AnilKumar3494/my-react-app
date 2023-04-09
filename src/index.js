import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// Array Accessing
const bookArray = [
  {
    bookName: "The Power of Your Subconscious Mind",
    bookImg:
      "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
    bookAuthor: "Joseph Murphy",
    bookPrice: 150,
  },
  {
    bookName: "The Subtle Art of Not Giving a F*ck",
    bookImg:
      "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg",
    bookAuthor: "Mark Manson",
    bookPrice: 333,
  },
];

const Books = () => {
  return (
    <>
      <main className="booklist ">
        {bookArray.map((bookInfo) => {
          // const { bookName, bookImg, bookAuthor } = bookInfo;
          return (
            <BookDetails
              name={bookInfo.bookName}
              img={bookInfo.bookImg}
              author={bookInfo.bookAuthor}
              price={bookInfo.bookPrice}
            />
          );
        })}
      </main>
    </>
  );
};

const BookDetails = ({ name, img, author, price }) => {
  return (
    <section className="book">
      <h1>{name}</h1>
      <img src={img} alt="" />
      <h3>{author}</h3>
      <h2>Rs.{price}</h2>
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Books></Books>);

// //Right way of accessing dynamically
// const bookOne = {
//   bookName: "The Power of Your Subconscious Mind",
//   bookImg:
//     "https://m.media-amazon.com/images/I/71UwSHSZRnS._AC_UY327_FMwebp_QL65_.jpg",
//   bookAuthor: "Joseph Murphy",
//   bookPrice: 150,
// };
// const bookTwo = {
//   bookName: "The Subtle Art of Not Giving a F*ck",
//   bookImg:
//     "https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UY327_FMwebp_QL65_.jpg",
//   bookAuthor: "Mark Manson",
//   bookPrice: 333,
// };

// const Books = () => {
//   return (
//     <div className="booklist">
//       <BookDetails
//         name={bookOne.bookName}
//         img={bookOne.bookImg}
//         author={bookOne.bookAuthor}
//         price={bookOne.bookPrice}
//       ></BookDetails>
//       <BookDetails
//         name={bookTwo.bookName}
//         img={bookTwo.bookImg}
//         author={bookTwo.bookAuthor}
//         price={bookTwo.bookPrice}
//       >
//         <marquee behavior="" direction="">
//           Hello There
//         </marquee>
//       </BookDetails>
//     </div>
//   );
// };

// const BookDetails = ({ name, img, author, price, children }) => {
//   return (
//     <section className="book">
//       <h1>{name}</h1>
//       <img src={img} alt="" />
//       <h3>{author}</h3>
//       <h2>Rs.{price}</h2>
//       {children}
//     </section>
//   );
// };

// //Props
// //Object Accessing
// const bookOne = {
//   bookName: "The Adcentures of La-La Land",
//   imgScr: "./Images/book2.jpg",
//   authorName: "Mr. Mallana",
// };
// const bookTwo = {
//   bookName: "Wings of Fire",
//   imgScr:
//     "https://m.media-amazon.com/images/I/51wbVQTpTgL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
//   authorName: "Dr. A.P.J Abdul Kalam",
// };

// const BooksLists = () => {
//   return (
//     <main className="booklist">
//       <BookDetails
//         authorNamee={bookOne.authorName}
//         bookName={bookOne.bookName}
//         img={bookOne.imgScr}
//       ></BookDetails>
//       <BookDetails
//         authorNamee={bookTwo.authorName}
//         bookName={bookTwo.bookName}
//         img={bookTwo.imgScr}
//       >
//         <button>Children Props</button>
//       </BookDetails>
//       <BookDetails
//         authorNamee={bookTwo.authorName}
//         bookName={bookTwo.bookName}
//         img={bookTwo.imgScr}
//       />
//     </main>
//   );
// };

//children spl prop - provided by react
// const BookDetails = ({ bookName, authorNamee, img, children }) => {
//   //object destructuring
//   // const { bookName, authorNamee, img } = props;

//   // console.log(props);
//   return (
//     <article className="book">
//       <h2>{bookName}</h2>
//       <img src={img} alt="" />
//       <h3>{authorNamee}</h3>
//       {children}
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BooksLists />);

//====Props====
// const BookDetails = (props) => {
//   return (
//     <article className="book">
//       <h1>{props.bookName}</h1>
//       <img src={props.img} alt="img-alt" />
//       <h3>{props.authorNamee}</h3>
//     </article>
//   );
// };

// ====================
// OLD METHORD

// const BooksList = () => {
//   return (
//     <main className="booklist">
//       <BookDetails />
//       <BookDetails />
//       <BookDetails />
//       <BookDetails />
//     </main>
//   );
// };

// const bookName = "My 1st React Book";
// const imgScr = "./Images/book2.jpg";
// const authorName = "A.K 2.0";

// const BookDetails = () => {
//   return (
//     <article className="book">
//       <h2>{bookName}</h2>
//       <img src={imgScr} alt="book2" />
//       <h3>Author: {authorName}</h3>
//     </article>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<BooksList />);
