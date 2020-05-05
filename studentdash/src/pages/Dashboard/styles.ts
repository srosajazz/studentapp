import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 30px;
`;

export
 const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
   display: flex;

   input {
     flex: 1;
     height:70px;
     padding: 0 24px;
     border: 0;
     border-radius: 5px 0 0 5px;
   }

   button{
     width:210px;
     height: 70px;
     background: #04D361;
     border-radius: 0px 5px 5px 0px;
     border: 0;
     color: #fff;
     font-weight: bold;
   }

 `;



export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;


a {
  background: #fff;
  border-radius: 5px;
  width: 100%;
  padding: 24px;
  display:block;
  text-decoration: none;

  display: flex;
  align-items: center;


   /* hover effect */
   &:hover {
    transform: translateX(10px);
    transition: transform 0.2s;
  }

  /* 2 option - create space between div's */
  & + a {
   margin-top: 16px;
  }

  img {
    width: 64px;
    height:64px;
    border-radius: 50%;
  }

  div {
    margin: 0  16px;
    flex: 1;

    strong {
      font-size: 20px;
      color: #3d3d4d;
    }

    p {
      font-size: 18px;
      color: #a8a8b3;
      margin-top: 4px;
    }
  }

  /* icons ->  */
  svg {
    margin-left: auto;
    color: #cbcbd6;
  }
}
`;


