import "./index.css";
import { getUsers, deleteUser } from "./api/userApi";

getUsers().then((result) => {
  let usersBody = "";
  result.forEach((user) => {
    console.log(user);
    usersBody += `<tr>
    <tr>
      <td><a href="#" data-id="${user.id}" class="deleteuser">Delete</a></td>
    </tr>
    <td>${user.id}</td>
    <td>${user.firstName}</td>
    <td>${user.lastName}</td>
    <td>${user.email}</td>
  </tr>`;
  });
  global.document.getElementById("users").innerHTML = usersBody;
  const deleteLinks = global.document.getElementsByClassName("deleteuser");
  Array.from(deleteLinks, (link) => {
    link.onclick = function (event) {
      console.log("working");

      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});
