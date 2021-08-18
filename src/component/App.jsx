import React from "react";
import Header from "./Header";
import Footer  from "./Footer";
import Note from "./Note.jsx";
import notes from "../notes";

function App(){
    return (<div>
        <Header />
        {notes.map((createEntry) => (
            <Note
                key= {createEntry.key}
                title={createEntry.title}
                content={createEntry.content}
            />
        ))}
        <Footer /> 
    </div>);
}

export default App;