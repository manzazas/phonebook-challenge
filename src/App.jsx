import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useEffect } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic-light-dark.css";
import ContactCard from "./components/card.jsx";
import contactsData from "../public/data/contacts.json";
import AddContactModal from "./components/AddContactModal";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    const [showAdd, setShowAdd] = useState(false);
    const perPage = 3;
    const [currentPage, setCurrentPage] = useState(1);

    
    const term = search.trim().toLowerCase();
    const termDigits = search.replace(/\D/g, "");
    const filteredContacts = contacts.filter((c) => {
        if (!term) return true;
        const name = (c.name || "").toString().toLowerCase();
        const phone = (c.phone || "").toString().toLowerCase();
        const phoneDigits = (c.phone || "").toString().replace(/\D/g, "");
        return (
            name.includes(term) ||
            phone.includes(term) ||
            (termDigits && phoneDigits.includes(termDigits))
        );
    });

    const totalPages = Math.max(1, Math.ceil(filteredContacts.length / perPage));
    const startIndex = (currentPage - 1) * perPage;
    const pagedContacts = filteredContacts.slice(startIndex, startIndex + perPage);
    useEffect(() => {
        fetch("/data/contacts.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setContacts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    function handleAddContact(contact) {
        setContacts((prev) => [contact, ...prev]);
        setCurrentPage(1);
    }
    return (
        <main className="page" data-testid="page-root">
            <header className="page__header">
                <h1 className="page__title">Looney Phonebook</h1>
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
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button variant="primary" type="button" onClick={() => {}}>
                        Search
                    </Button>
                </div>

                <p className="search__results" data-testid="results-count">
                    Showing {filteredContacts.length} {filteredContacts.length === 1 ? "result" : "results"}
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
                            <Button variant="primary" className="add-btn" onClick={() => setShowAdd(true)}>
                                Add Contact
                            </Button>
                        </div>
                    </div>
                    <div className="contacts__grid">
                        {loading && <p>Loading contacts…</p>}
                        {error && <p>Failed to load contacts.</p>}
                        {!loading && !error && filteredContacts.length === 0 && (
                            <p>No contacts found.</p>
                        )}
                        {!loading && !error && filteredContacts.length > 0 &&
                            pagedContacts.map((contact) => (
                                <ContactCard
                                    key={contact.id}
                                    name={contact.name}
                                    phone={contact.phone}
                                    email={contact.email}
                                />
                            ))}
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
                    <small>&copy; 2025 Looney Phonebook. All rights reserved.</small>
                </footer>

                <AddContactModal
                    show={showAdd}
                    onClose={() => setShowAdd(false)}
                    onAdd={handleAddContact}
                />
            </main>
    );
};

export default App;
