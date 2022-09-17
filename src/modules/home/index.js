import styled from "styled-components";
import OverviewComponent from "./OverviewComponent";
import TransactionComponent from "./TransactionComponent";

// making up a parent container and other core components for our application 
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px 10px;
  font-family: 'Montserrat', sans-serif;
  width: 360px;
`;

const HomeComponent = (props) => {
    return (
        <Container>
            <OverviewComponent />
            <TransactionComponent />
        </Container>
    );
}


export default HomeComponent;