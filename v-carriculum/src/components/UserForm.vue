<template>
    <form class="user-form" @submit.prevent="onSubmit">
        <div>
            <p>Username</p>
            <input type="text" v-model="username" placeholder="Name" />
            <p class="error">{{ usernameErrorMessage }}</p>
        </div>
        <div>
            <p>Password</p>
            <input type="password" v-model="password" placeholder="Password" />
            <p class="error">{{ passwordErrorMessage }}</p>
        </div>
        <button type="submit" :disabled="!isFormValid">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import { useUserStore } from '../store/useUserStore';
const schema = yup.object({
    username: yup.string().required("Username is required").min(3, "Username must be at least 3 characters long").test(
        'unique',
        'Username is already taken',
        function (value) {
            // const response = await fetch(`https://api.example.com/users?username=${value}`);
            // const data = await response.json();
            // return data.name != value
            return true
        }
    ),
    password: yup.string().required().min(6),
})

const { handleSubmit, isSubmitting } = useForm({
    validationSchema: schema,
})
const { value: username, errorMessage: usernameErrorMessage } = useField<string>('username');
const { value: password, errorMessage: passwordErrorMessage } = useField<string>('password');
// const { value: confirmPassword, errorMessage: confirmPasswordErrorMessage } = useField<string>('confirmPassword');

const userStore = useUserStore()
const emit = defineEmits<{  
    (e: 'login'): void
}>()

const onSubmit = handleSubmit(values => {
    console.log("register with",values);
    userStore.login(values.username, values.password)
    emit('login')
});

const isFormValid = computed(() => {
    return !usernameErrorMessage.value && !passwordErrorMessage.value 
})
</script>

<style scoped>
.user-form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
}

.user-form input {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 80%;
}

.user-form p {
    margin: 0;
    margin-bottom: 5px;
}

.user-form button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #000;
    color: #fff;
    width: 100%;
}

.user-form .error {
    color: red;
}
</style>

