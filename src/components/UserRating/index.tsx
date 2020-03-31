import React from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, ContainerRating, Input, ButtonContainer} from './styles';
import { AirbnbRating } from 'react-native-ratings';
import Loading from '../Loading';
import { colors } from '../../styles';

interface UserRatingProps {
    handleOpen(value: boolean): void;
    open: boolean;
}

const UserRating: React.FC<UserRatingProps> = ({ handleOpen, open }) => {

    const handleClose = () => {
        handleOpen(false);
    }

    return (
        <Modal isVisible={open} onBackdropPress={handleClose} onBackButtonPress={handleClose}>
            <ContainerRating>
                <AirbnbRating
                    count={5}
                    selectedColor="#D95E5F"
                    showRating={false}
                    defaultRating={5}
                    size={10}
                    starStyle={{ padding: 20 }}
                />
            </ContainerRating>
            <Container>
                <Input />
                <ButtonContainer>
                    {/* <Loading /> */}
                    <Icon name="send" size={20} color="#FFF" />
                </ButtonContainer>
            </Container>
        </Modal>
  );
};

export default UserRating;


