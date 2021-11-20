import React, { useState, useEffect } from "react";
import { Button, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { collection, getDocs } from "firebase/firestore";
import firebase from "../database/firebase";

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  const loadData = async () => {
    const querySnapshot = await getDocs(collection(firebase.db, "users"));
    const user = [];
    querySnapshot.forEach((doc) => {
      const { name, email, phone } = doc.data();
      user.push({
        id: doc.id,
        name,
        email,
        phone,
      });
    });
    setUsers(user);
  };

  useEffect(() => {
    loadData();
  }, [users]);

  return (
    <ScrollView>
      <Button
        onPress={() => props.navigation.navigate("CreateUserScreen")}
        title="Create User"
      />

      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Chevron />
            <Avatar
              source={{
                uri: "https://scontent.fmex33-1.fna.fbcdn.net/v/t1.6435-9/67124140_1210923905756276_6300334341645926400_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEgVrCteF7wMnq0OF7e5SoJDNsnDiSuKb0M2ycOJK4pvToSH7bPFIOzuqxzbPYR5Zjjv7fFFrgv1zA9nPnjIavA&_nc_ohc=cxAQ1pVzonwAX9UCYWP&_nc_ht=scontent.fmex33-1.fna&oh=20634db4220819381ed6afa59b21171d&oe=61BD9937",
              }}
              rounded
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UsersList;
