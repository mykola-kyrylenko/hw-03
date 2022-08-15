import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ListContainer = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    /* max-width: 3000px; */
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: 30px;
    margin-right: 30px;
`;

const ImageItem = styled.li`
    border-radius: 2px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    margin: 16px;
    width: 420px;
    height:260px;
`;

const ImageGalleryItemImage = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
  transform: scale(1.03);
  cursor: zoom-in;
  }
`;


const ButtonLoadMore = styled.button`
    position: sticky;
  margin: 30px 0 30px 0;
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

    :hover,:focus {
  background-color: #303f9f;
  }
`;

const SearchBar = styled.header`
    width: 100%;
     top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 40px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

const SearchFormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

    :hover {
    opacity: 1;
    }
`;

const SearchFormInput = styled.input`
     display: block;

  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
  font: inherit;
  font-size: 18px;
  }
`;


export {
    Container,
    ListContainer,
    ImageItem,
    ImageGalleryItemImage,
    ButtonLoadMore,
    SearchBar,
    SearchForm,
    SearchFormButton,
    SearchFormInput,
}