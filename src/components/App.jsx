import Form from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import { Container, Section, Title } from './App.styled';

export function App() {
  return (
    <>
      <Container>
        <Title>Phonebook</Title>
        <Section>
          <Form />
        </Section>
        <Title>Contacts</Title>
        <Section>
          <Filter />
          <ContactsList />
        </Section>
      </Container>
    </>
  );
}
