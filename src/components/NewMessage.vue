<template>
<div class="new-message">
    <form @submit.prevent="addMessage">
        <label for="new-message">New Message (enter to add):</label>
        <input type="text" name="new-message" v-model="newMessage">
        <p class="red-text" v-if="feedback">{{feedback}}</p>
    </form>
</div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'NewMessage',
  props: ['name'],
  data () {
    return {
      newMessage: null,
      feedback:null
    }
  },
  methods:{
   addMessage(){
      //  console.log(this.newMessage, this.name, Date.now())
      if(this.newMessage){
        db.collection('message').add({
          content: this.newMessage,
          name: this.name,
<<<<<<< HEAD
          timestamp: Date.now()
=======
          timestamps: Date.now()
>>>>>>> f28fb8f160d4227a97ddb4e69408f2505aceb6a0
        }).catch(err =>{
          console.log(err)
        })
        this.newMessage = null
        this.feedback = null
      }else{
        this.feedback="You must enter a message in order to send"
      }
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>