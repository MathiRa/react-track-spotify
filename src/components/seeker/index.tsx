import { useState } from 'react';
import Search from './search';
import Table from './table';
import { useLocation } from 'react-router-dom';

export default function Seeker() {
    const [tracks, setTracks] = useState([]);
    const [nextPagination, setNexPagination] = useState('');
    const [activeToken, setActiveToken] = useState(null);
    const {search}  = useLocation()
    const codeApi= (new URLSearchParams(search).get("code") || '');
    return (
        <>
            <Search activeToken={activeToken} setTracks={setTracks} setNexPagination={setNexPagination} code={codeApi} setActiveToken={setActiveToken} />
            <Table tracks={tracks} nextPagination={nextPagination} setNexPagination={setNexPagination} setActiveToken={setActiveToken} code={codeApi} activeToken={activeToken} />
        </>
    );
}