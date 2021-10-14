import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Button, List } from '@mui/material';
import getSearchResults from '../services/api';
import { SearchWrapper } from './style';

export default function Table({ tracks, nextPagination, setNexPagination }: any) {

    const [tracksToShow, setTracksToShow] = useState([]);

    useEffect(() => {
        prepareData(tracks)
    }, [tracks]);

    const prepareData = (tracks: any, add = 0) => {
        const results = [] as any;
        
        if (tracks && Object.keys(tracks).length > 0) {
            tracks?.items.forEach((element: any) => {
                let artists: any[] = []
                element?.artists.forEach((artist: { name: any; }) => artists.push(artist.name))
                results.push(
                    <><ListItem alignItems="flex-start" key={element.uri} onClick={()=> window.open(element.external_urls.spotify, "_blank")}>
                        <ListItemAvatar>
                            <Avatar alt="song" src={element.album.images[0].url} />
                        </ListItemAvatar>
                        <ListItemText
                            primary={element.name}
                            secondary={<React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {artists.join(', ')}
                                </Typography>
                            </React.Fragment>} />
                    </ListItem><Divider variant="inset" component="li" /></>
                );
            });
        }
        if (add === 1) {
            results.push(tracksToShow)
            setTracksToShow(results)
        } else {
            setTracksToShow(results)
        }
    }
    const handleClickPagination = async () => {
        const result = await getSearchResults('', 0, nextPagination)
        setNexPagination(result.next)
        prepareData(result, 1)
    }
    const existResults = tracksToShow.length > 0;
    return (
        <SearchWrapper>
            <List sx={{ width: '100%', maxWidth: '100%', alignContent: 'center' }}>
                {existResults ? tracksToShow : <li className="no-result"><span>No Result</span></li>}
                {existResults && <Button variant="contained" color="success" onClick={handleClickPagination}>More results <AddIcon /></Button>}
            </List>
        </SearchWrapper>
    );
}