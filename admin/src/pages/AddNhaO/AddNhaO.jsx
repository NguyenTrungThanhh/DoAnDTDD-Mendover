import { useEffect, useState } from 'react';
import axios from 'axios';
import { assets } from '@/assets/assets';
import { toast } from 'react-toastify';
import Select from 'react-select';

function AddNhaO() {
    const [image, setImage] = useState(false);
    const [song, setSong] = useState(false);
    const [name, setName] = useState('');
    const [artist, setArtist] = useState('');
    const [albums, setAlbums] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [albumData, setAlbumData] = useState([]);
    const [playlistData, setPlaylistData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('artist', artist);
            formData.append('image', image);
            formData.append('audio', song);

            formData.append('albums', JSON.stringify(albums.map((item) => item.value)));
            formData.append('playlists', JSON.stringify(playlists.map((item) => item.value)));

            const response = await axios.post(`${import.meta.env.VITE_URL_API}/api/v1/admin/song/add`, formData);

            if (response.data.success) {
                toast.success('Song Added');
                setName('');
                setArtist('');
                setAlbums([]);
                setPlaylists([]);
                setImage(false);
                setSong(false);
            } else {
                toast.error('Something went wrong');
            }
        } catch (error) {
            toast.error('Error occurred');
        }

        setLoading(false);
    };

    const loadAlbumData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/v1/admin/album`);
            console.log(response);

            if (response.data.success) {
                const options = response.data.albums.map((album) => ({
                    value: album._id,
                    label: album.name,
                }));
                setAlbumData(options);
            } else {
                toast.error('Unable to load album data');
            }
        } catch (error) {
            toast.error('Error occurred');
        }
    };

    const loadPlaylistData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_URL_API}/api/v1/admin/playlist`);
            console.log(response);

            if (response.data.success) {
                const options = response.data.playlists.map((playlist) => ({
                    value: playlist._id,
                    label: playlist.name,
                }));
                setPlaylistData(options);
            } else {
                toast.error('Unable to load playlist data');
            }
        } catch (error) {
            toast.error('Error occurred');
        }
    };

    useEffect(() => {
        loadAlbumData();
        loadPlaylistData();
    }, []);

    return loading ? (
        <div className="grid place-items-center min-h-[80vh]">
            <div className="w-16 h-16 place-self-center border-4 border-gray-400 border-t-green-800 rounded-full animate-spin"></div>
        </div>
    ) : (
        <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-8 text-gray-600 pt-8 pl-5 sm:pt-12 sm:pl-12"
        >
            <div className="flex gap-8">
                <div className="flex flex-col gap-4">
                    <p>Upload Song</p>
                    <input onChange={(e) => setSong(e.target.files[0])} type="file" id="song" accept="audio/*" hidden />
                    <label htmlFor="song">
                        <img
                            src={song ? assets.upload_added : assets.upload_song}
                            className="w-24 cursor-pointer"
                            alt=""
                        />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <p>Upload Image</p>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        id="image"
                        accept="image/*"
                        hidden
                    />
                    <label htmlFor="image">
                        <img
                            src={image ? URL.createObjectURL(image) : assets.upload_area}
                            className="w-24 cursor-pointer"
                            alt=""
                        />
                    </label>
                </div>
            </div>

            <div className="flex flex-col gap-2.5 w-2/4">
                <p>Song name</p>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
                    placeholder="Type Here"
                    type="text"
                />
            </div>

            <div className="flex flex-col gap-2.5 w-2/4">
                <p>Song artist</p>
                <input
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                    className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw, 250px)]"
                    placeholder="Type Here"
                    type="text"
                />
            </div>

            <div className="flex gap-10">
                <div>
                    <p>Album</p>
                    <Select
                        isMulti
                        options={albumData}
                        onChange={(selectedOptions) => setAlbums(selectedOptions)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
                <div>
                    <p>Playlist</p>
                    <Select
                        isMulti
                        options={playlistData}
                        onChange={(selectedOptions) => setPlaylists(selectedOptions)}
                        className="basic-multi-select"
                        classNamePrefix="select"
                    />
                </div>
            </div>

            <button type="submit" className="text-base bg-black text-white py-2.5 px-14 cursor-pointer">
                ADD
            </button>
        </form>
    );
}

export default AddNhaO;
