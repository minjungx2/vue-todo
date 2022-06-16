<template>
    <div class="inputBox shadow">
        <input 
        type="text" 
        v-model="newTodoItem"
        placeholder="할 일을 입력해주세요"
        v-on:keyup.enter="addTodo"
        >
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal 
        :show="showModal"
        :alertMsg="alertMsg"
        @close="showModal = false"
        >
        </modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false,
            alertMsg: ''
        }
    },

    components: {
        Modal: Modal
    },

    methods: {
        addTodo() {
            if (this.newTodoItem !== "") {
                let value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput();
            }  else {
                this.showModal = !this.showModal;
                this.alertMsg = "할 일을 입력해주세요!"
            }
        },

        clearInput() {
            this.newTodoItem = "";
        }
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}
.inputBox input {
    border-style: none;
    font-size: 0.9rem;
}
.addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 epx 5px 0;
}
.addBtn {
    color: white;
    vertical-align: middle;
}
</style>
