import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import ContactCard from "./components/card.jsx";
import contactsData from "./data/contacts.json";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const App = () => {
    const contacts = contactsData;
    const perPage = 3; // show 3 cards per page
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.max(1, Math.ceil(contacts.length / perPage));
    const startIndex = (currentPage - 1) * perPage;
    const pagedContacts = contacts.slice(startIndex, startIndex + perPage);

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
                    Showing {contacts.length}{" "}
                    {contacts.length === 1 ? "result" : "results"}
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
                        {pagedContacts.map((contact) => {
                            return (
                                <ContactCard
                                    key={contact.id}
                                    name={contact.name}
                                    phone={contact.phone}
                                    email={contact.email}
                                />
                            );
                        })}
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "1rem",
                        }}
                    >
                        <ResponsivePagination
                            total={totalPages}
                            current={currentPage}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </section>

            <footer className="page__footer">
                <small>&copy; 2025 Ultimate Phonebook. All rights reserved.</small>
            </footer>
        </main>
    );
};

export default App;
