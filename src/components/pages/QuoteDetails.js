import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Comments from "../comments/Comments";
import { Route } from "react-router-dom";
import HighlightedQuote from "../quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learnin React is Fun" },
  { id: "q2", author: "Maximillian", text: "Learnin React is Great" },
];



const QuoteDetail = () => {
  const params = useParams();


  const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

  if(!quote) {
    return <h1>No Quote Found</h1>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
