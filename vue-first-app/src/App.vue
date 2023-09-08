<template>
  <section>
    <header><h1>My friends</h1></header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact
          v-for = "friend in friends"
          :key = "friend.id"
          :id = 'friend.id'
          :name = "friend.name"
          :phone-number = "friend.phone"
          :email-address = "friend.email"
          :is-favorite = "friend.isFavorite"
          @toggle-favorite = "toggleFavoriteStatus"
          @delete="deleteContact"
      ></friend-contact>
    </ul>
  </section>

  <section>
    <the-student v-for="std in students" :id="std.id" :name="std.name" :key="std.id" @delete-student="deleteAndChangeData">
    </the-student>
    <div>{{test ? 'is true' : 'is false'}}</div>
  </section>
</template>



<script>
import TheStudent from "@/components/TheStudent.vue";
  export default {
    components: {
      TheStudent
    },
    data() {
      return {
        students: [
          {id: 1, name: 'manuel'},
          {id: 2, name: 'julie'},
          {id: 3, name: 'julie'},
          {id: 4, name: 'julie'},
          {id: 5, name: 'julie'},
          {id: 6, name: 'julie'},
        ],
        test: false,
        friends: [
          {
            id: 'manuel',
            name: 'Manuel Lorenz',
            phone : '123 3423 42342',
            email: 'manuel@localhost.com',
            isFavorite: true
          },
          {
            id: 'julie',
            name: 'Julie Jones',
            phone : '432 7632 43216',
            email: 'julie@localhost.com',
            isFavorite: false
          }
        ]
      };
    },
    methods: {
      deleteAndChangeData(id) {
        console.log('id :: ', id);
        const stds = this.students.filter(student => student.id !== id);
        this.students = stds;

        this.test = !this.test;


      },
      getNumberOfStudents() {
        return `The number of students is ${this.students.length}`
      },
      toggleFavoriteStatus(friendId) {
        const identifiedFriend = this.friends.find(friend => friend.id === friendId);
        identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
      },
      addContact(name, phone, email) {
        const newFriendContact = {
          id: new Date().toISOString(),
          name: name,
          phone: phone,
          email: email,
          isFavorite: false
        };
        this.friends.push(newFriendContact);
      },
      deleteContact(friendId) {
        this.friends = this.friends.filter(friend => friend.id !== friendId);
      }
    }
  }
</script>



<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form{
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

</style>