import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import CreateLyric from "./CreateLyric";
import { FETCH_SONG } from "../queries/fetchOneSong";

const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

const SongDetail = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(FETCH_SONG, { variables: { id } });
  const [likeLyric] = useMutation(LIKE_LYRIC);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Something went wrong...</div>;

  const { title, lyrics } = data.song;

  const likeLyricHandler = (id, likes) => {
    likeLyric({
      variables: { id },
      optimisticResponse: {
        __typename: "Mutation",
        likeLyric: {
          id,
          likes: likes + 1,
          __typename: "LyricType",
        },
      },
    });
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{title}</h3>
      <ul className="collection">
        {lyrics.map(({ id, content, likes }) => (
          <li key={id} className="collection-item">
            {content}
            <div className="vote-box">
              {likes}
              <i
                className="material-icons like"
                onClick={() => likeLyricHandler(id, likes)}
              >
                thumb_up
              </i>
            </div>
          </li>
        ))}
      </ul>
      <CreateLyric songId={id} />
    </div>
  );
};

export default SongDetail;
