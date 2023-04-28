import React from "react";
import Filter from "components/Form/Filter";
import Form from "components/Form/Form";
import Contacts from "components/Form/Contacts";

function App ( ){
  return (
        <div className="App">
          <Form />
          <Filter />
          <Contacts />
        </div>
  );
}

export default App;