import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2.75rem;

  @media (max-width: ${({ theme }) => theme.maxWidth}px) {
    font-size: 1.75rem;
    width: 90%;
  }
`;

export const Team = styled.div`
  margin-top: 2.5rem;
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Member = styled.div`
  min-width: 200px;
  padding: 1.5rem 2rem;
  margin: 2rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.background};

  border-radius: 1rem;
  transition: 0.3s;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px; //opacity <- last two numbers of color

  :hover {
    transition: 0.3s;
    box-shadow: ${({ theme }) => theme.primary}25 0px 7px 29px 0px; //opacity <- last two numbers of color: ;
  }
`;

export const MemberIMG = styled.img`
  margin: auto;
  width: 7.5rem;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.text}25 0px 7px 29px 0px; //opacity <- last two numbers of color
`;

export const MemberName = styled.div`
  margin-top: 0.5rem;

  font-weight: bold;
  font-size: 1.25rem;
`;

export const MemberRole = styled.div`
  margin: 1rem auto;
  padding: 0.25rem;

  color: ${({ theme }) => theme.white};
  font-weight: bold;
  font-size: 0.75rem;

  width: 75%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
`;

export const MemberSocial = styled.div`
  svg {
    transition: 0.3s;

    font-size: 1.25rem;
    color: ${({ theme }) => theme.grey.first};

    :hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;