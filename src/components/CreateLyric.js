import { gql, useMutation } from "@apollo/client";
import { useRef } from "react";

const ADD_LYRIC = gql`
  mutation AddLyricToSong($songId: ID, $content: String) {
    addLyricToSong(songId: $songId, content: $content) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

const LyricCreate = ({ songId }) => {
  const [addLyric, { loading }] = useMutation(ADD_LYRIC);

  const lyricInputRef = useRef(null);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredLyric = lyricInputRef.current.value;

    if (!enteredLyric || !enteredLyric.trim().length) {
      return;
    }

    addLyric({
      variables: { songId, content: enteredLyric },
    }).then(() => {
      lyricInputRef.current.value = "";
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="lyric">Add a Lyric</label>
      <input id="lyric" type="text" required ref={lyricInputRef} />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default LyricCreate;
