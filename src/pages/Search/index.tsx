import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {ApplicationState} from '../../store';
import * as SearchActions from '../../store/ducks/search/actions';
import * as MovieActions from '../../store/ducks/movie/actions';
import {sizes} from '../../config/sizes';
import Config from 'react-native-config';

import {Container, ContainerMovie, ContainerTouchable, Title, GenreText, ContentMovie} from './styles';
import { TextInput, FlatList, Text, Keyboard } from 'react-native';
import FastImage from 'react-native-fast-image';

import { IMovie } from '../../types/IMovie';
import { images } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Genre } from '../../types/Genre';
import { AirbnbRating } from 'react-native-ratings';
import Loading from '../../components/Loading';

interface StateProps {
  data: IMovie[];
  genres: Genre[];
  loading: boolean;
}

interface DispatchProps {
    searchRequest(query: string): void;
    setMovieRequest(movie: IMovie): void;
}

type Props = StateProps & DispatchProps;

const Search: React.FC<Props> = ({ data, searchRequest, setMovieRequest, genres, loading }) => {

    const navigate = useNavigation();
    
    const handleItem = (item: IMovie) => {
        setMovieRequest(item);
        navigate.push('Movie');
    }
    
    const [handleSearch] = useDebouncedCallback((value: string) => {
        if(value.length > 0) {
            console.log(value);
            searchRequest(value);
        }
    }, 1000)

    const renderGenres = (item: IMovie) => (
        item.genre_ids.map((genreId, index) => genres.map(genre => {
            if(genre.id == genreId) {
                return item.genre_ids[index + 1] ? genre.name.concat(', ') : genre.name
            }
        }))
    )

    const renderItem = ({item}: { item: IMovie }) => {
        return (
            <ContainerTouchable key={item.id} onPress={() => handleItem(item)}>
                <ContainerMovie>
                    <FastImage
                    style={{
                        width: RFPercentage(20),
                        height: RFPercentage(25),
                        borderRadius: 5,
                    }}
                    source={{
                        uri: Config.URI_IMAGE + sizes.poster_sizes.w342 + item.poster_path,
                        priority: FastImage.priority.high,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    />
                    <ContentMovie style={{ flexDirection: 'column' }}>
                        <Title>{item.title}</Title>
                            <AirbnbRating
                                count={5}
                                selectedColor="#D95E5F"
                                showRating={false}
                                defaultRating={item.vote_average}
                                size={10}
                                starStyle={{ marginTop: 10 }}
                                isDisabled
                            />
                        <GenreText>{renderGenres(item)}</GenreText>
                    </ContentMovie>
                </ContainerMovie>
            </ContainerTouchable>
        )
    }

  return (
    <Container>
        <TextInput 
            placeholder="Search ..."
            style={{ fontSize: 20, backgroundColor: 'white', paddingHorizontal: 20, borderRadius: 15, marginVertical: 20 }}
            onChangeText={handleSearch}
        />
        {loading ? <Loading /> : (
            <FlatList 
                data={data}
                keyExtractor={item => String(item.id)}
                renderItem={renderItem}
                onScrollBeginDrag={Keyboard.dismiss}
            />
        )}
    </Container>
  );
};

const mapStateToProps = ({search, genre}: ApplicationState) => ({
    data: search.data,
    loading: search.loading,
    genres: genre.data,
});  

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({...SearchActions, ...MovieActions}, dispatch);

export default connect(
    mapStateToProps,
  mapDispatchToProps,
)(Search);
