import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ContactCard from './components/card.jsx';
import contactsData from './data/contacts.json';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const FALLBACK_CONTACTS = [
    {
        id: 1,
        name: 'Ada Lovelace',
        phone: '(555) 010-0101',
        email: 'ada@example.com',
    },
    {
        id: 2,
        name: 'Alan Turing',
        phone: '(555) 010-0102',
        email: 'alan@example.com',
    },
    {
        id: 3,
        name: 'Grace Hopper',
        phone: '(555) 010-0103',
        email: 'grace@example.com',
    },
];

const App = () => {
    const contacts = contactsData;

    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">Ultimate Phonebook</h1>
                <p className="page__subtitle">
                    The ultimate solution for managing your contacts.
                </p>
            </header>

            <section className="search" aria-labelledby="search-heading">
                <h2 id="search-heading">Search Contacts</h2>
                <div className="search__controls">
                    <input
                        id="search-input"
                        type="search"
                        placeholder="Search by name or phone"
                        data-testid="search-input"
                    />
                    <Button variant="primary" type="button">
                        Search
                    </Button>
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {contacts.length}{' '}
                    {contacts.length === 1 ? 'result' : 'results'}
                </p>
            </section>

            <section className="contacts" aria-labelledby="contacts-heading">
                <div className="contacts__container">
                    <div className="contact-heading">
                        <h2 id="contacts-heading">Contacts</h2>
                        <div className="actions">
                            <div className="filter-group">
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary">Family</Button>
                                    <Button variant="primary">Friends</Button>
                                    <Button variant="primary">Work</Button>
                                </ButtonGroup>
                            </div>
                            <Button variant="primary" className="add-btn">
                                Add Contact
                            </Button>
                        </div>
                    </div>

                    <div className="contacts__grid">
                        {contacts.map((c) => (
                            <ContactCard key={c.id} contact={c} />
                        ))}
                    </div>
                </div>
            </section>












            <footer className="page__footer">
                <small>&copy ; 2025 Ultimate Phonebook. All rights reserved.</small>
            </footer>
        </main>
    );
};

export default App;
