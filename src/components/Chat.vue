<template>
    <div class="chat container">
        <h2 class="center teal-text">Ninja Chat</h2>
       <div class="card">
            <div class="card-content">
<<<<<<< HEAD
            <ul class="message" v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span class="teal-text">{{message.name}}</span>
                    <span class="grey-text text-darken-3">{{message.content}}</span>
                    <span  class="grey-text time">{{message.timestamp}}</span>
=======
            <ul class="message">
                <li v-for="message in messages" :key="message.id">
                    <span class="teal-text">{{message.name}}</span>
                    <span class="grey-text text-darken-3">{{message.content}}</span>
                    <span class="grey-text time">{{message.timestamp}}</span>
>>>>>>> f28fb8f160d4227a97ddb4e69408f2505aceb6a0
                </li>

            </ul>
        </div>
        <div class="card-action">
            <NewMessage :name="name"/>
        </div>
       </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
<<<<<<< HEAD
// eslint-disable-next-line no-unused-vars
import moment from 'moment'
=======
>>>>>>> f28fb8f160d4227a97ddb4e69408f2505aceb6a0
    export default {
        name: "Chat",
        props: ['name'],
        components: {
            NewMessage
        },
        data (){
            return {
                messages:[]
            }
        },
        created(){
            let ref = db.collection('message').orderBy('timestamp')
            ref.onSnapshot(snapshot => {
                // console.log(snapshot.docChanges())
                snapshot.docChanges().forEach(change => {
<<<<<<< HEAD
                    console.log(change.doc)
=======
>>>>>>> f28fb8f160d4227a97ddb4e69408f2505aceb6a0
                  if(change.type == 'added'){
                      let doc = change.doc
                      this.messages.push({
                          id: doc.id,
                          name: doc.data().name,
                          content: doc.data().content,
<<<<<<< HEAD
                          timestamp: moment(doc.data().timestamp).format('lll')
                      })
                  }
                })

=======
                          timestamp: doc.data().timestamp
                      })
                  }  
                })
                
>>>>>>> f28fb8f160d4227a97ddb4e69408f2505aceb6a0
            })
        }
    }
</script>

<style>
.chat h2{
font-size: 2.6em;
margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
}
.chat .time{
    display: block;
    font-size: 0.8em;
}
    .message{
        max-height: 300px;
        overflow: auto;
    }
    .message::-webkit-scrollbar{
        width: 3px;
    }
    .message::-webkit-scrollbar-track{
        background: #ddd;
    }
    .message::-webkit-scrollbar-thumb{
        background: #aaa;
    }
</style>