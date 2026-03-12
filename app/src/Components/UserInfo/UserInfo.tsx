import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5em;
`

const UserPircture = styled.img`
    width: 2em;
    height: 2em;
    border-radius: 22px;
    margin-right: 12px;
`

const NameText = styled.div`
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
`

interface IProgress{
    percentual: number;
}

const Progress = styled.div<IProgress>`
    width: 180px;
    height: 6px;
    background-color: #FFFFFF;
    border-radius: 3px;
    position:relative;

    &::after {
        content:"";
        position: absolute;
        top: 0;
        left: 0;
        width: ${({percentual}) => percentual}%;
        height: 6px;
        border-radius: 3px;
        background-color: #23DD7A;
        }
`
interface IUserInfo{
    nome: string;
    image: string;
    percentual: number;
}

export const UserInfo = ( {nome, image, percentual}: IUserInfo ) => {
    return (
        <Container>
            <UserPircture src={ image } />
            <div>
                <NameText>
                    { nome }
                </NameText>
                <Progress percentual={ percentual }/>
            </div>
        </Container>
    )
}