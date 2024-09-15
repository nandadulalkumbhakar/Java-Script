import React from "react";

const App=()=>{
    return( <form>
        <h3>Name:</h3><input type="text"/>
        <h3>Email:</h3><input type="email"/>
        <h3>Password:</h3><input type="Password"/>
        <h3>Address:</h3><textarea></textarea>
        <button type="submit">Submit Form</button>
    </form>
    );
};

export default App;