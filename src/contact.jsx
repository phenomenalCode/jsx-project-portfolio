// contact.jsx
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.div`
  background-color: #fffacd; /* light yellow */
  color: #001f7a; /* deep blue */
  padding: 1.5rem;
  border-radius: 10px;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  word-break: break-word;

  strong {
    display: inline-block;
    margin-top: 0.5rem;
  }
`;

export const ContactInfo = () => {
  return (
    <ContactWrapper>
      <strong>Email address:</strong> carter3darius@gmail.com
      <br />
      <strong>GitHub:</strong> phenomenalCode
      <br />
      <strong>LinkedIn:</strong> Darius Olsson Carter
    </ContactWrapper>
  );
};
