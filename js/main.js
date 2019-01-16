(() => {
 // component will go here

 //every component we design is like a mini vue instance

 const liveuser = {
     props: ['first_name', 'last_name', 'role'], //property inside a component (refers to what is in the user tag in html)
     template: "#activeuser",

     methods: {
         logChildMsg() {
             console.log("hello from the child");
         },

         runParentFunc() {
             this.$emit('passfunccallup', 'hello') //emitting an event in the child component, then catch the event, then you can do whatever u want in the main vue model
         }
     },

     created: function(){
         console.log('child component is live');
     }
 };

 const vm = new Vue({
     el: '#app',

     data: {
         message: "sup from vue!"
     },

     created: function() {
         console.log('The parent is live');
     },

     methods: {
         logParent(message) {
             console.log("from the parent", message);
         },

         logMainMessage(message) {
             console.log("called from inside a child, lives in the parent", message);
         }
     },

     components: {
        user: liveuser //looking at the component on the top of the page
     }
 })

})();