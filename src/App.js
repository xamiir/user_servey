// import { data } from 'autoprefixer';
import { useState } from "react";
import "./App.css";
import AddPerson from "./Components/AddPerson";
import Card from "./Components/UI/Card";
import UserList from "./Components/UserList";

const App = () => {
  const [theme, setTheme] = useState("#fafafa");
  const themeSwicher = theme == "#fafafa" ? "#64748b" : "#fafafa";
  const changeTheme = () => {
    setTheme(themeSwicher);
  };
  const [userList, setUserList] = useState([]);

  const createPersonHandler = (data) => {
    const id = Math.random() * 1000;
    setUserList((prevPersons) => {
      return [
        ...prevPersons,
        {
          id: id,
          ...data,
        },
      ];
    });
  };

  const deletePerson = (user) => {
    setUserList((prevState) => {
      const deleteUser = prevState.filter((data) => data.id != user.id);
      return deleteUser;
    });
  };

  return (
    <div>
      <section
        className="bg-blue-50 h-full w-screen pt-16 font-nunito flex  flex-col"
        style={{ background: theme }}
      >
        <span onClick={changeTheme}>{theme == "#fafafa" ? "☀" : "😂"}</span>
        <AddPerson onAddPerson={createPersonHandler} />
        <UserList users={userList} onDelete={deletePerson} />
      </section>
    </div>
  );
};

export default App;
