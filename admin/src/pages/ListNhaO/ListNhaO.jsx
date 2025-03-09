import axios from 'axios';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListNhaO() {
    const [data, setData] = useState([]);

    const fetchSongs = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/v1/admin/song`);
            if (response.data.success) {
                setData(response.data.songs);
            }
        } catch (error) {
            toast.error('Error fetching songs');
        }
    };

    const deleteSong = async (id) => {
        try {
            const response = await axios.delete(`${import.meta.env.VITE_URL_API}/api/v1/admin/song/delete/${id}`);
            if (response.data.success) {
                toast.success('Song deleted');
                fetchSongs();
            }
        } catch (error) {
            toast.error('Error deleting song');
        }
    };

    useEffect(() => {
        fetchSongs();
    }, []);

    return (
        <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
            <p>All List Songs</p>
            <br />
            <div>
                <div className="sm:grid hidden grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
                    <b>Image</b>
                    <b className="m-auto">Name</b>
                    <b className="m-auto">Artist</b>
                    <b className="m-auto">Album</b>
                    <b className="m-auto">Playlist</b>
                    <b className="m-auto">Duration</b>
                    <b className="m-auto">Action</b>
                </div>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className="grid grid-cols-[0.5fr_1fr_1fr_1fr_1fr_0.5fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100"
                        >
                            <img className="w-12" src={item.image} alt="" />
                            <p className="m-auto line-clamp-2">{item.name}</p>
                            <p className="m-auto line-clamp-2">{item.artist}</p>
                            <p className="m-auto line-clamp-2">
                                {item.albums && item.albums.length > 0
                                    ? item.albums.map((album) => album.name).join(', ')
                                    : 'No albums'}
                            </p>
                            <p className="m-auto line-clamp-2">
                                {item.playlists && item.playlists.length > 0
                                    ? item.playlists.map((playlist) => playlist.name).join(', ')
                                    : 'No playlists'}
                            </p>
                            <p className="m-auto">{item.duration}</p>
                            <p onClick={() => deleteSong(item._id)} className="m-auto cursor-pointer">
                                x
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ListNhaO;
