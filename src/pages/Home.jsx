import BlockedUsers from "../component/BlockedUsers";
import FriendList from "../component/FriendList";
import FriendRequest from "../component/FriendRequest";
import GroupList from "../component/GroupList";
import MyGroups from "../component/MyGroups";
import UserList from "../component/UserList";

const Home = () => {

  let data=JSON.parse(localStorage.getItem("user"));
  console.log(data.name);

  return (
    <section className=" flex py-9 w-full justify-around">
      <div>
        <GroupList />
        <FriendRequest />
      </div>
      <div>
        <FriendList />
        <MyGroups />
      </div>
      <div>
        <UserList />
        <BlockedUsers />
      </div>
    </section>
  );
};

export default Home;
