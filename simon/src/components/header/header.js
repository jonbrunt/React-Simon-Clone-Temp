import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`

`;

class Header extends Component {
  render() {
    return (
      <StyledDiv>
        <h1>Simon 2.0.1</h1>
      </StyledDiv>
    );
  }
}

export default Header;
