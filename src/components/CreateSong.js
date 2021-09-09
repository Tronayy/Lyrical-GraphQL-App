import { useRef } from "react";
import { useMutation, gql } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";

import { FETCH_ALL_SONGS } from "../queries/fetchAllSongs";

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

const CreateSong = () => {
  const [addSong, { loading, error }] = useMutation(ADD_SONG);
  const titleInputRef = useRef(null);
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;

    if (!enteredTitle || !enteredTitle.trim().length) {
      return;
    }

    addSong({
      variables: { title: enteredTitle },
      refetchQueries: [{ query: FETCH_ALL_SONGS }], // we can also pass variables property
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      {loading && <div>Submitting...</div>}
      {error && <div>Something went wrong...</div>}
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Song Title:</label>
        <input
          id="title"
          type="text"
          ref={titleInputRef}
          disabled={loading}
          required
        />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateSong;
