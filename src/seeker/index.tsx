import { useState } from 'react';
import Search from './search';
import Table from './table';

export default function Seeker() {
    const [tracks, setTracks] = useState([]);
    const [nextPagination, setNexPagination] = useState('');
    return (
        <>
            <Search setTracks={setTracks} setNexPagination={setNexPagination} />
            <Table tracks={tracks} nextPagination={nextPagination} setNexPagination={setNexPagination} />
        </>
    );
}