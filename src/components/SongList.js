import { gql, useMutation, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { FETCH_ALL_SONGS } from "../queries/fetchAllSongs";

const DELETE_SONG = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(FETCH_ALL_SONGS);

  const [deleteSong] = useMutation(DELETE_SONG);

  const songDeleteHandler = (id) => {
    deleteSong({
      variables: { id },
      refetchQueries: [{ query: FETCH_ALL_SONGS }],
    });
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  const { songs } = data;

  return (
    <>
      <ul className="collection">
        {songs.map(({ id, title }) => (
          <li key={id} className="collection-item">
            <Link to={`/songs/${id}`}>{title}</Link>
            <i className="material-icons" onClick={() => songDeleteHandler(id)}>
              delete
            </i>
          </li>
        ))}
      </ul>
      <Link to="/songs/new" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </>
  );
};

export default SongList;
