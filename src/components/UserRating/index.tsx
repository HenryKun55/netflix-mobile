import React, { useState } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {ApplicationState} from '../../store';

import {Container, ContainerRating, Input, ButtonContainer} from './styles';
import { AirbnbRating } from 'react-native-ratings';
import Loading from '../Loading';

import * as MovieActions from '../../store/ducks/movie/actions';
import { IMovie } from '../../types/IMovie';
import { IUser } from '../../types/IUser';

interface UserRatingProps {
    open: boolean;
    loading: boolean;
    selected: IMovie;
    user: IUser;
}

interface DispatchProps {
    setRatingRequest(movieId: number, user: IUser, message: string, rating: number): void;
    closeModal(): void;
}

type Props = UserRatingProps & DispatchProps;

const UserRating: React.FC<Props> = ({ selected, user, open, setRatingRequest, loading, closeModal }) => {

    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(5)

    const handleRate = async () => {
        if(!loading) {
            await setRatingRequest(selected.id, user, message, rating);
        }
    }

    return (
        <Modal isVisible={open} onBackdropPress={closeModal} onBackButtonPress={closeModal}>
            <ContainerRating>
                <AirbnbRating
                    count={5}
                    selectedColor="#D95E5F"
                    showRating={false}
                    defaultRating={rating}
                    onFinishRating={setRating}
                    size={10}
                    starStyle={{ padding: 20 }}
                />
            </ContainerRating>
            <Container>
                <Input onChangeText={setMessage} />
                <ButtonContainer onPress={handleRate} >
                    {loading ? (
                        <Loading />
                    ) : (
                        <Icon name="send" size={20} color="#FFF" />
                    )}
                </ButtonContainer>
            </Container>
        </Modal>
  );
};

const mapStateToProps = ({movie, auth}: ApplicationState) => ({
    user: auth.data, 
    loading: movie.loading,
    selected: movie.selectedMovies[movie.selectedMovies.length - 1],
});

const mapDispatchToProps = (dispatch: Dispatch) =>
bindActionCreators(MovieActions, dispatch);
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserRating);
  